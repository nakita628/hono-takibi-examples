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

export function getAnnouncementsKey() {
  return ['announcements'] as const
}

export function getAreacodesKey() {
  return ['areacodes'] as const
}

export function getBillingKey() {
  return ['billing'] as const
}

export function getCallsKey() {
  return ['calls'] as const
}

export function getChargesKey() {
  return ['charges'] as const
}

export function getContactsKey() {
  return ['contacts'] as const
}

export function getCustomersKey() {
  return ['customers'] as const
}

export function getFaxesKey() {
  return ['faxes'] as const
}

export function getHostedKey() {
  return ['hosted'] as const
}

export function getIpAddressKey() {
  return ['ip-address'] as const
}

export function getMobileKey() {
  return ['mobile'] as const
}

export function getNumbersKey() {
  return ['numbers'] as const
}

export function getPartnersKey() {
  return ['partners'] as const
}

export function getPortingKey() {
  return ['porting'] as const
}

export function getServiceStatusKey() {
  return ['service-status'] as const
}

export function getSipKey() {
  return ['sip'] as const
}

export function getSmsKey() {
  return ['sms'] as const
}

export function getSupportKey() {
  return ['support'] as const
}

export function getTopupsKey() {
  return ['topups'] as const
}

export function getQueryKey(args: MaybeRefOrGetter<InferRequestType<typeof client.index.$get>>) {
  return ['', '/', toValue(args)] as const
}

export function getQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.index.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.index.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function use<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.index.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
          ReturnType<typeof getQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAnnouncementsQueryKey() {
  return ['announcements', '/announcements'] as const
}

export function getAnnouncementsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getAnnouncementsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.announcements.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useAnnouncements<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.announcements.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.announcements.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.announcements.$get>>>>
          >,
          ReturnType<typeof getAnnouncementsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.announcements.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAnnouncementsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getAnnouncementsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.announcements.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAnnouncementsMutationKey() {
  return ['announcements', '/announcements', 'POST'] as const
}

export function getPostAnnouncementsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.announcements.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.announcements.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAnnouncementsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.announcements.$post>) {
      return parseResponse(client.announcements.$post(args, options))
    },
  })
}

export function usePostAnnouncements<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.announcements.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.announcements.$post>,
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
  const mutationDefaults = getPostAnnouncementsMutationOptions<TError, TOnMutateResult>(
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

export function getAreacodesQueryKey() {
  return ['areacodes', '/areacodes'] as const
}

export function getAreacodesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getAreacodesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.areacodes.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useAreacodes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.areacodes.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.areacodes.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.areacodes.$get>>>>
          >,
          ReturnType<typeof getAreacodesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.areacodes.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAreacodesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getAreacodesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.areacodes.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBillingQueryKey() {
  return ['billing', '/billing'] as const
}

export function getBillingQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getBillingQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.billing.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useBilling<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.billing.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.billing.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.billing.$get>>>>
          >,
          ReturnType<typeof getBillingQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.billing.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getBillingQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getBillingQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.billing.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCallsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.calls.$get>>,
) {
  return ['calls', '/calls', toValue(args)] as const
}

export function getCallsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.calls.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCallsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.calls.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useCalls<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.calls.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.calls.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.calls.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.calls.$get>>>>>,
          ReturnType<typeof getCallsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.calls.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getCallsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCallsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.calls.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostCallsMutationKey() {
  return ['calls', '/calls', 'POST'] as const
}

export function getPostCallsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.calls.$post>>>>>,
    TError,
    InferRequestType<typeof client.calls.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCallsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.calls.$post>) {
      return parseResponse(client.calls.$post(args, options))
    },
  })
}

export function usePostCalls<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.calls.$post>>>>>,
          TError,
          InferRequestType<typeof client.calls.$post>,
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
  const mutationDefaults = getPostCallsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getChargesQueryKey() {
  return ['charges', '/charges'] as const
}

export function getChargesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getChargesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.charges.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useCharges<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.charges.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.charges.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.charges.$get>>>>
          >,
          ReturnType<typeof getChargesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.charges.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getChargesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getChargesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.charges.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostChargesMutationKey() {
  return ['charges', '/charges', 'POST'] as const
}

export function getPostChargesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.charges.$post>>>>>,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostChargesMutationKey(),
    async mutationFn() {
      return parseResponse(client.charges.$post(undefined, options))
    },
  })
}

export function usePostCharges<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.charges.$post>>>>
          >,
          TError,
          void,
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
  const mutationDefaults = getPostChargesMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getContactsQueryKey() {
  return ['contacts', '/contacts'] as const
}

