import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function get_3dsecureKey() {
  return ['3dsecure'] as const
}

export function getAmlKey() {
  return ['aml'] as const
}

export function getAttachmentsKey() {
  return ['attachments'] as const
}

export function getAuthenticationOptionsKey() {
  return ['authentication-options'] as const
}

export function getAuthenticationTokensKey() {
  return ['authentication-tokens'] as const
}

export function getBankAccountsKey() {
  return ['bank-accounts'] as const
}

export function getBlocklistsKey() {
  return ['blocklists'] as const
}

export function getCouponsKey() {
  return ['coupons'] as const
}

export function getCouponsRedemptionsKey() {
  return ['coupons-redemptions'] as const
}

export function getCredentialsKey() {
  return ['credentials'] as const
}

export function getCustomFieldsKey() {
  return ['custom-fields'] as const
}

export function getCustomerTimelineCustomEventsKey() {
  return ['customer-timeline-custom-events'] as const
}

export function getCustomerTimelineEventsKey() {
  return ['customer-timeline-events'] as const
}

export function getCustomersKey() {
  return ['customers'] as const
}

export function getDigitalWalletsKey() {
  return ['digital-wallets'] as const
}

export function getDisputesKey() {
  return ['disputes'] as const
}

export function getFilesKey() {
  return ['files'] as const
}

export function getInvoicesKey() {
  return ['invoices'] as const
}

export function getKycDocumentsKey() {
  return ['kyc-documents'] as const
}

export function getKycRequestsKey() {
  return ['kyc-requests'] as const
}

export function getPasswordTokensKey() {
  return ['password-tokens'] as const
}

export function getPaymentCardsKey() {
  return ['payment-cards'] as const
}

export function getPaymentInstrumentsKey() {
  return ['payment-instruments'] as const
}

export function getPayoutsKey() {
  return ['payouts'] as const
}

export function getPaypalAccountsKey() {
  return ['paypal-accounts'] as const
}

export function getPlansKey() {
  return ['plans'] as const
}

export function getProductsKey() {
  return ['products'] as const
}

export function getReadyToPayKey() {
  return ['ready-to-pay'] as const
}

export function getSearchKey() {
  return ['search'] as const
}

export function getShippingZonesKey() {
  return ['shipping-zones'] as const
}

export function getSubscriptionCancellationsKey() {
  return ['subscription-cancellations'] as const
}

export function getSubscriptionReactivationsKey() {
  return ['subscription-reactivations'] as const
}

export function getSubscriptionsKey() {
  return ['subscriptions'] as const
}

export function getTagsKey() {
  return ['tags'] as const
}

export function getTokensKey() {
  return ['tokens'] as const
}

export function getTransactionsKey() {
  return ['transactions'] as const
}

export function getGet3dsecureKey(args: InferRequestType<(typeof client)['3dsecure']['$get']>) {
  const { header: _, ...keyArgs } = args
  return ['3dsecure', '/3dsecure', keyArgs] as const
}

