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

export function getApiKey() {
  return ['api'] as const
}

export function getPriceSheetKey() {
  return ['price-sheet'] as const
}

export function getPubKey() {
  return ['pub'] as const
}

export function getPostApiRnbPubNotificationsMutationKey() {
  return ['api', '/api/rnb/pub/notifications', 'POST'] as const
}

export function getPostApiRnbPubNotificationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.rnb.pub.notifications.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.rnb.pub.notifications.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiRnbPubNotificationsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.rnb.pub.notifications.$post>) {
      return parseResponse(client.api.rnb.pub.notifications.$post(args, options))
    },
  })
}

export function usePostApiRnbPubNotifications<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.rnb.pub.notifications.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.rnb.pub.notifications.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiRnbPubNotificationsMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiRnbPvtArchiveBenefitsCalculatorConfigurationQueryKey(
  args: InferRequestType<typeof client.api.rnb.pvt.archive.benefits.calculatorConfiguration.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/rnb/pvt/archive/benefits/calculatorConfiguration', keyArgs] as const
}

export function getApiRnbPvtArchiveBenefitsCalculatorConfigurationQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.rnb.pvt.archive.benefits.calculatorConfiguration.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.rnb.pvt.archive.benefits.calculatorConfiguration.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<typeof client.api.rnb.pvt.archive.benefits.calculatorConfiguration.$get>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiRnbPvtArchiveBenefitsCalculatorConfigurationQueryKey>
  >({
    queryKey: getApiRnbPvtArchiveBenefitsCalculatorConfigurationQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.rnb.pvt.archive.benefits.calculatorConfiguration.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiRnbPvtArchiveBenefitsCalculatorConfiguration<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.rnb.pvt.archive.benefits.calculatorConfiguration.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.rnb.pvt.archive.benefits.calculatorConfiguration.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<typeof client.api.rnb.pvt.archive.benefits.calculatorConfiguration.$get>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiRnbPvtArchiveBenefitsCalculatorConfigurationQueryKey>
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
      ...getApiRnbPvtArchiveBenefitsCalculatorConfigurationQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiRnbPvtArchiveBenefitsCalculatorConfiguration<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.rnb.pvt.archive.benefits.calculatorConfiguration.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.rnb.pvt.archive.benefits.calculatorConfiguration.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<typeof client.api.rnb.pvt.archive.benefits.calculatorConfiguration.$get>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiRnbPvtArchiveBenefitsCalculatorConfigurationQueryKey>
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
      ...getApiRnbPvtArchiveBenefitsCalculatorConfigurationQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostApiRnbPvtArchiveCalculatorConfigurationIdCalculatorConfigurationMutationKey() {
  return [
    'api',
    '/api/rnb/pvt/archive/calculatorConfiguration/:idCalculatorConfiguration',
    'POST',
  ] as const
}

export function getPostApiRnbPvtArchiveCalculatorConfigurationIdCalculatorConfigurationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.api.rnb.pvt.archive.calculatorConfiguration)[':idCalculatorConfiguration']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostApiRnbPvtArchiveCalculatorConfigurationIdCalculatorConfigurationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.rnb.pvt.archive.calculatorConfiguration)[':idCalculatorConfiguration']['$post']
      >,
    ) {
      return parseResponse(
        client.api.rnb.pvt.archive.calculatorConfiguration[':idCalculatorConfiguration'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostApiRnbPvtArchiveCalculatorConfigurationIdCalculatorConfiguration<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client.api.rnb.pvt.archive.calculatorConfiguration)[':idCalculatorConfiguration']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostApiRnbPvtArchiveCalculatorConfigurationIdCalculatorConfigurationMutationOptions<
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

export function getApiRnbPvtArchiveCouponCouponCodeQueryKey(
  args: InferRequestType<(typeof client.api.rnb.pvt.archive.coupon)[':couponCode']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/rnb/pvt/archive/coupon/:couponCode', keyArgs] as const
}

export function getApiRnbPvtArchiveCouponCouponCodeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.rnb.pvt.archive.coupon)[':couponCode']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.rnb.pvt.archive.coupon)[':couponCode']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.rnb.pvt.archive.coupon)[':couponCode']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiRnbPvtArchiveCouponCouponCodeQueryKey>
  >({
    queryKey: getApiRnbPvtArchiveCouponCouponCodeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.rnb.pvt.archive.coupon[':couponCode'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiRnbPvtArchiveCouponCouponCode<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.rnb.pvt.archive.coupon)[':couponCode']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.rnb.pvt.archive.coupon)[':couponCode']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.rnb.pvt.archive.coupon)[':couponCode']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiRnbPvtArchiveCouponCouponCodeQueryKey>
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
      ...getApiRnbPvtArchiveCouponCouponCodeQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiRnbPvtArchiveCouponCouponCode<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.rnb.pvt.archive.coupon)[':couponCode']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.rnb.pvt.archive.coupon)[':couponCode']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.rnb.pvt.archive.coupon)[':couponCode']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiRnbPvtArchiveCouponCouponCodeQueryKey>
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
      ...getApiRnbPvtArchiveCouponCouponCodeQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostApiRnbPvtArchiveCouponCouponCodeMutationKey() {
  return ['api', '/api/rnb/pvt/archive/coupon/:couponCode', 'POST'] as const
}

