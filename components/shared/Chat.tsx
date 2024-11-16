"use client"
import { getSources, initialMessages } from "@/lib/utils";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { ChatBubble } from "./ChatBubble";
import {Message, useChat} from "ai/react"
import { Spinner } from "../ui/spinner";
export function Chat(){
    const {messages, input, handleInputChange, handleSubmit,isLoading, data} = useChat({
        initialMessages
      });


    return (
        <div className="rounded-2xl border h-[75vh] flex flex-col justify-between">
            <div className="p-6 overflow-auto">
                {messages.map(({id,role,content}: Message, index)=>(
                    <ChatBubble 
                        key={id}
                        role={role}
                        content={content}
                        sources={data?.length ? getSources(data, role, index) : []}
                    />
                ))}
            </div>

            <form onSubmit={handleSubmit} className="p-4 flex clear-both">
                <Input 
                className="mr-2" 
                placeholder={"Type to chat with your tour guide..."} 
                value={input}
                onChange={handleInputChange}
                />
                <Button type="submit" className="w-24">
                    {isLoading ? <Spinner /> : "Ask"}
                </Button>
            </form>
        </div>
    )
}