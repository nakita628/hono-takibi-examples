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

export function getAppsKey() {
  return ['apps'] as const
}

export function getPostAppsResellerV1CustomersMutationKey() {
  return ['apps', '/apps/reseller/v1/customers', 'POST'] as const
}

export function getPostAppsResellerV1CustomersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.apps.reseller.v1.customers.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.apps.reseller.v1.customers.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAppsResellerV1CustomersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.apps.reseller.v1.customers.$post>) {
      return parseResponse(client.apps.reseller.v1.customers.$post(args, options))
    },
  })
}

export function createPostAppsResellerV1Customers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.apps.reseller.v1.customers.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.apps.reseller.v1.customers.$post>,
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
    const mutationDefaults = getPostAppsResellerV1CustomersMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getAppsResellerV1CustomersCustomerIdQueryKey(
  args: InferRequestType<(typeof client.apps.reseller.v1.customers)[':customerId']['$get']>,
) {
  return ['apps', '/apps/reseller/v1/customers/:customerId', args] as const
}

export function getAppsResellerV1CustomersCustomerIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apps.reseller.v1.customers)[':customerId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.apps.reseller.v1.customers)[':customerId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps.reseller.v1.customers)[':customerId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsResellerV1CustomersCustomerIdQueryKey>
  >({
    queryKey: getAppsResellerV1CustomersCustomerIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apps.reseller.v1.customers[':customerId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAppsResellerV1CustomersCustomerId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apps.reseller.v1.customers)[':customerId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.apps.reseller.v1.customers)[':customerId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.apps.reseller.v1.customers)[':customerId']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getAppsResellerV1CustomersCustomerIdQueryKey>
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
      ...getAppsResellerV1CustomersCustomerIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutAppsResellerV1CustomersCustomerIdMutationKey() {
  return ['apps', '/apps/reseller/v1/customers/:customerId', 'PUT'] as const
}

export function getPutAppsResellerV1CustomersCustomerIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps.reseller.v1.customers)[':customerId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.apps.reseller.v1.customers)[':customerId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutAppsResellerV1CustomersCustomerIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.apps.reseller.v1.customers)[':customerId']['$put']>,
    ) {
      return parseResponse(client.apps.reseller.v1.customers[':customerId'].$put(args, options))
    },
  })
}

export function createPutAppsResellerV1CustomersCustomerId<
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
                  ReturnType<(typeof client.apps.reseller.v1.customers)[':customerId']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.apps.reseller.v1.customers)[':customerId']['$put']>,
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
    const mutationDefaults = getPutAppsResellerV1CustomersCustomerIdMutationOptions<
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

export function getPatchAppsResellerV1CustomersCustomerIdMutationKey() {
  return ['apps', '/apps/reseller/v1/customers/:customerId', 'PATCH'] as const
}

export function getPatchAppsResellerV1CustomersCustomerIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apps.reseller.v1.customers)[':customerId']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.apps.reseller.v1.customers)[':customerId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchAppsResellerV1CustomersCustomerIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.apps.reseller.v1.customers)[':customerId']['$patch']>,
    ) {
      return parseResponse(client.apps.reseller.v1.customers[':customerId'].$patch(args, options))
    },
  })
}

export function createPatchAppsResellerV1CustomersCustomerId<
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
                  ReturnType<(typeof client.apps.reseller.v1.customers)[':customerId']['$patch']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.apps.reseller.v1.customers)[':customerId']['$patch']>,
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
    const mutationDefaults = getPatchAppsResellerV1CustomersCustomerIdMutationOptions<
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

export function getPostAppsResellerV1CustomersCustomerIdSubscriptionsMutationKey() {
  return ['apps', '/apps/reseller/v1/customers/:customerId/subscriptions', 'POST'] as const
}

export function getPostAppsResellerV1CustomersCustomerIdSubscriptionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apps.reseller.v1.customers)[':customerId']['subscriptions']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apps.reseller.v1.customers)[':customerId']['subscriptions']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAppsResellerV1CustomersCustomerIdSubscriptionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apps.reseller.v1.customers)[':customerId']['subscriptions']['$post']
      >,
    ) {
      return parseResponse(
        client.apps.reseller.v1.customers[':customerId'].subscriptions.$post(args, options),
      )
    },
  })
}

