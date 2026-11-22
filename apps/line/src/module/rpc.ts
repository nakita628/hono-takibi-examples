import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postV2BotChannelDetach(
  args: InferRequestType<typeof client.v2.bot.channel.detach.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.bot.channel.detach.$post(args, options))
}

export async function postV2BotChatChatIdControlAcquire(
  args: InferRequestType<(typeof client.v2.bot.chat)[':chatId']['control']['acquire']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.bot.chat[':chatId'].control.acquire.$post(args, options))
}

export async function postV2BotChatChatIdControlRelease(
  args: InferRequestType<(typeof client.v2.bot.chat)[':chatId']['control']['release']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.bot.chat[':chatId'].control.release.$post(args, options))
}

export async function getV2BotList(
  args: InferRequestType<typeof client.v2.bot.list.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.bot.list.$get(args, options))
}
