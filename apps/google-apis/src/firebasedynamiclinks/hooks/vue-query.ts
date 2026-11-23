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

export function getPostV1InstallAttributionMutationKey() {
  return ['v1', '/v1/installAttribution', 'POST'] as const
}

export function getPostV1InstallAttributionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.installAttribution.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.installAttribution.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1InstallAttributionMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.installAttribution.$post>) {
      return parseResponse(client.v1.installAttribution.$post(args, options))
    },
  })
}

export function usePostV1InstallAttribution<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.installAttribution.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v1.installAttribution.$post>,
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
  const mutationDefaults = getPostV1InstallAttributionMutationOptions<TError, TOnMutateResult>(
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

export function getPostV1ManagedShortLinksCreateMutationKey() {
  return ['v1', '/v1/managedShortLinks:create', 'POST'] as const
}

export function getPostV1ManagedShortLinksCreateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['managedShortLinks:create']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)['managedShortLinks:create']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ManagedShortLinksCreateMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1)['managedShortLinks:create']['$post']>,
    ) {
      return parseResponse(client.v1['managedShortLinks:create'].$post(args, options))
    },
  })
}

export function usePostV1ManagedShortLinksCreate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['managedShortLinks:create']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1)['managedShortLinks:create']['$post']>,
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
  const mutationDefaults = getPostV1ManagedShortLinksCreateMutationOptions<TError, TOnMutateResult>(
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

export function getPostV1ReopenAttributionMutationKey() {
  return ['v1', '/v1/reopenAttribution', 'POST'] as const
}

export function getPostV1ReopenAttributionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.reopenAttribution.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.reopenAttribution.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ReopenAttributionMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.reopenAttribution.$post>) {
      return parseResponse(client.v1.reopenAttribution.$post(args, options))
    },
  })
}

export function usePostV1ReopenAttribution<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.reopenAttribution.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v1.reopenAttribution.$post>,
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
  const mutationDefaults = getPostV1ReopenAttributionMutationOptions<TError, TOnMutateResult>(
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

export function getPostV1ShortLinksMutationKey() {
  return ['v1', '/v1/shortLinks', 'POST'] as const
}

export function getPostV1ShortLinksMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.shortLinks.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.shortLinks.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ShortLinksMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.shortLinks.$post>) {
      return parseResponse(client.v1.shortLinks.$post(args, options))
    },
  })
}

export function usePostV1ShortLinks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.shortLinks.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.v1.shortLinks.$post>,
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
  const mutationDefaults = getPostV1ShortLinksMutationOptions<TError, TOnMutateResult>(
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

export function getV1DynamicLinkLinkStatsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)[':dynamicLink']['linkStats']['$get']>>,
) {
  return ['v1', '/v1/:dynamicLink/linkStats', toValue(args)] as const
}

export function getV1DynamicLinkLinkStatsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)[':dynamicLink']['linkStats']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1DynamicLinkLinkStatsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1[':dynamicLink'].linkStats.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1DynamicLinkLinkStats<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)[':dynamicLink']['linkStats']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)[':dynamicLink']['linkStats']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)[':dynamicLink']['linkStats']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)[':dynamicLink']['linkStats']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1DynamicLinkLinkStatsQueryKey>
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
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)[':dynamicLink']['linkStats']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1DynamicLinkLinkStatsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1DynamicLinkLinkStatsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1[':dynamicLink'].linkStats.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
