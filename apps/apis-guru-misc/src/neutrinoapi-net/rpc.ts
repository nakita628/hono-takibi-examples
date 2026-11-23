import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postBadWordFilter(
  args: InferRequestType<(typeof client)['bad-word-filter']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['bad-word-filter'].$post(args, options))
}

export async function getBinListDownload(
  args: InferRequestType<(typeof client)['bin-list-download']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['bin-list-download'].$get(args, options))
}

export async function getBinLookup(
  args: InferRequestType<(typeof client)['bin-lookup']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['bin-lookup'].$get(args, options))
}

export async function postBrowserBot(
  args: InferRequestType<(typeof client)['browser-bot']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['browser-bot'].$post(args, options))
}

export async function getConvert(
  args: InferRequestType<typeof client.convert.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.convert.$get(args, options))
}

export async function getEmailValidate(
  args: InferRequestType<(typeof client)['email-validate']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['email-validate'].$get(args, options))
}

export async function getEmailVerify(
  args: InferRequestType<(typeof client)['email-verify']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['email-verify'].$get(args, options))
}

export async function getGeocodeAddress(
  args: InferRequestType<(typeof client)['geocode-address']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['geocode-address'].$get(args, options))
}

export async function getGeocodeReverse(
  args: InferRequestType<(typeof client)['geocode-reverse']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['geocode-reverse'].$get(args, options))
}

export async function getHlrLookup(
  args: InferRequestType<(typeof client)['hlr-lookup']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['hlr-lookup'].$get(args, options))
}

export async function getHostReputation(
  args: InferRequestType<(typeof client)['host-reputation']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['host-reputation'].$get(args, options))
}

export async function postHtmlClean(
  args: InferRequestType<(typeof client)['html-clean']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['html-clean'].$post(args, options))
}

export async function postHtmlRender(
  args: InferRequestType<(typeof client)['html-render']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['html-render'].$post(args, options))
}

export async function postImageResize(
  args: InferRequestType<(typeof client)['image-resize']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['image-resize'].$post(args, options))
}

export async function postImageWatermark(
  args: InferRequestType<(typeof client)['image-watermark']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['image-watermark'].$post(args, options))
}

export async function getIpBlocklist(
  args: InferRequestType<(typeof client)['ip-blocklist']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['ip-blocklist'].$get(args, options))
}

export async function getIpBlocklistDownload(
  args: InferRequestType<(typeof client)['ip-blocklist-download']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['ip-blocklist-download'].$get(args, options))
}

export async function getIpInfo(
  args: InferRequestType<(typeof client)['ip-info']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['ip-info'].$get(args, options))
}

export async function getIpProbe(
  args: InferRequestType<(typeof client)['ip-probe']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['ip-probe'].$get(args, options))
}

export async function postPhonePlayback(
  args: InferRequestType<(typeof client)['phone-playback']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['phone-playback'].$post(args, options))
}

export async function getPhoneValidate(
  args: InferRequestType<(typeof client)['phone-validate']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['phone-validate'].$get(args, options))
}

export async function postPhoneVerify(
  args: InferRequestType<(typeof client)['phone-verify']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['phone-verify'].$post(args, options))
}

export async function postQrCode(
  args: InferRequestType<(typeof client)['qr-code']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['qr-code'].$post(args, options))
}

export async function postSmsVerify(
  args: InferRequestType<(typeof client)['sms-verify']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['sms-verify'].$post(args, options))
}

export async function getUaLookup(
  args: InferRequestType<(typeof client)['ua-lookup']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['ua-lookup'].$get(args, options))
}

export async function getUrlInfo(
  args: InferRequestType<(typeof client)['url-info']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['url-info'].$get(args, options))
}

export async function getVerifySecurityCode(
  args: InferRequestType<(typeof client)['verify-security-code']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['verify-security-code'].$get(args, options))
}
