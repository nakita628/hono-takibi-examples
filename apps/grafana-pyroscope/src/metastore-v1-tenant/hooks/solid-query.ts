import { createMutation, mutationOptions } from '@tanstack/solid-query'
import type { CreateMutationOptions, DefaultError, QueryClient } from '@tanstack/solid-query'
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

export function createPostMetastoreV1TenantServiceDeleteTenant<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostMetastoreV1TenantServiceDeleteTenantMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostMetastoreV1TenantServiceGetTenant<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostMetastoreV1TenantServiceGetTenantMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostMetastoreV1TenantServiceGetTenants<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostMetastoreV1TenantServiceGetTenantsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}
