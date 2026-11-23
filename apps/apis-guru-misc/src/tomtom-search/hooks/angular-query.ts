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

export function getSearchKey() {
  return ['search'] as const
}

export function getSearchVersionNumberAdditionalDataExtQueryKey(
  args: InferRequestType<(typeof client.search)[':versionNumber']['additionalData.{ext}']['$get']>,
) {
  return ['search', '/search/:versionNumber/additionalData.{ext}', args] as const
}

export function getSearchVersionNumberAdditionalDataExtQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.search)[':versionNumber']['additionalData.{ext}']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.search)[':versionNumber']['additionalData.{ext}']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.search)[':versionNumber']['additionalData.{ext}']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSearchVersionNumberAdditionalDataExtQueryKey>
  >({
    queryKey: getSearchVersionNumberAdditionalDataExtQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.search[':versionNumber']['additionalData.{ext}'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectSearchVersionNumberAdditionalDataExt<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.search)[':versionNumber']['additionalData.{ext}']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.search)[':versionNumber']['additionalData.{ext}']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.search)[':versionNumber']['additionalData.{ext}']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSearchVersionNumberAdditionalDataExtQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getSearchVersionNumberAdditionalDataExtQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getSearchVersionNumberCSCategoryExtQueryKey(
  args: InferRequestType<(typeof client.search)[':versionNumber']['cS'][':category.{ext}']['$get']>,
) {
  return ['search', '/search/:versionNumber/cS/:category.{ext}', args] as const
}

export function getSearchVersionNumberCSCategoryExtQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.search)[':versionNumber']['cS'][':category.{ext}']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.search)[':versionNumber']['cS'][':category.{ext}']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.search)[':versionNumber']['cS'][':category.{ext}']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSearchVersionNumberCSCategoryExtQueryKey>
  >({
    queryKey: getSearchVersionNumberCSCategoryExtQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.search[':versionNumber'].cS[':category.{ext}'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectSearchVersionNumberCSCategoryExt<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.search)[':versionNumber']['cS'][':category.{ext}']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.search)[':versionNumber']['cS'][':category.{ext}']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.search)[':versionNumber']['cS'][':category.{ext}']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSearchVersionNumberCSCategoryExtQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getSearchVersionNumberCSCategoryExtQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getSearchVersionNumberCategorySearchQueryExtQueryKey(
  args: InferRequestType<
    (typeof client.search)[':versionNumber']['categorySearch'][':query.{ext}']['$get']
  >,
) {
  return ['search', '/search/:versionNumber/categorySearch/:query.{ext}', args] as const
}

export function getSearchVersionNumberCategorySearchQueryExtQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.search)[':versionNumber']['categorySearch'][':query.{ext}']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.search)[':versionNumber']['categorySearch'][':query.{ext}']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.search)[':versionNumber']['categorySearch'][':query.{ext}']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSearchVersionNumberCategorySearchQueryExtQueryKey>
  >({
    queryKey: getSearchVersionNumberCategorySearchQueryExtQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.search[':versionNumber'].categorySearch[':query.{ext}'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectSearchVersionNumberCategorySearchQueryExt<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.search)[':versionNumber']['categorySearch'][':query.{ext}']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.search)[':versionNumber']['categorySearch'][':query.{ext}']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.search)[':versionNumber']['categorySearch'][':query.{ext}']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSearchVersionNumberCategorySearchQueryExtQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getSearchVersionNumberCategorySearchQueryExtQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getSearchVersionNumberGeocodeQueryExtQueryKey(
  args: InferRequestType<
    (typeof client.search)[':versionNumber']['geocode'][':query.{ext}']['$get']
  >,
) {
  return ['search', '/search/:versionNumber/geocode/:query.{ext}', args] as const
}

export function getSearchVersionNumberGeocodeQueryExtQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.search)[':versionNumber']['geocode'][':query.{ext}']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.search)[':versionNumber']['geocode'][':query.{ext}']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.search)[':versionNumber']['geocode'][':query.{ext}']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSearchVersionNumberGeocodeQueryExtQueryKey>
  >({
    queryKey: getSearchVersionNumberGeocodeQueryExtQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.search[':versionNumber'].geocode[':query.{ext}'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectSearchVersionNumberGeocodeQueryExt<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.search)[':versionNumber']['geocode'][':query.{ext}']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.search)[':versionNumber']['geocode'][':query.{ext}']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.search)[':versionNumber']['geocode'][':query.{ext}']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSearchVersionNumberGeocodeQueryExtQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getSearchVersionNumberGeocodeQueryExtQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getSearchVersionNumberGeometryFilterExtQueryKey(
  args: InferRequestType<(typeof client.search)[':versionNumber']['geometryFilter.{ext}']['$get']>,
) {
  return ['search', '/search/:versionNumber/geometryFilter.{ext}', args] as const
}

