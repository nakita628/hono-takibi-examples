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

export function getAdvertisingEligibilityKey() {
  return ['advertising_eligibility'] as const
}

export function getCustomPolicyKey() {
  return ['custom_policy'] as const
}

export function getFulfillmentPolicyKey() {
  return ['fulfillment_policy'] as const
}

export function getKycKey() {
  return ['kyc'] as const
}

export function getPaymentPolicyKey() {
  return ['payment_policy'] as const
}

export function getPaymentsProgramKey() {
  return ['payments_program'] as const
}

export function getPrivilegeKey() {
  return ['privilege'] as const
}

export function getProgramKey() {
  return ['program'] as const
}

export function getRateTableKey() {
  return ['rate_table'] as const
}

export function getReturnPolicyKey() {
  return ['return_policy'] as const
}

export function getSalesTaxKey() {
  return ['sales_tax'] as const
}

export function getSubscriptionKey() {
  return ['subscription'] as const
}

export function getAdvertisingEligibilityQueryKey(
  args: InferRequestType<typeof client.advertising_eligibility.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['advertising_eligibility', '/advertising_eligibility', keyArgs] as const
}

export function getAdvertisingEligibilityQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.advertising_eligibility.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.advertising_eligibility.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.advertising_eligibility.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdvertisingEligibilityQueryKey>
  >({
    queryKey: getAdvertisingEligibilityQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.advertising_eligibility.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAdvertisingEligibility<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.advertising_eligibility.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.advertising_eligibility.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.advertising_eligibility.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAdvertisingEligibilityQueryKey>
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
      ...getAdvertisingEligibilityQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAdvertisingEligibility<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.advertising_eligibility.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.advertising_eligibility.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.advertising_eligibility.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAdvertisingEligibilityQueryKey>
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
      ...getAdvertisingEligibilityQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getCustomPolicyIndexQueryKey(
  args: InferRequestType<typeof client.custom_policy.index.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['custom_policy', '/custom_policy/', keyArgs] as const
}

export function getCustomPolicyIndexQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.custom_policy.index.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.custom_policy.index.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.custom_policy.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getCustomPolicyIndexQueryKey>
  >({
    queryKey: getCustomPolicyIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.custom_policy.index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useCustomPolicyIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.custom_policy.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.custom_policy.index.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.custom_policy.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCustomPolicyIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getCustomPolicyIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseCustomPolicyIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.custom_policy.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.custom_policy.index.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.custom_policy.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCustomPolicyIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getCustomPolicyIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostCustomPolicyIndexMutationKey() {
  return ['custom_policy', '/custom_policy/', 'POST'] as const
}

export function getPostCustomPolicyIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.custom_policy.index.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.custom_policy.index.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCustomPolicyIndexMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.custom_policy.index.$post>) {
      return parseResponse(client.custom_policy.index.$post(args, options))
    },
  })
}

export function usePostCustomPolicyIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.custom_policy.index.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.custom_policy.index.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCustomPolicyIndexMutationOptions<TError, TOnMutateResult>(
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

export function getCustomPolicyCustomPolicyIdQueryKey(
  args: InferRequestType<(typeof client.custom_policy)[':custom_policy_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['custom_policy', '/custom_policy/:custom_policy_id', keyArgs] as const
}

export function getCustomPolicyCustomPolicyIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.custom_policy)[':custom_policy_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.custom_policy)[':custom_policy_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.custom_policy)[':custom_policy_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCustomPolicyCustomPolicyIdQueryKey>
  >({
    queryKey: getCustomPolicyCustomPolicyIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.custom_policy[':custom_policy_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useCustomPolicyCustomPolicyId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.custom_policy)[':custom_policy_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.custom_policy)[':custom_policy_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.custom_policy)[':custom_policy_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCustomPolicyCustomPolicyIdQueryKey>
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
      ...getCustomPolicyCustomPolicyIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCustomPolicyCustomPolicyId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.custom_policy)[':custom_policy_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.custom_policy)[':custom_policy_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.custom_policy)[':custom_policy_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCustomPolicyCustomPolicyIdQueryKey>
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
      ...getCustomPolicyCustomPolicyIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutCustomPolicyCustomPolicyIdMutationKey() {
  return ['custom_policy', '/custom_policy/:custom_policy_id', 'PUT'] as const
}

export function getPutCustomPolicyCustomPolicyIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.custom_policy)[':custom_policy_id']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.custom_policy)[':custom_policy_id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutCustomPolicyCustomPolicyIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.custom_policy)[':custom_policy_id']['$put']>,
    ) {
      return parseResponse(client.custom_policy[':custom_policy_id'].$put(args, options))
    },
  })
}

