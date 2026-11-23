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

export function getSearchKey() {
  return ['search'] as const
}

export function getSearchVersionNumberAdditionalDataExtQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.search)[':versionNumber']['additionalData.:ext']['$get']>
  >,
) {
  return ['search', '/search/:versionNumber/additionalData.:ext', toValue(args)] as const
}

export function getSearchVersionNumberAdditionalDataExtQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.search)[':versionNumber']['additionalData.:ext']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSearchVersionNumberAdditionalDataExtQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.search[':versionNumber']['additionalData.:ext'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSearchVersionNumberAdditionalDataExt<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.search)[':versionNumber']['additionalData.:ext']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.search)[':versionNumber']['additionalData.:ext']['$get']>
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
                    (typeof client.search)[':versionNumber']['additionalData.:ext']['$get']
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
                    (typeof client.search)[':versionNumber']['additionalData.:ext']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getSearchVersionNumberAdditionalDataExtQueryKey>
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
            ReturnType<(typeof client.search)[':versionNumber']['additionalData.:ext']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSearchVersionNumberAdditionalDataExtQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSearchVersionNumberAdditionalDataExtQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.search[':versionNumber']['additionalData.:ext'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSearchVersionNumberCSCategoryExtQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.search)[':versionNumber']['cS'][':category.:ext']['$get']>
  >,
) {
  return ['search', '/search/:versionNumber/cS/:category.:ext', toValue(args)] as const
}

export function getSearchVersionNumberCSCategoryExtQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.search)[':versionNumber']['cS'][':category.:ext']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSearchVersionNumberCSCategoryExtQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.search[':versionNumber'].cS[':category.:ext'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSearchVersionNumberCSCategoryExt<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.search)[':versionNumber']['cS'][':category.:ext']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.search)[':versionNumber']['cS'][':category.:ext']['$get']>
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
                    (typeof client.search)[':versionNumber']['cS'][':category.:ext']['$get']
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
                    (typeof client.search)[':versionNumber']['cS'][':category.:ext']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getSearchVersionNumberCSCategoryExtQueryKey>
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
            ReturnType<(typeof client.search)[':versionNumber']['cS'][':category.:ext']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSearchVersionNumberCSCategoryExtQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSearchVersionNumberCSCategoryExtQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.search[':versionNumber'].cS[':category.:ext'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSearchVersionNumberCategorySearchQueryExtQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.search)[':versionNumber']['categorySearch'][':query.:ext']['$get']
    >
  >,
) {
  return ['search', '/search/:versionNumber/categorySearch/:query.:ext', toValue(args)] as const
}

export function getSearchVersionNumberCategorySearchQueryExtQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.search)[':versionNumber']['categorySearch'][':query.:ext']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSearchVersionNumberCategorySearchQueryExtQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.search[':versionNumber'].categorySearch[':query.:ext'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSearchVersionNumberCategorySearchQueryExt<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.search)[':versionNumber']['categorySearch'][':query.:ext']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.search)[':versionNumber']['categorySearch'][':query.:ext']['$get']
    >
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
                    (typeof client.search)[':versionNumber']['categorySearch'][':query.:ext']['$get']
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
                    (typeof client.search)[':versionNumber']['categorySearch'][':query.:ext']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getSearchVersionNumberCategorySearchQueryExtQueryKey>
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
            ReturnType<
              (typeof client.search)[':versionNumber']['categorySearch'][':query.:ext']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSearchVersionNumberCategorySearchQueryExtQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSearchVersionNumberCategorySearchQueryExtQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.search[':versionNumber'].categorySearch[':query.:ext'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSearchVersionNumberGeocodeQueryExtQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.search)[':versionNumber']['geocode'][':query.:ext']['$get']>
  >,
) {
  return ['search', '/search/:versionNumber/geocode/:query.:ext', toValue(args)] as const
}

