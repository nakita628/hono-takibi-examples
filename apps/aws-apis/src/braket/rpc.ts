import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function putJobJobArnCancel(
  args: InferRequestType<(typeof client.job)[':jobArn']['cancel']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.job[':jobArn'].cancel.$put(args, options))
}

export async function putQuantumTaskQuantumTaskArnCancel(
  args: InferRequestType<(typeof client)['quantum-task'][':quantumTaskArn']['cancel']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['quantum-task'][':quantumTaskArn'].cancel.$put(args, options))
}

export async function postJob(
  args: InferRequestType<typeof client.job.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.job.$post(args, options))
}

export async function postQuantumTask(
  args: InferRequestType<(typeof client)['quantum-task']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['quantum-task'].$post(args, options))
}

export async function getDeviceDeviceArn(
  args: InferRequestType<(typeof client.device)[':deviceArn']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.device[':deviceArn'].$get(args, options))
}

export async function getJobJobArn(
  args: InferRequestType<(typeof client.job)[':jobArn']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.job[':jobArn'].$get(args, options))
}

export async function getQuantumTaskQuantumTaskArn(
  args: InferRequestType<(typeof client)['quantum-task'][':quantumTaskArn']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['quantum-task'][':quantumTaskArn'].$get(args, options))
}

export async function getTagsResourceArn(
  args: InferRequestType<(typeof client.tags)[':resourceArn']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tags[':resourceArn'].$get(args, options))
}

export async function postTagsResourceArn(
  args: InferRequestType<(typeof client.tags)[':resourceArn']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tags[':resourceArn'].$post(args, options))
}

export async function postDevices(
  args: InferRequestType<typeof client.devices.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.devices.$post(args, options))
}

export async function postJobs(
  args: InferRequestType<typeof client.jobs.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.jobs.$post(args, options))
}

export async function postQuantumTasks(
  args: InferRequestType<(typeof client)['quantum-tasks']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['quantum-tasks'].$post(args, options))
}

export async function deleteTagsResourceArnTagKeys(
  args: InferRequestType<(typeof client.tags)[':resourceArn#tagKeys']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tags[':resourceArn#tagKeys'].$delete(args, options))
}
