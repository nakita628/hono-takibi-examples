import { createQuery, createMutation, queryOptions, mutationOptions } from '@tanstack/solid-query'
import type {
  UndefinedInitialDataOptions,
  CreateMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/solid-query'
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

export function createPostV3AccountHotelsSetLiveOnGoogle<
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
                  ReturnType<(typeof client.v3)[':account']['hotels:setLiveOnGoogle']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v3)[':account']['hotels:setLiveOnGoogle']['$post']>,
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
    const mutationDefaults = getPostV3AccountHotelsSetLiveOnGoogleMutationOptions<
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

export function getV3NameQueryKey(args: InferRequestType<(typeof client.v3)[':name']['$get']>) {
  return ['v3', '/v3/:name', args] as const
}

export function getV3NameQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v3)[':name']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.v3)[':name']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v3)[':name']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV3NameQueryKey>
  >({
    queryKey: getV3NameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v3[':name'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV3Name<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v3)[':name']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v3)[':name']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v3)[':name']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV3NameQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV3NameQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createDeleteV3Name<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v3)[':name']['$delete']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.v3)[':name']['$delete']>,
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
    const mutationDefaults = getDeleteV3NameMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPatchV3Name<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v3)[':name']['$patch']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.v3)[':name']['$patch']>,
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
    const mutationDefaults = getPatchV3NameMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV3NameFreeBookingLinksReportViewsQueryQueryKey(
  args: InferRequestType<(typeof client.v3)[':name']['freeBookingLinksReportViews:query']['$get']>,
) {
  return ['v3', '/v3/:name/freeBookingLinksReportViews:query', args] as const
}

export function getV3NameFreeBookingLinksReportViewsQueryQueryOptions<
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
  args: InferRequestType<(typeof client.v3)[':name']['freeBookingLinksReportViews:query']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV3NameFreeBookingLinksReportViewsQueryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v3[':name']['freeBookingLinksReportViews:query'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV3NameFreeBookingLinksReportViewsQuery<
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
  args: () => InferRequestType<
    (typeof client.v3)[':name']['freeBookingLinksReportViews:query']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          ReturnType<typeof getV3NameFreeBookingLinksReportViewsQueryQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV3NameFreeBookingLinksReportViewsQueryQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getV3NameParticipationReportViewsQueryQueryKey(
  args: InferRequestType<(typeof client.v3)[':name']['participationReportViews:query']['$get']>,
) {
  return ['v3', '/v3/:name/participationReportViews:query', args] as const
}

export function getV3NameParticipationReportViewsQueryQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v3)[':name']['participationReportViews:query']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v3)[':name']['participationReportViews:query']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV3NameParticipationReportViewsQueryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v3[':name']['participationReportViews:query'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV3NameParticipationReportViewsQuery<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v3)[':name']['participationReportViews:query']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v3)[':name']['participationReportViews:query']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          ReturnType<typeof getV3NameParticipationReportViewsQueryQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV3NameParticipationReportViewsQueryQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV3NamePropertyPerformanceReportViewsQueryQueryKey(
  args: InferRequestType<
    (typeof client.v3)[':name']['propertyPerformanceReportViews:query']['$get']
  >,
) {
  return ['v3', '/v3/:name/propertyPerformanceReportViews:query', args] as const
}

export function getV3NamePropertyPerformanceReportViewsQueryQueryOptions<
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
  args: InferRequestType<
    (typeof client.v3)[':name']['propertyPerformanceReportViews:query']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV3NamePropertyPerformanceReportViewsQueryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v3[':name']['propertyPerformanceReportViews:query'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV3NamePropertyPerformanceReportViewsQuery<
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
  args: () => InferRequestType<
    (typeof client.v3)[':name']['propertyPerformanceReportViews:query']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          ReturnType<typeof getV3NamePropertyPerformanceReportViewsQueryQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV3NamePropertyPerformanceReportViewsQueryQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getV3ParentAccountLinksQueryKey(
  args: InferRequestType<(typeof client.v3)[':parent']['accountLinks']['$get']>,
) {
  return ['v3', '/v3/:parent/accountLinks', args] as const
}

export function getV3ParentAccountLinksQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v3)[':parent']['accountLinks']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v3)[':parent']['accountLinks']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV3ParentAccountLinksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v3[':parent'].accountLinks.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV3ParentAccountLinks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v3)[':parent']['accountLinks']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v3)[':parent']['accountLinks']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV3ParentAccountLinksQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostV3ParentAccountLinks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPostV3ParentAccountLinksMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV3ParentBrandsQueryKey(
  args: InferRequestType<(typeof client.v3)[':parent']['brands']['$get']>,
) {
  return ['v3', '/v3/:parent/brands', args] as const
}

export function getV3ParentBrandsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v3)[':parent']['brands']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v3)[':parent']['brands']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v3)[':parent']['brands']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3ParentBrandsQueryKey>
  >({
    queryKey: getV3ParentBrandsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v3[':parent'].brands.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV3ParentBrands<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v3)[':parent']['brands']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v3)[':parent']['brands']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3)[':parent']['brands']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV3ParentBrandsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV3ParentBrandsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostV3ParentBrands<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPostV3ParentBrandsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV3ParentHotelViewsQueryKey(
  args: InferRequestType<(typeof client.v3)[':parent']['hotelViews']['$get']>,
) {
  return ['v3', '/v3/:parent/hotelViews', args] as const
}

