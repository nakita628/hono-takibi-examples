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

export function get3dsecureQueryKey(args: InferRequestType<(typeof client)['3dsecure']['$get']>) {
  const { header: _, ...keyArgs } = args
  return ['3dsecure', '/3dsecure', keyArgs] as const
}

export function get3dsecureQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['3dsecure']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client)['3dsecure']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['3dsecure']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof get3dsecureQueryKey>
  >({
    queryKey: get3dsecureQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['3dsecure'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function create3dsecure<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['3dsecure']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['3dsecure']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['3dsecure']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof get3dsecureQueryKey>
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
    return { ...get3dsecureQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPost3dsecureMutationKey() {
  return ['3dsecure', '/3dsecure', 'POST'] as const
}

export function getPost3dsecureMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['3dsecure']['$post']>>>>
    >,
    TError,
    InferRequestType<(typeof client)['3dsecure']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPost3dsecureMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['3dsecure']['$post']>) {
      return parseResponse(client['3dsecure'].$post(args, options))
    },
  })
}

export function createPost3dsecure<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['3dsecure']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client)['3dsecure']['$post']>,
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
    const mutationDefaults = getPost3dsecureMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function get3dsecureIdQueryKey(
  args: InferRequestType<(typeof client)['3dsecure'][':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['3dsecure', '/3dsecure/:id', keyArgs] as const
}

export function get3dsecureIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['3dsecure'][':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['3dsecure'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['3dsecure'][':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof get3dsecureIdQueryKey>
  >({
    queryKey: get3dsecureIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['3dsecure'][':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function create3dsecureId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['3dsecure'][':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['3dsecure'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['3dsecure'][':id']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof get3dsecureIdQueryKey>
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
    return { ...get3dsecureIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getAmlQueryKey(args: InferRequestType<typeof client.aml.$get>) {
  const { header: _, ...keyArgs } = args
  return ['aml', '/aml', keyArgs] as const
}

export function getAmlQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.aml.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.aml.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.aml.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAmlQueryKey>
  >({
    queryKey: getAmlQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.aml.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createAml<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.aml.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.aml.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.aml.$get>>>>>,
          TError,
          TData,
          ReturnType<typeof getAmlQueryKey>
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
    return { ...getAmlQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getAttachmentsQueryKey(args: InferRequestType<typeof client.attachments.$get>) {
  const { header: _, ...keyArgs } = args
  return ['attachments', '/attachments', keyArgs] as const
}

export function getAttachmentsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.attachments.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.attachments.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.attachments.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAttachmentsQueryKey>
  >({
    queryKey: getAttachmentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.attachments.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createAttachments<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.attachments.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.attachments.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.attachments.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getAttachmentsQueryKey>
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
    return { ...getAttachmentsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostAttachmentsMutationKey() {
  return ['attachments', '/attachments', 'POST'] as const
}

export function getPostAttachmentsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.attachments.$post>>>>>,
    TError,
    InferRequestType<typeof client.attachments.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAttachmentsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.attachments.$post>) {
      return parseResponse(client.attachments.$post(args, options))
    },
  })
}

export function createPostAttachments<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.attachments.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.attachments.$post>,
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
    const mutationDefaults = getPostAttachmentsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getAttachmentsIdQueryKey(
  args: InferRequestType<(typeof client.attachments)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['attachments', '/attachments/:id', keyArgs] as const
}

export function getAttachmentsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.attachments)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.attachments)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.attachments)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAttachmentsIdQueryKey>
  >({
    queryKey: getAttachmentsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.attachments[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createAttachmentsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.attachments)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.attachments)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.attachments)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getAttachmentsIdQueryKey>
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
    return { ...getAttachmentsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPutAttachmentsIdMutationKey() {
  return ['attachments', '/attachments/:id', 'PUT'] as const
}

export function getPutAttachmentsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.attachments)[':id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.attachments)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutAttachmentsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.attachments)[':id']['$put']>) {
      return parseResponse(client.attachments[':id'].$put(args, options))
    },
  })
}

export function createPutAttachmentsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.attachments)[':id']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.attachments)[':id']['$put']>,
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
    const mutationDefaults = getPutAttachmentsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteAttachmentsIdMutationKey() {
  return ['attachments', '/attachments/:id', 'DELETE'] as const
}

export function getDeleteAttachmentsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.attachments)[':id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.attachments)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAttachmentsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.attachments)[':id']['$delete']>) {
      return parseResponse(client.attachments[':id'].$delete(args, options))
    },
  })
}

export function createDeleteAttachmentsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.attachments)[':id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.attachments)[':id']['$delete']>,
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
    const mutationDefaults = getDeleteAttachmentsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getAuthenticationOptionsQueryKey(
  args: InferRequestType<(typeof client)['authentication-options']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['authentication-options', '/authentication-options', keyArgs] as const
}

export function getAuthenticationOptionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['authentication-options']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['authentication-options']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['authentication-options']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAuthenticationOptionsQueryKey>
  >({
    queryKey: getAuthenticationOptionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['authentication-options'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAuthenticationOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['authentication-options']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['authentication-options']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['authentication-options']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getAuthenticationOptionsQueryKey>
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
      ...getAuthenticationOptionsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutAuthenticationOptionsMutationKey() {
  return ['authentication-options', '/authentication-options', 'PUT'] as const
}

export function getPutAuthenticationOptionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['authentication-options']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['authentication-options']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutAuthenticationOptionsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['authentication-options']['$put']>) {
      return parseResponse(client['authentication-options'].$put(args, options))
    },
  })
}

export function createPutAuthenticationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['authentication-options']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['authentication-options']['$put']>,
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
    const mutationDefaults = getPutAuthenticationOptionsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getAuthenticationTokensQueryKey(
  args: InferRequestType<(typeof client)['authentication-tokens']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['authentication-tokens', '/authentication-tokens', keyArgs] as const
}

export function getAuthenticationTokensQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['authentication-tokens']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['authentication-tokens']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['authentication-tokens']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAuthenticationTokensQueryKey>
  >({
    queryKey: getAuthenticationTokensQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['authentication-tokens'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAuthenticationTokens<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['authentication-tokens']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['authentication-tokens']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['authentication-tokens']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getAuthenticationTokensQueryKey>
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
      ...getAuthenticationTokensQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostAuthenticationTokensMutationKey() {
  return ['authentication-tokens', '/authentication-tokens', 'POST'] as const
}

export function getPostAuthenticationTokensMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['authentication-tokens']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['authentication-tokens']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAuthenticationTokensMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['authentication-tokens']['$post']>) {
      return parseResponse(client['authentication-tokens'].$post(args, options))
    },
  })
}

export function createPostAuthenticationTokens<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['authentication-tokens']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['authentication-tokens']['$post']>,
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
    const mutationDefaults = getPostAuthenticationTokensMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getAuthenticationTokensTokenQueryKey(
  args: InferRequestType<(typeof client)['authentication-tokens'][':token']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['authentication-tokens', '/authentication-tokens/:token', keyArgs] as const
}

export function getAuthenticationTokensTokenQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['authentication-tokens'][':token']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['authentication-tokens'][':token']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['authentication-tokens'][':token']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAuthenticationTokensTokenQueryKey>
  >({
    queryKey: getAuthenticationTokensTokenQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['authentication-tokens'][':token'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAuthenticationTokensToken<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['authentication-tokens'][':token']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['authentication-tokens'][':token']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['authentication-tokens'][':token']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getAuthenticationTokensTokenQueryKey>
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
      ...getAuthenticationTokensTokenQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getDeleteAuthenticationTokensTokenMutationKey() {
  return ['authentication-tokens', '/authentication-tokens/:token', 'DELETE'] as const
}

export function getDeleteAuthenticationTokensTokenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['authentication-tokens'][':token']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client)['authentication-tokens'][':token']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAuthenticationTokensTokenMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['authentication-tokens'][':token']['$delete']>,
    ) {
      return parseResponse(client['authentication-tokens'][':token'].$delete(args, options))
    },
  })
}

export function createDeleteAuthenticationTokensToken<
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
                  Awaited<ReturnType<(typeof client)['authentication-tokens'][':token']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client)['authentication-tokens'][':token']['$delete']>,
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
    const mutationDefaults = getDeleteAuthenticationTokensTokenMutationOptions<
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

export function getPostAuthenticationTokensTokenExchangeMutationKey() {
  return ['authentication-tokens', '/authentication-tokens/:token/exchange', 'POST'] as const
}

export function getPostAuthenticationTokensTokenExchangeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['authentication-tokens'][':token']['exchange']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAuthenticationTokensTokenExchangeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['authentication-tokens'][':token']['exchange']['$post']
      >,
    ) {
      return parseResponse(client['authentication-tokens'][':token'].exchange.$post(args, options))
    },
  })
}

export function createPostAuthenticationTokensTokenExchange<
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
                    (typeof client)['authentication-tokens'][':token']['exchange']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['authentication-tokens'][':token']['exchange']['$post']>,
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
    const mutationDefaults = getPostAuthenticationTokensTokenExchangeMutationOptions<
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

export function getBankAccountsQueryKey(
  args: InferRequestType<(typeof client)['bank-accounts']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['bank-accounts', '/bank-accounts', keyArgs] as const
}

export function getBankAccountsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['bank-accounts']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['bank-accounts']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['bank-accounts']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBankAccountsQueryKey>
  >({
    queryKey: getBankAccountsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['bank-accounts'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createBankAccounts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['bank-accounts']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['bank-accounts']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['bank-accounts']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getBankAccountsQueryKey>
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
    return { ...getBankAccountsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostBankAccountsMutationKey() {
  return ['bank-accounts', '/bank-accounts', 'POST'] as const
}

export function getPostBankAccountsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['bank-accounts']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['bank-accounts']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostBankAccountsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['bank-accounts']['$post']>) {
      return parseResponse(client['bank-accounts'].$post(args, options))
    },
  })
}

export function createPostBankAccounts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['bank-accounts']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client)['bank-accounts']['$post']>,
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
    const mutationDefaults = getPostBankAccountsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getBankAccountsIdQueryKey(
  args: InferRequestType<(typeof client)['bank-accounts'][':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['bank-accounts', '/bank-accounts/:id', keyArgs] as const
}

export function getBankAccountsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['bank-accounts'][':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['bank-accounts'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['bank-accounts'][':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBankAccountsIdQueryKey>
  >({
    queryKey: getBankAccountsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['bank-accounts'][':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createBankAccountsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['bank-accounts'][':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['bank-accounts'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['bank-accounts'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getBankAccountsIdQueryKey>
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
    return { ...getBankAccountsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPutBankAccountsIdMutationKey() {
  return ['bank-accounts', '/bank-accounts/:id', 'PUT'] as const
}

export function getPutBankAccountsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['bank-accounts'][':id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['bank-accounts'][':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutBankAccountsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['bank-accounts'][':id']['$put']>) {
      return parseResponse(client['bank-accounts'][':id'].$put(args, options))
    },
  })
}

export function createPutBankAccountsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['bank-accounts'][':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['bank-accounts'][':id']['$put']>,
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
    const mutationDefaults = getPutBankAccountsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPatchBankAccountsIdMutationKey() {
  return ['bank-accounts', '/bank-accounts/:id', 'PATCH'] as const
}

export function getPatchBankAccountsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['bank-accounts'][':id']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['bank-accounts'][':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchBankAccountsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['bank-accounts'][':id']['$patch']>) {
      return parseResponse(client['bank-accounts'][':id'].$patch(args, options))
    },
  })
}

export function createPatchBankAccountsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['bank-accounts'][':id']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['bank-accounts'][':id']['$patch']>,
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
    const mutationDefaults = getPatchBankAccountsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostBankAccountsIdDeactivationMutationKey() {
  return ['bank-accounts', '/bank-accounts/:id/deactivation', 'POST'] as const
}

export function getPostBankAccountsIdDeactivationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['bank-accounts'][':id']['deactivation']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['bank-accounts'][':id']['deactivation']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostBankAccountsIdDeactivationMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['bank-accounts'][':id']['deactivation']['$post']>,
    ) {
      return parseResponse(client['bank-accounts'][':id'].deactivation.$post(args, options))
    },
  })
}

export function createPostBankAccountsIdDeactivation<
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
                  ReturnType<(typeof client)['bank-accounts'][':id']['deactivation']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['bank-accounts'][':id']['deactivation']['$post']>,
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
    const mutationDefaults = getPostBankAccountsIdDeactivationMutationOptions<
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

export function getBlocklistsQueryKey(args: InferRequestType<typeof client.blocklists.$get>) {
  const { header: _, ...keyArgs } = args
  return ['blocklists', '/blocklists', keyArgs] as const
}

export function getBlocklistsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.blocklists.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.blocklists.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.blocklists.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getBlocklistsQueryKey>
  >({
    queryKey: getBlocklistsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.blocklists.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createBlocklists<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.blocklists.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.blocklists.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.blocklists.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getBlocklistsQueryKey>
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
    return { ...getBlocklistsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostBlocklistsMutationKey() {
  return ['blocklists', '/blocklists', 'POST'] as const
}

export function getPostBlocklistsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.blocklists.$post>>>>>,
    TError,
    InferRequestType<typeof client.blocklists.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostBlocklistsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.blocklists.$post>) {
      return parseResponse(client.blocklists.$post(args, options))
    },
  })
}

export function createPostBlocklists<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.blocklists.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.blocklists.$post>,
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
    const mutationDefaults = getPostBlocklistsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getBlocklistsIdQueryKey(
  args: InferRequestType<(typeof client.blocklists)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['blocklists', '/blocklists/:id', keyArgs] as const
}