export function getSearchVersionNumberGeometryFilterExtQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.search)[':versionNumber']['geometryFilter.{ext}']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.search)[':versionNumber']['geometryFilter.{ext}']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.search)[':versionNumber']['geometryFilter.{ext}']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSearchVersionNumberGeometryFilterExtQueryKey>
  >({
    queryKey: getSearchVersionNumberGeometryFilterExtQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.search[':versionNumber']['geometryFilter.{ext}'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectSearchVersionNumberGeometryFilterExt<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.search)[':versionNumber']['geometryFilter.{ext}']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.search)[':versionNumber']['geometryFilter.{ext}']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.search)[':versionNumber']['geometryFilter.{ext}']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSearchVersionNumberGeometryFilterExtQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getSearchVersionNumberGeometryFilterExtQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostSearchVersionNumberGeometryFilterExtMutationKey() {
  return ['search', '/search/:versionNumber/geometryFilter.{ext}', 'POST'] as const
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
            ReturnType<(typeof client.search)[':versionNumber']['geometryFilter.{ext}']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.search)[':versionNumber']['geometryFilter.{ext}']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSearchVersionNumberGeometryFilterExtMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.search)[':versionNumber']['geometryFilter.{ext}']['$post']
      >,
    ) {
      return parseResponse(
        client.search[':versionNumber']['geometryFilter.{ext}'].$post(args, options),
      )
    },
  })
}

export function injectPostSearchVersionNumberGeometryFilterExt<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.search)[':versionNumber']['geometryFilter.{ext}']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.search)[':versionNumber']['geometryFilter.{ext}']['$post']>,
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
    const mutationDefaults = getPostSearchVersionNumberGeometryFilterExtMutationOptions<
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

export function getSearchVersionNumberGeometrySearchQueryExtQueryKey(
  args: InferRequestType<
    (typeof client.search)[':versionNumber']['geometrySearch'][':query.{ext}']['$get']
  >,
) {
  return ['search', '/search/:versionNumber/geometrySearch/:query.{ext}', args] as const
}

export function getSearchVersionNumberGeometrySearchQueryExtQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.search)[':versionNumber']['geometrySearch'][':query.{ext}']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.search)[':versionNumber']['geometrySearch'][':query.{ext}']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.search)[':versionNumber']['geometrySearch'][':query.{ext}']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSearchVersionNumberGeometrySearchQueryExtQueryKey>
  >({
    queryKey: getSearchVersionNumberGeometrySearchQueryExtQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.search[':versionNumber'].geometrySearch[':query.{ext}'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectSearchVersionNumberGeometrySearchQueryExt<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.search)[':versionNumber']['geometrySearch'][':query.{ext}']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.search)[':versionNumber']['geometrySearch'][':query.{ext}']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.search)[':versionNumber']['geometrySearch'][':query.{ext}']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSearchVersionNumberGeometrySearchQueryExtQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getSearchVersionNumberGeometrySearchQueryExtQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPostSearchVersionNumberGeometrySearchQueryExtMutationKey() {
  return ['search', '/search/:versionNumber/geometrySearch/:query.{ext}', 'POST'] as const
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
              (typeof client.search)[':versionNumber']['geometrySearch'][':query.{ext}']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.search)[':versionNumber']['geometrySearch'][':query.{ext}']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostSearchVersionNumberGeometrySearchQueryExtMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.search)[':versionNumber']['geometrySearch'][':query.{ext}']['$post']
      >,
    ) {
      return parseResponse(
        client.search[':versionNumber'].geometrySearch[':query.{ext}'].$post(args, options),
      )
    },
  })
}

export function injectPostSearchVersionNumberGeometrySearchQueryExt<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.search)[':versionNumber']['geometrySearch'][':query.{ext}']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.search)[':versionNumber']['geometrySearch'][':query.{ext}']['$post']
        >,
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
    const mutationDefaults = getPostSearchVersionNumberGeometrySearchQueryExtMutationOptions<
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

