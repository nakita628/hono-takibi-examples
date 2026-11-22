import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postMetastoreV1TenantServiceDeleteTenant(
  args: InferRequestType<(typeof client)['metastore.v1.TenantService']['DeleteTenant']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['metastore.v1.TenantService'].DeleteTenant.$post(args, options))
}

export async function postMetastoreV1TenantServiceGetTenant(
  args: InferRequestType<(typeof client)['metastore.v1.TenantService']['GetTenant']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['metastore.v1.TenantService'].GetTenant.$post(args, options))
}

export async function postMetastoreV1TenantServiceGetTenants(
  args: InferRequestType<(typeof client)['metastore.v1.TenantService']['GetTenants']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['metastore.v1.TenantService'].GetTenants.$post(args, options))
}