export function getBlocklistsIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.blocklists)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.blocklists)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.blocklists)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBlocklistsIdQueryKey>
  >({
    queryKey: getBlocklistsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.blocklists[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createBlocklistsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.blocklists)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.blocklists)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.blocklists)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getBlocklistsIdQueryKey>
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
    return { ...getBlocklistsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPutBlocklistsIdMutationKey() {
  return ['blocklists', '/blocklists/:id', 'PUT'] as const
}

export function getPutBlocklistsIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.blocklists)[':id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.blocklists)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutBlocklistsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.blocklists)[':id']['$put']>) {
      return parseResponse(client.blocklists[':id'].$put(args, options))
    },
  })
}

export function createPutBlocklistsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.blocklists)[':id']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.blocklists)[':id']['$put']>,
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
    const mutationDefaults = getPutBlocklistsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteBlocklistsIdMutationKey() {
  return ['blocklists', '/blocklists/:id', 'DELETE'] as const
}

export function getDeleteBlocklistsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.blocklists)[':id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.blocklists)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteBlocklistsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.blocklists)[':id']['$delete']>) {
      return parseResponse(client.blocklists[':id'].$delete(args, options))
    },
  })
}

export function createDeleteBlocklistsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.blocklists)[':id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.blocklists)[':id']['$delete']>,
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
    const mutationDefaults = getDeleteBlocklistsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getCouponsQueryKey(args: InferRequestType<typeof client.coupons.$get>) {
  const { header: _, ...keyArgs } = args
  return ['coupons', '/coupons', keyArgs] as const
}

export function getCouponsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.coupons.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.coupons.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.coupons.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getCouponsQueryKey>
  >({
    queryKey: getCouponsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.coupons.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createCoupons<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.coupons.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.coupons.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.coupons.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getCouponsQueryKey>
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
    return { ...getCouponsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostCouponsMutationKey() {
  return ['coupons', '/coupons', 'POST'] as const
}

export function getPostCouponsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.coupons.$post>>>>>,
    TError,
    InferRequestType<typeof client.coupons.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCouponsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.coupons.$post>) {
      return parseResponse(client.coupons.$post(args, options))
    },
  })
}

export function createPostCoupons<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.coupons.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.coupons.$post>,
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
    const mutationDefaults = getPostCouponsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getCouponsRedemptionsQueryKey(
  args: InferRequestType<(typeof client)['coupons-redemptions']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['coupons-redemptions', '/coupons-redemptions', keyArgs] as const
}

export function getCouponsRedemptionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['coupons-redemptions']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['coupons-redemptions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['coupons-redemptions']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCouponsRedemptionsQueryKey>
  >({
    queryKey: getCouponsRedemptionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['coupons-redemptions'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCouponsRedemptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['coupons-redemptions']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['coupons-redemptions']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['coupons-redemptions']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getCouponsRedemptionsQueryKey>
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
    return { ...getCouponsRedemptionsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostCouponsRedemptionsMutationKey() {
  return ['coupons-redemptions', '/coupons-redemptions', 'POST'] as const
}

export function getPostCouponsRedemptionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['coupons-redemptions']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['coupons-redemptions']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCouponsRedemptionsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['coupons-redemptions']['$post']>) {
      return parseResponse(client['coupons-redemptions'].$post(args, options))
    },
  })
}

export function createPostCouponsRedemptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['coupons-redemptions']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['coupons-redemptions']['$post']>,
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
    const mutationDefaults = getPostCouponsRedemptionsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getCouponsRedemptionsIdQueryKey(
  args: InferRequestType<(typeof client)['coupons-redemptions'][':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['coupons-redemptions', '/coupons-redemptions/:id', keyArgs] as const
}

export function getCouponsRedemptionsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['coupons-redemptions'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['coupons-redemptions'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['coupons-redemptions'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCouponsRedemptionsIdQueryKey>
  >({
    queryKey: getCouponsRedemptionsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['coupons-redemptions'][':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCouponsRedemptionsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['coupons-redemptions'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['coupons-redemptions'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['coupons-redemptions'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getCouponsRedemptionsIdQueryKey>
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
      ...getCouponsRedemptionsIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostCouponsRedemptionsIdCancelMutationKey() {
  return ['coupons-redemptions', '/coupons-redemptions/:id/cancel', 'POST'] as const
}

export function getPostCouponsRedemptionsIdCancelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['coupons-redemptions'][':id']['cancel']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['coupons-redemptions'][':id']['cancel']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCouponsRedemptionsIdCancelMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['coupons-redemptions'][':id']['cancel']['$post']>,
    ) {
      return parseResponse(client['coupons-redemptions'][':id'].cancel.$post(args, options))
    },
  })
}

export function createPostCouponsRedemptionsIdCancel<
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
                  ReturnType<(typeof client)['coupons-redemptions'][':id']['cancel']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['coupons-redemptions'][':id']['cancel']['$post']>,
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
    const mutationDefaults = getPostCouponsRedemptionsIdCancelMutationOptions<
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

export function getCouponsIdQueryKey(
  args: InferRequestType<(typeof client.coupons)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['coupons', '/coupons/:id', keyArgs] as const
}

export function getCouponsIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.coupons)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.coupons)[':id']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.coupons)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getCouponsIdQueryKey>
  >({
    queryKey: getCouponsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.coupons[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createCouponsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.coupons)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.coupons)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.coupons)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getCouponsIdQueryKey>
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
    return { ...getCouponsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPutCouponsIdMutationKey() {
  return ['coupons', '/coupons/:id', 'PUT'] as const
}

export function getPutCouponsIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.coupons)[':id']['$put']>>>>
    >,
    TError,
    InferRequestType<(typeof client.coupons)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutCouponsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.coupons)[':id']['$put']>) {
      return parseResponse(client.coupons[':id'].$put(args, options))
    },
  })
}

export function createPutCouponsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.coupons)[':id']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.coupons)[':id']['$put']>,
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
    const mutationDefaults = getPutCouponsIdMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostCouponsIdExpirationMutationKey() {
  return ['coupons', '/coupons/:id/expiration', 'POST'] as const
}

export function getPostCouponsIdExpirationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.coupons)[':id']['expiration']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.coupons)[':id']['expiration']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCouponsIdExpirationMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.coupons)[':id']['expiration']['$post']>,
    ) {
      return parseResponse(client.coupons[':id'].expiration.$post(args, options))
    },
  })
}

export function createPostCouponsIdExpiration<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.coupons)[':id']['expiration']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.coupons)[':id']['expiration']['$post']>,
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
    const mutationDefaults = getPostCouponsIdExpirationMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getCredentialsQueryKey(args: InferRequestType<typeof client.credentials.$get>) {
  const { header: _, ...keyArgs } = args
  return ['credentials', '/credentials', keyArgs] as const
}

export function getCredentialsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.credentials.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.credentials.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.credentials.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getCredentialsQueryKey>
  >({
    queryKey: getCredentialsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.credentials.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createCredentials<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.credentials.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.credentials.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.credentials.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getCredentialsQueryKey>
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
    return { ...getCredentialsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostCredentialsMutationKey() {
  return ['credentials', '/credentials', 'POST'] as const
}

export function getPostCredentialsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.credentials.$post>>>>>,
    TError,
    InferRequestType<typeof client.credentials.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCredentialsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.credentials.$post>) {
      return parseResponse(client.credentials.$post(args, options))
    },
  })
}

export function createPostCredentials<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.credentials.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.credentials.$post>,
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
    const mutationDefaults = getPostCredentialsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getCredentialsIdQueryKey(
  args: InferRequestType<(typeof client.credentials)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['credentials', '/credentials/:id', keyArgs] as const
}

export function getCredentialsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.credentials)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.credentials)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.credentials)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCredentialsIdQueryKey>
  >({
    queryKey: getCredentialsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.credentials[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createCredentialsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.credentials)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.credentials)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.credentials)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getCredentialsIdQueryKey>
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
    return { ...getCredentialsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPutCredentialsIdMutationKey() {
  return ['credentials', '/credentials/:id', 'PUT'] as const
}

export function getPutCredentialsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.credentials)[':id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.credentials)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutCredentialsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.credentials)[':id']['$put']>) {
      return parseResponse(client.credentials[':id'].$put(args, options))
    },
  })
}

export function createPutCredentialsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.credentials)[':id']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.credentials)[':id']['$put']>,
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
    const mutationDefaults = getPutCredentialsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteCredentialsIdMutationKey() {
  return ['credentials', '/credentials/:id', 'DELETE'] as const
}

export function getDeleteCredentialsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.credentials)[':id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.credentials)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteCredentialsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.credentials)[':id']['$delete']>) {
      return parseResponse(client.credentials[':id'].$delete(args, options))
    },
  })
}

export function createDeleteCredentialsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.credentials)[':id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.credentials)[':id']['$delete']>,
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
    const mutationDefaults = getDeleteCredentialsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getCustomFieldsResourceQueryKey(
  args: InferRequestType<(typeof client)['custom-fields'][':resource']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['custom-fields', '/custom-fields/:resource', keyArgs] as const
}

export function getCustomFieldsResourceQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['custom-fields'][':resource']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['custom-fields'][':resource']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['custom-fields'][':resource']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCustomFieldsResourceQueryKey>
  >({
    queryKey: getCustomFieldsResourceQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['custom-fields'][':resource'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCustomFieldsResource<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['custom-fields'][':resource']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['custom-fields'][':resource']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['custom-fields'][':resource']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getCustomFieldsResourceQueryKey>
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
      ...getCustomFieldsResourceQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getCustomFieldsResourceNameQueryKey(
  args: InferRequestType<(typeof client)['custom-fields'][':resource'][':name']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['custom-fields', '/custom-fields/:resource/:name', keyArgs] as const
}

export function getCustomFieldsResourceNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['custom-fields'][':resource'][':name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['custom-fields'][':resource'][':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['custom-fields'][':resource'][':name']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCustomFieldsResourceNameQueryKey>
  >({
    queryKey: getCustomFieldsResourceNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['custom-fields'][':resource'][':name'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCustomFieldsResourceName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['custom-fields'][':resource'][':name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['custom-fields'][':resource'][':name']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['custom-fields'][':resource'][':name']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getCustomFieldsResourceNameQueryKey>
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
      ...getCustomFieldsResourceNameQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutCustomFieldsResourceNameMutationKey() {
  return ['custom-fields', '/custom-fields/:resource/:name', 'PUT'] as const
}

export function getPutCustomFieldsResourceNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['custom-fields'][':resource'][':name']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['custom-fields'][':resource'][':name']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutCustomFieldsResourceNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['custom-fields'][':resource'][':name']['$put']>,
    ) {
      return parseResponse(client['custom-fields'][':resource'][':name'].$put(args, options))
    },
  })
}

export function createPutCustomFieldsResourceName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['custom-fields'][':resource'][':name']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['custom-fields'][':resource'][':name']['$put']>,
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
    const mutationDefaults = getPutCustomFieldsResourceNameMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getCustomerTimelineCustomEventsQueryKey(
  args: InferRequestType<(typeof client)['customer-timeline-custom-events']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['customer-timeline-custom-events', '/customer-timeline-custom-events', keyArgs] as const
}

export function getCustomerTimelineCustomEventsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['customer-timeline-custom-events']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['customer-timeline-custom-events']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['customer-timeline-custom-events']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCustomerTimelineCustomEventsQueryKey>
  >({
    queryKey: getCustomerTimelineCustomEventsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['customer-timeline-custom-events'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCustomerTimelineCustomEvents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['customer-timeline-custom-events']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['customer-timeline-custom-events']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['customer-timeline-custom-events']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getCustomerTimelineCustomEventsQueryKey>
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
      ...getCustomerTimelineCustomEventsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostCustomerTimelineCustomEventsMutationKey() {
  return ['customer-timeline-custom-events', '/customer-timeline-custom-events', 'POST'] as const
}

export function getPostCustomerTimelineCustomEventsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['customer-timeline-custom-events']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['customer-timeline-custom-events']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCustomerTimelineCustomEventsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['customer-timeline-custom-events']['$post']>,
    ) {
      return parseResponse(client['customer-timeline-custom-events'].$post(args, options))
    },
  })
}

export function createPostCustomerTimelineCustomEvents<
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
                Awaited<ReturnType<(typeof client)['customer-timeline-custom-events']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['customer-timeline-custom-events']['$post']>,
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
    const mutationDefaults = getPostCustomerTimelineCustomEventsMutationOptions<
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

export function getCustomerTimelineCustomEventsIdQueryKey(
  args: InferRequestType<(typeof client)['customer-timeline-custom-events'][':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    'customer-timeline-custom-events',
    '/customer-timeline-custom-events/:id',
    keyArgs,
  ] as const
}

export function getCustomerTimelineCustomEventsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['customer-timeline-custom-events'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['customer-timeline-custom-events'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['customer-timeline-custom-events'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCustomerTimelineCustomEventsIdQueryKey>
  >({
    queryKey: getCustomerTimelineCustomEventsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['customer-timeline-custom-events'][':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCustomerTimelineCustomEventsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['customer-timeline-custom-events'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['customer-timeline-custom-events'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['customer-timeline-custom-events'][':id']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getCustomerTimelineCustomEventsIdQueryKey>
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
      ...getCustomerTimelineCustomEventsIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getCustomerTimelineEventsQueryKey(
  args: InferRequestType<(typeof client)['customer-timeline-events']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['customer-timeline-events', '/customer-timeline-events', keyArgs] as const
}

export function getCustomerTimelineEventsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['customer-timeline-events']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['customer-timeline-events']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['customer-timeline-events']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCustomerTimelineEventsQueryKey>
  >({
    queryKey: getCustomerTimelineEventsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['customer-timeline-events'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCustomerTimelineEvents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['customer-timeline-events']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['customer-timeline-events']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['customer-timeline-events']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getCustomerTimelineEventsQueryKey>
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
      ...getCustomerTimelineEventsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getCustomersQueryKey(args: InferRequestType<typeof client.customers.$get>) {
  const { header: _, ...keyArgs } = args
  return ['customers', '/customers', keyArgs] as const
}

export function getCustomersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.customers.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.customers.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.customers.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getCustomersQueryKey>
  >({
    queryKey: getCustomersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.customers.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createCustomers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.customers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.customers.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.customers.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getCustomersQueryKey>
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
    return { ...getCustomersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostCustomersMutationKey() {
  return ['customers', '/customers', 'POST'] as const
}

export function getPostCustomersMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.customers.$post>>>>>,
    TError,
    InferRequestType<typeof client.customers.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCustomersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.customers.$post>) {
      return parseResponse(client.customers.$post(args, options))
    },
  })
}

export function createPostCustomers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.customers.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.customers.$post>,
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
    const mutationDefaults = getPostCustomersMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getCustomersIdQueryKey(
  args: InferRequestType<(typeof client.customers)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['customers', '/customers/:id', keyArgs] as const
}

export function getCustomersIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.customers)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.customers)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.customers)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCustomersIdQueryKey>
  >({
    queryKey: getCustomersIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.customers[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createCustomersId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.customers)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.customers)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.customers)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getCustomersIdQueryKey>
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
    return { ...getCustomersIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPutCustomersIdMutationKey() {
  return ['customers', '/customers/:id', 'PUT'] as const
}

export function getPutCustomersIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.customers)[':id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.customers)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutCustomersIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.customers)[':id']['$put']>) {
      return parseResponse(client.customers[':id'].$put(args, options))
    },
  })
}

export function createPutCustomersId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.customers)[':id']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.customers)[':id']['$put']>,
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
    const mutationDefaults = getPutCustomersIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteCustomersIdMutationKey() {
  return ['customers', '/customers/:id', 'DELETE'] as const
}

export function getDeleteCustomersIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.customers)[':id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.customers)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteCustomersIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.customers)[':id']['$delete']>) {
      return parseResponse(client.customers[':id'].$delete(args, options))
    },
  })
}