export function getSearchVersionNumberNearbySearchExtQueryKey(
  args: InferRequestType<
    (typeof client.search)[':versionNumber']['nearbySearch']['.{ext}']['$get']
  >,
) {
  return ['search', '/search/:versionNumber/nearbySearch/.{ext}', args] as const
}

export function getSearchVersionNumberNearbySearchExtQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.search)[':versionNumber']['nearbySearch']['.{ext}']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.search)[':versionNumber']['nearbySearch']['.{ext}']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.search)[':versionNumber']['nearbySearch']['.{ext}']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSearchVersionNumberNearbySearchExtQueryKey>
  >({
    queryKey: getSearchVersionNumberNearbySearchExtQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.search[':versionNumber'].nearbySearch['.{ext}'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectSearchVersionNumberNearbySearchExt<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.search)[':versionNumber']['nearbySearch']['.{ext}']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.search)[':versionNumber']['nearbySearch']['.{ext}']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.search)[':versionNumber']['nearbySearch']['.{ext}']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSearchVersionNumberNearbySearchExtQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getSearchVersionNumberNearbySearchExtQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getSearchVersionNumberPoiSearchQueryExtQueryKey(
  args: InferRequestType<
    (typeof client.search)[':versionNumber']['poiSearch'][':query.{ext}']['$get']
  >,
) {
  return ['search', '/search/:versionNumber/poiSearch/:query.{ext}', args] as const
}

export function getSearchVersionNumberPoiSearchQueryExtQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.search)[':versionNumber']['poiSearch'][':query.{ext}']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.search)[':versionNumber']['poiSearch'][':query.{ext}']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.search)[':versionNumber']['poiSearch'][':query.{ext}']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSearchVersionNumberPoiSearchQueryExtQueryKey>
  >({
    queryKey: getSearchVersionNumberPoiSearchQueryExtQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.search[':versionNumber'].poiSearch[':query.{ext}'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectSearchVersionNumberPoiSearchQueryExt<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.search)[':versionNumber']['poiSearch'][':query.{ext}']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.search)[':versionNumber']['poiSearch'][':query.{ext}']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.search)[':versionNumber']['poiSearch'][':query.{ext}']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSearchVersionNumberPoiSearchQueryExtQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getSearchVersionNumberPoiSearchQueryExtQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getSearchVersionNumberReverseGeocodeCrossStreetPositionExtQueryKey(
  args: InferRequestType<
    (typeof client.search)[':versionNumber']['reverseGeocode']['crossStreet'][':position.{ext}']['$get']
  >,
) {
  return [
    'search',
    '/search/:versionNumber/reverseGeocode/crossStreet/:position.{ext}',
    args,
  ] as const
}

export function getSearchVersionNumberReverseGeocodeCrossStreetPositionExtQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.search)[':versionNumber']['reverseGeocode']['crossStreet'][':position.{ext}']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.search)[':versionNumber']['reverseGeocode']['crossStreet'][':position.{ext}']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.search)[':versionNumber']['reverseGeocode']['crossStreet'][':position.{ext}']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSearchVersionNumberReverseGeocodeCrossStreetPositionExtQueryKey>
  >({
    queryKey: getSearchVersionNumberReverseGeocodeCrossStreetPositionExtQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.search[':versionNumber'].reverseGeocode.crossStreet[':position.{ext}'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectSearchVersionNumberReverseGeocodeCrossStreetPositionExt<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.search)[':versionNumber']['reverseGeocode']['crossStreet'][':position.{ext}']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.search)[':versionNumber']['reverseGeocode']['crossStreet'][':position.{ext}']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.search)[':versionNumber']['reverseGeocode']['crossStreet'][':position.{ext}']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSearchVersionNumberReverseGeocodeCrossStreetPositionExtQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getSearchVersionNumberReverseGeocodeCrossStreetPositionExtQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getSearchVersionNumberReverseGeocodePositionExtQueryKey(
  args: InferRequestType<
    (typeof client.search)[':versionNumber']['reverseGeocode'][':position.{ext}']['$get']
  >,
) {
  return ['search', '/search/:versionNumber/reverseGeocode/:position.{ext}', args] as const
}

