import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function get_2Key() {
  return ['2'] as const
}

export function getGet2AccountKey() {
  return ['2', '/2/account'] as const
}

export function useGet2Account<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['account']['$get']>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGet2AccountKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['account']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].account.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet2Account<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['account']['$get']>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGet2AccountKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['account']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].account.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPost2AccountKey() {
  return ['2', '/2/account', 'POST'] as const
}

export function usePost2Account<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['account']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2']['account']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost2AccountKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['2']['account']['$post']> },
      ) => parseResponse(client['2'].account.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGet2AccountActivitySubscriptionsCountKey() {
  return ['2', '/2/account_activity/subscriptions/count'] as const
}

export function useGet2AccountActivitySubscriptionsCount<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['2']['account_activity']['subscriptions']['count']['$get']>
          >
        >
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
        ? getGet2AccountActivitySubscriptionsCountKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['2']['account_activity']['subscriptions']['count']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['2'].account_activity.subscriptions.count.$get(undefined, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet2AccountActivitySubscriptionsCount<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['2']['account_activity']['subscriptions']['count']['$get']>
          >
        >
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
        ? getGet2AccountActivitySubscriptionsCountKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['2']['account_activity']['subscriptions']['count']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['2'].account_activity.subscriptions.count.$get(undefined, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGet2AccountActivityWebhooksWebhookIdSubscriptionsAllKey(
  args: InferRequestType<
    (typeof client)['2']['account_activity']['webhooks'][':webhook_id']['subscriptions']['all']['$get']
  >,
) {
  return ['2', '/2/account_activity/webhooks/:webhook_id/subscriptions/all', args] as const
}

export function useGet2AccountActivityWebhooksWebhookIdSubscriptionsAll<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2']['account_activity']['webhooks'][':webhook_id']['subscriptions']['all']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2']['account_activity']['webhooks'][':webhook_id']['subscriptions']['all']['$get']
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
        ? getGet2AccountActivityWebhooksWebhookIdSubscriptionsAllKey(args)
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
                (typeof client)['2']['account_activity']['webhooks'][':webhook_id']['subscriptions']['all']['$get']
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
          client['2'].account_activity.webhooks[':webhook_id'].subscriptions.all.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet2AccountActivityWebhooksWebhookIdSubscriptionsAll<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2']['account_activity']['webhooks'][':webhook_id']['subscriptions']['all']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2']['account_activity']['webhooks'][':webhook_id']['subscriptions']['all']['$get']
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
        ? getGet2AccountActivityWebhooksWebhookIdSubscriptionsAllKey(args)
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
                (typeof client)['2']['account_activity']['webhooks'][':webhook_id']['subscriptions']['all']['$get']
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
          client['2'].account_activity.webhooks[':webhook_id'].subscriptions.all.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPost2AccountActivityWebhooksWebhookIdSubscriptionsAllKey() {
  return ['2', '/2/account_activity/webhooks/:webhook_id/subscriptions/all', 'POST'] as const
}

export function usePost2AccountActivityWebhooksWebhookIdSubscriptionsAll<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2']['account_activity']['webhooks'][':webhook_id']['subscriptions']['all']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['2']['account_activity']['webhooks'][':webhook_id']['subscriptions']['all']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost2AccountActivityWebhooksWebhookIdSubscriptionsAllKey()
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
            (typeof client)['2']['account_activity']['webhooks'][':webhook_id']['subscriptions']['all']['$post']
          >
        },
      ) =>
        parseResponse(
          client['2'].account_activity.webhooks[':webhook_id'].subscriptions.all.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGet2AccountActivityWebhooksWebhookIdSubscriptionsAllListKey(
  args: InferRequestType<
    (typeof client)['2']['account_activity']['webhooks'][':webhook_id']['subscriptions']['all']['list']['$get']
  >,
) {
  return ['2', '/2/account_activity/webhooks/:webhook_id/subscriptions/all/list', args] as const
}

export function useGet2AccountActivityWebhooksWebhookIdSubscriptionsAllList<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2']['account_activity']['webhooks'][':webhook_id']['subscriptions']['all']['list']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2']['account_activity']['webhooks'][':webhook_id']['subscriptions']['all']['list']['$get']
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
        ? getGet2AccountActivityWebhooksWebhookIdSubscriptionsAllListKey(args)
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
                (typeof client)['2']['account_activity']['webhooks'][':webhook_id']['subscriptions']['all']['list']['$get']
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
          client['2'].account_activity.webhooks[':webhook_id'].subscriptions.all.list.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet2AccountActivityWebhooksWebhookIdSubscriptionsAllList<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['2']['account_activity']['webhooks'][':webhook_id']['subscriptions']['all']['list']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2']['account_activity']['webhooks'][':webhook_id']['subscriptions']['all']['list']['$get']
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
        ? getGet2AccountActivityWebhooksWebhookIdSubscriptionsAllListKey(args)
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
                (typeof client)['2']['account_activity']['webhooks'][':webhook_id']['subscriptions']['all']['list']['$get']
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
          client['2'].account_activity.webhooks[':webhook_id'].subscriptions.all.list.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getDelete2AccountActivityWebhooksWebhookIdSubscriptionsUserIdAllKey() {
  return [
    '2',
    '/2/account_activity/webhooks/:webhook_id/subscriptions/:user_id/all',
    'DELETE',
  ] as const
}

export function useDelete2AccountActivityWebhooksWebhookIdSubscriptionsUserIdAll<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2']['account_activity']['webhooks'][':webhook_id']['subscriptions'][':user_id']['all']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['2']['account_activity']['webhooks'][':webhook_id']['subscriptions'][':user_id']['all']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDelete2AccountActivityWebhooksWebhookIdSubscriptionsUserIdAllKey()
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
            (typeof client)['2']['account_activity']['webhooks'][':webhook_id']['subscriptions'][':user_id']['all']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['2'].account_activity.webhooks[':webhook_id'].subscriptions[
            ':user_id'
          ].all.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGet2ActivityStreamKey(
  args: InferRequestType<(typeof client)['2']['activity']['stream']['$get']>,
) {
  return ['2', '/2/activity/stream', args] as const
}

export function useGet2ActivityStream<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['activity']['stream']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['activity']['stream']['$get']>>
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
        ? getGet2ActivityStreamKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['activity']['stream']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].activity.stream.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet2ActivityStream<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['activity']['stream']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['activity']['stream']['$get']>>
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
        ? getGet2ActivityStreamKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['activity']['stream']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].activity.stream.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGet2ActivitySubscriptionsKey(
  args: InferRequestType<(typeof client)['2']['activity']['subscriptions']['$get']>,
) {
  return ['2', '/2/activity/subscriptions', args] as const
}

export function useGet2ActivitySubscriptions<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['activity']['subscriptions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['activity']['subscriptions']['$get']>>
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
        ? getGet2ActivitySubscriptionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['activity']['subscriptions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].activity.subscriptions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet2ActivitySubscriptions<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['activity']['subscriptions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['activity']['subscriptions']['$get']>>
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
        ? getGet2ActivitySubscriptionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['activity']['subscriptions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].activity.subscriptions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPost2ActivitySubscriptionsKey() {
  return ['2', '/2/activity/subscriptions', 'POST'] as const
}

export function usePost2ActivitySubscriptions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2']['activity']['subscriptions']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2']['activity']['subscriptions']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost2ActivitySubscriptionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['2']['activity']['subscriptions']['$post']> },
      ) => parseResponse(client['2'].activity.subscriptions.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDelete2ActivitySubscriptionsKey() {
  return ['2', '/2/activity/subscriptions', 'DELETE'] as const
}

export function useDelete2ActivitySubscriptions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2']['activity']['subscriptions']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2']['activity']['subscriptions']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDelete2ActivitySubscriptionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['2']['activity']['subscriptions']['$delete']> },
      ) => parseResponse(client['2'].activity.subscriptions.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPut2ActivitySubscriptionsSubscriptionIdKey() {
  return ['2', '/2/activity/subscriptions/:subscription_id', 'PUT'] as const
}

export function usePut2ActivitySubscriptionsSubscriptionId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2']['activity']['subscriptions'][':subscription_id']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2']['activity']['subscriptions'][':subscription_id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPut2ActivitySubscriptionsSubscriptionIdKey()
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
            (typeof client)['2']['activity']['subscriptions'][':subscription_id']['$put']
          >
        },
      ) =>
        parseResponse(
          client['2'].activity.subscriptions[':subscription_id'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDelete2ActivitySubscriptionsSubscriptionIdKey() {
  return ['2', '/2/activity/subscriptions/:subscription_id', 'DELETE'] as const
}

export function useDelete2ActivitySubscriptionsSubscriptionId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2']['activity']['subscriptions'][':subscription_id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['2']['activity']['subscriptions'][':subscription_id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDelete2ActivitySubscriptionsSubscriptionIdKey()
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
            (typeof client)['2']['activity']['subscriptions'][':subscription_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['2'].activity.subscriptions[':subscription_id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPost2ArticlesDraftKey() {
  return ['2', '/2/articles/draft', 'POST'] as const
}

export function usePost2ArticlesDraft<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2']['articles']['draft']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2']['articles']['draft']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost2ArticlesDraftKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['2']['articles']['draft']['$post']> },
      ) => parseResponse(client['2'].articles.draft.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPost2ArticlesArticleIdPublishKey() {
  return ['2', '/2/articles/:article_id/publish', 'POST'] as const
}

export function usePost2ArticlesArticleIdPublish<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2']['articles'][':article_id']['publish']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2']['articles'][':article_id']['publish']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost2ArticlesArticleIdPublishKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['2']['articles'][':article_id']['publish']['$post']>
        },
      ) => parseResponse(client['2'].articles[':article_id'].publish.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGet2BotsKey(args: InferRequestType<(typeof client)['2']['bots']['$get']>) {
  return ['2', '/2/bots', args] as const
}

export function useGet2Bots<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['bots']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['bots']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGet2BotsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['bots']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].bots.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet2Bots<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['bots']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['bots']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGet2BotsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['bots']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].bots.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPost2BotsKey() {
  return ['2', '/2/bots', 'POST'] as const
}

export function usePost2Bots<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['bots']['$post']>>>>
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2']['bots']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost2BotsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client)['2']['bots']['$post']> }) =>
        parseResponse(client['2'].bots.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPut2BotsIdKey() {
  return ['2', '/2/bots/:id', 'PUT'] as const
}

export function usePut2BotsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['bots'][':id']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2']['bots'][':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPut2BotsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['2']['bots'][':id']['$put']> },
      ) => parseResponse(client['2'].bots[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDelete2BotsIdKey() {
  return ['2', '/2/bots/:id', 'DELETE'] as const
}

export function useDelete2BotsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['bots'][':id']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2']['bots'][':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDelete2BotsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['2']['bots'][':id']['$delete']> },
      ) => parseResponse(client['2'].bots[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPost2BotsIdTokenKey() {
  return ['2', '/2/bots/:id/token', 'POST'] as const
}

export function usePost2BotsIdToken<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2']['bots'][':id']['token']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2']['bots'][':id']['token']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost2BotsIdTokenKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['2']['bots'][':id']['token']['$post']> },
      ) => parseResponse(client['2'].bots[':id'].token.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDelete2BotsIdTokenKey() {
  return ['2', '/2/bots/:id/token', 'DELETE'] as const
}

export function useDelete2BotsIdToken<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2']['bots'][':id']['token']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2']['bots'][':id']['token']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDelete2BotsIdTokenKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['2']['bots'][':id']['token']['$delete']> },
      ) => parseResponse(client['2'].bots[':id'].token.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGet2BroadcastsKey(
  args: InferRequestType<(typeof client)['2']['broadcasts']['$get']>,
) {
  return ['2', '/2/broadcasts', args] as const
}

export function useGet2Broadcasts<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['broadcasts']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['broadcasts']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGet2BroadcastsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['broadcasts']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].broadcasts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet2Broadcasts<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['broadcasts']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['broadcasts']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGet2BroadcastsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['broadcasts']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].broadcasts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPost2BroadcastsKey() {
  return ['2', '/2/broadcasts', 'POST'] as const
}

export function usePost2Broadcasts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['broadcasts']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2']['broadcasts']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost2BroadcastsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['2']['broadcasts']['$post']> },
      ) => parseResponse(client['2'].broadcasts.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGet2BroadcastsCategoriesKey() {
  return ['2', '/2/broadcasts/categories'] as const
}

export function useGet2BroadcastsCategories<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2']['broadcasts']['categories']['$get']>>
        >
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
        ? getGet2BroadcastsCategoriesKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['broadcasts']['categories']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].broadcasts.categories.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet2BroadcastsCategories<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2']['broadcasts']['categories']['$get']>>
        >
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
        ? getGet2BroadcastsCategoriesKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['broadcasts']['categories']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].broadcasts.categories.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGet2BroadcastsChatModeratorsKey(
  args: InferRequestType<(typeof client)['2']['broadcasts']['chat']['moderators']['$get']>,
) {
  return ['2', '/2/broadcasts/chat/moderators', args] as const
}

export function useGet2BroadcastsChatModerators<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['broadcasts']['chat']['moderators']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['broadcasts']['chat']['moderators']['$get']>>
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
        ? getGet2BroadcastsChatModeratorsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['broadcasts']['chat']['moderators']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].broadcasts.chat.moderators.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet2BroadcastsChatModerators<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['broadcasts']['chat']['moderators']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['broadcasts']['chat']['moderators']['$get']>>
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
        ? getGet2BroadcastsChatModeratorsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['broadcasts']['chat']['moderators']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].broadcasts.chat.moderators.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPost2BroadcastsChatModeratorsKey() {
  return ['2', '/2/broadcasts/chat/moderators', 'POST'] as const
}

export function usePost2BroadcastsChatModerators<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2']['broadcasts']['chat']['moderators']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2']['broadcasts']['chat']['moderators']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost2BroadcastsChatModeratorsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['2']['broadcasts']['chat']['moderators']['$post']>
        },
      ) => parseResponse(client['2'].broadcasts.chat.moderators.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDelete2BroadcastsChatModeratorsUserIdKey() {
  return ['2', '/2/broadcasts/chat/moderators/:user_id', 'DELETE'] as const
}

export function useDelete2BroadcastsChatModeratorsUserId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2']['broadcasts']['chat']['moderators'][':user_id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['2']['broadcasts']['chat']['moderators'][':user_id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDelete2BroadcastsChatModeratorsUserIdKey()
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
            (typeof client)['2']['broadcasts']['chat']['moderators'][':user_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['2'].broadcasts.chat.moderators[':user_id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGet2BroadcastsChatMutesKey(
  args: InferRequestType<(typeof client)['2']['broadcasts']['chat']['mutes']['$get']>,
) {
  return ['2', '/2/broadcasts/chat/mutes', args] as const
}

export function useGet2BroadcastsChatMutes<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['broadcasts']['chat']['mutes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['broadcasts']['chat']['mutes']['$get']>>
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
        ? getGet2BroadcastsChatMutesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['broadcasts']['chat']['mutes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].broadcasts.chat.mutes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet2BroadcastsChatMutes<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['broadcasts']['chat']['mutes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['broadcasts']['chat']['mutes']['$get']>>
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
        ? getGet2BroadcastsChatMutesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['broadcasts']['chat']['mutes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].broadcasts.chat.mutes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPost2BroadcastsChatMutesKey() {
  return ['2', '/2/broadcasts/chat/mutes', 'POST'] as const
}

export function usePost2BroadcastsChatMutes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2']['broadcasts']['chat']['mutes']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2']['broadcasts']['chat']['mutes']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost2BroadcastsChatMutesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['2']['broadcasts']['chat']['mutes']['$post']> },
      ) => parseResponse(client['2'].broadcasts.chat.mutes.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDelete2BroadcastsChatMutesUserIdKey() {
  return ['2', '/2/broadcasts/chat/mutes/:user_id', 'DELETE'] as const
}

export function useDelete2BroadcastsChatMutesUserId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['2']['broadcasts']['chat']['mutes'][':user_id']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2']['broadcasts']['chat']['mutes'][':user_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDelete2BroadcastsChatMutesUserIdKey()
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
            (typeof client)['2']['broadcasts']['chat']['mutes'][':user_id']['$delete']
          >
        },
      ) => parseResponse(client['2'].broadcasts.chat.mutes[':user_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGet2BroadcastsScheduledKey(
  args: InferRequestType<(typeof client)['2']['broadcasts']['scheduled']['$get']>,
) {
  return ['2', '/2/broadcasts/scheduled', args] as const
}

export function useGet2BroadcastsScheduled<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['broadcasts']['scheduled']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['broadcasts']['scheduled']['$get']>>
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
        ? getGet2BroadcastsScheduledKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['broadcasts']['scheduled']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].broadcasts.scheduled.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet2BroadcastsScheduled<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['broadcasts']['scheduled']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['broadcasts']['scheduled']['$get']>>
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
        ? getGet2BroadcastsScheduledKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['broadcasts']['scheduled']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].broadcasts.scheduled.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPost2BroadcastsScheduledKey() {
  return ['2', '/2/broadcasts/scheduled', 'POST'] as const
}