export function createDeleteCustomersId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.customers)[':id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.customers)[':id']['$delete']>,
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
    const mutationDefaults = getDeleteCustomersIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getCustomersIdLeadSourceQueryKey(
  args: InferRequestType<(typeof client.customers)[':id']['lead-source']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['customers', '/customers/:id/lead-source', keyArgs] as const
}

export function getCustomersIdLeadSourceQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.customers)[':id']['lead-source']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.customers)[':id']['lead-source']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.customers)[':id']['lead-source']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCustomersIdLeadSourceQueryKey>
  >({
    queryKey: getCustomersIdLeadSourceQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.customers[':id']['lead-source'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCustomersIdLeadSource<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.customers)[':id']['lead-source']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.customers)[':id']['lead-source']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.customers)[':id']['lead-source']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getCustomersIdLeadSourceQueryKey>
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
      ...getCustomersIdLeadSourceQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutCustomersIdLeadSourceMutationKey() {
  return ['customers', '/customers/:id/lead-source', 'PUT'] as const
}

export function getPutCustomersIdLeadSourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.customers)[':id']['lead-source']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.customers)[':id']['lead-source']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutCustomersIdLeadSourceMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.customers)[':id']['lead-source']['$put']>,
    ) {
      return parseResponse(client.customers[':id']['lead-source'].$put(args, options))
    },
  })
}

export function createPutCustomersIdLeadSource<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.customers)[':id']['lead-source']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.customers)[':id']['lead-source']['$put']>,
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
    const mutationDefaults = getPutCustomersIdLeadSourceMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteCustomersIdLeadSourceMutationKey() {
  return ['customers', '/customers/:id/lead-source', 'DELETE'] as const
}

export function getDeleteCustomersIdLeadSourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.customers)[':id']['lead-source']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.customers)[':id']['lead-source']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteCustomersIdLeadSourceMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.customers)[':id']['lead-source']['$delete']>,
    ) {
      return parseResponse(client.customers[':id']['lead-source'].$delete(args, options))
    },
  })
}

export function createDeleteCustomersIdLeadSource<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.customers)[':id']['lead-source']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.customers)[':id']['lead-source']['$delete']>,
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
    const mutationDefaults = getDeleteCustomersIdLeadSourceMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getCustomersIdTimelineQueryKey(
  args: InferRequestType<(typeof client.customers)[':id']['timeline']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['customers', '/customers/:id/timeline', keyArgs] as const
}

export function getCustomersIdTimelineQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.customers)[':id']['timeline']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.customers)[':id']['timeline']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.customers)[':id']['timeline']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCustomersIdTimelineQueryKey>
  >({
    queryKey: getCustomersIdTimelineQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.customers[':id'].timeline.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCustomersIdTimeline<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.customers)[':id']['timeline']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.customers)[':id']['timeline']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.customers)[':id']['timeline']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getCustomersIdTimelineQueryKey>
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
    return { ...getCustomersIdTimelineQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostCustomersIdTimelineMutationKey() {
  return ['customers', '/customers/:id/timeline', 'POST'] as const
}

export function getPostCustomersIdTimelineMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.customers)[':id']['timeline']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.customers)[':id']['timeline']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCustomersIdTimelineMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.customers)[':id']['timeline']['$post']>,
    ) {
      return parseResponse(client.customers[':id'].timeline.$post(args, options))
    },
  })
}

export function createPostCustomersIdTimeline<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.customers)[':id']['timeline']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.customers)[':id']['timeline']['$post']>,
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
    const mutationDefaults = getPostCustomersIdTimelineMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getCustomersIdTimelineMessageIdQueryKey(
  args: InferRequestType<(typeof client.customers)[':id']['timeline'][':messageId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['customers', '/customers/:id/timeline/:messageId', keyArgs] as const
}

export function getCustomersIdTimelineMessageIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.customers)[':id']['timeline'][':messageId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.customers)[':id']['timeline'][':messageId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.customers)[':id']['timeline'][':messageId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCustomersIdTimelineMessageIdQueryKey>
  >({
    queryKey: getCustomersIdTimelineMessageIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.customers[':id'].timeline[':messageId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCustomersIdTimelineMessageId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.customers)[':id']['timeline'][':messageId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.customers)[':id']['timeline'][':messageId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.customers)[':id']['timeline'][':messageId']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getCustomersIdTimelineMessageIdQueryKey>
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
      ...getCustomersIdTimelineMessageIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getDeleteCustomersIdTimelineMessageIdMutationKey() {
  return ['customers', '/customers/:id/timeline/:messageId', 'DELETE'] as const
}

export function getDeleteCustomersIdTimelineMessageIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.customers)[':id']['timeline'][':messageId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteCustomersIdTimelineMessageIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.customers)[':id']['timeline'][':messageId']['$delete']>,
    ) {
      return parseResponse(client.customers[':id'].timeline[':messageId'].$delete(args, options))
    },
  })
}

export function createDeleteCustomersIdTimelineMessageId<
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
                    ReturnType<
                      (typeof client.customers)[':id']['timeline'][':messageId']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.customers)[':id']['timeline'][':messageId']['$delete']>,
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
    const mutationDefaults = getDeleteCustomersIdTimelineMessageIdMutationOptions<
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

export function getCustomersIdUpcomingInvoicesQueryKey(
  args: InferRequestType<(typeof client.customers)[':id']['upcoming-invoices']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['customers', '/customers/:id/upcoming-invoices', keyArgs] as const
}

export function getCustomersIdUpcomingInvoicesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.customers)[':id']['upcoming-invoices']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.customers)[':id']['upcoming-invoices']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.customers)[':id']['upcoming-invoices']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCustomersIdUpcomingInvoicesQueryKey>
  >({
    queryKey: getCustomersIdUpcomingInvoicesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.customers[':id']['upcoming-invoices'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createCustomersIdUpcomingInvoices<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.customers)[':id']['upcoming-invoices']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.customers)[':id']['upcoming-invoices']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.customers)[':id']['upcoming-invoices']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getCustomersIdUpcomingInvoicesQueryKey>
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
      ...getCustomersIdUpcomingInvoicesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostDigitalWalletsValidationMutationKey() {
  return ['digital-wallets', '/digital-wallets/validation', 'POST'] as const
}

export function getPostDigitalWalletsValidationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['digital-wallets']['validation']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['digital-wallets']['validation']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDigitalWalletsValidationMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['digital-wallets']['validation']['$post']>,
    ) {
      return parseResponse(client['digital-wallets'].validation.$post(args, options))
    },
  })
}

export function createPostDigitalWalletsValidation<
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
                Awaited<ReturnType<(typeof client)['digital-wallets']['validation']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['digital-wallets']['validation']['$post']>,
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
    const mutationDefaults = getPostDigitalWalletsValidationMutationOptions<
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

export function getDisputesQueryKey(args: InferRequestType<typeof client.disputes.$get>) {
  const { header: _, ...keyArgs } = args
  return ['disputes', '/disputes', keyArgs] as const
}

export function getDisputesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.disputes.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.disputes.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.disputes.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getDisputesQueryKey>
  >({
    queryKey: getDisputesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.disputes.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createDisputes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.disputes.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.disputes.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.disputes.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getDisputesQueryKey>
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
    return { ...getDisputesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostDisputesMutationKey() {
  return ['disputes', '/disputes', 'POST'] as const
}

export function getPostDisputesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.disputes.$post>>>>>,
    TError,
    InferRequestType<typeof client.disputes.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDisputesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.disputes.$post>) {
      return parseResponse(client.disputes.$post(args, options))
    },
  })
}

export function createPostDisputes<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.disputes.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.disputes.$post>,
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
    const mutationDefaults = getPostDisputesMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDisputesIdQueryKey(
  args: InferRequestType<(typeof client.disputes)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['disputes', '/disputes/:id', keyArgs] as const
}

export function getDisputesIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.disputes)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.disputes)[':id']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.disputes)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getDisputesIdQueryKey>
  >({
    queryKey: getDisputesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.disputes[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createDisputesId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.disputes)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.disputes)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.disputes)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getDisputesIdQueryKey>
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
    return { ...getDisputesIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPutDisputesIdMutationKey() {
  return ['disputes', '/disputes/:id', 'PUT'] as const
}

export function getPutDisputesIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.disputes)[':id']['$put']>>>>
    >,
    TError,
    InferRequestType<(typeof client.disputes)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutDisputesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.disputes)[':id']['$put']>) {
      return parseResponse(client.disputes[':id'].$put(args, options))
    },
  })
}

export function createPutDisputesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.disputes)[':id']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.disputes)[':id']['$put']>,
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
    const mutationDefaults = getPutDisputesIdMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getFilesQueryKey(args: InferRequestType<typeof client.files.$get>) {
  const { header: _, ...keyArgs } = args
  return ['files', '/files', keyArgs] as const
}

export function getFilesQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.files.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.files.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.files.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getFilesQueryKey>
  >({
    queryKey: getFilesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.files.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createFiles<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.files.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.files.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.files.$get>>>>>,
          TError,
          TData,
          ReturnType<typeof getFilesQueryKey>
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
    return { ...getFilesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostFilesMutationKey() {
  return ['files', '/files', 'POST'] as const
}

export function getPostFilesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.files.$post>>>>>,
    TError,
    InferRequestType<typeof client.files.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostFilesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.files.$post>) {
      return parseResponse(client.files.$post(args, options))
    },
  })
}

export function createPostFiles<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.files.$post>>>>>,
          TError,
          InferRequestType<typeof client.files.$post>,
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
    const mutationDefaults = getPostFilesMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getFilesIdQueryKey(args: InferRequestType<(typeof client.files)[':id']['$get']>) {
  const { header: _, ...keyArgs } = args
  return ['files', '/files/:id', keyArgs] as const
}

export function getFilesIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.files)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.files)[':id']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.files)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getFilesIdQueryKey>
  >({
    queryKey: getFilesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.files[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createFilesId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.files)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.files)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.files)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getFilesIdQueryKey>
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
    return { ...getFilesIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPutFilesIdMutationKey() {
  return ['files', '/files/:id', 'PUT'] as const
}

export function getPutFilesIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.files)[':id']['$put']>>>>
    >,
    TError,
    InferRequestType<(typeof client.files)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutFilesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.files)[':id']['$put']>) {
      return parseResponse(client.files[':id'].$put(args, options))
    },
  })
}

export function createPutFilesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.files)[':id']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.files)[':id']['$put']>,
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
    const mutationDefaults = getPutFilesIdMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteFilesIdMutationKey() {
  return ['files', '/files/:id', 'DELETE'] as const
}

export function getDeleteFilesIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.files)[':id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.files)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteFilesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.files)[':id']['$delete']>) {
      return parseResponse(client.files[':id'].$delete(args, options))
    },
  })
}

export function createDeleteFilesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<(typeof client.files)[':id']['$delete']>>>
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.files)[':id']['$delete']>,
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
    const mutationDefaults = getDeleteFilesIdMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getFilesIdDownloadQueryKey(
  args: InferRequestType<(typeof client.files)[':id']['download']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['files', '/files/:id/download', keyArgs] as const
}

