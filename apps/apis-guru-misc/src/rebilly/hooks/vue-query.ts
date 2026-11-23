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

export function get3dsecureQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['3dsecure']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['3dsecure', '/3dsecure', keyArgs] as const
}

export function get3dsecureQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['3dsecure']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get3dsecureQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['3dsecure'].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function use3dsecure<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['3dsecure']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['3dsecure']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['3dsecure']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['3dsecure']['$get']>>>
            >
          >,
          ReturnType<typeof get3dsecureQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['3dsecure']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof get3dsecureQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get3dsecureQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['3dsecure'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePost3dsecure<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['3dsecure']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client)['3dsecure']['$post']>,
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
  const mutationDefaults = getPost3dsecureMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function get3dsecureIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['3dsecure'][':id']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['3dsecure', '/3dsecure/:id', keyArgs] as const
}

export function get3dsecureIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['3dsecure'][':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get3dsecureIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['3dsecure'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use3dsecureId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['3dsecure'][':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['3dsecure'][':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['3dsecure'][':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['3dsecure'][':id']['$get']>>>
            >
          >,
          ReturnType<typeof get3dsecureIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['3dsecure'][':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof get3dsecureIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get3dsecureIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['3dsecure'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAmlQueryKey(args: MaybeRefOrGetter<InferRequestType<typeof client.aml.$get>>) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['aml', '/aml', keyArgs] as const
}

export function getAmlQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.aml.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAmlQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.aml.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useAml<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.aml.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.aml.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.aml.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.aml.$get>>>>>,
          ReturnType<typeof getAmlQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.aml.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAmlQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAmlQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.aml.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAttachmentsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.attachments.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['attachments', '/attachments', keyArgs] as const
}

export function getAttachmentsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.attachments.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAttachmentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.attachments.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useAttachments<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.attachments.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.attachments.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.attachments.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.attachments.$get>>>>
          >,
          ReturnType<typeof getAttachmentsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.attachments.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAttachmentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAttachmentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.attachments.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostAttachments<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.attachments.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.attachments.$post>,
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
  const mutationDefaults = getPostAttachmentsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getAttachmentsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.attachments)[':id']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['attachments', '/attachments/:id', keyArgs] as const
}

export function getAttachmentsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.attachments)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAttachmentsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.attachments[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAttachmentsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.attachments)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.attachments)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.attachments)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.attachments)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getAttachmentsIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.attachments)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAttachmentsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAttachmentsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.attachments[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutAttachmentsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.attachments)[':id']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.attachments)[':id']['$put']>,
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
  const mutationDefaults = getPutAttachmentsIdMutationOptions<TError, TOnMutateResult>(
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

export function useDeleteAttachmentsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getDeleteAttachmentsIdMutationOptions<TError, TOnMutateResult>(
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

export function getAuthenticationOptionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['authentication-options']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['authentication-options', '/authentication-options', keyArgs] as const
}

export function getAuthenticationOptionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['authentication-options']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAuthenticationOptionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['authentication-options'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAuthenticationOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['authentication-options']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['authentication-options']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['authentication-options']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['authentication-options']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAuthenticationOptionsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['authentication-options']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAuthenticationOptionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAuthenticationOptionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['authentication-options'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutAuthenticationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPutAuthenticationOptionsMutationOptions<TError, TOnMutateResult>(
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

export function getAuthenticationTokensQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['authentication-tokens']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['authentication-tokens', '/authentication-tokens', keyArgs] as const
}

export function getAuthenticationTokensQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['authentication-tokens']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAuthenticationTokensQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['authentication-tokens'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAuthenticationTokens<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['authentication-tokens']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['authentication-tokens']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['authentication-tokens']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['authentication-tokens']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAuthenticationTokensQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['authentication-tokens']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAuthenticationTokensQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAuthenticationTokensQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['authentication-tokens'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostAuthenticationTokens<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPostAuthenticationTokensMutationOptions<TError, TOnMutateResult>(
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

export function getAuthenticationTokensTokenQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['authentication-tokens'][':token']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['authentication-tokens', '/authentication-tokens/:token', keyArgs] as const
}

export function getAuthenticationTokensTokenQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['authentication-tokens'][':token']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAuthenticationTokensTokenQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['authentication-tokens'][':token'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAuthenticationTokensToken<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['authentication-tokens'][':token']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['authentication-tokens'][':token']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['authentication-tokens'][':token']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['authentication-tokens'][':token']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAuthenticationTokensTokenQueryKey>
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
          Awaited<ReturnType<(typeof client)['authentication-tokens'][':token']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAuthenticationTokensTokenQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAuthenticationTokensTokenQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['authentication-tokens'][':token'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteAuthenticationTokensToken<
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
                  Awaited<ReturnType<(typeof client)['authentication-tokens'][':token']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client)['authentication-tokens'][':token']['$delete']>,
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
  const mutationDefaults = getDeleteAuthenticationTokensTokenMutationOptions<
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

export function usePostAuthenticationTokensTokenExchange<
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
                    (typeof client)['authentication-tokens'][':token']['exchange']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['authentication-tokens'][':token']['exchange']['$post']>,
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
  const mutationDefaults = getPostAuthenticationTokensTokenExchangeMutationOptions<
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

export function getBankAccountsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['bank-accounts']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['bank-accounts', '/bank-accounts', keyArgs] as const
}

export function getBankAccountsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['bank-accounts']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBankAccountsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['bank-accounts'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBankAccounts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['bank-accounts']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['bank-accounts']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['bank-accounts']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['bank-accounts']['$get']>>>
            >
          >,
          ReturnType<typeof getBankAccountsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['bank-accounts']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBankAccountsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBankAccountsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['bank-accounts'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostBankAccounts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['bank-accounts']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client)['bank-accounts']['$post']>,
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
  const mutationDefaults = getPostBankAccountsMutationOptions<TError, TOnMutateResult>(
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

export function getBankAccountsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['bank-accounts'][':id']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['bank-accounts', '/bank-accounts/:id', keyArgs] as const
}

export function getBankAccountsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['bank-accounts'][':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBankAccountsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['bank-accounts'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBankAccountsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['bank-accounts'][':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['bank-accounts'][':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['bank-accounts'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['bank-accounts'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getBankAccountsIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['bank-accounts'][':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBankAccountsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBankAccountsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['bank-accounts'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutBankAccountsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPutBankAccountsIdMutationOptions<TError, TOnMutateResult>(
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

export function usePatchBankAccountsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPatchBankAccountsIdMutationOptions<TError, TOnMutateResult>(
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

export function usePostBankAccountsIdDeactivation<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPostBankAccountsIdDeactivationMutationOptions<
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

export function getBlocklistsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.blocklists.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['blocklists', '/blocklists', keyArgs] as const
}

export function getBlocklistsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.blocklists.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBlocklistsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.blocklists.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useBlocklists<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.blocklists.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.blocklists.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.blocklists.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.blocklists.$get>>>>
          >,
          ReturnType<typeof getBlocklistsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.blocklists.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getBlocklistsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBlocklistsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.blocklists.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostBlocklists<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.blocklists.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.blocklists.$post>,
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
  const mutationDefaults = getPostBlocklistsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getBlocklistsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.blocklists)[':id']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['blocklists', '/blocklists/:id', keyArgs] as const
}

export function getBlocklistsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.blocklists)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBlocklistsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.blocklists[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBlocklistsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.blocklists)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.blocklists)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.blocklists)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.blocklists)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getBlocklistsIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.blocklists)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBlocklistsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBlocklistsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.blocklists[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutBlocklistsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.blocklists)[':id']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.blocklists)[':id']['$put']>,
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
  const mutationDefaults = getPutBlocklistsIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useDeleteBlocklistsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getDeleteBlocklistsIdMutationOptions<TError, TOnMutateResult>(
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

export function getCouponsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.coupons.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['coupons', '/coupons', keyArgs] as const
}

export function getCouponsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.coupons.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCouponsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.coupons.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useCoupons<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.coupons.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.coupons.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.coupons.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.coupons.$get>>>>
          >,
          ReturnType<typeof getCouponsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.coupons.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getCouponsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCouponsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.coupons.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostCoupons<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.coupons.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.coupons.$post>,
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
  const mutationDefaults = getPostCouponsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getCouponsRedemptionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['coupons-redemptions']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['coupons-redemptions', '/coupons-redemptions', keyArgs] as const
}

export function getCouponsRedemptionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['coupons-redemptions']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCouponsRedemptionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['coupons-redemptions'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCouponsRedemptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['coupons-redemptions']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['coupons-redemptions']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['coupons-redemptions']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['coupons-redemptions']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCouponsRedemptionsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['coupons-redemptions']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCouponsRedemptionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCouponsRedemptionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['coupons-redemptions'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostCouponsRedemptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPostCouponsRedemptionsMutationOptions<TError, TOnMutateResult>(
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

export function getCouponsRedemptionsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['coupons-redemptions'][':id']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['coupons-redemptions', '/coupons-redemptions/:id', keyArgs] as const
}

export function getCouponsRedemptionsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['coupons-redemptions'][':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCouponsRedemptionsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['coupons-redemptions'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCouponsRedemptionsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['coupons-redemptions'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['coupons-redemptions'][':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['coupons-redemptions'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['coupons-redemptions'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCouponsRedemptionsIdQueryKey>
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
          Awaited<ReturnType<(typeof client)['coupons-redemptions'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCouponsRedemptionsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCouponsRedemptionsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['coupons-redemptions'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostCouponsRedemptionsIdCancel<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPostCouponsRedemptionsIdCancelMutationOptions<
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

export function getCouponsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.coupons)[':id']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['coupons', '/coupons/:id', keyArgs] as const
}

export function getCouponsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.coupons)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCouponsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.coupons[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCouponsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.coupons)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.coupons)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.coupons)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.coupons)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getCouponsIdQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.coupons)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getCouponsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCouponsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.coupons[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutCouponsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.coupons)[':id']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.coupons)[':id']['$put']>,
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
  const mutationDefaults = getPutCouponsIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostCouponsIdExpiration<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPostCouponsIdExpirationMutationOptions<TError, TOnMutateResult>(
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

export function getCredentialsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.credentials.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['credentials', '/credentials', keyArgs] as const
}