export function createPostAppsResellerV1CustomersCustomerIdSubscriptions<
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
                    (typeof client.apps.reseller.v1.customers)[':customerId']['subscriptions']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apps.reseller.v1.customers)[':customerId']['subscriptions']['$post']
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
    const mutationDefaults = getPostAppsResellerV1CustomersCustomerIdSubscriptionsMutationOptions<
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

export function getAppsResellerV1CustomersCustomerIdSubscriptionsSubscriptionIdQueryKey(
  args: InferRequestType<
    (typeof client.apps.reseller.v1.customers)[':customerId']['subscriptions'][':subscriptionId']['$get']
  >,
) {
  return [
    'apps',
    '/apps/reseller/v1/customers/:customerId/subscriptions/:subscriptionId',
    args,
  ] as const
}

export function getAppsResellerV1CustomersCustomerIdSubscriptionsSubscriptionIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apps.reseller.v1.customers)[':customerId']['subscriptions'][':subscriptionId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.apps.reseller.v1.customers)[':customerId']['subscriptions'][':subscriptionId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apps.reseller.v1.customers)[':customerId']['subscriptions'][':subscriptionId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsResellerV1CustomersCustomerIdSubscriptionsSubscriptionIdQueryKey>
  >({
    queryKey: getAppsResellerV1CustomersCustomerIdSubscriptionsSubscriptionIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apps.reseller.v1.customers[':customerId'].subscriptions[':subscriptionId'].$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function createAppsResellerV1CustomersCustomerIdSubscriptionsSubscriptionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.apps.reseller.v1.customers)[':customerId']['subscriptions'][':subscriptionId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.apps.reseller.v1.customers)[':customerId']['subscriptions'][':subscriptionId']['$get']
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
                    (typeof client.apps.reseller.v1.customers)[':customerId']['subscriptions'][':subscriptionId']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getAppsResellerV1CustomersCustomerIdSubscriptionsSubscriptionIdQueryKey>
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
      ...getAppsResellerV1CustomersCustomerIdSubscriptionsSubscriptionIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getDeleteAppsResellerV1CustomersCustomerIdSubscriptionsSubscriptionIdMutationKey() {
  return [
    'apps',
    '/apps/reseller/v1/customers/:customerId/subscriptions/:subscriptionId',
    'DELETE',
  ] as const
}

export function getDeleteAppsResellerV1CustomersCustomerIdSubscriptionsSubscriptionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apps.reseller.v1.customers)[':customerId']['subscriptions'][':subscriptionId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apps.reseller.v1.customers)[':customerId']['subscriptions'][':subscriptionId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteAppsResellerV1CustomersCustomerIdSubscriptionsSubscriptionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apps.reseller.v1.customers)[':customerId']['subscriptions'][':subscriptionId']['$delete']
      >,
    ) {
      return parseResponse(
        client.apps.reseller.v1.customers[':customerId'].subscriptions[':subscriptionId'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function createDeleteAppsResellerV1CustomersCustomerIdSubscriptionsSubscriptionId<
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
                    (typeof client.apps.reseller.v1.customers)[':customerId']['subscriptions'][':subscriptionId']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apps.reseller.v1.customers)[':customerId']['subscriptions'][':subscriptionId']['$delete']
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
    const mutationDefaults =
      getDeleteAppsResellerV1CustomersCustomerIdSubscriptionsSubscriptionIdMutationOptions<
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

export function getPostAppsResellerV1CustomersCustomerIdSubscriptionsSubscriptionIdActivateMutationKey() {
  return [
    'apps',
    '/apps/reseller/v1/customers/:customerId/subscriptions/:subscriptionId/activate',
    'POST',
  ] as const
}

export function getPostAppsResellerV1CustomersCustomerIdSubscriptionsSubscriptionIdActivateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apps.reseller.v1.customers)[':customerId']['subscriptions'][':subscriptionId']['activate']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apps.reseller.v1.customers)[':customerId']['subscriptions'][':subscriptionId']['activate']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostAppsResellerV1CustomersCustomerIdSubscriptionsSubscriptionIdActivateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apps.reseller.v1.customers)[':customerId']['subscriptions'][':subscriptionId']['activate']['$post']
      >,
    ) {
      return parseResponse(
        client.apps.reseller.v1.customers[':customerId'].subscriptions[
          ':subscriptionId'
        ].activate.$post(args, options),
      )
    },
  })
}

