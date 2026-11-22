import {
  injectQuery,
  injectMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/angular-query-experimental'
import type {
  CreateQueryOptions,
  CreateMutationOptions,
  DefaultError,
  InjectQueryOptions,
  InjectInfiniteQueryOptions,
  InjectMutationOptions,
} from '@tanstack/angular-query-experimental'
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

export function injectV1p7beta1Name<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1p7beta1NameQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostV1p7beta1ParentExportAssets<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
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
  }, injectOptions)
}
