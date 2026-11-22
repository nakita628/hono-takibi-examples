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

export function getV1Key() {
  return ['v1'] as const
}

export function getV1ProductsQueryKey(args: InferRequestType<typeof client.v1.products.$get>) {
  return ['v1', '/v1/products', args] as const
}

export function getV1ProductsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.products.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.products.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.products.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1ProductsQueryKey>
  >({
    queryKey: getV1ProductsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.products.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1Products<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.products.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v1.products.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.products.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getV1ProductsQueryKey>
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
    return { ...getV1ProductsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getV1AccountListSubscribersQueryKey(
  args: InferRequestType<(typeof client.v1)[':account:listSubscribers']['$get']>,
) {
  return ['v1', '/v1/:account:listSubscribers', args] as const
}

export function getV1AccountListSubscribersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)[':account:listSubscribers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)[':account:listSubscribers']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)[':account:listSubscribers']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AccountListSubscribersQueryKey>
  >({
    queryKey: getV1AccountListSubscribersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1[':account:listSubscribers'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1AccountListSubscribers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)[':account:listSubscribers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1)[':account:listSubscribers']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)[':account:listSubscribers']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV1AccountListSubscribersQueryKey>
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
      ...getV1AccountListSubscribersQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostV1AccountRegisterMutationKey() {
  return ['v1', '/v1/:account:register', 'POST'] as const
}

export function getPostV1AccountRegisterMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':account:register']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)[':account:register']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1AccountRegisterMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1)[':account:register']['$post']>) {
      return parseResponse(client.v1[':account:register'].$post(args, options))
    },
  })
}

export function createPostV1AccountRegister<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)[':account:register']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1)[':account:register']['$post']>,
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
    const mutationDefaults = getPostV1AccountRegisterMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1AccountUnregisterMutationKey() {
  return ['v1', '/v1/:account:unregister', 'POST'] as const
}

export function getPostV1AccountUnregisterMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)[':account:unregister']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)[':account:unregister']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1AccountUnregisterMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1)[':account:unregister']['$post']>) {
      return parseResponse(client.v1[':account:unregister'].$post(args, options))
    },
  })
}

export function createPostV1AccountUnregister<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)[':account:unregister']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1)[':account:unregister']['$post']>,
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
    const mutationDefaults = getPostV1AccountUnregisterMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1CustomerListPurchasableOffersQueryKey(
  args: InferRequestType<(typeof client.v1)[':customer:listPurchasableOffers']['$get']>,
) {
  return ['v1', '/v1/:customer:listPurchasableOffers', args] as const
}

export function getV1CustomerListPurchasableOffersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)[':customer:listPurchasableOffers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)[':customer:listPurchasableOffers']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)[':customer:listPurchasableOffers']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1CustomerListPurchasableOffersQueryKey>
  >({
    queryKey: getV1CustomerListPurchasableOffersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1[':customer:listPurchasableOffers'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1CustomerListPurchasableOffers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)[':customer:listPurchasableOffers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1)[':customer:listPurchasableOffers']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)[':customer:listPurchasableOffers']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV1CustomerListPurchasableOffersQueryKey>
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
      ...getV1CustomerListPurchasableOffersQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV1CustomerListPurchasableSkusQueryKey(
  args: InferRequestType<(typeof client.v1)[':customer:listPurchasableSkus']['$get']>,
) {
  return ['v1', '/v1/:customer:listPurchasableSkus', args] as const
}

export function getV1CustomerListPurchasableSkusQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)[':customer:listPurchasableSkus']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)[':customer:listPurchasableSkus']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)[':customer:listPurchasableSkus']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1CustomerListPurchasableSkusQueryKey>
  >({
    queryKey: getV1CustomerListPurchasableSkusQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1[':customer:listPurchasableSkus'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1CustomerListPurchasableSkus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)[':customer:listPurchasableSkus']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1)[':customer:listPurchasableSkus']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)[':customer:listPurchasableSkus']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV1CustomerListPurchasableSkusQueryKey>
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
      ...getV1CustomerListPurchasableSkusQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostV1CustomerProvisionCloudIdentityMutationKey() {
  return ['v1', '/v1/:customer:provisionCloudIdentity', 'POST'] as const
}

export function getPostV1CustomerProvisionCloudIdentityMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)[':customer:provisionCloudIdentity']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)[':customer:provisionCloudIdentity']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1CustomerProvisionCloudIdentityMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1)[':customer:provisionCloudIdentity']['$post']>,
    ) {
      return parseResponse(client.v1[':customer:provisionCloudIdentity'].$post(args, options))
    },
  })
}