export function usePost2BroadcastsScheduled<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2']['broadcasts']['scheduled']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2']['broadcasts']['scheduled']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost2BroadcastsScheduledKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['2']['broadcasts']['scheduled']['$post']> },
      ) => parseResponse(client['2'].broadcasts.scheduled.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGet2BroadcastsScheduledIdKey(
  args: InferRequestType<(typeof client)['2']['broadcasts']['scheduled'][':id']['$get']>,
) {
  return ['2', '/2/broadcasts/scheduled/:id', args] as const
}

export function useGet2BroadcastsScheduledId<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['broadcasts']['scheduled'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['broadcasts']['scheduled'][':id']['$get']>>
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
        ? getGet2BroadcastsScheduledIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['broadcasts']['scheduled'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].broadcasts.scheduled[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet2BroadcastsScheduledId<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['broadcasts']['scheduled'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['broadcasts']['scheduled'][':id']['$get']>>
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
        ? getGet2BroadcastsScheduledIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['broadcasts']['scheduled'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].broadcasts.scheduled[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPut2BroadcastsScheduledIdKey() {
  return ['2', '/2/broadcasts/scheduled/:id', 'PUT'] as const
}

export function usePut2BroadcastsScheduledId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2']['broadcasts']['scheduled'][':id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2']['broadcasts']['scheduled'][':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPut2BroadcastsScheduledIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['2']['broadcasts']['scheduled'][':id']['$put']>
        },
      ) => parseResponse(client['2'].broadcasts.scheduled[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDelete2BroadcastsScheduledIdKey() {
  return ['2', '/2/broadcasts/scheduled/:id', 'DELETE'] as const
}

export function useDelete2BroadcastsScheduledId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2']['broadcasts']['scheduled'][':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2']['broadcasts']['scheduled'][':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDelete2BroadcastsScheduledIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['2']['broadcasts']['scheduled'][':id']['$delete']>
        },
      ) => parseResponse(client['2'].broadcasts.scheduled[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPost2BroadcastsScheduledIdLiveKey() {
  return ['2', '/2/broadcasts/scheduled/:id/live', 'POST'] as const
}

export function usePost2BroadcastsScheduledIdLive<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['2']['broadcasts']['scheduled'][':id']['live']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2']['broadcasts']['scheduled'][':id']['live']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost2BroadcastsScheduledIdLiveKey()
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
            (typeof client)['2']['broadcasts']['scheduled'][':id']['live']['$post']
          >
        },
      ) => parseResponse(client['2'].broadcasts.scheduled[':id'].live.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGet2BroadcastsIdKey(
  args: InferRequestType<(typeof client)['2']['broadcasts'][':id']['$get']>,
) {
  return ['2', '/2/broadcasts/:id', args] as const
}

export function useGet2BroadcastsId<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['broadcasts'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['broadcasts'][':id']['$get']>>
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
    enabled !== false ? (customKey === undefined ? getGet2BroadcastsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['broadcasts'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].broadcasts[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet2BroadcastsId<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['broadcasts'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['broadcasts'][':id']['$get']>>
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
    enabled !== false ? (customKey === undefined ? getGet2BroadcastsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['broadcasts'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].broadcasts[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPut2BroadcastsIdKey() {
  return ['2', '/2/broadcasts/:id', 'PUT'] as const
}

export function usePut2BroadcastsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['broadcasts'][':id']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2']['broadcasts'][':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPut2BroadcastsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['2']['broadcasts'][':id']['$put']> },
      ) => parseResponse(client['2'].broadcasts[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDelete2BroadcastsIdKey() {
  return ['2', '/2/broadcasts/:id', 'DELETE'] as const
}

export function useDelete2BroadcastsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2']['broadcasts'][':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2']['broadcasts'][':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDelete2BroadcastsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['2']['broadcasts'][':id']['$delete']> },
      ) => parseResponse(client['2'].broadcasts[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGet2BroadcastsIdChatKey(
  args: InferRequestType<(typeof client)['2']['broadcasts'][':id']['chat']['$get']>,
) {
  return ['2', '/2/broadcasts/:id/chat', args] as const
}

export function useGet2BroadcastsIdChat<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['broadcasts'][':id']['chat']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['broadcasts'][':id']['chat']['$get']>>
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
        ? getGet2BroadcastsIdChatKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['broadcasts'][':id']['chat']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].broadcasts[':id'].chat.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet2BroadcastsIdChat<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['broadcasts'][':id']['chat']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['broadcasts'][':id']['chat']['$get']>>
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
        ? getGet2BroadcastsIdChatKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['broadcasts'][':id']['chat']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].broadcasts[':id'].chat.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPost2BroadcastsIdChatKey() {
  return ['2', '/2/broadcasts/:id/chat', 'POST'] as const
}

export function usePost2BroadcastsIdChat<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2']['broadcasts'][':id']['chat']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2']['broadcasts'][':id']['chat']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost2BroadcastsIdChatKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['2']['broadcasts'][':id']['chat']['$post']> },
      ) => parseResponse(client['2'].broadcasts[':id'].chat.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPost2BroadcastsIdChatMutesKey() {
  return ['2', '/2/broadcasts/:id/chat/mutes', 'POST'] as const
}

export function usePost2BroadcastsIdChatMutes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2']['broadcasts'][':id']['chat']['mutes']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2']['broadcasts'][':id']['chat']['mutes']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost2BroadcastsIdChatMutesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['2']['broadcasts'][':id']['chat']['mutes']['$post']>
        },
      ) => parseResponse(client['2'].broadcasts[':id'].chat.mutes.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDelete2BroadcastsIdChatMutesUserIdKey() {
  return ['2', '/2/broadcasts/:id/chat/mutes/:user_id', 'DELETE'] as const
}

export function useDelete2BroadcastsIdChatMutesUserId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2']['broadcasts'][':id']['chat']['mutes'][':user_id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['2']['broadcasts'][':id']['chat']['mutes'][':user_id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDelete2BroadcastsIdChatMutesUserIdKey()
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
            (typeof client)['2']['broadcasts'][':id']['chat']['mutes'][':user_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['2'].broadcasts[':id'].chat.mutes[':user_id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDelete2BroadcastsIdChatMessageIdKey() {
  return ['2', '/2/broadcasts/:id/chat/:message_id', 'DELETE'] as const
}

export function useDelete2BroadcastsIdChatMessageId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['2']['broadcasts'][':id']['chat'][':message_id']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2']['broadcasts'][':id']['chat'][':message_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDelete2BroadcastsIdChatMessageIdKey()
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
            (typeof client)['2']['broadcasts'][':id']['chat'][':message_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['2'].broadcasts[':id'].chat[':message_id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPut2BroadcastsIdStateKey() {
  return ['2', '/2/broadcasts/:id/state', 'PUT'] as const
}

export function usePut2BroadcastsIdState<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2']['broadcasts'][':id']['state']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2']['broadcasts'][':id']['state']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPut2BroadcastsIdStateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['2']['broadcasts'][':id']['state']['$put']> },
      ) => parseResponse(client['2'].broadcasts[':id'].state.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPost2CallsKey() {
  return ['2', '/2/calls', 'POST'] as const
}

export function usePost2Calls<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['calls']['$post']>>>>
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2']['calls']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost2CallsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client)['2']['calls']['$post']> }) =>
        parseResponse(client['2'].calls.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGet2CallsScheduledKey(
  args: InferRequestType<(typeof client)['2']['calls']['scheduled']['$get']>,
) {
  return ['2', '/2/calls/scheduled', args] as const
}

export function useGet2CallsScheduled<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['calls']['scheduled']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['calls']['scheduled']['$get']>>
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
        ? getGet2CallsScheduledKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['calls']['scheduled']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].calls.scheduled.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet2CallsScheduled<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['calls']['scheduled']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['calls']['scheduled']['$get']>>
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
        ? getGet2CallsScheduledKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['calls']['scheduled']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].calls.scheduled.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPost2CallsScheduledKey() {
  return ['2', '/2/calls/scheduled', 'POST'] as const
}

export function usePost2CallsScheduled<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2']['calls']['scheduled']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2']['calls']['scheduled']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost2CallsScheduledKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['2']['calls']['scheduled']['$post']> },
      ) => parseResponse(client['2'].calls.scheduled.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGet2CallsScheduledIdKey(
  args: InferRequestType<(typeof client)['2']['calls']['scheduled'][':id']['$get']>,
) {
  return ['2', '/2/calls/scheduled/:id', args] as const
}

export function useGet2CallsScheduledId<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['calls']['scheduled'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['calls']['scheduled'][':id']['$get']>>
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
        ? getGet2CallsScheduledIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['calls']['scheduled'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].calls.scheduled[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet2CallsScheduledId<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['calls']['scheduled'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['calls']['scheduled'][':id']['$get']>>
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
        ? getGet2CallsScheduledIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['calls']['scheduled'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].calls.scheduled[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPut2CallsScheduledIdKey() {
  return ['2', '/2/calls/scheduled/:id', 'PUT'] as const
}

export function usePut2CallsScheduledId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2']['calls']['scheduled'][':id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2']['calls']['scheduled'][':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPut2CallsScheduledIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['2']['calls']['scheduled'][':id']['$put']> },
      ) => parseResponse(client['2'].calls.scheduled[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDelete2CallsScheduledIdKey() {
  return ['2', '/2/calls/scheduled/:id', 'DELETE'] as const
}

export function useDelete2CallsScheduledId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2']['calls']['scheduled'][':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2']['calls']['scheduled'][':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDelete2CallsScheduledIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['2']['calls']['scheduled'][':id']['$delete']> },
      ) => parseResponse(client['2'].calls.scheduled[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPost2CallsScheduledIdRsvpKey() {
  return ['2', '/2/calls/scheduled/:id/rsvp', 'POST'] as const
}

export function usePost2CallsScheduledIdRsvp<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2']['calls']['scheduled'][':id']['rsvp']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2']['calls']['scheduled'][':id']['rsvp']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost2CallsScheduledIdRsvpKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['2']['calls']['scheduled'][':id']['rsvp']['$post']>
        },
      ) => parseResponse(client['2'].calls.scheduled[':id'].rsvp.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGet2CallsIdKey(
  args: InferRequestType<(typeof client)['2']['calls'][':id']['$get']>,
) {
  return ['2', '/2/calls/:id', args] as const
}

export function useGet2CallsId<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['calls'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['calls'][':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGet2CallsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['calls'][':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].calls[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet2CallsId<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['calls'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['calls'][':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGet2CallsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['calls'][':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].calls[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPost2CallsIdJoinKey() {
  return ['2', '/2/calls/:id/join', 'POST'] as const
}

export function usePost2CallsIdJoin<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2']['calls'][':id']['join']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2']['calls'][':id']['join']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost2CallsIdJoinKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['2']['calls'][':id']['join']['$post']> },
      ) => parseResponse(client['2'].calls[':id'].join.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPost2CallsIdLeaveKey() {
  return ['2', '/2/calls/:id/leave', 'POST'] as const
}

export function usePost2CallsIdLeave<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2']['calls'][':id']['leave']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2']['calls'][':id']['leave']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost2CallsIdLeaveKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['2']['calls'][':id']['leave']['$post']> },
      ) => parseResponse(client['2'].calls[':id'].leave.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGet2ChatConversationsKey(
  args: InferRequestType<(typeof client)['2']['chat']['conversations']['$get']>,
) {
  return ['2', '/2/chat/conversations', args] as const
}

export function useGet2ChatConversations<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['chat']['conversations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['chat']['conversations']['$get']>>
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
        ? getGet2ChatConversationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['chat']['conversations']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].chat.conversations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet2ChatConversations<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['chat']['conversations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['chat']['conversations']['$get']>>
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
        ? getGet2ChatConversationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['chat']['conversations']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].chat.conversations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPost2ChatConversationsGroupKey() {
  return ['2', '/2/chat/conversations/group', 'POST'] as const
}

export function usePost2ChatConversationsGroup<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2']['chat']['conversations']['group']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2']['chat']['conversations']['group']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost2ChatConversationsGroupKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['2']['chat']['conversations']['group']['$post']>
        },
      ) => parseResponse(client['2'].chat.conversations.group.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPost2ChatConversationsGroupInitializeKey() {
  return ['2', '/2/chat/conversations/group/initialize', 'POST'] as const
}

export function usePost2ChatConversationsGroupInitialize<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2']['chat']['conversations']['group']['initialize']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost2ChatConversationsGroupInitializeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () =>
        parseResponse(
          client['2'].chat.conversations.group.initialize.$post(undefined, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGet2ChatConversationsIdKey(
  args: InferRequestType<(typeof client)['2']['chat']['conversations'][':id']['$get']>,
) {
  return ['2', '/2/chat/conversations/:id', args] as const
}

export function useGet2ChatConversationsId<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['chat']['conversations'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['chat']['conversations'][':id']['$get']>>
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
        ? getGet2ChatConversationsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['chat']['conversations'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].chat.conversations[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet2ChatConversationsId<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['chat']['conversations'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['chat']['conversations'][':id']['$get']>>
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
        ? getGet2ChatConversationsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['chat']['conversations'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].chat.conversations[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPut2ChatConversationsIdKey() {
  return ['2', '/2/chat/conversations/:id', 'PUT'] as const
}

export function usePut2ChatConversationsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2']['chat']['conversations'][':id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2']['chat']['conversations'][':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPut2ChatConversationsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['2']['chat']['conversations'][':id']['$put']> },
      ) => parseResponse(client['2'].chat.conversations[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDelete2ChatConversationsIdKey() {
  return ['2', '/2/chat/conversations/:id', 'DELETE'] as const
}

export function useDelete2ChatConversationsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2']['chat']['conversations'][':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2']['chat']['conversations'][':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDelete2ChatConversationsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['2']['chat']['conversations'][':id']['$delete']>
        },
      ) => parseResponse(client['2'].chat.conversations[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGet2ChatConversationsIdAdminRequestsKey(
  args: InferRequestType<
    (typeof client)['2']['chat']['conversations'][':id']['admin_requests']['$get']
  >,
) {
  return ['2', '/2/chat/conversations/:id/admin_requests', args] as const
}

export function useGet2ChatConversationsIdAdminRequests<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2']['chat']['conversations'][':id']['admin_requests']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2']['chat']['conversations'][':id']['admin_requests']['$get']
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
        ? getGet2ChatConversationsIdAdminRequestsKey(args)
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
                (typeof client)['2']['chat']['conversations'][':id']['admin_requests']['$get']
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
          client['2'].chat.conversations[':id'].admin_requests.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet2ChatConversationsIdAdminRequests<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2']['chat']['conversations'][':id']['admin_requests']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2']['chat']['conversations'][':id']['admin_requests']['$get']
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
        ? getGet2ChatConversationsIdAdminRequestsKey(args)
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
                (typeof client)['2']['chat']['conversations'][':id']['admin_requests']['$get']
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
          client['2'].chat.conversations[':id'].admin_requests.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPost2ChatConversationsIdAdminRequestsKey() {
  return ['2', '/2/chat/conversations/:id/admin_requests', 'POST'] as const
}

export function usePost2ChatConversationsIdAdminRequests<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2']['chat']['conversations'][':id']['admin_requests']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['2']['chat']['conversations'][':id']['admin_requests']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost2ChatConversationsIdAdminRequestsKey()
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
            (typeof client)['2']['chat']['conversations'][':id']['admin_requests']['$post']
          >
        },
      ) =>
        parseResponse(
          client['2'].chat.conversations[':id'].admin_requests.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPost2ChatConversationsIdAdminRequestsUserIdApproveKey() {
  return ['2', '/2/chat/conversations/:id/admin_requests/:user_id/approve', 'POST'] as const
}

export function usePost2ChatConversationsIdAdminRequestsUserIdApprove<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2']['chat']['conversations'][':id']['admin_requests'][':user_id']['approve']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['2']['chat']['conversations'][':id']['admin_requests'][':user_id']['approve']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost2ChatConversationsIdAdminRequestsUserIdApproveKey()
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
            (typeof client)['2']['chat']['conversations'][':id']['admin_requests'][':user_id']['approve']['$post']
          >
        },
      ) =>
        parseResponse(
          client['2'].chat.conversations[':id'].admin_requests[':user_id'].approve.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPost2ChatConversationsIdAdminRequestsUserIdRejectKey() {
  return ['2', '/2/chat/conversations/:id/admin_requests/:user_id/reject', 'POST'] as const
}

export function usePost2ChatConversationsIdAdminRequestsUserIdReject<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2']['chat']['conversations'][':id']['admin_requests'][':user_id']['reject']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['2']['chat']['conversations'][':id']['admin_requests'][':user_id']['reject']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost2ChatConversationsIdAdminRequestsUserIdRejectKey()
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
            (typeof client)['2']['chat']['conversations'][':id']['admin_requests'][':user_id']['reject']['$post']
          >
        },
      ) =>
        parseResponse(
          client['2'].chat.conversations[':id'].admin_requests[':user_id'].reject.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPut2ChatConversationsIdAdminSettingsKey() {
  return ['2', '/2/chat/conversations/:id/admin_settings', 'PUT'] as const
}

export function usePut2ChatConversationsIdAdminSettings<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2']['chat']['conversations'][':id']['admin_settings']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2']['chat']['conversations'][':id']['admin_settings']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPut2ChatConversationsIdAdminSettingsKey()
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
            (typeof client)['2']['chat']['conversations'][':id']['admin_settings']['$put']
          >
        },
      ) =>
        parseResponse(
          client['2'].chat.conversations[':id'].admin_settings.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPost2ChatConversationsIdAdminsKey() {
  return ['2', '/2/chat/conversations/:id/admins', 'POST'] as const
}

export function usePost2ChatConversationsIdAdmins<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['2']['chat']['conversations'][':id']['admins']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2']['chat']['conversations'][':id']['admins']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost2ChatConversationsIdAdminsKey()
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
            (typeof client)['2']['chat']['conversations'][':id']['admins']['$post']
          >
        },
      ) => parseResponse(client['2'].chat.conversations[':id'].admins.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPost2ChatConversationsIdAdminsRemoveKey() {
  return ['2', '/2/chat/conversations/:id/admins/remove', 'POST'] as const
}

export function usePost2ChatConversationsIdAdminsRemove<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2']['chat']['conversations'][':id']['admins']['remove']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['2']['chat']['conversations'][':id']['admins']['remove']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost2ChatConversationsIdAdminsRemoveKey()
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
            (typeof client)['2']['chat']['conversations'][':id']['admins']['remove']['$post']
          >
        },
      ) =>
        parseResponse(
          client['2'].chat.conversations[':id'].admins.remove.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPost2ChatConversationsIdArchiveKey() {
  return ['2', '/2/chat/conversations/:id/archive', 'POST'] as const
}

export function usePost2ChatConversationsIdArchive<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['2']['chat']['conversations'][':id']['archive']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2']['chat']['conversations'][':id']['archive']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost2ChatConversationsIdArchiveKey()
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
            (typeof client)['2']['chat']['conversations'][':id']['archive']['$post']
          >
        },
      ) => parseResponse(client['2'].chat.conversations[':id'].archive.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDelete2ChatConversationsIdArchiveKey() {
  return ['2', '/2/chat/conversations/:id/archive', 'DELETE'] as const
}

export function useDelete2ChatConversationsIdArchive<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['2']['chat']['conversations'][':id']['archive']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2']['chat']['conversations'][':id']['archive']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDelete2ChatConversationsIdArchiveKey()
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
            (typeof client)['2']['chat']['conversations'][':id']['archive']['$delete']
          >
        },
      ) => parseResponse(client['2'].chat.conversations[':id'].archive.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGet2ChatConversationsIdEventsKey(
  args: InferRequestType<(typeof client)['2']['chat']['conversations'][':id']['events']['$get']>,
) {
  return ['2', '/2/chat/conversations/:id/events', args] as const
}

export function useGet2ChatConversationsIdEvents<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['chat']['conversations'][':id']['events']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['2']['chat']['conversations'][':id']['events']['$get']>
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
        ? getGet2ChatConversationsIdEventsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['2']['chat']['conversations'][':id']['events']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['2'].chat.conversations[':id'].events.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet2ChatConversationsIdEvents<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['chat']['conversations'][':id']['events']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['2']['chat']['conversations'][':id']['events']['$get']>
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
        ? getGet2ChatConversationsIdEventsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['2']['chat']['conversations'][':id']['events']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['2'].chat.conversations[':id'].events.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPost2ChatConversationsIdInviteKey() {
  return ['2', '/2/chat/conversations/:id/invite', 'POST'] as const
}

export function usePost2ChatConversationsIdInvite<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['2']['chat']['conversations'][':id']['invite']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2']['chat']['conversations'][':id']['invite']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost2ChatConversationsIdInviteKey()
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
            (typeof client)['2']['chat']['conversations'][':id']['invite']['$post']
          >
        },
      ) => parseResponse(client['2'].chat.conversations[':id'].invite.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDelete2ChatConversationsIdInviteKey() {
  return ['2', '/2/chat/conversations/:id/invite', 'DELETE'] as const
}

export function useDelete2ChatConversationsIdInvite<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['2']['chat']['conversations'][':id']['invite']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2']['chat']['conversations'][':id']['invite']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDelete2ChatConversationsIdInviteKey()
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
            (typeof client)['2']['chat']['conversations'][':id']['invite']['$delete']
          >
        },
      ) => parseResponse(client['2'].chat.conversations[':id'].invite.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGet2ChatConversationsIdInvitesTokenKey(
  args: InferRequestType<
    (typeof client)['2']['chat']['conversations'][':id']['invites'][':token']['$get']
  >,
) {
  return ['2', '/2/chat/conversations/:id/invites/:token', args] as const
}

export function useGet2ChatConversationsIdInvitesToken<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2']['chat']['conversations'][':id']['invites'][':token']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2']['chat']['conversations'][':id']['invites'][':token']['$get']
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
        ? getGet2ChatConversationsIdInvitesTokenKey(args)
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
                (typeof client)['2']['chat']['conversations'][':id']['invites'][':token']['$get']
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
          client['2'].chat.conversations[':id'].invites[':token'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet2ChatConversationsIdInvitesToken<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2']['chat']['conversations'][':id']['invites'][':token']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2']['chat']['conversations'][':id']['invites'][':token']['$get']
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
        ? getGet2ChatConversationsIdInvitesTokenKey(args)
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
                (typeof client)['2']['chat']['conversations'][':id']['invites'][':token']['$get']
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
          client['2'].chat.conversations[':id'].invites[':token'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPost2ChatConversationsIdJoinRequestsKey() {
  return ['2', '/2/chat/conversations/:id/join_requests', 'POST'] as const
}

export function usePost2ChatConversationsIdJoinRequests<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2']['chat']['conversations'][':id']['join_requests']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2']['chat']['conversations'][':id']['join_requests']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost2ChatConversationsIdJoinRequestsKey()
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
            (typeof client)['2']['chat']['conversations'][':id']['join_requests']['$post']
          >
        },
      ) =>
        parseResponse(
          client['2'].chat.conversations[':id'].join_requests.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPost2ChatConversationsIdJoinRequestsRejectKey() {
  return ['2', '/2/chat/conversations/:id/join_requests/reject', 'POST'] as const
}

export function usePost2ChatConversationsIdJoinRequestsReject<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2']['chat']['conversations'][':id']['join_requests']['reject']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['2']['chat']['conversations'][':id']['join_requests']['reject']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost2ChatConversationsIdJoinRequestsRejectKey()
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
            (typeof client)['2']['chat']['conversations'][':id']['join_requests']['reject']['$post']
          >
        },
      ) =>
        parseResponse(
          client['2'].chat.conversations[':id'].join_requests.reject.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPost2ChatConversationsIdKeysKey() {
  return ['2', '/2/chat/conversations/:id/keys', 'POST'] as const
}

export function usePost2ChatConversationsIdKeys<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2']['chat']['conversations'][':id']['keys']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2']['chat']['conversations'][':id']['keys']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost2ChatConversationsIdKeysKey()
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
            (typeof client)['2']['chat']['conversations'][':id']['keys']['$post']
          >
        },
      ) => parseResponse(client['2'].chat.conversations[':id'].keys.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPost2ChatConversationsIdMembersKey() {
  return ['2', '/2/chat/conversations/:id/members', 'POST'] as const
}

export function usePost2ChatConversationsIdMembers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['2']['chat']['conversations'][':id']['members']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2']['chat']['conversations'][':id']['members']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost2ChatConversationsIdMembersKey()
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
            (typeof client)['2']['chat']['conversations'][':id']['members']['$post']
          >
        },
      ) => parseResponse(client['2'].chat.conversations[':id'].members.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPost2ChatConversationsIdMembersRemoveKey() {
  return ['2', '/2/chat/conversations/:id/members/remove', 'POST'] as const
}

export function usePost2ChatConversationsIdMembersRemove<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2']['chat']['conversations'][':id']['members']['remove']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['2']['chat']['conversations'][':id']['members']['remove']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost2ChatConversationsIdMembersRemoveKey()
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
            (typeof client)['2']['chat']['conversations'][':id']['members']['remove']['$post']
          >
        },
      ) =>
        parseResponse(
          client['2'].chat.conversations[':id'].members.remove.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPut2ChatConversationsIdMessageTtlKey() {
  return ['2', '/2/chat/conversations/:id/message_ttl', 'PUT'] as const
}

export function usePut2ChatConversationsIdMessageTtl<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['2']['chat']['conversations'][':id']['message_ttl']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2']['chat']['conversations'][':id']['message_ttl']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPut2ChatConversationsIdMessageTtlKey()
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
            (typeof client)['2']['chat']['conversations'][':id']['message_ttl']['$put']
          >
        },
      ) =>
        parseResponse(client['2'].chat.conversations[':id'].message_ttl.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDelete2ChatConversationsIdMessageTtlKey() {
  return ['2', '/2/chat/conversations/:id/message_ttl', 'DELETE'] as const
}

export function useDelete2ChatConversationsIdMessageTtl<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2']['chat']['conversations'][':id']['message_ttl']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2']['chat']['conversations'][':id']['message_ttl']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDelete2ChatConversationsIdMessageTtlKey()
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
            (typeof client)['2']['chat']['conversations'][':id']['message_ttl']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['2'].chat.conversations[':id'].message_ttl.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPost2ChatConversationsIdMessagesKey() {
  return ['2', '/2/chat/conversations/:id/messages', 'POST'] as const
}

