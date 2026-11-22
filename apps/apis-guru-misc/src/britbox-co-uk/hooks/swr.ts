import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getAccountKey() {
  return ['account'] as const
}

export function getAuthorizationKey() {
  return ['authorization'] as const
}

export function getBtKey() {
  return ['bt'] as const
}

export function getCheckSubscriptionKey() {
  return ['check-subscription'] as const
}

export function getConfigKey() {
  return ['config'] as const
}

export function getEeKey() {
  return ['ee'] as const
}

export function getEeBtKey() {
  return ['ee-bt'] as const
}

export function getItemsKey() {
  return ['items'] as const
}

export function getItvKey() {
  return ['itv'] as const
}

export function getListsKey() {
  return ['lists'] as const
}

export function getPageKey() {
  return ['page'] as const
}

export function getPlansKey() {
  return ['plans'] as const
}

export function getRegisterKey() {
  return ['register'] as const
}

export function getRequestPasswordResetKey() {
  return ['request-password-reset'] as const
}

export function getResetPasswordKey() {
  return ['reset-password'] as const
}

export function getSamsungPreviewKey() {
  return ['samsung-preview'] as const
}

export function getSchedulesKey() {
  return ['schedules'] as const
}

export function getSearchKey() {
  return ['search'] as const
}

export function getVerifyEmailKey() {
  return ['verify-email'] as const
}

export function getGetAccountKey(args: InferRequestType<typeof client.account.$get>) {
  return ['account', '/account', args] as const
}

