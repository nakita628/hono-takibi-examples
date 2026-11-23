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

export function getV3Key() {
  return ['v3'] as const
}

export function getPostV3AccountHotelsSetLiveOnGoogleMutationKey() {
  return ['v3', '/v3/:account/hotels:setLiveOnGoogle', 'POST'] as const
}

export function getPostV3AccountHotelsSetLiveOnGoogleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v3)[':account']['hotels:setLiveOnGoogle']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v3)[':account']['hotels:setLiveOnGoogle']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV3AccountHotelsSetLiveOnGoogleMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v3)[':account']['hotels:setLiveOnGoogle']['$post']>,
    ) {
      return parseResponse(client.v3[':account']['hotels:setLiveOnGoogle'].$post(args, options))
    },
  })
}

export function usePostV3AccountHotelsSetLiveOnGoogle<
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
                  ReturnType<(typeof client.v3)[':account']['hotels:setLiveOnGoogle']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v3)[':account']['hotels:setLiveOnGoogle']['$post']>,
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
  const mutationDefaults = getPostV3AccountHotelsSetLiveOnGoogleMutationOptions<
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

export function getV3NameQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v3)[':name']['$get']>>,
) {
  return ['v3', '/v3/:name', toValue(args)] as const
}

export function getV3NameQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v3)[':name']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV3NameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v3[':name'].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV3Name<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v3)[':name']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v3)[':name']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v3)[':name']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v3)[':name']['$get']>>>
            >
          >,
          ReturnType<typeof getV3NameQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v3)[':name']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV3NameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV3NameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v3[':name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteV3NameMutationKey() {
  return ['v3', '/v3/:name', 'DELETE'] as const
}

export function getDeleteV3NameMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v3)[':name']['$delete']>>>>
    >,
    TError,
    InferRequestType<(typeof client.v3)[':name']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV3NameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v3)[':name']['$delete']>) {
      return parseResponse(client.v3[':name'].$delete(args, options))
    },
  })
}

export function useDeleteV3Name<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v3)[':name']['$delete']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.v3)[':name']['$delete']>,
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
  const mutationDefaults = getDeleteV3NameMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPatchV3NameMutationKey() {
  return ['v3', '/v3/:name', 'PATCH'] as const
}

export function getPatchV3NameMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v3)[':name']['$patch']>>>>
    >,
    TError,
    InferRequestType<(typeof client.v3)[':name']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV3NameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v3)[':name']['$patch']>) {
      return parseResponse(client.v3[':name'].$patch(args, options))
    },
  })
}

export function usePatchV3Name<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v3)[':name']['$patch']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.v3)[':name']['$patch']>,
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
  const mutationDefaults = getPatchV3NameMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV3NameFreeBookingLinksReportViewsQueryQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v3)[':name']['freeBookingLinksReportViews:query']['$get']>
  >,
) {
  return ['v3', '/v3/:name/freeBookingLinksReportViews:query', toValue(args)] as const
}

export function getV3NameFreeBookingLinksReportViewsQueryQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v3)[':name']['freeBookingLinksReportViews:query']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV3NameFreeBookingLinksReportViewsQueryQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v3[':name']['freeBookingLinksReportViews:query'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV3NameFreeBookingLinksReportViewsQuery<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v3)[':name']['freeBookingLinksReportViews:query']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v3)[':name']['freeBookingLinksReportViews:query']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v3)[':name']['freeBookingLinksReportViews:query']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v3)[':name']['freeBookingLinksReportViews:query']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV3NameFreeBookingLinksReportViewsQueryQueryKey>
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
          Awaited<
            ReturnType<(typeof client.v3)[':name']['freeBookingLinksReportViews:query']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3NameFreeBookingLinksReportViewsQueryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV3NameFreeBookingLinksReportViewsQueryQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v3[':name']['freeBookingLinksReportViews:query'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV3NameParticipationReportViewsQueryQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v3)[':name']['participationReportViews:query']['$get']>
  >,
) {
  return ['v3', '/v3/:name/participationReportViews:query', toValue(args)] as const
}

export function getV3NameParticipationReportViewsQueryQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v3)[':name']['participationReportViews:query']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV3NameParticipationReportViewsQueryQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v3[':name']['participationReportViews:query'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV3NameParticipationReportViewsQuery<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v3)[':name']['participationReportViews:query']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v3)[':name']['participationReportViews:query']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v3)[':name']['participationReportViews:query']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v3)[':name']['participationReportViews:query']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV3NameParticipationReportViewsQueryQueryKey>
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
          Awaited<ReturnType<(typeof client.v3)[':name']['participationReportViews:query']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3NameParticipationReportViewsQueryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV3NameParticipationReportViewsQueryQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v3[':name']['participationReportViews:query'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV3NamePropertyPerformanceReportViewsQueryQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v3)[':name']['propertyPerformanceReportViews:query']['$get']>
  >,
) {
  return ['v3', '/v3/:name/propertyPerformanceReportViews:query', toValue(args)] as const
}