export function usePost2ChatConversationsIdMessages<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['2']['chat']['conversations'][':id']['messages']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2']['chat']['conversations'][':id']['messages']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost2ChatConversationsIdMessagesKey()
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
            (typeof client)['2']['chat']['conversations'][':id']['messages']['$post']
          >
        },
      ) => parseResponse(client['2'].chat.conversations[':id'].messages.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPost2ChatConversationsIdMessagesDeleteKey() {
  return ['2', '/2/chat/conversations/:id/messages/delete', 'POST'] as const
}

export function usePost2ChatConversationsIdMessagesDelete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2']['chat']['conversations'][':id']['messages']['delete']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['2']['chat']['conversations'][':id']['messages']['delete']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost2ChatConversationsIdMessagesDeleteKey()
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
            (typeof client)['2']['chat']['conversations'][':id']['messages']['delete']['$post']
          >
        },
      ) =>
        parseResponse(
          client['2'].chat.conversations[':id'].messages.delete.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPost2ChatConversationsIdMuteKey() {
  return ['2', '/2/chat/conversations/:id/mute', 'POST'] as const
}

export function usePost2ChatConversationsIdMute<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2']['chat']['conversations'][':id']['mute']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2']['chat']['conversations'][':id']['mute']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost2ChatConversationsIdMuteKey()
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
            (typeof client)['2']['chat']['conversations'][':id']['mute']['$post']
          >
        },
      ) => parseResponse(client['2'].chat.conversations[':id'].mute.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDelete2ChatConversationsIdMuteKey() {
  return ['2', '/2/chat/conversations/:id/mute', 'DELETE'] as const
}

export function useDelete2ChatConversationsIdMute<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['2']['chat']['conversations'][':id']['mute']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2']['chat']['conversations'][':id']['mute']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDelete2ChatConversationsIdMuteKey()
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
            (typeof client)['2']['chat']['conversations'][':id']['mute']['$delete']
          >
        },
      ) => parseResponse(client['2'].chat.conversations[':id'].mute.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGet2ChatConversationsIdPinnedMessagesKey(
  args: InferRequestType<
    (typeof client)['2']['chat']['conversations'][':id']['pinned_messages']['$get']
  >,
) {
  return ['2', '/2/chat/conversations/:id/pinned_messages', args] as const
}

export function useGet2ChatConversationsIdPinnedMessages<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2']['chat']['conversations'][':id']['pinned_messages']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2']['chat']['conversations'][':id']['pinned_messages']['$get']
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
        ? getGet2ChatConversationsIdPinnedMessagesKey(args)
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
                (typeof client)['2']['chat']['conversations'][':id']['pinned_messages']['$get']
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
          client['2'].chat.conversations[':id'].pinned_messages.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet2ChatConversationsIdPinnedMessages<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2']['chat']['conversations'][':id']['pinned_messages']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2']['chat']['conversations'][':id']['pinned_messages']['$get']
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
        ? getGet2ChatConversationsIdPinnedMessagesKey(args)
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
                (typeof client)['2']['chat']['conversations'][':id']['pinned_messages']['$get']
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
          client['2'].chat.conversations[':id'].pinned_messages.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPost2ChatConversationsIdReadKey() {
  return ['2', '/2/chat/conversations/:id/read', 'POST'] as const
}

export function usePost2ChatConversationsIdRead<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2']['chat']['conversations'][':id']['read']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2']['chat']['conversations'][':id']['read']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost2ChatConversationsIdReadKey()
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
            (typeof client)['2']['chat']['conversations'][':id']['read']['$post']
          >
        },
      ) => parseResponse(client['2'].chat.conversations[':id'].read.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPut2ChatConversationsIdScreenCaptureKey() {
  return ['2', '/2/chat/conversations/:id/screen_capture', 'PUT'] as const
}

export function usePut2ChatConversationsIdScreenCapture<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2']['chat']['conversations'][':id']['screen_capture']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2']['chat']['conversations'][':id']['screen_capture']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPut2ChatConversationsIdScreenCaptureKey()
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
            (typeof client)['2']['chat']['conversations'][':id']['screen_capture']['$put']
          >
        },
      ) =>
        parseResponse(
          client['2'].chat.conversations[':id'].screen_capture.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPost2ChatConversationsIdTypingKey() {
  return ['2', '/2/chat/conversations/:id/typing', 'POST'] as const
}

export function usePost2ChatConversationsIdTyping<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['2']['chat']['conversations'][':id']['typing']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2']['chat']['conversations'][':id']['typing']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost2ChatConversationsIdTypingKey()
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
            (typeof client)['2']['chat']['conversations'][':id']['typing']['$post']
          >
        },
      ) => parseResponse(client['2'].chat.conversations[':id'].typing.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPost2ChatConversationsIdUnreadKey() {
  return ['2', '/2/chat/conversations/:id/unread', 'POST'] as const
}

export function usePost2ChatConversationsIdUnread<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['2']['chat']['conversations'][':id']['unread']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2']['chat']['conversations'][':id']['unread']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost2ChatConversationsIdUnreadKey()
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
            (typeof client)['2']['chat']['conversations'][':id']['unread']['$post']
          >
        },
      ) => parseResponse(client['2'].chat.conversations[':id'].unread.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPost2ChatMediaUploadInitializeKey() {
  return ['2', '/2/chat/media/upload/initialize', 'POST'] as const
}

export function usePost2ChatMediaUploadInitialize<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['2']['chat']['media']['upload']['initialize']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2']['chat']['media']['upload']['initialize']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost2ChatMediaUploadInitializeKey()
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
            (typeof client)['2']['chat']['media']['upload']['initialize']['$post']
          >
        },
      ) => parseResponse(client['2'].chat.media.upload.initialize.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPost2ChatMediaUploadIdAppendKey() {
  return ['2', '/2/chat/media/upload/:id/append', 'POST'] as const
}

export function usePost2ChatMediaUploadIdAppend<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['2']['chat']['media']['upload'][':id']['append']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2']['chat']['media']['upload'][':id']['append']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost2ChatMediaUploadIdAppendKey()
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
            (typeof client)['2']['chat']['media']['upload'][':id']['append']['$post']
          >
        },
      ) => parseResponse(client['2'].chat.media.upload[':id'].append.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPost2ChatMediaUploadIdFinalizeKey() {
  return ['2', '/2/chat/media/upload/:id/finalize', 'POST'] as const
}

export function usePost2ChatMediaUploadIdFinalize<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['2']['chat']['media']['upload'][':id']['finalize']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2']['chat']['media']['upload'][':id']['finalize']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost2ChatMediaUploadIdFinalizeKey()
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
            (typeof client)['2']['chat']['media']['upload'][':id']['finalize']['$post']
          >
        },
      ) => parseResponse(client['2'].chat.media.upload[':id'].finalize.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGet2ChatMediaIdMediaHashKeyKey(
  args: InferRequestType<(typeof client)['2']['chat']['media'][':id'][':media_hash_key']['$get']>,
) {
  return ['2', '/2/chat/media/:id/:media_hash_key', args] as const
}

export function useGet2ChatMediaIdMediaHashKey<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['chat']['media'][':id'][':media_hash_key']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['2']['chat']['media'][':id'][':media_hash_key']['$get']>
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
        ? getGet2ChatMediaIdMediaHashKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['2']['chat']['media'][':id'][':media_hash_key']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['2'].chat.media[':id'][':media_hash_key'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet2ChatMediaIdMediaHashKey<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['chat']['media'][':id'][':media_hash_key']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['2']['chat']['media'][':id'][':media_hash_key']['$get']>
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
        ? getGet2ChatMediaIdMediaHashKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['2']['chat']['media'][':id'][':media_hash_key']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['2'].chat.media[':id'][':media_hash_key'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGet2ChatMessageRequestsKey(
  args: InferRequestType<(typeof client)['2']['chat']['message_requests']['$get']>,
) {
  return ['2', '/2/chat/message_requests', args] as const
}

export function useGet2ChatMessageRequests<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['chat']['message_requests']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['chat']['message_requests']['$get']>>
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
        ? getGet2ChatMessageRequestsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['chat']['message_requests']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].chat.message_requests.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet2ChatMessageRequests<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['chat']['message_requests']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['chat']['message_requests']['$get']>>
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
        ? getGet2ChatMessageRequestsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['chat']['message_requests']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].chat.message_requests.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGet2ChatMessageRequestsIdKey(
  args: InferRequestType<(typeof client)['2']['chat']['message_requests'][':id']['$get']>,
) {
  return ['2', '/2/chat/message_requests/:id', args] as const
}

export function useGet2ChatMessageRequestsId<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['chat']['message_requests'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['chat']['message_requests'][':id']['$get']>>
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
        ? getGet2ChatMessageRequestsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['chat']['message_requests'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].chat.message_requests[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet2ChatMessageRequestsId<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['chat']['message_requests'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['chat']['message_requests'][':id']['$get']>>
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
        ? getGet2ChatMessageRequestsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['chat']['message_requests'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].chat.message_requests[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPost2ChatMessageRequestsIdAcceptKey() {
  return ['2', '/2/chat/message_requests/:id/accept', 'POST'] as const
}

export function usePost2ChatMessageRequestsIdAccept<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['2']['chat']['message_requests'][':id']['accept']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2']['chat']['message_requests'][':id']['accept']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost2ChatMessageRequestsIdAcceptKey()
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
            (typeof client)['2']['chat']['message_requests'][':id']['accept']['$post']
          >
        },
      ) => parseResponse(client['2'].chat.message_requests[':id'].accept.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGet2ChatSettingsKey(
  args: InferRequestType<(typeof client)['2']['chat']['settings']['$get']>,
) {
  return ['2', '/2/chat/settings', args] as const
}

export function useGet2ChatSettings<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['chat']['settings']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['chat']['settings']['$get']>>
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
    enabled !== false ? (customKey === undefined ? getGet2ChatSettingsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['chat']['settings']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].chat.settings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet2ChatSettings<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['chat']['settings']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['chat']['settings']['$get']>>
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
    enabled !== false ? (customKey === undefined ? getGet2ChatSettingsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['chat']['settings']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].chat.settings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPut2ChatSettingsKey() {
  return ['2', '/2/chat/settings', 'PUT'] as const
}

export function usePut2ChatSettings<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['chat']['settings']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2']['chat']['settings']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPut2ChatSettingsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['2']['chat']['settings']['$put']> },
      ) => parseResponse(client['2'].chat.settings.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGet2CommunitiesSearchKey(
  args: InferRequestType<(typeof client)['2']['communities']['search']['$get']>,
) {
  return ['2', '/2/communities/search', args] as const
}

export function useGet2CommunitiesSearch<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['communities']['search']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['communities']['search']['$get']>>
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
        ? getGet2CommunitiesSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['communities']['search']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].communities.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet2CommunitiesSearch<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['communities']['search']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['communities']['search']['$get']>>
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
        ? getGet2CommunitiesSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['communities']['search']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].communities.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGet2CommunitiesIdKey(
  args: InferRequestType<(typeof client)['2']['communities'][':id']['$get']>,
) {
  return ['2', '/2/communities/:id', args] as const
}

export function useGet2CommunitiesId<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['communities'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['communities'][':id']['$get']>>
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
    enabled !== false ? (customKey === undefined ? getGet2CommunitiesIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['communities'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].communities[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet2CommunitiesId<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['communities'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['communities'][':id']['$get']>>
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
    enabled !== false ? (customKey === undefined ? getGet2CommunitiesIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['communities'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].communities[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGet2ComplianceJobsKey(
  args: InferRequestType<(typeof client)['2']['compliance']['jobs']['$get']>,
) {
  return ['2', '/2/compliance/jobs', args] as const
}

export function useGet2ComplianceJobs<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['compliance']['jobs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['compliance']['jobs']['$get']>>
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
        ? getGet2ComplianceJobsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['compliance']['jobs']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].compliance.jobs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet2ComplianceJobs<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['compliance']['jobs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['compliance']['jobs']['$get']>>
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
        ? getGet2ComplianceJobsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['compliance']['jobs']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].compliance.jobs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPost2ComplianceJobsKey() {
  return ['2', '/2/compliance/jobs', 'POST'] as const
}

export function usePost2ComplianceJobs<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2']['compliance']['jobs']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2']['compliance']['jobs']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost2ComplianceJobsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['2']['compliance']['jobs']['$post']> },
      ) => parseResponse(client['2'].compliance.jobs.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGet2ComplianceJobsIdKey(
  args: InferRequestType<(typeof client)['2']['compliance']['jobs'][':id']['$get']>,
) {
  return ['2', '/2/compliance/jobs/:id', args] as const
}

export function useGet2ComplianceJobsId<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['compliance']['jobs'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['compliance']['jobs'][':id']['$get']>>
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
        ? getGet2ComplianceJobsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['compliance']['jobs'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].compliance.jobs[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet2ComplianceJobsId<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['compliance']['jobs'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['compliance']['jobs'][':id']['$get']>>
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
        ? getGet2ComplianceJobsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['compliance']['jobs'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].compliance.jobs[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDelete2ComplianceJobsIdKey() {
  return ['2', '/2/compliance/jobs/:id', 'DELETE'] as const
}

export function useDelete2ComplianceJobsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2']['compliance']['jobs'][':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2']['compliance']['jobs'][':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDelete2ComplianceJobsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['2']['compliance']['jobs'][':id']['$delete']> },
      ) => parseResponse(client['2'].compliance.jobs[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGet2ComplianceJobsIdDownloadKey(
  args: InferRequestType<(typeof client)['2']['compliance']['jobs'][':id']['download']['$get']>,
) {
  return ['2', '/2/compliance/jobs/:id/download', args] as const
}

export function useGet2ComplianceJobsIdDownload<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['compliance']['jobs'][':id']['download']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['2']['compliance']['jobs'][':id']['download']['$get']>
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
        ? getGet2ComplianceJobsIdDownloadKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['2']['compliance']['jobs'][':id']['download']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['2'].compliance.jobs[':id'].download.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet2ComplianceJobsIdDownload<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['compliance']['jobs'][':id']['download']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['2']['compliance']['jobs'][':id']['download']['$get']>
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
        ? getGet2ComplianceJobsIdDownloadKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['2']['compliance']['jobs'][':id']['download']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['2'].compliance.jobs[':id'].download.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPut2ComplianceJobsIdUploadKey() {
  return ['2', '/2/compliance/jobs/:id/upload', 'PUT'] as const
}

export function usePut2ComplianceJobsIdUpload<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2']['compliance']['jobs'][':id']['upload']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2']['compliance']['jobs'][':id']['upload']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPut2ComplianceJobsIdUploadKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['2']['compliance']['jobs'][':id']['upload']['$put']>
        },
      ) => parseResponse(client['2'].compliance.jobs[':id'].upload.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGet2ConnectionsKey(
  args: InferRequestType<(typeof client)['2']['connections']['$get']>,
) {
  return ['2', '/2/connections', args] as const
}

export function useGet2Connections<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['connections']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['connections']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGet2ConnectionsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['connections']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].connections.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet2Connections<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['connections']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['connections']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGet2ConnectionsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['connections']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].connections.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDelete2ConnectionsKey() {
  return ['2', '/2/connections', 'DELETE'] as const
}

export function useDelete2Connections<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['connections']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2']['connections']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDelete2ConnectionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['2']['connections']['$delete']> },
      ) => parseResponse(client['2'].connections.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDelete2ConnectionsAllKey() {
  return ['2', '/2/connections/all', 'DELETE'] as const
}

export function useDelete2ConnectionsAll<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2']['connections']['all']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDelete2ConnectionsAllKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client['2'].connections.all.$delete(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDelete2ConnectionsEndpointIdKey() {
  return ['2', '/2/connections/:endpoint_id', 'DELETE'] as const
}

export function useDelete2ConnectionsEndpointId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2']['connections'][':endpoint_id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2']['connections'][':endpoint_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDelete2ConnectionsEndpointIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['2']['connections'][':endpoint_id']['$delete']>
        },
      ) => parseResponse(client['2'].connections[':endpoint_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPost2DmConversationsKey() {
  return ['2', '/2/dm_conversations', 'POST'] as const
}

export function usePost2DmConversations<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['dm_conversations']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2']['dm_conversations']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost2DmConversationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['2']['dm_conversations']['$post']> },
      ) => parseResponse(client['2'].dm_conversations.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGet2DmConversationsMediaDmIdMediaIdResourceIdKey(
  args: InferRequestType<
    (typeof client)['2']['dm_conversations']['media'][':dm_id'][':media_id'][':resource_id']['$get']
  >,
) {
  return ['2', '/2/dm_conversations/media/:dm_id/:media_id/:resource_id', args] as const
}

export function useGet2DmConversationsMediaDmIdMediaIdResourceId<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2']['dm_conversations']['media'][':dm_id'][':media_id'][':resource_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2']['dm_conversations']['media'][':dm_id'][':media_id'][':resource_id']['$get']
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
        ? getGet2DmConversationsMediaDmIdMediaIdResourceIdKey(args)
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
                (typeof client)['2']['dm_conversations']['media'][':dm_id'][':media_id'][':resource_id']['$get']
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
          client['2'].dm_conversations.media[':dm_id'][':media_id'][':resource_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet2DmConversationsMediaDmIdMediaIdResourceId<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2']['dm_conversations']['media'][':dm_id'][':media_id'][':resource_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2']['dm_conversations']['media'][':dm_id'][':media_id'][':resource_id']['$get']
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
        ? getGet2DmConversationsMediaDmIdMediaIdResourceIdKey(args)
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
                (typeof client)['2']['dm_conversations']['media'][':dm_id'][':media_id'][':resource_id']['$get']
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
          client['2'].dm_conversations.media[':dm_id'][':media_id'][':resource_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGet2DmConversationsWithParticipantIdDmEventsKey(
  args: InferRequestType<
    (typeof client)['2']['dm_conversations']['with'][':participant_id']['dm_events']['$get']
  >,
) {
  return ['2', '/2/dm_conversations/with/:participant_id/dm_events', args] as const
}

export function useGet2DmConversationsWithParticipantIdDmEvents<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2']['dm_conversations']['with'][':participant_id']['dm_events']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2']['dm_conversations']['with'][':participant_id']['dm_events']['$get']
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
        ? getGet2DmConversationsWithParticipantIdDmEventsKey(args)
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
                (typeof client)['2']['dm_conversations']['with'][':participant_id']['dm_events']['$get']
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
          client['2'].dm_conversations.with[':participant_id'].dm_events.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet2DmConversationsWithParticipantIdDmEvents<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2']['dm_conversations']['with'][':participant_id']['dm_events']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2']['dm_conversations']['with'][':participant_id']['dm_events']['$get']
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
        ? getGet2DmConversationsWithParticipantIdDmEventsKey(args)
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
                (typeof client)['2']['dm_conversations']['with'][':participant_id']['dm_events']['$get']
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
          client['2'].dm_conversations.with[':participant_id'].dm_events.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPost2DmConversationsWithParticipantIdMessagesKey() {
  return ['2', '/2/dm_conversations/with/:participant_id/messages', 'POST'] as const
}

export function usePost2DmConversationsWithParticipantIdMessages<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2']['dm_conversations']['with'][':participant_id']['messages']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['2']['dm_conversations']['with'][':participant_id']['messages']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost2DmConversationsWithParticipantIdMessagesKey()
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
            (typeof client)['2']['dm_conversations']['with'][':participant_id']['messages']['$post']
          >
        },
      ) =>
        parseResponse(
          client['2'].dm_conversations.with[':participant_id'].messages.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPost2DmConversationsDmConversationIdMessagesKey() {
  return ['2', '/2/dm_conversations/:dm_conversation_id/messages', 'POST'] as const
}

export function usePost2DmConversationsDmConversationIdMessages<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2']['dm_conversations'][':dm_conversation_id']['messages']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['2']['dm_conversations'][':dm_conversation_id']['messages']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost2DmConversationsDmConversationIdMessagesKey()
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
            (typeof client)['2']['dm_conversations'][':dm_conversation_id']['messages']['$post']
          >
        },
      ) =>
        parseResponse(
          client['2'].dm_conversations[':dm_conversation_id'].messages.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGet2DmConversationsIdDmEventsKey(
  args: InferRequestType<(typeof client)['2']['dm_conversations'][':id']['dm_events']['$get']>,
) {
  return ['2', '/2/dm_conversations/:id/dm_events', args] as const
}

export function useGet2DmConversationsIdDmEvents<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['dm_conversations'][':id']['dm_events']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['2']['dm_conversations'][':id']['dm_events']['$get']>
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
        ? getGet2DmConversationsIdDmEventsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['2']['dm_conversations'][':id']['dm_events']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['2'].dm_conversations[':id'].dm_events.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet2DmConversationsIdDmEvents<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['dm_conversations'][':id']['dm_events']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['2']['dm_conversations'][':id']['dm_events']['$get']>
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
        ? getGet2DmConversationsIdDmEventsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['2']['dm_conversations'][':id']['dm_events']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['2'].dm_conversations[':id'].dm_events.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGet2DmEventsKey(
  args: InferRequestType<(typeof client)['2']['dm_events']['$get']>,
) {
  return ['2', '/2/dm_events', args] as const
}

export function useGet2DmEvents<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['dm_events']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['dm_events']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGet2DmEventsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['dm_events']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].dm_events.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet2DmEvents<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['dm_events']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['dm_events']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGet2DmEventsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['dm_events']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].dm_events.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGet2DmEventsEventIdKey(
  args: InferRequestType<(typeof client)['2']['dm_events'][':event_id']['$get']>,
) {
  return ['2', '/2/dm_events/:event_id', args] as const
}