export function getFilesIdDownloadQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.files)[':id']['download']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.files)[':id']['download']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.files)[':id']['download']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFilesIdDownloadQueryKey>
  >({
    queryKey: getFilesIdDownloadQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.files[':id'].download.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createFilesIdDownload<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.files)[':id']['download']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.files)[':id']['download']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.files)[':id']['download']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getFilesIdDownloadQueryKey>
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
    return { ...getFilesIdDownloadQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getFilesIdDownloadExtensionQueryKey(
  args: InferRequestType<(typeof client.files)[':id']['download{extension}']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['files', '/files/:id/download{extension}', keyArgs] as const
}

export function getFilesIdDownloadExtensionQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.files)[':id']['download{extension}']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.files)[':id']['download{extension}']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.files)[':id']['download{extension}']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFilesIdDownloadExtensionQueryKey>
  >({
    queryKey: getFilesIdDownloadExtensionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.files[':id']['download{extension}'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createFilesIdDownloadExtension<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.files)[':id']['download{extension}']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.files)[':id']['download{extension}']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.files)[':id']['download{extension}']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getFilesIdDownloadExtensionQueryKey>
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
      ...getFilesIdDownloadExtensionQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getInvoicesQueryKey(args: InferRequestType<typeof client.invoices.$get>) {
  const { header: _, ...keyArgs } = args
  return ['invoices', '/invoices', keyArgs] as const
}

export function getInvoicesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.invoices.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.invoices.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.invoices.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getInvoicesQueryKey>
  >({
    queryKey: getInvoicesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.invoices.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createInvoices<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.invoices.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.invoices.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.invoices.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getInvoicesQueryKey>
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
    return { ...getInvoicesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostInvoicesMutationKey() {
  return ['invoices', '/invoices', 'POST'] as const
}

export function getPostInvoicesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.invoices.$post>>>>>,
    TError,
    InferRequestType<typeof client.invoices.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostInvoicesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.invoices.$post>) {
      return parseResponse(client.invoices.$post(args, options))
    },
  })
}

export function createPostInvoices<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.invoices.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.invoices.$post>,
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
    const mutationDefaults = getPostInvoicesMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getInvoicesIdQueryKey(
  args: InferRequestType<(typeof client.invoices)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['invoices', '/invoices/:id', keyArgs] as const
}

export function getInvoicesIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.invoices)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.invoices)[':id']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.invoices)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getInvoicesIdQueryKey>
  >({
    queryKey: getInvoicesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.invoices[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createInvoicesId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.invoices)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.invoices)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.invoices)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getInvoicesIdQueryKey>
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
    return { ...getInvoicesIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPutInvoicesIdMutationKey() {
  return ['invoices', '/invoices/:id', 'PUT'] as const
}

export function getPutInvoicesIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.invoices)[':id']['$put']>>>>
    >,
    TError,
    InferRequestType<(typeof client.invoices)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutInvoicesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.invoices)[':id']['$put']>) {
      return parseResponse(client.invoices[':id'].$put(args, options))
    },
  })
}

export function createPutInvoicesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.invoices)[':id']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.invoices)[':id']['$put']>,
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
    const mutationDefaults = getPutInvoicesIdMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostInvoicesIdAbandonMutationKey() {
  return ['invoices', '/invoices/:id/abandon', 'POST'] as const
}

export function getPostInvoicesIdAbandonMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.invoices)[':id']['abandon']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.invoices)[':id']['abandon']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostInvoicesIdAbandonMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.invoices)[':id']['abandon']['$post']>) {
      return parseResponse(client.invoices[':id'].abandon.$post(args, options))
    },
  })
}

export function createPostInvoicesIdAbandon<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.invoices)[':id']['abandon']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.invoices)[':id']['abandon']['$post']>,
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
    const mutationDefaults = getPostInvoicesIdAbandonMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostInvoicesIdIssueMutationKey() {
  return ['invoices', '/invoices/:id/issue', 'POST'] as const
}

export function getPostInvoicesIdIssueMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.invoices)[':id']['issue']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.invoices)[':id']['issue']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostInvoicesIdIssueMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.invoices)[':id']['issue']['$post']>) {
      return parseResponse(client.invoices[':id'].issue.$post(args, options))
    },
  })
}

export function createPostInvoicesIdIssue<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.invoices)[':id']['issue']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.invoices)[':id']['issue']['$post']>,
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
    const mutationDefaults = getPostInvoicesIdIssueMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getInvoicesIdItemsQueryKey(
  args: InferRequestType<(typeof client.invoices)[':id']['items']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['invoices', '/invoices/:id/items', keyArgs] as const
}

export function getInvoicesIdItemsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.invoices)[':id']['items']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.invoices)[':id']['items']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.invoices)[':id']['items']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInvoicesIdItemsQueryKey>
  >({
    queryKey: getInvoicesIdItemsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.invoices[':id'].items.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createInvoicesIdItems<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.invoices)[':id']['items']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.invoices)[':id']['items']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.invoices)[':id']['items']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getInvoicesIdItemsQueryKey>
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
    return { ...getInvoicesIdItemsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostInvoicesIdItemsMutationKey() {
  return ['invoices', '/invoices/:id/items', 'POST'] as const
}

export function getPostInvoicesIdItemsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.invoices)[':id']['items']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.invoices)[':id']['items']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostInvoicesIdItemsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.invoices)[':id']['items']['$post']>) {
      return parseResponse(client.invoices[':id'].items.$post(args, options))
    },
  })
}

export function createPostInvoicesIdItems<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.invoices)[':id']['items']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.invoices)[':id']['items']['$post']>,
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
    const mutationDefaults = getPostInvoicesIdItemsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostInvoicesIdRecalculateMutationKey() {
  return ['invoices', '/invoices/:id/recalculate', 'POST'] as const
}

export function getPostInvoicesIdRecalculateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.invoices)[':id']['recalculate']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.invoices)[':id']['recalculate']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostInvoicesIdRecalculateMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.invoices)[':id']['recalculate']['$post']>,
    ) {
      return parseResponse(client.invoices[':id'].recalculate.$post(args, options))
    },
  })
}

export function createPostInvoicesIdRecalculate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.invoices)[':id']['recalculate']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.invoices)[':id']['recalculate']['$post']>,
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
    const mutationDefaults = getPostInvoicesIdRecalculateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostInvoicesIdReissueMutationKey() {
  return ['invoices', '/invoices/:id/reissue', 'POST'] as const
}

export function getPostInvoicesIdReissueMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.invoices)[':id']['reissue']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.invoices)[':id']['reissue']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostInvoicesIdReissueMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.invoices)[':id']['reissue']['$post']>) {
      return parseResponse(client.invoices[':id'].reissue.$post(args, options))
    },
  })
}

export function createPostInvoicesIdReissue<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.invoices)[':id']['reissue']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.invoices)[':id']['reissue']['$post']>,
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
    const mutationDefaults = getPostInvoicesIdReissueMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getInvoicesIdTimelineQueryKey(
  args: InferRequestType<(typeof client.invoices)[':id']['timeline']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['invoices', '/invoices/:id/timeline', keyArgs] as const
}

export function getInvoicesIdTimelineQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.invoices)[':id']['timeline']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.invoices)[':id']['timeline']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.invoices)[':id']['timeline']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInvoicesIdTimelineQueryKey>
  >({
    queryKey: getInvoicesIdTimelineQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.invoices[':id'].timeline.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createInvoicesIdTimeline<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.invoices)[':id']['timeline']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.invoices)[':id']['timeline']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.invoices)[':id']['timeline']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getInvoicesIdTimelineQueryKey>
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
    return { ...getInvoicesIdTimelineQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostInvoicesIdTimelineMutationKey() {
  return ['invoices', '/invoices/:id/timeline', 'POST'] as const
}

export function getPostInvoicesIdTimelineMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.invoices)[':id']['timeline']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.invoices)[':id']['timeline']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostInvoicesIdTimelineMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.invoices)[':id']['timeline']['$post']>) {
      return parseResponse(client.invoices[':id'].timeline.$post(args, options))
    },
  })
}

export function createPostInvoicesIdTimeline<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.invoices)[':id']['timeline']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.invoices)[':id']['timeline']['$post']>,
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
    const mutationDefaults = getPostInvoicesIdTimelineMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getInvoicesIdTimelineMessageIdQueryKey(
  args: InferRequestType<(typeof client.invoices)[':id']['timeline'][':messageId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['invoices', '/invoices/:id/timeline/:messageId', keyArgs] as const
}

export function getInvoicesIdTimelineMessageIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.invoices)[':id']['timeline'][':messageId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.invoices)[':id']['timeline'][':messageId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.invoices)[':id']['timeline'][':messageId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInvoicesIdTimelineMessageIdQueryKey>
  >({
    queryKey: getInvoicesIdTimelineMessageIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.invoices[':id'].timeline[':messageId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createInvoicesIdTimelineMessageId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.invoices)[':id']['timeline'][':messageId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.invoices)[':id']['timeline'][':messageId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.invoices)[':id']['timeline'][':messageId']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getInvoicesIdTimelineMessageIdQueryKey>
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
      ...getInvoicesIdTimelineMessageIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getDeleteInvoicesIdTimelineMessageIdMutationKey() {
  return ['invoices', '/invoices/:id/timeline/:messageId', 'DELETE'] as const
}

export function getDeleteInvoicesIdTimelineMessageIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.invoices)[':id']['timeline'][':messageId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteInvoicesIdTimelineMessageIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.invoices)[':id']['timeline'][':messageId']['$delete']>,
    ) {
      return parseResponse(client.invoices[':id'].timeline[':messageId'].$delete(args, options))
    },
  })
}

export function createDeleteInvoicesIdTimelineMessageId<
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
                    ReturnType<(typeof client.invoices)[':id']['timeline'][':messageId']['$delete']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.invoices)[':id']['timeline'][':messageId']['$delete']>,
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
    const mutationDefaults = getDeleteInvoicesIdTimelineMessageIdMutationOptions<
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

export function getPostInvoicesIdTransactionMutationKey() {
  return ['invoices', '/invoices/:id/transaction', 'POST'] as const
}

export function getPostInvoicesIdTransactionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.invoices)[':id']['transaction']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.invoices)[':id']['transaction']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostInvoicesIdTransactionMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.invoices)[':id']['transaction']['$post']>,
    ) {
      return parseResponse(client.invoices[':id'].transaction.$post(args, options))
    },
  })
}

export function createPostInvoicesIdTransaction<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.invoices)[':id']['transaction']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.invoices)[':id']['transaction']['$post']>,
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
    const mutationDefaults = getPostInvoicesIdTransactionMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getInvoicesIdTransactionAllocationsQueryKey(
  args: InferRequestType<(typeof client.invoices)[':id']['transaction-allocations']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['invoices', '/invoices/:id/transaction-allocations', keyArgs] as const
}

export function getInvoicesIdTransactionAllocationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.invoices)[':id']['transaction-allocations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.invoices)[':id']['transaction-allocations']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.invoices)[':id']['transaction-allocations']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInvoicesIdTransactionAllocationsQueryKey>
  >({
    queryKey: getInvoicesIdTransactionAllocationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.invoices[':id']['transaction-allocations'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createInvoicesIdTransactionAllocations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.invoices)[':id']['transaction-allocations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.invoices)[':id']['transaction-allocations']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.invoices)[':id']['transaction-allocations']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getInvoicesIdTransactionAllocationsQueryKey>
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
      ...getInvoicesIdTransactionAllocationsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostInvoicesIdVoidMutationKey() {
  return ['invoices', '/invoices/:id/void', 'POST'] as const
}

export function getPostInvoicesIdVoidMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.invoices)[':id']['void']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.invoices)[':id']['void']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostInvoicesIdVoidMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.invoices)[':id']['void']['$post']>) {
      return parseResponse(client.invoices[':id'].void.$post(args, options))
    },
  })
}

export function createPostInvoicesIdVoid<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.invoices)[':id']['void']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.invoices)[':id']['void']['$post']>,
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
    const mutationDefaults = getPostInvoicesIdVoidMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getKycDocumentsQueryKey(
  args: InferRequestType<(typeof client)['kyc-documents']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['kyc-documents', '/kyc-documents', keyArgs] as const
}

export function getKycDocumentsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['kyc-documents']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['kyc-documents']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['kyc-documents']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getKycDocumentsQueryKey>
  >({
    queryKey: getKycDocumentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['kyc-documents'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createKycDocuments<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['kyc-documents']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['kyc-documents']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['kyc-documents']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getKycDocumentsQueryKey>
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
    return { ...getKycDocumentsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostKycDocumentsMutationKey() {
  return ['kyc-documents', '/kyc-documents', 'POST'] as const
}

export function getPostKycDocumentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['kyc-documents']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['kyc-documents']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostKycDocumentsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['kyc-documents']['$post']>) {
      return parseResponse(client['kyc-documents'].$post(args, options))
    },
  })
}

