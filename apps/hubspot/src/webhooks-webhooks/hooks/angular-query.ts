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

export function getAppWebhooksKey() {
  return ['app-webhooks'] as const
}

export function getWebhooksJournalKey() {
  return ['webhooks-journal'] as const
}

export function getAppWebhooks202609AppIdSettingsQueryKey(
  args: InferRequestType<(typeof client)['app-webhooks']['2026-09'][':appId']['settings']['$get']>,
) {
  return ['app-webhooks', '/app-webhooks/2026-09/:appId/settings', args] as const
}

export function getAppWebhooks202609AppIdSettingsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['app-webhooks']['2026-09'][':appId']['settings']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['app-webhooks']['2026-09'][':appId']['settings']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['app-webhooks']['2026-09'][':appId']['settings']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppWebhooks202609AppIdSettingsQueryKey>
  >({
    queryKey: getAppWebhooks202609AppIdSettingsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['app-webhooks']['2026-09'][':appId'].settings.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAppWebhooks202609AppIdSettings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['app-webhooks']['2026-09'][':appId']['settings']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['app-webhooks']['2026-09'][':appId']['settings']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['app-webhooks']['2026-09'][':appId']['settings']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppWebhooks202609AppIdSettingsQueryKey>
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
      ...getAppWebhooks202609AppIdSettingsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPutAppWebhooks202609AppIdSettingsMutationKey() {
  return ['app-webhooks', '/app-webhooks/2026-09/:appId/settings', 'PUT'] as const
}

export function getPutAppWebhooks202609AppIdSettingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['app-webhooks']['2026-09'][':appId']['settings']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['app-webhooks']['2026-09'][':appId']['settings']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutAppWebhooks202609AppIdSettingsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['app-webhooks']['2026-09'][':appId']['settings']['$put']
      >,
    ) {
      return parseResponse(client['app-webhooks']['2026-09'][':appId'].settings.$put(args, options))
    },
  })
}

export function injectPutAppWebhooks202609AppIdSettings<
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
                ReturnType<(typeof client)['app-webhooks']['2026-09'][':appId']['settings']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['app-webhooks']['2026-09'][':appId']['settings']['$put']>,
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
    const mutationDefaults = getPutAppWebhooks202609AppIdSettingsMutationOptions<
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

export function getDeleteAppWebhooks202609AppIdSettingsMutationKey() {
  return ['app-webhooks', '/app-webhooks/2026-09/:appId/settings', 'DELETE'] as const
}

export function getDeleteAppWebhooks202609AppIdSettingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['app-webhooks']['2026-09'][':appId']['settings']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client)['app-webhooks']['2026-09'][':appId']['settings']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAppWebhooks202609AppIdSettingsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['app-webhooks']['2026-09'][':appId']['settings']['$delete']
      >,
    ) {
      return parseResponse(
        client['app-webhooks']['2026-09'][':appId'].settings.$delete(args, options),
      )
    },
  })
}

export function injectDeleteAppWebhooks202609AppIdSettings<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['app-webhooks']['2026-09'][':appId']['settings']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client)['app-webhooks']['2026-09'][':appId']['settings']['$delete']
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
    const mutationDefaults = getDeleteAppWebhooks202609AppIdSettingsMutationOptions<
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

export function getAppWebhooks202609AppIdSubscriptionsQueryKey(
  args: InferRequestType<
    (typeof client)['app-webhooks']['2026-09'][':appId']['subscriptions']['$get']
  >,
) {
  return ['app-webhooks', '/app-webhooks/2026-09/:appId/subscriptions', args] as const
}

export function getAppWebhooks202609AppIdSubscriptionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['app-webhooks']['2026-09'][':appId']['subscriptions']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['app-webhooks']['2026-09'][':appId']['subscriptions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['app-webhooks']['2026-09'][':appId']['subscriptions']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppWebhooks202609AppIdSubscriptionsQueryKey>
  >({
    queryKey: getAppWebhooks202609AppIdSubscriptionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['app-webhooks']['2026-09'][':appId'].subscriptions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAppWebhooks202609AppIdSubscriptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['app-webhooks']['2026-09'][':appId']['subscriptions']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['app-webhooks']['2026-09'][':appId']['subscriptions']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['app-webhooks']['2026-09'][':appId']['subscriptions']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppWebhooks202609AppIdSubscriptionsQueryKey>
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
      ...getAppWebhooks202609AppIdSubscriptionsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostAppWebhooks202609AppIdSubscriptionsMutationKey() {
  return ['app-webhooks', '/app-webhooks/2026-09/:appId/subscriptions', 'POST'] as const
}

export function getPostAppWebhooks202609AppIdSubscriptionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['app-webhooks']['2026-09'][':appId']['subscriptions']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['app-webhooks']['2026-09'][':appId']['subscriptions']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAppWebhooks202609AppIdSubscriptionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['app-webhooks']['2026-09'][':appId']['subscriptions']['$post']
      >,
    ) {
      return parseResponse(
        client['app-webhooks']['2026-09'][':appId'].subscriptions.$post(args, options),
      )
    },
  })
}

export function injectPostAppWebhooks202609AppIdSubscriptions<
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
                  (typeof client)['app-webhooks']['2026-09'][':appId']['subscriptions']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['app-webhooks']['2026-09'][':appId']['subscriptions']['$post']
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
    const mutationDefaults = getPostAppWebhooks202609AppIdSubscriptionsMutationOptions<
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

