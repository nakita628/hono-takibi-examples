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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.baggage.baggagetripandcontact)[':searchID']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['baggage', '/baggage/baggagetripandcontact/:searchID', keyArgs] as const
}

export function getBaggageBaggagetripandcontactSearchIDQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.baggage.baggagetripandcontact)[':searchID']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBaggageBaggagetripandcontactSearchIDQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.baggage.baggagetripandcontact[':searchID'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBaggageBaggagetripandcontactSearchID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.baggage.baggagetripandcontact)[':searchID']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.baggage.baggagetripandcontact)[':searchID']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.baggage.baggagetripandcontact)[':searchID']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getBaggageBaggagetripandcontactSearchIDQueryKey>
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
          Awaited<ReturnType<(typeof client.baggage.baggagetripandcontact)[':searchID']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBaggageBaggagetripandcontactSearchIDQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBaggageBaggagetripandcontactSearchIDQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.baggage.baggagetripandcontact[':searchID'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOffersFaresAllfaresQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.offers.fares.allfares.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['offers', '/offers/fares/allfares', keyArgs] as const
}

export function getOffersFaresAllfaresQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.offers.fares.allfares.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOffersFaresAllfaresQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.offers.fares.allfares.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOffersFaresAllfares<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.offers.fares.allfares.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.offers.fares.allfares.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.offers.fares.allfares.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.offers.fares.allfares.$get>>>
            >
          >,
          ReturnType<typeof getOffersFaresAllfaresQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.offers.fares.allfares.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOffersFaresAllfaresQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOffersFaresAllfaresQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.offers.fares.allfares.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOffersFaresBestfaresQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.offers.fares.bestfares.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['offers', '/offers/fares/bestfares', keyArgs] as const
}

export function getOffersFaresBestfaresQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.offers.fares.bestfares.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOffersFaresBestfaresQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.offers.fares.bestfares.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOffersFaresBestfares<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.offers.fares.bestfares.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.offers.fares.bestfares.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.offers.fares.bestfares.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.offers.fares.bestfares.$get>>>
            >
          >,
          ReturnType<typeof getOffersFaresBestfaresQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.offers.fares.bestfares.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOffersFaresBestfaresQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOffersFaresBestfaresQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.offers.fares.bestfares.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOffersFaresDeeplinkQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.offers.fares.deeplink.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['offers', '/offers/fares/deeplink', keyArgs] as const
}

export function getOffersFaresDeeplinkQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.offers.fares.deeplink.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOffersFaresDeeplinkQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.offers.fares.deeplink.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOffersFaresDeeplink<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.offers.fares.deeplink.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.offers.fares.deeplink.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.offers.fares.deeplink.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.offers.fares.deeplink.$get>>>
            >
          >,
          ReturnType<typeof getOffersFaresDeeplinkQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.offers.fares.deeplink.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOffersFaresDeeplinkQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOffersFaresDeeplinkQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.offers.fares.deeplink.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOffersFaresDeeplinkFfpQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.offers.fares.deeplink.ffp.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['offers', '/offers/fares/deeplink/ffp', keyArgs] as const
}

export function getOffersFaresDeeplinkFfpQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.offers.fares.deeplink.ffp.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOffersFaresDeeplinkFfpQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.offers.fares.deeplink.ffp.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOffersFaresDeeplinkFfp<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.offers.fares.deeplink.ffp.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.offers.fares.deeplink.ffp.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.offers.fares.deeplink.ffp.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.offers.fares.deeplink.ffp.$get>>
              >
            >
          >,
          ReturnType<typeof getOffersFaresDeeplinkFfpQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.offers.fares.deeplink.ffp.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOffersFaresDeeplinkFfpQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOffersFaresDeeplinkFfpQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.offers.fares.deeplink.ffp.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOffersFaresDeeplinkItcoQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.offers.fares.deeplink.itco.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['offers', '/offers/fares/deeplink/itco', keyArgs] as const
}

export function getOffersFaresDeeplinkItcoQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.offers.fares.deeplink.itco.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOffersFaresDeeplinkItcoQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.offers.fares.deeplink.itco.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOffersFaresDeeplinkItco<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.offers.fares.deeplink.itco.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.offers.fares.deeplink.itco.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.offers.fares.deeplink.itco.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.offers.fares.deeplink.itco.$get>>
              >
            >
          >,
          ReturnType<typeof getOffersFaresDeeplinkItcoQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.offers.fares.deeplink.itco.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOffersFaresDeeplinkItcoQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOffersFaresDeeplinkItcoQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.offers.fares.deeplink.itco.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOffersFaresFaresQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.offers.fares.fares.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['offers', '/offers/fares/fares', keyArgs] as const
}

export function getOffersFaresFaresQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.offers.fares.fares.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOffersFaresFaresQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.offers.fares.fares.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOffersFaresFares<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.offers.fares.fares.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.offers.fares.fares.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.offers.fares.fares.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.offers.fares.fares.$get>>>
            >
          >,
          ReturnType<typeof getOffersFaresFaresQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.offers.fares.fares.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getOffersFaresFaresQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOffersFaresFaresQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.offers.fares.fares.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOffersFaresLowestfaresQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.offers.fares.lowestfares.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['offers', '/offers/fares/lowestfares', keyArgs] as const
}

export function getOffersFaresLowestfaresQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.offers.fares.lowestfares.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOffersFaresLowestfaresQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.offers.fares.lowestfares.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOffersFaresLowestfares<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.offers.fares.lowestfares.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.offers.fares.lowestfares.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.offers.fares.lowestfares.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.offers.fares.lowestfares.$get>>>
            >
          >,
          ReturnType<typeof getOffersFaresLowestfaresQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.offers.fares.lowestfares.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOffersFaresLowestfaresQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOffersFaresLowestfaresQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.offers.fares.lowestfares.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOffersFaresSubscriptionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.offers.fares.subscriptions.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['offers', '/offers/fares/subscriptions', keyArgs] as const
}

export function getOffersFaresSubscriptionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.offers.fares.subscriptions.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOffersFaresSubscriptionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.offers.fares.subscriptions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOffersFaresSubscriptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.offers.fares.subscriptions.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.offers.fares.subscriptions.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.offers.fares.subscriptions.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.offers.fares.subscriptions.$get>>
              >
            >
          >,
          ReturnType<typeof getOffersFaresSubscriptionsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.offers.fares.subscriptions.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOffersFaresSubscriptionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOffersFaresSubscriptionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.offers.fares.subscriptions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOffersOndRouteOriginDestinationQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.offers.ond.route)[':origin'][':destination']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['offers', '/offers/ond/route/:origin/:destination', keyArgs] as const
}

export function getOffersOndRouteOriginDestinationQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.offers.ond.route)[':origin'][':destination']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOffersOndRouteOriginDestinationQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.offers.ond.route[':origin'][':destination'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOffersOndRouteOriginDestination<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.offers.ond.route)[':origin'][':destination']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.offers.ond.route)[':origin'][':destination']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.offers.ond.route)[':origin'][':destination']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getOffersOndRouteOriginDestinationQueryKey>
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
          Awaited<ReturnType<(typeof client.offers.ond.route)[':origin'][':destination']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOffersOndRouteOriginDestinationQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOffersOndRouteOriginDestinationQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.offers.ond.route[':origin'][':destination'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOffersOndStatusQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.offers.ond.status.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['offers', '/offers/ond/status', keyArgs] as const
}

export function getOffersOndStatusQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.offers.ond.status.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOffersOndStatusQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.offers.ond.status.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOffersOndStatus<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.offers.ond.status.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.offers.ond.status.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.offers.ond.status.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.offers.ond.status.$get>>>
            >
          >,
          ReturnType<typeof getOffersOndStatusQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.offers.ond.status.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getOffersOndStatusQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOffersOndStatusQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.offers.ond.status.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOffersOndTopQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.offers.ond.top.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['offers', '/offers/ond/top', keyArgs] as const
}

