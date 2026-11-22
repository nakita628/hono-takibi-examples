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

export function getGetApiV1AddonsKey(args: InferRequestType<typeof client.api.v1.addons.$get>) {
  return ['api', '/api/v1/addons', args] as const
}

export function useGetApiV1Addons<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.addons.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.addons.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV1AddonsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.addons.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.addons.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1Addons<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.addons.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.addons.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV1AddonsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.addons.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.addons.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1AddonsKey() {
  return ['api', '/api/v1/addons', 'POST'] as const
}

export function usePostApiV1Addons<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.addons.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v1.addons.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1AddonsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.v1.addons.$post> }) =>
        parseResponse(client.api.v1.addons.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1AddonsAddonIdKey(
  args: InferRequestType<(typeof client.api.v1.addons)[':addonId']['$get']>,
) {
  return ['api', '/api/v1/addons/:addonId', args] as const
}

export function useGetApiV1AddonsAddonId<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.addons)[':addonId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.addons)[':addonId']['$get']>>
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
        ? getGetApiV1AddonsAddonIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.addons)[':addonId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.addons[':addonId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1AddonsAddonId<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.addons)[':addonId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.addons)[':addonId']['$get']>>
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
        ? getGetApiV1AddonsAddonIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.addons)[':addonId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.addons[':addonId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutApiV1AddonsAddonIdKey() {
  return ['api', '/api/v1/addons/:addonId', 'PUT'] as const
}

export function usePutApiV1AddonsAddonId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.addons)[':addonId']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.addons)[':addonId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiV1AddonsAddonIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v1.addons)[':addonId']['$put']> },
      ) => parseResponse(client.api.v1.addons[':addonId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiV1AddonsAddonIdKey() {
  return ['api', '/api/v1/addons/:addonId', 'DELETE'] as const
}

export function useDeleteApiV1AddonsAddonId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.addons)[':addonId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.addons)[':addonId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV1AddonsAddonIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v1.addons)[':addonId']['$delete']> },
      ) => parseResponse(client.api.v1.addons[':addonId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1AddonsAddonIdArchiveKey() {
  return ['api', '/api/v1/addons/:addonId/archive', 'POST'] as const
}

export function usePostApiV1AddonsAddonIdArchive<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.addons)[':addonId']['archive']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.addons)[':addonId']['archive']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1AddonsAddonIdArchiveKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.v1.addons)[':addonId']['archive']['$post']> },
      ) => parseResponse(client.api.v1.addons[':addonId'].archive.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1AddonsAddonIdPublishKey() {
  return ['api', '/api/v1/addons/:addonId/publish', 'POST'] as const
}

export function usePostApiV1AddonsAddonIdPublish<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.addons)[':addonId']['publish']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.addons)[':addonId']['publish']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1AddonsAddonIdPublishKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.v1.addons)[':addonId']['publish']['$post']> },
      ) => parseResponse(client.api.v1.addons[':addonId'].publish.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1AppsKey(args: InferRequestType<typeof client.api.v1.apps.$get>) {
  return ['api', '/api/v1/apps', args] as const
}

export function useGetApiV1Apps<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.apps.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.apps.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV1AppsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.apps.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.apps.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1Apps<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.apps.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.apps.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV1AppsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.apps.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.apps.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1AppsCustomInvoicingInvoiceIdDraftSynchronizedKey() {
  return ['api', '/api/v1/apps/custom-invoicing/:invoiceId/draft/synchronized', 'POST'] as const
}

export function usePostApiV1AppsCustomInvoicingInvoiceIdDraftSynchronized<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.apps)['custom-invoicing'][':invoiceId']['draft']['synchronized']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.apps)['custom-invoicing'][':invoiceId']['draft']['synchronized']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1AppsCustomInvoicingInvoiceIdDraftSynchronizedKey()
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
            (typeof client.api.v1.apps)['custom-invoicing'][':invoiceId']['draft']['synchronized']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.apps['custom-invoicing'][':invoiceId'].draft.synchronized.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1AppsCustomInvoicingInvoiceIdIssuingSynchronizedKey() {
  return ['api', '/api/v1/apps/custom-invoicing/:invoiceId/issuing/synchronized', 'POST'] as const
}

export function usePostApiV1AppsCustomInvoicingInvoiceIdIssuingSynchronized<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.apps)['custom-invoicing'][':invoiceId']['issuing']['synchronized']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.apps)['custom-invoicing'][':invoiceId']['issuing']['synchronized']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1AppsCustomInvoicingInvoiceIdIssuingSynchronizedKey()
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
            (typeof client.api.v1.apps)['custom-invoicing'][':invoiceId']['issuing']['synchronized']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.apps['custom-invoicing'][':invoiceId'].issuing.synchronized.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1AppsCustomInvoicingInvoiceIdPaymentStatusKey() {
  return ['api', '/api/v1/apps/custom-invoicing/:invoiceId/payment/status', 'POST'] as const
}

export function usePostApiV1AppsCustomInvoicingInvoiceIdPaymentStatus<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.apps)['custom-invoicing'][':invoiceId']['payment']['status']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.apps)['custom-invoicing'][':invoiceId']['payment']['status']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1AppsCustomInvoicingInvoiceIdPaymentStatusKey()
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
            (typeof client.api.v1.apps)['custom-invoicing'][':invoiceId']['payment']['status']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.apps['custom-invoicing'][':invoiceId'].payment.status.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1AppsIdKey(
  args: InferRequestType<(typeof client.api.v1.apps)[':id']['$get']>,
) {
  return ['api', '/api/v1/apps/:id', args] as const
}

export function useGetApiV1AppsId<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.apps)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.apps)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetApiV1AppsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.apps)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.apps[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1AppsId<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.apps)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.apps)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetApiV1AppsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.apps)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.apps[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutApiV1AppsIdKey() {
  return ['api', '/api/v1/apps/:id', 'PUT'] as const
}

export function usePutApiV1AppsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.apps)[':id']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.apps)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiV1AppsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v1.apps)[':id']['$put']> },
      ) => parseResponse(client.api.v1.apps[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiV1AppsIdKey() {
  return ['api', '/api/v1/apps/:id', 'DELETE'] as const
}

export function useDeleteApiV1AppsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.apps)[':id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.apps)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV1AppsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v1.apps)[':id']['$delete']> },
      ) => parseResponse(client.api.v1.apps[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutApiV1AppsIdStripeApiKeyKey() {
  return ['api', '/api/v1/apps/:id/stripe/api-key', 'PUT'] as const
}

export function usePutApiV1AppsIdStripeApiKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.apps)[':id']['stripe']['api-key']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.apps)[':id']['stripe']['api-key']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiV1AppsIdStripeApiKeyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api.v1.apps)[':id']['stripe']['api-key']['$put']>
        },
      ) => parseResponse(client.api.v1.apps[':id'].stripe['api-key'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1AppsIdStripeWebhookKey() {
  return ['api', '/api/v1/apps/:id/stripe/webhook', 'POST'] as const
}

export function usePostApiV1AppsIdStripeWebhook<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.apps)[':id']['stripe']['webhook']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.apps)[':id']['stripe']['webhook']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1AppsIdStripeWebhookKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api.v1.apps)[':id']['stripe']['webhook']['$post']>
        },
      ) => parseResponse(client.api.v1.apps[':id'].stripe.webhook.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1BillingCustomersKey(
  args: InferRequestType<typeof client.api.v1.billing.customers.$get>,
) {
  return ['api', '/api/v1/billing/customers', args] as const
}

export function useGetApiV1BillingCustomers<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.billing.customers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.billing.customers.$get>>>
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
        ? getGetApiV1BillingCustomersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.billing.customers.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.billing.customers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1BillingCustomers<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.billing.customers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.billing.customers.$get>>>
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
        ? getGetApiV1BillingCustomersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.billing.customers.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.billing.customers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1BillingCustomersCustomerIdKey(
  args: InferRequestType<(typeof client.api.v1.billing.customers)[':customerId']['$get']>,
) {
  return ['api', '/api/v1/billing/customers/:customerId', args] as const
}

export function useGetApiV1BillingCustomersCustomerId<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.billing.customers)[':customerId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.billing.customers)[':customerId']['$get']>>
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
        ? getGetApiV1BillingCustomersCustomerIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.billing.customers)[':customerId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.billing.customers[':customerId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1BillingCustomersCustomerId<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.billing.customers)[':customerId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.billing.customers)[':customerId']['$get']>>
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
        ? getGetApiV1BillingCustomersCustomerIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.billing.customers)[':customerId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.billing.customers[':customerId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutApiV1BillingCustomersCustomerIdKey() {
  return ['api', '/api/v1/billing/customers/:customerId', 'PUT'] as const
}

export function usePutApiV1BillingCustomersCustomerId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.billing.customers)[':customerId']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.billing.customers)[':customerId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiV1BillingCustomersCustomerIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api.v1.billing.customers)[':customerId']['$put']>
        },
      ) => parseResponse(client.api.v1.billing.customers[':customerId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiV1BillingCustomersCustomerIdKey() {
  return ['api', '/api/v1/billing/customers/:customerId', 'DELETE'] as const
}

export function useDeleteApiV1BillingCustomersCustomerId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.billing.customers)[':customerId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.billing.customers)[':customerId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV1BillingCustomersCustomerIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api.v1.billing.customers)[':customerId']['$delete']>
        },
      ) =>
        parseResponse(client.api.v1.billing.customers[':customerId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1BillingCustomersCustomerIdInvoicesPendingLinesKey() {
  return ['api', '/api/v1/billing/customers/:customerId/invoices/pending-lines', 'POST'] as const
}

export function usePostApiV1BillingCustomersCustomerIdInvoicesPendingLines<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.billing.customers)[':customerId']['invoices']['pending-lines']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.billing.customers)[':customerId']['invoices']['pending-lines']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1BillingCustomersCustomerIdInvoicesPendingLinesKey()
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
            (typeof client.api.v1.billing.customers)[':customerId']['invoices']['pending-lines']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.billing.customers[':customerId'].invoices['pending-lines'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1BillingCustomersCustomerIdInvoicesSimulateKey() {
  return ['api', '/api/v1/billing/customers/:customerId/invoices/simulate', 'POST'] as const
}

export function usePostApiV1BillingCustomersCustomerIdInvoicesSimulate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.billing.customers)[':customerId']['invoices']['simulate']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.billing.customers)[':customerId']['invoices']['simulate']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1BillingCustomersCustomerIdInvoicesSimulateKey()
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
            (typeof client.api.v1.billing.customers)[':customerId']['invoices']['simulate']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.billing.customers[':customerId'].invoices.simulate.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1BillingInvoicesKey(
  args: InferRequestType<typeof client.api.v1.billing.invoices.$get>,
) {
  return ['api', '/api/v1/billing/invoices', args] as const
}

export function useGetApiV1BillingInvoices<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.billing.invoices.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.billing.invoices.$get>>>
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
        ? getGetApiV1BillingInvoicesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.billing.invoices.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.billing.invoices.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1BillingInvoices<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.billing.invoices.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.billing.invoices.$get>>>
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
        ? getGetApiV1BillingInvoicesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.billing.invoices.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.billing.invoices.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1BillingInvoicesInvoiceKey() {
  return ['api', '/api/v1/billing/invoices/invoice', 'POST'] as const
}

export function usePostApiV1BillingInvoicesInvoice<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.v1.billing.invoices.invoice.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v1.billing.invoices.invoice.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1BillingInvoicesInvoiceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.v1.billing.invoices.invoice.$post> },
      ) => parseResponse(client.api.v1.billing.invoices.invoice.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1BillingInvoicesInvoiceIdKey(
  args: InferRequestType<(typeof client.api.v1.billing.invoices)[':invoiceId']['$get']>,
) {
  return ['api', '/api/v1/billing/invoices/:invoiceId', args] as const
}

export function useGetApiV1BillingInvoicesInvoiceId<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.billing.invoices)[':invoiceId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.billing.invoices)[':invoiceId']['$get']>>
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
        ? getGetApiV1BillingInvoicesInvoiceIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.billing.invoices)[':invoiceId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.billing.invoices[':invoiceId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1BillingInvoicesInvoiceId<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.billing.invoices)[':invoiceId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.billing.invoices)[':invoiceId']['$get']>>
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
        ? getGetApiV1BillingInvoicesInvoiceIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.billing.invoices)[':invoiceId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.billing.invoices[':invoiceId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutApiV1BillingInvoicesInvoiceIdKey() {
  return ['api', '/api/v1/billing/invoices/:invoiceId', 'PUT'] as const
}

export function usePutApiV1BillingInvoicesInvoiceId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.billing.invoices)[':invoiceId']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.billing.invoices)[':invoiceId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiV1BillingInvoicesInvoiceIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.v1.billing.invoices)[':invoiceId']['$put']> },
      ) => parseResponse(client.api.v1.billing.invoices[':invoiceId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiV1BillingInvoicesInvoiceIdKey() {
  return ['api', '/api/v1/billing/invoices/:invoiceId', 'DELETE'] as const
}

export function useDeleteApiV1BillingInvoicesInvoiceId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.billing.invoices)[':invoiceId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.billing.invoices)[':invoiceId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV1BillingInvoicesInvoiceIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api.v1.billing.invoices)[':invoiceId']['$delete']>
        },
      ) => parseResponse(client.api.v1.billing.invoices[':invoiceId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1BillingInvoicesInvoiceIdAdvanceKey() {
  return ['api', '/api/v1/billing/invoices/:invoiceId/advance', 'POST'] as const
}

export function usePostApiV1BillingInvoicesInvoiceIdAdvance<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.billing.invoices)[':invoiceId']['advance']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.billing.invoices)[':invoiceId']['advance']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1BillingInvoicesInvoiceIdAdvanceKey()
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
            (typeof client.api.v1.billing.invoices)[':invoiceId']['advance']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.billing.invoices[':invoiceId'].advance.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1BillingInvoicesInvoiceIdApproveKey() {
  return ['api', '/api/v1/billing/invoices/:invoiceId/approve', 'POST'] as const
}