export function createPostV1CustomerProvisionCloudIdentity<
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
                Awaited<ReturnType<(typeof client.v1)[':customer:provisionCloudIdentity']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1)[':customer:provisionCloudIdentity']['$post']>,
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
    const mutationDefaults = getPostV1CustomerProvisionCloudIdentityMutationOptions<
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

export function getV1EntitlementLookupOfferQueryKey(
  args: InferRequestType<(typeof client.v1)[':entitlement:lookupOffer']['$get']>,
) {
  return ['v1', '/v1/:entitlement:lookupOffer', args] as const
}

export function getV1EntitlementLookupOfferQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)[':entitlement:lookupOffer']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)[':entitlement:lookupOffer']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)[':entitlement:lookupOffer']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1EntitlementLookupOfferQueryKey>
  >({
    queryKey: getV1EntitlementLookupOfferQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1[':entitlement:lookupOffer'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1EntitlementLookupOffer<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)[':entitlement:lookupOffer']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1)[':entitlement:lookupOffer']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)[':entitlement:lookupOffer']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV1EntitlementLookupOfferQueryKey>
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
      ...getV1EntitlementLookupOfferQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV1NameQueryKey(args: InferRequestType<(typeof client.v1)[':name']['$get']>) {
  return ['v1', '/v1/:name', args] as const
}

export function getV1NameQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.v1)[':name']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1NameQueryKey>
  >({
    queryKey: getV1NameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1[':name'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1Name<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1)[':name']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV1NameQueryKey>
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
    return { ...getV1NameQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getDeleteV1NameMutationKey() {
  return ['v1', '/v1/:name', 'DELETE'] as const
}

export function getDeleteV1NameMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name']['$delete']>>>>
    >,
    TError,
    InferRequestType<(typeof client.v1)[':name']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1NameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1)[':name']['$delete']>) {
      return parseResponse(client.v1[':name'].$delete(args, options))
    },
  })
}

export function createDeleteV1Name<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name']['$delete']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.v1)[':name']['$delete']>,
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
    const mutationDefaults = getDeleteV1NameMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPatchV1NameMutationKey() {
  return ['v1', '/v1/:name', 'PATCH'] as const
}

export function getPatchV1NameMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name']['$patch']>>>>
    >,
    TError,
    InferRequestType<(typeof client.v1)[':name']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV1NameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1)[':name']['$patch']>) {
      return parseResponse(client.v1[':name'].$patch(args, options))
    },
  })
}

export function createPatchV1Name<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name']['$patch']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.v1)[':name']['$patch']>,
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
    const mutationDefaults = getPatchV1NameMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1NameActivateMutationKey() {
  return ['v1', '/v1/:name:activate', 'POST'] as const
}

export function getPostV1NameActivateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name:activate']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)[':name:activate']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1NameActivateMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1)[':name:activate']['$post']>) {
      return parseResponse(client.v1[':name:activate'].$post(args, options))
    },
  })
}

export function createPostV1NameActivate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)[':name:activate']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1)[':name:activate']['$post']>,
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
    const mutationDefaults = getPostV1NameActivateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1NameCancelMutationKey() {
  return ['v1', '/v1/:name:cancel', 'POST'] as const
}

export function getPostV1NameCancelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name:cancel']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)[':name:cancel']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1NameCancelMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1)[':name:cancel']['$post']>) {
      return parseResponse(client.v1[':name:cancel'].$post(args, options))
    },
  })
}

