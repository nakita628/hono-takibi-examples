import {
  useQuery,
  useSuspenseQuery,
  useMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/preact-query'
import type {
  UseQueryOptions,
  UseSuspenseQueryOptions,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/preact-query'
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

export function getQueryKey(args: InferRequestType<typeof client.index.$get>) {
  return ['', '/', args] as const
}

export function getQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.index.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getQueryKey>
  >({
    queryKey: getQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function use<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.index.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspense<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.index.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getAnnouncementsQueryKey() {
  return ['announcements', '/announcements'] as const
}

export function getAnnouncementsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.announcements.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.announcements.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAnnouncementsQueryKey>
  >({
    queryKey: getAnnouncementsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.announcements.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useAnnouncements<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.announcements.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.announcements.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getAnnouncementsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAnnouncementsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAnnouncements<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.announcements.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.announcements.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getAnnouncementsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAnnouncementsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
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
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.announcements.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.announcements.$post>,
        TOnMutateResult
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

export function getAreacodesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.areacodes.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.areacodes.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAreacodesQueryKey>
  >({
    queryKey: getAreacodesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.areacodes.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useAreacodes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.areacodes.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.areacodes.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getAreacodesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAreacodesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAreacodes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.areacodes.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.areacodes.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getAreacodesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAreacodesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getBillingQueryKey() {
  return ['billing', '/billing'] as const
}

export function getBillingQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.billing.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.billing.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getBillingQueryKey>
  >({
    queryKey: getBillingQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.billing.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useBilling<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.billing.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.billing.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getBillingQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getBillingQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseBilling<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.billing.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.billing.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getBillingQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getBillingQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getCallsQueryKey(args: InferRequestType<typeof client.calls.$get>) {
  return ['calls', '/calls', args] as const
}

export function getCallsQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.calls.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.calls.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.calls.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getCallsQueryKey>
  >({
    queryKey: getCallsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.calls.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useCalls<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.calls.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.calls.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.calls.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getCallsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getCallsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseCalls<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.calls.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.calls.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.calls.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getCallsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getCallsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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
      UseMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.calls.$post>>>>>,
        TError,
        InferRequestType<typeof client.calls.$post>,
        TOnMutateResult
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

export function getChargesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.charges.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.charges.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getChargesQueryKey>
  >({
    queryKey: getChargesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.charges.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useCharges<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.charges.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.charges.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getChargesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getChargesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseCharges<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.charges.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.charges.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getChargesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getChargesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
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
      UseMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.charges.$post>>>>>,
        TError,
        void,
        TOnMutateResult
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

export function getContactsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contacts.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contacts.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getContactsQueryKey>
  >({
    queryKey: getContactsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.contacts.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useContacts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contacts.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contacts.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getContactsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getContactsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseContacts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contacts.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contacts.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getContactsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getContactsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getCustomersQueryKey() {
  return ['customers', '/customers'] as const
}

export function getCustomersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.customers.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.customers.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getCustomersQueryKey>
  >({
    queryKey: getCustomersQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.customers.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useCustomers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.customers.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.customers.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getCustomersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getCustomersQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseCustomers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.customers.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.customers.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getCustomersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getCustomersQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getCustomersAccountQueryKey(
  args: InferRequestType<(typeof client.customers)[':account']['$get']>,
) {
  return ['customers', '/customers/:account', args] as const
}

export function getCustomersAccountQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.customers)[':account']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.customers)[':account']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.customers)[':account']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCustomersAccountQueryKey>
  >({
    queryKey: getCustomersAccountQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.customers[':account'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useCustomersAccount<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.customers)[':account']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.customers)[':account']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.customers)[':account']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCustomersAccountQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getCustomersAccountQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseCustomersAccount<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.customers)[':account']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.customers)[':account']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.customers)[':account']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCustomersAccountQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getCustomersAccountQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getCustomersAccountAnnouncementsQueryKey(
  args: InferRequestType<(typeof client.customers)[':account']['announcements']['$get']>,
) {
  return ['customers', '/customers/:account/announcements', args] as const
}

export function getCustomersAccountAnnouncementsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.customers)[':account']['announcements']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.customers)[':account']['announcements']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getCustomersAccountAnnouncementsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.customers[':account'].announcements.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.customers)[':account']['announcements']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getCustomersAccountAnnouncementsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getCustomersAccountAnnouncementsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCustomersAccountAnnouncements<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.customers)[':account']['announcements']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.customers)[':account']['announcements']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getCustomersAccountAnnouncementsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getCustomersAccountAnnouncementsAnnouncementIdQueryKey(
  args: InferRequestType<
    (typeof client.customers)[':account']['announcements'][':announcement_id']['$get']
  >,
) {
  return ['customers', '/customers/:account/announcements/:announcement_id', args] as const
}

export function getCustomersAccountAnnouncementsAnnouncementIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.customers)[':account']['announcements'][':announcement_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getCustomersAccountAnnouncementsAnnouncementIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.customers[':account'].announcements[':announcement_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.customers)[':account']['announcements'][':announcement_id']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getCustomersAccountAnnouncementsAnnouncementIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getCustomersAccountAnnouncementsAnnouncementIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCustomersAccountAnnouncementsAnnouncementId<
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
  args: InferRequestType<
    (typeof client.customers)[':account']['announcements'][':announcement_id']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getCustomersAccountAnnouncementsAnnouncementIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
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

export function getFaxesQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.faxes.$get>>>>>,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.faxes.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getFaxesQueryKey>
  >({
    queryKey: getFaxesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.faxes.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useFaxes<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.faxes.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.faxes.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getFaxesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getFaxesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseFaxes<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.faxes.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.faxes.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getFaxesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getFaxesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getHostedQueryKey() {
  return ['hosted', '/hosted'] as const
}

export function getHostedQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hosted.$get>>>>>,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hosted.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getHostedQueryKey>
  >({
    queryKey: getHostedQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.hosted.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useHosted<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hosted.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hosted.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getHostedQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getHostedQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseHosted<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hosted.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hosted.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getHostedQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getHostedQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getIpAddressQueryKey() {
  return ['ip-address', '/ip-address'] as const
}

export function getIpAddressQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['ip-address']['$get']>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['ip-address']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getIpAddressQueryKey>
  >({
    queryKey: getIpAddressQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client['ip-address'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useIpAddress<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['ip-address']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['ip-address']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getIpAddressQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getIpAddressQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseIpAddress<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['ip-address']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['ip-address']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getIpAddressQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getIpAddressQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getMobileQueryKey() {
  return ['mobile', '/mobile'] as const
}

export function getMobileQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mobile.$get>>>>>,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mobile.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMobileQueryKey>
  >({
    queryKey: getMobileQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.mobile.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useMobile<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mobile.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mobile.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getMobileQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getMobileQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseMobile<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mobile.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mobile.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getMobileQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getMobileQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getNumbersQueryKey() {
  return ['numbers', '/numbers'] as const
}

export function getNumbersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.numbers.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.numbers.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getNumbersQueryKey>
  >({
    queryKey: getNumbersQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.numbers.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useNumbers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.numbers.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.numbers.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getNumbersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getNumbersQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseNumbers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.numbers.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.numbers.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getNumbersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getNumbersQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getNumbersAreacodesQueryKey() {
  return ['numbers', '/numbers/areacodes'] as const
}

export function getNumbersAreacodesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.numbers.areacodes.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.numbers.areacodes.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getNumbersAreacodesQueryKey>
  >({
    queryKey: getNumbersAreacodesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.numbers.areacodes.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useNumbersAreacodes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.numbers.areacodes.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.numbers.areacodes.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNumbersAreacodesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getNumbersAreacodesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseNumbersAreacodes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.numbers.areacodes.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.numbers.areacodes.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNumbersAreacodesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getNumbersAreacodesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPartnersQueryKey() {
  return ['partners', '/partners'] as const
}

export function getPartnersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.partners.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.partners.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getPartnersQueryKey>
  >({
    queryKey: getPartnersQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.partners.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function usePartners<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.partners.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.partners.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getPartnersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getPartnersQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspensePartners<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.partners.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.partners.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getPartnersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getPartnersQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPortingQueryKey() {
  return ['porting', '/porting'] as const
}

export function getPortingQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.porting.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.porting.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getPortingQueryKey>
  >({
    queryKey: getPortingQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.porting.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function usePorting<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.porting.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.porting.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getPortingQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getPortingQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspensePorting<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.porting.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.porting.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getPortingQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getPortingQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getServiceStatusQueryKey() {
  return ['service-status', '/service-status'] as const
}

export function getServiceStatusQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['service-status']['$get']>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['service-status']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getServiceStatusQueryKey>
  >({
    queryKey: getServiceStatusQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client['service-status'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useServiceStatus<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['service-status']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['service-status']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getServiceStatusQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getServiceStatusQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseServiceStatus<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['service-status']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['service-status']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getServiceStatusQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getServiceStatusQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getSipQueryKey() {
  return ['sip', '/sip'] as const
}

export function getSipQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sip.$get>>>>>,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sip.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSipQueryKey>
  >({
    queryKey: getSipQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.sip.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useSip<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sip.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sip.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getSipQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSipQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSip<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sip.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sip.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getSipQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSipQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getSmsQueryKey() {
  return ['sms', '/sms'] as const
}

export function getSmsQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sms.$get>>>>>,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sms.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSmsQueryKey>
  >({
    queryKey: getSmsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.sms.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useSms<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sms.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sms.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getSmsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSmsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSms<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sms.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sms.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getSmsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSmsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
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
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.support.echo.$post>>>>
        >,
        TError,
        void,
        TOnMutateResult
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

export function getSupportIpAddressQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.support)['ip-address']['$get']>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.support)['ip-address']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSupportIpAddressQueryKey>
  >({
    queryKey: getSupportIpAddressQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.support['ip-address'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.support)['ip-address']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSupportIpAddressQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSupportIpAddressQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSupportIpAddress<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.support)['ip-address']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.support)['ip-address']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSupportIpAddressQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSupportIpAddressQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getSupportServiceStatusQueryKey() {
  return ['support', '/support/service-status'] as const
}

export function getSupportServiceStatusQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.support)['service-status']['$get']>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.support)['service-status']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSupportServiceStatusQueryKey>
  >({
    queryKey: getSupportServiceStatusQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.support['service-status'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
        ReturnType<typeof getSupportServiceStatusQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSupportServiceStatusQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSupportServiceStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.support)['service-status']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.support)['service-status']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSupportServiceStatusQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSupportServiceStatusQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getTopupsQueryKey() {
  return ['topups', '/topups'] as const
}

export function getTopupsQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.topups.$get>>>>>,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.topups.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getTopupsQueryKey>
  >({
    queryKey: getTopupsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.topups.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useTopups<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.topups.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.topups.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getTopupsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getTopupsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseTopups<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.topups.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.topups.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getTopupsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getTopupsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}