export function getV3ParentHotelViewsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v3)[':parent']['hotelViews']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v3)[':parent']['hotelViews']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV3ParentHotelViewsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v3[':parent'].hotelViews.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV3ParentHotelViews<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v3)[':parent']['hotelViews']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v3)[':parent']['hotelViews']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV3ParentHotelViewsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getV3ParentHotelViewsSummarizeQueryKey(
  args: InferRequestType<(typeof client.v3)[':parent']['hotelViews:summarize']['$get']>,
) {
  return ['v3', '/v3/:parent/hotelViews:summarize', args] as const
}

export function getV3ParentHotelViewsSummarizeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v3)[':parent']['hotelViews:summarize']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v3)[':parent']['hotelViews:summarize']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV3ParentHotelViewsSummarizeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v3[':parent']['hotelViews:summarize'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV3ParentHotelViewsSummarize<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v3)[':parent']['hotelViews:summarize']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v3)[':parent']['hotelViews:summarize']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV3ParentHotelViewsSummarizeQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV3ParentIconsQueryKey(
  args: InferRequestType<(typeof client.v3)[':parent']['icons']['$get']>,
) {
  return ['v3', '/v3/:parent/icons', args] as const
}

export function getV3ParentIconsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v3)[':parent']['icons']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v3)[':parent']['icons']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v3)[':parent']['icons']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3ParentIconsQueryKey>
  >({
    queryKey: getV3ParentIconsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v3[':parent'].icons.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV3ParentIcons<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v3)[':parent']['icons']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v3)[':parent']['icons']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3)[':parent']['icons']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV3ParentIconsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV3ParentIconsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostV3ParentIcons<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPostV3ParentIconsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostV3ParentListingsVerify<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPostV3ParentListingsVerifyMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV3ParentPriceAccuracyViewsQueryKey(
  args: InferRequestType<(typeof client.v3)[':parent']['priceAccuracyViews']['$get']>,
) {
  return ['v3', '/v3/:parent/priceAccuracyViews', args] as const
}

export function getV3ParentPriceAccuracyViewsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v3)[':parent']['priceAccuracyViews']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v3)[':parent']['priceAccuracyViews']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV3ParentPriceAccuracyViewsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v3[':parent'].priceAccuracyViews.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV3ParentPriceAccuracyViews<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v3)[':parent']['priceAccuracyViews']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v3)[':parent']['priceAccuracyViews']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV3ParentPriceAccuracyViewsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV3ParentPriceAccuracyViewsSummarizeQueryKey(
  args: InferRequestType<(typeof client.v3)[':parent']['priceAccuracyViews:summarize']['$get']>,
) {
  return ['v3', '/v3/:parent/priceAccuracyViews:summarize', args] as const
}

export function getV3ParentPriceAccuracyViewsSummarizeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v3)[':parent']['priceAccuracyViews:summarize']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v3)[':parent']['priceAccuracyViews:summarize']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV3ParentPriceAccuracyViewsSummarizeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v3[':parent']['priceAccuracyViews:summarize'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV3ParentPriceAccuracyViewsSummarize<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v3)[':parent']['priceAccuracyViews:summarize']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v3)[':parent']['priceAccuracyViews:summarize']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          ReturnType<typeof getV3ParentPriceAccuracyViewsSummarizeQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV3ParentPriceAccuracyViewsSummarizeQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV3ParentPriceCoverageViewsQueryKey(
  args: InferRequestType<(typeof client.v3)[':parent']['priceCoverageViews']['$get']>,
) {
  return ['v3', '/v3/:parent/priceCoverageViews', args] as const
}

export function getV3ParentPriceCoverageViewsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v3)[':parent']['priceCoverageViews']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v3)[':parent']['priceCoverageViews']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV3ParentPriceCoverageViewsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v3[':parent'].priceCoverageViews.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV3ParentPriceCoverageViews<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v3)[':parent']['priceCoverageViews']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v3)[':parent']['priceCoverageViews']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV3ParentPriceCoverageViewsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV3ParentPriceCoverageViewsLatestQueryKey(
  args: InferRequestType<(typeof client.v3)[':parent']['priceCoverageViews:latest']['$get']>,
) {
  return ['v3', '/v3/:parent/priceCoverageViews:latest', args] as const
}

export function getV3ParentPriceCoverageViewsLatestQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v3)[':parent']['priceCoverageViews:latest']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v3)[':parent']['priceCoverageViews:latest']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV3ParentPriceCoverageViewsLatestQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v3[':parent']['priceCoverageViews:latest'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV3ParentPriceCoverageViewsLatest<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v3)[':parent']['priceCoverageViews:latest']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v3)[':parent']['priceCoverageViews:latest']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          ReturnType<typeof getV3ParentPriceCoverageViewsLatestQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV3ParentPriceCoverageViewsLatestQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV3ParentReconciliationReportsQueryKey(
  args: InferRequestType<(typeof client.v3)[':parent']['reconciliationReports']['$get']>,
) {
  return ['v3', '/v3/:parent/reconciliationReports', args] as const
}

export function getV3ParentReconciliationReportsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v3)[':parent']['reconciliationReports']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v3)[':parent']['reconciliationReports']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV3ParentReconciliationReportsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v3[':parent'].reconciliationReports.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV3ParentReconciliationReports<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v3)[':parent']['reconciliationReports']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v3)[':parent']['reconciliationReports']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV3ParentReconciliationReportsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostV3ParentReconciliationReports<
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
                Awaited<ReturnType<(typeof client.v3)[':parent']['reconciliationReports']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v3)[':parent']['reconciliationReports']['$post']>,
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
    const mutationDefaults = getPostV3ParentReconciliationReportsMutationOptions<
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

export function createPostV3ParentReconciliationReportsValidate<
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
    const mutationDefaults = getPostV3ParentReconciliationReportsValidateMutationOptions<
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
