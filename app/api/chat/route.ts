import { callChain } from "@/lib/langhchain";
import { NextRequest, NextResponse } from "next/server";
import {Message} from "ai"

const formatMessage = (message:Message) => {
    return `${message.role === "user" ? "Human" :"Assistant"}: ${message.content}`
};

export async function POST(req:NextRequest) {
    // access message information from chat history
    const body = await req.json();
    const messages: Message[] = body.messages ?? [];
    const formattedPreviousMessages = messages.slice(0, -1).map(formatMessage);
    const question = messages[messages.length - 1].content;

    if (!question){
        return NextResponse.json("Error: no question in the request", {
            status:400
        })
    }

    try {
        const StreamingTextResponse = callChain({
            question,
            chatHistory: formattedPreviousMessages.join('\n'),
        })

        return StreamingTextResponse;
    } catch (error) {
        console.error("Internal server error: ", error);
        return NextResponse.json("error: Something wen't wrong. Try again!", {
            status:500
        })
    }
}