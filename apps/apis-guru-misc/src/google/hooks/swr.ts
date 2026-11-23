import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getV3Key() {
  return ['v3'] as const
}

export function getPostV3AccountHotelsSetLiveOnGoogleKey() {
  return ['v3', '/v3/:account/hotels:setLiveOnGoogle', 'POST'] as const
}

export function usePostV3AccountHotelsSetLiveOnGoogle<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v3)[':account']['hotels:setLiveOnGoogle']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v3)[':account']['hotels:setLiveOnGoogle']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV3AccountHotelsSetLiveOnGoogleKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v3)[':account']['hotels:setLiveOnGoogle']['$post']>
        },
      ) => parseResponse(client.v3[':account']['hotels:setLiveOnGoogle'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV3NameKey(args: InferRequestType<(typeof client.v3)[':name']['$get']>) {
  return ['v3', '/v3/:name', args] as const
}

export function useGetV3Name<TError = unknown>(
  args: InferRequestType<(typeof client.v3)[':name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v3)[':name']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV3NameKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v3)[':name']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3[':name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV3Name<TError = unknown>(
  args: InferRequestType<(typeof client.v3)[':name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v3)[':name']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV3NameKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v3)[':name']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3[':name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV3NameKey() {
  return ['v3', '/v3/:name', 'DELETE'] as const
}

export function useDeleteV3Name<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v3)[':name']['$delete']>>>>
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v3)[':name']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV3NameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client.v3)[':name']['$delete']> }) =>
        parseResponse(client.v3[':name'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchV3NameKey() {
  return ['v3', '/v3/:name', 'PATCH'] as const
}

export function usePatchV3Name<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v3)[':name']['$patch']>>>>
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v3)[':name']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV3NameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client.v3)[':name']['$patch']> }) =>
        parseResponse(client.v3[':name'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV3NameFreeBookingLinksReportViewsQueryKey(
  args: InferRequestType<(typeof client.v3)[':name']['freeBookingLinksReportViews:query']['$get']>,
) {
  return ['v3', '/v3/:name/freeBookingLinksReportViews:query', args] as const
}

export function useGetV3NameFreeBookingLinksReportViewsQuery<TError = unknown>(
  args: InferRequestType<(typeof client.v3)[':name']['freeBookingLinksReportViews:query']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v3)[':name']['freeBookingLinksReportViews:query']['$get']>
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
        ? getGetV3NameFreeBookingLinksReportViewsQueryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v3)[':name']['freeBookingLinksReportViews:query']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v3[':name']['freeBookingLinksReportViews:query'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV3NameFreeBookingLinksReportViewsQuery<TError = unknown>(
  args: InferRequestType<(typeof client.v3)[':name']['freeBookingLinksReportViews:query']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v3)[':name']['freeBookingLinksReportViews:query']['$get']>
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
        ? getGetV3NameFreeBookingLinksReportViewsQueryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v3)[':name']['freeBookingLinksReportViews:query']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v3[':name']['freeBookingLinksReportViews:query'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV3NameParticipationReportViewsQueryKey(
  args: InferRequestType<(typeof client.v3)[':name']['participationReportViews:query']['$get']>,
) {
  return ['v3', '/v3/:name/participationReportViews:query', args] as const
}

export function useGetV3NameParticipationReportViewsQuery<TError = unknown>(
  args: InferRequestType<(typeof client.v3)[':name']['participationReportViews:query']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v3)[':name']['participationReportViews:query']['$get']>
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
        ? getGetV3NameParticipationReportViewsQueryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v3)[':name']['participationReportViews:query']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v3[':name']['participationReportViews:query'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV3NameParticipationReportViewsQuery<TError = unknown>(
  args: InferRequestType<(typeof client.v3)[':name']['participationReportViews:query']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v3)[':name']['participationReportViews:query']['$get']>
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
        ? getGetV3NameParticipationReportViewsQueryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v3)[':name']['participationReportViews:query']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v3[':name']['participationReportViews:query'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV3NamePropertyPerformanceReportViewsQueryKey(
  args: InferRequestType<
    (typeof client.v3)[':name']['propertyPerformanceReportViews:query']['$get']
  >,
) {
  return ['v3', '/v3/:name/propertyPerformanceReportViews:query', args] as const
}

export function useGetV3NamePropertyPerformanceReportViewsQuery<TError = unknown>(
  args: InferRequestType<
    (typeof client.v3)[':name']['propertyPerformanceReportViews:query']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV3NamePropertyPerformanceReportViewsQueryKey(args)
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
                (typeof client.v3)[':name']['propertyPerformanceReportViews:query']['$get']
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
          client.v3[':name']['propertyPerformanceReportViews:query'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV3NamePropertyPerformanceReportViewsQuery<TError = unknown>(
  args: InferRequestType<
    (typeof client.v3)[':name']['propertyPerformanceReportViews:query']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV3NamePropertyPerformanceReportViewsQueryKey(args)
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
                (typeof client.v3)[':name']['propertyPerformanceReportViews:query']['$get']
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
          client.v3[':name']['propertyPerformanceReportViews:query'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV3ParentAccountLinksKey(
  args: InferRequestType<(typeof client.v3)[':parent']['accountLinks']['$get']>,
) {
  return ['v3', '/v3/:parent/accountLinks', args] as const
}

export function useGetV3ParentAccountLinks<TError = unknown>(
  args: InferRequestType<(typeof client.v3)[':parent']['accountLinks']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3)[':parent']['accountLinks']['$get']>>
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
        ? getGetV3ParentAccountLinksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3)[':parent']['accountLinks']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3[':parent'].accountLinks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV3ParentAccountLinks<TError = unknown>(
  args: InferRequestType<(typeof client.v3)[':parent']['accountLinks']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3)[':parent']['accountLinks']['$get']>>
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
        ? getGetV3ParentAccountLinksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3)[':parent']['accountLinks']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3[':parent'].accountLinks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV3ParentAccountLinksKey() {
  return ['v3', '/v3/:parent/accountLinks', 'POST'] as const
}

export function usePostV3ParentAccountLinks<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v3)[':parent']['accountLinks']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v3)[':parent']['accountLinks']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV3ParentAccountLinksKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v3)[':parent']['accountLinks']['$post']> },
      ) => parseResponse(client.v3[':parent'].accountLinks.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV3ParentBrandsKey(
  args: InferRequestType<(typeof client.v3)[':parent']['brands']['$get']>,
) {
  return ['v3', '/v3/:parent/brands', args] as const
}

export function useGetV3ParentBrands<TError = unknown>(
  args: InferRequestType<(typeof client.v3)[':parent']['brands']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v3)[':parent']['brands']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetV3ParentBrandsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v3)[':parent']['brands']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3[':parent'].brands.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV3ParentBrands<TError = unknown>(
  args: InferRequestType<(typeof client.v3)[':parent']['brands']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v3)[':parent']['brands']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetV3ParentBrandsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v3)[':parent']['brands']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3[':parent'].brands.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV3ParentBrandsKey() {
  return ['v3', '/v3/:parent/brands', 'POST'] as const
}

