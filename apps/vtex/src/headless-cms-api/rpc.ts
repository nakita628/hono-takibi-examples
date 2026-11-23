import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getVCmsApiBuilderIdIndex(
  args: InferRequestType<(typeof client._v.cms.api)[':builderId']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._v.cms.api[':builderId'].index.$get(args, options))
}

export async function getVCmsApiBuilderIdContentType(
  args: InferRequestType<(typeof client._v.cms.api)[':builderId'][':content-type']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client._v.cms.api[':builderId'][':content-type'].$get(args, options))
}

export async function getVCmsApiBuilderIdContentTypeDocumentIdIndex(
  args: InferRequestType<
    (typeof client._v.cms.api)[':builderId'][':content-type'][':document-id']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client._v.cms.api[':builderId'][':content-type'][':document-id'].index.$get(args, options),
  )
}