export function createPostV1NameCancel<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name:cancel']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.v1)[':name:cancel']['$post']>,
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
    const mutationDefaults = getPostV1NameCancelMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1NameChangeOfferMutationKey() {
  return ['v1', '/v1/:name:changeOffer', 'POST'] as const
}

export function getPostV1NameChangeOfferMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name:changeOffer']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)[':name:changeOffer']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1NameChangeOfferMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1)[':name:changeOffer']['$post']>) {
      return parseResponse(client.v1[':name:changeOffer'].$post(args, options))
    },
  })
}

export function createPostV1NameChangeOffer<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)[':name:changeOffer']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1)[':name:changeOffer']['$post']>,
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
    const mutationDefaults = getPostV1NameChangeOfferMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1NameChangeParametersMutationKey() {
  return ['v1', '/v1/:name:changeParameters', 'POST'] as const
}

export function getPostV1NameChangeParametersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)[':name:changeParameters']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)[':name:changeParameters']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1NameChangeParametersMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1)[':name:changeParameters']['$post']>,
    ) {
      return parseResponse(client.v1[':name:changeParameters'].$post(args, options))
    },
  })
}

export function createPostV1NameChangeParameters<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)[':name:changeParameters']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1)[':name:changeParameters']['$post']>,
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
    const mutationDefaults = getPostV1NameChangeParametersMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1NameChangeRenewalSettingsMutationKey() {
  return ['v1', '/v1/:name:changeRenewalSettings', 'POST'] as const
}

export function getPostV1NameChangeRenewalSettingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)[':name:changeRenewalSettings']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)[':name:changeRenewalSettings']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1NameChangeRenewalSettingsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1)[':name:changeRenewalSettings']['$post']>,
    ) {
      return parseResponse(client.v1[':name:changeRenewalSettings'].$post(args, options))
    },
  })
}

export function createPostV1NameChangeRenewalSettings<
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
                Awaited<ReturnType<(typeof client.v1)[':name:changeRenewalSettings']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1)[':name:changeRenewalSettings']['$post']>,
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
    const mutationDefaults = getPostV1NameChangeRenewalSettingsMutationOptions<
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

export function getPostV1NameRunMutationKey() {
  return ['v1', '/v1/:name:run', 'POST'] as const
}

export function getPostV1NameRunMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name:run']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)[':name:run']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1NameRunMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1)[':name:run']['$post']>) {
      return parseResponse(client.v1[':name:run'].$post(args, options))
    },
  })
}

export function createPostV1NameRun<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name:run']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.v1)[':name:run']['$post']>,
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
    const mutationDefaults = getPostV1NameRunMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1NameStartPaidServiceMutationKey() {
  return ['v1', '/v1/:name:startPaidService', 'POST'] as const
}

export function getPostV1NameStartPaidServiceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)[':name:startPaidService']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)[':name:startPaidService']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1NameStartPaidServiceMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1)[':name:startPaidService']['$post']>,
    ) {
      return parseResponse(client.v1[':name:startPaidService'].$post(args, options))
    },
  })
}

export function createPostV1NameStartPaidService<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)[':name:startPaidService']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1)[':name:startPaidService']['$post']>,
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
    const mutationDefaults = getPostV1NameStartPaidServiceMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1NameSuspendMutationKey() {
  return ['v1', '/v1/:name:suspend', 'POST'] as const
}

export function getPostV1NameSuspendMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name:suspend']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)[':name:suspend']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1NameSuspendMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1)[':name:suspend']['$post']>) {
      return parseResponse(client.v1[':name:suspend'].$post(args, options))
    },
  })
}

export function createPostV1NameSuspend<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)[':name:suspend']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1)[':name:suspend']['$post']>,
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
    const mutationDefaults = getPostV1NameSuspendMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1ParentChannelPartnerLinksQueryKey(
  args: InferRequestType<(typeof client.v1)[':parent']['channelPartnerLinks']['$get']>,
) {
  return ['v1', '/v1/:parent/channelPartnerLinks', args] as const
}

export function getV1ParentChannelPartnerLinksQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)[':parent']['channelPartnerLinks']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)[':parent']['channelPartnerLinks']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)[':parent']['channelPartnerLinks']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ParentChannelPartnerLinksQueryKey>
  >({
    queryKey: getV1ParentChannelPartnerLinksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1[':parent'].channelPartnerLinks.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1ParentChannelPartnerLinks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)[':parent']['channelPartnerLinks']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1)[':parent']['channelPartnerLinks']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)[':parent']['channelPartnerLinks']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV1ParentChannelPartnerLinksQueryKey>
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
      ...getV1ParentChannelPartnerLinksQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostV1ParentChannelPartnerLinksMutationKey() {
  return ['v1', '/v1/:parent/channelPartnerLinks', 'POST'] as const
}

export function getPostV1ParentChannelPartnerLinksMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)[':parent']['channelPartnerLinks']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)[':parent']['channelPartnerLinks']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ParentChannelPartnerLinksMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1)[':parent']['channelPartnerLinks']['$post']>,
    ) {
      return parseResponse(client.v1[':parent'].channelPartnerLinks.$post(args, options))
    },
  })
}

export function createPostV1ParentChannelPartnerLinks<
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
                Awaited<ReturnType<(typeof client.v1)[':parent']['channelPartnerLinks']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1)[':parent']['channelPartnerLinks']['$post']>,
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
    const mutationDefaults = getPostV1ParentChannelPartnerLinksMutationOptions<
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

export function getV1ParentChannelPartnerRepricingConfigsQueryKey(
  args: InferRequestType<(typeof client.v1)[':parent']['channelPartnerRepricingConfigs']['$get']>,
) {
  return ['v1', '/v1/:parent/channelPartnerRepricingConfigs', args] as const
}

export function getV1ParentChannelPartnerRepricingConfigsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)[':parent']['channelPartnerRepricingConfigs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)[':parent']['channelPartnerRepricingConfigs']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1)[':parent']['channelPartnerRepricingConfigs']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ParentChannelPartnerRepricingConfigsQueryKey>
  >({
    queryKey: getV1ParentChannelPartnerRepricingConfigsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1[':parent'].channelPartnerRepricingConfigs.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1ParentChannelPartnerRepricingConfigs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)[':parent']['channelPartnerRepricingConfigs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1)[':parent']['channelPartnerRepricingConfigs']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1)[':parent']['channelPartnerRepricingConfigs']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV1ParentChannelPartnerRepricingConfigsQueryKey>
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
      ...getV1ParentChannelPartnerRepricingConfigsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPostV1ParentChannelPartnerRepricingConfigsMutationKey() {
  return ['v1', '/v1/:parent/channelPartnerRepricingConfigs', 'POST'] as const
}

export function getPostV1ParentChannelPartnerRepricingConfigsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.v1)[':parent']['channelPartnerRepricingConfigs']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ParentChannelPartnerRepricingConfigsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1)[':parent']['channelPartnerRepricingConfigs']['$post']
      >,
    ) {
      return parseResponse(client.v1[':parent'].channelPartnerRepricingConfigs.$post(args, options))
    },
  })
}

export function createPostV1ParentChannelPartnerRepricingConfigs<
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
                Awaited<
                  ReturnType<
                    (typeof client.v1)[':parent']['channelPartnerRepricingConfigs']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1)[':parent']['channelPartnerRepricingConfigs']['$post']
          >,
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
    const mutationDefaults = getPostV1ParentChannelPartnerRepricingConfigsMutationOptions<
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

export function getV1ParentCustomerRepricingConfigsQueryKey(
  args: InferRequestType<(typeof client.v1)[':parent']['customerRepricingConfigs']['$get']>,
) {
  return ['v1', '/v1/:parent/customerRepricingConfigs', args] as const
}

export function getV1ParentCustomerRepricingConfigsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)[':parent']['customerRepricingConfigs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)[':parent']['customerRepricingConfigs']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)[':parent']['customerRepricingConfigs']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ParentCustomerRepricingConfigsQueryKey>
  >({
    queryKey: getV1ParentCustomerRepricingConfigsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1[':parent'].customerRepricingConfigs.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1ParentCustomerRepricingConfigs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)[':parent']['customerRepricingConfigs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1)[':parent']['customerRepricingConfigs']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1)[':parent']['customerRepricingConfigs']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV1ParentCustomerRepricingConfigsQueryKey>
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
      ...getV1ParentCustomerRepricingConfigsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostV1ParentCustomerRepricingConfigsMutationKey() {
  return ['v1', '/v1/:parent/customerRepricingConfigs', 'POST'] as const
}

export function getPostV1ParentCustomerRepricingConfigsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)[':parent']['customerRepricingConfigs']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)[':parent']['customerRepricingConfigs']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ParentCustomerRepricingConfigsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1)[':parent']['customerRepricingConfigs']['$post']>,
    ) {
      return parseResponse(client.v1[':parent'].customerRepricingConfigs.$post(args, options))
    },
  })
}

export function createPostV1ParentCustomerRepricingConfigs<
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
                Awaited<
                  ReturnType<(typeof client.v1)[':parent']['customerRepricingConfigs']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1)[':parent']['customerRepricingConfigs']['$post']>,
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
    const mutationDefaults = getPostV1ParentCustomerRepricingConfigsMutationOptions<
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

export function getV1ParentCustomersQueryKey(
  args: InferRequestType<(typeof client.v1)[':parent']['customers']['$get']>,
) {
  return ['v1', '/v1/:parent/customers', args] as const
}

export function getV1ParentCustomersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':parent']['customers']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)[':parent']['customers']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)[':parent']['customers']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ParentCustomersQueryKey>
  >({
    queryKey: getV1ParentCustomersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1[':parent'].customers.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1ParentCustomers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':parent']['customers']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1)[':parent']['customers']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)[':parent']['customers']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV1ParentCustomersQueryKey>
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
    return { ...getV1ParentCustomersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostV1ParentCustomersMutationKey() {
  return ['v1', '/v1/:parent/customers', 'POST'] as const
}

export function getPostV1ParentCustomersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)[':parent']['customers']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)[':parent']['customers']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ParentCustomersMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1)[':parent']['customers']['$post']>) {
      return parseResponse(client.v1[':parent'].customers.$post(args, options))
    },
  })
}

export function createPostV1ParentCustomers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)[':parent']['customers']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1)[':parent']['customers']['$post']>,
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
    const mutationDefaults = getPostV1ParentCustomersMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1ParentCustomersImportMutationKey() {
  return ['v1', '/v1/:parent/customers:import', 'POST'] as const
}

export function getPostV1ParentCustomersImportMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)[':parent']['customers:import']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)[':parent']['customers:import']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ParentCustomersImportMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1)[':parent']['customers:import']['$post']>,
    ) {
      return parseResponse(client.v1[':parent']['customers:import'].$post(args, options))
    },
  })
}

export function createPostV1ParentCustomersImport<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)[':parent']['customers:import']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1)[':parent']['customers:import']['$post']>,
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
    const mutationDefaults = getPostV1ParentCustomersImportMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1ParentEntitlementsQueryKey(
  args: InferRequestType<(typeof client.v1)[':parent']['entitlements']['$get']>,
) {
  return ['v1', '/v1/:parent/entitlements', args] as const
}

export function getV1ParentEntitlementsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)[':parent']['entitlements']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)[':parent']['entitlements']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)[':parent']['entitlements']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ParentEntitlementsQueryKey>
  >({
    queryKey: getV1ParentEntitlementsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1[':parent'].entitlements.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1ParentEntitlements<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)[':parent']['entitlements']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1)[':parent']['entitlements']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)[':parent']['entitlements']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV1ParentEntitlementsQueryKey>
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
      ...getV1ParentEntitlementsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostV1ParentEntitlementsMutationKey() {
  return ['v1', '/v1/:parent/entitlements', 'POST'] as const
}

export function getPostV1ParentEntitlementsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)[':parent']['entitlements']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)[':parent']['entitlements']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ParentEntitlementsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1)[':parent']['entitlements']['$post']>,
    ) {
      return parseResponse(client.v1[':parent'].entitlements.$post(args, options))
    },
  })
}

