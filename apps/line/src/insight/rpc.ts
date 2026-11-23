import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getV2BotInsightDemographic(options?: ClientRequestOptions) {
  return await parseResponse(client.v2.bot.insight.demographic.$get(undefined, options))
}

export async function getV2BotInsightMessageDelivery(
  args: InferRequestType<typeof client.v2.bot.insight.message.delivery.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.bot.insight.message.delivery.$get(args, options))
}

export async function getV2BotInsightFollowers(
  args: InferRequestType<typeof client.v2.bot.insight.followers.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.bot.insight.followers.$get(args, options))
}

export async function getV2BotInsightMessageEvent(
  args: InferRequestType<typeof client.v2.bot.insight.message.event.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.bot.insight.message.event.$get(args, options))
}

export async function getV2BotInsightMessageEventAggregation(
  args: InferRequestType<typeof client.v2.bot.insight.message.event.aggregation.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.bot.insight.message.event.aggregation.$get(args, options))
}

export async function getV2BotInsightRichmenuRichMenuIdSummary(
  args: InferRequestType<(typeof client.v2.bot.insight.richmenu)[':richMenuId']['summary']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.bot.insight.richmenu[':richMenuId'].summary.$get(args, options),
  )
}

export async function getV2BotInsightRichmenuRichMenuIdDaily(
  args: InferRequestType<(typeof client.v2.bot.insight.richmenu)[':richMenuId']['daily']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.bot.insight.richmenu[':richMenuId'].daily.$get(args, options),
  )
}