export function getPostApiRnbPvtArchiveCouponCouponCodeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.rnb.pvt.archive.coupon)[':couponCode']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.rnb.pvt.archive.coupon)[':couponCode']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiRnbPvtArchiveCouponCouponCodeMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.rnb.pvt.archive.coupon)[':couponCode']['$post']>,
    ) {
      return parseResponse(client.api.rnb.pvt.archive.coupon[':couponCode'].$post(args, options))
    },
  })
}

export function usePostApiRnbPvtArchiveCouponCouponCode<
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
                ReturnType<(typeof client.api.rnb.pvt.archive.coupon)[':couponCode']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.rnb.pvt.archive.coupon)[':couponCode']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiRnbPvtArchiveCouponCouponCodeMutationOptions<
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

export function getApiRnbPvtArchiveTaxesCalculatorConfigurationQueryKey(
  args: InferRequestType<typeof client.api.rnb.pvt.archive.taxes.calculatorConfiguration.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/rnb/pvt/archive/taxes/calculatorConfiguration', keyArgs] as const
}

export function getApiRnbPvtArchiveTaxesCalculatorConfigurationQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.rnb.pvt.archive.taxes.calculatorConfiguration.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.rnb.pvt.archive.taxes.calculatorConfiguration.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.rnb.pvt.archive.taxes.calculatorConfiguration.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiRnbPvtArchiveTaxesCalculatorConfigurationQueryKey>
  >({
    queryKey: getApiRnbPvtArchiveTaxesCalculatorConfigurationQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.rnb.pvt.archive.taxes.calculatorConfiguration.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiRnbPvtArchiveTaxesCalculatorConfiguration<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.rnb.pvt.archive.taxes.calculatorConfiguration.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.rnb.pvt.archive.taxes.calculatorConfiguration.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<typeof client.api.rnb.pvt.archive.taxes.calculatorConfiguration.$get>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiRnbPvtArchiveTaxesCalculatorConfigurationQueryKey>
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
      ...getApiRnbPvtArchiveTaxesCalculatorConfigurationQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiRnbPvtArchiveTaxesCalculatorConfiguration<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.rnb.pvt.archive.taxes.calculatorConfiguration.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.rnb.pvt.archive.taxes.calculatorConfiguration.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<typeof client.api.rnb.pvt.archive.taxes.calculatorConfiguration.$get>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiRnbPvtArchiveTaxesCalculatorConfigurationQueryKey>
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
      ...getApiRnbPvtArchiveTaxesCalculatorConfigurationQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiRnbPvtBenefitsCalculatorconfigurationQueryKey(
  args: InferRequestType<typeof client.api.rnb.pvt.benefits.calculatorconfiguration.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/rnb/pvt/benefits/calculatorconfiguration', keyArgs] as const
}

export function getApiRnbPvtBenefitsCalculatorconfigurationQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.rnb.pvt.benefits.calculatorconfiguration.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.rnb.pvt.benefits.calculatorconfiguration.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.rnb.pvt.benefits.calculatorconfiguration.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiRnbPvtBenefitsCalculatorconfigurationQueryKey>
  >({
    queryKey: getApiRnbPvtBenefitsCalculatorconfigurationQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.rnb.pvt.benefits.calculatorconfiguration.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiRnbPvtBenefitsCalculatorconfiguration<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.rnb.pvt.benefits.calculatorconfiguration.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.rnb.pvt.benefits.calculatorconfiguration.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.rnb.pvt.benefits.calculatorconfiguration.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiRnbPvtBenefitsCalculatorconfigurationQueryKey>
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
      ...getApiRnbPvtBenefitsCalculatorconfigurationQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiRnbPvtBenefitsCalculatorconfiguration<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.rnb.pvt.benefits.calculatorconfiguration.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.rnb.pvt.benefits.calculatorconfiguration.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.rnb.pvt.benefits.calculatorconfiguration.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiRnbPvtBenefitsCalculatorconfigurationQueryKey>
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
      ...getApiRnbPvtBenefitsCalculatorconfigurationQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostApiRnbPvtCalculatorconfigurationMutationKey() {
  return ['api', '/api/rnb/pvt/calculatorconfiguration', 'POST'] as const
}

export function getPostApiRnbPvtCalculatorconfigurationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.rnb.pvt.calculatorconfiguration.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.api.rnb.pvt.calculatorconfiguration.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiRnbPvtCalculatorconfigurationMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.api.rnb.pvt.calculatorconfiguration.$post>,
    ) {
      return parseResponse(client.api.rnb.pvt.calculatorconfiguration.$post(args, options))
    },
  })
}

