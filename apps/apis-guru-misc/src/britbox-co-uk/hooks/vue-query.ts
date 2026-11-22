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

export function getAccountQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.account.$get>>,
) {
  return ['account', '/account', toValue(args)] as const
}

export function getAccountQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.account.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.account.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useAccount<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.account.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.$get>>>>
          >,
          ReturnType<typeof getAccountQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAccountQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.account.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPatchAccountMutationKey() {
  return ['account', '/account', 'PATCH'] as const
}

export function getPatchAccountMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    | Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.$patch>>>>>
    | undefined,
    TError,
    InferRequestType<typeof client.account.$patch>,
    TOnMutateResult
  >({
    mutationKey: getPatchAccountMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.account.$patch>) {
      return parseResponse(client.account.$patch(args, options))
    },
  })
}

export function usePatchAccount<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.$patch>>>>
            >
          | undefined,
          TError,
          InferRequestType<typeof client.account.$patch>,
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
  const mutationDefaults = getPatchAccountMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getAccountBillingMethodsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.account.billing.methods.$get>>,
) {
  return ['account', '/account/billing/methods', toValue(args)] as const
}

export function getAccountBillingMethodsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.account.billing.methods.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountBillingMethodsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.account.billing.methods.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountBillingMethods<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.account.billing.methods.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.account.billing.methods.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.account.billing.methods.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.account.billing.methods.$get>>>
            >
          >,
          ReturnType<typeof getAccountBillingMethodsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.account.billing.methods.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountBillingMethodsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountBillingMethodsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.account.billing.methods.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAccountBillingMethodsMutationKey() {
  return ['account', '/account/billing/methods', 'POST'] as const
}

export function getPostAccountBillingMethodsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.account.billing.methods.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.account.billing.methods.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAccountBillingMethodsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.account.billing.methods.$post>) {
      return parseResponse(client.account.billing.methods.$post(args, options))
    },
  })
}

export function usePostAccountBillingMethods<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.account.billing.methods.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.account.billing.methods.$post>,
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
  const mutationDefaults = getPostAccountBillingMethodsMutationOptions<TError, TOnMutateResult>(
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

export function getAccountBillingMethodsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.account.billing.methods)[':id']['$get']>>,
) {
  return ['account', '/account/billing/methods/:id', toValue(args)] as const
}

export function getAccountBillingMethodsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.account.billing.methods)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountBillingMethodsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.account.billing.methods[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountBillingMethodsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.account.billing.methods)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.account.billing.methods)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.account.billing.methods)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.account.billing.methods)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAccountBillingMethodsIdQueryKey>
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
          Awaited<ReturnType<(typeof client.account.billing.methods)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountBillingMethodsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountBillingMethodsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.account.billing.methods[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteAccountBillingMethodsIdMutationKey() {
  return ['account', '/account/billing/methods/:id', 'DELETE'] as const
}

export function getDeleteAccountBillingMethodsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account.billing.methods)[':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.account.billing.methods)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAccountBillingMethodsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.account.billing.methods)[':id']['$delete']>,
    ) {
      return parseResponse(client.account.billing.methods[':id'].$delete(args, options))
    },
  })
}

export function useDeleteAccountBillingMethodsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.account.billing.methods)[':id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.account.billing.methods)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteAccountBillingMethodsIdMutationOptions<TError, TOnMutateResult>(
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

export function getAccountBillingPurchasesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.account.billing.purchases.$get>>,
) {
  return ['account', '/account/billing/purchases', toValue(args)] as const
}

export function getAccountBillingPurchasesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.account.billing.purchases.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountBillingPurchasesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.account.billing.purchases.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountBillingPurchases<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.account.billing.purchases.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.account.billing.purchases.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.account.billing.purchases.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.account.billing.purchases.$get>>
              >
            >
          >,
          ReturnType<typeof getAccountBillingPurchasesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.account.billing.purchases.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountBillingPurchasesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountBillingPurchasesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.account.billing.purchases.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAccountBillingPurchasesMutationKey() {
  return ['account', '/account/billing/purchases', 'POST'] as const
}

export function getPostAccountBillingPurchasesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.account.billing.purchases.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.account.billing.purchases.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAccountBillingPurchasesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.account.billing.purchases.$post>) {
      return parseResponse(client.account.billing.purchases.$post(args, options))
    },
  })
}

export function usePostAccountBillingPurchases<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.account.billing.purchases.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.account.billing.purchases.$post>,
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
  const mutationDefaults = getPostAccountBillingPurchasesMutationOptions<TError, TOnMutateResult>(
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

export function getPutAccountBillingSubscriptionsIdMutationKey() {
  return ['account', '/account/billing/subscriptions/:id', 'PUT'] as const
}

export function getPutAccountBillingSubscriptionsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account.billing.subscriptions)[':id']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.account.billing.subscriptions)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutAccountBillingSubscriptionsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.account.billing.subscriptions)[':id']['$put']>,
    ) {
      return parseResponse(client.account.billing.subscriptions[':id'].$put(args, options))
    },
  })
}

export function usePutAccountBillingSubscriptionsId<
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
                  Awaited<ReturnType<(typeof client.account.billing.subscriptions)[':id']['$put']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.account.billing.subscriptions)[':id']['$put']>,
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
  const mutationDefaults = getPutAccountBillingSubscriptionsIdMutationOptions<
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

export function getDeleteAccountBillingSubscriptionsIdMutationKey() {
  return ['account', '/account/billing/subscriptions/:id', 'DELETE'] as const
}

export function getDeleteAccountBillingSubscriptionsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account.billing.subscriptions)[':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.account.billing.subscriptions)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAccountBillingSubscriptionsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.account.billing.subscriptions)[':id']['$delete']>,
    ) {
      return parseResponse(client.account.billing.subscriptions[':id'].$delete(args, options))
    },
  })
}

export function useDeleteAccountBillingSubscriptionsId<
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
                    ReturnType<(typeof client.account.billing.subscriptions)[':id']['$delete']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.account.billing.subscriptions)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteAccountBillingSubscriptionsIdMutationOptions<
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

export function getAccountDevicesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.account.devices.$get>>,
) {
  return ['account', '/account/devices', toValue(args)] as const
}

export function getAccountDevicesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.account.devices.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountDevicesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.account.devices.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountDevices<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.devices.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.account.devices.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.account.devices.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.account.devices.$get>>>
            >
          >,
          ReturnType<typeof getAccountDevicesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.devices.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAccountDevicesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountDevicesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.account.devices.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAccountDevicesMutationKey() {
  return ['account', '/account/devices', 'POST'] as const
}

export function getPostAccountDevicesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.devices.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.account.devices.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAccountDevicesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.account.devices.$post>) {
      return parseResponse(client.account.devices.$post(args, options))
    },
  })
}

export function usePostAccountDevices<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.account.devices.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.account.devices.$post>,
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
  const mutationDefaults = getPostAccountDevicesMutationOptions<TError, TOnMutateResult>(
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

export function getPostAccountDevicesAuthorizationMutationKey() {
  return ['account', '/account/devices/authorization', 'POST'] as const
}

export function getPostAccountDevicesAuthorizationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.account.devices.authorization.$post>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.account.devices.authorization.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAccountDevicesAuthorizationMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.account.devices.authorization.$post>) {
      return parseResponse(client.account.devices.authorization.$post(args, options))
    },
  })
}

export function usePostAccountDevicesAuthorization<
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
                  Awaited<ReturnType<typeof client.account.devices.authorization.$post>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.account.devices.authorization.$post>,
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
  const mutationDefaults = getPostAccountDevicesAuthorizationMutationOptions<
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

export function getAccountDevicesIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.account.devices)[':id']['$get']>>,
) {
  return ['account', '/account/devices/:id', toValue(args)] as const
}

export function getAccountDevicesIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.account.devices)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountDevicesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.account.devices[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountDevicesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.account.devices)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.account.devices)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.account.devices)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.account.devices)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAccountDevicesIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.account.devices)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountDevicesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountDevicesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.account.devices[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteAccountDevicesIdMutationKey() {
  return ['account', '/account/devices/:id', 'DELETE'] as const
}

export function getDeleteAccountDevicesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account.devices)[':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.account.devices)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAccountDevicesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.account.devices)[':id']['$delete']>) {
      return parseResponse(client.account.devices[':id'].$delete(args, options))
    },
  })
}

export function useDeleteAccountDevicesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.account.devices)[':id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.account.devices)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteAccountDevicesIdMutationOptions<TError, TOnMutateResult>(
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

export function getPutAccountDevicesIdNameMutationKey() {
  return ['account', '/account/devices/:id/name', 'PUT'] as const
}

export function getPutAccountDevicesIdNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account.devices)[':id']['name']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.account.devices)[':id']['name']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutAccountDevicesIdNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.account.devices)[':id']['name']['$put']>,
    ) {
      return parseResponse(client.account.devices[':id'].name.$put(args, options))
    },
  })
}

export function usePutAccountDevicesIdName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.account.devices)[':id']['name']['$put']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.account.devices)[':id']['name']['$put']>,
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
  const mutationDefaults = getPutAccountDevicesIdNameMutationOptions<TError, TOnMutateResult>(
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

export function getAccountEntitlementsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.account.entitlements.$get>>,
) {
  return ['account', '/account/entitlements', toValue(args)] as const
}

