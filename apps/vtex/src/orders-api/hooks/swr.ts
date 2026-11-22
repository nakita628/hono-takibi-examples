import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getApiKey() {
  return ['api'] as const
}

export function getGetApiCheckoutPvtConfigurationWindowToChangeSellerKey(
  args: InferRequestType<
    (typeof client.api.checkout.pvt.configuration)['window-to-change-seller']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/checkout/pvt/configuration/window-to-change-seller', keyArgs] as const
}

export function useGetApiCheckoutPvtConfigurationWindowToChangeSeller<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.checkout.pvt.configuration)['window-to-change-seller']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiCheckoutPvtConfigurationWindowToChangeSellerKey(args)
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
                (typeof client.api.checkout.pvt.configuration)['window-to-change-seller']['$get']
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
          client.api.checkout.pvt.configuration['window-to-change-seller'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiCheckoutPvtConfigurationWindowToChangeSeller<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.checkout.pvt.configuration)['window-to-change-seller']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiCheckoutPvtConfigurationWindowToChangeSellerKey(args)
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
                (typeof client.api.checkout.pvt.configuration)['window-to-change-seller']['$get']
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
          client.api.checkout.pvt.configuration['window-to-change-seller'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApiCheckoutPvtConfigurationWindowToChangeSellerKey() {
  return ['api', '/api/checkout/pvt/configuration/window-to-change-seller', 'POST'] as const
}

export function usePostApiCheckoutPvtConfigurationWindowToChangeSeller<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.checkout.pvt.configuration)['window-to-change-seller']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiCheckoutPvtConfigurationWindowToChangeSellerKey()
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
            (typeof client.api.checkout.pvt.configuration)['window-to-change-seller']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.checkout.pvt.configuration['window-to-change-seller'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiOmsPvtAdminReportsCompletedKey(
  args: InferRequestType<typeof client.api.oms.pvt.admin.reports.completed.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/oms/pvt/admin/reports/completed', keyArgs] as const
}

export function useGetApiOmsPvtAdminReportsCompleted<TError = unknown>(
  args: InferRequestType<typeof client.api.oms.pvt.admin.reports.completed.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.oms.pvt.admin.reports.completed.$get>>
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
        ? getGetApiOmsPvtAdminReportsCompletedKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.oms.pvt.admin.reports.completed.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.oms.pvt.admin.reports.completed.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiOmsPvtAdminReportsCompleted<TError = unknown>(
  args: InferRequestType<typeof client.api.oms.pvt.admin.reports.completed.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.oms.pvt.admin.reports.completed.$get>>
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
        ? getGetApiOmsPvtAdminReportsCompletedKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.oms.pvt.admin.reports.completed.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.oms.pvt.admin.reports.completed.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiOmsPvtAdminReportsInprogressKey(
  args: InferRequestType<typeof client.api.oms.pvt.admin.reports.inprogress.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/oms/pvt/admin/reports/inprogress', keyArgs] as const
}

export function useGetApiOmsPvtAdminReportsInprogress<TError = unknown>(
  args: InferRequestType<typeof client.api.oms.pvt.admin.reports.inprogress.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.oms.pvt.admin.reports.inprogress.$get>>
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
        ? getGetApiOmsPvtAdminReportsInprogressKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.oms.pvt.admin.reports.inprogress.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.oms.pvt.admin.reports.inprogress.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiOmsPvtAdminReportsInprogress<TError = unknown>(
  args: InferRequestType<typeof client.api.oms.pvt.admin.reports.inprogress.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.oms.pvt.admin.reports.inprogress.$get>>
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
        ? getGetApiOmsPvtAdminReportsInprogressKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.oms.pvt.admin.reports.inprogress.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.oms.pvt.admin.reports.inprogress.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiOmsPvtFeedOrdersStatusKey(
  args: InferRequestType<typeof client.api.oms.pvt.feed.orders.status.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/oms/pvt/feed/orders/status', keyArgs] as const
}

export function useGetApiOmsPvtFeedOrdersStatus<TError = unknown>(
  args: InferRequestType<typeof client.api.oms.pvt.feed.orders.status.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.oms.pvt.feed.orders.status.$get>>
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
        ? getGetApiOmsPvtFeedOrdersStatusKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.oms.pvt.feed.orders.status.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.oms.pvt.feed.orders.status.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiOmsPvtFeedOrdersStatus<TError = unknown>(
  args: InferRequestType<typeof client.api.oms.pvt.feed.orders.status.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.oms.pvt.feed.orders.status.$get>>
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
        ? getGetApiOmsPvtFeedOrdersStatusKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.oms.pvt.feed.orders.status.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.oms.pvt.feed.orders.status.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiOmsPvtOrdersKey(
  args: InferRequestType<typeof client.api.oms.pvt.orders.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/oms/pvt/orders', keyArgs] as const
}

export function useGetApiOmsPvtOrders<TError = unknown>(
  args: InferRequestType<typeof client.api.oms.pvt.orders.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.oms.pvt.orders.$get>>>>
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
        ? getGetApiOmsPvtOrdersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.oms.pvt.orders.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.oms.pvt.orders.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiOmsPvtOrders<TError = unknown>(
  args: InferRequestType<typeof client.api.oms.pvt.orders.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.oms.pvt.orders.$get>>>>
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
        ? getGetApiOmsPvtOrdersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.oms.pvt.orders.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.oms.pvt.orders.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiOmsPvtOrdersOrderIdKey(
  args: InferRequestType<(typeof client.api.oms.pvt.orders)[':orderId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/oms/pvt/orders/:orderId', keyArgs] as const
}

export function useGetApiOmsPvtOrdersOrderId<TError = unknown>(
  args: InferRequestType<(typeof client.api.oms.pvt.orders)[':orderId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.oms.pvt.orders)[':orderId']['$get']>>
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
        ? getGetApiOmsPvtOrdersOrderIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.oms.pvt.orders)[':orderId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.oms.pvt.orders[':orderId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiOmsPvtOrdersOrderId<TError = unknown>(
  args: InferRequestType<(typeof client.api.oms.pvt.orders)[':orderId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.oms.pvt.orders)[':orderId']['$get']>>
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
        ? getGetApiOmsPvtOrdersOrderIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.oms.pvt.orders)[':orderId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.oms.pvt.orders[':orderId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiOmsPvtOrdersOrderIdCancelKey() {
  return ['api', '/api/oms/pvt/orders/:orderId/cancel', 'POST'] as const
}

export function usePostApiOmsPvtOrdersOrderIdCancel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.oms.pvt.orders)[':orderId']['cancel']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.oms.pvt.orders)[':orderId']['cancel']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiOmsPvtOrdersOrderIdCancelKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api.oms.pvt.orders)[':orderId']['cancel']['$post']>
        },
      ) => parseResponse(client.api.oms.pvt.orders[':orderId'].cancel.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiOmsPvtOrdersOrderIdChangesKey() {
  return ['api', '/api/oms/pvt/orders/:orderId/changes', 'POST'] as const
}

export function usePostApiOmsPvtOrdersOrderIdChanges<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.oms.pvt.orders)[':orderId']['changes']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.oms.pvt.orders)[':orderId']['changes']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiOmsPvtOrdersOrderIdChangesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api.oms.pvt.orders)[':orderId']['changes']['$post']>
        },
      ) => parseResponse(client.api.oms.pvt.orders[':orderId'].changes.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiOmsPvtOrdersOrderIdConversationMessageKey(
  args: InferRequestType<
    (typeof client.api.oms.pvt.orders)[':orderId']['conversation-message']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/oms/pvt/orders/:orderId/conversation-message', keyArgs] as const
}

export function useGetApiOmsPvtOrdersOrderIdConversationMessage<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.oms.pvt.orders)[':orderId']['conversation-message']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiOmsPvtOrdersOrderIdConversationMessageKey(args)
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
                (typeof client.api.oms.pvt.orders)[':orderId']['conversation-message']['$get']
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
          client.api.oms.pvt.orders[':orderId']['conversation-message'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiOmsPvtOrdersOrderIdConversationMessage<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.oms.pvt.orders)[':orderId']['conversation-message']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiOmsPvtOrdersOrderIdConversationMessageKey(args)
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
                (typeof client.api.oms.pvt.orders)[':orderId']['conversation-message']['$get']
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
          client.api.oms.pvt.orders[':orderId']['conversation-message'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApiOmsPvtOrdersOrderIdInteractionsKey() {
  return ['api', '/api/oms/pvt/orders/:orderId/interactions', 'POST'] as const
}

export function usePostApiOmsPvtOrdersOrderIdInteractions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.api.oms.pvt.orders)[':orderId']['interactions']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiOmsPvtOrdersOrderIdInteractionsKey()
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
            (typeof client.api.oms.pvt.orders)[':orderId']['interactions']['$post']
          >
        },
      ) =>
        parseResponse(client.api.oms.pvt.orders[':orderId'].interactions.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiOmsPvtOrdersOrderIdInvoiceKey() {
  return ['api', '/api/oms/pvt/orders/:orderId/invoice', 'POST'] as const
}

export function usePostApiOmsPvtOrdersOrderIdInvoice<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.oms.pvt.orders)[':orderId']['invoice']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.oms.pvt.orders)[':orderId']['invoice']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiOmsPvtOrdersOrderIdInvoiceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api.oms.pvt.orders)[':orderId']['invoice']['$post']>
        },
      ) => parseResponse(client.api.oms.pvt.orders[':orderId'].invoice.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchApiOmsPvtOrdersOrderIdInvoiceInvoiceNumberKey() {
  return ['api', '/api/oms/pvt/orders/:orderId/invoice/:invoiceNumber', 'PATCH'] as const
}

export function usePatchApiOmsPvtOrdersOrderIdInvoiceInvoiceNumber<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.oms.pvt.orders)[':orderId']['invoice'][':invoiceNumber']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiOmsPvtOrdersOrderIdInvoiceInvoiceNumberKey()
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
            (typeof client.api.oms.pvt.orders)[':orderId']['invoice'][':invoiceNumber']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.api.oms.pvt.orders[':orderId'].invoice[':invoiceNumber'].$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutApiOmsPvtOrdersOrderIdInvoiceInvoiceNumberTrackingKey() {
  return ['api', '/api/oms/pvt/orders/:orderId/invoice/:invoiceNumber/tracking', 'PUT'] as const
}

