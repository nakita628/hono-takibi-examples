import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getV1Key() {
  return ['v1'] as const
}

export function getGetV1ProductsKey(args: InferRequestType<typeof client.v1.products.$get>) {
  return ['v1', '/v1/products', args] as const
}

export function useGetV1Products<TError = unknown>(
  args: InferRequestType<typeof client.v1.products.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.products.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1ProductsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.products.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.products.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1Products<TError = unknown>(
  args: InferRequestType<typeof client.v1.products.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.products.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1ProductsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.products.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.products.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1AccountListSubscribersKey(
  args: InferRequestType<(typeof client.v1)[':account:listSubscribers']['$get']>,
) {
  return ['v1', '/v1/:account:listSubscribers', args] as const
}

export function useGetV1AccountListSubscribers<TError = unknown>(
  args: InferRequestType<(typeof client.v1)[':account:listSubscribers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)[':account:listSubscribers']['$get']>>
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
        ? getGetV1AccountListSubscribersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)[':account:listSubscribers']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1[':account:listSubscribers'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AccountListSubscribers<TError = unknown>(
  args: InferRequestType<(typeof client.v1)[':account:listSubscribers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)[':account:listSubscribers']['$get']>>
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
        ? getGetV1AccountListSubscribersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)[':account:listSubscribers']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1[':account:listSubscribers'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1AccountRegisterKey() {
  return ['v1', '/v1/:account:register', 'POST'] as const
}

export function usePostV1AccountRegister<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':account:register']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)[':account:register']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1AccountRegisterKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1)[':account:register']['$post']> },
      ) => parseResponse(client.v1[':account:register'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1AccountUnregisterKey() {
  return ['v1', '/v1/:account:unregister', 'POST'] as const
}

export function usePostV1AccountUnregister<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)[':account:unregister']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)[':account:unregister']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1AccountUnregisterKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1)[':account:unregister']['$post']> },
      ) => parseResponse(client.v1[':account:unregister'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1CustomerListPurchasableOffersKey(
  args: InferRequestType<(typeof client.v1)[':customer:listPurchasableOffers']['$get']>,
) {
  return ['v1', '/v1/:customer:listPurchasableOffers', args] as const
}

export function useGetV1CustomerListPurchasableOffers<TError = unknown>(
  args: InferRequestType<(typeof client.v1)[':customer:listPurchasableOffers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)[':customer:listPurchasableOffers']['$get']>>
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
        ? getGetV1CustomerListPurchasableOffersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)[':customer:listPurchasableOffers']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1[':customer:listPurchasableOffers'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1CustomerListPurchasableOffers<TError = unknown>(
  args: InferRequestType<(typeof client.v1)[':customer:listPurchasableOffers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)[':customer:listPurchasableOffers']['$get']>>
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
        ? getGetV1CustomerListPurchasableOffersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)[':customer:listPurchasableOffers']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1[':customer:listPurchasableOffers'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1CustomerListPurchasableSkusKey(
  args: InferRequestType<(typeof client.v1)[':customer:listPurchasableSkus']['$get']>,
) {
  return ['v1', '/v1/:customer:listPurchasableSkus', args] as const
}

export function useGetV1CustomerListPurchasableSkus<TError = unknown>(
  args: InferRequestType<(typeof client.v1)[':customer:listPurchasableSkus']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)[':customer:listPurchasableSkus']['$get']>>
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
        ? getGetV1CustomerListPurchasableSkusKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)[':customer:listPurchasableSkus']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1[':customer:listPurchasableSkus'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1CustomerListPurchasableSkus<TError = unknown>(
  args: InferRequestType<(typeof client.v1)[':customer:listPurchasableSkus']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)[':customer:listPurchasableSkus']['$get']>>
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
        ? getGetV1CustomerListPurchasableSkusKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)[':customer:listPurchasableSkus']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1[':customer:listPurchasableSkus'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1CustomerProvisionCloudIdentityKey() {
  return ['v1', '/v1/:customer:provisionCloudIdentity', 'POST'] as const
}

export function usePostV1CustomerProvisionCloudIdentity<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)[':customer:provisionCloudIdentity']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)[':customer:provisionCloudIdentity']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1CustomerProvisionCloudIdentityKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1)[':customer:provisionCloudIdentity']['$post']>
        },
      ) => parseResponse(client.v1[':customer:provisionCloudIdentity'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1EntitlementLookupOfferKey(
  args: InferRequestType<(typeof client.v1)[':entitlement:lookupOffer']['$get']>,
) {
  return ['v1', '/v1/:entitlement:lookupOffer', args] as const
}

export function useGetV1EntitlementLookupOffer<TError = unknown>(
  args: InferRequestType<(typeof client.v1)[':entitlement:lookupOffer']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)[':entitlement:lookupOffer']['$get']>>
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
        ? getGetV1EntitlementLookupOfferKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)[':entitlement:lookupOffer']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1[':entitlement:lookupOffer'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1EntitlementLookupOffer<TError = unknown>(
  args: InferRequestType<(typeof client.v1)[':entitlement:lookupOffer']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)[':entitlement:lookupOffer']['$get']>>
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
        ? getGetV1EntitlementLookupOfferKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)[':entitlement:lookupOffer']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1[':entitlement:lookupOffer'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1NameKey(args: InferRequestType<(typeof client.v1)[':name']['$get']>) {
  return ['v1', '/v1/:name', args] as const
}

export function useGetV1Name<TError = unknown>(
  args: InferRequestType<(typeof client.v1)[':name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1NameKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1[':name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1Name<TError = unknown>(
  args: InferRequestType<(typeof client.v1)[':name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1NameKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1[':name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV1NameKey() {
  return ['v1', '/v1/:name', 'DELETE'] as const
}

export function useDeleteV1Name<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name']['$delete']>>>>
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)[':name']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1NameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client.v1)[':name']['$delete']> }) =>
        parseResponse(client.v1[':name'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchV1NameKey() {
  return ['v1', '/v1/:name', 'PATCH'] as const
}

export function usePatchV1Name<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name']['$patch']>>>>
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)[':name']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV1NameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client.v1)[':name']['$patch']> }) =>
        parseResponse(client.v1[':name'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1NameActivateKey() {
  return ['v1', '/v1/:name:activate', 'POST'] as const
}

export function usePostV1NameActivate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name:activate']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)[':name:activate']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1NameActivateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1)[':name:activate']['$post']> },
      ) => parseResponse(client.v1[':name:activate'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1NameCancelKey() {
  return ['v1', '/v1/:name:cancel', 'POST'] as const
}

export function usePostV1NameCancel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name:cancel']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)[':name:cancel']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1NameCancelKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1)[':name:cancel']['$post']> },
      ) => parseResponse(client.v1[':name:cancel'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1NameChangeOfferKey() {
  return ['v1', '/v1/:name:changeOffer', 'POST'] as const
}

export function usePostV1NameChangeOffer<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name:changeOffer']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)[':name:changeOffer']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1NameChangeOfferKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1)[':name:changeOffer']['$post']> },
      ) => parseResponse(client.v1[':name:changeOffer'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1NameChangeParametersKey() {
  return ['v1', '/v1/:name:changeParameters', 'POST'] as const
}

export function usePostV1NameChangeParameters<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)[':name:changeParameters']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)[':name:changeParameters']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1NameChangeParametersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1)[':name:changeParameters']['$post']> },
      ) => parseResponse(client.v1[':name:changeParameters'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1NameChangeRenewalSettingsKey() {
  return ['v1', '/v1/:name:changeRenewalSettings', 'POST'] as const
}

export function usePostV1NameChangeRenewalSettings<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)[':name:changeRenewalSettings']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)[':name:changeRenewalSettings']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1NameChangeRenewalSettingsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1)[':name:changeRenewalSettings']['$post']> },
      ) => parseResponse(client.v1[':name:changeRenewalSettings'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1NameRunKey() {
  return ['v1', '/v1/:name:run', 'POST'] as const
}

export function usePostV1NameRun<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name:run']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)[':name:run']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1NameRunKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1)[':name:run']['$post']> },
      ) => parseResponse(client.v1[':name:run'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1NameStartPaidServiceKey() {
  return ['v1', '/v1/:name:startPaidService', 'POST'] as const
}

export function usePostV1NameStartPaidService<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)[':name:startPaidService']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)[':name:startPaidService']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1NameStartPaidServiceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1)[':name:startPaidService']['$post']> },
      ) => parseResponse(client.v1[':name:startPaidService'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1NameSuspendKey() {
  return ['v1', '/v1/:name:suspend', 'POST'] as const
}

export function usePostV1NameSuspend<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name:suspend']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)[':name:suspend']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1NameSuspendKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1)[':name:suspend']['$post']> },
      ) => parseResponse(client.v1[':name:suspend'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1ParentChannelPartnerLinksKey(
  args: InferRequestType<(typeof client.v1)[':parent']['channelPartnerLinks']['$get']>,
) {
  return ['v1', '/v1/:parent/channelPartnerLinks', args] as const
}

export function useGetV1ParentChannelPartnerLinks<TError = unknown>(
  args: InferRequestType<(typeof client.v1)[':parent']['channelPartnerLinks']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)[':parent']['channelPartnerLinks']['$get']>>
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
        ? getGetV1ParentChannelPartnerLinksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)[':parent']['channelPartnerLinks']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1[':parent'].channelPartnerLinks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ParentChannelPartnerLinks<TError = unknown>(
  args: InferRequestType<(typeof client.v1)[':parent']['channelPartnerLinks']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)[':parent']['channelPartnerLinks']['$get']>>
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
        ? getGetV1ParentChannelPartnerLinksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)[':parent']['channelPartnerLinks']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1[':parent'].channelPartnerLinks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1ParentChannelPartnerLinksKey() {
  return ['v1', '/v1/:parent/channelPartnerLinks', 'POST'] as const
}

export function usePostV1ParentChannelPartnerLinks<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)[':parent']['channelPartnerLinks']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)[':parent']['channelPartnerLinks']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ParentChannelPartnerLinksKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1)[':parent']['channelPartnerLinks']['$post']> },
      ) => parseResponse(client.v1[':parent'].channelPartnerLinks.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1ParentChannelPartnerRepricingConfigsKey(
  args: InferRequestType<(typeof client.v1)[':parent']['channelPartnerRepricingConfigs']['$get']>,
) {
  return ['v1', '/v1/:parent/channelPartnerRepricingConfigs', args] as const
}

export function useGetV1ParentChannelPartnerRepricingConfigs<TError = unknown>(
  args: InferRequestType<(typeof client.v1)[':parent']['channelPartnerRepricingConfigs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1)[':parent']['channelPartnerRepricingConfigs']['$get']>
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
        ? getGetV1ParentChannelPartnerRepricingConfigsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1)[':parent']['channelPartnerRepricingConfigs']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1[':parent'].channelPartnerRepricingConfigs.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ParentChannelPartnerRepricingConfigs<TError = unknown>(
  args: InferRequestType<(typeof client.v1)[':parent']['channelPartnerRepricingConfigs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1)[':parent']['channelPartnerRepricingConfigs']['$get']>
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
        ? getGetV1ParentChannelPartnerRepricingConfigsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1)[':parent']['channelPartnerRepricingConfigs']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1[':parent'].channelPartnerRepricingConfigs.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV1ParentChannelPartnerRepricingConfigsKey() {
  return ['v1', '/v1/:parent/channelPartnerRepricingConfigs', 'POST'] as const
}

export function usePostV1ParentChannelPartnerRepricingConfigs<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1)[':parent']['channelPartnerRepricingConfigs']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)[':parent']['channelPartnerRepricingConfigs']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ParentChannelPartnerRepricingConfigsKey()
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
            (typeof client.v1)[':parent']['channelPartnerRepricingConfigs']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1[':parent'].channelPartnerRepricingConfigs.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1ParentCustomerRepricingConfigsKey(
  args: InferRequestType<(typeof client.v1)[':parent']['customerRepricingConfigs']['$get']>,
) {
  return ['v1', '/v1/:parent/customerRepricingConfigs', args] as const
}

export function useGetV1ParentCustomerRepricingConfigs<TError = unknown>(
  args: InferRequestType<(typeof client.v1)[':parent']['customerRepricingConfigs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)[':parent']['customerRepricingConfigs']['$get']>>
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
        ? getGetV1ParentCustomerRepricingConfigsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)[':parent']['customerRepricingConfigs']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1[':parent'].customerRepricingConfigs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ParentCustomerRepricingConfigs<TError = unknown>(
  args: InferRequestType<(typeof client.v1)[':parent']['customerRepricingConfigs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)[':parent']['customerRepricingConfigs']['$get']>>
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
        ? getGetV1ParentCustomerRepricingConfigsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)[':parent']['customerRepricingConfigs']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1[':parent'].customerRepricingConfigs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1ParentCustomerRepricingConfigsKey() {
  return ['v1', '/v1/:parent/customerRepricingConfigs', 'POST'] as const
}

export function usePostV1ParentCustomerRepricingConfigs<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)[':parent']['customerRepricingConfigs']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)[':parent']['customerRepricingConfigs']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ParentCustomerRepricingConfigsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1)[':parent']['customerRepricingConfigs']['$post']>
        },
      ) => parseResponse(client.v1[':parent'].customerRepricingConfigs.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1ParentCustomersKey(
  args: InferRequestType<(typeof client.v1)[':parent']['customers']['$get']>,
) {
  return ['v1', '/v1/:parent/customers', args] as const
}

export function useGetV1ParentCustomers<TError = unknown>(
  args: InferRequestType<(typeof client.v1)[':parent']['customers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)[':parent']['customers']['$get']>>
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
        ? getGetV1ParentCustomersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)[':parent']['customers']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1[':parent'].customers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ParentCustomers<TError = unknown>(
  args: InferRequestType<(typeof client.v1)[':parent']['customers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)[':parent']['customers']['$get']>>
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
        ? getGetV1ParentCustomersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)[':parent']['customers']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1[':parent'].customers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1ParentCustomersKey() {
  return ['v1', '/v1/:parent/customers', 'POST'] as const
}

export function usePostV1ParentCustomers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)[':parent']['customers']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)[':parent']['customers']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ParentCustomersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1)[':parent']['customers']['$post']> },
      ) => parseResponse(client.v1[':parent'].customers.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ParentCustomersImportKey() {
  return ['v1', '/v1/:parent/customers:import', 'POST'] as const
}

export function usePostV1ParentCustomersImport<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)[':parent']['customers:import']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)[':parent']['customers:import']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ParentCustomersImportKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1)[':parent']['customers:import']['$post']> },
      ) => parseResponse(client.v1[':parent']['customers:import'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1ParentEntitlementsKey(
  args: InferRequestType<(typeof client.v1)[':parent']['entitlements']['$get']>,
) {
  return ['v1', '/v1/:parent/entitlements', args] as const
}

export function useGetV1ParentEntitlements<TError = unknown>(
  args: InferRequestType<(typeof client.v1)[':parent']['entitlements']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)[':parent']['entitlements']['$get']>>
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
        ? getGetV1ParentEntitlementsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)[':parent']['entitlements']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1[':parent'].entitlements.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ParentEntitlements<TError = unknown>(
  args: InferRequestType<(typeof client.v1)[':parent']['entitlements']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)[':parent']['entitlements']['$get']>>
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
        ? getGetV1ParentEntitlementsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)[':parent']['entitlements']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1[':parent'].entitlements.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1ParentEntitlementsKey() {
  return ['v1', '/v1/:parent/entitlements', 'POST'] as const
}