export function getPostAppWebhooks202609AppIdSubscriptionsBatchUpdateMutationKey() {
  return [
    'app-webhooks',
    '/app-webhooks/2026-09/:appId/subscriptions/batch/update',
    'POST',
  ] as const
}

export function getPostAppWebhooks202609AppIdSubscriptionsBatchUpdateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['app-webhooks']['2026-09'][':appId']['subscriptions']['batch']['update']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['app-webhooks']['2026-09'][':appId']['subscriptions']['batch']['update']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAppWebhooks202609AppIdSubscriptionsBatchUpdateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['app-webhooks']['2026-09'][':appId']['subscriptions']['batch']['update']['$post']
      >,
    ) {
      return parseResponse(
        client['app-webhooks']['2026-09'][':appId'].subscriptions.batch.update.$post(args, options),
      )
    },
  })
}

export function injectPostAppWebhooks202609AppIdSubscriptionsBatchUpdate<
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
                  (typeof client)['app-webhooks']['2026-09'][':appId']['subscriptions']['batch']['update']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['app-webhooks']['2026-09'][':appId']['subscriptions']['batch']['update']['$post']
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
    const mutationDefaults = getPostAppWebhooks202609AppIdSubscriptionsBatchUpdateMutationOptions<
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

export function getAppWebhooks202609AppIdSubscriptionsSubscriptionIdQueryKey(
  args: InferRequestType<
    (typeof client)['app-webhooks']['2026-09'][':appId']['subscriptions'][':subscriptionId']['$get']
  >,
) {
  return [
    'app-webhooks',
    '/app-webhooks/2026-09/:appId/subscriptions/:subscriptionId',
    args,
  ] as const
}

