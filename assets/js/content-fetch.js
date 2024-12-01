

import {ContentJsonData, get_arr_data} from './function.js';

// let thedata = await ContentJsonData('Worked_across');
// console.log(thedata)

let img_path = 'assets/images/'
const about_content_grid = document.querySelector('.about_content_grid');

about_img_content()
 Work_exp();
 academic_journey()
 professional_badges()
 Work()

 
//  About Images/Content
function  about_img_content(){
   ContentJsonData("About_Content")
  .then(data => {
      let about_img_wrap = document.querySelector('.about_img_wrap');
    let content_wrap = document.createElement('div');
        content_wrap.setAttribute('class', 'content_wrap');
    if(data[0]._comment !== ''){
          about_content_grid.append(content_wrap);
    }

    let content_wrap_title =  `${data[0].title !== '' ? `<h2 class="sub_main_title" data-aos="fade-up" data-aos-easing="linear">${data[0].title}</h2> `: ''} `;
        content_wrap.innerHTML = content_wrap_title;
    let data_arr = data[1].Images;
    // console.log(data_arr)

        let about_content = document.createElement('div')
            about_content.setAttribute('class', 'about_content medium_text')
            about_content.setAttribute('data-aos', 'fade-up')
            about_content.setAttribute('data-aos-easing', 'linear')
            about_content.innerHTML = data[2].Content;
            data[2].Content === ' ' || data[2].Content === undefined ? '' : content_wrap.appendChild(about_content);
      

    data_arr.forEach(thedata => {
    //   console.log(thedata.image_name)
      let img_wrap = document.createElement('div');
          img_wrap.setAttribute('class', 'img_wrap');
          img_wrap.setAttribute('data-aos', 'fade-up')
          img_wrap.setAttribute('data-aos-easing', 'linear')
      let about_img_tag = document.createElement('img');
          about_img_tag.setAttribute('src',` ${img_path}${thedata.image_name}` )
          about_img_tag.setAttribute('alt', thedata.alt_tag)

    thedata.image_name === ' ' || thedata.image_name === undefined ? '' : about_img_wrap.appendChild(img_wrap);
    thedata.image_name === ' ' || thedata.image_name === undefined ? '' : img_wrap.appendChild(about_img_tag);
      
    })
    

  })
  .catch(error => {
    console.error("Error:", error); 
  });
 
   
}
//  Work Exp
function  Work_exp(){
   ContentJsonData("Worked_across")
  .then(data => {
    // console.log(data);
    let content_wrap = document.createElement('div');
        content_wrap.setAttribute('class', 'content_wrap');
    if(data[0]._comment !== ''){
          about_content_grid.append(content_wrap);
    }

    let content_wrap_title =  `${data[0].title !== '' ? `<h2 class="sub_main_title" data-aos="fade-up" data-aos-easing="linear">${data[0].title}</h2> `: ''} `;
        content_wrap.innerHTML = content_wrap_title;
    let data_arr = data[1].jobs;

        let edu_exp_skills_wrap = document.createElement('div')
            edu_exp_skills_wrap.setAttribute('class', 'edu_exp_skills_wrap')
            edu_exp_skills_wrap.setAttribute('data-aos', 'fade-up')
            edu_exp_skills_wrap.setAttribute('data-aos-easing', 'linear')
            content_wrap.appendChild(edu_exp_skills_wrap);
    
      

    data_arr.forEach(thedata => {
      // console.log(thedata)
      let inner_item = document.createElement('div');
          inner_item.setAttribute('class', 'inner_item');
      let EES_content_wrap = document.createElement('div');
          EES_content_wrap.setAttribute('class', 'EES_content_wrap');
      let EES_date_wrap = document.createElement('div');
          EES_date_wrap.setAttribute('class', 'EES_date_wrap');

      let mini_title = document.createElement('p');
          mini_title.setAttribute('class', 'mini_title');
          mini_title.textContent = thedata.role;
      let place_deg_wrap = document.createElement('p');
          place_deg_wrap.setAttribute('class', 'place_deg_wrap medium_text');
          place_deg_wrap.textContent = `@ ${thedata.company}`;
      let date_text = document.createElement('p');
          date_text.setAttribute('class', 'medium_text');
          date_text.textContent = thedata.startEndDate;


    edu_exp_skills_wrap.append(inner_item);
    thedata.role === ' ' || thedata.role === undefined ? '' : inner_item.append(EES_content_wrap);
    thedata.role === ' ' || thedata.startEndDate === undefined ? '' : inner_item.append(EES_date_wrap);
    thedata.role === ' ' || thedata.role === undefined ? '' : EES_content_wrap.append(mini_title);
    thedata.company === ' ' || thedata.company === undefined ? '' : EES_content_wrap.append(place_deg_wrap);
    thedata.startEndDate === ' ' || thedata.startEndDate === undefined ? '' : EES_date_wrap.append(date_text);
      
    })
    

  })
  .catch(error => {
    console.error("Error:", error); 
  });
 
   
}
// Academic Journey
function  academic_journey(){
 ContentJsonData("academic_journey")
.then(data => {
  // console.log(data);
  let content_wrap = document.createElement('div');
      content_wrap.setAttribute('class', 'content_wrap');
  if(data[0]._comment !== ''){
        about_content_grid.append(content_wrap);
  }

  let content_wrap_title =  `${data[0].title !== '' ? `<h2 class="sub_main_title" data-aos="fade-up" data-aos-easing="linear">${data[0].title}</h2> `: ''} `;
      content_wrap.innerHTML = content_wrap_title;
  let data_arr = data[1].Edu;

      let edu_exp_skills_wrap = document.createElement('div')
          edu_exp_skills_wrap.setAttribute('class', 'edu_exp_skills_wrap')
          edu_exp_skills_wrap.setAttribute('data-aos', 'fade-up')
          edu_exp_skills_wrap.setAttribute('data-aos-easing', 'linear')
          content_wrap.appendChild(edu_exp_skills_wrap);
  
    

  data_arr.forEach(thedata => {
    // console.log(thedata)
    let inner_item = document.createElement('div');
        inner_item.setAttribute('class', 'inner_item');
    let EES_content_wrap = document.createElement('div');
        EES_content_wrap.setAttribute('class', 'EES_content_wrap');
    let EES_date_wrap = document.createElement('div');
        EES_date_wrap.setAttribute('class', 'EES_date_wrap');

    let mini_title = document.createElement('p');
        mini_title.setAttribute('class', 'mini_title');
        mini_title.textContent = thedata.title;
    let place_deg_wrap = document.createElement('p');
        place_deg_wrap.setAttribute('class', 'place_deg_wrap medium_text');
        place_deg_wrap.textContent = `@ ${thedata.deg}`;
    let grade_text = document.createElement('p');
        grade_text.setAttribute('class', 'grade_text text_small');
        grade_text.textContent = thedata.grade;
    let date_text = document.createElement('p');
        date_text.setAttribute('class', 'medium_text');
        date_text.textContent = thedata.startEndDate;


  edu_exp_skills_wrap.append(inner_item);
  thedata.title === ' ' || thedata.title === undefined ? '' : inner_item.append(EES_content_wrap);
  thedata.title === ' ' || thedata.startEndDate === undefined ? '' : inner_item.append(EES_date_wrap);
  thedata.title === ' ' || thedata.title === undefined ? '' : EES_content_wrap.append(mini_title);
  thedata.deg === ' ' || thedata.deg === undefined ? '' : EES_content_wrap.append(place_deg_wrap);
  thedata.grade === ' ' || thedata.grade === undefined ? '' : EES_content_wrap.append(grade_text);
  thedata.startEndDate === ' ' || thedata.startEndDate === undefined ? '' : EES_date_wrap.append(date_text);
    
  })
  

})
.catch(error => {
  console.error("Error:", error); 
});

 
}
// Professional Badges
function  professional_badges(){
 ContentJsonData("professional_badges")
.then(data => {
  // console.log(data);
  let content_wrap = document.createElement('div');
      content_wrap.setAttribute('class', 'content_wrap');
  if(data[0]._comment !== ''){
        about_content_grid.append(content_wrap);
  }

  let content_wrap_title =  `${data[0].title !== '' ? `<h2 class="sub_main_title" data-aos="fade-up" data-aos-easing="linear">${data[0].title}</h2> `: ''} `;
      content_wrap.innerHTML = content_wrap_title;
  let data_arr = data[1].pro_badges;

      let edu_exp_skills_wrap = document.createElement('div')
          edu_exp_skills_wrap.setAttribute('class', 'edu_exp_skills_wrap')
          edu_exp_skills_wrap.setAttribute('data-aos', 'fade-up')
          edu_exp_skills_wrap.setAttribute('data-aos-easing', 'linear')
          content_wrap.appendChild(edu_exp_skills_wrap);
  
    

  data_arr.forEach(thedata => {
    // console.log(thedata)
    let inner_item = document.createElement('div');
        inner_item.setAttribute('class', 'inner_item');
    let EES_content_wrap = document.createElement('div');
        EES_content_wrap.setAttribute('class', 'EES_content_wrap');

    let mini_title = document.createElement('p');
        mini_title.setAttribute('class', 'mini_title');
        mini_title.textContent = thedata.title;
    let place_deg_wrap = document.createElement('p');
        place_deg_wrap.setAttribute('class', 'place_deg_wrap medium_text');
        place_deg_wrap.textContent = `@ ${thedata.place}`;
    let date_text = document.createElement('p');
        date_text.setAttribute('class', 'text_small');
        date_text.textContent = thedata.startEndDate;
    let credential = document.createElement('p');
        credential.setAttribute('class', 'text_small');
        credential.textContent = thedata.credential;
    let view_credential = document.createElement('a');
        view_credential.setAttribute('class', 'about_inner_btn');
        view_credential.setAttribute('href', thedata.credential_link);
        view_credential.setAttribute('target', '_blank');
        view_credential.innerHTML = '<span class="title">View credential</span><span class="icon"><i class="fa-solid fa-arrow-up-right-from-square"></i></span>';


  edu_exp_skills_wrap.append(inner_item);
  thedata.title === ' ' || thedata.title === undefined ? '' : inner_item.append(EES_content_wrap);
  thedata.title === ' ' || thedata.title === undefined ? '' : EES_content_wrap.append(mini_title);
  thedata.place === ' ' || thedata.place === undefined ? '' : EES_content_wrap.append(place_deg_wrap);
  thedata.startEndDate === ' ' || thedata.startEndDate === undefined ? '' : EES_content_wrap.append(date_text);
  thedata.credential === ' ' || thedata.credential === undefined ? '' : EES_content_wrap.append(credential);
  thedata.credential_link === ' ' || thedata.credential_link === undefined ? '' : EES_content_wrap.append(view_credential);
    
  })
  

})
.catch(error => {
  console.error("Error:", error); 
});

 
}
//  Work
function  Work(){
    ContentJsonData("Work_wrap")
   .then(data => {
    // console.log(data);
       let carousel_content_main_wrap = document.querySelector('.carousel_content_main_wrap');
       
     let data_arr = data[1]['Work_items_wrap'];
 
     data_arr.forEach(thedata => {
        // console.log(thedata['carousel_imgs'])
        let inner_item = document.createElement('div');
            inner_item.setAttribute('class', 'inner_item')
        let carousel_wrap = document.createElement('div');
            carousel_wrap.setAttribute('class', 'carousel_wrap');
            carousel_wrap.setAttribute('data-aos', 'fade-up');
            carousel_wrap.setAttribute('data-aos-easing', 'linear');
            let work_carousel_wrap = document.createElement('div');
                work_carousel_wrap.setAttribute('class', 'work_carousel_wrap owl-carousel owl-theme');
            
            let carousel_img_arr = thedata['carousel_imgs'];
            carousel_img_arr.forEach((el, list) => {
                // let img_path = 'https://kayla-tenise.netlify.app/assets/images/work/'
                let img_path = 'assets/images/work/'
                let item = document.createElement('div');
                    item.setAttribute('class', 'item');
                    let img_wrap = document.createElement('div');
                        img_wrap.setAttribute('class', 'img_wrap');
                    let img = document.createElement('img');
                    thedata['carousel_imgs'][list].link_only_name === 'true'? img.setAttribute('src', `${img_path}${thedata['carousel_imgs'][list].img}`) : img.setAttribute('src', `${thedata['carousel_imgs'][list].img}`);
                        
                    
                thedata['carousel_imgs'][list].img === '' || thedata['carousel_imgs'][list].img === undefined ? '' : work_carousel_wrap.appendChild(item);
                item.appendChild(img_wrap)
                img_wrap.appendChild(img)
                
            })

        let content_wrap = document.createElement('div');
            content_wrap.setAttribute('class', 'content_wrap');
            content_wrap.setAttribute('data-aos', 'fade-up');
            content_wrap.setAttribute('data-aos-easing', 'linear');
            let content_title = document.createElement('h2');
                content_title.setAttribute('class', 'sub_main_title')
                content_title.innerHTML = thedata['content_wrap'].title;
            let desc_wrap = document.createElement('div')
                desc_wrap.setAttribute('class', 'medium_text')
                desc_wrap.innerHTML = thedata['content_wrap'].description;
            let software_used_wrap = document.createElement('div');
                software_used_wrap.setAttribute('class', 'software_used_wrap')
                let softwere_used_title = document.createElement('h4');
                    softwere_used_title.setAttribute('class', 'mini_title text_bold softwere_used_title')
                    softwere_used_title.innerHTML = 'Software Used';
                    thedata['content_wrap']['button_wrap'][0].text !== ' ' ? software_used_wrap.appendChild(softwere_used_title) : '';
                    console.log(thedata['content_wrap']['button_wrap'].length)
                let softwere_btn_wrap = document.createElement('div');
                    softwere_btn_wrap.setAttribute('class', 'softwere_btn_wrap');

                let button_arr = thedata['content_wrap']['button_wrap'];
                button_arr.forEach((el, list) => {
                    // let img_path = 'assets/images/icons';
                    let button = document.createElement('button');
                        button.setAttribute('class', 'softwere_btn')
                    let icon = document.createElement('span');
                        icon.setAttribute('class', 'icon')
                        let img = document.createElement('img');
                        thedata['content_wrap']['button_wrap'][list].link_only_name === 'true'? img.setAttribute('src', `${img_path}/icons/${thedata['content_wrap']['button_wrap'][list].icon}`) : img.setAttribute('src', `${thedata['content_wrap']['button_wrap'][list].icon}`);
                    let softwere_text = document.createElement('span');
                        softwere_text.setAttribute('class', 'softwere_text')
                        softwere_text.innerHTML = thedata['content_wrap']['button_wrap'][list].text;

                thedata['content_wrap']['button_wrap'][list].text === ' ' || thedata['content_wrap']['button_wrap'][list].text === undefined ? '' : softwere_btn_wrap.appendChild(button);
                thedata['content_wrap']['button_wrap'][list].text === ' ' || thedata['content_wrap']['button_wrap'][list].text === undefined ? '' : button.appendChild(icon);
                thedata['content_wrap']['button_wrap'][list].icon === ' ' || thedata['content_wrap']['button_wrap'][list].icon === undefined? "": icon.appendChild(img)
                thedata['content_wrap']['button_wrap'][list].text === ' ' || thedata['content_wrap']['button_wrap'][list].text === undefined ? '' : button.appendChild(softwere_text);
                
                })
 
        Object.keys(thedata).length > 1 ? carousel_content_main_wrap.appendChild(inner_item) : '' ;
        Object.keys(thedata['carousel_imgs']).length > 0 ? inner_item.appendChild(carousel_wrap) : '' ;
        Object.keys(thedata['content_wrap']).length > 0 ? inner_item.appendChild(content_wrap) : '' ;
        thedata['carousel_imgs'].length > 0 ? carousel_wrap.append(work_carousel_wrap): '';
        thedata['content_wrap'].title === '' || thedata['content_wrap'].title === undefined ? '' : content_wrap.appendChild(content_title);
        thedata['content_wrap'].description === '' || thedata['content_wrap'].description === undefined ? '' : content_wrap.appendChild(desc_wrap);
        thedata['content_wrap']['button_wrap'].length > 0 ? content_wrap.appendChild(software_used_wrap) : '' ;
        thedata['content_wrap']['button_wrap'].length > 0 ? software_used_wrap.appendChild(softwere_btn_wrap) : '' ;

        $('.work_carousel_wrap').owlCarousel({
            loop:true,
            margin:10,
            nav:true,
            navText: ["<span> <i class='fa-solid fa-arrow-left-long'></i> </span>", "<span> <i class='fa-solid fa-arrow-right-long'></i> </span>"],
            dots:true,
            autoplay: false,
            slideTransition: 'ease',
            autoplayTimeout: 2000,
            autoplaySpeed: 2000,
            autoplayHoverPause: true,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },
                1000:{
                    items:1
                }
            }
        })

     })
     
 
   })
   .catch(error => {
     console.error("Error:", error); 
   });
  
    
 }

