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

export function getDoubleclicksearchKey() {
  return ['doubleclicksearch'] as const
}

export function getDoubleclicksearchV2AgencyAgencyIdAdvertiserAdvertiserIdEngineEngineAccountIdConversionQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.doubleclicksearch.v2.agency)[':agencyId']['advertiser'][':advertiserId']['engine'][':engineAccountId']['conversion']['$get']
    >
  >,
) {
  return [
    'doubleclicksearch',
    '/doubleclicksearch/v2/agency/:agencyId/advertiser/:advertiserId/engine/:engineAccountId/conversion',
    toValue(args),
  ] as const
}

export function getDoubleclicksearchV2AgencyAgencyIdAdvertiserAdvertiserIdEngineEngineAccountIdConversionQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.doubleclicksearch.v2.agency)[':agencyId']['advertiser'][':advertiserId']['engine'][':engineAccountId']['conversion']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getDoubleclicksearchV2AgencyAgencyIdAdvertiserAdvertiserIdEngineEngineAccountIdConversionQueryKey(
        args,
      ),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.doubleclicksearch.v2.agency[':agencyId'].advertiser[':advertiserId'].engine[
          ':engineAccountId'
        ].conversion.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.doubleclicksearch.v2.agency)[':agencyId']['advertiser'][':advertiserId']['engine'][':engineAccountId']['conversion']['$get']
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
                    (typeof client.doubleclicksearch.v2.agency)[':agencyId']['advertiser'][':advertiserId']['engine'][':engineAccountId']['conversion']['$get']
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
                    (typeof client.doubleclicksearch.v2.agency)[':agencyId']['advertiser'][':advertiserId']['engine'][':engineAccountId']['conversion']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getDoubleclicksearchV2AgencyAgencyIdAdvertiserAdvertiserIdEngineEngineAccountIdConversionQueryKey
          >
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getDoubleclicksearchV2AgencyAgencyIdAdvertiserAdvertiserIdEngineEngineAccountIdConversionQueryKey(
          args,
        ),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.doubleclicksearch.v2.agency[':agencyId'].advertiser[':advertiserId'].engine[
            ':engineAccountId'
          ].conversion.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDoubleclicksearchV2AgencyAgencyIdAdvertiserAdvertiserIdIdmappingQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.doubleclicksearch.v2.agency)[':agencyId']['advertiser'][':advertiserId']['idmapping']['$get']
    >
  >,
) {
  return [
    'doubleclicksearch',
    '/doubleclicksearch/v2/agency/:agencyId/advertiser/:advertiserId/idmapping',
    toValue(args),
  ] as const
}

export function getDoubleclicksearchV2AgencyAgencyIdAdvertiserAdvertiserIdIdmappingQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.doubleclicksearch.v2.agency)[':agencyId']['advertiser'][':advertiserId']['idmapping']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getDoubleclicksearchV2AgencyAgencyIdAdvertiserAdvertiserIdIdmappingQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.doubleclicksearch.v2.agency[':agencyId'].advertiser[':advertiserId'].idmapping.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.doubleclicksearch.v2.agency)[':agencyId']['advertiser'][':advertiserId']['idmapping']['$get']
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
                    (typeof client.doubleclicksearch.v2.agency)[':agencyId']['advertiser'][':advertiserId']['idmapping']['$get']
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
                    (typeof client.doubleclicksearch.v2.agency)[':agencyId']['advertiser'][':advertiserId']['idmapping']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getDoubleclicksearchV2AgencyAgencyIdAdvertiserAdvertiserIdIdmappingQueryKey
          >
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
              (typeof client.doubleclicksearch.v2.agency)[':agencyId']['advertiser'][':advertiserId']['idmapping']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDoubleclicksearchV2AgencyAgencyIdAdvertiserAdvertiserIdIdmappingQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getDoubleclicksearchV2AgencyAgencyIdAdvertiserAdvertiserIdIdmappingQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.doubleclicksearch.v2.agency[':agencyId'].advertiser[
            ':advertiserId'
          ].idmapping.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDoubleclicksearchV2AgencyAgencyIdAdvertiserAdvertiserIdSavedcolumnsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.doubleclicksearch.v2.agency)[':agencyId']['advertiser'][':advertiserId']['savedcolumns']['$get']
    >
  >,
) {
  return [
    'doubleclicksearch',
    '/doubleclicksearch/v2/agency/:agencyId/advertiser/:advertiserId/savedcolumns',
    toValue(args),
  ] as const
}