export function useGet2DmEventsEventId<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['dm_events'][':event_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['dm_events'][':event_id']['$get']>>
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
        ? getGet2DmEventsEventIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['dm_events'][':event_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].dm_events[':event_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet2DmEventsEventId<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['dm_events'][':event_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['dm_events'][':event_id']['$get']>>
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
        ? getGet2DmEventsEventIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['dm_events'][':event_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].dm_events[':event_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDelete2DmEventsEventIdKey() {
  return ['2', '/2/dm_events/:event_id', 'DELETE'] as const
}

export function useDelete2DmEventsEventId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2']['dm_events'][':event_id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2']['dm_events'][':event_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDelete2DmEventsEventIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['2']['dm_events'][':event_id']['$delete']> },
      ) => parseResponse(client['2'].dm_events[':event_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGet2LikesComplianceStreamKey(
  args: InferRequestType<(typeof client)['2']['likes']['compliance']['stream']['$get']>,
) {
  return ['2', '/2/likes/compliance/stream', args] as const
}

export function useGet2LikesComplianceStream<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['likes']['compliance']['stream']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['likes']['compliance']['stream']['$get']>>
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
        ? getGet2LikesComplianceStreamKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['likes']['compliance']['stream']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].likes.compliance.stream.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet2LikesComplianceStream<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['likes']['compliance']['stream']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['likes']['compliance']['stream']['$get']>>
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
        ? getGet2LikesComplianceStreamKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['likes']['compliance']['stream']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].likes.compliance.stream.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGet2LikesFirehoseStreamKey(
  args: InferRequestType<(typeof client)['2']['likes']['firehose']['stream']['$get']>,
) {
  return ['2', '/2/likes/firehose/stream', args] as const
}

export function useGet2LikesFirehoseStream<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['likes']['firehose']['stream']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['likes']['firehose']['stream']['$get']>>
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
        ? getGet2LikesFirehoseStreamKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['likes']['firehose']['stream']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].likes.firehose.stream.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet2LikesFirehoseStream<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['likes']['firehose']['stream']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['likes']['firehose']['stream']['$get']>>
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
        ? getGet2LikesFirehoseStreamKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['likes']['firehose']['stream']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].likes.firehose.stream.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGet2LikesSample10StreamKey(
  args: InferRequestType<(typeof client)['2']['likes']['sample10']['stream']['$get']>,
) {
  return ['2', '/2/likes/sample10/stream', args] as const
}

export function useGet2LikesSample10Stream<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['likes']['sample10']['stream']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['likes']['sample10']['stream']['$get']>>
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
        ? getGet2LikesSample10StreamKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['likes']['sample10']['stream']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].likes.sample10.stream.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet2LikesSample10Stream<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['likes']['sample10']['stream']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['likes']['sample10']['stream']['$get']>>
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
        ? getGet2LikesSample10StreamKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['likes']['sample10']['stream']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].likes.sample10.stream.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPost2ListsKey() {
  return ['2', '/2/lists', 'POST'] as const
}

export function usePost2Lists<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['lists']['$post']>>>>
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2']['lists']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost2ListsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client)['2']['lists']['$post']> }) =>
        parseResponse(client['2'].lists.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGet2ListsIdKey(
  args: InferRequestType<(typeof client)['2']['lists'][':id']['$get']>,
) {
  return ['2', '/2/lists/:id', args] as const
}

export function useGet2ListsId<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['lists'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['lists'][':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGet2ListsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['lists'][':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].lists[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet2ListsId<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['lists'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['lists'][':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGet2ListsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['lists'][':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].lists[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPut2ListsIdKey() {
  return ['2', '/2/lists/:id', 'PUT'] as const
}

export function usePut2ListsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['lists'][':id']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2']['lists'][':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPut2ListsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['2']['lists'][':id']['$put']> },
      ) => parseResponse(client['2'].lists[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDelete2ListsIdKey() {
  return ['2', '/2/lists/:id', 'DELETE'] as const
}

export function useDelete2ListsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['lists'][':id']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2']['lists'][':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDelete2ListsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['2']['lists'][':id']['$delete']> },
      ) => parseResponse(client['2'].lists[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGet2ListsIdFollowersKey(
  args: InferRequestType<(typeof client)['2']['lists'][':id']['followers']['$get']>,
) {
  return ['2', '/2/lists/:id/followers', args] as const
}

export function useGet2ListsIdFollowers<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['lists'][':id']['followers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['lists'][':id']['followers']['$get']>>
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
        ? getGet2ListsIdFollowersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['lists'][':id']['followers']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].lists[':id'].followers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet2ListsIdFollowers<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['lists'][':id']['followers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['lists'][':id']['followers']['$get']>>
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
        ? getGet2ListsIdFollowersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['lists'][':id']['followers']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].lists[':id'].followers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGet2ListsIdMembersKey(
  args: InferRequestType<(typeof client)['2']['lists'][':id']['members']['$get']>,
) {
  return ['2', '/2/lists/:id/members', args] as const
}

export function useGet2ListsIdMembers<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['lists'][':id']['members']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['lists'][':id']['members']['$get']>>
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
        ? getGet2ListsIdMembersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['lists'][':id']['members']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].lists[':id'].members.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet2ListsIdMembers<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['lists'][':id']['members']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['lists'][':id']['members']['$get']>>
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
        ? getGet2ListsIdMembersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['lists'][':id']['members']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].lists[':id'].members.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPost2ListsIdMembersKey() {
  return ['2', '/2/lists/:id/members', 'POST'] as const
}

export function usePost2ListsIdMembers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2']['lists'][':id']['members']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2']['lists'][':id']['members']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost2ListsIdMembersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['2']['lists'][':id']['members']['$post']> },
      ) => parseResponse(client['2'].lists[':id'].members.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDelete2ListsIdMembersUserIdKey() {
  return ['2', '/2/lists/:id/members/:user_id', 'DELETE'] as const
}

export function useDelete2ListsIdMembersUserId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['2']['lists'][':id']['members'][':user_id']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2']['lists'][':id']['members'][':user_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDelete2ListsIdMembersUserIdKey()
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
            (typeof client)['2']['lists'][':id']['members'][':user_id']['$delete']
          >
        },
      ) => parseResponse(client['2'].lists[':id'].members[':user_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGet2ListsIdTweetsKey(
  args: InferRequestType<(typeof client)['2']['lists'][':id']['tweets']['$get']>,
) {
  return ['2', '/2/lists/:id/tweets', args] as const
}

export function useGet2ListsIdTweets<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['lists'][':id']['tweets']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['lists'][':id']['tweets']['$get']>>
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
    enabled !== false ? (customKey === undefined ? getGet2ListsIdTweetsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['lists'][':id']['tweets']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].lists[':id'].tweets.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet2ListsIdTweets<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['lists'][':id']['tweets']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['lists'][':id']['tweets']['$get']>>
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
    enabled !== false ? (customKey === undefined ? getGet2ListsIdTweetsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['lists'][':id']['tweets']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].lists[':id'].tweets.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGet2MediaKey(args: InferRequestType<(typeof client)['2']['media']['$get']>) {
  return ['2', '/2/media', args] as const
}

export function useGet2Media<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['media']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['media']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGet2MediaKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['media']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].media.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet2Media<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['media']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['media']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGet2MediaKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['media']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].media.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPost2MediaAmplifyPostsKey() {
  return ['2', '/2/media/amplify/posts', 'POST'] as const
}

export function usePost2MediaAmplifyPosts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2']['media']['amplify']['posts']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2']['media']['amplify']['posts']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost2MediaAmplifyPostsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['2']['media']['amplify']['posts']['$post']> },
      ) => parseResponse(client['2'].media.amplify.posts.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGet2MediaAmplifyProgramsKey() {
  return ['2', '/2/media/amplify/programs'] as const
}

export function useGet2MediaAmplifyPrograms<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2']['media']['amplify']['programs']['$get']>>
        >
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
        ? getGet2MediaAmplifyProgramsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['media']['amplify']['programs']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].media.amplify.programs.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet2MediaAmplifyPrograms<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2']['media']['amplify']['programs']['$get']>>
        >
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
        ? getGet2MediaAmplifyProgramsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['media']['amplify']['programs']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].media.amplify.programs.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGet2MediaAmplifyProgramsProgramIdKey(
  args: InferRequestType<
    (typeof client)['2']['media']['amplify']['programs'][':program_id']['$get']
  >,
) {
  return ['2', '/2/media/amplify/programs/:program_id', args] as const
}

export function useGet2MediaAmplifyProgramsProgramId<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2']['media']['amplify']['programs'][':program_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2']['media']['amplify']['programs'][':program_id']['$get']
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
        ? getGet2MediaAmplifyProgramsProgramIdKey(args)
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
                (typeof client)['2']['media']['amplify']['programs'][':program_id']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['2'].media.amplify.programs[':program_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet2MediaAmplifyProgramsProgramId<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2']['media']['amplify']['programs'][':program_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2']['media']['amplify']['programs'][':program_id']['$get']
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
        ? getGet2MediaAmplifyProgramsProgramIdKey(args)
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
                (typeof client)['2']['media']['amplify']['programs'][':program_id']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['2'].media.amplify.programs[':program_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGet2MediaAmplifyProgramsProgramIdPostsKey(
  args: InferRequestType<
    (typeof client)['2']['media']['amplify']['programs'][':program_id']['posts']['$get']
  >,
) {
  return ['2', '/2/media/amplify/programs/:program_id/posts', args] as const
}

export function useGet2MediaAmplifyProgramsProgramIdPosts<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2']['media']['amplify']['programs'][':program_id']['posts']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2']['media']['amplify']['programs'][':program_id']['posts']['$get']
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
        ? getGet2MediaAmplifyProgramsProgramIdPostsKey(args)
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
                (typeof client)['2']['media']['amplify']['programs'][':program_id']['posts']['$get']
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
          client['2'].media.amplify.programs[':program_id'].posts.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet2MediaAmplifyProgramsProgramIdPosts<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2']['media']['amplify']['programs'][':program_id']['posts']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2']['media']['amplify']['programs'][':program_id']['posts']['$get']
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
        ? getGet2MediaAmplifyProgramsProgramIdPostsKey(args)
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
                (typeof client)['2']['media']['amplify']['programs'][':program_id']['posts']['$get']
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
          client['2'].media.amplify.programs[':program_id'].posts.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGet2MediaAnalyticsKey(
  args: InferRequestType<(typeof client)['2']['media']['analytics']['$get']>,
) {
  return ['2', '/2/media/analytics', args] as const
}