export function getCredentialsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.credentials.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCredentialsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.credentials.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useCredentials<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.credentials.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.credentials.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.credentials.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.credentials.$get>>>>
          >,
          ReturnType<typeof getCredentialsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.credentials.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getCredentialsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCredentialsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.credentials.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostCredentials<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.credentials.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.credentials.$post>,
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
  const mutationDefaults = getPostCredentialsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getCredentialsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.credentials)[':id']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['credentials', '/credentials/:id', keyArgs] as const
}

export function getCredentialsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.credentials)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCredentialsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.credentials[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCredentialsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.credentials)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.credentials)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.credentials)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.credentials)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getCredentialsIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.credentials)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCredentialsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCredentialsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.credentials[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutCredentialsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.credentials)[':id']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.credentials)[':id']['$put']>,
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
  const mutationDefaults = getPutCredentialsIdMutationOptions<TError, TOnMutateResult>(
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

export function useDeleteCredentialsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getDeleteCredentialsIdMutationOptions<TError, TOnMutateResult>(
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

export function getCustomFieldsResourceQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['custom-fields'][':resource']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['custom-fields', '/custom-fields/:resource', keyArgs] as const
}

export function getCustomFieldsResourceQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['custom-fields'][':resource']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCustomFieldsResourceQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['custom-fields'][':resource'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCustomFieldsResource<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['custom-fields'][':resource']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['custom-fields'][':resource']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['custom-fields'][':resource']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['custom-fields'][':resource']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCustomFieldsResourceQueryKey>
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
          Awaited<ReturnType<(typeof client)['custom-fields'][':resource']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCustomFieldsResourceQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCustomFieldsResourceQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['custom-fields'][':resource'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCustomFieldsResourceNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['custom-fields'][':resource'][':name']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['custom-fields', '/custom-fields/:resource/:name', keyArgs] as const
}

export function getCustomFieldsResourceNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['custom-fields'][':resource'][':name']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCustomFieldsResourceNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['custom-fields'][':resource'][':name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCustomFieldsResourceName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['custom-fields'][':resource'][':name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['custom-fields'][':resource'][':name']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['custom-fields'][':resource'][':name']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['custom-fields'][':resource'][':name']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCustomFieldsResourceNameQueryKey>
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
          Awaited<ReturnType<(typeof client)['custom-fields'][':resource'][':name']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCustomFieldsResourceNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCustomFieldsResourceNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['custom-fields'][':resource'][':name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutCustomFieldsResourceName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPutCustomFieldsResourceNameMutationOptions<TError, TOnMutateResult>(
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

export function getCustomerTimelineCustomEventsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['customer-timeline-custom-events']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['customer-timeline-custom-events', '/customer-timeline-custom-events', keyArgs] as const
}

export function getCustomerTimelineCustomEventsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['customer-timeline-custom-events']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCustomerTimelineCustomEventsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['customer-timeline-custom-events'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCustomerTimelineCustomEvents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['customer-timeline-custom-events']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['customer-timeline-custom-events']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['customer-timeline-custom-events']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['customer-timeline-custom-events']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCustomerTimelineCustomEventsQueryKey>
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
          Awaited<ReturnType<(typeof client)['customer-timeline-custom-events']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCustomerTimelineCustomEventsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCustomerTimelineCustomEventsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['customer-timeline-custom-events'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostCustomerTimelineCustomEvents<
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
                Awaited<ReturnType<(typeof client)['customer-timeline-custom-events']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['customer-timeline-custom-events']['$post']>,
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
  const mutationDefaults = getPostCustomerTimelineCustomEventsMutationOptions<
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

export function getCustomerTimelineCustomEventsIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['customer-timeline-custom-events'][':id']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'customer-timeline-custom-events',
    '/customer-timeline-custom-events/:id',
    keyArgs,
  ] as const
}

export function getCustomerTimelineCustomEventsIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['customer-timeline-custom-events'][':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCustomerTimelineCustomEventsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['customer-timeline-custom-events'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCustomerTimelineCustomEventsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['customer-timeline-custom-events'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['customer-timeline-custom-events'][':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['customer-timeline-custom-events'][':id']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getCustomerTimelineCustomEventsIdQueryKey>
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
          Awaited<ReturnType<(typeof client)['customer-timeline-custom-events'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCustomerTimelineCustomEventsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCustomerTimelineCustomEventsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['customer-timeline-custom-events'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCustomerTimelineEventsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['customer-timeline-events']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['customer-timeline-events', '/customer-timeline-events', keyArgs] as const
}

export function getCustomerTimelineEventsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['customer-timeline-events']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCustomerTimelineEventsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['customer-timeline-events'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCustomerTimelineEvents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['customer-timeline-events']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['customer-timeline-events']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['customer-timeline-events']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['customer-timeline-events']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCustomerTimelineEventsQueryKey>
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
          Awaited<ReturnType<(typeof client)['customer-timeline-events']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCustomerTimelineEventsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCustomerTimelineEventsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['customer-timeline-events'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCustomersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.customers.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['customers', '/customers', keyArgs] as const
}

export function getCustomersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.customers.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCustomersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.customers.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useCustomers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.customers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.customers.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.customers.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.customers.$get>>>>
          >,
          ReturnType<typeof getCustomersQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.customers.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getCustomersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCustomersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.customers.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostCustomers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.customers.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.customers.$post>,
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
  const mutationDefaults = getPostCustomersMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getCustomersIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.customers)[':id']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['customers', '/customers/:id', keyArgs] as const
}

export function getCustomersIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.customers)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCustomersIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.customers[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCustomersId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.customers)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.customers)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.customers)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.customers)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getCustomersIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.customers)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCustomersIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCustomersIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.customers[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutCustomersId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.customers)[':id']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.customers)[':id']['$put']>,
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
  const mutationDefaults = getPutCustomersIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useDeleteCustomersId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getDeleteCustomersIdMutationOptions<TError, TOnMutateResult>(
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

export function getCustomersIdLeadSourceQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.customers)[':id']['lead-source']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['customers', '/customers/:id/lead-source', keyArgs] as const
}

export function getCustomersIdLeadSourceQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.customers)[':id']['lead-source']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCustomersIdLeadSourceQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.customers[':id']['lead-source'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCustomersIdLeadSource<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.customers)[':id']['lead-source']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.customers)[':id']['lead-source']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.customers)[':id']['lead-source']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.customers)[':id']['lead-source']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCustomersIdLeadSourceQueryKey>
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
          Awaited<ReturnType<(typeof client.customers)[':id']['lead-source']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCustomersIdLeadSourceQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCustomersIdLeadSourceQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.customers[':id']['lead-source'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutCustomersIdLeadSource<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPutCustomersIdLeadSourceMutationOptions<TError, TOnMutateResult>(
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

export function useDeleteCustomersIdLeadSource<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getDeleteCustomersIdLeadSourceMutationOptions<TError, TOnMutateResult>(
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

export function getCustomersIdTimelineQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.customers)[':id']['timeline']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['customers', '/customers/:id/timeline', keyArgs] as const
}

export function getCustomersIdTimelineQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.customers)[':id']['timeline']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCustomersIdTimelineQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.customers[':id'].timeline.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCustomersIdTimeline<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.customers)[':id']['timeline']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.customers)[':id']['timeline']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.customers)[':id']['timeline']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.customers)[':id']['timeline']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCustomersIdTimelineQueryKey>
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
          Awaited<ReturnType<(typeof client.customers)[':id']['timeline']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCustomersIdTimelineQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCustomersIdTimelineQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.customers[':id'].timeline.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostCustomersIdTimeline<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPostCustomersIdTimelineMutationOptions<TError, TOnMutateResult>(
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

export function getCustomersIdTimelineMessageIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.customers)[':id']['timeline'][':messageId']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['customers', '/customers/:id/timeline/:messageId', keyArgs] as const
}

export function getCustomersIdTimelineMessageIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.customers)[':id']['timeline'][':messageId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCustomersIdTimelineMessageIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.customers[':id'].timeline[':messageId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCustomersIdTimelineMessageId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.customers)[':id']['timeline'][':messageId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.customers)[':id']['timeline'][':messageId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.customers)[':id']['timeline'][':messageId']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getCustomersIdTimelineMessageIdQueryKey>
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
          Awaited<ReturnType<(typeof client.customers)[':id']['timeline'][':messageId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCustomersIdTimelineMessageIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCustomersIdTimelineMessageIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.customers[':id'].timeline[':messageId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteCustomersIdTimelineMessageId<
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
  const mutationDefaults = getDeleteCustomersIdTimelineMessageIdMutationOptions<
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

export function getCustomersIdUpcomingInvoicesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.customers)[':id']['upcoming-invoices']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['customers', '/customers/:id/upcoming-invoices', keyArgs] as const
}

export function getCustomersIdUpcomingInvoicesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.customers)[':id']['upcoming-invoices']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCustomersIdUpcomingInvoicesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.customers[':id']['upcoming-invoices'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCustomersIdUpcomingInvoices<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.customers)[':id']['upcoming-invoices']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.customers)[':id']['upcoming-invoices']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.customers)[':id']['upcoming-invoices']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.customers)[':id']['upcoming-invoices']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCustomersIdUpcomingInvoicesQueryKey>
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
          Awaited<ReturnType<(typeof client.customers)[':id']['upcoming-invoices']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCustomersIdUpcomingInvoicesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCustomersIdUpcomingInvoicesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.customers[':id']['upcoming-invoices'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostDigitalWalletsValidation<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPostDigitalWalletsValidationMutationOptions<TError, TOnMutateResult>(
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

export function getDisputesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.disputes.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['disputes', '/disputes', keyArgs] as const
}

export function getDisputesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.disputes.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDisputesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.disputes.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useDisputes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.disputes.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.disputes.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.disputes.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.disputes.$get>>>>
          >,
          ReturnType<typeof getDisputesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.disputes.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getDisputesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDisputesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.disputes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostDisputes<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.disputes.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.disputes.$post>,
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
  const mutationDefaults = getPostDisputesMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDisputesIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.disputes)[':id']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['disputes', '/disputes/:id', keyArgs] as const
}

export function getDisputesIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.disputes)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDisputesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.disputes[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDisputesId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.disputes)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.disputes)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.disputes)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.disputes)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getDisputesIdQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.disputes)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getDisputesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDisputesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.disputes[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutDisputesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.disputes)[':id']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.disputes)[':id']['$put']>,
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
  const mutationDefaults = getPutDisputesIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getFilesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.files.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['files', '/files', keyArgs] as const
}