export function usePostApiV1BillingInvoicesInvoiceIdApprove<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.billing.invoices)[':invoiceId']['approve']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.billing.invoices)[':invoiceId']['approve']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1BillingInvoicesInvoiceIdApproveKey()
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
            (typeof client.api.v1.billing.invoices)[':invoiceId']['approve']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.billing.invoices[':invoiceId'].approve.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1BillingInvoicesInvoiceIdRetryKey() {
  return ['api', '/api/v1/billing/invoices/:invoiceId/retry', 'POST'] as const
}

export function usePostApiV1BillingInvoicesInvoiceIdRetry<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.billing.invoices)[':invoiceId']['retry']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.billing.invoices)[':invoiceId']['retry']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1BillingInvoicesInvoiceIdRetryKey()
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
            (typeof client.api.v1.billing.invoices)[':invoiceId']['retry']['$post']
          >
        },
      ) =>
        parseResponse(client.api.v1.billing.invoices[':invoiceId'].retry.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1BillingInvoicesInvoiceIdSnapshotQuantitiesKey() {
  return ['api', '/api/v1/billing/invoices/:invoiceId/snapshot-quantities', 'POST'] as const
}

export function usePostApiV1BillingInvoicesInvoiceIdSnapshotQuantities<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.billing.invoices)[':invoiceId']['snapshot-quantities']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.billing.invoices)[':invoiceId']['snapshot-quantities']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1BillingInvoicesInvoiceIdSnapshotQuantitiesKey()
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
            (typeof client.api.v1.billing.invoices)[':invoiceId']['snapshot-quantities']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.billing.invoices[':invoiceId']['snapshot-quantities'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1BillingInvoicesInvoiceIdTaxesRecalculateKey() {
  return ['api', '/api/v1/billing/invoices/:invoiceId/taxes/recalculate', 'POST'] as const
}

export function usePostApiV1BillingInvoicesInvoiceIdTaxesRecalculate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.billing.invoices)[':invoiceId']['taxes']['recalculate']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.billing.invoices)[':invoiceId']['taxes']['recalculate']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1BillingInvoicesInvoiceIdTaxesRecalculateKey()
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
            (typeof client.api.v1.billing.invoices)[':invoiceId']['taxes']['recalculate']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.billing.invoices[':invoiceId'].taxes.recalculate.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1BillingInvoicesInvoiceIdVoidKey() {
  return ['api', '/api/v1/billing/invoices/:invoiceId/void', 'POST'] as const
}

export function usePostApiV1BillingInvoicesInvoiceIdVoid<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.billing.invoices)[':invoiceId']['void']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.billing.invoices)[':invoiceId']['void']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1BillingInvoicesInvoiceIdVoidKey()
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
            (typeof client.api.v1.billing.invoices)[':invoiceId']['void']['$post']
          >
        },
      ) =>
        parseResponse(client.api.v1.billing.invoices[':invoiceId'].void.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1BillingProfilesKey(
  args: InferRequestType<typeof client.api.v1.billing.profiles.$get>,
) {
  return ['api', '/api/v1/billing/profiles', args] as const
}

export function useGetApiV1BillingProfiles<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.billing.profiles.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.billing.profiles.$get>>>
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
        ? getGetApiV1BillingProfilesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.billing.profiles.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.billing.profiles.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1BillingProfiles<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.billing.profiles.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.billing.profiles.$get>>>
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
        ? getGetApiV1BillingProfilesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.billing.profiles.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.billing.profiles.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1BillingProfilesKey() {
  return ['api', '/api/v1/billing/profiles', 'POST'] as const
}

export function usePostApiV1BillingProfiles<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.billing.profiles.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v1.billing.profiles.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1BillingProfilesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.v1.billing.profiles.$post> },
      ) => parseResponse(client.api.v1.billing.profiles.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1BillingProfilesIdKey(
  args: InferRequestType<(typeof client.api.v1.billing.profiles)[':id']['$get']>,
) {
  return ['api', '/api/v1/billing/profiles/:id', args] as const
}

export function useGetApiV1BillingProfilesId<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.billing.profiles)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.billing.profiles)[':id']['$get']>>
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
        ? getGetApiV1BillingProfilesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.billing.profiles)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.billing.profiles[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1BillingProfilesId<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.billing.profiles)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.billing.profiles)[':id']['$get']>>
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
        ? getGetApiV1BillingProfilesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.billing.profiles)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.billing.profiles[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutApiV1BillingProfilesIdKey() {
  return ['api', '/api/v1/billing/profiles/:id', 'PUT'] as const
}

export function usePutApiV1BillingProfilesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.billing.profiles)[':id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.billing.profiles)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiV1BillingProfilesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v1.billing.profiles)[':id']['$put']> },
      ) => parseResponse(client.api.v1.billing.profiles[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiV1BillingProfilesIdKey() {
  return ['api', '/api/v1/billing/profiles/:id', 'DELETE'] as const
}

export function useDeleteApiV1BillingProfilesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.billing.profiles)[':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.billing.profiles)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV1BillingProfilesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.v1.billing.profiles)[':id']['$delete']> },
      ) => parseResponse(client.api.v1.billing.profiles[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1CustomersKey(
  args: InferRequestType<typeof client.api.v1.customers.$get>,
) {
  return ['api', '/api/v1/customers', args] as const
}

export function useGetApiV1Customers<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.customers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.customers.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV1CustomersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.customers.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.customers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1Customers<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.customers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.customers.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV1CustomersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.customers.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.customers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1CustomersKey() {
  return ['api', '/api/v1/customers', 'POST'] as const
}

export function usePostApiV1Customers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.customers.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v1.customers.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1CustomersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.v1.customers.$post> }) =>
        parseResponse(client.api.v1.customers.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1CustomersCustomerIdOrKeyKey(
  args: InferRequestType<(typeof client.api.v1.customers)[':customerIdOrKey']['$get']>,
) {
  return ['api', '/api/v1/customers/:customerIdOrKey', args] as const
}

export function useGetApiV1CustomersCustomerIdOrKey<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.customers)[':customerIdOrKey']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.customers)[':customerIdOrKey']['$get']>>
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
        ? getGetApiV1CustomersCustomerIdOrKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.customers)[':customerIdOrKey']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.customers[':customerIdOrKey'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1CustomersCustomerIdOrKey<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.customers)[':customerIdOrKey']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.customers)[':customerIdOrKey']['$get']>>
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
        ? getGetApiV1CustomersCustomerIdOrKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.customers)[':customerIdOrKey']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.customers[':customerIdOrKey'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutApiV1CustomersCustomerIdOrKeyKey() {
  return ['api', '/api/v1/customers/:customerIdOrKey', 'PUT'] as const
}

export function usePutApiV1CustomersCustomerIdOrKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.customers)[':customerIdOrKey']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.customers)[':customerIdOrKey']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiV1CustomersCustomerIdOrKeyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.v1.customers)[':customerIdOrKey']['$put']> },
      ) => parseResponse(client.api.v1.customers[':customerIdOrKey'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiV1CustomersCustomerIdOrKeyKey() {
  return ['api', '/api/v1/customers/:customerIdOrKey', 'DELETE'] as const
}

export function useDeleteApiV1CustomersCustomerIdOrKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.customers)[':customerIdOrKey']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.customers)[':customerIdOrKey']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV1CustomersCustomerIdOrKeyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api.v1.customers)[':customerIdOrKey']['$delete']>
        },
      ) => parseResponse(client.api.v1.customers[':customerIdOrKey'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1CustomersCustomerIdOrKeyAccessKey(
  args: InferRequestType<(typeof client.api.v1.customers)[':customerIdOrKey']['access']['$get']>,
) {
  return ['api', '/api/v1/customers/:customerIdOrKey/access', args] as const
}

export function useGetApiV1CustomersCustomerIdOrKeyAccess<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.customers)[':customerIdOrKey']['access']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.customers)[':customerIdOrKey']['access']['$get']>
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
        ? getGetApiV1CustomersCustomerIdOrKeyAccessKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.customers)[':customerIdOrKey']['access']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.customers[':customerIdOrKey'].access.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1CustomersCustomerIdOrKeyAccess<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.customers)[':customerIdOrKey']['access']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.customers)[':customerIdOrKey']['access']['$get']>
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
        ? getGetApiV1CustomersCustomerIdOrKeyAccessKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.customers)[':customerIdOrKey']['access']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.customers[':customerIdOrKey'].access.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1CustomersCustomerIdOrKeyAppsKey(
  args: InferRequestType<(typeof client.api.v1.customers)[':customerIdOrKey']['apps']['$get']>,
) {
  return ['api', '/api/v1/customers/:customerIdOrKey/apps', args] as const
}

export function useGetApiV1CustomersCustomerIdOrKeyApps<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.customers)[':customerIdOrKey']['apps']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.customers)[':customerIdOrKey']['apps']['$get']>
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
        ? getGetApiV1CustomersCustomerIdOrKeyAppsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.customers)[':customerIdOrKey']['apps']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.customers[':customerIdOrKey'].apps.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1CustomersCustomerIdOrKeyApps<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.customers)[':customerIdOrKey']['apps']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.customers)[':customerIdOrKey']['apps']['$get']>
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
        ? getGetApiV1CustomersCustomerIdOrKeyAppsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.customers)[':customerIdOrKey']['apps']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.customers[':customerIdOrKey'].apps.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutApiV1CustomersCustomerIdOrKeyAppsKey() {
  return ['api', '/api/v1/customers/:customerIdOrKey/apps', 'PUT'] as const
}

export function usePutApiV1CustomersCustomerIdOrKeyApps<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.customers)[':customerIdOrKey']['apps']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.customers)[':customerIdOrKey']['apps']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiV1CustomersCustomerIdOrKeyAppsKey()
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
            (typeof client.api.v1.customers)[':customerIdOrKey']['apps']['$put']
          >
        },
      ) => parseResponse(client.api.v1.customers[':customerIdOrKey'].apps.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiV1CustomersCustomerIdOrKeyAppsAppIdKey() {
  return ['api', '/api/v1/customers/:customerIdOrKey/apps/:appId', 'DELETE'] as const
}

export function useDeleteApiV1CustomersCustomerIdOrKeyAppsAppId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.customers)[':customerIdOrKey']['apps'][':appId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.customers)[':customerIdOrKey']['apps'][':appId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV1CustomersCustomerIdOrKeyAppsAppIdKey()
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
            (typeof client.api.v1.customers)[':customerIdOrKey']['apps'][':appId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.customers[':customerIdOrKey'].apps[':appId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1CustomersCustomerIdOrKeyEntitlementsFeatureKeyValueKey(
  args: InferRequestType<
    (typeof client.api.v1.customers)[':customerIdOrKey']['entitlements'][':featureKey']['value']['$get']
  >,
) {
  return ['api', '/api/v1/customers/:customerIdOrKey/entitlements/:featureKey/value', args] as const
}

export function useGetApiV1CustomersCustomerIdOrKeyEntitlementsFeatureKeyValue<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.customers)[':customerIdOrKey']['entitlements'][':featureKey']['value']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.customers)[':customerIdOrKey']['entitlements'][':featureKey']['value']['$get']
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
        ? getGetApiV1CustomersCustomerIdOrKeyEntitlementsFeatureKeyValueKey(args)
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
                (typeof client.api.v1.customers)[':customerIdOrKey']['entitlements'][':featureKey']['value']['$get']
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
          client.api.v1.customers[':customerIdOrKey'].entitlements[':featureKey'].value.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1CustomersCustomerIdOrKeyEntitlementsFeatureKeyValue<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v1.customers)[':customerIdOrKey']['entitlements'][':featureKey']['value']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.customers)[':customerIdOrKey']['entitlements'][':featureKey']['value']['$get']
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
        ? getGetApiV1CustomersCustomerIdOrKeyEntitlementsFeatureKeyValueKey(args)
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
                (typeof client.api.v1.customers)[':customerIdOrKey']['entitlements'][':featureKey']['value']['$get']
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
          client.api.v1.customers[':customerIdOrKey'].entitlements[':featureKey'].value.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1CustomersCustomerIdOrKeyStripeKey(
  args: InferRequestType<(typeof client.api.v1.customers)[':customerIdOrKey']['stripe']['$get']>,
) {
  return ['api', '/api/v1/customers/:customerIdOrKey/stripe', args] as const
}