export function getSearchVersionNumberGeocodeQueryExtQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.search)[':versionNumber']['geocode'][':query.:ext']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSearchVersionNumberGeocodeQueryExtQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.search[':versionNumber'].geocode[':query.:ext'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSearchVersionNumberGeocodeQueryExt<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.search)[':versionNumber']['geocode'][':query.:ext']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.search)[':versionNumber']['geocode'][':query.:ext']['$get']>
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
                    (typeof client.search)[':versionNumber']['geocode'][':query.:ext']['$get']
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
                    (typeof client.search)[':versionNumber']['geocode'][':query.:ext']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getSearchVersionNumberGeocodeQueryExtQueryKey>
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
            ReturnType<(typeof client.search)[':versionNumber']['geocode'][':query.:ext']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSearchVersionNumberGeocodeQueryExtQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSearchVersionNumberGeocodeQueryExtQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.search[':versionNumber'].geocode[':query.:ext'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSearchVersionNumberGeometryFilterExtQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.search)[':versionNumber']['geometryFilter.:ext']['$get']>
  >,
) {
  return ['search', '/search/:versionNumber/geometryFilter.:ext', toValue(args)] as const
}

export function getSearchVersionNumberGeometryFilterExtQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.search)[':versionNumber']['geometryFilter.:ext']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSearchVersionNumberGeometryFilterExtQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.search[':versionNumber']['geometryFilter.:ext'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSearchVersionNumberGeometryFilterExt<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.search)[':versionNumber']['geometryFilter.:ext']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.search)[':versionNumber']['geometryFilter.:ext']['$get']>
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
                    (typeof client.search)[':versionNumber']['geometryFilter.:ext']['$get']
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
                    (typeof client.search)[':versionNumber']['geometryFilter.:ext']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getSearchVersionNumberGeometryFilterExtQueryKey>
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
            ReturnType<(typeof client.search)[':versionNumber']['geometryFilter.:ext']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSearchVersionNumberGeometryFilterExtQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSearchVersionNumberGeometryFilterExtQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.search[':versionNumber']['geometryFilter.:ext'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostSearchVersionNumberGeometryFilterExtMutationKey() {
  return ['search', '/search/:versionNumber/geometryFilter.:ext', 'POST'] as const
}

export function getPostSearchVersionNumberGeometryFilterExtMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.search)[':versionNumber']['geometryFilter.:ext']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.search)[':versionNumber']['geometryFilter.:ext']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSearchVersionNumberGeometryFilterExtMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.search)[':versionNumber']['geometryFilter.:ext']['$post']
      >,
    ) {
      return parseResponse(
        client.search[':versionNumber']['geometryFilter.:ext'].$post(args, options),
      )
    },
  })
}

export function usePostSearchVersionNumberGeometryFilterExt<
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
                    (typeof client.search)[':versionNumber']['geometryFilter.:ext']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.search)[':versionNumber']['geometryFilter.:ext']['$post']
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
  const mutationDefaults = getPostSearchVersionNumberGeometryFilterExtMutationOptions<
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

export function getSearchVersionNumberGeometrySearchQueryExtQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.search)[':versionNumber']['geometrySearch'][':query.:ext']['$get']
    >
  >,
) {
  return ['search', '/search/:versionNumber/geometrySearch/:query.:ext', toValue(args)] as const
}