export function getFilesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.files.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFilesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.files.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useFiles<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.files.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.files.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.files.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.files.$get>>>>>,
          ReturnType<typeof getFilesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.files.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getFilesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFilesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.files.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostFiles<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.files.$post>>>>>,
          TError,
          InferRequestType<typeof client.files.$post>,
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
  const mutationDefaults = getPostFilesMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getFilesIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.files)[':id']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['files', '/files/:id', keyArgs] as const
}

export function getFilesIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.files)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFilesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.files[':id'].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useFilesId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.files)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.files)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.files)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.files)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getFilesIdQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.files)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getFilesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFilesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.files[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutFilesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.files)[':id']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.files)[':id']['$put']>,
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
  const mutationDefaults = getPutFilesIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useDeleteFilesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<(typeof client.files)[':id']['$delete']>>>
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.files)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteFilesIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getFilesIdDownloadQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.files)[':id']['download']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['files', '/files/:id/download', keyArgs] as const
}

export function getFilesIdDownloadQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.files)[':id']['download']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFilesIdDownloadQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.files[':id'].download.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFilesIdDownload<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.files)[':id']['download']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.files)[':id']['download']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.files)[':id']['download']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.files)[':id']['download']['$get']>>
              >
            >
          >,
          ReturnType<typeof getFilesIdDownloadQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.files)[':id']['download']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFilesIdDownloadQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFilesIdDownloadQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.files[':id'].download.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFilesIdDownloadExtensionQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.files)[':id']['download:extension']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['files', '/files/:id/download:extension', keyArgs] as const
}

export function getFilesIdDownloadExtensionQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.files)[':id']['download:extension']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFilesIdDownloadExtensionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.files[':id']['download:extension'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFilesIdDownloadExtension<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.files)[':id']['download:extension']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.files)[':id']['download:extension']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.files)[':id']['download:extension']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.files)[':id']['download:extension']['$get']>>
              >
            >
          >,
          ReturnType<typeof getFilesIdDownloadExtensionQueryKey>
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
          Awaited<ReturnType<(typeof client.files)[':id']['download:extension']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFilesIdDownloadExtensionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFilesIdDownloadExtensionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.files[':id']['download:extension'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getInvoicesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.invoices.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['invoices', '/invoices', keyArgs] as const
}

export function getInvoicesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.invoices.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getInvoicesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.invoices.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useInvoices<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.invoices.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.invoices.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.invoices.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.invoices.$get>>>>
          >,
          ReturnType<typeof getInvoicesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.invoices.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getInvoicesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getInvoicesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.invoices.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostInvoices<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.invoices.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.invoices.$post>,
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
  const mutationDefaults = getPostInvoicesMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getInvoicesIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.invoices)[':id']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['invoices', '/invoices/:id', keyArgs] as const
}

export function getInvoicesIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.invoices)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getInvoicesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.invoices[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useInvoicesId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.invoices)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.invoices)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.invoices)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.invoices)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getInvoicesIdQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.invoices)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getInvoicesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getInvoicesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.invoices[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutInvoicesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.invoices)[':id']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.invoices)[':id']['$put']>,
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
  const mutationDefaults = getPutInvoicesIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostInvoicesIdAbandon<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPostInvoicesIdAbandonMutationOptions<TError, TOnMutateResult>(
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

export function usePostInvoicesIdIssue<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPostInvoicesIdIssueMutationOptions<TError, TOnMutateResult>(
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

export function getInvoicesIdItemsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.invoices)[':id']['items']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['invoices', '/invoices/:id/items', keyArgs] as const
}

export function getInvoicesIdItemsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.invoices)[':id']['items']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getInvoicesIdItemsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.invoices[':id'].items.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useInvoicesIdItems<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.invoices)[':id']['items']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.invoices)[':id']['items']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.invoices)[':id']['items']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.invoices)[':id']['items']['$get']>>
              >
            >
          >,
          ReturnType<typeof getInvoicesIdItemsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.invoices)[':id']['items']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInvoicesIdItemsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getInvoicesIdItemsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.invoices[':id'].items.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostInvoicesIdItems<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPostInvoicesIdItemsMutationOptions<TError, TOnMutateResult>(
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

export function usePostInvoicesIdRecalculate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPostInvoicesIdRecalculateMutationOptions<TError, TOnMutateResult>(
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

export function usePostInvoicesIdReissue<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPostInvoicesIdReissueMutationOptions<TError, TOnMutateResult>(
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

export function getInvoicesIdTimelineQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.invoices)[':id']['timeline']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['invoices', '/invoices/:id/timeline', keyArgs] as const
}

export function getInvoicesIdTimelineQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.invoices)[':id']['timeline']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getInvoicesIdTimelineQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.invoices[':id'].timeline.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useInvoicesIdTimeline<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.invoices)[':id']['timeline']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.invoices)[':id']['timeline']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.invoices)[':id']['timeline']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.invoices)[':id']['timeline']['$get']>>
              >
            >
          >,
          ReturnType<typeof getInvoicesIdTimelineQueryKey>
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
          Awaited<ReturnType<(typeof client.invoices)[':id']['timeline']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInvoicesIdTimelineQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getInvoicesIdTimelineQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.invoices[':id'].timeline.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostInvoicesIdTimeline<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPostInvoicesIdTimelineMutationOptions<TError, TOnMutateResult>(
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

export function getInvoicesIdTimelineMessageIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.invoices)[':id']['timeline'][':messageId']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['invoices', '/invoices/:id/timeline/:messageId', keyArgs] as const
}

export function getInvoicesIdTimelineMessageIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.invoices)[':id']['timeline'][':messageId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getInvoicesIdTimelineMessageIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.invoices[':id'].timeline[':messageId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useInvoicesIdTimelineMessageId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.invoices)[':id']['timeline'][':messageId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.invoices)[':id']['timeline'][':messageId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.invoices)[':id']['timeline'][':messageId']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getInvoicesIdTimelineMessageIdQueryKey>
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
          Awaited<ReturnType<(typeof client.invoices)[':id']['timeline'][':messageId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInvoicesIdTimelineMessageIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getInvoicesIdTimelineMessageIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.invoices[':id'].timeline[':messageId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteInvoicesIdTimelineMessageId<
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
                    ReturnType<(typeof client.invoices)[':id']['timeline'][':messageId']['$delete']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.invoices)[':id']['timeline'][':messageId']['$delete']>,
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
  const mutationDefaults = getDeleteInvoicesIdTimelineMessageIdMutationOptions<
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

export function usePostInvoicesIdTransaction<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPostInvoicesIdTransactionMutationOptions<TError, TOnMutateResult>(
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

export function getInvoicesIdTransactionAllocationsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.invoices)[':id']['transaction-allocations']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['invoices', '/invoices/:id/transaction-allocations', keyArgs] as const
}

export function getInvoicesIdTransactionAllocationsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.invoices)[':id']['transaction-allocations']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getInvoicesIdTransactionAllocationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.invoices[':id']['transaction-allocations'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useInvoicesIdTransactionAllocations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.invoices)[':id']['transaction-allocations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.invoices)[':id']['transaction-allocations']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.invoices)[':id']['transaction-allocations']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getInvoicesIdTransactionAllocationsQueryKey>
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
          Awaited<ReturnType<(typeof client.invoices)[':id']['transaction-allocations']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInvoicesIdTransactionAllocationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getInvoicesIdTransactionAllocationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.invoices[':id']['transaction-allocations'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostInvoicesIdVoid<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPostInvoicesIdVoidMutationOptions<TError, TOnMutateResult>(
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

export function getKycDocumentsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['kyc-documents']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['kyc-documents', '/kyc-documents', keyArgs] as const
}

export function getKycDocumentsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['kyc-documents']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getKycDocumentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['kyc-documents'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useKycDocuments<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['kyc-documents']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['kyc-documents']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['kyc-documents']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['kyc-documents']['$get']>>>
            >
          >,
          ReturnType<typeof getKycDocumentsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['kyc-documents']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getKycDocumentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getKycDocumentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['kyc-documents'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostKycDocuments<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['kyc-documents']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client)['kyc-documents']['$post']>,
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
  const mutationDefaults = getPostKycDocumentsMutationOptions<TError, TOnMutateResult>(
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

export function getKycDocumentsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['kyc-documents'][':id']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['kyc-documents', '/kyc-documents/:id', keyArgs] as const
}

export function getKycDocumentsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['kyc-documents'][':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getKycDocumentsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['kyc-documents'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useKycDocumentsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['kyc-documents'][':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['kyc-documents'][':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['kyc-documents'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['kyc-documents'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getKycDocumentsIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['kyc-documents'][':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getKycDocumentsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getKycDocumentsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['kyc-documents'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutKycDocumentsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPutKycDocumentsIdMutationOptions<TError, TOnMutateResult>(
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

export function usePostKycDocumentsIdAcceptance<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPostKycDocumentsIdAcceptanceMutationOptions<TError, TOnMutateResult>(
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

export function usePostKycDocumentsIdMatches<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPostKycDocumentsIdMatchesMutationOptions<TError, TOnMutateResult>(
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

export function usePostKycDocumentsIdRejection<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPostKycDocumentsIdRejectionMutationOptions<TError, TOnMutateResult>(
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

export function usePostKycDocumentsIdReview<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPostKycDocumentsIdReviewMutationOptions<TError, TOnMutateResult>(
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

export function getKycRequestsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['kyc-requests']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['kyc-requests', '/kyc-requests', keyArgs] as const
}

export function getKycRequestsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['kyc-requests']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getKycRequestsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['kyc-requests'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useKycRequests<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['kyc-requests']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['kyc-requests']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['kyc-requests']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['kyc-requests']['$get']>>>
            >
          >,
          ReturnType<typeof getKycRequestsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['kyc-requests']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getKycRequestsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getKycRequestsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['kyc-requests'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostKycRequests<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['kyc-requests']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client)['kyc-requests']['$post']>,
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
  const mutationDefaults = getPostKycRequestsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getKycRequestsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['kyc-requests'][':id']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['kyc-requests', '/kyc-requests/:id', keyArgs] as const
}

export function getKycRequestsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['kyc-requests'][':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getKycRequestsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['kyc-requests'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useKycRequestsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['kyc-requests'][':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['kyc-requests'][':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['kyc-requests'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['kyc-requests'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getKycRequestsIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['kyc-requests'][':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getKycRequestsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getKycRequestsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['kyc-requests'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteKycRequestsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getDeleteKycRequestsIdMutationOptions<TError, TOnMutateResult>(
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

export function usePatchKycRequestsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPatchKycRequestsIdMutationOptions<TError, TOnMutateResult>(
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

export function getPasswordTokensQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['password-tokens']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['password-tokens', '/password-tokens', keyArgs] as const
}

export function getPasswordTokensQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['password-tokens']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPasswordTokensQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['password-tokens'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePasswordTokens<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['password-tokens']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['password-tokens']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['password-tokens']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['password-tokens']['$get']>>>
            >
          >,
          ReturnType<typeof getPasswordTokensQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['password-tokens']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPasswordTokensQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPasswordTokensQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['password-tokens'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostPasswordTokens<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['password-tokens']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client)['password-tokens']['$post']>,
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
  const mutationDefaults = getPostPasswordTokensMutationOptions<TError, TOnMutateResult>(
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

export function getPasswordTokensIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['password-tokens'][':id']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['password-tokens', '/password-tokens/:id', keyArgs] as const
}

export function getPasswordTokensIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['password-tokens'][':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPasswordTokensIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['password-tokens'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePasswordTokensId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['password-tokens'][':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['password-tokens'][':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['password-tokens'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['password-tokens'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getPasswordTokensIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['password-tokens'][':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPasswordTokensIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPasswordTokensIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['password-tokens'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeletePasswordTokensId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getDeletePasswordTokensIdMutationOptions<TError, TOnMutateResult>(
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

export function getPaymentCardsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['payment-cards']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['payment-cards', '/payment-cards', keyArgs] as const
}

export function getPaymentCardsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['payment-cards']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPaymentCardsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['payment-cards'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePaymentCards<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['payment-cards']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['payment-cards']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['payment-cards']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['payment-cards']['$get']>>>
            >
          >,
          ReturnType<typeof getPaymentCardsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['payment-cards']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPaymentCardsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPaymentCardsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['payment-cards'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostPaymentCards<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['payment-cards']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client)['payment-cards']['$post']>,
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
  const mutationDefaults = getPostPaymentCardsMutationOptions<TError, TOnMutateResult>(
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

export function getPaymentCardsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['payment-cards'][':id']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['payment-cards', '/payment-cards/:id', keyArgs] as const
}

export function getPaymentCardsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['payment-cards'][':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPaymentCardsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['payment-cards'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePaymentCardsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['payment-cards'][':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['payment-cards'][':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['payment-cards'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['payment-cards'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getPaymentCardsIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['payment-cards'][':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPaymentCardsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPaymentCardsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['payment-cards'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutPaymentCardsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPutPaymentCardsIdMutationOptions<TError, TOnMutateResult>(
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

export function usePatchPaymentCardsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPatchPaymentCardsIdMutationOptions<TError, TOnMutateResult>(
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

export function usePostPaymentCardsIdDeactivation<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPostPaymentCardsIdDeactivationMutationOptions<
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

export function getPaymentInstrumentsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['payment-instruments']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['payment-instruments', '/payment-instruments', keyArgs] as const
}

export function getPaymentInstrumentsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['payment-instruments']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPaymentInstrumentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['payment-instruments'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePaymentInstruments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['payment-instruments']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['payment-instruments']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['payment-instruments']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['payment-instruments']['$get']>>
              >
            >
          >,
          ReturnType<typeof getPaymentInstrumentsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['payment-instruments']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPaymentInstrumentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPaymentInstrumentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['payment-instruments'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostPaymentInstruments<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPostPaymentInstrumentsMutationOptions<TError, TOnMutateResult>(
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

export function getPaymentInstrumentsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['payment-instruments'][':id']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['payment-instruments', '/payment-instruments/:id', keyArgs] as const
}

export function getPaymentInstrumentsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['payment-instruments'][':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPaymentInstrumentsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['payment-instruments'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePaymentInstrumentsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['payment-instruments'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['payment-instruments'][':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['payment-instruments'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['payment-instruments'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getPaymentInstrumentsIdQueryKey>
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
          Awaited<ReturnType<(typeof client)['payment-instruments'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPaymentInstrumentsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPaymentInstrumentsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['payment-instruments'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePatchPaymentInstrumentsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPatchPaymentInstrumentsIdMutationOptions<TError, TOnMutateResult>(
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

export function usePostPaymentInstrumentsIdDeactivation<
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
                  ReturnType<(typeof client)['payment-instruments'][':id']['deactivation']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['payment-instruments'][':id']['deactivation']['$post']>,
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
  const mutationDefaults = getPostPaymentInstrumentsIdDeactivationMutationOptions<
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

export function usePostPayouts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.payouts.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.payouts.$post>,
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
  const mutationDefaults = getPostPayoutsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPaypalAccountsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['paypal-accounts']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['paypal-accounts', '/paypal-accounts', keyArgs] as const
}

export function getPaypalAccountsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['paypal-accounts']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPaypalAccountsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['paypal-accounts'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePaypalAccounts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['paypal-accounts']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['paypal-accounts']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['paypal-accounts']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['paypal-accounts']['$get']>>>
            >
          >,
          ReturnType<typeof getPaypalAccountsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['paypal-accounts']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPaypalAccountsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPaypalAccountsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['paypal-accounts'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostPaypalAccounts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['paypal-accounts']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client)['paypal-accounts']['$post']>,
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
  const mutationDefaults = getPostPaypalAccountsMutationOptions<TError, TOnMutateResult>(
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

export function getPaypalAccountsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['paypal-accounts'][':id']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['paypal-accounts', '/paypal-accounts/:id', keyArgs] as const
}

export function getPaypalAccountsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['paypal-accounts'][':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPaypalAccountsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['paypal-accounts'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePaypalAccountsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['paypal-accounts'][':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['paypal-accounts'][':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['paypal-accounts'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['paypal-accounts'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getPaypalAccountsIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['paypal-accounts'][':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPaypalAccountsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPaypalAccountsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['paypal-accounts'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutPaypalAccountsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPutPaypalAccountsIdMutationOptions<TError, TOnMutateResult>(
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

export function usePostPaypalAccountsIdDeactivation<
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
                  ReturnType<(typeof client)['paypal-accounts'][':id']['deactivation']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['paypal-accounts'][':id']['deactivation']['$post']>,
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
  const mutationDefaults = getPostPaypalAccountsIdDeactivationMutationOptions<
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

export function getPlansQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.plans.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['plans', '/plans', keyArgs] as const
}

export function getPlansQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.plans.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPlansQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.plans.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function usePlans<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.plans.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.plans.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.plans.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.plans.$get>>>>>,
          ReturnType<typeof getPlansQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.plans.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getPlansQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPlansQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.plans.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostPlans<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.plans.$post>>>>>,
          TError,
          InferRequestType<typeof client.plans.$post>,
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
  const mutationDefaults = getPostPlansMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPlansIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.plans)[':id']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['plans', '/plans/:id', keyArgs] as const
}

export function getPlansIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.plans)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPlansIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.plans[':id'].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function usePlansId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.plans)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.plans)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.plans)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.plans)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getPlansIdQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.plans)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getPlansIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPlansIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.plans[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutPlansId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.plans)[':id']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.plans)[':id']['$put']>,
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
  const mutationDefaults = getPutPlansIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useDeletePlansId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<(typeof client.plans)[':id']['$delete']>>>
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.plans)[':id']['$delete']>,
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
  const mutationDefaults = getDeletePlansIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getProductsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.products.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['products', '/products', keyArgs] as const
}

export function getProductsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.products.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProductsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.products.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useProducts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.products.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.products.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.products.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.products.$get>>>>
          >,
          ReturnType<typeof getProductsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.products.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getProductsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProductsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.products.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostProducts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.products.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.products.$post>,
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
  const mutationDefaults = getPostProductsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getProductsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.products)[':id']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['products', '/products/:id', keyArgs] as const
}

export function getProductsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.products)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProductsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.products[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useProductsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.products)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.products)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.products)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.products)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getProductsIdQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.products)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getProductsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProductsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.products[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutProductsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.products)[':id']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.products)[':id']['$put']>,
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
  const mutationDefaults = getPutProductsIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useDeleteProductsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getDeleteProductsIdMutationOptions<TError, TOnMutateResult>(
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

export function usePostReadyToPay<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['ready-to-pay']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client)['ready-to-pay']['$post']>,
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
  const mutationDefaults = getPostReadyToPayMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getSearchQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.search.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['search', '/search', keyArgs] as const
}

export function getSearchQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.search.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSearchQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.search.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useSearch<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.search.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.$get>>>>>,
          ReturnType<typeof getSearchQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSearchQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSearchQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.search.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getShippingZonesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['shipping-zones']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['shipping-zones', '/shipping-zones', keyArgs] as const
}

export function getShippingZonesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['shipping-zones']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getShippingZonesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['shipping-zones'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useShippingZones<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['shipping-zones']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['shipping-zones']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['shipping-zones']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['shipping-zones']['$get']>>>
            >
          >,
          ReturnType<typeof getShippingZonesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['shipping-zones']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getShippingZonesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getShippingZonesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['shipping-zones'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostShippingZones<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['shipping-zones']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client)['shipping-zones']['$post']>,
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
  const mutationDefaults = getPostShippingZonesMutationOptions<TError, TOnMutateResult>(
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

export function getShippingZonesIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['shipping-zones'][':id']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['shipping-zones', '/shipping-zones/:id', keyArgs] as const
}

export function getShippingZonesIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['shipping-zones'][':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getShippingZonesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['shipping-zones'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useShippingZonesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['shipping-zones'][':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['shipping-zones'][':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['shipping-zones'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['shipping-zones'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getShippingZonesIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['shipping-zones'][':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getShippingZonesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getShippingZonesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['shipping-zones'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutShippingZonesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPutShippingZonesIdMutationOptions<TError, TOnMutateResult>(
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

export function useDeleteShippingZonesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getDeleteShippingZonesIdMutationOptions<TError, TOnMutateResult>(
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

export function getSubscriptionCancellationsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['subscription-cancellations']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['subscription-cancellations', '/subscription-cancellations', keyArgs] as const
}

export function getSubscriptionCancellationsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['subscription-cancellations']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSubscriptionCancellationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['subscription-cancellations'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSubscriptionCancellations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['subscription-cancellations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['subscription-cancellations']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['subscription-cancellations']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['subscription-cancellations']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSubscriptionCancellationsQueryKey>
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
          Awaited<ReturnType<(typeof client)['subscription-cancellations']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSubscriptionCancellationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSubscriptionCancellationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['subscription-cancellations'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostSubscriptionCancellations<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPostSubscriptionCancellationsMutationOptions<TError, TOnMutateResult>(
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

export function getSubscriptionCancellationsIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['subscription-cancellations'][':id']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['subscription-cancellations', '/subscription-cancellations/:id', keyArgs] as const
}

export function getSubscriptionCancellationsIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['subscription-cancellations'][':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSubscriptionCancellationsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['subscription-cancellations'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSubscriptionCancellationsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['subscription-cancellations'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['subscription-cancellations'][':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['subscription-cancellations'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['subscription-cancellations'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSubscriptionCancellationsIdQueryKey>
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
          Awaited<ReturnType<(typeof client)['subscription-cancellations'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSubscriptionCancellationsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSubscriptionCancellationsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['subscription-cancellations'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutSubscriptionCancellationsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPutSubscriptionCancellationsIdMutationOptions<
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

export function useDeleteSubscriptionCancellationsId<
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
                    ReturnType<(typeof client)['subscription-cancellations'][':id']['$delete']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client)['subscription-cancellations'][':id']['$delete']>,
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
  const mutationDefaults = getDeleteSubscriptionCancellationsIdMutationOptions<
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

export function getSubscriptionReactivationsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['subscription-reactivations']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['subscription-reactivations', '/subscription-reactivations', keyArgs] as const
}

export function getSubscriptionReactivationsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['subscription-reactivations']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSubscriptionReactivationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['subscription-reactivations'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSubscriptionReactivations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['subscription-reactivations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['subscription-reactivations']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['subscription-reactivations']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['subscription-reactivations']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSubscriptionReactivationsQueryKey>
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
          Awaited<ReturnType<(typeof client)['subscription-reactivations']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSubscriptionReactivationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSubscriptionReactivationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['subscription-reactivations'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostSubscriptionReactivations<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPostSubscriptionReactivationsMutationOptions<TError, TOnMutateResult>(
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

export function getSubscriptionReactivationsIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['subscription-reactivations'][':id']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['subscription-reactivations', '/subscription-reactivations/:id', keyArgs] as const
}

export function getSubscriptionReactivationsIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['subscription-reactivations'][':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSubscriptionReactivationsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['subscription-reactivations'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSubscriptionReactivationsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['subscription-reactivations'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['subscription-reactivations'][':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['subscription-reactivations'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['subscription-reactivations'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSubscriptionReactivationsIdQueryKey>
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
          Awaited<ReturnType<(typeof client)['subscription-reactivations'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSubscriptionReactivationsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSubscriptionReactivationsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['subscription-reactivations'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSubscriptionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.subscriptions.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['subscriptions', '/subscriptions', keyArgs] as const
}

export function getSubscriptionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.subscriptions.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSubscriptionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.subscriptions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSubscriptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subscriptions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.subscriptions.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subscriptions.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subscriptions.$get>>>>
          >,
          ReturnType<typeof getSubscriptionsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subscriptions.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSubscriptionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSubscriptionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.subscriptions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostSubscriptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subscriptions.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.subscriptions.$post>,
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
  const mutationDefaults = getPostSubscriptionsMutationOptions<TError, TOnMutateResult>(
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

export function getSubscriptionsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.subscriptions)[':id']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['subscriptions', '/subscriptions/:id', keyArgs] as const
}

export function getSubscriptionsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.subscriptions)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSubscriptionsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.subscriptions[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSubscriptionsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.subscriptions)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.subscriptions)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.subscriptions)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.subscriptions)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSubscriptionsIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.subscriptions)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSubscriptionsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSubscriptionsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.subscriptions[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutSubscriptionsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPutSubscriptionsIdMutationOptions<TError, TOnMutateResult>(
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

export function usePostSubscriptionsIdChangeItems<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPostSubscriptionsIdChangeItemsMutationOptions<
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

export function usePostSubscriptionsIdInterimInvoice<
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
                  ReturnType<(typeof client.subscriptions)[':id']['interim-invoice']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.subscriptions)[':id']['interim-invoice']['$post']>,
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
  const mutationDefaults = getPostSubscriptionsIdInterimInvoiceMutationOptions<
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

export function getSubscriptionsIdTimelineQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.subscriptions)[':id']['timeline']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['subscriptions', '/subscriptions/:id/timeline', keyArgs] as const
}

export function getSubscriptionsIdTimelineQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.subscriptions)[':id']['timeline']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSubscriptionsIdTimelineQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.subscriptions[':id'].timeline.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSubscriptionsIdTimeline<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.subscriptions)[':id']['timeline']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.subscriptions)[':id']['timeline']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.subscriptions)[':id']['timeline']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.subscriptions)[':id']['timeline']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSubscriptionsIdTimelineQueryKey>
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
          Awaited<ReturnType<(typeof client.subscriptions)[':id']['timeline']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSubscriptionsIdTimelineQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSubscriptionsIdTimelineQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.subscriptions[':id'].timeline.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostSubscriptionsIdTimeline<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPostSubscriptionsIdTimelineMutationOptions<TError, TOnMutateResult>(
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

export function getSubscriptionsIdTimelineMessageIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.subscriptions)[':id']['timeline'][':messageId']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['subscriptions', '/subscriptions/:id/timeline/:messageId', keyArgs] as const
}

export function getSubscriptionsIdTimelineMessageIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.subscriptions)[':id']['timeline'][':messageId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSubscriptionsIdTimelineMessageIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.subscriptions[':id'].timeline[':messageId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSubscriptionsIdTimelineMessageId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.subscriptions)[':id']['timeline'][':messageId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.subscriptions)[':id']['timeline'][':messageId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.subscriptions)[':id']['timeline'][':messageId']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getSubscriptionsIdTimelineMessageIdQueryKey>
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
            ReturnType<(typeof client.subscriptions)[':id']['timeline'][':messageId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSubscriptionsIdTimelineMessageIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSubscriptionsIdTimelineMessageIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.subscriptions[':id'].timeline[':messageId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteSubscriptionsIdTimelineMessageId<
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
  const mutationDefaults = getDeleteSubscriptionsIdTimelineMessageIdMutationOptions<
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

export function getSubscriptionsIdUpcomingInvoicesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.subscriptions)[':id']['upcoming-invoices']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['subscriptions', '/subscriptions/:id/upcoming-invoices', keyArgs] as const
}

export function getSubscriptionsIdUpcomingInvoicesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.subscriptions)[':id']['upcoming-invoices']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSubscriptionsIdUpcomingInvoicesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.subscriptions[':id']['upcoming-invoices'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSubscriptionsIdUpcomingInvoices<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.subscriptions)[':id']['upcoming-invoices']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.subscriptions)[':id']['upcoming-invoices']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.subscriptions)[':id']['upcoming-invoices']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getSubscriptionsIdUpcomingInvoicesQueryKey>
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
          Awaited<ReturnType<(typeof client.subscriptions)[':id']['upcoming-invoices']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSubscriptionsIdUpcomingInvoicesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSubscriptionsIdUpcomingInvoicesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.subscriptions[':id']['upcoming-invoices'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostSubscriptionsIdUpcomingInvoicesInvoiceIdIssue<
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
  const mutationDefaults = getPostSubscriptionsIdUpcomingInvoicesInvoiceIdIssueMutationOptions<
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

export function getTagsQueryKey(args: MaybeRefOrGetter<InferRequestType<typeof client.tags.$get>>) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['tags', '/tags', keyArgs] as const
}

export function getTagsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.tags.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTagsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tags.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useTags<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tags.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.tags.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tags.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tags.$get>>>>>,
          ReturnType<typeof getTagsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tags.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getTagsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTagsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.tags.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostTags<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tags.$post>>>>>,
          TError,
          InferRequestType<typeof client.tags.$post>,
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
  const mutationDefaults = getPostTagsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getTagsTagQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tags)[':tag']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['tags', '/tags/:tag', keyArgs] as const
}

export function getTagsTagQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tags)[':tag']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTagsTagQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tags[':tag'].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useTagsTag<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':tag']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tags)[':tag']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':tag']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':tag']['$get']>>>
            >
          >,
          ReturnType<typeof getTagsTagQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':tag']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getTagsTagQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTagsTagQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.tags[':tag'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteTagsTag<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':tag']['$delete']>>>
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.tags)[':tag']['$delete']>,
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
  const mutationDefaults = getDeleteTagsTagMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePatchTagsTag<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':tag']['$patch']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.tags)[':tag']['$patch']>,
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
  const mutationDefaults = getPatchTagsTagMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostTagsTagCustomers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPostTagsTagCustomersMutationOptions<TError, TOnMutateResult>(
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

export function useDeleteTagsTagCustomers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getDeleteTagsTagCustomersMutationOptions<TError, TOnMutateResult>(
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

export function usePostTagsTagCustomersCustomerId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPostTagsTagCustomersCustomerIdMutationOptions<
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

export function useDeleteTagsTagCustomersCustomerId<
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
                    ReturnType<(typeof client.tags)[':tag']['customers'][':customerId']['$delete']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.tags)[':tag']['customers'][':customerId']['$delete']>,
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
  const mutationDefaults = getDeleteTagsTagCustomersCustomerIdMutationOptions<
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

export function getTokensQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.tokens.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['tokens', '/tokens', keyArgs] as const
}

export function getTokensQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.tokens.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTokensQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tokens.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useTokens<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tokens.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.tokens.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tokens.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tokens.$get>>>>>,
          ReturnType<typeof getTokensQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tokens.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getTokensQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTokensQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.tokens.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostTokens<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tokens.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.tokens.$post>,
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
  const mutationDefaults = getPostTokensMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getTokensTokenQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tokens)[':token']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['tokens', '/tokens/:token', keyArgs] as const
}

