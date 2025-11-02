const clique = () =>{
    let cels1 = document.querySelector(".cel1")
    let fahr1 = document.querySelector(".fah1")
    let kelv1 = document.querySelector(".kel1")
    let cels2 = document.querySelector(".cel2")
    let fahr2 = document.querySelector(".fah2")
    let kelv2 = document.querySelector(".kel2")
    let tempe = parseFloat(document.querySelector(".temp").value)
    let tot = document.querySelector(".total")

    if (cels1.checked && fahr2.checked){
        faren1 = (tempe*1.8)+32
        tot.textContent = `${faren1}°F` 
    } else if (cels1.checked && kelv2.checked){
        kelvi1 = tempe+273.15
        tot.textContent = `${kelvi1}°K`
    } else if(fahr1.checked && cels2.checked){
        celsiu1 = (tempe-32)/1.8
        tot.textContent = `${celsiu1}°C`
    } else if (fahr1.checked && kelv2.checked) {
        kelvi2 = (tempe-32)*(5/9)+273.15
        tot.textContent = `${kelvi2}°K`
    } else if (kelv1.checked && cels2.checked){
        celsiu2 = tempe-273.15
        tot.textContent = `${celsiu2}°C`
    } else if (kelv1.checked && fahr2.checked){
        faren2 = (tempe-273.25)*(9/5)+32
        tot.textContent = `${faren2}°F`
    } else if (cels1.checked && cels2.checked){
        tot.textContent = `${tempe}°C`
    } else if (fahr1.checked && fahr2.checked){
        tot.textContent = `${tempe}°F`
    } else {
        tot.textContent = `${tempe}°K`
    }
}