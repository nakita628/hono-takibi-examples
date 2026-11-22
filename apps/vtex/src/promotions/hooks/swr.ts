import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getApiKey() {
  return ['api'] as const
}

export function getPriceSheetKey() {
  return ['price-sheet'] as const
}

export function getPubKey() {
  return ['pub'] as const
}

export function getPostApiRnbPubNotificationsKey() {
  return ['api', '/api/rnb/pub/notifications', 'POST'] as const
}

export function usePostApiRnbPubNotifications<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.rnb.pub.notifications.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.rnb.pub.notifications.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiRnbPubNotificationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.rnb.pub.notifications.$post> },
      ) => parseResponse(client.api.rnb.pub.notifications.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiRnbPvtArchiveBenefitsCalculatorConfigurationKey(
  args: InferRequestType<typeof client.api.rnb.pvt.archive.benefits.calculatorConfiguration.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/rnb/pvt/archive/benefits/calculatorConfiguration', keyArgs] as const
}

export function useGetApiRnbPvtArchiveBenefitsCalculatorConfiguration<TError = unknown>(
  args: InferRequestType<typeof client.api.rnb.pvt.archive.benefits.calculatorConfiguration.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<typeof client.api.rnb.pvt.archive.benefits.calculatorConfiguration.$get>
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
        ? getGetApiRnbPvtArchiveBenefitsCalculatorConfigurationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<typeof client.api.rnb.pvt.archive.benefits.calculatorConfiguration.$get>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.rnb.pvt.archive.benefits.calculatorConfiguration.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiRnbPvtArchiveBenefitsCalculatorConfiguration<TError = unknown>(
  args: InferRequestType<typeof client.api.rnb.pvt.archive.benefits.calculatorConfiguration.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<typeof client.api.rnb.pvt.archive.benefits.calculatorConfiguration.$get>
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
        ? getGetApiRnbPvtArchiveBenefitsCalculatorConfigurationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<typeof client.api.rnb.pvt.archive.benefits.calculatorConfiguration.$get>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.rnb.pvt.archive.benefits.calculatorConfiguration.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApiRnbPvtArchiveCalculatorConfigurationIdCalculatorConfigurationKey() {
  return [
    'api',
    '/api/rnb/pvt/archive/calculatorConfiguration/:idCalculatorConfiguration',
    'POST',
  ] as const
}

export function usePostApiRnbPvtArchiveCalculatorConfigurationIdCalculatorConfiguration<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.rnb.pvt.archive.calculatorConfiguration)[':idCalculatorConfiguration']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.rnb.pvt.archive.calculatorConfiguration)[':idCalculatorConfiguration']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostApiRnbPvtArchiveCalculatorConfigurationIdCalculatorConfigurationKey()
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
            (typeof client.api.rnb.pvt.archive.calculatorConfiguration)[':idCalculatorConfiguration']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.rnb.pvt.archive.calculatorConfiguration[':idCalculatorConfiguration'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiRnbPvtArchiveCouponCouponCodeKey(
  args: InferRequestType<(typeof client.api.rnb.pvt.archive.coupon)[':couponCode']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/rnb/pvt/archive/coupon/:couponCode', keyArgs] as const
}

export function useGetApiRnbPvtArchiveCouponCouponCode<TError = unknown>(
  args: InferRequestType<(typeof client.api.rnb.pvt.archive.coupon)[':couponCode']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.rnb.pvt.archive.coupon)[':couponCode']['$get']>>
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
        ? getGetApiRnbPvtArchiveCouponCouponCodeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.rnb.pvt.archive.coupon)[':couponCode']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.rnb.pvt.archive.coupon[':couponCode'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiRnbPvtArchiveCouponCouponCode<TError = unknown>(
  args: InferRequestType<(typeof client.api.rnb.pvt.archive.coupon)[':couponCode']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.rnb.pvt.archive.coupon)[':couponCode']['$get']>>
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
        ? getGetApiRnbPvtArchiveCouponCouponCodeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.rnb.pvt.archive.coupon)[':couponCode']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.rnb.pvt.archive.coupon[':couponCode'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiRnbPvtArchiveCouponCouponCodeKey() {
  return ['api', '/api/rnb/pvt/archive/coupon/:couponCode', 'POST'] as const
}

export function usePostApiRnbPvtArchiveCouponCouponCode<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.rnb.pvt.archive.coupon)[':couponCode']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.rnb.pvt.archive.coupon)[':couponCode']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiRnbPvtArchiveCouponCouponCodeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api.rnb.pvt.archive.coupon)[':couponCode']['$post']>
        },
      ) =>
        parseResponse(client.api.rnb.pvt.archive.coupon[':couponCode'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiRnbPvtArchiveTaxesCalculatorConfigurationKey(
  args: InferRequestType<typeof client.api.rnb.pvt.archive.taxes.calculatorConfiguration.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/rnb/pvt/archive/taxes/calculatorConfiguration', keyArgs] as const
}

export function useGetApiRnbPvtArchiveTaxesCalculatorConfiguration<TError = unknown>(
  args: InferRequestType<typeof client.api.rnb.pvt.archive.taxes.calculatorConfiguration.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<typeof client.api.rnb.pvt.archive.taxes.calculatorConfiguration.$get>
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
        ? getGetApiRnbPvtArchiveTaxesCalculatorConfigurationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<typeof client.api.rnb.pvt.archive.taxes.calculatorConfiguration.$get>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.rnb.pvt.archive.taxes.calculatorConfiguration.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiRnbPvtArchiveTaxesCalculatorConfiguration<TError = unknown>(
  args: InferRequestType<typeof client.api.rnb.pvt.archive.taxes.calculatorConfiguration.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<typeof client.api.rnb.pvt.archive.taxes.calculatorConfiguration.$get>
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
        ? getGetApiRnbPvtArchiveTaxesCalculatorConfigurationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<typeof client.api.rnb.pvt.archive.taxes.calculatorConfiguration.$get>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.rnb.pvt.archive.taxes.calculatorConfiguration.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiRnbPvtBenefitsCalculatorconfigurationKey(
  args: InferRequestType<typeof client.api.rnb.pvt.benefits.calculatorconfiguration.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/rnb/pvt/benefits/calculatorconfiguration', keyArgs] as const
}

export function useGetApiRnbPvtBenefitsCalculatorconfiguration<TError = unknown>(
  args: InferRequestType<typeof client.api.rnb.pvt.benefits.calculatorconfiguration.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.rnb.pvt.benefits.calculatorconfiguration.$get>>
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
        ? getGetApiRnbPvtBenefitsCalculatorconfigurationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.rnb.pvt.benefits.calculatorconfiguration.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.rnb.pvt.benefits.calculatorconfiguration.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiRnbPvtBenefitsCalculatorconfiguration<TError = unknown>(
  args: InferRequestType<typeof client.api.rnb.pvt.benefits.calculatorconfiguration.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.rnb.pvt.benefits.calculatorconfiguration.$get>>
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
        ? getGetApiRnbPvtBenefitsCalculatorconfigurationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.rnb.pvt.benefits.calculatorconfiguration.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.rnb.pvt.benefits.calculatorconfiguration.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApiRnbPvtCalculatorconfigurationKey() {
  return ['api', '/api/rnb/pvt/calculatorconfiguration', 'POST'] as const
}

export function usePostApiRnbPvtCalculatorconfiguration<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.rnb.pvt.calculatorconfiguration.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.rnb.pvt.calculatorconfiguration.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiRnbPvtCalculatorconfigurationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.rnb.pvt.calculatorconfiguration.$post> },
      ) => parseResponse(client.api.rnb.pvt.calculatorconfiguration.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiRnbPvtCalculatorconfigurationIdCalculatorConfigurationKey(
  args: InferRequestType<
    (typeof client.api.rnb.pvt.calculatorconfiguration)[':idCalculatorConfiguration']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'api',
    '/api/rnb/pvt/calculatorconfiguration/:idCalculatorConfiguration',
    keyArgs,
  ] as const
}

export function useGetApiRnbPvtCalculatorconfigurationIdCalculatorConfiguration<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.rnb.pvt.calculatorconfiguration)[':idCalculatorConfiguration']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.rnb.pvt.calculatorconfiguration)[':idCalculatorConfiguration']['$get']
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
        ? getGetApiRnbPvtCalculatorconfigurationIdCalculatorConfigurationKey(args)
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
                (typeof client.api.rnb.pvt.calculatorconfiguration)[':idCalculatorConfiguration']['$get']
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
          client.api.rnb.pvt.calculatorconfiguration[':idCalculatorConfiguration'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiRnbPvtCalculatorconfigurationIdCalculatorConfiguration<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.rnb.pvt.calculatorconfiguration)[':idCalculatorConfiguration']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.rnb.pvt.calculatorconfiguration)[':idCalculatorConfiguration']['$get']
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
        ? getGetApiRnbPvtCalculatorconfigurationIdCalculatorConfigurationKey(args)
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
                (typeof client.api.rnb.pvt.calculatorconfiguration)[':idCalculatorConfiguration']['$get']
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
          client.api.rnb.pvt.calculatorconfiguration[':idCalculatorConfiguration'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiRnbPvtCampaignConfigurationKey(
  args: InferRequestType<typeof client.api.rnb.pvt.campaignConfiguration.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/rnb/pvt/campaignConfiguration', keyArgs] as const
}

export function useGetApiRnbPvtCampaignConfiguration<TError = unknown>(
  args: InferRequestType<typeof client.api.rnb.pvt.campaignConfiguration.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.rnb.pvt.campaignConfiguration.$get>>
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
        ? getGetApiRnbPvtCampaignConfigurationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.rnb.pvt.campaignConfiguration.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.rnb.pvt.campaignConfiguration.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiRnbPvtCampaignConfiguration<TError = unknown>(
  args: InferRequestType<typeof client.api.rnb.pvt.campaignConfiguration.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.rnb.pvt.campaignConfiguration.$get>>
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
        ? getGetApiRnbPvtCampaignConfigurationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.rnb.pvt.campaignConfiguration.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.rnb.pvt.campaignConfiguration.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiRnbPvtCampaignConfigurationKey() {
  return ['api', '/api/rnb/pvt/campaignConfiguration', 'POST'] as const
}

export function usePostApiRnbPvtCampaignConfiguration<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.rnb.pvt.campaignConfiguration.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.rnb.pvt.campaignConfiguration.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiRnbPvtCampaignConfigurationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.rnb.pvt.campaignConfiguration.$post> },
      ) => parseResponse(client.api.rnb.pvt.campaignConfiguration.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiRnbPvtCampaignConfigurationCampaignIdKey(
  args: InferRequestType<(typeof client.api.rnb.pvt.campaignConfiguration)[':campaignId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/rnb/pvt/campaignConfiguration/:campaignId', keyArgs] as const
}

export function useGetApiRnbPvtCampaignConfigurationCampaignId<TError = unknown>(
  args: InferRequestType<(typeof client.api.rnb.pvt.campaignConfiguration)[':campaignId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.rnb.pvt.campaignConfiguration)[':campaignId']['$get']>
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
        ? getGetApiRnbPvtCampaignConfigurationCampaignIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.rnb.pvt.campaignConfiguration)[':campaignId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.rnb.pvt.campaignConfiguration[':campaignId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiRnbPvtCampaignConfigurationCampaignId<TError = unknown>(
  args: InferRequestType<(typeof client.api.rnb.pvt.campaignConfiguration)[':campaignId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.rnb.pvt.campaignConfiguration)[':campaignId']['$get']>
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
        ? getGetApiRnbPvtCampaignConfigurationCampaignIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.rnb.pvt.campaignConfiguration)[':campaignId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.rnb.pvt.campaignConfiguration[':campaignId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiRnbPvtCouponKey(
  args: InferRequestType<typeof client.api.rnb.pvt.coupon.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/rnb/pvt/coupon', keyArgs] as const
}

export function useGetApiRnbPvtCoupon<TError = unknown>(
  args: InferRequestType<typeof client.api.rnb.pvt.coupon.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.rnb.pvt.coupon.$get>>>>
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
        ? getGetApiRnbPvtCouponKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.rnb.pvt.coupon.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.rnb.pvt.coupon.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiRnbPvtCoupon<TError = unknown>(
  args: InferRequestType<typeof client.api.rnb.pvt.coupon.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.rnb.pvt.coupon.$get>>>>
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
        ? getGetApiRnbPvtCouponKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.rnb.pvt.coupon.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.rnb.pvt.coupon.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiRnbPvtCouponKey() {
  return ['api', '/api/rnb/pvt/coupon', 'POST'] as const
}

export function usePostApiRnbPvtCoupon<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.rnb.pvt.coupon.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.rnb.pvt.coupon.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiRnbPvtCouponKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.rnb.pvt.coupon.$post> }) =>
        parseResponse(client.api.rnb.pvt.coupon.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiRnbPvtCouponIndexKey() {
  return ['api', '/api/rnb/pvt/coupon/', 'POST'] as const
}

export function usePostApiRnbPvtCouponIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.rnb.pvt.coupon.index.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.rnb.pvt.coupon.index.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiRnbPvtCouponIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.rnb.pvt.coupon.index.$post> },
      ) => parseResponse(client.api.rnb.pvt.coupon.index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiRnbPvtCouponUsageCouponCodeKey(
  args: InferRequestType<(typeof client.api.rnb.pvt.coupon.usage)[':couponCode']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/rnb/pvt/coupon/usage/:couponCode', keyArgs] as const
}

export function useGetApiRnbPvtCouponUsageCouponCode<TError = unknown>(
  args: InferRequestType<(typeof client.api.rnb.pvt.coupon.usage)[':couponCode']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.rnb.pvt.coupon.usage)[':couponCode']['$get']>>
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
        ? getGetApiRnbPvtCouponUsageCouponCodeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.rnb.pvt.coupon.usage)[':couponCode']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.rnb.pvt.coupon.usage[':couponCode'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiRnbPvtCouponUsageCouponCode<TError = unknown>(
  args: InferRequestType<(typeof client.api.rnb.pvt.coupon.usage)[':couponCode']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.rnb.pvt.coupon.usage)[':couponCode']['$get']>>
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
        ? getGetApiRnbPvtCouponUsageCouponCodeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.rnb.pvt.coupon.usage)[':couponCode']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.rnb.pvt.coupon.usage[':couponCode'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiRnbPvtCouponCouponCodeKey(
  args: InferRequestType<(typeof client.api.rnb.pvt.coupon)[':couponCode']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/rnb/pvt/coupon/:couponCode', keyArgs] as const
}

export function useGetApiRnbPvtCouponCouponCode<TError = unknown>(
  args: InferRequestType<(typeof client.api.rnb.pvt.coupon)[':couponCode']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.rnb.pvt.coupon)[':couponCode']['$get']>>
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
        ? getGetApiRnbPvtCouponCouponCodeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.rnb.pvt.coupon)[':couponCode']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.rnb.pvt.coupon[':couponCode'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiRnbPvtCouponCouponCode<TError = unknown>(
  args: InferRequestType<(typeof client.api.rnb.pvt.coupon)[':couponCode']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.rnb.pvt.coupon)[':couponCode']['$get']>>
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
        ? getGetApiRnbPvtCouponCouponCodeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.rnb.pvt.coupon)[':couponCode']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.rnb.pvt.coupon[':couponCode'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiRnbPvtCouponsKey() {
  return ['api', '/api/rnb/pvt/coupons', 'POST'] as const
}

export function usePostApiRnbPvtCoupons<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.rnb.pvt.coupons.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.rnb.pvt.coupons.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiRnbPvtCouponsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.rnb.pvt.coupons.$post> }) =>
        parseResponse(client.api.rnb.pvt.coupons.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiRnbPvtImportCalculatorConfigurationKey() {
  return ['api', '/api/rnb/pvt/import/calculatorConfiguration', 'POST'] as const
}

export function usePostApiRnbPvtImportCalculatorConfiguration<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.rnb.pvt.import.calculatorConfiguration.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.rnb.pvt.import.calculatorConfiguration.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiRnbPvtImportCalculatorConfigurationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<typeof client.api.rnb.pvt.import.calculatorConfiguration.$post>
        },
      ) =>
        parseResponse(client.api.rnb.pvt.import.calculatorConfiguration.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutApiRnbPvtImportCalculatorConfigurationPromotionIdKey() {
  return ['api', '/api/rnb/pvt/import/calculatorConfiguration/:promotionId', 'PUT'] as const
}

export function usePutApiRnbPvtImportCalculatorConfigurationPromotionId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.rnb.pvt.import.calculatorConfiguration)[':promotionId']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.rnb.pvt.import.calculatorConfiguration)[':promotionId']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiRnbPvtImportCalculatorConfigurationPromotionIdKey()
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
            (typeof client.api.rnb.pvt.import.calculatorConfiguration)[':promotionId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.api.rnb.pvt.import.calculatorConfiguration[':promotionId'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiRnbPvtMultipleCouponsKey() {
  return ['api', '/api/rnb/pvt/multiple-coupons', 'POST'] as const
}

export function usePostApiRnbPvtMultipleCoupons<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.rnb.pvt)['multiple-coupons']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.rnb.pvt)['multiple-coupons']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiRnbPvtMultipleCouponsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.rnb.pvt)['multiple-coupons']['$post']> },
      ) => parseResponse(client.api.rnb.pvt['multiple-coupons'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiRnbPvtTaxesCalculatorconfigurationKey(
  args: InferRequestType<typeof client.api.rnb.pvt.taxes.calculatorconfiguration.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/rnb/pvt/taxes/calculatorconfiguration', keyArgs] as const
}

export function useGetApiRnbPvtTaxesCalculatorconfiguration<TError = unknown>(
  args: InferRequestType<typeof client.api.rnb.pvt.taxes.calculatorconfiguration.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.rnb.pvt.taxes.calculatorconfiguration.$get>>
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
        ? getGetApiRnbPvtTaxesCalculatorconfigurationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.rnb.pvt.taxes.calculatorconfiguration.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.rnb.pvt.taxes.calculatorconfiguration.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiRnbPvtTaxesCalculatorconfiguration<TError = unknown>(
  args: InferRequestType<typeof client.api.rnb.pvt.taxes.calculatorconfiguration.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.rnb.pvt.taxes.calculatorconfiguration.$get>>
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
        ? getGetApiRnbPvtTaxesCalculatorconfigurationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.rnb.pvt.taxes.calculatorconfiguration.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.rnb.pvt.taxes.calculatorconfiguration.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiRnbPvtUnarchiveCalculatorConfigurationIdCalculatorConfigurationKey() {
  return [
    'api',
    '/api/rnb/pvt/unarchive/calculatorConfiguration/:idCalculatorConfiguration',
    'POST',
  ] as const
}

export function usePostApiRnbPvtUnarchiveCalculatorConfigurationIdCalculatorConfiguration<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.rnb.pvt.unarchive.calculatorConfiguration)[':idCalculatorConfiguration']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.rnb.pvt.unarchive.calculatorConfiguration)[':idCalculatorConfiguration']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostApiRnbPvtUnarchiveCalculatorConfigurationIdCalculatorConfigurationKey()
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
            (typeof client.api.rnb.pvt.unarchive.calculatorConfiguration)[':idCalculatorConfiguration']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.rnb.pvt.unarchive.calculatorConfiguration[':idCalculatorConfiguration'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiRnbPvtUnarchiveCouponCouponCodeKey() {
  return ['api', '/api/rnb/pvt/unarchive/coupon/:couponCode', 'POST'] as const
}

export function usePostApiRnbPvtUnarchiveCouponCouponCode<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.rnb.pvt.unarchive.coupon)[':couponCode']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.rnb.pvt.unarchive.coupon)[':couponCode']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiRnbPvtUnarchiveCouponCouponCodeKey()
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
            (typeof client.api.rnb.pvt.unarchive.coupon)[':couponCode']['$post']
          >
        },
      ) =>
        parseResponse(client.api.rnb.pvt.unarchive.coupon[':couponCode'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostPriceSheetKey() {
  return ['price-sheet', '/price-sheet', 'POST'] as const
}

export function usePostPriceSheet<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['price-sheet']['$post']>>>>
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['price-sheet']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPriceSheetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client)['price-sheet']['$post']> }) =>
        parseResponse(client['price-sheet'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPriceSheetAllPagePageSizeKey(
  args: InferRequestType<(typeof client)['price-sheet']['all'][':page'][':pageSize']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['price-sheet', '/price-sheet/all/:page/:pageSize', keyArgs] as const
}

export function useGetPriceSheetAllPagePageSize<TError = unknown>(
  args: InferRequestType<(typeof client)['price-sheet']['all'][':page'][':pageSize']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['price-sheet']['all'][':page'][':pageSize']['$get']>>
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
        ? getGetPriceSheetAllPagePageSizeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['price-sheet']['all'][':page'][':pageSize']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['price-sheet'].all[':page'][':pageSize'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPriceSheetAllPagePageSize<TError = unknown>(
  args: InferRequestType<(typeof client)['price-sheet']['all'][':page'][':pageSize']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['price-sheet']['all'][':page'][':pageSize']['$get']>>
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
        ? getGetPriceSheetAllPagePageSizeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['price-sheet']['all'][':page'][':pageSize']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['price-sheet'].all[':page'][':pageSize'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostPriceSheetContextKey() {
  return ['price-sheet', '/price-sheet/context', 'POST'] as const
}

export function usePostPriceSheetContext<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['price-sheet']['context']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['price-sheet']['context']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPriceSheetContextKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['price-sheet']['context']['$post']> },
      ) => parseResponse(client['price-sheet'].context.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPriceSheetSkuIdKey(
  args: InferRequestType<(typeof client)['price-sheet'][':skuId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['price-sheet', '/price-sheet/:skuId', keyArgs] as const
}

export function useGetPriceSheetSkuId<TError = unknown>(
  args: InferRequestType<(typeof client)['price-sheet'][':skuId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['price-sheet'][':skuId']['$get']>>
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
        ? getGetPriceSheetSkuIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['price-sheet'][':skuId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['price-sheet'][':skuId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPriceSheetSkuId<TError = unknown>(
  args: InferRequestType<(typeof client)['price-sheet'][':skuId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['price-sheet'][':skuId']['$get']>>
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
        ? getGetPriceSheetSkuIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['price-sheet'][':skuId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['price-sheet'][':skuId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeletePriceSheetSkuIdKey() {
  return ['price-sheet', '/price-sheet/:skuId', 'DELETE'] as const
}

export function useDeletePriceSheetSkuId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['price-sheet'][':skuId']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['price-sheet'][':skuId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeletePriceSheetSkuIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['price-sheet'][':skuId']['$delete']> },
      ) => parseResponse(client['price-sheet'][':skuId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPriceSheetSkuIdTradePolicyKey(
  args: InferRequestType<(typeof client)['price-sheet'][':skuId'][':tradePolicy']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['price-sheet', '/price-sheet/:skuId/:tradePolicy', keyArgs] as const
}

export function useGetPriceSheetSkuIdTradePolicy<TError = unknown>(
  args: InferRequestType<(typeof client)['price-sheet'][':skuId'][':tradePolicy']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['price-sheet'][':skuId'][':tradePolicy']['$get']>>
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
        ? getGetPriceSheetSkuIdTradePolicyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['price-sheet'][':skuId'][':tradePolicy']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['price-sheet'][':skuId'][':tradePolicy'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPriceSheetSkuIdTradePolicy<TError = unknown>(
  args: InferRequestType<(typeof client)['price-sheet'][':skuId'][':tradePolicy']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['price-sheet'][':skuId'][':tradePolicy']['$get']>>
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
        ? getGetPriceSheetSkuIdTradePolicyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['price-sheet'][':skuId'][':tradePolicy']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['price-sheet'][':skuId'][':tradePolicy'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostPubBundlesKey() {
  return ['pub', '/pub/bundles', 'POST'] as const
}

export function usePostPubBundles<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pub.bundles.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.pub.bundles.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPubBundlesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.pub.bundles.$post> }) =>
        parseResponse(client.pub.bundles.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