export function usePostApiRnbPvtCalculatorconfiguration<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.rnb.pvt.calculatorconfiguration.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.api.rnb.pvt.calculatorconfiguration.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiRnbPvtCalculatorconfigurationMutationOptions<
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

export function getApiRnbPvtCalculatorconfigurationIdCalculatorConfigurationQueryKey(
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

export function getApiRnbPvtCalculatorconfigurationIdCalculatorConfigurationQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.rnb.pvt.calculatorconfiguration)[':idCalculatorConfiguration']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getApiRnbPvtCalculatorconfigurationIdCalculatorConfigurationQueryKey>
  >({
    queryKey: getApiRnbPvtCalculatorconfigurationIdCalculatorConfigurationQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.rnb.pvt.calculatorconfiguration[':idCalculatorConfiguration'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiRnbPvtCalculatorconfigurationIdCalculatorConfiguration<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.rnb.pvt.calculatorconfiguration)[':idCalculatorConfiguration']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getApiRnbPvtCalculatorconfigurationIdCalculatorConfigurationQueryKey>
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
      ...getApiRnbPvtCalculatorconfigurationIdCalculatorConfigurationQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiRnbPvtCalculatorconfigurationIdCalculatorConfiguration<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.rnb.pvt.calculatorconfiguration)[':idCalculatorConfiguration']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getApiRnbPvtCalculatorconfigurationIdCalculatorConfigurationQueryKey>
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
      ...getApiRnbPvtCalculatorconfigurationIdCalculatorConfigurationQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiRnbPvtCampaignConfigurationQueryKey(
  args: InferRequestType<typeof client.api.rnb.pvt.campaignConfiguration.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/rnb/pvt/campaignConfiguration', keyArgs] as const
}

export function getApiRnbPvtCampaignConfigurationQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.rnb.pvt.campaignConfiguration.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.rnb.pvt.campaignConfiguration.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.rnb.pvt.campaignConfiguration.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiRnbPvtCampaignConfigurationQueryKey>
  >({
    queryKey: getApiRnbPvtCampaignConfigurationQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.rnb.pvt.campaignConfiguration.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiRnbPvtCampaignConfiguration<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.rnb.pvt.campaignConfiguration.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.rnb.pvt.campaignConfiguration.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.rnb.pvt.campaignConfiguration.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiRnbPvtCampaignConfigurationQueryKey>
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
      ...getApiRnbPvtCampaignConfigurationQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiRnbPvtCampaignConfiguration<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.rnb.pvt.campaignConfiguration.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.rnb.pvt.campaignConfiguration.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.rnb.pvt.campaignConfiguration.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiRnbPvtCampaignConfigurationQueryKey>
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
      ...getApiRnbPvtCampaignConfigurationQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostApiRnbPvtCampaignConfigurationMutationKey() {
  return ['api', '/api/rnb/pvt/campaignConfiguration', 'POST'] as const
}

export function getPostApiRnbPvtCampaignConfigurationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.rnb.pvt.campaignConfiguration.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.api.rnb.pvt.campaignConfiguration.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiRnbPvtCampaignConfigurationMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.api.rnb.pvt.campaignConfiguration.$post>,
    ) {
      return parseResponse(client.api.rnb.pvt.campaignConfiguration.$post(args, options))
    },
  })
}