export function createPostKycDocuments<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['kyc-documents']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client)['kyc-documents']['$post']>,
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
    const mutationDefaults = getPostKycDocumentsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getKycDocumentsIdQueryKey(
  args: InferRequestType<(typeof client)['kyc-documents'][':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['kyc-documents', '/kyc-documents/:id', keyArgs] as const
}

export function getKycDocumentsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['kyc-documents'][':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['kyc-documents'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['kyc-documents'][':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getKycDocumentsIdQueryKey>
  >({
    queryKey: getKycDocumentsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['kyc-documents'][':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createKycDocumentsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['kyc-documents'][':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['kyc-documents'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['kyc-documents'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getKycDocumentsIdQueryKey>
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
    return { ...getKycDocumentsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPutKycDocumentsIdMutationKey() {
  return ['kyc-documents', '/kyc-documents/:id', 'PUT'] as const
}

export function getPutKycDocumentsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['kyc-documents'][':id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['kyc-documents'][':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutKycDocumentsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['kyc-documents'][':id']['$put']>) {
      return parseResponse(client['kyc-documents'][':id'].$put(args, options))
    },
  })
}

export function createPutKycDocumentsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['kyc-documents'][':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['kyc-documents'][':id']['$put']>,
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
    const mutationDefaults = getPutKycDocumentsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostKycDocumentsIdAcceptanceMutationKey() {
  return ['kyc-documents', '/kyc-documents/:id/acceptance', 'POST'] as const
}

export function getPostKycDocumentsIdAcceptanceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['kyc-documents'][':id']['acceptance']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['kyc-documents'][':id']['acceptance']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostKycDocumentsIdAcceptanceMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['kyc-documents'][':id']['acceptance']['$post']>,
    ) {
      return parseResponse(client['kyc-documents'][':id'].acceptance.$post(args, options))
    },
  })
}

export function createPostKycDocumentsIdAcceptance<
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
                Awaited<ReturnType<(typeof client)['kyc-documents'][':id']['acceptance']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['kyc-documents'][':id']['acceptance']['$post']>,
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
    const mutationDefaults = getPostKycDocumentsIdAcceptanceMutationOptions<
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

export function getPostKycDocumentsIdMatchesMutationKey() {
  return ['kyc-documents', '/kyc-documents/:id/matches', 'POST'] as const
}

export function getPostKycDocumentsIdMatchesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['kyc-documents'][':id']['matches']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client)['kyc-documents'][':id']['matches']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostKycDocumentsIdMatchesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['kyc-documents'][':id']['matches']['$post']>,
    ) {
      return parseResponse(client['kyc-documents'][':id'].matches.$post(args, options))
    },
  })
}

export function createPostKycDocumentsIdMatches<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client)['kyc-documents'][':id']['matches']['$post']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client)['kyc-documents'][':id']['matches']['$post']>,
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
    const mutationDefaults = getPostKycDocumentsIdMatchesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostKycDocumentsIdRejectionMutationKey() {
  return ['kyc-documents', '/kyc-documents/:id/rejection', 'POST'] as const
}

export function getPostKycDocumentsIdRejectionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['kyc-documents'][':id']['rejection']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['kyc-documents'][':id']['rejection']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostKycDocumentsIdRejectionMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['kyc-documents'][':id']['rejection']['$post']>,
    ) {
      return parseResponse(client['kyc-documents'][':id'].rejection.$post(args, options))
    },
  })
}

export function createPostKycDocumentsIdRejection<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['kyc-documents'][':id']['rejection']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['kyc-documents'][':id']['rejection']['$post']>,
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
    const mutationDefaults = getPostKycDocumentsIdRejectionMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostKycDocumentsIdReviewMutationKey() {
  return ['kyc-documents', '/kyc-documents/:id/review', 'POST'] as const
}

export function getPostKycDocumentsIdReviewMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['kyc-documents'][':id']['review']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['kyc-documents'][':id']['review']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostKycDocumentsIdReviewMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['kyc-documents'][':id']['review']['$post']>,
    ) {
      return parseResponse(client['kyc-documents'][':id'].review.$post(args, options))
    },
  })
}

export function createPostKycDocumentsIdReview<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['kyc-documents'][':id']['review']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['kyc-documents'][':id']['review']['$post']>,
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
    const mutationDefaults = getPostKycDocumentsIdReviewMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getKycRequestsQueryKey(
  args: InferRequestType<(typeof client)['kyc-requests']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['kyc-requests', '/kyc-requests', keyArgs] as const
}

export function getKycRequestsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['kyc-requests']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client)['kyc-requests']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['kyc-requests']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getKycRequestsQueryKey>
  >({
    queryKey: getKycRequestsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['kyc-requests'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createKycRequests<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['kyc-requests']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['kyc-requests']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['kyc-requests']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getKycRequestsQueryKey>
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
    return { ...getKycRequestsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostKycRequestsMutationKey() {
  return ['kyc-requests', '/kyc-requests', 'POST'] as const
}

export function getPostKycRequestsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['kyc-requests']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['kyc-requests']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostKycRequestsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['kyc-requests']['$post']>) {
      return parseResponse(client['kyc-requests'].$post(args, options))
    },
  })
}

export function createPostKycRequests<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['kyc-requests']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client)['kyc-requests']['$post']>,
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
    const mutationDefaults = getPostKycRequestsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getKycRequestsIdQueryKey(
  args: InferRequestType<(typeof client)['kyc-requests'][':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['kyc-requests', '/kyc-requests/:id', keyArgs] as const
}

export function getKycRequestsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['kyc-requests'][':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['kyc-requests'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['kyc-requests'][':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getKycRequestsIdQueryKey>
  >({
    queryKey: getKycRequestsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['kyc-requests'][':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createKycRequestsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['kyc-requests'][':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['kyc-requests'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['kyc-requests'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getKycRequestsIdQueryKey>
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
    return { ...getKycRequestsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getDeleteKycRequestsIdMutationKey() {
  return ['kyc-requests', '/kyc-requests/:id', 'DELETE'] as const
}

export function getDeleteKycRequestsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['kyc-requests'][':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client)['kyc-requests'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteKycRequestsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['kyc-requests'][':id']['$delete']>) {
      return parseResponse(client['kyc-requests'][':id'].$delete(args, options))
    },
  })
}

export function createDeleteKycRequestsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client)['kyc-requests'][':id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client)['kyc-requests'][':id']['$delete']>,
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
    const mutationDefaults = getDeleteKycRequestsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPatchKycRequestsIdMutationKey() {
  return ['kyc-requests', '/kyc-requests/:id', 'PATCH'] as const
}

export function getPatchKycRequestsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['kyc-requests'][':id']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['kyc-requests'][':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchKycRequestsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['kyc-requests'][':id']['$patch']>) {
      return parseResponse(client['kyc-requests'][':id'].$patch(args, options))
    },
  })
}

export function createPatchKycRequestsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['kyc-requests'][':id']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['kyc-requests'][':id']['$patch']>,
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
    const mutationDefaults = getPatchKycRequestsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPasswordTokensQueryKey(
  args: InferRequestType<(typeof client)['password-tokens']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['password-tokens', '/password-tokens', keyArgs] as const
}

export function getPasswordTokensQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['password-tokens']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['password-tokens']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['password-tokens']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPasswordTokensQueryKey>
  >({
    queryKey: getPasswordTokensQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['password-tokens'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createPasswordTokens<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['password-tokens']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['password-tokens']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['password-tokens']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getPasswordTokensQueryKey>
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
    return { ...getPasswordTokensQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostPasswordTokensMutationKey() {
  return ['password-tokens', '/password-tokens', 'POST'] as const
}

export function getPostPasswordTokensMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['password-tokens']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['password-tokens']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostPasswordTokensMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['password-tokens']['$post']>) {
      return parseResponse(client['password-tokens'].$post(args, options))
    },
  })
}

export function createPostPasswordTokens<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['password-tokens']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client)['password-tokens']['$post']>,
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
    const mutationDefaults = getPostPasswordTokensMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPasswordTokensIdQueryKey(
  args: InferRequestType<(typeof client)['password-tokens'][':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['password-tokens', '/password-tokens/:id', keyArgs] as const
}

export function getPasswordTokensIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['password-tokens'][':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['password-tokens'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['password-tokens'][':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPasswordTokensIdQueryKey>
  >({
    queryKey: getPasswordTokensIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['password-tokens'][':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createPasswordTokensId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['password-tokens'][':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['password-tokens'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['password-tokens'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getPasswordTokensIdQueryKey>
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
    return { ...getPasswordTokensIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getDeletePasswordTokensIdMutationKey() {
  return ['password-tokens', '/password-tokens/:id', 'DELETE'] as const
}

export function getDeletePasswordTokensIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['password-tokens'][':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client)['password-tokens'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeletePasswordTokensIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['password-tokens'][':id']['$delete']>) {
      return parseResponse(client['password-tokens'][':id'].$delete(args, options))
    },
  })
}

export function createDeletePasswordTokensId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client)['password-tokens'][':id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client)['password-tokens'][':id']['$delete']>,
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
    const mutationDefaults = getDeletePasswordTokensIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPaymentCardsQueryKey(
  args: InferRequestType<(typeof client)['payment-cards']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['payment-cards', '/payment-cards', keyArgs] as const
}

export function getPaymentCardsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['payment-cards']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['payment-cards']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['payment-cards']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPaymentCardsQueryKey>
  >({
    queryKey: getPaymentCardsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['payment-cards'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createPaymentCards<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['payment-cards']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['payment-cards']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['payment-cards']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getPaymentCardsQueryKey>
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
    return { ...getPaymentCardsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostPaymentCardsMutationKey() {
  return ['payment-cards', '/payment-cards', 'POST'] as const
}

export function getPostPaymentCardsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['payment-cards']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['payment-cards']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostPaymentCardsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['payment-cards']['$post']>) {
      return parseResponse(client['payment-cards'].$post(args, options))
    },
  })
}

export function createPostPaymentCards<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['payment-cards']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client)['payment-cards']['$post']>,
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
    const mutationDefaults = getPostPaymentCardsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPaymentCardsIdQueryKey(
  args: InferRequestType<(typeof client)['payment-cards'][':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['payment-cards', '/payment-cards/:id', keyArgs] as const
}

export function getPaymentCardsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['payment-cards'][':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['payment-cards'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['payment-cards'][':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPaymentCardsIdQueryKey>
  >({
    queryKey: getPaymentCardsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['payment-cards'][':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createPaymentCardsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['payment-cards'][':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['payment-cards'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['payment-cards'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getPaymentCardsIdQueryKey>
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
    return { ...getPaymentCardsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPutPaymentCardsIdMutationKey() {
  return ['payment-cards', '/payment-cards/:id', 'PUT'] as const
}

export function getPutPaymentCardsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['payment-cards'][':id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['payment-cards'][':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutPaymentCardsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['payment-cards'][':id']['$put']>) {
      return parseResponse(client['payment-cards'][':id'].$put(args, options))
    },
  })
}

export function createPutPaymentCardsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['payment-cards'][':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['payment-cards'][':id']['$put']>,
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
    const mutationDefaults = getPutPaymentCardsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPatchPaymentCardsIdMutationKey() {
  return ['payment-cards', '/payment-cards/:id', 'PATCH'] as const
}

export function getPatchPaymentCardsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['payment-cards'][':id']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['payment-cards'][':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchPaymentCardsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['payment-cards'][':id']['$patch']>) {
      return parseResponse(client['payment-cards'][':id'].$patch(args, options))
    },
  })
}

export function createPatchPaymentCardsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['payment-cards'][':id']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['payment-cards'][':id']['$patch']>,
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
    const mutationDefaults = getPatchPaymentCardsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostPaymentCardsIdDeactivationMutationKey() {
  return ['payment-cards', '/payment-cards/:id/deactivation', 'POST'] as const
}

export function getPostPaymentCardsIdDeactivationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['payment-cards'][':id']['deactivation']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['payment-cards'][':id']['deactivation']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostPaymentCardsIdDeactivationMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['payment-cards'][':id']['deactivation']['$post']>,
    ) {
      return parseResponse(client['payment-cards'][':id'].deactivation.$post(args, options))
    },
  })
}

export function createPostPaymentCardsIdDeactivation<
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
                  ReturnType<(typeof client)['payment-cards'][':id']['deactivation']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['payment-cards'][':id']['deactivation']['$post']>,
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
    const mutationDefaults = getPostPaymentCardsIdDeactivationMutationOptions<
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

export function getPaymentInstrumentsQueryKey(
  args: InferRequestType<(typeof client)['payment-instruments']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['payment-instruments', '/payment-instruments', keyArgs] as const
}

export function getPaymentInstrumentsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['payment-instruments']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['payment-instruments']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['payment-instruments']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPaymentInstrumentsQueryKey>
  >({
    queryKey: getPaymentInstrumentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['payment-instruments'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createPaymentInstruments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['payment-instruments']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['payment-instruments']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['payment-instruments']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getPaymentInstrumentsQueryKey>
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
    return { ...getPaymentInstrumentsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostPaymentInstrumentsMutationKey() {
  return ['payment-instruments', '/payment-instruments', 'POST'] as const
}

export function getPostPaymentInstrumentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['payment-instruments']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['payment-instruments']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostPaymentInstrumentsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['payment-instruments']['$post']>) {
      return parseResponse(client['payment-instruments'].$post(args, options))
    },
  })
}

export function createPostPaymentInstruments<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['payment-instruments']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['payment-instruments']['$post']>,
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
    const mutationDefaults = getPostPaymentInstrumentsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPaymentInstrumentsIdQueryKey(
  args: InferRequestType<(typeof client)['payment-instruments'][':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['payment-instruments', '/payment-instruments/:id', keyArgs] as const
}

export function getPaymentInstrumentsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['payment-instruments'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['payment-instruments'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['payment-instruments'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPaymentInstrumentsIdQueryKey>
  >({
    queryKey: getPaymentInstrumentsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['payment-instruments'][':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createPaymentInstrumentsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['payment-instruments'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['payment-instruments'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['payment-instruments'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getPaymentInstrumentsIdQueryKey>
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
      ...getPaymentInstrumentsIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPatchPaymentInstrumentsIdMutationKey() {
  return ['payment-instruments', '/payment-instruments/:id', 'PATCH'] as const
}

export function getPatchPaymentInstrumentsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['payment-instruments'][':id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['payment-instruments'][':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchPaymentInstrumentsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['payment-instruments'][':id']['$patch']>,
    ) {
      return parseResponse(client['payment-instruments'][':id'].$patch(args, options))
    },
  })
}

export function createPatchPaymentInstrumentsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['payment-instruments'][':id']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['payment-instruments'][':id']['$patch']>,
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
    const mutationDefaults = getPatchPaymentInstrumentsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostPaymentInstrumentsIdDeactivationMutationKey() {
  return ['payment-instruments', '/payment-instruments/:id/deactivation', 'POST'] as const
}

export function getPostPaymentInstrumentsIdDeactivationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['payment-instruments'][':id']['deactivation']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostPaymentInstrumentsIdDeactivationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['payment-instruments'][':id']['deactivation']['$post']
      >,
    ) {
      return parseResponse(client['payment-instruments'][':id'].deactivation.$post(args, options))
    },
  })
}

export function createPostPaymentInstrumentsIdDeactivation<
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
                  ReturnType<(typeof client)['payment-instruments'][':id']['deactivation']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['payment-instruments'][':id']['deactivation']['$post']>,
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
    const mutationDefaults = getPostPaymentInstrumentsIdDeactivationMutationOptions<
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

export function getPostPayoutsMutationKey() {
  return ['payouts', '/payouts', 'POST'] as const
}

export function getPostPayoutsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.payouts.$post>>>>>,
    TError,
    InferRequestType<typeof client.payouts.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPayoutsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.payouts.$post>) {
      return parseResponse(client.payouts.$post(args, options))
    },
  })
}

