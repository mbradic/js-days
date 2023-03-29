export default async function getAllUsers() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')

    if (!res.ok) throw new Error('Chyba při načítání seznamu uživatelů')

    return res.json()
}