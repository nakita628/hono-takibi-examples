import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postProjectIdClassifyIterationsPublishedNameImage(
  args: InferRequestType<
    (typeof client)[':projectId']['classify']['iterations'][':publishedName']['image']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':projectId'].classify.iterations[':publishedName'].image.$post(args, options),
  )
}

export async function postProjectIdClassifyIterationsPublishedNameImageNostore(
  args: InferRequestType<
    (typeof client)[':projectId']['classify']['iterations'][':publishedName']['image']['nostore']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':projectId'].classify.iterations[':publishedName'].image.nostore.$post(args, options),
  )
}

export async function postProjectIdClassifyIterationsPublishedNameUrl(
  args: InferRequestType<
    (typeof client)[':projectId']['classify']['iterations'][':publishedName']['url']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':projectId'].classify.iterations[':publishedName'].url.$post(args, options),
  )
}

export async function postProjectIdClassifyIterationsPublishedNameUrlNostore(
  args: InferRequestType<
    (typeof client)[':projectId']['classify']['iterations'][':publishedName']['url']['nostore']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':projectId'].classify.iterations[':publishedName'].url.nostore.$post(args, options),
  )
}

export async function postProjectIdDetectIterationsPublishedNameImage(
  args: InferRequestType<
    (typeof client)[':projectId']['detect']['iterations'][':publishedName']['image']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':projectId'].detect.iterations[':publishedName'].image.$post(args, options),
  )
}

export async function postProjectIdDetectIterationsPublishedNameImageNostore(
  args: InferRequestType<
    (typeof client)[':projectId']['detect']['iterations'][':publishedName']['image']['nostore']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':projectId'].detect.iterations[':publishedName'].image.nostore.$post(args, options),
  )
}

export async function postProjectIdDetectIterationsPublishedNameUrl(
  args: InferRequestType<
    (typeof client)[':projectId']['detect']['iterations'][':publishedName']['url']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':projectId'].detect.iterations[':publishedName'].url.$post(args, options),
  )
}

export async function postProjectIdDetectIterationsPublishedNameUrlNostore(
  args: InferRequestType<
    (typeof client)[':projectId']['detect']['iterations'][':publishedName']['url']['nostore']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':projectId'].detect.iterations[':publishedName'].url.nostore.$post(args, options),
  )
}
