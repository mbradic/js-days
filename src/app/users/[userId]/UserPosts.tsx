import { Post } from "@/entities"

type Props = {
    promise: Promise<Post[]>
    // posts: Post[]
}

export default async function UserPosts({ promise }: Props) {  //{posts}: Props) { 
    const posts = await promise

    const content = posts.map(post => {
        return (
            <article key={post.id}>
                <h2>{post.title}</h2>
                <p>{post.body}</p>
                <br />
            </article>
        )
    })

    return <>{content}</>
}