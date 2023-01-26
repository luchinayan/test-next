import MessagesBoard from "@/components/messagesBoard";

export default function Messages() {
    return <MessagesBoard/>

}
export async function getServerSideProps() {
    const res = await fetch(`${process.env.REACT_APP_API_URL}/api/image?type=OurCavaliers`)
    const allData = await res.json()
    return {props: {allData}}
}