export function getTokensTokenQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tokens)[':token']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTokensTokenQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tokens[':token'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTokensToken<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.tokens)[':token']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tokens)[':token']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.tokens)[':token']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.tokens)[':token']['$get']>>>
            >
          >,
          ReturnType<typeof getTokensTokenQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.tokens)[':token']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTokensTokenQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTokensTokenQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.tokens[':token'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTransactionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.transactions.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['transactions', '/transactions', keyArgs] as const
}

export function getTransactionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.transactions.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTransactionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.transactions.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useTransactions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.transactions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.transactions.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.transactions.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.transactions.$get>>>>
          >,
          ReturnType<typeof getTransactionsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.transactions.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getTransactionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTransactionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.transactions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostTransactions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.transactions.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.transactions.$post>,
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
  const mutationDefaults = getPostTransactionsMutationOptions<TError, TOnMutateResult>(
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

export function getTransactionsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.transactions)[':id']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['transactions', '/transactions/:id', keyArgs] as const
}

export function getTransactionsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.transactions)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTransactionsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.transactions[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTransactionsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.transactions)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.transactions)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.transactions)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.transactions)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getTransactionsIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.transactions)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTransactionsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTransactionsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.transactions[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePatchTransactionsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPatchTransactionsIdMutationOptions<TError, TOnMutateResult>(
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

export function usePostTransactionsIdQuery<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPostTransactionsIdQueryMutationOptions<TError, TOnMutateResult>(
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

export function usePostTransactionsIdRefund<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPostTransactionsIdRefundMutationOptions<TError, TOnMutateResult>(
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

export function getTransactionsIdTimelineQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.transactions)[':id']['timeline']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['transactions', '/transactions/:id/timeline', keyArgs] as const
}

export function getTransactionsIdTimelineQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.transactions)[':id']['timeline']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTransactionsIdTimelineQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.transactions[':id'].timeline.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTransactionsIdTimeline<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.transactions)[':id']['timeline']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.transactions)[':id']['timeline']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.transactions)[':id']['timeline']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.transactions)[':id']['timeline']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTransactionsIdTimelineQueryKey>
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
          Awaited<ReturnType<(typeof client.transactions)[':id']['timeline']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTransactionsIdTimelineQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTransactionsIdTimelineQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.transactions[':id'].timeline.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostTransactionsIdTimeline<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPostTransactionsIdTimelineMutationOptions<TError, TOnMutateResult>(
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

export function getTransactionsIdTimelineMessageIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.transactions)[':id']['timeline'][':messageId']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['transactions', '/transactions/:id/timeline/:messageId', keyArgs] as const
}

export function getTransactionsIdTimelineMessageIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.transactions)[':id']['timeline'][':messageId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTransactionsIdTimelineMessageIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.transactions[':id'].timeline[':messageId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTransactionsIdTimelineMessageId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.transactions)[':id']['timeline'][':messageId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.transactions)[':id']['timeline'][':messageId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.transactions)[':id']['timeline'][':messageId']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getTransactionsIdTimelineMessageIdQueryKey>
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
          Awaited<ReturnType<(typeof client.transactions)[':id']['timeline'][':messageId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTransactionsIdTimelineMessageIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTransactionsIdTimelineMessageIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.transactions[':id'].timeline[':messageId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteTransactionsIdTimelineMessageId<
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
  const mutationDefaults = getDeleteTransactionsIdTimelineMessageIdMutationOptions<
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

export function usePostTransactionsIdUpdate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPostTransactionsIdUpdateMutationOptions<TError, TOnMutateResult>(
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