export function usePutCustomPolicyCustomPolicyId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.custom_policy)[':custom_policy_id']['$put']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.custom_policy)[':custom_policy_id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutCustomPolicyCustomPolicyIdMutationOptions<TError, TOnMutateResult>(
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

export function getFulfillmentPolicyQueryKey(
  args: InferRequestType<typeof client.fulfillment_policy.$get>,
) {
  return ['fulfillment_policy', '/fulfillment_policy', args] as const
}

export function getFulfillmentPolicyQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fulfillment_policy.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.fulfillment_policy.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fulfillment_policy.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getFulfillmentPolicyQueryKey>
  >({
    queryKey: getFulfillmentPolicyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.fulfillment_policy.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useFulfillmentPolicy<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fulfillment_policy.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.fulfillment_policy.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.fulfillment_policy.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFulfillmentPolicyQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getFulfillmentPolicyQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseFulfillmentPolicy<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fulfillment_policy.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.fulfillment_policy.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.fulfillment_policy.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFulfillmentPolicyQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getFulfillmentPolicyQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostFulfillmentPolicyIndexMutationKey() {
  return ['fulfillment_policy', '/fulfillment_policy/', 'POST'] as const
}

export function getPostFulfillmentPolicyIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.fulfillment_policy.index.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.fulfillment_policy.index.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostFulfillmentPolicyIndexMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.fulfillment_policy.index.$post>) {
      return parseResponse(client.fulfillment_policy.index.$post(args, options))
    },
  })
}

export function usePostFulfillmentPolicyIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.fulfillment_policy.index.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.fulfillment_policy.index.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostFulfillmentPolicyIndexMutationOptions<TError, TOnMutateResult>(
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

export function getFulfillmentPolicyGetByPolicyNameQueryKey(
  args: InferRequestType<typeof client.fulfillment_policy.get_by_policy_name.$get>,
) {
  return ['fulfillment_policy', '/fulfillment_policy/get_by_policy_name', args] as const
}

export function getFulfillmentPolicyGetByPolicyNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.fulfillment_policy.get_by_policy_name.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.fulfillment_policy.get_by_policy_name.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.fulfillment_policy.get_by_policy_name.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFulfillmentPolicyGetByPolicyNameQueryKey>
  >({
    queryKey: getFulfillmentPolicyGetByPolicyNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.fulfillment_policy.get_by_policy_name.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useFulfillmentPolicyGetByPolicyName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.fulfillment_policy.get_by_policy_name.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.fulfillment_policy.get_by_policy_name.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.fulfillment_policy.get_by_policy_name.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFulfillmentPolicyGetByPolicyNameQueryKey>
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
      ...getFulfillmentPolicyGetByPolicyNameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseFulfillmentPolicyGetByPolicyName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.fulfillment_policy.get_by_policy_name.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.fulfillment_policy.get_by_policy_name.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.fulfillment_policy.get_by_policy_name.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFulfillmentPolicyGetByPolicyNameQueryKey>
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
      ...getFulfillmentPolicyGetByPolicyNameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getFulfillmentPolicyFulfillmentPolicyIdQueryKey(
  args: InferRequestType<(typeof client.fulfillment_policy)[':fulfillmentPolicyId']['$get']>,
) {
  return ['fulfillment_policy', '/fulfillment_policy/:fulfillmentPolicyId', args] as const
}

export function getFulfillmentPolicyFulfillmentPolicyIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.fulfillment_policy)[':fulfillmentPolicyId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.fulfillment_policy)[':fulfillmentPolicyId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.fulfillment_policy)[':fulfillmentPolicyId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFulfillmentPolicyFulfillmentPolicyIdQueryKey>
  >({
    queryKey: getFulfillmentPolicyFulfillmentPolicyIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.fulfillment_policy[':fulfillmentPolicyId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useFulfillmentPolicyFulfillmentPolicyId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.fulfillment_policy)[':fulfillmentPolicyId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.fulfillment_policy)[':fulfillmentPolicyId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.fulfillment_policy)[':fulfillmentPolicyId']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFulfillmentPolicyFulfillmentPolicyIdQueryKey>
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
      ...getFulfillmentPolicyFulfillmentPolicyIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseFulfillmentPolicyFulfillmentPolicyId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.fulfillment_policy)[':fulfillmentPolicyId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.fulfillment_policy)[':fulfillmentPolicyId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.fulfillment_policy)[':fulfillmentPolicyId']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFulfillmentPolicyFulfillmentPolicyIdQueryKey>
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
      ...getFulfillmentPolicyFulfillmentPolicyIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutFulfillmentPolicyFulfillmentPolicyIdMutationKey() {
  return ['fulfillment_policy', '/fulfillment_policy/:fulfillmentPolicyId', 'PUT'] as const
}

export function getPutFulfillmentPolicyFulfillmentPolicyIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.fulfillment_policy)[':fulfillmentPolicyId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.fulfillment_policy)[':fulfillmentPolicyId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutFulfillmentPolicyFulfillmentPolicyIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.fulfillment_policy)[':fulfillmentPolicyId']['$put']>,
    ) {
      return parseResponse(client.fulfillment_policy[':fulfillmentPolicyId'].$put(args, options))
    },
  })
}