export function useGetApiV1CustomersCustomerIdOrKeyStripe<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.customers)[':customerIdOrKey']['stripe']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.customers)[':customerIdOrKey']['stripe']['$get']>
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
        ? getGetApiV1CustomersCustomerIdOrKeyStripeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.customers)[':customerIdOrKey']['stripe']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.customers[':customerIdOrKey'].stripe.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1CustomersCustomerIdOrKeyStripe<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.customers)[':customerIdOrKey']['stripe']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.customers)[':customerIdOrKey']['stripe']['$get']>
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
        ? getGetApiV1CustomersCustomerIdOrKeyStripeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.customers)[':customerIdOrKey']['stripe']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.customers[':customerIdOrKey'].stripe.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutApiV1CustomersCustomerIdOrKeyStripeKey() {
  return ['api', '/api/v1/customers/:customerIdOrKey/stripe', 'PUT'] as const
}

export function usePutApiV1CustomersCustomerIdOrKeyStripe<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.customers)[':customerIdOrKey']['stripe']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.customers)[':customerIdOrKey']['stripe']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiV1CustomersCustomerIdOrKeyStripeKey()
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
            (typeof client.api.v1.customers)[':customerIdOrKey']['stripe']['$put']
          >
        },
      ) =>
        parseResponse(client.api.v1.customers[':customerIdOrKey'].stripe.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1CustomersCustomerIdOrKeyStripePortalKey() {
  return ['api', '/api/v1/customers/:customerIdOrKey/stripe/portal', 'POST'] as const
}

export function usePostApiV1CustomersCustomerIdOrKeyStripePortal<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.customers)[':customerIdOrKey']['stripe']['portal']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.customers)[':customerIdOrKey']['stripe']['portal']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1CustomersCustomerIdOrKeyStripePortalKey()
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
            (typeof client.api.v1.customers)[':customerIdOrKey']['stripe']['portal']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.customers[':customerIdOrKey'].stripe.portal.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1CustomersCustomerIdOrKeySubscriptionsKey(
  args: InferRequestType<
    (typeof client.api.v1.customers)[':customerIdOrKey']['subscriptions']['$get']
  >,
) {
  return ['api', '/api/v1/customers/:customerIdOrKey/subscriptions', args] as const
}

export function useGetApiV1CustomersCustomerIdOrKeySubscriptions<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.customers)[':customerIdOrKey']['subscriptions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.customers)[':customerIdOrKey']['subscriptions']['$get']
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
        ? getGetApiV1CustomersCustomerIdOrKeySubscriptionsKey(args)
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
                (typeof client.api.v1.customers)[':customerIdOrKey']['subscriptions']['$get']
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
          client.api.v1.customers[':customerIdOrKey'].subscriptions.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1CustomersCustomerIdOrKeySubscriptions<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.customers)[':customerIdOrKey']['subscriptions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.customers)[':customerIdOrKey']['subscriptions']['$get']
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
        ? getGetApiV1CustomersCustomerIdOrKeySubscriptionsKey(args)
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
                (typeof client.api.v1.customers)[':customerIdOrKey']['subscriptions']['$get']
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
          client.api.v1.customers[':customerIdOrKey'].subscriptions.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1DebugMetricsKey() {
  return ['api', '/api/v1/debug/metrics'] as const
}

export function useGetApiV1DebugMetrics<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.debug.metrics.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV1DebugMetricsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.debug.metrics.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.debug.metrics.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1DebugMetrics<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.debug.metrics.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV1DebugMetricsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.debug.metrics.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.debug.metrics.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1EntitlementsKey(
  args: InferRequestType<typeof client.api.v1.entitlements.$get>,
) {
  return ['api', '/api/v1/entitlements', args] as const
}

export function useGetApiV1Entitlements<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.entitlements.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.entitlements.$get>>>
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
        ? getGetApiV1EntitlementsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.entitlements.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.entitlements.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1Entitlements<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.entitlements.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.entitlements.$get>>>
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
        ? getGetApiV1EntitlementsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.entitlements.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.entitlements.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1EntitlementsEntitlementIdKey(
  args: InferRequestType<(typeof client.api.v1.entitlements)[':entitlementId']['$get']>,
) {
  return ['api', '/api/v1/entitlements/:entitlementId', args] as const
}

export function useGetApiV1EntitlementsEntitlementId<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.entitlements)[':entitlementId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.entitlements)[':entitlementId']['$get']>>
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
        ? getGetApiV1EntitlementsEntitlementIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.entitlements)[':entitlementId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.entitlements[':entitlementId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1EntitlementsEntitlementId<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.entitlements)[':entitlementId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.entitlements)[':entitlementId']['$get']>>
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
        ? getGetApiV1EntitlementsEntitlementIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.entitlements)[':entitlementId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.entitlements[':entitlementId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1EventsKey(args: InferRequestType<typeof client.api.v1.events.$get>) {
  return ['api', '/api/v1/events', args] as const
}

export function useGetApiV1Events<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.events.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.events.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV1EventsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.events.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.events.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1Events<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.events.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.events.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV1EventsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.events.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.events.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1EventsKey() {
  return ['api', '/api/v1/events', 'POST'] as const
}

export function usePostApiV1Events<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.events.$post>>>>
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.api.v1.events.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1EventsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.v1.events.$post> }) =>
        parseResponse(client.api.v1.events.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1FeaturesKey(args: InferRequestType<typeof client.api.v1.features.$get>) {
  return ['api', '/api/v1/features', args] as const
}

export function useGetApiV1Features<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.features.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.features.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV1FeaturesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.features.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.features.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1Features<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.features.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.features.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV1FeaturesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.features.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.features.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1FeaturesKey() {
  return ['api', '/api/v1/features', 'POST'] as const
}

export function usePostApiV1Features<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.features.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v1.features.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1FeaturesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.v1.features.$post> }) =>
        parseResponse(client.api.v1.features.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1FeaturesFeatureIdKey(
  args: InferRequestType<(typeof client.api.v1.features)[':featureId']['$get']>,
) {
  return ['api', '/api/v1/features/:featureId', args] as const
}

export function useGetApiV1FeaturesFeatureId<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.features)[':featureId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.features)[':featureId']['$get']>>
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
        ? getGetApiV1FeaturesFeatureIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.features)[':featureId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.features[':featureId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1FeaturesFeatureId<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.features)[':featureId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.features)[':featureId']['$get']>>
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
        ? getGetApiV1FeaturesFeatureIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.features)[':featureId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.features[':featureId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteApiV1FeaturesFeatureIdKey() {
  return ['api', '/api/v1/features/:featureId', 'DELETE'] as const
}

export function useDeleteApiV1FeaturesFeatureId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.features)[':featureId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.features)[':featureId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV1FeaturesFeatureIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.v1.features)[':featureId']['$delete']> },
      ) => parseResponse(client.api.v1.features[':featureId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1GrantsKey(args: InferRequestType<typeof client.api.v1.grants.$get>) {
  return ['api', '/api/v1/grants', args] as const
}

export function useGetApiV1Grants<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.grants.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.grants.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV1GrantsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.grants.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.grants.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1Grants<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.grants.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.grants.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV1GrantsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.grants.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.grants.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteApiV1GrantsGrantIdKey() {
  return ['api', '/api/v1/grants/:grantId', 'DELETE'] as const
}

export function useDeleteApiV1GrantsGrantId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.grants)[':grantId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.grants)[':grantId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV1GrantsGrantIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v1.grants)[':grantId']['$delete']> },
      ) => parseResponse(client.api.v1.grants[':grantId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1InfoCurrenciesKey() {
  return ['api', '/api/v1/info/currencies'] as const
}

export function useGetApiV1InfoCurrencies<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.info.currencies.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1InfoCurrenciesKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.info.currencies.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.info.currencies.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1InfoCurrencies<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.info.currencies.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1InfoCurrenciesKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.info.currencies.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.info.currencies.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1InfoProgressIdKey(
  args: InferRequestType<(typeof client.api.v1.info.progress)[':id']['$get']>,
) {
  return ['api', '/api/v1/info/progress/:id', args] as const
}

export function useGetApiV1InfoProgressId<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.info.progress)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.info.progress)[':id']['$get']>>
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
        ? getGetApiV1InfoProgressIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.info.progress)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.info.progress[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1InfoProgressId<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.info.progress)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.info.progress)[':id']['$get']>>
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
        ? getGetApiV1InfoProgressIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.info.progress)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.info.progress[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1MarketplaceListingsKey(
  args: InferRequestType<typeof client.api.v1.marketplace.listings.$get>,
) {
  return ['api', '/api/v1/marketplace/listings', args] as const
}

export function useGetApiV1MarketplaceListings<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.marketplace.listings.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.marketplace.listings.$get>>>
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
        ? getGetApiV1MarketplaceListingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.marketplace.listings.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.marketplace.listings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1MarketplaceListings<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.marketplace.listings.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.marketplace.listings.$get>>>
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
        ? getGetApiV1MarketplaceListingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.marketplace.listings.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.marketplace.listings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1MarketplaceListingsTypeKey(
  args: InferRequestType<(typeof client.api.v1.marketplace.listings)[':type']['$get']>,
) {
  return ['api', '/api/v1/marketplace/listings/:type', args] as const
}

export function useGetApiV1MarketplaceListingsType<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.marketplace.listings)[':type']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.marketplace.listings)[':type']['$get']>>
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
        ? getGetApiV1MarketplaceListingsTypeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.marketplace.listings)[':type']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.marketplace.listings[':type'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1MarketplaceListingsType<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.marketplace.listings)[':type']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.marketplace.listings)[':type']['$get']>>
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
        ? getGetApiV1MarketplaceListingsTypeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.marketplace.listings)[':type']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.marketplace.listings[':type'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1MarketplaceListingsTypeInstallKey() {
  return ['api', '/api/v1/marketplace/listings/:type/install', 'POST'] as const
}

export function usePostApiV1MarketplaceListingsTypeInstall<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.marketplace.listings)[':type']['install']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.marketplace.listings)[':type']['install']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1MarketplaceListingsTypeInstallKey()
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
            (typeof client.api.v1.marketplace.listings)[':type']['install']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.marketplace.listings[':type'].install.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1MarketplaceListingsTypeInstallApikeyKey() {
  return ['api', '/api/v1/marketplace/listings/:type/install/apikey', 'POST'] as const
}

export function usePostApiV1MarketplaceListingsTypeInstallApikey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.marketplace.listings)[':type']['install']['apikey']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.marketplace.listings)[':type']['install']['apikey']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1MarketplaceListingsTypeInstallApikeyKey()
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
            (typeof client.api.v1.marketplace.listings)[':type']['install']['apikey']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.marketplace.listings[':type'].install.apikey.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1MarketplaceListingsTypeInstallOauth2Key(
  args: InferRequestType<
    (typeof client.api.v1.marketplace.listings)[':type']['install']['oauth2']['$get']
  >,
) {
  return ['api', '/api/v1/marketplace/listings/:type/install/oauth2', args] as const
}

export function useGetApiV1MarketplaceListingsTypeInstallOauth2<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.marketplace.listings)[':type']['install']['oauth2']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.marketplace.listings)[':type']['install']['oauth2']['$get']
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
        ? getGetApiV1MarketplaceListingsTypeInstallOauth2Key(args)
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
                (typeof client.api.v1.marketplace.listings)[':type']['install']['oauth2']['$get']
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
          client.api.v1.marketplace.listings[':type'].install.oauth2.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1MarketplaceListingsTypeInstallOauth2<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.marketplace.listings)[':type']['install']['oauth2']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.marketplace.listings)[':type']['install']['oauth2']['$get']
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
        ? getGetApiV1MarketplaceListingsTypeInstallOauth2Key(args)
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
                (typeof client.api.v1.marketplace.listings)[':type']['install']['oauth2']['$get']
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
          client.api.v1.marketplace.listings[':type'].install.oauth2.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1MarketplaceListingsTypeInstallOauth2AuthorizeKey(
  args: InferRequestType<
    (typeof client.api.v1.marketplace.listings)[':type']['install']['oauth2']['authorize']['$get']
  >,
) {
  return ['api', '/api/v1/marketplace/listings/:type/install/oauth2/authorize', args] as const
}

