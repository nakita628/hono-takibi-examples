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

export function getSubscriptionsKey() {
  return ['subscriptions'] as const
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

export function getPutSubscriptionsMutationKey() {
  return ['subscriptions', '/subscriptions', 'PUT'] as const
}

export function getPutSubscriptionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subscriptions.$put>>>>
    >,
    TError,
    InferRequestType<typeof client.subscriptions.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutSubscriptionsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.subscriptions.$put>) {
      return parseResponse(client.subscriptions.$put(args, options))
    },
  })
}

export function injectPutSubscriptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subscriptions.$put>>>>
        >,
        TError,
        InferRequestType<typeof client.subscriptions.$put>,
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
    const mutationDefaults = getPutSubscriptionsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getSubscriptionsMeQueryKey(
  args: InferRequestType<typeof client.subscriptions.me.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['subscriptions', '/subscriptions/me', keyArgs] as const
}

export function getSubscriptionsMeQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subscriptions.me.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.subscriptions.me.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subscriptions.me.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSubscriptionsMeQueryKey>
  >({
    queryKey: getSubscriptionsMeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.subscriptions.me.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectSubscriptionsMe<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subscriptions.me.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.subscriptions.me.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subscriptions.me.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSubscriptionsMeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSubscriptionsMeQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getSubscriptionsSettingsQueryKey(
  args: InferRequestType<typeof client.subscriptions.settings.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['subscriptions', '/subscriptions/settings', keyArgs] as const
}

export function getSubscriptionsSettingsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subscriptions.settings.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.subscriptions.settings.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.subscriptions.settings.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSubscriptionsSettingsQueryKey>
  >({
    queryKey: getSubscriptionsSettingsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.subscriptions.settings.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectSubscriptionsSettings<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subscriptions.settings.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.subscriptions.settings.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.subscriptions.settings.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSubscriptionsSettingsQueryKey>
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
      ...getSubscriptionsSettingsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPutSubscriptionsSettingsMutationKey() {
  return ['subscriptions', '/subscriptions/settings', 'PUT'] as const
}

export function getPutSubscriptionsSettingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.subscriptions.settings.$put>>>
      >
    >,
    TError,
    InferRequestType<typeof client.subscriptions.settings.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutSubscriptionsSettingsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.subscriptions.settings.$put>) {
      return parseResponse(client.subscriptions.settings.$put(args, options))
    },
  })
}

export function injectPutSubscriptionsSettings<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.subscriptions.settings.$put>>>
          >
        >,
        TError,
        InferRequestType<typeof client.subscriptions.settings.$put>,
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
    const mutationDefaults = getPutSubscriptionsSettingsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getSubscriptionsRecurrenceIdQueryKey(
  args: InferRequestType<(typeof client.subscriptions)[':recurrenceId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['subscriptions', '/subscriptions/:recurrenceId', keyArgs] as const
}

export function getSubscriptionsRecurrenceIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.subscriptions)[':recurrenceId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.subscriptions)[':recurrenceId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.subscriptions)[':recurrenceId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSubscriptionsRecurrenceIdQueryKey>
  >({
    queryKey: getSubscriptionsRecurrenceIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.subscriptions[':recurrenceId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectSubscriptionsRecurrenceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.subscriptions)[':recurrenceId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.subscriptions)[':recurrenceId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.subscriptions)[':recurrenceId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSubscriptionsRecurrenceIdQueryKey>
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
      ...getSubscriptionsRecurrenceIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPatchSubscriptionsRecurrenceIdMutationKey() {
  return ['subscriptions', '/subscriptions/:recurrenceId', 'PATCH'] as const
}

export function getPatchSubscriptionsRecurrenceIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.subscriptions)[':recurrenceId']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.subscriptions)[':recurrenceId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchSubscriptionsRecurrenceIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.subscriptions)[':recurrenceId']['$patch']>,
    ) {
      return parseResponse(client.subscriptions[':recurrenceId'].$patch(args, options))
    },
  })
}

