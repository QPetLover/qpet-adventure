const chapter=document.querySelector('#chapter'),variant=document.querySelector('#variant'),stage=document.querySelector('#stage'),status=document.querySelector('#status'),native=document.querySelector('#native');
const selected=new URL(location.href).searchParams;
if(/^[0-8]$/.test(selected.get('chapter')||''))chapter.value=selected.get('chapter');
if(/^[01]$/.test(selected.get('variant')||''))variant.value=selected.get('variant');
let player=null,generation=0;
function constrain(){variant.options[1].disabled=chapter.value==='0';if(chapter.value==='0')variant.value='0';}
const manifest=fetch('./reference-sources.json').then(response=>{if(!response.ok)throw new Error('Source manifest unavailable');return response.json();});
async function load(){
  const token=++generation;constrain();player?.remove();player=null;
  const file=`xmxd_${chapter.value}_${variant.value}.swf`;
  native.href=`https://qpetlover.cn/QPetGamesWeb/qpet-adventure/chapter${chapter.value}-v${variant.value}/`;
  history.replaceState(null,'',`?chapter=${chapter.value}&variant=${variant.value}`);
  status.textContent=`正在载入 ${file}…`;
  try{
    const sources=await manifest,source=sources.files.find(item=>item.file===file);
    if(!source)throw new Error('该角色原件未归档');
    // Each archived guard searches its full movie URL for literal historical
    // hosts. Keep every file's actual host context, including gcs.qq.com in
    // chapters 5–8. URLSearchParams would percent-encode ':'/'/' and fail it.
    const hosts=source.historicalHosts;
    if(!Array.isArray(hosts)||hosts.some(host=>!/^http:\/\/[a-z0-9.-]+$/.test(host)))throw new Error('历史来源清单无效');
    const query=hosts.map(host=>`archiveHost=${host}`).join('&');
    const url=new URL(`./${file}`,location.href).href+(query?`?${query}`:'');
    const response=await fetch(url);if(!response.ok)throw new Error(`HTTP ${response.status}`);
    const bytes=await response.arrayBuffer(),hash=Array.from(new Uint8Array(await crypto.subtle.digest('SHA-256',bytes)),value=>value.toString(16).padStart(2,'0')).join('');
    if(bytes.byteLength!==source.bytes||hash!==source.sha256)throw new Error('原件校验失败');
    if(token!==generation)return;
    const current=window.RufflePlayer.newest().createPlayer();player=current;stage.append(current);
    await current.ruffle(1).load({url,autoplay:'off',allowScriptAccess:true});
    if(token!==generation){current.remove();return;}
    current.ruffle(1).resume();
    status.textContent=`原件：${file} · ${source.bytes.toLocaleString()} 字节 · 校验通过`;
  }catch(error){if(token===generation)status.textContent=`原版载入失败：${error.message}`;console.error(error);}
}
chapter.addEventListener('change',constrain);
document.querySelector('#selection').addEventListener('submit',event=>{event.preventDefault();void load();});
void load();