export function useGetApiV1MarketplaceListingsTypeInstallOauth2Authorize<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.marketplace.listings)[':type']['install']['oauth2']['authorize']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.marketplace.listings)[':type']['install']['oauth2']['authorize']['$get']
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
        ? getGetApiV1MarketplaceListingsTypeInstallOauth2AuthorizeKey(args)
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
                (typeof client.api.v1.marketplace.listings)[':type']['install']['oauth2']['authorize']['$get']
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
          client.api.v1.marketplace.listings[':type'].install.oauth2.authorize.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1MarketplaceListingsTypeInstallOauth2Authorize<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.marketplace.listings)[':type']['install']['oauth2']['authorize']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.marketplace.listings)[':type']['install']['oauth2']['authorize']['$get']
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
        ? getGetApiV1MarketplaceListingsTypeInstallOauth2AuthorizeKey(args)
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
                (typeof client.api.v1.marketplace.listings)[':type']['install']['oauth2']['authorize']['$get']
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
          client.api.v1.marketplace.listings[':type'].install.oauth2.authorize.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1MetersKey(args: InferRequestType<typeof client.api.v1.meters.$get>) {
  return ['api', '/api/v1/meters', args] as const
}

export function useGetApiV1Meters<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.meters.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.meters.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV1MetersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.meters.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.meters.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1Meters<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.meters.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.meters.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV1MetersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.meters.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.meters.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1MetersKey() {
  return ['api', '/api/v1/meters', 'POST'] as const
}

export function usePostApiV1Meters<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.meters.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v1.meters.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1MetersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.v1.meters.$post> }) =>
        parseResponse(client.api.v1.meters.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1MetersMeterIdOrSlugKey(
  args: InferRequestType<(typeof client.api.v1.meters)[':meterIdOrSlug']['$get']>,
) {
  return ['api', '/api/v1/meters/:meterIdOrSlug', args] as const
}

export function useGetApiV1MetersMeterIdOrSlug<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.meters)[':meterIdOrSlug']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.meters)[':meterIdOrSlug']['$get']>>
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
        ? getGetApiV1MetersMeterIdOrSlugKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.meters)[':meterIdOrSlug']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.meters[':meterIdOrSlug'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1MetersMeterIdOrSlug<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.meters)[':meterIdOrSlug']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.meters)[':meterIdOrSlug']['$get']>>
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
        ? getGetApiV1MetersMeterIdOrSlugKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.meters)[':meterIdOrSlug']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.meters[':meterIdOrSlug'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutApiV1MetersMeterIdOrSlugKey() {
  return ['api', '/api/v1/meters/:meterIdOrSlug', 'PUT'] as const
}

export function usePutApiV1MetersMeterIdOrSlug<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.meters)[':meterIdOrSlug']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.meters)[':meterIdOrSlug']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiV1MetersMeterIdOrSlugKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v1.meters)[':meterIdOrSlug']['$put']> },
      ) => parseResponse(client.api.v1.meters[':meterIdOrSlug'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiV1MetersMeterIdOrSlugKey() {
  return ['api', '/api/v1/meters/:meterIdOrSlug', 'DELETE'] as const
}

export function useDeleteApiV1MetersMeterIdOrSlug<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.meters)[':meterIdOrSlug']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.meters)[':meterIdOrSlug']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV1MetersMeterIdOrSlugKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.v1.meters)[':meterIdOrSlug']['$delete']> },
      ) => parseResponse(client.api.v1.meters[':meterIdOrSlug'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1MetersMeterIdOrSlugGroupByGroupByKeyValuesKey(
  args: InferRequestType<
    (typeof client.api.v1.meters)[':meterIdOrSlug']['group-by'][':groupByKey']['values']['$get']
  >,
) {
  return ['api', '/api/v1/meters/:meterIdOrSlug/group-by/:groupByKey/values', args] as const
}

export function useGetApiV1MetersMeterIdOrSlugGroupByGroupByKeyValues<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.meters)[':meterIdOrSlug']['group-by'][':groupByKey']['values']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.meters)[':meterIdOrSlug']['group-by'][':groupByKey']['values']['$get']
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
        ? getGetApiV1MetersMeterIdOrSlugGroupByGroupByKeyValuesKey(args)
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
                (typeof client.api.v1.meters)[':meterIdOrSlug']['group-by'][':groupByKey']['values']['$get']
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
          client.api.v1.meters[':meterIdOrSlug']['group-by'][':groupByKey'].values.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1MetersMeterIdOrSlugGroupByGroupByKeyValues<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.meters)[':meterIdOrSlug']['group-by'][':groupByKey']['values']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.meters)[':meterIdOrSlug']['group-by'][':groupByKey']['values']['$get']
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
        ? getGetApiV1MetersMeterIdOrSlugGroupByGroupByKeyValuesKey(args)
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
                (typeof client.api.v1.meters)[':meterIdOrSlug']['group-by'][':groupByKey']['values']['$get']
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
          client.api.v1.meters[':meterIdOrSlug']['group-by'][':groupByKey'].values.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1MetersMeterIdOrSlugQueryKey(
  args: InferRequestType<(typeof client.api.v1.meters)[':meterIdOrSlug']['query']['$get']>,
) {
  return ['api', '/api/v1/meters/:meterIdOrSlug/query', args] as const
}

export function useGetApiV1MetersMeterIdOrSlugQuery<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.meters)[':meterIdOrSlug']['query']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.meters)[':meterIdOrSlug']['query']['$get']>>
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
        ? getGetApiV1MetersMeterIdOrSlugQueryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.meters)[':meterIdOrSlug']['query']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.meters[':meterIdOrSlug'].query.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1MetersMeterIdOrSlugQuery<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.meters)[':meterIdOrSlug']['query']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.meters)[':meterIdOrSlug']['query']['$get']>>
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
        ? getGetApiV1MetersMeterIdOrSlugQueryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.meters)[':meterIdOrSlug']['query']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.meters[':meterIdOrSlug'].query.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1MetersMeterIdOrSlugQueryKey() {
  return ['api', '/api/v1/meters/:meterIdOrSlug/query', 'POST'] as const
}

export function usePostApiV1MetersMeterIdOrSlugQuery<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.meters)[':meterIdOrSlug']['query']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.meters)[':meterIdOrSlug']['query']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1MetersMeterIdOrSlugQueryKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api.v1.meters)[':meterIdOrSlug']['query']['$post']>
        },
      ) => parseResponse(client.api.v1.meters[':meterIdOrSlug'].query.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1MetersMeterIdOrSlugSubjectsKey(
  args: InferRequestType<(typeof client.api.v1.meters)[':meterIdOrSlug']['subjects']['$get']>,
) {
  return ['api', '/api/v1/meters/:meterIdOrSlug/subjects', args] as const
}

export function useGetApiV1MetersMeterIdOrSlugSubjects<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.meters)[':meterIdOrSlug']['subjects']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.meters)[':meterIdOrSlug']['subjects']['$get']>>
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
        ? getGetApiV1MetersMeterIdOrSlugSubjectsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.meters)[':meterIdOrSlug']['subjects']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.meters[':meterIdOrSlug'].subjects.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1MetersMeterIdOrSlugSubjects<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.meters)[':meterIdOrSlug']['subjects']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.meters)[':meterIdOrSlug']['subjects']['$get']>>
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
        ? getGetApiV1MetersMeterIdOrSlugSubjectsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.meters)[':meterIdOrSlug']['subjects']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.meters[':meterIdOrSlug'].subjects.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1NotificationChannelsKey(
  args: InferRequestType<typeof client.api.v1.notification.channels.$get>,
) {
  return ['api', '/api/v1/notification/channels', args] as const
}

export function useGetApiV1NotificationChannels<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.notification.channels.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.notification.channels.$get>>>
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
        ? getGetApiV1NotificationChannelsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.notification.channels.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.notification.channels.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1NotificationChannels<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.notification.channels.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.notification.channels.$get>>>
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
        ? getGetApiV1NotificationChannelsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.notification.channels.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.notification.channels.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1NotificationChannelsKey() {
  return ['api', '/api/v1/notification/channels', 'POST'] as const
}

export function usePostApiV1NotificationChannels<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.notification.channels.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v1.notification.channels.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1NotificationChannelsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.v1.notification.channels.$post> },
      ) => parseResponse(client.api.v1.notification.channels.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1NotificationChannelsChannelIdKey(
  args: InferRequestType<(typeof client.api.v1.notification.channels)[':channelId']['$get']>,
) {
  return ['api', '/api/v1/notification/channels/:channelId', args] as const
}

export function useGetApiV1NotificationChannelsChannelId<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.notification.channels)[':channelId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.notification.channels)[':channelId']['$get']>>
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
        ? getGetApiV1NotificationChannelsChannelIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.notification.channels)[':channelId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.notification.channels[':channelId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1NotificationChannelsChannelId<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.notification.channels)[':channelId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.notification.channels)[':channelId']['$get']>>
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
        ? getGetApiV1NotificationChannelsChannelIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.notification.channels)[':channelId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.notification.channels[':channelId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutApiV1NotificationChannelsChannelIdKey() {
  return ['api', '/api/v1/notification/channels/:channelId', 'PUT'] as const
}

export function usePutApiV1NotificationChannelsChannelId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.notification.channels)[':channelId']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.notification.channels)[':channelId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiV1NotificationChannelsChannelIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api.v1.notification.channels)[':channelId']['$put']>
        },
      ) =>
        parseResponse(client.api.v1.notification.channels[':channelId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiV1NotificationChannelsChannelIdKey() {
  return ['api', '/api/v1/notification/channels/:channelId', 'DELETE'] as const
}

export function useDeleteApiV1NotificationChannelsChannelId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.notification.channels)[':channelId']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.notification.channels)[':channelId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV1NotificationChannelsChannelIdKey()
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
            (typeof client.api.v1.notification.channels)[':channelId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.notification.channels[':channelId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1NotificationEventsKey(
  args: InferRequestType<typeof client.api.v1.notification.events.$get>,
) {
  return ['api', '/api/v1/notification/events', args] as const
}

export function useGetApiV1NotificationEvents<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.notification.events.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.notification.events.$get>>>
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
        ? getGetApiV1NotificationEventsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.notification.events.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.notification.events.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1NotificationEvents<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.notification.events.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.notification.events.$get>>>
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
        ? getGetApiV1NotificationEventsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.notification.events.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.notification.events.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1NotificationEventsEventIdKey(
  args: InferRequestType<(typeof client.api.v1.notification.events)[':eventId']['$get']>,
) {
  return ['api', '/api/v1/notification/events/:eventId', args] as const
}

export function useGetApiV1NotificationEventsEventId<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.notification.events)[':eventId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.notification.events)[':eventId']['$get']>>
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
        ? getGetApiV1NotificationEventsEventIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.notification.events)[':eventId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.notification.events[':eventId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1NotificationEventsEventId<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.notification.events)[':eventId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.notification.events)[':eventId']['$get']>>
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
        ? getGetApiV1NotificationEventsEventIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.notification.events)[':eventId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.notification.events[':eventId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1NotificationEventsEventIdResendKey() {
  return ['api', '/api/v1/notification/events/:eventId/resend', 'POST'] as const
}

export function usePostApiV1NotificationEventsEventIdResend<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.notification.events)[':eventId']['resend']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.notification.events)[':eventId']['resend']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1NotificationEventsEventIdResendKey()
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
            (typeof client.api.v1.notification.events)[':eventId']['resend']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.notification.events[':eventId'].resend.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1NotificationRulesKey(
  args: InferRequestType<typeof client.api.v1.notification.rules.$get>,
) {
  return ['api', '/api/v1/notification/rules', args] as const
}

export function useGetApiV1NotificationRules<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.notification.rules.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.notification.rules.$get>>>
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
        ? getGetApiV1NotificationRulesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.notification.rules.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.notification.rules.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1NotificationRules<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.notification.rules.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.notification.rules.$get>>>
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
        ? getGetApiV1NotificationRulesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.notification.rules.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.notification.rules.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1NotificationRulesKey() {
  return ['api', '/api/v1/notification/rules', 'POST'] as const
}