export function usePutFulfillmentPolicyFulfillmentPolicyId<
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
                ReturnType<(typeof client.fulfillment_policy)[':fulfillmentPolicyId']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.fulfillment_policy)[':fulfillmentPolicyId']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutFulfillmentPolicyFulfillmentPolicyIdMutationOptions<
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

export function getDeleteFulfillmentPolicyFulfillmentPolicyIdMutationKey() {
  return ['fulfillment_policy', '/fulfillment_policy/:fulfillmentPolicyId', 'DELETE'] as const
}

export function getDeleteFulfillmentPolicyFulfillmentPolicyIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.fulfillment_policy)[':fulfillmentPolicyId']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.fulfillment_policy)[':fulfillmentPolicyId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteFulfillmentPolicyFulfillmentPolicyIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.fulfillment_policy)[':fulfillmentPolicyId']['$delete']>,
    ) {
      return parseResponse(client.fulfillment_policy[':fulfillmentPolicyId'].$delete(args, options))
    },
  })
}

export function useDeleteFulfillmentPolicyFulfillmentPolicyId<
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
                  ReturnType<(typeof client.fulfillment_policy)[':fulfillmentPolicyId']['$delete']>
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.fulfillment_policy)[':fulfillmentPolicyId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteFulfillmentPolicyFulfillmentPolicyIdMutationOptions<
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

export function getKycQueryKey() {
  return ['kyc', '/kyc'] as const
}

export function getKycQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.kyc.$get>>>>>,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.kyc.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getKycQueryKey>
  >({
    queryKey: getKycQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.kyc.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useKyc<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.kyc.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.kyc.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getKycQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getKycQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseKyc<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.kyc.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.kyc.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getKycQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getKycQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPaymentPolicyQueryKey(
  args: InferRequestType<typeof client.payment_policy.$get>,
) {
  return ['payment_policy', '/payment_policy', args] as const
}

export function getPaymentPolicyQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.payment_policy.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.payment_policy.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.payment_policy.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getPaymentPolicyQueryKey>
  >({
    queryKey: getPaymentPolicyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.payment_policy.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function usePaymentPolicy<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.payment_policy.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.payment_policy.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.payment_policy.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getPaymentPolicyQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getPaymentPolicyQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspensePaymentPolicy<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.payment_policy.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.payment_policy.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.payment_policy.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getPaymentPolicyQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getPaymentPolicyQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostPaymentPolicyMutationKey() {
  return ['payment_policy', '/payment_policy', 'POST'] as const
}

export function getPostPaymentPolicyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.payment_policy.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.payment_policy.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPaymentPolicyMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.payment_policy.$post>) {
      return parseResponse(client.payment_policy.$post(args, options))
    },
  })
}

export function usePostPaymentPolicy<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.payment_policy.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.payment_policy.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostPaymentPolicyMutationOptions<TError, TOnMutateResult>(
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

export function getPaymentPolicyGetByPolicyNameQueryKey(
  args: InferRequestType<typeof client.payment_policy.get_by_policy_name.$get>,
) {
  return ['payment_policy', '/payment_policy/get_by_policy_name', args] as const
}

export function getPaymentPolicyGetByPolicyNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.payment_policy.get_by_policy_name.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.payment_policy.get_by_policy_name.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.payment_policy.get_by_policy_name.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPaymentPolicyGetByPolicyNameQueryKey>
  >({
    queryKey: getPaymentPolicyGetByPolicyNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.payment_policy.get_by_policy_name.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function usePaymentPolicyGetByPolicyName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.payment_policy.get_by_policy_name.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.payment_policy.get_by_policy_name.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.payment_policy.get_by_policy_name.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPaymentPolicyGetByPolicyNameQueryKey>
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
      ...getPaymentPolicyGetByPolicyNameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspensePaymentPolicyGetByPolicyName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.payment_policy.get_by_policy_name.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.payment_policy.get_by_policy_name.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.payment_policy.get_by_policy_name.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPaymentPolicyGetByPolicyNameQueryKey>
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
      ...getPaymentPolicyGetByPolicyNameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPaymentPolicyPaymentPolicyIdQueryKey(
  args: InferRequestType<(typeof client.payment_policy)[':payment_policy_id']['$get']>,
) {
  return ['payment_policy', '/payment_policy/:payment_policy_id', args] as const
}

export function getPaymentPolicyPaymentPolicyIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.payment_policy)[':payment_policy_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.payment_policy)[':payment_policy_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.payment_policy)[':payment_policy_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPaymentPolicyPaymentPolicyIdQueryKey>
  >({
    queryKey: getPaymentPolicyPaymentPolicyIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.payment_policy[':payment_policy_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function usePaymentPolicyPaymentPolicyId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.payment_policy)[':payment_policy_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.payment_policy)[':payment_policy_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.payment_policy)[':payment_policy_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPaymentPolicyPaymentPolicyIdQueryKey>
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
      ...getPaymentPolicyPaymentPolicyIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspensePaymentPolicyPaymentPolicyId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.payment_policy)[':payment_policy_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.payment_policy)[':payment_policy_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.payment_policy)[':payment_policy_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPaymentPolicyPaymentPolicyIdQueryKey>
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
      ...getPaymentPolicyPaymentPolicyIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutPaymentPolicyPaymentPolicyIdMutationKey() {
  return ['payment_policy', '/payment_policy/:payment_policy_id', 'PUT'] as const
}

export function getPutPaymentPolicyPaymentPolicyIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.payment_policy)[':payment_policy_id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.payment_policy)[':payment_policy_id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutPaymentPolicyPaymentPolicyIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.payment_policy)[':payment_policy_id']['$put']>,
    ) {
      return parseResponse(client.payment_policy[':payment_policy_id'].$put(args, options))
    },
  })
}

export function usePutPaymentPolicyPaymentPolicyId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.payment_policy)[':payment_policy_id']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.payment_policy)[':payment_policy_id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutPaymentPolicyPaymentPolicyIdMutationOptions<
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

export function getDeletePaymentPolicyPaymentPolicyIdMutationKey() {
  return ['payment_policy', '/payment_policy/:payment_policy_id', 'DELETE'] as const
}

export function getDeletePaymentPolicyPaymentPolicyIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.payment_policy)[':payment_policy_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.payment_policy)[':payment_policy_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeletePaymentPolicyPaymentPolicyIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.payment_policy)[':payment_policy_id']['$delete']>,
    ) {
      return parseResponse(client.payment_policy[':payment_policy_id'].$delete(args, options))
    },
  })
}