export function createPostAppsResellerV1CustomersCustomerIdSubscriptionsSubscriptionIdActivate<
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
                    (typeof client.apps.reseller.v1.customers)[':customerId']['subscriptions'][':subscriptionId']['activate']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apps.reseller.v1.customers)[':customerId']['subscriptions'][':subscriptionId']['activate']['$post']
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
    const mutationDefaults =
      getPostAppsResellerV1CustomersCustomerIdSubscriptionsSubscriptionIdActivateMutationOptions<
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

export function getPostAppsResellerV1CustomersCustomerIdSubscriptionsSubscriptionIdChangePlanMutationKey() {
  return [
    'apps',
    '/apps/reseller/v1/customers/:customerId/subscriptions/:subscriptionId/changePlan',
    'POST',
  ] as const
}

export function getPostAppsResellerV1CustomersCustomerIdSubscriptionsSubscriptionIdChangePlanMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apps.reseller.v1.customers)[':customerId']['subscriptions'][':subscriptionId']['changePlan']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apps.reseller.v1.customers)[':customerId']['subscriptions'][':subscriptionId']['changePlan']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostAppsResellerV1CustomersCustomerIdSubscriptionsSubscriptionIdChangePlanMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apps.reseller.v1.customers)[':customerId']['subscriptions'][':subscriptionId']['changePlan']['$post']
      >,
    ) {
      return parseResponse(
        client.apps.reseller.v1.customers[':customerId'].subscriptions[
          ':subscriptionId'
        ].changePlan.$post(args, options),
      )
    },
  })
}

export function createPostAppsResellerV1CustomersCustomerIdSubscriptionsSubscriptionIdChangePlan<
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
                    (typeof client.apps.reseller.v1.customers)[':customerId']['subscriptions'][':subscriptionId']['changePlan']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apps.reseller.v1.customers)[':customerId']['subscriptions'][':subscriptionId']['changePlan']['$post']
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
    const mutationDefaults =
      getPostAppsResellerV1CustomersCustomerIdSubscriptionsSubscriptionIdChangePlanMutationOptions<
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

export function getPostAppsResellerV1CustomersCustomerIdSubscriptionsSubscriptionIdChangeRenewalSettingsMutationKey() {
  return [
    'apps',
    '/apps/reseller/v1/customers/:customerId/subscriptions/:subscriptionId/changeRenewalSettings',
    'POST',
  ] as const
}

export function getPostAppsResellerV1CustomersCustomerIdSubscriptionsSubscriptionIdChangeRenewalSettingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apps.reseller.v1.customers)[':customerId']['subscriptions'][':subscriptionId']['changeRenewalSettings']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apps.reseller.v1.customers)[':customerId']['subscriptions'][':subscriptionId']['changeRenewalSettings']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostAppsResellerV1CustomersCustomerIdSubscriptionsSubscriptionIdChangeRenewalSettingsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apps.reseller.v1.customers)[':customerId']['subscriptions'][':subscriptionId']['changeRenewalSettings']['$post']
      >,
    ) {
      return parseResponse(
        client.apps.reseller.v1.customers[':customerId'].subscriptions[
          ':subscriptionId'
        ].changeRenewalSettings.$post(args, options),
      )
    },
  })
}

export function createPostAppsResellerV1CustomersCustomerIdSubscriptionsSubscriptionIdChangeRenewalSettings<
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
                    (typeof client.apps.reseller.v1.customers)[':customerId']['subscriptions'][':subscriptionId']['changeRenewalSettings']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apps.reseller.v1.customers)[':customerId']['subscriptions'][':subscriptionId']['changeRenewalSettings']['$post']
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
    const mutationDefaults =
      getPostAppsResellerV1CustomersCustomerIdSubscriptionsSubscriptionIdChangeRenewalSettingsMutationOptions<
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

export function getPostAppsResellerV1CustomersCustomerIdSubscriptionsSubscriptionIdChangeSeatsMutationKey() {
  return [
    'apps',
    '/apps/reseller/v1/customers/:customerId/subscriptions/:subscriptionId/changeSeats',
    'POST',
  ] as const
}

