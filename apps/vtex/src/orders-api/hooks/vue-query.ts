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

export function getApiKey() {
  return ['api'] as const
}

export function getApiCheckoutPvtConfigurationWindowToChangeSellerQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.checkout.pvt.configuration)['window-to-change-seller']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/checkout/pvt/configuration/window-to-change-seller', keyArgs] as const
}

export function getApiCheckoutPvtConfigurationWindowToChangeSellerQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.checkout.pvt.configuration)['window-to-change-seller']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiCheckoutPvtConfigurationWindowToChangeSellerQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.checkout.pvt.configuration['window-to-change-seller'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiCheckoutPvtConfigurationWindowToChangeSeller<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.checkout.pvt.configuration)['window-to-change-seller']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.checkout.pvt.configuration)['window-to-change-seller']['$get']
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
                    (typeof client.api.checkout.pvt.configuration)['window-to-change-seller']['$get']
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
                    (typeof client.api.checkout.pvt.configuration)['window-to-change-seller']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiCheckoutPvtConfigurationWindowToChangeSellerQueryKey>
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
              (typeof client.api.checkout.pvt.configuration)['window-to-change-seller']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiCheckoutPvtConfigurationWindowToChangeSellerQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiCheckoutPvtConfigurationWindowToChangeSellerQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.checkout.pvt.configuration['window-to-change-seller'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiCheckoutPvtConfigurationWindowToChangeSellerMutationKey() {
  return ['api', '/api/checkout/pvt/configuration/window-to-change-seller', 'POST'] as const
}

export function getPostApiCheckoutPvtConfigurationWindowToChangeSellerMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.checkout.pvt.configuration)['window-to-change-seller']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.checkout.pvt.configuration)['window-to-change-seller']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiCheckoutPvtConfigurationWindowToChangeSellerMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.checkout.pvt.configuration)['window-to-change-seller']['$post']
      >,
    ) {
      return parseResponse(
        client.api.checkout.pvt.configuration['window-to-change-seller'].$post(args, options),
      )
    },
  })
}

export function usePostApiCheckoutPvtConfigurationWindowToChangeSeller<
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
                    (typeof client.api.checkout.pvt.configuration)['window-to-change-seller']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.checkout.pvt.configuration)['window-to-change-seller']['$post']
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
  const mutationDefaults = getPostApiCheckoutPvtConfigurationWindowToChangeSellerMutationOptions<
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

export function getApiOmsPvtAdminReportsCompletedQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.oms.pvt.admin.reports.completed.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/oms/pvt/admin/reports/completed', keyArgs] as const
}

export function getApiOmsPvtAdminReportsCompletedQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.oms.pvt.admin.reports.completed.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiOmsPvtAdminReportsCompletedQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.oms.pvt.admin.reports.completed.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiOmsPvtAdminReportsCompleted<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.oms.pvt.admin.reports.completed.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.oms.pvt.admin.reports.completed.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.oms.pvt.admin.reports.completed.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.oms.pvt.admin.reports.completed.$get>>
              >
            >
          >,
          ReturnType<typeof getApiOmsPvtAdminReportsCompletedQueryKey>
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
          Awaited<ReturnType<typeof client.api.oms.pvt.admin.reports.completed.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiOmsPvtAdminReportsCompletedQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiOmsPvtAdminReportsCompletedQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.oms.pvt.admin.reports.completed.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiOmsPvtAdminReportsInprogressQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.oms.pvt.admin.reports.inprogress.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/oms/pvt/admin/reports/inprogress', keyArgs] as const
}

export function getApiOmsPvtAdminReportsInprogressQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.oms.pvt.admin.reports.inprogress.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiOmsPvtAdminReportsInprogressQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.oms.pvt.admin.reports.inprogress.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiOmsPvtAdminReportsInprogress<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.oms.pvt.admin.reports.inprogress.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.oms.pvt.admin.reports.inprogress.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.oms.pvt.admin.reports.inprogress.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.oms.pvt.admin.reports.inprogress.$get>>
              >
            >
          >,
          ReturnType<typeof getApiOmsPvtAdminReportsInprogressQueryKey>
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
          Awaited<ReturnType<typeof client.api.oms.pvt.admin.reports.inprogress.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiOmsPvtAdminReportsInprogressQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiOmsPvtAdminReportsInprogressQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.oms.pvt.admin.reports.inprogress.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiOmsPvtFeedOrdersStatusQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.oms.pvt.feed.orders.status.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/oms/pvt/feed/orders/status', keyArgs] as const
}