export function usePostApiV1NotificationRules<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.notification.rules.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v1.notification.rules.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1NotificationRulesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.v1.notification.rules.$post> },
      ) => parseResponse(client.api.v1.notification.rules.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1NotificationRulesRuleIdKey(
  args: InferRequestType<(typeof client.api.v1.notification.rules)[':ruleId']['$get']>,
) {
  return ['api', '/api/v1/notification/rules/:ruleId', args] as const
}

export function useGetApiV1NotificationRulesRuleId<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.notification.rules)[':ruleId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.notification.rules)[':ruleId']['$get']>>
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
        ? getGetApiV1NotificationRulesRuleIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.notification.rules)[':ruleId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.notification.rules[':ruleId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1NotificationRulesRuleId<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.notification.rules)[':ruleId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.notification.rules)[':ruleId']['$get']>>
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
        ? getGetApiV1NotificationRulesRuleIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.notification.rules)[':ruleId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.notification.rules[':ruleId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutApiV1NotificationRulesRuleIdKey() {
  return ['api', '/api/v1/notification/rules/:ruleId', 'PUT'] as const
}

export function usePutApiV1NotificationRulesRuleId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.notification.rules)[':ruleId']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.notification.rules)[':ruleId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiV1NotificationRulesRuleIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.v1.notification.rules)[':ruleId']['$put']> },
      ) => parseResponse(client.api.v1.notification.rules[':ruleId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiV1NotificationRulesRuleIdKey() {
  return ['api', '/api/v1/notification/rules/:ruleId', 'DELETE'] as const
}

export function useDeleteApiV1NotificationRulesRuleId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.notification.rules)[':ruleId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.notification.rules)[':ruleId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV1NotificationRulesRuleIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api.v1.notification.rules)[':ruleId']['$delete']>
        },
      ) => parseResponse(client.api.v1.notification.rules[':ruleId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1NotificationRulesRuleIdTestKey() {
  return ['api', '/api/v1/notification/rules/:ruleId/test', 'POST'] as const
}

export function usePostApiV1NotificationRulesRuleIdTest<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.notification.rules)[':ruleId']['test']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.notification.rules)[':ruleId']['test']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1NotificationRulesRuleIdTestKey()
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
            (typeof client.api.v1.notification.rules)[':ruleId']['test']['$post']
          >
        },
      ) =>
        parseResponse(client.api.v1.notification.rules[':ruleId'].test.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1PlansKey(args: InferRequestType<typeof client.api.v1.plans.$get>) {
  return ['api', '/api/v1/plans', args] as const
}

export function useGetApiV1Plans<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.plans.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.plans.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV1PlansKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.plans.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.plans.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1Plans<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.plans.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.plans.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV1PlansKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.plans.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.plans.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1PlansKey() {
  return ['api', '/api/v1/plans', 'POST'] as const
}

export function usePostApiV1Plans<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.plans.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v1.plans.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1PlansKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.v1.plans.$post> }) =>
        parseResponse(client.api.v1.plans.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1PlansPlanIdOrKeyNextKey() {
  return ['api', '/api/v1/plans/:planIdOrKey/next', 'POST'] as const
}

export function usePostApiV1PlansPlanIdOrKeyNext<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.plans)[':planIdOrKey']['next']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.plans)[':planIdOrKey']['next']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1PlansPlanIdOrKeyNextKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.v1.plans)[':planIdOrKey']['next']['$post']> },
      ) => parseResponse(client.api.v1.plans[':planIdOrKey'].next.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1PlansPlanIdKey(
  args: InferRequestType<(typeof client.api.v1.plans)[':planId']['$get']>,
) {
  return ['api', '/api/v1/plans/:planId', args] as const
}

export function useGetApiV1PlansPlanId<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.plans)[':planId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.plans)[':planId']['$get']>>>
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
        ? getGetApiV1PlansPlanIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.plans)[':planId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.plans[':planId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1PlansPlanId<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.plans)[':planId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.plans)[':planId']['$get']>>>
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
        ? getGetApiV1PlansPlanIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.plans)[':planId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.plans[':planId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutApiV1PlansPlanIdKey() {
  return ['api', '/api/v1/plans/:planId', 'PUT'] as const
}

export function usePutApiV1PlansPlanId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.plans)[':planId']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.plans)[':planId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiV1PlansPlanIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v1.plans)[':planId']['$put']> },
      ) => parseResponse(client.api.v1.plans[':planId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiV1PlansPlanIdKey() {
  return ['api', '/api/v1/plans/:planId', 'DELETE'] as const
}

export function useDeleteApiV1PlansPlanId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.plans)[':planId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.plans)[':planId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV1PlansPlanIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.v1.plans)[':planId']['$delete']> },
      ) => parseResponse(client.api.v1.plans[':planId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1PlansPlanIdAddonsKey(
  args: InferRequestType<(typeof client.api.v1.plans)[':planId']['addons']['$get']>,
) {
  return ['api', '/api/v1/plans/:planId/addons', args] as const
}

export function useGetApiV1PlansPlanIdAddons<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.plans)[':planId']['addons']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.plans)[':planId']['addons']['$get']>>
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
        ? getGetApiV1PlansPlanIdAddonsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.plans)[':planId']['addons']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.plans[':planId'].addons.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1PlansPlanIdAddons<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.plans)[':planId']['addons']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.plans)[':planId']['addons']['$get']>>
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
        ? getGetApiV1PlansPlanIdAddonsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.plans)[':planId']['addons']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.plans[':planId'].addons.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1PlansPlanIdAddonsKey() {
  return ['api', '/api/v1/plans/:planId/addons', 'POST'] as const
}

export function usePostApiV1PlansPlanIdAddons<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.plans)[':planId']['addons']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.plans)[':planId']['addons']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1PlansPlanIdAddonsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.v1.plans)[':planId']['addons']['$post']> },
      ) => parseResponse(client.api.v1.plans[':planId'].addons.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1PlansPlanIdAddonsPlanAddonIdKey(
  args: InferRequestType<(typeof client.api.v1.plans)[':planId']['addons'][':planAddonId']['$get']>,
) {
  return ['api', '/api/v1/plans/:planId/addons/:planAddonId', args] as const
}

export function useGetApiV1PlansPlanIdAddonsPlanAddonId<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.plans)[':planId']['addons'][':planAddonId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.plans)[':planId']['addons'][':planAddonId']['$get']>
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
        ? getGetApiV1PlansPlanIdAddonsPlanAddonIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.plans)[':planId']['addons'][':planAddonId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v1.plans[':planId'].addons[':planAddonId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1PlansPlanIdAddonsPlanAddonId<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.plans)[':planId']['addons'][':planAddonId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.plans)[':planId']['addons'][':planAddonId']['$get']>
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
        ? getGetApiV1PlansPlanIdAddonsPlanAddonIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.plans)[':planId']['addons'][':planAddonId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v1.plans[':planId'].addons[':planAddonId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutApiV1PlansPlanIdAddonsPlanAddonIdKey() {
  return ['api', '/api/v1/plans/:planId/addons/:planAddonId', 'PUT'] as const
}

export function usePutApiV1PlansPlanIdAddonsPlanAddonId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.plans)[':planId']['addons'][':planAddonId']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.plans)[':planId']['addons'][':planAddonId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiV1PlansPlanIdAddonsPlanAddonIdKey()
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
            (typeof client.api.v1.plans)[':planId']['addons'][':planAddonId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.plans[':planId'].addons[':planAddonId'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiV1PlansPlanIdAddonsPlanAddonIdKey() {
  return ['api', '/api/v1/plans/:planId/addons/:planAddonId', 'DELETE'] as const
}

export function useDeleteApiV1PlansPlanIdAddonsPlanAddonId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.plans)[':planId']['addons'][':planAddonId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.plans)[':planId']['addons'][':planAddonId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV1PlansPlanIdAddonsPlanAddonIdKey()
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
            (typeof client.api.v1.plans)[':planId']['addons'][':planAddonId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.plans[':planId'].addons[':planAddonId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1PlansPlanIdArchiveKey() {
  return ['api', '/api/v1/plans/:planId/archive', 'POST'] as const
}

export function usePostApiV1PlansPlanIdArchive<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.plans)[':planId']['archive']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.plans)[':planId']['archive']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1PlansPlanIdArchiveKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.v1.plans)[':planId']['archive']['$post']> },
      ) => parseResponse(client.api.v1.plans[':planId'].archive.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1PlansPlanIdPublishKey() {
  return ['api', '/api/v1/plans/:planId/publish', 'POST'] as const
}

export function usePostApiV1PlansPlanIdPublish<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.plans)[':planId']['publish']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.plans)[':planId']['publish']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1PlansPlanIdPublishKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.v1.plans)[':planId']['publish']['$post']> },
      ) => parseResponse(client.api.v1.plans[':planId'].publish.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1PortalMetersMeterSlugQueryKey(
  args: InferRequestType<(typeof client.api.v1.portal.meters)[':meterSlug']['query']['$get']>,
) {
  return ['api', '/api/v1/portal/meters/:meterSlug/query', args] as const
}

export function useGetApiV1PortalMetersMeterSlugQuery<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.portal.meters)[':meterSlug']['query']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.portal.meters)[':meterSlug']['query']['$get']>>
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
        ? getGetApiV1PortalMetersMeterSlugQueryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.portal.meters)[':meterSlug']['query']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.portal.meters[':meterSlug'].query.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1PortalMetersMeterSlugQuery<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.portal.meters)[':meterSlug']['query']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.portal.meters)[':meterSlug']['query']['$get']>>
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
        ? getGetApiV1PortalMetersMeterSlugQueryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.portal.meters)[':meterSlug']['query']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.portal.meters[':meterSlug'].query.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1PortalTokensKey(
  args: InferRequestType<typeof client.api.v1.portal.tokens.$get>,
) {
  return ['api', '/api/v1/portal/tokens', args] as const
}

export function useGetApiV1PortalTokens<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.portal.tokens.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.portal.tokens.$get>>>
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
        ? getGetApiV1PortalTokensKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.portal.tokens.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.portal.tokens.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1PortalTokens<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.portal.tokens.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.portal.tokens.$get>>>
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
        ? getGetApiV1PortalTokensKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.portal.tokens.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.portal.tokens.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1PortalTokensKey() {
  return ['api', '/api/v1/portal/tokens', 'POST'] as const
}

export function usePostApiV1PortalTokens<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.portal.tokens.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v1.portal.tokens.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1PortalTokensKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.v1.portal.tokens.$post> },
      ) => parseResponse(client.api.v1.portal.tokens.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1PortalTokensInvalidateKey() {
  return ['api', '/api/v1/portal/tokens/invalidate', 'POST'] as const
}

export function usePostApiV1PortalTokensInvalidate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.v1.portal.tokens.invalidate.$post>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.api.v1.portal.tokens.invalidate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1PortalTokensInvalidateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.v1.portal.tokens.invalidate.$post> },
      ) => parseResponse(client.api.v1.portal.tokens.invalidate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1StripeCheckoutSessionsKey() {
  return ['api', '/api/v1/stripe/checkout/sessions', 'POST'] as const
}

export function usePostApiV1StripeCheckoutSessions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.v1.stripe.checkout.sessions.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v1.stripe.checkout.sessions.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1StripeCheckoutSessionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.v1.stripe.checkout.sessions.$post> },
      ) => parseResponse(client.api.v1.stripe.checkout.sessions.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1SubjectsKey() {
  return ['api', '/api/v1/subjects'] as const
}

export function useGetApiV1Subjects<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.subjects.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV1SubjectsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.subjects.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.subjects.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1Subjects<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.subjects.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV1SubjectsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.subjects.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.subjects.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1SubjectsKey() {
  return ['api', '/api/v1/subjects', 'POST'] as const
}

export function usePostApiV1Subjects<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.subjects.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v1.subjects.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1SubjectsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.v1.subjects.$post> }) =>
        parseResponse(client.api.v1.subjects.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1SubjectsSubjectIdOrKeyKey(
  args: InferRequestType<(typeof client.api.v1.subjects)[':subjectIdOrKey']['$get']>,
) {
  return ['api', '/api/v1/subjects/:subjectIdOrKey', args] as const
}

export function useGetApiV1SubjectsSubjectIdOrKey<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.subjects)[':subjectIdOrKey']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.subjects)[':subjectIdOrKey']['$get']>>
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
        ? getGetApiV1SubjectsSubjectIdOrKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.subjects)[':subjectIdOrKey']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.subjects[':subjectIdOrKey'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1SubjectsSubjectIdOrKey<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.subjects)[':subjectIdOrKey']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.subjects)[':subjectIdOrKey']['$get']>>
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
        ? getGetApiV1SubjectsSubjectIdOrKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.subjects)[':subjectIdOrKey']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.subjects[':subjectIdOrKey'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteApiV1SubjectsSubjectIdOrKeyKey() {
  return ['api', '/api/v1/subjects/:subjectIdOrKey', 'DELETE'] as const
}

export function useDeleteApiV1SubjectsSubjectIdOrKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.subjects)[':subjectIdOrKey']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.subjects)[':subjectIdOrKey']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV1SubjectsSubjectIdOrKeyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.v1.subjects)[':subjectIdOrKey']['$delete']> },
      ) => parseResponse(client.api.v1.subjects[':subjectIdOrKey'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1SubjectsSubjectIdOrKeyEntitlementsKey(
  args: InferRequestType<
    (typeof client.api.v1.subjects)[':subjectIdOrKey']['entitlements']['$get']
  >,
) {
  return ['api', '/api/v1/subjects/:subjectIdOrKey/entitlements', args] as const
}

export function useGetApiV1SubjectsSubjectIdOrKeyEntitlements<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.subjects)[':subjectIdOrKey']['entitlements']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.subjects)[':subjectIdOrKey']['entitlements']['$get']>
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
        ? getGetApiV1SubjectsSubjectIdOrKeyEntitlementsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.subjects)[':subjectIdOrKey']['entitlements']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v1.subjects[':subjectIdOrKey'].entitlements.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1SubjectsSubjectIdOrKeyEntitlements<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.subjects)[':subjectIdOrKey']['entitlements']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.subjects)[':subjectIdOrKey']['entitlements']['$get']>
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
        ? getGetApiV1SubjectsSubjectIdOrKeyEntitlementsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.subjects)[':subjectIdOrKey']['entitlements']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v1.subjects[':subjectIdOrKey'].entitlements.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1SubjectsSubjectIdOrKeyEntitlementsKey() {
  return ['api', '/api/v1/subjects/:subjectIdOrKey/entitlements', 'POST'] as const
}