export function usePostApiRnbPvtCampaignConfiguration<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.rnb.pvt.campaignConfiguration.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.api.rnb.pvt.campaignConfiguration.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiRnbPvtCampaignConfigurationMutationOptions<
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

export function getApiRnbPvtCampaignConfigurationCampaignIdQueryKey(
  args: InferRequestType<(typeof client.api.rnb.pvt.campaignConfiguration)[':campaignId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/rnb/pvt/campaignConfiguration/:campaignId', keyArgs] as const
}

export function getApiRnbPvtCampaignConfigurationCampaignIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.rnb.pvt.campaignConfiguration)[':campaignId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.rnb.pvt.campaignConfiguration)[':campaignId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.rnb.pvt.campaignConfiguration)[':campaignId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiRnbPvtCampaignConfigurationCampaignIdQueryKey>
  >({
    queryKey: getApiRnbPvtCampaignConfigurationCampaignIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.rnb.pvt.campaignConfiguration[':campaignId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiRnbPvtCampaignConfigurationCampaignId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.rnb.pvt.campaignConfiguration)[':campaignId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.rnb.pvt.campaignConfiguration)[':campaignId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.rnb.pvt.campaignConfiguration)[':campaignId']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiRnbPvtCampaignConfigurationCampaignIdQueryKey>
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
      ...getApiRnbPvtCampaignConfigurationCampaignIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiRnbPvtCampaignConfigurationCampaignId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.rnb.pvt.campaignConfiguration)[':campaignId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.rnb.pvt.campaignConfiguration)[':campaignId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.rnb.pvt.campaignConfiguration)[':campaignId']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiRnbPvtCampaignConfigurationCampaignIdQueryKey>
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
      ...getApiRnbPvtCampaignConfigurationCampaignIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiRnbPvtCouponQueryKey(
  args: InferRequestType<typeof client.api.rnb.pvt.coupon.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/rnb/pvt/coupon', keyArgs] as const
}

export function getApiRnbPvtCouponQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.rnb.pvt.coupon.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.rnb.pvt.coupon.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.rnb.pvt.coupon.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiRnbPvtCouponQueryKey>
  >({
    queryKey: getApiRnbPvtCouponQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.rnb.pvt.coupon.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiRnbPvtCoupon<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.rnb.pvt.coupon.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.rnb.pvt.coupon.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.rnb.pvt.coupon.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiRnbPvtCouponQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiRnbPvtCouponQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiRnbPvtCoupon<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.rnb.pvt.coupon.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.rnb.pvt.coupon.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.rnb.pvt.coupon.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiRnbPvtCouponQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiRnbPvtCouponQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostApiRnbPvtCouponMutationKey() {
  return ['api', '/api/rnb/pvt/coupon', 'POST'] as const
}

export function getPostApiRnbPvtCouponMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.rnb.pvt.coupon.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.rnb.pvt.coupon.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiRnbPvtCouponMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.rnb.pvt.coupon.$post>) {
      return parseResponse(client.api.rnb.pvt.coupon.$post(args, options))
    },
  })
}

export function usePostApiRnbPvtCoupon<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.rnb.pvt.coupon.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.rnb.pvt.coupon.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiRnbPvtCouponMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostApiRnbPvtCouponIndexMutationKey() {
  return ['api', '/api/rnb/pvt/coupon/', 'POST'] as const
}

export function getPostApiRnbPvtCouponIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.rnb.pvt.coupon.index.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.rnb.pvt.coupon.index.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiRnbPvtCouponIndexMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.rnb.pvt.coupon.index.$post>) {
      return parseResponse(client.api.rnb.pvt.coupon.index.$post(args, options))
    },
  })
}

export function usePostApiRnbPvtCouponIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.rnb.pvt.coupon.index.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.rnb.pvt.coupon.index.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiRnbPvtCouponIndexMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiRnbPvtCouponUsageCouponCodeQueryKey(
  args: InferRequestType<(typeof client.api.rnb.pvt.coupon.usage)[':couponCode']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/rnb/pvt/coupon/usage/:couponCode', keyArgs] as const
}

export function getApiRnbPvtCouponUsageCouponCodeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.rnb.pvt.coupon.usage)[':couponCode']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.rnb.pvt.coupon.usage)[':couponCode']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.rnb.pvt.coupon.usage)[':couponCode']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiRnbPvtCouponUsageCouponCodeQueryKey>
  >({
    queryKey: getApiRnbPvtCouponUsageCouponCodeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.rnb.pvt.coupon.usage[':couponCode'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiRnbPvtCouponUsageCouponCode<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.rnb.pvt.coupon.usage)[':couponCode']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.rnb.pvt.coupon.usage)[':couponCode']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.rnb.pvt.coupon.usage)[':couponCode']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiRnbPvtCouponUsageCouponCodeQueryKey>
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
      ...getApiRnbPvtCouponUsageCouponCodeQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiRnbPvtCouponUsageCouponCode<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.rnb.pvt.coupon.usage)[':couponCode']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.rnb.pvt.coupon.usage)[':couponCode']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.rnb.pvt.coupon.usage)[':couponCode']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiRnbPvtCouponUsageCouponCodeQueryKey>
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
      ...getApiRnbPvtCouponUsageCouponCodeQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiRnbPvtCouponCouponCodeQueryKey(
  args: InferRequestType<(typeof client.api.rnb.pvt.coupon)[':couponCode']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/rnb/pvt/coupon/:couponCode', keyArgs] as const
}

export function getApiRnbPvtCouponCouponCodeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.rnb.pvt.coupon)[':couponCode']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.rnb.pvt.coupon)[':couponCode']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.rnb.pvt.coupon)[':couponCode']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiRnbPvtCouponCouponCodeQueryKey>
  >({
    queryKey: getApiRnbPvtCouponCouponCodeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.rnb.pvt.coupon[':couponCode'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiRnbPvtCouponCouponCode<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.rnb.pvt.coupon)[':couponCode']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.rnb.pvt.coupon)[':couponCode']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.rnb.pvt.coupon)[':couponCode']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiRnbPvtCouponCouponCodeQueryKey>
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
      ...getApiRnbPvtCouponCouponCodeQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiRnbPvtCouponCouponCode<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.rnb.pvt.coupon)[':couponCode']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.rnb.pvt.coupon)[':couponCode']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.rnb.pvt.coupon)[':couponCode']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiRnbPvtCouponCouponCodeQueryKey>
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
      ...getApiRnbPvtCouponCouponCodeQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostApiRnbPvtCouponsMutationKey() {
  return ['api', '/api/rnb/pvt/coupons', 'POST'] as const
}

export function getPostApiRnbPvtCouponsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.rnb.pvt.coupons.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.rnb.pvt.coupons.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiRnbPvtCouponsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.rnb.pvt.coupons.$post>) {
      return parseResponse(client.api.rnb.pvt.coupons.$post(args, options))
    },
  })
}