export function usePostV3ParentBrands<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v3)[':parent']['brands']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v3)[':parent']['brands']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV3ParentBrandsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v3)[':parent']['brands']['$post']> },
      ) => parseResponse(client.v3[':parent'].brands.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV3ParentHotelViewsKey(
  args: InferRequestType<(typeof client.v3)[':parent']['hotelViews']['$get']>,
) {
  return ['v3', '/v3/:parent/hotelViews', args] as const
}

export function useGetV3ParentHotelViews<TError = unknown>(
  args: InferRequestType<(typeof client.v3)[':parent']['hotelViews']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3)[':parent']['hotelViews']['$get']>>
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
        ? getGetV3ParentHotelViewsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3)[':parent']['hotelViews']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3[':parent'].hotelViews.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV3ParentHotelViews<TError = unknown>(
  args: InferRequestType<(typeof client.v3)[':parent']['hotelViews']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3)[':parent']['hotelViews']['$get']>>
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
        ? getGetV3ParentHotelViewsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3)[':parent']['hotelViews']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3[':parent'].hotelViews.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV3ParentHotelViewsSummarizeKey(
  args: InferRequestType<(typeof client.v3)[':parent']['hotelViews:summarize']['$get']>,
) {
  return ['v3', '/v3/:parent/hotelViews:summarize', args] as const
}

