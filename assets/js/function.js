
const url = 'assets/js/data.json';

export async function ContentJsonData(selected_data){
    try {
        let response = await fetch(url);
      //   console.log(response)
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }
    
        let json = await response.json();
        // console.log(json)
        let requited_data = json[selected_data];
        return requited_data;

      } catch (error) {
        console.error(error.message);
        return { error: error.message };
      }
}

// Get data from array [THIS CODE IS ON HOLD !WORKING]
export function get_arr_data(get_array_name,value){
  get_array_name.forEach(el => {
    // console.log(el[value])
    return el.value;
  })
}

export function get_url_data(data){
  const urlParams = new URLSearchParams(window.location.search);
  const page = urlParams.get(data); 
  return page;
}


// Opening Text animation
export function textAnimation(item){
  
  let text_arr = item.textContent.toString().split("")
  item.textContent = ' '
  text_arr.forEach((el, list) => {
    let inner_span = document.createElement('span');
        inner_span.setAttribute('class', 'ani_text_inner');
        inner_span.textContent = el;
    item.append(inner_span);

    setTimeout(() => {
      inner_span.style.cssText = `transform:translateY(0%); opacity:1; transition-delay:0.${list + 1}s`;
    }, 500);
  })
}

export function textAnimation_reverse(item){
  let text_arr = item.textContent.toString().split("")
  item.textContent = ' ';
  let Inn_spans = [];
  text_arr.forEach((el, list) => {
    let inner_span = document.createElement('span');
        inner_span.setAttribute('class', 'ani_text_inner');
        inner_span.textContent = el;
    item.append(inner_span);
    Inn_spans.push(inner_span);
  })
  setTimeout(() => {
    for(let i = text_arr.length - 1; i >= 0; i--){
      Inn_spans[i].style.cssText = `transform:translateY(0%); opacity:1; transition-delay:0.${Inn_spans.length - i}s`;
      // transition-delay:0.${i + 1}s
    }
  }, 500);
}