export function injectPatchSubscriptionsRecurrenceId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.subscriptions)[':recurrenceId']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.subscriptions)[':recurrenceId']['$patch']>,
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
    const mutationDefaults = getPatchSubscriptionsRecurrenceIdMutationOptions<
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

export function getSubscriptionsRecurrenceIdAddressesQueryKey(
  args: InferRequestType<(typeof client.subscriptions)[':recurrenceId']['addresses']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['subscriptions', '/subscriptions/:recurrenceId/addresses', keyArgs] as const
}

export function getSubscriptionsRecurrenceIdAddressesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.subscriptions)[':recurrenceId']['addresses']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.subscriptions)[':recurrenceId']['addresses']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.subscriptions)[':recurrenceId']['addresses']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSubscriptionsRecurrenceIdAddressesQueryKey>
  >({
    queryKey: getSubscriptionsRecurrenceIdAddressesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.subscriptions[':recurrenceId'].addresses.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectSubscriptionsRecurrenceIdAddresses<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.subscriptions)[':recurrenceId']['addresses']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.subscriptions)[':recurrenceId']['addresses']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.subscriptions)[':recurrenceId']['addresses']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSubscriptionsRecurrenceIdAddressesQueryKey>
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
      ...getSubscriptionsRecurrenceIdAddressesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostSubscriptionsRecurrenceIdItemsMutationKey() {
  return ['subscriptions', '/subscriptions/:recurrenceId/items', 'POST'] as const
}

export function getPostSubscriptionsRecurrenceIdItemsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.subscriptions)[':recurrenceId']['items']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.subscriptions)[':recurrenceId']['items']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSubscriptionsRecurrenceIdItemsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.subscriptions)[':recurrenceId']['items']['$post']>,
    ) {
      return parseResponse(client.subscriptions[':recurrenceId'].items.$post(args, options))
    },
  })
}

export function injectPostSubscriptionsRecurrenceIdItems<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.subscriptions)[':recurrenceId']['items']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.subscriptions)[':recurrenceId']['items']['$post']>,
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
    const mutationDefaults = getPostSubscriptionsRecurrenceIdItemsMutationOptions<
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

export function getPatchSubscriptionsRecurrenceIdReindexMutationKey() {
  return ['subscriptions', '/subscriptions/:recurrenceId/reindex', 'PATCH'] as const
}

export function getPatchSubscriptionsRecurrenceIdReindexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.subscriptions)[':recurrenceId']['reindex']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.subscriptions)[':recurrenceId']['reindex']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchSubscriptionsRecurrenceIdReindexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.subscriptions)[':recurrenceId']['reindex']['$patch']>,
    ) {
      return parseResponse(client.subscriptions[':recurrenceId'].reindex.$patch(args, options))
    },
  })
}

export function injectPatchSubscriptionsRecurrenceIdReindex<
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
                ReturnType<(typeof client.subscriptions)[':recurrenceId']['reindex']['$patch']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.subscriptions)[':recurrenceId']['reindex']['$patch']>,
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
    const mutationDefaults = getPatchSubscriptionsRecurrenceIdReindexMutationOptions<
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

export function getSubscriptionsRecurrenceidAccountsQueryKey(
  args: InferRequestType<(typeof client.subscriptions)[':recurrenceid']['accounts']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['subscriptions', '/subscriptions/:recurrenceid/accounts', keyArgs] as const
}

export function getSubscriptionsRecurrenceidAccountsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.subscriptions)[':recurrenceid']['accounts']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.subscriptions)[':recurrenceid']['accounts']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.subscriptions)[':recurrenceid']['accounts']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSubscriptionsRecurrenceidAccountsQueryKey>
  >({
    queryKey: getSubscriptionsRecurrenceidAccountsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.subscriptions[':recurrenceid'].accounts.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectSubscriptionsRecurrenceidAccounts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.subscriptions)[':recurrenceid']['accounts']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.subscriptions)[':recurrenceid']['accounts']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.subscriptions)[':recurrenceid']['accounts']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSubscriptionsRecurrenceidAccountsQueryKey>
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
      ...getSubscriptionsRecurrenceidAccountsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}
