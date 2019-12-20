console.log(process)
let output = `
<h2 class='page-header'>App Version Data</h2>
<ul class = 'list-group'>
<li class='list-group-item'>Node: ${process.versions.node}<li>
<li class='list-group-item'>Chrome: ${process.versions.chrome}<li>
<li class='list-group-item'>Electron: ${process.versions.electron}<li>
</ul>

<h2 class='page-header'>System Specs</h2>
<ul class = 'list-group'>
<li class='list-group-item'>Platform: ${process.platform}<li>
<li class='list-group-item'>System Architecture: ${process.arch}<li>
<li class='list-group-item'>System Language: ${process.env.LANG}<li>  
<li class='list-group-item'>Total: ${process.getSystemMemoryInfo().total}<li>  

</ul>

<h2 class='page-header'>System Memory</h2>
<ul class = 'list-group'>
<li class='list-group-item'>Total: ${process.getSystemMemoryInfo().total}<li>  
<li class='list-group-item'>Free: ${process.getSystemMemoryInfo().free}<li>   
</ul>

`;
document.getElementById('output').innerHTML = output