export function usePostApiRnbPvtCoupons<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.rnb.pvt.coupons.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.rnb.pvt.coupons.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiRnbPvtCouponsMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostApiRnbPvtImportCalculatorConfigurationMutationKey() {
  return ['api', '/api/rnb/pvt/import/calculatorConfiguration', 'POST'] as const
}

export function getPostApiRnbPvtImportCalculatorConfigurationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.rnb.pvt.import.calculatorConfiguration.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.api.rnb.pvt.import.calculatorConfiguration.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiRnbPvtImportCalculatorConfigurationMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.api.rnb.pvt.import.calculatorConfiguration.$post>,
    ) {
      return parseResponse(client.api.rnb.pvt.import.calculatorConfiguration.$post(args, options))
    },
  })
}

export function usePostApiRnbPvtImportCalculatorConfiguration<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.rnb.pvt.import.calculatorConfiguration.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.api.rnb.pvt.import.calculatorConfiguration.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiRnbPvtImportCalculatorConfigurationMutationOptions<
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

export function getPutApiRnbPvtImportCalculatorConfigurationPromotionIdMutationKey() {
  return ['api', '/api/rnb/pvt/import/calculatorConfiguration/:promotionId', 'PUT'] as const
}

export function getPutApiRnbPvtImportCalculatorConfigurationPromotionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.api.rnb.pvt.import.calculatorConfiguration)[':promotionId']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutApiRnbPvtImportCalculatorConfigurationPromotionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.rnb.pvt.import.calculatorConfiguration)[':promotionId']['$put']
      >,
    ) {
      return parseResponse(
        client.api.rnb.pvt.import.calculatorConfiguration[':promotionId'].$put(args, options),
      )
    },
  })
}

export function usePutApiRnbPvtImportCalculatorConfigurationPromotionId<
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
                ReturnType<
                  (typeof client.api.rnb.pvt.import.calculatorConfiguration)[':promotionId']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.rnb.pvt.import.calculatorConfiguration)[':promotionId']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiRnbPvtImportCalculatorConfigurationPromotionIdMutationOptions<
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

export function getPostApiRnbPvtMultipleCouponsMutationKey() {
  return ['api', '/api/rnb/pvt/multiple-coupons', 'POST'] as const
}

export function getPostApiRnbPvtMultipleCouponsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.rnb.pvt)['multiple-coupons']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.rnb.pvt)['multiple-coupons']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiRnbPvtMultipleCouponsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.rnb.pvt)['multiple-coupons']['$post']>,
    ) {
      return parseResponse(client.api.rnb.pvt['multiple-coupons'].$post(args, options))
    },
  })
}

export function usePostApiRnbPvtMultipleCoupons<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.rnb.pvt)['multiple-coupons']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.rnb.pvt)['multiple-coupons']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiRnbPvtMultipleCouponsMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiRnbPvtTaxesCalculatorconfigurationQueryKey(
  args: InferRequestType<typeof client.api.rnb.pvt.taxes.calculatorconfiguration.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/rnb/pvt/taxes/calculatorconfiguration', keyArgs] as const
}

