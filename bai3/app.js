let data = [
  {renderingEngine: "Gecko", browser: "Seamonkey 1.1", platform: "Win 98+ / OSX.2+", engineVersion: "1.8", cssGrade: "A"},
  {renderingEngine: "Webkit", browser: "Safari 3.0", platform: "OSX.4+", engineVersion: "522.1", cssGrade: "A"},
  {renderingEngine: "Webkit", browser: "Safari 2.0", platform: "OSX.4+", engineVersion: "419.3", cssGrade: "A"},
  {renderingEngine: "Webkit", browser: "Safari 1.3", platform: "OSX.3", engineVersion: "312.8", cssGrade: "A"},
  {renderingEngine: "Webkit", browser: "Safari 1.2", platform: "OSX.3", engineVersion: "125.5", cssGrade: "A"},
  {renderingEngine: "Webkit", browser: "S60", platform: "S60", engineVersion: "413", cssGrade: "A"},
  {renderingEngine: "Misc", browser: "PSP browser", platform: "PSP", engineVersion: "-", cssGrade: "C"},
  {renderingEngine: "Presto", browser: "Opera for Wii", platform: "Wii", engineVersion: "-", cssGrade: "A"},
  {renderingEngine: "Presto", browser: "Opera 9.5", platform: "Win 88+ / OSX.3+", engineVersion: "-", cssGrade: "A"},
  {renderingEngine: "Presto", browser: "Opera 9.2", platform: "Win 88+ / OSX.3+", engineVersion: "-", cssGrade: "A"},
  {renderingEngine: "Presto", browser: "Opera 9.0", platform: "Win 95+ / OSX.3+", engineVersion: "-", cssGrade: "A"},
  {renderingEngine: "Presto", browser: "Opera 8.5", platform: "Win 95+ / OSX.2+", engineVersion: "-", cssGrade: "A"},
  {renderingEngine: "Presto", browser: "Opera 8.0", platform: "Win 95+ / OSX.2+", engineVersion: "-", cssGrade: "A"},
  {renderingEngine: "Presto", browser: "Opera 7.5", platform: "Win 95+ / OSX.2+", engineVersion: "-", cssGrade: "A"},
  {renderingEngine: "Presto", browser: "Opera 7.0", platform: "Win 95+ / OSX.1+", engineVersion: "-", cssGrade: "A"},
  {renderingEngine: "Webkit", browser: "OmniWeb 5.5", platform: "OSX.4+", engineVersion: "420", cssGrade: "A"},
  {renderingEngine: "Presto", browser: "Nokia N800", platform: "N800", engineVersion: "-", cssGrade: "A"},
  {renderingEngine: "Presto", browser: "Nintendo DS browser", platform: "Nintendo DS", engineVersion: "8.5", cssGrade: "C/A1"},
  {renderingEngine: "Gecko", browser: "Netscape Navigator 9", platform: "Win 98+ / OSX.2+", engineVersion: "1.8", cssGrade: "A"},
  {renderingEngine: "Gecko", browser: "Netscape Browser 8", platform: "Win 98SE+", engineVersion: "1.7", cssGrade: "A"},
  {renderingEngine: "Gecko", browser: "Netscape 7.2", platform: "Win 95+ / Mac OS 8.6-9.2", engineVersion: "1.7", cssGrade: "A"},
  {renderingEngine: "Misc", browser: "NetFront 3.4", platform: "Embedded devices", engineVersion: "-", cssGrade: "A"},
  {renderingEngine: "Misc", browser: "NetFront 3.1", platform: "Embedded devices", engineVersion: "-", cssGrade: "C"},
  {renderingEngine: "Gecko", browser: "Mozilla 1.8", platform: "Win 98+ / OSX.1+", engineVersion: "1.8", cssGrade: "A"},
  {renderingEngine: "Gecko", browser: "Mozilla 1.7", platform: "Win 98+ / OSX.1+", engineVersion: "1.7", cssGrade: "A"},
  {renderingEngine: "Gecko", browser: "Mozilla 1.6", platform: "Win 95+ / OSX.1+", engineVersion: "1.6", cssGrade: "A"},
  {renderingEngine: "Gecko", browser: "Mozilla 1.5", platform: "Win 95+ / OSX.1+", engineVersion: "1.5", cssGrade: "A"},
  {renderingEngine: "Gecko", browser: "Mozilla 1.4", platform: "Win 95+ / OSX.1+", engineVersion: "1.4", cssGrade: "A"},
  {renderingEngine: "Gecko", browser: "Mozilla 1.3", platform: "Win 95+ / OSX.1+", engineVersion: "1.3", cssGrade: "A"},
  {renderingEngine: "Gecko", browser: "Mozilla 1.2", platform: "Win 95+ / OSX.1+", engineVersion: "1.2", cssGrade: "A"},
  {renderingEngine: "Gecko", browser: "Mozilla 1.1", platform: "Win 95+ / OSX.1+", engineVersion: "1.1", cssGrade: "A"},
  {renderingEngine: "Gecko", browser: "Mozilla 1.0", platform: "Win 95+ / OSX.1+", engineVersion: "1", cssGrade: "A"},
  {renderingEngine: "Misc", browser: "Lynx", platform: "Text only", engineVersion: "-", cssGrade: "X"},
  {renderingEngine: "Misc", browser: "Links", platform: "Text only", engineVersion: "-", cssGrade: "X"},
  {renderingEngine: "KHTML", browser: "Konqureror 3.5", platform: "KDE 3.5", engineVersion: "3.5", cssGrade: "A"},
  {renderingEngine: "KHTML", browser: "Konqureror 3.3", platform: "KDE 3.3", engineVersion: "3.3", cssGrade: "A"},
  {renderingEngine: "KHTML", browser: "Konqureror 3.1", platform: "KDE 3.1", engineVersion: "3.1", cssGrade: "C"},
  {renderingEngine: "Webkit", browser: "iPod Touch / iPhone", platform: "iPod", engineVersion: "420.1", cssGrade: "A"},
  {renderingEngine: "Trident", browser: "Internet Explorer 7", platform: "Win XP SP2+", engineVersion: "7", cssGrade: "A"},
  {renderingEngine: "Tasman", browser: "Internet Explorer 5.2", platform: "Mac OS 8-X", engineVersion: "1", cssGrade: "C"},
  {renderingEngine: "Tasman", browser: "Internet Explorer 5.1", platform: "Mac OS 7.6-9", engineVersion: "1", cssGrade: "C"},
  {renderingEngine: "Tasman", browser: "Internet Explorer 4.5", platform: "Mac OS 8-9", engineVersion: "-", cssGrade: "X"},
  {renderingEngine: "Trident", browser: "Internet Explorer 6", platform: "Win 98+", engineVersion: "6", cssGrade: "A"},
  {renderingEngine: "Trident", browser: "Internet Explorer 5.5", platform: "Win 95+", engineVersion: "5.5", cssGrade: "A"},
  {renderingEngine: "Trident", browser: "Internet Explorer 5.0", platform: "Win 95+", engineVersion: "5", cssGrade: "C"},
  {renderingEngine: "Trident", browser: "Internet Explorer 4.0", platform: "Win 95+", engineVersion: "4", cssGrade: "X"},
  {renderingEngine: "Misc", browser: "IE Mobile", platform: "Windows Mobile 6", engineVersion: "-", cssGrade: "C"},
  {renderingEngine: "Gecko", browser: "Firefox 3.0", platform: "Win 2k+ / OSX.3+", engineVersion: "1.9", cssGrade: "A"},
  {renderingEngine: "Gecko", browser: "Firefox 2.0", platform: "Win 98+ / OSX.2+", engineVersion: "1.8", cssGrade: "A"},
  {renderingEngine: "Gecko", browser: "Firefox 1.5", platform: "Win 98+ / OSX.2+", engineVersion: "1.8", cssGrade: "A"},
  {renderingEngine: "Gecko", browser: "Firefox 1.0", platform: "Win 98+ / OSX.2+", engineVersion: "1.7", cssGrade: "A"},
  {renderingEngine: "Gecko", browser: "Epiphany 2.20", platform: "Gnome", engineVersion: "1.8", cssGrade: "A"},
  {renderingEngine: "Misc", browser: "Dillo 0.8", platform: "Embedded devices", engineVersion: "-", cssGrade: "X"},
  {renderingEngine: "Gecko", browser: "Camino 1.5", platform: "OSX.3+", engineVersion: "1.8", cssGrade: "A"},
  {renderingEngine: "Gecko", browser: "Camino 1.0", platform: "OSX.2+", engineVersion: "1.8", cssGrade: "A"},
  {renderingEngine: "Trident", browser: "AOL browser (AOL desktop)", platform: "Win XP", engineVersion: "6", cssGrade: "A"},
  {renderingEngine: "Other browsers", browser: "All others", platform: "-", engineVersion: "-", cssGrade: "U"},
]
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
function renderPagination(){
  let pagination = `<li class="page-item ${currentPage === 1 ? 'disabled': ''}">
    <a class="page-link" href="#" tabindex="-1">Previous</a>
  </li>`;
  for(let i=1 ; i<=pages ; i++){
    pagination+=`<li class="page-item ${i===currentPage? 'active' : ''}"><a class="page-link" href="#">${i}</a></li>`;
  }
  pagination+=`<li class="page-item ${currentPage >= pages ? 'disabled': ''}"">
    <a class="page-link" href="#">Next</a>
  </li>`;
  return pagination;
}
function renderThead(){
  let thead = `<thead>
  <tr>`;
  let keys = Object.keys(data[0]);
  for(const key of keys){
    let temp = key.replace(/([A-Z])/g, ' $1');
    temp = capitalizeFirstLetter(temp);
    let icon = `<i class="fas fa-sort"></i>`;
    if(key == sortBy){
      icon = sortDirection == '-1' ? '<i class="fas fa-sort-amount-down-alt"></i>': '<i class="fas fa-sort-amount-down"></i>';
    } 
    thead+=`<th scope="col" ${key == sortBy ? `data-sorting="${sortDirection}"` : 'data-sorting="0"'} data-sort-key="${key}">${temp} ${icon}</th>`
  }
  thead+=`</tr></thead>`
  return thead;
}
function renderTbody(){
  let tbody = `<tbody>`;
  let dataRender = dataFiltered.slice((currentPage-1)*entries,(currentPage-1)*entries+entries);
  for(const row of dataRender){
    let tr = `<tr>`;
    for(const td in row){
      tr+=`<td>${row[td]}</td>`;
    }
    tr+=`</tr>`;
    tbody+=tr;
  }
  tbody+=`</tbody>`;
  return tbody;
}
function addEventListenerPagination(){
  $('#pagination li a').not(':first').not(':last').click(function (event){
    event.preventDefault();
    let to = parseInt($(this).text());
    currentPage = to;
    render();
  })
  $('#pagination li a:first').click(function (event){
    event.preventDefault();
    if(currentPage-1 < 1) currentPage=1;
    else currentPage--;
    render();
  })
  $('#pagination li a:last').click(function (event){
    event.preventDefault();
    if(currentPage+1 > pages) currentPage=pages;
    else currentPage++;
    render();
  })
}
function addEventListenerTableHeadSort(){
  $('#table thead th').click(function (event){
    sortBy = event.target.dataset.sortKey;
    let sorting = event.target.dataset.sorting;
    if(sorting == 0 || sorting == 1){
      if(sortBy === 'engineVersion'){
        dataFiltered.sort((a,b) => {
          let temp1 = Number(a[sortBy]) ? Number(a[sortBy]) : 0;
          let temp2 = Number(b[sortBy]) ? Number(b[sortBy]) : 0;
          return temp1-temp2;
        })
        data.sort((a,b) => {
          let temp1 = Number(a[sortBy]) ? Number(a[sortBy]) : 0;
          let temp2 = Number(b[sortBy]) ? Number(b[sortBy]) : 0;
          return temp1-temp2;
        })
      }
      else {
        dataFiltered.sort((a,b) => {
          return a[sortBy].localeCompare(b[sortBy]);
        })
        data.sort((a,b) => {
          return a[sortBy].localeCompare(b[sortBy]);
        })
      }
      sortDirection = '-1';
    }
    else {
      if(sortBy === 'engineVersion'){
        dataFiltered.sort((a,b) => {
          let temp1 = Number(a[sortBy]) ? Number(a[sortBy]) : 0;
          let temp2 = Number(b[sortBy]) ? Number(b[sortBy]) : 0;
          return temp2-temp1;
        })
        data.sort((a,b) => {
          let temp1 = Number(a[sortBy]) ? Number(a[sortBy]) : 0;
          let temp2 = Number(b[sortBy]) ? Number(b[sortBy]) : 0;
          return temp2-temp1;
        })
      }
      else {
        dataFiltered.sort((a,b) => {
          return b[sortBy].localeCompare(a[sortBy]);
        })
        data.sort((a,b) => {
          return b[sortBy].localeCompare(a[sortBy]);
        })
      }
      sortDirection = '1';
    }
    render();
  })
}
function renderShowingInfo(){
  if(dataFiltered.length < 1) return `Showing 0 to 0 of 0 entries${dataFiltered.length < data.length ? `(filtered from ${data.length} total entries)` : ''}`;
  else if(currentPage < pages) return `Showing ${(currentPage-1)*entries + 1} to ${(currentPage-1)*entries+entries} of ${dataFiltered.length} entries${dataFiltered.length < data.length ? `(filtered from ${data.length} total entries)` : ''}`;
  return `Showing ${(currentPage-1)*entries + 1} to ${dataFiltered.length} of ${dataFiltered.length} entries${dataFiltered.length < data.length ? `(filtered from ${data.length} total entries)` : ''}`
}
function render(){
  pages = Math.ceil(dataFiltered.length/entries);
  table.html(renderThead()+renderTbody());
  showingInfo.html(renderShowingInfo());
  pagination.html(renderPagination());
  addEventListenerTableHeadSort();
  addEventListenerPagination();
}

$('#selectEntries').on('change', function() {
  entries = parseInt(this.value);
  currentPage = 1;
  render();
});
$('#inputFilter').keyup(function(event) {
  inputSearch = event.target.value;
  currentPage = 1;
  filterData();
});
function filterData(){
  dataFiltered = data.filter((el) => {
    for(const key in el){
      if(el[key].toLowerCase().includes(inputSearch.toLocaleLowerCase())) return true;
    }
    return false;
  })
  render();
}

let table = $('#table');
let pagination = $('#pagination');
let showingInfo = $('#showingInfo');

let sortDirection = '0';
let entries = 10;
let currentPage = 1;
let inputSearch = '';
let sortBy = Object.keys(data[0])[0];
let dataFiltered = [...data];
let pages = Math.ceil(dataFiltered.length/entries)
render();
