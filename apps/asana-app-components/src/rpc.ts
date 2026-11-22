import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getWidgetMetadataUrlPathPlaceholder(
  args: InferRequestType<typeof client.widget_metadata_url_path_placeholder.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.widget_metadata_url_path_placeholder.$get(args, options))
}

export async function postResourceAttachUrlPathPlaceholder(
  args: InferRequestType<typeof client.resource_attach_url_path_placeholder.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.resource_attach_url_path_placeholder.$post(args, options))
}

export async function getResourceTypeaheadUrlPathPlaceholder(
  args: InferRequestType<typeof client.resource_typeahead_url_path_placeholder.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.resource_typeahead_url_path_placeholder.$get(args, options))
}

export async function getFormMetadataUrlPathPlaceholder(
  args: InferRequestType<typeof client.form_metadata_url_path_placeholder.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.form_metadata_url_path_placeholder.$get(args, options))
}

export async function getModalFormTypeaheadUrlPathPlaceholder(
  args: InferRequestType<typeof client.modal_form_typeahead_url_path_placeholder.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.modal_form_typeahead_url_path_placeholder.$get(args, options))
}

export async function getRuleActionTypeaheadUrlPathPlaceholder(
  args: InferRequestType<typeof client.rule_action_typeahead_url_path_placeholder.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rule_action_typeahead_url_path_placeholder.$get(args, options))
}

export async function postOnChangeCallbackPathPlaceholder(
  args: InferRequestType<typeof client.on_change_callback_path_placeholder.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.on_change_callback_path_placeholder.$post(args, options))
}

export async function postOnSubmitCallbackPathPlaceholder(
  args: InferRequestType<typeof client.on_submit_callback_path_placeholder.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.on_submit_callback_path_placeholder.$post(args, options))
}

export async function postRunActionUrlPathPlaceholder(
  args: InferRequestType<typeof client.run_action_url_path_placeholder.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.run_action_url_path_placeholder.$post(args, options))
}

export async function getActionMetadataUrlPathPlaceholder(
  args: InferRequestType<(typeof client)['action.metadata_url_path_placeholder']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['action.metadata_url_path_placeholder'].$get(args, options))
}

export async function postActionOnChangeCallbackPathPlaceholder(
  args: InferRequestType<(typeof client)['action.on_change_callback_path_placeholder']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['action.on_change_callback_path_placeholder'].$post(args, options),
  )
}

export async function postActionOnSubmitCallbackPathPlaceholder(
  args: InferRequestType<(typeof client)['action.on_submit_callback_path_placeholder']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['action.on_submit_callback_path_placeholder'].$post(args, options),
  )
}
