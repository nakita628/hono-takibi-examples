import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getCrmImports202609(
  args: InferRequestType<(typeof client.crm.imports)['2026-09']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.imports['2026-09'].$get(args, options))
}

export async function postCrmImports202609(
  args: InferRequestType<(typeof client.crm.imports)['2026-09']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.imports['2026-09'].$post(args, options))
}

export async function getCrmImports202609ImportId(
  args: InferRequestType<(typeof client.crm.imports)['2026-09'][':importId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.imports['2026-09'][':importId'].$get(args, options))
}

export async function postCrmImports202609ImportIdCancel(
  args: InferRequestType<(typeof client.crm.imports)['2026-09'][':importId']['cancel']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.imports['2026-09'][':importId'].cancel.$post(args, options))
}

export async function getCrmImports202609ImportIdErrors(
  args: InferRequestType<(typeof client.crm.imports)['2026-09'][':importId']['errors']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm.imports['2026-09'][':importId'].errors.$get(args, options))
}