export function usePostApiV1SubjectsSubjectIdOrKeyEntitlements<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.subjects)[':subjectIdOrKey']['entitlements']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.subjects)[':subjectIdOrKey']['entitlements']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1SubjectsSubjectIdOrKeyEntitlementsKey()
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
            (typeof client.api.v1.subjects)[':subjectIdOrKey']['entitlements']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.subjects[':subjectIdOrKey'].entitlements.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1SubjectsSubjectIdOrKeyEntitlementsEntitlementIdOrFeatureKeyGrantsKey(
  args: InferRequestType<
    (typeof client.api.v1.subjects)[':subjectIdOrKey']['entitlements'][':entitlementIdOrFeatureKey']['grants']['$get']
  >,
) {
  return [
    'api',
    '/api/v1/subjects/:subjectIdOrKey/entitlements/:entitlementIdOrFeatureKey/grants',
    args,
  ] as const
}

export function useGetApiV1SubjectsSubjectIdOrKeyEntitlementsEntitlementIdOrFeatureKeyGrants<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v1.subjects)[':subjectIdOrKey']['entitlements'][':entitlementIdOrFeatureKey']['grants']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.subjects)[':subjectIdOrKey']['entitlements'][':entitlementIdOrFeatureKey']['grants']['$get']
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
        ? getGetApiV1SubjectsSubjectIdOrKeyEntitlementsEntitlementIdOrFeatureKeyGrantsKey(args)
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
                (typeof client.api.v1.subjects)[':subjectIdOrKey']['entitlements'][':entitlementIdOrFeatureKey']['grants']['$get']
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
          client.api.v1.subjects[':subjectIdOrKey'].entitlements[
            ':entitlementIdOrFeatureKey'
          ].grants.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1SubjectsSubjectIdOrKeyEntitlementsEntitlementIdOrFeatureKeyGrants<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v1.subjects)[':subjectIdOrKey']['entitlements'][':entitlementIdOrFeatureKey']['grants']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.subjects)[':subjectIdOrKey']['entitlements'][':entitlementIdOrFeatureKey']['grants']['$get']
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
        ? getGetApiV1SubjectsSubjectIdOrKeyEntitlementsEntitlementIdOrFeatureKeyGrantsKey(args)
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
                (typeof client.api.v1.subjects)[':subjectIdOrKey']['entitlements'][':entitlementIdOrFeatureKey']['grants']['$get']
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
          client.api.v1.subjects[':subjectIdOrKey'].entitlements[
            ':entitlementIdOrFeatureKey'
          ].grants.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1SubjectsSubjectIdOrKeyEntitlementsEntitlementIdOrFeatureKeyGrantsKey() {
  return [
    'api',
    '/api/v1/subjects/:subjectIdOrKey/entitlements/:entitlementIdOrFeatureKey/grants',
    'POST',
  ] as const
}

export function usePostApiV1SubjectsSubjectIdOrKeyEntitlementsEntitlementIdOrFeatureKeyGrants<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.subjects)[':subjectIdOrKey']['entitlements'][':entitlementIdOrFeatureKey']['grants']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.subjects)[':subjectIdOrKey']['entitlements'][':entitlementIdOrFeatureKey']['grants']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostApiV1SubjectsSubjectIdOrKeyEntitlementsEntitlementIdOrFeatureKeyGrantsKey()
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
            (typeof client.api.v1.subjects)[':subjectIdOrKey']['entitlements'][':entitlementIdOrFeatureKey']['grants']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.subjects[':subjectIdOrKey'].entitlements[
            ':entitlementIdOrFeatureKey'
          ].grants.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutApiV1SubjectsSubjectIdOrKeyEntitlementsEntitlementIdOrFeatureKeyOverrideKey() {
  return [
    'api',
    '/api/v1/subjects/:subjectIdOrKey/entitlements/:entitlementIdOrFeatureKey/override',
    'PUT',
  ] as const
}

export function usePutApiV1SubjectsSubjectIdOrKeyEntitlementsEntitlementIdOrFeatureKeyOverride<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.subjects)[':subjectIdOrKey']['entitlements'][':entitlementIdOrFeatureKey']['override']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.subjects)[':subjectIdOrKey']['entitlements'][':entitlementIdOrFeatureKey']['override']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPutApiV1SubjectsSubjectIdOrKeyEntitlementsEntitlementIdOrFeatureKeyOverrideKey()
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
            (typeof client.api.v1.subjects)[':subjectIdOrKey']['entitlements'][':entitlementIdOrFeatureKey']['override']['$put']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.subjects[':subjectIdOrKey'].entitlements[
            ':entitlementIdOrFeatureKey'
          ].override.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1SubjectsSubjectIdOrKeyEntitlementsEntitlementIdOrFeatureKeyValueKey(
  args: InferRequestType<
    (typeof client.api.v1.subjects)[':subjectIdOrKey']['entitlements'][':entitlementIdOrFeatureKey']['value']['$get']
  >,
) {
  return [
    'api',
    '/api/v1/subjects/:subjectIdOrKey/entitlements/:entitlementIdOrFeatureKey/value',
    args,
  ] as const
}

export function useGetApiV1SubjectsSubjectIdOrKeyEntitlementsEntitlementIdOrFeatureKeyValue<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v1.subjects)[':subjectIdOrKey']['entitlements'][':entitlementIdOrFeatureKey']['value']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.subjects)[':subjectIdOrKey']['entitlements'][':entitlementIdOrFeatureKey']['value']['$get']
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
        ? getGetApiV1SubjectsSubjectIdOrKeyEntitlementsEntitlementIdOrFeatureKeyValueKey(args)
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
                (typeof client.api.v1.subjects)[':subjectIdOrKey']['entitlements'][':entitlementIdOrFeatureKey']['value']['$get']
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
          client.api.v1.subjects[':subjectIdOrKey'].entitlements[
            ':entitlementIdOrFeatureKey'
          ].value.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1SubjectsSubjectIdOrKeyEntitlementsEntitlementIdOrFeatureKeyValue<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v1.subjects)[':subjectIdOrKey']['entitlements'][':entitlementIdOrFeatureKey']['value']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.subjects)[':subjectIdOrKey']['entitlements'][':entitlementIdOrFeatureKey']['value']['$get']
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
        ? getGetApiV1SubjectsSubjectIdOrKeyEntitlementsEntitlementIdOrFeatureKeyValueKey(args)
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
                (typeof client.api.v1.subjects)[':subjectIdOrKey']['entitlements'][':entitlementIdOrFeatureKey']['value']['$get']
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
          client.api.v1.subjects[':subjectIdOrKey'].entitlements[
            ':entitlementIdOrFeatureKey'
          ].value.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1SubjectsSubjectIdOrKeyEntitlementsEntitlementIdKey(
  args: InferRequestType<
    (typeof client.api.v1.subjects)[':subjectIdOrKey']['entitlements'][':entitlementId']['$get']
  >,
) {
  return ['api', '/api/v1/subjects/:subjectIdOrKey/entitlements/:entitlementId', args] as const
}

export function useGetApiV1SubjectsSubjectIdOrKeyEntitlementsEntitlementId<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.subjects)[':subjectIdOrKey']['entitlements'][':entitlementId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.subjects)[':subjectIdOrKey']['entitlements'][':entitlementId']['$get']
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
        ? getGetApiV1SubjectsSubjectIdOrKeyEntitlementsEntitlementIdKey(args)
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
                (typeof client.api.v1.subjects)[':subjectIdOrKey']['entitlements'][':entitlementId']['$get']
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
          client.api.v1.subjects[':subjectIdOrKey'].entitlements[':entitlementId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1SubjectsSubjectIdOrKeyEntitlementsEntitlementId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v1.subjects)[':subjectIdOrKey']['entitlements'][':entitlementId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.subjects)[':subjectIdOrKey']['entitlements'][':entitlementId']['$get']
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
        ? getGetApiV1SubjectsSubjectIdOrKeyEntitlementsEntitlementIdKey(args)
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
                (typeof client.api.v1.subjects)[':subjectIdOrKey']['entitlements'][':entitlementId']['$get']
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
          client.api.v1.subjects[':subjectIdOrKey'].entitlements[':entitlementId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteApiV1SubjectsSubjectIdOrKeyEntitlementsEntitlementIdKey() {
  return ['api', '/api/v1/subjects/:subjectIdOrKey/entitlements/:entitlementId', 'DELETE'] as const
}

export function useDeleteApiV1SubjectsSubjectIdOrKeyEntitlementsEntitlementId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.subjects)[':subjectIdOrKey']['entitlements'][':entitlementId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.subjects)[':subjectIdOrKey']['entitlements'][':entitlementId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV1SubjectsSubjectIdOrKeyEntitlementsEntitlementIdKey()
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
            (typeof client.api.v1.subjects)[':subjectIdOrKey']['entitlements'][':entitlementId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.subjects[':subjectIdOrKey'].entitlements[':entitlementId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1SubjectsSubjectIdOrKeyEntitlementsEntitlementIdHistoryKey(
  args: InferRequestType<
    (typeof client.api.v1.subjects)[':subjectIdOrKey']['entitlements'][':entitlementId']['history']['$get']
  >,
) {
  return [
    'api',
    '/api/v1/subjects/:subjectIdOrKey/entitlements/:entitlementId/history',
    args,
  ] as const
}

export function useGetApiV1SubjectsSubjectIdOrKeyEntitlementsEntitlementIdHistory<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.subjects)[':subjectIdOrKey']['entitlements'][':entitlementId']['history']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.subjects)[':subjectIdOrKey']['entitlements'][':entitlementId']['history']['$get']
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
        ? getGetApiV1SubjectsSubjectIdOrKeyEntitlementsEntitlementIdHistoryKey(args)
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
                (typeof client.api.v1.subjects)[':subjectIdOrKey']['entitlements'][':entitlementId']['history']['$get']
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
          client.api.v1.subjects[':subjectIdOrKey'].entitlements[':entitlementId'].history.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1SubjectsSubjectIdOrKeyEntitlementsEntitlementIdHistory<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v1.subjects)[':subjectIdOrKey']['entitlements'][':entitlementId']['history']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.subjects)[':subjectIdOrKey']['entitlements'][':entitlementId']['history']['$get']
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
        ? getGetApiV1SubjectsSubjectIdOrKeyEntitlementsEntitlementIdHistoryKey(args)
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
                (typeof client.api.v1.subjects)[':subjectIdOrKey']['entitlements'][':entitlementId']['history']['$get']
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
          client.api.v1.subjects[':subjectIdOrKey'].entitlements[':entitlementId'].history.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1SubjectsSubjectIdOrKeyEntitlementsEntitlementIdResetKey() {
  return [
    'api',
    '/api/v1/subjects/:subjectIdOrKey/entitlements/:entitlementId/reset',
    'POST',
  ] as const
}

