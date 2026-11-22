import { createQuery, createMutation, queryOptions, mutationOptions } from '@tanstack/solid-query'
import type {
  UndefinedInitialDataOptions,
  CreateMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/solid-query'
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

export function getAccountQueryKey(args: InferRequestType<typeof client.account.$get>) {
  return ['account', '/account', args] as const
}

export function getAccountQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.account.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAccountQueryKey>
  >({
    queryKey: getAccountQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.account.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createAccount<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.account.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getAccountQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAccountQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPatchAccount<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.$patch>>>>
            >
          | undefined,
          TError,
          InferRequestType<typeof client.account.$patch>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchAccountMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getAccountBillingMethodsQueryKey(
  args: InferRequestType<typeof client.account.billing.methods.$get>,
) {
  return ['account', '/account/billing/methods', args] as const
}

export function getAccountBillingMethodsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.account.billing.methods.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.account.billing.methods.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.account.billing.methods.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountBillingMethodsQueryKey>
  >({
    queryKey: getAccountBillingMethodsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.account.billing.methods.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAccountBillingMethods<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.account.billing.methods.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.account.billing.methods.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.account.billing.methods.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getAccountBillingMethodsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAccountBillingMethodsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostAccountBillingMethods<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.account.billing.methods.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.account.billing.methods.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAccountBillingMethodsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getAccountBillingMethodsIdQueryKey(
  args: InferRequestType<(typeof client.account.billing.methods)[':id']['$get']>,
) {
  return ['account', '/account/billing/methods/:id', args] as const
}

export function getAccountBillingMethodsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.account.billing.methods)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.account.billing.methods)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAccountBillingMethodsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.account.billing.methods[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAccountBillingMethodsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.account.billing.methods)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.account.billing.methods)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAccountBillingMethodsIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createDeleteAccountBillingMethodsId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteAccountBillingMethodsIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getAccountBillingPurchasesQueryKey(
  args: InferRequestType<typeof client.account.billing.purchases.$get>,
) {
  return ['account', '/account/billing/purchases', args] as const
}

export function getAccountBillingPurchasesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.account.billing.purchases.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.account.billing.purchases.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.account.billing.purchases.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountBillingPurchasesQueryKey>
  >({
    queryKey: getAccountBillingPurchasesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.account.billing.purchases.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAccountBillingPurchases<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.account.billing.purchases.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.account.billing.purchases.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.account.billing.purchases.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getAccountBillingPurchasesQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAccountBillingPurchasesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostAccountBillingPurchases<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAccountBillingPurchasesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPutAccountBillingSubscriptionsId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutAccountBillingSubscriptionsIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteAccountBillingSubscriptionsId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteAccountBillingSubscriptionsIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getAccountDevicesQueryKey(
  args: InferRequestType<typeof client.account.devices.$get>,
) {
  return ['account', '/account/devices', args] as const
}

export function getAccountDevicesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.devices.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.account.devices.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.devices.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAccountDevicesQueryKey>
  >({
    queryKey: getAccountDevicesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.account.devices.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createAccountDevices<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.devices.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.account.devices.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.account.devices.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getAccountDevicesQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAccountDevicesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostAccountDevices<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.account.devices.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.account.devices.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAccountDevicesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostAccountDevicesAuthorization<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAccountDevicesAuthorizationMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getAccountDevicesIdQueryKey(
  args: InferRequestType<(typeof client.account.devices)[':id']['$get']>,
) {
  return ['account', '/account/devices/:id', args] as const
}

export function getAccountDevicesIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.account.devices)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.account.devices)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.account.devices)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountDevicesIdQueryKey>
  >({
    queryKey: getAccountDevicesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.account.devices[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAccountDevicesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.account.devices)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.account.devices)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.account.devices)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getAccountDevicesIdQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAccountDevicesIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createDeleteAccountDevicesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteAccountDevicesIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPutAccountDevicesIdName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutAccountDevicesIdNameMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getAccountEntitlementsQueryKey(
  args: InferRequestType<typeof client.account.entitlements.$get>,
) {
  return ['account', '/account/entitlements', args] as const
}

export function getAccountEntitlementsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.entitlements.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.account.entitlements.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.entitlements.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAccountEntitlementsQueryKey>
  >({
    queryKey: getAccountEntitlementsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.account.entitlements.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createAccountEntitlements<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.entitlements.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.account.entitlements.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.account.entitlements.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getAccountEntitlementsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAccountEntitlementsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getAccountItemsIdVideosQueryKey(
  args: InferRequestType<(typeof client.account.items)[':id']['videos']['$get']>,
) {
  return ['account', '/account/items/:id/videos', args] as const
}

export function getAccountItemsIdVideosQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.account.items)[':id']['videos']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.account.items)[':id']['videos']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAccountItemsIdVideosQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.account.items[':id'].videos.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAccountItemsIdVideos<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.account.items)[':id']['videos']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.account.items)[':id']['videos']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAccountItemsIdVideosQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getAccountItemsIdVideosGuardedQueryKey(
  args: InferRequestType<(typeof client.account.items)[':id']['videos-guarded']['$get']>,
) {
  return ['account', '/account/items/:id/videos-guarded', args] as const
}

export function getAccountItemsIdVideosGuardedQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.account.items)[':id']['videos-guarded']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.account.items)[':id']['videos-guarded']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAccountItemsIdVideosGuardedQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.account.items[':id']['videos-guarded'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAccountItemsIdVideosGuarded<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.account.items)[':id']['videos-guarded']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.account.items)[':id']['videos-guarded']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAccountItemsIdVideosGuardedQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getAccountNonceQueryKey(args: InferRequestType<typeof client.account.nonce.$get>) {
  return ['account', '/account/nonce', args] as const
}

