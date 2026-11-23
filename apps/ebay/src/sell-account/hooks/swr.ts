import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
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

export function getGetAdvertisingEligibilityKey(
  args: InferRequestType<typeof client.advertising_eligibility.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['advertising_eligibility', '/advertising_eligibility', keyArgs] as const
}

export function useGetAdvertisingEligibility<TError = unknown>(
  args: InferRequestType<typeof client.advertising_eligibility.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.advertising_eligibility.$get>>>
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
        ? getGetAdvertisingEligibilityKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.advertising_eligibility.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.advertising_eligibility.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdvertisingEligibility<TError = unknown>(
  args: InferRequestType<typeof client.advertising_eligibility.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.advertising_eligibility.$get>>>
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
        ? getGetAdvertisingEligibilityKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.advertising_eligibility.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.advertising_eligibility.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCustomPolicyIndexKey(
  args: InferRequestType<typeof client.custom_policy.index.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['custom_policy', '/custom_policy/', keyArgs] as const
}

export function useGetCustomPolicyIndex<TError = unknown>(
  args: InferRequestType<typeof client.custom_policy.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.custom_policy.index.$get>>>
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
        ? getGetCustomPolicyIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.custom_policy.index.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.custom_policy.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCustomPolicyIndex<TError = unknown>(
  args: InferRequestType<typeof client.custom_policy.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.custom_policy.index.$get>>>
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
        ? getGetCustomPolicyIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.custom_policy.index.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.custom_policy.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostCustomPolicyIndexKey() {
  return ['custom_policy', '/custom_policy/', 'POST'] as const
}

export function usePostCustomPolicyIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.custom_policy.index.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.custom_policy.index.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCustomPolicyIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.custom_policy.index.$post> }) =>
        parseResponse(client.custom_policy.index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCustomPolicyCustomPolicyIdKey(
  args: InferRequestType<(typeof client.custom_policy)[':custom_policy_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['custom_policy', '/custom_policy/:custom_policy_id', keyArgs] as const
}

export function useGetCustomPolicyCustomPolicyId<TError = unknown>(
  args: InferRequestType<(typeof client.custom_policy)[':custom_policy_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.custom_policy)[':custom_policy_id']['$get']>>
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
        ? getGetCustomPolicyCustomPolicyIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.custom_policy)[':custom_policy_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.custom_policy[':custom_policy_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCustomPolicyCustomPolicyId<TError = unknown>(
  args: InferRequestType<(typeof client.custom_policy)[':custom_policy_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.custom_policy)[':custom_policy_id']['$get']>>
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
        ? getGetCustomPolicyCustomPolicyIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.custom_policy)[':custom_policy_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.custom_policy[':custom_policy_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutCustomPolicyCustomPolicyIdKey() {
  return ['custom_policy', '/custom_policy/:custom_policy_id', 'PUT'] as const
}

export function usePutCustomPolicyCustomPolicyId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.custom_policy)[':custom_policy_id']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.custom_policy)[':custom_policy_id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutCustomPolicyCustomPolicyIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.custom_policy)[':custom_policy_id']['$put']> },
      ) => parseResponse(client.custom_policy[':custom_policy_id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetFulfillmentPolicyKey(
  args: InferRequestType<typeof client.fulfillment_policy.$get>,
) {
  return ['fulfillment_policy', '/fulfillment_policy', args] as const
}

export function useGetFulfillmentPolicy<TError = unknown>(
  args: InferRequestType<typeof client.fulfillment_policy.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fulfillment_policy.$get>>>>
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
        ? getGetFulfillmentPolicyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fulfillment_policy.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.fulfillment_policy.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFulfillmentPolicy<TError = unknown>(
  args: InferRequestType<typeof client.fulfillment_policy.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fulfillment_policy.$get>>>>
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
        ? getGetFulfillmentPolicyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fulfillment_policy.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.fulfillment_policy.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostFulfillmentPolicyIndexKey() {
  return ['fulfillment_policy', '/fulfillment_policy/', 'POST'] as const
}

export function usePostFulfillmentPolicyIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.fulfillment_policy.index.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.fulfillment_policy.index.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostFulfillmentPolicyIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.fulfillment_policy.index.$post> },
      ) => parseResponse(client.fulfillment_policy.index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetFulfillmentPolicyGetByPolicyNameKey(
  args: InferRequestType<typeof client.fulfillment_policy.get_by_policy_name.$get>,
) {
  return ['fulfillment_policy', '/fulfillment_policy/get_by_policy_name', args] as const
}

export function useGetFulfillmentPolicyGetByPolicyName<TError = unknown>(
  args: InferRequestType<typeof client.fulfillment_policy.get_by_policy_name.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.fulfillment_policy.get_by_policy_name.$get>>
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
        ? getGetFulfillmentPolicyGetByPolicyNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.fulfillment_policy.get_by_policy_name.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.fulfillment_policy.get_by_policy_name.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFulfillmentPolicyGetByPolicyName<TError = unknown>(
  args: InferRequestType<typeof client.fulfillment_policy.get_by_policy_name.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.fulfillment_policy.get_by_policy_name.$get>>
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
        ? getGetFulfillmentPolicyGetByPolicyNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.fulfillment_policy.get_by_policy_name.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.fulfillment_policy.get_by_policy_name.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetFulfillmentPolicyFulfillmentPolicyIdKey(
  args: InferRequestType<(typeof client.fulfillment_policy)[':fulfillmentPolicyId']['$get']>,
) {
  return ['fulfillment_policy', '/fulfillment_policy/:fulfillmentPolicyId', args] as const
}

export function useGetFulfillmentPolicyFulfillmentPolicyId<TError = unknown>(
  args: InferRequestType<(typeof client.fulfillment_policy)[':fulfillmentPolicyId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.fulfillment_policy)[':fulfillmentPolicyId']['$get']>>
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
        ? getGetFulfillmentPolicyFulfillmentPolicyIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.fulfillment_policy)[':fulfillmentPolicyId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.fulfillment_policy[':fulfillmentPolicyId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFulfillmentPolicyFulfillmentPolicyId<TError = unknown>(
  args: InferRequestType<(typeof client.fulfillment_policy)[':fulfillmentPolicyId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.fulfillment_policy)[':fulfillmentPolicyId']['$get']>>
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
        ? getGetFulfillmentPolicyFulfillmentPolicyIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.fulfillment_policy)[':fulfillmentPolicyId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.fulfillment_policy[':fulfillmentPolicyId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutFulfillmentPolicyFulfillmentPolicyIdKey() {
  return ['fulfillment_policy', '/fulfillment_policy/:fulfillmentPolicyId', 'PUT'] as const
}

export function usePutFulfillmentPolicyFulfillmentPolicyId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.fulfillment_policy)[':fulfillmentPolicyId']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.fulfillment_policy)[':fulfillmentPolicyId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutFulfillmentPolicyFulfillmentPolicyIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.fulfillment_policy)[':fulfillmentPolicyId']['$put']>
        },
      ) =>
        parseResponse(client.fulfillment_policy[':fulfillmentPolicyId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteFulfillmentPolicyFulfillmentPolicyIdKey() {
  return ['fulfillment_policy', '/fulfillment_policy/:fulfillmentPolicyId', 'DELETE'] as const
}

export function useDeleteFulfillmentPolicyFulfillmentPolicyId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.fulfillment_policy)[':fulfillmentPolicyId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteFulfillmentPolicyFulfillmentPolicyIdKey()
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
            (typeof client.fulfillment_policy)[':fulfillmentPolicyId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.fulfillment_policy[':fulfillmentPolicyId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetKycKey() {
  return ['kyc', '/kyc'] as const
}

export function useGetKyc<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.kyc.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetKycKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.kyc.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.kyc.$get(undefined, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetKyc<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.kyc.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetKycKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.kyc.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.kyc.$get(undefined, clientOptions)), restSwrOptions),
  }
}

export function getGetPaymentPolicyKey(args: InferRequestType<typeof client.payment_policy.$get>) {
  return ['payment_policy', '/payment_policy', args] as const
}

export function useGetPaymentPolicy<TError = unknown>(
  args: InferRequestType<typeof client.payment_policy.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.payment_policy.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPaymentPolicyKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.payment_policy.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.payment_policy.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPaymentPolicy<TError = unknown>(
  args: InferRequestType<typeof client.payment_policy.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.payment_policy.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPaymentPolicyKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.payment_policy.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.payment_policy.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostPaymentPolicyKey() {
  return ['payment_policy', '/payment_policy', 'POST'] as const
}

export function usePostPaymentPolicy<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.payment_policy.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.payment_policy.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPaymentPolicyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.payment_policy.$post> }) =>
        parseResponse(client.payment_policy.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPaymentPolicyGetByPolicyNameKey(
  args: InferRequestType<typeof client.payment_policy.get_by_policy_name.$get>,
) {
  return ['payment_policy', '/payment_policy/get_by_policy_name', args] as const
}

export function useGetPaymentPolicyGetByPolicyName<TError = unknown>(
  args: InferRequestType<typeof client.payment_policy.get_by_policy_name.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.payment_policy.get_by_policy_name.$get>>
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
        ? getGetPaymentPolicyGetByPolicyNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.payment_policy.get_by_policy_name.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.payment_policy.get_by_policy_name.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPaymentPolicyGetByPolicyName<TError = unknown>(
  args: InferRequestType<typeof client.payment_policy.get_by_policy_name.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.payment_policy.get_by_policy_name.$get>>
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
        ? getGetPaymentPolicyGetByPolicyNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.payment_policy.get_by_policy_name.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.payment_policy.get_by_policy_name.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPaymentPolicyPaymentPolicyIdKey(
  args: InferRequestType<(typeof client.payment_policy)[':payment_policy_id']['$get']>,
) {
  return ['payment_policy', '/payment_policy/:payment_policy_id', args] as const
}

export function useGetPaymentPolicyPaymentPolicyId<TError = unknown>(
  args: InferRequestType<(typeof client.payment_policy)[':payment_policy_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.payment_policy)[':payment_policy_id']['$get']>>
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
        ? getGetPaymentPolicyPaymentPolicyIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.payment_policy)[':payment_policy_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.payment_policy[':payment_policy_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPaymentPolicyPaymentPolicyId<TError = unknown>(
  args: InferRequestType<(typeof client.payment_policy)[':payment_policy_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.payment_policy)[':payment_policy_id']['$get']>>
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
        ? getGetPaymentPolicyPaymentPolicyIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.payment_policy)[':payment_policy_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.payment_policy[':payment_policy_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutPaymentPolicyPaymentPolicyIdKey() {
  return ['payment_policy', '/payment_policy/:payment_policy_id', 'PUT'] as const
}

export function usePutPaymentPolicyPaymentPolicyId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.payment_policy)[':payment_policy_id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.payment_policy)[':payment_policy_id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutPaymentPolicyPaymentPolicyIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.payment_policy)[':payment_policy_id']['$put']> },
      ) => parseResponse(client.payment_policy[':payment_policy_id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeletePaymentPolicyPaymentPolicyIdKey() {
  return ['payment_policy', '/payment_policy/:payment_policy_id', 'DELETE'] as const
}

export function useDeletePaymentPolicyPaymentPolicyId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.payment_policy)[':payment_policy_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.payment_policy)[':payment_policy_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeletePaymentPolicyPaymentPolicyIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.payment_policy)[':payment_policy_id']['$delete']>
        },
      ) => parseResponse(client.payment_policy[':payment_policy_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPaymentsProgramMarketplaceIdPaymentsProgramTypeKey(
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

export function useGetPaymentsProgramMarketplaceIdPaymentsProgramType<TError = unknown>(
  args: InferRequestType<
    (typeof client.payments_program)[':marketplace_id'][':payments_program_type']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetPaymentsProgramMarketplaceIdPaymentsProgramTypeKey(args)
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
                (typeof client.payments_program)[':marketplace_id'][':payments_program_type']['$get']
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
          client.payments_program[':marketplace_id'][':payments_program_type'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPaymentsProgramMarketplaceIdPaymentsProgramType<TError = unknown>(
  args: InferRequestType<
    (typeof client.payments_program)[':marketplace_id'][':payments_program_type']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetPaymentsProgramMarketplaceIdPaymentsProgramTypeKey(args)
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
                (typeof client.payments_program)[':marketplace_id'][':payments_program_type']['$get']
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
          client.payments_program[':marketplace_id'][':payments_program_type'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetPaymentsProgramMarketplaceIdPaymentsProgramTypeOnboardingKey(
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

export function useGetPaymentsProgramMarketplaceIdPaymentsProgramTypeOnboarding<TError = unknown>(
  args: InferRequestType<
    (typeof client.payments_program)[':marketplace_id'][':payments_program_type']['onboarding']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetPaymentsProgramMarketplaceIdPaymentsProgramTypeOnboardingKey(args)
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
                (typeof client.payments_program)[':marketplace_id'][':payments_program_type']['onboarding']['$get']
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
          client.payments_program[':marketplace_id'][':payments_program_type'].onboarding.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPaymentsProgramMarketplaceIdPaymentsProgramTypeOnboarding<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.payments_program)[':marketplace_id'][':payments_program_type']['onboarding']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetPaymentsProgramMarketplaceIdPaymentsProgramTypeOnboardingKey(args)
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
                (typeof client.payments_program)[':marketplace_id'][':payments_program_type']['onboarding']['$get']
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
          client.payments_program[':marketplace_id'][':payments_program_type'].onboarding.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetPrivilegeKey() {
  return ['privilege', '/privilege'] as const
}

export function useGetPrivilege<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.privilege.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPrivilegeKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.privilege.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.privilege.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPrivilege<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.privilege.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPrivilegeKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.privilege.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.privilege.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetProgramGetOptedInProgramsKey() {
  return ['program', '/program/get_opted_in_programs'] as const
}

export function useGetProgramGetOptedInPrograms<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.program.get_opted_in_programs.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetProgramGetOptedInProgramsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.program.get_opted_in_programs.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.program.get_opted_in_programs.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProgramGetOptedInPrograms<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.program.get_opted_in_programs.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetProgramGetOptedInProgramsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.program.get_opted_in_programs.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.program.get_opted_in_programs.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostProgramOptInKey() {
  return ['program', '/program/opt_in', 'POST'] as const
}

export function usePostProgramOptIn<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.program.opt_in.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.program.opt_in.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostProgramOptInKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.program.opt_in.$post> }) =>
        parseResponse(client.program.opt_in.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostProgramOptOutKey() {
  return ['program', '/program/opt_out', 'POST'] as const
}

export function usePostProgramOptOut<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.program.opt_out.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.program.opt_out.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostProgramOptOutKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.program.opt_out.$post> }) =>
        parseResponse(client.program.opt_out.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetRateTableKey(args: InferRequestType<typeof client.rate_table.$get>) {
  return ['rate_table', '/rate_table', args] as const
}

export function useGetRateTable<TError = unknown>(
  args: InferRequestType<typeof client.rate_table.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rate_table.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRateTableKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rate_table.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.rate_table.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRateTable<TError = unknown>(
  args: InferRequestType<typeof client.rate_table.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rate_table.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRateTableKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rate_table.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.rate_table.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetReturnPolicyKey(args: InferRequestType<typeof client.return_policy.$get>) {
  return ['return_policy', '/return_policy', args] as const
}

export function useGetReturnPolicy<TError = unknown>(
  args: InferRequestType<typeof client.return_policy.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.return_policy.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetReturnPolicyKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.return_policy.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.return_policy.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetReturnPolicy<TError = unknown>(
  args: InferRequestType<typeof client.return_policy.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.return_policy.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetReturnPolicyKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.return_policy.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.return_policy.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostReturnPolicyKey() {
  return ['return_policy', '/return_policy', 'POST'] as const
}

export function usePostReturnPolicy<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.return_policy.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.return_policy.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostReturnPolicyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.return_policy.$post> }) =>
        parseResponse(client.return_policy.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetReturnPolicyGetByPolicyNameKey(
  args: InferRequestType<typeof client.return_policy.get_by_policy_name.$get>,
) {
  return ['return_policy', '/return_policy/get_by_policy_name', args] as const
}

export function useGetReturnPolicyGetByPolicyName<TError = unknown>(
  args: InferRequestType<typeof client.return_policy.get_by_policy_name.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.return_policy.get_by_policy_name.$get>>
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
        ? getGetReturnPolicyGetByPolicyNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.return_policy.get_by_policy_name.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.return_policy.get_by_policy_name.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetReturnPolicyGetByPolicyName<TError = unknown>(
  args: InferRequestType<typeof client.return_policy.get_by_policy_name.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.return_policy.get_by_policy_name.$get>>
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
        ? getGetReturnPolicyGetByPolicyNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.return_policy.get_by_policy_name.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.return_policy.get_by_policy_name.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetReturnPolicyReturnPolicyIdKey(
  args: InferRequestType<(typeof client.return_policy)[':return_policy_id']['$get']>,
) {
  return ['return_policy', '/return_policy/:return_policy_id', args] as const
}

export function useGetReturnPolicyReturnPolicyId<TError = unknown>(
  args: InferRequestType<(typeof client.return_policy)[':return_policy_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.return_policy)[':return_policy_id']['$get']>>
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
        ? getGetReturnPolicyReturnPolicyIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.return_policy)[':return_policy_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.return_policy[':return_policy_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetReturnPolicyReturnPolicyId<TError = unknown>(
  args: InferRequestType<(typeof client.return_policy)[':return_policy_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.return_policy)[':return_policy_id']['$get']>>
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
        ? getGetReturnPolicyReturnPolicyIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.return_policy)[':return_policy_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.return_policy[':return_policy_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutReturnPolicyReturnPolicyIdKey() {
  return ['return_policy', '/return_policy/:return_policy_id', 'PUT'] as const
}

export function usePutReturnPolicyReturnPolicyId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.return_policy)[':return_policy_id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.return_policy)[':return_policy_id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutReturnPolicyReturnPolicyIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.return_policy)[':return_policy_id']['$put']> },
      ) => parseResponse(client.return_policy[':return_policy_id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteReturnPolicyReturnPolicyIdKey() {
  return ['return_policy', '/return_policy/:return_policy_id', 'DELETE'] as const
}

export function useDeleteReturnPolicyReturnPolicyId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.return_policy)[':return_policy_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.return_policy)[':return_policy_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteReturnPolicyReturnPolicyIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.return_policy)[':return_policy_id']['$delete']> },
      ) => parseResponse(client.return_policy[':return_policy_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSalesTaxKey(args: InferRequestType<typeof client.sales_tax.$get>) {
  return ['sales_tax', '/sales_tax', args] as const
}

export function useGetSalesTax<TError = unknown>(
  args: InferRequestType<typeof client.sales_tax.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sales_tax.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSalesTaxKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sales_tax.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sales_tax.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSalesTax<TError = unknown>(
  args: InferRequestType<typeof client.sales_tax.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sales_tax.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSalesTaxKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sales_tax.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sales_tax.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSalesTaxCountryCodeJurisdictionIdKey(
  args: InferRequestType<(typeof client.sales_tax)[':countryCode'][':jurisdictionId']['$get']>,
) {
  return ['sales_tax', '/sales_tax/:countryCode/:jurisdictionId', args] as const
}

export function useGetSalesTaxCountryCodeJurisdictionId<TError = unknown>(
  args: InferRequestType<(typeof client.sales_tax)[':countryCode'][':jurisdictionId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.sales_tax)[':countryCode'][':jurisdictionId']['$get']>
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
        ? getGetSalesTaxCountryCodeJurisdictionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.sales_tax)[':countryCode'][':jurisdictionId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.sales_tax[':countryCode'][':jurisdictionId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSalesTaxCountryCodeJurisdictionId<TError = unknown>(
  args: InferRequestType<(typeof client.sales_tax)[':countryCode'][':jurisdictionId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.sales_tax)[':countryCode'][':jurisdictionId']['$get']>
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
        ? getGetSalesTaxCountryCodeJurisdictionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.sales_tax)[':countryCode'][':jurisdictionId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.sales_tax[':countryCode'][':jurisdictionId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutSalesTaxCountryCodeJurisdictionIdKey() {
  return ['sales_tax', '/sales_tax/:countryCode/:jurisdictionId', 'PUT'] as const
}

export function usePutSalesTaxCountryCodeJurisdictionId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.sales_tax)[':countryCode'][':jurisdictionId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutSalesTaxCountryCodeJurisdictionIdKey()
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
            (typeof client.sales_tax)[':countryCode'][':jurisdictionId']['$put']
          >
        },
      ) =>
        parseResponse(client.sales_tax[':countryCode'][':jurisdictionId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteSalesTaxCountryCodeJurisdictionIdKey() {
  return ['sales_tax', '/sales_tax/:countryCode/:jurisdictionId', 'DELETE'] as const
}

export function useDeleteSalesTaxCountryCodeJurisdictionId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.sales_tax)[':countryCode'][':jurisdictionId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteSalesTaxCountryCodeJurisdictionIdKey()
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
            (typeof client.sales_tax)[':countryCode'][':jurisdictionId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.sales_tax[':countryCode'][':jurisdictionId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetSubscriptionKey(args: InferRequestType<typeof client.subscription.$get>) {
  return ['subscription', '/subscription', args] as const
}

export function useGetSubscription<TError = unknown>(
  args: InferRequestType<typeof client.subscription.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subscription.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSubscriptionKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subscription.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.subscription.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSubscription<TError = unknown>(
  args: InferRequestType<typeof client.subscription.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subscription.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSubscriptionKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subscription.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.subscription.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}
