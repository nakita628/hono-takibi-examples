import {
  useQuery,
  useSuspenseQuery,
  useMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/preact-query'
import type {
  UseQueryOptions,
  UseSuspenseQueryOptions,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/preact-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getDoubleclicksearchKey() {
  return ['doubleclicksearch'] as const
}

export function getDoubleclicksearchV2AgencyAgencyIdAdvertiserAdvertiserIdEngineEngineAccountIdConversionQueryKey(
  args: InferRequestType<
    (typeof client.doubleclicksearch.v2.agency)[':agencyId']['advertiser'][':advertiserId']['engine'][':engineAccountId']['conversion']['$get']
  >,
) {
  return [
    'doubleclicksearch',
    '/doubleclicksearch/v2/agency/:agencyId/advertiser/:advertiserId/engine/:engineAccountId/conversion',
    args,
  ] as const
}

export function getDoubleclicksearchV2AgencyAgencyIdAdvertiserAdvertiserIdEngineEngineAccountIdConversionQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.doubleclicksearch.v2.agency)[':agencyId']['advertiser'][':advertiserId']['engine'][':engineAccountId']['conversion']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.doubleclicksearch.v2.agency)[':agencyId']['advertiser'][':advertiserId']['engine'][':engineAccountId']['conversion']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.doubleclicksearch.v2.agency)[':agencyId']['advertiser'][':advertiserId']['engine'][':engineAccountId']['conversion']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getDoubleclicksearchV2AgencyAgencyIdAdvertiserAdvertiserIdEngineEngineAccountIdConversionQueryKey
    >
  >({
    queryKey:
      getDoubleclicksearchV2AgencyAgencyIdAdvertiserAdvertiserIdEngineEngineAccountIdConversionQueryKey(
        args,
      ),
    queryFn({ signal }) {
      return parseResponse(
        client.doubleclicksearch.v2.agency[':agencyId'].advertiser[':advertiserId'].engine[
          ':engineAccountId'
        ].conversion.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useDoubleclicksearchV2AgencyAgencyIdAdvertiserAdvertiserIdEngineEngineAccountIdConversion<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.doubleclicksearch.v2.agency)[':agencyId']['advertiser'][':advertiserId']['engine'][':engineAccountId']['conversion']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.doubleclicksearch.v2.agency)[':agencyId']['advertiser'][':advertiserId']['engine'][':engineAccountId']['conversion']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.doubleclicksearch.v2.agency)[':agencyId']['advertiser'][':advertiserId']['engine'][':engineAccountId']['conversion']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getDoubleclicksearchV2AgencyAgencyIdAdvertiserAdvertiserIdEngineEngineAccountIdConversionQueryKey
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getDoubleclicksearchV2AgencyAgencyIdAdvertiserAdvertiserIdEngineEngineAccountIdConversionQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseDoubleclicksearchV2AgencyAgencyIdAdvertiserAdvertiserIdEngineEngineAccountIdConversion<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.doubleclicksearch.v2.agency)[':agencyId']['advertiser'][':advertiserId']['engine'][':engineAccountId']['conversion']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.doubleclicksearch.v2.agency)[':agencyId']['advertiser'][':advertiserId']['engine'][':engineAccountId']['conversion']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.doubleclicksearch.v2.agency)[':agencyId']['advertiser'][':advertiserId']['engine'][':engineAccountId']['conversion']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getDoubleclicksearchV2AgencyAgencyIdAdvertiserAdvertiserIdEngineEngineAccountIdConversionQueryKey
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getDoubleclicksearchV2AgencyAgencyIdAdvertiserAdvertiserIdEngineEngineAccountIdConversionQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDoubleclicksearchV2AgencyAgencyIdAdvertiserAdvertiserIdIdmappingQueryKey(
  args: InferRequestType<
    (typeof client.doubleclicksearch.v2.agency)[':agencyId']['advertiser'][':advertiserId']['idmapping']['$get']
  >,
) {
  return [
    'doubleclicksearch',
    '/doubleclicksearch/v2/agency/:agencyId/advertiser/:advertiserId/idmapping',
    args,
  ] as const
}