export function getContactsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getContactsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.contacts.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useContacts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contacts.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contacts.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contacts.$get>>>>
          >,
          ReturnType<typeof getContactsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contacts.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getContactsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getContactsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.contacts.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCustomersQueryKey() {
  return ['customers', '/customers'] as const
}

export function getCustomersQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getCustomersQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.customers.$get(undefined, { ...options, init: { ...options?.init, signal } }),
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
      queryKey: getCustomersQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.customers.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCustomersAccountQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.customers)[':account']['$get']>>,
) {
  return ['customers', '/customers/:account', toValue(args)] as const
}

export function getCustomersAccountQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.customers)[':account']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCustomersAccountQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.customers[':account'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCustomersAccount<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.customers)[':account']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.customers)[':account']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.customers)[':account']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.customers)[':account']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCustomersAccountQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.customers)[':account']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCustomersAccountQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCustomersAccountQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.customers[':account'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCustomersAccountAnnouncementsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.customers)[':account']['announcements']['$get']>
  >,
) {
  return ['customers', '/customers/:account/announcements', toValue(args)] as const
}

export function getCustomersAccountAnnouncementsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.customers)[':account']['announcements']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCustomersAccountAnnouncementsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.customers[':account'].announcements.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCustomersAccountAnnouncements<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.customers)[':account']['announcements']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.customers)[':account']['announcements']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.customers)[':account']['announcements']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.customers)[':account']['announcements']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCustomersAccountAnnouncementsQueryKey>
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
          Awaited<ReturnType<(typeof client.customers)[':account']['announcements']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCustomersAccountAnnouncementsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCustomersAccountAnnouncementsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.customers[':account'].announcements.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCustomersAccountAnnouncementsAnnouncementIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.customers)[':account']['announcements'][':announcement_id']['$get']
    >
  >,
) {
  return ['customers', '/customers/:account/announcements/:announcement_id', toValue(args)] as const
}

export function getCustomersAccountAnnouncementsAnnouncementIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.customers)[':account']['announcements'][':announcement_id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCustomersAccountAnnouncementsAnnouncementIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.customers[':account'].announcements[':announcement_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCustomersAccountAnnouncementsAnnouncementId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.customers)[':account']['announcements'][':announcement_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.customers)[':account']['announcements'][':announcement_id']['$get']
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
                    (typeof client.customers)[':account']['announcements'][':announcement_id']['$get']
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
                    (typeof client.customers)[':account']['announcements'][':announcement_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getCustomersAccountAnnouncementsAnnouncementIdQueryKey>
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
              (typeof client.customers)[':account']['announcements'][':announcement_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCustomersAccountAnnouncementsAnnouncementIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCustomersAccountAnnouncementsAnnouncementIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.customers[':account'].announcements[':announcement_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteCustomersAccountAnnouncementsAnnouncementIdMutationKey() {
  return ['customers', '/customers/:account/announcements/:announcement_id', 'DELETE'] as const
}

export function getDeleteCustomersAccountAnnouncementsAnnouncementIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.customers)[':account']['announcements'][':announcement_id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.customers)[':account']['announcements'][':announcement_id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteCustomersAccountAnnouncementsAnnouncementIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.customers)[':account']['announcements'][':announcement_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.customers[':account'].announcements[':announcement_id'].$delete(args, options),
      )
    },
  })
}

export function useDeleteCustomersAccountAnnouncementsAnnouncementId<
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
                    (typeof client.customers)[':account']['announcements'][':announcement_id']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.customers)[':account']['announcements'][':announcement_id']['$delete']
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
  const mutationDefaults = getDeleteCustomersAccountAnnouncementsAnnouncementIdMutationOptions<
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

export function getFaxesQueryKey() {
  return ['faxes', '/faxes'] as const
}

export function getFaxesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getFaxesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.faxes.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useFaxes<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.faxes.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.faxes.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.faxes.$get>>>>>,
          ReturnType<typeof getFaxesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.faxes.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getFaxesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getFaxesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.faxes.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getHostedQueryKey() {
  return ['hosted', '/hosted'] as const
}

export function getHostedQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getHostedQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.hosted.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useHosted<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hosted.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hosted.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hosted.$get>>>>>,
          ReturnType<typeof getHostedQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hosted.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getHostedQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getHostedQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.hosted.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getIpAddressQueryKey() {
  return ['ip-address', '/ip-address'] as const
}

