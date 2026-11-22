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
  args: MaybeRefOrGetter<InferRequestType<typeof client.advertising_eligibility.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['advertising_eligibility', '/advertising_eligibility', keyArgs] as const
}

export function getAdvertisingEligibilityQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.advertising_eligibility.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdvertisingEligibilityQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.advertising_eligibility.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdvertisingEligibility<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.advertising_eligibility.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.advertising_eligibility.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.advertising_eligibility.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.advertising_eligibility.$get>>>
            >
          >,
          ReturnType<typeof getAdvertisingEligibilityQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.advertising_eligibility.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdvertisingEligibilityQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdvertisingEligibilityQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.advertising_eligibility.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCustomPolicyIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.custom_policy.index.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['custom_policy', '/custom_policy/', keyArgs] as const
}

export function getCustomPolicyIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.custom_policy.index.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCustomPolicyIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.custom_policy.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCustomPolicyIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.custom_policy.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.custom_policy.index.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.custom_policy.index.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.custom_policy.index.$get>>>
            >
          >,
          ReturnType<typeof getCustomPolicyIndexQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.custom_policy.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getCustomPolicyIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCustomPolicyIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.custom_policy.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.custom_policy)[':custom_policy_id']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['custom_policy', '/custom_policy/:custom_policy_id', keyArgs] as const
}

export function getCustomPolicyCustomPolicyIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.custom_policy)[':custom_policy_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCustomPolicyCustomPolicyIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.custom_policy[':custom_policy_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.custom_policy)[':custom_policy_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.custom_policy)[':custom_policy_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCustomPolicyCustomPolicyIdQueryKey>
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
          Awaited<ReturnType<(typeof client.custom_policy)[':custom_policy_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCustomPolicyCustomPolicyIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCustomPolicyCustomPolicyIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.custom_policy[':custom_policy_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.fulfillment_policy.$get>>,
) {
  return ['fulfillment_policy', '/fulfillment_policy', toValue(args)] as const
}

export function getFulfillmentPolicyQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.fulfillment_policy.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFulfillmentPolicyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.fulfillment_policy.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFulfillmentPolicy<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fulfillment_policy.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.fulfillment_policy.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.fulfillment_policy.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.fulfillment_policy.$get>>>
            >
          >,
          ReturnType<typeof getFulfillmentPolicyQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fulfillment_policy.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getFulfillmentPolicyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFulfillmentPolicyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.fulfillment_policy.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.fulfillment_policy.index.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.fulfillment_policy.index.$post>,
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
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.fulfillment_policy.get_by_policy_name.$get>
  >,
) {
  return ['fulfillment_policy', '/fulfillment_policy/get_by_policy_name', toValue(args)] as const
}

export function getFulfillmentPolicyGetByPolicyNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.fulfillment_policy.get_by_policy_name.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFulfillmentPolicyGetByPolicyNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.fulfillment_policy.get_by_policy_name.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.fulfillment_policy.get_by_policy_name.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.fulfillment_policy.get_by_policy_name.$get>>
              >
            >
          >,
          ReturnType<typeof getFulfillmentPolicyGetByPolicyNameQueryKey>
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
          Awaited<ReturnType<typeof client.fulfillment_policy.get_by_policy_name.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFulfillmentPolicyGetByPolicyNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFulfillmentPolicyGetByPolicyNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.fulfillment_policy.get_by_policy_name.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFulfillmentPolicyFulfillmentPolicyIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.fulfillment_policy)[':fulfillmentPolicyId']['$get']>
  >,
) {
  return ['fulfillment_policy', '/fulfillment_policy/:fulfillmentPolicyId', toValue(args)] as const
}

export function getFulfillmentPolicyFulfillmentPolicyIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.fulfillment_policy)[':fulfillmentPolicyId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFulfillmentPolicyFulfillmentPolicyIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.fulfillment_policy[':fulfillmentPolicyId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.fulfillment_policy)[':fulfillmentPolicyId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.fulfillment_policy)[':fulfillmentPolicyId']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getFulfillmentPolicyFulfillmentPolicyIdQueryKey>
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
          Awaited<ReturnType<(typeof client.fulfillment_policy)[':fulfillmentPolicyId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFulfillmentPolicyFulfillmentPolicyIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFulfillmentPolicyFulfillmentPolicyIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.fulfillment_policy[':fulfillmentPolicyId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.fulfillment_policy)[':fulfillmentPolicyId']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.fulfillment_policy)[':fulfillmentPolicyId']['$delete']>,
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

export function getKycQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getKycQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.kyc.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useKyc<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.kyc.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.kyc.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.kyc.$get>>>>>,
          ReturnType<typeof getKycQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.kyc.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getKycQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getKycQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.kyc.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPaymentPolicyQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.payment_policy.$get>>,
) {
  return ['payment_policy', '/payment_policy', toValue(args)] as const
}