export function getDoubleclicksearchV2AgencyAgencyIdAdvertiserAdvertiserIdIdmappingQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.doubleclicksearch.v2.agency)[':agencyId']['advertiser'][':advertiserId']['idmapping']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.doubleclicksearch.v2.agency)[':agencyId']['advertiser'][':advertiserId']['idmapping']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.doubleclicksearch.v2.agency)[':agencyId']['advertiser'][':advertiserId']['idmapping']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDoubleclicksearchV2AgencyAgencyIdAdvertiserAdvertiserIdIdmappingQueryKey>
  >({
    queryKey: getDoubleclicksearchV2AgencyAgencyIdAdvertiserAdvertiserIdIdmappingQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.doubleclicksearch.v2.agency[':agencyId'].advertiser[':advertiserId'].idmapping.$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function useDoubleclicksearchV2AgencyAgencyIdAdvertiserAdvertiserIdIdmapping<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.doubleclicksearch.v2.agency)[':agencyId']['advertiser'][':advertiserId']['idmapping']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.doubleclicksearch.v2.agency)[':agencyId']['advertiser'][':advertiserId']['idmapping']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.doubleclicksearch.v2.agency)[':agencyId']['advertiser'][':advertiserId']['idmapping']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getDoubleclicksearchV2AgencyAgencyIdAdvertiserAdvertiserIdIdmappingQueryKey
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getDoubleclicksearchV2AgencyAgencyIdAdvertiserAdvertiserIdIdmappingQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseDoubleclicksearchV2AgencyAgencyIdAdvertiserAdvertiserIdIdmapping<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.doubleclicksearch.v2.agency)[':agencyId']['advertiser'][':advertiserId']['idmapping']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.doubleclicksearch.v2.agency)[':agencyId']['advertiser'][':advertiserId']['idmapping']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.doubleclicksearch.v2.agency)[':agencyId']['advertiser'][':advertiserId']['idmapping']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getDoubleclicksearchV2AgencyAgencyIdAdvertiserAdvertiserIdIdmappingQueryKey
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getDoubleclicksearchV2AgencyAgencyIdAdvertiserAdvertiserIdIdmappingQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDoubleclicksearchV2AgencyAgencyIdAdvertiserAdvertiserIdSavedcolumnsQueryKey(
  args: InferRequestType<
    (typeof client.doubleclicksearch.v2.agency)[':agencyId']['advertiser'][':advertiserId']['savedcolumns']['$get']
  >,
) {
  return [
    'doubleclicksearch',
    '/doubleclicksearch/v2/agency/:agencyId/advertiser/:advertiserId/savedcolumns',
    args,
  ] as const
}

export function getDoubleclicksearchV2AgencyAgencyIdAdvertiserAdvertiserIdSavedcolumnsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.doubleclicksearch.v2.agency)[':agencyId']['advertiser'][':advertiserId']['savedcolumns']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.doubleclicksearch.v2.agency)[':agencyId']['advertiser'][':advertiserId']['savedcolumns']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.doubleclicksearch.v2.agency)[':agencyId']['advertiser'][':advertiserId']['savedcolumns']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getDoubleclicksearchV2AgencyAgencyIdAdvertiserAdvertiserIdSavedcolumnsQueryKey
    >
  >({
    queryKey: getDoubleclicksearchV2AgencyAgencyIdAdvertiserAdvertiserIdSavedcolumnsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.doubleclicksearch.v2.agency[':agencyId'].advertiser[
          ':advertiserId'
        ].savedcolumns.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useDoubleclicksearchV2AgencyAgencyIdAdvertiserAdvertiserIdSavedcolumns<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.doubleclicksearch.v2.agency)[':agencyId']['advertiser'][':advertiserId']['savedcolumns']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.doubleclicksearch.v2.agency)[':agencyId']['advertiser'][':advertiserId']['savedcolumns']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.doubleclicksearch.v2.agency)[':agencyId']['advertiser'][':advertiserId']['savedcolumns']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getDoubleclicksearchV2AgencyAgencyIdAdvertiserAdvertiserIdSavedcolumnsQueryKey
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getDoubleclicksearchV2AgencyAgencyIdAdvertiserAdvertiserIdSavedcolumnsQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseDoubleclicksearchV2AgencyAgencyIdAdvertiserAdvertiserIdSavedcolumns<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.doubleclicksearch.v2.agency)[':agencyId']['advertiser'][':advertiserId']['savedcolumns']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.doubleclicksearch.v2.agency)[':agencyId']['advertiser'][':advertiserId']['savedcolumns']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.doubleclicksearch.v2.agency)[':agencyId']['advertiser'][':advertiserId']['savedcolumns']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getDoubleclicksearchV2AgencyAgencyIdAdvertiserAdvertiserIdSavedcolumnsQueryKey
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getDoubleclicksearchV2AgencyAgencyIdAdvertiserAdvertiserIdSavedcolumnsQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutDoubleclicksearchV2ConversionMutationKey() {
  return ['doubleclicksearch', '/doubleclicksearch/v2/conversion', 'PUT'] as const
}