export function getAccountNonceQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.nonce.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.account.nonce.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.nonce.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAccountNonceQueryKey>
  >({
    queryKey: getAccountNonceQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.account.nonce.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createAccountNonce<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.nonce.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.account.nonce.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.nonce.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getAccountNonceQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAccountNonceQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPutAccountPassword<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<typeof client.account.password.$put>>>
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.account.password.$put>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutAccountPasswordMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPutAccountPin<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.pin.$put>>>>
            >
          | undefined,
          TError,
          InferRequestType<typeof client.account.pin.$put>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutAccountPinMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getAccountProfileQueryKey(
  args: InferRequestType<typeof client.account.profile.$get>,
) {
  return ['account', '/account/profile', args] as const
}

export function getAccountProfileQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.profile.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.account.profile.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.profile.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAccountProfileQueryKey>
  >({
    queryKey: getAccountProfileQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.account.profile.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createAccountProfile<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.profile.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.account.profile.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.account.profile.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getAccountProfileQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAccountProfileQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getAccountProfileBookmarksQueryKey(
  args: InferRequestType<typeof client.account.profile.bookmarks.$get>,
) {
  return ['account', '/account/profile/bookmarks', args] as const
}

export function getAccountProfileBookmarksQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.account.profile.bookmarks.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.account.profile.bookmarks.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.account.profile.bookmarks.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountProfileBookmarksQueryKey>
  >({
    queryKey: getAccountProfileBookmarksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.account.profile.bookmarks.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAccountProfileBookmarks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.account.profile.bookmarks.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.account.profile.bookmarks.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.account.profile.bookmarks.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getAccountProfileBookmarksQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAccountProfileBookmarksQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getAccountProfileBookmarksListQueryKey(
  args: InferRequestType<typeof client.account.profile.bookmarks.list.$get>,
) {
  return ['account', '/account/profile/bookmarks/list', args] as const
}

export function getAccountProfileBookmarksListQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.account.profile.bookmarks.list.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.account.profile.bookmarks.list.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.account.profile.bookmarks.list.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountProfileBookmarksListQueryKey>
  >({
    queryKey: getAccountProfileBookmarksListQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.account.profile.bookmarks.list.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAccountProfileBookmarksList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.account.profile.bookmarks.list.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.account.profile.bookmarks.list.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.account.profile.bookmarks.list.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getAccountProfileBookmarksListQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAccountProfileBookmarksListQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getAccountProfileBookmarksItemIdQueryKey(
  args: InferRequestType<(typeof client.account.profile.bookmarks)[':itemId']['$get']>,
) {
  return ['account', '/account/profile/bookmarks/:itemId', args] as const
}

export function getAccountProfileBookmarksItemIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.account.profile.bookmarks)[':itemId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.account.profile.bookmarks)[':itemId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAccountProfileBookmarksItemIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.account.profile.bookmarks[':itemId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAccountProfileBookmarksItemId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.account.profile.bookmarks)[':itemId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.account.profile.bookmarks)[':itemId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAccountProfileBookmarksItemIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutAccountProfileBookmarksItemId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutAccountProfileBookmarksItemIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteAccountProfileBookmarksItemId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteAccountProfileBookmarksItemIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getAccountProfileContinueWatchingListQueryKey(
  args: InferRequestType<(typeof client.account.profile)['continue-watching']['list']['$get']>,
) {
  return ['account', '/account/profile/continue-watching/list', args] as const
}

export function getAccountProfileContinueWatchingListQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.account.profile)['continue-watching']['list']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.account.profile)['continue-watching']['list']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAccountProfileContinueWatchingListQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.account.profile['continue-watching'].list.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAccountProfileContinueWatchingList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.account.profile)['continue-watching']['list']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.account.profile)['continue-watching']['list']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          ReturnType<typeof getAccountProfileContinueWatchingListQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAccountProfileContinueWatchingListQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getAccountProfileItemsItemIdNextQueryKey(
  args: InferRequestType<(typeof client.account.profile.items)[':itemId']['next']['$get']>,
) {
  return ['account', '/account/profile/items/:itemId/next', args] as const
}

export function getAccountProfileItemsItemIdNextQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.account.profile.items)[':itemId']['next']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.account.profile.items)[':itemId']['next']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAccountProfileItemsItemIdNextQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.account.profile.items[':itemId'].next.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAccountProfileItemsItemIdNext<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.account.profile.items)[':itemId']['next']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.account.profile.items)[':itemId']['next']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          ReturnType<typeof getAccountProfileItemsItemIdNextQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAccountProfileItemsItemIdNextQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getAccountProfileRatingsQueryKey(
  args: InferRequestType<typeof client.account.profile.ratings.$get>,
) {
  return ['account', '/account/profile/ratings', args] as const
}