export function getSearchVersionNumberGeometrySearchQueryExtQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.search)[':versionNumber']['geometrySearch'][':query.:ext']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSearchVersionNumberGeometrySearchQueryExtQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.search[':versionNumber'].geometrySearch[':query.:ext'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSearchVersionNumberGeometrySearchQueryExt<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.search)[':versionNumber']['geometrySearch'][':query.:ext']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.search)[':versionNumber']['geometrySearch'][':query.:ext']['$get']
    >
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
                    (typeof client.search)[':versionNumber']['geometrySearch'][':query.:ext']['$get']
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
                    (typeof client.search)[':versionNumber']['geometrySearch'][':query.:ext']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getSearchVersionNumberGeometrySearchQueryExtQueryKey>
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
            ReturnType<
              (typeof client.search)[':versionNumber']['geometrySearch'][':query.:ext']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSearchVersionNumberGeometrySearchQueryExtQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSearchVersionNumberGeometrySearchQueryExtQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.search[':versionNumber'].geometrySearch[':query.:ext'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostSearchVersionNumberGeometrySearchQueryExtMutationKey() {
  return ['search', '/search/:versionNumber/geometrySearch/:query.:ext', 'POST'] as const
}

export function getPostSearchVersionNumberGeometrySearchQueryExtMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.search)[':versionNumber']['geometrySearch'][':query.:ext']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.search)[':versionNumber']['geometrySearch'][':query.:ext']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostSearchVersionNumberGeometrySearchQueryExtMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.search)[':versionNumber']['geometrySearch'][':query.:ext']['$post']
      >,
    ) {
      return parseResponse(
        client.search[':versionNumber'].geometrySearch[':query.:ext'].$post(args, options),
      )
    },
  })
}

export function usePostSearchVersionNumberGeometrySearchQueryExt<
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
                    (typeof client.search)[':versionNumber']['geometrySearch'][':query.:ext']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.search)[':versionNumber']['geometrySearch'][':query.:ext']['$post']
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
  const mutationDefaults = getPostSearchVersionNumberGeometrySearchQueryExtMutationOptions<
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

export function getSearchVersionNumberNearbySearchExtQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.search)[':versionNumber']['nearbySearch']['.:ext']['$get']>
  >,
) {
  return ['search', '/search/:versionNumber/nearbySearch/.:ext', toValue(args)] as const
}

export function getSearchVersionNumberNearbySearchExtQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.search)[':versionNumber']['nearbySearch']['.:ext']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSearchVersionNumberNearbySearchExtQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.search[':versionNumber'].nearbySearch['.:ext'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSearchVersionNumberNearbySearchExt<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.search)[':versionNumber']['nearbySearch']['.:ext']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.search)[':versionNumber']['nearbySearch']['.:ext']['$get']>
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
                    (typeof client.search)[':versionNumber']['nearbySearch']['.:ext']['$get']
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
                    (typeof client.search)[':versionNumber']['nearbySearch']['.:ext']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getSearchVersionNumberNearbySearchExtQueryKey>
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
            ReturnType<(typeof client.search)[':versionNumber']['nearbySearch']['.:ext']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSearchVersionNumberNearbySearchExtQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSearchVersionNumberNearbySearchExtQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.search[':versionNumber'].nearbySearch['.:ext'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSearchVersionNumberPoiSearchQueryExtQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.search)[':versionNumber']['poiSearch'][':query.:ext']['$get']>
  >,
) {
  return ['search', '/search/:versionNumber/poiSearch/:query.:ext', toValue(args)] as const
}

export function getSearchVersionNumberPoiSearchQueryExtQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.search)[':versionNumber']['poiSearch'][':query.:ext']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSearchVersionNumberPoiSearchQueryExtQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.search[':versionNumber'].poiSearch[':query.:ext'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSearchVersionNumberPoiSearchQueryExt<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.search)[':versionNumber']['poiSearch'][':query.:ext']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.search)[':versionNumber']['poiSearch'][':query.:ext']['$get']>
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
                    (typeof client.search)[':versionNumber']['poiSearch'][':query.:ext']['$get']
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
                    (typeof client.search)[':versionNumber']['poiSearch'][':query.:ext']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getSearchVersionNumberPoiSearchQueryExtQueryKey>
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
            ReturnType<(typeof client.search)[':versionNumber']['poiSearch'][':query.:ext']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSearchVersionNumberPoiSearchQueryExtQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSearchVersionNumberPoiSearchQueryExtQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.search[':versionNumber'].poiSearch[':query.:ext'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSearchVersionNumberReverseGeocodeCrossStreetPositionExtQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.search)[':versionNumber']['reverseGeocode']['crossStreet'][':position.:ext']['$get']
    >
  >,
) {
  return [
    'search',
    '/search/:versionNumber/reverseGeocode/crossStreet/:position.:ext',
    toValue(args),
  ] as const
}