export function getAppWebhooks202609AppIdSubscriptionsSubscriptionIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['app-webhooks']['2026-09'][':appId']['subscriptions'][':subscriptionId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['app-webhooks']['2026-09'][':appId']['subscriptions'][':subscriptionId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['app-webhooks']['2026-09'][':appId']['subscriptions'][':subscriptionId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAppWebhooks202609AppIdSubscriptionsSubscriptionIdQueryKey>
  >({
    queryKey: getAppWebhooks202609AppIdSubscriptionsSubscriptionIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['app-webhooks']['2026-09'][':appId'].subscriptions[':subscriptionId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAppWebhooks202609AppIdSubscriptionsSubscriptionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['app-webhooks']['2026-09'][':appId']['subscriptions'][':subscriptionId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['app-webhooks']['2026-09'][':appId']['subscriptions'][':subscriptionId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['app-webhooks']['2026-09'][':appId']['subscriptions'][':subscriptionId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAppWebhooks202609AppIdSubscriptionsSubscriptionIdQueryKey>
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
      ...getAppWebhooks202609AppIdSubscriptionsSubscriptionIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getDeleteAppWebhooks202609AppIdSubscriptionsSubscriptionIdMutationKey() {
  return [
    'app-webhooks',
    '/app-webhooks/2026-09/:appId/subscriptions/:subscriptionId',
    'DELETE',
  ] as const
}

export function getDeleteAppWebhooks202609AppIdSubscriptionsSubscriptionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['app-webhooks']['2026-09'][':appId']['subscriptions'][':subscriptionId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client)['app-webhooks']['2026-09'][':appId']['subscriptions'][':subscriptionId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteAppWebhooks202609AppIdSubscriptionsSubscriptionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['app-webhooks']['2026-09'][':appId']['subscriptions'][':subscriptionId']['$delete']
      >,
    ) {
      return parseResponse(
        client['app-webhooks']['2026-09'][':appId'].subscriptions[':subscriptionId'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function injectDeleteAppWebhooks202609AppIdSubscriptionsSubscriptionId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['app-webhooks']['2026-09'][':appId']['subscriptions'][':subscriptionId']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client)['app-webhooks']['2026-09'][':appId']['subscriptions'][':subscriptionId']['$delete']
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
    const mutationDefaults =
      getDeleteAppWebhooks202609AppIdSubscriptionsSubscriptionIdMutationOptions<
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

export function getPatchAppWebhooks202609AppIdSubscriptionsSubscriptionIdMutationKey() {
  return [
    'app-webhooks',
    '/app-webhooks/2026-09/:appId/subscriptions/:subscriptionId',
    'PATCH',
  ] as const
}

export function getPatchAppWebhooks202609AppIdSubscriptionsSubscriptionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['app-webhooks']['2026-09'][':appId']['subscriptions'][':subscriptionId']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['app-webhooks']['2026-09'][':appId']['subscriptions'][':subscriptionId']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchAppWebhooks202609AppIdSubscriptionsSubscriptionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['app-webhooks']['2026-09'][':appId']['subscriptions'][':subscriptionId']['$patch']
      >,
    ) {
      return parseResponse(
        client['app-webhooks']['2026-09'][':appId'].subscriptions[':subscriptionId'].$patch(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPatchAppWebhooks202609AppIdSubscriptionsSubscriptionId<
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
                  (typeof client)['app-webhooks']['2026-09'][':appId']['subscriptions'][':subscriptionId']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['app-webhooks']['2026-09'][':appId']['subscriptions'][':subscriptionId']['$patch']
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
    const mutationDefaults =
      getPatchAppWebhooks202609AppIdSubscriptionsSubscriptionIdMutationOptions<
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

export function getWebhooksJournalJournalLocal202609BatchEarliestCountQueryKey(
  args: InferRequestType<
    (typeof client)['webhooks-journal']['journal-local']['2026-09']['batch']['earliest'][':count']['$get']
  >,
) {
  return [
    'webhooks-journal',
    '/webhooks-journal/journal-local/2026-09/batch/earliest/:count',
    args,
  ] as const
}

export function getWebhooksJournalJournalLocal202609BatchEarliestCountQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['webhooks-journal']['journal-local']['2026-09']['batch']['earliest'][':count']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['webhooks-journal']['journal-local']['2026-09']['batch']['earliest'][':count']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['webhooks-journal']['journal-local']['2026-09']['batch']['earliest'][':count']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWebhooksJournalJournalLocal202609BatchEarliestCountQueryKey>
  >({
    queryKey: getWebhooksJournalJournalLocal202609BatchEarliestCountQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['webhooks-journal']['journal-local']['2026-09'].batch.earliest[':count'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectWebhooksJournalJournalLocal202609BatchEarliestCount<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['webhooks-journal']['journal-local']['2026-09']['batch']['earliest'][':count']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['webhooks-journal']['journal-local']['2026-09']['batch']['earliest'][':count']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['webhooks-journal']['journal-local']['2026-09']['batch']['earliest'][':count']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWebhooksJournalJournalLocal202609BatchEarliestCountQueryKey>
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
      ...getWebhooksJournalJournalLocal202609BatchEarliestCountQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getWebhooksJournalJournalLocal202609BatchLatestCountQueryKey(
  args: InferRequestType<
    (typeof client)['webhooks-journal']['journal-local']['2026-09']['batch']['latest'][':count']['$get']
  >,
) {
  return [
    'webhooks-journal',
    '/webhooks-journal/journal-local/2026-09/batch/latest/:count',
    args,
  ] as const
}

export function getWebhooksJournalJournalLocal202609BatchLatestCountQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['webhooks-journal']['journal-local']['2026-09']['batch']['latest'][':count']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['webhooks-journal']['journal-local']['2026-09']['batch']['latest'][':count']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['webhooks-journal']['journal-local']['2026-09']['batch']['latest'][':count']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWebhooksJournalJournalLocal202609BatchLatestCountQueryKey>
  >({
    queryKey: getWebhooksJournalJournalLocal202609BatchLatestCountQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['webhooks-journal']['journal-local']['2026-09'].batch.latest[':count'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectWebhooksJournalJournalLocal202609BatchLatestCount<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['webhooks-journal']['journal-local']['2026-09']['batch']['latest'][':count']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['webhooks-journal']['journal-local']['2026-09']['batch']['latest'][':count']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['webhooks-journal']['journal-local']['2026-09']['batch']['latest'][':count']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWebhooksJournalJournalLocal202609BatchLatestCountQueryKey>
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
      ...getWebhooksJournalJournalLocal202609BatchLatestCountQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPostWebhooksJournalJournalLocal202609BatchReadMutationKey() {
  return ['webhooks-journal', '/webhooks-journal/journal-local/2026-09/batch/read', 'POST'] as const
}

export function getPostWebhooksJournalJournalLocal202609BatchReadMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['webhooks-journal']['journal-local']['2026-09']['batch']['read']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['webhooks-journal']['journal-local']['2026-09']['batch']['read']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostWebhooksJournalJournalLocal202609BatchReadMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['webhooks-journal']['journal-local']['2026-09']['batch']['read']['$post']
      >,
    ) {
      return parseResponse(
        client['webhooks-journal']['journal-local']['2026-09'].batch.read.$post(args, options),
      )
    },
  })
}

export function injectPostWebhooksJournalJournalLocal202609BatchRead<
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
                  (typeof client)['webhooks-journal']['journal-local']['2026-09']['batch']['read']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['webhooks-journal']['journal-local']['2026-09']['batch']['read']['$post']
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
    const mutationDefaults = getPostWebhooksJournalJournalLocal202609BatchReadMutationOptions<
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

export function getWebhooksJournalJournalLocal202609BatchOffsetNextCountQueryKey(
  args: InferRequestType<
    (typeof client)['webhooks-journal']['journal-local']['2026-09']['batch'][':offset']['next'][':count']['$get']
  >,
) {
  return [
    'webhooks-journal',
    '/webhooks-journal/journal-local/2026-09/batch/:offset/next/:count',
    args,
  ] as const
}

export function getWebhooksJournalJournalLocal202609BatchOffsetNextCountQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['webhooks-journal']['journal-local']['2026-09']['batch'][':offset']['next'][':count']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['webhooks-journal']['journal-local']['2026-09']['batch'][':offset']['next'][':count']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['webhooks-journal']['journal-local']['2026-09']['batch'][':offset']['next'][':count']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWebhooksJournalJournalLocal202609BatchOffsetNextCountQueryKey>
  >({
    queryKey: getWebhooksJournalJournalLocal202609BatchOffsetNextCountQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['webhooks-journal']['journal-local']['2026-09'].batch[':offset'].next[':count'].$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function injectWebhooksJournalJournalLocal202609BatchOffsetNextCount<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['webhooks-journal']['journal-local']['2026-09']['batch'][':offset']['next'][':count']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['webhooks-journal']['journal-local']['2026-09']['batch'][':offset']['next'][':count']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['webhooks-journal']['journal-local']['2026-09']['batch'][':offset']['next'][':count']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWebhooksJournalJournalLocal202609BatchOffsetNextCountQueryKey>
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
      ...getWebhooksJournalJournalLocal202609BatchOffsetNextCountQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getWebhooksJournalJournalLocal202609EarliestQueryKey(
  args: InferRequestType<
    (typeof client)['webhooks-journal']['journal-local']['2026-09']['earliest']['$get']
  >,
) {
  return ['webhooks-journal', '/webhooks-journal/journal-local/2026-09/earliest', args] as const
}

export function getWebhooksJournalJournalLocal202609EarliestQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['webhooks-journal']['journal-local']['2026-09']['earliest']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['webhooks-journal']['journal-local']['2026-09']['earliest']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['webhooks-journal']['journal-local']['2026-09']['earliest']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWebhooksJournalJournalLocal202609EarliestQueryKey>
  >({
    queryKey: getWebhooksJournalJournalLocal202609EarliestQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['webhooks-journal']['journal-local']['2026-09'].earliest.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectWebhooksJournalJournalLocal202609Earliest<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['webhooks-journal']['journal-local']['2026-09']['earliest']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['webhooks-journal']['journal-local']['2026-09']['earliest']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['webhooks-journal']['journal-local']['2026-09']['earliest']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWebhooksJournalJournalLocal202609EarliestQueryKey>
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
      ...getWebhooksJournalJournalLocal202609EarliestQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getWebhooksJournalJournalLocal202609LatestQueryKey(
  args: InferRequestType<
    (typeof client)['webhooks-journal']['journal-local']['2026-09']['latest']['$get']
  >,
) {
  return ['webhooks-journal', '/webhooks-journal/journal-local/2026-09/latest', args] as const
}

export function getWebhooksJournalJournalLocal202609LatestQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['webhooks-journal']['journal-local']['2026-09']['latest']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['webhooks-journal']['journal-local']['2026-09']['latest']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['webhooks-journal']['journal-local']['2026-09']['latest']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWebhooksJournalJournalLocal202609LatestQueryKey>
  >({
    queryKey: getWebhooksJournalJournalLocal202609LatestQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['webhooks-journal']['journal-local']['2026-09'].latest.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectWebhooksJournalJournalLocal202609Latest<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['webhooks-journal']['journal-local']['2026-09']['latest']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['webhooks-journal']['journal-local']['2026-09']['latest']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['webhooks-journal']['journal-local']['2026-09']['latest']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWebhooksJournalJournalLocal202609LatestQueryKey>
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
      ...getWebhooksJournalJournalLocal202609LatestQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getWebhooksJournalJournalLocal202609OffsetOffsetNextQueryKey(
  args: InferRequestType<
    (typeof client)['webhooks-journal']['journal-local']['2026-09']['offset'][':offset']['next']['$get']
  >,
) {
  return [
    'webhooks-journal',
    '/webhooks-journal/journal-local/2026-09/offset/:offset/next',
    args,
  ] as const
}

export function getWebhooksJournalJournalLocal202609OffsetOffsetNextQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['webhooks-journal']['journal-local']['2026-09']['offset'][':offset']['next']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['webhooks-journal']['journal-local']['2026-09']['offset'][':offset']['next']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['webhooks-journal']['journal-local']['2026-09']['offset'][':offset']['next']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWebhooksJournalJournalLocal202609OffsetOffsetNextQueryKey>
  >({
    queryKey: getWebhooksJournalJournalLocal202609OffsetOffsetNextQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['webhooks-journal']['journal-local']['2026-09'].offset[':offset'].next.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectWebhooksJournalJournalLocal202609OffsetOffsetNext<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['webhooks-journal']['journal-local']['2026-09']['offset'][':offset']['next']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['webhooks-journal']['journal-local']['2026-09']['offset'][':offset']['next']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['webhooks-journal']['journal-local']['2026-09']['offset'][':offset']['next']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWebhooksJournalJournalLocal202609OffsetOffsetNextQueryKey>
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
      ...getWebhooksJournalJournalLocal202609OffsetOffsetNextQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getWebhooksJournalJournalLocal202609StatusStatusIdQueryKey(
  args: InferRequestType<
    (typeof client)['webhooks-journal']['journal-local']['2026-09']['status'][':statusId']['$get']
  >,
) {
  return [
    'webhooks-journal',
    '/webhooks-journal/journal-local/2026-09/status/:statusId',
    args,
  ] as const
}

export function getWebhooksJournalJournalLocal202609StatusStatusIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['webhooks-journal']['journal-local']['2026-09']['status'][':statusId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['webhooks-journal']['journal-local']['2026-09']['status'][':statusId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['webhooks-journal']['journal-local']['2026-09']['status'][':statusId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWebhooksJournalJournalLocal202609StatusStatusIdQueryKey>
  >({
    queryKey: getWebhooksJournalJournalLocal202609StatusStatusIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['webhooks-journal']['journal-local']['2026-09'].status[':statusId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectWebhooksJournalJournalLocal202609StatusStatusId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['webhooks-journal']['journal-local']['2026-09']['status'][':statusId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['webhooks-journal']['journal-local']['2026-09']['status'][':statusId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['webhooks-journal']['journal-local']['2026-09']['status'][':statusId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWebhooksJournalJournalLocal202609StatusStatusIdQueryKey>
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
      ...getWebhooksJournalJournalLocal202609StatusStatusIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getWebhooksJournalJournal202609BatchEarliestCountQueryKey(
  args: InferRequestType<
    (typeof client)['webhooks-journal']['journal']['2026-09']['batch']['earliest'][':count']['$get']
  >,
) {
  return [
    'webhooks-journal',
    '/webhooks-journal/journal/2026-09/batch/earliest/:count',
    args,
  ] as const
}

export function getWebhooksJournalJournal202609BatchEarliestCountQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['webhooks-journal']['journal']['2026-09']['batch']['earliest'][':count']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['webhooks-journal']['journal']['2026-09']['batch']['earliest'][':count']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['webhooks-journal']['journal']['2026-09']['batch']['earliest'][':count']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWebhooksJournalJournal202609BatchEarliestCountQueryKey>
  >({
    queryKey: getWebhooksJournalJournal202609BatchEarliestCountQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['webhooks-journal'].journal['2026-09'].batch.earliest[':count'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectWebhooksJournalJournal202609BatchEarliestCount<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['webhooks-journal']['journal']['2026-09']['batch']['earliest'][':count']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['webhooks-journal']['journal']['2026-09']['batch']['earliest'][':count']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['webhooks-journal']['journal']['2026-09']['batch']['earliest'][':count']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWebhooksJournalJournal202609BatchEarliestCountQueryKey>
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
      ...getWebhooksJournalJournal202609BatchEarliestCountQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getWebhooksJournalJournal202609BatchLatestCountQueryKey(
  args: InferRequestType<
    (typeof client)['webhooks-journal']['journal']['2026-09']['batch']['latest'][':count']['$get']
  >,
) {
  return [
    'webhooks-journal',
    '/webhooks-journal/journal/2026-09/batch/latest/:count',
    args,
  ] as const
}

export function getWebhooksJournalJournal202609BatchLatestCountQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['webhooks-journal']['journal']['2026-09']['batch']['latest'][':count']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['webhooks-journal']['journal']['2026-09']['batch']['latest'][':count']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['webhooks-journal']['journal']['2026-09']['batch']['latest'][':count']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWebhooksJournalJournal202609BatchLatestCountQueryKey>
  >({
    queryKey: getWebhooksJournalJournal202609BatchLatestCountQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['webhooks-journal'].journal['2026-09'].batch.latest[':count'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectWebhooksJournalJournal202609BatchLatestCount<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['webhooks-journal']['journal']['2026-09']['batch']['latest'][':count']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['webhooks-journal']['journal']['2026-09']['batch']['latest'][':count']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['webhooks-journal']['journal']['2026-09']['batch']['latest'][':count']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWebhooksJournalJournal202609BatchLatestCountQueryKey>
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
      ...getWebhooksJournalJournal202609BatchLatestCountQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPostWebhooksJournalJournal202609BatchReadMutationKey() {
  return ['webhooks-journal', '/webhooks-journal/journal/2026-09/batch/read', 'POST'] as const
}

export function getPostWebhooksJournalJournal202609BatchReadMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['webhooks-journal']['journal']['2026-09']['batch']['read']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['webhooks-journal']['journal']['2026-09']['batch']['read']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostWebhooksJournalJournal202609BatchReadMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['webhooks-journal']['journal']['2026-09']['batch']['read']['$post']
      >,
    ) {
      return parseResponse(
        client['webhooks-journal'].journal['2026-09'].batch.read.$post(args, options),
      )
    },
  })
}

export function injectPostWebhooksJournalJournal202609BatchRead<
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
                  (typeof client)['webhooks-journal']['journal']['2026-09']['batch']['read']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['webhooks-journal']['journal']['2026-09']['batch']['read']['$post']
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
    const mutationDefaults = getPostWebhooksJournalJournal202609BatchReadMutationOptions<
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

export function getWebhooksJournalJournal202609BatchOffsetNextCountQueryKey(
  args: InferRequestType<
    (typeof client)['webhooks-journal']['journal']['2026-09']['batch'][':offset']['next'][':count']['$get']
  >,
) {
  return [
    'webhooks-journal',
    '/webhooks-journal/journal/2026-09/batch/:offset/next/:count',
    args,
  ] as const
}

export function getWebhooksJournalJournal202609BatchOffsetNextCountQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['webhooks-journal']['journal']['2026-09']['batch'][':offset']['next'][':count']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['webhooks-journal']['journal']['2026-09']['batch'][':offset']['next'][':count']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['webhooks-journal']['journal']['2026-09']['batch'][':offset']['next'][':count']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWebhooksJournalJournal202609BatchOffsetNextCountQueryKey>
  >({
    queryKey: getWebhooksJournalJournal202609BatchOffsetNextCountQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['webhooks-journal'].journal['2026-09'].batch[':offset'].next[':count'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectWebhooksJournalJournal202609BatchOffsetNextCount<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['webhooks-journal']['journal']['2026-09']['batch'][':offset']['next'][':count']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['webhooks-journal']['journal']['2026-09']['batch'][':offset']['next'][':count']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['webhooks-journal']['journal']['2026-09']['batch'][':offset']['next'][':count']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWebhooksJournalJournal202609BatchOffsetNextCountQueryKey>
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
      ...getWebhooksJournalJournal202609BatchOffsetNextCountQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getWebhooksJournalJournal202609EarliestQueryKey(
  args: InferRequestType<
    (typeof client)['webhooks-journal']['journal']['2026-09']['earliest']['$get']
  >,
) {
  return ['webhooks-journal', '/webhooks-journal/journal/2026-09/earliest', args] as const
}

export function getWebhooksJournalJournal202609EarliestQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['webhooks-journal']['journal']['2026-09']['earliest']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['webhooks-journal']['journal']['2026-09']['earliest']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['webhooks-journal']['journal']['2026-09']['earliest']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWebhooksJournalJournal202609EarliestQueryKey>
  >({
    queryKey: getWebhooksJournalJournal202609EarliestQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['webhooks-journal'].journal['2026-09'].earliest.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectWebhooksJournalJournal202609Earliest<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['webhooks-journal']['journal']['2026-09']['earliest']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['webhooks-journal']['journal']['2026-09']['earliest']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['webhooks-journal']['journal']['2026-09']['earliest']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWebhooksJournalJournal202609EarliestQueryKey>
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
      ...getWebhooksJournalJournal202609EarliestQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getWebhooksJournalJournal202609LatestQueryKey(
  args: InferRequestType<
    (typeof client)['webhooks-journal']['journal']['2026-09']['latest']['$get']
  >,
) {
  return ['webhooks-journal', '/webhooks-journal/journal/2026-09/latest', args] as const
}

export function getWebhooksJournalJournal202609LatestQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['webhooks-journal']['journal']['2026-09']['latest']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['webhooks-journal']['journal']['2026-09']['latest']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['webhooks-journal']['journal']['2026-09']['latest']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWebhooksJournalJournal202609LatestQueryKey>
  >({
    queryKey: getWebhooksJournalJournal202609LatestQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['webhooks-journal'].journal['2026-09'].latest.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectWebhooksJournalJournal202609Latest<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['webhooks-journal']['journal']['2026-09']['latest']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['webhooks-journal']['journal']['2026-09']['latest']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['webhooks-journal']['journal']['2026-09']['latest']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWebhooksJournalJournal202609LatestQueryKey>
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
      ...getWebhooksJournalJournal202609LatestQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getWebhooksJournalJournal202609OffsetOffsetNextQueryKey(
  args: InferRequestType<
    (typeof client)['webhooks-journal']['journal']['2026-09']['offset'][':offset']['next']['$get']
  >,
) {
  return [
    'webhooks-journal',
    '/webhooks-journal/journal/2026-09/offset/:offset/next',
    args,
  ] as const
}

export function getWebhooksJournalJournal202609OffsetOffsetNextQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['webhooks-journal']['journal']['2026-09']['offset'][':offset']['next']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['webhooks-journal']['journal']['2026-09']['offset'][':offset']['next']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['webhooks-journal']['journal']['2026-09']['offset'][':offset']['next']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWebhooksJournalJournal202609OffsetOffsetNextQueryKey>
  >({
    queryKey: getWebhooksJournalJournal202609OffsetOffsetNextQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['webhooks-journal'].journal['2026-09'].offset[':offset'].next.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectWebhooksJournalJournal202609OffsetOffsetNext<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['webhooks-journal']['journal']['2026-09']['offset'][':offset']['next']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['webhooks-journal']['journal']['2026-09']['offset'][':offset']['next']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['webhooks-journal']['journal']['2026-09']['offset'][':offset']['next']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWebhooksJournalJournal202609OffsetOffsetNextQueryKey>
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
      ...getWebhooksJournalJournal202609OffsetOffsetNextQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getWebhooksJournalJournal202609StatusStatusIdQueryKey(
  args: InferRequestType<
    (typeof client)['webhooks-journal']['journal']['2026-09']['status'][':statusId']['$get']
  >,
) {
  return ['webhooks-journal', '/webhooks-journal/journal/2026-09/status/:statusId', args] as const
}

export function getWebhooksJournalJournal202609StatusStatusIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['webhooks-journal']['journal']['2026-09']['status'][':statusId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['webhooks-journal']['journal']['2026-09']['status'][':statusId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['webhooks-journal']['journal']['2026-09']['status'][':statusId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWebhooksJournalJournal202609StatusStatusIdQueryKey>
  >({
    queryKey: getWebhooksJournalJournal202609StatusStatusIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['webhooks-journal'].journal['2026-09'].status[':statusId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectWebhooksJournalJournal202609StatusStatusId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['webhooks-journal']['journal']['2026-09']['status'][':statusId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['webhooks-journal']['journal']['2026-09']['status'][':statusId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['webhooks-journal']['journal']['2026-09']['status'][':statusId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWebhooksJournalJournal202609StatusStatusIdQueryKey>
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
      ...getWebhooksJournalJournal202609StatusStatusIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPostWebhooksJournalSnapshots202609CrmMutationKey() {
  return ['webhooks-journal', '/webhooks-journal/snapshots/2026-09/crm', 'POST'] as const
}

export function getPostWebhooksJournalSnapshots202609CrmMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['webhooks-journal']['snapshots']['2026-09']['crm']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['webhooks-journal']['snapshots']['2026-09']['crm']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostWebhooksJournalSnapshots202609CrmMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['webhooks-journal']['snapshots']['2026-09']['crm']['$post']
      >,
    ) {
      return parseResponse(client['webhooks-journal'].snapshots['2026-09'].crm.$post(args, options))
    },
  })
}

export function injectPostWebhooksJournalSnapshots202609Crm<
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
                  (typeof client)['webhooks-journal']['snapshots']['2026-09']['crm']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['webhooks-journal']['snapshots']['2026-09']['crm']['$post']
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
    const mutationDefaults = getPostWebhooksJournalSnapshots202609CrmMutationOptions<
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

export function getWebhooksJournalSubscriptions202609QueryKey() {
  return ['webhooks-journal', '/webhooks-journal/subscriptions/2026-09'] as const
}

export function getWebhooksJournalSubscriptions202609QueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['webhooks-journal']['subscriptions']['2026-09']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['webhooks-journal']['subscriptions']['2026-09']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWebhooksJournalSubscriptions202609QueryKey>
  >({
    queryKey: getWebhooksJournalSubscriptions202609QueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client['webhooks-journal'].subscriptions['2026-09'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectWebhooksJournalSubscriptions202609<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['webhooks-journal']['subscriptions']['2026-09']['$get']>>
      >
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
              Awaited<
                ReturnType<(typeof client)['webhooks-journal']['subscriptions']['2026-09']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWebhooksJournalSubscriptions202609QueryKey>
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
      ...getWebhooksJournalSubscriptions202609QueryOptions<TData, TError>(clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostWebhooksJournalSubscriptions202609MutationKey() {
  return ['webhooks-journal', '/webhooks-journal/subscriptions/2026-09', 'POST'] as const
}

export function getPostWebhooksJournalSubscriptions202609MutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['webhooks-journal']['subscriptions']['2026-09']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['webhooks-journal']['subscriptions']['2026-09']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostWebhooksJournalSubscriptions202609MutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['webhooks-journal']['subscriptions']['2026-09']['$post']
      >,
    ) {
      return parseResponse(client['webhooks-journal'].subscriptions['2026-09'].$post(args, options))
    },
  })
}

export function injectPostWebhooksJournalSubscriptions202609<
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
                ReturnType<(typeof client)['webhooks-journal']['subscriptions']['2026-09']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['webhooks-journal']['subscriptions']['2026-09']['$post']>,
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
    const mutationDefaults = getPostWebhooksJournalSubscriptions202609MutationOptions<
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

export function getPostWebhooksJournalSubscriptions202609FiltersMutationKey() {
  return ['webhooks-journal', '/webhooks-journal/subscriptions/2026-09/filters', 'POST'] as const
}

export function getPostWebhooksJournalSubscriptions202609FiltersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['webhooks-journal']['subscriptions']['2026-09']['filters']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['webhooks-journal']['subscriptions']['2026-09']['filters']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostWebhooksJournalSubscriptions202609FiltersMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['webhooks-journal']['subscriptions']['2026-09']['filters']['$post']
      >,
    ) {
      return parseResponse(
        client['webhooks-journal'].subscriptions['2026-09'].filters.$post(args, options),
      )
    },
  })
}

export function injectPostWebhooksJournalSubscriptions202609Filters<
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
                  (typeof client)['webhooks-journal']['subscriptions']['2026-09']['filters']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['webhooks-journal']['subscriptions']['2026-09']['filters']['$post']
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
    const mutationDefaults = getPostWebhooksJournalSubscriptions202609FiltersMutationOptions<
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

export function getWebhooksJournalSubscriptions202609FiltersSubscriptionSubscriptionIdQueryKey(
  args: InferRequestType<
    (typeof client)['webhooks-journal']['subscriptions']['2026-09']['filters']['subscription'][':subscriptionId']['$get']
  >,
) {
  return [
    'webhooks-journal',
    '/webhooks-journal/subscriptions/2026-09/filters/subscription/:subscriptionId',
    args,
  ] as const
}

export function getWebhooksJournalSubscriptions202609FiltersSubscriptionSubscriptionIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['webhooks-journal']['subscriptions']['2026-09']['filters']['subscription'][':subscriptionId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['webhooks-journal']['subscriptions']['2026-09']['filters']['subscription'][':subscriptionId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['webhooks-journal']['subscriptions']['2026-09']['filters']['subscription'][':subscriptionId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getWebhooksJournalSubscriptions202609FiltersSubscriptionSubscriptionIdQueryKey
    >
  >({
    queryKey: getWebhooksJournalSubscriptions202609FiltersSubscriptionSubscriptionIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['webhooks-journal'].subscriptions['2026-09'].filters.subscription[
          ':subscriptionId'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectWebhooksJournalSubscriptions202609FiltersSubscriptionSubscriptionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['webhooks-journal']['subscriptions']['2026-09']['filters']['subscription'][':subscriptionId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['webhooks-journal']['subscriptions']['2026-09']['filters']['subscription'][':subscriptionId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['webhooks-journal']['subscriptions']['2026-09']['filters']['subscription'][':subscriptionId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getWebhooksJournalSubscriptions202609FiltersSubscriptionSubscriptionIdQueryKey
        >
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
      ...getWebhooksJournalSubscriptions202609FiltersSubscriptionSubscriptionIdQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getWebhooksJournalSubscriptions202609FiltersFilterIdQueryKey(
  args: InferRequestType<
    (typeof client)['webhooks-journal']['subscriptions']['2026-09']['filters'][':filterId']['$get']
  >,
) {
  return [
    'webhooks-journal',
    '/webhooks-journal/subscriptions/2026-09/filters/:filterId',
    args,
  ] as const
}

export function getWebhooksJournalSubscriptions202609FiltersFilterIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['webhooks-journal']['subscriptions']['2026-09']['filters'][':filterId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['webhooks-journal']['subscriptions']['2026-09']['filters'][':filterId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['webhooks-journal']['subscriptions']['2026-09']['filters'][':filterId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWebhooksJournalSubscriptions202609FiltersFilterIdQueryKey>
  >({
    queryKey: getWebhooksJournalSubscriptions202609FiltersFilterIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['webhooks-journal'].subscriptions['2026-09'].filters[':filterId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectWebhooksJournalSubscriptions202609FiltersFilterId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['webhooks-journal']['subscriptions']['2026-09']['filters'][':filterId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['webhooks-journal']['subscriptions']['2026-09']['filters'][':filterId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['webhooks-journal']['subscriptions']['2026-09']['filters'][':filterId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWebhooksJournalSubscriptions202609FiltersFilterIdQueryKey>
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
      ...getWebhooksJournalSubscriptions202609FiltersFilterIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getDeleteWebhooksJournalSubscriptions202609FiltersFilterIdMutationKey() {
  return [
    'webhooks-journal',
    '/webhooks-journal/subscriptions/2026-09/filters/:filterId',
    'DELETE',
  ] as const
}

export function getDeleteWebhooksJournalSubscriptions202609FiltersFilterIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['webhooks-journal']['subscriptions']['2026-09']['filters'][':filterId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client)['webhooks-journal']['subscriptions']['2026-09']['filters'][':filterId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteWebhooksJournalSubscriptions202609FiltersFilterIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['webhooks-journal']['subscriptions']['2026-09']['filters'][':filterId']['$delete']
      >,
    ) {
      return parseResponse(
        client['webhooks-journal'].subscriptions['2026-09'].filters[':filterId'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function injectDeleteWebhooksJournalSubscriptions202609FiltersFilterId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['webhooks-journal']['subscriptions']['2026-09']['filters'][':filterId']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client)['webhooks-journal']['subscriptions']['2026-09']['filters'][':filterId']['$delete']
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
    const mutationDefaults =
      getDeleteWebhooksJournalSubscriptions202609FiltersFilterIdMutationOptions<
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

export function getDeleteWebhooksJournalSubscriptions202609PortalsPortalIdMutationKey() {
  return [
    'webhooks-journal',
    '/webhooks-journal/subscriptions/2026-09/portals/:portalId',
    'DELETE',
  ] as const
}

export function getDeleteWebhooksJournalSubscriptions202609PortalsPortalIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['webhooks-journal']['subscriptions']['2026-09']['portals'][':portalId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client)['webhooks-journal']['subscriptions']['2026-09']['portals'][':portalId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteWebhooksJournalSubscriptions202609PortalsPortalIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['webhooks-journal']['subscriptions']['2026-09']['portals'][':portalId']['$delete']
      >,
    ) {
      return parseResponse(
        client['webhooks-journal'].subscriptions['2026-09'].portals[':portalId'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function injectDeleteWebhooksJournalSubscriptions202609PortalsPortalId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['webhooks-journal']['subscriptions']['2026-09']['portals'][':portalId']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client)['webhooks-journal']['subscriptions']['2026-09']['portals'][':portalId']['$delete']
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
    const mutationDefaults =
      getDeleteWebhooksJournalSubscriptions202609PortalsPortalIdMutationOptions<
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

export function getWebhooksJournalSubscriptions202609SubscriptionIdQueryKey(
  args: InferRequestType<
    (typeof client)['webhooks-journal']['subscriptions']['2026-09'][':subscriptionId']['$get']
  >,
) {
  return [
    'webhooks-journal',
    '/webhooks-journal/subscriptions/2026-09/:subscriptionId',
    args,
  ] as const
}

export function getWebhooksJournalSubscriptions202609SubscriptionIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['webhooks-journal']['subscriptions']['2026-09'][':subscriptionId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['webhooks-journal']['subscriptions']['2026-09'][':subscriptionId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['webhooks-journal']['subscriptions']['2026-09'][':subscriptionId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWebhooksJournalSubscriptions202609SubscriptionIdQueryKey>
  >({
    queryKey: getWebhooksJournalSubscriptions202609SubscriptionIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['webhooks-journal'].subscriptions['2026-09'][':subscriptionId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectWebhooksJournalSubscriptions202609SubscriptionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['webhooks-journal']['subscriptions']['2026-09'][':subscriptionId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['webhooks-journal']['subscriptions']['2026-09'][':subscriptionId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['webhooks-journal']['subscriptions']['2026-09'][':subscriptionId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWebhooksJournalSubscriptions202609SubscriptionIdQueryKey>
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
      ...getWebhooksJournalSubscriptions202609SubscriptionIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getDeleteWebhooksJournalSubscriptions202609SubscriptionIdMutationKey() {
  return [
    'webhooks-journal',
    '/webhooks-journal/subscriptions/2026-09/:subscriptionId',
    'DELETE',
  ] as const
}

export function getDeleteWebhooksJournalSubscriptions202609SubscriptionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['webhooks-journal']['subscriptions']['2026-09'][':subscriptionId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client)['webhooks-journal']['subscriptions']['2026-09'][':subscriptionId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteWebhooksJournalSubscriptions202609SubscriptionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['webhooks-journal']['subscriptions']['2026-09'][':subscriptionId']['$delete']
      >,
    ) {
      return parseResponse(
        client['webhooks-journal'].subscriptions['2026-09'][':subscriptionId'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function injectDeleteWebhooksJournalSubscriptions202609SubscriptionId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['webhooks-journal']['subscriptions']['2026-09'][':subscriptionId']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client)['webhooks-journal']['subscriptions']['2026-09'][':subscriptionId']['$delete']
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
    const mutationDefaults =
      getDeleteWebhooksJournalSubscriptions202609SubscriptionIdMutationOptions<
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