export function usePutApiOmsPvtOrdersOrderIdInvoiceInvoiceNumberTracking<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.oms.pvt.orders)[':orderId']['invoice'][':invoiceNumber']['tracking']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiOmsPvtOrdersOrderIdInvoiceInvoiceNumberTrackingKey()
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
            (typeof client.api.oms.pvt.orders)[':orderId']['invoice'][':invoiceNumber']['tracking']['$put']
          >
        },
      ) =>
        parseResponse(
          client.api.oms.pvt.orders[':orderId'].invoice[':invoiceNumber'].tracking.$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiOmsPvtOrdersOrderIdPaymentTransactionKey(
  args: InferRequestType<
    (typeof client.api.oms.pvt.orders)[':orderId']['payment-transaction']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/oms/pvt/orders/:orderId/payment-transaction', keyArgs] as const
}

export function useGetApiOmsPvtOrdersOrderIdPaymentTransaction<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.oms.pvt.orders)[':orderId']['payment-transaction']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiOmsPvtOrdersOrderIdPaymentTransactionKey(args)
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
                (typeof client.api.oms.pvt.orders)[':orderId']['payment-transaction']['$get']
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
          client.api.oms.pvt.orders[':orderId']['payment-transaction'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiOmsPvtOrdersOrderIdPaymentTransaction<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.oms.pvt.orders)[':orderId']['payment-transaction']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiOmsPvtOrdersOrderIdPaymentTransactionKey(args)
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
                (typeof client.api.oms.pvt.orders)[':orderId']['payment-transaction']['$get']
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
          client.api.oms.pvt.orders[':orderId']['payment-transaction'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApiOmsPvtOrdersOrderIdPaymentsPaymentIdPaymentNotificationKey() {
  return [
    'api',
    '/api/oms/pvt/orders/:orderId/payments/:paymentId/payment-notification',
    'POST',
  ] as const
}

export function usePostApiOmsPvtOrdersOrderIdPaymentsPaymentIdPaymentNotification<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.oms.pvt.orders)[':orderId']['payments'][':paymentId']['payment-notification']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiOmsPvtOrdersOrderIdPaymentsPaymentIdPaymentNotificationKey()
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
            (typeof client.api.oms.pvt.orders)[':orderId']['payments'][':paymentId']['payment-notification']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.oms.pvt.orders[':orderId'].payments[':paymentId'][
            'payment-notification'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiOmsPvtOrdersOrderIdStartHandlingKey() {
  return ['api', '/api/oms/pvt/orders/:orderId/start-handling', 'POST'] as const
}

export function usePostApiOmsPvtOrdersOrderIdStartHandling<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.api.oms.pvt.orders)[':orderId']['start-handling']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiOmsPvtOrdersOrderIdStartHandlingKey()
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
            (typeof client.api.oms.pvt.orders)[':orderId']['start-handling']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.oms.pvt.orders[':orderId']['start-handling'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiOmsUserOrdersKey(
  args: InferRequestType<typeof client.api.oms.user.orders.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/oms/user/orders', keyArgs] as const
}

export function useGetApiOmsUserOrders<TError = unknown>(
  args: InferRequestType<typeof client.api.oms.user.orders.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.oms.user.orders.$get>>>
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
        ? getGetApiOmsUserOrdersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.oms.user.orders.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.oms.user.orders.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiOmsUserOrders<TError = unknown>(
  args: InferRequestType<typeof client.api.oms.user.orders.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.oms.user.orders.$get>>>
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
        ? getGetApiOmsUserOrdersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.oms.user.orders.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.oms.user.orders.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiOmsUserOrdersOrderIdKey(
  args: InferRequestType<(typeof client.api.oms.user.orders)[':orderId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/oms/user/orders/:orderId', keyArgs] as const
}

export function useGetApiOmsUserOrdersOrderId<TError = unknown>(
  args: InferRequestType<(typeof client.api.oms.user.orders)[':orderId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.oms.user.orders)[':orderId']['$get']>>
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
        ? getGetApiOmsUserOrdersOrderIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.oms.user.orders)[':orderId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.oms.user.orders[':orderId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiOmsUserOrdersOrderId<TError = unknown>(
  args: InferRequestType<(typeof client.api.oms.user.orders)[':orderId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.oms.user.orders)[':orderId']['$get']>>
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
        ? getGetApiOmsUserOrdersOrderIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.oms.user.orders)[':orderId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.oms.user.orders[':orderId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiOrdersExpressionsJsonataKey() {
  return ['api', '/api/orders/expressions/jsonata', 'POST'] as const
}

export function usePostApiOrdersExpressionsJsonata<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.orders.expressions.jsonata.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.orders.expressions.jsonata.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiOrdersExpressionsJsonataKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.orders.expressions.jsonata.$post> },
      ) => parseResponse(client.api.orders.expressions.jsonata.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiOrdersFeedKey(args: InferRequestType<typeof client.api.orders.feed.$get>) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/orders/feed', keyArgs] as const
}

export function useGetApiOrdersFeed<TError = unknown>(
  args: InferRequestType<typeof client.api.orders.feed.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.orders.feed.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiOrdersFeedKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.orders.feed.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.orders.feed.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiOrdersFeed<TError = unknown>(
  args: InferRequestType<typeof client.api.orders.feed.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.orders.feed.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiOrdersFeedKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.orders.feed.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.orders.feed.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiOrdersFeedKey() {
  return ['api', '/api/orders/feed', 'POST'] as const
}

export function usePostApiOrdersFeed<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.orders.feed.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.orders.feed.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiOrdersFeedKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.orders.feed.$post> }) =>
        parseResponse(client.api.orders.feed.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiOrdersFeedConfigKey(
  args: InferRequestType<typeof client.api.orders.feed.config.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/orders/feed/config', keyArgs] as const
}

export function useGetApiOrdersFeedConfig<TError = unknown>(
  args: InferRequestType<typeof client.api.orders.feed.config.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.orders.feed.config.$get>>>
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
        ? getGetApiOrdersFeedConfigKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.orders.feed.config.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.orders.feed.config.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiOrdersFeedConfig<TError = unknown>(
  args: InferRequestType<typeof client.api.orders.feed.config.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.orders.feed.config.$get>>>
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
        ? getGetApiOrdersFeedConfigKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.orders.feed.config.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.orders.feed.config.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiOrdersFeedConfigKey() {
  return ['api', '/api/orders/feed/config', 'POST'] as const
}

export function usePostApiOrdersFeedConfig<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.orders.feed.config.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.orders.feed.config.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiOrdersFeedConfigKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.orders.feed.config.$post> },
      ) => parseResponse(client.api.orders.feed.config.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiOrdersFeedConfigKey() {
  return ['api', '/api/orders/feed/config', 'DELETE'] as const
}

export function useDeleteApiOrdersFeedConfig<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.orders.feed.config.$delete>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.orders.feed.config.$delete>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiOrdersFeedConfigKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.orders.feed.config.$delete> },
      ) => parseResponse(client.api.orders.feed.config.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiOrdersHookConfigKey(
  args: InferRequestType<typeof client.api.orders.hook.config.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/orders/hook/config', keyArgs] as const
}

export function useGetApiOrdersHookConfig<TError = unknown>(
  args: InferRequestType<typeof client.api.orders.hook.config.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.orders.hook.config.$get>>>
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
        ? getGetApiOrdersHookConfigKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.orders.hook.config.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.orders.hook.config.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiOrdersHookConfig<TError = unknown>(
  args: InferRequestType<typeof client.api.orders.hook.config.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.orders.hook.config.$get>>>
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
        ? getGetApiOrdersHookConfigKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.orders.hook.config.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.orders.hook.config.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiOrdersHookConfigKey() {
  return ['api', '/api/orders/hook/config', 'POST'] as const
}

export function usePostApiOrdersHookConfig<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.orders.hook.config.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.orders.hook.config.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiOrdersHookConfigKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.orders.hook.config.$post> },
      ) => parseResponse(client.api.orders.hook.config.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiOrdersHookConfigKey() {
  return ['api', '/api/orders/hook/config', 'DELETE'] as const
}

export function useDeleteApiOrdersHookConfig<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.orders.hook.config.$delete>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.orders.hook.config.$delete>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiOrdersHookConfigKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.orders.hook.config.$delete> },
      ) => parseResponse(client.api.orders.hook.config.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
