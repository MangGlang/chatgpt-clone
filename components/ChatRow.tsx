import { ChatBubbleLeftIcon, TrashIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "@/firebase";
import { collection } from "firebase/firestore";
import { deleteDoc } from "firebase/firestore";
import { doc } from "firebase/firestore";

type Props = {
    id: string;
}

function ChatRow( { id }: Props) {
    // Path name: Show specific chat window highlighted
    const pathname = usePathname();
    // next/navigation for next 13
    const router = useRouter();
    const { data: session } = useSession();
    const [active, setActive] = useState(false);

    const [messages] = useCollection(
        // ! is needed on email because user is already siged in with an email
        collection(db, 'users', session?.user?.email!, 'chats', id, 'messages')
    )
        // Order by "Created at" date by pulling in query


    // use effect to determine if chat is active on page or not 
    useEffect(() => {
        if (!pathname) return;

        setActive(pathname.includes(id));
    }, [pathname])

    const removeChat = async () => {
        await deleteDoc(doc(db, 'users', session?.user?.email!, 'chats', id)) 
        router.replace('/')
    }

  return (
    <Link
    href={`/chat/${id}`} className={`chatRow justify-center ${active && 'bg-gray-700/50'}`}
    >
        <ChatBubbleLeftIcon className="h-5 w-5" />
        <p className="flex-1 hidden md:inline-flex truncate">
            {/* Retrieve message */}
            {/* Pull last logged chats, or say new chat */}
            {messages?.docs[messages?.docs.length-1]?.data().text || "New Chat" }
        </p>
        <TrashIcon
        onClick={removeChat}
        className="h-5 w-5 text-gray-700 hover:text-red-700" />
    </Link>
  )
}

export default ChatRow