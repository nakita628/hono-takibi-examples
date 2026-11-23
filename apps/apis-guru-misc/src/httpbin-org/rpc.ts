import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getAbsoluteRedirectN(
  args: InferRequestType<(typeof client)['absolute-redirect'][':n']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['absolute-redirect'][':n'].$get(args, options))
}

export async function getAnything(options?: ClientRequestOptions) {
  return await parseResponse(client.anything.$get(undefined, options))
}

export async function putAnything(options?: ClientRequestOptions) {
  return await parseResponse(client.anything.$put(undefined, options))
}

export async function postAnything(options?: ClientRequestOptions) {
  return await parseResponse(client.anything.$post(undefined, options))
}

export async function deleteAnything(options?: ClientRequestOptions) {
  return await parseResponse(client.anything.$delete(undefined, options))
}

export async function patchAnything(options?: ClientRequestOptions) {
  return await parseResponse(client.anything.$patch(undefined, options))
}

export async function traceAnything(options?: ClientRequestOptions) {
  return await parseResponse(client.anything.$trace(undefined, options))
}

export async function getAnythingAnything(
  args: InferRequestType<(typeof client.anything)[':anything']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.anything[':anything'].$get(args, options))
}

export async function putAnythingAnything(
  args: InferRequestType<(typeof client.anything)[':anything']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.anything[':anything'].$put(args, options))
}

export async function postAnythingAnything(
  args: InferRequestType<(typeof client.anything)[':anything']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.anything[':anything'].$post(args, options))
}

export async function deleteAnythingAnything(
  args: InferRequestType<(typeof client.anything)[':anything']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.anything[':anything'].$delete(args, options))
}

export async function patchAnythingAnything(
  args: InferRequestType<(typeof client.anything)[':anything']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.anything[':anything'].$patch(args, options))
}

export async function traceAnythingAnything(
  args: InferRequestType<(typeof client.anything)[':anything']['$trace']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.anything[':anything'].$trace(args, options))
}

export async function getBase64Value(
  args: InferRequestType<(typeof client.base64)[':value']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.base64[':value'].$get(args, options))
}

export async function getBasicAuthUserPasswd(
  args: InferRequestType<(typeof client)['basic-auth'][':user'][':passwd']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['basic-auth'][':user'][':passwd'].$get(args, options))
}

export async function getBearer(
  args: InferRequestType<typeof client.bearer.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bearer.$get(args, options))
}

export async function getBrotli(options?: ClientRequestOptions) {
  return await parseResponse(client.brotli.$get(undefined, options))
}

export async function getBytesN(
  args: InferRequestType<(typeof client.bytes)[':n']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bytes[':n'].$get(args, options))
}

export async function getCache(
  args: InferRequestType<typeof client.cache.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.cache.$get(args, options))
}

export async function getCacheValue(
  args: InferRequestType<(typeof client.cache)[':value']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.cache[':value'].$get(args, options))
}

export async function getCookies(options?: ClientRequestOptions) {
  return await parseResponse(client.cookies.$get(undefined, options))
}

export async function getCookiesDelete(
  args: InferRequestType<typeof client.cookies.delete.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.cookies.delete.$get(args, options))
}

export async function getCookiesSet(
  args: InferRequestType<typeof client.cookies.set.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.cookies.set.$get(args, options))
}

export async function getCookiesSetNameValue(
  args: InferRequestType<(typeof client.cookies.set)[':name'][':value']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.cookies.set[':name'][':value'].$get(args, options))
}

export async function getDeflate(options?: ClientRequestOptions) {
  return await parseResponse(client.deflate.$get(undefined, options))
}

export async function getDelayDelay(
  args: InferRequestType<(typeof client.delay)[':delay']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.delay[':delay'].$get(args, options))
}

export async function putDelayDelay(
  args: InferRequestType<(typeof client.delay)[':delay']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.delay[':delay'].$put(args, options))
}

export async function postDelayDelay(
  args: InferRequestType<(typeof client.delay)[':delay']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.delay[':delay'].$post(args, options))
}

export async function deleteDelayDelay(
  args: InferRequestType<(typeof client.delay)[':delay']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.delay[':delay'].$delete(args, options))
}

export async function patchDelayDelay(
  args: InferRequestType<(typeof client.delay)[':delay']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.delay[':delay'].$patch(args, options))
}

export async function traceDelayDelay(
  args: InferRequestType<(typeof client.delay)[':delay']['$trace']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.delay[':delay'].$trace(args, options))
}

export async function deleteDelete(options?: ClientRequestOptions) {
  return await parseResponse(client.delete.$delete(undefined, options))
}

export async function getDeny(options?: ClientRequestOptions) {
  return await parseResponse(client.deny.$get(undefined, options))
}

export async function getDigestAuthQopUserPasswd(
  args: InferRequestType<(typeof client)['digest-auth'][':qop'][':user'][':passwd']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['digest-auth'][':qop'][':user'][':passwd'].$get(args, options))
}

export async function getDigestAuthQopUserPasswdAlgorithm(
  args: InferRequestType<
    (typeof client)['digest-auth'][':qop'][':user'][':passwd'][':algorithm']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['digest-auth'][':qop'][':user'][':passwd'][':algorithm'].$get(args, options),
  )
}

export async function getDigestAuthQopUserPasswdAlgorithmStaleAfter(
  args: InferRequestType<
    (typeof client)['digest-auth'][':qop'][':user'][':passwd'][':algorithm'][':stale_after']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['digest-auth'][':qop'][':user'][':passwd'][':algorithm'][':stale_after'].$get(
      args,
      options,
    ),
  )
}

export async function getDrip(
  args: InferRequestType<typeof client.drip.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.drip.$get(args, options))
}

