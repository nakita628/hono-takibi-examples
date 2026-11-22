import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getIndustries(options?: ClientRequestOptions) {
  return await parseResponse(client.Industries.$get(undefined, options))
}

export async function getJobTypes(options?: ClientRequestOptions) {
  return await parseResponse(client.jobTypes.$get(undefined, options))
}

export async function postJobs(
  args: InferRequestType<typeof client.jobs.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.jobs.$post(args, options))
}

export async function getMajorProjects(options?: ClientRequestOptions) {
  return await parseResponse(client.majorProjects.$get(undefined, options))
}

export async function getRegions(options?: ClientRequestOptions) {
  return await parseResponse(client.regions.$get(undefined, options))
}