export function getOffersOndTopQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.offers.ond.top.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOffersOndTopQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.offers.ond.top.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOffersOndTop<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.offers.ond.top.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.offers.ond.top.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.offers.ond.top.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.offers.ond.top.$get>>>>
          >,
          ReturnType<typeof getOffersOndTopQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.offers.ond.top.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getOffersOndTopQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOffersOndTopQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.offers.ond.top.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOrdersOrdersOrderIDNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.orders.orders)[':orderID'][':name']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['orders', '/orders/orders/:orderID/:name', keyArgs] as const
}

export function getOrdersOrdersOrderIDNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.orders.orders)[':orderID'][':name']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrdersOrdersOrderIDNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.orders.orders[':orderID'][':name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrdersOrdersOrderIDName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.orders.orders)[':orderID'][':name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.orders.orders)[':orderID'][':name']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.orders.orders)[':orderID'][':name']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.orders.orders)[':orderID'][':name']['$get']>>
              >
            >
          >,
          ReturnType<typeof getOrdersOrdersOrderIDNameQueryKey>
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
          Awaited<ReturnType<(typeof client.orders.orders)[':orderID'][':name']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrdersOrdersOrderIDNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrdersOrdersOrderIDNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.orders.orders[':orderID'][':name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutPreflightAutocheckinTicketnumber<
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
                Awaited<ReturnType<(typeof client.preflight.autocheckin)[':ticketnumber']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.preflight.autocheckin)[':ticketnumber']['$put']>,
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
  const mutationDefaults = getPutPreflightAutocheckinTicketnumberMutationOptions<
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

export function getPromotionsPriceoffersFlightsOndOriginDestinationQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.promotions.priceoffers.flights.ond)[':origin'][':destination']['$get']
    >
  >,
) {
  return [
    'promotions',
    '/promotions/priceoffers/flights/ond/:origin/:destination',
    toValue(args),
  ] as const
}

export function getPromotionsPriceoffersFlightsOndOriginDestinationQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.promotions.priceoffers.flights.ond)[':origin'][':destination']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPromotionsPriceoffersFlightsOndOriginDestinationQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.promotions.priceoffers.flights.ond[':origin'][':destination'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePromotionsPriceoffersFlightsOndOriginDestination<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.promotions.priceoffers.flights.ond)[':origin'][':destination']['$get']
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
                    (typeof client.promotions.priceoffers.flights.ond)[':origin'][':destination']['$get']
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
                    (typeof client.promotions.priceoffers.flights.ond)[':origin'][':destination']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getPromotionsPriceoffersFlightsOndOriginDestinationQueryKey>
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
              (typeof client.promotions.priceoffers.flights.ond)[':origin'][':destination']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPromotionsPriceoffersFlightsOndOriginDestinationQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPromotionsPriceoffersFlightsOndOriginDestinationQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.promotions.priceoffers.flights.ond[':origin'][':destination'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getReferencesSeatdetailsAircraftCodeCabinCodeQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.references.seatdetails)[':aircraftCode'][':cabinCode']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['references', '/references/seatdetails/:aircraftCode/:cabinCode', keyArgs] as const
}

export function getReferencesSeatdetailsAircraftCodeCabinCodeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.references.seatdetails)[':aircraftCode'][':cabinCode']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getReferencesSeatdetailsAircraftCodeCabinCodeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.references.seatdetails[':aircraftCode'][':cabinCode'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useReferencesSeatdetailsAircraftCodeCabinCode<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.references.seatdetails)[':aircraftCode'][':cabinCode']['$get']>
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
                    (typeof client.references.seatdetails)[':aircraftCode'][':cabinCode']['$get']
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
                    (typeof client.references.seatdetails)[':aircraftCode'][':cabinCode']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getReferencesSeatdetailsAircraftCodeCabinCodeQueryKey>
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
              (typeof client.references.seatdetails)[':aircraftCode'][':cabinCode']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getReferencesSeatdetailsAircraftCodeCabinCodeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getReferencesSeatdetailsAircraftCodeCabinCodeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.references.seatdetails[':aircraftCode'][':cabinCode'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