export function useDeletePaymentPolicyPaymentPolicyId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.payment_policy)[':payment_policy_id']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.payment_policy)[':payment_policy_id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeletePaymentPolicyPaymentPolicyIdMutationOptions<
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

export function getPaymentsProgramMarketplaceIdPaymentsProgramTypeQueryKey(
  args: InferRequestType<
    (typeof client.payments_program)[':marketplace_id'][':payments_program_type']['$get']
  >,
) {
  return [
    'payments_program',
    '/payments_program/:marketplace_id/:payments_program_type',
    args,
  ] as const
}

export function getPaymentsProgramMarketplaceIdPaymentsProgramTypeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.payments_program)[':marketplace_id'][':payments_program_type']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.payments_program)[':marketplace_id'][':payments_program_type']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.payments_program)[':marketplace_id'][':payments_program_type']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPaymentsProgramMarketplaceIdPaymentsProgramTypeQueryKey>
  >({
    queryKey: getPaymentsProgramMarketplaceIdPaymentsProgramTypeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.payments_program[':marketplace_id'][':payments_program_type'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function usePaymentsProgramMarketplaceIdPaymentsProgramType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.payments_program)[':marketplace_id'][':payments_program_type']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.payments_program)[':marketplace_id'][':payments_program_type']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.payments_program)[':marketplace_id'][':payments_program_type']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPaymentsProgramMarketplaceIdPaymentsProgramTypeQueryKey>
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
      ...getPaymentsProgramMarketplaceIdPaymentsProgramTypeQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspensePaymentsProgramMarketplaceIdPaymentsProgramType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.payments_program)[':marketplace_id'][':payments_program_type']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.payments_program)[':marketplace_id'][':payments_program_type']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.payments_program)[':marketplace_id'][':payments_program_type']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPaymentsProgramMarketplaceIdPaymentsProgramTypeQueryKey>
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
      ...getPaymentsProgramMarketplaceIdPaymentsProgramTypeQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPaymentsProgramMarketplaceIdPaymentsProgramTypeOnboardingQueryKey(
  args: InferRequestType<
    (typeof client.payments_program)[':marketplace_id'][':payments_program_type']['onboarding']['$get']
  >,
) {
  return [
    'payments_program',
    '/payments_program/:marketplace_id/:payments_program_type/onboarding',
    args,
  ] as const
}

