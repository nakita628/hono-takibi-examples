import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postGetClip(
  args: InferRequestType<typeof client.getClip.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.getClip.$post(args, options))
}

export async function postGetDASHStreamingSessionURL(
  args: InferRequestType<typeof client.getDASHStreamingSessionURL.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.getDASHStreamingSessionURL.$post(args, options))
}

export async function postGetHLSStreamingSessionURL(
  args: InferRequestType<typeof client.getHLSStreamingSessionURL.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.getHLSStreamingSessionURL.$post(args, options))
}

export async function postGetImages(
  args: InferRequestType<typeof client.getImages.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.getImages.$post(args, options))
}

export async function postGetMediaForFragmentList(
  args: InferRequestType<typeof client.getMediaForFragmentList.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.getMediaForFragmentList.$post(args, options))
}

export async function postListFragments(
  args: InferRequestType<typeof client.listFragments.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.listFragments.$post(args, options))
}
