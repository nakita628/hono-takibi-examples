import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getConfig(
  args: InferRequestType<typeof client.config.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.config.$get(args, options))
}

export async function getDiscord(
  args: InferRequestType<typeof client.discord.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.discord.$get(args, options))
}

export async function postDiscord(
  args: InferRequestType<typeof client.discord.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.discord.$post(args, options))
}

export async function getSlack(
  args: InferRequestType<typeof client.slack.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.slack.$get(args, options))
}

export async function postSlack(
  args: InferRequestType<typeof client.slack.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.slack.$post(args, options))
}

export async function getSns(
  args: InferRequestType<typeof client.sns.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sns.$get(args, options))
}

export async function postSns(
  args: InferRequestType<typeof client.sns.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sns.$post(args, options))
}

export async function getTopicTopicName(
  args: InferRequestType<(typeof client.topic)[':topic_name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.topic[':topic_name'].$get(args, options))
}

export async function getTwilio(
  args: InferRequestType<typeof client.twilio.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.twilio.$get(args, options))
}

export async function postTwilio(
  args: InferRequestType<typeof client.twilio.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.twilio.$post(args, options))
}
