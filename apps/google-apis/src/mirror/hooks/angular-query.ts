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

export function getAccountsKey() {
  return ['accounts'] as const
}

export function getContactsKey() {
  return ['contacts'] as const
}

export function getLocationsKey() {
  return ['locations'] as const
}

export function getSettingsKey() {
  return ['settings'] as const
}

export function getSubscriptionsKey() {
  return ['subscriptions'] as const
}

export function getTimelineKey() {
  return ['timeline'] as const
}

export function getPostAccountsUserTokenAccountTypeAccountNameMutationKey() {
  return ['accounts', '/accounts/:userToken/:accountType/:accountName', 'POST'] as const
}

export function getPostAccountsUserTokenAccountTypeAccountNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.accounts)[':userToken'][':accountType'][':accountName']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.accounts)[':userToken'][':accountType'][':accountName']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAccountsUserTokenAccountTypeAccountNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.accounts)[':userToken'][':accountType'][':accountName']['$post']
      >,
    ) {
      return parseResponse(
        client.accounts[':userToken'][':accountType'][':accountName'].$post(args, options),
      )
    },
  })
}

export function injectPostAccountsUserTokenAccountTypeAccountName<
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
                  (typeof client.accounts)[':userToken'][':accountType'][':accountName']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.accounts)[':userToken'][':accountType'][':accountName']['$post']
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
    const mutationDefaults = getPostAccountsUserTokenAccountTypeAccountNameMutationOptions<
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

export function getContactsQueryKey(args: InferRequestType<typeof client.contacts.$get>) {
  return ['contacts', '/contacts', args] as const
}

export function getContactsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contacts.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.contacts.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contacts.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getContactsQueryKey>
  >({
    queryKey: getContactsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.contacts.$get(args, { ...options, init: { ...options?.init, signal } }),
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
  args: () => InferRequestType<typeof client.contacts.$get>,
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
    return { ...getContactsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostContactsMutationKey() {
  return ['contacts', '/contacts', 'POST'] as const
}

export function getPostContactsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contacts.$post>>>>>,
    TError,
    InferRequestType<typeof client.contacts.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostContactsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.contacts.$post>) {
      return parseResponse(client.contacts.$post(args, options))
    },
  })
}

export function injectPostContacts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contacts.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.contacts.$post>,
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
    const mutationDefaults = getPostContactsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getContactsIdQueryKey(
  args: InferRequestType<(typeof client.contacts)[':id']['$get']>,
) {
  return ['contacts', '/contacts/:id', args] as const
}

export function getContactsIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.contacts)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.contacts)[':id']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.contacts)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getContactsIdQueryKey>
  >({
    queryKey: getContactsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.contacts[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectContactsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.contacts)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.contacts)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.contacts)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getContactsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getContactsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPutContactsIdMutationKey() {
  return ['contacts', '/contacts/:id', 'PUT'] as const
}

export function getPutContactsIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.contacts)[':id']['$put']>>>>
    >,
    TError,
    InferRequestType<(typeof client.contacts)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutContactsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.contacts)[':id']['$put']>) {
      return parseResponse(client.contacts[':id'].$put(args, options))
    },
  })
}

export function injectPutContactsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.contacts)[':id']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.contacts)[':id']['$put']>,
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
    const mutationDefaults = getPutContactsIdMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteContactsIdMutationKey() {
  return ['contacts', '/contacts/:id', 'DELETE'] as const
}

export function getDeleteContactsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.contacts)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.contacts)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteContactsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.contacts)[':id']['$delete']>) {
      return parseResponse(client.contacts[':id'].$delete(args, options))
    },
  })
}

export function injectDeleteContactsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.contacts)[':id']['$delete']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.contacts)[':id']['$delete']>,
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
    const mutationDefaults = getDeleteContactsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPatchContactsIdMutationKey() {
  return ['contacts', '/contacts/:id', 'PATCH'] as const
}

export function getPatchContactsIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.contacts)[':id']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.contacts)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchContactsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.contacts)[':id']['$patch']>) {
      return parseResponse(client.contacts[':id'].$patch(args, options))
    },
  })
}

export function injectPatchContactsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.contacts)[':id']['$patch']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.contacts)[':id']['$patch']>,
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
    const mutationDefaults = getPatchContactsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getLocationsQueryKey(args: InferRequestType<typeof client.locations.$get>) {
  return ['locations', '/locations', args] as const
}

