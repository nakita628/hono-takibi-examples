import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postV1ApplicationDetailServiceGetApkDetails(
  args: InferRequestType<typeof client.v1.applicationDetailService.getApkDetails.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.applicationDetailService.getApkDetails.$post(args, options))
}

export async function postV1ProjectsProjectIdTestMatrices(
  args: InferRequestType<(typeof client.v1.projects)[':projectId']['testMatrices']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.projects[':projectId'].testMatrices.$post(args, options))
}

export async function getV1ProjectsProjectIdTestMatricesTestMatrixId(
  args: InferRequestType<
    (typeof client.v1.projects)[':projectId']['testMatrices'][':testMatrixId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.projects[':projectId'].testMatrices[':testMatrixId'].$get(args, options),
  )
}

export async function postV1ProjectsProjectIdTestMatricesTestMatrixIdCancel(
  args: InferRequestType<
    (typeof client.v1.projects)[':projectId']['testMatrices'][':testMatrixId:cancel']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.projects[':projectId'].testMatrices[':testMatrixId:cancel'].$post(args, options),
  )
}

export async function getV1TestEnvironmentCatalogEnvironmentType(
  args: InferRequestType<(typeof client.v1.testEnvironmentCatalog)[':environmentType']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.testEnvironmentCatalog[':environmentType'].$get(args, options),
  )
}
