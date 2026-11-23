import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function post20170829Certificates(
  args: InferRequestType<(typeof client)['2017-08-29']['certificates']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2017-08-29'].certificates.$post(args, options))
}

export async function get20170829JobsId(
  args: InferRequestType<(typeof client)['2017-08-29']['jobs'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2017-08-29'].jobs[':id'].$get(args, options))
}

export async function delete20170829JobsId(
  args: InferRequestType<(typeof client)['2017-08-29']['jobs'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2017-08-29'].jobs[':id'].$delete(args, options))
}

export async function get20170829Jobs(
  args: InferRequestType<(typeof client)['2017-08-29']['jobs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2017-08-29'].jobs.$get(args, options))
}

export async function post20170829Jobs(
  args: InferRequestType<(typeof client)['2017-08-29']['jobs']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2017-08-29'].jobs.$post(args, options))
}

export async function get20170829JobTemplates(
  args: InferRequestType<(typeof client)['2017-08-29']['jobTemplates']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2017-08-29'].jobTemplates.$get(args, options))
}

export async function post20170829JobTemplates(
  args: InferRequestType<(typeof client)['2017-08-29']['jobTemplates']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2017-08-29'].jobTemplates.$post(args, options))
}

export async function get20170829Presets(
  args: InferRequestType<(typeof client)['2017-08-29']['presets']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2017-08-29'].presets.$get(args, options))
}

export async function post20170829Presets(
  args: InferRequestType<(typeof client)['2017-08-29']['presets']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2017-08-29'].presets.$post(args, options))
}

export async function get20170829Queues(
  args: InferRequestType<(typeof client)['2017-08-29']['queues']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2017-08-29'].queues.$get(args, options))
}

export async function post20170829Queues(
  args: InferRequestType<(typeof client)['2017-08-29']['queues']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2017-08-29'].queues.$post(args, options))
}

export async function get20170829JobTemplatesName(
  args: InferRequestType<(typeof client)['2017-08-29']['jobTemplates'][':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2017-08-29'].jobTemplates[':name'].$get(args, options))
}

export async function put20170829JobTemplatesName(
  args: InferRequestType<(typeof client)['2017-08-29']['jobTemplates'][':name']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2017-08-29'].jobTemplates[':name'].$put(args, options))
}

export async function delete20170829JobTemplatesName(
  args: InferRequestType<(typeof client)['2017-08-29']['jobTemplates'][':name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2017-08-29'].jobTemplates[':name'].$delete(args, options))
}

export async function get20170829Policy(
  args: InferRequestType<(typeof client)['2017-08-29']['policy']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2017-08-29'].policy.$get(args, options))
}

export async function put20170829Policy(
  args: InferRequestType<(typeof client)['2017-08-29']['policy']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2017-08-29'].policy.$put(args, options))
}

export async function delete20170829Policy(
  args: InferRequestType<(typeof client)['2017-08-29']['policy']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2017-08-29'].policy.$delete(args, options))
}

export async function get20170829PresetsName(
  args: InferRequestType<(typeof client)['2017-08-29']['presets'][':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2017-08-29'].presets[':name'].$get(args, options))
}

export async function put20170829PresetsName(
  args: InferRequestType<(typeof client)['2017-08-29']['presets'][':name']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2017-08-29'].presets[':name'].$put(args, options))
}

export async function delete20170829PresetsName(
  args: InferRequestType<(typeof client)['2017-08-29']['presets'][':name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2017-08-29'].presets[':name'].$delete(args, options))
}

export async function get20170829QueuesName(
  args: InferRequestType<(typeof client)['2017-08-29']['queues'][':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2017-08-29'].queues[':name'].$get(args, options))
}

export async function put20170829QueuesName(
  args: InferRequestType<(typeof client)['2017-08-29']['queues'][':name']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2017-08-29'].queues[':name'].$put(args, options))
}

export async function delete20170829QueuesName(
  args: InferRequestType<(typeof client)['2017-08-29']['queues'][':name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2017-08-29'].queues[':name'].$delete(args, options))
}

export async function post20170829Endpoints(
  args: InferRequestType<(typeof client)['2017-08-29']['endpoints']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2017-08-29'].endpoints.$post(args, options))
}

export async function delete20170829CertificatesArn(
  args: InferRequestType<(typeof client)['2017-08-29']['certificates'][':arn']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2017-08-29'].certificates[':arn'].$delete(args, options))
}

export async function get20170829TagsArn(
  args: InferRequestType<(typeof client)['2017-08-29']['tags'][':arn']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2017-08-29'].tags[':arn'].$get(args, options))
}

export async function put20170829TagsArn(
  args: InferRequestType<(typeof client)['2017-08-29']['tags'][':arn']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2017-08-29'].tags[':arn'].$put(args, options))
}

export async function post20170829Tags(
  args: InferRequestType<(typeof client)['2017-08-29']['tags']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['2017-08-29'].tags.$post(args, options))
}