export function getSearchVersionNumberReverseGeocodeCrossStreetPositionExtQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.search)[':versionNumber']['reverseGeocode']['crossStreet'][':position.:ext']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getSearchVersionNumberReverseGeocodeCrossStreetPositionExtQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.search[':versionNumber'].reverseGeocode.crossStreet[':position.:ext'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useSearchVersionNumberReverseGeocodeCrossStreetPositionExt<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.search)[':versionNumber']['reverseGeocode']['crossStreet'][':position.:ext']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.search)[':versionNumber']['reverseGeocode']['crossStreet'][':position.:ext']['$get']
    >
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
                    (typeof client.search)[':versionNumber']['reverseGeocode']['crossStreet'][':position.:ext']['$get']
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
                    (typeof client.search)[':versionNumber']['reverseGeocode']['crossStreet'][':position.:ext']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getSearchVersionNumberReverseGeocodeCrossStreetPositionExtQueryKey>
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
            ReturnType<
              (typeof client.search)[':versionNumber']['reverseGeocode']['crossStreet'][':position.:ext']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSearchVersionNumberReverseGeocodeCrossStreetPositionExtQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getSearchVersionNumberReverseGeocodeCrossStreetPositionExtQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.search[':versionNumber'].reverseGeocode.crossStreet[':position.:ext'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getSearchVersionNumberReverseGeocodePositionExtQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.search)[':versionNumber']['reverseGeocode'][':position.:ext']['$get']
    >
  >,
) {
  return ['search', '/search/:versionNumber/reverseGeocode/:position.:ext', toValue(args)] as const
}

export function getSearchVersionNumberReverseGeocodePositionExtQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.search)[':versionNumber']['reverseGeocode'][':position.:ext']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSearchVersionNumberReverseGeocodePositionExtQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.search[':versionNumber'].reverseGeocode[':position.:ext'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSearchVersionNumberReverseGeocodePositionExt<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.search)[':versionNumber']['reverseGeocode'][':position.:ext']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.search)[':versionNumber']['reverseGeocode'][':position.:ext']['$get']
    >
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
                    (typeof client.search)[':versionNumber']['reverseGeocode'][':position.:ext']['$get']
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
                    (typeof client.search)[':versionNumber']['reverseGeocode'][':position.:ext']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getSearchVersionNumberReverseGeocodePositionExtQueryKey>
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
            ReturnType<
              (typeof client.search)[':versionNumber']['reverseGeocode'][':position.:ext']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSearchVersionNumberReverseGeocodePositionExtQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSearchVersionNumberReverseGeocodePositionExtQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.search[':versionNumber'].reverseGeocode[':position.:ext'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSearchVersionNumberRoutedFilterPositionHeadingExtQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.search)[':versionNumber']['routedFilter'][':position'][':heading.:ext']['$get']
    >
  >,
) {
  return [
    'search',
    '/search/:versionNumber/routedFilter/:position/:heading.:ext',
    toValue(args),
  ] as const
}

