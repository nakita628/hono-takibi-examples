import { createQuery, createMutation, queryOptions, mutationOptions } from '@tanstack/svelte-query'
import type {
  CreateQueryOptions,
  CreateMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/svelte-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getApiKey() {
  return ['api'] as const
}

export function getApiCheckoutPvtConfigurationWindowToChangeSellerQueryKey(
  args: InferRequestType<
    (typeof client.api.checkout.pvt.configuration)['window-to-change-seller']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/checkout/pvt/configuration/window-to-change-seller', keyArgs] as const
}

export function getApiCheckoutPvtConfigurationWindowToChangeSellerQueryOptions<
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
  args: InferRequestType<
    (typeof client.api.checkout.pvt.configuration)['window-to-change-seller']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiCheckoutPvtConfigurationWindowToChangeSellerQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.checkout.pvt.configuration['window-to-change-seller'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiCheckoutPvtConfigurationWindowToChangeSeller<
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
  args: () => InferRequestType<
    (typeof client.api.checkout.pvt.configuration)['window-to-change-seller']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getApiCheckoutPvtConfigurationWindowToChangeSellerQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPostApiCheckoutPvtConfigurationWindowToChangeSeller<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiCheckoutPvtConfigurationWindowToChangeSellerMutationOptions<
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

export function getApiOmsPvtAdminReportsCompletedQueryKey(
  args: InferRequestType<typeof client.api.oms.pvt.admin.reports.completed.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/oms/pvt/admin/reports/completed', keyArgs] as const
}

export function getApiOmsPvtAdminReportsCompletedQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.oms.pvt.admin.reports.completed.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.oms.pvt.admin.reports.completed.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiOmsPvtAdminReportsCompletedQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.oms.pvt.admin.reports.completed.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiOmsPvtAdminReportsCompleted<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.oms.pvt.admin.reports.completed.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.oms.pvt.admin.reports.completed.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getApiOmsPvtAdminReportsCompletedQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiOmsPvtAdminReportsInprogressQueryKey(
  args: InferRequestType<typeof client.api.oms.pvt.admin.reports.inprogress.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/oms/pvt/admin/reports/inprogress', keyArgs] as const
}

export function getApiOmsPvtAdminReportsInprogressQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.oms.pvt.admin.reports.inprogress.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.oms.pvt.admin.reports.inprogress.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiOmsPvtAdminReportsInprogressQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.oms.pvt.admin.reports.inprogress.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiOmsPvtAdminReportsInprogress<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.oms.pvt.admin.reports.inprogress.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.oms.pvt.admin.reports.inprogress.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getApiOmsPvtAdminReportsInprogressQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiOmsPvtFeedOrdersStatusQueryKey(
  args: InferRequestType<typeof client.api.oms.pvt.feed.orders.status.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/oms/pvt/feed/orders/status', keyArgs] as const
}

export function getApiOmsPvtFeedOrdersStatusQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.oms.pvt.feed.orders.status.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.oms.pvt.feed.orders.status.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.oms.pvt.feed.orders.status.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiOmsPvtFeedOrdersStatusQueryKey>
  >({
    queryKey: getApiOmsPvtFeedOrdersStatusQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.oms.pvt.feed.orders.status.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiOmsPvtFeedOrdersStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.oms.pvt.feed.orders.status.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.oms.pvt.feed.orders.status.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.oms.pvt.feed.orders.status.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiOmsPvtFeedOrdersStatusQueryKey>
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
      ...getApiOmsPvtFeedOrdersStatusQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiOmsPvtOrdersQueryKey(
  args: InferRequestType<typeof client.api.oms.pvt.orders.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/oms/pvt/orders', keyArgs] as const
}

export function getApiOmsPvtOrdersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.oms.pvt.orders.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.oms.pvt.orders.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.oms.pvt.orders.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiOmsPvtOrdersQueryKey>
  >({
    queryKey: getApiOmsPvtOrdersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.oms.pvt.orders.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiOmsPvtOrders<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.oms.pvt.orders.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.oms.pvt.orders.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.oms.pvt.orders.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiOmsPvtOrdersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiOmsPvtOrdersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiOmsPvtOrdersOrderIdQueryKey(
  args: InferRequestType<(typeof client.api.oms.pvt.orders)[':orderId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/oms/pvt/orders/:orderId', keyArgs] as const
}

export function getApiOmsPvtOrdersOrderIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.oms.pvt.orders)[':orderId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.oms.pvt.orders)[':orderId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiOmsPvtOrdersOrderIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.oms.pvt.orders[':orderId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiOmsPvtOrdersOrderId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.oms.pvt.orders)[':orderId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.oms.pvt.orders)[':orderId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getApiOmsPvtOrdersOrderIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostApiOmsPvtOrdersOrderIdCancel<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiOmsPvtOrdersOrderIdCancelMutationOptions<
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

export function createPostApiOmsPvtOrdersOrderIdChanges<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiOmsPvtOrdersOrderIdChangesMutationOptions<
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

export function getApiOmsPvtOrdersOrderIdConversationMessageQueryKey(
  args: InferRequestType<
    (typeof client.api.oms.pvt.orders)[':orderId']['conversation-message']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/oms/pvt/orders/:orderId/conversation-message', keyArgs] as const
}

export function getApiOmsPvtOrdersOrderIdConversationMessageQueryOptions<
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
  args: InferRequestType<
    (typeof client.api.oms.pvt.orders)[':orderId']['conversation-message']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiOmsPvtOrdersOrderIdConversationMessageQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.oms.pvt.orders[':orderId']['conversation-message'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiOmsPvtOrdersOrderIdConversationMessage<
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
  args: () => InferRequestType<
    (typeof client.api.oms.pvt.orders)[':orderId']['conversation-message']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getApiOmsPvtOrdersOrderIdConversationMessageQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPostApiOmsPvtOrdersOrderIdInteractions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiOmsPvtOrdersOrderIdInteractionsMutationOptions<
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

export function createPostApiOmsPvtOrdersOrderIdInvoice<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiOmsPvtOrdersOrderIdInvoiceMutationOptions<
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

export function createPatchApiOmsPvtOrdersOrderIdInvoiceInvoiceNumber<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchApiOmsPvtOrdersOrderIdInvoiceInvoiceNumberMutationOptions<
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

export function createPutApiOmsPvtOrdersOrderIdInvoiceInvoiceNumberTracking<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutApiOmsPvtOrdersOrderIdInvoiceInvoiceNumberTrackingMutationOptions<
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

export function getApiOmsPvtOrdersOrderIdPaymentTransactionQueryKey(
  args: InferRequestType<
    (typeof client.api.oms.pvt.orders)[':orderId']['payment-transaction']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/oms/pvt/orders/:orderId/payment-transaction', keyArgs] as const
}

export function getApiOmsPvtOrdersOrderIdPaymentTransactionQueryOptions<
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
  args: InferRequestType<
    (typeof client.api.oms.pvt.orders)[':orderId']['payment-transaction']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiOmsPvtOrdersOrderIdPaymentTransactionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.oms.pvt.orders[':orderId']['payment-transaction'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiOmsPvtOrdersOrderIdPaymentTransaction<
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
  args: () => InferRequestType<
    (typeof client.api.oms.pvt.orders)[':orderId']['payment-transaction']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getApiOmsPvtOrdersOrderIdPaymentTransactionQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPostApiOmsPvtOrdersOrderIdPaymentsPaymentIdPaymentNotification<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostApiOmsPvtOrdersOrderIdPaymentsPaymentIdPaymentNotificationMutationOptions<
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

export function createPostApiOmsPvtOrdersOrderIdStartHandling<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<(typeof client.api.oms.pvt.orders)[':orderId']['start-handling']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiOmsPvtOrdersOrderIdStartHandlingMutationOptions<
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

export function getApiOmsUserOrdersQueryKey(
  args: InferRequestType<typeof client.api.oms.user.orders.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/oms/user/orders', keyArgs] as const
}

export function getApiOmsUserOrdersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.oms.user.orders.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.oms.user.orders.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.oms.user.orders.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiOmsUserOrdersQueryKey>
  >({
    queryKey: getApiOmsUserOrdersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.oms.user.orders.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiOmsUserOrders<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.oms.user.orders.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.oms.user.orders.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.oms.user.orders.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiOmsUserOrdersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiOmsUserOrdersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiOmsUserOrdersOrderIdQueryKey(
  args: InferRequestType<(typeof client.api.oms.user.orders)[':orderId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/oms/user/orders/:orderId', keyArgs] as const
}

export function getApiOmsUserOrdersOrderIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.oms.user.orders)[':orderId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.oms.user.orders)[':orderId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiOmsUserOrdersOrderIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.oms.user.orders[':orderId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiOmsUserOrdersOrderId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.oms.user.orders)[':orderId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.oms.user.orders)[':orderId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getApiOmsUserOrdersOrderIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostApiOrdersExpressionsJsonata<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiOrdersExpressionsJsonataMutationOptions<
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

export function getApiOrdersFeedQueryKey(
  args: InferRequestType<typeof client.api.orders.feed.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/orders/feed', keyArgs] as const
}

export function getApiOrdersFeedQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.orders.feed.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.orders.feed.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.orders.feed.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiOrdersFeedQueryKey>
  >({
    queryKey: getApiOrdersFeedQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.orders.feed.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiOrdersFeed<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.orders.feed.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.orders.feed.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.orders.feed.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiOrdersFeedQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiOrdersFeedQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostApiOrdersFeed<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.orders.feed.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.api.orders.feed.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiOrdersFeedMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiOrdersFeedConfigQueryKey(
  args: InferRequestType<typeof client.api.orders.feed.config.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/orders/feed/config', keyArgs] as const
}

export function getApiOrdersFeedConfigQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.orders.feed.config.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.orders.feed.config.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.orders.feed.config.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiOrdersFeedConfigQueryKey>
  >({
    queryKey: getApiOrdersFeedConfigQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.orders.feed.config.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiOrdersFeedConfig<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.orders.feed.config.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.orders.feed.config.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.orders.feed.config.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiOrdersFeedConfigQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiOrdersFeedConfigQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostApiOrdersFeedConfig<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.orders.feed.config.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.orders.feed.config.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiOrdersFeedConfigMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteApiOrdersFeedConfig<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.orders.feed.config.$delete>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.orders.feed.config.$delete>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteApiOrdersFeedConfigMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiOrdersHookConfigQueryKey(
  args: InferRequestType<typeof client.api.orders.hook.config.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/orders/hook/config', keyArgs] as const
}

export function getApiOrdersHookConfigQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.orders.hook.config.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.orders.hook.config.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.orders.hook.config.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiOrdersHookConfigQueryKey>
  >({
    queryKey: getApiOrdersHookConfigQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.orders.hook.config.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiOrdersHookConfig<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.orders.hook.config.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.orders.hook.config.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.orders.hook.config.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiOrdersHookConfigQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiOrdersHookConfigQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostApiOrdersHookConfig<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.orders.hook.config.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.orders.hook.config.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiOrdersHookConfigMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteApiOrdersHookConfig<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.orders.hook.config.$delete>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.orders.hook.config.$delete>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteApiOrdersHookConfigMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}
