const url = "https://jsonplaceholder.typicode.com/users";

fetch(url)
    .then(response => {
        if (response.ok) return response.json()
    })
    .then(data => {
        for (let i = 0; i < data.length; i++) {
            let div = document.createElement("div")
            div.style.border = '5px solid white'
            div.style.display = 'flex'
            const { name, username, email, address: { street, suite, city, zipcode, geo: { lat, lng } }, phone, website, company: { name: companyName } } = data[i]
            console.log(lat);
            div.innerHTML = `
                <div class="item">
                    <img src="img/${i}.jpg" alt="">
                    <div>
                        <h3 class="info__title"><b>Name:<b/> ${name}</h3>
                        <h3 class="info__title"><b>User name:<b/> ${username}</h3>
                        <h3 class="info__title"><b>Email:<b/> ${email}</h3>
                        <h3 class="info__title"><b>Street:<b/> ${street}</h3>
                    </div>

                </div>
                <div>
                    <h3 class="info__title"><b>Suite:<b/> ${suite}</h3>
                    <h3 class="info__title"><b>City:<b/> ${city}</h3>
                    <h3 class="info__title"><b>Zipcode:<b/> ${zipcode}</h3>
                    <h3 class="info__title"><b>lat:<b/> ${lat}</h3>
                    <h3 class="info__title"><b>lng:<b/> ${lng}</h3>
                    <h3 class="info__title"><b>Phone:<b/> ${phone}</h3>
                    <h3 class="info__title"><b>Website:<b/> ${website}</h3>
                    <h3 class="info__title"><b>Company:<b/> ${companyName}</h3>
                </div>
            `
            div.classList.add('box')
            body.append(div)
        }
    })