export function getPutDoubleclicksearchV2ConversionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.doubleclicksearch.v2.conversion.$put>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.doubleclicksearch.v2.conversion.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutDoubleclicksearchV2ConversionMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.doubleclicksearch.v2.conversion.$put>) {
      return parseResponse(client.doubleclicksearch.v2.conversion.$put(args, options))
    },
  })
}

export function usePutDoubleclicksearchV2Conversion<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.doubleclicksearch.v2.conversion.$put>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.doubleclicksearch.v2.conversion.$put>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutDoubleclicksearchV2ConversionMutationOptions<
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

export function getPostDoubleclicksearchV2ConversionMutationKey() {
  return ['doubleclicksearch', '/doubleclicksearch/v2/conversion', 'POST'] as const
}

export function getPostDoubleclicksearchV2ConversionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.doubleclicksearch.v2.conversion.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.doubleclicksearch.v2.conversion.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDoubleclicksearchV2ConversionMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.doubleclicksearch.v2.conversion.$post>) {
      return parseResponse(client.doubleclicksearch.v2.conversion.$post(args, options))
    },
  })
}

export function usePostDoubleclicksearchV2Conversion<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.doubleclicksearch.v2.conversion.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.doubleclicksearch.v2.conversion.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDoubleclicksearchV2ConversionMutationOptions<
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

export function getPostDoubleclicksearchV2ConversionUpdateAvailabilityMutationKey() {
  return [
    'doubleclicksearch',
    '/doubleclicksearch/v2/conversion/updateAvailability',
    'POST',
  ] as const
}

export function getPostDoubleclicksearchV2ConversionUpdateAvailabilityMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<typeof client.doubleclicksearch.v2.conversion.updateAvailability.$post>
          >
        >
      >
    >,
    TError,
    InferRequestType<typeof client.doubleclicksearch.v2.conversion.updateAvailability.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDoubleclicksearchV2ConversionUpdateAvailabilityMutationKey(),
    async mutationFn(
      args: InferRequestType<
        typeof client.doubleclicksearch.v2.conversion.updateAvailability.$post
      >,
    ) {
      return parseResponse(
        client.doubleclicksearch.v2.conversion.updateAvailability.$post(args, options),
      )
    },
  })
}

export function usePostDoubleclicksearchV2ConversionUpdateAvailability<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<typeof client.doubleclicksearch.v2.conversion.updateAvailability.$post>
              >
            >
          >
        >,
        TError,
        InferRequestType<typeof client.doubleclicksearch.v2.conversion.updateAvailability.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDoubleclicksearchV2ConversionUpdateAvailabilityMutationOptions<
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

export function getDoubleclicksearchV2CustomerCustomerIdConversionQueryKey(
  args: InferRequestType<
    (typeof client.doubleclicksearch.v2.customer)[':customerId']['conversion']['$get']
  >,
) {
  return [
    'doubleclicksearch',
    '/doubleclicksearch/v2/customer/:customerId/conversion',
    args,
  ] as const
}

export function getDoubleclicksearchV2CustomerCustomerIdConversionQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.doubleclicksearch.v2.customer)[':customerId']['conversion']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.doubleclicksearch.v2.customer)[':customerId']['conversion']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.doubleclicksearch.v2.customer)[':customerId']['conversion']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDoubleclicksearchV2CustomerCustomerIdConversionQueryKey>
  >({
    queryKey: getDoubleclicksearchV2CustomerCustomerIdConversionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.doubleclicksearch.v2.customer[':customerId'].conversion.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useDoubleclicksearchV2CustomerCustomerIdConversion<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.doubleclicksearch.v2.customer)[':customerId']['conversion']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.doubleclicksearch.v2.customer)[':customerId']['conversion']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.doubleclicksearch.v2.customer)[':customerId']['conversion']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDoubleclicksearchV2CustomerCustomerIdConversionQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getDoubleclicksearchV2CustomerCustomerIdConversionQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseDoubleclicksearchV2CustomerCustomerIdConversion<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.doubleclicksearch.v2.customer)[':customerId']['conversion']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.doubleclicksearch.v2.customer)[':customerId']['conversion']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.doubleclicksearch.v2.customer)[':customerId']['conversion']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDoubleclicksearchV2CustomerCustomerIdConversionQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getDoubleclicksearchV2CustomerCustomerIdConversionQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostDoubleclicksearchV2ReportsMutationKey() {
  return ['doubleclicksearch', '/doubleclicksearch/v2/reports', 'POST'] as const
}