export function useGetV3ParentHotelViewsSummarize<TError = unknown>(
  args: InferRequestType<(typeof client.v3)[':parent']['hotelViews:summarize']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3)[':parent']['hotelViews:summarize']['$get']>>
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
        ? getGetV3ParentHotelViewsSummarizeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3)[':parent']['hotelViews:summarize']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v3[':parent']['hotelViews:summarize'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV3ParentHotelViewsSummarize<TError = unknown>(
  args: InferRequestType<(typeof client.v3)[':parent']['hotelViews:summarize']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3)[':parent']['hotelViews:summarize']['$get']>>
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
        ? getGetV3ParentHotelViewsSummarizeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3)[':parent']['hotelViews:summarize']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v3[':parent']['hotelViews:summarize'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV3ParentIconsKey(
  args: InferRequestType<(typeof client.v3)[':parent']['icons']['$get']>,
) {
  return ['v3', '/v3/:parent/icons', args] as const
}

export function useGetV3ParentIcons<TError = unknown>(
  args: InferRequestType<(typeof client.v3)[':parent']['icons']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v3)[':parent']['icons']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetV3ParentIconsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v3)[':parent']['icons']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3[':parent'].icons.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV3ParentIcons<TError = unknown>(
  args: InferRequestType<(typeof client.v3)[':parent']['icons']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v3)[':parent']['icons']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetV3ParentIconsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v3)[':parent']['icons']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3[':parent'].icons.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV3ParentIconsKey() {
  return ['v3', '/v3/:parent/icons', 'POST'] as const
}

export function usePostV3ParentIcons<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v3)[':parent']['icons']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v3)[':parent']['icons']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV3ParentIconsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v3)[':parent']['icons']['$post']> },
      ) => parseResponse(client.v3[':parent'].icons.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV3ParentListingsVerifyKey() {
  return ['v3', '/v3/:parent/listings:verify', 'POST'] as const
}

export function usePostV3ParentListingsVerify<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v3)[':parent']['listings:verify']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v3)[':parent']['listings:verify']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV3ParentListingsVerifyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v3)[':parent']['listings:verify']['$post']> },
      ) => parseResponse(client.v3[':parent']['listings:verify'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV3ParentPriceAccuracyViewsKey(
  args: InferRequestType<(typeof client.v3)[':parent']['priceAccuracyViews']['$get']>,
) {
  return ['v3', '/v3/:parent/priceAccuracyViews', args] as const
}

export function useGetV3ParentPriceAccuracyViews<TError = unknown>(
  args: InferRequestType<(typeof client.v3)[':parent']['priceAccuracyViews']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3)[':parent']['priceAccuracyViews']['$get']>>
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
        ? getGetV3ParentPriceAccuracyViewsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3)[':parent']['priceAccuracyViews']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3[':parent'].priceAccuracyViews.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV3ParentPriceAccuracyViews<TError = unknown>(
  args: InferRequestType<(typeof client.v3)[':parent']['priceAccuracyViews']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3)[':parent']['priceAccuracyViews']['$get']>>
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
        ? getGetV3ParentPriceAccuracyViewsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3)[':parent']['priceAccuracyViews']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3[':parent'].priceAccuracyViews.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV3ParentPriceAccuracyViewsSummarizeKey(
  args: InferRequestType<(typeof client.v3)[':parent']['priceAccuracyViews:summarize']['$get']>,
) {
  return ['v3', '/v3/:parent/priceAccuracyViews:summarize', args] as const
}