export function getApiOmsPvtFeedOrdersStatusQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.oms.pvt.feed.orders.status.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiOmsPvtFeedOrdersStatusQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.oms.pvt.feed.orders.status.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiOmsPvtFeedOrdersStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.oms.pvt.feed.orders.status.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.oms.pvt.feed.orders.status.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.oms.pvt.feed.orders.status.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.oms.pvt.feed.orders.status.$get>>
              >
            >
          >,
          ReturnType<typeof getApiOmsPvtFeedOrdersStatusQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.oms.pvt.feed.orders.status.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiOmsPvtFeedOrdersStatusQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiOmsPvtFeedOrdersStatusQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.oms.pvt.feed.orders.status.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiOmsPvtOrdersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.oms.pvt.orders.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/oms/pvt/orders', keyArgs] as const
}

export function getApiOmsPvtOrdersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.oms.pvt.orders.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiOmsPvtOrdersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.oms.pvt.orders.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiOmsPvtOrders<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.oms.pvt.orders.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.oms.pvt.orders.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.oms.pvt.orders.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.oms.pvt.orders.$get>>>
            >
          >,
          ReturnType<typeof getApiOmsPvtOrdersQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.oms.pvt.orders.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiOmsPvtOrdersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiOmsPvtOrdersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.oms.pvt.orders.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiOmsPvtOrdersOrderIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.oms.pvt.orders)[':orderId']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/oms/pvt/orders/:orderId', keyArgs] as const
}

export function getApiOmsPvtOrdersOrderIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.oms.pvt.orders)[':orderId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiOmsPvtOrdersOrderIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.oms.pvt.orders[':orderId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiOmsPvtOrdersOrderId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.oms.pvt.orders)[':orderId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.oms.pvt.orders)[':orderId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.oms.pvt.orders)[':orderId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.oms.pvt.orders)[':orderId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiOmsPvtOrdersOrderIdQueryKey>
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
          Awaited<ReturnType<(typeof client.api.oms.pvt.orders)[':orderId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiOmsPvtOrdersOrderIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiOmsPvtOrdersOrderIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.oms.pvt.orders[':orderId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiOmsPvtOrdersOrderIdCancelMutationKey() {
  return ['api', '/api/oms/pvt/orders/:orderId/cancel', 'POST'] as const
}

export function getPostApiOmsPvtOrdersOrderIdCancelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.oms.pvt.orders)[':orderId']['cancel']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.oms.pvt.orders)[':orderId']['cancel']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiOmsPvtOrdersOrderIdCancelMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.oms.pvt.orders)[':orderId']['cancel']['$post']>,
    ) {
      return parseResponse(client.api.oms.pvt.orders[':orderId'].cancel.$post(args, options))
    },
  })
}

export function usePostApiOmsPvtOrdersOrderIdCancel<
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
                  ReturnType<(typeof client.api.oms.pvt.orders)[':orderId']['cancel']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.oms.pvt.orders)[':orderId']['cancel']['$post']>,
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
  const mutationDefaults = getPostApiOmsPvtOrdersOrderIdCancelMutationOptions<
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

export function getPostApiOmsPvtOrdersOrderIdChangesMutationKey() {
  return ['api', '/api/oms/pvt/orders/:orderId/changes', 'POST'] as const
}

export function getPostApiOmsPvtOrdersOrderIdChangesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.oms.pvt.orders)[':orderId']['changes']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.oms.pvt.orders)[':orderId']['changes']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiOmsPvtOrdersOrderIdChangesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.oms.pvt.orders)[':orderId']['changes']['$post']>,
    ) {
      return parseResponse(client.api.oms.pvt.orders[':orderId'].changes.$post(args, options))
    },
  })
}