export function useGetAccount<TError = unknown>(
  args: InferRequestType<typeof client.account.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAccountKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.account.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetAccount<TError = unknown>(
  args: InferRequestType<typeof client.account.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAccountKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.account.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPatchAccountKey() {
  return ['account', '/account', 'PATCH'] as const
}

export function usePatchAccount<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.$patch>>>>>
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.account.$patch>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchAccountKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.account.$patch> }) =>
        parseResponse(client.account.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAccountBillingMethodsKey(
  args: InferRequestType<typeof client.account.billing.methods.$get>,
) {
  return ['account', '/account/billing/methods', args] as const
}

export function useGetAccountBillingMethods<TError = unknown>(
  args: InferRequestType<typeof client.account.billing.methods.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.account.billing.methods.$get>>>
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
        ? getGetAccountBillingMethodsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.account.billing.methods.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.account.billing.methods.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountBillingMethods<TError = unknown>(
  args: InferRequestType<typeof client.account.billing.methods.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.account.billing.methods.$get>>>
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
        ? getGetAccountBillingMethodsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.account.billing.methods.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.account.billing.methods.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAccountBillingMethodsKey() {
  return ['account', '/account/billing/methods', 'POST'] as const
}

export function usePostAccountBillingMethods<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.account.billing.methods.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.account.billing.methods.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAccountBillingMethodsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.account.billing.methods.$post> },
      ) => parseResponse(client.account.billing.methods.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAccountBillingMethodsIdKey(
  args: InferRequestType<(typeof client.account.billing.methods)[':id']['$get']>,
) {
  return ['account', '/account/billing/methods/:id', args] as const
}

export function useGetAccountBillingMethodsId<TError = unknown>(
  args: InferRequestType<(typeof client.account.billing.methods)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account.billing.methods)[':id']['$get']>>
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
        ? getGetAccountBillingMethodsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account.billing.methods)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.account.billing.methods[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountBillingMethodsId<TError = unknown>(
  args: InferRequestType<(typeof client.account.billing.methods)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account.billing.methods)[':id']['$get']>>
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
        ? getGetAccountBillingMethodsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account.billing.methods)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.account.billing.methods[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteAccountBillingMethodsIdKey() {
  return ['account', '/account/billing/methods/:id', 'DELETE'] as const
}

export function useDeleteAccountBillingMethodsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account.billing.methods)[':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.account.billing.methods)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAccountBillingMethodsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.account.billing.methods)[':id']['$delete']> },
      ) => parseResponse(client.account.billing.methods[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAccountBillingPurchasesKey(
  args: InferRequestType<typeof client.account.billing.purchases.$get>,
) {
  return ['account', '/account/billing/purchases', args] as const
}

export function useGetAccountBillingPurchases<TError = unknown>(
  args: InferRequestType<typeof client.account.billing.purchases.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.account.billing.purchases.$get>>>
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
        ? getGetAccountBillingPurchasesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.account.billing.purchases.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.account.billing.purchases.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountBillingPurchases<TError = unknown>(
  args: InferRequestType<typeof client.account.billing.purchases.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.account.billing.purchases.$get>>>
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
        ? getGetAccountBillingPurchasesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.account.billing.purchases.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.account.billing.purchases.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAccountBillingPurchasesKey() {
  return ['account', '/account/billing/purchases', 'POST'] as const
}

export function usePostAccountBillingPurchases<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.account.billing.purchases.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.account.billing.purchases.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAccountBillingPurchasesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.account.billing.purchases.$post> },
      ) => parseResponse(client.account.billing.purchases.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutAccountBillingSubscriptionsIdKey() {
  return ['account', '/account/billing/subscriptions/:id', 'PUT'] as const
}

export function usePutAccountBillingSubscriptionsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account.billing.subscriptions)[':id']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.account.billing.subscriptions)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAccountBillingSubscriptionsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.account.billing.subscriptions)[':id']['$put']> },
      ) => parseResponse(client.account.billing.subscriptions[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteAccountBillingSubscriptionsIdKey() {
  return ['account', '/account/billing/subscriptions/:id', 'DELETE'] as const
}

export function useDeleteAccountBillingSubscriptionsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account.billing.subscriptions)[':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.account.billing.subscriptions)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAccountBillingSubscriptionsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.account.billing.subscriptions)[':id']['$delete']>
        },
      ) => parseResponse(client.account.billing.subscriptions[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAccountDevicesKey(
  args: InferRequestType<typeof client.account.devices.$get>,
) {
  return ['account', '/account/devices', args] as const
}

export function useGetAccountDevices<TError = unknown>(
  args: InferRequestType<typeof client.account.devices.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.devices.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAccountDevicesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.devices.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.account.devices.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountDevices<TError = unknown>(
  args: InferRequestType<typeof client.account.devices.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.devices.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAccountDevicesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.devices.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.account.devices.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAccountDevicesKey() {
  return ['account', '/account/devices', 'POST'] as const
}

export function usePostAccountDevices<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.devices.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.account.devices.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAccountDevicesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.account.devices.$post> }) =>
        parseResponse(client.account.devices.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAccountDevicesAuthorizationKey() {
  return ['account', '/account/devices/authorization', 'POST'] as const
}

export function usePostAccountDevicesAuthorization<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.account.devices.authorization.$post>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.account.devices.authorization.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAccountDevicesAuthorizationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.account.devices.authorization.$post> },
      ) => parseResponse(client.account.devices.authorization.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAccountDevicesIdKey(
  args: InferRequestType<(typeof client.account.devices)[':id']['$get']>,
) {
  return ['account', '/account/devices/:id', args] as const
}

export function useGetAccountDevicesId<TError = unknown>(
  args: InferRequestType<(typeof client.account.devices)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.account.devices)[':id']['$get']>>>
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
        ? getGetAccountDevicesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.account.devices)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.account.devices[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountDevicesId<TError = unknown>(
  args: InferRequestType<(typeof client.account.devices)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.account.devices)[':id']['$get']>>>
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
        ? getGetAccountDevicesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.account.devices)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.account.devices[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteAccountDevicesIdKey() {
  return ['account', '/account/devices/:id', 'DELETE'] as const
}

export function useDeleteAccountDevicesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account.devices)[':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.account.devices)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAccountDevicesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.account.devices)[':id']['$delete']> },
      ) => parseResponse(client.account.devices[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutAccountDevicesIdNameKey() {
  return ['account', '/account/devices/:id/name', 'PUT'] as const
}

export function usePutAccountDevicesIdName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account.devices)[':id']['name']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.account.devices)[':id']['name']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAccountDevicesIdNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.account.devices)[':id']['name']['$put']> },
      ) => parseResponse(client.account.devices[':id'].name.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAccountEntitlementsKey(
  args: InferRequestType<typeof client.account.entitlements.$get>,
) {
  return ['account', '/account/entitlements', args] as const
}

export function useGetAccountEntitlements<TError = unknown>(
  args: InferRequestType<typeof client.account.entitlements.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.account.entitlements.$get>>>
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
        ? getGetAccountEntitlementsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.account.entitlements.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.account.entitlements.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountEntitlements<TError = unknown>(
  args: InferRequestType<typeof client.account.entitlements.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.account.entitlements.$get>>>
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
        ? getGetAccountEntitlementsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.account.entitlements.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.account.entitlements.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAccountItemsIdVideosKey(
  args: InferRequestType<(typeof client.account.items)[':id']['videos']['$get']>,
) {
  return ['account', '/account/items/:id/videos', args] as const
}

export function useGetAccountItemsIdVideos<TError = unknown>(
  args: InferRequestType<(typeof client.account.items)[':id']['videos']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account.items)[':id']['videos']['$get']>>
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
        ? getGetAccountItemsIdVideosKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account.items)[':id']['videos']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.account.items[':id'].videos.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountItemsIdVideos<TError = unknown>(
  args: InferRequestType<(typeof client.account.items)[':id']['videos']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account.items)[':id']['videos']['$get']>>
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
        ? getGetAccountItemsIdVideosKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account.items)[':id']['videos']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.account.items[':id'].videos.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAccountItemsIdVideosGuardedKey(
  args: InferRequestType<(typeof client.account.items)[':id']['videos-guarded']['$get']>,
) {
  return ['account', '/account/items/:id/videos-guarded', args] as const
}

export function useGetAccountItemsIdVideosGuarded<TError = unknown>(
  args: InferRequestType<(typeof client.account.items)[':id']['videos-guarded']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account.items)[':id']['videos-guarded']['$get']>>
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
        ? getGetAccountItemsIdVideosGuardedKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account.items)[':id']['videos-guarded']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.account.items[':id']['videos-guarded'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountItemsIdVideosGuarded<TError = unknown>(
  args: InferRequestType<(typeof client.account.items)[':id']['videos-guarded']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account.items)[':id']['videos-guarded']['$get']>>
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
        ? getGetAccountItemsIdVideosGuardedKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account.items)[':id']['videos-guarded']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.account.items[':id']['videos-guarded'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAccountNonceKey(args: InferRequestType<typeof client.account.nonce.$get>) {
  return ['account', '/account/nonce', args] as const
}

export function useGetAccountNonce<TError = unknown>(
  args: InferRequestType<typeof client.account.nonce.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.nonce.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAccountNonceKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.nonce.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.account.nonce.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountNonce<TError = unknown>(
  args: InferRequestType<typeof client.account.nonce.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.nonce.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAccountNonceKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.nonce.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.account.nonce.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutAccountPasswordKey() {
  return ['account', '/account/password', 'PUT'] as const
}

export function usePutAccountPassword<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.password.$put>>>>
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.account.password.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAccountPasswordKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.account.password.$put> }) =>
        parseResponse(client.account.password.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutAccountPinKey() {
  return ['account', '/account/pin', 'PUT'] as const
}

export function usePutAccountPin<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.pin.$put>>>>>
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.account.pin.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAccountPinKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.account.pin.$put> }) =>
        parseResponse(client.account.pin.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAccountProfileKey(
  args: InferRequestType<typeof client.account.profile.$get>,
) {
  return ['account', '/account/profile', args] as const
}

export function useGetAccountProfile<TError = unknown>(
  args: InferRequestType<typeof client.account.profile.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.profile.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAccountProfileKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.profile.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.account.profile.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountProfile<TError = unknown>(
  args: InferRequestType<typeof client.account.profile.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.profile.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAccountProfileKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.profile.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.account.profile.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAccountProfileBookmarksKey(
  args: InferRequestType<typeof client.account.profile.bookmarks.$get>,
) {
  return ['account', '/account/profile/bookmarks', args] as const
}

export function useGetAccountProfileBookmarks<TError = unknown>(
  args: InferRequestType<typeof client.account.profile.bookmarks.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.account.profile.bookmarks.$get>>>
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
        ? getGetAccountProfileBookmarksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.account.profile.bookmarks.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.account.profile.bookmarks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountProfileBookmarks<TError = unknown>(
  args: InferRequestType<typeof client.account.profile.bookmarks.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.account.profile.bookmarks.$get>>>
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
        ? getGetAccountProfileBookmarksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.account.profile.bookmarks.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.account.profile.bookmarks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAccountProfileBookmarksListKey(
  args: InferRequestType<typeof client.account.profile.bookmarks.list.$get>,
) {
  return ['account', '/account/profile/bookmarks/list', args] as const
}

export function useGetAccountProfileBookmarksList<TError = unknown>(
  args: InferRequestType<typeof client.account.profile.bookmarks.list.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.account.profile.bookmarks.list.$get>>
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
        ? getGetAccountProfileBookmarksListKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.account.profile.bookmarks.list.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.account.profile.bookmarks.list.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountProfileBookmarksList<TError = unknown>(
  args: InferRequestType<typeof client.account.profile.bookmarks.list.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.account.profile.bookmarks.list.$get>>
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
        ? getGetAccountProfileBookmarksListKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.account.profile.bookmarks.list.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.account.profile.bookmarks.list.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAccountProfileBookmarksItemIdKey(
  args: InferRequestType<(typeof client.account.profile.bookmarks)[':itemId']['$get']>,
) {
  return ['account', '/account/profile/bookmarks/:itemId', args] as const
}

export function useGetAccountProfileBookmarksItemId<TError = unknown>(
  args: InferRequestType<(typeof client.account.profile.bookmarks)[':itemId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account.profile.bookmarks)[':itemId']['$get']>>
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
        ? getGetAccountProfileBookmarksItemIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account.profile.bookmarks)[':itemId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.account.profile.bookmarks[':itemId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountProfileBookmarksItemId<TError = unknown>(
  args: InferRequestType<(typeof client.account.profile.bookmarks)[':itemId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account.profile.bookmarks)[':itemId']['$get']>>
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
        ? getGetAccountProfileBookmarksItemIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account.profile.bookmarks)[':itemId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.account.profile.bookmarks[':itemId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutAccountProfileBookmarksItemIdKey() {
  return ['account', '/account/profile/bookmarks/:itemId', 'PUT'] as const
}

export function usePutAccountProfileBookmarksItemId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.account.profile.bookmarks)[':itemId']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.account.profile.bookmarks)[':itemId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAccountProfileBookmarksItemIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.account.profile.bookmarks)[':itemId']['$put']> },
      ) => parseResponse(client.account.profile.bookmarks[':itemId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteAccountProfileBookmarksItemIdKey() {
  return ['account', '/account/profile/bookmarks/:itemId', 'DELETE'] as const
}

export function useDeleteAccountProfileBookmarksItemId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account.profile.bookmarks)[':itemId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.account.profile.bookmarks)[':itemId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAccountProfileBookmarksItemIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.account.profile.bookmarks)[':itemId']['$delete']>
        },
      ) => parseResponse(client.account.profile.bookmarks[':itemId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAccountProfileContinueWatchingListKey(
  args: InferRequestType<(typeof client.account.profile)['continue-watching']['list']['$get']>,
) {
  return ['account', '/account/profile/continue-watching/list', args] as const
}

export function useGetAccountProfileContinueWatchingList<TError = unknown>(
  args: InferRequestType<(typeof client.account.profile)['continue-watching']['list']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.account.profile)['continue-watching']['list']['$get']>
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
        ? getGetAccountProfileContinueWatchingListKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.account.profile)['continue-watching']['list']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.account.profile['continue-watching'].list.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountProfileContinueWatchingList<TError = unknown>(
  args: InferRequestType<(typeof client.account.profile)['continue-watching']['list']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.account.profile)['continue-watching']['list']['$get']>
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
        ? getGetAccountProfileContinueWatchingListKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.account.profile)['continue-watching']['list']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.account.profile['continue-watching'].list.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAccountProfileItemsItemIdNextKey(
  args: InferRequestType<(typeof client.account.profile.items)[':itemId']['next']['$get']>,
) {
  return ['account', '/account/profile/items/:itemId/next', args] as const
}

export function useGetAccountProfileItemsItemIdNext<TError = unknown>(
  args: InferRequestType<(typeof client.account.profile.items)[':itemId']['next']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account.profile.items)[':itemId']['next']['$get']>>
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
        ? getGetAccountProfileItemsItemIdNextKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account.profile.items)[':itemId']['next']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.account.profile.items[':itemId'].next.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountProfileItemsItemIdNext<TError = unknown>(
  args: InferRequestType<(typeof client.account.profile.items)[':itemId']['next']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account.profile.items)[':itemId']['next']['$get']>>
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
        ? getGetAccountProfileItemsItemIdNextKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account.profile.items)[':itemId']['next']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.account.profile.items[':itemId'].next.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAccountProfileRatingsKey(
  args: InferRequestType<typeof client.account.profile.ratings.$get>,
) {
  return ['account', '/account/profile/ratings', args] as const
}

export function useGetAccountProfileRatings<TError = unknown>(
  args: InferRequestType<typeof client.account.profile.ratings.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.account.profile.ratings.$get>>>
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
        ? getGetAccountProfileRatingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.account.profile.ratings.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.account.profile.ratings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountProfileRatings<TError = unknown>(
  args: InferRequestType<typeof client.account.profile.ratings.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.account.profile.ratings.$get>>>
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
        ? getGetAccountProfileRatingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.account.profile.ratings.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.account.profile.ratings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAccountProfileRatingsListKey(
  args: InferRequestType<typeof client.account.profile.ratings.list.$get>,
) {
  return ['account', '/account/profile/ratings/list', args] as const
}

export function useGetAccountProfileRatingsList<TError = unknown>(
  args: InferRequestType<typeof client.account.profile.ratings.list.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.account.profile.ratings.list.$get>>>
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
        ? getGetAccountProfileRatingsListKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.account.profile.ratings.list.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.account.profile.ratings.list.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountProfileRatingsList<TError = unknown>(
  args: InferRequestType<typeof client.account.profile.ratings.list.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.account.profile.ratings.list.$get>>>
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
        ? getGetAccountProfileRatingsListKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.account.profile.ratings.list.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.account.profile.ratings.list.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAccountProfileRatingsItemIdKey(
  args: InferRequestType<(typeof client.account.profile.ratings)[':itemId']['$get']>,
) {
  return ['account', '/account/profile/ratings/:itemId', args] as const
}

export function useGetAccountProfileRatingsItemId<TError = unknown>(
  args: InferRequestType<(typeof client.account.profile.ratings)[':itemId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account.profile.ratings)[':itemId']['$get']>>
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
        ? getGetAccountProfileRatingsItemIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account.profile.ratings)[':itemId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.account.profile.ratings[':itemId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountProfileRatingsItemId<TError = unknown>(
  args: InferRequestType<(typeof client.account.profile.ratings)[':itemId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account.profile.ratings)[':itemId']['$get']>>
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
        ? getGetAccountProfileRatingsItemIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account.profile.ratings)[':itemId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.account.profile.ratings[':itemId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutAccountProfileRatingsItemIdKey() {
  return ['account', '/account/profile/ratings/:itemId', 'PUT'] as const
}

export function usePutAccountProfileRatingsItemId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.account.profile.ratings)[':itemId']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.account.profile.ratings)[':itemId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAccountProfileRatingsItemIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.account.profile.ratings)[':itemId']['$put']> },
      ) => parseResponse(client.account.profile.ratings[':itemId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAccountProfileWatchedKey(
  args: InferRequestType<typeof client.account.profile.watched.$get>,
) {
  return ['account', '/account/profile/watched', args] as const
}

export function useGetAccountProfileWatched<TError = unknown>(
  args: InferRequestType<typeof client.account.profile.watched.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.account.profile.watched.$get>>>
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
        ? getGetAccountProfileWatchedKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.account.profile.watched.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.account.profile.watched.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountProfileWatched<TError = unknown>(
  args: InferRequestType<typeof client.account.profile.watched.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.account.profile.watched.$get>>>
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
        ? getGetAccountProfileWatchedKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.account.profile.watched.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.account.profile.watched.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteAccountProfileWatchedKey() {
  return ['account', '/account/profile/watched', 'DELETE'] as const
}

export function useDeleteAccountProfileWatched<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.account.profile.watched.$delete>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.account.profile.watched.$delete>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAccountProfileWatchedKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.account.profile.watched.$delete> },
      ) => parseResponse(client.account.profile.watched.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAccountProfileWatchedListKey(
  args: InferRequestType<typeof client.account.profile.watched.list.$get>,
) {
  return ['account', '/account/profile/watched/list', args] as const
}

export function useGetAccountProfileWatchedList<TError = unknown>(
  args: InferRequestType<typeof client.account.profile.watched.list.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.account.profile.watched.list.$get>>>
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
        ? getGetAccountProfileWatchedListKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.account.profile.watched.list.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.account.profile.watched.list.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountProfileWatchedList<TError = unknown>(
  args: InferRequestType<typeof client.account.profile.watched.list.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.account.profile.watched.list.$get>>>
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
        ? getGetAccountProfileWatchedListKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.account.profile.watched.list.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.account.profile.watched.list.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAccountProfileWatchedItemIdKey(
  args: InferRequestType<(typeof client.account.profile.watched)[':itemId']['$get']>,
) {
  return ['account', '/account/profile/watched/:itemId', args] as const
}

export function useGetAccountProfileWatchedItemId<TError = unknown>(
  args: InferRequestType<(typeof client.account.profile.watched)[':itemId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account.profile.watched)[':itemId']['$get']>>
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
        ? getGetAccountProfileWatchedItemIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account.profile.watched)[':itemId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.account.profile.watched[':itemId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountProfileWatchedItemId<TError = unknown>(
  args: InferRequestType<(typeof client.account.profile.watched)[':itemId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account.profile.watched)[':itemId']['$get']>>
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
        ? getGetAccountProfileWatchedItemIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account.profile.watched)[':itemId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.account.profile.watched[':itemId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutAccountProfileWatchedItemIdKey() {
  return ['account', '/account/profile/watched/:itemId', 'PUT'] as const
}

export function usePutAccountProfileWatchedItemId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account.profile.watched)[':itemId']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.account.profile.watched)[':itemId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAccountProfileWatchedItemIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.account.profile.watched)[':itemId']['$put']> },
      ) => parseResponse(client.account.profile.watched[':itemId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAccountProfilesKey() {
  return ['account', '/account/profiles', 'POST'] as const
}

export function usePostAccountProfiles<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.profiles.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.account.profiles.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAccountProfilesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.account.profiles.$post> }) =>
        parseResponse(client.account.profiles.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAccountProfilesIdKey(
  args: InferRequestType<(typeof client.account.profiles)[':id']['$get']>,
) {
  return ['account', '/account/profiles/:id', args] as const
}

export function useGetAccountProfilesId<TError = unknown>(
  args: InferRequestType<(typeof client.account.profiles)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.account.profiles)[':id']['$get']>>>
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
        ? getGetAccountProfilesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.account.profiles)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.account.profiles[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountProfilesId<TError = unknown>(
  args: InferRequestType<(typeof client.account.profiles)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.account.profiles)[':id']['$get']>>>
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
        ? getGetAccountProfilesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.account.profiles)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.account.profiles[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteAccountProfilesIdKey() {
  return ['account', '/account/profiles/:id', 'DELETE'] as const
}

export function useDeleteAccountProfilesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account.profiles)[':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.account.profiles)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAccountProfilesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.account.profiles)[':id']['$delete']> },
      ) => parseResponse(client.account.profiles[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchAccountProfilesIdKey() {
  return ['account', '/account/profiles/:id', 'PATCH'] as const
}

export function usePatchAccountProfilesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account.profiles)[':id']['$patch']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.account.profiles)[':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchAccountProfilesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.account.profiles)[':id']['$patch']> },
      ) => parseResponse(client.account.profiles[':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAccountRequestEmailVerificationKey() {
  return ['account', '/account/request-email-verification', 'POST'] as const
}

export function usePostAccountRequestEmailVerification<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account)['request-email-verification']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.account)['request-email-verification']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAccountRequestEmailVerificationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.account)['request-email-verification']['$post']>
        },
      ) => parseResponse(client.account['request-email-verification'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAuthorizationKey() {
  return ['authorization', '/authorization', 'POST'] as const
}

export function usePostAuthorization<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.authorization.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.authorization.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAuthorizationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.authorization.$post> }) =>
        parseResponse(client.authorization.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteAuthorizationKey() {
  return ['authorization', '/authorization', 'DELETE'] as const
}

export function useDeleteAuthorization<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.authorization.$delete>>>>
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.authorization.$delete>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAuthorizationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.authorization.$delete> }) =>
        parseResponse(client.authorization.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAuthorizationDeviceKey() {
  return ['authorization', '/authorization/device', 'POST'] as const
}

export function usePostAuthorizationDevice<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.authorization.device.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.authorization.device.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAuthorizationDeviceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.authorization.device.$post> },
      ) => parseResponse(client.authorization.device.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAuthorizationDeviceCodeKey() {
  return ['authorization', '/authorization/device/code', 'POST'] as const
}

export function usePostAuthorizationDeviceCode<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.authorization.device.code.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.authorization.device.code.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAuthorizationDeviceCodeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.authorization.device.code.$post> },
      ) => parseResponse(client.authorization.device.code.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAuthorizationProfileKey() {
  return ['authorization', '/authorization/profile', 'POST'] as const
}

export function usePostAuthorizationProfile<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.authorization.profile.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.authorization.profile.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAuthorizationProfileKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.authorization.profile.$post> },
      ) => parseResponse(client.authorization.profile.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAuthorizationRefreshKey() {
  return ['authorization', '/authorization/refresh', 'POST'] as const
}

export function usePostAuthorizationRefresh<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.authorization.refresh.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.authorization.refresh.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAuthorizationRefreshKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.authorization.refresh.$post> },
      ) => parseResponse(client.authorization.refresh.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAuthorizationSsoKey() {
  return ['authorization', '/authorization/sso', 'POST'] as const
}

export function usePostAuthorizationSso<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.authorization.sso.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.authorization.sso.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAuthorizationSsoKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.authorization.sso.$post> }) =>
        parseResponse(client.authorization.sso.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetBtPlanTokenKey(
  args: InferRequestType<(typeof client.bt.plan)[':token']['$get']>,
) {
  return ['bt', '/bt/plan/:token', args] as const
}

export function useGetBtPlanToken<TError = unknown>(
  args: InferRequestType<(typeof client.bt.plan)[':token']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.bt.plan)[':token']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetBtPlanTokenKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.bt.plan)[':token']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.bt.plan[':token'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBtPlanToken<TError = unknown>(
  args: InferRequestType<(typeof client.bt.plan)[':token']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.bt.plan)[':token']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetBtPlanTokenKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.bt.plan)[':token']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.bt.plan[':token'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBtPlansKey(args: InferRequestType<typeof client.bt.plans.$get>) {
  return ['bt', '/bt/plans', args] as const
}

export function useGetBtPlans<TError = unknown>(
  args: InferRequestType<typeof client.bt.plans.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bt.plans.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetBtPlansKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bt.plans.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.bt.plans.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetBtPlans<TError = unknown>(
  args: InferRequestType<typeof client.bt.plans.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bt.plans.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetBtPlansKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bt.plans.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.bt.plans.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostBtTokenAssignKey() {
  return ['bt', '/bt/token/assign', 'POST'] as const
}

export function usePostBtTokenAssign<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bt.token.assign.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.bt.token.assign.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBtTokenAssignKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.bt.token.assign.$post> }) =>
        parseResponse(client.bt.token.assign.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetBtTokenValidateKey(
  args: InferRequestType<typeof client.bt.token.validate.$get>,
) {
  return ['bt', '/bt/token/validate', args] as const
}

export function useGetBtTokenValidate<TError = unknown>(
  args: InferRequestType<typeof client.bt.token.validate.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bt.token.validate.$get>>>>
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
        ? getGetBtTokenValidateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bt.token.validate.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.bt.token.validate.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBtTokenValidate<TError = unknown>(
  args: InferRequestType<typeof client.bt.token.validate.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bt.token.validate.$get>>>>
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
        ? getGetBtTokenValidateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bt.token.validate.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.bt.token.validate.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCheckSubscriptionIdKey(
  args: InferRequestType<(typeof client)['check-subscription'][':id']['$get']>,
) {
  return ['check-subscription', '/check-subscription/:id', args] as const
}

export function useGetCheckSubscriptionId<TError = unknown>(
  args: InferRequestType<(typeof client)['check-subscription'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['check-subscription'][':id']['$get']>>
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
        ? getGetCheckSubscriptionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['check-subscription'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['check-subscription'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCheckSubscriptionId<TError = unknown>(
  args: InferRequestType<(typeof client)['check-subscription'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['check-subscription'][':id']['$get']>>
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
        ? getGetCheckSubscriptionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['check-subscription'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['check-subscription'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetConfigKey(args: InferRequestType<typeof client.config.$get>) {
  return ['config', '/config', args] as const
}

export function useGetConfig<TError = unknown>(
  args: InferRequestType<typeof client.config.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.config.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetConfigKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.config.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.config.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetConfig<TError = unknown>(
  args: InferRequestType<typeof client.config.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.config.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetConfigKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.config.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.config.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetEeBtEligibilityKey(
  args: InferRequestType<(typeof client)['ee-bt']['eligibility']['$get']>,
) {
  return ['ee-bt', '/ee-bt/eligibility', args] as const
}

export function useGetEeBtEligibility<TError = unknown>(
  args: InferRequestType<(typeof client)['ee-bt']['eligibility']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['ee-bt']['eligibility']['$get']>>>
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
        ? getGetEeBtEligibilityKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['ee-bt']['eligibility']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['ee-bt'].eligibility.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEeBtEligibility<TError = unknown>(
  args: InferRequestType<(typeof client)['ee-bt']['eligibility']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['ee-bt']['eligibility']['$get']>>>
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
        ? getGetEeBtEligibilityKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['ee-bt']['eligibility']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['ee-bt'].eligibility.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostEeMsisdnKey() {
  return ['ee', '/ee/msisdn', 'POST'] as const
}

export function usePostEeMsisdn<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ee.msisdn.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.ee.msisdn.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostEeMsisdnKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.ee.msisdn.$post> }) =>
        parseResponse(client.ee.msisdn.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostEeOffersKey() {
  return ['ee', '/ee/offers', 'POST'] as const
}

export function usePostEeOffers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ee.offers.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.ee.offers.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostEeOffersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.ee.offers.$post> }) =>
        parseResponse(client.ee.offers.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutEePinKey() {
  return ['ee', '/ee/pin', 'PUT'] as const
}

export function usePutEePin<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ee.pin.$put>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.ee.pin.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutEePinKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.ee.pin.$put> }) =>
        parseResponse(client.ee.pin.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostEePinKey() {
  return ['ee', '/ee/pin', 'POST'] as const
}

export function usePostEePin<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ee.pin.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.ee.pin.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostEePinKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.ee.pin.$post> }) =>
        parseResponse(client.ee.pin.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetEePlansKey(args: InferRequestType<typeof client.ee.plans.$get>) {
  return ['ee', '/ee/plans', args] as const
}

export function useGetEePlans<TError = unknown>(
  args: InferRequestType<typeof client.ee.plans.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ee.plans.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetEePlansKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ee.plans.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.ee.plans.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetEePlans<TError = unknown>(
  args: InferRequestType<typeof client.ee.plans.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ee.plans.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetEePlansKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ee.plans.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.ee.plans.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetEePlansIdKey(
  args: InferRequestType<(typeof client.ee.plans)[':id']['$get']>,
) {
  return ['ee', '/ee/plans/:id', args] as const
}

export function useGetEePlansId<TError = unknown>(
  args: InferRequestType<(typeof client.ee.plans)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.ee.plans)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetEePlansIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.ee.plans)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ee.plans[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEePlansId<TError = unknown>(
  args: InferRequestType<(typeof client.ee.plans)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.ee.plans)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetEePlansIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.ee.plans)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ee.plans[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEeTokenCreateKey() {
  return ['ee', '/ee/token/create'] as const
}

export function useGetEeTokenCreate<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ee.token.create.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetEeTokenCreateKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ee.token.create.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ee.token.create.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEeTokenCreate<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ee.token.create.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetEeTokenCreateKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ee.token.create.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ee.token.create.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetItemsIdKey(args: InferRequestType<(typeof client.items)[':id']['$get']>) {
  return ['items', '/items/:id', args] as const
}

export function useGetItemsId<TError = unknown>(
  args: InferRequestType<(typeof client.items)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.items)[':id']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetItemsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.items)[':id']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.items[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetItemsId<TError = unknown>(
  args: InferRequestType<(typeof client.items)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.items)[':id']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetItemsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.items)[':id']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.items[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetItemsIdChildrenKey(
  args: InferRequestType<(typeof client.items)[':id']['children']['$get']>,
) {
  return ['items', '/items/:id/children', args] as const
}

export function useGetItemsIdChildren<TError = unknown>(
  args: InferRequestType<(typeof client.items)[':id']['children']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.items)[':id']['children']['$get']>>
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
        ? getGetItemsIdChildrenKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.items)[':id']['children']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.items[':id'].children.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetItemsIdChildren<TError = unknown>(
  args: InferRequestType<(typeof client.items)[':id']['children']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.items)[':id']['children']['$get']>>
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
        ? getGetItemsIdChildrenKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.items)[':id']['children']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.items[':id'].children.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetItemsIdRelatedKey(
  args: InferRequestType<(typeof client.items)[':id']['related']['$get']>,
) {
  return ['items', '/items/:id/related', args] as const
}

export function useGetItemsIdRelated<TError = unknown>(
  args: InferRequestType<(typeof client.items)[':id']['related']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.items)[':id']['related']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetItemsIdRelatedKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.items)[':id']['related']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.items[':id'].related.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetItemsIdRelated<TError = unknown>(
  args: InferRequestType<(typeof client.items)[':id']['related']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.items)[':id']['related']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetItemsIdRelatedKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.items)[':id']['related']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.items[':id'].related.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetItemsIdVideosKey(
  args: InferRequestType<(typeof client.items)[':id']['videos']['$get']>,
) {
  return ['items', '/items/:id/videos', args] as const
}

export function useGetItemsIdVideos<TError = unknown>(
  args: InferRequestType<(typeof client.items)[':id']['videos']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.items)[':id']['videos']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetItemsIdVideosKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.items)[':id']['videos']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.items[':id'].videos.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetItemsIdVideos<TError = unknown>(
  args: InferRequestType<(typeof client.items)[':id']['videos']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.items)[':id']['videos']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetItemsIdVideosKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.items)[':id']['videos']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.items[':id'].videos.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetItemsItemIdNextKey(
  args: InferRequestType<(typeof client.items)[':itemId']['next']['$get']>,
) {
  return ['items', '/items/:itemId/next', args] as const
}

export function useGetItemsItemIdNext<TError = unknown>(
  args: InferRequestType<(typeof client.items)[':itemId']['next']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.items)[':itemId']['next']['$get']>>
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
        ? getGetItemsItemIdNextKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.items)[':itemId']['next']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.items[':itemId'].next.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetItemsItemIdNext<TError = unknown>(
  args: InferRequestType<(typeof client.items)[':itemId']['next']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.items)[':itemId']['next']['$get']>>
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
        ? getGetItemsItemIdNextKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.items)[':itemId']['next']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.items[':itemId'].next.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostItvBillinghistoryPlatformKey() {
  return ['itv', '/itv/billinghistory/:platform', 'POST'] as const
}

export function usePostItvBillinghistoryPlatform<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.itv.billinghistory)[':platform']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.itv.billinghistory)[':platform']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostItvBillinghistoryPlatformKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.itv.billinghistory)[':platform']['$post']> },
      ) => parseResponse(client.itv.billinghistory[':platform'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutItvCardsPlatformKey() {
  return ['itv', '/itv/cards/:platform', 'PUT'] as const
}

export function usePutItvCardsPlatform<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.itv.cards)[':platform']['$put']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.itv.cards)[':platform']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutItvCardsPlatformKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.itv.cards)[':platform']['$put']> },
      ) => parseResponse(client.itv.cards[':platform'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostItvCardsPlatformKey() {
  return ['itv', '/itv/cards/:platform', 'POST'] as const
}

export function usePostItvCardsPlatform<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.itv.cards)[':platform']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.itv.cards)[':platform']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostItvCardsPlatformKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.itv.cards)[':platform']['$post']> },
      ) => parseResponse(client.itv.cards[':platform'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostItvChangeemailKey() {
  return ['itv', '/itv/changeemail', 'POST'] as const
}

export function usePostItvChangeemail<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.itv.changeemail.$post>>>>
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.itv.changeemail.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostItvChangeemailKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.itv.changeemail.$post> }) =>
        parseResponse(client.itv.changeemail.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostItvChangemarketingKey() {
  return ['itv', '/itv/changemarketing', 'POST'] as const
}

export function usePostItvChangemarketing<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.itv.changemarketing.$post>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.itv.changemarketing.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostItvChangemarketingKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.itv.changemarketing.$post> }) =>
        parseResponse(client.itv.changemarketing.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostItvDeleteaccountKey() {
  return ['itv', '/itv/deleteaccount', 'POST'] as const
}

export function usePostItvDeleteaccount<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.itv.deleteaccount.$post>>>>
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.itv.deleteaccount.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostItvDeleteaccountKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.itv.deleteaccount.$post> }) =>
        parseResponse(client.itv.deleteaccount.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetItvEntitlementsCurrentKey(
  args: InferRequestType<typeof client.itv.entitlements.current.$get>,
) {
  return ['itv', '/itv/entitlements/current', args] as const
}

export function useGetItvEntitlementsCurrent<TError = unknown>(
  args: InferRequestType<typeof client.itv.entitlements.current.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.itv.entitlements.current.$get>>>
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
        ? getGetItvEntitlementsCurrentKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.itv.entitlements.current.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.itv.entitlements.current.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetItvEntitlementsCurrent<TError = unknown>(
  args: InferRequestType<typeof client.itv.entitlements.current.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.itv.entitlements.current.$get>>>
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
        ? getGetItvEntitlementsCurrentKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.itv.entitlements.current.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.itv.entitlements.current.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetItvEntitlementsHistoryKey(
  args: InferRequestType<typeof client.itv.entitlements.history.$get>,
) {
  return ['itv', '/itv/entitlements/history', args] as const
}

export function useGetItvEntitlementsHistory<TError = unknown>(
  args: InferRequestType<typeof client.itv.entitlements.history.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.itv.entitlements.history.$get>>>
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
        ? getGetItvEntitlementsHistoryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.itv.entitlements.history.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.itv.entitlements.history.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetItvEntitlementsHistory<TError = unknown>(
  args: InferRequestType<typeof client.itv.entitlements.history.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.itv.entitlements.history.$get>>>
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
        ? getGetItvEntitlementsHistoryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.itv.entitlements.history.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.itv.entitlements.history.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetItvFeatureFlagFeatureKey(
  args: InferRequestType<(typeof client.itv.featureFlag)[':feature']['$get']>,
) {
  return ['itv', '/itv/featureFlag/:feature', args] as const
}

export function useGetItvFeatureFlagFeature<TError = unknown>(
  args: InferRequestType<(typeof client.itv.featureFlag)[':feature']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.itv.featureFlag)[':feature']['$get']>>
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
        ? getGetItvFeatureFlagFeatureKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.itv.featureFlag)[':feature']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.itv.featureFlag[':feature'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetItvFeatureFlagFeature<TError = unknown>(
  args: InferRequestType<(typeof client.itv.featureFlag)[':feature']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.itv.featureFlag)[':feature']['$get']>>
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
        ? getGetItvFeatureFlagFeatureKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.itv.featureFlag)[':feature']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.itv.featureFlag[':feature'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostItvGooglepaySubscriptionKey() {
  return ['itv', '/itv/googlepay/subscription', 'POST'] as const
}

export function usePostItvGooglepaySubscription<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.itv.googlepay.subscription.$post>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.itv.googlepay.subscription.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostItvGooglepaySubscriptionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.itv.googlepay.subscription.$post> },
      ) => parseResponse(client.itv.googlepay.subscription.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetItvHadEntitlementsKey(
  args: InferRequestType<typeof client.itv.had.entitlements.$get>,
) {
  return ['itv', '/itv/had/entitlements', args] as const
}

export function useGetItvHadEntitlements<TError = unknown>(
  args: InferRequestType<typeof client.itv.had.entitlements.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.itv.had.entitlements.$get>>>
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
        ? getGetItvHadEntitlementsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.itv.had.entitlements.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.itv.had.entitlements.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetItvHadEntitlements<TError = unknown>(
  args: InferRequestType<typeof client.itv.had.entitlements.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.itv.had.entitlements.$get>>>
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
        ? getGetItvHadEntitlementsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.itv.had.entitlements.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.itv.had.entitlements.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostItvItemsClipsKey() {
  return ['itv', '/itv/items/clips', 'POST'] as const
}

export function usePostItvItemsClips<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.itv.items.clips.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.itv.items.clips.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostItvItemsClipsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.itv.items.clips.$post> }) =>
        parseResponse(client.itv.items.clips.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostItvItemsDownloadableKey() {
  return ['itv', '/itv/items/downloadable', 'POST'] as const
}

export function usePostItvItemsDownloadable<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.itv.items.downloadable.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.itv.items.downloadable.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostItvItemsDownloadableKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.itv.items.downloadable.$post> },
      ) => parseResponse(client.itv.items.downloadable.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetItvItemsummaryExternalIdKey(
  args: InferRequestType<(typeof client.itv.itemsummary)[':externalId']['$get']>,
) {
  return ['itv', '/itv/itemsummary/:externalId', args] as const
}

export function useGetItvItemsummaryExternalId<TError = unknown>(
  args: InferRequestType<(typeof client.itv.itemsummary)[':externalId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.itv.itemsummary)[':externalId']['$get']>>
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
        ? getGetItvItemsummaryExternalIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.itv.itemsummary)[':externalId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.itv.itemsummary[':externalId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetItvItemsummaryExternalId<TError = unknown>(
  args: InferRequestType<(typeof client.itv.itemsummary)[':externalId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.itv.itemsummary)[':externalId']['$get']>>
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
        ? getGetItvItemsummaryExternalIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.itv.itemsummary)[':externalId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.itv.itemsummary[':externalId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetItvPageKey(args: InferRequestType<typeof client.itv.page.$get>) {
  return ['itv', '/itv/page', args] as const
}

export function useGetItvPage<TError = unknown>(
  args: InferRequestType<typeof client.itv.page.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.itv.page.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetItvPageKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.itv.page.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.itv.page.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetItvPage<TError = unknown>(
  args: InferRequestType<typeof client.itv.page.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.itv.page.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetItvPageKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.itv.page.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.itv.page.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostItvPinauthorizationKey() {
  return ['itv', '/itv/pinauthorization', 'POST'] as const
}

export function usePostItvPinauthorization<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.itv.pinauthorization.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.itv.pinauthorization.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostItvPinauthorizationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.itv.pinauthorization.$post> },
      ) => parseResponse(client.itv.pinauthorization.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostItvPlanPlatformKey() {
  return ['itv', '/itv/plan/:platform', 'POST'] as const
}

export function usePostItvPlanPlatform<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.itv.plan)[':platform']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.itv.plan)[':platform']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostItvPlanPlatformKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.itv.plan)[':platform']['$post']> },
      ) => parseResponse(client.itv.plan[':platform'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetItvPlansPlatformKey(
  args: InferRequestType<(typeof client.itv.plans)[':platform']['$get']>,
) {
  return ['itv', '/itv/plans/:platform', args] as const
}

export function useGetItvPlansPlatform<TError = unknown>(
  args: InferRequestType<(typeof client.itv.plans)[':platform']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.itv.plans)[':platform']['$get']>>>
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
        ? getGetItvPlansPlatformKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.itv.plans)[':platform']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.itv.plans[':platform'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetItvPlansPlatform<TError = unknown>(
  args: InferRequestType<(typeof client.itv.plans)[':platform']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.itv.plans)[':platform']['$get']>>>
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
        ? getGetItvPlansPlatformKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.itv.plans)[':platform']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.itv.plans[':platform'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetItvProfileKey(args: InferRequestType<typeof client.itv.profile.$get>) {
  return ['itv', '/itv/profile', args] as const
}

export function useGetItvProfile<TError = unknown>(
  args: InferRequestType<typeof client.itv.profile.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.itv.profile.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetItvProfileKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.itv.profile.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.itv.profile.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetItvProfile<TError = unknown>(
  args: InferRequestType<typeof client.itv.profile.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.itv.profile.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetItvProfileKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.itv.profile.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.itv.profile.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutItvProfileKey() {
  return ['itv', '/itv/profile', 'PUT'] as const
}

export function usePutItvProfile<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.itv.profile.$put>>>>>
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.itv.profile.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutItvProfileKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.itv.profile.$put> }) =>
        parseResponse(client.itv.profile.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetItvProfileRecommendationListKey(
  args: InferRequestType<typeof client.itv.profile.recommendation.list.$get>,
) {
  return ['itv', '/itv/profile/recommendation/list', args] as const
}

export function useGetItvProfileRecommendationList<TError = unknown>(
  args: InferRequestType<typeof client.itv.profile.recommendation.list.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.itv.profile.recommendation.list.$get>>
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
        ? getGetItvProfileRecommendationListKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.itv.profile.recommendation.list.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.itv.profile.recommendation.list.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetItvProfileRecommendationList<TError = unknown>(
  args: InferRequestType<typeof client.itv.profile.recommendation.list.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.itv.profile.recommendation.list.$get>>
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
        ? getGetItvProfileRecommendationListKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.itv.profile.recommendation.list.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.itv.profile.recommendation.list.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostItvProfiletokenKey() {
  return ['itv', '/itv/profiletoken', 'POST'] as const
}

export function usePostItvProfiletoken<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.itv.profiletoken.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.itv.profiletoken.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostItvProfiletokenKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.itv.profiletoken.$post> }) =>
        parseResponse(client.itv.profiletoken.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetItvPurchasePlatformKey(
  args: InferRequestType<(typeof client.itv.purchase)[':platform']['$get']>,
) {
  return ['itv', '/itv/purchase/:platform', args] as const
}

export function useGetItvPurchasePlatform<TError = unknown>(
  args: InferRequestType<(typeof client.itv.purchase)[':platform']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.itv.purchase)[':platform']['$get']>>
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
        ? getGetItvPurchasePlatformKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.itv.purchase)[':platform']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.itv.purchase[':platform'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetItvPurchasePlatform<TError = unknown>(
  args: InferRequestType<(typeof client.itv.purchase)[':platform']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.itv.purchase)[':platform']['$get']>>
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
        ? getGetItvPurchasePlatformKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.itv.purchase)[':platform']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.itv.purchase[':platform'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostItvPurchasePlatformKey() {
  return ['itv', '/itv/purchase/:platform', 'POST'] as const
}

export function usePostItvPurchasePlatform<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.itv.purchase)[':platform']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.itv.purchase)[':platform']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostItvPurchasePlatformKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.itv.purchase)[':platform']['$post']> },
      ) => parseResponse(client.itv.purchase[':platform'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteItvPurchasePlatformKey() {
  return ['itv', '/itv/purchase/:platform', 'DELETE'] as const
}

export function useDeleteItvPurchasePlatform<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.itv.purchase)[':platform']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.itv.purchase)[':platform']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteItvPurchasePlatformKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.itv.purchase)[':platform']['$delete']> },
      ) => parseResponse(client.itv.purchase[':platform'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostItvPurchasePlatformStrongKey() {
  return ['itv', '/itv/purchase/:platform/strong', 'POST'] as const
}

export function usePostItvPurchasePlatformStrong<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.itv.purchase)[':platform']['strong']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.itv.purchase)[':platform']['strong']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostItvPurchasePlatformStrongKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.itv.purchase)[':platform']['strong']['$post']> },
      ) => parseResponse(client.itv.purchase[':platform'].strong.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostItvPurchasePlatformWithofferKey() {
  return ['itv', '/itv/purchase/:platform/withoffer', 'POST'] as const
}

export function usePostItvPurchasePlatformWithoffer<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.itv.purchase)[':platform']['withoffer']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.itv.purchase)[':platform']['withoffer']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostItvPurchasePlatformWithofferKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.itv.purchase)[':platform']['withoffer']['$post']>
        },
      ) => parseResponse(client.itv.purchase[':platform'].withoffer.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostItvResubscribePlatformKey() {
  return ['itv', '/itv/resubscribe/:platform', 'POST'] as const
}

export function usePostItvResubscribePlatform<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.itv.resubscribe)[':platform']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.itv.resubscribe)[':platform']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostItvResubscribePlatformKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.itv.resubscribe)[':platform']['$post']> },
      ) => parseResponse(client.itv.resubscribe[':platform'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetItvRokuPlansKey(args: InferRequestType<typeof client.itv.roku.plans.$get>) {
  return ['itv', '/itv/roku/plans', args] as const
}

export function useGetItvRokuPlans<TError = unknown>(
  args: InferRequestType<typeof client.itv.roku.plans.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.itv.roku.plans.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetItvRokuPlansKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.itv.roku.plans.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.itv.roku.plans.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetItvRokuPlans<TError = unknown>(
  args: InferRequestType<typeof client.itv.roku.plans.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.itv.roku.plans.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetItvRokuPlansKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.itv.roku.plans.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.itv.roku.plans.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostItvRokuTransactionTransactionidKey() {
  return ['itv', '/itv/roku/transaction/:transactionid', 'POST'] as const
}

export function usePostItvRokuTransactionTransactionid<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.itv.roku.transaction)[':transactionid']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.itv.roku.transaction)[':transactionid']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostItvRokuTransactionTransactionidKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.itv.roku.transaction)[':transactionid']['$post']>
        },
      ) => parseResponse(client.itv.roku.transaction[':transactionid'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetItvSaveOfferKey(
  args: InferRequestType<(typeof client.itv)['save-offer']['$get']>,
) {
  return ['itv', '/itv/save-offer', args] as const
}

export function useGetItvSaveOffer<TError = unknown>(
  args: InferRequestType<(typeof client.itv)['save-offer']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.itv)['save-offer']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetItvSaveOfferKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.itv)['save-offer']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.itv['save-offer'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetItvSaveOffer<TError = unknown>(
  args: InferRequestType<(typeof client.itv)['save-offer']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.itv)['save-offer']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetItvSaveOfferKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.itv)['save-offer']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.itv['save-offer'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostItvSaveOfferKey() {
  return ['itv', '/itv/save-offer', 'POST'] as const
}

export function usePostItvSaveOffer<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.itv)['save-offer']['$post']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.itv)['save-offer']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostItvSaveOfferKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.itv)['save-offer']['$post']> },
      ) => parseResponse(client.itv['save-offer'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetItvSubscriptionFullpricerenewalKey(
  args: InferRequestType<typeof client.itv.subscription.fullpricerenewal.$get>,
) {
  return ['itv', '/itv/subscription/fullpricerenewal', args] as const
}

export function useGetItvSubscriptionFullpricerenewal<TError = unknown>(
  args: InferRequestType<typeof client.itv.subscription.fullpricerenewal.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.itv.subscription.fullpricerenewal.$get>>
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
        ? getGetItvSubscriptionFullpricerenewalKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.itv.subscription.fullpricerenewal.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.itv.subscription.fullpricerenewal.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetItvSubscriptionFullpricerenewal<TError = unknown>(
  args: InferRequestType<typeof client.itv.subscription.fullpricerenewal.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.itv.subscription.fullpricerenewal.$get>>
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
        ? getGetItvSubscriptionFullpricerenewalKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.itv.subscription.fullpricerenewal.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.itv.subscription.fullpricerenewal.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetItvSubscriptionStatusPlatformKey(
  args: InferRequestType<(typeof client.itv.subscription.status)[':platform']['$get']>,
) {
  return ['itv', '/itv/subscription/status/:platform', args] as const
}

export function useGetItvSubscriptionStatusPlatform<TError = unknown>(
  args: InferRequestType<(typeof client.itv.subscription.status)[':platform']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.itv.subscription.status)[':platform']['$get']>>
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
        ? getGetItvSubscriptionStatusPlatformKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.itv.subscription.status)[':platform']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.itv.subscription.status[':platform'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetItvSubscriptionStatusPlatform<TError = unknown>(
  args: InferRequestType<(typeof client.itv.subscription.status)[':platform']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.itv.subscription.status)[':platform']['$get']>>
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
        ? getGetItvSubscriptionStatusPlatformKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.itv.subscription.status)[':platform']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.itv.subscription.status[':platform'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetItvSubscriptionstateKey(
  args: InferRequestType<typeof client.itv.subscriptionstate.$get>,
) {
  return ['itv', '/itv/subscriptionstate', args] as const
}

export function useGetItvSubscriptionstate<TError = unknown>(
  args: InferRequestType<typeof client.itv.subscriptionstate.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.itv.subscriptionstate.$get>>>
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
        ? getGetItvSubscriptionstateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.itv.subscriptionstate.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.itv.subscriptionstate.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetItvSubscriptionstate<TError = unknown>(
  args: InferRequestType<typeof client.itv.subscriptionstate.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.itv.subscriptionstate.$get>>>
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
        ? getGetItvSubscriptionstateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.itv.subscriptionstate.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.itv.subscriptionstate.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetItvUpcominginvoiceKey(
  args: InferRequestType<typeof client.itv.upcominginvoice.$get>,
) {
  return ['itv', '/itv/upcominginvoice', args] as const
}

export function useGetItvUpcominginvoice<TError = unknown>(
  args: InferRequestType<typeof client.itv.upcominginvoice.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.itv.upcominginvoice.$get>>>
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
        ? getGetItvUpcominginvoiceKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.itv.upcominginvoice.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.itv.upcominginvoice.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetItvUpcominginvoice<TError = unknown>(
  args: InferRequestType<typeof client.itv.upcominginvoice.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.itv.upcominginvoice.$get>>>
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
        ? getGetItvUpcominginvoiceKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.itv.upcominginvoice.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.itv.upcominginvoice.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutItvUpdateIntentStrongPlatformKey() {
  return ['itv', '/itv/updateIntent/strong/:platform', 'PUT'] as const
}

export function usePutItvUpdateIntentStrongPlatform<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.itv.updateIntent.strong)[':platform']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.itv.updateIntent.strong)[':platform']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutItvUpdateIntentStrongPlatformKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.itv.updateIntent.strong)[':platform']['$put']> },
      ) => parseResponse(client.itv.updateIntent.strong[':platform'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutItvUpdatePaymentStrongPlatformKey() {
  return ['itv', '/itv/updatePayment/strong/:platform', 'PUT'] as const
}

export function usePutItvUpdatePaymentStrongPlatform<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.itv.updatePayment.strong)[':platform']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.itv.updatePayment.strong)[':platform']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutItvUpdatePaymentStrongPlatformKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.itv.updatePayment.strong)[':platform']['$put']> },
      ) => parseResponse(client.itv.updatePayment.strong[':platform'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetItvVoucherPlanIdVoucherIdKey(
  args: InferRequestType<(typeof client.itv.voucher)[':planId'][':voucherId']['$get']>,
) {
  return ['itv', '/itv/voucher/:planId/:voucherId', args] as const
}

export function useGetItvVoucherPlanIdVoucherId<TError = unknown>(
  args: InferRequestType<(typeof client.itv.voucher)[':planId'][':voucherId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.itv.voucher)[':planId'][':voucherId']['$get']>>
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
        ? getGetItvVoucherPlanIdVoucherIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.itv.voucher)[':planId'][':voucherId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.itv.voucher[':planId'][':voucherId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetItvVoucherPlanIdVoucherId<TError = unknown>(
  args: InferRequestType<(typeof client.itv.voucher)[':planId'][':voucherId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.itv.voucher)[':planId'][':voucherId']['$get']>>
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
        ? getGetItvVoucherPlanIdVoucherIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.itv.voucher)[':planId'][':voucherId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.itv.voucher[':planId'][':voucherId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostItvVoucherPlatformKey() {
  return ['itv', '/itv/voucher/:platform', 'POST'] as const
}

export function usePostItvVoucherPlatform<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.itv.voucher)[':platform']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.itv.voucher)[':platform']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostItvVoucherPlatformKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.itv.voucher)[':platform']['$post']> },
      ) => parseResponse(client.itv.voucher[':platform'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetListsKey(args: InferRequestType<typeof client.lists.$get>) {
  return ['lists', '/lists', args] as const
}

export function useGetLists<TError = unknown>(
  args: InferRequestType<typeof client.lists.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lists.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetListsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lists.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.lists.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetLists<TError = unknown>(
  args: InferRequestType<typeof client.lists.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lists.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetListsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lists.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.lists.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetListsIdKey(args: InferRequestType<(typeof client.lists)[':id']['$get']>) {
  return ['lists', '/lists/:id', args] as const
}

export function useGetListsId<TError = unknown>(
  args: InferRequestType<(typeof client.lists)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.lists)[':id']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetListsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.lists)[':id']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.lists[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetListsId<TError = unknown>(
  args: InferRequestType<(typeof client.lists)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.lists)[':id']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetListsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.lists)[':id']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.lists[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPageKey(args: InferRequestType<typeof client.page.$get>) {
  return ['page', '/page', args] as const
}

export function useGetPage<TError = unknown>(
  args: InferRequestType<typeof client.page.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.page.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPageKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.page.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.page.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetPage<TError = unknown>(
  args: InferRequestType<typeof client.page.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.page.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPageKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.page.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.page.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetPlansIdKey(args: InferRequestType<(typeof client.plans)[':id']['$get']>) {
  return ['plans', '/plans/:id', args] as const
}

export function useGetPlansId<TError = unknown>(
  args: InferRequestType<(typeof client.plans)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.plans)[':id']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPlansIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.plans)[':id']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.plans[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPlansId<TError = unknown>(
  args: InferRequestType<(typeof client.plans)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.plans)[':id']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPlansIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.plans)[':id']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.plans[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostRegisterKey() {
  return ['register', '/register', 'POST'] as const
}

export function usePostRegister<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.register.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.register.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRegisterKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.register.$post> }) =>
        parseResponse(client.register.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostRequestPasswordResetKey() {
  return ['request-password-reset', '/request-password-reset', 'POST'] as const
}

export function usePostRequestPasswordReset<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['request-password-reset']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client)['request-password-reset']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRequestPasswordResetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['request-password-reset']['$post']> },
      ) => parseResponse(client['request-password-reset'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostResetPasswordKey() {
  return ['reset-password', '/reset-password', 'POST'] as const
}

export function usePostResetPassword<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['reset-password']['$post']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client)['reset-password']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostResetPasswordKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['reset-password']['$post']> },
      ) => parseResponse(client['reset-password'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSamsungPreviewKey() {
  return ['samsung-preview', '/samsung-preview'] as const
}

export function useGetSamsungPreview<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['samsung-preview']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSamsungPreviewKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['samsung-preview']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['samsung-preview'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSamsungPreview<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['samsung-preview']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSamsungPreviewKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['samsung-preview']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['samsung-preview'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSchedulesKey(args: InferRequestType<typeof client.schedules.$get>) {
  return ['schedules', '/schedules', args] as const
}

export function useGetSchedules<TError = unknown>(
  args: InferRequestType<typeof client.schedules.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.schedules.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSchedulesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.schedules.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.schedules.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSchedules<TError = unknown>(
  args: InferRequestType<typeof client.schedules.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.schedules.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSchedulesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.schedules.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.schedules.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSearchKey(args: InferRequestType<typeof client.search.$get>) {
  return ['search', '/search', args] as const
}

export function useGetSearch<TError = unknown>(
  args: InferRequestType<typeof client.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSearchKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.search.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetSearch<TError = unknown>(
  args: InferRequestType<typeof client.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSearchKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.search.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostVerifyEmailKey() {
  return ['verify-email', '/verify-email', 'POST'] as const
}

export function usePostVerifyEmail<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['verify-email']['$post']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client)['verify-email']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostVerifyEmailKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['verify-email']['$post']> },
      ) => parseResponse(client['verify-email'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