export function getApiRnbPvtTaxesCalculatorconfigurationQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.rnb.pvt.taxes.calculatorconfiguration.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.rnb.pvt.taxes.calculatorconfiguration.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.rnb.pvt.taxes.calculatorconfiguration.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiRnbPvtTaxesCalculatorconfigurationQueryKey>
  >({
    queryKey: getApiRnbPvtTaxesCalculatorconfigurationQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.rnb.pvt.taxes.calculatorconfiguration.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiRnbPvtTaxesCalculatorconfiguration<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.rnb.pvt.taxes.calculatorconfiguration.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.rnb.pvt.taxes.calculatorconfiguration.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.rnb.pvt.taxes.calculatorconfiguration.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiRnbPvtTaxesCalculatorconfigurationQueryKey>
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
      ...getApiRnbPvtTaxesCalculatorconfigurationQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiRnbPvtTaxesCalculatorconfiguration<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.rnb.pvt.taxes.calculatorconfiguration.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.rnb.pvt.taxes.calculatorconfiguration.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.rnb.pvt.taxes.calculatorconfiguration.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiRnbPvtTaxesCalculatorconfigurationQueryKey>
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
      ...getApiRnbPvtTaxesCalculatorconfigurationQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostApiRnbPvtUnarchiveCalculatorConfigurationIdCalculatorConfigurationMutationKey() {
  return [
    'api',
    '/api/rnb/pvt/unarchive/calculatorConfiguration/:idCalculatorConfiguration',
    'POST',
  ] as const
}

export function getPostApiRnbPvtUnarchiveCalculatorConfigurationIdCalculatorConfigurationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.api.rnb.pvt.unarchive.calculatorConfiguration)[':idCalculatorConfiguration']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostApiRnbPvtUnarchiveCalculatorConfigurationIdCalculatorConfigurationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.rnb.pvt.unarchive.calculatorConfiguration)[':idCalculatorConfiguration']['$post']
      >,
    ) {
      return parseResponse(
        client.api.rnb.pvt.unarchive.calculatorConfiguration[':idCalculatorConfiguration'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostApiRnbPvtUnarchiveCalculatorConfigurationIdCalculatorConfiguration<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client.api.rnb.pvt.unarchive.calculatorConfiguration)[':idCalculatorConfiguration']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostApiRnbPvtUnarchiveCalculatorConfigurationIdCalculatorConfigurationMutationOptions<
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

export function getPostApiRnbPvtUnarchiveCouponCouponCodeMutationKey() {
  return ['api', '/api/rnb/pvt/unarchive/coupon/:couponCode', 'POST'] as const
}

export function getPostApiRnbPvtUnarchiveCouponCouponCodeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.rnb.pvt.unarchive.coupon)[':couponCode']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.rnb.pvt.unarchive.coupon)[':couponCode']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiRnbPvtUnarchiveCouponCouponCodeMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.rnb.pvt.unarchive.coupon)[':couponCode']['$post']>,
    ) {
      return parseResponse(client.api.rnb.pvt.unarchive.coupon[':couponCode'].$post(args, options))
    },
  })
}

export function usePostApiRnbPvtUnarchiveCouponCouponCode<
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
                ReturnType<(typeof client.api.rnb.pvt.unarchive.coupon)[':couponCode']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.rnb.pvt.unarchive.coupon)[':couponCode']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiRnbPvtUnarchiveCouponCouponCodeMutationOptions<
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

export function getPostPriceSheetMutationKey() {
  return ['price-sheet', '/price-sheet', 'POST'] as const
}

export function getPostPriceSheetMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['price-sheet']['$post']>>>>
    >,
    TError,
    InferRequestType<(typeof client)['price-sheet']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostPriceSheetMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['price-sheet']['$post']>) {
      return parseResponse(client['price-sheet'].$post(args, options))
    },
  })
}

export function usePostPriceSheet<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['price-sheet']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)['price-sheet']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostPriceSheetMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPriceSheetAllPagePageSizeQueryKey(
  args: InferRequestType<(typeof client)['price-sheet']['all'][':page'][':pageSize']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['price-sheet', '/price-sheet/all/:page/:pageSize', keyArgs] as const
}

export function getPriceSheetAllPagePageSizeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['price-sheet']['all'][':page'][':pageSize']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['price-sheet']['all'][':page'][':pageSize']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['price-sheet']['all'][':page'][':pageSize']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPriceSheetAllPagePageSizeQueryKey>
  >({
    queryKey: getPriceSheetAllPagePageSizeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['price-sheet'].all[':page'][':pageSize'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function usePriceSheetAllPagePageSize<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['price-sheet']['all'][':page'][':pageSize']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['price-sheet']['all'][':page'][':pageSize']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['price-sheet']['all'][':page'][':pageSize']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPriceSheetAllPagePageSizeQueryKey>
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
      ...getPriceSheetAllPagePageSizeQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspensePriceSheetAllPagePageSize<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['price-sheet']['all'][':page'][':pageSize']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['price-sheet']['all'][':page'][':pageSize']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['price-sheet']['all'][':page'][':pageSize']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPriceSheetAllPagePageSizeQueryKey>
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
      ...getPriceSheetAllPagePageSizeQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostPriceSheetContextMutationKey() {
  return ['price-sheet', '/price-sheet/context', 'POST'] as const
}

export function getPostPriceSheetContextMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['price-sheet']['context']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['price-sheet']['context']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostPriceSheetContextMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['price-sheet']['context']['$post']>) {
      return parseResponse(client['price-sheet'].context.$post(args, options))
    },
  })
}