export function usePostApiOmsPvtOrdersOrderIdChanges<
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
                  ReturnType<(typeof client.api.oms.pvt.orders)[':orderId']['changes']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.oms.pvt.orders)[':orderId']['changes']['$post']>,
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
  const mutationDefaults = getPostApiOmsPvtOrdersOrderIdChangesMutationOptions<
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

export function getApiOmsPvtOrdersOrderIdConversationMessageQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.oms.pvt.orders)[':orderId']['conversation-message']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/oms/pvt/orders/:orderId/conversation-message', keyArgs] as const
}

export function getApiOmsPvtOrdersOrderIdConversationMessageQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.oms.pvt.orders)[':orderId']['conversation-message']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiOmsPvtOrdersOrderIdConversationMessageQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.oms.pvt.orders[':orderId']['conversation-message'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiOmsPvtOrdersOrderIdConversationMessage<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.oms.pvt.orders)[':orderId']['conversation-message']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.oms.pvt.orders)[':orderId']['conversation-message']['$get']>
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
                    (typeof client.api.oms.pvt.orders)[':orderId']['conversation-message']['$get']
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
                    (typeof client.api.oms.pvt.orders)[':orderId']['conversation-message']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiOmsPvtOrdersOrderIdConversationMessageQueryKey>
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
              (typeof client.api.oms.pvt.orders)[':orderId']['conversation-message']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiOmsPvtOrdersOrderIdConversationMessageQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiOmsPvtOrdersOrderIdConversationMessageQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.oms.pvt.orders[':orderId']['conversation-message'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiOmsPvtOrdersOrderIdInteractionsMutationKey() {
  return ['api', '/api/oms/pvt/orders/:orderId/interactions', 'POST'] as const
}

export function getPostApiOmsPvtOrdersOrderIdInteractionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.oms.pvt.orders)[':orderId']['interactions']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.oms.pvt.orders)[':orderId']['interactions']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiOmsPvtOrdersOrderIdInteractionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.oms.pvt.orders)[':orderId']['interactions']['$post']
      >,
    ) {
      return parseResponse(client.api.oms.pvt.orders[':orderId'].interactions.$post(args, options))
    },
  })
}

export function usePostApiOmsPvtOrdersOrderIdInteractions<
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
                    (typeof client.api.oms.pvt.orders)[':orderId']['interactions']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.oms.pvt.orders)[':orderId']['interactions']['$post']>,
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
  const mutationDefaults = getPostApiOmsPvtOrdersOrderIdInteractionsMutationOptions<
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

export function getPostApiOmsPvtOrdersOrderIdInvoiceMutationKey() {
  return ['api', '/api/oms/pvt/orders/:orderId/invoice', 'POST'] as const
}

export function getPostApiOmsPvtOrdersOrderIdInvoiceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.oms.pvt.orders)[':orderId']['invoice']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.oms.pvt.orders)[':orderId']['invoice']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiOmsPvtOrdersOrderIdInvoiceMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.oms.pvt.orders)[':orderId']['invoice']['$post']>,
    ) {
      return parseResponse(client.api.oms.pvt.orders[':orderId'].invoice.$post(args, options))
    },
  })
}

export function usePostApiOmsPvtOrdersOrderIdInvoice<
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
                  ReturnType<(typeof client.api.oms.pvt.orders)[':orderId']['invoice']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.oms.pvt.orders)[':orderId']['invoice']['$post']>,
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
  const mutationDefaults = getPostApiOmsPvtOrdersOrderIdInvoiceMutationOptions<
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

export function getPatchApiOmsPvtOrdersOrderIdInvoiceInvoiceNumberMutationKey() {
  return ['api', '/api/oms/pvt/orders/:orderId/invoice/:invoiceNumber', 'PATCH'] as const
}

export function getPatchApiOmsPvtOrdersOrderIdInvoiceInvoiceNumberMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.oms.pvt.orders)[':orderId']['invoice'][':invoiceNumber']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.oms.pvt.orders)[':orderId']['invoice'][':invoiceNumber']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchApiOmsPvtOrdersOrderIdInvoiceInvoiceNumberMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.oms.pvt.orders)[':orderId']['invoice'][':invoiceNumber']['$patch']
      >,
    ) {
      return parseResponse(
        client.api.oms.pvt.orders[':orderId'].invoice[':invoiceNumber'].$patch(args, options),
      )
    },
  })
}

