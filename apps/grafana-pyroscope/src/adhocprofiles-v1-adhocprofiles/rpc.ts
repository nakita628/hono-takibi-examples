import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postAdhocprofilesV1AdHocProfileServiceDiff(
  args: InferRequestType<(typeof client)['adhocprofiles.v1.AdHocProfileService']['Diff']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['adhocprofiles.v1.AdHocProfileService'].Diff.$post(args, options),
  )
}

export async function postAdhocprofilesV1AdHocProfileServiceGet(
  args: InferRequestType<(typeof client)['adhocprofiles.v1.AdHocProfileService']['Get']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['adhocprofiles.v1.AdHocProfileService'].Get.$post(args, options),
  )
}

export async function postAdhocprofilesV1AdHocProfileServiceList(
  args: InferRequestType<(typeof client)['adhocprofiles.v1.AdHocProfileService']['List']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['adhocprofiles.v1.AdHocProfileService'].List.$post(args, options),
  )
}

export async function postAdhocprofilesV1AdHocProfileServiceUpload(
  args: InferRequestType<
    (typeof client)['adhocprofiles.v1.AdHocProfileService']['Upload']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['adhocprofiles.v1.AdHocProfileService'].Upload.$post(args, options),
  )
}