export function createPostPayouts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.payouts.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.payouts.$post>,
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
    const mutationDefaults = getPostPayoutsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPaypalAccountsQueryKey(
  args: InferRequestType<(typeof client)['paypal-accounts']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['paypal-accounts', '/paypal-accounts', keyArgs] as const
}

export function getPaypalAccountsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['paypal-accounts']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['paypal-accounts']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['paypal-accounts']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPaypalAccountsQueryKey>
  >({
    queryKey: getPaypalAccountsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['paypal-accounts'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createPaypalAccounts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['paypal-accounts']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['paypal-accounts']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['paypal-accounts']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getPaypalAccountsQueryKey>
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
    return { ...getPaypalAccountsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostPaypalAccountsMutationKey() {
  return ['paypal-accounts', '/paypal-accounts', 'POST'] as const
}

export function getPostPaypalAccountsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['paypal-accounts']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['paypal-accounts']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostPaypalAccountsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['paypal-accounts']['$post']>) {
      return parseResponse(client['paypal-accounts'].$post(args, options))
    },
  })
}

export function createPostPaypalAccounts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['paypal-accounts']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client)['paypal-accounts']['$post']>,
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
    const mutationDefaults = getPostPaypalAccountsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPaypalAccountsIdQueryKey(
  args: InferRequestType<(typeof client)['paypal-accounts'][':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['paypal-accounts', '/paypal-accounts/:id', keyArgs] as const
}

export function getPaypalAccountsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['paypal-accounts'][':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['paypal-accounts'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['paypal-accounts'][':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPaypalAccountsIdQueryKey>
  >({
    queryKey: getPaypalAccountsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['paypal-accounts'][':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createPaypalAccountsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['paypal-accounts'][':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['paypal-accounts'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['paypal-accounts'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getPaypalAccountsIdQueryKey>
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
    return { ...getPaypalAccountsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPutPaypalAccountsIdMutationKey() {
  return ['paypal-accounts', '/paypal-accounts/:id', 'PUT'] as const
}

export function getPutPaypalAccountsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['paypal-accounts'][':id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['paypal-accounts'][':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutPaypalAccountsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['paypal-accounts'][':id']['$put']>) {
      return parseResponse(client['paypal-accounts'][':id'].$put(args, options))
    },
  })
}

export function createPutPaypalAccountsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['paypal-accounts'][':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['paypal-accounts'][':id']['$put']>,
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
    const mutationDefaults = getPutPaypalAccountsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostPaypalAccountsIdDeactivationMutationKey() {
  return ['paypal-accounts', '/paypal-accounts/:id/deactivation', 'POST'] as const
}

export function getPostPaypalAccountsIdDeactivationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['paypal-accounts'][':id']['deactivation']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['paypal-accounts'][':id']['deactivation']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostPaypalAccountsIdDeactivationMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['paypal-accounts'][':id']['deactivation']['$post']>,
    ) {
      return parseResponse(client['paypal-accounts'][':id'].deactivation.$post(args, options))
    },
  })
}

export function createPostPaypalAccountsIdDeactivation<
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
                  ReturnType<(typeof client)['paypal-accounts'][':id']['deactivation']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['paypal-accounts'][':id']['deactivation']['$post']>,
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
    const mutationDefaults = getPostPaypalAccountsIdDeactivationMutationOptions<
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

export function getPlansQueryKey(args: InferRequestType<typeof client.plans.$get>) {
  const { header: _, ...keyArgs } = args
  return ['plans', '/plans', keyArgs] as const
}

export function getPlansQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.plans.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.plans.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.plans.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getPlansQueryKey>
  >({
    queryKey: getPlansQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.plans.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createPlans<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.plans.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.plans.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.plans.$get>>>>>,
          TError,
          TData,
          ReturnType<typeof getPlansQueryKey>
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
    return { ...getPlansQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostPlansMutationKey() {
  return ['plans', '/plans', 'POST'] as const
}

export function getPostPlansMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.plans.$post>>>>>,
    TError,
    InferRequestType<typeof client.plans.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPlansMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.plans.$post>) {
      return parseResponse(client.plans.$post(args, options))
    },
  })
}

export function createPostPlans<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.plans.$post>>>>>,
          TError,
          InferRequestType<typeof client.plans.$post>,
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
    const mutationDefaults = getPostPlansMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPlansIdQueryKey(args: InferRequestType<(typeof client.plans)[':id']['$get']>) {
  const { header: _, ...keyArgs } = args
  return ['plans', '/plans/:id', keyArgs] as const
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

export function getPutPlansIdMutationKey() {
  return ['plans', '/plans/:id', 'PUT'] as const
}

export function getPutPlansIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.plans)[':id']['$put']>>>>
    >,
    TError,
    InferRequestType<(typeof client.plans)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutPlansIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.plans)[':id']['$put']>) {
      return parseResponse(client.plans[':id'].$put(args, options))
    },
  })
}

export function createPutPlansId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.plans)[':id']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.plans)[':id']['$put']>,
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
    const mutationDefaults = getPutPlansIdMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeletePlansIdMutationKey() {
  return ['plans', '/plans/:id', 'DELETE'] as const
}

export function getDeletePlansIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.plans)[':id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.plans)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeletePlansIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.plans)[':id']['$delete']>) {
      return parseResponse(client.plans[':id'].$delete(args, options))
    },
  })
}

export function createDeletePlansId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<(typeof client.plans)[':id']['$delete']>>>
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.plans)[':id']['$delete']>,
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
    const mutationDefaults = getDeletePlansIdMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getProductsQueryKey(args: InferRequestType<typeof client.products.$get>) {
  const { header: _, ...keyArgs } = args
  return ['products', '/products', keyArgs] as const
}

export function getProductsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.products.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.products.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.products.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getProductsQueryKey>
  >({
    queryKey: getProductsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.products.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createProducts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.products.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.products.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.products.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getProductsQueryKey>
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
    return { ...getProductsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostProductsMutationKey() {
  return ['products', '/products', 'POST'] as const
}

export function getPostProductsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.products.$post>>>>>,
    TError,
    InferRequestType<typeof client.products.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostProductsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.products.$post>) {
      return parseResponse(client.products.$post(args, options))
    },
  })
}

export function createPostProducts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.products.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.products.$post>,
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
    const mutationDefaults = getPostProductsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getProductsIdQueryKey(
  args: InferRequestType<(typeof client.products)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['products', '/products/:id', keyArgs] as const
}

export function getProductsIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.products)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.products)[':id']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.products)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getProductsIdQueryKey>
  >({
    queryKey: getProductsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.products[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createProductsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.products)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.products)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.products)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getProductsIdQueryKey>
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
    return { ...getProductsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPutProductsIdMutationKey() {
  return ['products', '/products/:id', 'PUT'] as const
}

export function getPutProductsIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.products)[':id']['$put']>>>>
    >,
    TError,
    InferRequestType<(typeof client.products)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutProductsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.products)[':id']['$put']>) {
      return parseResponse(client.products[':id'].$put(args, options))
    },
  })
}

export function createPutProductsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.products)[':id']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.products)[':id']['$put']>,
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
    const mutationDefaults = getPutProductsIdMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteProductsIdMutationKey() {
  return ['products', '/products/:id', 'DELETE'] as const
}

export function getDeleteProductsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.products)[':id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.products)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteProductsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.products)[':id']['$delete']>) {
      return parseResponse(client.products[':id'].$delete(args, options))
    },
  })
}

export function createDeleteProductsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.products)[':id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.products)[':id']['$delete']>,
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
    const mutationDefaults = getDeleteProductsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostReadyToPayMutationKey() {
  return ['ready-to-pay', '/ready-to-pay', 'POST'] as const
}

export function getPostReadyToPayMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['ready-to-pay']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['ready-to-pay']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostReadyToPayMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['ready-to-pay']['$post']>) {
      return parseResponse(client['ready-to-pay'].$post(args, options))
    },
  })
}