export function getPostAppsResellerV1CustomersCustomerIdSubscriptionsSubscriptionIdChangeSeatsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apps.reseller.v1.customers)[':customerId']['subscriptions'][':subscriptionId']['changeSeats']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apps.reseller.v1.customers)[':customerId']['subscriptions'][':subscriptionId']['changeSeats']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostAppsResellerV1CustomersCustomerIdSubscriptionsSubscriptionIdChangeSeatsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apps.reseller.v1.customers)[':customerId']['subscriptions'][':subscriptionId']['changeSeats']['$post']
      >,
    ) {
      return parseResponse(
        client.apps.reseller.v1.customers[':customerId'].subscriptions[
          ':subscriptionId'
        ].changeSeats.$post(args, options),
      )
    },
  })
}

export function createPostAppsResellerV1CustomersCustomerIdSubscriptionsSubscriptionIdChangeSeats<
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
                    (typeof client.apps.reseller.v1.customers)[':customerId']['subscriptions'][':subscriptionId']['changeSeats']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apps.reseller.v1.customers)[':customerId']['subscriptions'][':subscriptionId']['changeSeats']['$post']
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
    const mutationDefaults =
      getPostAppsResellerV1CustomersCustomerIdSubscriptionsSubscriptionIdChangeSeatsMutationOptions<
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

export function getPostAppsResellerV1CustomersCustomerIdSubscriptionsSubscriptionIdStartPaidServiceMutationKey() {
  return [
    'apps',
    '/apps/reseller/v1/customers/:customerId/subscriptions/:subscriptionId/startPaidService',
    'POST',
  ] as const
}

export function getPostAppsResellerV1CustomersCustomerIdSubscriptionsSubscriptionIdStartPaidServiceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apps.reseller.v1.customers)[':customerId']['subscriptions'][':subscriptionId']['startPaidService']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apps.reseller.v1.customers)[':customerId']['subscriptions'][':subscriptionId']['startPaidService']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostAppsResellerV1CustomersCustomerIdSubscriptionsSubscriptionIdStartPaidServiceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apps.reseller.v1.customers)[':customerId']['subscriptions'][':subscriptionId']['startPaidService']['$post']
      >,
    ) {
      return parseResponse(
        client.apps.reseller.v1.customers[':customerId'].subscriptions[
          ':subscriptionId'
        ].startPaidService.$post(args, options),
      )
    },
  })
}

export function createPostAppsResellerV1CustomersCustomerIdSubscriptionsSubscriptionIdStartPaidService<
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
                    (typeof client.apps.reseller.v1.customers)[':customerId']['subscriptions'][':subscriptionId']['startPaidService']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apps.reseller.v1.customers)[':customerId']['subscriptions'][':subscriptionId']['startPaidService']['$post']
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
    const mutationDefaults =
      getPostAppsResellerV1CustomersCustomerIdSubscriptionsSubscriptionIdStartPaidServiceMutationOptions<
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

export function getPostAppsResellerV1CustomersCustomerIdSubscriptionsSubscriptionIdSuspendMutationKey() {
  return [
    'apps',
    '/apps/reseller/v1/customers/:customerId/subscriptions/:subscriptionId/suspend',
    'POST',
  ] as const
}

export function getPostAppsResellerV1CustomersCustomerIdSubscriptionsSubscriptionIdSuspendMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apps.reseller.v1.customers)[':customerId']['subscriptions'][':subscriptionId']['suspend']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.apps.reseller.v1.customers)[':customerId']['subscriptions'][':subscriptionId']['suspend']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostAppsResellerV1CustomersCustomerIdSubscriptionsSubscriptionIdSuspendMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.apps.reseller.v1.customers)[':customerId']['subscriptions'][':subscriptionId']['suspend']['$post']
      >,
    ) {
      return parseResponse(
        client.apps.reseller.v1.customers[':customerId'].subscriptions[
          ':subscriptionId'
        ].suspend.$post(args, options),
      )
    },
  })
}

