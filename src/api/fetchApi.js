const TOKEN_API = 'a9ba770b55fa82c574ef925b19267701a2da2294';
const URL_API = 'https://api.todoist.com/rest/v1';

export default async (url, method = 'GET', data) => {
    try {
        const response = await fetch(`${URL_API}/${url}`, {
            headers: {
                'Authorization': `Bearer ${TOKEN_API}`,
                'Content-Type': 'application/json'
            }
        });

        if (response.ok) {
            return await response.json();
        } else {
            // return Promise.reject('Wrong fetching status');
            throw new Error('Wrong fetching status');
        }

    } catch(e) {
        console.error(`Error occurred while fetching: ${e.message}`);
        throw e;
    }
}