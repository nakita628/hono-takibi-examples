import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postV1p1beta1FilesAnnotate(
  args: InferRequestType<(typeof client.v1p1beta1)['files:annotate']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1p1beta1['files:annotate'].$post(args, options))
}

export async function postV1p1beta1FilesAsyncBatchAnnotate(
  args: InferRequestType<(typeof client.v1p1beta1)['files:asyncBatchAnnotate']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1p1beta1['files:asyncBatchAnnotate'].$post(args, options))
}

export async function postV1p1beta1ImagesAnnotate(
  args: InferRequestType<(typeof client.v1p1beta1)['images:annotate']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1p1beta1['images:annotate'].$post(args, options))
}

export async function postV1p1beta1ImagesAsyncBatchAnnotate(
  args: InferRequestType<(typeof client.v1p1beta1)['images:asyncBatchAnnotate']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1p1beta1['images:asyncBatchAnnotate'].$post(args, options))
}

export async function postV1p1beta1ParentFilesAnnotate(
  args: InferRequestType<(typeof client.v1p1beta1)[':parent']['files:annotate']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1p1beta1[':parent']['files:annotate'].$post(args, options))
}

export async function postV1p1beta1ParentFilesAsyncBatchAnnotate(
  args: InferRequestType<(typeof client.v1p1beta1)[':parent']['files:asyncBatchAnnotate']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1p1beta1[':parent']['files:asyncBatchAnnotate'].$post(args, options),
  )
}

export async function postV1p1beta1ParentImagesAnnotate(
  args: InferRequestType<(typeof client.v1p1beta1)[':parent']['images:annotate']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1p1beta1[':parent']['images:annotate'].$post(args, options))
}

export async function postV1p1beta1ParentImagesAsyncBatchAnnotate(
  args: InferRequestType<
    (typeof client.v1p1beta1)[':parent']['images:asyncBatchAnnotate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1p1beta1[':parent']['images:asyncBatchAnnotate'].$post(args, options),
  )
}
