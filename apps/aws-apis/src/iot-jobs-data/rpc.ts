import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getThingsThingNameJobsJobId(
  args: InferRequestType<(typeof client.things)[':thingName']['jobs'][':jobId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.things[':thingName'].jobs[':jobId'].$get(args, options))
}

export async function postThingsThingNameJobsJobId(
  args: InferRequestType<(typeof client.things)[':thingName']['jobs'][':jobId']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.things[':thingName'].jobs[':jobId'].$post(args, options))
}

export async function getThingsThingNameJobs(
  args: InferRequestType<(typeof client.things)[':thingName']['jobs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.things[':thingName'].jobs.$get(args, options))
}

export async function putThingsThingNameJobsNext(
  args: InferRequestType<(typeof client.things)[':thingName']['jobs']['$next']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.things[':thingName'].jobs.$next.$put(args, options))
}