export function usePostPriceSheetContext<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['price-sheet']['context']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['price-sheet']['context']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostPriceSheetContextMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPriceSheetSkuIdQueryKey(
  args: InferRequestType<(typeof client)['price-sheet'][':skuId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['price-sheet', '/price-sheet/:skuId', keyArgs] as const
}

export function getPriceSheetSkuIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['price-sheet'][':skuId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['price-sheet'][':skuId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['price-sheet'][':skuId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPriceSheetSkuIdQueryKey>
  >({
    queryKey: getPriceSheetSkuIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['price-sheet'][':skuId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function usePriceSheetSkuId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['price-sheet'][':skuId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['price-sheet'][':skuId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['price-sheet'][':skuId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPriceSheetSkuIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getPriceSheetSkuIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspensePriceSheetSkuId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['price-sheet'][':skuId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['price-sheet'][':skuId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['price-sheet'][':skuId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPriceSheetSkuIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getPriceSheetSkuIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDeletePriceSheetSkuIdMutationKey() {
  return ['price-sheet', '/price-sheet/:skuId', 'DELETE'] as const
}

export function getDeletePriceSheetSkuIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['price-sheet'][':skuId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['price-sheet'][':skuId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeletePriceSheetSkuIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['price-sheet'][':skuId']['$delete']>) {
      return parseResponse(client['price-sheet'][':skuId'].$delete(args, options))
    },
  })
}

export function useDeletePriceSheetSkuId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['price-sheet'][':skuId']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['price-sheet'][':skuId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeletePriceSheetSkuIdMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPriceSheetSkuIdTradePolicyQueryKey(
  args: InferRequestType<(typeof client)['price-sheet'][':skuId'][':tradePolicy']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['price-sheet', '/price-sheet/:skuId/:tradePolicy', keyArgs] as const
}

export function getPriceSheetSkuIdTradePolicyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['price-sheet'][':skuId'][':tradePolicy']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['price-sheet'][':skuId'][':tradePolicy']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['price-sheet'][':skuId'][':tradePolicy']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPriceSheetSkuIdTradePolicyQueryKey>
  >({
    queryKey: getPriceSheetSkuIdTradePolicyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['price-sheet'][':skuId'][':tradePolicy'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function usePriceSheetSkuIdTradePolicy<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['price-sheet'][':skuId'][':tradePolicy']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['price-sheet'][':skuId'][':tradePolicy']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['price-sheet'][':skuId'][':tradePolicy']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPriceSheetSkuIdTradePolicyQueryKey>
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
      ...getPriceSheetSkuIdTradePolicyQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspensePriceSheetSkuIdTradePolicy<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['price-sheet'][':skuId'][':tradePolicy']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['price-sheet'][':skuId'][':tradePolicy']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['price-sheet'][':skuId'][':tradePolicy']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPriceSheetSkuIdTradePolicyQueryKey>
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
      ...getPriceSheetSkuIdTradePolicyQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostPubBundlesMutationKey() {
  return ['pub', '/pub/bundles', 'POST'] as const
}

export function getPostPubBundlesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pub.bundles.$post>>>>>,
    TError,
    InferRequestType<typeof client.pub.bundles.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPubBundlesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.pub.bundles.$post>) {
      return parseResponse(client.pub.bundles.$post(args, options))
    },
  })
}

export function usePostPubBundles<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pub.bundles.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.pub.bundles.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostPubBundlesMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}
