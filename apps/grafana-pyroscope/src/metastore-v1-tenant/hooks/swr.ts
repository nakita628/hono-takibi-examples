import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getMetastoreV1TenantServiceKey() {
  return ['metastore.v1.TenantService'] as const
}

export function getPostMetastoreV1TenantServiceDeleteTenantKey() {
  return ['metastore.v1.TenantService', '/metastore.v1.TenantService/DeleteTenant', 'POST'] as const
}

export function usePostMetastoreV1TenantServiceDeleteTenant<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['metastore.v1.TenantService']['DeleteTenant']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['metastore.v1.TenantService']['DeleteTenant']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMetastoreV1TenantServiceDeleteTenantKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['metastore.v1.TenantService']['DeleteTenant']['$post']
          >
        },
      ) =>
        parseResponse(client['metastore.v1.TenantService'].DeleteTenant.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostMetastoreV1TenantServiceGetTenantKey() {
  return ['metastore.v1.TenantService', '/metastore.v1.TenantService/GetTenant', 'POST'] as const
}

export function usePostMetastoreV1TenantServiceGetTenant<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['metastore.v1.TenantService']['GetTenant']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['metastore.v1.TenantService']['GetTenant']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMetastoreV1TenantServiceGetTenantKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['metastore.v1.TenantService']['GetTenant']['$post']>
        },
      ) => parseResponse(client['metastore.v1.TenantService'].GetTenant.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostMetastoreV1TenantServiceGetTenantsKey() {
  return ['metastore.v1.TenantService', '/metastore.v1.TenantService/GetTenants', 'POST'] as const
}

export function usePostMetastoreV1TenantServiceGetTenants<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['metastore.v1.TenantService']['GetTenants']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['metastore.v1.TenantService']['GetTenants']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMetastoreV1TenantServiceGetTenantsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['metastore.v1.TenantService']['GetTenants']['$post']
          >
        },
      ) => parseResponse(client['metastore.v1.TenantService'].GetTenants.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
