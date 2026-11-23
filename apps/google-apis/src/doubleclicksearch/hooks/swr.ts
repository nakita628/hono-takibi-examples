import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getDoubleclicksearchKey() {
  return ['doubleclicksearch'] as const
}

export function getGetDoubleclicksearchV2AgencyAgencyIdAdvertiserAdvertiserIdEngineEngineAccountIdConversionKey(
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

export function useGetDoubleclicksearchV2AgencyAgencyIdAdvertiserAdvertiserIdEngineEngineAccountIdConversion<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.doubleclicksearch.v2.agency)[':agencyId']['advertiser'][':advertiserId']['engine'][':engineAccountId']['conversion']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetDoubleclicksearchV2AgencyAgencyIdAdvertiserAdvertiserIdEngineEngineAccountIdConversionKey(
            args,
          )
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
                (typeof client.doubleclicksearch.v2.agency)[':agencyId']['advertiser'][':advertiserId']['engine'][':engineAccountId']['conversion']['$get']
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
          client.doubleclicksearch.v2.agency[':agencyId'].advertiser[':advertiserId'].engine[
            ':engineAccountId'
          ].conversion.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDoubleclicksearchV2AgencyAgencyIdAdvertiserAdvertiserIdEngineEngineAccountIdConversion<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.doubleclicksearch.v2.agency)[':agencyId']['advertiser'][':advertiserId']['engine'][':engineAccountId']['conversion']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetDoubleclicksearchV2AgencyAgencyIdAdvertiserAdvertiserIdEngineEngineAccountIdConversionKey(
            args,
          )
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
                (typeof client.doubleclicksearch.v2.agency)[':agencyId']['advertiser'][':advertiserId']['engine'][':engineAccountId']['conversion']['$get']
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
          client.doubleclicksearch.v2.agency[':agencyId'].advertiser[':advertiserId'].engine[
            ':engineAccountId'
          ].conversion.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetDoubleclicksearchV2AgencyAgencyIdAdvertiserAdvertiserIdIdmappingKey(
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

export function useGetDoubleclicksearchV2AgencyAgencyIdAdvertiserAdvertiserIdIdmapping<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.doubleclicksearch.v2.agency)[':agencyId']['advertiser'][':advertiserId']['idmapping']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetDoubleclicksearchV2AgencyAgencyIdAdvertiserAdvertiserIdIdmappingKey(args)
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
                (typeof client.doubleclicksearch.v2.agency)[':agencyId']['advertiser'][':advertiserId']['idmapping']['$get']
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
          client.doubleclicksearch.v2.agency[':agencyId'].advertiser[
            ':advertiserId'
          ].idmapping.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDoubleclicksearchV2AgencyAgencyIdAdvertiserAdvertiserIdIdmapping<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.doubleclicksearch.v2.agency)[':agencyId']['advertiser'][':advertiserId']['idmapping']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetDoubleclicksearchV2AgencyAgencyIdAdvertiserAdvertiserIdIdmappingKey(args)
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
                (typeof client.doubleclicksearch.v2.agency)[':agencyId']['advertiser'][':advertiserId']['idmapping']['$get']
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
          client.doubleclicksearch.v2.agency[':agencyId'].advertiser[
            ':advertiserId'
          ].idmapping.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetDoubleclicksearchV2AgencyAgencyIdAdvertiserAdvertiserIdSavedcolumnsKey(
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

export function useGetDoubleclicksearchV2AgencyAgencyIdAdvertiserAdvertiserIdSavedcolumns<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.doubleclicksearch.v2.agency)[':agencyId']['advertiser'][':advertiserId']['savedcolumns']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetDoubleclicksearchV2AgencyAgencyIdAdvertiserAdvertiserIdSavedcolumnsKey(args)
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
                (typeof client.doubleclicksearch.v2.agency)[':agencyId']['advertiser'][':advertiserId']['savedcolumns']['$get']
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
          client.doubleclicksearch.v2.agency[':agencyId'].advertiser[
            ':advertiserId'
          ].savedcolumns.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDoubleclicksearchV2AgencyAgencyIdAdvertiserAdvertiserIdSavedcolumns<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.doubleclicksearch.v2.agency)[':agencyId']['advertiser'][':advertiserId']['savedcolumns']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetDoubleclicksearchV2AgencyAgencyIdAdvertiserAdvertiserIdSavedcolumnsKey(args)
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
                (typeof client.doubleclicksearch.v2.agency)[':agencyId']['advertiser'][':advertiserId']['savedcolumns']['$get']
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
          client.doubleclicksearch.v2.agency[':agencyId'].advertiser[
            ':advertiserId'
          ].savedcolumns.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutDoubleclicksearchV2ConversionKey() {
  return ['doubleclicksearch', '/doubleclicksearch/v2/conversion', 'PUT'] as const
}