export function usePatchApiOmsPvtOrdersOrderIdInvoiceInvoiceNumber<
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
                    (typeof client.api.oms.pvt.orders)[':orderId']['invoice'][':invoiceNumber']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.oms.pvt.orders)[':orderId']['invoice'][':invoiceNumber']['$patch']
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
  const mutationDefaults = getPatchApiOmsPvtOrdersOrderIdInvoiceInvoiceNumberMutationOptions<
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

export function getPutApiOmsPvtOrdersOrderIdInvoiceInvoiceNumberTrackingMutationKey() {
  return ['api', '/api/oms/pvt/orders/:orderId/invoice/:invoiceNumber/tracking', 'PUT'] as const
}

export function getPutApiOmsPvtOrdersOrderIdInvoiceInvoiceNumberTrackingMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.oms.pvt.orders)[':orderId']['invoice'][':invoiceNumber']['tracking']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.oms.pvt.orders)[':orderId']['invoice'][':invoiceNumber']['tracking']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutApiOmsPvtOrdersOrderIdInvoiceInvoiceNumberTrackingMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.oms.pvt.orders)[':orderId']['invoice'][':invoiceNumber']['tracking']['$put']
      >,
    ) {
      return parseResponse(
        client.api.oms.pvt.orders[':orderId'].invoice[':invoiceNumber'].tracking.$put(
          args,
          options,
        ),
      )
    },
  })
}

export function usePutApiOmsPvtOrdersOrderIdInvoiceInvoiceNumberTracking<
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
                    (typeof client.api.oms.pvt.orders)[':orderId']['invoice'][':invoiceNumber']['tracking']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.oms.pvt.orders)[':orderId']['invoice'][':invoiceNumber']['tracking']['$put']
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
  const mutationDefaults = getPutApiOmsPvtOrdersOrderIdInvoiceInvoiceNumberTrackingMutationOptions<
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

export function getApiOmsPvtOrdersOrderIdPaymentTransactionQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.oms.pvt.orders)[':orderId']['payment-transaction']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/oms/pvt/orders/:orderId/payment-transaction', keyArgs] as const
}

export function getApiOmsPvtOrdersOrderIdPaymentTransactionQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.oms.pvt.orders)[':orderId']['payment-transaction']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiOmsPvtOrdersOrderIdPaymentTransactionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.oms.pvt.orders[':orderId']['payment-transaction'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiOmsPvtOrdersOrderIdPaymentTransaction<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.oms.pvt.orders)[':orderId']['payment-transaction']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.oms.pvt.orders)[':orderId']['payment-transaction']['$get']>
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
                    (typeof client.api.oms.pvt.orders)[':orderId']['payment-transaction']['$get']
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
                    (typeof client.api.oms.pvt.orders)[':orderId']['payment-transaction']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiOmsPvtOrdersOrderIdPaymentTransactionQueryKey>
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
              (typeof client.api.oms.pvt.orders)[':orderId']['payment-transaction']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiOmsPvtOrdersOrderIdPaymentTransactionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiOmsPvtOrdersOrderIdPaymentTransactionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.oms.pvt.orders[':orderId']['payment-transaction'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiOmsPvtOrdersOrderIdPaymentsPaymentIdPaymentNotificationMutationKey() {
  return [
    'api',
    '/api/oms/pvt/orders/:orderId/payments/:paymentId/payment-notification',
    'POST',
  ] as const
}

export function getPostApiOmsPvtOrdersOrderIdPaymentsPaymentIdPaymentNotificationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.oms.pvt.orders)[':orderId']['payments'][':paymentId']['payment-notification']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.oms.pvt.orders)[':orderId']['payments'][':paymentId']['payment-notification']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiOmsPvtOrdersOrderIdPaymentsPaymentIdPaymentNotificationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.oms.pvt.orders)[':orderId']['payments'][':paymentId']['payment-notification']['$post']
      >,
    ) {
      return parseResponse(
        client.api.oms.pvt.orders[':orderId'].payments[':paymentId']['payment-notification'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostApiOmsPvtOrdersOrderIdPaymentsPaymentIdPaymentNotification<
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
                    (typeof client.api.oms.pvt.orders)[':orderId']['payments'][':paymentId']['payment-notification']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.oms.pvt.orders)[':orderId']['payments'][':paymentId']['payment-notification']['$post']
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
    getPostApiOmsPvtOrdersOrderIdPaymentsPaymentIdPaymentNotificationMutationOptions<
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

export function getPostApiOmsPvtOrdersOrderIdStartHandlingMutationKey() {
  return ['api', '/api/oms/pvt/orders/:orderId/start-handling', 'POST'] as const
}

export function getPostApiOmsPvtOrdersOrderIdStartHandlingMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.oms.pvt.orders)[':orderId']['start-handling']['$post']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.oms.pvt.orders)[':orderId']['start-handling']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiOmsPvtOrdersOrderIdStartHandlingMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.oms.pvt.orders)[':orderId']['start-handling']['$post']
      >,
    ) {
      return parseResponse(
        client.api.oms.pvt.orders[':orderId']['start-handling'].$post(args, options),
      )
    },
  })
}

