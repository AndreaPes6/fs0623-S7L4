const apiKey = 'XBn3wHQWGcRDAOsxgOf9uNOqm7zHcdWrGZCU1zwJN36cbsaZ58wyAeyl'
const apiUrlDog = 'https://api.pexels.com/v1/search?query=dog'
const apiUrlCat = 'https://api.pexels.com/v1/search?query=cat'


async function fetchDog() {
    try {
        const response = await fetch(apiUrlDog, {
            method: 'GET',
            headers: {
                'Authorization': apiKey,
            },
        })

        if (!response.ok) {
            throw new Error('Errore nella richiesta: ${response.status}')
        }

        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Errore durante la richiesta:', error)
    }
}

async function fetchCat() {
    try {
        const response = await fetch(apiUrlCat, {
            method: 'GET',
            headers: {
                'Authorization': apiKey,
            },
        })

        if (!response.ok) {
            throw new Error('Errore nella richiesta: ${response.status}')
        }

        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Errore durante la richiesta:', error)
    }
}


fetchCat()
fetchDog()