export function usePostApiV1SubjectsSubjectIdOrKeyEntitlementsEntitlementIdReset<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.subjects)[':subjectIdOrKey']['entitlements'][':entitlementId']['reset']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.subjects)[':subjectIdOrKey']['entitlements'][':entitlementId']['reset']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1SubjectsSubjectIdOrKeyEntitlementsEntitlementIdResetKey()
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
            (typeof client.api.v1.subjects)[':subjectIdOrKey']['entitlements'][':entitlementId']['reset']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.subjects[':subjectIdOrKey'].entitlements[':entitlementId'].reset.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1SubscriptionsKey() {
  return ['api', '/api/v1/subscriptions', 'POST'] as const
}

export function usePostApiV1Subscriptions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.subscriptions.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v1.subscriptions.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1SubscriptionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.v1.subscriptions.$post> },
      ) => parseResponse(client.api.v1.subscriptions.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1SubscriptionsSubscriptionIdKey(
  args: InferRequestType<(typeof client.api.v1.subscriptions)[':subscriptionId']['$get']>,
) {
  return ['api', '/api/v1/subscriptions/:subscriptionId', args] as const
}

export function useGetApiV1SubscriptionsSubscriptionId<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.subscriptions)[':subscriptionId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.subscriptions)[':subscriptionId']['$get']>>
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
        ? getGetApiV1SubscriptionsSubscriptionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.subscriptions)[':subscriptionId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.subscriptions[':subscriptionId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1SubscriptionsSubscriptionId<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.subscriptions)[':subscriptionId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.subscriptions)[':subscriptionId']['$get']>>
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
        ? getGetApiV1SubscriptionsSubscriptionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.subscriptions)[':subscriptionId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.subscriptions[':subscriptionId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteApiV1SubscriptionsSubscriptionIdKey() {
  return ['api', '/api/v1/subscriptions/:subscriptionId', 'DELETE'] as const
}

export function useDeleteApiV1SubscriptionsSubscriptionId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.subscriptions)[':subscriptionId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.subscriptions)[':subscriptionId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV1SubscriptionsSubscriptionIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api.v1.subscriptions)[':subscriptionId']['$delete']>
        },
      ) =>
        parseResponse(client.api.v1.subscriptions[':subscriptionId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchApiV1SubscriptionsSubscriptionIdKey() {
  return ['api', '/api/v1/subscriptions/:subscriptionId', 'PATCH'] as const
}

export function usePatchApiV1SubscriptionsSubscriptionId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.subscriptions)[':subscriptionId']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.subscriptions)[':subscriptionId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiV1SubscriptionsSubscriptionIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api.v1.subscriptions)[':subscriptionId']['$patch']>
        },
      ) => parseResponse(client.api.v1.subscriptions[':subscriptionId'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1SubscriptionsSubscriptionIdAddonsKey(
  args: InferRequestType<(typeof client.api.v1.subscriptions)[':subscriptionId']['addons']['$get']>,
) {
  return ['api', '/api/v1/subscriptions/:subscriptionId/addons', args] as const
}

export function useGetApiV1SubscriptionsSubscriptionIdAddons<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.subscriptions)[':subscriptionId']['addons']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.subscriptions)[':subscriptionId']['addons']['$get']>
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
        ? getGetApiV1SubscriptionsSubscriptionIdAddonsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.subscriptions)[':subscriptionId']['addons']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v1.subscriptions[':subscriptionId'].addons.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1SubscriptionsSubscriptionIdAddons<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.subscriptions)[':subscriptionId']['addons']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.subscriptions)[':subscriptionId']['addons']['$get']>
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
        ? getGetApiV1SubscriptionsSubscriptionIdAddonsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.subscriptions)[':subscriptionId']['addons']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v1.subscriptions[':subscriptionId'].addons.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1SubscriptionsSubscriptionIdAddonsKey() {
  return ['api', '/api/v1/subscriptions/:subscriptionId/addons', 'POST'] as const
}

export function usePostApiV1SubscriptionsSubscriptionIdAddons<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.subscriptions)[':subscriptionId']['addons']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.subscriptions)[':subscriptionId']['addons']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1SubscriptionsSubscriptionIdAddonsKey()
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
            (typeof client.api.v1.subscriptions)[':subscriptionId']['addons']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.subscriptions[':subscriptionId'].addons.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1SubscriptionsSubscriptionIdAddonsSubscriptionAddonIdKey(
  args: InferRequestType<
    (typeof client.api.v1.subscriptions)[':subscriptionId']['addons'][':subscriptionAddonId']['$get']
  >,
) {
  return ['api', '/api/v1/subscriptions/:subscriptionId/addons/:subscriptionAddonId', args] as const
}

export function useGetApiV1SubscriptionsSubscriptionIdAddonsSubscriptionAddonId<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.subscriptions)[':subscriptionId']['addons'][':subscriptionAddonId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.subscriptions)[':subscriptionId']['addons'][':subscriptionAddonId']['$get']
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
        ? getGetApiV1SubscriptionsSubscriptionIdAddonsSubscriptionAddonIdKey(args)
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
                (typeof client.api.v1.subscriptions)[':subscriptionId']['addons'][':subscriptionAddonId']['$get']
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
          client.api.v1.subscriptions[':subscriptionId'].addons[':subscriptionAddonId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1SubscriptionsSubscriptionIdAddonsSubscriptionAddonId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v1.subscriptions)[':subscriptionId']['addons'][':subscriptionAddonId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.subscriptions)[':subscriptionId']['addons'][':subscriptionAddonId']['$get']
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
        ? getGetApiV1SubscriptionsSubscriptionIdAddonsSubscriptionAddonIdKey(args)
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
                (typeof client.api.v1.subscriptions)[':subscriptionId']['addons'][':subscriptionAddonId']['$get']
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
          client.api.v1.subscriptions[':subscriptionId'].addons[':subscriptionAddonId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPatchApiV1SubscriptionsSubscriptionIdAddonsSubscriptionAddonIdKey() {
  return [
    'api',
    '/api/v1/subscriptions/:subscriptionId/addons/:subscriptionAddonId',
    'PATCH',
  ] as const
}

export function usePatchApiV1SubscriptionsSubscriptionIdAddonsSubscriptionAddonId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.subscriptions)[':subscriptionId']['addons'][':subscriptionAddonId']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.subscriptions)[':subscriptionId']['addons'][':subscriptionAddonId']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiV1SubscriptionsSubscriptionIdAddonsSubscriptionAddonIdKey()
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
            (typeof client.api.v1.subscriptions)[':subscriptionId']['addons'][':subscriptionAddonId']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.subscriptions[':subscriptionId'].addons[':subscriptionAddonId'].$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1SubscriptionsSubscriptionIdCancelKey() {
  return ['api', '/api/v1/subscriptions/:subscriptionId/cancel', 'POST'] as const
}

export function usePostApiV1SubscriptionsSubscriptionIdCancel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.subscriptions)[':subscriptionId']['cancel']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.subscriptions)[':subscriptionId']['cancel']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1SubscriptionsSubscriptionIdCancelKey()
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
            (typeof client.api.v1.subscriptions)[':subscriptionId']['cancel']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.subscriptions[':subscriptionId'].cancel.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1SubscriptionsSubscriptionIdChangeKey() {
  return ['api', '/api/v1/subscriptions/:subscriptionId/change', 'POST'] as const
}

export function usePostApiV1SubscriptionsSubscriptionIdChange<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.subscriptions)[':subscriptionId']['change']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.subscriptions)[':subscriptionId']['change']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1SubscriptionsSubscriptionIdChangeKey()
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
            (typeof client.api.v1.subscriptions)[':subscriptionId']['change']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.subscriptions[':subscriptionId'].change.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1SubscriptionsSubscriptionIdMigrateKey() {
  return ['api', '/api/v1/subscriptions/:subscriptionId/migrate', 'POST'] as const
}

export function usePostApiV1SubscriptionsSubscriptionIdMigrate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.subscriptions)[':subscriptionId']['migrate']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.subscriptions)[':subscriptionId']['migrate']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1SubscriptionsSubscriptionIdMigrateKey()
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
            (typeof client.api.v1.subscriptions)[':subscriptionId']['migrate']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.subscriptions[':subscriptionId'].migrate.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1SubscriptionsSubscriptionIdRestoreKey() {
  return ['api', '/api/v1/subscriptions/:subscriptionId/restore', 'POST'] as const
}

export function usePostApiV1SubscriptionsSubscriptionIdRestore<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.subscriptions)[':subscriptionId']['restore']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.subscriptions)[':subscriptionId']['restore']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1SubscriptionsSubscriptionIdRestoreKey()
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
            (typeof client.api.v1.subscriptions)[':subscriptionId']['restore']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.subscriptions[':subscriptionId'].restore.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1SubscriptionsSubscriptionIdUnscheduleCancelationKey() {
  return ['api', '/api/v1/subscriptions/:subscriptionId/unschedule-cancelation', 'POST'] as const
}

export function usePostApiV1SubscriptionsSubscriptionIdUnscheduleCancelation<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.subscriptions)[':subscriptionId']['unschedule-cancelation']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.subscriptions)[':subscriptionId']['unschedule-cancelation']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1SubscriptionsSubscriptionIdUnscheduleCancelationKey()
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
            (typeof client.api.v1.subscriptions)[':subscriptionId']['unschedule-cancelation']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.subscriptions[':subscriptionId']['unschedule-cancelation'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV2CustomersCustomerIdOrKeyEntitlementsKey(
  args: InferRequestType<
    (typeof client.api.v2.customers)[':customerIdOrKey']['entitlements']['$get']
  >,
) {
  return ['api', '/api/v2/customers/:customerIdOrKey/entitlements', args] as const
}

export function useGetApiV2CustomersCustomerIdOrKeyEntitlements<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v2.customers)[':customerIdOrKey']['entitlements']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.customers)[':customerIdOrKey']['entitlements']['$get']
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
        ? getGetApiV2CustomersCustomerIdOrKeyEntitlementsKey(args)
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
                (typeof client.api.v2.customers)[':customerIdOrKey']['entitlements']['$get']
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
          client.api.v2.customers[':customerIdOrKey'].entitlements.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2CustomersCustomerIdOrKeyEntitlements<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v2.customers)[':customerIdOrKey']['entitlements']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.customers)[':customerIdOrKey']['entitlements']['$get']
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
        ? getGetApiV2CustomersCustomerIdOrKeyEntitlementsKey(args)
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
                (typeof client.api.v2.customers)[':customerIdOrKey']['entitlements']['$get']
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
          client.api.v2.customers[':customerIdOrKey'].entitlements.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApiV2CustomersCustomerIdOrKeyEntitlementsKey() {
  return ['api', '/api/v2/customers/:customerIdOrKey/entitlements', 'POST'] as const
}

export function usePostApiV2CustomersCustomerIdOrKeyEntitlements<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v2.customers)[':customerIdOrKey']['entitlements']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v2.customers)[':customerIdOrKey']['entitlements']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV2CustomersCustomerIdOrKeyEntitlementsKey()
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
            (typeof client.api.v2.customers)[':customerIdOrKey']['entitlements']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v2.customers[':customerIdOrKey'].entitlements.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV2CustomersCustomerIdOrKeyEntitlementsEntitlementIdOrFeatureKeyKey(
  args: InferRequestType<
    (typeof client.api.v2.customers)[':customerIdOrKey']['entitlements'][':entitlementIdOrFeatureKey']['$get']
  >,
) {
  return [
    'api',
    '/api/v2/customers/:customerIdOrKey/entitlements/:entitlementIdOrFeatureKey',
    args,
  ] as const
}