export function getPaymentPolicyQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.payment_policy.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPaymentPolicyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.payment_policy.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePaymentPolicy<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.payment_policy.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.payment_policy.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.payment_policy.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.payment_policy.$get>>>>
          >,
          ReturnType<typeof getPaymentPolicyQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.payment_policy.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getPaymentPolicyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPaymentPolicyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.payment_policy.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.payment_policy.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.payment_policy.$post>,
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.payment_policy.get_by_policy_name.$get>>,
) {
  return ['payment_policy', '/payment_policy/get_by_policy_name', toValue(args)] as const
}

export function getPaymentPolicyGetByPolicyNameQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.payment_policy.get_by_policy_name.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPaymentPolicyGetByPolicyNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.payment_policy.get_by_policy_name.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.payment_policy.get_by_policy_name.$get>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.payment_policy.get_by_policy_name.$get>>
              >
            >
          >,
          ReturnType<typeof getPaymentPolicyGetByPolicyNameQueryKey>
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
          Awaited<ReturnType<typeof client.payment_policy.get_by_policy_name.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPaymentPolicyGetByPolicyNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPaymentPolicyGetByPolicyNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.payment_policy.get_by_policy_name.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPaymentPolicyPaymentPolicyIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.payment_policy)[':payment_policy_id']['$get']>
  >,
) {
  return ['payment_policy', '/payment_policy/:payment_policy_id', toValue(args)] as const
}

export function getPaymentPolicyPaymentPolicyIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.payment_policy)[':payment_policy_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPaymentPolicyPaymentPolicyIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.payment_policy[':payment_policy_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.payment_policy)[':payment_policy_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.payment_policy)[':payment_policy_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getPaymentPolicyPaymentPolicyIdQueryKey>
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
          Awaited<ReturnType<(typeof client.payment_policy)[':payment_policy_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPaymentPolicyPaymentPolicyIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPaymentPolicyPaymentPolicyIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.payment_policy[':payment_policy_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<(typeof client.payment_policy)[':payment_policy_id']['$delete']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.payment_policy)[':payment_policy_id']['$delete']>,
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.payments_program)[':marketplace_id'][':payments_program_type']['$get']
    >
  >,
) {
  return [
    'payments_program',
    '/payments_program/:marketplace_id/:payments_program_type',
    toValue(args),
  ] as const
}

export function getPaymentsProgramMarketplaceIdPaymentsProgramTypeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.payments_program)[':marketplace_id'][':payments_program_type']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPaymentsProgramMarketplaceIdPaymentsProgramTypeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.payments_program[':marketplace_id'][':payments_program_type'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.payments_program)[':marketplace_id'][':payments_program_type']['$get']
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
                    (typeof client.payments_program)[':marketplace_id'][':payments_program_type']['$get']
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
                    (typeof client.payments_program)[':marketplace_id'][':payments_program_type']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getPaymentsProgramMarketplaceIdPaymentsProgramTypeQueryKey>
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
              (typeof client.payments_program)[':marketplace_id'][':payments_program_type']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPaymentsProgramMarketplaceIdPaymentsProgramTypeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPaymentsProgramMarketplaceIdPaymentsProgramTypeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.payments_program[':marketplace_id'][':payments_program_type'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPaymentsProgramMarketplaceIdPaymentsProgramTypeOnboardingQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.payments_program)[':marketplace_id'][':payments_program_type']['onboarding']['$get']
    >
  >,
) {
  return [
    'payments_program',
    '/payments_program/:marketplace_id/:payments_program_type/onboarding',
    toValue(args),
  ] as const
}

export function getPaymentsProgramMarketplaceIdPaymentsProgramTypeOnboardingQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.payments_program)[':marketplace_id'][':payments_program_type']['onboarding']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getPaymentsProgramMarketplaceIdPaymentsProgramTypeOnboardingQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.payments_program[':marketplace_id'][':payments_program_type'].onboarding.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.payments_program)[':marketplace_id'][':payments_program_type']['onboarding']['$get']
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
                    (typeof client.payments_program)[':marketplace_id'][':payments_program_type']['onboarding']['$get']
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
                    (typeof client.payments_program)[':marketplace_id'][':payments_program_type']['onboarding']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getPaymentsProgramMarketplaceIdPaymentsProgramTypeOnboardingQueryKey>
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
              (typeof client.payments_program)[':marketplace_id'][':payments_program_type']['onboarding']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPaymentsProgramMarketplaceIdPaymentsProgramTypeOnboardingQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getPaymentsProgramMarketplaceIdPaymentsProgramTypeOnboardingQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.payments_program[':marketplace_id'][':payments_program_type'].onboarding.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPrivilegeQueryKey() {
  return ['privilege', '/privilege'] as const
}

export function getPrivilegeQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getPrivilegeQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.privilege.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function usePrivilege<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.privilege.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.privilege.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.privilege.$get>>>>
          >,
          ReturnType<typeof getPrivilegeQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.privilege.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getPrivilegeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getPrivilegeQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.privilege.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getProgramGetOptedInProgramsQueryKey() {
  return ['program', '/program/get_opted_in_programs'] as const
}

export function getProgramGetOptedInProgramsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getProgramGetOptedInProgramsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.program.get_opted_in_programs.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.program.get_opted_in_programs.$get>>
              >
            >
          >,
          ReturnType<typeof getProgramGetOptedInProgramsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.program.get_opted_in_programs.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProgramGetOptedInProgramsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getProgramGetOptedInProgramsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.program.get_opted_in_programs.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.program.opt_in.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.program.opt_in.$post>,
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.program.opt_out.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.program.opt_out.$post>,
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

export function getRateTableQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.rate_table.$get>>,
) {
  return ['rate_table', '/rate_table', toValue(args)] as const
}

export function getRateTableQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.rate_table.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRateTableQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.rate_table.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useRateTable<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rate_table.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.rate_table.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rate_table.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rate_table.$get>>>>
          >,
          ReturnType<typeof getRateTableQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rate_table.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getRateTableQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRateTableQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.rate_table.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getReturnPolicyQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.return_policy.$get>>,
) {
  return ['return_policy', '/return_policy', toValue(args)] as const
}

export function getReturnPolicyQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.return_policy.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getReturnPolicyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.return_policy.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useReturnPolicy<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.return_policy.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.return_policy.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.return_policy.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.return_policy.$get>>>>
          >,
          ReturnType<typeof getReturnPolicyQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.return_policy.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getReturnPolicyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getReturnPolicyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.return_policy.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.return_policy.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.return_policy.$post>,
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.return_policy.get_by_policy_name.$get>>,
) {
  return ['return_policy', '/return_policy/get_by_policy_name', toValue(args)] as const
}

export function getReturnPolicyGetByPolicyNameQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.return_policy.get_by_policy_name.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getReturnPolicyGetByPolicyNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.return_policy.get_by_policy_name.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useReturnPolicyGetByPolicyName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.return_policy.get_by_policy_name.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.return_policy.get_by_policy_name.$get>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.return_policy.get_by_policy_name.$get>>
              >
            >
          >,
          ReturnType<typeof getReturnPolicyGetByPolicyNameQueryKey>
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
          Awaited<ReturnType<typeof client.return_policy.get_by_policy_name.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getReturnPolicyGetByPolicyNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getReturnPolicyGetByPolicyNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.return_policy.get_by_policy_name.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getReturnPolicyReturnPolicyIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.return_policy)[':return_policy_id']['$get']>
  >,
) {
  return ['return_policy', '/return_policy/:return_policy_id', toValue(args)] as const
}

export function getReturnPolicyReturnPolicyIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.return_policy)[':return_policy_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getReturnPolicyReturnPolicyIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.return_policy[':return_policy_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.return_policy)[':return_policy_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.return_policy)[':return_policy_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getReturnPolicyReturnPolicyIdQueryKey>
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
          Awaited<ReturnType<(typeof client.return_policy)[':return_policy_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getReturnPolicyReturnPolicyIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getReturnPolicyReturnPolicyIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.return_policy[':return_policy_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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

export function getSalesTaxQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sales_tax.$get>>,
) {
  return ['sales_tax', '/sales_tax', toValue(args)] as const
}

export function getSalesTaxQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sales_tax.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSalesTaxQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sales_tax.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useSalesTax<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sales_tax.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sales_tax.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sales_tax.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sales_tax.$get>>>>
          >,
          ReturnType<typeof getSalesTaxQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sales_tax.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSalesTaxQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSalesTaxQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sales_tax.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSalesTaxCountryCodeJurisdictionIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sales_tax)[':countryCode'][':jurisdictionId']['$get']>
  >,
) {
  return ['sales_tax', '/sales_tax/:countryCode/:jurisdictionId', toValue(args)] as const
}

export function getSalesTaxCountryCodeJurisdictionIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sales_tax)[':countryCode'][':jurisdictionId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSalesTaxCountryCodeJurisdictionIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sales_tax[':countryCode'][':jurisdictionId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.sales_tax)[':countryCode'][':jurisdictionId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.sales_tax)[':countryCode'][':jurisdictionId']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getSalesTaxCountryCodeJurisdictionIdQueryKey>
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
          Awaited<ReturnType<(typeof client.sales_tax)[':countryCode'][':jurisdictionId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSalesTaxCountryCodeJurisdictionIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSalesTaxCountryCodeJurisdictionIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sales_tax[':countryCode'][':jurisdictionId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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

export function getSubscriptionQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.subscription.$get>>,
) {
  return ['subscription', '/subscription', toValue(args)] as const
}

export function getSubscriptionQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.subscription.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSubscriptionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.subscription.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useSubscription<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subscription.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.subscription.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subscription.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subscription.$get>>>>
          >,
          ReturnType<typeof getSubscriptionQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subscription.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSubscriptionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSubscriptionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.subscription.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