export function createPostAppsResellerV1CustomersCustomerIdSubscriptionsSubscriptionIdSuspend<
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
                    (typeof client.apps.reseller.v1.customers)[':customerId']['subscriptions'][':subscriptionId']['suspend']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.apps.reseller.v1.customers)[':customerId']['subscriptions'][':subscriptionId']['suspend']['$post']
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
    const mutationDefaults =
      getPostAppsResellerV1CustomersCustomerIdSubscriptionsSubscriptionIdSuspendMutationOptions<
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

export function getAppsResellerV1ResellernotifyGetwatchdetailsQueryKey(
  args: InferRequestType<typeof client.apps.reseller.v1.resellernotify.getwatchdetails.$get>,
) {
  return ['apps', '/apps/reseller/v1/resellernotify/getwatchdetails', args] as const
}

export function getAppsResellerV1ResellernotifyGetwatchdetailsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.apps.reseller.v1.resellernotify.getwatchdetails.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.apps.reseller.v1.resellernotify.getwatchdetails.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.apps.reseller.v1.resellernotify.getwatchdetails.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsResellerV1ResellernotifyGetwatchdetailsQueryKey>
  >({
    queryKey: getAppsResellerV1ResellernotifyGetwatchdetailsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apps.reseller.v1.resellernotify.getwatchdetails.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAppsResellerV1ResellernotifyGetwatchdetails<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.apps.reseller.v1.resellernotify.getwatchdetails.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.apps.reseller.v1.resellernotify.getwatchdetails.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<typeof client.apps.reseller.v1.resellernotify.getwatchdetails.$get>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getAppsResellerV1ResellernotifyGetwatchdetailsQueryKey>
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
      ...getAppsResellerV1ResellernotifyGetwatchdetailsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPostAppsResellerV1ResellernotifyRegisterMutationKey() {
  return ['apps', '/apps/reseller/v1/resellernotify/register', 'POST'] as const
}

export function getPostAppsResellerV1ResellernotifyRegisterMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.apps.reseller.v1.resellernotify.register.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.apps.reseller.v1.resellernotify.register.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAppsResellerV1ResellernotifyRegisterMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.apps.reseller.v1.resellernotify.register.$post>,
    ) {
      return parseResponse(client.apps.reseller.v1.resellernotify.register.$post(args, options))
    },
  })
}

export function createPostAppsResellerV1ResellernotifyRegister<
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
                Awaited<ReturnType<typeof client.apps.reseller.v1.resellernotify.register.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.apps.reseller.v1.resellernotify.register.$post>,
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
    const mutationDefaults = getPostAppsResellerV1ResellernotifyRegisterMutationOptions<
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

export function getPostAppsResellerV1ResellernotifyUnregisterMutationKey() {
  return ['apps', '/apps/reseller/v1/resellernotify/unregister', 'POST'] as const
}

export function getPostAppsResellerV1ResellernotifyUnregisterMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.apps.reseller.v1.resellernotify.unregister.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.apps.reseller.v1.resellernotify.unregister.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAppsResellerV1ResellernotifyUnregisterMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.apps.reseller.v1.resellernotify.unregister.$post>,
    ) {
      return parseResponse(client.apps.reseller.v1.resellernotify.unregister.$post(args, options))
    },
  })
}

export function createPostAppsResellerV1ResellernotifyUnregister<
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
                Awaited<ReturnType<typeof client.apps.reseller.v1.resellernotify.unregister.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.apps.reseller.v1.resellernotify.unregister.$post>,
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
    const mutationDefaults = getPostAppsResellerV1ResellernotifyUnregisterMutationOptions<
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

export function getAppsResellerV1SubscriptionsQueryKey(
  args: InferRequestType<typeof client.apps.reseller.v1.subscriptions.$get>,
) {
  return ['apps', '/apps/reseller/v1/subscriptions', args] as const
}

export function getAppsResellerV1SubscriptionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.apps.reseller.v1.subscriptions.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.apps.reseller.v1.subscriptions.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.apps.reseller.v1.subscriptions.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsResellerV1SubscriptionsQueryKey>
  >({
    queryKey: getAppsResellerV1SubscriptionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.apps.reseller.v1.subscriptions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAppsResellerV1Subscriptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.apps.reseller.v1.subscriptions.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.apps.reseller.v1.subscriptions.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.apps.reseller.v1.subscriptions.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getAppsResellerV1SubscriptionsQueryKey>
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
      ...getAppsResellerV1SubscriptionsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}
