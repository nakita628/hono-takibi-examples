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

export function getBaggageKey() {
  return ['baggage'] as const
}

export function getOffersKey() {
  return ['offers'] as const
}

export function getOrdersKey() {
  return ['orders'] as const
}

export function getPreflightKey() {
  return ['preflight'] as const
}

export function getPromotionsKey() {
  return ['promotions'] as const
}

export function getReferencesKey() {
  return ['references'] as const
}

export function getBaggageBaggagetripandcontactSearchIDQueryKey(
  args: InferRequestType<(typeof client.baggage.baggagetripandcontact)[':searchID']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['baggage', '/baggage/baggagetripandcontact/:searchID', keyArgs] as const
}

export function getBaggageBaggagetripandcontactSearchIDQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.baggage.baggagetripandcontact)[':searchID']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.baggage.baggagetripandcontact)[':searchID']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.baggage.baggagetripandcontact)[':searchID']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBaggageBaggagetripandcontactSearchIDQueryKey>
  >({
    queryKey: getBaggageBaggagetripandcontactSearchIDQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.baggage.baggagetripandcontact[':searchID'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createBaggageBaggagetripandcontactSearchID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.baggage.baggagetripandcontact)[':searchID']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.baggage.baggagetripandcontact)[':searchID']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.baggage.baggagetripandcontact)[':searchID']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getBaggageBaggagetripandcontactSearchIDQueryKey>
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
      ...getBaggageBaggagetripandcontactSearchIDQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getOffersFaresAllfaresQueryKey(
  args: InferRequestType<typeof client.offers.fares.allfares.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['offers', '/offers/fares/allfares', keyArgs] as const
}

export function getOffersFaresAllfaresQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.offers.fares.allfares.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.offers.fares.allfares.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.offers.fares.allfares.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOffersFaresAllfaresQueryKey>
  >({
    queryKey: getOffersFaresAllfaresQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.offers.fares.allfares.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createOffersFaresAllfares<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.offers.fares.allfares.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.offers.fares.allfares.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.offers.fares.allfares.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getOffersFaresAllfaresQueryKey>
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
    return { ...getOffersFaresAllfaresQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getOffersFaresBestfaresQueryKey(
  args: InferRequestType<typeof client.offers.fares.bestfares.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['offers', '/offers/fares/bestfares', keyArgs] as const
}

export function getOffersFaresBestfaresQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.offers.fares.bestfares.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.offers.fares.bestfares.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.offers.fares.bestfares.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOffersFaresBestfaresQueryKey>
  >({
    queryKey: getOffersFaresBestfaresQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.offers.fares.bestfares.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOffersFaresBestfares<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.offers.fares.bestfares.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.offers.fares.bestfares.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.offers.fares.bestfares.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getOffersFaresBestfaresQueryKey>
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
      ...getOffersFaresBestfaresQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getOffersFaresDeeplinkQueryKey(
  args: InferRequestType<typeof client.offers.fares.deeplink.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['offers', '/offers/fares/deeplink', keyArgs] as const
}

export function getOffersFaresDeeplinkQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.offers.fares.deeplink.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.offers.fares.deeplink.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.offers.fares.deeplink.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOffersFaresDeeplinkQueryKey>
  >({
    queryKey: getOffersFaresDeeplinkQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.offers.fares.deeplink.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createOffersFaresDeeplink<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.offers.fares.deeplink.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.offers.fares.deeplink.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.offers.fares.deeplink.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getOffersFaresDeeplinkQueryKey>
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
    return { ...getOffersFaresDeeplinkQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getOffersFaresDeeplinkFfpQueryKey(
  args: InferRequestType<typeof client.offers.fares.deeplink.ffp.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['offers', '/offers/fares/deeplink/ffp', keyArgs] as const
}

export function getOffersFaresDeeplinkFfpQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.offers.fares.deeplink.ffp.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.offers.fares.deeplink.ffp.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.offers.fares.deeplink.ffp.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOffersFaresDeeplinkFfpQueryKey>
  >({
    queryKey: getOffersFaresDeeplinkFfpQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.offers.fares.deeplink.ffp.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOffersFaresDeeplinkFfp<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.offers.fares.deeplink.ffp.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.offers.fares.deeplink.ffp.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.offers.fares.deeplink.ffp.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getOffersFaresDeeplinkFfpQueryKey>
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
      ...getOffersFaresDeeplinkFfpQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getOffersFaresDeeplinkItcoQueryKey(
  args: InferRequestType<typeof client.offers.fares.deeplink.itco.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['offers', '/offers/fares/deeplink/itco', keyArgs] as const
}

export function getOffersFaresDeeplinkItcoQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.offers.fares.deeplink.itco.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.offers.fares.deeplink.itco.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.offers.fares.deeplink.itco.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOffersFaresDeeplinkItcoQueryKey>
  >({
    queryKey: getOffersFaresDeeplinkItcoQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.offers.fares.deeplink.itco.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOffersFaresDeeplinkItco<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.offers.fares.deeplink.itco.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.offers.fares.deeplink.itco.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.offers.fares.deeplink.itco.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getOffersFaresDeeplinkItcoQueryKey>
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
      ...getOffersFaresDeeplinkItcoQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getOffersFaresFaresQueryKey(
  args: InferRequestType<typeof client.offers.fares.fares.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['offers', '/offers/fares/fares', keyArgs] as const
}

export function getOffersFaresFaresQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.offers.fares.fares.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.offers.fares.fares.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.offers.fares.fares.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getOffersFaresFaresQueryKey>
  >({
    queryKey: getOffersFaresFaresQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.offers.fares.fares.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createOffersFaresFares<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.offers.fares.fares.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.offers.fares.fares.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.offers.fares.fares.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getOffersFaresFaresQueryKey>
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
    return { ...getOffersFaresFaresQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getOffersFaresLowestfaresQueryKey(
  args: InferRequestType<typeof client.offers.fares.lowestfares.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['offers', '/offers/fares/lowestfares', keyArgs] as const
}

export function getOffersFaresLowestfaresQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.offers.fares.lowestfares.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.offers.fares.lowestfares.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.offers.fares.lowestfares.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOffersFaresLowestfaresQueryKey>
  >({
    queryKey: getOffersFaresLowestfaresQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.offers.fares.lowestfares.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOffersFaresLowestfares<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.offers.fares.lowestfares.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.offers.fares.lowestfares.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.offers.fares.lowestfares.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getOffersFaresLowestfaresQueryKey>
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
      ...getOffersFaresLowestfaresQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getOffersFaresSubscriptionsQueryKey(
  args: InferRequestType<typeof client.offers.fares.subscriptions.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['offers', '/offers/fares/subscriptions', keyArgs] as const
}

export function getOffersFaresSubscriptionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.offers.fares.subscriptions.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.offers.fares.subscriptions.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.offers.fares.subscriptions.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOffersFaresSubscriptionsQueryKey>
  >({
    queryKey: getOffersFaresSubscriptionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.offers.fares.subscriptions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOffersFaresSubscriptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.offers.fares.subscriptions.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.offers.fares.subscriptions.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.offers.fares.subscriptions.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getOffersFaresSubscriptionsQueryKey>
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
      ...getOffersFaresSubscriptionsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getOffersOndRouteOriginDestinationQueryKey(
  args: InferRequestType<(typeof client.offers.ond.route)[':origin'][':destination']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['offers', '/offers/ond/route/:origin/:destination', keyArgs] as const
}

export function getOffersOndRouteOriginDestinationQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.offers.ond.route)[':origin'][':destination']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.offers.ond.route)[':origin'][':destination']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.offers.ond.route)[':origin'][':destination']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOffersOndRouteOriginDestinationQueryKey>
  >({
    queryKey: getOffersOndRouteOriginDestinationQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.offers.ond.route[':origin'][':destination'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOffersOndRouteOriginDestination<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.offers.ond.route)[':origin'][':destination']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.offers.ond.route)[':origin'][':destination']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.offers.ond.route)[':origin'][':destination']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getOffersOndRouteOriginDestinationQueryKey>
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
      ...getOffersOndRouteOriginDestinationQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getOffersOndStatusQueryKey(
  args: InferRequestType<typeof client.offers.ond.status.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['offers', '/offers/ond/status', keyArgs] as const
}

export function getOffersOndStatusQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.offers.ond.status.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.offers.ond.status.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.offers.ond.status.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getOffersOndStatusQueryKey>
  >({
    queryKey: getOffersOndStatusQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.offers.ond.status.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createOffersOndStatus<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.offers.ond.status.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.offers.ond.status.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.offers.ond.status.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getOffersOndStatusQueryKey>
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
    return { ...getOffersOndStatusQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getOffersOndTopQueryKey(args: InferRequestType<typeof client.offers.ond.top.$get>) {
  const { header: _, ...keyArgs } = args
  return ['offers', '/offers/ond/top', keyArgs] as const
}

export function getOffersOndTopQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.offers.ond.top.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.offers.ond.top.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.offers.ond.top.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getOffersOndTopQueryKey>
  >({
    queryKey: getOffersOndTopQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.offers.ond.top.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createOffersOndTop<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.offers.ond.top.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.offers.ond.top.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.offers.ond.top.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getOffersOndTopQueryKey>
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
    return { ...getOffersOndTopQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getOrdersOrdersOrderIDNameQueryKey(
  args: InferRequestType<(typeof client.orders.orders)[':orderID'][':name']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['orders', '/orders/orders/:orderID/:name', keyArgs] as const
}

export function getOrdersOrdersOrderIDNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.orders.orders)[':orderID'][':name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.orders.orders)[':orderID'][':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.orders.orders)[':orderID'][':name']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrdersOrdersOrderIDNameQueryKey>
  >({
    queryKey: getOrdersOrdersOrderIDNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.orders.orders[':orderID'][':name'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOrdersOrdersOrderIDName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.orders.orders)[':orderID'][':name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.orders.orders)[':orderID'][':name']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.orders.orders)[':orderID'][':name']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getOrdersOrdersOrderIDNameQueryKey>
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
      ...getOrdersOrdersOrderIDNameQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutPreflightAutocheckinTicketnumberMutationKey() {
  return ['preflight', '/preflight/autocheckin/:ticketnumber', 'PUT'] as const
}

export function getPutPreflightAutocheckinTicketnumberMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.preflight.autocheckin)[':ticketnumber']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.preflight.autocheckin)[':ticketnumber']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutPreflightAutocheckinTicketnumberMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.preflight.autocheckin)[':ticketnumber']['$put']>,
    ) {
      return parseResponse(client.preflight.autocheckin[':ticketnumber'].$put(args, options))
    },
  })
}

export function createPutPreflightAutocheckinTicketnumber<
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
                Awaited<ReturnType<(typeof client.preflight.autocheckin)[':ticketnumber']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.preflight.autocheckin)[':ticketnumber']['$put']>,
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
    const mutationDefaults = getPutPreflightAutocheckinTicketnumberMutationOptions<
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

export function getPromotionsPriceoffersFlightsOndOriginDestinationQueryKey(
  args: InferRequestType<
    (typeof client.promotions.priceoffers.flights.ond)[':origin'][':destination']['$get']
  >,
) {
  return ['promotions', '/promotions/priceoffers/flights/ond/:origin/:destination', args] as const
}

export function getPromotionsPriceoffersFlightsOndOriginDestinationQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.promotions.priceoffers.flights.ond)[':origin'][':destination']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.promotions.priceoffers.flights.ond)[':origin'][':destination']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.promotions.priceoffers.flights.ond)[':origin'][':destination']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPromotionsPriceoffersFlightsOndOriginDestinationQueryKey>
  >({
    queryKey: getPromotionsPriceoffersFlightsOndOriginDestinationQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.promotions.priceoffers.flights.ond[':origin'][':destination'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createPromotionsPriceoffersFlightsOndOriginDestination<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.promotions.priceoffers.flights.ond)[':origin'][':destination']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.promotions.priceoffers.flights.ond)[':origin'][':destination']['$get']
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
                    (typeof client.promotions.priceoffers.flights.ond)[':origin'][':destination']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getPromotionsPriceoffersFlightsOndOriginDestinationQueryKey>
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
      ...getPromotionsPriceoffersFlightsOndOriginDestinationQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getReferencesSeatdetailsAircraftCodeCabinCodeQueryKey(
  args: InferRequestType<
    (typeof client.references.seatdetails)[':aircraftCode'][':cabinCode']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['references', '/references/seatdetails/:aircraftCode/:cabinCode', keyArgs] as const
}

export function getReferencesSeatdetailsAircraftCodeCabinCodeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.references.seatdetails)[':aircraftCode'][':cabinCode']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.references.seatdetails)[':aircraftCode'][':cabinCode']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.references.seatdetails)[':aircraftCode'][':cabinCode']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getReferencesSeatdetailsAircraftCodeCabinCodeQueryKey>
  >({
    queryKey: getReferencesSeatdetailsAircraftCodeCabinCodeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.references.seatdetails[':aircraftCode'][':cabinCode'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createReferencesSeatdetailsAircraftCodeCabinCode<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.references.seatdetails)[':aircraftCode'][':cabinCode']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.references.seatdetails)[':aircraftCode'][':cabinCode']['$get']
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
                    (typeof client.references.seatdetails)[':aircraftCode'][':cabinCode']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getReferencesSeatdetailsAircraftCodeCabinCodeQueryKey>
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
      ...getReferencesSeatdetailsAircraftCodeCabinCodeQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}