export function useGet3dsecure<TError = unknown>(
  args: InferRequestType<(typeof client)['3dsecure']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['3dsecure']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGet3dsecureKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['3dsecure']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['3dsecure'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet3dsecure<TError = unknown>(
  args: InferRequestType<(typeof client)['3dsecure']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['3dsecure']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGet3dsecureKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['3dsecure']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['3dsecure'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPost3dsecureKey() {
  return ['3dsecure', '/3dsecure', 'POST'] as const
}

export function usePost3dsecure<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['3dsecure']['$post']>>>>
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['3dsecure']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost3dsecureKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client)['3dsecure']['$post']> }) =>
        parseResponse(client['3dsecure'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGet3dsecureIdKey(
  args: InferRequestType<(typeof client)['3dsecure'][':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['3dsecure', '/3dsecure/:id', keyArgs] as const
}

export function useGet3dsecureId<TError = unknown>(
  args: InferRequestType<(typeof client)['3dsecure'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['3dsecure'][':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGet3dsecureIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['3dsecure'][':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['3dsecure'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet3dsecureId<TError = unknown>(
  args: InferRequestType<(typeof client)['3dsecure'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['3dsecure'][':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGet3dsecureIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['3dsecure'][':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['3dsecure'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAmlKey(args: InferRequestType<typeof client.aml.$get>) {
  const { header: _, ...keyArgs } = args
  return ['aml', '/aml', keyArgs] as const
}

export function useGetAml<TError = unknown>(
  args: InferRequestType<typeof client.aml.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.aml.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAmlKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.aml.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.aml.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetAml<TError = unknown>(
  args: InferRequestType<typeof client.aml.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.aml.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAmlKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.aml.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.aml.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetAttachmentsKey(args: InferRequestType<typeof client.attachments.$get>) {
  const { header: _, ...keyArgs } = args
  return ['attachments', '/attachments', keyArgs] as const
}

export function useGetAttachments<TError = unknown>(
  args: InferRequestType<typeof client.attachments.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.attachments.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAttachmentsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.attachments.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.attachments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAttachments<TError = unknown>(
  args: InferRequestType<typeof client.attachments.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.attachments.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAttachmentsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.attachments.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.attachments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAttachmentsKey() {
  return ['attachments', '/attachments', 'POST'] as const
}

export function usePostAttachments<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.attachments.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.attachments.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAttachmentsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.attachments.$post> }) =>
        parseResponse(client.attachments.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAttachmentsIdKey(
  args: InferRequestType<(typeof client.attachments)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['attachments', '/attachments/:id', keyArgs] as const
}

export function useGetAttachmentsId<TError = unknown>(
  args: InferRequestType<(typeof client.attachments)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.attachments)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetAttachmentsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.attachments)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.attachments[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAttachmentsId<TError = unknown>(
  args: InferRequestType<(typeof client.attachments)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.attachments)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetAttachmentsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.attachments)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.attachments[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutAttachmentsIdKey() {
  return ['attachments', '/attachments/:id', 'PUT'] as const
}

export function usePutAttachmentsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.attachments)[':id']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.attachments)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAttachmentsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.attachments)[':id']['$put']> },
      ) => parseResponse(client.attachments[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteAttachmentsIdKey() {
  return ['attachments', '/attachments/:id', 'DELETE'] as const
}

export function useDeleteAttachmentsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.attachments)[':id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.attachments)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAttachmentsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.attachments)[':id']['$delete']> },
      ) => parseResponse(client.attachments[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAuthenticationOptionsKey(
  args: InferRequestType<(typeof client)['authentication-options']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['authentication-options', '/authentication-options', keyArgs] as const
}

export function useGetAuthenticationOptions<TError = unknown>(
  args: InferRequestType<(typeof client)['authentication-options']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['authentication-options']['$get']>>
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
        ? getGetAuthenticationOptionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['authentication-options']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['authentication-options'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAuthenticationOptions<TError = unknown>(
  args: InferRequestType<(typeof client)['authentication-options']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['authentication-options']['$get']>>
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
        ? getGetAuthenticationOptionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['authentication-options']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['authentication-options'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutAuthenticationOptionsKey() {
  return ['authentication-options', '/authentication-options', 'PUT'] as const
}

export function usePutAuthenticationOptions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['authentication-options']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['authentication-options']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAuthenticationOptionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['authentication-options']['$put']> },
      ) => parseResponse(client['authentication-options'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAuthenticationTokensKey(
  args: InferRequestType<(typeof client)['authentication-tokens']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['authentication-tokens', '/authentication-tokens', keyArgs] as const
}

export function useGetAuthenticationTokens<TError = unknown>(
  args: InferRequestType<(typeof client)['authentication-tokens']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['authentication-tokens']['$get']>>
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
        ? getGetAuthenticationTokensKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['authentication-tokens']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['authentication-tokens'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAuthenticationTokens<TError = unknown>(
  args: InferRequestType<(typeof client)['authentication-tokens']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['authentication-tokens']['$get']>>
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
        ? getGetAuthenticationTokensKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['authentication-tokens']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['authentication-tokens'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAuthenticationTokensKey() {
  return ['authentication-tokens', '/authentication-tokens', 'POST'] as const
}

export function usePostAuthenticationTokens<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['authentication-tokens']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['authentication-tokens']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAuthenticationTokensKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['authentication-tokens']['$post']> },
      ) => parseResponse(client['authentication-tokens'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAuthenticationTokensTokenKey(
  args: InferRequestType<(typeof client)['authentication-tokens'][':token']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['authentication-tokens', '/authentication-tokens/:token', keyArgs] as const
}

export function useGetAuthenticationTokensToken<TError = unknown>(
  args: InferRequestType<(typeof client)['authentication-tokens'][':token']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['authentication-tokens'][':token']['$get']>>
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
        ? getGetAuthenticationTokensTokenKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['authentication-tokens'][':token']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['authentication-tokens'][':token'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAuthenticationTokensToken<TError = unknown>(
  args: InferRequestType<(typeof client)['authentication-tokens'][':token']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['authentication-tokens'][':token']['$get']>>
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
        ? getGetAuthenticationTokensTokenKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['authentication-tokens'][':token']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['authentication-tokens'][':token'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteAuthenticationTokensTokenKey() {
  return ['authentication-tokens', '/authentication-tokens/:token', 'DELETE'] as const
}

export function useDeleteAuthenticationTokensToken<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['authentication-tokens'][':token']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client)['authentication-tokens'][':token']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAuthenticationTokensTokenKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['authentication-tokens'][':token']['$delete']> },
      ) => parseResponse(client['authentication-tokens'][':token'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAuthenticationTokensTokenExchangeKey() {
  return ['authentication-tokens', '/authentication-tokens/:token/exchange', 'POST'] as const
}

export function usePostAuthenticationTokensTokenExchange<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['authentication-tokens'][':token']['exchange']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['authentication-tokens'][':token']['exchange']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAuthenticationTokensTokenExchangeKey()
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
            (typeof client)['authentication-tokens'][':token']['exchange']['$post']
          >
        },
      ) =>
        parseResponse(client['authentication-tokens'][':token'].exchange.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetBankAccountsKey(
  args: InferRequestType<(typeof client)['bank-accounts']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['bank-accounts', '/bank-accounts', keyArgs] as const
}

export function useGetBankAccounts<TError = unknown>(
  args: InferRequestType<(typeof client)['bank-accounts']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['bank-accounts']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetBankAccountsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['bank-accounts']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['bank-accounts'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBankAccounts<TError = unknown>(
  args: InferRequestType<(typeof client)['bank-accounts']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['bank-accounts']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetBankAccountsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['bank-accounts']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['bank-accounts'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostBankAccountsKey() {
  return ['bank-accounts', '/bank-accounts', 'POST'] as const
}

export function usePostBankAccounts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['bank-accounts']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['bank-accounts']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBankAccountsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['bank-accounts']['$post']> },
      ) => parseResponse(client['bank-accounts'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetBankAccountsIdKey(
  args: InferRequestType<(typeof client)['bank-accounts'][':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['bank-accounts', '/bank-accounts/:id', keyArgs] as const
}

export function useGetBankAccountsId<TError = unknown>(
  args: InferRequestType<(typeof client)['bank-accounts'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['bank-accounts'][':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetBankAccountsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['bank-accounts'][':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['bank-accounts'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBankAccountsId<TError = unknown>(
  args: InferRequestType<(typeof client)['bank-accounts'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['bank-accounts'][':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetBankAccountsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['bank-accounts'][':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['bank-accounts'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutBankAccountsIdKey() {
  return ['bank-accounts', '/bank-accounts/:id', 'PUT'] as const
}

export function usePutBankAccountsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['bank-accounts'][':id']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['bank-accounts'][':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutBankAccountsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['bank-accounts'][':id']['$put']> },
      ) => parseResponse(client['bank-accounts'][':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchBankAccountsIdKey() {
  return ['bank-accounts', '/bank-accounts/:id', 'PATCH'] as const
}

export function usePatchBankAccountsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['bank-accounts'][':id']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['bank-accounts'][':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchBankAccountsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['bank-accounts'][':id']['$patch']> },
      ) => parseResponse(client['bank-accounts'][':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostBankAccountsIdDeactivationKey() {
  return ['bank-accounts', '/bank-accounts/:id/deactivation', 'POST'] as const
}

export function usePostBankAccountsIdDeactivation<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['bank-accounts'][':id']['deactivation']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['bank-accounts'][':id']['deactivation']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBankAccountsIdDeactivationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['bank-accounts'][':id']['deactivation']['$post']>
        },
      ) => parseResponse(client['bank-accounts'][':id'].deactivation.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetBlocklistsKey(args: InferRequestType<typeof client.blocklists.$get>) {
  const { header: _, ...keyArgs } = args
  return ['blocklists', '/blocklists', keyArgs] as const
}

export function useGetBlocklists<TError = unknown>(
  args: InferRequestType<typeof client.blocklists.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.blocklists.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetBlocklistsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.blocklists.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.blocklists.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBlocklists<TError = unknown>(
  args: InferRequestType<typeof client.blocklists.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.blocklists.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetBlocklistsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.blocklists.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.blocklists.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostBlocklistsKey() {
  return ['blocklists', '/blocklists', 'POST'] as const
}

export function usePostBlocklists<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.blocklists.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.blocklists.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBlocklistsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.blocklists.$post> }) =>
        parseResponse(client.blocklists.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetBlocklistsIdKey(
  args: InferRequestType<(typeof client.blocklists)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['blocklists', '/blocklists/:id', keyArgs] as const
}

export function useGetBlocklistsId<TError = unknown>(
  args: InferRequestType<(typeof client.blocklists)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.blocklists)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetBlocklistsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.blocklists)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.blocklists[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBlocklistsId<TError = unknown>(
  args: InferRequestType<(typeof client.blocklists)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.blocklists)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetBlocklistsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.blocklists)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.blocklists[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutBlocklistsIdKey() {
  return ['blocklists', '/blocklists/:id', 'PUT'] as const
}

export function usePutBlocklistsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.blocklists)[':id']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.blocklists)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutBlocklistsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.blocklists)[':id']['$put']> },
      ) => parseResponse(client.blocklists[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteBlocklistsIdKey() {
  return ['blocklists', '/blocklists/:id', 'DELETE'] as const
}

export function useDeleteBlocklistsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.blocklists)[':id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.blocklists)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteBlocklistsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.blocklists)[':id']['$delete']> },
      ) => parseResponse(client.blocklists[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCouponsKey(args: InferRequestType<typeof client.coupons.$get>) {
  const { header: _, ...keyArgs } = args
  return ['coupons', '/coupons', keyArgs] as const
}

export function useGetCoupons<TError = unknown>(
  args: InferRequestType<typeof client.coupons.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.coupons.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCouponsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.coupons.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.coupons.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetCoupons<TError = unknown>(
  args: InferRequestType<typeof client.coupons.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.coupons.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCouponsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.coupons.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.coupons.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostCouponsKey() {
  return ['coupons', '/coupons', 'POST'] as const
}

export function usePostCoupons<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.coupons.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.coupons.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCouponsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.coupons.$post> }) =>
        parseResponse(client.coupons.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCouponsRedemptionsKey(
  args: InferRequestType<(typeof client)['coupons-redemptions']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['coupons-redemptions', '/coupons-redemptions', keyArgs] as const
}

export function useGetCouponsRedemptions<TError = unknown>(
  args: InferRequestType<(typeof client)['coupons-redemptions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['coupons-redemptions']['$get']>>>
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
        ? getGetCouponsRedemptionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['coupons-redemptions']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['coupons-redemptions'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCouponsRedemptions<TError = unknown>(
  args: InferRequestType<(typeof client)['coupons-redemptions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['coupons-redemptions']['$get']>>>
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
        ? getGetCouponsRedemptionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['coupons-redemptions']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['coupons-redemptions'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostCouponsRedemptionsKey() {
  return ['coupons-redemptions', '/coupons-redemptions', 'POST'] as const
}

export function usePostCouponsRedemptions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['coupons-redemptions']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['coupons-redemptions']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCouponsRedemptionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['coupons-redemptions']['$post']> },
      ) => parseResponse(client['coupons-redemptions'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCouponsRedemptionsIdKey(
  args: InferRequestType<(typeof client)['coupons-redemptions'][':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['coupons-redemptions', '/coupons-redemptions/:id', keyArgs] as const
}

export function useGetCouponsRedemptionsId<TError = unknown>(
  args: InferRequestType<(typeof client)['coupons-redemptions'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['coupons-redemptions'][':id']['$get']>>
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
        ? getGetCouponsRedemptionsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['coupons-redemptions'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['coupons-redemptions'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCouponsRedemptionsId<TError = unknown>(
  args: InferRequestType<(typeof client)['coupons-redemptions'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['coupons-redemptions'][':id']['$get']>>
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
        ? getGetCouponsRedemptionsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['coupons-redemptions'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['coupons-redemptions'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostCouponsRedemptionsIdCancelKey() {
  return ['coupons-redemptions', '/coupons-redemptions/:id/cancel', 'POST'] as const
}

export function usePostCouponsRedemptionsIdCancel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['coupons-redemptions'][':id']['cancel']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['coupons-redemptions'][':id']['cancel']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCouponsRedemptionsIdCancelKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['coupons-redemptions'][':id']['cancel']['$post']>
        },
      ) => parseResponse(client['coupons-redemptions'][':id'].cancel.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCouponsIdKey(args: InferRequestType<(typeof client.coupons)[':id']['$get']>) {
  const { header: _, ...keyArgs } = args
  return ['coupons', '/coupons/:id', keyArgs] as const
}

export function useGetCouponsId<TError = unknown>(
  args: InferRequestType<(typeof client.coupons)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.coupons)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetCouponsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.coupons)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.coupons[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCouponsId<TError = unknown>(
  args: InferRequestType<(typeof client.coupons)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.coupons)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetCouponsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.coupons)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.coupons[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutCouponsIdKey() {
  return ['coupons', '/coupons/:id', 'PUT'] as const
}

export function usePutCouponsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.coupons)[':id']['$put']>>>>
    >,
    TError,
    Key,
    InferRequestType<(typeof client.coupons)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutCouponsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client.coupons)[':id']['$put']> }) =>
        parseResponse(client.coupons[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCouponsIdExpirationKey() {
  return ['coupons', '/coupons/:id/expiration', 'POST'] as const
}

export function usePostCouponsIdExpiration<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.coupons)[':id']['expiration']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.coupons)[':id']['expiration']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCouponsIdExpirationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.coupons)[':id']['expiration']['$post']> },
      ) => parseResponse(client.coupons[':id'].expiration.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCredentialsKey(args: InferRequestType<typeof client.credentials.$get>) {
  const { header: _, ...keyArgs } = args
  return ['credentials', '/credentials', keyArgs] as const
}

export function useGetCredentials<TError = unknown>(
  args: InferRequestType<typeof client.credentials.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.credentials.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCredentialsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.credentials.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.credentials.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCredentials<TError = unknown>(
  args: InferRequestType<typeof client.credentials.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.credentials.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCredentialsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.credentials.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.credentials.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostCredentialsKey() {
  return ['credentials', '/credentials', 'POST'] as const
}

export function usePostCredentials<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.credentials.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.credentials.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCredentialsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.credentials.$post> }) =>
        parseResponse(client.credentials.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCredentialsIdKey(
  args: InferRequestType<(typeof client.credentials)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['credentials', '/credentials/:id', keyArgs] as const
}

export function useGetCredentialsId<TError = unknown>(
  args: InferRequestType<(typeof client.credentials)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.credentials)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetCredentialsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.credentials)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.credentials[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCredentialsId<TError = unknown>(
  args: InferRequestType<(typeof client.credentials)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.credentials)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetCredentialsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.credentials)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.credentials[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutCredentialsIdKey() {
  return ['credentials', '/credentials/:id', 'PUT'] as const
}

export function usePutCredentialsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.credentials)[':id']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.credentials)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutCredentialsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.credentials)[':id']['$put']> },
      ) => parseResponse(client.credentials[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteCredentialsIdKey() {
  return ['credentials', '/credentials/:id', 'DELETE'] as const
}

export function useDeleteCredentialsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.credentials)[':id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.credentials)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteCredentialsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.credentials)[':id']['$delete']> },
      ) => parseResponse(client.credentials[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCustomFieldsResourceKey(
  args: InferRequestType<(typeof client)['custom-fields'][':resource']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['custom-fields', '/custom-fields/:resource', keyArgs] as const
}

export function useGetCustomFieldsResource<TError = unknown>(
  args: InferRequestType<(typeof client)['custom-fields'][':resource']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['custom-fields'][':resource']['$get']>>
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
        ? getGetCustomFieldsResourceKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['custom-fields'][':resource']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['custom-fields'][':resource'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCustomFieldsResource<TError = unknown>(
  args: InferRequestType<(typeof client)['custom-fields'][':resource']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['custom-fields'][':resource']['$get']>>
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
        ? getGetCustomFieldsResourceKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['custom-fields'][':resource']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['custom-fields'][':resource'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCustomFieldsResourceNameKey(
  args: InferRequestType<(typeof client)['custom-fields'][':resource'][':name']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['custom-fields', '/custom-fields/:resource/:name', keyArgs] as const
}

export function useGetCustomFieldsResourceName<TError = unknown>(
  args: InferRequestType<(typeof client)['custom-fields'][':resource'][':name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['custom-fields'][':resource'][':name']['$get']>>
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
        ? getGetCustomFieldsResourceNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['custom-fields'][':resource'][':name']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['custom-fields'][':resource'][':name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCustomFieldsResourceName<TError = unknown>(
  args: InferRequestType<(typeof client)['custom-fields'][':resource'][':name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['custom-fields'][':resource'][':name']['$get']>>
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
        ? getGetCustomFieldsResourceNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['custom-fields'][':resource'][':name']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['custom-fields'][':resource'][':name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutCustomFieldsResourceNameKey() {
  return ['custom-fields', '/custom-fields/:resource/:name', 'PUT'] as const
}

export function usePutCustomFieldsResourceName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['custom-fields'][':resource'][':name']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['custom-fields'][':resource'][':name']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutCustomFieldsResourceNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['custom-fields'][':resource'][':name']['$put']>
        },
      ) => parseResponse(client['custom-fields'][':resource'][':name'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCustomerTimelineCustomEventsKey(
  args: InferRequestType<(typeof client)['customer-timeline-custom-events']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['customer-timeline-custom-events', '/customer-timeline-custom-events', keyArgs] as const
}

export function useGetCustomerTimelineCustomEvents<TError = unknown>(
  args: InferRequestType<(typeof client)['customer-timeline-custom-events']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['customer-timeline-custom-events']['$get']>>
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
        ? getGetCustomerTimelineCustomEventsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['customer-timeline-custom-events']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['customer-timeline-custom-events'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCustomerTimelineCustomEvents<TError = unknown>(
  args: InferRequestType<(typeof client)['customer-timeline-custom-events']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['customer-timeline-custom-events']['$get']>>
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
        ? getGetCustomerTimelineCustomEventsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['customer-timeline-custom-events']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['customer-timeline-custom-events'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostCustomerTimelineCustomEventsKey() {
  return ['customer-timeline-custom-events', '/customer-timeline-custom-events', 'POST'] as const
}

export function usePostCustomerTimelineCustomEvents<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['customer-timeline-custom-events']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['customer-timeline-custom-events']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCustomerTimelineCustomEventsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['customer-timeline-custom-events']['$post']> },
      ) => parseResponse(client['customer-timeline-custom-events'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCustomerTimelineCustomEventsIdKey(
  args: InferRequestType<(typeof client)['customer-timeline-custom-events'][':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    'customer-timeline-custom-events',
    '/customer-timeline-custom-events/:id',
    keyArgs,
  ] as const
}

export function useGetCustomerTimelineCustomEventsId<TError = unknown>(
  args: InferRequestType<(typeof client)['customer-timeline-custom-events'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['customer-timeline-custom-events'][':id']['$get']>>
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
        ? getGetCustomerTimelineCustomEventsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['customer-timeline-custom-events'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['customer-timeline-custom-events'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCustomerTimelineCustomEventsId<TError = unknown>(
  args: InferRequestType<(typeof client)['customer-timeline-custom-events'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['customer-timeline-custom-events'][':id']['$get']>>
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
        ? getGetCustomerTimelineCustomEventsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['customer-timeline-custom-events'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['customer-timeline-custom-events'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCustomerTimelineEventsKey(
  args: InferRequestType<(typeof client)['customer-timeline-events']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['customer-timeline-events', '/customer-timeline-events', keyArgs] as const
}

export function useGetCustomerTimelineEvents<TError = unknown>(
  args: InferRequestType<(typeof client)['customer-timeline-events']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['customer-timeline-events']['$get']>>
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
        ? getGetCustomerTimelineEventsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['customer-timeline-events']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['customer-timeline-events'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCustomerTimelineEvents<TError = unknown>(
  args: InferRequestType<(typeof client)['customer-timeline-events']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['customer-timeline-events']['$get']>>
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
        ? getGetCustomerTimelineEventsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['customer-timeline-events']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['customer-timeline-events'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCustomersKey(args: InferRequestType<typeof client.customers.$get>) {
  const { header: _, ...keyArgs } = args
  return ['customers', '/customers', keyArgs] as const
}

export function useGetCustomers<TError = unknown>(
  args: InferRequestType<typeof client.customers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.customers.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCustomersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.customers.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.customers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCustomers<TError = unknown>(
  args: InferRequestType<typeof client.customers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.customers.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCustomersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.customers.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.customers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostCustomersKey() {
  return ['customers', '/customers', 'POST'] as const
}

export function usePostCustomers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.customers.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.customers.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCustomersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.customers.$post> }) =>
        parseResponse(client.customers.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCustomersIdKey(
  args: InferRequestType<(typeof client.customers)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['customers', '/customers/:id', keyArgs] as const
}

export function useGetCustomersId<TError = unknown>(
  args: InferRequestType<(typeof client.customers)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.customers)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetCustomersIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.customers)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.customers[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCustomersId<TError = unknown>(
  args: InferRequestType<(typeof client.customers)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.customers)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetCustomersIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.customers)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.customers[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutCustomersIdKey() {
  return ['customers', '/customers/:id', 'PUT'] as const
}

export function usePutCustomersId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.customers)[':id']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.customers)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutCustomersIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.customers)[':id']['$put']> },
      ) => parseResponse(client.customers[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteCustomersIdKey() {
  return ['customers', '/customers/:id', 'DELETE'] as const
}

export function useDeleteCustomersId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.customers)[':id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.customers)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteCustomersIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.customers)[':id']['$delete']> },
      ) => parseResponse(client.customers[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCustomersIdLeadSourceKey(
  args: InferRequestType<(typeof client.customers)[':id']['lead-source']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['customers', '/customers/:id/lead-source', keyArgs] as const
}

export function useGetCustomersIdLeadSource<TError = unknown>(
  args: InferRequestType<(typeof client.customers)[':id']['lead-source']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.customers)[':id']['lead-source']['$get']>>
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
        ? getGetCustomersIdLeadSourceKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.customers)[':id']['lead-source']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.customers[':id']['lead-source'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCustomersIdLeadSource<TError = unknown>(
  args: InferRequestType<(typeof client.customers)[':id']['lead-source']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.customers)[':id']['lead-source']['$get']>>
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
        ? getGetCustomersIdLeadSourceKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.customers)[':id']['lead-source']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.customers[':id']['lead-source'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutCustomersIdLeadSourceKey() {
  return ['customers', '/customers/:id/lead-source', 'PUT'] as const
}

export function usePutCustomersIdLeadSource<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.customers)[':id']['lead-source']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.customers)[':id']['lead-source']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutCustomersIdLeadSourceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.customers)[':id']['lead-source']['$put']> },
      ) => parseResponse(client.customers[':id']['lead-source'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteCustomersIdLeadSourceKey() {
  return ['customers', '/customers/:id/lead-source', 'DELETE'] as const
}

export function useDeleteCustomersIdLeadSource<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.customers)[':id']['lead-source']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.customers)[':id']['lead-source']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteCustomersIdLeadSourceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.customers)[':id']['lead-source']['$delete']> },
      ) => parseResponse(client.customers[':id']['lead-source'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCustomersIdTimelineKey(
  args: InferRequestType<(typeof client.customers)[':id']['timeline']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['customers', '/customers/:id/timeline', keyArgs] as const
}

export function useGetCustomersIdTimeline<TError = unknown>(
  args: InferRequestType<(typeof client.customers)[':id']['timeline']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.customers)[':id']['timeline']['$get']>>
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
        ? getGetCustomersIdTimelineKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.customers)[':id']['timeline']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.customers[':id'].timeline.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCustomersIdTimeline<TError = unknown>(
  args: InferRequestType<(typeof client.customers)[':id']['timeline']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.customers)[':id']['timeline']['$get']>>
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
        ? getGetCustomersIdTimelineKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.customers)[':id']['timeline']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.customers[':id'].timeline.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostCustomersIdTimelineKey() {
  return ['customers', '/customers/:id/timeline', 'POST'] as const
}

export function usePostCustomersIdTimeline<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.customers)[':id']['timeline']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.customers)[':id']['timeline']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCustomersIdTimelineKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.customers)[':id']['timeline']['$post']> },
      ) => parseResponse(client.customers[':id'].timeline.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCustomersIdTimelineMessageIdKey(
  args: InferRequestType<(typeof client.customers)[':id']['timeline'][':messageId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['customers', '/customers/:id/timeline/:messageId', keyArgs] as const
}

export function useGetCustomersIdTimelineMessageId<TError = unknown>(
  args: InferRequestType<(typeof client.customers)[':id']['timeline'][':messageId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.customers)[':id']['timeline'][':messageId']['$get']>>
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
        ? getGetCustomersIdTimelineMessageIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.customers)[':id']['timeline'][':messageId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.customers[':id'].timeline[':messageId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCustomersIdTimelineMessageId<TError = unknown>(
  args: InferRequestType<(typeof client.customers)[':id']['timeline'][':messageId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.customers)[':id']['timeline'][':messageId']['$get']>>
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
        ? getGetCustomersIdTimelineMessageIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.customers)[':id']['timeline'][':messageId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.customers[':id'].timeline[':messageId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteCustomersIdTimelineMessageIdKey() {
  return ['customers', '/customers/:id/timeline/:messageId', 'DELETE'] as const
}

export function useDeleteCustomersIdTimelineMessageId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.customers)[':id']['timeline'][':messageId']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.customers)[':id']['timeline'][':messageId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteCustomersIdTimelineMessageIdKey()
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
            (typeof client.customers)[':id']['timeline'][':messageId']['$delete']
          >
        },
      ) =>
        parseResponse(client.customers[':id'].timeline[':messageId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCustomersIdUpcomingInvoicesKey(
  args: InferRequestType<(typeof client.customers)[':id']['upcoming-invoices']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['customers', '/customers/:id/upcoming-invoices', keyArgs] as const
}

export function useGetCustomersIdUpcomingInvoices<TError = unknown>(
  args: InferRequestType<(typeof client.customers)[':id']['upcoming-invoices']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.customers)[':id']['upcoming-invoices']['$get']>>
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
        ? getGetCustomersIdUpcomingInvoicesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.customers)[':id']['upcoming-invoices']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.customers[':id']['upcoming-invoices'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCustomersIdUpcomingInvoices<TError = unknown>(
  args: InferRequestType<(typeof client.customers)[':id']['upcoming-invoices']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.customers)[':id']['upcoming-invoices']['$get']>>
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
        ? getGetCustomersIdUpcomingInvoicesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.customers)[':id']['upcoming-invoices']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.customers[':id']['upcoming-invoices'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostDigitalWalletsValidationKey() {
  return ['digital-wallets', '/digital-wallets/validation', 'POST'] as const
}

export function usePostDigitalWalletsValidation<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['digital-wallets']['validation']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['digital-wallets']['validation']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDigitalWalletsValidationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['digital-wallets']['validation']['$post']> },
      ) => parseResponse(client['digital-wallets'].validation.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDisputesKey(args: InferRequestType<typeof client.disputes.$get>) {
  const { header: _, ...keyArgs } = args
  return ['disputes', '/disputes', keyArgs] as const
}

export function useGetDisputes<TError = unknown>(
  args: InferRequestType<typeof client.disputes.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.disputes.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDisputesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.disputes.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.disputes.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetDisputes<TError = unknown>(
  args: InferRequestType<typeof client.disputes.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.disputes.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDisputesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.disputes.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.disputes.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostDisputesKey() {
  return ['disputes', '/disputes', 'POST'] as const
}

export function usePostDisputes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.disputes.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.disputes.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDisputesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.disputes.$post> }) =>
        parseResponse(client.disputes.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDisputesIdKey(
  args: InferRequestType<(typeof client.disputes)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['disputes', '/disputes/:id', keyArgs] as const
}

export function useGetDisputesId<TError = unknown>(
  args: InferRequestType<(typeof client.disputes)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.disputes)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetDisputesIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.disputes)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.disputes[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDisputesId<TError = unknown>(
  args: InferRequestType<(typeof client.disputes)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.disputes)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetDisputesIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.disputes)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.disputes[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutDisputesIdKey() {
  return ['disputes', '/disputes/:id', 'PUT'] as const
}

export function usePutDisputesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.disputes)[':id']['$put']>>>>
    >,
    TError,
    Key,
    InferRequestType<(typeof client.disputes)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutDisputesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client.disputes)[':id']['$put']> }) =>
        parseResponse(client.disputes[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetFilesKey(args: InferRequestType<typeof client.files.$get>) {
  const { header: _, ...keyArgs } = args
  return ['files', '/files', keyArgs] as const
}

export function useGetFiles<TError = unknown>(
  args: InferRequestType<typeof client.files.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.files.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetFilesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.files.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.files.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetFiles<TError = unknown>(
  args: InferRequestType<typeof client.files.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.files.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetFilesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.files.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.files.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostFilesKey() {
  return ['files', '/files', 'POST'] as const
}

export function usePostFiles<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.files.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.files.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostFilesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.files.$post> }) =>
        parseResponse(client.files.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetFilesIdKey(args: InferRequestType<(typeof client.files)[':id']['$get']>) {
  const { header: _, ...keyArgs } = args
  return ['files', '/files/:id', keyArgs] as const
}

export function useGetFilesId<TError = unknown>(
  args: InferRequestType<(typeof client.files)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.files)[':id']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetFilesIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.files)[':id']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.files[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFilesId<TError = unknown>(
  args: InferRequestType<(typeof client.files)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.files)[':id']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetFilesIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.files)[':id']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.files[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutFilesIdKey() {
  return ['files', '/files/:id', 'PUT'] as const
}

export function usePutFilesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.files)[':id']['$put']>>>>
    >,
    TError,
    Key,
    InferRequestType<(typeof client.files)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutFilesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client.files)[':id']['$put']> }) =>
        parseResponse(client.files[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteFilesIdKey() {
  return ['files', '/files/:id', 'DELETE'] as const
}

export function useDeleteFilesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.files)[':id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.files)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteFilesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client.files)[':id']['$delete']> }) =>
        parseResponse(client.files[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetFilesIdDownloadKey(
  args: InferRequestType<(typeof client.files)[':id']['download']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['files', '/files/:id/download', keyArgs] as const
}

export function useGetFilesIdDownload<TError = unknown>(
  args: InferRequestType<(typeof client.files)[':id']['download']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.files)[':id']['download']['$get']>>
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
        ? getGetFilesIdDownloadKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.files)[':id']['download']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.files[':id'].download.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFilesIdDownload<TError = unknown>(
  args: InferRequestType<(typeof client.files)[':id']['download']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.files)[':id']['download']['$get']>>
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
        ? getGetFilesIdDownloadKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.files)[':id']['download']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.files[':id'].download.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetFilesIdDownloadExtensionKey(
  args: InferRequestType<(typeof client.files)[':id']['download:extension']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['files', '/files/:id/download:extension', keyArgs] as const
}

export function useGetFilesIdDownloadExtension<TError = unknown>(
  args: InferRequestType<(typeof client.files)[':id']['download:extension']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.files)[':id']['download:extension']['$get']>>
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
        ? getGetFilesIdDownloadExtensionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.files)[':id']['download:extension']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.files[':id']['download:extension'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFilesIdDownloadExtension<TError = unknown>(
  args: InferRequestType<(typeof client.files)[':id']['download:extension']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.files)[':id']['download:extension']['$get']>>
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
        ? getGetFilesIdDownloadExtensionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.files)[':id']['download:extension']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.files[':id']['download:extension'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetInvoicesKey(args: InferRequestType<typeof client.invoices.$get>) {
  const { header: _, ...keyArgs } = args
  return ['invoices', '/invoices', keyArgs] as const
}

export function useGetInvoices<TError = unknown>(
  args: InferRequestType<typeof client.invoices.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.invoices.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetInvoicesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.invoices.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.invoices.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetInvoices<TError = unknown>(
  args: InferRequestType<typeof client.invoices.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.invoices.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetInvoicesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.invoices.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.invoices.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostInvoicesKey() {
  return ['invoices', '/invoices', 'POST'] as const
}

export function usePostInvoices<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.invoices.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.invoices.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostInvoicesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.invoices.$post> }) =>
        parseResponse(client.invoices.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetInvoicesIdKey(
  args: InferRequestType<(typeof client.invoices)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['invoices', '/invoices/:id', keyArgs] as const
}

export function useGetInvoicesId<TError = unknown>(
  args: InferRequestType<(typeof client.invoices)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.invoices)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetInvoicesIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.invoices)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.invoices[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetInvoicesId<TError = unknown>(
  args: InferRequestType<(typeof client.invoices)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.invoices)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetInvoicesIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.invoices)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.invoices[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutInvoicesIdKey() {
  return ['invoices', '/invoices/:id', 'PUT'] as const
}

export function usePutInvoicesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.invoices)[':id']['$put']>>>>
    >,
    TError,
    Key,
    InferRequestType<(typeof client.invoices)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutInvoicesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client.invoices)[':id']['$put']> }) =>
        parseResponse(client.invoices[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostInvoicesIdAbandonKey() {
  return ['invoices', '/invoices/:id/abandon', 'POST'] as const
}

export function usePostInvoicesIdAbandon<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.invoices)[':id']['abandon']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.invoices)[':id']['abandon']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostInvoicesIdAbandonKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.invoices)[':id']['abandon']['$post']> },
      ) => parseResponse(client.invoices[':id'].abandon.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostInvoicesIdIssueKey() {
  return ['invoices', '/invoices/:id/issue', 'POST'] as const
}

export function usePostInvoicesIdIssue<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.invoices)[':id']['issue']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.invoices)[':id']['issue']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostInvoicesIdIssueKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.invoices)[':id']['issue']['$post']> },
      ) => parseResponse(client.invoices[':id'].issue.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetInvoicesIdItemsKey(
  args: InferRequestType<(typeof client.invoices)[':id']['items']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['invoices', '/invoices/:id/items', keyArgs] as const
}

export function useGetInvoicesIdItems<TError = unknown>(
  args: InferRequestType<(typeof client.invoices)[':id']['items']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.invoices)[':id']['items']['$get']>>
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
        ? getGetInvoicesIdItemsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.invoices)[':id']['items']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.invoices[':id'].items.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetInvoicesIdItems<TError = unknown>(
  args: InferRequestType<(typeof client.invoices)[':id']['items']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.invoices)[':id']['items']['$get']>>
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
        ? getGetInvoicesIdItemsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.invoices)[':id']['items']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.invoices[':id'].items.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostInvoicesIdItemsKey() {
  return ['invoices', '/invoices/:id/items', 'POST'] as const
}

export function usePostInvoicesIdItems<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.invoices)[':id']['items']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.invoices)[':id']['items']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostInvoicesIdItemsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.invoices)[':id']['items']['$post']> },
      ) => parseResponse(client.invoices[':id'].items.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostInvoicesIdRecalculateKey() {
  return ['invoices', '/invoices/:id/recalculate', 'POST'] as const
}

export function usePostInvoicesIdRecalculate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.invoices)[':id']['recalculate']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.invoices)[':id']['recalculate']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostInvoicesIdRecalculateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.invoices)[':id']['recalculate']['$post']> },
      ) => parseResponse(client.invoices[':id'].recalculate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostInvoicesIdReissueKey() {
  return ['invoices', '/invoices/:id/reissue', 'POST'] as const
}

export function usePostInvoicesIdReissue<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.invoices)[':id']['reissue']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.invoices)[':id']['reissue']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostInvoicesIdReissueKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.invoices)[':id']['reissue']['$post']> },
      ) => parseResponse(client.invoices[':id'].reissue.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetInvoicesIdTimelineKey(
  args: InferRequestType<(typeof client.invoices)[':id']['timeline']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['invoices', '/invoices/:id/timeline', keyArgs] as const
}

export function useGetInvoicesIdTimeline<TError = unknown>(
  args: InferRequestType<(typeof client.invoices)[':id']['timeline']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.invoices)[':id']['timeline']['$get']>>
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
        ? getGetInvoicesIdTimelineKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.invoices)[':id']['timeline']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.invoices[':id'].timeline.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetInvoicesIdTimeline<TError = unknown>(
  args: InferRequestType<(typeof client.invoices)[':id']['timeline']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.invoices)[':id']['timeline']['$get']>>
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
        ? getGetInvoicesIdTimelineKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.invoices)[':id']['timeline']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.invoices[':id'].timeline.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostInvoicesIdTimelineKey() {
  return ['invoices', '/invoices/:id/timeline', 'POST'] as const
}

export function usePostInvoicesIdTimeline<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.invoices)[':id']['timeline']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.invoices)[':id']['timeline']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostInvoicesIdTimelineKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.invoices)[':id']['timeline']['$post']> },
      ) => parseResponse(client.invoices[':id'].timeline.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetInvoicesIdTimelineMessageIdKey(
  args: InferRequestType<(typeof client.invoices)[':id']['timeline'][':messageId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['invoices', '/invoices/:id/timeline/:messageId', keyArgs] as const
}

export function useGetInvoicesIdTimelineMessageId<TError = unknown>(
  args: InferRequestType<(typeof client.invoices)[':id']['timeline'][':messageId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.invoices)[':id']['timeline'][':messageId']['$get']>>
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
        ? getGetInvoicesIdTimelineMessageIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.invoices)[':id']['timeline'][':messageId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.invoices[':id'].timeline[':messageId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetInvoicesIdTimelineMessageId<TError = unknown>(
  args: InferRequestType<(typeof client.invoices)[':id']['timeline'][':messageId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.invoices)[':id']['timeline'][':messageId']['$get']>>
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
        ? getGetInvoicesIdTimelineMessageIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.invoices)[':id']['timeline'][':messageId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.invoices[':id'].timeline[':messageId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteInvoicesIdTimelineMessageIdKey() {
  return ['invoices', '/invoices/:id/timeline/:messageId', 'DELETE'] as const
}

export function useDeleteInvoicesIdTimelineMessageId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.invoices)[':id']['timeline'][':messageId']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.invoices)[':id']['timeline'][':messageId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteInvoicesIdTimelineMessageIdKey()
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
            (typeof client.invoices)[':id']['timeline'][':messageId']['$delete']
          >
        },
      ) => parseResponse(client.invoices[':id'].timeline[':messageId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostInvoicesIdTransactionKey() {
  return ['invoices', '/invoices/:id/transaction', 'POST'] as const
}

export function usePostInvoicesIdTransaction<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.invoices)[':id']['transaction']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.invoices)[':id']['transaction']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostInvoicesIdTransactionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.invoices)[':id']['transaction']['$post']> },
      ) => parseResponse(client.invoices[':id'].transaction.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetInvoicesIdTransactionAllocationsKey(
  args: InferRequestType<(typeof client.invoices)[':id']['transaction-allocations']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['invoices', '/invoices/:id/transaction-allocations', keyArgs] as const
}

export function useGetInvoicesIdTransactionAllocations<TError = unknown>(
  args: InferRequestType<(typeof client.invoices)[':id']['transaction-allocations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.invoices)[':id']['transaction-allocations']['$get']>>
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
        ? getGetInvoicesIdTransactionAllocationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.invoices)[':id']['transaction-allocations']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.invoices[':id']['transaction-allocations'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetInvoicesIdTransactionAllocations<TError = unknown>(
  args: InferRequestType<(typeof client.invoices)[':id']['transaction-allocations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.invoices)[':id']['transaction-allocations']['$get']>>
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
        ? getGetInvoicesIdTransactionAllocationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.invoices)[':id']['transaction-allocations']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.invoices[':id']['transaction-allocations'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostInvoicesIdVoidKey() {
  return ['invoices', '/invoices/:id/void', 'POST'] as const
}

export function usePostInvoicesIdVoid<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.invoices)[':id']['void']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.invoices)[':id']['void']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostInvoicesIdVoidKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.invoices)[':id']['void']['$post']> },
      ) => parseResponse(client.invoices[':id'].void.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetKycDocumentsKey(
  args: InferRequestType<(typeof client)['kyc-documents']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['kyc-documents', '/kyc-documents', keyArgs] as const
}

export function useGetKycDocuments<TError = unknown>(
  args: InferRequestType<(typeof client)['kyc-documents']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['kyc-documents']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetKycDocumentsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['kyc-documents']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['kyc-documents'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetKycDocuments<TError = unknown>(
  args: InferRequestType<(typeof client)['kyc-documents']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['kyc-documents']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetKycDocumentsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['kyc-documents']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['kyc-documents'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostKycDocumentsKey() {
  return ['kyc-documents', '/kyc-documents', 'POST'] as const
}

export function usePostKycDocuments<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['kyc-documents']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['kyc-documents']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostKycDocumentsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['kyc-documents']['$post']> },
      ) => parseResponse(client['kyc-documents'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetKycDocumentsIdKey(
  args: InferRequestType<(typeof client)['kyc-documents'][':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['kyc-documents', '/kyc-documents/:id', keyArgs] as const
}

export function useGetKycDocumentsId<TError = unknown>(
  args: InferRequestType<(typeof client)['kyc-documents'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['kyc-documents'][':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetKycDocumentsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['kyc-documents'][':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['kyc-documents'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetKycDocumentsId<TError = unknown>(
  args: InferRequestType<(typeof client)['kyc-documents'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['kyc-documents'][':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetKycDocumentsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['kyc-documents'][':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['kyc-documents'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutKycDocumentsIdKey() {
  return ['kyc-documents', '/kyc-documents/:id', 'PUT'] as const
}

export function usePutKycDocumentsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['kyc-documents'][':id']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['kyc-documents'][':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutKycDocumentsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['kyc-documents'][':id']['$put']> },
      ) => parseResponse(client['kyc-documents'][':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostKycDocumentsIdAcceptanceKey() {
  return ['kyc-documents', '/kyc-documents/:id/acceptance', 'POST'] as const
}

export function usePostKycDocumentsIdAcceptance<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['kyc-documents'][':id']['acceptance']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['kyc-documents'][':id']['acceptance']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostKycDocumentsIdAcceptanceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['kyc-documents'][':id']['acceptance']['$post']>
        },
      ) => parseResponse(client['kyc-documents'][':id'].acceptance.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostKycDocumentsIdMatchesKey() {
  return ['kyc-documents', '/kyc-documents/:id/matches', 'POST'] as const
}

export function usePostKycDocumentsIdMatches<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['kyc-documents'][':id']['matches']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client)['kyc-documents'][':id']['matches']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostKycDocumentsIdMatchesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['kyc-documents'][':id']['matches']['$post']> },
      ) => parseResponse(client['kyc-documents'][':id'].matches.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostKycDocumentsIdRejectionKey() {
  return ['kyc-documents', '/kyc-documents/:id/rejection', 'POST'] as const
}

export function usePostKycDocumentsIdRejection<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['kyc-documents'][':id']['rejection']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['kyc-documents'][':id']['rejection']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostKycDocumentsIdRejectionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['kyc-documents'][':id']['rejection']['$post']> },
      ) => parseResponse(client['kyc-documents'][':id'].rejection.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostKycDocumentsIdReviewKey() {
  return ['kyc-documents', '/kyc-documents/:id/review', 'POST'] as const
}

export function usePostKycDocumentsIdReview<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['kyc-documents'][':id']['review']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['kyc-documents'][':id']['review']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostKycDocumentsIdReviewKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['kyc-documents'][':id']['review']['$post']> },
      ) => parseResponse(client['kyc-documents'][':id'].review.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetKycRequestsKey(
  args: InferRequestType<(typeof client)['kyc-requests']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['kyc-requests', '/kyc-requests', keyArgs] as const
}

export function useGetKycRequests<TError = unknown>(
  args: InferRequestType<(typeof client)['kyc-requests']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['kyc-requests']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetKycRequestsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['kyc-requests']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['kyc-requests'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetKycRequests<TError = unknown>(
  args: InferRequestType<(typeof client)['kyc-requests']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['kyc-requests']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetKycRequestsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['kyc-requests']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['kyc-requests'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostKycRequestsKey() {
  return ['kyc-requests', '/kyc-requests', 'POST'] as const
}

export function usePostKycRequests<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['kyc-requests']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['kyc-requests']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostKycRequestsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['kyc-requests']['$post']> },
      ) => parseResponse(client['kyc-requests'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetKycRequestsIdKey(
  args: InferRequestType<(typeof client)['kyc-requests'][':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['kyc-requests', '/kyc-requests/:id', keyArgs] as const
}

export function useGetKycRequestsId<TError = unknown>(
  args: InferRequestType<(typeof client)['kyc-requests'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['kyc-requests'][':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetKycRequestsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['kyc-requests'][':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['kyc-requests'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetKycRequestsId<TError = unknown>(
  args: InferRequestType<(typeof client)['kyc-requests'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['kyc-requests'][':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetKycRequestsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['kyc-requests'][':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['kyc-requests'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteKycRequestsIdKey() {
  return ['kyc-requests', '/kyc-requests/:id', 'DELETE'] as const
}

export function useDeleteKycRequestsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['kyc-requests'][':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client)['kyc-requests'][':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteKycRequestsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['kyc-requests'][':id']['$delete']> },
      ) => parseResponse(client['kyc-requests'][':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchKycRequestsIdKey() {
  return ['kyc-requests', '/kyc-requests/:id', 'PATCH'] as const
}

export function usePatchKycRequestsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['kyc-requests'][':id']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['kyc-requests'][':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchKycRequestsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['kyc-requests'][':id']['$patch']> },
      ) => parseResponse(client['kyc-requests'][':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPasswordTokensKey(
  args: InferRequestType<(typeof client)['password-tokens']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['password-tokens', '/password-tokens', keyArgs] as const
}

export function useGetPasswordTokens<TError = unknown>(
  args: InferRequestType<(typeof client)['password-tokens']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['password-tokens']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetPasswordTokensKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['password-tokens']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['password-tokens'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPasswordTokens<TError = unknown>(
  args: InferRequestType<(typeof client)['password-tokens']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['password-tokens']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetPasswordTokensKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['password-tokens']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['password-tokens'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostPasswordTokensKey() {
  return ['password-tokens', '/password-tokens', 'POST'] as const
}

export function usePostPasswordTokens<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['password-tokens']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['password-tokens']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPasswordTokensKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['password-tokens']['$post']> },
      ) => parseResponse(client['password-tokens'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPasswordTokensIdKey(
  args: InferRequestType<(typeof client)['password-tokens'][':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['password-tokens', '/password-tokens/:id', keyArgs] as const
}

export function useGetPasswordTokensId<TError = unknown>(
  args: InferRequestType<(typeof client)['password-tokens'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['password-tokens'][':id']['$get']>>
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
        ? getGetPasswordTokensIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['password-tokens'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['password-tokens'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPasswordTokensId<TError = unknown>(
  args: InferRequestType<(typeof client)['password-tokens'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['password-tokens'][':id']['$get']>>
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
        ? getGetPasswordTokensIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['password-tokens'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['password-tokens'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeletePasswordTokensIdKey() {
  return ['password-tokens', '/password-tokens/:id', 'DELETE'] as const
}

export function useDeletePasswordTokensId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['password-tokens'][':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client)['password-tokens'][':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeletePasswordTokensIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['password-tokens'][':id']['$delete']> },
      ) => parseResponse(client['password-tokens'][':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPaymentCardsKey(
  args: InferRequestType<(typeof client)['payment-cards']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['payment-cards', '/payment-cards', keyArgs] as const
}

export function useGetPaymentCards<TError = unknown>(
  args: InferRequestType<(typeof client)['payment-cards']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['payment-cards']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetPaymentCardsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['payment-cards']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['payment-cards'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPaymentCards<TError = unknown>(
  args: InferRequestType<(typeof client)['payment-cards']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['payment-cards']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetPaymentCardsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['payment-cards']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['payment-cards'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostPaymentCardsKey() {
  return ['payment-cards', '/payment-cards', 'POST'] as const
}

export function usePostPaymentCards<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['payment-cards']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['payment-cards']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPaymentCardsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['payment-cards']['$post']> },
      ) => parseResponse(client['payment-cards'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPaymentCardsIdKey(
  args: InferRequestType<(typeof client)['payment-cards'][':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['payment-cards', '/payment-cards/:id', keyArgs] as const
}

export function useGetPaymentCardsId<TError = unknown>(
  args: InferRequestType<(typeof client)['payment-cards'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['payment-cards'][':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetPaymentCardsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['payment-cards'][':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['payment-cards'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPaymentCardsId<TError = unknown>(
  args: InferRequestType<(typeof client)['payment-cards'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['payment-cards'][':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetPaymentCardsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['payment-cards'][':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['payment-cards'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutPaymentCardsIdKey() {
  return ['payment-cards', '/payment-cards/:id', 'PUT'] as const
}

export function usePutPaymentCardsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['payment-cards'][':id']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['payment-cards'][':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutPaymentCardsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['payment-cards'][':id']['$put']> },
      ) => parseResponse(client['payment-cards'][':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchPaymentCardsIdKey() {
  return ['payment-cards', '/payment-cards/:id', 'PATCH'] as const
}

export function usePatchPaymentCardsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['payment-cards'][':id']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['payment-cards'][':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchPaymentCardsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['payment-cards'][':id']['$patch']> },
      ) => parseResponse(client['payment-cards'][':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostPaymentCardsIdDeactivationKey() {
  return ['payment-cards', '/payment-cards/:id/deactivation', 'POST'] as const
}

export function usePostPaymentCardsIdDeactivation<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['payment-cards'][':id']['deactivation']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['payment-cards'][':id']['deactivation']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPaymentCardsIdDeactivationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['payment-cards'][':id']['deactivation']['$post']>
        },
      ) => parseResponse(client['payment-cards'][':id'].deactivation.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPaymentInstrumentsKey(
  args: InferRequestType<(typeof client)['payment-instruments']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['payment-instruments', '/payment-instruments', keyArgs] as const
}

export function useGetPaymentInstruments<TError = unknown>(
  args: InferRequestType<(typeof client)['payment-instruments']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['payment-instruments']['$get']>>>
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
        ? getGetPaymentInstrumentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['payment-instruments']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['payment-instruments'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPaymentInstruments<TError = unknown>(
  args: InferRequestType<(typeof client)['payment-instruments']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['payment-instruments']['$get']>>>
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
        ? getGetPaymentInstrumentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['payment-instruments']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['payment-instruments'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostPaymentInstrumentsKey() {
  return ['payment-instruments', '/payment-instruments', 'POST'] as const
}

export function usePostPaymentInstruments<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['payment-instruments']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['payment-instruments']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPaymentInstrumentsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['payment-instruments']['$post']> },
      ) => parseResponse(client['payment-instruments'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPaymentInstrumentsIdKey(
  args: InferRequestType<(typeof client)['payment-instruments'][':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['payment-instruments', '/payment-instruments/:id', keyArgs] as const
}

export function useGetPaymentInstrumentsId<TError = unknown>(
  args: InferRequestType<(typeof client)['payment-instruments'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['payment-instruments'][':id']['$get']>>
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
        ? getGetPaymentInstrumentsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['payment-instruments'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['payment-instruments'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPaymentInstrumentsId<TError = unknown>(
  args: InferRequestType<(typeof client)['payment-instruments'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['payment-instruments'][':id']['$get']>>
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
        ? getGetPaymentInstrumentsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['payment-instruments'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['payment-instruments'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchPaymentInstrumentsIdKey() {
  return ['payment-instruments', '/payment-instruments/:id', 'PATCH'] as const
}

export function usePatchPaymentInstrumentsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['payment-instruments'][':id']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['payment-instruments'][':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchPaymentInstrumentsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['payment-instruments'][':id']['$patch']> },
      ) => parseResponse(client['payment-instruments'][':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostPaymentInstrumentsIdDeactivationKey() {
  return ['payment-instruments', '/payment-instruments/:id/deactivation', 'POST'] as const
}

export function usePostPaymentInstrumentsIdDeactivation<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['payment-instruments'][':id']['deactivation']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['payment-instruments'][':id']['deactivation']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPaymentInstrumentsIdDeactivationKey()
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
            (typeof client)['payment-instruments'][':id']['deactivation']['$post']
          >
        },
      ) =>
        parseResponse(client['payment-instruments'][':id'].deactivation.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostPayoutsKey() {
  return ['payouts', '/payouts', 'POST'] as const
}

export function usePostPayouts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.payouts.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.payouts.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPayoutsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.payouts.$post> }) =>
        parseResponse(client.payouts.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPaypalAccountsKey(
  args: InferRequestType<(typeof client)['paypal-accounts']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['paypal-accounts', '/paypal-accounts', keyArgs] as const
}

export function useGetPaypalAccounts<TError = unknown>(
  args: InferRequestType<(typeof client)['paypal-accounts']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['paypal-accounts']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetPaypalAccountsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['paypal-accounts']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['paypal-accounts'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPaypalAccounts<TError = unknown>(
  args: InferRequestType<(typeof client)['paypal-accounts']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['paypal-accounts']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetPaypalAccountsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['paypal-accounts']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['paypal-accounts'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostPaypalAccountsKey() {
  return ['paypal-accounts', '/paypal-accounts', 'POST'] as const
}

export function usePostPaypalAccounts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['paypal-accounts']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['paypal-accounts']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPaypalAccountsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['paypal-accounts']['$post']> },
      ) => parseResponse(client['paypal-accounts'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPaypalAccountsIdKey(
  args: InferRequestType<(typeof client)['paypal-accounts'][':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['paypal-accounts', '/paypal-accounts/:id', keyArgs] as const
}

export function useGetPaypalAccountsId<TError = unknown>(
  args: InferRequestType<(typeof client)['paypal-accounts'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['paypal-accounts'][':id']['$get']>>
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
        ? getGetPaypalAccountsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['paypal-accounts'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['paypal-accounts'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPaypalAccountsId<TError = unknown>(
  args: InferRequestType<(typeof client)['paypal-accounts'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['paypal-accounts'][':id']['$get']>>
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
        ? getGetPaypalAccountsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['paypal-accounts'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['paypal-accounts'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutPaypalAccountsIdKey() {
  return ['paypal-accounts', '/paypal-accounts/:id', 'PUT'] as const
}

export function usePutPaypalAccountsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['paypal-accounts'][':id']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['paypal-accounts'][':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutPaypalAccountsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['paypal-accounts'][':id']['$put']> },
      ) => parseResponse(client['paypal-accounts'][':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostPaypalAccountsIdDeactivationKey() {
  return ['paypal-accounts', '/paypal-accounts/:id/deactivation', 'POST'] as const
}

export function usePostPaypalAccountsIdDeactivation<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['paypal-accounts'][':id']['deactivation']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['paypal-accounts'][':id']['deactivation']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPaypalAccountsIdDeactivationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['paypal-accounts'][':id']['deactivation']['$post']>
        },
      ) => parseResponse(client['paypal-accounts'][':id'].deactivation.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPlansKey(args: InferRequestType<typeof client.plans.$get>) {
  const { header: _, ...keyArgs } = args
  return ['plans', '/plans', keyArgs] as const
}

export function useGetPlans<TError = unknown>(
  args: InferRequestType<typeof client.plans.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.plans.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPlansKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.plans.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.plans.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetPlans<TError = unknown>(
  args: InferRequestType<typeof client.plans.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.plans.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPlansKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.plans.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.plans.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostPlansKey() {
  return ['plans', '/plans', 'POST'] as const
}

export function usePostPlans<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.plans.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.plans.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPlansKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.plans.$post> }) =>
        parseResponse(client.plans.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPlansIdKey(args: InferRequestType<(typeof client.plans)[':id']['$get']>) {
  const { header: _, ...keyArgs } = args
  return ['plans', '/plans/:id', keyArgs] as const
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

export function getPutPlansIdKey() {
  return ['plans', '/plans/:id', 'PUT'] as const
}

export function usePutPlansId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.plans)[':id']['$put']>>>>
    >,
    TError,
    Key,
    InferRequestType<(typeof client.plans)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutPlansIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client.plans)[':id']['$put']> }) =>
        parseResponse(client.plans[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeletePlansIdKey() {
  return ['plans', '/plans/:id', 'DELETE'] as const
}

export function useDeletePlansId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.plans)[':id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.plans)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeletePlansIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client.plans)[':id']['$delete']> }) =>
        parseResponse(client.plans[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetProductsKey(args: InferRequestType<typeof client.products.$get>) {
  const { header: _, ...keyArgs } = args
  return ['products', '/products', keyArgs] as const
}

export function useGetProducts<TError = unknown>(
  args: InferRequestType<typeof client.products.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.products.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetProductsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.products.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.products.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetProducts<TError = unknown>(
  args: InferRequestType<typeof client.products.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.products.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetProductsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.products.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.products.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostProductsKey() {
  return ['products', '/products', 'POST'] as const
}

export function usePostProducts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.products.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.products.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostProductsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.products.$post> }) =>
        parseResponse(client.products.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetProductsIdKey(
  args: InferRequestType<(typeof client.products)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['products', '/products/:id', keyArgs] as const
}

export function useGetProductsId<TError = unknown>(
  args: InferRequestType<(typeof client.products)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.products)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetProductsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.products)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.products[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProductsId<TError = unknown>(
  args: InferRequestType<(typeof client.products)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.products)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetProductsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.products)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.products[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutProductsIdKey() {
  return ['products', '/products/:id', 'PUT'] as const
}

export function usePutProductsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.products)[':id']['$put']>>>>
    >,
    TError,
    Key,
    InferRequestType<(typeof client.products)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutProductsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client.products)[':id']['$put']> }) =>
        parseResponse(client.products[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteProductsIdKey() {
  return ['products', '/products/:id', 'DELETE'] as const
}

export function useDeleteProductsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.products)[':id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.products)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteProductsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.products)[':id']['$delete']> },
      ) => parseResponse(client.products[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostReadyToPayKey() {
  return ['ready-to-pay', '/ready-to-pay', 'POST'] as const
}

export function usePostReadyToPay<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['ready-to-pay']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['ready-to-pay']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostReadyToPayKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['ready-to-pay']['$post']> },
      ) => parseResponse(client['ready-to-pay'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSearchKey(args: InferRequestType<typeof client.search.$get>) {
  const { header: _, ...keyArgs } = args
  return ['search', '/search', keyArgs] as const
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

export function getGetShippingZonesKey(
  args: InferRequestType<(typeof client)['shipping-zones']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['shipping-zones', '/shipping-zones', keyArgs] as const
}

export function useGetShippingZones<TError = unknown>(
  args: InferRequestType<(typeof client)['shipping-zones']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['shipping-zones']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetShippingZonesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['shipping-zones']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['shipping-zones'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetShippingZones<TError = unknown>(
  args: InferRequestType<(typeof client)['shipping-zones']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['shipping-zones']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetShippingZonesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['shipping-zones']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['shipping-zones'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostShippingZonesKey() {
  return ['shipping-zones', '/shipping-zones', 'POST'] as const
}

export function usePostShippingZones<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['shipping-zones']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['shipping-zones']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostShippingZonesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['shipping-zones']['$post']> },
      ) => parseResponse(client['shipping-zones'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetShippingZonesIdKey(
  args: InferRequestType<(typeof client)['shipping-zones'][':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['shipping-zones', '/shipping-zones/:id', keyArgs] as const
}

export function useGetShippingZonesId<TError = unknown>(
  args: InferRequestType<(typeof client)['shipping-zones'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['shipping-zones'][':id']['$get']>>
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
        ? getGetShippingZonesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['shipping-zones'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['shipping-zones'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetShippingZonesId<TError = unknown>(
  args: InferRequestType<(typeof client)['shipping-zones'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['shipping-zones'][':id']['$get']>>
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
        ? getGetShippingZonesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['shipping-zones'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['shipping-zones'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutShippingZonesIdKey() {
  return ['shipping-zones', '/shipping-zones/:id', 'PUT'] as const
}

export function usePutShippingZonesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['shipping-zones'][':id']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['shipping-zones'][':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutShippingZonesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['shipping-zones'][':id']['$put']> },
      ) => parseResponse(client['shipping-zones'][':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteShippingZonesIdKey() {
  return ['shipping-zones', '/shipping-zones/:id', 'DELETE'] as const
}

export function useDeleteShippingZonesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['shipping-zones'][':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client)['shipping-zones'][':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteShippingZonesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['shipping-zones'][':id']['$delete']> },
      ) => parseResponse(client['shipping-zones'][':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSubscriptionCancellationsKey(
  args: InferRequestType<(typeof client)['subscription-cancellations']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['subscription-cancellations', '/subscription-cancellations', keyArgs] as const
}

export function useGetSubscriptionCancellations<TError = unknown>(
  args: InferRequestType<(typeof client)['subscription-cancellations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['subscription-cancellations']['$get']>>
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
        ? getGetSubscriptionCancellationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['subscription-cancellations']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['subscription-cancellations'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSubscriptionCancellations<TError = unknown>(
  args: InferRequestType<(typeof client)['subscription-cancellations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['subscription-cancellations']['$get']>>
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
        ? getGetSubscriptionCancellationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['subscription-cancellations']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['subscription-cancellations'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSubscriptionCancellationsKey() {
  return ['subscription-cancellations', '/subscription-cancellations', 'POST'] as const
}

export function usePostSubscriptionCancellations<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['subscription-cancellations']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['subscription-cancellations']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSubscriptionCancellationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['subscription-cancellations']['$post']> },
      ) => parseResponse(client['subscription-cancellations'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSubscriptionCancellationsIdKey(
  args: InferRequestType<(typeof client)['subscription-cancellations'][':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['subscription-cancellations', '/subscription-cancellations/:id', keyArgs] as const
}

export function useGetSubscriptionCancellationsId<TError = unknown>(
  args: InferRequestType<(typeof client)['subscription-cancellations'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['subscription-cancellations'][':id']['$get']>>
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
        ? getGetSubscriptionCancellationsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['subscription-cancellations'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['subscription-cancellations'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSubscriptionCancellationsId<TError = unknown>(
  args: InferRequestType<(typeof client)['subscription-cancellations'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['subscription-cancellations'][':id']['$get']>>
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
        ? getGetSubscriptionCancellationsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['subscription-cancellations'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['subscription-cancellations'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutSubscriptionCancellationsIdKey() {
  return ['subscription-cancellations', '/subscription-cancellations/:id', 'PUT'] as const
}

export function usePutSubscriptionCancellationsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['subscription-cancellations'][':id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['subscription-cancellations'][':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutSubscriptionCancellationsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['subscription-cancellations'][':id']['$put']> },
      ) => parseResponse(client['subscription-cancellations'][':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteSubscriptionCancellationsIdKey() {
  return ['subscription-cancellations', '/subscription-cancellations/:id', 'DELETE'] as const
}

export function useDeleteSubscriptionCancellationsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['subscription-cancellations'][':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client)['subscription-cancellations'][':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteSubscriptionCancellationsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['subscription-cancellations'][':id']['$delete']>
        },
      ) => parseResponse(client['subscription-cancellations'][':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSubscriptionReactivationsKey(
  args: InferRequestType<(typeof client)['subscription-reactivations']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['subscription-reactivations', '/subscription-reactivations', keyArgs] as const
}

export function useGetSubscriptionReactivations<TError = unknown>(
  args: InferRequestType<(typeof client)['subscription-reactivations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['subscription-reactivations']['$get']>>
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
        ? getGetSubscriptionReactivationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['subscription-reactivations']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['subscription-reactivations'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSubscriptionReactivations<TError = unknown>(
  args: InferRequestType<(typeof client)['subscription-reactivations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['subscription-reactivations']['$get']>>
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
        ? getGetSubscriptionReactivationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['subscription-reactivations']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['subscription-reactivations'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSubscriptionReactivationsKey() {
  return ['subscription-reactivations', '/subscription-reactivations', 'POST'] as const
}

export function usePostSubscriptionReactivations<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['subscription-reactivations']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['subscription-reactivations']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSubscriptionReactivationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['subscription-reactivations']['$post']> },
      ) => parseResponse(client['subscription-reactivations'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSubscriptionReactivationsIdKey(
  args: InferRequestType<(typeof client)['subscription-reactivations'][':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['subscription-reactivations', '/subscription-reactivations/:id', keyArgs] as const
}

export function useGetSubscriptionReactivationsId<TError = unknown>(
  args: InferRequestType<(typeof client)['subscription-reactivations'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['subscription-reactivations'][':id']['$get']>>
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
        ? getGetSubscriptionReactivationsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['subscription-reactivations'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['subscription-reactivations'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSubscriptionReactivationsId<TError = unknown>(
  args: InferRequestType<(typeof client)['subscription-reactivations'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['subscription-reactivations'][':id']['$get']>>
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
        ? getGetSubscriptionReactivationsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['subscription-reactivations'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['subscription-reactivations'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSubscriptionsKey(args: InferRequestType<typeof client.subscriptions.$get>) {
  const { header: _, ...keyArgs } = args
  return ['subscriptions', '/subscriptions', keyArgs] as const
}

export function useGetSubscriptions<TError = unknown>(
  args: InferRequestType<typeof client.subscriptions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subscriptions.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSubscriptionsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subscriptions.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.subscriptions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSubscriptions<TError = unknown>(
  args: InferRequestType<typeof client.subscriptions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subscriptions.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSubscriptionsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subscriptions.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.subscriptions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSubscriptionsKey() {
  return ['subscriptions', '/subscriptions', 'POST'] as const
}

export function usePostSubscriptions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subscriptions.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.subscriptions.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSubscriptionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.subscriptions.$post> }) =>
        parseResponse(client.subscriptions.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSubscriptionsIdKey(
  args: InferRequestType<(typeof client.subscriptions)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['subscriptions', '/subscriptions/:id', keyArgs] as const
}

export function useGetSubscriptionsId<TError = unknown>(
  args: InferRequestType<(typeof client.subscriptions)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.subscriptions)[':id']['$get']>>>
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
        ? getGetSubscriptionsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.subscriptions)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.subscriptions[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSubscriptionsId<TError = unknown>(
  args: InferRequestType<(typeof client.subscriptions)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.subscriptions)[':id']['$get']>>>
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
        ? getGetSubscriptionsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.subscriptions)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.subscriptions[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutSubscriptionsIdKey() {
  return ['subscriptions', '/subscriptions/:id', 'PUT'] as const
}

export function usePutSubscriptionsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.subscriptions)[':id']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.subscriptions)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutSubscriptionsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.subscriptions)[':id']['$put']> },
      ) => parseResponse(client.subscriptions[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSubscriptionsIdChangeItemsKey() {
  return ['subscriptions', '/subscriptions/:id/change-items', 'POST'] as const
}

export function usePostSubscriptionsIdChangeItems<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.subscriptions)[':id']['change-items']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.subscriptions)[':id']['change-items']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSubscriptionsIdChangeItemsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.subscriptions)[':id']['change-items']['$post']> },
      ) => parseResponse(client.subscriptions[':id']['change-items'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSubscriptionsIdInterimInvoiceKey() {
  return ['subscriptions', '/subscriptions/:id/interim-invoice', 'POST'] as const
}

export function usePostSubscriptionsIdInterimInvoice<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.subscriptions)[':id']['interim-invoice']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.subscriptions)[':id']['interim-invoice']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSubscriptionsIdInterimInvoiceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.subscriptions)[':id']['interim-invoice']['$post']>
        },
      ) => parseResponse(client.subscriptions[':id']['interim-invoice'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSubscriptionsIdTimelineKey(
  args: InferRequestType<(typeof client.subscriptions)[':id']['timeline']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['subscriptions', '/subscriptions/:id/timeline', keyArgs] as const
}

export function useGetSubscriptionsIdTimeline<TError = unknown>(
  args: InferRequestType<(typeof client.subscriptions)[':id']['timeline']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.subscriptions)[':id']['timeline']['$get']>>
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
        ? getGetSubscriptionsIdTimelineKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.subscriptions)[':id']['timeline']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.subscriptions[':id'].timeline.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSubscriptionsIdTimeline<TError = unknown>(
  args: InferRequestType<(typeof client.subscriptions)[':id']['timeline']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.subscriptions)[':id']['timeline']['$get']>>
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
        ? getGetSubscriptionsIdTimelineKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.subscriptions)[':id']['timeline']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.subscriptions[':id'].timeline.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSubscriptionsIdTimelineKey() {
  return ['subscriptions', '/subscriptions/:id/timeline', 'POST'] as const
}

export function usePostSubscriptionsIdTimeline<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.subscriptions)[':id']['timeline']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.subscriptions)[':id']['timeline']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSubscriptionsIdTimelineKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.subscriptions)[':id']['timeline']['$post']> },
      ) => parseResponse(client.subscriptions[':id'].timeline.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSubscriptionsIdTimelineMessageIdKey(
  args: InferRequestType<(typeof client.subscriptions)[':id']['timeline'][':messageId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['subscriptions', '/subscriptions/:id/timeline/:messageId', keyArgs] as const
}

export function useGetSubscriptionsIdTimelineMessageId<TError = unknown>(
  args: InferRequestType<(typeof client.subscriptions)[':id']['timeline'][':messageId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.subscriptions)[':id']['timeline'][':messageId']['$get']>
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
        ? getGetSubscriptionsIdTimelineMessageIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.subscriptions)[':id']['timeline'][':messageId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.subscriptions[':id'].timeline[':messageId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSubscriptionsIdTimelineMessageId<TError = unknown>(
  args: InferRequestType<(typeof client.subscriptions)[':id']['timeline'][':messageId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.subscriptions)[':id']['timeline'][':messageId']['$get']>
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
        ? getGetSubscriptionsIdTimelineMessageIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.subscriptions)[':id']['timeline'][':messageId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.subscriptions[':id'].timeline[':messageId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteSubscriptionsIdTimelineMessageIdKey() {
  return ['subscriptions', '/subscriptions/:id/timeline/:messageId', 'DELETE'] as const
}

export function useDeleteSubscriptionsIdTimelineMessageId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.subscriptions)[':id']['timeline'][':messageId']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.subscriptions)[':id']['timeline'][':messageId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteSubscriptionsIdTimelineMessageIdKey()
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
            (typeof client.subscriptions)[':id']['timeline'][':messageId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.subscriptions[':id'].timeline[':messageId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetSubscriptionsIdUpcomingInvoicesKey(
  args: InferRequestType<(typeof client.subscriptions)[':id']['upcoming-invoices']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['subscriptions', '/subscriptions/:id/upcoming-invoices', keyArgs] as const
}

export function useGetSubscriptionsIdUpcomingInvoices<TError = unknown>(
  args: InferRequestType<(typeof client.subscriptions)[':id']['upcoming-invoices']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.subscriptions)[':id']['upcoming-invoices']['$get']>>
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
        ? getGetSubscriptionsIdUpcomingInvoicesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.subscriptions)[':id']['upcoming-invoices']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.subscriptions[':id']['upcoming-invoices'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSubscriptionsIdUpcomingInvoices<TError = unknown>(
  args: InferRequestType<(typeof client.subscriptions)[':id']['upcoming-invoices']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.subscriptions)[':id']['upcoming-invoices']['$get']>>
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
        ? getGetSubscriptionsIdUpcomingInvoicesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.subscriptions)[':id']['upcoming-invoices']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.subscriptions[':id']['upcoming-invoices'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSubscriptionsIdUpcomingInvoicesInvoiceIdIssueKey() {
  return ['subscriptions', '/subscriptions/:id/upcoming-invoices/:invoiceId/issue', 'POST'] as const
}

export function usePostSubscriptionsIdUpcomingInvoicesInvoiceIdIssue<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.subscriptions)[':id']['upcoming-invoices'][':invoiceId']['issue']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.subscriptions)[':id']['upcoming-invoices'][':invoiceId']['issue']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSubscriptionsIdUpcomingInvoicesInvoiceIdIssueKey()
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
            (typeof client.subscriptions)[':id']['upcoming-invoices'][':invoiceId']['issue']['$post']
          >
        },
      ) =>
        parseResponse(
          client.subscriptions[':id']['upcoming-invoices'][':invoiceId'].issue.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetTagsKey(args: InferRequestType<typeof client.tags.$get>) {
  const { header: _, ...keyArgs } = args
  return ['tags', '/tags', keyArgs] as const
}

export function useGetTags<TError = unknown>(
  args: InferRequestType<typeof client.tags.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tags.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTagsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tags.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.tags.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetTags<TError = unknown>(
  args: InferRequestType<typeof client.tags.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tags.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTagsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tags.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.tags.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostTagsKey() {
  return ['tags', '/tags', 'POST'] as const
}

export function usePostTags<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tags.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.tags.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTagsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.tags.$post> }) =>
        parseResponse(client.tags.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTagsTagKey(args: InferRequestType<(typeof client.tags)[':tag']['$get']>) {
  const { header: _, ...keyArgs } = args
  return ['tags', '/tags/:tag', keyArgs] as const
}

export function useGetTagsTag<TError = unknown>(
  args: InferRequestType<(typeof client.tags)[':tag']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':tag']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTagsTagKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':tag']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tags[':tag'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTagsTag<TError = unknown>(
  args: InferRequestType<(typeof client.tags)[':tag']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':tag']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTagsTagKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':tag']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tags[':tag'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteTagsTagKey() {
  return ['tags', '/tags/:tag', 'DELETE'] as const
}

export function useDeleteTagsTag<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':tag']['$delete']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.tags)[':tag']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteTagsTagKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client.tags)[':tag']['$delete']> }) =>
        parseResponse(client.tags[':tag'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchTagsTagKey() {
  return ['tags', '/tags/:tag', 'PATCH'] as const
}

export function usePatchTagsTag<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':tag']['$patch']>>>>
    >,
    TError,
    Key,
    InferRequestType<(typeof client.tags)[':tag']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchTagsTagKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client.tags)[':tag']['$patch']> }) =>
        parseResponse(client.tags[':tag'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostTagsTagCustomersKey() {
  return ['tags', '/tags/:tag/customers', 'POST'] as const
}

export function usePostTagsTagCustomers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tags)[':tag']['customers']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.tags)[':tag']['customers']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTagsTagCustomersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.tags)[':tag']['customers']['$post']> },
      ) => parseResponse(client.tags[':tag'].customers.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteTagsTagCustomersKey() {
  return ['tags', '/tags/:tag/customers', 'DELETE'] as const
}

export function useDeleteTagsTagCustomers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tags)[':tag']['customers']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.tags)[':tag']['customers']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteTagsTagCustomersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.tags)[':tag']['customers']['$delete']> },
      ) => parseResponse(client.tags[':tag'].customers.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostTagsTagCustomersCustomerIdKey() {
  return ['tags', '/tags/:tag/customers/:customerId', 'POST'] as const
}

export function usePostTagsTagCustomersCustomerId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tags)[':tag']['customers'][':customerId']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.tags)[':tag']['customers'][':customerId']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTagsTagCustomersCustomerIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.tags)[':tag']['customers'][':customerId']['$post']>
        },
      ) => parseResponse(client.tags[':tag'].customers[':customerId'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteTagsTagCustomersCustomerIdKey() {
  return ['tags', '/tags/:tag/customers/:customerId', 'DELETE'] as const
}

export function useDeleteTagsTagCustomersCustomerId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tags)[':tag']['customers'][':customerId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.tags)[':tag']['customers'][':customerId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteTagsTagCustomersCustomerIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.tags)[':tag']['customers'][':customerId']['$delete']>
        },
      ) => parseResponse(client.tags[':tag'].customers[':customerId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTokensKey(args: InferRequestType<typeof client.tokens.$get>) {
  const { header: _, ...keyArgs } = args
  return ['tokens', '/tokens', keyArgs] as const
}

export function useGetTokens<TError = unknown>(
  args: InferRequestType<typeof client.tokens.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tokens.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTokensKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tokens.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.tokens.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetTokens<TError = unknown>(
  args: InferRequestType<typeof client.tokens.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tokens.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTokensKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tokens.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.tokens.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostTokensKey() {
  return ['tokens', '/tokens', 'POST'] as const
}

export function usePostTokens<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tokens.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.tokens.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTokensKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.tokens.$post> }) =>
        parseResponse(client.tokens.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTokensTokenKey(
  args: InferRequestType<(typeof client.tokens)[':token']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['tokens', '/tokens/:token', keyArgs] as const
}

export function useGetTokensToken<TError = unknown>(
  args: InferRequestType<(typeof client.tokens)[':token']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tokens)[':token']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetTokensTokenKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tokens)[':token']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tokens[':token'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTokensToken<TError = unknown>(
  args: InferRequestType<(typeof client.tokens)[':token']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tokens)[':token']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetTokensTokenKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tokens)[':token']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tokens[':token'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTransactionsKey(args: InferRequestType<typeof client.transactions.$get>) {
  const { header: _, ...keyArgs } = args
  return ['transactions', '/transactions', keyArgs] as const
}

export function useGetTransactions<TError = unknown>(
  args: InferRequestType<typeof client.transactions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.transactions.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTransactionsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.transactions.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.transactions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTransactions<TError = unknown>(
  args: InferRequestType<typeof client.transactions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.transactions.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTransactionsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.transactions.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.transactions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostTransactionsKey() {
  return ['transactions', '/transactions', 'POST'] as const
}

export function usePostTransactions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.transactions.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.transactions.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTransactionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.transactions.$post> }) =>
        parseResponse(client.transactions.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTransactionsIdKey(
  args: InferRequestType<(typeof client.transactions)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['transactions', '/transactions/:id', keyArgs] as const
}

export function useGetTransactionsId<TError = unknown>(
  args: InferRequestType<(typeof client.transactions)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.transactions)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetTransactionsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.transactions)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.transactions[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTransactionsId<TError = unknown>(
  args: InferRequestType<(typeof client.transactions)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.transactions)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetTransactionsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.transactions)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.transactions[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchTransactionsIdKey() {
  return ['transactions', '/transactions/:id', 'PATCH'] as const
}

export function usePatchTransactionsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.transactions)[':id']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.transactions)[':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchTransactionsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.transactions)[':id']['$patch']> },
      ) => parseResponse(client.transactions[':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostTransactionsIdQueryKey() {
  return ['transactions', '/transactions/:id/query', 'POST'] as const
}

export function usePostTransactionsIdQuery<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.transactions)[':id']['query']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.transactions)[':id']['query']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTransactionsIdQueryKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.transactions)[':id']['query']['$post']> },
      ) => parseResponse(client.transactions[':id'].query.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostTransactionsIdRefundKey() {
  return ['transactions', '/transactions/:id/refund', 'POST'] as const
}

export function usePostTransactionsIdRefund<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.transactions)[':id']['refund']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.transactions)[':id']['refund']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTransactionsIdRefundKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.transactions)[':id']['refund']['$post']> },
      ) => parseResponse(client.transactions[':id'].refund.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTransactionsIdTimelineKey(
  args: InferRequestType<(typeof client.transactions)[':id']['timeline']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['transactions', '/transactions/:id/timeline', keyArgs] as const
}

export function useGetTransactionsIdTimeline<TError = unknown>(
  args: InferRequestType<(typeof client.transactions)[':id']['timeline']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.transactions)[':id']['timeline']['$get']>>
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
        ? getGetTransactionsIdTimelineKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.transactions)[':id']['timeline']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.transactions[':id'].timeline.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTransactionsIdTimeline<TError = unknown>(
  args: InferRequestType<(typeof client.transactions)[':id']['timeline']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.transactions)[':id']['timeline']['$get']>>
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
        ? getGetTransactionsIdTimelineKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.transactions)[':id']['timeline']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.transactions[':id'].timeline.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostTransactionsIdTimelineKey() {
  return ['transactions', '/transactions/:id/timeline', 'POST'] as const
}

export function usePostTransactionsIdTimeline<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.transactions)[':id']['timeline']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.transactions)[':id']['timeline']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTransactionsIdTimelineKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.transactions)[':id']['timeline']['$post']> },
      ) => parseResponse(client.transactions[':id'].timeline.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTransactionsIdTimelineMessageIdKey(
  args: InferRequestType<(typeof client.transactions)[':id']['timeline'][':messageId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['transactions', '/transactions/:id/timeline/:messageId', keyArgs] as const
}

export function useGetTransactionsIdTimelineMessageId<TError = unknown>(
  args: InferRequestType<(typeof client.transactions)[':id']['timeline'][':messageId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.transactions)[':id']['timeline'][':messageId']['$get']>
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
        ? getGetTransactionsIdTimelineMessageIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.transactions)[':id']['timeline'][':messageId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.transactions[':id'].timeline[':messageId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTransactionsIdTimelineMessageId<TError = unknown>(
  args: InferRequestType<(typeof client.transactions)[':id']['timeline'][':messageId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.transactions)[':id']['timeline'][':messageId']['$get']>
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
        ? getGetTransactionsIdTimelineMessageIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.transactions)[':id']['timeline'][':messageId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.transactions[':id'].timeline[':messageId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteTransactionsIdTimelineMessageIdKey() {
  return ['transactions', '/transactions/:id/timeline/:messageId', 'DELETE'] as const
}

export function useDeleteTransactionsIdTimelineMessageId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.transactions)[':id']['timeline'][':messageId']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.transactions)[':id']['timeline'][':messageId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteTransactionsIdTimelineMessageIdKey()
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
            (typeof client.transactions)[':id']['timeline'][':messageId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.transactions[':id'].timeline[':messageId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostTransactionsIdUpdateKey() {
  return ['transactions', '/transactions/:id/update', 'POST'] as const
}

export function usePostTransactionsIdUpdate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.transactions)[':id']['update']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.transactions)[':id']['update']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTransactionsIdUpdateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.transactions)[':id']['update']['$post']> },
      ) => parseResponse(client.transactions[':id'].update.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
