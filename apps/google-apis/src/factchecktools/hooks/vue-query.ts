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

export function getV1alpha1Key() {
  return ['v1alpha1'] as const
}

export function getV1alpha1ClaimsSearchQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1alpha1)['claims:search']['$get']>>,
) {
  return ['v1alpha1', '/v1alpha1/claims:search', toValue(args)] as const
}

export function getV1alpha1ClaimsSearchQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1alpha1)['claims:search']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1alpha1ClaimsSearchQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1alpha1['claims:search'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1alpha1ClaimsSearch<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1alpha1)['claims:search']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1alpha1)['claims:search']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1alpha1)['claims:search']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1alpha1)['claims:search']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1alpha1ClaimsSearchQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1alpha1)['claims:search']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1alpha1ClaimsSearchQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1alpha1ClaimsSearchQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1alpha1['claims:search'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1alpha1PagesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1alpha1.pages.$get>>,
) {
  return ['v1alpha1', '/v1alpha1/pages', toValue(args)] as const
}

export function getV1alpha1PagesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1alpha1.pages.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1alpha1PagesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1alpha1.pages.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1alpha1Pages<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1alpha1.pages.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1alpha1.pages.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1alpha1.pages.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1alpha1.pages.$get>>>>
          >,
          ReturnType<typeof getV1alpha1PagesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1alpha1.pages.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1alpha1PagesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1alpha1PagesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1alpha1.pages.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1alpha1PagesMutationKey() {
  return ['v1alpha1', '/v1alpha1/pages', 'POST'] as const
}

export function getPostV1alpha1PagesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1alpha1.pages.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1alpha1.pages.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1alpha1PagesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1alpha1.pages.$post>) {
      return parseResponse(client.v1alpha1.pages.$post(args, options))
    },
  })
}

export function usePostV1alpha1Pages<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1alpha1.pages.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v1alpha1.pages.$post>,
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
  const mutationDefaults = getPostV1alpha1PagesMutationOptions<TError, TOnMutateResult>(
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

export function getV1alpha1NameQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1alpha1)[':name']['$get']>>,
) {
  return ['v1alpha1', '/v1alpha1/:name', toValue(args)] as const
}

export function getV1alpha1NameQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1alpha1)[':name']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1alpha1NameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1alpha1[':name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1alpha1Name<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1alpha1)[':name']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1alpha1)[':name']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1alpha1)[':name']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1alpha1)[':name']['$get']>>>
            >
          >,
          ReturnType<typeof getV1alpha1NameQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1alpha1)[':name']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1alpha1NameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1alpha1NameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1alpha1[':name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutV1alpha1NameMutationKey() {
  return ['v1alpha1', '/v1alpha1/:name', 'PUT'] as const
}

export function getPutV1alpha1NameMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1alpha1)[':name']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1alpha1)[':name']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1alpha1NameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1alpha1)[':name']['$put']>) {
      return parseResponse(client.v1alpha1[':name'].$put(args, options))
    },
  })
}

export function usePutV1alpha1Name<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1alpha1)[':name']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.v1alpha1)[':name']['$put']>,
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
  const mutationDefaults = getPutV1alpha1NameMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteV1alpha1NameMutationKey() {
  return ['v1alpha1', '/v1alpha1/:name', 'DELETE'] as const
}

export function getDeleteV1alpha1NameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1alpha1)[':name']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1alpha1)[':name']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1alpha1NameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1alpha1)[':name']['$delete']>) {
      return parseResponse(client.v1alpha1[':name'].$delete(args, options))
    },
  })
}

export function useDeleteV1alpha1Name<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1alpha1)[':name']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1alpha1)[':name']['$delete']>,
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
  const mutationDefaults = getDeleteV1alpha1NameMutationOptions<TError, TOnMutateResult>(
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
