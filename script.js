function guessNationality() {
    const name = document.getElementById("input").value;
    if (!name) return;
    
    fetch(`https://api.nationalize.io/?name=${name}`)
        .then(response => response.json())
        .then(data => {
            const resultDiv = document.getElementById("div");
            resultDiv.innerHTML = "<h3>Possible Nationalities:</h3>";
            
            let list = "<ol>";
            data.country.forEach(country => {
                const flagUrl = `https://flagcdn.com/16x12/${country.country_id.toLowerCase()}.png`;
                list += `<li><img class='flag' src='${flagUrl}' alt='${country.country_id} flag'> ${country.country_id} ${Math.round(country.probability * 100)}%</li>`;
            });
            list += "</ol>";
            resultDiv.innerHTML += list;
        })
        .catch(error => console.error("Error fetching data:", error));
}