export function createPostV1ParentEntitlements<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)[':parent']['entitlements']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1)[':parent']['entitlements']['$post']>,
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
    const mutationDefaults = getPostV1ParentEntitlementsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1ParentOffersQueryKey(
  args: InferRequestType<(typeof client.v1)[':parent']['offers']['$get']>,
) {
  return ['v1', '/v1/:parent/offers', args] as const
}

export function getV1ParentOffersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':parent']['offers']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)[':parent']['offers']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':parent']['offers']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ParentOffersQueryKey>
  >({
    queryKey: getV1ParentOffersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1[':parent'].offers.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1ParentOffers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':parent']['offers']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1)[':parent']['offers']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)[':parent']['offers']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV1ParentOffersQueryKey>
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
    return { ...getV1ParentOffersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getV1ParentReportsQueryKey(
  args: InferRequestType<(typeof client.v1)[':parent']['reports']['$get']>,
) {
  return ['v1', '/v1/:parent/reports', args] as const
}

export function getV1ParentReportsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':parent']['reports']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)[':parent']['reports']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':parent']['reports']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ParentReportsQueryKey>
  >({
    queryKey: getV1ParentReportsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1[':parent'].reports.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1ParentReports<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':parent']['reports']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1)[':parent']['reports']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)[':parent']['reports']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV1ParentReportsQueryKey>
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
    return { ...getV1ParentReportsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getV1ParentSkusQueryKey(
  args: InferRequestType<(typeof client.v1)[':parent']['skus']['$get']>,
) {
  return ['v1', '/v1/:parent/skus', args] as const
}

export function getV1ParentSkusQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':parent']['skus']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)[':parent']['skus']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':parent']['skus']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ParentSkusQueryKey>
  >({
    queryKey: getV1ParentSkusQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1[':parent'].skus.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1ParentSkus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':parent']['skus']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1)[':parent']['skus']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)[':parent']['skus']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV1ParentSkusQueryKey>
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
    return { ...getV1ParentSkusQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostV1ParentCheckCloudIdentityAccountsExistMutationKey() {
  return ['v1', '/v1/:parent:checkCloudIdentityAccountsExist', 'POST'] as const
}

export function getPostV1ParentCheckCloudIdentityAccountsExistMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.v1)[':parent:checkCloudIdentityAccountsExist']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ParentCheckCloudIdentityAccountsExistMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1)[':parent:checkCloudIdentityAccountsExist']['$post']
      >,
    ) {
      return parseResponse(
        client.v1[':parent:checkCloudIdentityAccountsExist'].$post(args, options),
      )
    },
  })
}

export function createPostV1ParentCheckCloudIdentityAccountsExist<
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
                Awaited<
                  ReturnType<(typeof client.v1)[':parent:checkCloudIdentityAccountsExist']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1)[':parent:checkCloudIdentityAccountsExist']['$post']>,
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
    const mutationDefaults = getPostV1ParentCheckCloudIdentityAccountsExistMutationOptions<
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

export function getV1ParentListEntitlementChangesQueryKey(
  args: InferRequestType<(typeof client.v1)[':parent:listEntitlementChanges']['$get']>,
) {
  return ['v1', '/v1/:parent:listEntitlementChanges', args] as const
}

export function getV1ParentListEntitlementChangesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)[':parent:listEntitlementChanges']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)[':parent:listEntitlementChanges']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)[':parent:listEntitlementChanges']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ParentListEntitlementChangesQueryKey>
  >({
    queryKey: getV1ParentListEntitlementChangesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1[':parent:listEntitlementChanges'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1ParentListEntitlementChanges<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)[':parent:listEntitlementChanges']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1)[':parent:listEntitlementChanges']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)[':parent:listEntitlementChanges']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV1ParentListEntitlementChangesQueryKey>
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
      ...getV1ParentListEntitlementChangesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostV1ParentListTransferableOffersMutationKey() {
  return ['v1', '/v1/:parent:listTransferableOffers', 'POST'] as const
}