export function usePutDoubleclicksearchV2Conversion<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.doubleclicksearch.v2.conversion.$put>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.doubleclicksearch.v2.conversion.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutDoubleclicksearchV2ConversionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.doubleclicksearch.v2.conversion.$put> },
      ) => parseResponse(client.doubleclicksearch.v2.conversion.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDoubleclicksearchV2ConversionKey() {
  return ['doubleclicksearch', '/doubleclicksearch/v2/conversion', 'POST'] as const
}

export function usePostDoubleclicksearchV2Conversion<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.doubleclicksearch.v2.conversion.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.doubleclicksearch.v2.conversion.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDoubleclicksearchV2ConversionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.doubleclicksearch.v2.conversion.$post> },
      ) => parseResponse(client.doubleclicksearch.v2.conversion.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDoubleclicksearchV2ConversionUpdateAvailabilityKey() {
  return [
    'doubleclicksearch',
    '/doubleclicksearch/v2/conversion/updateAvailability',
    'POST',
  ] as const
}

export function usePostDoubleclicksearchV2ConversionUpdateAvailability<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<typeof client.doubleclicksearch.v2.conversion.updateAvailability.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDoubleclicksearchV2ConversionUpdateAvailabilityKey()
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
            typeof client.doubleclicksearch.v2.conversion.updateAvailability.$post
          >
        },
      ) =>
        parseResponse(
          client.doubleclicksearch.v2.conversion.updateAvailability.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetDoubleclicksearchV2CustomerCustomerIdConversionKey(
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

export function useGetDoubleclicksearchV2CustomerCustomerIdConversion<TError = unknown>(
  args: InferRequestType<
    (typeof client.doubleclicksearch.v2.customer)[':customerId']['conversion']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetDoubleclicksearchV2CustomerCustomerIdConversionKey(args)
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
                (typeof client.doubleclicksearch.v2.customer)[':customerId']['conversion']['$get']
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
          client.doubleclicksearch.v2.customer[':customerId'].conversion.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDoubleclicksearchV2CustomerCustomerIdConversion<TError = unknown>(
  args: InferRequestType<
    (typeof client.doubleclicksearch.v2.customer)[':customerId']['conversion']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetDoubleclicksearchV2CustomerCustomerIdConversionKey(args)
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
                (typeof client.doubleclicksearch.v2.customer)[':customerId']['conversion']['$get']
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
          client.doubleclicksearch.v2.customer[':customerId'].conversion.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostDoubleclicksearchV2ReportsKey() {
  return ['doubleclicksearch', '/doubleclicksearch/v2/reports', 'POST'] as const
}

export function usePostDoubleclicksearchV2Reports<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.doubleclicksearch.v2.reports.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.doubleclicksearch.v2.reports.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDoubleclicksearchV2ReportsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.doubleclicksearch.v2.reports.$post> },
      ) => parseResponse(client.doubleclicksearch.v2.reports.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDoubleclicksearchV2ReportsGenerateKey() {
  return ['doubleclicksearch', '/doubleclicksearch/v2/reports/generate', 'POST'] as const
}

export function usePostDoubleclicksearchV2ReportsGenerate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.doubleclicksearch.v2.reports.generate.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.doubleclicksearch.v2.reports.generate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDoubleclicksearchV2ReportsGenerateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.doubleclicksearch.v2.reports.generate.$post> },
      ) => parseResponse(client.doubleclicksearch.v2.reports.generate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDoubleclicksearchV2ReportsReportIdKey(
  args: InferRequestType<(typeof client.doubleclicksearch.v2.reports)[':reportId']['$get']>,
) {
  return ['doubleclicksearch', '/doubleclicksearch/v2/reports/:reportId', args] as const
}

export function useGetDoubleclicksearchV2ReportsReportId<TError = unknown>(
  args: InferRequestType<(typeof client.doubleclicksearch.v2.reports)[':reportId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.doubleclicksearch.v2.reports)[':reportId']['$get']>>
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
        ? getGetDoubleclicksearchV2ReportsReportIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.doubleclicksearch.v2.reports)[':reportId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.doubleclicksearch.v2.reports[':reportId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDoubleclicksearchV2ReportsReportId<TError = unknown>(
  args: InferRequestType<(typeof client.doubleclicksearch.v2.reports)[':reportId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.doubleclicksearch.v2.reports)[':reportId']['$get']>>
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
        ? getGetDoubleclicksearchV2ReportsReportIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.doubleclicksearch.v2.reports)[':reportId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.doubleclicksearch.v2.reports[':reportId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetDoubleclicksearchV2ReportsReportIdFilesReportFragmentKey(
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

export function useGetDoubleclicksearchV2ReportsReportIdFilesReportFragment<TError = unknown>(
  args: InferRequestType<
    (typeof client.doubleclicksearch.v2.reports)[':reportId']['files'][':reportFragment']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetDoubleclicksearchV2ReportsReportIdFilesReportFragmentKey(args)
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
                (typeof client.doubleclicksearch.v2.reports)[':reportId']['files'][':reportFragment']['$get']
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
          client.doubleclicksearch.v2.reports[':reportId'].files[':reportFragment'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDoubleclicksearchV2ReportsReportIdFilesReportFragment<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.doubleclicksearch.v2.reports)[':reportId']['files'][':reportFragment']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetDoubleclicksearchV2ReportsReportIdFilesReportFragmentKey(args)
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
                (typeof client.doubleclicksearch.v2.reports)[':reportId']['files'][':reportFragment']['$get']
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
          client.doubleclicksearch.v2.reports[':reportId'].files[':reportFragment'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}