export function getIpAddressQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getIpAddressQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['ip-address'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useIpAddress<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['ip-address']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['ip-address']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['ip-address']['$get']>>>
            >
          >,
          ReturnType<typeof getIpAddressQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['ip-address']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getIpAddressQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getIpAddressQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client['ip-address'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMobileQueryKey() {
  return ['mobile', '/mobile'] as const
}

export function getMobileQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getMobileQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.mobile.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useMobile<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mobile.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mobile.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mobile.$get>>>>>,
          ReturnType<typeof getMobileQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mobile.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMobileQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getMobileQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.mobile.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNumbersQueryKey() {
  return ['numbers', '/numbers'] as const
}

export function getNumbersQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getNumbersQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.numbers.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useNumbers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.numbers.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.numbers.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.numbers.$get>>>>
          >,
          ReturnType<typeof getNumbersQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.numbers.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getNumbersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getNumbersQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.numbers.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNumbersAreacodesQueryKey() {
  return ['numbers', '/numbers/areacodes'] as const
}

export function getNumbersAreacodesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getNumbersAreacodesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.numbers.areacodes.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNumbersAreacodes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.numbers.areacodes.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.numbers.areacodes.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.numbers.areacodes.$get>>>
            >
          >,
          ReturnType<typeof getNumbersAreacodesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.numbers.areacodes.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getNumbersAreacodesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getNumbersAreacodesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.numbers.areacodes.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPartnersQueryKey() {
  return ['partners', '/partners'] as const
}

export function getPartnersQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getPartnersQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.partners.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function usePartners<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.partners.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.partners.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.partners.$get>>>>
          >,
          ReturnType<typeof getPartnersQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.partners.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getPartnersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getPartnersQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.partners.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPortingQueryKey() {
  return ['porting', '/porting'] as const
}

export function getPortingQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getPortingQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.porting.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function usePorting<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.porting.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.porting.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.porting.$get>>>>
          >,
          ReturnType<typeof getPortingQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.porting.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getPortingQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getPortingQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.porting.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getServiceStatusQueryKey() {
  return ['service-status', '/service-status'] as const
}

export function getServiceStatusQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getServiceStatusQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['service-status'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useServiceStatus<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['service-status']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['service-status']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['service-status']['$get']>>>
            >
          >,
          ReturnType<typeof getServiceStatusQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['service-status']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getServiceStatusQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getServiceStatusQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client['service-status'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSipQueryKey() {
  return ['sip', '/sip'] as const
}

export function getSipQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getSipQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sip.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useSip<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sip.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sip.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sip.$get>>>>>,
          ReturnType<typeof getSipQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sip.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSipQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getSipQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.sip.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSmsQueryKey() {
  return ['sms', '/sms'] as const
}

export function getSmsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getSmsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sms.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useSms<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sms.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sms.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sms.$get>>>>>,
          ReturnType<typeof getSmsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sms.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSmsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getSmsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.sms.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostSupportEchoMutationKey() {
  return ['support', '/support/echo', 'POST'] as const
}

export function getPostSupportEchoMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.support.echo.$post>>>>
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostSupportEchoMutationKey(),
    async mutationFn() {
      return parseResponse(client.support.echo.$post(undefined, options))
    },
  })
}

export function usePostSupportEcho<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.support.echo.$post>>>>
          >,
          TError,
          void,
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
  const mutationDefaults = getPostSupportEchoMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getSupportIpAddressQueryKey() {
  return ['support', '/support/ip-address'] as const
}

export function getSupportIpAddressQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getSupportIpAddressQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.support['ip-address'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSupportIpAddress<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.support)['ip-address']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.support)['ip-address']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.support)['ip-address']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSupportIpAddressQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.support)['ip-address']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSupportIpAddressQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getSupportIpAddressQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.support['ip-address'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSupportServiceStatusQueryKey() {
  return ['support', '/support/service-status'] as const
}

export function getSupportServiceStatusQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getSupportServiceStatusQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.support['service-status'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSupportServiceStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.support)['service-status']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.support)['service-status']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.support)['service-status']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSupportServiceStatusQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.support)['service-status']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSupportServiceStatusQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getSupportServiceStatusQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.support['service-status'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTopupsQueryKey() {
  return ['topups', '/topups'] as const
}

export function getTopupsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getTopupsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.topups.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useTopups<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.topups.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.topups.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.topups.$get>>>>>,
          ReturnType<typeof getTopupsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.topups.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getTopupsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getTopupsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.topups.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