export function getAccountProfileRatingsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.account.profile.ratings.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.account.profile.ratings.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.account.profile.ratings.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountProfileRatingsQueryKey>
  >({
    queryKey: getAccountProfileRatingsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.account.profile.ratings.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAccountProfileRatings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.account.profile.ratings.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.account.profile.ratings.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.account.profile.ratings.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getAccountProfileRatingsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAccountProfileRatingsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getAccountProfileRatingsListQueryKey(
  args: InferRequestType<typeof client.account.profile.ratings.list.$get>,
) {
  return ['account', '/account/profile/ratings/list', args] as const
}

export function getAccountProfileRatingsListQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.account.profile.ratings.list.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.account.profile.ratings.list.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.account.profile.ratings.list.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountProfileRatingsListQueryKey>
  >({
    queryKey: getAccountProfileRatingsListQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.account.profile.ratings.list.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAccountProfileRatingsList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.account.profile.ratings.list.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.account.profile.ratings.list.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.account.profile.ratings.list.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getAccountProfileRatingsListQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAccountProfileRatingsListQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getAccountProfileRatingsItemIdQueryKey(
  args: InferRequestType<(typeof client.account.profile.ratings)[':itemId']['$get']>,
) {
  return ['account', '/account/profile/ratings/:itemId', args] as const
}

export function getAccountProfileRatingsItemIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.account.profile.ratings)[':itemId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.account.profile.ratings)[':itemId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAccountProfileRatingsItemIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.account.profile.ratings[':itemId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAccountProfileRatingsItemId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.account.profile.ratings)[':itemId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.account.profile.ratings)[':itemId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAccountProfileRatingsItemIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutAccountProfileRatingsItemId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutAccountProfileRatingsItemIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getAccountProfileWatchedQueryKey(
  args: InferRequestType<typeof client.account.profile.watched.$get>,
) {
  return ['account', '/account/profile/watched', args] as const
}

export function getAccountProfileWatchedQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.account.profile.watched.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.account.profile.watched.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.account.profile.watched.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountProfileWatchedQueryKey>
  >({
    queryKey: getAccountProfileWatchedQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.account.profile.watched.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAccountProfileWatched<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.account.profile.watched.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.account.profile.watched.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.account.profile.watched.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getAccountProfileWatchedQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAccountProfileWatchedQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createDeleteAccountProfileWatched<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteAccountProfileWatchedMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getAccountProfileWatchedListQueryKey(
  args: InferRequestType<typeof client.account.profile.watched.list.$get>,
) {
  return ['account', '/account/profile/watched/list', args] as const
}

export function getAccountProfileWatchedListQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.account.profile.watched.list.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.account.profile.watched.list.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.account.profile.watched.list.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountProfileWatchedListQueryKey>
  >({
    queryKey: getAccountProfileWatchedListQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.account.profile.watched.list.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAccountProfileWatchedList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.account.profile.watched.list.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.account.profile.watched.list.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.account.profile.watched.list.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getAccountProfileWatchedListQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAccountProfileWatchedListQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getAccountProfileWatchedItemIdQueryKey(
  args: InferRequestType<(typeof client.account.profile.watched)[':itemId']['$get']>,
) {
  return ['account', '/account/profile/watched/:itemId', args] as const
}

export function getAccountProfileWatchedItemIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.account.profile.watched)[':itemId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.account.profile.watched)[':itemId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAccountProfileWatchedItemIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.account.profile.watched[':itemId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAccountProfileWatchedItemId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.account.profile.watched)[':itemId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.account.profile.watched)[':itemId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAccountProfileWatchedItemIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutAccountProfileWatchedItemId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutAccountProfileWatchedItemIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostAccountProfiles<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.account.profiles.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.account.profiles.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAccountProfilesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getAccountProfilesIdQueryKey(
  args: InferRequestType<(typeof client.account.profiles)[':id']['$get']>,
) {
  return ['account', '/account/profiles/:id', args] as const
}

export function getAccountProfilesIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.account.profiles)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.account.profiles)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.account.profiles)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountProfilesIdQueryKey>
  >({
    queryKey: getAccountProfilesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.account.profiles[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAccountProfilesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.account.profiles)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.account.profiles)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.account.profiles)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getAccountProfilesIdQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAccountProfilesIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createDeleteAccountProfilesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteAccountProfilesIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPatchAccountProfilesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchAccountProfilesIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostAccountRequestEmailVerification<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAccountRequestEmailVerificationMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostAuthorization<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.authorization.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.authorization.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAuthorizationMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteAuthorization<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<typeof client.authorization.$delete>>>
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.authorization.$delete>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteAuthorizationMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostAuthorizationDevice<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.authorization.device.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.authorization.device.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAuthorizationDeviceMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostAuthorizationDeviceCode<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAuthorizationDeviceCodeMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostAuthorizationProfile<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.authorization.profile.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.authorization.profile.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAuthorizationProfileMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostAuthorizationRefresh<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.authorization.refresh.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.authorization.refresh.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAuthorizationRefreshMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostAuthorizationSso<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.authorization.sso.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.authorization.sso.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAuthorizationSsoMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getBtPlanTokenQueryKey(
  args: InferRequestType<(typeof client.bt.plan)[':token']['$get']>,
) {
  return ['bt', '/bt/plan/:token', args] as const
}

export function getBtPlanTokenQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.bt.plan)[':token']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.bt.plan)[':token']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.bt.plan)[':token']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBtPlanTokenQueryKey>
  >({
    queryKey: getBtPlanTokenQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.bt.plan[':token'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createBtPlanToken<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.bt.plan)[':token']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.bt.plan)[':token']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.bt.plan)[':token']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getBtPlanTokenQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getBtPlanTokenQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getBtPlansQueryKey(args: InferRequestType<typeof client.bt.plans.$get>) {
  return ['bt', '/bt/plans', args] as const
}

export function getBtPlansQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bt.plans.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.bt.plans.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bt.plans.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getBtPlansQueryKey>
  >({
    queryKey: getBtPlansQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.bt.plans.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createBtPlans<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bt.plans.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.bt.plans.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bt.plans.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getBtPlansQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getBtPlansQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostBtTokenAssign<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.bt.token.assign.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.bt.token.assign.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostBtTokenAssignMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getBtTokenValidateQueryKey(
  args: InferRequestType<typeof client.bt.token.validate.$get>,
) {
  return ['bt', '/bt/token/validate', args] as const
}

export function getBtTokenValidateQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bt.token.validate.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.bt.token.validate.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bt.token.validate.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getBtTokenValidateQueryKey>
  >({
    queryKey: getBtTokenValidateQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.bt.token.validate.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createBtTokenValidate<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bt.token.validate.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.bt.token.validate.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.bt.token.validate.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getBtTokenValidateQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getBtTokenValidateQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getCheckSubscriptionIdQueryKey(
  args: InferRequestType<(typeof client)['check-subscription'][':id']['$get']>,
) {
  return ['check-subscription', '/check-subscription/:id', args] as const
}

export function getCheckSubscriptionIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['check-subscription'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['check-subscription'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getCheckSubscriptionIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['check-subscription'][':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCheckSubscriptionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['check-subscription'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['check-subscription'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getCheckSubscriptionIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getConfigQueryKey(args: InferRequestType<typeof client.config.$get>) {
  return ['config', '/config', args] as const
}

export function getConfigQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.config.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.config.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.config.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getConfigQueryKey>
  >({
    queryKey: getConfigQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.config.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createConfig<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.config.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.config.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.config.$get>>>>>,
          TError,
          TData,
          ReturnType<typeof getConfigQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getConfigQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getEeBtEligibilityQueryKey(
  args: InferRequestType<(typeof client)['ee-bt']['eligibility']['$get']>,
) {
  return ['ee-bt', '/ee-bt/eligibility', args] as const
}

export function getEeBtEligibilityQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['ee-bt']['eligibility']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['ee-bt']['eligibility']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['ee-bt']['eligibility']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEeBtEligibilityQueryKey>
  >({
    queryKey: getEeBtEligibilityQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['ee-bt'].eligibility.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createEeBtEligibility<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['ee-bt']['eligibility']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['ee-bt']['eligibility']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['ee-bt']['eligibility']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getEeBtEligibilityQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getEeBtEligibilityQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostEeMsisdn<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ee.msisdn.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.ee.msisdn.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostEeMsisdnMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostEeOffers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ee.offers.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.ee.offers.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostEeOffersMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPutEePin<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ee.pin.$put>>>>>,
          TError,
          InferRequestType<typeof client.ee.pin.$put>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutEePinMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostEePin<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ee.pin.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.ee.pin.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostEePinMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getEePlansQueryKey(args: InferRequestType<typeof client.ee.plans.$get>) {
  return ['ee', '/ee/plans', args] as const
}

export function getEePlansQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ee.plans.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.ee.plans.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ee.plans.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getEePlansQueryKey>
  >({
    queryKey: getEePlansQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ee.plans.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createEePlans<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ee.plans.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.ee.plans.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ee.plans.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getEePlansQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getEePlansQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getEePlansIdQueryKey(
  args: InferRequestType<(typeof client.ee.plans)[':id']['$get']>,
) {
  return ['ee', '/ee/plans/:id', args] as const
}

export function getEePlansIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.ee.plans)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.ee.plans)[':id']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.ee.plans)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getEePlansIdQueryKey>
  >({
    queryKey: getEePlansIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ee.plans[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createEePlansId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.ee.plans)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.ee.plans)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.ee.plans)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getEePlansIdQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getEePlansIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getEeTokenCreateQueryKey() {
  return ['ee', '/ee/token/create'] as const
}

export function getEeTokenCreateQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ee.token.create.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ee.token.create.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getEeTokenCreateQueryKey>
  >({
    queryKey: getEeTokenCreateQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.ee.token.create.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createEeTokenCreate<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ee.token.create.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.ee.token.create.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getEeTokenCreateQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getEeTokenCreateQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getItemsIdQueryKey(args: InferRequestType<(typeof client.items)[':id']['$get']>) {
  return ['items', '/items/:id', args] as const
}

export function getItemsIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.items)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.items)[':id']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.items)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getItemsIdQueryKey>
  >({
    queryKey: getItemsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.items[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createItemsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.items)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.items)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.items)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getItemsIdQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getItemsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getItemsIdChildrenQueryKey(
  args: InferRequestType<(typeof client.items)[':id']['children']['$get']>,
) {
  return ['items', '/items/:id/children', args] as const
}

export function getItemsIdChildrenQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.items)[':id']['children']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.items)[':id']['children']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.items)[':id']['children']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getItemsIdChildrenQueryKey>
  >({
    queryKey: getItemsIdChildrenQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.items[':id'].children.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createItemsIdChildren<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.items)[':id']['children']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.items)[':id']['children']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.items)[':id']['children']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getItemsIdChildrenQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getItemsIdChildrenQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getItemsIdRelatedQueryKey(
  args: InferRequestType<(typeof client.items)[':id']['related']['$get']>,
) {
  return ['items', '/items/:id/related', args] as const
}

export function getItemsIdRelatedQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.items)[':id']['related']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.items)[':id']['related']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.items)[':id']['related']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getItemsIdRelatedQueryKey>
  >({
    queryKey: getItemsIdRelatedQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.items[':id'].related.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createItemsIdRelated<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.items)[':id']['related']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.items)[':id']['related']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.items)[':id']['related']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getItemsIdRelatedQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getItemsIdRelatedQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getItemsIdVideosQueryKey(
  args: InferRequestType<(typeof client.items)[':id']['videos']['$get']>,
) {
  return ['items', '/items/:id/videos', args] as const
}

export function getItemsIdVideosQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.items)[':id']['videos']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.items)[':id']['videos']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.items)[':id']['videos']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getItemsIdVideosQueryKey>
  >({
    queryKey: getItemsIdVideosQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.items[':id'].videos.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createItemsIdVideos<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.items)[':id']['videos']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.items)[':id']['videos']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.items)[':id']['videos']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getItemsIdVideosQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getItemsIdVideosQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getItemsItemIdNextQueryKey(
  args: InferRequestType<(typeof client.items)[':itemId']['next']['$get']>,
) {
  return ['items', '/items/:itemId/next', args] as const
}