export function useGetV3ParentPriceAccuracyViewsSummarize<TError = unknown>(
  args: InferRequestType<(typeof client.v3)[':parent']['priceAccuracyViews:summarize']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v3)[':parent']['priceAccuracyViews:summarize']['$get']>
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
        ? getGetV3ParentPriceAccuracyViewsSummarizeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v3)[':parent']['priceAccuracyViews:summarize']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v3[':parent']['priceAccuracyViews:summarize'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV3ParentPriceAccuracyViewsSummarize<TError = unknown>(
  args: InferRequestType<(typeof client.v3)[':parent']['priceAccuracyViews:summarize']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v3)[':parent']['priceAccuracyViews:summarize']['$get']>
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
        ? getGetV3ParentPriceAccuracyViewsSummarizeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v3)[':parent']['priceAccuracyViews:summarize']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v3[':parent']['priceAccuracyViews:summarize'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV3ParentPriceCoverageViewsKey(
  args: InferRequestType<(typeof client.v3)[':parent']['priceCoverageViews']['$get']>,
) {
  return ['v3', '/v3/:parent/priceCoverageViews', args] as const
}

export function useGetV3ParentPriceCoverageViews<TError = unknown>(
  args: InferRequestType<(typeof client.v3)[':parent']['priceCoverageViews']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3)[':parent']['priceCoverageViews']['$get']>>
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
        ? getGetV3ParentPriceCoverageViewsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3)[':parent']['priceCoverageViews']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3[':parent'].priceCoverageViews.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV3ParentPriceCoverageViews<TError = unknown>(
  args: InferRequestType<(typeof client.v3)[':parent']['priceCoverageViews']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3)[':parent']['priceCoverageViews']['$get']>>
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
        ? getGetV3ParentPriceCoverageViewsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3)[':parent']['priceCoverageViews']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3[':parent'].priceCoverageViews.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV3ParentPriceCoverageViewsLatestKey(
  args: InferRequestType<(typeof client.v3)[':parent']['priceCoverageViews:latest']['$get']>,
) {
  return ['v3', '/v3/:parent/priceCoverageViews:latest', args] as const
}

export function useGetV3ParentPriceCoverageViewsLatest<TError = unknown>(
  args: InferRequestType<(typeof client.v3)[':parent']['priceCoverageViews:latest']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3)[':parent']['priceCoverageViews:latest']['$get']>>
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
        ? getGetV3ParentPriceCoverageViewsLatestKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3)[':parent']['priceCoverageViews:latest']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v3[':parent']['priceCoverageViews:latest'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV3ParentPriceCoverageViewsLatest<TError = unknown>(
  args: InferRequestType<(typeof client.v3)[':parent']['priceCoverageViews:latest']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3)[':parent']['priceCoverageViews:latest']['$get']>>
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
        ? getGetV3ParentPriceCoverageViewsLatestKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3)[':parent']['priceCoverageViews:latest']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v3[':parent']['priceCoverageViews:latest'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV3ParentReconciliationReportsKey(
  args: InferRequestType<(typeof client.v3)[':parent']['reconciliationReports']['$get']>,
) {
  return ['v3', '/v3/:parent/reconciliationReports', args] as const
}

export function useGetV3ParentReconciliationReports<TError = unknown>(
  args: InferRequestType<(typeof client.v3)[':parent']['reconciliationReports']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3)[':parent']['reconciliationReports']['$get']>>
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
        ? getGetV3ParentReconciliationReportsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3)[':parent']['reconciliationReports']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v3[':parent'].reconciliationReports.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV3ParentReconciliationReports<TError = unknown>(
  args: InferRequestType<(typeof client.v3)[':parent']['reconciliationReports']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3)[':parent']['reconciliationReports']['$get']>>
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
        ? getGetV3ParentReconciliationReportsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3)[':parent']['reconciliationReports']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v3[':parent'].reconciliationReports.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV3ParentReconciliationReportsKey() {
  return ['v3', '/v3/:parent/reconciliationReports', 'POST'] as const
}

export function usePostV3ParentReconciliationReports<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v3)[':parent']['reconciliationReports']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v3)[':parent']['reconciliationReports']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV3ParentReconciliationReportsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v3)[':parent']['reconciliationReports']['$post']>
        },
      ) => parseResponse(client.v3[':parent'].reconciliationReports.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV3ParentReconciliationReportsValidateKey() {
  return ['v3', '/v3/:parent/reconciliationReports:validate', 'POST'] as const
}

export function usePostV3ParentReconciliationReportsValidate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.v3)[':parent']['reconciliationReports:validate']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV3ParentReconciliationReportsValidateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.v3)[':parent']['reconciliationReports:validate']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v3[':parent']['reconciliationReports:validate'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}
