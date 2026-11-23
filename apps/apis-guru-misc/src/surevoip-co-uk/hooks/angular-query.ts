import {
  injectQuery,
  injectMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/angular-query-experimental'
import type {
  CreateQueryOptions,
  CreateMutationOptions,
  DefaultError,
  InjectQueryOptions,
  InjectInfiniteQueryOptions,
  InjectMutationOptions,
} from '@tanstack/angular-query-experimental'
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

export function inject<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.index.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectAnnouncements<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.announcements.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAnnouncementsQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
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

export function injectPostAnnouncements<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAnnouncementsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectAreacodes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.areacodes.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAreacodesQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
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

export function injectBilling<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.billing.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.billing.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getBillingQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getBillingQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
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

export function injectCalls<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.calls.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.calls.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.calls.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getCallsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getCallsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostCalls<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.calls.$post>>>>>,
        TError,
        InferRequestType<typeof client.calls.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCallsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectCharges<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.charges.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.charges.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getChargesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getChargesQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
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

export function injectPostCharges<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.charges.$post>>>>>,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostChargesMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectContacts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contacts.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contacts.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getContactsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getContactsQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
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

export function injectCustomers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.customers.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getCustomersQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
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

export function injectCustomersAccount<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.customers)[':account']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.customers)[':account']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getCustomersAccountQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectCustomersAccountAnnouncements<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.customers)[':account']['announcements']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.customers)[':account']['announcements']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getCustomersAccountAnnouncementsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectCustomersAccountAnnouncementsAnnouncementId<
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
  args: () => InferRequestType<
    (typeof client.customers)[':account']['announcements'][':announcement_id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getCustomersAccountAnnouncementsAnnouncementIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
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

export function injectDeleteCustomersAccountAnnouncementsAnnouncementId<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteCustomersAccountAnnouncementsAnnouncementIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectFaxes<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.faxes.$get>>>>>,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.faxes.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getFaxesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getFaxesQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
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

export function injectHosted<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hosted.$get>>>>>,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hosted.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getHostedQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getHostedQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
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

export function injectIpAddress<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['ip-address']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getIpAddressQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
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

export function injectMobile<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mobile.$get>>>>>,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mobile.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getMobileQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMobileQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
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

export function injectNumbers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.numbers.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.numbers.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getNumbersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getNumbersQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
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

export function injectNumbersAreacodes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.numbers.areacodes.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getNumbersAreacodesQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
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

export function injectPartners<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.partners.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.partners.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getPartnersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getPartnersQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
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

export function injectPorting<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.porting.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.porting.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getPortingQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getPortingQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
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

export function injectServiceStatus<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['service-status']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getServiceStatusQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
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

export function injectSip<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sip.$get>>>>>,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sip.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getSipQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSipQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
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

export function injectSms<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sms.$get>>>>>,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sms.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getSmsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSmsQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
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

export function injectPostSupportEcho<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSupportEchoMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectSupportIpAddress<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.support)['ip-address']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSupportIpAddressQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
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

export function injectSupportServiceStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.support)['service-status']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSupportServiceStatusQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
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

export function injectTopups<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.topups.$get>>>>>,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.topups.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getTopupsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTopupsQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}