export function getItemsItemIdNextQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.items)[':itemId']['next']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.items)[':itemId']['next']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.items)[':itemId']['next']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getItemsItemIdNextQueryKey>
  >({
    queryKey: getItemsItemIdNextQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.items[':itemId'].next.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createItemsItemIdNext<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.items)[':itemId']['next']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.items)[':itemId']['next']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.items)[':itemId']['next']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getItemsItemIdNextQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getItemsItemIdNextQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostItvBillinghistoryPlatform<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostItvBillinghistoryPlatformMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPutItvCardsPlatform<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutItvCardsPlatformMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostItvCardsPlatform<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostItvCardsPlatformMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostItvChangeemail<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<typeof client.itv.changeemail.$post>>>
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.itv.changeemail.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostItvChangeemailMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostItvChangemarketing<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<typeof client.itv.changemarketing.$post>>>
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.itv.changemarketing.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostItvChangemarketingMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostItvDeleteaccount<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<typeof client.itv.deleteaccount.$post>>>
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.itv.deleteaccount.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostItvDeleteaccountMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getItvEntitlementsCurrentQueryKey(
  args: InferRequestType<typeof client.itv.entitlements.current.$get>,
) {
  return ['itv', '/itv/entitlements/current', args] as const
}

export function getItvEntitlementsCurrentQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.itv.entitlements.current.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.itv.entitlements.current.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.itv.entitlements.current.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getItvEntitlementsCurrentQueryKey>
  >({
    queryKey: getItvEntitlementsCurrentQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.itv.entitlements.current.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createItvEntitlementsCurrent<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.itv.entitlements.current.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.itv.entitlements.current.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.itv.entitlements.current.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getItvEntitlementsCurrentQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getItvEntitlementsCurrentQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getItvEntitlementsHistoryQueryKey(
  args: InferRequestType<typeof client.itv.entitlements.history.$get>,
) {
  return ['itv', '/itv/entitlements/history', args] as const
}

export function getItvEntitlementsHistoryQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.itv.entitlements.history.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.itv.entitlements.history.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.itv.entitlements.history.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getItvEntitlementsHistoryQueryKey>
  >({
    queryKey: getItvEntitlementsHistoryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.itv.entitlements.history.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createItvEntitlementsHistory<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.itv.entitlements.history.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.itv.entitlements.history.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.itv.entitlements.history.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getItvEntitlementsHistoryQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getItvEntitlementsHistoryQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getItvFeatureFlagFeatureQueryKey(
  args: InferRequestType<(typeof client.itv.featureFlag)[':feature']['$get']>,
) {
  return ['itv', '/itv/featureFlag/:feature', args] as const
}

export function getItvFeatureFlagFeatureQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.itv.featureFlag)[':feature']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.itv.featureFlag)[':feature']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getItvFeatureFlagFeatureQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.itv.featureFlag[':feature'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createItvFeatureFlagFeature<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.itv.featureFlag)[':feature']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.itv.featureFlag)[':feature']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getItvFeatureFlagFeatureQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostItvGooglepaySubscription<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostItvGooglepaySubscriptionMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getItvHadEntitlementsQueryKey(
  args: InferRequestType<typeof client.itv.had.entitlements.$get>,
) {
  return ['itv', '/itv/had/entitlements', args] as const
}

export function getItvHadEntitlementsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.itv.had.entitlements.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.itv.had.entitlements.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.itv.had.entitlements.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getItvHadEntitlementsQueryKey>
  >({
    queryKey: getItvHadEntitlementsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.itv.had.entitlements.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createItvHadEntitlements<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.itv.had.entitlements.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.itv.had.entitlements.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.itv.had.entitlements.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getItvHadEntitlementsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getItvHadEntitlementsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostItvItemsClips<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.itv.items.clips.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.itv.items.clips.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostItvItemsClipsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostItvItemsDownloadable<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.itv.items.downloadable.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.itv.items.downloadable.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostItvItemsDownloadableMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getItvItemsummaryExternalIdQueryKey(
  args: InferRequestType<(typeof client.itv.itemsummary)[':externalId']['$get']>,
) {
  return ['itv', '/itv/itemsummary/:externalId', args] as const
}

export function getItvItemsummaryExternalIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.itv.itemsummary)[':externalId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.itv.itemsummary)[':externalId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getItvItemsummaryExternalIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.itv.itemsummary[':externalId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createItvItemsummaryExternalId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.itv.itemsummary)[':externalId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.itv.itemsummary)[':externalId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getItvItemsummaryExternalIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getItvPageQueryKey(args: InferRequestType<typeof client.itv.page.$get>) {
  return ['itv', '/itv/page', args] as const
}

export function getItvPageQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.itv.page.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.itv.page.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.itv.page.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getItvPageQueryKey>
  >({
    queryKey: getItvPageQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.itv.page.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createItvPage<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.itv.page.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.itv.page.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.itv.page.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getItvPageQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getItvPageQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostItvPinauthorization<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.itv.pinauthorization.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.itv.pinauthorization.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostItvPinauthorizationMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostItvPlanPlatform<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostItvPlanPlatformMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getItvPlansPlatformQueryKey(
  args: InferRequestType<(typeof client.itv.plans)[':platform']['$get']>,
) {
  return ['itv', '/itv/plans/:platform', args] as const
}

export function getItvPlansPlatformQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.itv.plans)[':platform']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.itv.plans)[':platform']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.itv.plans)[':platform']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getItvPlansPlatformQueryKey>
  >({
    queryKey: getItvPlansPlatformQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.itv.plans[':platform'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createItvPlansPlatform<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.itv.plans)[':platform']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.itv.plans)[':platform']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.itv.plans)[':platform']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getItvPlansPlatformQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getItvPlansPlatformQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getItvProfileQueryKey(args: InferRequestType<typeof client.itv.profile.$get>) {
  return ['itv', '/itv/profile', args] as const
}

export function getItvProfileQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.itv.profile.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.itv.profile.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.itv.profile.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getItvProfileQueryKey>
  >({
    queryKey: getItvProfileQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.itv.profile.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createItvProfile<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.itv.profile.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.itv.profile.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.itv.profile.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getItvProfileQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getItvProfileQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPutItvProfile<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.itv.profile.$put>>>>
            >
          | undefined,
          TError,
          InferRequestType<typeof client.itv.profile.$put>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutItvProfileMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getItvProfileRecommendationListQueryKey(
  args: InferRequestType<typeof client.itv.profile.recommendation.list.$get>,
) {
  return ['itv', '/itv/profile/recommendation/list', args] as const
}

export function getItvProfileRecommendationListQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.itv.profile.recommendation.list.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.itv.profile.recommendation.list.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getItvProfileRecommendationListQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.itv.profile.recommendation.list.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createItvProfileRecommendationList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.itv.profile.recommendation.list.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.itv.profile.recommendation.list.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getItvProfileRecommendationListQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostItvProfiletoken<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.itv.profiletoken.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.itv.profiletoken.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostItvProfiletokenMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getItvPurchasePlatformQueryKey(
  args: InferRequestType<(typeof client.itv.purchase)[':platform']['$get']>,
) {
  return ['itv', '/itv/purchase/:platform', args] as const
}

export function getItvPurchasePlatformQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.itv.purchase)[':platform']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.itv.purchase)[':platform']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.itv.purchase)[':platform']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getItvPurchasePlatformQueryKey>
  >({
    queryKey: getItvPurchasePlatformQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.itv.purchase[':platform'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createItvPurchasePlatform<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.itv.purchase)[':platform']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.itv.purchase)[':platform']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.itv.purchase)[':platform']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getItvPurchasePlatformQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getItvPurchasePlatformQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostItvPurchasePlatform<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostItvPurchasePlatformMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteItvPurchasePlatform<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteItvPurchasePlatformMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostItvPurchasePlatformStrong<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostItvPurchasePlatformStrongMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostItvPurchasePlatformWithoffer<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostItvPurchasePlatformWithofferMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostItvResubscribePlatform<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostItvResubscribePlatformMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getItvRokuPlansQueryKey(args: InferRequestType<typeof client.itv.roku.plans.$get>) {
  return ['itv', '/itv/roku/plans', args] as const
}

export function getItvRokuPlansQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.itv.roku.plans.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.itv.roku.plans.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.itv.roku.plans.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getItvRokuPlansQueryKey>
  >({
    queryKey: getItvRokuPlansQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.itv.roku.plans.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createItvRokuPlans<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.itv.roku.plans.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.itv.roku.plans.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.itv.roku.plans.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getItvRokuPlansQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getItvRokuPlansQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostItvRokuTransactionTransactionid<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostItvRokuTransactionTransactionidMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getItvSaveOfferQueryKey(
  args: InferRequestType<(typeof client.itv)['save-offer']['$get']>,
) {
  return ['itv', '/itv/save-offer', args] as const
}

export function getItvSaveOfferQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.itv)['save-offer']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.itv)['save-offer']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.itv)['save-offer']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getItvSaveOfferQueryKey>
  >({
    queryKey: getItvSaveOfferQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.itv['save-offer'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createItvSaveOffer<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.itv)['save-offer']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.itv)['save-offer']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.itv)['save-offer']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getItvSaveOfferQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getItvSaveOfferQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostItvSaveOffer<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostItvSaveOfferMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getItvSubscriptionFullpricerenewalQueryKey(
  args: InferRequestType<typeof client.itv.subscription.fullpricerenewal.$get>,
) {
  return ['itv', '/itv/subscription/fullpricerenewal', args] as const
}

export function getItvSubscriptionFullpricerenewalQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.itv.subscription.fullpricerenewal.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.itv.subscription.fullpricerenewal.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getItvSubscriptionFullpricerenewalQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.itv.subscription.fullpricerenewal.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createItvSubscriptionFullpricerenewal<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.itv.subscription.fullpricerenewal.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.itv.subscription.fullpricerenewal.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getItvSubscriptionFullpricerenewalQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getItvSubscriptionStatusPlatformQueryKey(
  args: InferRequestType<(typeof client.itv.subscription.status)[':platform']['$get']>,
) {
  return ['itv', '/itv/subscription/status/:platform', args] as const
}

export function getItvSubscriptionStatusPlatformQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.itv.subscription.status)[':platform']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.itv.subscription.status)[':platform']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getItvSubscriptionStatusPlatformQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.itv.subscription.status[':platform'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createItvSubscriptionStatusPlatform<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.itv.subscription.status)[':platform']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.itv.subscription.status)[':platform']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getItvSubscriptionStatusPlatformQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getItvSubscriptionstateQueryKey(
  args: InferRequestType<typeof client.itv.subscriptionstate.$get>,
) {
  return ['itv', '/itv/subscriptionstate', args] as const
}

export function getItvSubscriptionstateQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.itv.subscriptionstate.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.itv.subscriptionstate.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.itv.subscriptionstate.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getItvSubscriptionstateQueryKey>
  >({
    queryKey: getItvSubscriptionstateQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.itv.subscriptionstate.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createItvSubscriptionstate<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.itv.subscriptionstate.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.itv.subscriptionstate.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.itv.subscriptionstate.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getItvSubscriptionstateQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getItvSubscriptionstateQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getItvUpcominginvoiceQueryKey(
  args: InferRequestType<typeof client.itv.upcominginvoice.$get>,
) {
  return ['itv', '/itv/upcominginvoice', args] as const
}

export function getItvUpcominginvoiceQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.itv.upcominginvoice.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.itv.upcominginvoice.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.itv.upcominginvoice.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getItvUpcominginvoiceQueryKey>
  >({
    queryKey: getItvUpcominginvoiceQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.itv.upcominginvoice.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createItvUpcominginvoice<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.itv.upcominginvoice.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.itv.upcominginvoice.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.itv.upcominginvoice.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getItvUpcominginvoiceQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getItvUpcominginvoiceQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPutItvUpdateIntentStrongPlatform<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutItvUpdateIntentStrongPlatformMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPutItvUpdatePaymentStrongPlatform<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutItvUpdatePaymentStrongPlatformMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getItvVoucherPlanIdVoucherIdQueryKey(
  args: InferRequestType<(typeof client.itv.voucher)[':planId'][':voucherId']['$get']>,
) {
  return ['itv', '/itv/voucher/:planId/:voucherId', args] as const
}

export function getItvVoucherPlanIdVoucherIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.itv.voucher)[':planId'][':voucherId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.itv.voucher)[':planId'][':voucherId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getItvVoucherPlanIdVoucherIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.itv.voucher[':planId'][':voucherId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createItvVoucherPlanIdVoucherId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.itv.voucher)[':planId'][':voucherId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.itv.voucher)[':planId'][':voucherId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getItvVoucherPlanIdVoucherIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostItvVoucherPlatform<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostItvVoucherPlatformMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getListsQueryKey(args: InferRequestType<typeof client.lists.$get>) {
  return ['lists', '/lists', args] as const
}

export function getListsQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lists.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.lists.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lists.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getListsQueryKey>
  >({
    queryKey: getListsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.lists.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createLists<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lists.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.lists.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lists.$get>>>>>,
          TError,
          TData,
          ReturnType<typeof getListsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getListsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getListsIdQueryKey(args: InferRequestType<(typeof client.lists)[':id']['$get']>) {
  return ['lists', '/lists/:id', args] as const
}

export function getListsIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.lists)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.lists)[':id']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.lists)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getListsIdQueryKey>
  >({
    queryKey: getListsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.lists[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createListsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.lists)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.lists)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.lists)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getListsIdQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getListsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPageQueryKey(args: InferRequestType<typeof client.page.$get>) {
  return ['page', '/page', args] as const
}

export function getPageQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.page.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.page.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.page.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getPageQueryKey>
  >({
    queryKey: getPageQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.page.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createPage<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.page.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.page.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.page.$get>>>>>,
          TError,
          TData,
          ReturnType<typeof getPageQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getPageQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPlansIdQueryKey(args: InferRequestType<(typeof client.plans)[':id']['$get']>) {
  return ['plans', '/plans/:id', args] as const
}

export function getPlansIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.plans)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.plans)[':id']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.plans)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getPlansIdQueryKey>
  >({
    queryKey: getPlansIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.plans[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createPlansId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.plans)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.plans)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.plans)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getPlansIdQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getPlansIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostRegister<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.register.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.register.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostRegisterMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostRequestPasswordReset<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostRequestPasswordResetMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostResetPassword<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostResetPasswordMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getSamsungPreviewQueryKey() {
  return ['samsung-preview', '/samsung-preview'] as const
}

export function getSamsungPreviewQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['samsung-preview']['$get']>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['samsung-preview']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSamsungPreviewQueryKey>
  >({
    queryKey: getSamsungPreviewQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client['samsung-preview'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSamsungPreview<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['samsung-preview']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['samsung-preview']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getSamsungPreviewQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSamsungPreviewQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getSchedulesQueryKey(args: InferRequestType<typeof client.schedules.$get>) {
  return ['schedules', '/schedules', args] as const
}

export function getSchedulesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.schedules.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.schedules.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.schedules.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSchedulesQueryKey>
  >({
    queryKey: getSchedulesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.schedules.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createSchedules<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.schedules.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.schedules.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.schedules.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getSchedulesQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSchedulesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getSearchQueryKey(args: InferRequestType<typeof client.search.$get>) {
  return ['search', '/search', args] as const
}

export function getSearchQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.search.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSearchQueryKey>
  >({
    queryKey: getSearchQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.search.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createSearch<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.search.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.$get>>>>>,
          TError,
          TData,
          ReturnType<typeof getSearchQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSearchQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostVerifyEmail<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<(typeof client)['verify-email']['$post']>>>
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client)['verify-email']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostVerifyEmailMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}