export function usePostV1ParentEntitlements<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)[':parent']['entitlements']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)[':parent']['entitlements']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ParentEntitlementsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1)[':parent']['entitlements']['$post']> },
      ) => parseResponse(client.v1[':parent'].entitlements.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1ParentOffersKey(
  args: InferRequestType<(typeof client.v1)[':parent']['offers']['$get']>,
) {
  return ['v1', '/v1/:parent/offers', args] as const
}

export function useGetV1ParentOffers<TError = unknown>(
  args: InferRequestType<(typeof client.v1)[':parent']['offers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':parent']['offers']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetV1ParentOffersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':parent']['offers']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1[':parent'].offers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ParentOffers<TError = unknown>(
  args: InferRequestType<(typeof client.v1)[':parent']['offers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':parent']['offers']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetV1ParentOffersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':parent']['offers']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1[':parent'].offers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1ParentReportsKey(
  args: InferRequestType<(typeof client.v1)[':parent']['reports']['$get']>,
) {
  return ['v1', '/v1/:parent/reports', args] as const
}

export function useGetV1ParentReports<TError = unknown>(
  args: InferRequestType<(typeof client.v1)[':parent']['reports']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)[':parent']['reports']['$get']>>
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
        ? getGetV1ParentReportsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)[':parent']['reports']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1[':parent'].reports.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ParentReports<TError = unknown>(
  args: InferRequestType<(typeof client.v1)[':parent']['reports']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)[':parent']['reports']['$get']>>
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
        ? getGetV1ParentReportsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)[':parent']['reports']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1[':parent'].reports.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1ParentSkusKey(
  args: InferRequestType<(typeof client.v1)[':parent']['skus']['$get']>,
) {
  return ['v1', '/v1/:parent/skus', args] as const
}

export function useGetV1ParentSkus<TError = unknown>(
  args: InferRequestType<(typeof client.v1)[':parent']['skus']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':parent']['skus']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetV1ParentSkusKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':parent']['skus']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1[':parent'].skus.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ParentSkus<TError = unknown>(
  args: InferRequestType<(typeof client.v1)[':parent']['skus']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':parent']['skus']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetV1ParentSkusKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':parent']['skus']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1[':parent'].skus.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1ParentCheckCloudIdentityAccountsExistKey() {
  return ['v1', '/v1/:parent:checkCloudIdentityAccountsExist', 'POST'] as const
}