export function usePostApiOmsPvtOrdersOrderIdStartHandling<
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
                      (typeof client.api.oms.pvt.orders)[':orderId']['start-handling']['$post']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.api.oms.pvt.orders)[':orderId']['start-handling']['$post']
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
  const mutationDefaults = getPostApiOmsPvtOrdersOrderIdStartHandlingMutationOptions<
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

export function getApiOmsUserOrdersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.oms.user.orders.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/oms/user/orders', keyArgs] as const
}

export function getApiOmsUserOrdersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.oms.user.orders.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiOmsUserOrdersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.oms.user.orders.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiOmsUserOrders<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.oms.user.orders.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.oms.user.orders.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.oms.user.orders.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.oms.user.orders.$get>>>
            >
          >,
          ReturnType<typeof getApiOmsUserOrdersQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.oms.user.orders.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiOmsUserOrdersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiOmsUserOrdersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.oms.user.orders.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiOmsUserOrdersOrderIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.oms.user.orders)[':orderId']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/oms/user/orders/:orderId', keyArgs] as const
}

export function getApiOmsUserOrdersOrderIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.oms.user.orders)[':orderId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiOmsUserOrdersOrderIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.oms.user.orders[':orderId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiOmsUserOrdersOrderId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.oms.user.orders)[':orderId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.oms.user.orders)[':orderId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.oms.user.orders)[':orderId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.oms.user.orders)[':orderId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiOmsUserOrdersOrderIdQueryKey>
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
          Awaited<ReturnType<(typeof client.api.oms.user.orders)[':orderId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiOmsUserOrdersOrderIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiOmsUserOrdersOrderIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.oms.user.orders[':orderId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiOrdersExpressionsJsonataMutationKey() {
  return ['api', '/api/orders/expressions/jsonata', 'POST'] as const
}

export function getPostApiOrdersExpressionsJsonataMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.orders.expressions.jsonata.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.api.orders.expressions.jsonata.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiOrdersExpressionsJsonataMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.orders.expressions.jsonata.$post>) {
      return parseResponse(client.api.orders.expressions.jsonata.$post(args, options))
    },
  })
}

export function usePostApiOrdersExpressionsJsonata<
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
                Awaited<ReturnType<typeof client.api.orders.expressions.jsonata.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.api.orders.expressions.jsonata.$post>,
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
  const mutationDefaults = getPostApiOrdersExpressionsJsonataMutationOptions<
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

export function getApiOrdersFeedQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.orders.feed.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/orders/feed', keyArgs] as const
}

export function getApiOrdersFeedQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.orders.feed.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiOrdersFeedQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.orders.feed.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiOrdersFeed<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.orders.feed.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.orders.feed.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.orders.feed.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.orders.feed.$get>>>
            >
          >,
          ReturnType<typeof getApiOrdersFeedQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.orders.feed.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiOrdersFeedQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiOrdersFeedQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.orders.feed.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiOrdersFeedMutationKey() {
  return ['api', '/api/orders/feed', 'POST'] as const
}

export function getPostApiOrdersFeedMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.orders.feed.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.orders.feed.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiOrdersFeedMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.orders.feed.$post>) {
      return parseResponse(client.api.orders.feed.$post(args, options))
    },
  })
}

export function usePostApiOrdersFeed<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.orders.feed.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.orders.feed.$post>,
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
  const mutationDefaults = getPostApiOrdersFeedMutationOptions<TError, TOnMutateResult>(
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

export function getApiOrdersFeedConfigQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.orders.feed.config.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/orders/feed/config', keyArgs] as const
}

export function getApiOrdersFeedConfigQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.orders.feed.config.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiOrdersFeedConfigQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.orders.feed.config.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiOrdersFeedConfig<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.orders.feed.config.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.orders.feed.config.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.orders.feed.config.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.orders.feed.config.$get>>>
            >
          >,
          ReturnType<typeof getApiOrdersFeedConfigQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.orders.feed.config.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiOrdersFeedConfigQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiOrdersFeedConfigQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.orders.feed.config.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiOrdersFeedConfigMutationKey() {
  return ['api', '/api/orders/feed/config', 'POST'] as const
}

export function getPostApiOrdersFeedConfigMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.orders.feed.config.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.orders.feed.config.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiOrdersFeedConfigMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.orders.feed.config.$post>) {
      return parseResponse(client.api.orders.feed.config.$post(args, options))
    },
  })
}

export function usePostApiOrdersFeedConfig<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.orders.feed.config.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.orders.feed.config.$post>,
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
  const mutationDefaults = getPostApiOrdersFeedConfigMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteApiOrdersFeedConfigMutationKey() {
  return ['api', '/api/orders/feed/config', 'DELETE'] as const
}

export function getDeleteApiOrdersFeedConfigMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.orders.feed.config.$delete>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.orders.feed.config.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiOrdersFeedConfigMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.orders.feed.config.$delete>) {
      return parseResponse(client.api.orders.feed.config.$delete(args, options))
    },
  })
}

export function useDeleteApiOrdersFeedConfig<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.orders.feed.config.$delete>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.api.orders.feed.config.$delete>,
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
  const mutationDefaults = getDeleteApiOrdersFeedConfigMutationOptions<TError, TOnMutateResult>(
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

export function getApiOrdersHookConfigQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.orders.hook.config.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/orders/hook/config', keyArgs] as const
}

export function getApiOrdersHookConfigQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.orders.hook.config.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiOrdersHookConfigQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.orders.hook.config.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiOrdersHookConfig<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.orders.hook.config.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.orders.hook.config.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.orders.hook.config.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.orders.hook.config.$get>>>
            >
          >,
          ReturnType<typeof getApiOrdersHookConfigQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.orders.hook.config.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiOrdersHookConfigQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiOrdersHookConfigQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.orders.hook.config.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiOrdersHookConfigMutationKey() {
  return ['api', '/api/orders/hook/config', 'POST'] as const
}

export function getPostApiOrdersHookConfigMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.orders.hook.config.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.orders.hook.config.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiOrdersHookConfigMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.orders.hook.config.$post>) {
      return parseResponse(client.api.orders.hook.config.$post(args, options))
    },
  })
}

export function usePostApiOrdersHookConfig<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.orders.hook.config.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.orders.hook.config.$post>,
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
  const mutationDefaults = getPostApiOrdersHookConfigMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteApiOrdersHookConfigMutationKey() {
  return ['api', '/api/orders/hook/config', 'DELETE'] as const
}

export function getDeleteApiOrdersHookConfigMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.orders.hook.config.$delete>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.orders.hook.config.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiOrdersHookConfigMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.orders.hook.config.$delete>) {
      return parseResponse(client.api.orders.hook.config.$delete(args, options))
    },
  })
}

export function useDeleteApiOrdersHookConfig<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.orders.hook.config.$delete>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.api.orders.hook.config.$delete>,
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
  const mutationDefaults = getDeleteApiOrdersHookConfigMutationOptions<TError, TOnMutateResult>(
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