export function getPostDoubleclicksearchV2ReportsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.doubleclicksearch.v2.reports.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.doubleclicksearch.v2.reports.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDoubleclicksearchV2ReportsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.doubleclicksearch.v2.reports.$post>) {
      return parseResponse(client.doubleclicksearch.v2.reports.$post(args, options))
    },
  })
}

export function usePostDoubleclicksearchV2Reports<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.doubleclicksearch.v2.reports.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.doubleclicksearch.v2.reports.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDoubleclicksearchV2ReportsMutationOptions<
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

export function getPostDoubleclicksearchV2ReportsGenerateMutationKey() {
  return ['doubleclicksearch', '/doubleclicksearch/v2/reports/generate', 'POST'] as const
}

export function getPostDoubleclicksearchV2ReportsGenerateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.doubleclicksearch.v2.reports.generate.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.doubleclicksearch.v2.reports.generate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDoubleclicksearchV2ReportsGenerateMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.doubleclicksearch.v2.reports.generate.$post>,
    ) {
      return parseResponse(client.doubleclicksearch.v2.reports.generate.$post(args, options))
    },
  })
}

export function usePostDoubleclicksearchV2ReportsGenerate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.doubleclicksearch.v2.reports.generate.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.doubleclicksearch.v2.reports.generate.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDoubleclicksearchV2ReportsGenerateMutationOptions<
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

export function getDoubleclicksearchV2ReportsReportIdQueryKey(
  args: InferRequestType<(typeof client.doubleclicksearch.v2.reports)[':reportId']['$get']>,
) {
  return ['doubleclicksearch', '/doubleclicksearch/v2/reports/:reportId', args] as const
}

export function getDoubleclicksearchV2ReportsReportIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.doubleclicksearch.v2.reports)[':reportId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.doubleclicksearch.v2.reports)[':reportId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.doubleclicksearch.v2.reports)[':reportId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDoubleclicksearchV2ReportsReportIdQueryKey>
  >({
    queryKey: getDoubleclicksearchV2ReportsReportIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.doubleclicksearch.v2.reports[':reportId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useDoubleclicksearchV2ReportsReportId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.doubleclicksearch.v2.reports)[':reportId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.doubleclicksearch.v2.reports)[':reportId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.doubleclicksearch.v2.reports)[':reportId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDoubleclicksearchV2ReportsReportIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getDoubleclicksearchV2ReportsReportIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseDoubleclicksearchV2ReportsReportId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.doubleclicksearch.v2.reports)[':reportId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.doubleclicksearch.v2.reports)[':reportId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.doubleclicksearch.v2.reports)[':reportId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDoubleclicksearchV2ReportsReportIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getDoubleclicksearchV2ReportsReportIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDoubleclicksearchV2ReportsReportIdFilesReportFragmentQueryKey(
  args: InferRequestType<
    (typeof client.doubleclicksearch.v2.reports)[':reportId']['files'][':reportFragment']['$get']
  >,
) {
  return [
    'doubleclicksearch',
    '/doubleclicksearch/v2/reports/:reportId/files/:reportFragment',
    args,
  ] as const
}

export function getDoubleclicksearchV2ReportsReportIdFilesReportFragmentQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.doubleclicksearch.v2.reports)[':reportId']['files'][':reportFragment']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.doubleclicksearch.v2.reports)[':reportId']['files'][':reportFragment']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.doubleclicksearch.v2.reports)[':reportId']['files'][':reportFragment']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDoubleclicksearchV2ReportsReportIdFilesReportFragmentQueryKey>
  >({
    queryKey: getDoubleclicksearchV2ReportsReportIdFilesReportFragmentQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.doubleclicksearch.v2.reports[':reportId'].files[':reportFragment'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useDoubleclicksearchV2ReportsReportIdFilesReportFragment<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.doubleclicksearch.v2.reports)[':reportId']['files'][':reportFragment']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.doubleclicksearch.v2.reports)[':reportId']['files'][':reportFragment']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.doubleclicksearch.v2.reports)[':reportId']['files'][':reportFragment']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDoubleclicksearchV2ReportsReportIdFilesReportFragmentQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getDoubleclicksearchV2ReportsReportIdFilesReportFragmentQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseDoubleclicksearchV2ReportsReportIdFilesReportFragment<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.doubleclicksearch.v2.reports)[':reportId']['files'][':reportFragment']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.doubleclicksearch.v2.reports)[':reportId']['files'][':reportFragment']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.doubleclicksearch.v2.reports)[':reportId']['files'][':reportFragment']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDoubleclicksearchV2ReportsReportIdFilesReportFragmentQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getDoubleclicksearchV2ReportsReportIdFilesReportFragmentQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}