export function getSearchVersionNumberReverseGeocodePositionExtQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.search)[':versionNumber']['reverseGeocode'][':position.{ext}']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.search)[':versionNumber']['reverseGeocode'][':position.{ext}']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.search)[':versionNumber']['reverseGeocode'][':position.{ext}']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSearchVersionNumberReverseGeocodePositionExtQueryKey>
  >({
    queryKey: getSearchVersionNumberReverseGeocodePositionExtQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.search[':versionNumber'].reverseGeocode[':position.{ext}'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectSearchVersionNumberReverseGeocodePositionExt<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.search)[':versionNumber']['reverseGeocode'][':position.{ext}']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.search)[':versionNumber']['reverseGeocode'][':position.{ext}']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.search)[':versionNumber']['reverseGeocode'][':position.{ext}']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSearchVersionNumberReverseGeocodePositionExtQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getSearchVersionNumberReverseGeocodePositionExtQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getSearchVersionNumberRoutedFilterPositionHeadingExtQueryKey(
  args: InferRequestType<
    (typeof client.search)[':versionNumber']['routedFilter'][':position'][':heading.{ext}']['$get']
  >,
) {
  return ['search', '/search/:versionNumber/routedFilter/:position/:heading.{ext}', args] as const
}

export function getSearchVersionNumberRoutedFilterPositionHeadingExtQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.search)[':versionNumber']['routedFilter'][':position'][':heading.{ext}']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.search)[':versionNumber']['routedFilter'][':position'][':heading.{ext}']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.search)[':versionNumber']['routedFilter'][':position'][':heading.{ext}']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSearchVersionNumberRoutedFilterPositionHeadingExtQueryKey>
  >({
    queryKey: getSearchVersionNumberRoutedFilterPositionHeadingExtQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.search[':versionNumber'].routedFilter[':position'][':heading.{ext}'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectSearchVersionNumberRoutedFilterPositionHeadingExt<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.search)[':versionNumber']['routedFilter'][':position'][':heading.{ext}']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.search)[':versionNumber']['routedFilter'][':position'][':heading.{ext}']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.search)[':versionNumber']['routedFilter'][':position'][':heading.{ext}']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSearchVersionNumberRoutedFilterPositionHeadingExtQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getSearchVersionNumberRoutedFilterPositionHeadingExtQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPostSearchVersionNumberRoutedFilterPositionHeadingExtMutationKey() {
  return ['search', '/search/:versionNumber/routedFilter/:position/:heading.{ext}', 'POST'] as const
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
              (typeof client.search)[':versionNumber']['routedFilter'][':position'][':heading.{ext}']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.search)[':versionNumber']['routedFilter'][':position'][':heading.{ext}']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostSearchVersionNumberRoutedFilterPositionHeadingExtMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.search)[':versionNumber']['routedFilter'][':position'][':heading.{ext}']['$post']
      >,
    ) {
      return parseResponse(
        client.search[':versionNumber'].routedFilter[':position'][':heading.{ext}'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostSearchVersionNumberRoutedFilterPositionHeadingExt<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.search)[':versionNumber']['routedFilter'][':position'][':heading.{ext}']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.search)[':versionNumber']['routedFilter'][':position'][':heading.{ext}']['$post']
        >,
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
    const mutationDefaults =
      getPostSearchVersionNumberRoutedFilterPositionHeadingExtMutationOptions<
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

export function getSearchVersionNumberRoutedSearchQueryPositionHeadingExtQueryKey(
  args: InferRequestType<
    (typeof client.search)[':versionNumber']['routedSearch'][':query'][':position'][':heading.{ext}']['$get']
  >,
) {
  return [
    'search',
    '/search/:versionNumber/routedSearch/:query/:position/:heading.{ext}',
    args,
  ] as const
}

export function getSearchVersionNumberRoutedSearchQueryPositionHeadingExtQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.search)[':versionNumber']['routedSearch'][':query'][':position'][':heading.{ext}']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.search)[':versionNumber']['routedSearch'][':query'][':position'][':heading.{ext}']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.search)[':versionNumber']['routedSearch'][':query'][':position'][':heading.{ext}']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSearchVersionNumberRoutedSearchQueryPositionHeadingExtQueryKey>
  >({
    queryKey: getSearchVersionNumberRoutedSearchQueryPositionHeadingExtQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.search[':versionNumber'].routedSearch[':query'][':position'][':heading.{ext}'].$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function injectSearchVersionNumberRoutedSearchQueryPositionHeadingExt<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.search)[':versionNumber']['routedSearch'][':query'][':position'][':heading.{ext}']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.search)[':versionNumber']['routedSearch'][':query'][':position'][':heading.{ext}']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.search)[':versionNumber']['routedSearch'][':query'][':position'][':heading.{ext}']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSearchVersionNumberRoutedSearchQueryPositionHeadingExtQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getSearchVersionNumberRoutedSearchQueryPositionHeadingExtQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getSearchVersionNumberSQueryExtQueryKey(
  args: InferRequestType<(typeof client.search)[':versionNumber']['s'][':query.{ext}']['$get']>,
) {
  return ['search', '/search/:versionNumber/s/:query.{ext}', args] as const
}

export function getSearchVersionNumberSQueryExtQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.search)[':versionNumber']['s'][':query.{ext}']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.search)[':versionNumber']['s'][':query.{ext}']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.search)[':versionNumber']['s'][':query.{ext}']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSearchVersionNumberSQueryExtQueryKey>
  >({
    queryKey: getSearchVersionNumberSQueryExtQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.search[':versionNumber'].s[':query.{ext}'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectSearchVersionNumberSQueryExt<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.search)[':versionNumber']['s'][':query.{ext}']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.search)[':versionNumber']['s'][':query.{ext}']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.search)[':versionNumber']['s'][':query.{ext}']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSearchVersionNumberSQueryExtQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getSearchVersionNumberSQueryExtQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getSearchVersionNumberSearchQueryExtQueryKey(
  args: InferRequestType<
    (typeof client.search)[':versionNumber']['search'][':query.{ext}']['$get']
  >,
) {
  return ['search', '/search/:versionNumber/search/:query.{ext}', args] as const
}

export function getSearchVersionNumberSearchQueryExtQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.search)[':versionNumber']['search'][':query.{ext}']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.search)[':versionNumber']['search'][':query.{ext}']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.search)[':versionNumber']['search'][':query.{ext}']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSearchVersionNumberSearchQueryExtQueryKey>
  >({
    queryKey: getSearchVersionNumberSearchQueryExtQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.search[':versionNumber'].search[':query.{ext}'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectSearchVersionNumberSearchQueryExt<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.search)[':versionNumber']['search'][':query.{ext}']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.search)[':versionNumber']['search'][':query.{ext}']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.search)[':versionNumber']['search'][':query.{ext}']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSearchVersionNumberSearchQueryExtQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getSearchVersionNumberSearchQueryExtQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostSearchVersionNumberSearchAlongRouteQueryExtMutationKey() {
  return ['search', '/search/:versionNumber/searchAlongRoute/:query.{ext}', 'POST'] as const
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
              (typeof client.search)[':versionNumber']['searchAlongRoute'][':query.{ext}']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.search)[':versionNumber']['searchAlongRoute'][':query.{ext}']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostSearchVersionNumberSearchAlongRouteQueryExtMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.search)[':versionNumber']['searchAlongRoute'][':query.{ext}']['$post']
      >,
    ) {
      return parseResponse(
        client.search[':versionNumber'].searchAlongRoute[':query.{ext}'].$post(args, options),
      )
    },
  })
}

export function injectPostSearchVersionNumberSearchAlongRouteQueryExt<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.search)[':versionNumber']['searchAlongRoute'][':query.{ext}']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.search)[':versionNumber']['searchAlongRoute'][':query.{ext}']['$post']
        >,
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
    const mutationDefaults = getPostSearchVersionNumberSearchAlongRouteQueryExtMutationOptions<
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

export function getSearchVersionNumberStructuredGeocodeExtQueryKey(
  args: InferRequestType<
    (typeof client.search)[':versionNumber']['structuredGeocode.{ext}']['$get']
  >,
) {
  return ['search', '/search/:versionNumber/structuredGeocode.{ext}', args] as const
}

export function getSearchVersionNumberStructuredGeocodeExtQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.search)[':versionNumber']['structuredGeocode.{ext}']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.search)[':versionNumber']['structuredGeocode.{ext}']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.search)[':versionNumber']['structuredGeocode.{ext}']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSearchVersionNumberStructuredGeocodeExtQueryKey>
  >({
    queryKey: getSearchVersionNumberStructuredGeocodeExtQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.search[':versionNumber']['structuredGeocode.{ext}'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectSearchVersionNumberStructuredGeocodeExt<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.search)[':versionNumber']['structuredGeocode.{ext}']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.search)[':versionNumber']['structuredGeocode.{ext}']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.search)[':versionNumber']['structuredGeocode.{ext}']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSearchVersionNumberStructuredGeocodeExtQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getSearchVersionNumberStructuredGeocodeExtQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}