export function getPaymentsProgramMarketplaceIdPaymentsProgramTypeOnboardingQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.payments_program)[':marketplace_id'][':payments_program_type']['onboarding']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.payments_program)[':marketplace_id'][':payments_program_type']['onboarding']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.payments_program)[':marketplace_id'][':payments_program_type']['onboarding']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPaymentsProgramMarketplaceIdPaymentsProgramTypeOnboardingQueryKey>
  >({
    queryKey: getPaymentsProgramMarketplaceIdPaymentsProgramTypeOnboardingQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.payments_program[':marketplace_id'][':payments_program_type'].onboarding.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function usePaymentsProgramMarketplaceIdPaymentsProgramTypeOnboarding<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.payments_program)[':marketplace_id'][':payments_program_type']['onboarding']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.payments_program)[':marketplace_id'][':payments_program_type']['onboarding']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.payments_program)[':marketplace_id'][':payments_program_type']['onboarding']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPaymentsProgramMarketplaceIdPaymentsProgramTypeOnboardingQueryKey>
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
      ...getPaymentsProgramMarketplaceIdPaymentsProgramTypeOnboardingQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspensePaymentsProgramMarketplaceIdPaymentsProgramTypeOnboarding<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.payments_program)[':marketplace_id'][':payments_program_type']['onboarding']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.payments_program)[':marketplace_id'][':payments_program_type']['onboarding']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.payments_program)[':marketplace_id'][':payments_program_type']['onboarding']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPaymentsProgramMarketplaceIdPaymentsProgramTypeOnboardingQueryKey>
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
      ...getPaymentsProgramMarketplaceIdPaymentsProgramTypeOnboardingQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPrivilegeQueryKey() {
  return ['privilege', '/privilege'] as const
}