export function getAccountEntitlementsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.account.entitlements.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountEntitlementsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.account.entitlements.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountEntitlements<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.entitlements.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.account.entitlements.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.account.entitlements.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.account.entitlements.$get>>>
            >
          >,
          ReturnType<typeof getAccountEntitlementsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.entitlements.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAccountEntitlementsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountEntitlementsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.account.entitlements.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAccountItemsIdVideosQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.account.items)[':id']['videos']['$get']>>,
) {
  return ['account', '/account/items/:id/videos', toValue(args)] as const
}

export function getAccountItemsIdVideosQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.account.items)[':id']['videos']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountItemsIdVideosQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.account.items[':id'].videos.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountItemsIdVideos<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.account.items)[':id']['videos']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.account.items)[':id']['videos']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.account.items)[':id']['videos']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.account.items)[':id']['videos']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAccountItemsIdVideosQueryKey>
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
          Awaited<ReturnType<(typeof client.account.items)[':id']['videos']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountItemsIdVideosQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountItemsIdVideosQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.account.items[':id'].videos.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAccountItemsIdVideosGuardedQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.account.items)[':id']['videos-guarded']['$get']>
  >,
) {
  return ['account', '/account/items/:id/videos-guarded', toValue(args)] as const
}

export function getAccountItemsIdVideosGuardedQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.account.items)[':id']['videos-guarded']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountItemsIdVideosGuardedQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.account.items[':id']['videos-guarded'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountItemsIdVideosGuarded<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.account.items)[':id']['videos-guarded']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.account.items)[':id']['videos-guarded']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.account.items)[':id']['videos-guarded']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.account.items)[':id']['videos-guarded']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAccountItemsIdVideosGuardedQueryKey>
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
          Awaited<ReturnType<(typeof client.account.items)[':id']['videos-guarded']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountItemsIdVideosGuardedQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountItemsIdVideosGuardedQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.account.items[':id']['videos-guarded'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAccountNonceQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.account.nonce.$get>>,
) {
  return ['account', '/account/nonce', toValue(args)] as const
}

export function getAccountNonceQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.account.nonce.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountNonceQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.account.nonce.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountNonce<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.nonce.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.account.nonce.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.nonce.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.nonce.$get>>>>
          >,
          ReturnType<typeof getAccountNonceQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.nonce.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAccountNonceQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountNonceQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.account.nonce.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutAccountPasswordMutationKey() {
  return ['account', '/account/password', 'PUT'] as const
}

export function getPutAccountPasswordMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.password.$put>>>>
      >
    | undefined,
    TError,
    InferRequestType<typeof client.account.password.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutAccountPasswordMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.account.password.$put>) {
      return parseResponse(client.account.password.$put(args, options))
    },
  })
}

export function usePutAccountPassword<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<typeof client.account.password.$put>>>
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.account.password.$put>,
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
  const mutationDefaults = getPutAccountPasswordMutationOptions<TError, TOnMutateResult>(
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

export function getPutAccountPinMutationKey() {
  return ['account', '/account/pin', 'PUT'] as const
}

export function getPutAccountPinMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    | Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.pin.$put>>>>>
    | undefined,
    TError,
    InferRequestType<typeof client.account.pin.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutAccountPinMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.account.pin.$put>) {
      return parseResponse(client.account.pin.$put(args, options))
    },
  })
}

export function usePutAccountPin<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.pin.$put>>>>
            >
          | undefined,
          TError,
          InferRequestType<typeof client.account.pin.$put>,
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
  const mutationDefaults = getPutAccountPinMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getAccountProfileQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.account.profile.$get>>,
) {
  return ['account', '/account/profile', toValue(args)] as const
}

export function getAccountProfileQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.account.profile.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountProfileQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.account.profile.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountProfile<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.profile.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.account.profile.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.account.profile.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.account.profile.$get>>>
            >
          >,
          ReturnType<typeof getAccountProfileQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.profile.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAccountProfileQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountProfileQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.account.profile.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAccountProfileBookmarksQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.account.profile.bookmarks.$get>>,
) {
  return ['account', '/account/profile/bookmarks', toValue(args)] as const
}

export function getAccountProfileBookmarksQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.account.profile.bookmarks.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountProfileBookmarksQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.account.profile.bookmarks.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountProfileBookmarks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.account.profile.bookmarks.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.account.profile.bookmarks.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.account.profile.bookmarks.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.account.profile.bookmarks.$get>>
              >
            >
          >,
          ReturnType<typeof getAccountProfileBookmarksQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.account.profile.bookmarks.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountProfileBookmarksQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountProfileBookmarksQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.account.profile.bookmarks.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAccountProfileBookmarksListQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.account.profile.bookmarks.list.$get>>,
) {
  return ['account', '/account/profile/bookmarks/list', toValue(args)] as const
}

export function getAccountProfileBookmarksListQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.account.profile.bookmarks.list.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountProfileBookmarksListQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.account.profile.bookmarks.list.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountProfileBookmarksList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.account.profile.bookmarks.list.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.account.profile.bookmarks.list.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.account.profile.bookmarks.list.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.account.profile.bookmarks.list.$get>>
              >
            >
          >,
          ReturnType<typeof getAccountProfileBookmarksListQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.account.profile.bookmarks.list.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountProfileBookmarksListQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountProfileBookmarksListQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.account.profile.bookmarks.list.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAccountProfileBookmarksItemIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.account.profile.bookmarks)[':itemId']['$get']>
  >,
) {
  return ['account', '/account/profile/bookmarks/:itemId', toValue(args)] as const
}

export function getAccountProfileBookmarksItemIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.account.profile.bookmarks)[':itemId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountProfileBookmarksItemIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.account.profile.bookmarks[':itemId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountProfileBookmarksItemId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.account.profile.bookmarks)[':itemId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.account.profile.bookmarks)[':itemId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.account.profile.bookmarks)[':itemId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.account.profile.bookmarks)[':itemId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAccountProfileBookmarksItemIdQueryKey>
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
          Awaited<ReturnType<(typeof client.account.profile.bookmarks)[':itemId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountProfileBookmarksItemIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountProfileBookmarksItemIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.account.profile.bookmarks[':itemId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutAccountProfileBookmarksItemIdMutationKey() {
  return ['account', '/account/profile/bookmarks/:itemId', 'PUT'] as const
}

export function getPutAccountProfileBookmarksItemIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.account.profile.bookmarks)[':itemId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.account.profile.bookmarks)[':itemId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutAccountProfileBookmarksItemIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.account.profile.bookmarks)[':itemId']['$put']>,
    ) {
      return parseResponse(client.account.profile.bookmarks[':itemId'].$put(args, options))
    },
  })
}

export function usePutAccountProfileBookmarksItemId<
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
                Awaited<ReturnType<(typeof client.account.profile.bookmarks)[':itemId']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.account.profile.bookmarks)[':itemId']['$put']>,
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
  const mutationDefaults = getPutAccountProfileBookmarksItemIdMutationOptions<
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

export function getDeleteAccountProfileBookmarksItemIdMutationKey() {
  return ['account', '/account/profile/bookmarks/:itemId', 'DELETE'] as const
}

export function getDeleteAccountProfileBookmarksItemIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account.profile.bookmarks)[':itemId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.account.profile.bookmarks)[':itemId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAccountProfileBookmarksItemIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.account.profile.bookmarks)[':itemId']['$delete']>,
    ) {
      return parseResponse(client.account.profile.bookmarks[':itemId'].$delete(args, options))
    },
  })
}

export function useDeleteAccountProfileBookmarksItemId<
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
                    ReturnType<(typeof client.account.profile.bookmarks)[':itemId']['$delete']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.account.profile.bookmarks)[':itemId']['$delete']>,
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
  const mutationDefaults = getDeleteAccountProfileBookmarksItemIdMutationOptions<
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

export function getAccountProfileContinueWatchingListQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.account.profile)['continue-watching']['list']['$get']>
  >,
) {
  return ['account', '/account/profile/continue-watching/list', toValue(args)] as const
}

export function getAccountProfileContinueWatchingListQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.account.profile)['continue-watching']['list']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountProfileContinueWatchingListQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.account.profile['continue-watching'].list.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountProfileContinueWatchingList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.account.profile)['continue-watching']['list']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.account.profile)['continue-watching']['list']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.account.profile)['continue-watching']['list']['$get']>
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
                  ReturnType<(typeof client.account.profile)['continue-watching']['list']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getAccountProfileContinueWatchingListQueryKey>
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
          Awaited<ReturnType<(typeof client.account.profile)['continue-watching']['list']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountProfileContinueWatchingListQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountProfileContinueWatchingListQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.account.profile['continue-watching'].list.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAccountProfileItemsItemIdNextQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.account.profile.items)[':itemId']['next']['$get']>
  >,
) {
  return ['account', '/account/profile/items/:itemId/next', toValue(args)] as const
}

export function getAccountProfileItemsItemIdNextQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.account.profile.items)[':itemId']['next']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountProfileItemsItemIdNextQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.account.profile.items[':itemId'].next.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountProfileItemsItemIdNext<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.account.profile.items)[':itemId']['next']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.account.profile.items)[':itemId']['next']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.account.profile.items)[':itemId']['next']['$get']>
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
                  ReturnType<(typeof client.account.profile.items)[':itemId']['next']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getAccountProfileItemsItemIdNextQueryKey>
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
          Awaited<ReturnType<(typeof client.account.profile.items)[':itemId']['next']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountProfileItemsItemIdNextQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountProfileItemsItemIdNextQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.account.profile.items[':itemId'].next.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAccountProfileRatingsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.account.profile.ratings.$get>>,
) {
  return ['account', '/account/profile/ratings', toValue(args)] as const
}

export function getAccountProfileRatingsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.account.profile.ratings.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountProfileRatingsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.account.profile.ratings.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountProfileRatings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.account.profile.ratings.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.account.profile.ratings.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.account.profile.ratings.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.account.profile.ratings.$get>>>
            >
          >,
          ReturnType<typeof getAccountProfileRatingsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.account.profile.ratings.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountProfileRatingsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountProfileRatingsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.account.profile.ratings.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAccountProfileRatingsListQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.account.profile.ratings.list.$get>>,
) {
  return ['account', '/account/profile/ratings/list', toValue(args)] as const
}

export function getAccountProfileRatingsListQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.account.profile.ratings.list.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountProfileRatingsListQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.account.profile.ratings.list.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountProfileRatingsList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.account.profile.ratings.list.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.account.profile.ratings.list.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.account.profile.ratings.list.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.account.profile.ratings.list.$get>>
              >
            >
          >,
          ReturnType<typeof getAccountProfileRatingsListQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.account.profile.ratings.list.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountProfileRatingsListQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountProfileRatingsListQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.account.profile.ratings.list.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAccountProfileRatingsItemIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.account.profile.ratings)[':itemId']['$get']>
  >,
) {
  return ['account', '/account/profile/ratings/:itemId', toValue(args)] as const
}

export function getAccountProfileRatingsItemIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.account.profile.ratings)[':itemId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountProfileRatingsItemIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.account.profile.ratings[':itemId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountProfileRatingsItemId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.account.profile.ratings)[':itemId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.account.profile.ratings)[':itemId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.account.profile.ratings)[':itemId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.account.profile.ratings)[':itemId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAccountProfileRatingsItemIdQueryKey>
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
          Awaited<ReturnType<(typeof client.account.profile.ratings)[':itemId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountProfileRatingsItemIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountProfileRatingsItemIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.account.profile.ratings[':itemId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutAccountProfileRatingsItemIdMutationKey() {
  return ['account', '/account/profile/ratings/:itemId', 'PUT'] as const
}

export function getPutAccountProfileRatingsItemIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.account.profile.ratings)[':itemId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.account.profile.ratings)[':itemId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutAccountProfileRatingsItemIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.account.profile.ratings)[':itemId']['$put']>,
    ) {
      return parseResponse(client.account.profile.ratings[':itemId'].$put(args, options))
    },
  })
}

export function usePutAccountProfileRatingsItemId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.account.profile.ratings)[':itemId']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.account.profile.ratings)[':itemId']['$put']>,
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
  const mutationDefaults = getPutAccountProfileRatingsItemIdMutationOptions<
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

export function getAccountProfileWatchedQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.account.profile.watched.$get>>,
) {
  return ['account', '/account/profile/watched', toValue(args)] as const
}

export function getAccountProfileWatchedQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.account.profile.watched.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountProfileWatchedQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.account.profile.watched.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountProfileWatched<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.account.profile.watched.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.account.profile.watched.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.account.profile.watched.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.account.profile.watched.$get>>>
            >
          >,
          ReturnType<typeof getAccountProfileWatchedQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.account.profile.watched.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountProfileWatchedQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountProfileWatchedQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.account.profile.watched.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteAccountProfileWatchedMutationKey() {
  return ['account', '/account/profile/watched', 'DELETE'] as const
}

export function getDeleteAccountProfileWatchedMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.account.profile.watched.$delete>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.account.profile.watched.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAccountProfileWatchedMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.account.profile.watched.$delete>) {
      return parseResponse(client.account.profile.watched.$delete(args, options))
    },
  })
}

export function useDeleteAccountProfileWatched<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<typeof client.account.profile.watched.$delete>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.account.profile.watched.$delete>,
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
  const mutationDefaults = getDeleteAccountProfileWatchedMutationOptions<TError, TOnMutateResult>(
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

export function getAccountProfileWatchedListQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.account.profile.watched.list.$get>>,
) {
  return ['account', '/account/profile/watched/list', toValue(args)] as const
}

export function getAccountProfileWatchedListQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.account.profile.watched.list.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountProfileWatchedListQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.account.profile.watched.list.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountProfileWatchedList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.account.profile.watched.list.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.account.profile.watched.list.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.account.profile.watched.list.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.account.profile.watched.list.$get>>
              >
            >
          >,
          ReturnType<typeof getAccountProfileWatchedListQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.account.profile.watched.list.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountProfileWatchedListQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountProfileWatchedListQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.account.profile.watched.list.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAccountProfileWatchedItemIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.account.profile.watched)[':itemId']['$get']>
  >,
) {
  return ['account', '/account/profile/watched/:itemId', toValue(args)] as const
}

export function getAccountProfileWatchedItemIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.account.profile.watched)[':itemId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountProfileWatchedItemIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.account.profile.watched[':itemId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountProfileWatchedItemId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.account.profile.watched)[':itemId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.account.profile.watched)[':itemId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.account.profile.watched)[':itemId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.account.profile.watched)[':itemId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAccountProfileWatchedItemIdQueryKey>
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
          Awaited<ReturnType<(typeof client.account.profile.watched)[':itemId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountProfileWatchedItemIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountProfileWatchedItemIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.account.profile.watched[':itemId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutAccountProfileWatchedItemIdMutationKey() {
  return ['account', '/account/profile/watched/:itemId', 'PUT'] as const
}

export function getPutAccountProfileWatchedItemIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account.profile.watched)[':itemId']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.account.profile.watched)[':itemId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutAccountProfileWatchedItemIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.account.profile.watched)[':itemId']['$put']>,
    ) {
      return parseResponse(client.account.profile.watched[':itemId'].$put(args, options))
    },
  })
}

export function usePutAccountProfileWatchedItemId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.account.profile.watched)[':itemId']['$put']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.account.profile.watched)[':itemId']['$put']>,
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
  const mutationDefaults = getPutAccountProfileWatchedItemIdMutationOptions<
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

export function getPostAccountProfilesMutationKey() {
  return ['account', '/account/profiles', 'POST'] as const
}

export function getPostAccountProfilesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.profiles.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.account.profiles.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAccountProfilesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.account.profiles.$post>) {
      return parseResponse(client.account.profiles.$post(args, options))
    },
  })
}

export function usePostAccountProfiles<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.account.profiles.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.account.profiles.$post>,
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
  const mutationDefaults = getPostAccountProfilesMutationOptions<TError, TOnMutateResult>(
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

export function getAccountProfilesIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.account.profiles)[':id']['$get']>>,
) {
  return ['account', '/account/profiles/:id', toValue(args)] as const
}

export function getAccountProfilesIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.account.profiles)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountProfilesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.account.profiles[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountProfilesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.account.profiles)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.account.profiles)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.account.profiles)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.account.profiles)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAccountProfilesIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.account.profiles)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountProfilesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountProfilesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.account.profiles[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteAccountProfilesIdMutationKey() {
  return ['account', '/account/profiles/:id', 'DELETE'] as const
}

export function getDeleteAccountProfilesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account.profiles)[':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.account.profiles)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAccountProfilesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.account.profiles)[':id']['$delete']>) {
      return parseResponse(client.account.profiles[':id'].$delete(args, options))
    },
  })
}

export function useDeleteAccountProfilesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.account.profiles)[':id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.account.profiles)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteAccountProfilesIdMutationOptions<TError, TOnMutateResult>(
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

export function getPatchAccountProfilesIdMutationKey() {
  return ['account', '/account/profiles/:id', 'PATCH'] as const
}

export function getPatchAccountProfilesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account.profiles)[':id']['$patch']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.account.profiles)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchAccountProfilesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.account.profiles)[':id']['$patch']>) {
      return parseResponse(client.account.profiles[':id'].$patch(args, options))
    },
  })
}

export function usePatchAccountProfilesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.account.profiles)[':id']['$patch']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.account.profiles)[':id']['$patch']>,
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
  const mutationDefaults = getPatchAccountProfilesIdMutationOptions<TError, TOnMutateResult>(
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

export function getPostAccountRequestEmailVerificationMutationKey() {
  return ['account', '/account/request-email-verification', 'POST'] as const
}

export function getPostAccountRequestEmailVerificationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account)['request-email-verification']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.account)['request-email-verification']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAccountRequestEmailVerificationMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.account)['request-email-verification']['$post']>,
    ) {
      return parseResponse(client.account['request-email-verification'].$post(args, options))
    },
  })
}

export function usePostAccountRequestEmailVerification<
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
                    ReturnType<(typeof client.account)['request-email-verification']['$post']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.account)['request-email-verification']['$post']>,
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
  const mutationDefaults = getPostAccountRequestEmailVerificationMutationOptions<
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

export function getPostAuthorizationMutationKey() {
  return ['authorization', '/authorization', 'POST'] as const
}

