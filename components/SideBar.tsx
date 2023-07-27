"use client"

import { useSession, signOut } from "next-auth/react";
import NewChat from "./NewChat";
import { useCollection } from "react-firebase-hooks/firestore"
import { collection } from "firebase/firestore";
import { db } from "@/firebase";
import ChatRow from "./ChatRow";
import { orderBy, query} from "firebase/firestore";


function SideBar() {
    const { data: session } = useSession();

    const [chats, loading, error] = useCollection(
        // Session has to exist
        session && query(collection(db, "users", session.user?.email!, 'chats'), orderBy('createdAt', 'asc'))
    )

    // client side component to see client logs 
  return (
    <div className="p-2 flex flex-col h-screen">
        <div className="flex-1">

            {/* NewChat */}
            <NewChat />
            <div>
                {/* ModelSelection */}
            </div>

            {/* Map through the ChatRows */}
            {chats?.docs.map(chat => (
                // map through chat and return following
                <ChatRow key={chat.id} id={chat.id} />
            ))}

        </div>

        {session && (
            <img 
            onClick={() => signOut()}
            src={session.user?.image!} alt="Profile Pic" 
            className="h-12 w-12 rounded-full cursor-pointer mx-auto mb-2
            hover:opacity-50"/>
        )}
    </div>
  )
}

export default SideBar