/// <reference types="node" />

declare module 'rsmq-promise-native' {
    import RedisSMQ from "rsmq"

    export default class RedisSMQPromise {

        rsmq : RedisSMQ

        constructor(props: RedisSMQ.ConstructorOptions)
        listQueues() : Promise<string[]>
        changeMessageVisibility(opts : RedisSMQ.ChangeMessageVisibilityOptions) : Promise<(1 | 0)>
        createQueue(opts : RedisSMQ.CreateQueueOptions) : Promise<1>
        setQueueAttributes(opts: RedisSMQ.SetQueueAttributesOptions) : Promise<RedisSMQ.QueueAttributes>
        getQueueAttributes(opts: RedisSMQ.GetQueueAttributesOptions) : Promise<RedisSMQ.QueueAttributes>
        deleteQueue(opts: RedisSMQ.DeleteQueueOptions) : Promise<1>
        sendMessage(opts: RedisSMQ.SendMessageOptions) : Promise<string>
        receiveMessage(opts: RedisSMQ.ReceiveMessageOptions) : Promise<(RedisSMQ.QueueMessage | {})>
        deleteMessage(opts: RedisSMQ.DeleteMessageOptions) : Promise<(0 | 1)>
        popMessage(opts: RedisSMQ.PopMessageOptions) : Promise<(RedisSMQ.QueueMessage | {})>
        quit() : Promise<void>
    }
}