export function useGet2MediaAnalytics<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['media']['analytics']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['media']['analytics']['$get']>>
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
        ? getGet2MediaAnalyticsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['media']['analytics']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].media.analytics.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet2MediaAnalytics<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['media']['analytics']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['media']['analytics']['$get']>>
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
        ? getGet2MediaAnalyticsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['media']['analytics']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].media.analytics.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPost2MediaLibraryKey() {
  return ['2', '/2/media/library', 'POST'] as const
}

export function usePost2MediaLibrary<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['media']['library']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2']['media']['library']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost2MediaLibraryKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['2']['media']['library']['$post']> },
      ) => parseResponse(client['2'].media.library.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGet2MediaLibraryCategoriesKey(
  args: InferRequestType<(typeof client)['2']['media']['library']['categories']['$get']>,
) {
  return ['2', '/2/media/library/categories', args] as const
}

export function useGet2MediaLibraryCategories<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['media']['library']['categories']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['media']['library']['categories']['$get']>>
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
        ? getGet2MediaLibraryCategoriesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['media']['library']['categories']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].media.library.categories.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet2MediaLibraryCategories<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['media']['library']['categories']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['media']['library']['categories']['$get']>>
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
        ? getGet2MediaLibraryCategoriesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['media']['library']['categories']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].media.library.categories.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPut2MediaLibraryMediaKeyKey() {
  return ['2', '/2/media/library/:media_key', 'PUT'] as const
}

export function usePut2MediaLibraryMediaKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2']['media']['library'][':media_key']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2']['media']['library'][':media_key']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPut2MediaLibraryMediaKeyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['2']['media']['library'][':media_key']['$put']>
        },
      ) => parseResponse(client['2'].media.library[':media_key'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDelete2MediaLibraryMediaKeyKey() {
  return ['2', '/2/media/library/:media_key', 'DELETE'] as const
}

export function useDelete2MediaLibraryMediaKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2']['media']['library'][':media_key']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2']['media']['library'][':media_key']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDelete2MediaLibraryMediaKeyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['2']['media']['library'][':media_key']['$delete']>
        },
      ) => parseResponse(client['2'].media.library[':media_key'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPost2MediaMetadataKey() {
  return ['2', '/2/media/metadata', 'POST'] as const
}

export function usePost2MediaMetadata<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2']['media']['metadata']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2']['media']['metadata']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost2MediaMetadataKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['2']['media']['metadata']['$post']> },
      ) => parseResponse(client['2'].media.metadata.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPost2MediaSubtitlesKey() {
  return ['2', '/2/media/subtitles', 'POST'] as const
}

export function usePost2MediaSubtitles<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2']['media']['subtitles']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2']['media']['subtitles']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost2MediaSubtitlesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['2']['media']['subtitles']['$post']> },
      ) => parseResponse(client['2'].media.subtitles.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDelete2MediaSubtitlesKey() {
  return ['2', '/2/media/subtitles', 'DELETE'] as const
}

export function useDelete2MediaSubtitles<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2']['media']['subtitles']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2']['media']['subtitles']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDelete2MediaSubtitlesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['2']['media']['subtitles']['$delete']> },
      ) => parseResponse(client['2'].media.subtitles.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGet2MediaUploadKey(
  args: InferRequestType<(typeof client)['2']['media']['upload']['$get']>,
) {
  return ['2', '/2/media/upload', args] as const
}

export function useGet2MediaUpload<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['media']['upload']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['media']['upload']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGet2MediaUploadKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['media']['upload']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].media.upload.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet2MediaUpload<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['media']['upload']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['media']['upload']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGet2MediaUploadKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['media']['upload']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].media.upload.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPost2MediaUploadKey() {
  return ['2', '/2/media/upload', 'POST'] as const
}

export function usePost2MediaUpload<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['media']['upload']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2']['media']['upload']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost2MediaUploadKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['2']['media']['upload']['$post']> },
      ) => parseResponse(client['2'].media.upload.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPost2MediaUploadInitializeKey() {
  return ['2', '/2/media/upload/initialize', 'POST'] as const
}

export function usePost2MediaUploadInitialize<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2']['media']['upload']['initialize']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2']['media']['upload']['initialize']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost2MediaUploadInitializeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['2']['media']['upload']['initialize']['$post']>
        },
      ) => parseResponse(client['2'].media.upload.initialize.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPost2MediaUploadIdAppendKey() {
  return ['2', '/2/media/upload/:id/append', 'POST'] as const
}

export function usePost2MediaUploadIdAppend<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2']['media']['upload'][':id']['append']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2']['media']['upload'][':id']['append']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost2MediaUploadIdAppendKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['2']['media']['upload'][':id']['append']['$post']>
        },
      ) => parseResponse(client['2'].media.upload[':id'].append.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPost2MediaUploadIdFinalizeKey() {
  return ['2', '/2/media/upload/:id/finalize', 'POST'] as const
}

export function usePost2MediaUploadIdFinalize<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2']['media']['upload'][':id']['finalize']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2']['media']['upload'][':id']['finalize']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost2MediaUploadIdFinalizeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['2']['media']['upload'][':id']['finalize']['$post']>
        },
      ) => parseResponse(client['2'].media.upload[':id'].finalize.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGet2MediaMediaKeyKey(
  args: InferRequestType<(typeof client)['2']['media'][':media_key']['$get']>,
) {
  return ['2', '/2/media/:media_key', args] as const
}

export function useGet2MediaMediaKey<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['media'][':media_key']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['media'][':media_key']['$get']>>
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
    enabled !== false ? (customKey === undefined ? getGet2MediaMediaKeyKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['media'][':media_key']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].media[':media_key'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet2MediaMediaKey<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['media'][':media_key']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['media'][':media_key']['$get']>>
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
    enabled !== false ? (customKey === undefined ? getGet2MediaMediaKeyKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['media'][':media_key']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].media[':media_key'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGet2NewsSearchKey(
  args: InferRequestType<(typeof client)['2']['news']['search']['$get']>,
) {
  return ['2', '/2/news/search', args] as const
}

export function useGet2NewsSearch<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['news']['search']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['news']['search']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGet2NewsSearchKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['news']['search']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].news.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet2NewsSearch<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['news']['search']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['news']['search']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGet2NewsSearchKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['news']['search']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].news.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGet2NewsIdKey(
  args: InferRequestType<(typeof client)['2']['news'][':id']['$get']>,
) {
  return ['2', '/2/news/:id', args] as const
}

export function useGet2NewsId<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['news'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['news'][':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGet2NewsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['news'][':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].news[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet2NewsId<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['news'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['news'][':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGet2NewsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['news'][':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].news[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPost2NotesKey() {
  return ['2', '/2/notes', 'POST'] as const
}

export function usePost2Notes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['notes']['$post']>>>>
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2']['notes']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost2NotesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client)['2']['notes']['$post']> }) =>
        parseResponse(client['2'].notes.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPost2NotesEvaluateKey() {
  return ['2', '/2/notes/evaluate', 'POST'] as const
}

export function usePost2NotesEvaluate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2']['notes']['evaluate']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2']['notes']['evaluate']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost2NotesEvaluateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['2']['notes']['evaluate']['$post']> },
      ) => parseResponse(client['2'].notes.evaluate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGet2NotesSearchNotesWrittenKey(
  args: InferRequestType<(typeof client)['2']['notes']['search']['notes_written']['$get']>,
) {
  return ['2', '/2/notes/search/notes_written', args] as const
}

export function useGet2NotesSearchNotesWritten<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['notes']['search']['notes_written']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['notes']['search']['notes_written']['$get']>>
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
        ? getGet2NotesSearchNotesWrittenKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['notes']['search']['notes_written']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].notes.search.notes_written.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet2NotesSearchNotesWritten<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['notes']['search']['notes_written']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['notes']['search']['notes_written']['$get']>>
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
        ? getGet2NotesSearchNotesWrittenKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['notes']['search']['notes_written']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].notes.search.notes_written.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGet2NotesSearchPostsEligibleForNotesKey(
  args: InferRequestType<
    (typeof client)['2']['notes']['search']['posts_eligible_for_notes']['$get']
  >,
) {
  return ['2', '/2/notes/search/posts_eligible_for_notes', args] as const
}

export function useGet2NotesSearchPostsEligibleForNotes<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2']['notes']['search']['posts_eligible_for_notes']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2']['notes']['search']['posts_eligible_for_notes']['$get']
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
        ? getGet2NotesSearchPostsEligibleForNotesKey(args)
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
                (typeof client)['2']['notes']['search']['posts_eligible_for_notes']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['2'].notes.search.posts_eligible_for_notes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet2NotesSearchPostsEligibleForNotes<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2']['notes']['search']['posts_eligible_for_notes']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2']['notes']['search']['posts_eligible_for_notes']['$get']
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
        ? getGet2NotesSearchPostsEligibleForNotesKey(args)
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
                (typeof client)['2']['notes']['search']['posts_eligible_for_notes']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['2'].notes.search.posts_eligible_for_notes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDelete2NotesIdKey() {
  return ['2', '/2/notes/:id', 'DELETE'] as const
}

export function useDelete2NotesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['notes'][':id']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2']['notes'][':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDelete2NotesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['2']['notes'][':id']['$delete']> },
      ) => parseResponse(client['2'].notes[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGet2OpenapiJsonKey() {
  return ['2', '/2/openapi.json'] as const
}

export function useGet2OpenapiJson<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['openapi.json']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGet2OpenapiJsonKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['openapi.json']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2']['openapi.json'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet2OpenapiJson<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['openapi.json']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGet2OpenapiJsonKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['openapi.json']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2']['openapi.json'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGet2PostsDraftsKey(
  args: InferRequestType<(typeof client)['2']['posts']['drafts']['$get']>,
) {
  return ['2', '/2/posts/drafts', args] as const
}

export function useGet2PostsDrafts<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['posts']['drafts']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['posts']['drafts']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGet2PostsDraftsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['posts']['drafts']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].posts.drafts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet2PostsDrafts<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['posts']['drafts']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['posts']['drafts']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGet2PostsDraftsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['posts']['drafts']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].posts.drafts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPost2PostsDraftsKey() {
  return ['2', '/2/posts/drafts', 'POST'] as const
}

export function usePost2PostsDrafts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['posts']['drafts']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2']['posts']['drafts']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost2PostsDraftsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['2']['posts']['drafts']['$post']> },
      ) => parseResponse(client['2'].posts.drafts.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDelete2PostsDraftsIdKey() {
  return ['2', '/2/posts/drafts/:id', 'DELETE'] as const
}

export function useDelete2PostsDraftsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2']['posts']['drafts'][':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2']['posts']['drafts'][':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDelete2PostsDraftsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['2']['posts']['drafts'][':id']['$delete']> },
      ) => parseResponse(client['2'].posts.drafts[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGet2RegionKey() {
  return ['2', '/2/region'] as const
}

export function useGet2Region<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['region']['$get']>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGet2RegionKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['region']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].region.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet2Region<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['region']['$get']>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGet2RegionKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['region']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].region.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGet2SourcesKey() {
  return ['2', '/2/sources'] as const
}

export function useGet2Sources<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['sources']['$get']>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGet2SourcesKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['sources']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].sources.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet2Sources<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['sources']['$get']>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGet2SourcesKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['sources']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].sources.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPost2SourcesKey() {
  return ['2', '/2/sources', 'POST'] as const
}

export function usePost2Sources<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['sources']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2']['sources']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost2SourcesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['2']['sources']['$post']> },
      ) => parseResponse(client['2'].sources.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGet2SourcesIdKey(
  args: InferRequestType<(typeof client)['2']['sources'][':id']['$get']>,
) {
  return ['2', '/2/sources/:id', args] as const
}

export function useGet2SourcesId<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['sources'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['sources'][':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGet2SourcesIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['sources'][':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].sources[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet2SourcesId<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['sources'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['sources'][':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGet2SourcesIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['sources'][':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].sources[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPut2SourcesIdKey() {
  return ['2', '/2/sources/:id', 'PUT'] as const
}

export function usePut2SourcesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['sources'][':id']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2']['sources'][':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPut2SourcesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['2']['sources'][':id']['$put']> },
      ) => parseResponse(client['2'].sources[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDelete2SourcesIdKey() {
  return ['2', '/2/sources/:id', 'DELETE'] as const
}

export function useDelete2SourcesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['sources'][':id']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2']['sources'][':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDelete2SourcesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['2']['sources'][':id']['$delete']> },
      ) => parseResponse(client['2'].sources[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGet2SourcesIdStreamKeyKey(
  args: InferRequestType<(typeof client)['2']['sources'][':id']['stream_key']['$get']>,
) {
  return ['2', '/2/sources/:id/stream_key', args] as const
}

export function useGet2SourcesIdStreamKey<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['sources'][':id']['stream_key']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['sources'][':id']['stream_key']['$get']>>
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
        ? getGet2SourcesIdStreamKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['sources'][':id']['stream_key']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].sources[':id'].stream_key.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet2SourcesIdStreamKey<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['sources'][':id']['stream_key']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['sources'][':id']['stream_key']['$get']>>
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
        ? getGet2SourcesIdStreamKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['sources'][':id']['stream_key']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].sources[':id'].stream_key.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGet2SpacesKey(args: InferRequestType<(typeof client)['2']['spaces']['$get']>) {
  return ['2', '/2/spaces', args] as const
}

export function useGet2Spaces<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['spaces']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['spaces']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGet2SpacesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['spaces']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].spaces.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet2Spaces<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['spaces']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['spaces']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGet2SpacesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['spaces']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].spaces.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGet2SpacesByCreatorIdsKey(
  args: InferRequestType<(typeof client)['2']['spaces']['by']['creator_ids']['$get']>,
) {
  return ['2', '/2/spaces/by/creator_ids', args] as const
}

export function useGet2SpacesByCreatorIds<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['spaces']['by']['creator_ids']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['spaces']['by']['creator_ids']['$get']>>
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
        ? getGet2SpacesByCreatorIdsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['spaces']['by']['creator_ids']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].spaces.by.creator_ids.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet2SpacesByCreatorIds<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['spaces']['by']['creator_ids']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['spaces']['by']['creator_ids']['$get']>>
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
        ? getGet2SpacesByCreatorIdsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['spaces']['by']['creator_ids']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].spaces.by.creator_ids.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGet2SpacesSearchKey(
  args: InferRequestType<(typeof client)['2']['spaces']['search']['$get']>,
) {
  return ['2', '/2/spaces/search', args] as const
}

export function useGet2SpacesSearch<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['spaces']['search']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['spaces']['search']['$get']>>
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
    enabled !== false ? (customKey === undefined ? getGet2SpacesSearchKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['spaces']['search']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].spaces.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet2SpacesSearch<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['spaces']['search']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['spaces']['search']['$get']>>
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
    enabled !== false ? (customKey === undefined ? getGet2SpacesSearchKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['spaces']['search']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].spaces.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGet2SpacesIdKey(
  args: InferRequestType<(typeof client)['2']['spaces'][':id']['$get']>,
) {
  return ['2', '/2/spaces/:id', args] as const
}

export function useGet2SpacesId<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['spaces'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['spaces'][':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGet2SpacesIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['spaces'][':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].spaces[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet2SpacesId<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['spaces'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['spaces'][':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGet2SpacesIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['spaces'][':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].spaces[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGet2SpacesIdBuyersKey(
  args: InferRequestType<(typeof client)['2']['spaces'][':id']['buyers']['$get']>,
) {
  return ['2', '/2/spaces/:id/buyers', args] as const
}

export function useGet2SpacesIdBuyers<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['spaces'][':id']['buyers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['spaces'][':id']['buyers']['$get']>>
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
        ? getGet2SpacesIdBuyersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['spaces'][':id']['buyers']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].spaces[':id'].buyers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet2SpacesIdBuyers<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['spaces'][':id']['buyers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['spaces'][':id']['buyers']['$get']>>
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
        ? getGet2SpacesIdBuyersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['spaces'][':id']['buyers']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].spaces[':id'].buyers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGet2SpacesIdTweetsKey(
  args: InferRequestType<(typeof client)['2']['spaces'][':id']['tweets']['$get']>,
) {
  return ['2', '/2/spaces/:id/tweets', args] as const
}

export function useGet2SpacesIdTweets<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['spaces'][':id']['tweets']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['spaces'][':id']['tweets']['$get']>>
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
        ? getGet2SpacesIdTweetsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['spaces'][':id']['tweets']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].spaces[':id'].tweets.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet2SpacesIdTweets<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['spaces'][':id']['tweets']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['spaces'][':id']['tweets']['$get']>>
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
        ? getGet2SpacesIdTweetsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['spaces'][':id']['tweets']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].spaces[':id'].tweets.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGet2TrendsByWoeidWoeidKey(
  args: InferRequestType<(typeof client)['2']['trends']['by']['woeid'][':woeid']['$get']>,
) {
  return ['2', '/2/trends/by/woeid/:woeid', args] as const
}

export function useGet2TrendsByWoeidWoeid<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['trends']['by']['woeid'][':woeid']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['trends']['by']['woeid'][':woeid']['$get']>>
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
        ? getGet2TrendsByWoeidWoeidKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['trends']['by']['woeid'][':woeid']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].trends.by.woeid[':woeid'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet2TrendsByWoeidWoeid<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['trends']['by']['woeid'][':woeid']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['trends']['by']['woeid'][':woeid']['$get']>>
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
        ? getGet2TrendsByWoeidWoeidKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['trends']['by']['woeid'][':woeid']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].trends.by.woeid[':woeid'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGet2TrendsLocationsKey(
  args: InferRequestType<(typeof client)['2']['trends']['locations']['$get']>,
) {
  return ['2', '/2/trends/locations', args] as const
}

export function useGet2TrendsLocations<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['trends']['locations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['trends']['locations']['$get']>>
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
        ? getGet2TrendsLocationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['trends']['locations']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].trends.locations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet2TrendsLocations<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['trends']['locations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['trends']['locations']['$get']>>
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
        ? getGet2TrendsLocationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['trends']['locations']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].trends.locations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGet2TweetsKey(args: InferRequestType<(typeof client)['2']['tweets']['$get']>) {
  return ['2', '/2/tweets', args] as const
}

export function useGet2Tweets<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['tweets']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['tweets']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGet2TweetsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['tweets']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].tweets.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet2Tweets<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['tweets']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['tweets']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGet2TweetsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['tweets']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].tweets.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPost2TweetsKey() {
  return ['2', '/2/tweets', 'POST'] as const
}

export function usePost2Tweets<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['tweets']['$post']>>>>
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2']['tweets']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost2TweetsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client)['2']['tweets']['$post']> }) =>
        parseResponse(client['2'].tweets.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGet2TweetsAnalyticsKey(
  args: InferRequestType<(typeof client)['2']['tweets']['analytics']['$get']>,
) {
  return ['2', '/2/tweets/analytics', args] as const
}

export function useGet2TweetsAnalytics<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['tweets']['analytics']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['tweets']['analytics']['$get']>>
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
        ? getGet2TweetsAnalyticsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['tweets']['analytics']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].tweets.analytics.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet2TweetsAnalytics<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['tweets']['analytics']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['tweets']['analytics']['$get']>>
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
        ? getGet2TweetsAnalyticsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['tweets']['analytics']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].tweets.analytics.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGet2TweetsComplianceStreamKey(
  args: InferRequestType<(typeof client)['2']['tweets']['compliance']['stream']['$get']>,
) {
  return ['2', '/2/tweets/compliance/stream', args] as const
}

