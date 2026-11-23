import { useMutation, mutationOptions } from '@tanstack/vue-query'
import type { UseMutationOptions, DefaultError, QueryClient } from '@tanstack/vue-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getMetastoreV1TenantServiceKey() {
  return ['metastore.v1.TenantService'] as const
}

export function getPostMetastoreV1TenantServiceDeleteTenantMutationKey() {
  return ['metastore.v1.TenantService', '/metastore.v1.TenantService/DeleteTenant', 'POST'] as const
}

export function getPostMetastoreV1TenantServiceDeleteTenantMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['metastore.v1.TenantService']['DeleteTenant']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostMetastoreV1TenantServiceDeleteTenantMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['metastore.v1.TenantService']['DeleteTenant']['$post']
      >,
    ) {
      return parseResponse(client['metastore.v1.TenantService'].DeleteTenant.$post(args, options))
    },
  })
}

export function usePostMetastoreV1TenantServiceDeleteTenant<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<(typeof client)['metastore.v1.TenantService']['DeleteTenant']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostMetastoreV1TenantServiceDeleteTenantMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostMetastoreV1TenantServiceGetTenantMutationKey() {
  return ['metastore.v1.TenantService', '/metastore.v1.TenantService/GetTenant', 'POST'] as const
}

export function getPostMetastoreV1TenantServiceGetTenantMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['metastore.v1.TenantService']['GetTenant']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['metastore.v1.TenantService']['GetTenant']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostMetastoreV1TenantServiceGetTenantMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['metastore.v1.TenantService']['GetTenant']['$post']>,
    ) {
      return parseResponse(client['metastore.v1.TenantService'].GetTenant.$post(args, options))
    },
  })
}

export function usePostMetastoreV1TenantServiceGetTenant<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['metastore.v1.TenantService']['GetTenant']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['metastore.v1.TenantService']['GetTenant']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostMetastoreV1TenantServiceGetTenantMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostMetastoreV1TenantServiceGetTenantsMutationKey() {
  return ['metastore.v1.TenantService', '/metastore.v1.TenantService/GetTenants', 'POST'] as const
}

export function getPostMetastoreV1TenantServiceGetTenantsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['metastore.v1.TenantService']['GetTenants']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['metastore.v1.TenantService']['GetTenants']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostMetastoreV1TenantServiceGetTenantsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['metastore.v1.TenantService']['GetTenants']['$post']>,
    ) {
      return parseResponse(client['metastore.v1.TenantService'].GetTenants.$post(args, options))
    },
  })
}

export function usePostMetastoreV1TenantServiceGetTenants<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['metastore.v1.TenantService']['GetTenants']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['metastore.v1.TenantService']['GetTenants']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostMetastoreV1TenantServiceGetTenantsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}