export function getLocationsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.locations.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.locations.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.locations.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getLocationsQueryKey>
  >({
    queryKey: getLocationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.locations.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectLocations<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.locations.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.locations.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.locations.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getLocationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getLocationsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getLocationsIdQueryKey(
  args: InferRequestType<(typeof client.locations)[':id']['$get']>,
) {
  return ['locations', '/locations/:id', args] as const
}

export function getLocationsIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.locations)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.locations)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.locations)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLocationsIdQueryKey>
  >({
    queryKey: getLocationsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.locations[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectLocationsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.locations)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.locations)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.locations)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLocationsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getLocationsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getSettingsIdQueryKey(
  args: InferRequestType<(typeof client.settings)[':id']['$get']>,
) {
  return ['settings', '/settings/:id', args] as const
}

export function getSettingsIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.settings)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.settings)[':id']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.settings)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSettingsIdQueryKey>
  >({
    queryKey: getSettingsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.settings[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectSettingsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.settings)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.settings)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.settings)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSettingsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSettingsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getSubscriptionsQueryKey(args: InferRequestType<typeof client.subscriptions.$get>) {
  return ['subscriptions', '/subscriptions', args] as const
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

export function injectSubscriptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subscriptions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.subscriptions.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subscriptions.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSubscriptionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSubscriptionsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostSubscriptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subscriptions.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.subscriptions.$post>,
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
    const mutationDefaults = getPostSubscriptionsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPutSubscriptionsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.subscriptions)[':id']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.subscriptions)[':id']['$put']>,
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
    const mutationDefaults = getPutSubscriptionsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteSubscriptionsIdMutationKey() {
  return ['subscriptions', '/subscriptions/:id', 'DELETE'] as const
}

export function getDeleteSubscriptionsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.subscriptions)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.subscriptions)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSubscriptionsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.subscriptions)[':id']['$delete']>) {
      return parseResponse(client.subscriptions[':id'].$delete(args, options))
    },
  })
}

export function injectDeleteSubscriptionsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.subscriptions)[':id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.subscriptions)[':id']['$delete']>,
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
    const mutationDefaults = getDeleteSubscriptionsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getTimelineQueryKey(args: InferRequestType<typeof client.timeline.$get>) {
  return ['timeline', '/timeline', args] as const
}

export function getTimelineQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.timeline.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.timeline.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.timeline.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getTimelineQueryKey>
  >({
    queryKey: getTimelineQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.timeline.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectTimeline<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.timeline.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.timeline.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.timeline.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getTimelineQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTimelineQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostTimelineMutationKey() {
  return ['timeline', '/timeline', 'POST'] as const
}

export function getPostTimelineMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.timeline.$post>>>>>,
    TError,
    InferRequestType<typeof client.timeline.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTimelineMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.timeline.$post>) {
      return parseResponse(client.timeline.$post(args, options))
    },
  })
}

export function injectPostTimeline<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.timeline.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.timeline.$post>,
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
    const mutationDefaults = getPostTimelineMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getTimelineIdQueryKey(
  args: InferRequestType<(typeof client.timeline)[':id']['$get']>,
) {
  return ['timeline', '/timeline/:id', args] as const
}

export function getTimelineIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.timeline)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.timeline)[':id']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.timeline)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getTimelineIdQueryKey>
  >({
    queryKey: getTimelineIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.timeline[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectTimelineId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.timeline)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.timeline)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.timeline)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTimelineIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTimelineIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPutTimelineIdMutationKey() {
  return ['timeline', '/timeline/:id', 'PUT'] as const
}

export function getPutTimelineIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.timeline)[':id']['$put']>>>>
    >,
    TError,
    InferRequestType<(typeof client.timeline)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutTimelineIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.timeline)[':id']['$put']>) {
      return parseResponse(client.timeline[':id'].$put(args, options))
    },
  })
}

export function injectPutTimelineId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.timeline)[':id']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.timeline)[':id']['$put']>,
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
    const mutationDefaults = getPutTimelineIdMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteTimelineIdMutationKey() {
  return ['timeline', '/timeline/:id', 'DELETE'] as const
}

export function getDeleteTimelineIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.timeline)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.timeline)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteTimelineIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.timeline)[':id']['$delete']>) {
      return parseResponse(client.timeline[':id'].$delete(args, options))
    },
  })
}