export function getV3NamePropertyPerformanceReportViewsQueryQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v3)[':name']['propertyPerformanceReportViews:query']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV3NamePropertyPerformanceReportViewsQueryQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v3[':name']['propertyPerformanceReportViews:query'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV3NamePropertyPerformanceReportViewsQuery<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v3)[':name']['propertyPerformanceReportViews:query']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v3)[':name']['propertyPerformanceReportViews:query']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v3)[':name']['propertyPerformanceReportViews:query']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v3)[':name']['propertyPerformanceReportViews:query']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV3NamePropertyPerformanceReportViewsQueryQueryKey>
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
          Awaited<
            ReturnType<(typeof client.v3)[':name']['propertyPerformanceReportViews:query']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3NamePropertyPerformanceReportViewsQueryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV3NamePropertyPerformanceReportViewsQueryQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v3[':name']['propertyPerformanceReportViews:query'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV3ParentAccountLinksQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v3)[':parent']['accountLinks']['$get']>>,
) {
  return ['v3', '/v3/:parent/accountLinks', toValue(args)] as const
}

export function getV3ParentAccountLinksQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v3)[':parent']['accountLinks']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV3ParentAccountLinksQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v3[':parent'].accountLinks.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV3ParentAccountLinks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v3)[':parent']['accountLinks']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v3)[':parent']['accountLinks']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3)[':parent']['accountLinks']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3)[':parent']['accountLinks']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV3ParentAccountLinksQueryKey>
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
          Awaited<ReturnType<(typeof client.v3)[':parent']['accountLinks']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3ParentAccountLinksQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV3ParentAccountLinksQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v3[':parent'].accountLinks.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV3ParentAccountLinksMutationKey() {
  return ['v3', '/v3/:parent/accountLinks', 'POST'] as const
}

export function getPostV3ParentAccountLinksMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v3)[':parent']['accountLinks']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v3)[':parent']['accountLinks']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV3ParentAccountLinksMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v3)[':parent']['accountLinks']['$post']>,
    ) {
      return parseResponse(client.v3[':parent'].accountLinks.$post(args, options))
    },
  })
}

export function usePostV3ParentAccountLinks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3)[':parent']['accountLinks']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v3)[':parent']['accountLinks']['$post']>,
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
  const mutationDefaults = getPostV3ParentAccountLinksMutationOptions<TError, TOnMutateResult>(
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

export function getV3ParentBrandsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v3)[':parent']['brands']['$get']>>,
) {
  return ['v3', '/v3/:parent/brands', toValue(args)] as const
}

export function getV3ParentBrandsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v3)[':parent']['brands']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV3ParentBrandsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v3[':parent'].brands.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV3ParentBrands<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v3)[':parent']['brands']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v3)[':parent']['brands']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3)[':parent']['brands']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3)[':parent']['brands']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV3ParentBrandsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v3)[':parent']['brands']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3ParentBrandsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV3ParentBrandsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v3[':parent'].brands.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV3ParentBrandsMutationKey() {
  return ['v3', '/v3/:parent/brands', 'POST'] as const
}

export function getPostV3ParentBrandsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v3)[':parent']['brands']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v3)[':parent']['brands']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV3ParentBrandsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v3)[':parent']['brands']['$post']>) {
      return parseResponse(client.v3[':parent'].brands.$post(args, options))
    },
  })
}

export function usePostV3ParentBrands<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3)[':parent']['brands']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v3)[':parent']['brands']['$post']>,
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
  const mutationDefaults = getPostV3ParentBrandsMutationOptions<TError, TOnMutateResult>(
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

export function getV3ParentHotelViewsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v3)[':parent']['hotelViews']['$get']>>,
) {
  return ['v3', '/v3/:parent/hotelViews', toValue(args)] as const
}

export function getV3ParentHotelViewsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v3)[':parent']['hotelViews']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV3ParentHotelViewsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v3[':parent'].hotelViews.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV3ParentHotelViews<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v3)[':parent']['hotelViews']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v3)[':parent']['hotelViews']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3)[':parent']['hotelViews']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3)[':parent']['hotelViews']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV3ParentHotelViewsQueryKey>
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
          Awaited<ReturnType<(typeof client.v3)[':parent']['hotelViews']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3ParentHotelViewsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV3ParentHotelViewsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v3[':parent'].hotelViews.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV3ParentHotelViewsSummarizeQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v3)[':parent']['hotelViews:summarize']['$get']>
  >,
) {
  return ['v3', '/v3/:parent/hotelViews:summarize', toValue(args)] as const
}

export function getV3ParentHotelViewsSummarizeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v3)[':parent']['hotelViews:summarize']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV3ParentHotelViewsSummarizeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v3[':parent']['hotelViews:summarize'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV3ParentHotelViewsSummarize<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v3)[':parent']['hotelViews:summarize']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v3)[':parent']['hotelViews:summarize']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3)[':parent']['hotelViews:summarize']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3)[':parent']['hotelViews:summarize']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV3ParentHotelViewsSummarizeQueryKey>
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
          Awaited<ReturnType<(typeof client.v3)[':parent']['hotelViews:summarize']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3ParentHotelViewsSummarizeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV3ParentHotelViewsSummarizeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v3[':parent']['hotelViews:summarize'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV3ParentIconsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v3)[':parent']['icons']['$get']>>,
) {
  return ['v3', '/v3/:parent/icons', toValue(args)] as const
}

export function getV3ParentIconsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v3)[':parent']['icons']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV3ParentIconsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v3[':parent'].icons.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV3ParentIcons<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v3)[':parent']['icons']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v3)[':parent']['icons']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3)[':parent']['icons']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3)[':parent']['icons']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV3ParentIconsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v3)[':parent']['icons']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3ParentIconsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV3ParentIconsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v3[':parent'].icons.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV3ParentIconsMutationKey() {
  return ['v3', '/v3/:parent/icons', 'POST'] as const
}

export function getPostV3ParentIconsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v3)[':parent']['icons']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v3)[':parent']['icons']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV3ParentIconsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v3)[':parent']['icons']['$post']>) {
      return parseResponse(client.v3[':parent'].icons.$post(args, options))
    },
  })
}

export function usePostV3ParentIcons<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3)[':parent']['icons']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v3)[':parent']['icons']['$post']>,
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
  const mutationDefaults = getPostV3ParentIconsMutationOptions<TError, TOnMutateResult>(
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

export function getPostV3ParentListingsVerifyMutationKey() {
  return ['v3', '/v3/:parent/listings:verify', 'POST'] as const
}

export function getPostV3ParentListingsVerifyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v3)[':parent']['listings:verify']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v3)[':parent']['listings:verify']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV3ParentListingsVerifyMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v3)[':parent']['listings:verify']['$post']>,
    ) {
      return parseResponse(client.v3[':parent']['listings:verify'].$post(args, options))
    },
  })
}

export function usePostV3ParentListingsVerify<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3)[':parent']['listings:verify']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v3)[':parent']['listings:verify']['$post']>,
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
  const mutationDefaults = getPostV3ParentListingsVerifyMutationOptions<TError, TOnMutateResult>(
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

export function getV3ParentPriceAccuracyViewsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v3)[':parent']['priceAccuracyViews']['$get']>
  >,
) {
  return ['v3', '/v3/:parent/priceAccuracyViews', toValue(args)] as const
}

export function getV3ParentPriceAccuracyViewsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v3)[':parent']['priceAccuracyViews']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV3ParentPriceAccuracyViewsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v3[':parent'].priceAccuracyViews.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV3ParentPriceAccuracyViews<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v3)[':parent']['priceAccuracyViews']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v3)[':parent']['priceAccuracyViews']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3)[':parent']['priceAccuracyViews']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3)[':parent']['priceAccuracyViews']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV3ParentPriceAccuracyViewsQueryKey>
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
          Awaited<ReturnType<(typeof client.v3)[':parent']['priceAccuracyViews']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3ParentPriceAccuracyViewsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV3ParentPriceAccuracyViewsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v3[':parent'].priceAccuracyViews.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV3ParentPriceAccuracyViewsSummarizeQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v3)[':parent']['priceAccuracyViews:summarize']['$get']>
  >,
) {
  return ['v3', '/v3/:parent/priceAccuracyViews:summarize', toValue(args)] as const
}

export function getV3ParentPriceAccuracyViewsSummarizeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v3)[':parent']['priceAccuracyViews:summarize']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV3ParentPriceAccuracyViewsSummarizeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v3[':parent']['priceAccuracyViews:summarize'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV3ParentPriceAccuracyViewsSummarize<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v3)[':parent']['priceAccuracyViews:summarize']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v3)[':parent']['priceAccuracyViews:summarize']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v3)[':parent']['priceAccuracyViews:summarize']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v3)[':parent']['priceAccuracyViews:summarize']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV3ParentPriceAccuracyViewsSummarizeQueryKey>
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
          Awaited<ReturnType<(typeof client.v3)[':parent']['priceAccuracyViews:summarize']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3ParentPriceAccuracyViewsSummarizeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV3ParentPriceAccuracyViewsSummarizeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v3[':parent']['priceAccuracyViews:summarize'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV3ParentPriceCoverageViewsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v3)[':parent']['priceCoverageViews']['$get']>
  >,
) {
  return ['v3', '/v3/:parent/priceCoverageViews', toValue(args)] as const
}

export function getV3ParentPriceCoverageViewsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v3)[':parent']['priceCoverageViews']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV3ParentPriceCoverageViewsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v3[':parent'].priceCoverageViews.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV3ParentPriceCoverageViews<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v3)[':parent']['priceCoverageViews']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v3)[':parent']['priceCoverageViews']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3)[':parent']['priceCoverageViews']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3)[':parent']['priceCoverageViews']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV3ParentPriceCoverageViewsQueryKey>
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
          Awaited<ReturnType<(typeof client.v3)[':parent']['priceCoverageViews']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3ParentPriceCoverageViewsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV3ParentPriceCoverageViewsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v3[':parent'].priceCoverageViews.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV3ParentPriceCoverageViewsLatestQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v3)[':parent']['priceCoverageViews:latest']['$get']>
  >,
) {
  return ['v3', '/v3/:parent/priceCoverageViews:latest', toValue(args)] as const
}

export function getV3ParentPriceCoverageViewsLatestQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v3)[':parent']['priceCoverageViews:latest']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV3ParentPriceCoverageViewsLatestQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v3[':parent']['priceCoverageViews:latest'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV3ParentPriceCoverageViewsLatest<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v3)[':parent']['priceCoverageViews:latest']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v3)[':parent']['priceCoverageViews:latest']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v3)[':parent']['priceCoverageViews:latest']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v3)[':parent']['priceCoverageViews:latest']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV3ParentPriceCoverageViewsLatestQueryKey>
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
          Awaited<ReturnType<(typeof client.v3)[':parent']['priceCoverageViews:latest']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3ParentPriceCoverageViewsLatestQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV3ParentPriceCoverageViewsLatestQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v3[':parent']['priceCoverageViews:latest'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV3ParentReconciliationReportsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v3)[':parent']['reconciliationReports']['$get']>
  >,
) {
  return ['v3', '/v3/:parent/reconciliationReports', toValue(args)] as const
}

export function getV3ParentReconciliationReportsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v3)[':parent']['reconciliationReports']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV3ParentReconciliationReportsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v3[':parent'].reconciliationReports.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV3ParentReconciliationReports<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v3)[':parent']['reconciliationReports']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v3)[':parent']['reconciliationReports']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3)[':parent']['reconciliationReports']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3)[':parent']['reconciliationReports']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV3ParentReconciliationReportsQueryKey>
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
          Awaited<ReturnType<(typeof client.v3)[':parent']['reconciliationReports']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3ParentReconciliationReportsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV3ParentReconciliationReportsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v3[':parent'].reconciliationReports.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV3ParentReconciliationReportsMutationKey() {
  return ['v3', '/v3/:parent/reconciliationReports', 'POST'] as const
}

export function getPostV3ParentReconciliationReportsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v3)[':parent']['reconciliationReports']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v3)[':parent']['reconciliationReports']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV3ParentReconciliationReportsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v3)[':parent']['reconciliationReports']['$post']>,
    ) {
      return parseResponse(client.v3[':parent'].reconciliationReports.$post(args, options))
    },
  })
}

export function usePostV3ParentReconciliationReports<
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
                Awaited<ReturnType<(typeof client.v3)[':parent']['reconciliationReports']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v3)[':parent']['reconciliationReports']['$post']>,
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
  const mutationDefaults = getPostV3ParentReconciliationReportsMutationOptions<
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

export function getPostV3ParentReconciliationReportsValidateMutationKey() {
  return ['v3', '/v3/:parent/reconciliationReports:validate', 'POST'] as const
}

export function getPostV3ParentReconciliationReportsValidateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v3)[':parent']['reconciliationReports:validate']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v3)[':parent']['reconciliationReports:validate']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV3ParentReconciliationReportsValidateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v3)[':parent']['reconciliationReports:validate']['$post']
      >,
    ) {
      return parseResponse(
        client.v3[':parent']['reconciliationReports:validate'].$post(args, options),
      )
    },
  })
}

export function usePostV3ParentReconciliationReportsValidate<
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
                  ReturnType<
                    (typeof client.v3)[':parent']['reconciliationReports:validate']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v3)[':parent']['reconciliationReports:validate']['$post']
          >,
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
  const mutationDefaults = getPostV3ParentReconciliationReportsValidateMutationOptions<
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