export async function getEncodingUtf8(options?: ClientRequestOptions) {
  return await parseResponse(client.encoding.utf8.$get(undefined, options))
}

export async function getEtagEtag(
  args: InferRequestType<(typeof client.etag)[':etag']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.etag[':etag'].$get(args, options))
}

export async function getGet(options?: ClientRequestOptions) {
  return await parseResponse(client.get.$get(undefined, options))
}

export async function getGzip(options?: ClientRequestOptions) {
  return await parseResponse(client.gzip.$get(undefined, options))
}

export async function getHeaders(options?: ClientRequestOptions) {
  return await parseResponse(client.headers.$get(undefined, options))
}

export async function getHiddenBasicAuthUserPasswd(
  args: InferRequestType<(typeof client)['hidden-basic-auth'][':user'][':passwd']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['hidden-basic-auth'][':user'][':passwd'].$get(args, options))
}

export async function getHtml(options?: ClientRequestOptions) {
  return await parseResponse(client.html.$get(undefined, options))
}

export async function getImage(options?: ClientRequestOptions) {
  return await parseResponse(client.image.$get(undefined, options))
}

export async function getImageJpeg(options?: ClientRequestOptions) {
  return await parseResponse(client.image.jpeg.$get(undefined, options))
}

export async function getImagePng(options?: ClientRequestOptions) {
  return await parseResponse(client.image.png.$get(undefined, options))
}

export async function getImageSvg(options?: ClientRequestOptions) {
  return await parseResponse(client.image.svg.$get(undefined, options))
}

export async function getImageWebp(options?: ClientRequestOptions) {
  return await parseResponse(client.image.webp.$get(undefined, options))
}

export async function getIp(options?: ClientRequestOptions) {
  return await parseResponse(client.ip.$get(undefined, options))
}

export async function getJson(options?: ClientRequestOptions) {
  return await parseResponse(client.json.$get(undefined, options))
}

export async function getLinksNOffset(
  args: InferRequestType<(typeof client.links)[':n'][':offset']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.links[':n'][':offset'].$get(args, options))
}

export async function patchPatch(options?: ClientRequestOptions) {
  return await parseResponse(client.patch.$patch(undefined, options))
}

export async function postPost(options?: ClientRequestOptions) {
  return await parseResponse(client.post.$post(undefined, options))
}

export async function putPut(options?: ClientRequestOptions) {
  return await parseResponse(client.put.$put(undefined, options))
}

export async function getRangeNumbytes(
  args: InferRequestType<(typeof client.range)[':numbytes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.range[':numbytes'].$get(args, options))
}

export async function getRedirectTo(
  args: InferRequestType<(typeof client)['redirect-to']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['redirect-to'].$get(args, options))
}

export async function putRedirectTo(
  args: InferRequestType<(typeof client)['redirect-to']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['redirect-to'].$put(args, options))
}

export async function postRedirectTo(
  args: InferRequestType<(typeof client)['redirect-to']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['redirect-to'].$post(args, options))
}

export async function deleteRedirectTo(options?: ClientRequestOptions) {
  return await parseResponse(client['redirect-to'].$delete(undefined, options))
}

export async function patchRedirectTo(options?: ClientRequestOptions) {
  return await parseResponse(client['redirect-to'].$patch(undefined, options))
}

export async function traceRedirectTo(options?: ClientRequestOptions) {
  return await parseResponse(client['redirect-to'].$trace(undefined, options))
}

export async function getRedirectN(
  args: InferRequestType<(typeof client.redirect)[':n']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.redirect[':n'].$get(args, options))
}

export async function getRelativeRedirectN(
  args: InferRequestType<(typeof client)['relative-redirect'][':n']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['relative-redirect'][':n'].$get(args, options))
}

export async function getResponseHeaders(
  args: InferRequestType<(typeof client)['response-headers']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['response-headers'].$get(args, options))
}

export async function postResponseHeaders(
  args: InferRequestType<(typeof client)['response-headers']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['response-headers'].$post(args, options))
}

export async function getRobotsTxt(options?: ClientRequestOptions) {
  return await parseResponse(client['robots.txt'].$get(undefined, options))
}

export async function getStatusCodes(
  args: InferRequestType<(typeof client.status)[':codes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.status[':codes'].$get(args, options))
}

export async function putStatusCodes(
  args: InferRequestType<(typeof client.status)[':codes']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.status[':codes'].$put(args, options))
}

export async function postStatusCodes(
  args: InferRequestType<(typeof client.status)[':codes']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.status[':codes'].$post(args, options))
}

export async function deleteStatusCodes(
  args: InferRequestType<(typeof client.status)[':codes']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.status[':codes'].$delete(args, options))
}

export async function patchStatusCodes(
  args: InferRequestType<(typeof client.status)[':codes']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.status[':codes'].$patch(args, options))
}

export async function traceStatusCodes(
  args: InferRequestType<(typeof client.status)[':codes']['$trace']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.status[':codes'].$trace(args, options))
}

export async function getStreamBytesN(
  args: InferRequestType<(typeof client)['stream-bytes'][':n']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['stream-bytes'][':n'].$get(args, options))
}

export async function getStreamN(
  args: InferRequestType<(typeof client.stream)[':n']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stream[':n'].$get(args, options))
}

export async function getUserAgent(options?: ClientRequestOptions) {
  return await parseResponse(client['user-agent'].$get(undefined, options))
}

export async function getUuid(options?: ClientRequestOptions) {
  return await parseResponse(client.uuid.$get(undefined, options))
}

export async function getXml(options?: ClientRequestOptions) {
  return await parseResponse(client.xml.$get(undefined, options))
}