export function injectDeleteTimelineId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.timeline)[':id']['$delete']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.timeline)[':id']['$delete']>,
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
    const mutationDefaults = getDeleteTimelineIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPatchTimelineIdMutationKey() {
  return ['timeline', '/timeline/:id', 'PATCH'] as const
}

export function getPatchTimelineIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.timeline)[':id']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.timeline)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchTimelineIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.timeline)[':id']['$patch']>) {
      return parseResponse(client.timeline[':id'].$patch(args, options))
    },
  })
}

export function injectPatchTimelineId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.timeline)[':id']['$patch']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.timeline)[':id']['$patch']>,
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
    const mutationDefaults = getPatchTimelineIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getTimelineItemIdAttachmentsQueryKey(
  args: InferRequestType<(typeof client.timeline)[':itemId']['attachments']['$get']>,
) {
  return ['timeline', '/timeline/:itemId/attachments', args] as const
}

export function getTimelineItemIdAttachmentsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.timeline)[':itemId']['attachments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.timeline)[':itemId']['attachments']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.timeline)[':itemId']['attachments']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTimelineItemIdAttachmentsQueryKey>
  >({
    queryKey: getTimelineItemIdAttachmentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.timeline[':itemId'].attachments.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectTimelineItemIdAttachments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.timeline)[':itemId']['attachments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.timeline)[':itemId']['attachments']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.timeline)[':itemId']['attachments']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTimelineItemIdAttachmentsQueryKey>
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
      ...getTimelineItemIdAttachmentsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostTimelineItemIdAttachmentsMutationKey() {
  return ['timeline', '/timeline/:itemId/attachments', 'POST'] as const
}

export function getPostTimelineItemIdAttachmentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.timeline)[':itemId']['attachments']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.timeline)[':itemId']['attachments']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTimelineItemIdAttachmentsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.timeline)[':itemId']['attachments']['$post']>,
    ) {
      return parseResponse(client.timeline[':itemId'].attachments.$post(args, options))
    },
  })
}

export function injectPostTimelineItemIdAttachments<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.timeline)[':itemId']['attachments']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.timeline)[':itemId']['attachments']['$post']>,
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
    const mutationDefaults = getPostTimelineItemIdAttachmentsMutationOptions<
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

export function getTimelineItemIdAttachmentsAttachmentIdQueryKey(
  args: InferRequestType<
    (typeof client.timeline)[':itemId']['attachments'][':attachmentId']['$get']
  >,
) {
  return ['timeline', '/timeline/:itemId/attachments/:attachmentId', args] as const
}

export function getTimelineItemIdAttachmentsAttachmentIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.timeline)[':itemId']['attachments'][':attachmentId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.timeline)[':itemId']['attachments'][':attachmentId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.timeline)[':itemId']['attachments'][':attachmentId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTimelineItemIdAttachmentsAttachmentIdQueryKey>
  >({
    queryKey: getTimelineItemIdAttachmentsAttachmentIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.timeline[':itemId'].attachments[':attachmentId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectTimelineItemIdAttachmentsAttachmentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.timeline)[':itemId']['attachments'][':attachmentId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.timeline)[':itemId']['attachments'][':attachmentId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.timeline)[':itemId']['attachments'][':attachmentId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTimelineItemIdAttachmentsAttachmentIdQueryKey>
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
      ...getTimelineItemIdAttachmentsAttachmentIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getDeleteTimelineItemIdAttachmentsAttachmentIdMutationKey() {
  return ['timeline', '/timeline/:itemId/attachments/:attachmentId', 'DELETE'] as const
}

export function getDeleteTimelineItemIdAttachmentsAttachmentIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.timeline)[':itemId']['attachments'][':attachmentId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.timeline)[':itemId']['attachments'][':attachmentId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteTimelineItemIdAttachmentsAttachmentIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.timeline)[':itemId']['attachments'][':attachmentId']['$delete']
      >,
    ) {
      return parseResponse(
        client.timeline[':itemId'].attachments[':attachmentId'].$delete(args, options),
      )
    },
  })
}

export function injectDeleteTimelineItemIdAttachmentsAttachmentId<
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
                  (typeof client.timeline)[':itemId']['attachments'][':attachmentId']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.timeline)[':itemId']['attachments'][':attachmentId']['$delete']
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
    const mutationDefaults = getDeleteTimelineItemIdAttachmentsAttachmentIdMutationOptions<
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
