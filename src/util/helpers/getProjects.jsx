
export default async function getProjects(){
    const res = await fetch("https://api.github.com/users/ronishrohan/repos")
    let data = await res.json()
    data = data.filter(repo => repo.homepage != null)
    data.sort((a,b) => {
        const date1 = new Date(a.pushed_at)
        const date2 = new Date(b.pushed_at)
        if(date1 < date2){
            return 1
        }
        else{
            return -1
        }

    })
    

    
    return data;
}