export function useGet2TweetsComplianceStream<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['tweets']['compliance']['stream']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['tweets']['compliance']['stream']['$get']>>
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
        ? getGet2TweetsComplianceStreamKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['tweets']['compliance']['stream']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].tweets.compliance.stream.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet2TweetsComplianceStream<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['tweets']['compliance']['stream']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['tweets']['compliance']['stream']['$get']>>
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
        ? getGet2TweetsComplianceStreamKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['tweets']['compliance']['stream']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].tweets.compliance.stream.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGet2TweetsCountsAllKey(
  args: InferRequestType<(typeof client)['2']['tweets']['counts']['all']['$get']>,
) {
  return ['2', '/2/tweets/counts/all', args] as const
}

export function useGet2TweetsCountsAll<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['tweets']['counts']['all']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['tweets']['counts']['all']['$get']>>
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
        ? getGet2TweetsCountsAllKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['tweets']['counts']['all']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].tweets.counts.all.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet2TweetsCountsAll<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['tweets']['counts']['all']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['tweets']['counts']['all']['$get']>>
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
        ? getGet2TweetsCountsAllKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['tweets']['counts']['all']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].tweets.counts.all.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGet2TweetsCountsRecentKey(
  args: InferRequestType<(typeof client)['2']['tweets']['counts']['recent']['$get']>,
) {
  return ['2', '/2/tweets/counts/recent', args] as const
}

export function useGet2TweetsCountsRecent<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['tweets']['counts']['recent']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['tweets']['counts']['recent']['$get']>>
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
        ? getGet2TweetsCountsRecentKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['tweets']['counts']['recent']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].tweets.counts.recent.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet2TweetsCountsRecent<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['tweets']['counts']['recent']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['tweets']['counts']['recent']['$get']>>
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
        ? getGet2TweetsCountsRecentKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['tweets']['counts']['recent']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].tweets.counts.recent.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGet2TweetsFirehoseStreamKey(
  args: InferRequestType<(typeof client)['2']['tweets']['firehose']['stream']['$get']>,
) {
  return ['2', '/2/tweets/firehose/stream', args] as const
}

export function useGet2TweetsFirehoseStream<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['tweets']['firehose']['stream']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['tweets']['firehose']['stream']['$get']>>
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
        ? getGet2TweetsFirehoseStreamKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['tweets']['firehose']['stream']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].tweets.firehose.stream.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet2TweetsFirehoseStream<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['tweets']['firehose']['stream']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['tweets']['firehose']['stream']['$get']>>
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
        ? getGet2TweetsFirehoseStreamKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['tweets']['firehose']['stream']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].tweets.firehose.stream.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGet2TweetsFirehoseStreamLangEnKey(
  args: InferRequestType<
    (typeof client)['2']['tweets']['firehose']['stream']['lang']['en']['$get']
  >,
) {
  return ['2', '/2/tweets/firehose/stream/lang/en', args] as const
}

export function useGet2TweetsFirehoseStreamLangEn<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2']['tweets']['firehose']['stream']['lang']['en']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['2']['tweets']['firehose']['stream']['lang']['en']['$get']>
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
        ? getGet2TweetsFirehoseStreamLangEnKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['2']['tweets']['firehose']['stream']['lang']['en']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['2'].tweets.firehose.stream.lang.en.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet2TweetsFirehoseStreamLangEn<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2']['tweets']['firehose']['stream']['lang']['en']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['2']['tweets']['firehose']['stream']['lang']['en']['$get']>
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
        ? getGet2TweetsFirehoseStreamLangEnKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['2']['tweets']['firehose']['stream']['lang']['en']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['2'].tweets.firehose.stream.lang.en.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGet2TweetsFirehoseStreamLangJaKey(
  args: InferRequestType<
    (typeof client)['2']['tweets']['firehose']['stream']['lang']['ja']['$get']
  >,
) {
  return ['2', '/2/tweets/firehose/stream/lang/ja', args] as const
}

export function useGet2TweetsFirehoseStreamLangJa<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2']['tweets']['firehose']['stream']['lang']['ja']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['2']['tweets']['firehose']['stream']['lang']['ja']['$get']>
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
        ? getGet2TweetsFirehoseStreamLangJaKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['2']['tweets']['firehose']['stream']['lang']['ja']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['2'].tweets.firehose.stream.lang.ja.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet2TweetsFirehoseStreamLangJa<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2']['tweets']['firehose']['stream']['lang']['ja']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['2']['tweets']['firehose']['stream']['lang']['ja']['$get']>
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
        ? getGet2TweetsFirehoseStreamLangJaKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['2']['tweets']['firehose']['stream']['lang']['ja']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['2'].tweets.firehose.stream.lang.ja.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGet2TweetsFirehoseStreamLangKoKey(
  args: InferRequestType<
    (typeof client)['2']['tweets']['firehose']['stream']['lang']['ko']['$get']
  >,
) {
  return ['2', '/2/tweets/firehose/stream/lang/ko', args] as const
}

export function useGet2TweetsFirehoseStreamLangKo<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2']['tweets']['firehose']['stream']['lang']['ko']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['2']['tweets']['firehose']['stream']['lang']['ko']['$get']>
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
        ? getGet2TweetsFirehoseStreamLangKoKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['2']['tweets']['firehose']['stream']['lang']['ko']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['2'].tweets.firehose.stream.lang.ko.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet2TweetsFirehoseStreamLangKo<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2']['tweets']['firehose']['stream']['lang']['ko']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['2']['tweets']['firehose']['stream']['lang']['ko']['$get']>
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
        ? getGet2TweetsFirehoseStreamLangKoKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['2']['tweets']['firehose']['stream']['lang']['ko']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['2'].tweets.firehose.stream.lang.ko.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGet2TweetsFirehoseStreamLangPtKey(
  args: InferRequestType<
    (typeof client)['2']['tweets']['firehose']['stream']['lang']['pt']['$get']
  >,
) {
  return ['2', '/2/tweets/firehose/stream/lang/pt', args] as const
}

export function useGet2TweetsFirehoseStreamLangPt<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2']['tweets']['firehose']['stream']['lang']['pt']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['2']['tweets']['firehose']['stream']['lang']['pt']['$get']>
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
        ? getGet2TweetsFirehoseStreamLangPtKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['2']['tweets']['firehose']['stream']['lang']['pt']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['2'].tweets.firehose.stream.lang.pt.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet2TweetsFirehoseStreamLangPt<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2']['tweets']['firehose']['stream']['lang']['pt']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['2']['tweets']['firehose']['stream']['lang']['pt']['$get']>
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
        ? getGet2TweetsFirehoseStreamLangPtKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['2']['tweets']['firehose']['stream']['lang']['pt']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['2'].tweets.firehose.stream.lang.pt.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGet2TweetsLabelStreamKey(
  args: InferRequestType<(typeof client)['2']['tweets']['label']['stream']['$get']>,
) {
  return ['2', '/2/tweets/label/stream', args] as const
}

export function useGet2TweetsLabelStream<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['tweets']['label']['stream']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['tweets']['label']['stream']['$get']>>
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
        ? getGet2TweetsLabelStreamKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['tweets']['label']['stream']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].tweets.label.stream.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet2TweetsLabelStream<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['tweets']['label']['stream']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['tweets']['label']['stream']['$get']>>
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
        ? getGet2TweetsLabelStreamKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['tweets']['label']['stream']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].tweets.label.stream.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGet2TweetsSampleStreamKey(
  args: InferRequestType<(typeof client)['2']['tweets']['sample']['stream']['$get']>,
) {
  return ['2', '/2/tweets/sample/stream', args] as const
}

export function useGet2TweetsSampleStream<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['tweets']['sample']['stream']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['tweets']['sample']['stream']['$get']>>
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
        ? getGet2TweetsSampleStreamKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['tweets']['sample']['stream']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].tweets.sample.stream.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet2TweetsSampleStream<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['tweets']['sample']['stream']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['tweets']['sample']['stream']['$get']>>
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
        ? getGet2TweetsSampleStreamKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['tweets']['sample']['stream']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].tweets.sample.stream.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGet2TweetsSample10StreamKey(
  args: InferRequestType<(typeof client)['2']['tweets']['sample10']['stream']['$get']>,
) {
  return ['2', '/2/tweets/sample10/stream', args] as const
}

export function useGet2TweetsSample10Stream<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['tweets']['sample10']['stream']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['tweets']['sample10']['stream']['$get']>>
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
        ? getGet2TweetsSample10StreamKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['tweets']['sample10']['stream']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].tweets.sample10.stream.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet2TweetsSample10Stream<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['tweets']['sample10']['stream']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['tweets']['sample10']['stream']['$get']>>
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
        ? getGet2TweetsSample10StreamKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['tweets']['sample10']['stream']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].tweets.sample10.stream.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGet2TweetsSearchAllKey(
  args: InferRequestType<(typeof client)['2']['tweets']['search']['all']['$get']>,
) {
  return ['2', '/2/tweets/search/all', args] as const
}

export function useGet2TweetsSearchAll<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['tweets']['search']['all']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['tweets']['search']['all']['$get']>>
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
        ? getGet2TweetsSearchAllKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['tweets']['search']['all']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].tweets.search.all.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet2TweetsSearchAll<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['tweets']['search']['all']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['tweets']['search']['all']['$get']>>
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
        ? getGet2TweetsSearchAllKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['tweets']['search']['all']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].tweets.search.all.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGet2TweetsSearchRecentKey(
  args: InferRequestType<(typeof client)['2']['tweets']['search']['recent']['$get']>,
) {
  return ['2', '/2/tweets/search/recent', args] as const
}

export function useGet2TweetsSearchRecent<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['tweets']['search']['recent']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['tweets']['search']['recent']['$get']>>
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
        ? getGet2TweetsSearchRecentKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['tweets']['search']['recent']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].tweets.search.recent.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet2TweetsSearchRecent<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['tweets']['search']['recent']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['tweets']['search']['recent']['$get']>>
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
        ? getGet2TweetsSearchRecentKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['tweets']['search']['recent']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].tweets.search.recent.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGet2TweetsSearchStreamKey(
  args: InferRequestType<(typeof client)['2']['tweets']['search']['stream']['$get']>,
) {
  return ['2', '/2/tweets/search/stream', args] as const
}

export function useGet2TweetsSearchStream<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['tweets']['search']['stream']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['tweets']['search']['stream']['$get']>>
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
        ? getGet2TweetsSearchStreamKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['tweets']['search']['stream']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].tweets.search.stream.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet2TweetsSearchStream<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['tweets']['search']['stream']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['tweets']['search']['stream']['$get']>>
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
        ? getGet2TweetsSearchStreamKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['tweets']['search']['stream']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].tweets.search.stream.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGet2TweetsSearchStreamRulesKey(
  args: InferRequestType<(typeof client)['2']['tweets']['search']['stream']['rules']['$get']>,
) {
  return ['2', '/2/tweets/search/stream/rules', args] as const
}

export function useGet2TweetsSearchStreamRules<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['tweets']['search']['stream']['rules']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['tweets']['search']['stream']['rules']['$get']>>
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
        ? getGet2TweetsSearchStreamRulesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['tweets']['search']['stream']['rules']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].tweets.search.stream.rules.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet2TweetsSearchStreamRules<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['tweets']['search']['stream']['rules']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['tweets']['search']['stream']['rules']['$get']>>
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
        ? getGet2TweetsSearchStreamRulesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['tweets']['search']['stream']['rules']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].tweets.search.stream.rules.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPost2TweetsSearchStreamRulesKey() {
  return ['2', '/2/tweets/search/stream/rules', 'POST'] as const
}

export function usePost2TweetsSearchStreamRules<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2']['tweets']['search']['stream']['rules']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2']['tweets']['search']['stream']['rules']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost2TweetsSearchStreamRulesKey()
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
            (typeof client)['2']['tweets']['search']['stream']['rules']['$post']
          >
        },
      ) => parseResponse(client['2'].tweets.search.stream.rules.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGet2TweetsSearchStreamRulesCountsKey(
  args: InferRequestType<
    (typeof client)['2']['tweets']['search']['stream']['rules']['counts']['$get']
  >,
) {
  return ['2', '/2/tweets/search/stream/rules/counts', args] as const
}

export function useGet2TweetsSearchStreamRulesCounts<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2']['tweets']['search']['stream']['rules']['counts']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2']['tweets']['search']['stream']['rules']['counts']['$get']
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
        ? getGet2TweetsSearchStreamRulesCountsKey(args)
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
                (typeof client)['2']['tweets']['search']['stream']['rules']['counts']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['2'].tweets.search.stream.rules.counts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet2TweetsSearchStreamRulesCounts<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2']['tweets']['search']['stream']['rules']['counts']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2']['tweets']['search']['stream']['rules']['counts']['$get']
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
        ? getGet2TweetsSearchStreamRulesCountsKey(args)
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
                (typeof client)['2']['tweets']['search']['stream']['rules']['counts']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['2'].tweets.search.stream.rules.counts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGet2TweetsSearchWebhooksKey() {
  return ['2', '/2/tweets/search/webhooks'] as const
}

export function useGet2TweetsSearchWebhooks<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2']['tweets']['search']['webhooks']['$get']>>
        >
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
        ? getGet2TweetsSearchWebhooksKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['tweets']['search']['webhooks']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].tweets.search.webhooks.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet2TweetsSearchWebhooks<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2']['tweets']['search']['webhooks']['$get']>>
        >
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
        ? getGet2TweetsSearchWebhooksKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['tweets']['search']['webhooks']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].tweets.search.webhooks.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPost2TweetsSearchWebhooksWebhookIdKey() {
  return ['2', '/2/tweets/search/webhooks/:webhook_id', 'POST'] as const
}

export function usePost2TweetsSearchWebhooksWebhookId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['2']['tweets']['search']['webhooks'][':webhook_id']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2']['tweets']['search']['webhooks'][':webhook_id']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost2TweetsSearchWebhooksWebhookIdKey()
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
            (typeof client)['2']['tweets']['search']['webhooks'][':webhook_id']['$post']
          >
        },
      ) =>
        parseResponse(client['2'].tweets.search.webhooks[':webhook_id'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDelete2TweetsSearchWebhooksWebhookIdKey() {
  return ['2', '/2/tweets/search/webhooks/:webhook_id', 'DELETE'] as const
}

export function useDelete2TweetsSearchWebhooksWebhookId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2']['tweets']['search']['webhooks'][':webhook_id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2']['tweets']['search']['webhooks'][':webhook_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDelete2TweetsSearchWebhooksWebhookIdKey()
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
            (typeof client)['2']['tweets']['search']['webhooks'][':webhook_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['2'].tweets.search.webhooks[':webhook_id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGet2TweetsIdKey(
  args: InferRequestType<(typeof client)['2']['tweets'][':id']['$get']>,
) {
  return ['2', '/2/tweets/:id', args] as const
}

export function useGet2TweetsId<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['tweets'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['tweets'][':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGet2TweetsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['tweets'][':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].tweets[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet2TweetsId<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['tweets'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['tweets'][':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGet2TweetsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['tweets'][':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].tweets[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDelete2TweetsIdKey() {
  return ['2', '/2/tweets/:id', 'DELETE'] as const
}

export function useDelete2TweetsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['tweets'][':id']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2']['tweets'][':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDelete2TweetsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['2']['tweets'][':id']['$delete']> },
      ) => parseResponse(client['2'].tweets[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGet2TweetsIdLikingUsersKey(
  args: InferRequestType<(typeof client)['2']['tweets'][':id']['liking_users']['$get']>,
) {
  return ['2', '/2/tweets/:id/liking_users', args] as const
}

export function useGet2TweetsIdLikingUsers<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['tweets'][':id']['liking_users']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['tweets'][':id']['liking_users']['$get']>>
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
        ? getGet2TweetsIdLikingUsersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['tweets'][':id']['liking_users']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].tweets[':id'].liking_users.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet2TweetsIdLikingUsers<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['tweets'][':id']['liking_users']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['tweets'][':id']['liking_users']['$get']>>
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
        ? getGet2TweetsIdLikingUsersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['tweets'][':id']['liking_users']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].tweets[':id'].liking_users.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGet2TweetsIdQuoteTweetsKey(
  args: InferRequestType<(typeof client)['2']['tweets'][':id']['quote_tweets']['$get']>,
) {
  return ['2', '/2/tweets/:id/quote_tweets', args] as const
}

export function useGet2TweetsIdQuoteTweets<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['tweets'][':id']['quote_tweets']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['tweets'][':id']['quote_tweets']['$get']>>
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
        ? getGet2TweetsIdQuoteTweetsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['tweets'][':id']['quote_tweets']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].tweets[':id'].quote_tweets.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet2TweetsIdQuoteTweets<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['tweets'][':id']['quote_tweets']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['tweets'][':id']['quote_tweets']['$get']>>
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
        ? getGet2TweetsIdQuoteTweetsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['tweets'][':id']['quote_tweets']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].tweets[':id'].quote_tweets.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGet2TweetsIdRetweetedByKey(
  args: InferRequestType<(typeof client)['2']['tweets'][':id']['retweeted_by']['$get']>,
) {
  return ['2', '/2/tweets/:id/retweeted_by', args] as const
}

export function useGet2TweetsIdRetweetedBy<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['tweets'][':id']['retweeted_by']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['tweets'][':id']['retweeted_by']['$get']>>
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
        ? getGet2TweetsIdRetweetedByKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['tweets'][':id']['retweeted_by']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].tweets[':id'].retweeted_by.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet2TweetsIdRetweetedBy<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['tweets'][':id']['retweeted_by']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['tweets'][':id']['retweeted_by']['$get']>>
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
        ? getGet2TweetsIdRetweetedByKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['tweets'][':id']['retweeted_by']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].tweets[':id'].retweeted_by.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGet2TweetsIdRetweetsKey(
  args: InferRequestType<(typeof client)['2']['tweets'][':id']['retweets']['$get']>,
) {
  return ['2', '/2/tweets/:id/retweets', args] as const
}

export function useGet2TweetsIdRetweets<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['tweets'][':id']['retweets']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['tweets'][':id']['retweets']['$get']>>
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
        ? getGet2TweetsIdRetweetsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['tweets'][':id']['retweets']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].tweets[':id'].retweets.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet2TweetsIdRetweets<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['tweets'][':id']['retweets']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['tweets'][':id']['retweets']['$get']>>
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
        ? getGet2TweetsIdRetweetsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['tweets'][':id']['retweets']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].tweets[':id'].retweets.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPut2TweetsTweetIdHiddenKey() {
  return ['2', '/2/tweets/:tweet_id/hidden', 'PUT'] as const
}

