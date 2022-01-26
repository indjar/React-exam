const AUTH_URL = `${process.env.REACT_APP_BASE_URL}/v1/content/skills`;

export class SkillsApi {
    static async getAll(token) {
        const res = await fetch(AUTH_URL, 
            {method: "GET", 
            headers: {authorization: `Bearer ${token}`}}
            );
        return res.json();
    }

    static async add(skills, token) {
        const res = await fetch(AUTH_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                authorization: `Bearer ${token}`
            },
            body: JSON.stringify(skills)
        })

        return res.json();
    }
}