export function getPrivilegeQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.privilege.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.privilege.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getPrivilegeQueryKey>
  >({
    queryKey: getPrivilegeQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.privilege.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function usePrivilege<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.privilege.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.privilege.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getPrivilegeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getPrivilegeQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspensePrivilege<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.privilege.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.privilege.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getPrivilegeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getPrivilegeQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getProgramGetOptedInProgramsQueryKey() {
  return ['program', '/program/get_opted_in_programs'] as const
}

export function getProgramGetOptedInProgramsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.program.get_opted_in_programs.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.program.get_opted_in_programs.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProgramGetOptedInProgramsQueryKey>
  >({
    queryKey: getProgramGetOptedInProgramsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.program.get_opted_in_programs.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useProgramGetOptedInPrograms<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.program.get_opted_in_programs.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.program.get_opted_in_programs.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProgramGetOptedInProgramsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getProgramGetOptedInProgramsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseProgramGetOptedInPrograms<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.program.get_opted_in_programs.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.program.get_opted_in_programs.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProgramGetOptedInProgramsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getProgramGetOptedInProgramsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostProgramOptInMutationKey() {
  return ['program', '/program/opt_in', 'POST'] as const
}

export function getPostProgramOptInMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.program.opt_in.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.program.opt_in.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostProgramOptInMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.program.opt_in.$post>) {
      return parseResponse(client.program.opt_in.$post(args, options))
    },
  })
}

export function usePostProgramOptIn<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.program.opt_in.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.program.opt_in.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostProgramOptInMutationOptions<TError, TOnMutateResult>(
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

export function getPostProgramOptOutMutationKey() {
  return ['program', '/program/opt_out', 'POST'] as const
}

export function getPostProgramOptOutMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.program.opt_out.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.program.opt_out.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostProgramOptOutMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.program.opt_out.$post>) {
      return parseResponse(client.program.opt_out.$post(args, options))
    },
  })
}

