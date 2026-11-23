import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getTemplates(options?: ClientRequestOptions) {
  return await parseResponse(client.templates.$get(undefined, options))
}

export async function postTemplates(
  args: InferRequestType<typeof client.templates.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.templates.$post(args, options))
}

export async function postTemplatesOutput(
  args: InferRequestType<typeof client.templates.output.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.templates.output.$post(args, options))
}

export async function getTemplatesTemplateId(
  args: InferRequestType<typeof client.templates.templateId.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.templates.templateId.$get(args, options))
}

export async function putTemplatesTemplateId(
  args: InferRequestType<typeof client.templates.templateId.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.templates.templateId.$put(args, options))
}

export async function deleteTemplatesTemplateId(
  args: InferRequestType<typeof client.templates.templateId.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.templates.templateId.$delete(args, options))
}

export async function postTemplatesTemplateIdCopy(
  args: InferRequestType<typeof client.templates.templateId.copy.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.templates.templateId.copy.$post(args, options))
}

export async function postTemplatesTemplateIdEditor(
  args: InferRequestType<typeof client.templates.templateId.editor.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.templates.templateId.editor.$post(args, options))
}

export async function postTemplatesTemplateIdOutput(
  args: InferRequestType<typeof client.templates.templateId.output.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.templates.templateId.output.$post(args, options))
}

export async function getWorkspacesWorkspaceId(
  args: InferRequestType<typeof client.workspaces.workspaceId.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.workspaces.workspaceId.$get(args, options))
}

export async function deleteWorkspacesWorkspaceId(
  args: InferRequestType<typeof client.workspaces.workspaceId.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.workspaces.workspaceId.$delete(args, options))
}