export function getSearchVersionNumberRoutedFilterPositionHeadingExtQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.search)[':versionNumber']['routedFilter'][':position'][':heading.:ext']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSearchVersionNumberRoutedFilterPositionHeadingExtQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.search[':versionNumber'].routedFilter[':position'][':heading.:ext'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useSearchVersionNumberRoutedFilterPositionHeadingExt<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.search)[':versionNumber']['routedFilter'][':position'][':heading.:ext']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.search)[':versionNumber']['routedFilter'][':position'][':heading.:ext']['$get']
    >
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
                    (typeof client.search)[':versionNumber']['routedFilter'][':position'][':heading.:ext']['$get']
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
                    (typeof client.search)[':versionNumber']['routedFilter'][':position'][':heading.:ext']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getSearchVersionNumberRoutedFilterPositionHeadingExtQueryKey>
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
            ReturnType<
              (typeof client.search)[':versionNumber']['routedFilter'][':position'][':heading.:ext']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSearchVersionNumberRoutedFilterPositionHeadingExtQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSearchVersionNumberRoutedFilterPositionHeadingExtQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.search[':versionNumber'].routedFilter[':position'][':heading.:ext'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPostSearchVersionNumberRoutedFilterPositionHeadingExtMutationKey() {
  return ['search', '/search/:versionNumber/routedFilter/:position/:heading.:ext', 'POST'] as const
}

export function getPostSearchVersionNumberRoutedFilterPositionHeadingExtMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.search)[':versionNumber']['routedFilter'][':position'][':heading.:ext']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.search)[':versionNumber']['routedFilter'][':position'][':heading.:ext']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostSearchVersionNumberRoutedFilterPositionHeadingExtMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.search)[':versionNumber']['routedFilter'][':position'][':heading.:ext']['$post']
      >,
    ) {
      return parseResponse(
        client.search[':versionNumber'].routedFilter[':position'][':heading.:ext'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostSearchVersionNumberRoutedFilterPositionHeadingExt<
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
                    (typeof client.search)[':versionNumber']['routedFilter'][':position'][':heading.:ext']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.search)[':versionNumber']['routedFilter'][':position'][':heading.:ext']['$post']
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
  const mutationDefaults = getPostSearchVersionNumberRoutedFilterPositionHeadingExtMutationOptions<
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

export function getSearchVersionNumberRoutedSearchQueryPositionHeadingExtQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.search)[':versionNumber']['routedSearch'][':query'][':position'][':heading.:ext']['$get']
    >
  >,
) {
  return [
    'search',
    '/search/:versionNumber/routedSearch/:query/:position/:heading.:ext',
    toValue(args),
  ] as const
}

export function getSearchVersionNumberRoutedSearchQueryPositionHeadingExtQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.search)[':versionNumber']['routedSearch'][':query'][':position'][':heading.:ext']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getSearchVersionNumberRoutedSearchQueryPositionHeadingExtQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.search[':versionNumber'].routedSearch[':query'][':position'][':heading.:ext'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useSearchVersionNumberRoutedSearchQueryPositionHeadingExt<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.search)[':versionNumber']['routedSearch'][':query'][':position'][':heading.:ext']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.search)[':versionNumber']['routedSearch'][':query'][':position'][':heading.:ext']['$get']
    >
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
                    (typeof client.search)[':versionNumber']['routedSearch'][':query'][':position'][':heading.:ext']['$get']
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
                    (typeof client.search)[':versionNumber']['routedSearch'][':query'][':position'][':heading.:ext']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getSearchVersionNumberRoutedSearchQueryPositionHeadingExtQueryKey>
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
            ReturnType<
              (typeof client.search)[':versionNumber']['routedSearch'][':query'][':position'][':heading.:ext']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSearchVersionNumberRoutedSearchQueryPositionHeadingExtQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getSearchVersionNumberRoutedSearchQueryPositionHeadingExtQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.search[':versionNumber'].routedSearch[':query'][':position'][':heading.:ext'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getSearchVersionNumberSQueryExtQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.search)[':versionNumber']['s'][':query.:ext']['$get']>
  >,
) {
  return ['search', '/search/:versionNumber/s/:query.:ext', toValue(args)] as const
}

export function getSearchVersionNumberSQueryExtQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.search)[':versionNumber']['s'][':query.:ext']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSearchVersionNumberSQueryExtQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.search[':versionNumber'].s[':query.:ext'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSearchVersionNumberSQueryExt<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.search)[':versionNumber']['s'][':query.:ext']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.search)[':versionNumber']['s'][':query.:ext']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.search)[':versionNumber']['s'][':query.:ext']['$get']>
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
                  ReturnType<(typeof client.search)[':versionNumber']['s'][':query.:ext']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getSearchVersionNumberSQueryExtQueryKey>
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
          Awaited<ReturnType<(typeof client.search)[':versionNumber']['s'][':query.:ext']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSearchVersionNumberSQueryExtQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSearchVersionNumberSQueryExtQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.search[':versionNumber'].s[':query.:ext'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSearchVersionNumberSearchQueryExtQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.search)[':versionNumber']['search'][':query.:ext']['$get']>
  >,
) {
  return ['search', '/search/:versionNumber/search/:query.:ext', toValue(args)] as const
}

export function getSearchVersionNumberSearchQueryExtQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.search)[':versionNumber']['search'][':query.:ext']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSearchVersionNumberSearchQueryExtQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.search[':versionNumber'].search[':query.:ext'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSearchVersionNumberSearchQueryExt<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.search)[':versionNumber']['search'][':query.:ext']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.search)[':versionNumber']['search'][':query.:ext']['$get']>
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
                    (typeof client.search)[':versionNumber']['search'][':query.:ext']['$get']
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
                    (typeof client.search)[':versionNumber']['search'][':query.:ext']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getSearchVersionNumberSearchQueryExtQueryKey>
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
            ReturnType<(typeof client.search)[':versionNumber']['search'][':query.:ext']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSearchVersionNumberSearchQueryExtQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSearchVersionNumberSearchQueryExtQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.search[':versionNumber'].search[':query.:ext'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostSearchVersionNumberSearchAlongRouteQueryExtMutationKey() {
  return ['search', '/search/:versionNumber/searchAlongRoute/:query.:ext', 'POST'] as const
}

export function getPostSearchVersionNumberSearchAlongRouteQueryExtMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.search)[':versionNumber']['searchAlongRoute'][':query.:ext']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.search)[':versionNumber']['searchAlongRoute'][':query.:ext']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostSearchVersionNumberSearchAlongRouteQueryExtMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.search)[':versionNumber']['searchAlongRoute'][':query.:ext']['$post']
      >,
    ) {
      return parseResponse(
        client.search[':versionNumber'].searchAlongRoute[':query.:ext'].$post(args, options),
      )
    },
  })
}

export function usePostSearchVersionNumberSearchAlongRouteQueryExt<
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
                    (typeof client.search)[':versionNumber']['searchAlongRoute'][':query.:ext']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.search)[':versionNumber']['searchAlongRoute'][':query.:ext']['$post']
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
  const mutationDefaults = getPostSearchVersionNumberSearchAlongRouteQueryExtMutationOptions<
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

export function getSearchVersionNumberStructuredGeocodeExtQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.search)[':versionNumber']['structuredGeocode.:ext']['$get']>
  >,
) {
  return ['search', '/search/:versionNumber/structuredGeocode.:ext', toValue(args)] as const
}

export function getSearchVersionNumberStructuredGeocodeExtQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.search)[':versionNumber']['structuredGeocode.:ext']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSearchVersionNumberStructuredGeocodeExtQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.search[':versionNumber']['structuredGeocode.:ext'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSearchVersionNumberStructuredGeocodeExt<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.search)[':versionNumber']['structuredGeocode.:ext']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.search)[':versionNumber']['structuredGeocode.:ext']['$get']>
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
                    (typeof client.search)[':versionNumber']['structuredGeocode.:ext']['$get']
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
                    (typeof client.search)[':versionNumber']['structuredGeocode.:ext']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getSearchVersionNumberStructuredGeocodeExtQueryKey>
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
            ReturnType<(typeof client.search)[':versionNumber']['structuredGeocode.:ext']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSearchVersionNumberStructuredGeocodeExtQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSearchVersionNumberStructuredGeocodeExtQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.search[':versionNumber']['structuredGeocode.:ext'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