export function getDoubleclicksearchV2AgencyAgencyIdAdvertiserAdvertiserIdSavedcolumnsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.doubleclicksearch.v2.agency)[':agencyId']['advertiser'][':advertiserId']['savedcolumns']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getDoubleclicksearchV2AgencyAgencyIdAdvertiserAdvertiserIdSavedcolumnsQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.doubleclicksearch.v2.agency[':agencyId'].advertiser[
          ':advertiserId'
        ].savedcolumns.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.doubleclicksearch.v2.agency)[':agencyId']['advertiser'][':advertiserId']['savedcolumns']['$get']
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
                    (typeof client.doubleclicksearch.v2.agency)[':agencyId']['advertiser'][':advertiserId']['savedcolumns']['$get']
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
                    (typeof client.doubleclicksearch.v2.agency)[':agencyId']['advertiser'][':advertiserId']['savedcolumns']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getDoubleclicksearchV2AgencyAgencyIdAdvertiserAdvertiserIdSavedcolumnsQueryKey
          >
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getDoubleclicksearchV2AgencyAgencyIdAdvertiserAdvertiserIdSavedcolumnsQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.doubleclicksearch.v2.agency[':agencyId'].advertiser[
            ':advertiserId'
          ].savedcolumns.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.doubleclicksearch.v2.customer)[':customerId']['conversion']['$get']
    >
  >,
) {
  return [
    'doubleclicksearch',
    '/doubleclicksearch/v2/customer/:customerId/conversion',
    toValue(args),
  ] as const
}

export function getDoubleclicksearchV2CustomerCustomerIdConversionQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.doubleclicksearch.v2.customer)[':customerId']['conversion']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDoubleclicksearchV2CustomerCustomerIdConversionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.doubleclicksearch.v2.customer[':customerId'].conversion.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.doubleclicksearch.v2.customer)[':customerId']['conversion']['$get']
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
                    (typeof client.doubleclicksearch.v2.customer)[':customerId']['conversion']['$get']
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
                    (typeof client.doubleclicksearch.v2.customer)[':customerId']['conversion']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getDoubleclicksearchV2CustomerCustomerIdConversionQueryKey>
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
              (typeof client.doubleclicksearch.v2.customer)[':customerId']['conversion']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDoubleclicksearchV2CustomerCustomerIdConversionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDoubleclicksearchV2CustomerCustomerIdConversionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.doubleclicksearch.v2.customer[':customerId'].conversion.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.doubleclicksearch.v2.reports)[':reportId']['$get']>
  >,
) {
  return ['doubleclicksearch', '/doubleclicksearch/v2/reports/:reportId', toValue(args)] as const
}

export function getDoubleclicksearchV2ReportsReportIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.doubleclicksearch.v2.reports)[':reportId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDoubleclicksearchV2ReportsReportIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.doubleclicksearch.v2.reports[':reportId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.doubleclicksearch.v2.reports)[':reportId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.doubleclicksearch.v2.reports)[':reportId']['$get']>
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
                  ReturnType<(typeof client.doubleclicksearch.v2.reports)[':reportId']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getDoubleclicksearchV2ReportsReportIdQueryKey>
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
          Awaited<ReturnType<(typeof client.doubleclicksearch.v2.reports)[':reportId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDoubleclicksearchV2ReportsReportIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDoubleclicksearchV2ReportsReportIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.doubleclicksearch.v2.reports[':reportId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDoubleclicksearchV2ReportsReportIdFilesReportFragmentQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.doubleclicksearch.v2.reports)[':reportId']['files'][':reportFragment']['$get']
    >
  >,
) {
  return [
    'doubleclicksearch',
    '/doubleclicksearch/v2/reports/:reportId/files/:reportFragment',
    toValue(args),
  ] as const
}

export function getDoubleclicksearchV2ReportsReportIdFilesReportFragmentQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.doubleclicksearch.v2.reports)[':reportId']['files'][':reportFragment']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getDoubleclicksearchV2ReportsReportIdFilesReportFragmentQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.doubleclicksearch.v2.reports[':reportId'].files[':reportFragment'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.doubleclicksearch.v2.reports)[':reportId']['files'][':reportFragment']['$get']
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
                    (typeof client.doubleclicksearch.v2.reports)[':reportId']['files'][':reportFragment']['$get']
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
                    (typeof client.doubleclicksearch.v2.reports)[':reportId']['files'][':reportFragment']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getDoubleclicksearchV2ReportsReportIdFilesReportFragmentQueryKey>
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
              (typeof client.doubleclicksearch.v2.reports)[':reportId']['files'][':reportFragment']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDoubleclicksearchV2ReportsReportIdFilesReportFragmentQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getDoubleclicksearchV2ReportsReportIdFilesReportFragmentQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.doubleclicksearch.v2.reports[':reportId'].files[':reportFragment'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}