export function usePostProgramOptOut<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.program.opt_out.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.program.opt_out.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostProgramOptOutMutationOptions<TError, TOnMutateResult>(
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

export function getRateTableQueryKey(args: InferRequestType<typeof client.rate_table.$get>) {
  return ['rate_table', '/rate_table', args] as const
}

export function getRateTableQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rate_table.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.rate_table.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rate_table.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getRateTableQueryKey>
  >({
    queryKey: getRateTableQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.rate_table.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useRateTable<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rate_table.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.rate_table.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rate_table.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getRateTableQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getRateTableQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseRateTable<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rate_table.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.rate_table.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rate_table.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getRateTableQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getRateTableQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getReturnPolicyQueryKey(args: InferRequestType<typeof client.return_policy.$get>) {
  return ['return_policy', '/return_policy', args] as const
}

export function getReturnPolicyQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.return_policy.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.return_policy.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.return_policy.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getReturnPolicyQueryKey>
  >({
    queryKey: getReturnPolicyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.return_policy.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useReturnPolicy<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.return_policy.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.return_policy.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.return_policy.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getReturnPolicyQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getReturnPolicyQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseReturnPolicy<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.return_policy.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.return_policy.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.return_policy.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getReturnPolicyQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getReturnPolicyQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostReturnPolicyMutationKey() {
  return ['return_policy', '/return_policy', 'POST'] as const
}

export function getPostReturnPolicyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.return_policy.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.return_policy.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostReturnPolicyMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.return_policy.$post>) {
      return parseResponse(client.return_policy.$post(args, options))
    },
  })
}

export function usePostReturnPolicy<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.return_policy.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.return_policy.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostReturnPolicyMutationOptions<TError, TOnMutateResult>(
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

export function getReturnPolicyGetByPolicyNameQueryKey(
  args: InferRequestType<typeof client.return_policy.get_by_policy_name.$get>,
) {
  return ['return_policy', '/return_policy/get_by_policy_name', args] as const
}

export function getReturnPolicyGetByPolicyNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.return_policy.get_by_policy_name.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.return_policy.get_by_policy_name.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.return_policy.get_by_policy_name.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getReturnPolicyGetByPolicyNameQueryKey>
  >({
    queryKey: getReturnPolicyGetByPolicyNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.return_policy.get_by_policy_name.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useReturnPolicyGetByPolicyName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.return_policy.get_by_policy_name.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.return_policy.get_by_policy_name.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.return_policy.get_by_policy_name.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getReturnPolicyGetByPolicyNameQueryKey>
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
      ...getReturnPolicyGetByPolicyNameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseReturnPolicyGetByPolicyName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.return_policy.get_by_policy_name.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.return_policy.get_by_policy_name.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.return_policy.get_by_policy_name.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getReturnPolicyGetByPolicyNameQueryKey>
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
      ...getReturnPolicyGetByPolicyNameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getReturnPolicyReturnPolicyIdQueryKey(
  args: InferRequestType<(typeof client.return_policy)[':return_policy_id']['$get']>,
) {
  return ['return_policy', '/return_policy/:return_policy_id', args] as const
}

export function getReturnPolicyReturnPolicyIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.return_policy)[':return_policy_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.return_policy)[':return_policy_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.return_policy)[':return_policy_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getReturnPolicyReturnPolicyIdQueryKey>
  >({
    queryKey: getReturnPolicyReturnPolicyIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.return_policy[':return_policy_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useReturnPolicyReturnPolicyId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.return_policy)[':return_policy_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.return_policy)[':return_policy_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.return_policy)[':return_policy_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getReturnPolicyReturnPolicyIdQueryKey>
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
      ...getReturnPolicyReturnPolicyIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseReturnPolicyReturnPolicyId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.return_policy)[':return_policy_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.return_policy)[':return_policy_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.return_policy)[':return_policy_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getReturnPolicyReturnPolicyIdQueryKey>
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
      ...getReturnPolicyReturnPolicyIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutReturnPolicyReturnPolicyIdMutationKey() {
  return ['return_policy', '/return_policy/:return_policy_id', 'PUT'] as const
}

export function getPutReturnPolicyReturnPolicyIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.return_policy)[':return_policy_id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.return_policy)[':return_policy_id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutReturnPolicyReturnPolicyIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.return_policy)[':return_policy_id']['$put']>,
    ) {
      return parseResponse(client.return_policy[':return_policy_id'].$put(args, options))
    },
  })
}

export function usePutReturnPolicyReturnPolicyId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.return_policy)[':return_policy_id']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.return_policy)[':return_policy_id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutReturnPolicyReturnPolicyIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteReturnPolicyReturnPolicyIdMutationKey() {
  return ['return_policy', '/return_policy/:return_policy_id', 'DELETE'] as const
}

export function getDeleteReturnPolicyReturnPolicyIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.return_policy)[':return_policy_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.return_policy)[':return_policy_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteReturnPolicyReturnPolicyIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.return_policy)[':return_policy_id']['$delete']>,
    ) {
      return parseResponse(client.return_policy[':return_policy_id'].$delete(args, options))
    },
  })
}