export function getPostAuthorizationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.authorization.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.authorization.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAuthorizationMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.authorization.$post>) {
      return parseResponse(client.authorization.$post(args, options))
    },
  })
}

export function usePostAuthorization<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.authorization.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.authorization.$post>,
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
  const mutationDefaults = getPostAuthorizationMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteAuthorizationMutationKey() {
  return ['authorization', '/authorization', 'DELETE'] as const
}

export function getDeleteAuthorizationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.authorization.$delete>>>>
      >
    | undefined,
    TError,
    InferRequestType<typeof client.authorization.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAuthorizationMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.authorization.$delete>) {
      return parseResponse(client.authorization.$delete(args, options))
    },
  })
}

export function useDeleteAuthorization<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<typeof client.authorization.$delete>>>
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.authorization.$delete>,
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
  const mutationDefaults = getDeleteAuthorizationMutationOptions<TError, TOnMutateResult>(
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

export function getPostAuthorizationDeviceMutationKey() {
  return ['authorization', '/authorization/device', 'POST'] as const
}

export function getPostAuthorizationDeviceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.authorization.device.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.authorization.device.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAuthorizationDeviceMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.authorization.device.$post>) {
      return parseResponse(client.authorization.device.$post(args, options))
    },
  })
}

export function usePostAuthorizationDevice<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.authorization.device.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.authorization.device.$post>,
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
  const mutationDefaults = getPostAuthorizationDeviceMutationOptions<TError, TOnMutateResult>(
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

export function getPostAuthorizationDeviceCodeMutationKey() {
  return ['authorization', '/authorization/device/code', 'POST'] as const
}

export function getPostAuthorizationDeviceCodeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.authorization.device.code.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.authorization.device.code.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAuthorizationDeviceCodeMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.authorization.device.code.$post>) {
      return parseResponse(client.authorization.device.code.$post(args, options))
    },
  })
}

export function usePostAuthorizationDeviceCode<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.authorization.device.code.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.authorization.device.code.$post>,
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
  const mutationDefaults = getPostAuthorizationDeviceCodeMutationOptions<TError, TOnMutateResult>(
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

export function getPostAuthorizationProfileMutationKey() {
  return ['authorization', '/authorization/profile', 'POST'] as const
}

export function getPostAuthorizationProfileMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.authorization.profile.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.authorization.profile.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAuthorizationProfileMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.authorization.profile.$post>) {
      return parseResponse(client.authorization.profile.$post(args, options))
    },
  })
}

export function usePostAuthorizationProfile<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.authorization.profile.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.authorization.profile.$post>,
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
  const mutationDefaults = getPostAuthorizationProfileMutationOptions<TError, TOnMutateResult>(
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

export function getPostAuthorizationRefreshMutationKey() {
  return ['authorization', '/authorization/refresh', 'POST'] as const
}

export function getPostAuthorizationRefreshMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.authorization.refresh.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.authorization.refresh.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAuthorizationRefreshMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.authorization.refresh.$post>) {
      return parseResponse(client.authorization.refresh.$post(args, options))
    },
  })
}

export function usePostAuthorizationRefresh<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.authorization.refresh.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.authorization.refresh.$post>,
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
  const mutationDefaults = getPostAuthorizationRefreshMutationOptions<TError, TOnMutateResult>(
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

export function getPostAuthorizationSsoMutationKey() {
  return ['authorization', '/authorization/sso', 'POST'] as const
}

export function getPostAuthorizationSsoMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.authorization.sso.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.authorization.sso.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAuthorizationSsoMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.authorization.sso.$post>) {
      return parseResponse(client.authorization.sso.$post(args, options))
    },
  })
}

export function usePostAuthorizationSso<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.authorization.sso.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.authorization.sso.$post>,
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
  const mutationDefaults = getPostAuthorizationSsoMutationOptions<TError, TOnMutateResult>(
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

export function getBtPlanTokenQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.bt.plan)[':token']['$get']>>,
) {
  return ['bt', '/bt/plan/:token', toValue(args)] as const
}

export function getBtPlanTokenQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.bt.plan)[':token']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBtPlanTokenQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.bt.plan[':token'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBtPlanToken<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.bt.plan)[':token']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.bt.plan)[':token']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.bt.plan)[':token']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.bt.plan)[':token']['$get']>>>
            >
          >,
          ReturnType<typeof getBtPlanTokenQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.bt.plan)[':token']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBtPlanTokenQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBtPlanTokenQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.bt.plan[':token'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBtPlansQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.bt.plans.$get>>,
) {
  return ['bt', '/bt/plans', toValue(args)] as const
}

export function getBtPlansQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.bt.plans.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBtPlansQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.bt.plans.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useBtPlans<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bt.plans.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.bt.plans.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bt.plans.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bt.plans.$get>>>>
          >,
          ReturnType<typeof getBtPlansQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bt.plans.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getBtPlansQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBtPlansQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.bt.plans.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostBtTokenAssignMutationKey() {
  return ['bt', '/bt/token/assign', 'POST'] as const
}

export function getPostBtTokenAssignMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bt.token.assign.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.bt.token.assign.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostBtTokenAssignMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.bt.token.assign.$post>) {
      return parseResponse(client.bt.token.assign.$post(args, options))
    },
  })
}

export function usePostBtTokenAssign<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.bt.token.assign.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.bt.token.assign.$post>,
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
  const mutationDefaults = getPostBtTokenAssignMutationOptions<TError, TOnMutateResult>(
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

export function getBtTokenValidateQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.bt.token.validate.$get>>,
) {
  return ['bt', '/bt/token/validate', toValue(args)] as const
}

export function getBtTokenValidateQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.bt.token.validate.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBtTokenValidateQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.bt.token.validate.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBtTokenValidate<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bt.token.validate.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.bt.token.validate.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.bt.token.validate.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.bt.token.validate.$get>>>
            >
          >,
          ReturnType<typeof getBtTokenValidateQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bt.token.validate.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getBtTokenValidateQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBtTokenValidateQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.bt.token.validate.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCheckSubscriptionIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['check-subscription'][':id']['$get']>>,
) {
  return ['check-subscription', '/check-subscription/:id', toValue(args)] as const
}

export function getCheckSubscriptionIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['check-subscription'][':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCheckSubscriptionIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['check-subscription'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCheckSubscriptionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['check-subscription'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['check-subscription'][':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['check-subscription'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['check-subscription'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCheckSubscriptionIdQueryKey>
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
          Awaited<ReturnType<(typeof client)['check-subscription'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCheckSubscriptionIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCheckSubscriptionIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['check-subscription'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getConfigQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.config.$get>>,
) {
  return ['config', '/config', toValue(args)] as const
}

export function getConfigQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.config.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getConfigQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.config.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useConfig<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.config.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.config.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.config.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.config.$get>>>>>,
          ReturnType<typeof getConfigQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.config.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getConfigQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getConfigQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.config.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEeBtEligibilityQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['ee-bt']['eligibility']['$get']>>,
) {
  return ['ee-bt', '/ee-bt/eligibility', toValue(args)] as const
}

export function getEeBtEligibilityQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['ee-bt']['eligibility']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEeBtEligibilityQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['ee-bt'].eligibility.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEeBtEligibility<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['ee-bt']['eligibility']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['ee-bt']['eligibility']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['ee-bt']['eligibility']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['ee-bt']['eligibility']['$get']>>
              >
            >
          >,
          ReturnType<typeof getEeBtEligibilityQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['ee-bt']['eligibility']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEeBtEligibilityQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEeBtEligibilityQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['ee-bt'].eligibility.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostEeMsisdnMutationKey() {
  return ['ee', '/ee/msisdn', 'POST'] as const
}

export function getPostEeMsisdnMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ee.msisdn.$post>>>>>,
    TError,
    InferRequestType<typeof client.ee.msisdn.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostEeMsisdnMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.ee.msisdn.$post>) {
      return parseResponse(client.ee.msisdn.$post(args, options))
    },
  })
}

export function usePostEeMsisdn<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ee.msisdn.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.ee.msisdn.$post>,
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
  const mutationDefaults = getPostEeMsisdnMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostEeOffersMutationKey() {
  return ['ee', '/ee/offers', 'POST'] as const
}

export function getPostEeOffersMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ee.offers.$post>>>>>,
    TError,
    InferRequestType<typeof client.ee.offers.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostEeOffersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.ee.offers.$post>) {
      return parseResponse(client.ee.offers.$post(args, options))
    },
  })
}

export function usePostEeOffers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ee.offers.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.ee.offers.$post>,
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
  const mutationDefaults = getPostEeOffersMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPutEePinMutationKey() {
  return ['ee', '/ee/pin', 'PUT'] as const
}

export function getPutEePinMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ee.pin.$put>>>>>,
    TError,
    InferRequestType<typeof client.ee.pin.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutEePinMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.ee.pin.$put>) {
      return parseResponse(client.ee.pin.$put(args, options))
    },
  })
}

export function usePutEePin<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ee.pin.$put>>>>>,
          TError,
          InferRequestType<typeof client.ee.pin.$put>,
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
  const mutationDefaults = getPutEePinMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostEePinMutationKey() {
  return ['ee', '/ee/pin', 'POST'] as const
}