export function usePut2TweetsTweetIdHidden<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2']['tweets'][':tweet_id']['hidden']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2']['tweets'][':tweet_id']['hidden']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPut2TweetsTweetIdHiddenKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['2']['tweets'][':tweet_id']['hidden']['$put']> },
      ) => parseResponse(client['2'].tweets[':tweet_id'].hidden.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGet2UsageCreditsKey() {
  return ['2', '/2/usage/credits'] as const
}

export function useGet2UsageCredits<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['usage']['credits']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGet2UsageCreditsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['usage']['credits']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].usage.credits.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet2UsageCredits<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['usage']['credits']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGet2UsageCreditsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['usage']['credits']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].usage.credits.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGet2UsageTweetsKey(
  args: InferRequestType<(typeof client)['2']['usage']['tweets']['$get']>,
) {
  return ['2', '/2/usage/tweets', args] as const
}

export function useGet2UsageTweets<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['usage']['tweets']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['usage']['tweets']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGet2UsageTweetsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['usage']['tweets']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].usage.tweets.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet2UsageTweets<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['usage']['tweets']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['usage']['tweets']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGet2UsageTweetsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['usage']['tweets']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].usage.tweets.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGet2UsersKey(args: InferRequestType<(typeof client)['2']['users']['$get']>) {
  return ['2', '/2/users', args] as const
}

export function useGet2Users<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['users']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['users']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGet2UsersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['users']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].users.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet2Users<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['users']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['users']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGet2UsersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['users']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].users.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGet2UsersByKey(
  args: InferRequestType<(typeof client)['2']['users']['by']['$get']>,
) {
  return ['2', '/2/users/by', args] as const
}

export function useGet2UsersBy<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['users']['by']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['users']['by']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGet2UsersByKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['users']['by']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].users.by.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet2UsersBy<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['users']['by']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['users']['by']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGet2UsersByKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['users']['by']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].users.by.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGet2UsersByUsernameUsernameKey(
  args: InferRequestType<(typeof client)['2']['users']['by']['username'][':username']['$get']>,
) {
  return ['2', '/2/users/by/username/:username', args] as const
}

export function useGet2UsersByUsernameUsername<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['users']['by']['username'][':username']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['2']['users']['by']['username'][':username']['$get']>
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
        ? getGet2UsersByUsernameUsernameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['2']['users']['by']['username'][':username']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['2'].users.by.username[':username'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet2UsersByUsernameUsername<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['users']['by']['username'][':username']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['2']['users']['by']['username'][':username']['$get']>
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
        ? getGet2UsersByUsernameUsernameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['2']['users']['by']['username'][':username']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['2'].users.by.username[':username'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGet2UsersComplianceStreamKey(
  args: InferRequestType<(typeof client)['2']['users']['compliance']['stream']['$get']>,
) {
  return ['2', '/2/users/compliance/stream', args] as const
}

export function useGet2UsersComplianceStream<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['users']['compliance']['stream']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['users']['compliance']['stream']['$get']>>
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
        ? getGet2UsersComplianceStreamKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['users']['compliance']['stream']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].users.compliance.stream.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet2UsersComplianceStream<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['users']['compliance']['stream']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['users']['compliance']['stream']['$get']>>
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
        ? getGet2UsersComplianceStreamKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['users']['compliance']['stream']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].users.compliance.stream.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGet2UsersMeKey(
  args: InferRequestType<(typeof client)['2']['users']['me']['$get']>,
) {
  return ['2', '/2/users/me', args] as const
}

export function useGet2UsersMe<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['users']['me']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['users']['me']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGet2UsersMeKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['users']['me']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].users.me.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet2UsersMe<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['users']['me']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['users']['me']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGet2UsersMeKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['users']['me']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].users.me.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGet2UsersMeFollowersKey(
  args: InferRequestType<(typeof client)['2']['users']['me']['followers']['$get']>,
) {
  return ['2', '/2/users/me/followers', args] as const
}

export function useGet2UsersMeFollowers<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['users']['me']['followers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['users']['me']['followers']['$get']>>
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
        ? getGet2UsersMeFollowersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['users']['me']['followers']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].users.me.followers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet2UsersMeFollowers<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['users']['me']['followers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['users']['me']['followers']['$get']>>
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
        ? getGet2UsersMeFollowersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['users']['me']['followers']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].users.me.followers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGet2UsersMeFollowingKey(
  args: InferRequestType<(typeof client)['2']['users']['me']['following']['$get']>,
) {
  return ['2', '/2/users/me/following', args] as const
}

export function useGet2UsersMeFollowing<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['users']['me']['following']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['users']['me']['following']['$get']>>
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
        ? getGet2UsersMeFollowingKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['users']['me']['following']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].users.me.following.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet2UsersMeFollowing<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['users']['me']['following']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['users']['me']['following']['$get']>>
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
        ? getGet2UsersMeFollowingKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['users']['me']['following']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].users.me.following.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGet2UsersPersonalizedTrendsKey(
  args: InferRequestType<(typeof client)['2']['users']['personalized_trends']['$get']>,
) {
  return ['2', '/2/users/personalized_trends', args] as const
}

export function useGet2UsersPersonalizedTrends<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['users']['personalized_trends']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['users']['personalized_trends']['$get']>>
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
        ? getGet2UsersPersonalizedTrendsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['users']['personalized_trends']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].users.personalized_trends.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet2UsersPersonalizedTrends<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['users']['personalized_trends']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['users']['personalized_trends']['$get']>>
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
        ? getGet2UsersPersonalizedTrendsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['users']['personalized_trends']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].users.personalized_trends.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGet2UsersPublicKeysKey(
  args: InferRequestType<(typeof client)['2']['users']['public_keys']['$get']>,
) {
  return ['2', '/2/users/public_keys', args] as const
}

export function useGet2UsersPublicKeys<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['users']['public_keys']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['users']['public_keys']['$get']>>
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
        ? getGet2UsersPublicKeysKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['users']['public_keys']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].users.public_keys.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet2UsersPublicKeys<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['users']['public_keys']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['users']['public_keys']['$get']>>
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
        ? getGet2UsersPublicKeysKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['users']['public_keys']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].users.public_keys.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGet2UsersRepostsOfMeKey(
  args: InferRequestType<(typeof client)['2']['users']['reposts_of_me']['$get']>,
) {
  return ['2', '/2/users/reposts_of_me', args] as const
}

export function useGet2UsersRepostsOfMe<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['users']['reposts_of_me']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['users']['reposts_of_me']['$get']>>
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
        ? getGet2UsersRepostsOfMeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['users']['reposts_of_me']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].users.reposts_of_me.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet2UsersRepostsOfMe<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['users']['reposts_of_me']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['users']['reposts_of_me']['$get']>>
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
        ? getGet2UsersRepostsOfMeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['users']['reposts_of_me']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].users.reposts_of_me.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGet2UsersSearchKey(
  args: InferRequestType<(typeof client)['2']['users']['search']['$get']>,
) {
  return ['2', '/2/users/search', args] as const
}

export function useGet2UsersSearch<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['users']['search']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['users']['search']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGet2UsersSearchKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['users']['search']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].users.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet2UsersSearch<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['users']['search']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['users']['search']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGet2UsersSearchKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['users']['search']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].users.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGet2UsersIdKey(
  args: InferRequestType<(typeof client)['2']['users'][':id']['$get']>,
) {
  return ['2', '/2/users/:id', args] as const
}

export function useGet2UsersId<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['users'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['users'][':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGet2UsersIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['users'][':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].users[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet2UsersId<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['users'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['users'][':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGet2UsersIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['users'][':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].users[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGet2UsersIdAffiliatesKey(
  args: InferRequestType<(typeof client)['2']['users'][':id']['affiliates']['$get']>,
) {
  return ['2', '/2/users/:id/affiliates', args] as const
}

export function useGet2UsersIdAffiliates<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['users'][':id']['affiliates']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['users'][':id']['affiliates']['$get']>>
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
        ? getGet2UsersIdAffiliatesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['users'][':id']['affiliates']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].users[':id'].affiliates.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet2UsersIdAffiliates<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['users'][':id']['affiliates']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['users'][':id']['affiliates']['$get']>>
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
        ? getGet2UsersIdAffiliatesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['users'][':id']['affiliates']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].users[':id'].affiliates.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGet2UsersIdBlockingKey(
  args: InferRequestType<(typeof client)['2']['users'][':id']['blocking']['$get']>,
) {
  return ['2', '/2/users/:id/blocking', args] as const
}

export function useGet2UsersIdBlocking<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['users'][':id']['blocking']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['users'][':id']['blocking']['$get']>>
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
        ? getGet2UsersIdBlockingKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['users'][':id']['blocking']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].users[':id'].blocking.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet2UsersIdBlocking<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['users'][':id']['blocking']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['users'][':id']['blocking']['$get']>>
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
        ? getGet2UsersIdBlockingKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['users'][':id']['blocking']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].users[':id'].blocking.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPost2UsersIdBlockingKey() {
  return ['2', '/2/users/:id/blocking', 'POST'] as const
}

export function usePost2UsersIdBlocking<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2']['users'][':id']['blocking']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2']['users'][':id']['blocking']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost2UsersIdBlockingKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['2']['users'][':id']['blocking']['$post']> },
      ) => parseResponse(client['2'].users[':id'].blocking.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGet2UsersIdBookmarksKey(
  args: InferRequestType<(typeof client)['2']['users'][':id']['bookmarks']['$get']>,
) {
  return ['2', '/2/users/:id/bookmarks', args] as const
}

export function useGet2UsersIdBookmarks<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['users'][':id']['bookmarks']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['users'][':id']['bookmarks']['$get']>>
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
        ? getGet2UsersIdBookmarksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['users'][':id']['bookmarks']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].users[':id'].bookmarks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet2UsersIdBookmarks<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['users'][':id']['bookmarks']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['users'][':id']['bookmarks']['$get']>>
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
        ? getGet2UsersIdBookmarksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['users'][':id']['bookmarks']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].users[':id'].bookmarks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPost2UsersIdBookmarksKey() {
  return ['2', '/2/users/:id/bookmarks', 'POST'] as const
}

export function usePost2UsersIdBookmarks<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2']['users'][':id']['bookmarks']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2']['users'][':id']['bookmarks']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost2UsersIdBookmarksKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['2']['users'][':id']['bookmarks']['$post']> },
      ) => parseResponse(client['2'].users[':id'].bookmarks.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGet2UsersIdBookmarksFoldersKey(
  args: InferRequestType<(typeof client)['2']['users'][':id']['bookmarks']['folders']['$get']>,
) {
  return ['2', '/2/users/:id/bookmarks/folders', args] as const
}

export function useGet2UsersIdBookmarksFolders<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['users'][':id']['bookmarks']['folders']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['2']['users'][':id']['bookmarks']['folders']['$get']>
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
        ? getGet2UsersIdBookmarksFoldersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['2']['users'][':id']['bookmarks']['folders']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['2'].users[':id'].bookmarks.folders.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet2UsersIdBookmarksFolders<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['users'][':id']['bookmarks']['folders']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['2']['users'][':id']['bookmarks']['folders']['$get']>
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
        ? getGet2UsersIdBookmarksFoldersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['2']['users'][':id']['bookmarks']['folders']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['2'].users[':id'].bookmarks.folders.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPost2UsersIdBookmarksFoldersKey() {
  return ['2', '/2/users/:id/bookmarks/folders', 'POST'] as const
}

export function usePost2UsersIdBookmarksFolders<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2']['users'][':id']['bookmarks']['folders']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2']['users'][':id']['bookmarks']['folders']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost2UsersIdBookmarksFoldersKey()
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
            (typeof client)['2']['users'][':id']['bookmarks']['folders']['$post']
          >
        },
      ) => parseResponse(client['2'].users[':id'].bookmarks.folders.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGet2UsersIdBookmarksFoldersFolderIdKey(
  args: InferRequestType<
    (typeof client)['2']['users'][':id']['bookmarks']['folders'][':folder_id']['$get']
  >,
) {
  return ['2', '/2/users/:id/bookmarks/folders/:folder_id', args] as const
}

export function useGet2UsersIdBookmarksFoldersFolderId<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2']['users'][':id']['bookmarks']['folders'][':folder_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2']['users'][':id']['bookmarks']['folders'][':folder_id']['$get']
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
        ? getGet2UsersIdBookmarksFoldersFolderIdKey(args)
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
                (typeof client)['2']['users'][':id']['bookmarks']['folders'][':folder_id']['$get']
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
          client['2'].users[':id'].bookmarks.folders[':folder_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet2UsersIdBookmarksFoldersFolderId<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2']['users'][':id']['bookmarks']['folders'][':folder_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2']['users'][':id']['bookmarks']['folders'][':folder_id']['$get']
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
        ? getGet2UsersIdBookmarksFoldersFolderIdKey(args)
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
                (typeof client)['2']['users'][':id']['bookmarks']['folders'][':folder_id']['$get']
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
          client['2'].users[':id'].bookmarks.folders[':folder_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDelete2UsersIdBookmarksTweetIdKey() {
  return ['2', '/2/users/:id/bookmarks/:tweet_id', 'DELETE'] as const
}

export function useDelete2UsersIdBookmarksTweetId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['2']['users'][':id']['bookmarks'][':tweet_id']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2']['users'][':id']['bookmarks'][':tweet_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDelete2UsersIdBookmarksTweetIdKey()
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
            (typeof client)['2']['users'][':id']['bookmarks'][':tweet_id']['$delete']
          >
        },
      ) =>
        parseResponse(client['2'].users[':id'].bookmarks[':tweet_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGet2UsersIdBroadcastsKey(
  args: InferRequestType<(typeof client)['2']['users'][':id']['broadcasts']['$get']>,
) {
  return ['2', '/2/users/:id/broadcasts', args] as const
}

export function useGet2UsersIdBroadcasts<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['users'][':id']['broadcasts']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['users'][':id']['broadcasts']['$get']>>
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
        ? getGet2UsersIdBroadcastsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['users'][':id']['broadcasts']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].users[':id'].broadcasts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet2UsersIdBroadcasts<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['users'][':id']['broadcasts']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['users'][':id']['broadcasts']['$get']>>
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
        ? getGet2UsersIdBroadcastsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['users'][':id']['broadcasts']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].users[':id'].broadcasts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPost2UsersIdBroadcastsKey() {
  return ['2', '/2/users/:id/broadcasts', 'POST'] as const
}

export function usePost2UsersIdBroadcasts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2']['users'][':id']['broadcasts']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2']['users'][':id']['broadcasts']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost2UsersIdBroadcastsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['2']['users'][':id']['broadcasts']['$post']> },
      ) => parseResponse(client['2'].users[':id'].broadcasts.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGet2UsersIdBroadcastsBroadcastIdKey(
  args: InferRequestType<
    (typeof client)['2']['users'][':id']['broadcasts'][':broadcast_id']['$get']
  >,
) {
  return ['2', '/2/users/:id/broadcasts/:broadcast_id', args] as const
}

export function useGet2UsersIdBroadcastsBroadcastId<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2']['users'][':id']['broadcasts'][':broadcast_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2']['users'][':id']['broadcasts'][':broadcast_id']['$get']
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
        ? getGet2UsersIdBroadcastsBroadcastIdKey(args)
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
                (typeof client)['2']['users'][':id']['broadcasts'][':broadcast_id']['$get']
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
          client['2'].users[':id'].broadcasts[':broadcast_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet2UsersIdBroadcastsBroadcastId<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2']['users'][':id']['broadcasts'][':broadcast_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2']['users'][':id']['broadcasts'][':broadcast_id']['$get']
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
        ? getGet2UsersIdBroadcastsBroadcastIdKey(args)
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
                (typeof client)['2']['users'][':id']['broadcasts'][':broadcast_id']['$get']
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
          client['2'].users[':id'].broadcasts[':broadcast_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDelete2UsersIdBroadcastsBroadcastIdKey() {
  return ['2', '/2/users/:id/broadcasts/:broadcast_id', 'DELETE'] as const
}

export function useDelete2UsersIdBroadcastsBroadcastId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2']['users'][':id']['broadcasts'][':broadcast_id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2']['users'][':id']['broadcasts'][':broadcast_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDelete2UsersIdBroadcastsBroadcastIdKey()
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
            (typeof client)['2']['users'][':id']['broadcasts'][':broadcast_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['2'].users[':id'].broadcasts[':broadcast_id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPut2UsersIdBroadcastsBroadcastIdStateKey() {
  return ['2', '/2/users/:id/broadcasts/:broadcast_id/state', 'PUT'] as const
}

export function usePut2UsersIdBroadcastsBroadcastIdState<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2']['users'][':id']['broadcasts'][':broadcast_id']['state']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['2']['users'][':id']['broadcasts'][':broadcast_id']['state']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPut2UsersIdBroadcastsBroadcastIdStateKey()
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
            (typeof client)['2']['users'][':id']['broadcasts'][':broadcast_id']['state']['$put']
          >
        },
      ) =>
        parseResponse(
          client['2'].users[':id'].broadcasts[':broadcast_id'].state.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPost2UsersIdDmBlockKey() {
  return ['2', '/2/users/:id/dm/block', 'POST'] as const
}

export function usePost2UsersIdDmBlock<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2']['users'][':id']['dm']['block']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2']['users'][':id']['dm']['block']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost2UsersIdDmBlockKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['2']['users'][':id']['dm']['block']['$post']> },
      ) => parseResponse(client['2'].users[':id'].dm.block.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPost2UsersIdDmUnblockKey() {
  return ['2', '/2/users/:id/dm/unblock', 'POST'] as const
}

export function usePost2UsersIdDmUnblock<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2']['users'][':id']['dm']['unblock']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2']['users'][':id']['dm']['unblock']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost2UsersIdDmUnblockKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['2']['users'][':id']['dm']['unblock']['$post']>
        },
      ) => parseResponse(client['2'].users[':id'].dm.unblock.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGet2UsersIdFollowedListsKey(
  args: InferRequestType<(typeof client)['2']['users'][':id']['followed_lists']['$get']>,
) {
  return ['2', '/2/users/:id/followed_lists', args] as const
}

export function useGet2UsersIdFollowedLists<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['users'][':id']['followed_lists']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['users'][':id']['followed_lists']['$get']>>
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
        ? getGet2UsersIdFollowedListsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['users'][':id']['followed_lists']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].users[':id'].followed_lists.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet2UsersIdFollowedLists<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['users'][':id']['followed_lists']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['users'][':id']['followed_lists']['$get']>>
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
        ? getGet2UsersIdFollowedListsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['users'][':id']['followed_lists']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].users[':id'].followed_lists.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPost2UsersIdFollowedListsKey() {
  return ['2', '/2/users/:id/followed_lists', 'POST'] as const
}

