import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
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

export function getGetBaggageBaggagetripandcontactSearchIDKey(
  args: InferRequestType<(typeof client.baggage.baggagetripandcontact)[':searchID']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['baggage', '/baggage/baggagetripandcontact/:searchID', keyArgs] as const
}

export function useGetBaggageBaggagetripandcontactSearchID<TError = unknown>(
  args: InferRequestType<(typeof client.baggage.baggagetripandcontact)[':searchID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.baggage.baggagetripandcontact)[':searchID']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBaggageBaggagetripandcontactSearchIDKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.baggage.baggagetripandcontact)[':searchID']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.baggage.baggagetripandcontact[':searchID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBaggageBaggagetripandcontactSearchID<TError = unknown>(
  args: InferRequestType<(typeof client.baggage.baggagetripandcontact)[':searchID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.baggage.baggagetripandcontact)[':searchID']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetBaggageBaggagetripandcontactSearchIDKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.baggage.baggagetripandcontact)[':searchID']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.baggage.baggagetripandcontact[':searchID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetOffersFaresAllfaresKey(
  args: InferRequestType<typeof client.offers.fares.allfares.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['offers', '/offers/fares/allfares', keyArgs] as const
}

export function useGetOffersFaresAllfares<TError = unknown>(
  args: InferRequestType<typeof client.offers.fares.allfares.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.offers.fares.allfares.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOffersFaresAllfaresKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.offers.fares.allfares.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.offers.fares.allfares.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOffersFaresAllfares<TError = unknown>(
  args: InferRequestType<typeof client.offers.fares.allfares.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.offers.fares.allfares.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOffersFaresAllfaresKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.offers.fares.allfares.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.offers.fares.allfares.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetOffersFaresBestfaresKey(
  args: InferRequestType<typeof client.offers.fares.bestfares.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['offers', '/offers/fares/bestfares', keyArgs] as const
}

export function useGetOffersFaresBestfares<TError = unknown>(
  args: InferRequestType<typeof client.offers.fares.bestfares.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.offers.fares.bestfares.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOffersFaresBestfaresKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.offers.fares.bestfares.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.offers.fares.bestfares.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOffersFaresBestfares<TError = unknown>(
  args: InferRequestType<typeof client.offers.fares.bestfares.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.offers.fares.bestfares.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOffersFaresBestfaresKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.offers.fares.bestfares.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.offers.fares.bestfares.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetOffersFaresDeeplinkKey(
  args: InferRequestType<typeof client.offers.fares.deeplink.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['offers', '/offers/fares/deeplink', keyArgs] as const
}

export function useGetOffersFaresDeeplink<TError = unknown>(
  args: InferRequestType<typeof client.offers.fares.deeplink.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.offers.fares.deeplink.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOffersFaresDeeplinkKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.offers.fares.deeplink.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.offers.fares.deeplink.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOffersFaresDeeplink<TError = unknown>(
  args: InferRequestType<typeof client.offers.fares.deeplink.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.offers.fares.deeplink.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOffersFaresDeeplinkKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.offers.fares.deeplink.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.offers.fares.deeplink.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetOffersFaresDeeplinkFfpKey(
  args: InferRequestType<typeof client.offers.fares.deeplink.ffp.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['offers', '/offers/fares/deeplink/ffp', keyArgs] as const
}

export function useGetOffersFaresDeeplinkFfp<TError = unknown>(
  args: InferRequestType<typeof client.offers.fares.deeplink.ffp.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.offers.fares.deeplink.ffp.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOffersFaresDeeplinkFfpKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.offers.fares.deeplink.ffp.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.offers.fares.deeplink.ffp.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOffersFaresDeeplinkFfp<TError = unknown>(
  args: InferRequestType<typeof client.offers.fares.deeplink.ffp.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.offers.fares.deeplink.ffp.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOffersFaresDeeplinkFfpKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.offers.fares.deeplink.ffp.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.offers.fares.deeplink.ffp.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetOffersFaresDeeplinkItcoKey(
  args: InferRequestType<typeof client.offers.fares.deeplink.itco.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['offers', '/offers/fares/deeplink/itco', keyArgs] as const
}

export function useGetOffersFaresDeeplinkItco<TError = unknown>(
  args: InferRequestType<typeof client.offers.fares.deeplink.itco.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.offers.fares.deeplink.itco.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOffersFaresDeeplinkItcoKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.offers.fares.deeplink.itco.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.offers.fares.deeplink.itco.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOffersFaresDeeplinkItco<TError = unknown>(
  args: InferRequestType<typeof client.offers.fares.deeplink.itco.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.offers.fares.deeplink.itco.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOffersFaresDeeplinkItcoKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.offers.fares.deeplink.itco.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.offers.fares.deeplink.itco.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetOffersFaresFaresKey(
  args: InferRequestType<typeof client.offers.fares.fares.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['offers', '/offers/fares/fares', keyArgs] as const
}

export function useGetOffersFaresFares<TError = unknown>(
  args: InferRequestType<typeof client.offers.fares.fares.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.offers.fares.fares.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOffersFaresFaresKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.offers.fares.fares.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.offers.fares.fares.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOffersFaresFares<TError = unknown>(
  args: InferRequestType<typeof client.offers.fares.fares.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.offers.fares.fares.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOffersFaresFaresKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.offers.fares.fares.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.offers.fares.fares.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetOffersFaresLowestfaresKey(
  args: InferRequestType<typeof client.offers.fares.lowestfares.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['offers', '/offers/fares/lowestfares', keyArgs] as const
}

export function useGetOffersFaresLowestfares<TError = unknown>(
  args: InferRequestType<typeof client.offers.fares.lowestfares.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.offers.fares.lowestfares.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOffersFaresLowestfaresKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.offers.fares.lowestfares.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.offers.fares.lowestfares.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOffersFaresLowestfares<TError = unknown>(
  args: InferRequestType<typeof client.offers.fares.lowestfares.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.offers.fares.lowestfares.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOffersFaresLowestfaresKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.offers.fares.lowestfares.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.offers.fares.lowestfares.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetOffersFaresSubscriptionsKey(
  args: InferRequestType<typeof client.offers.fares.subscriptions.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['offers', '/offers/fares/subscriptions', keyArgs] as const
}

export function useGetOffersFaresSubscriptions<TError = unknown>(
  args: InferRequestType<typeof client.offers.fares.subscriptions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.offers.fares.subscriptions.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOffersFaresSubscriptionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.offers.fares.subscriptions.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.offers.fares.subscriptions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOffersFaresSubscriptions<TError = unknown>(
  args: InferRequestType<typeof client.offers.fares.subscriptions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.offers.fares.subscriptions.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOffersFaresSubscriptionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.offers.fares.subscriptions.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.offers.fares.subscriptions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetOffersOndRouteOriginDestinationKey(
  args: InferRequestType<(typeof client.offers.ond.route)[':origin'][':destination']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['offers', '/offers/ond/route/:origin/:destination', keyArgs] as const
}

export function useGetOffersOndRouteOriginDestination<TError = unknown>(
  args: InferRequestType<(typeof client.offers.ond.route)[':origin'][':destination']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.offers.ond.route)[':origin'][':destination']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOffersOndRouteOriginDestinationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.offers.ond.route)[':origin'][':destination']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.offers.ond.route[':origin'][':destination'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOffersOndRouteOriginDestination<TError = unknown>(
  args: InferRequestType<(typeof client.offers.ond.route)[':origin'][':destination']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.offers.ond.route)[':origin'][':destination']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOffersOndRouteOriginDestinationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.offers.ond.route)[':origin'][':destination']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.offers.ond.route[':origin'][':destination'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetOffersOndStatusKey(
  args: InferRequestType<typeof client.offers.ond.status.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['offers', '/offers/ond/status', keyArgs] as const
}

export function useGetOffersOndStatus<TError = unknown>(
  args: InferRequestType<typeof client.offers.ond.status.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.offers.ond.status.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOffersOndStatusKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.offers.ond.status.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.offers.ond.status.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOffersOndStatus<TError = unknown>(
  args: InferRequestType<typeof client.offers.ond.status.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.offers.ond.status.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOffersOndStatusKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.offers.ond.status.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.offers.ond.status.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetOffersOndTopKey(args: InferRequestType<typeof client.offers.ond.top.$get>) {
  const { header: _, ...keyArgs } = args
  return ['offers', '/offers/ond/top', keyArgs] as const
}

export function useGetOffersOndTop<TError = unknown>(
  args: InferRequestType<typeof client.offers.ond.top.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.offers.ond.top.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetOffersOndTopKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.offers.ond.top.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.offers.ond.top.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOffersOndTop<TError = unknown>(
  args: InferRequestType<typeof client.offers.ond.top.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.offers.ond.top.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetOffersOndTopKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.offers.ond.top.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.offers.ond.top.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetOrdersOrdersOrderIDNameKey(
  args: InferRequestType<(typeof client.orders.orders)[':orderID'][':name']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['orders', '/orders/orders/:orderID/:name', keyArgs] as const
}

export function useGetOrdersOrdersOrderIDName<TError = unknown>(
  args: InferRequestType<(typeof client.orders.orders)[':orderID'][':name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.orders.orders)[':orderID'][':name']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOrdersOrdersOrderIDNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.orders.orders)[':orderID'][':name']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.orders.orders[':orderID'][':name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrdersOrdersOrderIDName<TError = unknown>(
  args: InferRequestType<(typeof client.orders.orders)[':orderID'][':name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.orders.orders)[':orderID'][':name']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOrdersOrdersOrderIDNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.orders.orders)[':orderID'][':name']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.orders.orders[':orderID'][':name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutPreflightAutocheckinTicketnumberKey() {
  return ['preflight', '/preflight/autocheckin/:ticketnumber', 'PUT'] as const
}

export function usePutPreflightAutocheckinTicketnumber<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.preflight.autocheckin)[':ticketnumber']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.preflight.autocheckin)[':ticketnumber']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutPreflightAutocheckinTicketnumberKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.preflight.autocheckin)[':ticketnumber']['$put']>
        },
      ) => parseResponse(client.preflight.autocheckin[':ticketnumber'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPromotionsPriceoffersFlightsOndOriginDestinationKey(
  args: InferRequestType<
    (typeof client.promotions.priceoffers.flights.ond)[':origin'][':destination']['$get']
  >,
) {
  return ['promotions', '/promotions/priceoffers/flights/ond/:origin/:destination', args] as const
}

export function useGetPromotionsPriceoffersFlightsOndOriginDestination<TError = unknown>(
  args: InferRequestType<
    (typeof client.promotions.priceoffers.flights.ond)[':origin'][':destination']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPromotionsPriceoffersFlightsOndOriginDestinationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.promotions.priceoffers.flights.ond[':origin'][':destination'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPromotionsPriceoffersFlightsOndOriginDestination<TError = unknown>(
  args: InferRequestType<
    (typeof client.promotions.priceoffers.flights.ond)[':origin'][':destination']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPromotionsPriceoffersFlightsOndOriginDestinationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.promotions.priceoffers.flights.ond[':origin'][':destination'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetReferencesSeatdetailsAircraftCodeCabinCodeKey(
  args: InferRequestType<
    (typeof client.references.seatdetails)[':aircraftCode'][':cabinCode']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['references', '/references/seatdetails/:aircraftCode/:cabinCode', keyArgs] as const
}

export function useGetReferencesSeatdetailsAircraftCodeCabinCode<TError = unknown>(
  args: InferRequestType<
    (typeof client.references.seatdetails)[':aircraftCode'][':cabinCode']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetReferencesSeatdetailsAircraftCodeCabinCodeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.references.seatdetails[':aircraftCode'][':cabinCode'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetReferencesSeatdetailsAircraftCodeCabinCode<TError = unknown>(
  args: InferRequestType<
    (typeof client.references.seatdetails)[':aircraftCode'][':cabinCode']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetReferencesSeatdetailsAircraftCodeCabinCodeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.references.seatdetails[':aircraftCode'][':cabinCode'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}