export function createPostReadyToPay<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['ready-to-pay']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client)['ready-to-pay']['$post']>,
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
    const mutationDefaults = getPostReadyToPayMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getSearchQueryKey(args: InferRequestType<typeof client.search.$get>) {
  const { header: _, ...keyArgs } = args
  return ['search', '/search', keyArgs] as const
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

export function getShippingZonesQueryKey(
  args: InferRequestType<(typeof client)['shipping-zones']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['shipping-zones', '/shipping-zones', keyArgs] as const
}

export function getShippingZonesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['shipping-zones']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['shipping-zones']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['shipping-zones']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getShippingZonesQueryKey>
  >({
    queryKey: getShippingZonesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['shipping-zones'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createShippingZones<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['shipping-zones']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['shipping-zones']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['shipping-zones']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getShippingZonesQueryKey>
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
    return { ...getShippingZonesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostShippingZonesMutationKey() {
  return ['shipping-zones', '/shipping-zones', 'POST'] as const
}

export function getPostShippingZonesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['shipping-zones']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['shipping-zones']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostShippingZonesMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['shipping-zones']['$post']>) {
      return parseResponse(client['shipping-zones'].$post(args, options))
    },
  })
}

export function createPostShippingZones<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['shipping-zones']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client)['shipping-zones']['$post']>,
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
    const mutationDefaults = getPostShippingZonesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getShippingZonesIdQueryKey(
  args: InferRequestType<(typeof client)['shipping-zones'][':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['shipping-zones', '/shipping-zones/:id', keyArgs] as const
}

export function getShippingZonesIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['shipping-zones'][':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['shipping-zones'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['shipping-zones'][':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getShippingZonesIdQueryKey>
  >({
    queryKey: getShippingZonesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['shipping-zones'][':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createShippingZonesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['shipping-zones'][':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['shipping-zones'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['shipping-zones'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getShippingZonesIdQueryKey>
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
    return { ...getShippingZonesIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPutShippingZonesIdMutationKey() {
  return ['shipping-zones', '/shipping-zones/:id', 'PUT'] as const
}

export function getPutShippingZonesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['shipping-zones'][':id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['shipping-zones'][':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutShippingZonesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['shipping-zones'][':id']['$put']>) {
      return parseResponse(client['shipping-zones'][':id'].$put(args, options))
    },
  })
}

export function createPutShippingZonesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['shipping-zones'][':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['shipping-zones'][':id']['$put']>,
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
    const mutationDefaults = getPutShippingZonesIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteShippingZonesIdMutationKey() {
  return ['shipping-zones', '/shipping-zones/:id', 'DELETE'] as const
}

export function getDeleteShippingZonesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['shipping-zones'][':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client)['shipping-zones'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteShippingZonesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['shipping-zones'][':id']['$delete']>) {
      return parseResponse(client['shipping-zones'][':id'].$delete(args, options))
    },
  })
}

export function createDeleteShippingZonesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client)['shipping-zones'][':id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client)['shipping-zones'][':id']['$delete']>,
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
    const mutationDefaults = getDeleteShippingZonesIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getSubscriptionCancellationsQueryKey(
  args: InferRequestType<(typeof client)['subscription-cancellations']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['subscription-cancellations', '/subscription-cancellations', keyArgs] as const
}

export function getSubscriptionCancellationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['subscription-cancellations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['subscription-cancellations']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['subscription-cancellations']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSubscriptionCancellationsQueryKey>
  >({
    queryKey: getSubscriptionCancellationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['subscription-cancellations'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSubscriptionCancellations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['subscription-cancellations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['subscription-cancellations']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['subscription-cancellations']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getSubscriptionCancellationsQueryKey>
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
      ...getSubscriptionCancellationsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostSubscriptionCancellationsMutationKey() {
  return ['subscription-cancellations', '/subscription-cancellations', 'POST'] as const
}

export function getPostSubscriptionCancellationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['subscription-cancellations']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['subscription-cancellations']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSubscriptionCancellationsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['subscription-cancellations']['$post']>,
    ) {
      return parseResponse(client['subscription-cancellations'].$post(args, options))
    },
  })
}

export function createPostSubscriptionCancellations<
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
                Awaited<ReturnType<(typeof client)['subscription-cancellations']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['subscription-cancellations']['$post']>,
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
    const mutationDefaults = getPostSubscriptionCancellationsMutationOptions<
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

export function getSubscriptionCancellationsIdQueryKey(
  args: InferRequestType<(typeof client)['subscription-cancellations'][':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['subscription-cancellations', '/subscription-cancellations/:id', keyArgs] as const
}

export function getSubscriptionCancellationsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['subscription-cancellations'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['subscription-cancellations'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['subscription-cancellations'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSubscriptionCancellationsIdQueryKey>
  >({
    queryKey: getSubscriptionCancellationsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['subscription-cancellations'][':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSubscriptionCancellationsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['subscription-cancellations'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['subscription-cancellations'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['subscription-cancellations'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getSubscriptionCancellationsIdQueryKey>
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
      ...getSubscriptionCancellationsIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutSubscriptionCancellationsIdMutationKey() {
  return ['subscription-cancellations', '/subscription-cancellations/:id', 'PUT'] as const
}

export function getPutSubscriptionCancellationsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['subscription-cancellations'][':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['subscription-cancellations'][':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutSubscriptionCancellationsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['subscription-cancellations'][':id']['$put']>,
    ) {
      return parseResponse(client['subscription-cancellations'][':id'].$put(args, options))
    },
  })
}

export function createPutSubscriptionCancellationsId<
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
                Awaited<ReturnType<(typeof client)['subscription-cancellations'][':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['subscription-cancellations'][':id']['$put']>,
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
    const mutationDefaults = getPutSubscriptionCancellationsIdMutationOptions<
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

export function getDeleteSubscriptionCancellationsIdMutationKey() {
  return ['subscription-cancellations', '/subscription-cancellations/:id', 'DELETE'] as const
}

export function getDeleteSubscriptionCancellationsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['subscription-cancellations'][':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client)['subscription-cancellations'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSubscriptionCancellationsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['subscription-cancellations'][':id']['$delete']>,
    ) {
      return parseResponse(client['subscription-cancellations'][':id'].$delete(args, options))
    },
  })
}

export function createDeleteSubscriptionCancellationsId<
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
                    ReturnType<(typeof client)['subscription-cancellations'][':id']['$delete']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client)['subscription-cancellations'][':id']['$delete']>,
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
    const mutationDefaults = getDeleteSubscriptionCancellationsIdMutationOptions<
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

export function getSubscriptionReactivationsQueryKey(
  args: InferRequestType<(typeof client)['subscription-reactivations']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['subscription-reactivations', '/subscription-reactivations', keyArgs] as const
}

export function getSubscriptionReactivationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['subscription-reactivations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['subscription-reactivations']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['subscription-reactivations']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSubscriptionReactivationsQueryKey>
  >({
    queryKey: getSubscriptionReactivationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['subscription-reactivations'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSubscriptionReactivations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['subscription-reactivations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['subscription-reactivations']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['subscription-reactivations']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getSubscriptionReactivationsQueryKey>
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
      ...getSubscriptionReactivationsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostSubscriptionReactivationsMutationKey() {
  return ['subscription-reactivations', '/subscription-reactivations', 'POST'] as const
}

export function getPostSubscriptionReactivationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['subscription-reactivations']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['subscription-reactivations']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSubscriptionReactivationsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['subscription-reactivations']['$post']>,
    ) {
      return parseResponse(client['subscription-reactivations'].$post(args, options))
    },
  })
}

export function createPostSubscriptionReactivations<
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
                Awaited<ReturnType<(typeof client)['subscription-reactivations']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['subscription-reactivations']['$post']>,
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
    const mutationDefaults = getPostSubscriptionReactivationsMutationOptions<
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

export function getSubscriptionReactivationsIdQueryKey(
  args: InferRequestType<(typeof client)['subscription-reactivations'][':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['subscription-reactivations', '/subscription-reactivations/:id', keyArgs] as const
}

export function getSubscriptionReactivationsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['subscription-reactivations'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['subscription-reactivations'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['subscription-reactivations'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSubscriptionReactivationsIdQueryKey>
  >({
    queryKey: getSubscriptionReactivationsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['subscription-reactivations'][':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSubscriptionReactivationsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['subscription-reactivations'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['subscription-reactivations'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['subscription-reactivations'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getSubscriptionReactivationsIdQueryKey>
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
      ...getSubscriptionReactivationsIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getSubscriptionsQueryKey(args: InferRequestType<typeof client.subscriptions.$get>) {
  const { header: _, ...keyArgs } = args
  return ['subscriptions', '/subscriptions', keyArgs] as const
}

export function getSubscriptionsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subscriptions.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.subscriptions.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subscriptions.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSubscriptionsQueryKey>
  >({
    queryKey: getSubscriptionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.subscriptions.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createSubscriptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subscriptions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.subscriptions.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subscriptions.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getSubscriptionsQueryKey>
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
    return { ...getSubscriptionsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostSubscriptionsMutationKey() {
  return ['subscriptions', '/subscriptions', 'POST'] as const
}

export function getPostSubscriptionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subscriptions.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.subscriptions.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSubscriptionsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.subscriptions.$post>) {
      return parseResponse(client.subscriptions.$post(args, options))
    },
  })
}

export function createPostSubscriptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subscriptions.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.subscriptions.$post>,
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
    const mutationDefaults = getPostSubscriptionsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getSubscriptionsIdQueryKey(
  args: InferRequestType<(typeof client.subscriptions)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['subscriptions', '/subscriptions/:id', keyArgs] as const
}

export function getSubscriptionsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.subscriptions)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.subscriptions)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.subscriptions)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSubscriptionsIdQueryKey>
  >({
    queryKey: getSubscriptionsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.subscriptions[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createSubscriptionsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.subscriptions)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.subscriptions)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.subscriptions)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getSubscriptionsIdQueryKey>
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
    return { ...getSubscriptionsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPutSubscriptionsIdMutationKey() {
  return ['subscriptions', '/subscriptions/:id', 'PUT'] as const
}

export function getPutSubscriptionsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.subscriptions)[':id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.subscriptions)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutSubscriptionsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.subscriptions)[':id']['$put']>) {
      return parseResponse(client.subscriptions[':id'].$put(args, options))
    },
  })
}

export function createPutSubscriptionsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.subscriptions)[':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.subscriptions)[':id']['$put']>,
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
    const mutationDefaults = getPutSubscriptionsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostSubscriptionsIdChangeItemsMutationKey() {
  return ['subscriptions', '/subscriptions/:id/change-items', 'POST'] as const
}

export function getPostSubscriptionsIdChangeItemsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.subscriptions)[':id']['change-items']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.subscriptions)[':id']['change-items']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSubscriptionsIdChangeItemsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.subscriptions)[':id']['change-items']['$post']>,
    ) {
      return parseResponse(client.subscriptions[':id']['change-items'].$post(args, options))
    },
  })
}

export function createPostSubscriptionsIdChangeItems<
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
                Awaited<ReturnType<(typeof client.subscriptions)[':id']['change-items']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.subscriptions)[':id']['change-items']['$post']>,
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
    const mutationDefaults = getPostSubscriptionsIdChangeItemsMutationOptions<
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

export function getPostSubscriptionsIdInterimInvoiceMutationKey() {
  return ['subscriptions', '/subscriptions/:id/interim-invoice', 'POST'] as const
}

export function getPostSubscriptionsIdInterimInvoiceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.subscriptions)[':id']['interim-invoice']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.subscriptions)[':id']['interim-invoice']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSubscriptionsIdInterimInvoiceMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.subscriptions)[':id']['interim-invoice']['$post']>,
    ) {
      return parseResponse(client.subscriptions[':id']['interim-invoice'].$post(args, options))
    },
  })
}

export function createPostSubscriptionsIdInterimInvoice<
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
                  ReturnType<(typeof client.subscriptions)[':id']['interim-invoice']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.subscriptions)[':id']['interim-invoice']['$post']>,
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
    const mutationDefaults = getPostSubscriptionsIdInterimInvoiceMutationOptions<
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

export function getSubscriptionsIdTimelineQueryKey(
  args: InferRequestType<(typeof client.subscriptions)[':id']['timeline']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['subscriptions', '/subscriptions/:id/timeline', keyArgs] as const
}

export function getSubscriptionsIdTimelineQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.subscriptions)[':id']['timeline']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.subscriptions)[':id']['timeline']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.subscriptions)[':id']['timeline']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSubscriptionsIdTimelineQueryKey>
  >({
    queryKey: getSubscriptionsIdTimelineQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.subscriptions[':id'].timeline.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSubscriptionsIdTimeline<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.subscriptions)[':id']['timeline']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.subscriptions)[':id']['timeline']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.subscriptions)[':id']['timeline']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getSubscriptionsIdTimelineQueryKey>
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
      ...getSubscriptionsIdTimelineQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostSubscriptionsIdTimelineMutationKey() {
  return ['subscriptions', '/subscriptions/:id/timeline', 'POST'] as const
}

export function getPostSubscriptionsIdTimelineMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.subscriptions)[':id']['timeline']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.subscriptions)[':id']['timeline']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSubscriptionsIdTimelineMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.subscriptions)[':id']['timeline']['$post']>,
    ) {
      return parseResponse(client.subscriptions[':id'].timeline.$post(args, options))
    },
  })
}

export function createPostSubscriptionsIdTimeline<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.subscriptions)[':id']['timeline']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.subscriptions)[':id']['timeline']['$post']>,
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
    const mutationDefaults = getPostSubscriptionsIdTimelineMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getSubscriptionsIdTimelineMessageIdQueryKey(
  args: InferRequestType<(typeof client.subscriptions)[':id']['timeline'][':messageId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['subscriptions', '/subscriptions/:id/timeline/:messageId', keyArgs] as const
}

export function getSubscriptionsIdTimelineMessageIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.subscriptions)[':id']['timeline'][':messageId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.subscriptions)[':id']['timeline'][':messageId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.subscriptions)[':id']['timeline'][':messageId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSubscriptionsIdTimelineMessageIdQueryKey>
  >({
    queryKey: getSubscriptionsIdTimelineMessageIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.subscriptions[':id'].timeline[':messageId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSubscriptionsIdTimelineMessageId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.subscriptions)[':id']['timeline'][':messageId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.subscriptions)[':id']['timeline'][':messageId']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.subscriptions)[':id']['timeline'][':messageId']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getSubscriptionsIdTimelineMessageIdQueryKey>
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
      ...getSubscriptionsIdTimelineMessageIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getDeleteSubscriptionsIdTimelineMessageIdMutationKey() {
  return ['subscriptions', '/subscriptions/:id/timeline/:messageId', 'DELETE'] as const
}

export function getDeleteSubscriptionsIdTimelineMessageIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.subscriptions)[':id']['timeline'][':messageId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSubscriptionsIdTimelineMessageIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.subscriptions)[':id']['timeline'][':messageId']['$delete']
      >,
    ) {
      return parseResponse(
        client.subscriptions[':id'].timeline[':messageId'].$delete(args, options),
      )
    },
  })
}

export function createDeleteSubscriptionsIdTimelineMessageId<
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
                    ReturnType<
                      (typeof client.subscriptions)[':id']['timeline'][':messageId']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.subscriptions)[':id']['timeline'][':messageId']['$delete']
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
    const mutationDefaults = getDeleteSubscriptionsIdTimelineMessageIdMutationOptions<
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

export function getSubscriptionsIdUpcomingInvoicesQueryKey(
  args: InferRequestType<(typeof client.subscriptions)[':id']['upcoming-invoices']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['subscriptions', '/subscriptions/:id/upcoming-invoices', keyArgs] as const
}

export function getSubscriptionsIdUpcomingInvoicesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.subscriptions)[':id']['upcoming-invoices']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.subscriptions)[':id']['upcoming-invoices']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.subscriptions)[':id']['upcoming-invoices']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSubscriptionsIdUpcomingInvoicesQueryKey>
  >({
    queryKey: getSubscriptionsIdUpcomingInvoicesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.subscriptions[':id']['upcoming-invoices'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSubscriptionsIdUpcomingInvoices<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.subscriptions)[':id']['upcoming-invoices']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.subscriptions)[':id']['upcoming-invoices']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.subscriptions)[':id']['upcoming-invoices']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getSubscriptionsIdUpcomingInvoicesQueryKey>
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
      ...getSubscriptionsIdUpcomingInvoicesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostSubscriptionsIdUpcomingInvoicesInvoiceIdIssueMutationKey() {
  return ['subscriptions', '/subscriptions/:id/upcoming-invoices/:invoiceId/issue', 'POST'] as const
}

export function getPostSubscriptionsIdUpcomingInvoicesInvoiceIdIssueMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.subscriptions)[':id']['upcoming-invoices'][':invoiceId']['issue']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostSubscriptionsIdUpcomingInvoicesInvoiceIdIssueMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.subscriptions)[':id']['upcoming-invoices'][':invoiceId']['issue']['$post']
      >,
    ) {
      return parseResponse(
        client.subscriptions[':id']['upcoming-invoices'][':invoiceId'].issue.$post(args, options),
      )
    },
  })
}

export function createPostSubscriptionsIdUpcomingInvoicesInvoiceIdIssue<
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
                    (typeof client.subscriptions)[':id']['upcoming-invoices'][':invoiceId']['issue']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.subscriptions)[':id']['upcoming-invoices'][':invoiceId']['issue']['$post']
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
    const mutationDefaults = getPostSubscriptionsIdUpcomingInvoicesInvoiceIdIssueMutationOptions<
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