export function getPostEePinMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ee.pin.$post>>>>>,
    TError,
    InferRequestType<typeof client.ee.pin.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostEePinMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.ee.pin.$post>) {
      return parseResponse(client.ee.pin.$post(args, options))
    },
  })
}

export function usePostEePin<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ee.pin.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.ee.pin.$post>,
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
  const mutationDefaults = getPostEePinMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getEePlansQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.ee.plans.$get>>,
) {
  return ['ee', '/ee/plans', toValue(args)] as const
}

export function getEePlansQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.ee.plans.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEePlansQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ee.plans.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useEePlans<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ee.plans.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.ee.plans.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ee.plans.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ee.plans.$get>>>>
          >,
          ReturnType<typeof getEePlansQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ee.plans.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getEePlansQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEePlansQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ee.plans.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEePlansIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.ee.plans)[':id']['$get']>>,
) {
  return ['ee', '/ee/plans/:id', toValue(args)] as const
}

export function getEePlansIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.ee.plans)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEePlansIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ee.plans[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEePlansId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.ee.plans)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.ee.plans)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.ee.plans)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.ee.plans)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getEePlansIdQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.ee.plans)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getEePlansIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEePlansIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ee.plans[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEeTokenCreateQueryKey() {
  return ['ee', '/ee/token/create'] as const
}

export function getEeTokenCreateQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getEeTokenCreateQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ee.token.create.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useEeTokenCreate<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ee.token.create.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.ee.token.create.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.ee.token.create.$get>>>
            >
          >,
          ReturnType<typeof getEeTokenCreateQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ee.token.create.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getEeTokenCreateQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getEeTokenCreateQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.ee.token.create.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getItemsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.items)[':id']['$get']>>,
) {
  return ['items', '/items/:id', toValue(args)] as const
}

export function getItemsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.items)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getItemsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.items[':id'].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useItemsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.items)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.items)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.items)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.items)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getItemsIdQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.items)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getItemsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getItemsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.items[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getItemsIdChildrenQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.items)[':id']['children']['$get']>>,
) {
  return ['items', '/items/:id/children', toValue(args)] as const
}

export function getItemsIdChildrenQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.items)[':id']['children']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getItemsIdChildrenQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.items[':id'].children.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useItemsIdChildren<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.items)[':id']['children']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.items)[':id']['children']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.items)[':id']['children']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.items)[':id']['children']['$get']>>
              >
            >
          >,
          ReturnType<typeof getItemsIdChildrenQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.items)[':id']['children']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getItemsIdChildrenQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getItemsIdChildrenQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.items[':id'].children.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getItemsIdRelatedQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.items)[':id']['related']['$get']>>,
) {
  return ['items', '/items/:id/related', toValue(args)] as const
}

export function getItemsIdRelatedQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.items)[':id']['related']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getItemsIdRelatedQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.items[':id'].related.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useItemsIdRelated<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.items)[':id']['related']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.items)[':id']['related']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.items)[':id']['related']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.items)[':id']['related']['$get']>>
              >
            >
          >,
          ReturnType<typeof getItemsIdRelatedQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.items)[':id']['related']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getItemsIdRelatedQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getItemsIdRelatedQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.items[':id'].related.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getItemsIdVideosQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.items)[':id']['videos']['$get']>>,
) {
  return ['items', '/items/:id/videos', toValue(args)] as const
}

export function getItemsIdVideosQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.items)[':id']['videos']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getItemsIdVideosQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.items[':id'].videos.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useItemsIdVideos<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.items)[':id']['videos']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.items)[':id']['videos']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.items)[':id']['videos']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.items)[':id']['videos']['$get']>>
              >
            >
          >,
          ReturnType<typeof getItemsIdVideosQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.items)[':id']['videos']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getItemsIdVideosQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getItemsIdVideosQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.items[':id'].videos.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getItemsItemIdNextQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.items)[':itemId']['next']['$get']>>,
) {
  return ['items', '/items/:itemId/next', toValue(args)] as const
}

export function getItemsItemIdNextQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.items)[':itemId']['next']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getItemsItemIdNextQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.items[':itemId'].next.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useItemsItemIdNext<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.items)[':itemId']['next']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.items)[':itemId']['next']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.items)[':itemId']['next']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.items)[':itemId']['next']['$get']>>
              >
            >
          >,
          ReturnType<typeof getItemsItemIdNextQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.items)[':itemId']['next']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getItemsItemIdNextQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getItemsItemIdNextQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.items[':itemId'].next.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostItvBillinghistoryPlatformMutationKey() {
  return ['itv', '/itv/billinghistory/:platform', 'POST'] as const
}

export function getPostItvBillinghistoryPlatformMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.itv.billinghistory)[':platform']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.itv.billinghistory)[':platform']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostItvBillinghistoryPlatformMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.itv.billinghistory)[':platform']['$post']>,
    ) {
      return parseResponse(client.itv.billinghistory[':platform'].$post(args, options))
    },
  })
}

export function usePostItvBillinghistoryPlatform<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.itv.billinghistory)[':platform']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.itv.billinghistory)[':platform']['$post']>,
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
  const mutationDefaults = getPostItvBillinghistoryPlatformMutationOptions<TError, TOnMutateResult>(
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

export function getPutItvCardsPlatformMutationKey() {
  return ['itv', '/itv/cards/:platform', 'PUT'] as const
}

export function getPutItvCardsPlatformMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.itv.cards)[':platform']['$put']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.itv.cards)[':platform']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutItvCardsPlatformMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.itv.cards)[':platform']['$put']>) {
      return parseResponse(client.itv.cards[':platform'].$put(args, options))
    },
  })
}

export function usePutItvCardsPlatform<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.itv.cards)[':platform']['$put']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.itv.cards)[':platform']['$put']>,
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
  const mutationDefaults = getPutItvCardsPlatformMutationOptions<TError, TOnMutateResult>(
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

export function getPostItvCardsPlatformMutationKey() {
  return ['itv', '/itv/cards/:platform', 'POST'] as const
}

export function getPostItvCardsPlatformMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.itv.cards)[':platform']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.itv.cards)[':platform']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostItvCardsPlatformMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.itv.cards)[':platform']['$post']>) {
      return parseResponse(client.itv.cards[':platform'].$post(args, options))
    },
  })
}

export function usePostItvCardsPlatform<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.itv.cards)[':platform']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.itv.cards)[':platform']['$post']>,
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
  const mutationDefaults = getPostItvCardsPlatformMutationOptions<TError, TOnMutateResult>(
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

export function getPostItvChangeemailMutationKey() {
  return ['itv', '/itv/changeemail', 'POST'] as const
}

export function getPostItvChangeemailMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.itv.changeemail.$post>>>>
      >
    | undefined,
    TError,
    InferRequestType<typeof client.itv.changeemail.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostItvChangeemailMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.itv.changeemail.$post>) {
      return parseResponse(client.itv.changeemail.$post(args, options))
    },
  })
}

export function usePostItvChangeemail<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<typeof client.itv.changeemail.$post>>>
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.itv.changeemail.$post>,
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
  const mutationDefaults = getPostItvChangeemailMutationOptions<TError, TOnMutateResult>(
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

export function getPostItvChangemarketingMutationKey() {
  return ['itv', '/itv/changemarketing', 'POST'] as const
}

export function getPostItvChangemarketingMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.itv.changemarketing.$post>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.itv.changemarketing.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostItvChangemarketingMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.itv.changemarketing.$post>) {
      return parseResponse(client.itv.changemarketing.$post(args, options))
    },
  })
}

export function usePostItvChangemarketing<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<typeof client.itv.changemarketing.$post>>>
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.itv.changemarketing.$post>,
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
  const mutationDefaults = getPostItvChangemarketingMutationOptions<TError, TOnMutateResult>(
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

export function getPostItvDeleteaccountMutationKey() {
  return ['itv', '/itv/deleteaccount', 'POST'] as const
}

export function getPostItvDeleteaccountMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.itv.deleteaccount.$post>>>>
      >
    | undefined,
    TError,
    InferRequestType<typeof client.itv.deleteaccount.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostItvDeleteaccountMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.itv.deleteaccount.$post>) {
      return parseResponse(client.itv.deleteaccount.$post(args, options))
    },
  })
}

export function usePostItvDeleteaccount<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<typeof client.itv.deleteaccount.$post>>>
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.itv.deleteaccount.$post>,
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
  const mutationDefaults = getPostItvDeleteaccountMutationOptions<TError, TOnMutateResult>(
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

export function getItvEntitlementsCurrentQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.itv.entitlements.current.$get>>,
) {
  return ['itv', '/itv/entitlements/current', toValue(args)] as const
}

export function getItvEntitlementsCurrentQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.itv.entitlements.current.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getItvEntitlementsCurrentQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.itv.entitlements.current.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useItvEntitlementsCurrent<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.itv.entitlements.current.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.itv.entitlements.current.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.itv.entitlements.current.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.itv.entitlements.current.$get>>>
            >
          >,
          ReturnType<typeof getItvEntitlementsCurrentQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.itv.entitlements.current.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getItvEntitlementsCurrentQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getItvEntitlementsCurrentQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.itv.entitlements.current.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getItvEntitlementsHistoryQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.itv.entitlements.history.$get>>,
) {
  return ['itv', '/itv/entitlements/history', toValue(args)] as const
}

export function getItvEntitlementsHistoryQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.itv.entitlements.history.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getItvEntitlementsHistoryQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.itv.entitlements.history.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useItvEntitlementsHistory<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.itv.entitlements.history.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.itv.entitlements.history.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.itv.entitlements.history.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.itv.entitlements.history.$get>>>
            >
          >,
          ReturnType<typeof getItvEntitlementsHistoryQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.itv.entitlements.history.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getItvEntitlementsHistoryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getItvEntitlementsHistoryQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.itv.entitlements.history.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getItvFeatureFlagFeatureQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.itv.featureFlag)[':feature']['$get']>>,
) {
  return ['itv', '/itv/featureFlag/:feature', toValue(args)] as const
}

export function getItvFeatureFlagFeatureQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.itv.featureFlag)[':feature']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getItvFeatureFlagFeatureQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.itv.featureFlag[':feature'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useItvFeatureFlagFeature<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.itv.featureFlag)[':feature']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.itv.featureFlag)[':feature']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.itv.featureFlag)[':feature']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.itv.featureFlag)[':feature']['$get']>>
              >
            >
          >,
          ReturnType<typeof getItvFeatureFlagFeatureQueryKey>
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
          Awaited<ReturnType<(typeof client.itv.featureFlag)[':feature']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getItvFeatureFlagFeatureQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getItvFeatureFlagFeatureQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.itv.featureFlag[':feature'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostItvGooglepaySubscriptionMutationKey() {
  return ['itv', '/itv/googlepay/subscription', 'POST'] as const
}

export function getPostItvGooglepaySubscriptionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.itv.googlepay.subscription.$post>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.itv.googlepay.subscription.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostItvGooglepaySubscriptionMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.itv.googlepay.subscription.$post>) {
      return parseResponse(client.itv.googlepay.subscription.$post(args, options))
    },
  })
}

export function usePostItvGooglepaySubscription<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<typeof client.itv.googlepay.subscription.$post>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.itv.googlepay.subscription.$post>,
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
  const mutationDefaults = getPostItvGooglepaySubscriptionMutationOptions<TError, TOnMutateResult>(
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

export function getItvHadEntitlementsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.itv.had.entitlements.$get>>,
) {
  return ['itv', '/itv/had/entitlements', toValue(args)] as const
}

export function getItvHadEntitlementsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.itv.had.entitlements.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getItvHadEntitlementsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.itv.had.entitlements.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useItvHadEntitlements<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.itv.had.entitlements.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.itv.had.entitlements.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.itv.had.entitlements.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.itv.had.entitlements.$get>>>
            >
          >,
          ReturnType<typeof getItvHadEntitlementsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.itv.had.entitlements.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getItvHadEntitlementsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getItvHadEntitlementsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.itv.had.entitlements.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostItvItemsClipsMutationKey() {
  return ['itv', '/itv/items/clips', 'POST'] as const
}

export function getPostItvItemsClipsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.itv.items.clips.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.itv.items.clips.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostItvItemsClipsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.itv.items.clips.$post>) {
      return parseResponse(client.itv.items.clips.$post(args, options))
    },
  })
}

export function usePostItvItemsClips<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.itv.items.clips.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.itv.items.clips.$post>,
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
  const mutationDefaults = getPostItvItemsClipsMutationOptions<TError, TOnMutateResult>(
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

export function getPostItvItemsDownloadableMutationKey() {
  return ['itv', '/itv/items/downloadable', 'POST'] as const
}

export function getPostItvItemsDownloadableMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.itv.items.downloadable.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.itv.items.downloadable.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostItvItemsDownloadableMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.itv.items.downloadable.$post>) {
      return parseResponse(client.itv.items.downloadable.$post(args, options))
    },
  })
}

export function usePostItvItemsDownloadable<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.itv.items.downloadable.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.itv.items.downloadable.$post>,
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
  const mutationDefaults = getPostItvItemsDownloadableMutationOptions<TError, TOnMutateResult>(
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

export function getItvItemsummaryExternalIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.itv.itemsummary)[':externalId']['$get']>>,
) {
  return ['itv', '/itv/itemsummary/:externalId', toValue(args)] as const
}

export function getItvItemsummaryExternalIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.itv.itemsummary)[':externalId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getItvItemsummaryExternalIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.itv.itemsummary[':externalId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useItvItemsummaryExternalId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.itv.itemsummary)[':externalId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.itv.itemsummary)[':externalId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.itv.itemsummary)[':externalId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.itv.itemsummary)[':externalId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getItvItemsummaryExternalIdQueryKey>
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
          Awaited<ReturnType<(typeof client.itv.itemsummary)[':externalId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getItvItemsummaryExternalIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getItvItemsummaryExternalIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.itv.itemsummary[':externalId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getItvPageQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.itv.page.$get>>,
) {
  return ['itv', '/itv/page', toValue(args)] as const
}

export function getItvPageQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.itv.page.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getItvPageQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.itv.page.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useItvPage<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.itv.page.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.itv.page.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.itv.page.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.itv.page.$get>>>>
          >,
          ReturnType<typeof getItvPageQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.itv.page.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getItvPageQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getItvPageQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.itv.page.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostItvPinauthorizationMutationKey() {
  return ['itv', '/itv/pinauthorization', 'POST'] as const
}

export function getPostItvPinauthorizationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.itv.pinauthorization.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.itv.pinauthorization.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostItvPinauthorizationMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.itv.pinauthorization.$post>) {
      return parseResponse(client.itv.pinauthorization.$post(args, options))
    },
  })
}

export function usePostItvPinauthorization<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.itv.pinauthorization.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.itv.pinauthorization.$post>,
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
  const mutationDefaults = getPostItvPinauthorizationMutationOptions<TError, TOnMutateResult>(
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

export function getPostItvPlanPlatformMutationKey() {
  return ['itv', '/itv/plan/:platform', 'POST'] as const
}

export function getPostItvPlanPlatformMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.itv.plan)[':platform']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.itv.plan)[':platform']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostItvPlanPlatformMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.itv.plan)[':platform']['$post']>) {
      return parseResponse(client.itv.plan[':platform'].$post(args, options))
    },
  })
}

export function usePostItvPlanPlatform<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.itv.plan)[':platform']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.itv.plan)[':platform']['$post']>,
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
  const mutationDefaults = getPostItvPlanPlatformMutationOptions<TError, TOnMutateResult>(
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

export function getItvPlansPlatformQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.itv.plans)[':platform']['$get']>>,
) {
  return ['itv', '/itv/plans/:platform', toValue(args)] as const
}

export function getItvPlansPlatformQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.itv.plans)[':platform']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getItvPlansPlatformQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.itv.plans[':platform'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useItvPlansPlatform<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.itv.plans)[':platform']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.itv.plans)[':platform']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.itv.plans)[':platform']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.itv.plans)[':platform']['$get']>>
              >
            >
          >,
          ReturnType<typeof getItvPlansPlatformQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.itv.plans)[':platform']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getItvPlansPlatformQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getItvPlansPlatformQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.itv.plans[':platform'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getItvProfileQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.itv.profile.$get>>,
) {
  return ['itv', '/itv/profile', toValue(args)] as const
}

export function getItvProfileQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.itv.profile.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getItvProfileQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.itv.profile.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useItvProfile<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.itv.profile.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.itv.profile.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.itv.profile.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.itv.profile.$get>>>>
          >,
          ReturnType<typeof getItvProfileQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.itv.profile.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getItvProfileQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getItvProfileQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.itv.profile.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutItvProfileMutationKey() {
  return ['itv', '/itv/profile', 'PUT'] as const
}

export function getPutItvProfileMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    | Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.itv.profile.$put>>>>>
    | undefined,
    TError,
    InferRequestType<typeof client.itv.profile.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutItvProfileMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.itv.profile.$put>) {
      return parseResponse(client.itv.profile.$put(args, options))
    },
  })
}

export function usePutItvProfile<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.itv.profile.$put>>>>
            >
          | undefined,
          TError,
          InferRequestType<typeof client.itv.profile.$put>,
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
  const mutationDefaults = getPutItvProfileMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getItvProfileRecommendationListQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.itv.profile.recommendation.list.$get>>,
) {
  return ['itv', '/itv/profile/recommendation/list', toValue(args)] as const
}

export function getItvProfileRecommendationListQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.itv.profile.recommendation.list.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getItvProfileRecommendationListQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.itv.profile.recommendation.list.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useItvProfileRecommendationList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.itv.profile.recommendation.list.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.itv.profile.recommendation.list.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.itv.profile.recommendation.list.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.itv.profile.recommendation.list.$get>>
              >
            >
          >,
          ReturnType<typeof getItvProfileRecommendationListQueryKey>
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
          Awaited<ReturnType<typeof client.itv.profile.recommendation.list.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getItvProfileRecommendationListQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getItvProfileRecommendationListQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.itv.profile.recommendation.list.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostItvProfiletokenMutationKey() {
  return ['itv', '/itv/profiletoken', 'POST'] as const
}

export function getPostItvProfiletokenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.itv.profiletoken.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.itv.profiletoken.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostItvProfiletokenMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.itv.profiletoken.$post>) {
      return parseResponse(client.itv.profiletoken.$post(args, options))
    },
  })
}

