import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postV1Canceljob(
  args: InferRequestType<typeof client.v1.canceljob.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.canceljob.$post(args, options))
}

export async function postV1Createcomputeenvironment(
  args: InferRequestType<typeof client.v1.createcomputeenvironment.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.createcomputeenvironment.$post(args, options))
}

export async function postV1Createjobqueue(
  args: InferRequestType<typeof client.v1.createjobqueue.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.createjobqueue.$post(args, options))
}

export async function postV1Createschedulingpolicy(
  args: InferRequestType<typeof client.v1.createschedulingpolicy.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.createschedulingpolicy.$post(args, options))
}

export async function postV1Deletecomputeenvironment(
  args: InferRequestType<typeof client.v1.deletecomputeenvironment.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.deletecomputeenvironment.$post(args, options))
}

export async function postV1Deletejobqueue(
  args: InferRequestType<typeof client.v1.deletejobqueue.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.deletejobqueue.$post(args, options))
}

export async function postV1Deleteschedulingpolicy(
  args: InferRequestType<typeof client.v1.deleteschedulingpolicy.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.deleteschedulingpolicy.$post(args, options))
}

export async function postV1Deregisterjobdefinition(
  args: InferRequestType<typeof client.v1.deregisterjobdefinition.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.deregisterjobdefinition.$post(args, options))
}

export async function postV1Describecomputeenvironments(
  args: InferRequestType<typeof client.v1.describecomputeenvironments.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.describecomputeenvironments.$post(args, options))
}

export async function postV1Describejobdefinitions(
  args: InferRequestType<typeof client.v1.describejobdefinitions.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.describejobdefinitions.$post(args, options))
}

export async function postV1Describejobqueues(
  args: InferRequestType<typeof client.v1.describejobqueues.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.describejobqueues.$post(args, options))
}

export async function postV1Describejobs(
  args: InferRequestType<typeof client.v1.describejobs.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.describejobs.$post(args, options))
}

export async function postV1Describeschedulingpolicies(
  args: InferRequestType<typeof client.v1.describeschedulingpolicies.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.describeschedulingpolicies.$post(args, options))
}

export async function postV1Listjobs(
  args: InferRequestType<typeof client.v1.listjobs.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.listjobs.$post(args, options))
}

export async function postV1Listschedulingpolicies(
  args: InferRequestType<typeof client.v1.listschedulingpolicies.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.listschedulingpolicies.$post(args, options))
}

export async function getV1TagsResourceArn(
  args: InferRequestType<(typeof client.v1.tags)[':resourceArn']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.tags[':resourceArn'].$get(args, options))
}

export async function postV1TagsResourceArn(
  args: InferRequestType<(typeof client.v1.tags)[':resourceArn']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.tags[':resourceArn'].$post(args, options))
}

export async function postV1Registerjobdefinition(
  args: InferRequestType<typeof client.v1.registerjobdefinition.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.registerjobdefinition.$post(args, options))
}

export async function postV1Submitjob(
  args: InferRequestType<typeof client.v1.submitjob.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.submitjob.$post(args, options))
}

export async function postV1Terminatejob(
  args: InferRequestType<typeof client.v1.terminatejob.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.terminatejob.$post(args, options))
}

export async function deleteV1TagsResourceArnTagKeys(
  args: InferRequestType<(typeof client.v1.tags)[':resourceArn#tagKeys']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.tags[':resourceArn#tagKeys'].$delete(args, options))
}

export async function postV1Updatecomputeenvironment(
  args: InferRequestType<typeof client.v1.updatecomputeenvironment.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.updatecomputeenvironment.$post(args, options))
}

export async function postV1Updatejobqueue(
  args: InferRequestType<typeof client.v1.updatejobqueue.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.updatejobqueue.$post(args, options))
}

export async function postV1Updateschedulingpolicy(
  args: InferRequestType<typeof client.v1.updateschedulingpolicy.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.updateschedulingpolicy.$post(args, options))
}