export function getPostV1ParentListTransferableOffersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)[':parent:listTransferableOffers']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)[':parent:listTransferableOffers']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ParentListTransferableOffersMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1)[':parent:listTransferableOffers']['$post']>,
    ) {
      return parseResponse(client.v1[':parent:listTransferableOffers'].$post(args, options))
    },
  })
}

export function createPostV1ParentListTransferableOffers<
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
                Awaited<ReturnType<(typeof client.v1)[':parent:listTransferableOffers']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1)[':parent:listTransferableOffers']['$post']>,
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
    const mutationDefaults = getPostV1ParentListTransferableOffersMutationOptions<
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

export function getPostV1ParentListTransferableSkusMutationKey() {
  return ['v1', '/v1/:parent:listTransferableSkus', 'POST'] as const
}

export function getPostV1ParentListTransferableSkusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)[':parent:listTransferableSkus']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)[':parent:listTransferableSkus']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ParentListTransferableSkusMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1)[':parent:listTransferableSkus']['$post']>,
    ) {
      return parseResponse(client.v1[':parent:listTransferableSkus'].$post(args, options))
    },
  })
}

export function createPostV1ParentListTransferableSkus<
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
                Awaited<ReturnType<(typeof client.v1)[':parent:listTransferableSkus']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1)[':parent:listTransferableSkus']['$post']>,
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
    const mutationDefaults = getPostV1ParentListTransferableSkusMutationOptions<
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

export function getPostV1ParentTransferEntitlementsMutationKey() {
  return ['v1', '/v1/:parent:transferEntitlements', 'POST'] as const
}

export function getPostV1ParentTransferEntitlementsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)[':parent:transferEntitlements']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)[':parent:transferEntitlements']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ParentTransferEntitlementsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1)[':parent:transferEntitlements']['$post']>,
    ) {
      return parseResponse(client.v1[':parent:transferEntitlements'].$post(args, options))
    },
  })
}

export function createPostV1ParentTransferEntitlements<
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
                Awaited<ReturnType<(typeof client.v1)[':parent:transferEntitlements']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1)[':parent:transferEntitlements']['$post']>,
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
    const mutationDefaults = getPostV1ParentTransferEntitlementsMutationOptions<
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

export function getPostV1ParentTransferEntitlementsToGoogleMutationKey() {
  return ['v1', '/v1/:parent:transferEntitlementsToGoogle', 'POST'] as const
}

export function getPostV1ParentTransferEntitlementsToGoogleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)[':parent:transferEntitlementsToGoogle']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)[':parent:transferEntitlementsToGoogle']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ParentTransferEntitlementsToGoogleMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1)[':parent:transferEntitlementsToGoogle']['$post']>,
    ) {
      return parseResponse(client.v1[':parent:transferEntitlementsToGoogle'].$post(args, options))
    },
  })
}

export function createPostV1ParentTransferEntitlementsToGoogle<
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
                Awaited<
                  ReturnType<(typeof client.v1)[':parent:transferEntitlementsToGoogle']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1)[':parent:transferEntitlementsToGoogle']['$post']>,
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
    const mutationDefaults = getPostV1ParentTransferEntitlementsToGoogleMutationOptions<
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

export function getPostV1ReportJobFetchReportResultsMutationKey() {
  return ['v1', '/v1/:reportJob:fetchReportResults', 'POST'] as const
}

export function getPostV1ReportJobFetchReportResultsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)[':reportJob:fetchReportResults']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)[':reportJob:fetchReportResults']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ReportJobFetchReportResultsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1)[':reportJob:fetchReportResults']['$post']>,
    ) {
      return parseResponse(client.v1[':reportJob:fetchReportResults'].$post(args, options))
    },
  })
}

export function createPostV1ReportJobFetchReportResults<
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
                Awaited<ReturnType<(typeof client.v1)[':reportJob:fetchReportResults']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1)[':reportJob:fetchReportResults']['$post']>,
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
    const mutationDefaults = getPostV1ReportJobFetchReportResultsMutationOptions<
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