export function usePostItvProfiletoken<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.itv.profiletoken.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.itv.profiletoken.$post>,
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
  const mutationDefaults = getPostItvProfiletokenMutationOptions<TError, TOnMutateResult>(
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

export function getItvPurchasePlatformQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.itv.purchase)[':platform']['$get']>>,
) {
  return ['itv', '/itv/purchase/:platform', toValue(args)] as const
}

export function getItvPurchasePlatformQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.itv.purchase)[':platform']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getItvPurchasePlatformQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.itv.purchase[':platform'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useItvPurchasePlatform<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.itv.purchase)[':platform']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.itv.purchase)[':platform']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.itv.purchase)[':platform']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.itv.purchase)[':platform']['$get']>>
              >
            >
          >,
          ReturnType<typeof getItvPurchasePlatformQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.itv.purchase)[':platform']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getItvPurchasePlatformQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getItvPurchasePlatformQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.itv.purchase[':platform'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostItvPurchasePlatformMutationKey() {
  return ['itv', '/itv/purchase/:platform', 'POST'] as const
}

export function getPostItvPurchasePlatformMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.itv.purchase)[':platform']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.itv.purchase)[':platform']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostItvPurchasePlatformMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.itv.purchase)[':platform']['$post']>) {
      return parseResponse(client.itv.purchase[':platform'].$post(args, options))
    },
  })
}

export function usePostItvPurchasePlatform<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.itv.purchase)[':platform']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.itv.purchase)[':platform']['$post']>,
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
  const mutationDefaults = getPostItvPurchasePlatformMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteItvPurchasePlatformMutationKey() {
  return ['itv', '/itv/purchase/:platform', 'DELETE'] as const
}

export function getDeleteItvPurchasePlatformMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.itv.purchase)[':platform']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.itv.purchase)[':platform']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteItvPurchasePlatformMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.itv.purchase)[':platform']['$delete']>) {
      return parseResponse(client.itv.purchase[':platform'].$delete(args, options))
    },
  })
}

export function useDeleteItvPurchasePlatform<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.itv.purchase)[':platform']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.itv.purchase)[':platform']['$delete']>,
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
  const mutationDefaults = getDeleteItvPurchasePlatformMutationOptions<TError, TOnMutateResult>(
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

export function getPostItvPurchasePlatformStrongMutationKey() {
  return ['itv', '/itv/purchase/:platform/strong', 'POST'] as const
}

export function getPostItvPurchasePlatformStrongMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.itv.purchase)[':platform']['strong']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.itv.purchase)[':platform']['strong']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostItvPurchasePlatformStrongMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.itv.purchase)[':platform']['strong']['$post']>,
    ) {
      return parseResponse(client.itv.purchase[':platform'].strong.$post(args, options))
    },
  })
}

export function usePostItvPurchasePlatformStrong<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.itv.purchase)[':platform']['strong']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.itv.purchase)[':platform']['strong']['$post']>,
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
  const mutationDefaults = getPostItvPurchasePlatformStrongMutationOptions<TError, TOnMutateResult>(
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

export function getPostItvPurchasePlatformWithofferMutationKey() {
  return ['itv', '/itv/purchase/:platform/withoffer', 'POST'] as const
}

export function getPostItvPurchasePlatformWithofferMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.itv.purchase)[':platform']['withoffer']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.itv.purchase)[':platform']['withoffer']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostItvPurchasePlatformWithofferMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.itv.purchase)[':platform']['withoffer']['$post']>,
    ) {
      return parseResponse(client.itv.purchase[':platform'].withoffer.$post(args, options))
    },
  })
}

export function usePostItvPurchasePlatformWithoffer<
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
                Awaited<ReturnType<(typeof client.itv.purchase)[':platform']['withoffer']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.itv.purchase)[':platform']['withoffer']['$post']>,
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
  const mutationDefaults = getPostItvPurchasePlatformWithofferMutationOptions<
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

export function getPostItvResubscribePlatformMutationKey() {
  return ['itv', '/itv/resubscribe/:platform', 'POST'] as const
}

export function getPostItvResubscribePlatformMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.itv.resubscribe)[':platform']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.itv.resubscribe)[':platform']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostItvResubscribePlatformMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.itv.resubscribe)[':platform']['$post']>,
    ) {
      return parseResponse(client.itv.resubscribe[':platform'].$post(args, options))
    },
  })
}

export function usePostItvResubscribePlatform<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.itv.resubscribe)[':platform']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.itv.resubscribe)[':platform']['$post']>,
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
  const mutationDefaults = getPostItvResubscribePlatformMutationOptions<TError, TOnMutateResult>(
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

export function getItvRokuPlansQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.itv.roku.plans.$get>>,
) {
  return ['itv', '/itv/roku/plans', toValue(args)] as const
}

export function getItvRokuPlansQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.itv.roku.plans.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getItvRokuPlansQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.itv.roku.plans.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useItvRokuPlans<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.itv.roku.plans.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.itv.roku.plans.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.itv.roku.plans.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.itv.roku.plans.$get>>>>
          >,
          ReturnType<typeof getItvRokuPlansQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.itv.roku.plans.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getItvRokuPlansQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getItvRokuPlansQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.itv.roku.plans.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostItvRokuTransactionTransactionidMutationKey() {
  return ['itv', '/itv/roku/transaction/:transactionid', 'POST'] as const
}

export function getPostItvRokuTransactionTransactionidMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.itv.roku.transaction)[':transactionid']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.itv.roku.transaction)[':transactionid']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostItvRokuTransactionTransactionidMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.itv.roku.transaction)[':transactionid']['$post']>,
    ) {
      return parseResponse(client.itv.roku.transaction[':transactionid'].$post(args, options))
    },
  })
}

export function usePostItvRokuTransactionTransactionid<
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
                Awaited<ReturnType<(typeof client.itv.roku.transaction)[':transactionid']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.itv.roku.transaction)[':transactionid']['$post']>,
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
  const mutationDefaults = getPostItvRokuTransactionTransactionidMutationOptions<
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

export function getItvSaveOfferQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.itv)['save-offer']['$get']>>,
) {
  return ['itv', '/itv/save-offer', toValue(args)] as const
}

export function getItvSaveOfferQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.itv)['save-offer']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getItvSaveOfferQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.itv['save-offer'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useItvSaveOffer<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.itv)['save-offer']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.itv)['save-offer']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.itv)['save-offer']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.itv)['save-offer']['$get']>>>
            >
          >,
          ReturnType<typeof getItvSaveOfferQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.itv)['save-offer']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getItvSaveOfferQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getItvSaveOfferQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.itv['save-offer'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostItvSaveOfferMutationKey() {
  return ['itv', '/itv/save-offer', 'POST'] as const
}

export function getPostItvSaveOfferMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.itv)['save-offer']['$post']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.itv)['save-offer']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostItvSaveOfferMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.itv)['save-offer']['$post']>) {
      return parseResponse(client.itv['save-offer'].$post(args, options))
    },
  })
}

export function usePostItvSaveOffer<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.itv)['save-offer']['$post']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.itv)['save-offer']['$post']>,
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
  const mutationDefaults = getPostItvSaveOfferMutationOptions<TError, TOnMutateResult>(
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

export function getItvSubscriptionFullpricerenewalQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.itv.subscription.fullpricerenewal.$get>>,
) {
  return ['itv', '/itv/subscription/fullpricerenewal', toValue(args)] as const
}

export function getItvSubscriptionFullpricerenewalQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.itv.subscription.fullpricerenewal.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getItvSubscriptionFullpricerenewalQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.itv.subscription.fullpricerenewal.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useItvSubscriptionFullpricerenewal<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.itv.subscription.fullpricerenewal.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.itv.subscription.fullpricerenewal.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.itv.subscription.fullpricerenewal.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.itv.subscription.fullpricerenewal.$get>>
              >
            >
          >,
          ReturnType<typeof getItvSubscriptionFullpricerenewalQueryKey>
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
          Awaited<ReturnType<typeof client.itv.subscription.fullpricerenewal.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getItvSubscriptionFullpricerenewalQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getItvSubscriptionFullpricerenewalQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.itv.subscription.fullpricerenewal.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getItvSubscriptionStatusPlatformQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.itv.subscription.status)[':platform']['$get']>
  >,
) {
  return ['itv', '/itv/subscription/status/:platform', toValue(args)] as const
}

export function getItvSubscriptionStatusPlatformQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.itv.subscription.status)[':platform']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getItvSubscriptionStatusPlatformQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.itv.subscription.status[':platform'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useItvSubscriptionStatusPlatform<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.itv.subscription.status)[':platform']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.itv.subscription.status)[':platform']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.itv.subscription.status)[':platform']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.itv.subscription.status)[':platform']['$get']>>
              >
            >
          >,
          ReturnType<typeof getItvSubscriptionStatusPlatformQueryKey>
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
          Awaited<ReturnType<(typeof client.itv.subscription.status)[':platform']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getItvSubscriptionStatusPlatformQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getItvSubscriptionStatusPlatformQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.itv.subscription.status[':platform'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getItvSubscriptionstateQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.itv.subscriptionstate.$get>>,
) {
  return ['itv', '/itv/subscriptionstate', toValue(args)] as const
}