export function usePostV1ParentCheckCloudIdentityAccountsExist<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1)[':parent:checkCloudIdentityAccountsExist']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)[':parent:checkCloudIdentityAccountsExist']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ParentCheckCloudIdentityAccountsExistKey()
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
            (typeof client.v1)[':parent:checkCloudIdentityAccountsExist']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1[':parent:checkCloudIdentityAccountsExist'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1ParentListEntitlementChangesKey(
  args: InferRequestType<(typeof client.v1)[':parent:listEntitlementChanges']['$get']>,
) {
  return ['v1', '/v1/:parent:listEntitlementChanges', args] as const
}

export function useGetV1ParentListEntitlementChanges<TError = unknown>(
  args: InferRequestType<(typeof client.v1)[':parent:listEntitlementChanges']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)[':parent:listEntitlementChanges']['$get']>>
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
        ? getGetV1ParentListEntitlementChangesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)[':parent:listEntitlementChanges']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1[':parent:listEntitlementChanges'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ParentListEntitlementChanges<TError = unknown>(
  args: InferRequestType<(typeof client.v1)[':parent:listEntitlementChanges']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)[':parent:listEntitlementChanges']['$get']>>
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
        ? getGetV1ParentListEntitlementChangesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)[':parent:listEntitlementChanges']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1[':parent:listEntitlementChanges'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1ParentListTransferableOffersKey() {
  return ['v1', '/v1/:parent:listTransferableOffers', 'POST'] as const
}

export function usePostV1ParentListTransferableOffers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)[':parent:listTransferableOffers']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)[':parent:listTransferableOffers']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ParentListTransferableOffersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1)[':parent:listTransferableOffers']['$post']> },
      ) => parseResponse(client.v1[':parent:listTransferableOffers'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ParentListTransferableSkusKey() {
  return ['v1', '/v1/:parent:listTransferableSkus', 'POST'] as const
}

export function usePostV1ParentListTransferableSkus<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)[':parent:listTransferableSkus']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)[':parent:listTransferableSkus']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ParentListTransferableSkusKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1)[':parent:listTransferableSkus']['$post']> },
      ) => parseResponse(client.v1[':parent:listTransferableSkus'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ParentTransferEntitlementsKey() {
  return ['v1', '/v1/:parent:transferEntitlements', 'POST'] as const
}

export function usePostV1ParentTransferEntitlements<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)[':parent:transferEntitlements']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)[':parent:transferEntitlements']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ParentTransferEntitlementsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1)[':parent:transferEntitlements']['$post']> },
      ) => parseResponse(client.v1[':parent:transferEntitlements'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ParentTransferEntitlementsToGoogleKey() {
  return ['v1', '/v1/:parent:transferEntitlementsToGoogle', 'POST'] as const
}

export function usePostV1ParentTransferEntitlementsToGoogle<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)[':parent:transferEntitlementsToGoogle']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)[':parent:transferEntitlementsToGoogle']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ParentTransferEntitlementsToGoogleKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1)[':parent:transferEntitlementsToGoogle']['$post']>
        },
      ) =>
        parseResponse(client.v1[':parent:transferEntitlementsToGoogle'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ReportJobFetchReportResultsKey() {
  return ['v1', '/v1/:reportJob:fetchReportResults', 'POST'] as const
}

export function usePostV1ReportJobFetchReportResults<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)[':reportJob:fetchReportResults']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)[':reportJob:fetchReportResults']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ReportJobFetchReportResultsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1)[':reportJob:fetchReportResults']['$post']> },
      ) => parseResponse(client.v1[':reportJob:fetchReportResults'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
