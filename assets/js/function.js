
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

