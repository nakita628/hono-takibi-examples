import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getEmployeesId(
  args: InferRequestType<(typeof client.employees)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.employees[':id'].$get(args, options))
}
