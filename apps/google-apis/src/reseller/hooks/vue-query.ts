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

export function usePostAppsResellerV1Customers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPostAppsResellerV1CustomersMutationOptions<TError, TOnMutateResult>(
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

export function getAppsResellerV1CustomersCustomerIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps.reseller.v1.customers)[':customerId']['$get']>
  >,
) {
  return ['apps', '/apps/reseller/v1/customers/:customerId', toValue(args)] as const
}

export function getAppsResellerV1CustomersCustomerIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps.reseller.v1.customers)[':customerId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAppsResellerV1CustomersCustomerIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apps.reseller.v1.customers[':customerId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAppsResellerV1CustomersCustomerId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.apps.reseller.v1.customers)[':customerId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.apps.reseller.v1.customers)[':customerId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.apps.reseller.v1.customers)[':customerId']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getAppsResellerV1CustomersCustomerIdQueryKey>
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
          Awaited<ReturnType<(typeof client.apps.reseller.v1.customers)[':customerId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsResellerV1CustomersCustomerIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAppsResellerV1CustomersCustomerIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apps.reseller.v1.customers[':customerId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutAppsResellerV1CustomersCustomerId<
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
                  ReturnType<(typeof client.apps.reseller.v1.customers)[':customerId']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.apps.reseller.v1.customers)[':customerId']['$put']>,
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
  const mutationDefaults = getPutAppsResellerV1CustomersCustomerIdMutationOptions<
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

export function usePatchAppsResellerV1CustomersCustomerId<
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
                  ReturnType<(typeof client.apps.reseller.v1.customers)[':customerId']['$patch']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.apps.reseller.v1.customers)[':customerId']['$patch']>,
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
  const mutationDefaults = getPatchAppsResellerV1CustomersCustomerIdMutationOptions<
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

export function usePostAppsResellerV1CustomersCustomerIdSubscriptions<
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
  const mutationDefaults = getPostAppsResellerV1CustomersCustomerIdSubscriptionsMutationOptions<
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

export function getAppsResellerV1CustomersCustomerIdSubscriptionsSubscriptionIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apps.reseller.v1.customers)[':customerId']['subscriptions'][':subscriptionId']['$get']
    >
  >,
) {
  return [
    'apps',
    '/apps/reseller/v1/customers/:customerId/subscriptions/:subscriptionId',
    toValue(args),
  ] as const
}

