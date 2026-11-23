import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postAppstoreV1ApplicationChargesJson(
  args: InferRequestType<(typeof client.appstore.v1)['application_charges.json']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.appstore.v1['application_charges.json'].$post(args, options))
}

export async function deleteAppstoreV1InstallationJson(options?: ClientRequestOptions) {
  return await parseResponse(client.appstore.v1['installation.json'].$delete(undefined, options))
}

export async function postAppstoreV1RecurringApplicationChargesRecurringApplicationChargeIdUsageChargesJson(
  args: InferRequestType<
    (typeof client.appstore.v1.recurring_application_charges)[':recurringApplicationChargeId']['usage_charges.json']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.appstore.v1.recurring_application_charges[':recurringApplicationChargeId'][
      'usage_charges.json'
    ].$post(args, options),
  )
}

export async function getAppstoreV1ScriptTagsJson(options?: ClientRequestOptions) {
  return await parseResponse(client.appstore.v1['script_tags.json'].$get(undefined, options))
}

export async function postAppstoreV1ScriptTagsJson(
  args: InferRequestType<(typeof client.appstore.v1)['script_tags.json']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.appstore.v1['script_tags.json'].$post(args, options))
}

export async function getAppstoreV1ScriptTagsScriptTagIdJson(
  args: InferRequestType<(typeof client.appstore.v1.script_tags)[':scriptTagId.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.appstore.v1.script_tags[':scriptTagId.json'].$get(args, options),
  )
}

export async function putAppstoreV1ScriptTagsScriptTagIdJson(
  args: InferRequestType<(typeof client.appstore.v1.script_tags)[':scriptTagId.json']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.appstore.v1.script_tags[':scriptTagId.json'].$put(args, options),
  )
}

export async function deleteAppstoreV1ScriptTagsScriptTagIdJson(
  args: InferRequestType<(typeof client.appstore.v1.script_tags)[':scriptTagId.json']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.appstore.v1.script_tags[':scriptTagId.json'].$delete(args, options),
  )
}

export async function getV1InlineScriptTagsJson(options?: ClientRequestOptions) {
  return await parseResponse(client.v1['inline_script_tags.json'].$get(undefined, options))
}

export async function postV1InlineScriptTagsJson(
  args: InferRequestType<(typeof client.v1)['inline_script_tags.json']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['inline_script_tags.json'].$post(args, options))
}

export async function getV1InlineScriptTagsInlineScriptTagIdJson(
  args: InferRequestType<(typeof client.v1.inline_script_tags)[':inlineScriptTagId.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.inline_script_tags[':inlineScriptTagId.json'].$get(args, options),
  )
}

export async function putV1InlineScriptTagsInlineScriptTagIdJson(
  args: InferRequestType<(typeof client.v1.inline_script_tags)[':inlineScriptTagId.json']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.inline_script_tags[':inlineScriptTagId.json'].$put(args, options),
  )
}

export async function deleteV1InlineScriptTagsInlineScriptTagIdJson(
  args: InferRequestType<
    (typeof client.v1.inline_script_tags)[':inlineScriptTagId.json']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.inline_script_tags[':inlineScriptTagId.json'].$delete(args, options),
  )
}

export async function getV1ScriptTagsJson(options?: ClientRequestOptions) {
  return await parseResponse(client.v1['script_tags.json'].$get(undefined, options))
}

export async function postV1ScriptTagsJson(
  args: InferRequestType<(typeof client.v1)['script_tags.json']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['script_tags.json'].$post(args, options))
}

export async function getV1ScriptTagsScriptTagIdJson(
  args: InferRequestType<(typeof client.v1.script_tags)[':scriptTagId.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.script_tags[':scriptTagId.json'].$get(args, options))
}

export async function putV1ScriptTagsScriptTagIdJson(
  args: InferRequestType<(typeof client.v1.script_tags)[':scriptTagId.json']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.script_tags[':scriptTagId.json'].$put(args, options))
}

export async function deleteV1ScriptTagsScriptTagIdJson(
  args: InferRequestType<(typeof client.v1.script_tags)[':scriptTagId.json']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.script_tags[':scriptTagId.json'].$delete(args, options))
}
