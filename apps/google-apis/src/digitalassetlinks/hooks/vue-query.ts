import { useQuery, useMutation, mutationOptions } from '@tanstack/vue-query'
import type {
  UseQueryOptions,
  QueryFunctionContext,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/vue-query'
import { computed, toValue } from 'vue'
import type { MaybeRefOrGetter } from 'vue'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getV1Key() {
  return ['v1'] as const
}

export function getPostV1AssetlinksBulkCheckMutationKey() {
  return ['v1', '/v1/assetlinks:bulkCheck', 'POST'] as const
}

export function getPostV1AssetlinksBulkCheckMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['assetlinks:bulkCheck']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)['assetlinks:bulkCheck']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1AssetlinksBulkCheckMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1)['assetlinks:bulkCheck']['$post']>) {
      return parseResponse(client.v1['assetlinks:bulkCheck'].$post(args, options))
    },
  })
}

export function usePostV1AssetlinksBulkCheck<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['assetlinks:bulkCheck']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1)['assetlinks:bulkCheck']['$post']>,
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
  const mutationDefaults = getPostV1AssetlinksBulkCheckMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV1AssetlinksCheckQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)['assetlinks:check']['$get']>>,
) {
  return ['v1', '/v1/assetlinks:check', toValue(args)] as const
}

export function getV1AssetlinksCheckQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)['assetlinks:check']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1AssetlinksCheckQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1['assetlinks:check'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1AssetlinksCheck<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['assetlinks:check']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)['assetlinks:check']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['assetlinks:check']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['assetlinks:check']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1AssetlinksCheckQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['assetlinks:check']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AssetlinksCheckQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1AssetlinksCheckQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1['assetlinks:check'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1StatementsListQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)['statements:list']['$get']>>,
) {
  return ['v1', '/v1/statements:list', toValue(args)] as const
}

export function getV1StatementsListQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)['statements:list']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1StatementsListQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1['statements:list'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1StatementsList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['statements:list']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)['statements:list']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['statements:list']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['statements:list']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1StatementsListQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['statements:list']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1StatementsListQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1StatementsListQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1['statements:list'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
