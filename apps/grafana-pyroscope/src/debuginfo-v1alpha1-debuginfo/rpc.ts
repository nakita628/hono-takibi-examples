import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postDebuginfoV1alpha1DebuginfoServiceDeleteDebuginfo(
  args: InferRequestType<
    (typeof client)['debuginfo.v1alpha1.DebuginfoService']['DeleteDebuginfo']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['debuginfo.v1alpha1.DebuginfoService'].DeleteDebuginfo.$post(args, options),
  )
}

export async function postDebuginfoV1alpha1DebuginfoServiceListDebuginfo(
  args: InferRequestType<
    (typeof client)['debuginfo.v1alpha1.DebuginfoService']['ListDebuginfo']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['debuginfo.v1alpha1.DebuginfoService'].ListDebuginfo.$post(args, options),
  )
}

export async function postDebuginfoV1alpha1DebuginfoServiceShouldInitiateUpload(
  args: InferRequestType<
    (typeof client)['debuginfo.v1alpha1.DebuginfoService']['ShouldInitiateUpload']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['debuginfo.v1alpha1.DebuginfoService'].ShouldInitiateUpload.$post(args, options),
  )
}

export async function postDebuginfoV1alpha1DebuginfoServiceUploadFinished(
  args: InferRequestType<
    (typeof client)['debuginfo.v1alpha1.DebuginfoService']['UploadFinished']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['debuginfo.v1alpha1.DebuginfoService'].UploadFinished.$post(args, options),
  )
}