export function usePost2UsersIdFollowedLists<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2']['users'][':id']['followed_lists']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2']['users'][':id']['followed_lists']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost2UsersIdFollowedListsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['2']['users'][':id']['followed_lists']['$post']>
        },
      ) => parseResponse(client['2'].users[':id'].followed_lists.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDelete2UsersIdFollowedListsListIdKey() {
  return ['2', '/2/users/:id/followed_lists/:list_id', 'DELETE'] as const
}

export function useDelete2UsersIdFollowedListsListId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2']['users'][':id']['followed_lists'][':list_id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2']['users'][':id']['followed_lists'][':list_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDelete2UsersIdFollowedListsListIdKey()
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
            (typeof client)['2']['users'][':id']['followed_lists'][':list_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['2'].users[':id'].followed_lists[':list_id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGet2UsersIdFollowersKey(
  args: InferRequestType<(typeof client)['2']['users'][':id']['followers']['$get']>,
) {
  return ['2', '/2/users/:id/followers', args] as const
}

export function useGet2UsersIdFollowers<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['users'][':id']['followers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['users'][':id']['followers']['$get']>>
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
        ? getGet2UsersIdFollowersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['users'][':id']['followers']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].users[':id'].followers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet2UsersIdFollowers<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['users'][':id']['followers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['users'][':id']['followers']['$get']>>
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
        ? getGet2UsersIdFollowersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['users'][':id']['followers']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].users[':id'].followers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGet2UsersIdFollowingKey(
  args: InferRequestType<(typeof client)['2']['users'][':id']['following']['$get']>,
) {
  return ['2', '/2/users/:id/following', args] as const
}

export function useGet2UsersIdFollowing<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['users'][':id']['following']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['users'][':id']['following']['$get']>>
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
        ? getGet2UsersIdFollowingKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['users'][':id']['following']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].users[':id'].following.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet2UsersIdFollowing<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['users'][':id']['following']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['users'][':id']['following']['$get']>>
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
        ? getGet2UsersIdFollowingKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['users'][':id']['following']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].users[':id'].following.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPost2UsersIdFollowingKey() {
  return ['2', '/2/users/:id/following', 'POST'] as const
}

export function usePost2UsersIdFollowing<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2']['users'][':id']['following']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2']['users'][':id']['following']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost2UsersIdFollowingKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['2']['users'][':id']['following']['$post']> },
      ) => parseResponse(client['2'].users[':id'].following.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGet2UsersIdLikedTweetsKey(
  args: InferRequestType<(typeof client)['2']['users'][':id']['liked_tweets']['$get']>,
) {
  return ['2', '/2/users/:id/liked_tweets', args] as const
}

export function useGet2UsersIdLikedTweets<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['users'][':id']['liked_tweets']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['users'][':id']['liked_tweets']['$get']>>
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
        ? getGet2UsersIdLikedTweetsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['users'][':id']['liked_tweets']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].users[':id'].liked_tweets.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet2UsersIdLikedTweets<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['users'][':id']['liked_tweets']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['users'][':id']['liked_tweets']['$get']>>
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
        ? getGet2UsersIdLikedTweetsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['users'][':id']['liked_tweets']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].users[':id'].liked_tweets.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPost2UsersIdLikesKey() {
  return ['2', '/2/users/:id/likes', 'POST'] as const
}

export function usePost2UsersIdLikes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2']['users'][':id']['likes']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2']['users'][':id']['likes']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost2UsersIdLikesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['2']['users'][':id']['likes']['$post']> },
      ) => parseResponse(client['2'].users[':id'].likes.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDelete2UsersIdLikesTweetIdKey() {
  return ['2', '/2/users/:id/likes/:tweet_id', 'DELETE'] as const
}

export function useDelete2UsersIdLikesTweetId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2']['users'][':id']['likes'][':tweet_id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2']['users'][':id']['likes'][':tweet_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDelete2UsersIdLikesTweetIdKey()
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
            (typeof client)['2']['users'][':id']['likes'][':tweet_id']['$delete']
          >
        },
      ) => parseResponse(client['2'].users[':id'].likes[':tweet_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGet2UsersIdListMembershipsKey(
  args: InferRequestType<(typeof client)['2']['users'][':id']['list_memberships']['$get']>,
) {
  return ['2', '/2/users/:id/list_memberships', args] as const
}

export function useGet2UsersIdListMemberships<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['users'][':id']['list_memberships']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['users'][':id']['list_memberships']['$get']>>
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
        ? getGet2UsersIdListMembershipsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['users'][':id']['list_memberships']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['2'].users[':id'].list_memberships.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet2UsersIdListMemberships<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['users'][':id']['list_memberships']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['users'][':id']['list_memberships']['$get']>>
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
        ? getGet2UsersIdListMembershipsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['users'][':id']['list_memberships']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['2'].users[':id'].list_memberships.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGet2UsersIdMentionsKey(
  args: InferRequestType<(typeof client)['2']['users'][':id']['mentions']['$get']>,
) {
  return ['2', '/2/users/:id/mentions', args] as const
}

export function useGet2UsersIdMentions<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['users'][':id']['mentions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['users'][':id']['mentions']['$get']>>
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
        ? getGet2UsersIdMentionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['users'][':id']['mentions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].users[':id'].mentions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet2UsersIdMentions<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['users'][':id']['mentions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['users'][':id']['mentions']['$get']>>
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
        ? getGet2UsersIdMentionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['users'][':id']['mentions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].users[':id'].mentions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGet2UsersIdMutingKey(
  args: InferRequestType<(typeof client)['2']['users'][':id']['muting']['$get']>,
) {
  return ['2', '/2/users/:id/muting', args] as const
}

export function useGet2UsersIdMuting<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['users'][':id']['muting']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['users'][':id']['muting']['$get']>>
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
    enabled !== false ? (customKey === undefined ? getGet2UsersIdMutingKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['users'][':id']['muting']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].users[':id'].muting.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet2UsersIdMuting<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['users'][':id']['muting']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['users'][':id']['muting']['$get']>>
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
    enabled !== false ? (customKey === undefined ? getGet2UsersIdMutingKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['users'][':id']['muting']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].users[':id'].muting.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPost2UsersIdMutingKey() {
  return ['2', '/2/users/:id/muting', 'POST'] as const
}

export function usePost2UsersIdMuting<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2']['users'][':id']['muting']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2']['users'][':id']['muting']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost2UsersIdMutingKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['2']['users'][':id']['muting']['$post']> },
      ) => parseResponse(client['2'].users[':id'].muting.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGet2UsersIdOwnedListsKey(
  args: InferRequestType<(typeof client)['2']['users'][':id']['owned_lists']['$get']>,
) {
  return ['2', '/2/users/:id/owned_lists', args] as const
}

export function useGet2UsersIdOwnedLists<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['users'][':id']['owned_lists']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['users'][':id']['owned_lists']['$get']>>
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
        ? getGet2UsersIdOwnedListsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['users'][':id']['owned_lists']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].users[':id'].owned_lists.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet2UsersIdOwnedLists<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['users'][':id']['owned_lists']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['users'][':id']['owned_lists']['$get']>>
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
        ? getGet2UsersIdOwnedListsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['users'][':id']['owned_lists']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].users[':id'].owned_lists.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGet2UsersIdPinnedListsKey(
  args: InferRequestType<(typeof client)['2']['users'][':id']['pinned_lists']['$get']>,
) {
  return ['2', '/2/users/:id/pinned_lists', args] as const
}

export function useGet2UsersIdPinnedLists<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['users'][':id']['pinned_lists']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['users'][':id']['pinned_lists']['$get']>>
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
        ? getGet2UsersIdPinnedListsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['users'][':id']['pinned_lists']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].users[':id'].pinned_lists.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet2UsersIdPinnedLists<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['users'][':id']['pinned_lists']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['users'][':id']['pinned_lists']['$get']>>
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
        ? getGet2UsersIdPinnedListsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['users'][':id']['pinned_lists']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].users[':id'].pinned_lists.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPost2UsersIdPinnedListsKey() {
  return ['2', '/2/users/:id/pinned_lists', 'POST'] as const
}

export function usePost2UsersIdPinnedLists<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2']['users'][':id']['pinned_lists']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2']['users'][':id']['pinned_lists']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost2UsersIdPinnedListsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['2']['users'][':id']['pinned_lists']['$post']> },
      ) => parseResponse(client['2'].users[':id'].pinned_lists.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDelete2UsersIdPinnedListsListIdKey() {
  return ['2', '/2/users/:id/pinned_lists/:list_id', 'DELETE'] as const
}

export function useDelete2UsersIdPinnedListsListId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['2']['users'][':id']['pinned_lists'][':list_id']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2']['users'][':id']['pinned_lists'][':list_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDelete2UsersIdPinnedListsListIdKey()
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
            (typeof client)['2']['users'][':id']['pinned_lists'][':list_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['2'].users[':id'].pinned_lists[':list_id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGet2UsersIdPublicKeysKey(
  args: InferRequestType<(typeof client)['2']['users'][':id']['public_keys']['$get']>,
) {
  return ['2', '/2/users/:id/public_keys', args] as const
}

export function useGet2UsersIdPublicKeys<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['users'][':id']['public_keys']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['users'][':id']['public_keys']['$get']>>
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
        ? getGet2UsersIdPublicKeysKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['users'][':id']['public_keys']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].users[':id'].public_keys.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet2UsersIdPublicKeys<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['users'][':id']['public_keys']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['users'][':id']['public_keys']['$get']>>
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
        ? getGet2UsersIdPublicKeysKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['users'][':id']['public_keys']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].users[':id'].public_keys.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPost2UsersIdPublicKeysKey() {
  return ['2', '/2/users/:id/public_keys', 'POST'] as const
}

export function usePost2UsersIdPublicKeys<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2']['users'][':id']['public_keys']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2']['users'][':id']['public_keys']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost2UsersIdPublicKeysKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['2']['users'][':id']['public_keys']['$post']> },
      ) => parseResponse(client['2'].users[':id'].public_keys.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPost2UsersIdRetweetsKey() {
  return ['2', '/2/users/:id/retweets', 'POST'] as const
}

export function usePost2UsersIdRetweets<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2']['users'][':id']['retweets']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2']['users'][':id']['retweets']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost2UsersIdRetweetsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['2']['users'][':id']['retweets']['$post']> },
      ) => parseResponse(client['2'].users[':id'].retweets.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDelete2UsersIdRetweetsSourceTweetIdKey() {
  return ['2', '/2/users/:id/retweets/:source_tweet_id', 'DELETE'] as const
}

export function useDelete2UsersIdRetweetsSourceTweetId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2']['users'][':id']['retweets'][':source_tweet_id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['2']['users'][':id']['retweets'][':source_tweet_id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDelete2UsersIdRetweetsSourceTweetIdKey()
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
            (typeof client)['2']['users'][':id']['retweets'][':source_tweet_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['2'].users[':id'].retweets[':source_tweet_id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGet2UsersIdSourcesKey(
  args: InferRequestType<(typeof client)['2']['users'][':id']['sources']['$get']>,
) {
  return ['2', '/2/users/:id/sources', args] as const
}

export function useGet2UsersIdSources<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['users'][':id']['sources']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['users'][':id']['sources']['$get']>>
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
        ? getGet2UsersIdSourcesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['users'][':id']['sources']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].users[':id'].sources.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet2UsersIdSources<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['users'][':id']['sources']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['users'][':id']['sources']['$get']>>
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
        ? getGet2UsersIdSourcesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['users'][':id']['sources']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].users[':id'].sources.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPost2UsersIdSourcesKey() {
  return ['2', '/2/users/:id/sources', 'POST'] as const
}

export function usePost2UsersIdSources<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2']['users'][':id']['sources']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2']['users'][':id']['sources']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost2UsersIdSourcesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['2']['users'][':id']['sources']['$post']> },
      ) => parseResponse(client['2'].users[':id'].sources.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGet2UsersIdSourcesSourceIdKey(
  args: InferRequestType<(typeof client)['2']['users'][':id']['sources'][':source_id']['$get']>,
) {
  return ['2', '/2/users/:id/sources/:source_id', args] as const
}

export function useGet2UsersIdSourcesSourceId<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['users'][':id']['sources'][':source_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['2']['users'][':id']['sources'][':source_id']['$get']>
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
        ? getGet2UsersIdSourcesSourceIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['2']['users'][':id']['sources'][':source_id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['2'].users[':id'].sources[':source_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet2UsersIdSourcesSourceId<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['users'][':id']['sources'][':source_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['2']['users'][':id']['sources'][':source_id']['$get']>
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
        ? getGet2UsersIdSourcesSourceIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['2']['users'][':id']['sources'][':source_id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['2'].users[':id'].sources[':source_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPut2UsersIdSourcesSourceIdKey() {
  return ['2', '/2/users/:id/sources/:source_id', 'PUT'] as const
}

export function usePut2UsersIdSourcesSourceId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2']['users'][':id']['sources'][':source_id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2']['users'][':id']['sources'][':source_id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPut2UsersIdSourcesSourceIdKey()
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
            (typeof client)['2']['users'][':id']['sources'][':source_id']['$put']
          >
        },
      ) => parseResponse(client['2'].users[':id'].sources[':source_id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDelete2UsersIdSourcesSourceIdKey() {
  return ['2', '/2/users/:id/sources/:source_id', 'DELETE'] as const
}

export function useDelete2UsersIdSourcesSourceId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['2']['users'][':id']['sources'][':source_id']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2']['users'][':id']['sources'][':source_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDelete2UsersIdSourcesSourceIdKey()
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
            (typeof client)['2']['users'][':id']['sources'][':source_id']['$delete']
          >
        },
      ) =>
        parseResponse(client['2'].users[':id'].sources[':source_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGet2UsersIdTimelinesReverseChronologicalKey(
  args: InferRequestType<
    (typeof client)['2']['users'][':id']['timelines']['reverse_chronological']['$get']
  >,
) {
  return ['2', '/2/users/:id/timelines/reverse_chronological', args] as const
}

export function useGet2UsersIdTimelinesReverseChronological<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2']['users'][':id']['timelines']['reverse_chronological']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2']['users'][':id']['timelines']['reverse_chronological']['$get']
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
        ? getGet2UsersIdTimelinesReverseChronologicalKey(args)
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
                (typeof client)['2']['users'][':id']['timelines']['reverse_chronological']['$get']
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
          client['2'].users[':id'].timelines.reverse_chronological.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet2UsersIdTimelinesReverseChronological<TError = unknown>(
  args: InferRequestType<
    (typeof client)['2']['users'][':id']['timelines']['reverse_chronological']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['2']['users'][':id']['timelines']['reverse_chronological']['$get']
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
        ? getGet2UsersIdTimelinesReverseChronologicalKey(args)
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
                (typeof client)['2']['users'][':id']['timelines']['reverse_chronological']['$get']
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
          client['2'].users[':id'].timelines.reverse_chronological.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGet2UsersIdTweetsKey(
  args: InferRequestType<(typeof client)['2']['users'][':id']['tweets']['$get']>,
) {
  return ['2', '/2/users/:id/tweets', args] as const
}

export function useGet2UsersIdTweets<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['users'][':id']['tweets']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['users'][':id']['tweets']['$get']>>
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
    enabled !== false ? (customKey === undefined ? getGet2UsersIdTweetsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['users'][':id']['tweets']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].users[':id'].tweets.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet2UsersIdTweets<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['users'][':id']['tweets']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['users'][':id']['tweets']['$get']>>
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
    enabled !== false ? (customKey === undefined ? getGet2UsersIdTweetsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['2']['users'][':id']['tweets']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].users[':id'].tweets.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDelete2UsersSourceUserIdBlockingTargetUserIdKey() {
  return ['2', '/2/users/:source_user_id/blocking/:target_user_id', 'DELETE'] as const
}

export function useDelete2UsersSourceUserIdBlockingTargetUserId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2']['users'][':source_user_id']['blocking'][':target_user_id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['2']['users'][':source_user_id']['blocking'][':target_user_id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDelete2UsersSourceUserIdBlockingTargetUserIdKey()
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
            (typeof client)['2']['users'][':source_user_id']['blocking'][':target_user_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['2'].users[':source_user_id'].blocking[':target_user_id'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDelete2UsersSourceUserIdFollowingTargetUserIdKey() {
  return ['2', '/2/users/:source_user_id/following/:target_user_id', 'DELETE'] as const
}

export function useDelete2UsersSourceUserIdFollowingTargetUserId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2']['users'][':source_user_id']['following'][':target_user_id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['2']['users'][':source_user_id']['following'][':target_user_id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDelete2UsersSourceUserIdFollowingTargetUserIdKey()
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
            (typeof client)['2']['users'][':source_user_id']['following'][':target_user_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['2'].users[':source_user_id'].following[':target_user_id'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDelete2UsersSourceUserIdMutingTargetUserIdKey() {
  return ['2', '/2/users/:source_user_id/muting/:target_user_id', 'DELETE'] as const
}

export function useDelete2UsersSourceUserIdMutingTargetUserId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['2']['users'][':source_user_id']['muting'][':target_user_id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['2']['users'][':source_user_id']['muting'][':target_user_id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDelete2UsersSourceUserIdMutingTargetUserIdKey()
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
            (typeof client)['2']['users'][':source_user_id']['muting'][':target_user_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['2'].users[':source_user_id'].muting[':target_user_id'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGet2WebhooksKey(
  args: InferRequestType<(typeof client)['2']['webhooks']['$get']>,
) {
  return ['2', '/2/webhooks', args] as const
}

export function useGet2Webhooks<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['webhooks']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['webhooks']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGet2WebhooksKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['webhooks']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].webhooks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet2Webhooks<TError = unknown>(
  args: InferRequestType<(typeof client)['2']['webhooks']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['webhooks']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGet2WebhooksKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['webhooks']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['2'].webhooks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPost2WebhooksKey() {
  return ['2', '/2/webhooks', 'POST'] as const
}

export function usePost2Webhooks<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['webhooks']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2']['webhooks']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost2WebhooksKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['2']['webhooks']['$post']> },
      ) => parseResponse(client['2'].webhooks.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPost2WebhooksReplayKey() {
  return ['2', '/2/webhooks/replay', 'POST'] as const
}

export function usePost2WebhooksReplay<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2']['webhooks']['replay']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2']['webhooks']['replay']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPost2WebhooksReplayKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['2']['webhooks']['replay']['$post']> },
      ) => parseResponse(client['2'].webhooks.replay.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPut2WebhooksWebhookIdKey() {
  return ['2', '/2/webhooks/:webhook_id', 'PUT'] as const
}

export function usePut2WebhooksWebhookId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2']['webhooks'][':webhook_id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2']['webhooks'][':webhook_id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPut2WebhooksWebhookIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['2']['webhooks'][':webhook_id']['$put']> },
      ) => parseResponse(client['2'].webhooks[':webhook_id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDelete2WebhooksWebhookIdKey() {
  return ['2', '/2/webhooks/:webhook_id', 'DELETE'] as const
}

export function useDelete2WebhooksWebhookId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2']['webhooks'][':webhook_id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['2']['webhooks'][':webhook_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDelete2WebhooksWebhookIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['2']['webhooks'][':webhook_id']['$delete']> },
      ) => parseResponse(client['2'].webhooks[':webhook_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
