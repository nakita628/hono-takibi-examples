import { createQuery, createMutation, queryOptions, mutationOptions } from '@tanstack/svelte-query'
import type {
  CreateQueryOptions,
  CreateMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/svelte-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getV1p7beta1Key() {
  return ['v1p7beta1'] as const
}

export function getV1p7beta1NameQueryKey(
  args: InferRequestType<(typeof client.v1p7beta1)[':name']['$get']>,
) {
  return ['v1p7beta1', '/v1p7beta1/:name', args] as const
}

export function getV1p7beta1NameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1p7beta1)[':name']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1p7beta1)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1p7beta1)[':name']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1p7beta1NameQueryKey>
  >({
    queryKey: getV1p7beta1NameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1p7beta1[':name'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1p7beta1Name<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1p7beta1)[':name']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1p7beta1)[':name']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1p7beta1)[':name']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1p7beta1NameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1p7beta1NameQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostV1p7beta1ParentExportAssetsMutationKey() {
  return ['v1p7beta1', '/v1p7beta1/:parent:exportAssets', 'POST'] as const
}

export function getPostV1p7beta1ParentExportAssetsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1p7beta1)[':parent:exportAssets']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1p7beta1)[':parent:exportAssets']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1p7beta1ParentExportAssetsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1p7beta1)[':parent:exportAssets']['$post']>,
    ) {
      return parseResponse(client.v1p7beta1[':parent:exportAssets'].$post(args, options))
    },
  })
}

export function createPostV1p7beta1ParentExportAssets<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1p7beta1)[':parent:exportAssets']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1p7beta1)[':parent:exportAssets']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1p7beta1ParentExportAssetsMutationOptions<
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
