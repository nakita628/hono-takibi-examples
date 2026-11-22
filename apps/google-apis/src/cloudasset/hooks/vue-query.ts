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

export function getV1p7beta1Key() {
  return ['v1p7beta1'] as const
}

export function getV1p7beta1NameQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1p7beta1)[':name']['$get']>>,
) {
  return ['v1p7beta1', '/v1p7beta1/:name', toValue(args)] as const
}

export function getV1p7beta1NameQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1p7beta1)[':name']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1p7beta1NameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1p7beta1[':name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1p7beta1Name<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1p7beta1)[':name']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1p7beta1)[':name']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1p7beta1)[':name']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1p7beta1)[':name']['$get']>>>
            >
          >,
          ReturnType<typeof getV1p7beta1NameQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1p7beta1)[':name']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1p7beta1NameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1p7beta1NameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1p7beta1[':name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostV1p7beta1ParentExportAssets<
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
                Awaited<ReturnType<(typeof client.v1p7beta1)[':parent:exportAssets']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1p7beta1)[':parent:exportAssets']['$post']>,
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
  const mutationDefaults = getPostV1p7beta1ParentExportAssetsMutationOptions<
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