export function getAppsResellerV1CustomersCustomerIdSubscriptionsSubscriptionIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apps.reseller.v1.customers)[':customerId']['subscriptions'][':subscriptionId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getAppsResellerV1CustomersCustomerIdSubscriptionsSubscriptionIdQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apps.reseller.v1.customers[':customerId'].subscriptions[':subscriptionId'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useAppsResellerV1CustomersCustomerIdSubscriptionsSubscriptionId<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.apps.reseller.v1.customers)[':customerId']['subscriptions'][':subscriptionId']['$get']
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
                    (typeof client.apps.reseller.v1.customers)[':customerId']['subscriptions'][':subscriptionId']['$get']
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
                    (typeof client.apps.reseller.v1.customers)[':customerId']['subscriptions'][':subscriptionId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAppsResellerV1CustomersCustomerIdSubscriptionsSubscriptionIdQueryKey>
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
              (typeof client.apps.reseller.v1.customers)[':customerId']['subscriptions'][':subscriptionId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsResellerV1CustomersCustomerIdSubscriptionsSubscriptionIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getAppsResellerV1CustomersCustomerIdSubscriptionsSubscriptionIdQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.apps.reseller.v1.customers[':customerId'].subscriptions[':subscriptionId'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteAppsResellerV1CustomersCustomerIdSubscriptionsSubscriptionId<
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
  const mutationDefaults =
    getDeleteAppsResellerV1CustomersCustomerIdSubscriptionsSubscriptionIdMutationOptions<
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

export function usePostAppsResellerV1CustomersCustomerIdSubscriptionsSubscriptionIdActivate<
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
  const mutationDefaults =
    getPostAppsResellerV1CustomersCustomerIdSubscriptionsSubscriptionIdActivateMutationOptions<
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

export function usePostAppsResellerV1CustomersCustomerIdSubscriptionsSubscriptionIdChangePlan<
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
  const mutationDefaults =
    getPostAppsResellerV1CustomersCustomerIdSubscriptionsSubscriptionIdChangePlanMutationOptions<
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

export function usePostAppsResellerV1CustomersCustomerIdSubscriptionsSubscriptionIdChangeRenewalSettings<
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
  const mutationDefaults =
    getPostAppsResellerV1CustomersCustomerIdSubscriptionsSubscriptionIdChangeRenewalSettingsMutationOptions<
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

export function usePostAppsResellerV1CustomersCustomerIdSubscriptionsSubscriptionIdChangeSeats<
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
  const mutationDefaults =
    getPostAppsResellerV1CustomersCustomerIdSubscriptionsSubscriptionIdChangeSeatsMutationOptions<
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

export function usePostAppsResellerV1CustomersCustomerIdSubscriptionsSubscriptionIdStartPaidService<
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
  const mutationDefaults =
    getPostAppsResellerV1CustomersCustomerIdSubscriptionsSubscriptionIdStartPaidServiceMutationOptions<
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

export function usePostAppsResellerV1CustomersCustomerIdSubscriptionsSubscriptionIdSuspend<
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
  const mutationDefaults =
    getPostAppsResellerV1CustomersCustomerIdSubscriptionsSubscriptionIdSuspendMutationOptions<
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

export function getAppsResellerV1ResellernotifyGetwatchdetailsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.apps.reseller.v1.resellernotify.getwatchdetails.$get>
  >,
) {
  return ['apps', '/apps/reseller/v1/resellernotify/getwatchdetails', toValue(args)] as const
}

export function getAppsResellerV1ResellernotifyGetwatchdetailsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.apps.reseller.v1.resellernotify.getwatchdetails.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAppsResellerV1ResellernotifyGetwatchdetailsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apps.reseller.v1.resellernotify.getwatchdetails.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAppsResellerV1ResellernotifyGetwatchdetails<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.apps.reseller.v1.resellernotify.getwatchdetails.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.apps.reseller.v1.resellernotify.getwatchdetails.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<typeof client.apps.reseller.v1.resellernotify.getwatchdetails.$get>
                >
              >
            >
          >,
          ReturnType<typeof getAppsResellerV1ResellernotifyGetwatchdetailsQueryKey>
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
          Awaited<ReturnType<typeof client.apps.reseller.v1.resellernotify.getwatchdetails.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsResellerV1ResellernotifyGetwatchdetailsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAppsResellerV1ResellernotifyGetwatchdetailsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apps.reseller.v1.resellernotify.getwatchdetails.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostAppsResellerV1ResellernotifyRegister<
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
                Awaited<ReturnType<typeof client.apps.reseller.v1.resellernotify.register.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.apps.reseller.v1.resellernotify.register.$post>,
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
  const mutationDefaults = getPostAppsResellerV1ResellernotifyRegisterMutationOptions<
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

export function usePostAppsResellerV1ResellernotifyUnregister<
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
                Awaited<ReturnType<typeof client.apps.reseller.v1.resellernotify.unregister.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.apps.reseller.v1.resellernotify.unregister.$post>,
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
  const mutationDefaults = getPostAppsResellerV1ResellernotifyUnregisterMutationOptions<
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

export function getAppsResellerV1SubscriptionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.apps.reseller.v1.subscriptions.$get>>,
) {
  return ['apps', '/apps/reseller/v1/subscriptions', toValue(args)] as const
}

export function getAppsResellerV1SubscriptionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.apps.reseller.v1.subscriptions.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAppsResellerV1SubscriptionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.apps.reseller.v1.subscriptions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAppsResellerV1Subscriptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.apps.reseller.v1.subscriptions.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.apps.reseller.v1.subscriptions.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.apps.reseller.v1.subscriptions.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.apps.reseller.v1.subscriptions.$get>>
              >
            >
          >,
          ReturnType<typeof getAppsResellerV1SubscriptionsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.apps.reseller.v1.subscriptions.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppsResellerV1SubscriptionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAppsResellerV1SubscriptionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.apps.reseller.v1.subscriptions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