export function useDeleteReturnPolicyReturnPolicyId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.return_policy)[':return_policy_id']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.return_policy)[':return_policy_id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteReturnPolicyReturnPolicyIdMutationOptions<
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

export function getSalesTaxQueryKey(args: InferRequestType<typeof client.sales_tax.$get>) {
  return ['sales_tax', '/sales_tax', args] as const
}

export function getSalesTaxQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sales_tax.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.sales_tax.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sales_tax.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSalesTaxQueryKey>
  >({
    queryKey: getSalesTaxQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sales_tax.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useSalesTax<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sales_tax.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sales_tax.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sales_tax.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSalesTaxQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSalesTaxQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSalesTax<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sales_tax.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sales_tax.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sales_tax.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSalesTaxQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSalesTaxQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getSalesTaxCountryCodeJurisdictionIdQueryKey(
  args: InferRequestType<(typeof client.sales_tax)[':countryCode'][':jurisdictionId']['$get']>,
) {
  return ['sales_tax', '/sales_tax/:countryCode/:jurisdictionId', args] as const
}

export function getSalesTaxCountryCodeJurisdictionIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sales_tax)[':countryCode'][':jurisdictionId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sales_tax)[':countryCode'][':jurisdictionId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sales_tax)[':countryCode'][':jurisdictionId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSalesTaxCountryCodeJurisdictionIdQueryKey>
  >({
    queryKey: getSalesTaxCountryCodeJurisdictionIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sales_tax[':countryCode'][':jurisdictionId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSalesTaxCountryCodeJurisdictionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sales_tax)[':countryCode'][':jurisdictionId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sales_tax)[':countryCode'][':jurisdictionId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.sales_tax)[':countryCode'][':jurisdictionId']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSalesTaxCountryCodeJurisdictionIdQueryKey>
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
      ...getSalesTaxCountryCodeJurisdictionIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSalesTaxCountryCodeJurisdictionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sales_tax)[':countryCode'][':jurisdictionId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sales_tax)[':countryCode'][':jurisdictionId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.sales_tax)[':countryCode'][':jurisdictionId']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSalesTaxCountryCodeJurisdictionIdQueryKey>
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
      ...getSalesTaxCountryCodeJurisdictionIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutSalesTaxCountryCodeJurisdictionIdMutationKey() {
  return ['sales_tax', '/sales_tax/:countryCode/:jurisdictionId', 'PUT'] as const
}

export function getPutSalesTaxCountryCodeJurisdictionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.sales_tax)[':countryCode'][':jurisdictionId']['$put']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.sales_tax)[':countryCode'][':jurisdictionId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutSalesTaxCountryCodeJurisdictionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.sales_tax)[':countryCode'][':jurisdictionId']['$put']>,
    ) {
      return parseResponse(client.sales_tax[':countryCode'][':jurisdictionId'].$put(args, options))
    },
  })
}

export function usePutSalesTaxCountryCodeJurisdictionId<
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
                  ReturnType<(typeof client.sales_tax)[':countryCode'][':jurisdictionId']['$put']>
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.sales_tax)[':countryCode'][':jurisdictionId']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutSalesTaxCountryCodeJurisdictionIdMutationOptions<
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

export function getDeleteSalesTaxCountryCodeJurisdictionIdMutationKey() {
  return ['sales_tax', '/sales_tax/:countryCode/:jurisdictionId', 'DELETE'] as const
}

export function getDeleteSalesTaxCountryCodeJurisdictionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.sales_tax)[':countryCode'][':jurisdictionId']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.sales_tax)[':countryCode'][':jurisdictionId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSalesTaxCountryCodeJurisdictionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.sales_tax)[':countryCode'][':jurisdictionId']['$delete']
      >,
    ) {
      return parseResponse(
        client.sales_tax[':countryCode'][':jurisdictionId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteSalesTaxCountryCodeJurisdictionId<
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
                    (typeof client.sales_tax)[':countryCode'][':jurisdictionId']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.sales_tax)[':countryCode'][':jurisdictionId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteSalesTaxCountryCodeJurisdictionIdMutationOptions<
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

export function getSubscriptionQueryKey(args: InferRequestType<typeof client.subscription.$get>) {
  return ['subscription', '/subscription', args] as const
}

export function getSubscriptionQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subscription.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.subscription.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subscription.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSubscriptionQueryKey>
  >({
    queryKey: getSubscriptionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.subscription.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useSubscription<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subscription.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.subscription.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subscription.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSubscriptionQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSubscriptionQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSubscription<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subscription.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.subscription.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subscription.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSubscriptionQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSubscriptionQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}