export function useGetApiV2CustomersCustomerIdOrKeyEntitlementsEntitlementIdOrFeatureKey<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v2.customers)[':customerIdOrKey']['entitlements'][':entitlementIdOrFeatureKey']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.customers)[':customerIdOrKey']['entitlements'][':entitlementIdOrFeatureKey']['$get']
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
        ? getGetApiV2CustomersCustomerIdOrKeyEntitlementsEntitlementIdOrFeatureKeyKey(args)
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
                (typeof client.api.v2.customers)[':customerIdOrKey']['entitlements'][':entitlementIdOrFeatureKey']['$get']
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
          client.api.v2.customers[':customerIdOrKey'].entitlements[
            ':entitlementIdOrFeatureKey'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2CustomersCustomerIdOrKeyEntitlementsEntitlementIdOrFeatureKey<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v2.customers)[':customerIdOrKey']['entitlements'][':entitlementIdOrFeatureKey']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.customers)[':customerIdOrKey']['entitlements'][':entitlementIdOrFeatureKey']['$get']
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
        ? getGetApiV2CustomersCustomerIdOrKeyEntitlementsEntitlementIdOrFeatureKeyKey(args)
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
                (typeof client.api.v2.customers)[':customerIdOrKey']['entitlements'][':entitlementIdOrFeatureKey']['$get']
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
          client.api.v2.customers[':customerIdOrKey'].entitlements[
            ':entitlementIdOrFeatureKey'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteApiV2CustomersCustomerIdOrKeyEntitlementsEntitlementIdOrFeatureKeyKey() {
  return [
    'api',
    '/api/v2/customers/:customerIdOrKey/entitlements/:entitlementIdOrFeatureKey',
    'DELETE',
  ] as const
}

export function useDeleteApiV2CustomersCustomerIdOrKeyEntitlementsEntitlementIdOrFeatureKey<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.customers)[':customerIdOrKey']['entitlements'][':entitlementIdOrFeatureKey']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v2.customers)[':customerIdOrKey']['entitlements'][':entitlementIdOrFeatureKey']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteApiV2CustomersCustomerIdOrKeyEntitlementsEntitlementIdOrFeatureKeyKey()
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
            (typeof client.api.v2.customers)[':customerIdOrKey']['entitlements'][':entitlementIdOrFeatureKey']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.v2.customers[':customerIdOrKey'].entitlements[
            ':entitlementIdOrFeatureKey'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV2CustomersCustomerIdOrKeyEntitlementsEntitlementIdOrFeatureKeyGrantsKey(
  args: InferRequestType<
    (typeof client.api.v2.customers)[':customerIdOrKey']['entitlements'][':entitlementIdOrFeatureKey']['grants']['$get']
  >,
) {
  return [
    'api',
    '/api/v2/customers/:customerIdOrKey/entitlements/:entitlementIdOrFeatureKey/grants',
    args,
  ] as const
}

export function useGetApiV2CustomersCustomerIdOrKeyEntitlementsEntitlementIdOrFeatureKeyGrants<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v2.customers)[':customerIdOrKey']['entitlements'][':entitlementIdOrFeatureKey']['grants']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.customers)[':customerIdOrKey']['entitlements'][':entitlementIdOrFeatureKey']['grants']['$get']
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
        ? getGetApiV2CustomersCustomerIdOrKeyEntitlementsEntitlementIdOrFeatureKeyGrantsKey(args)
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
                (typeof client.api.v2.customers)[':customerIdOrKey']['entitlements'][':entitlementIdOrFeatureKey']['grants']['$get']
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
          client.api.v2.customers[':customerIdOrKey'].entitlements[
            ':entitlementIdOrFeatureKey'
          ].grants.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2CustomersCustomerIdOrKeyEntitlementsEntitlementIdOrFeatureKeyGrants<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v2.customers)[':customerIdOrKey']['entitlements'][':entitlementIdOrFeatureKey']['grants']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.customers)[':customerIdOrKey']['entitlements'][':entitlementIdOrFeatureKey']['grants']['$get']
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
        ? getGetApiV2CustomersCustomerIdOrKeyEntitlementsEntitlementIdOrFeatureKeyGrantsKey(args)
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
                (typeof client.api.v2.customers)[':customerIdOrKey']['entitlements'][':entitlementIdOrFeatureKey']['grants']['$get']
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
          client.api.v2.customers[':customerIdOrKey'].entitlements[
            ':entitlementIdOrFeatureKey'
          ].grants.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApiV2CustomersCustomerIdOrKeyEntitlementsEntitlementIdOrFeatureKeyGrantsKey() {
  return [
    'api',
    '/api/v2/customers/:customerIdOrKey/entitlements/:entitlementIdOrFeatureKey/grants',
    'POST',
  ] as const
}

export function usePostApiV2CustomersCustomerIdOrKeyEntitlementsEntitlementIdOrFeatureKeyGrants<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v2.customers)[':customerIdOrKey']['entitlements'][':entitlementIdOrFeatureKey']['grants']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v2.customers)[':customerIdOrKey']['entitlements'][':entitlementIdOrFeatureKey']['grants']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostApiV2CustomersCustomerIdOrKeyEntitlementsEntitlementIdOrFeatureKeyGrantsKey()
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
            (typeof client.api.v2.customers)[':customerIdOrKey']['entitlements'][':entitlementIdOrFeatureKey']['grants']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v2.customers[':customerIdOrKey'].entitlements[
            ':entitlementIdOrFeatureKey'
          ].grants.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV2CustomersCustomerIdOrKeyEntitlementsEntitlementIdOrFeatureKeyHistoryKey(
  args: InferRequestType<
    (typeof client.api.v2.customers)[':customerIdOrKey']['entitlements'][':entitlementIdOrFeatureKey']['history']['$get']
  >,
) {
  return [
    'api',
    '/api/v2/customers/:customerIdOrKey/entitlements/:entitlementIdOrFeatureKey/history',
    args,
  ] as const
}

export function useGetApiV2CustomersCustomerIdOrKeyEntitlementsEntitlementIdOrFeatureKeyHistory<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v2.customers)[':customerIdOrKey']['entitlements'][':entitlementIdOrFeatureKey']['history']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.customers)[':customerIdOrKey']['entitlements'][':entitlementIdOrFeatureKey']['history']['$get']
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
        ? getGetApiV2CustomersCustomerIdOrKeyEntitlementsEntitlementIdOrFeatureKeyHistoryKey(args)
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
                (typeof client.api.v2.customers)[':customerIdOrKey']['entitlements'][':entitlementIdOrFeatureKey']['history']['$get']
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
          client.api.v2.customers[':customerIdOrKey'].entitlements[
            ':entitlementIdOrFeatureKey'
          ].history.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2CustomersCustomerIdOrKeyEntitlementsEntitlementIdOrFeatureKeyHistory<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v2.customers)[':customerIdOrKey']['entitlements'][':entitlementIdOrFeatureKey']['history']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.customers)[':customerIdOrKey']['entitlements'][':entitlementIdOrFeatureKey']['history']['$get']
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
        ? getGetApiV2CustomersCustomerIdOrKeyEntitlementsEntitlementIdOrFeatureKeyHistoryKey(args)
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
                (typeof client.api.v2.customers)[':customerIdOrKey']['entitlements'][':entitlementIdOrFeatureKey']['history']['$get']
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
          client.api.v2.customers[':customerIdOrKey'].entitlements[
            ':entitlementIdOrFeatureKey'
          ].history.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutApiV2CustomersCustomerIdOrKeyEntitlementsEntitlementIdOrFeatureKeyOverrideKey() {
  return [
    'api',
    '/api/v2/customers/:customerIdOrKey/entitlements/:entitlementIdOrFeatureKey/override',
    'PUT',
  ] as const
}

export function usePutApiV2CustomersCustomerIdOrKeyEntitlementsEntitlementIdOrFeatureKeyOverride<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v2.customers)[':customerIdOrKey']['entitlements'][':entitlementIdOrFeatureKey']['override']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v2.customers)[':customerIdOrKey']['entitlements'][':entitlementIdOrFeatureKey']['override']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPutApiV2CustomersCustomerIdOrKeyEntitlementsEntitlementIdOrFeatureKeyOverrideKey()
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
            (typeof client.api.v2.customers)[':customerIdOrKey']['entitlements'][':entitlementIdOrFeatureKey']['override']['$put']
          >
        },
      ) =>
        parseResponse(
          client.api.v2.customers[':customerIdOrKey'].entitlements[
            ':entitlementIdOrFeatureKey'
          ].override.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiV2CustomersCustomerIdOrKeyEntitlementsEntitlementIdOrFeatureKeyResetKey() {
  return [
    'api',
    '/api/v2/customers/:customerIdOrKey/entitlements/:entitlementIdOrFeatureKey/reset',
    'POST',
  ] as const
}

export function usePostApiV2CustomersCustomerIdOrKeyEntitlementsEntitlementIdOrFeatureKeyReset<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.customers)[':customerIdOrKey']['entitlements'][':entitlementIdOrFeatureKey']['reset']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v2.customers)[':customerIdOrKey']['entitlements'][':entitlementIdOrFeatureKey']['reset']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostApiV2CustomersCustomerIdOrKeyEntitlementsEntitlementIdOrFeatureKeyResetKey()
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
            (typeof client.api.v2.customers)[':customerIdOrKey']['entitlements'][':entitlementIdOrFeatureKey']['reset']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v2.customers[':customerIdOrKey'].entitlements[
            ':entitlementIdOrFeatureKey'
          ].reset.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV2CustomersCustomerIdOrKeyEntitlementsEntitlementIdOrFeatureKeyValueKey(
  args: InferRequestType<
    (typeof client.api.v2.customers)[':customerIdOrKey']['entitlements'][':entitlementIdOrFeatureKey']['value']['$get']
  >,
) {
  return [
    'api',
    '/api/v2/customers/:customerIdOrKey/entitlements/:entitlementIdOrFeatureKey/value',
    args,
  ] as const
}

export function useGetApiV2CustomersCustomerIdOrKeyEntitlementsEntitlementIdOrFeatureKeyValue<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v2.customers)[':customerIdOrKey']['entitlements'][':entitlementIdOrFeatureKey']['value']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.customers)[':customerIdOrKey']['entitlements'][':entitlementIdOrFeatureKey']['value']['$get']
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
        ? getGetApiV2CustomersCustomerIdOrKeyEntitlementsEntitlementIdOrFeatureKeyValueKey(args)
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
                (typeof client.api.v2.customers)[':customerIdOrKey']['entitlements'][':entitlementIdOrFeatureKey']['value']['$get']
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
          client.api.v2.customers[':customerIdOrKey'].entitlements[
            ':entitlementIdOrFeatureKey'
          ].value.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2CustomersCustomerIdOrKeyEntitlementsEntitlementIdOrFeatureKeyValue<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v2.customers)[':customerIdOrKey']['entitlements'][':entitlementIdOrFeatureKey']['value']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v2.customers)[':customerIdOrKey']['entitlements'][':entitlementIdOrFeatureKey']['value']['$get']
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
        ? getGetApiV2CustomersCustomerIdOrKeyEntitlementsEntitlementIdOrFeatureKeyValueKey(args)
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
                (typeof client.api.v2.customers)[':customerIdOrKey']['entitlements'][':entitlementIdOrFeatureKey']['value']['$get']
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
          client.api.v2.customers[':customerIdOrKey'].entitlements[
            ':entitlementIdOrFeatureKey'
          ].value.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiV2EntitlementsKey(
  args: InferRequestType<typeof client.api.v2.entitlements.$get>,
) {
  return ['api', '/api/v2/entitlements', args] as const
}

export function useGetApiV2Entitlements<TError = unknown>(
  args: InferRequestType<typeof client.api.v2.entitlements.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.entitlements.$get>>>
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
        ? getGetApiV2EntitlementsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.entitlements.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.entitlements.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2Entitlements<TError = unknown>(
  args: InferRequestType<typeof client.api.v2.entitlements.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.entitlements.$get>>>
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
        ? getGetApiV2EntitlementsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.entitlements.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.entitlements.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV2EntitlementsEntitlementIdKey(
  args: InferRequestType<(typeof client.api.v2.entitlements)[':entitlementId']['$get']>,
) {
  return ['api', '/api/v2/entitlements/:entitlementId', args] as const
}

export function useGetApiV2EntitlementsEntitlementId<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.entitlements)[':entitlementId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.entitlements)[':entitlementId']['$get']>>
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
        ? getGetApiV2EntitlementsEntitlementIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.entitlements)[':entitlementId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v2.entitlements[':entitlementId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2EntitlementsEntitlementId<TError = unknown>(
  args: InferRequestType<(typeof client.api.v2.entitlements)[':entitlementId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.entitlements)[':entitlementId']['$get']>>
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
        ? getGetApiV2EntitlementsEntitlementIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v2.entitlements)[':entitlementId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v2.entitlements[':entitlementId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV2EventsKey(args: InferRequestType<typeof client.api.v2.events.$get>) {
  return ['api', '/api/v2/events', args] as const
}

export function useGetApiV2Events<TError = unknown>(
  args: InferRequestType<typeof client.api.v2.events.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.events.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV2EventsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.events.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.events.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2Events<TError = unknown>(
  args: InferRequestType<typeof client.api.v2.events.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.events.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV2EventsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.events.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.events.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV2GrantsKey(args: InferRequestType<typeof client.api.v2.grants.$get>) {
  return ['api', '/api/v2/grants', args] as const
}

export function useGetApiV2Grants<TError = unknown>(
  args: InferRequestType<typeof client.api.v2.grants.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.grants.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV2GrantsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.grants.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.grants.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV2Grants<TError = unknown>(
  args: InferRequestType<typeof client.api.v2.grants.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.grants.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV2GrantsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v2.grants.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v2.grants.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}