export function getItvSubscriptionstateQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.itv.subscriptionstate.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getItvSubscriptionstateQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.itv.subscriptionstate.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useItvSubscriptionstate<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.itv.subscriptionstate.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.itv.subscriptionstate.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.itv.subscriptionstate.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.itv.subscriptionstate.$get>>>
            >
          >,
          ReturnType<typeof getItvSubscriptionstateQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.itv.subscriptionstate.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getItvSubscriptionstateQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getItvSubscriptionstateQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.itv.subscriptionstate.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getItvUpcominginvoiceQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.itv.upcominginvoice.$get>>,
) {
  return ['itv', '/itv/upcominginvoice', toValue(args)] as const
}

export function getItvUpcominginvoiceQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.itv.upcominginvoice.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getItvUpcominginvoiceQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.itv.upcominginvoice.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useItvUpcominginvoice<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.itv.upcominginvoice.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.itv.upcominginvoice.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.itv.upcominginvoice.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.itv.upcominginvoice.$get>>>
            >
          >,
          ReturnType<typeof getItvUpcominginvoiceQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.itv.upcominginvoice.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getItvUpcominginvoiceQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getItvUpcominginvoiceQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.itv.upcominginvoice.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutItvUpdateIntentStrongPlatformMutationKey() {
  return ['itv', '/itv/updateIntent/strong/:platform', 'PUT'] as const
}

export function getPutItvUpdateIntentStrongPlatformMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.itv.updateIntent.strong)[':platform']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.itv.updateIntent.strong)[':platform']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutItvUpdateIntentStrongPlatformMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.itv.updateIntent.strong)[':platform']['$put']>,
    ) {
      return parseResponse(client.itv.updateIntent.strong[':platform'].$put(args, options))
    },
  })
}

export function usePutItvUpdateIntentStrongPlatform<
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
                Awaited<ReturnType<(typeof client.itv.updateIntent.strong)[':platform']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.itv.updateIntent.strong)[':platform']['$put']>,
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
  const mutationDefaults = getPutItvUpdateIntentStrongPlatformMutationOptions<
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

export function getPutItvUpdatePaymentStrongPlatformMutationKey() {
  return ['itv', '/itv/updatePayment/strong/:platform', 'PUT'] as const
}

export function getPutItvUpdatePaymentStrongPlatformMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.itv.updatePayment.strong)[':platform']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.itv.updatePayment.strong)[':platform']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutItvUpdatePaymentStrongPlatformMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.itv.updatePayment.strong)[':platform']['$put']>,
    ) {
      return parseResponse(client.itv.updatePayment.strong[':platform'].$put(args, options))
    },
  })
}

export function usePutItvUpdatePaymentStrongPlatform<
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
                  Awaited<ReturnType<(typeof client.itv.updatePayment.strong)[':platform']['$put']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.itv.updatePayment.strong)[':platform']['$put']>,
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
  const mutationDefaults = getPutItvUpdatePaymentStrongPlatformMutationOptions<
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

export function getItvVoucherPlanIdVoucherIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.itv.voucher)[':planId'][':voucherId']['$get']>
  >,
) {
  return ['itv', '/itv/voucher/:planId/:voucherId', toValue(args)] as const
}

export function getItvVoucherPlanIdVoucherIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.itv.voucher)[':planId'][':voucherId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getItvVoucherPlanIdVoucherIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.itv.voucher[':planId'][':voucherId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useItvVoucherPlanIdVoucherId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.itv.voucher)[':planId'][':voucherId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.itv.voucher)[':planId'][':voucherId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.itv.voucher)[':planId'][':voucherId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.itv.voucher)[':planId'][':voucherId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getItvVoucherPlanIdVoucherIdQueryKey>
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
          Awaited<ReturnType<(typeof client.itv.voucher)[':planId'][':voucherId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getItvVoucherPlanIdVoucherIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getItvVoucherPlanIdVoucherIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.itv.voucher[':planId'][':voucherId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostItvVoucherPlatformMutationKey() {
  return ['itv', '/itv/voucher/:platform', 'POST'] as const
}

export function getPostItvVoucherPlatformMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.itv.voucher)[':platform']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.itv.voucher)[':platform']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostItvVoucherPlatformMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.itv.voucher)[':platform']['$post']>) {
      return parseResponse(client.itv.voucher[':platform'].$post(args, options))
    },
  })
}

export function usePostItvVoucherPlatform<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.itv.voucher)[':platform']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.itv.voucher)[':platform']['$post']>,
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
  const mutationDefaults = getPostItvVoucherPlatformMutationOptions<TError, TOnMutateResult>(
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

export function getListsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.lists.$get>>,
) {
  return ['lists', '/lists', toValue(args)] as const
}

export function getListsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.lists.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getListsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.lists.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useLists<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lists.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.lists.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lists.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lists.$get>>>>>,
          ReturnType<typeof getListsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lists.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getListsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getListsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.lists.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getListsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.lists)[':id']['$get']>>,
) {
  return ['lists', '/lists/:id', toValue(args)] as const
}

export function getListsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.lists)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getListsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.lists[':id'].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useListsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.lists)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.lists)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.lists)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.lists)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getListsIdQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.lists)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getListsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getListsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.lists[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPageQueryKey(args: MaybeRefOrGetter<InferRequestType<typeof client.page.$get>>) {
  return ['page', '/page', toValue(args)] as const
}

export function getPageQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.page.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPageQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.page.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function usePage<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.page.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.page.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.page.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.page.$get>>>>>,
          ReturnType<typeof getPageQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.page.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getPageQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPageQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.page.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPlansIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.plans)[':id']['$get']>>,
) {
  return ['plans', '/plans/:id', toValue(args)] as const
}

export function getPlansIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.plans)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPlansIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.plans[':id'].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function usePlansId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.plans)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.plans)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.plans)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.plans)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getPlansIdQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.plans)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getPlansIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPlansIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.plans[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostRegisterMutationKey() {
  return ['register', '/register', 'POST'] as const
}

export function getPostRegisterMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.register.$post>>>>>,
    TError,
    InferRequestType<typeof client.register.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostRegisterMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.register.$post>) {
      return parseResponse(client.register.$post(args, options))
    },
  })
}

export function usePostRegister<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.register.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.register.$post>,
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
  const mutationDefaults = getPostRegisterMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostRequestPasswordResetMutationKey() {
  return ['request-password-reset', '/request-password-reset', 'POST'] as const
}

export function getPostRequestPasswordResetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['request-password-reset']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client)['request-password-reset']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostRequestPasswordResetMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['request-password-reset']['$post']>) {
      return parseResponse(client['request-password-reset'].$post(args, options))
    },
  })
}

export function usePostRequestPasswordReset<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client)['request-password-reset']['$post']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client)['request-password-reset']['$post']>,
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
  const mutationDefaults = getPostRequestPasswordResetMutationOptions<TError, TOnMutateResult>(
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

export function getPostResetPasswordMutationKey() {
  return ['reset-password', '/reset-password', 'POST'] as const
}

export function getPostResetPasswordMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['reset-password']['$post']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client)['reset-password']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostResetPasswordMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['reset-password']['$post']>) {
      return parseResponse(client['reset-password'].$post(args, options))
    },
  })
}

export function usePostResetPassword<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client)['reset-password']['$post']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client)['reset-password']['$post']>,
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
  const mutationDefaults = getPostResetPasswordMutationOptions<TError, TOnMutateResult>(
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

export function getSamsungPreviewQueryKey() {
  return ['samsung-preview', '/samsung-preview'] as const
}

export function getSamsungPreviewQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getSamsungPreviewQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['samsung-preview'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSamsungPreview<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['samsung-preview']['$get']>>>
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
              typeof parseResponse<Awaited<ReturnType<(typeof client)['samsung-preview']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['samsung-preview']['$get']>>>
            >
          >,
          ReturnType<typeof getSamsungPreviewQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['samsung-preview']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSamsungPreviewQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getSamsungPreviewQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client['samsung-preview'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSchedulesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.schedules.$get>>,
) {
  return ['schedules', '/schedules', toValue(args)] as const
}

export function getSchedulesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.schedules.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSchedulesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.schedules.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useSchedules<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.schedules.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.schedules.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.schedules.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.schedules.$get>>>>
          >,
          ReturnType<typeof getSchedulesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.schedules.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSchedulesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSchedulesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.schedules.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSearchQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.search.$get>>,
) {
  return ['search', '/search', toValue(args)] as const
}

export function getSearchQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.search.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSearchQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.search.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useSearch<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.search.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.$get>>>>>,
          ReturnType<typeof getSearchQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSearchQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSearchQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.search.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostVerifyEmailMutationKey() {
  return ['verify-email', '/verify-email', 'POST'] as const
}

export function getPostVerifyEmailMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['verify-email']['$post']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client)['verify-email']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostVerifyEmailMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['verify-email']['$post']>) {
      return parseResponse(client['verify-email'].$post(args, options))
    },
  })
}

export function usePostVerifyEmail<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<(typeof client)['verify-email']['$post']>>>
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client)['verify-email']['$post']>,
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
  const mutationDefaults = getPostVerifyEmailMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}
