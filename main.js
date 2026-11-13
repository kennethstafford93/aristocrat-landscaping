const services = {
  'lawn-maintenance': {name:'Lawn Maintenance', headline:'A lawn worth coming home to.', summary:'Consistent care for a clean, healthy-looking property. Tell us what your lawn needs and we’ll be in touch about next steps.', image:'assets/images/front-lawn.webp', alt:'Freshly striped front lawn at a South Jersey residence', points:['Mowing and precise edging','Regular property upkeep','Neat, polished curb appeal']},
  'landscaping': {name:'Landscaping', headline:'Outdoor spaces, thoughtfully cared for.', summary:'From refreshing existing beds to enhancing your landscape, we help make your property look its best.', image:'assets/images/backyard-pool.webp', alt:'Maintained backyard lawn and landscaping with an above-ground pool', points:['Landscape refreshes and improvements','Planting bed care','Property beautification']},
  'mulching': {name:'Mulching', headline:'A beautiful finish, down to the details.', summary:'Fresh mulch brings contrast, definition, and a polished appearance to landscape beds.', image:'assets/images/commercial-mulch.webp', alt:'Fresh dark mulch around a commercial sign and tree', points:['Fresh mulch installation','Bed edge definition','Residential and commercial bed refreshes']},
  'trimming': {name:'Trimming', headline:'Every edge makes a difference.', summary:'A well-kept landscape starts with clean lines and neatly maintained greenery.', image:'assets/images/backyard-play.webp', alt:'Neatly maintained backyard with green grass, mature trees and playset', points:['Shrub and hedge trimming','Ornamental plant upkeep','Tidy, intentional appearance']},
  'stone': {name:'Stone', headline:'Natural texture. Lasting impression.', summary:'Add texture and visual interest with decorative stone accents and landscape bed finishes. Share your vision with us.', image:'assets/images/backyard-pool.webp', alt:'Landscape property featuring decorative stone around a pool area', points:['Decorative stone accents','Landscape bed stone','Stone border and finishing ideas']}
};
const menuButton=document.querySelector('.menu-toggle');
const menu=document.querySelector('.nav-links');
if(menuButton&&menu){menuButton.addEventListener('click',()=>{const open=menu.classList.toggle('open');menuButton.setAttribute('aria-expanded',String(open));menuButton.textContent=open?'✕':'☰';});menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{menu.classList.remove('open');menuButton.setAttribute('aria-expanded','false');menuButton.textContent='☰';}));}
const params=new URLSearchParams(location.search);
const key=params.get('service');
const item=key&&Object.prototype.hasOwnProperty.call(services,key)?services[key]:null;
if(document.body.dataset.page==='service'){
  const s=item||services['lawn-maintenance'];
  document.title=s.name+' | Aristocrat Landscaping';
  const t={ 'service-label':s.name,'service-title':s.headline,'service-description':s.summary,'service-detail-heading':s.name};
  Object.entries(t).forEach(([id,value])=>{const node=document.getElementById(id);if(node)node.textContent=value;});
  const img=document.getElementById('service-image');if(img){img.src=s.image;img.alt=s.alt;}
  const list=document.getElementById('service-points');if(list){s.points.forEach(point=>{const li=document.createElement('li');li.textContent=point;list.appendChild(li);});}
}
for(const form of document.querySelectorAll('.quote-form')){
  const select=form.querySelector('select[name="service"]');
  if(select&&item)select.value=item.name;
  const next=form.querySelector('input[name="_next"]');
  if(next){next.value=new URL('thank-you.html',location.href).href;}
  const subject=form.querySelector('input[name="_subject"]');
  form.addEventListener('submit',()=>{if(subject&&select)subject.value='Aristocrat Landscaping quote request: '+select.value;});
}

const year=document.getElementById('year');if(year)year.textContent=new Date().getFullYear();