export function getTagsQueryKey(args: InferRequestType<typeof client.tags.$get>) {
  const { header: _, ...keyArgs } = args
  return ['tags', '/tags', keyArgs] as const
}

export function getTagsQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tags.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.tags.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tags.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getTagsQueryKey>
  >({
    queryKey: getTagsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.tags.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createTags<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tags.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.tags.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tags.$get>>>>>,
          TError,
          TData,
          ReturnType<typeof getTagsQueryKey>
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
    return { ...getTagsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostTagsMutationKey() {
  return ['tags', '/tags', 'POST'] as const
}

export function getPostTagsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tags.$post>>>>>,
    TError,
    InferRequestType<typeof client.tags.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTagsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.tags.$post>) {
      return parseResponse(client.tags.$post(args, options))
    },
  })
}

export function createPostTags<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tags.$post>>>>>,
          TError,
          InferRequestType<typeof client.tags.$post>,
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
    const mutationDefaults = getPostTagsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getTagsTagQueryKey(args: InferRequestType<(typeof client.tags)[':tag']['$get']>) {
  const { header: _, ...keyArgs } = args
  return ['tags', '/tags/:tag', keyArgs] as const
}

export function getTagsTagQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':tag']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.tags)[':tag']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':tag']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getTagsTagQueryKey>
  >({
    queryKey: getTagsTagQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.tags[':tag'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createTagsTag<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':tag']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.tags)[':tag']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':tag']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getTagsTagQueryKey>
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
    return { ...getTagsTagQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getDeleteTagsTagMutationKey() {
  return ['tags', '/tags/:tag', 'DELETE'] as const
}

export function getDeleteTagsTagMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':tag']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.tags)[':tag']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteTagsTagMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.tags)[':tag']['$delete']>) {
      return parseResponse(client.tags[':tag'].$delete(args, options))
    },
  })
}

export function createDeleteTagsTag<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':tag']['$delete']>>>
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.tags)[':tag']['$delete']>,
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
    const mutationDefaults = getDeleteTagsTagMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPatchTagsTagMutationKey() {
  return ['tags', '/tags/:tag', 'PATCH'] as const
}

export function getPatchTagsTagMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':tag']['$patch']>>>>
    >,
    TError,
    InferRequestType<(typeof client.tags)[':tag']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchTagsTagMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.tags)[':tag']['$patch']>) {
      return parseResponse(client.tags[':tag'].$patch(args, options))
    },
  })
}

export function createPatchTagsTag<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':tag']['$patch']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.tags)[':tag']['$patch']>,
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
    const mutationDefaults = getPatchTagsTagMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostTagsTagCustomersMutationKey() {
  return ['tags', '/tags/:tag/customers', 'POST'] as const
}

export function getPostTagsTagCustomersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tags)[':tag']['customers']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.tags)[':tag']['customers']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTagsTagCustomersMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.tags)[':tag']['customers']['$post']>) {
      return parseResponse(client.tags[':tag'].customers.$post(args, options))
    },
  })
}

export function createPostTagsTagCustomers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.tags)[':tag']['customers']['$post']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.tags)[':tag']['customers']['$post']>,
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
    const mutationDefaults = getPostTagsTagCustomersMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteTagsTagCustomersMutationKey() {
  return ['tags', '/tags/:tag/customers', 'DELETE'] as const
}

export function getDeleteTagsTagCustomersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tags)[':tag']['customers']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.tags)[':tag']['customers']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteTagsTagCustomersMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.tags)[':tag']['customers']['$delete']>) {
      return parseResponse(client.tags[':tag'].customers.$delete(args, options))
    },
  })
}

export function createDeleteTagsTagCustomers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.tags)[':tag']['customers']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.tags)[':tag']['customers']['$delete']>,
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
    const mutationDefaults = getDeleteTagsTagCustomersMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostTagsTagCustomersCustomerIdMutationKey() {
  return ['tags', '/tags/:tag/customers/:customerId', 'POST'] as const
}

export function getPostTagsTagCustomersCustomerIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tags)[':tag']['customers'][':customerId']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.tags)[':tag']['customers'][':customerId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTagsTagCustomersCustomerIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.tags)[':tag']['customers'][':customerId']['$post']>,
    ) {
      return parseResponse(client.tags[':tag'].customers[':customerId'].$post(args, options))
    },
  })
}

export function createPostTagsTagCustomersCustomerId<
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
                    ReturnType<(typeof client.tags)[':tag']['customers'][':customerId']['$post']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.tags)[':tag']['customers'][':customerId']['$post']>,
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
    const mutationDefaults = getPostTagsTagCustomersCustomerIdMutationOptions<
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

export function getDeleteTagsTagCustomersCustomerIdMutationKey() {
  return ['tags', '/tags/:tag/customers/:customerId', 'DELETE'] as const
}

export function getDeleteTagsTagCustomersCustomerIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tags)[':tag']['customers'][':customerId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.tags)[':tag']['customers'][':customerId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteTagsTagCustomersCustomerIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.tags)[':tag']['customers'][':customerId']['$delete']>,
    ) {
      return parseResponse(client.tags[':tag'].customers[':customerId'].$delete(args, options))
    },
  })
}

export function createDeleteTagsTagCustomersCustomerId<
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
                    ReturnType<(typeof client.tags)[':tag']['customers'][':customerId']['$delete']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.tags)[':tag']['customers'][':customerId']['$delete']>,
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
    const mutationDefaults = getDeleteTagsTagCustomersCustomerIdMutationOptions<
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

export function getTokensQueryKey(args: InferRequestType<typeof client.tokens.$get>) {
  const { header: _, ...keyArgs } = args
  return ['tokens', '/tokens', keyArgs] as const
}

export function getTokensQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tokens.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.tokens.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tokens.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getTokensQueryKey>
  >({
    queryKey: getTokensQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.tokens.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createTokens<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tokens.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.tokens.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tokens.$get>>>>>,
          TError,
          TData,
          ReturnType<typeof getTokensQueryKey>
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
    return { ...getTokensQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostTokensMutationKey() {
  return ['tokens', '/tokens', 'POST'] as const
}

export function getPostTokensMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tokens.$post>>>>>,
    TError,
    InferRequestType<typeof client.tokens.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTokensMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.tokens.$post>) {
      return parseResponse(client.tokens.$post(args, options))
    },
  })
}

export function createPostTokens<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tokens.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.tokens.$post>,
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
    const mutationDefaults = getPostTokensMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getTokensTokenQueryKey(
  args: InferRequestType<(typeof client.tokens)[':token']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['tokens', '/tokens/:token', keyArgs] as const
}

export function getTokensTokenQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.tokens)[':token']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tokens)[':token']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tokens)[':token']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTokensTokenQueryKey>
  >({
    queryKey: getTokensTokenQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.tokens[':token'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createTokensToken<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.tokens)[':token']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.tokens)[':token']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.tokens)[':token']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getTokensTokenQueryKey>
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
    return { ...getTokensTokenQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getTransactionsQueryKey(args: InferRequestType<typeof client.transactions.$get>) {
  const { header: _, ...keyArgs } = args
  return ['transactions', '/transactions', keyArgs] as const
}

export function getTransactionsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.transactions.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.transactions.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.transactions.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getTransactionsQueryKey>
  >({
    queryKey: getTransactionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.transactions.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createTransactions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.transactions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.transactions.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.transactions.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getTransactionsQueryKey>
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
    return { ...getTransactionsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostTransactionsMutationKey() {
  return ['transactions', '/transactions', 'POST'] as const
}

export function getPostTransactionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.transactions.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.transactions.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTransactionsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.transactions.$post>) {
      return parseResponse(client.transactions.$post(args, options))
    },
  })
}

export function createPostTransactions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.transactions.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.transactions.$post>,
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
    const mutationDefaults = getPostTransactionsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getTransactionsIdQueryKey(
  args: InferRequestType<(typeof client.transactions)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['transactions', '/transactions/:id', keyArgs] as const
}

export function getTransactionsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.transactions)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.transactions)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.transactions)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTransactionsIdQueryKey>
  >({
    queryKey: getTransactionsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.transactions[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createTransactionsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.transactions)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.transactions)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.transactions)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getTransactionsIdQueryKey>
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
    return { ...getTransactionsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPatchTransactionsIdMutationKey() {
  return ['transactions', '/transactions/:id', 'PATCH'] as const
}

export function getPatchTransactionsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.transactions)[':id']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.transactions)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchTransactionsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.transactions)[':id']['$patch']>) {
      return parseResponse(client.transactions[':id'].$patch(args, options))
    },
  })
}

export function createPatchTransactionsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.transactions)[':id']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.transactions)[':id']['$patch']>,
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
    const mutationDefaults = getPatchTransactionsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostTransactionsIdQueryMutationKey() {
  return ['transactions', '/transactions/:id/query', 'POST'] as const
}

export function getPostTransactionsIdQueryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.transactions)[':id']['query']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.transactions)[':id']['query']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTransactionsIdQueryMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.transactions)[':id']['query']['$post']>,
    ) {
      return parseResponse(client.transactions[':id'].query.$post(args, options))
    },
  })
}

export function createPostTransactionsIdQuery<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.transactions)[':id']['query']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.transactions)[':id']['query']['$post']>,
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
    const mutationDefaults = getPostTransactionsIdQueryMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostTransactionsIdRefundMutationKey() {
  return ['transactions', '/transactions/:id/refund', 'POST'] as const
}

export function getPostTransactionsIdRefundMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.transactions)[':id']['refund']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.transactions)[':id']['refund']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTransactionsIdRefundMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.transactions)[':id']['refund']['$post']>,
    ) {
      return parseResponse(client.transactions[':id'].refund.$post(args, options))
    },
  })
}

export function createPostTransactionsIdRefund<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.transactions)[':id']['refund']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.transactions)[':id']['refund']['$post']>,
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
    const mutationDefaults = getPostTransactionsIdRefundMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getTransactionsIdTimelineQueryKey(
  args: InferRequestType<(typeof client.transactions)[':id']['timeline']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['transactions', '/transactions/:id/timeline', keyArgs] as const
}

export function getTransactionsIdTimelineQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.transactions)[':id']['timeline']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.transactions)[':id']['timeline']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.transactions)[':id']['timeline']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTransactionsIdTimelineQueryKey>
  >({
    queryKey: getTransactionsIdTimelineQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.transactions[':id'].timeline.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createTransactionsIdTimeline<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.transactions)[':id']['timeline']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.transactions)[':id']['timeline']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.transactions)[':id']['timeline']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getTransactionsIdTimelineQueryKey>
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
      ...getTransactionsIdTimelineQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostTransactionsIdTimelineMutationKey() {
  return ['transactions', '/transactions/:id/timeline', 'POST'] as const
}

export function getPostTransactionsIdTimelineMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.transactions)[':id']['timeline']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.transactions)[':id']['timeline']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTransactionsIdTimelineMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.transactions)[':id']['timeline']['$post']>,
    ) {
      return parseResponse(client.transactions[':id'].timeline.$post(args, options))
    },
  })
}

export function createPostTransactionsIdTimeline<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.transactions)[':id']['timeline']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.transactions)[':id']['timeline']['$post']>,
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
    const mutationDefaults = getPostTransactionsIdTimelineMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getTransactionsIdTimelineMessageIdQueryKey(
  args: InferRequestType<(typeof client.transactions)[':id']['timeline'][':messageId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['transactions', '/transactions/:id/timeline/:messageId', keyArgs] as const
}

export function getTransactionsIdTimelineMessageIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.transactions)[':id']['timeline'][':messageId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.transactions)[':id']['timeline'][':messageId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.transactions)[':id']['timeline'][':messageId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTransactionsIdTimelineMessageIdQueryKey>
  >({
    queryKey: getTransactionsIdTimelineMessageIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.transactions[':id'].timeline[':messageId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createTransactionsIdTimelineMessageId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.transactions)[':id']['timeline'][':messageId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.transactions)[':id']['timeline'][':messageId']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.transactions)[':id']['timeline'][':messageId']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getTransactionsIdTimelineMessageIdQueryKey>
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
      ...getTransactionsIdTimelineMessageIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getDeleteTransactionsIdTimelineMessageIdMutationKey() {
  return ['transactions', '/transactions/:id/timeline/:messageId', 'DELETE'] as const
}

export function getDeleteTransactionsIdTimelineMessageIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.transactions)[':id']['timeline'][':messageId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteTransactionsIdTimelineMessageIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.transactions)[':id']['timeline'][':messageId']['$delete']
      >,
    ) {
      return parseResponse(client.transactions[':id'].timeline[':messageId'].$delete(args, options))
    },
  })
}

export function createDeleteTransactionsIdTimelineMessageId<
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
                    ReturnType<
                      (typeof client.transactions)[':id']['timeline'][':messageId']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.transactions)[':id']['timeline'][':messageId']['$delete']
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
    const mutationDefaults = getDeleteTransactionsIdTimelineMessageIdMutationOptions<
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

export function getPostTransactionsIdUpdateMutationKey() {
  return ['transactions', '/transactions/:id/update', 'POST'] as const
}

export function getPostTransactionsIdUpdateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.transactions)[':id']['update']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.transactions)[':id']['update']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTransactionsIdUpdateMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.transactions)[':id']['update']['$post']>,
    ) {
      return parseResponse(client.transactions[':id'].update.$post(args, options))
    },
  })
}

export function createPostTransactionsIdUpdate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.transactions)[':id']['update']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.transactions)[':id']['update']['$post']>,
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
    const mutationDefaults = getPostTransactionsIdUpdateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}
