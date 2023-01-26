import MessagesBoard from "@/components/messagesBoard";

export default function Messages({allData}) {
    return <MessagesBoard data={allData}/>

}
export async function getServerSideProps() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/message/getMessages`)
    const allData = await res.json()
    return {props: {allData}}
}
