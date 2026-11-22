import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getAutomationEmailTemplates202609(
  args: InferRequestType<(typeof client.automation)['email-templates']['2026-09']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.automation['email-templates']['2026-09'].$get(args, options))
}

export async function postAutomationEmailTemplates202609(
  args: InferRequestType<(typeof client.automation)['email-templates']['2026-09']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.automation['email-templates']['2026-09'].$post(args, options))
}

export async function getAutomationEmailTemplates202609Folders(
  args: InferRequestType<
    (typeof client.automation)['email-templates']['2026-09']['folders']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.automation['email-templates']['2026-09'].folders.$get(args, options),
  )
}

export async function getAutomationEmailTemplates202609TemplateId(
  args: InferRequestType<
    (typeof client.automation)['email-templates']['2026-09'][':templateId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.automation['email-templates']['2026-09'][':templateId'].$get(args, options),
  )
}

export async function patchAutomationEmailTemplates202609TemplateId(
  args: InferRequestType<
    (typeof client.automation)['email-templates']['2026-09'][':templateId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.automation['email-templates']['2026-09'][':templateId'].$patch(args, options),
  )
}
