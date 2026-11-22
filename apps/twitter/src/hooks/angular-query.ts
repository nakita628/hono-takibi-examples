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

export function get_2Key() {
  return ['2'] as const
}

export function get2AccountQueryKey() {
  return ['2', '/2/account'] as const
}

export function get2AccountQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['account']['$get']>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['account']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof get2AccountQueryKey>
  >({
    queryKey: get2AccountQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client['2'].account.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function inject2Account<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['account']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['account']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof get2AccountQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...get2AccountQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getPost2AccountMutationKey() {
  return ['2', '/2/account', 'POST'] as const
}

export function getPost2AccountMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['account']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['2']['account']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPost2AccountMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['2']['account']['$post']>) {
      return parseResponse(client['2'].account.$post(args, options))
    },
  })
}

export function injectPost2Account<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['account']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)['2']['account']['$post']>,
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
    const mutationDefaults = getPost2AccountMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function get2AccountActivitySubscriptionsCountQueryKey() {
  return ['2', '/2/account_activity/subscriptions/count'] as const
}

export function get2AccountActivitySubscriptionsCountQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['2']['account_activity']['subscriptions']['count']['$get']>
        >
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
            ReturnType<(typeof client)['2']['account_activity']['subscriptions']['count']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2AccountActivitySubscriptionsCountQueryKey>
  >({
    queryKey: get2AccountActivitySubscriptionsCountQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client['2'].account_activity.subscriptions.count.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function inject2AccountActivitySubscriptionsCount<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['2']['account_activity']['subscriptions']['count']['$get']>
        >
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
                ReturnType<
                  (typeof client)['2']['account_activity']['subscriptions']['count']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get2AccountActivitySubscriptionsCountQueryKey>
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
      ...get2AccountActivitySubscriptionsCountQueryOptions<TData, TError>(clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function get2AccountActivityWebhooksWebhookIdSubscriptionsAllQueryKey(
  args: InferRequestType<
    (typeof client)['2']['account_activity']['webhooks'][':webhook_id']['subscriptions']['all']['$get']
  >,
) {
  return ['2', '/2/account_activity/webhooks/:webhook_id/subscriptions/all', args] as const
}

export function get2AccountActivityWebhooksWebhookIdSubscriptionsAllQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2']['account_activity']['webhooks'][':webhook_id']['subscriptions']['all']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof get2AccountActivityWebhooksWebhookIdSubscriptionsAllQueryKey>
  >({
    queryKey: get2AccountActivityWebhooksWebhookIdSubscriptionsAllQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2'].account_activity.webhooks[':webhook_id'].subscriptions.all.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function inject2AccountActivityWebhooksWebhookIdSubscriptionsAll<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['2']['account_activity']['webhooks'][':webhook_id']['subscriptions']['all']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof get2AccountActivityWebhooksWebhookIdSubscriptionsAllQueryKey>
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
      ...get2AccountActivityWebhooksWebhookIdSubscriptionsAllQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPost2AccountActivityWebhooksWebhookIdSubscriptionsAllMutationKey() {
  return ['2', '/2/account_activity/webhooks/:webhook_id/subscriptions/all', 'POST'] as const
}

export function getPost2AccountActivityWebhooksWebhookIdSubscriptionsAllMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['2']['account_activity']['webhooks'][':webhook_id']['subscriptions']['all']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPost2AccountActivityWebhooksWebhookIdSubscriptionsAllMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2']['account_activity']['webhooks'][':webhook_id']['subscriptions']['all']['$post']
      >,
    ) {
      return parseResponse(
        client['2'].account_activity.webhooks[':webhook_id'].subscriptions.all.$post(args, options),
      )
    },
  })
}

export function injectPost2AccountActivityWebhooksWebhookIdSubscriptionsAll<
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
                  (typeof client)['2']['account_activity']['webhooks'][':webhook_id']['subscriptions']['all']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['2']['account_activity']['webhooks'][':webhook_id']['subscriptions']['all']['$post']
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
      getPost2AccountActivityWebhooksWebhookIdSubscriptionsAllMutationOptions<
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

export function get2AccountActivityWebhooksWebhookIdSubscriptionsAllListQueryKey(
  args: InferRequestType<
    (typeof client)['2']['account_activity']['webhooks'][':webhook_id']['subscriptions']['all']['list']['$get']
  >,
) {
  return ['2', '/2/account_activity/webhooks/:webhook_id/subscriptions/all/list', args] as const
}

export function get2AccountActivityWebhooksWebhookIdSubscriptionsAllListQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2']['account_activity']['webhooks'][':webhook_id']['subscriptions']['all']['list']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof get2AccountActivityWebhooksWebhookIdSubscriptionsAllListQueryKey>
  >({
    queryKey: get2AccountActivityWebhooksWebhookIdSubscriptionsAllListQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2'].account_activity.webhooks[':webhook_id'].subscriptions.all.list.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function inject2AccountActivityWebhooksWebhookIdSubscriptionsAllList<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['2']['account_activity']['webhooks'][':webhook_id']['subscriptions']['all']['list']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof get2AccountActivityWebhooksWebhookIdSubscriptionsAllListQueryKey>
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
      ...get2AccountActivityWebhooksWebhookIdSubscriptionsAllListQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getDelete2AccountActivityWebhooksWebhookIdSubscriptionsUserIdAllMutationKey() {
  return [
    '2',
    '/2/account_activity/webhooks/:webhook_id/subscriptions/:user_id/all',
    'DELETE',
  ] as const
}

export function getDelete2AccountActivityWebhooksWebhookIdSubscriptionsUserIdAllMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['2']['account_activity']['webhooks'][':webhook_id']['subscriptions'][':user_id']['all']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDelete2AccountActivityWebhooksWebhookIdSubscriptionsUserIdAllMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2']['account_activity']['webhooks'][':webhook_id']['subscriptions'][':user_id']['all']['$delete']
      >,
    ) {
      return parseResponse(
        client['2'].account_activity.webhooks[':webhook_id'].subscriptions[':user_id'].all.$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function injectDelete2AccountActivityWebhooksWebhookIdSubscriptionsUserIdAll<
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
                  (typeof client)['2']['account_activity']['webhooks'][':webhook_id']['subscriptions'][':user_id']['all']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['2']['account_activity']['webhooks'][':webhook_id']['subscriptions'][':user_id']['all']['$delete']
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
      getDelete2AccountActivityWebhooksWebhookIdSubscriptionsUserIdAllMutationOptions<
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

export function get2ActivityStreamQueryKey(
  args: InferRequestType<(typeof client)['2']['activity']['stream']['$get']>,
) {
  return ['2', '/2/activity/stream', args] as const
}

export function get2ActivityStreamQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['activity']['stream']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2']['activity']['stream']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2']['activity']['stream']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2ActivityStreamQueryKey>
  >({
    queryKey: get2ActivityStreamQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2'].activity.stream.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function inject2ActivityStream<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['activity']['stream']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['2']['activity']['stream']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['2']['activity']['stream']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get2ActivityStreamQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...get2ActivityStreamQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function get2ActivitySubscriptionsQueryKey(
  args: InferRequestType<(typeof client)['2']['activity']['subscriptions']['$get']>,
) {
  return ['2', '/2/activity/subscriptions', args] as const
}

export function get2ActivitySubscriptionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['activity']['subscriptions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2']['activity']['subscriptions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2']['activity']['subscriptions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2ActivitySubscriptionsQueryKey>
  >({
    queryKey: get2ActivitySubscriptionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2'].activity.subscriptions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function inject2ActivitySubscriptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['activity']['subscriptions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['2']['activity']['subscriptions']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['2']['activity']['subscriptions']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get2ActivitySubscriptionsQueryKey>
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
      ...get2ActivitySubscriptionsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPost2ActivitySubscriptionsMutationKey() {
  return ['2', '/2/activity/subscriptions', 'POST'] as const
}

export function getPost2ActivitySubscriptionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2']['activity']['subscriptions']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['2']['activity']['subscriptions']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPost2ActivitySubscriptionsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['2']['activity']['subscriptions']['$post']>,
    ) {
      return parseResponse(client['2'].activity.subscriptions.$post(args, options))
    },
  })
}

export function injectPost2ActivitySubscriptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['2']['activity']['subscriptions']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['2']['activity']['subscriptions']['$post']>,
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
    const mutationDefaults = getPost2ActivitySubscriptionsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDelete2ActivitySubscriptionsMutationKey() {
  return ['2', '/2/activity/subscriptions', 'DELETE'] as const
}

export function getDelete2ActivitySubscriptionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2']['activity']['subscriptions']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['2']['activity']['subscriptions']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDelete2ActivitySubscriptionsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['2']['activity']['subscriptions']['$delete']>,
    ) {
      return parseResponse(client['2'].activity.subscriptions.$delete(args, options))
    },
  })
}

export function injectDelete2ActivitySubscriptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['2']['activity']['subscriptions']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['2']['activity']['subscriptions']['$delete']>,
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
    const mutationDefaults = getDelete2ActivitySubscriptionsMutationOptions<
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

export function getPut2ActivitySubscriptionsSubscriptionIdMutationKey() {
  return ['2', '/2/activity/subscriptions/:subscription_id', 'PUT'] as const
}

export function getPut2ActivitySubscriptionsSubscriptionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['2']['activity']['subscriptions'][':subscription_id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPut2ActivitySubscriptionsSubscriptionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2']['activity']['subscriptions'][':subscription_id']['$put']
      >,
    ) {
      return parseResponse(
        client['2'].activity.subscriptions[':subscription_id'].$put(args, options),
      )
    },
  })
}

export function injectPut2ActivitySubscriptionsSubscriptionId<
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
                  (typeof client)['2']['activity']['subscriptions'][':subscription_id']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['2']['activity']['subscriptions'][':subscription_id']['$put']
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
    const mutationDefaults = getPut2ActivitySubscriptionsSubscriptionIdMutationOptions<
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

export function getDelete2ActivitySubscriptionsSubscriptionIdMutationKey() {
  return ['2', '/2/activity/subscriptions/:subscription_id', 'DELETE'] as const
}

export function getDelete2ActivitySubscriptionsSubscriptionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['2']['activity']['subscriptions'][':subscription_id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDelete2ActivitySubscriptionsSubscriptionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2']['activity']['subscriptions'][':subscription_id']['$delete']
      >,
    ) {
      return parseResponse(
        client['2'].activity.subscriptions[':subscription_id'].$delete(args, options),
      )
    },
  })
}

export function injectDelete2ActivitySubscriptionsSubscriptionId<
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
                  (typeof client)['2']['activity']['subscriptions'][':subscription_id']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['2']['activity']['subscriptions'][':subscription_id']['$delete']
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
    const mutationDefaults = getDelete2ActivitySubscriptionsSubscriptionIdMutationOptions<
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

export function getPost2ArticlesDraftMutationKey() {
  return ['2', '/2/articles/draft', 'POST'] as const
}

export function getPost2ArticlesDraftMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2']['articles']['draft']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['2']['articles']['draft']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPost2ArticlesDraftMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['2']['articles']['draft']['$post']>) {
      return parseResponse(client['2'].articles.draft.$post(args, options))
    },
  })
}

export function injectPost2ArticlesDraft<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['2']['articles']['draft']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['2']['articles']['draft']['$post']>,
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
    const mutationDefaults = getPost2ArticlesDraftMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPost2ArticlesArticleIdPublishMutationKey() {
  return ['2', '/2/articles/:article_id/publish', 'POST'] as const
}

export function getPost2ArticlesArticleIdPublishMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2']['articles'][':article_id']['publish']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['2']['articles'][':article_id']['publish']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPost2ArticlesArticleIdPublishMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['2']['articles'][':article_id']['publish']['$post']>,
    ) {
      return parseResponse(client['2'].articles[':article_id'].publish.$post(args, options))
    },
  })
}

export function injectPost2ArticlesArticleIdPublish<
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
                ReturnType<(typeof client)['2']['articles'][':article_id']['publish']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['2']['articles'][':article_id']['publish']['$post']>,
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
    const mutationDefaults = getPost2ArticlesArticleIdPublishMutationOptions<
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

export function get2BotsQueryKey(args: InferRequestType<(typeof client)['2']['bots']['$get']>) {
  return ['2', '/2/bots', args] as const
}

export function get2BotsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['bots']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client)['2']['bots']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['bots']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof get2BotsQueryKey>
  >({
    queryKey: get2BotsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2'].bots.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function inject2Bots<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['bots']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['2']['bots']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['bots']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof get2BotsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...get2BotsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPost2BotsMutationKey() {
  return ['2', '/2/bots', 'POST'] as const
}

export function getPost2BotsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['bots']['$post']>>>>
    >,
    TError,
    InferRequestType<(typeof client)['2']['bots']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPost2BotsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['2']['bots']['$post']>) {
      return parseResponse(client['2'].bots.$post(args, options))
    },
  })
}

export function injectPost2Bots<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['bots']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)['2']['bots']['$post']>,
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
    const mutationDefaults = getPost2BotsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPut2BotsIdMutationKey() {
  return ['2', '/2/bots/:id', 'PUT'] as const
}

export function getPut2BotsIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['bots'][':id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['2']['bots'][':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPut2BotsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['2']['bots'][':id']['$put']>) {
      return parseResponse(client['2'].bots[':id'].$put(args, options))
    },
  })
}

export function injectPut2BotsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['bots'][':id']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)['2']['bots'][':id']['$put']>,
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
    const mutationDefaults = getPut2BotsIdMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDelete2BotsIdMutationKey() {
  return ['2', '/2/bots/:id', 'DELETE'] as const
}

export function getDelete2BotsIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['bots'][':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['2']['bots'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDelete2BotsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['2']['bots'][':id']['$delete']>) {
      return parseResponse(client['2'].bots[':id'].$delete(args, options))
    },
  })
}

export function injectDelete2BotsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['2']['bots'][':id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['2']['bots'][':id']['$delete']>,
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
    const mutationDefaults = getDelete2BotsIdMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPost2BotsIdTokenMutationKey() {
  return ['2', '/2/bots/:id/token', 'POST'] as const
}

export function getPost2BotsIdTokenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2']['bots'][':id']['token']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['2']['bots'][':id']['token']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPost2BotsIdTokenMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['2']['bots'][':id']['token']['$post']>,
    ) {
      return parseResponse(client['2'].bots[':id'].token.$post(args, options))
    },
  })
}

export function injectPost2BotsIdToken<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['2']['bots'][':id']['token']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['2']['bots'][':id']['token']['$post']>,
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
    const mutationDefaults = getPost2BotsIdTokenMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDelete2BotsIdTokenMutationKey() {
  return ['2', '/2/bots/:id/token', 'DELETE'] as const
}

export function getDelete2BotsIdTokenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2']['bots'][':id']['token']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['2']['bots'][':id']['token']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDelete2BotsIdTokenMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['2']['bots'][':id']['token']['$delete']>,
    ) {
      return parseResponse(client['2'].bots[':id'].token.$delete(args, options))
    },
  })
}

export function injectDelete2BotsIdToken<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['2']['bots'][':id']['token']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['2']['bots'][':id']['token']['$delete']>,
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
    const mutationDefaults = getDelete2BotsIdTokenMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function get2BroadcastsQueryKey(
  args: InferRequestType<(typeof client)['2']['broadcasts']['$get']>,
) {
  return ['2', '/2/broadcasts', args] as const
}

export function get2BroadcastsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['broadcasts']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2']['broadcasts']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['broadcasts']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2BroadcastsQueryKey>
  >({
    queryKey: get2BroadcastsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2'].broadcasts.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function inject2Broadcasts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['broadcasts']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['2']['broadcasts']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['broadcasts']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof get2BroadcastsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...get2BroadcastsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPost2BroadcastsMutationKey() {
  return ['2', '/2/broadcasts', 'POST'] as const
}

export function getPost2BroadcastsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['broadcasts']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['2']['broadcasts']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPost2BroadcastsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['2']['broadcasts']['$post']>) {
      return parseResponse(client['2'].broadcasts.$post(args, options))
    },
  })
}

export function injectPost2Broadcasts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['broadcasts']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)['2']['broadcasts']['$post']>,
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
    const mutationDefaults = getPost2BroadcastsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function get2BroadcastsCategoriesQueryKey() {
  return ['2', '/2/broadcasts/categories'] as const
}

export function get2BroadcastsCategoriesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['broadcasts']['categories']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2']['broadcasts']['categories']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2BroadcastsCategoriesQueryKey>
  >({
    queryKey: get2BroadcastsCategoriesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client['2'].broadcasts.categories.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function inject2BroadcastsCategories<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['broadcasts']['categories']['$get']>>
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
              Awaited<ReturnType<(typeof client)['2']['broadcasts']['categories']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get2BroadcastsCategoriesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...get2BroadcastsCategoriesQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function get2BroadcastsChatModeratorsQueryKey(
  args: InferRequestType<(typeof client)['2']['broadcasts']['chat']['moderators']['$get']>,
) {
  return ['2', '/2/broadcasts/chat/moderators', args] as const
}

export function get2BroadcastsChatModeratorsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['broadcasts']['chat']['moderators']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2']['broadcasts']['chat']['moderators']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2']['broadcasts']['chat']['moderators']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2BroadcastsChatModeratorsQueryKey>
  >({
    queryKey: get2BroadcastsChatModeratorsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2'].broadcasts.chat.moderators.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function inject2BroadcastsChatModerators<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['broadcasts']['chat']['moderators']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['2']['broadcasts']['chat']['moderators']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['2']['broadcasts']['chat']['moderators']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get2BroadcastsChatModeratorsQueryKey>
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
      ...get2BroadcastsChatModeratorsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPost2BroadcastsChatModeratorsMutationKey() {
  return ['2', '/2/broadcasts/chat/moderators', 'POST'] as const
}

export function getPost2BroadcastsChatModeratorsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2']['broadcasts']['chat']['moderators']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['2']['broadcasts']['chat']['moderators']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPost2BroadcastsChatModeratorsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['2']['broadcasts']['chat']['moderators']['$post']>,
    ) {
      return parseResponse(client['2'].broadcasts.chat.moderators.$post(args, options))
    },
  })
}

export function injectPost2BroadcastsChatModerators<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['2']['broadcasts']['chat']['moderators']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['2']['broadcasts']['chat']['moderators']['$post']>,
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
    const mutationDefaults = getPost2BroadcastsChatModeratorsMutationOptions<
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

export function getDelete2BroadcastsChatModeratorsUserIdMutationKey() {
  return ['2', '/2/broadcasts/chat/moderators/:user_id', 'DELETE'] as const
}

export function getDelete2BroadcastsChatModeratorsUserIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['2']['broadcasts']['chat']['moderators'][':user_id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDelete2BroadcastsChatModeratorsUserIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2']['broadcasts']['chat']['moderators'][':user_id']['$delete']
      >,
    ) {
      return parseResponse(
        client['2'].broadcasts.chat.moderators[':user_id'].$delete(args, options),
      )
    },
  })
}

export function injectDelete2BroadcastsChatModeratorsUserId<
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
                  (typeof client)['2']['broadcasts']['chat']['moderators'][':user_id']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['2']['broadcasts']['chat']['moderators'][':user_id']['$delete']
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
    const mutationDefaults = getDelete2BroadcastsChatModeratorsUserIdMutationOptions<
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

export function get2BroadcastsChatMutesQueryKey(
  args: InferRequestType<(typeof client)['2']['broadcasts']['chat']['mutes']['$get']>,
) {
  return ['2', '/2/broadcasts/chat/mutes', args] as const
}

export function get2BroadcastsChatMutesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['broadcasts']['chat']['mutes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2']['broadcasts']['chat']['mutes']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2']['broadcasts']['chat']['mutes']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2BroadcastsChatMutesQueryKey>
  >({
    queryKey: get2BroadcastsChatMutesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2'].broadcasts.chat.mutes.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function inject2BroadcastsChatMutes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['broadcasts']['chat']['mutes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['2']['broadcasts']['chat']['mutes']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['2']['broadcasts']['chat']['mutes']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get2BroadcastsChatMutesQueryKey>
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
      ...get2BroadcastsChatMutesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPost2BroadcastsChatMutesMutationKey() {
  return ['2', '/2/broadcasts/chat/mutes', 'POST'] as const
}

export function getPost2BroadcastsChatMutesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2']['broadcasts']['chat']['mutes']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['2']['broadcasts']['chat']['mutes']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPost2BroadcastsChatMutesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['2']['broadcasts']['chat']['mutes']['$post']>,
    ) {
      return parseResponse(client['2'].broadcasts.chat.mutes.$post(args, options))
    },
  })
}

export function injectPost2BroadcastsChatMutes<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['2']['broadcasts']['chat']['mutes']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['2']['broadcasts']['chat']['mutes']['$post']>,
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
    const mutationDefaults = getPost2BroadcastsChatMutesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDelete2BroadcastsChatMutesUserIdMutationKey() {
  return ['2', '/2/broadcasts/chat/mutes/:user_id', 'DELETE'] as const
}

export function getDelete2BroadcastsChatMutesUserIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['2']['broadcasts']['chat']['mutes'][':user_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDelete2BroadcastsChatMutesUserIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2']['broadcasts']['chat']['mutes'][':user_id']['$delete']
      >,
    ) {
      return parseResponse(client['2'].broadcasts.chat.mutes[':user_id'].$delete(args, options))
    },
  })
}

export function injectDelete2BroadcastsChatMutesUserId<
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
                  (typeof client)['2']['broadcasts']['chat']['mutes'][':user_id']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['2']['broadcasts']['chat']['mutes'][':user_id']['$delete']
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
    const mutationDefaults = getDelete2BroadcastsChatMutesUserIdMutationOptions<
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

export function get2BroadcastsScheduledQueryKey(
  args: InferRequestType<(typeof client)['2']['broadcasts']['scheduled']['$get']>,
) {
  return ['2', '/2/broadcasts/scheduled', args] as const
}

export function get2BroadcastsScheduledQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['broadcasts']['scheduled']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2']['broadcasts']['scheduled']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2']['broadcasts']['scheduled']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2BroadcastsScheduledQueryKey>
  >({
    queryKey: get2BroadcastsScheduledQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2'].broadcasts.scheduled.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function inject2BroadcastsScheduled<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['broadcasts']['scheduled']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['2']['broadcasts']['scheduled']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['2']['broadcasts']['scheduled']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get2BroadcastsScheduledQueryKey>
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
      ...get2BroadcastsScheduledQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPost2BroadcastsScheduledMutationKey() {
  return ['2', '/2/broadcasts/scheduled', 'POST'] as const
}

export function getPost2BroadcastsScheduledMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2']['broadcasts']['scheduled']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['2']['broadcasts']['scheduled']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPost2BroadcastsScheduledMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['2']['broadcasts']['scheduled']['$post']>,
    ) {
      return parseResponse(client['2'].broadcasts.scheduled.$post(args, options))
    },
  })
}

export function injectPost2BroadcastsScheduled<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['2']['broadcasts']['scheduled']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['2']['broadcasts']['scheduled']['$post']>,
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
    const mutationDefaults = getPost2BroadcastsScheduledMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function get2BroadcastsScheduledIdQueryKey(
  args: InferRequestType<(typeof client)['2']['broadcasts']['scheduled'][':id']['$get']>,
) {
  return ['2', '/2/broadcasts/scheduled/:id', args] as const
}

export function get2BroadcastsScheduledIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['broadcasts']['scheduled'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2']['broadcasts']['scheduled'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2']['broadcasts']['scheduled'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2BroadcastsScheduledIdQueryKey>
  >({
    queryKey: get2BroadcastsScheduledIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2'].broadcasts.scheduled[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function inject2BroadcastsScheduledId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['broadcasts']['scheduled'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['2']['broadcasts']['scheduled'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['2']['broadcasts']['scheduled'][':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get2BroadcastsScheduledIdQueryKey>
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
      ...get2BroadcastsScheduledIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPut2BroadcastsScheduledIdMutationKey() {
  return ['2', '/2/broadcasts/scheduled/:id', 'PUT'] as const
}

export function getPut2BroadcastsScheduledIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2']['broadcasts']['scheduled'][':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['2']['broadcasts']['scheduled'][':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPut2BroadcastsScheduledIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['2']['broadcasts']['scheduled'][':id']['$put']>,
    ) {
      return parseResponse(client['2'].broadcasts.scheduled[':id'].$put(args, options))
    },
  })
}

export function injectPut2BroadcastsScheduledId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['2']['broadcasts']['scheduled'][':id']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['2']['broadcasts']['scheduled'][':id']['$put']>,
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
    const mutationDefaults = getPut2BroadcastsScheduledIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDelete2BroadcastsScheduledIdMutationKey() {
  return ['2', '/2/broadcasts/scheduled/:id', 'DELETE'] as const
}

export function getDelete2BroadcastsScheduledIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2']['broadcasts']['scheduled'][':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['2']['broadcasts']['scheduled'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDelete2BroadcastsScheduledIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['2']['broadcasts']['scheduled'][':id']['$delete']>,
    ) {
      return parseResponse(client['2'].broadcasts.scheduled[':id'].$delete(args, options))
    },
  })
}

export function injectDelete2BroadcastsScheduledId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['2']['broadcasts']['scheduled'][':id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['2']['broadcasts']['scheduled'][':id']['$delete']>,
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
    const mutationDefaults = getDelete2BroadcastsScheduledIdMutationOptions<
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

export function getPost2BroadcastsScheduledIdLiveMutationKey() {
  return ['2', '/2/broadcasts/scheduled/:id/live', 'POST'] as const
}

export function getPost2BroadcastsScheduledIdLiveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['2']['broadcasts']['scheduled'][':id']['live']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPost2BroadcastsScheduledIdLiveMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2']['broadcasts']['scheduled'][':id']['live']['$post']
      >,
    ) {
      return parseResponse(client['2'].broadcasts.scheduled[':id'].live.$post(args, options))
    },
  })
}

export function injectPost2BroadcastsScheduledIdLive<
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
                ReturnType<(typeof client)['2']['broadcasts']['scheduled'][':id']['live']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['2']['broadcasts']['scheduled'][':id']['live']['$post']>,
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
    const mutationDefaults = getPost2BroadcastsScheduledIdLiveMutationOptions<
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

export function get2BroadcastsIdQueryKey(
  args: InferRequestType<(typeof client)['2']['broadcasts'][':id']['$get']>,
) {
  return ['2', '/2/broadcasts/:id', args] as const
}

export function get2BroadcastsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['broadcasts'][':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2']['broadcasts'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['broadcasts'][':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2BroadcastsIdQueryKey>
  >({
    queryKey: get2BroadcastsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2'].broadcasts[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function inject2BroadcastsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['broadcasts'][':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['2']['broadcasts'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['2']['broadcasts'][':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get2BroadcastsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...get2BroadcastsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPut2BroadcastsIdMutationKey() {
  return ['2', '/2/broadcasts/:id', 'PUT'] as const
}

export function getPut2BroadcastsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['broadcasts'][':id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['2']['broadcasts'][':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPut2BroadcastsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['2']['broadcasts'][':id']['$put']>) {
      return parseResponse(client['2'].broadcasts[':id'].$put(args, options))
    },
  })
}

export function injectPut2BroadcastsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['2']['broadcasts'][':id']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['2']['broadcasts'][':id']['$put']>,
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
    const mutationDefaults = getPut2BroadcastsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDelete2BroadcastsIdMutationKey() {
  return ['2', '/2/broadcasts/:id', 'DELETE'] as const
}

export function getDelete2BroadcastsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2']['broadcasts'][':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['2']['broadcasts'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDelete2BroadcastsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['2']['broadcasts'][':id']['$delete']>) {
      return parseResponse(client['2'].broadcasts[':id'].$delete(args, options))
    },
  })
}

export function injectDelete2BroadcastsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['2']['broadcasts'][':id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['2']['broadcasts'][':id']['$delete']>,
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
    const mutationDefaults = getDelete2BroadcastsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function get2BroadcastsIdChatQueryKey(
  args: InferRequestType<(typeof client)['2']['broadcasts'][':id']['chat']['$get']>,
) {
  return ['2', '/2/broadcasts/:id/chat', args] as const
}

export function get2BroadcastsIdChatQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['broadcasts'][':id']['chat']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2']['broadcasts'][':id']['chat']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2']['broadcasts'][':id']['chat']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2BroadcastsIdChatQueryKey>
  >({
    queryKey: get2BroadcastsIdChatQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2'].broadcasts[':id'].chat.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function inject2BroadcastsIdChat<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['broadcasts'][':id']['chat']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['2']['broadcasts'][':id']['chat']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['2']['broadcasts'][':id']['chat']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get2BroadcastsIdChatQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...get2BroadcastsIdChatQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPost2BroadcastsIdChatMutationKey() {
  return ['2', '/2/broadcasts/:id/chat', 'POST'] as const
}

export function getPost2BroadcastsIdChatMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2']['broadcasts'][':id']['chat']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['2']['broadcasts'][':id']['chat']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPost2BroadcastsIdChatMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['2']['broadcasts'][':id']['chat']['$post']>,
    ) {
      return parseResponse(client['2'].broadcasts[':id'].chat.$post(args, options))
    },
  })
}

export function injectPost2BroadcastsIdChat<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['2']['broadcasts'][':id']['chat']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['2']['broadcasts'][':id']['chat']['$post']>,
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
    const mutationDefaults = getPost2BroadcastsIdChatMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPost2BroadcastsIdChatMutesMutationKey() {
  return ['2', '/2/broadcasts/:id/chat/mutes', 'POST'] as const
}

export function getPost2BroadcastsIdChatMutesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2']['broadcasts'][':id']['chat']['mutes']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['2']['broadcasts'][':id']['chat']['mutes']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPost2BroadcastsIdChatMutesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['2']['broadcasts'][':id']['chat']['mutes']['$post']>,
    ) {
      return parseResponse(client['2'].broadcasts[':id'].chat.mutes.$post(args, options))
    },
  })
}

export function injectPost2BroadcastsIdChatMutes<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['2']['broadcasts'][':id']['chat']['mutes']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['2']['broadcasts'][':id']['chat']['mutes']['$post']>,
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
    const mutationDefaults = getPost2BroadcastsIdChatMutesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDelete2BroadcastsIdChatMutesUserIdMutationKey() {
  return ['2', '/2/broadcasts/:id/chat/mutes/:user_id', 'DELETE'] as const
}

export function getDelete2BroadcastsIdChatMutesUserIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['2']['broadcasts'][':id']['chat']['mutes'][':user_id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDelete2BroadcastsIdChatMutesUserIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2']['broadcasts'][':id']['chat']['mutes'][':user_id']['$delete']
      >,
    ) {
      return parseResponse(
        client['2'].broadcasts[':id'].chat.mutes[':user_id'].$delete(args, options),
      )
    },
  })
}

export function injectDelete2BroadcastsIdChatMutesUserId<
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
                  (typeof client)['2']['broadcasts'][':id']['chat']['mutes'][':user_id']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['2']['broadcasts'][':id']['chat']['mutes'][':user_id']['$delete']
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
    const mutationDefaults = getDelete2BroadcastsIdChatMutesUserIdMutationOptions<
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

export function getDelete2BroadcastsIdChatMessageIdMutationKey() {
  return ['2', '/2/broadcasts/:id/chat/:message_id', 'DELETE'] as const
}

export function getDelete2BroadcastsIdChatMessageIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['2']['broadcasts'][':id']['chat'][':message_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDelete2BroadcastsIdChatMessageIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2']['broadcasts'][':id']['chat'][':message_id']['$delete']
      >,
    ) {
      return parseResponse(client['2'].broadcasts[':id'].chat[':message_id'].$delete(args, options))
    },
  })
}

export function injectDelete2BroadcastsIdChatMessageId<
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
                  (typeof client)['2']['broadcasts'][':id']['chat'][':message_id']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['2']['broadcasts'][':id']['chat'][':message_id']['$delete']
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
    const mutationDefaults = getDelete2BroadcastsIdChatMessageIdMutationOptions<
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

export function getPut2BroadcastsIdStateMutationKey() {
  return ['2', '/2/broadcasts/:id/state', 'PUT'] as const
}

export function getPut2BroadcastsIdStateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2']['broadcasts'][':id']['state']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['2']['broadcasts'][':id']['state']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPut2BroadcastsIdStateMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['2']['broadcasts'][':id']['state']['$put']>,
    ) {
      return parseResponse(client['2'].broadcasts[':id'].state.$put(args, options))
    },
  })
}

export function injectPut2BroadcastsIdState<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['2']['broadcasts'][':id']['state']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['2']['broadcasts'][':id']['state']['$put']>,
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
    const mutationDefaults = getPut2BroadcastsIdStateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPost2CallsMutationKey() {
  return ['2', '/2/calls', 'POST'] as const
}

export function getPost2CallsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['calls']['$post']>>>>
    >,
    TError,
    InferRequestType<(typeof client)['2']['calls']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPost2CallsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['2']['calls']['$post']>) {
      return parseResponse(client['2'].calls.$post(args, options))
    },
  })
}

export function injectPost2Calls<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['calls']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)['2']['calls']['$post']>,
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
    const mutationDefaults = getPost2CallsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function get2CallsScheduledQueryKey(
  args: InferRequestType<(typeof client)['2']['calls']['scheduled']['$get']>,
) {
  return ['2', '/2/calls/scheduled', args] as const
}

export function get2CallsScheduledQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['calls']['scheduled']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2']['calls']['scheduled']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2']['calls']['scheduled']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2CallsScheduledQueryKey>
  >({
    queryKey: get2CallsScheduledQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2'].calls.scheduled.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function inject2CallsScheduled<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['calls']['scheduled']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['2']['calls']['scheduled']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['2']['calls']['scheduled']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get2CallsScheduledQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...get2CallsScheduledQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPost2CallsScheduledMutationKey() {
  return ['2', '/2/calls/scheduled', 'POST'] as const
}

export function getPost2CallsScheduledMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2']['calls']['scheduled']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['2']['calls']['scheduled']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPost2CallsScheduledMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['2']['calls']['scheduled']['$post']>) {
      return parseResponse(client['2'].calls.scheduled.$post(args, options))
    },
  })
}

export function injectPost2CallsScheduled<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['2']['calls']['scheduled']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['2']['calls']['scheduled']['$post']>,
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
    const mutationDefaults = getPost2CallsScheduledMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function get2CallsScheduledIdQueryKey(
  args: InferRequestType<(typeof client)['2']['calls']['scheduled'][':id']['$get']>,
) {
  return ['2', '/2/calls/scheduled/:id', args] as const
}

export function get2CallsScheduledIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['calls']['scheduled'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2']['calls']['scheduled'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2']['calls']['scheduled'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2CallsScheduledIdQueryKey>
  >({
    queryKey: get2CallsScheduledIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2'].calls.scheduled[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function inject2CallsScheduledId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['calls']['scheduled'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['2']['calls']['scheduled'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['2']['calls']['scheduled'][':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get2CallsScheduledIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...get2CallsScheduledIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPut2CallsScheduledIdMutationKey() {
  return ['2', '/2/calls/scheduled/:id', 'PUT'] as const
}

export function getPut2CallsScheduledIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2']['calls']['scheduled'][':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['2']['calls']['scheduled'][':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPut2CallsScheduledIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['2']['calls']['scheduled'][':id']['$put']>,
    ) {
      return parseResponse(client['2'].calls.scheduled[':id'].$put(args, options))
    },
  })
}

export function injectPut2CallsScheduledId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['2']['calls']['scheduled'][':id']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['2']['calls']['scheduled'][':id']['$put']>,
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
    const mutationDefaults = getPut2CallsScheduledIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDelete2CallsScheduledIdMutationKey() {
  return ['2', '/2/calls/scheduled/:id', 'DELETE'] as const
}

export function getDelete2CallsScheduledIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2']['calls']['scheduled'][':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['2']['calls']['scheduled'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDelete2CallsScheduledIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['2']['calls']['scheduled'][':id']['$delete']>,
    ) {
      return parseResponse(client['2'].calls.scheduled[':id'].$delete(args, options))
    },
  })
}

export function injectDelete2CallsScheduledId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['2']['calls']['scheduled'][':id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['2']['calls']['scheduled'][':id']['$delete']>,
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
    const mutationDefaults = getDelete2CallsScheduledIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPost2CallsScheduledIdRsvpMutationKey() {
  return ['2', '/2/calls/scheduled/:id/rsvp', 'POST'] as const
}

export function getPost2CallsScheduledIdRsvpMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2']['calls']['scheduled'][':id']['rsvp']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['2']['calls']['scheduled'][':id']['rsvp']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPost2CallsScheduledIdRsvpMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['2']['calls']['scheduled'][':id']['rsvp']['$post']>,
    ) {
      return parseResponse(client['2'].calls.scheduled[':id'].rsvp.$post(args, options))
    },
  })
}

export function injectPost2CallsScheduledIdRsvp<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['2']['calls']['scheduled'][':id']['rsvp']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['2']['calls']['scheduled'][':id']['rsvp']['$post']>,
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
    const mutationDefaults = getPost2CallsScheduledIdRsvpMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function get2CallsIdQueryKey(
  args: InferRequestType<(typeof client)['2']['calls'][':id']['$get']>,
) {
  return ['2', '/2/calls/:id', args] as const
}

export function get2CallsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['calls'][':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2']['calls'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['calls'][':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2CallsIdQueryKey>
  >({
    queryKey: get2CallsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2'].calls[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function inject2CallsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['calls'][':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['2']['calls'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['calls'][':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof get2CallsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...get2CallsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPost2CallsIdJoinMutationKey() {
  return ['2', '/2/calls/:id/join', 'POST'] as const
}

export function getPost2CallsIdJoinMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2']['calls'][':id']['join']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['2']['calls'][':id']['join']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPost2CallsIdJoinMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['2']['calls'][':id']['join']['$post']>,
    ) {
      return parseResponse(client['2'].calls[':id'].join.$post(args, options))
    },
  })
}

export function injectPost2CallsIdJoin<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['2']['calls'][':id']['join']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['2']['calls'][':id']['join']['$post']>,
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
    const mutationDefaults = getPost2CallsIdJoinMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPost2CallsIdLeaveMutationKey() {
  return ['2', '/2/calls/:id/leave', 'POST'] as const
}

export function getPost2CallsIdLeaveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2']['calls'][':id']['leave']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['2']['calls'][':id']['leave']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPost2CallsIdLeaveMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['2']['calls'][':id']['leave']['$post']>,
    ) {
      return parseResponse(client['2'].calls[':id'].leave.$post(args, options))
    },
  })
}

export function injectPost2CallsIdLeave<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['2']['calls'][':id']['leave']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['2']['calls'][':id']['leave']['$post']>,
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
    const mutationDefaults = getPost2CallsIdLeaveMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function get2ChatConversationsQueryKey(
  args: InferRequestType<(typeof client)['2']['chat']['conversations']['$get']>,
) {
  return ['2', '/2/chat/conversations', args] as const
}

export function get2ChatConversationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['chat']['conversations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2']['chat']['conversations']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2']['chat']['conversations']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2ChatConversationsQueryKey>
  >({
    queryKey: get2ChatConversationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2'].chat.conversations.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function inject2ChatConversations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['chat']['conversations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['2']['chat']['conversations']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['2']['chat']['conversations']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get2ChatConversationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...get2ChatConversationsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPost2ChatConversationsGroupMutationKey() {
  return ['2', '/2/chat/conversations/group', 'POST'] as const
}

export function getPost2ChatConversationsGroupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2']['chat']['conversations']['group']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['2']['chat']['conversations']['group']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPost2ChatConversationsGroupMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['2']['chat']['conversations']['group']['$post']>,
    ) {
      return parseResponse(client['2'].chat.conversations.group.$post(args, options))
    },
  })
}

export function injectPost2ChatConversationsGroup<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['2']['chat']['conversations']['group']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['2']['chat']['conversations']['group']['$post']>,
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
    const mutationDefaults = getPost2ChatConversationsGroupMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPost2ChatConversationsGroupInitializeMutationKey() {
  return ['2', '/2/chat/conversations/group/initialize', 'POST'] as const
}

export function getPost2ChatConversationsGroupInitializeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    void,
    TOnMutateResult
  >({
    mutationKey: getPost2ChatConversationsGroupInitializeMutationKey(),
    async mutationFn() {
      return parseResponse(
        client['2'].chat.conversations.group.initialize.$post(undefined, options),
      )
    },
  })
}

export function injectPost2ChatConversationsGroupInitialize<
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
                  (typeof client)['2']['chat']['conversations']['group']['initialize']['$post']
                >
              >
            >
          >
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
    const mutationDefaults = getPost2ChatConversationsGroupInitializeMutationOptions<
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

export function get2ChatConversationsIdQueryKey(
  args: InferRequestType<(typeof client)['2']['chat']['conversations'][':id']['$get']>,
) {
  return ['2', '/2/chat/conversations/:id', args] as const
}

export function get2ChatConversationsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['chat']['conversations'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2']['chat']['conversations'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2']['chat']['conversations'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2ChatConversationsIdQueryKey>
  >({
    queryKey: get2ChatConversationsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2'].chat.conversations[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function inject2ChatConversationsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['chat']['conversations'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['2']['chat']['conversations'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['2']['chat']['conversations'][':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get2ChatConversationsIdQueryKey>
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
      ...get2ChatConversationsIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPut2ChatConversationsIdMutationKey() {
  return ['2', '/2/chat/conversations/:id', 'PUT'] as const
}

export function getPut2ChatConversationsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2']['chat']['conversations'][':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['2']['chat']['conversations'][':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPut2ChatConversationsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['2']['chat']['conversations'][':id']['$put']>,
    ) {
      return parseResponse(client['2'].chat.conversations[':id'].$put(args, options))
    },
  })
}

export function injectPut2ChatConversationsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['2']['chat']['conversations'][':id']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['2']['chat']['conversations'][':id']['$put']>,
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
    const mutationDefaults = getPut2ChatConversationsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDelete2ChatConversationsIdMutationKey() {
  return ['2', '/2/chat/conversations/:id', 'DELETE'] as const
}

export function getDelete2ChatConversationsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2']['chat']['conversations'][':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['2']['chat']['conversations'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDelete2ChatConversationsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['2']['chat']['conversations'][':id']['$delete']>,
    ) {
      return parseResponse(client['2'].chat.conversations[':id'].$delete(args, options))
    },
  })
}

export function injectDelete2ChatConversationsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['2']['chat']['conversations'][':id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['2']['chat']['conversations'][':id']['$delete']>,
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
    const mutationDefaults = getDelete2ChatConversationsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function get2ChatConversationsIdAdminRequestsQueryKey(
  args: InferRequestType<
    (typeof client)['2']['chat']['conversations'][':id']['admin_requests']['$get']
  >,
) {
  return ['2', '/2/chat/conversations/:id/admin_requests', args] as const
}

export function get2ChatConversationsIdAdminRequestsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['2']['chat']['conversations'][':id']['admin_requests']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2']['chat']['conversations'][':id']['admin_requests']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof get2ChatConversationsIdAdminRequestsQueryKey>
  >({
    queryKey: get2ChatConversationsIdAdminRequestsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2'].chat.conversations[':id'].admin_requests.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function inject2ChatConversationsIdAdminRequests<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['2']['chat']['conversations'][':id']['admin_requests']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['2']['chat']['conversations'][':id']['admin_requests']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof get2ChatConversationsIdAdminRequestsQueryKey>
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
      ...get2ChatConversationsIdAdminRequestsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPost2ChatConversationsIdAdminRequestsMutationKey() {
  return ['2', '/2/chat/conversations/:id/admin_requests', 'POST'] as const
}

export function getPost2ChatConversationsIdAdminRequestsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['2']['chat']['conversations'][':id']['admin_requests']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPost2ChatConversationsIdAdminRequestsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2']['chat']['conversations'][':id']['admin_requests']['$post']
      >,
    ) {
      return parseResponse(
        client['2'].chat.conversations[':id'].admin_requests.$post(args, options),
      )
    },
  })
}

export function injectPost2ChatConversationsIdAdminRequests<
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
                  (typeof client)['2']['chat']['conversations'][':id']['admin_requests']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['2']['chat']['conversations'][':id']['admin_requests']['$post']
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
    const mutationDefaults = getPost2ChatConversationsIdAdminRequestsMutationOptions<
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

export function getPost2ChatConversationsIdAdminRequestsUserIdApproveMutationKey() {
  return ['2', '/2/chat/conversations/:id/admin_requests/:user_id/approve', 'POST'] as const
}

export function getPost2ChatConversationsIdAdminRequestsUserIdApproveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['2']['chat']['conversations'][':id']['admin_requests'][':user_id']['approve']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPost2ChatConversationsIdAdminRequestsUserIdApproveMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2']['chat']['conversations'][':id']['admin_requests'][':user_id']['approve']['$post']
      >,
    ) {
      return parseResponse(
        client['2'].chat.conversations[':id'].admin_requests[':user_id'].approve.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPost2ChatConversationsIdAdminRequestsUserIdApprove<
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
                  (typeof client)['2']['chat']['conversations'][':id']['admin_requests'][':user_id']['approve']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['2']['chat']['conversations'][':id']['admin_requests'][':user_id']['approve']['$post']
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
    const mutationDefaults = getPost2ChatConversationsIdAdminRequestsUserIdApproveMutationOptions<
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

export function getPost2ChatConversationsIdAdminRequestsUserIdRejectMutationKey() {
  return ['2', '/2/chat/conversations/:id/admin_requests/:user_id/reject', 'POST'] as const
}

export function getPost2ChatConversationsIdAdminRequestsUserIdRejectMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['2']['chat']['conversations'][':id']['admin_requests'][':user_id']['reject']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPost2ChatConversationsIdAdminRequestsUserIdRejectMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2']['chat']['conversations'][':id']['admin_requests'][':user_id']['reject']['$post']
      >,
    ) {
      return parseResponse(
        client['2'].chat.conversations[':id'].admin_requests[':user_id'].reject.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPost2ChatConversationsIdAdminRequestsUserIdReject<
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
                  (typeof client)['2']['chat']['conversations'][':id']['admin_requests'][':user_id']['reject']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['2']['chat']['conversations'][':id']['admin_requests'][':user_id']['reject']['$post']
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
    const mutationDefaults = getPost2ChatConversationsIdAdminRequestsUserIdRejectMutationOptions<
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

export function getPut2ChatConversationsIdAdminSettingsMutationKey() {
  return ['2', '/2/chat/conversations/:id/admin_settings', 'PUT'] as const
}

export function getPut2ChatConversationsIdAdminSettingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['2']['chat']['conversations'][':id']['admin_settings']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPut2ChatConversationsIdAdminSettingsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2']['chat']['conversations'][':id']['admin_settings']['$put']
      >,
    ) {
      return parseResponse(client['2'].chat.conversations[':id'].admin_settings.$put(args, options))
    },
  })
}

export function injectPut2ChatConversationsIdAdminSettings<
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
                  (typeof client)['2']['chat']['conversations'][':id']['admin_settings']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['2']['chat']['conversations'][':id']['admin_settings']['$put']
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
    const mutationDefaults = getPut2ChatConversationsIdAdminSettingsMutationOptions<
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

export function getPost2ChatConversationsIdAdminsMutationKey() {
  return ['2', '/2/chat/conversations/:id/admins', 'POST'] as const
}

export function getPost2ChatConversationsIdAdminsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['2']['chat']['conversations'][':id']['admins']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPost2ChatConversationsIdAdminsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2']['chat']['conversations'][':id']['admins']['$post']
      >,
    ) {
      return parseResponse(client['2'].chat.conversations[':id'].admins.$post(args, options))
    },
  })
}

export function injectPost2ChatConversationsIdAdmins<
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
                ReturnType<(typeof client)['2']['chat']['conversations'][':id']['admins']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['2']['chat']['conversations'][':id']['admins']['$post']>,
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
    const mutationDefaults = getPost2ChatConversationsIdAdminsMutationOptions<
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

export function getPost2ChatConversationsIdAdminsRemoveMutationKey() {
  return ['2', '/2/chat/conversations/:id/admins/remove', 'POST'] as const
}

export function getPost2ChatConversationsIdAdminsRemoveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['2']['chat']['conversations'][':id']['admins']['remove']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPost2ChatConversationsIdAdminsRemoveMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2']['chat']['conversations'][':id']['admins']['remove']['$post']
      >,
    ) {
      return parseResponse(client['2'].chat.conversations[':id'].admins.remove.$post(args, options))
    },
  })
}

export function injectPost2ChatConversationsIdAdminsRemove<
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
                  (typeof client)['2']['chat']['conversations'][':id']['admins']['remove']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['2']['chat']['conversations'][':id']['admins']['remove']['$post']
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
    const mutationDefaults = getPost2ChatConversationsIdAdminsRemoveMutationOptions<
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

export function getPost2ChatConversationsIdArchiveMutationKey() {
  return ['2', '/2/chat/conversations/:id/archive', 'POST'] as const
}

export function getPost2ChatConversationsIdArchiveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['2']['chat']['conversations'][':id']['archive']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPost2ChatConversationsIdArchiveMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2']['chat']['conversations'][':id']['archive']['$post']
      >,
    ) {
      return parseResponse(client['2'].chat.conversations[':id'].archive.$post(args, options))
    },
  })
}

export function injectPost2ChatConversationsIdArchive<
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
                ReturnType<(typeof client)['2']['chat']['conversations'][':id']['archive']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['2']['chat']['conversations'][':id']['archive']['$post']>,
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
    const mutationDefaults = getPost2ChatConversationsIdArchiveMutationOptions<
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

export function getDelete2ChatConversationsIdArchiveMutationKey() {
  return ['2', '/2/chat/conversations/:id/archive', 'DELETE'] as const
}

export function getDelete2ChatConversationsIdArchiveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['2']['chat']['conversations'][':id']['archive']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDelete2ChatConversationsIdArchiveMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2']['chat']['conversations'][':id']['archive']['$delete']
      >,
    ) {
      return parseResponse(client['2'].chat.conversations[':id'].archive.$delete(args, options))
    },
  })
}

export function injectDelete2ChatConversationsIdArchive<
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
                  (typeof client)['2']['chat']['conversations'][':id']['archive']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['2']['chat']['conversations'][':id']['archive']['$delete']
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
    const mutationDefaults = getDelete2ChatConversationsIdArchiveMutationOptions<
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

export function get2ChatConversationsIdEventsQueryKey(
  args: InferRequestType<(typeof client)['2']['chat']['conversations'][':id']['events']['$get']>,
) {
  return ['2', '/2/chat/conversations/:id/events', args] as const
}

export function get2ChatConversationsIdEventsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['chat']['conversations'][':id']['events']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2']['chat']['conversations'][':id']['events']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['2']['chat']['conversations'][':id']['events']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2ChatConversationsIdEventsQueryKey>
  >({
    queryKey: get2ChatConversationsIdEventsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2'].chat.conversations[':id'].events.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function inject2ChatConversationsIdEvents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['chat']['conversations'][':id']['events']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['2']['chat']['conversations'][':id']['events']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['2']['chat']['conversations'][':id']['events']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get2ChatConversationsIdEventsQueryKey>
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
      ...get2ChatConversationsIdEventsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPost2ChatConversationsIdInviteMutationKey() {
  return ['2', '/2/chat/conversations/:id/invite', 'POST'] as const
}

export function getPost2ChatConversationsIdInviteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['2']['chat']['conversations'][':id']['invite']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPost2ChatConversationsIdInviteMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2']['chat']['conversations'][':id']['invite']['$post']
      >,
    ) {
      return parseResponse(client['2'].chat.conversations[':id'].invite.$post(args, options))
    },
  })
}

export function injectPost2ChatConversationsIdInvite<
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
                ReturnType<(typeof client)['2']['chat']['conversations'][':id']['invite']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['2']['chat']['conversations'][':id']['invite']['$post']>,
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
    const mutationDefaults = getPost2ChatConversationsIdInviteMutationOptions<
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

export function getDelete2ChatConversationsIdInviteMutationKey() {
  return ['2', '/2/chat/conversations/:id/invite', 'DELETE'] as const
}

export function getDelete2ChatConversationsIdInviteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['2']['chat']['conversations'][':id']['invite']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDelete2ChatConversationsIdInviteMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2']['chat']['conversations'][':id']['invite']['$delete']
      >,
    ) {
      return parseResponse(client['2'].chat.conversations[':id'].invite.$delete(args, options))
    },
  })
}

export function injectDelete2ChatConversationsIdInvite<
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
                  (typeof client)['2']['chat']['conversations'][':id']['invite']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['2']['chat']['conversations'][':id']['invite']['$delete']>,
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
    const mutationDefaults = getDelete2ChatConversationsIdInviteMutationOptions<
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

export function get2ChatConversationsIdInvitesTokenQueryKey(
  args: InferRequestType<
    (typeof client)['2']['chat']['conversations'][':id']['invites'][':token']['$get']
  >,
) {
  return ['2', '/2/chat/conversations/:id/invites/:token', args] as const
}

export function get2ChatConversationsIdInvitesTokenQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2']['chat']['conversations'][':id']['invites'][':token']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof get2ChatConversationsIdInvitesTokenQueryKey>
  >({
    queryKey: get2ChatConversationsIdInvitesTokenQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2'].chat.conversations[':id'].invites[':token'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function inject2ChatConversationsIdInvitesToken<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['2']['chat']['conversations'][':id']['invites'][':token']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof get2ChatConversationsIdInvitesTokenQueryKey>
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
      ...get2ChatConversationsIdInvitesTokenQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPost2ChatConversationsIdJoinRequestsMutationKey() {
  return ['2', '/2/chat/conversations/:id/join_requests', 'POST'] as const
}

export function getPost2ChatConversationsIdJoinRequestsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['2']['chat']['conversations'][':id']['join_requests']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPost2ChatConversationsIdJoinRequestsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2']['chat']['conversations'][':id']['join_requests']['$post']
      >,
    ) {
      return parseResponse(client['2'].chat.conversations[':id'].join_requests.$post(args, options))
    },
  })
}

export function injectPost2ChatConversationsIdJoinRequests<
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
                  (typeof client)['2']['chat']['conversations'][':id']['join_requests']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['2']['chat']['conversations'][':id']['join_requests']['$post']
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
    const mutationDefaults = getPost2ChatConversationsIdJoinRequestsMutationOptions<
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

export function getPost2ChatConversationsIdJoinRequestsRejectMutationKey() {
  return ['2', '/2/chat/conversations/:id/join_requests/reject', 'POST'] as const
}

export function getPost2ChatConversationsIdJoinRequestsRejectMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['2']['chat']['conversations'][':id']['join_requests']['reject']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPost2ChatConversationsIdJoinRequestsRejectMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2']['chat']['conversations'][':id']['join_requests']['reject']['$post']
      >,
    ) {
      return parseResponse(
        client['2'].chat.conversations[':id'].join_requests.reject.$post(args, options),
      )
    },
  })
}

export function injectPost2ChatConversationsIdJoinRequestsReject<
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
                  (typeof client)['2']['chat']['conversations'][':id']['join_requests']['reject']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['2']['chat']['conversations'][':id']['join_requests']['reject']['$post']
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
    const mutationDefaults = getPost2ChatConversationsIdJoinRequestsRejectMutationOptions<
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

export function getPost2ChatConversationsIdKeysMutationKey() {
  return ['2', '/2/chat/conversations/:id/keys', 'POST'] as const
}

export function getPost2ChatConversationsIdKeysMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2']['chat']['conversations'][':id']['keys']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['2']['chat']['conversations'][':id']['keys']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPost2ChatConversationsIdKeysMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['2']['chat']['conversations'][':id']['keys']['$post']>,
    ) {
      return parseResponse(client['2'].chat.conversations[':id'].keys.$post(args, options))
    },
  })
}

export function injectPost2ChatConversationsIdKeys<
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
                ReturnType<(typeof client)['2']['chat']['conversations'][':id']['keys']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['2']['chat']['conversations'][':id']['keys']['$post']>,
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
    const mutationDefaults = getPost2ChatConversationsIdKeysMutationOptions<
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

export function getPost2ChatConversationsIdMembersMutationKey() {
  return ['2', '/2/chat/conversations/:id/members', 'POST'] as const
}

export function getPost2ChatConversationsIdMembersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['2']['chat']['conversations'][':id']['members']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPost2ChatConversationsIdMembersMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2']['chat']['conversations'][':id']['members']['$post']
      >,
    ) {
      return parseResponse(client['2'].chat.conversations[':id'].members.$post(args, options))
    },
  })
}

export function injectPost2ChatConversationsIdMembers<
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
                ReturnType<(typeof client)['2']['chat']['conversations'][':id']['members']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['2']['chat']['conversations'][':id']['members']['$post']>,
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
    const mutationDefaults = getPost2ChatConversationsIdMembersMutationOptions<
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

export function getPost2ChatConversationsIdMembersRemoveMutationKey() {
  return ['2', '/2/chat/conversations/:id/members/remove', 'POST'] as const
}

export function getPost2ChatConversationsIdMembersRemoveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['2']['chat']['conversations'][':id']['members']['remove']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPost2ChatConversationsIdMembersRemoveMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2']['chat']['conversations'][':id']['members']['remove']['$post']
      >,
    ) {
      return parseResponse(
        client['2'].chat.conversations[':id'].members.remove.$post(args, options),
      )
    },
  })
}

export function injectPost2ChatConversationsIdMembersRemove<
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
                  (typeof client)['2']['chat']['conversations'][':id']['members']['remove']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['2']['chat']['conversations'][':id']['members']['remove']['$post']
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
    const mutationDefaults = getPost2ChatConversationsIdMembersRemoveMutationOptions<
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

export function getPut2ChatConversationsIdMessageTtlMutationKey() {
  return ['2', '/2/chat/conversations/:id/message_ttl', 'PUT'] as const
}

export function getPut2ChatConversationsIdMessageTtlMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['2']['chat']['conversations'][':id']['message_ttl']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPut2ChatConversationsIdMessageTtlMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2']['chat']['conversations'][':id']['message_ttl']['$put']
      >,
    ) {
      return parseResponse(client['2'].chat.conversations[':id'].message_ttl.$put(args, options))
    },
  })
}

export function injectPut2ChatConversationsIdMessageTtl<
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
                  (typeof client)['2']['chat']['conversations'][':id']['message_ttl']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['2']['chat']['conversations'][':id']['message_ttl']['$put']
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
    const mutationDefaults = getPut2ChatConversationsIdMessageTtlMutationOptions<
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

export function getDelete2ChatConversationsIdMessageTtlMutationKey() {
  return ['2', '/2/chat/conversations/:id/message_ttl', 'DELETE'] as const
}

export function getDelete2ChatConversationsIdMessageTtlMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['2']['chat']['conversations'][':id']['message_ttl']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDelete2ChatConversationsIdMessageTtlMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2']['chat']['conversations'][':id']['message_ttl']['$delete']
      >,
    ) {
      return parseResponse(client['2'].chat.conversations[':id'].message_ttl.$delete(args, options))
    },
  })
}

export function injectDelete2ChatConversationsIdMessageTtl<
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
                  (typeof client)['2']['chat']['conversations'][':id']['message_ttl']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['2']['chat']['conversations'][':id']['message_ttl']['$delete']
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
    const mutationDefaults = getDelete2ChatConversationsIdMessageTtlMutationOptions<
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

export function getPost2ChatConversationsIdMessagesMutationKey() {
  return ['2', '/2/chat/conversations/:id/messages', 'POST'] as const
}

export function getPost2ChatConversationsIdMessagesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['2']['chat']['conversations'][':id']['messages']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPost2ChatConversationsIdMessagesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2']['chat']['conversations'][':id']['messages']['$post']
      >,
    ) {
      return parseResponse(client['2'].chat.conversations[':id'].messages.$post(args, options))
    },
  })
}

export function injectPost2ChatConversationsIdMessages<
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
                  (typeof client)['2']['chat']['conversations'][':id']['messages']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['2']['chat']['conversations'][':id']['messages']['$post']>,
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
    const mutationDefaults = getPost2ChatConversationsIdMessagesMutationOptions<
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

export function getPost2ChatConversationsIdMessagesDeleteMutationKey() {
  return ['2', '/2/chat/conversations/:id/messages/delete', 'POST'] as const
}

export function getPost2ChatConversationsIdMessagesDeleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['2']['chat']['conversations'][':id']['messages']['delete']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPost2ChatConversationsIdMessagesDeleteMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2']['chat']['conversations'][':id']['messages']['delete']['$post']
      >,
    ) {
      return parseResponse(
        client['2'].chat.conversations[':id'].messages.delete.$post(args, options),
      )
    },
  })
}

export function injectPost2ChatConversationsIdMessagesDelete<
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
                  (typeof client)['2']['chat']['conversations'][':id']['messages']['delete']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['2']['chat']['conversations'][':id']['messages']['delete']['$post']
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
    const mutationDefaults = getPost2ChatConversationsIdMessagesDeleteMutationOptions<
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

export function getPost2ChatConversationsIdMuteMutationKey() {
  return ['2', '/2/chat/conversations/:id/mute', 'POST'] as const
}

export function getPost2ChatConversationsIdMuteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2']['chat']['conversations'][':id']['mute']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['2']['chat']['conversations'][':id']['mute']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPost2ChatConversationsIdMuteMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['2']['chat']['conversations'][':id']['mute']['$post']>,
    ) {
      return parseResponse(client['2'].chat.conversations[':id'].mute.$post(args, options))
    },
  })
}

export function injectPost2ChatConversationsIdMute<
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
                ReturnType<(typeof client)['2']['chat']['conversations'][':id']['mute']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['2']['chat']['conversations'][':id']['mute']['$post']>,
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
    const mutationDefaults = getPost2ChatConversationsIdMuteMutationOptions<
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

export function getDelete2ChatConversationsIdMuteMutationKey() {
  return ['2', '/2/chat/conversations/:id/mute', 'DELETE'] as const
}

export function getDelete2ChatConversationsIdMuteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['2']['chat']['conversations'][':id']['mute']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDelete2ChatConversationsIdMuteMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2']['chat']['conversations'][':id']['mute']['$delete']
      >,
    ) {
      return parseResponse(client['2'].chat.conversations[':id'].mute.$delete(args, options))
    },
  })
}

export function injectDelete2ChatConversationsIdMute<
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
                ReturnType<(typeof client)['2']['chat']['conversations'][':id']['mute']['$delete']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['2']['chat']['conversations'][':id']['mute']['$delete']>,
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
    const mutationDefaults = getDelete2ChatConversationsIdMuteMutationOptions<
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

export function get2ChatConversationsIdPinnedMessagesQueryKey(
  args: InferRequestType<
    (typeof client)['2']['chat']['conversations'][':id']['pinned_messages']['$get']
  >,
) {
  return ['2', '/2/chat/conversations/:id/pinned_messages', args] as const
}

export function get2ChatConversationsIdPinnedMessagesQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2']['chat']['conversations'][':id']['pinned_messages']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof get2ChatConversationsIdPinnedMessagesQueryKey>
  >({
    queryKey: get2ChatConversationsIdPinnedMessagesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2'].chat.conversations[':id'].pinned_messages.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function inject2ChatConversationsIdPinnedMessages<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['2']['chat']['conversations'][':id']['pinned_messages']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof get2ChatConversationsIdPinnedMessagesQueryKey>
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
      ...get2ChatConversationsIdPinnedMessagesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPost2ChatConversationsIdReadMutationKey() {
  return ['2', '/2/chat/conversations/:id/read', 'POST'] as const
}

export function getPost2ChatConversationsIdReadMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2']['chat']['conversations'][':id']['read']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['2']['chat']['conversations'][':id']['read']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPost2ChatConversationsIdReadMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['2']['chat']['conversations'][':id']['read']['$post']>,
    ) {
      return parseResponse(client['2'].chat.conversations[':id'].read.$post(args, options))
    },
  })
}

export function injectPost2ChatConversationsIdRead<
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
                ReturnType<(typeof client)['2']['chat']['conversations'][':id']['read']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['2']['chat']['conversations'][':id']['read']['$post']>,
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
    const mutationDefaults = getPost2ChatConversationsIdReadMutationOptions<
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

export function getPut2ChatConversationsIdScreenCaptureMutationKey() {
  return ['2', '/2/chat/conversations/:id/screen_capture', 'PUT'] as const
}

export function getPut2ChatConversationsIdScreenCaptureMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['2']['chat']['conversations'][':id']['screen_capture']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPut2ChatConversationsIdScreenCaptureMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2']['chat']['conversations'][':id']['screen_capture']['$put']
      >,
    ) {
      return parseResponse(client['2'].chat.conversations[':id'].screen_capture.$put(args, options))
    },
  })
}

export function injectPut2ChatConversationsIdScreenCapture<
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
                  (typeof client)['2']['chat']['conversations'][':id']['screen_capture']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['2']['chat']['conversations'][':id']['screen_capture']['$put']
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
    const mutationDefaults = getPut2ChatConversationsIdScreenCaptureMutationOptions<
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

export function getPost2ChatConversationsIdTypingMutationKey() {
  return ['2', '/2/chat/conversations/:id/typing', 'POST'] as const
}

export function getPost2ChatConversationsIdTypingMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['2']['chat']['conversations'][':id']['typing']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPost2ChatConversationsIdTypingMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2']['chat']['conversations'][':id']['typing']['$post']
      >,
    ) {
      return parseResponse(client['2'].chat.conversations[':id'].typing.$post(args, options))
    },
  })
}

export function injectPost2ChatConversationsIdTyping<
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
                ReturnType<(typeof client)['2']['chat']['conversations'][':id']['typing']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['2']['chat']['conversations'][':id']['typing']['$post']>,
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
    const mutationDefaults = getPost2ChatConversationsIdTypingMutationOptions<
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

export function getPost2ChatConversationsIdUnreadMutationKey() {
  return ['2', '/2/chat/conversations/:id/unread', 'POST'] as const
}

export function getPost2ChatConversationsIdUnreadMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['2']['chat']['conversations'][':id']['unread']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPost2ChatConversationsIdUnreadMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2']['chat']['conversations'][':id']['unread']['$post']
      >,
    ) {
      return parseResponse(client['2'].chat.conversations[':id'].unread.$post(args, options))
    },
  })
}

export function injectPost2ChatConversationsIdUnread<
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
                ReturnType<(typeof client)['2']['chat']['conversations'][':id']['unread']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['2']['chat']['conversations'][':id']['unread']['$post']>,
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
    const mutationDefaults = getPost2ChatConversationsIdUnreadMutationOptions<
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

export function getPost2ChatMediaUploadInitializeMutationKey() {
  return ['2', '/2/chat/media/upload/initialize', 'POST'] as const
}

export function getPost2ChatMediaUploadInitializeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['2']['chat']['media']['upload']['initialize']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPost2ChatMediaUploadInitializeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2']['chat']['media']['upload']['initialize']['$post']
      >,
    ) {
      return parseResponse(client['2'].chat.media.upload.initialize.$post(args, options))
    },
  })
}

export function injectPost2ChatMediaUploadInitialize<
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
                ReturnType<(typeof client)['2']['chat']['media']['upload']['initialize']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['2']['chat']['media']['upload']['initialize']['$post']>,
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
    const mutationDefaults = getPost2ChatMediaUploadInitializeMutationOptions<
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

export function getPost2ChatMediaUploadIdAppendMutationKey() {
  return ['2', '/2/chat/media/upload/:id/append', 'POST'] as const
}

export function getPost2ChatMediaUploadIdAppendMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['2']['chat']['media']['upload'][':id']['append']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPost2ChatMediaUploadIdAppendMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2']['chat']['media']['upload'][':id']['append']['$post']
      >,
    ) {
      return parseResponse(client['2'].chat.media.upload[':id'].append.$post(args, options))
    },
  })
}

export function injectPost2ChatMediaUploadIdAppend<
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
                  (typeof client)['2']['chat']['media']['upload'][':id']['append']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['2']['chat']['media']['upload'][':id']['append']['$post']>,
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
    const mutationDefaults = getPost2ChatMediaUploadIdAppendMutationOptions<
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

export function getPost2ChatMediaUploadIdFinalizeMutationKey() {
  return ['2', '/2/chat/media/upload/:id/finalize', 'POST'] as const
}

export function getPost2ChatMediaUploadIdFinalizeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['2']['chat']['media']['upload'][':id']['finalize']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPost2ChatMediaUploadIdFinalizeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2']['chat']['media']['upload'][':id']['finalize']['$post']
      >,
    ) {
      return parseResponse(client['2'].chat.media.upload[':id'].finalize.$post(args, options))
    },
  })
}

export function injectPost2ChatMediaUploadIdFinalize<
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
                  (typeof client)['2']['chat']['media']['upload'][':id']['finalize']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['2']['chat']['media']['upload'][':id']['finalize']['$post']
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
    const mutationDefaults = getPost2ChatMediaUploadIdFinalizeMutationOptions<
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

export function get2ChatMediaIdMediaHashKeyQueryKey(
  args: InferRequestType<(typeof client)['2']['chat']['media'][':id'][':media_hash_key']['$get']>,
) {
  return ['2', '/2/chat/media/:id/:media_hash_key', args] as const
}

export function get2ChatMediaIdMediaHashKeyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['chat']['media'][':id'][':media_hash_key']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2']['chat']['media'][':id'][':media_hash_key']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['2']['chat']['media'][':id'][':media_hash_key']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2ChatMediaIdMediaHashKeyQueryKey>
  >({
    queryKey: get2ChatMediaIdMediaHashKeyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2'].chat.media[':id'][':media_hash_key'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function inject2ChatMediaIdMediaHashKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['chat']['media'][':id'][':media_hash_key']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['2']['chat']['media'][':id'][':media_hash_key']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['2']['chat']['media'][':id'][':media_hash_key']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get2ChatMediaIdMediaHashKeyQueryKey>
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
      ...get2ChatMediaIdMediaHashKeyQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function get2ChatMessageRequestsQueryKey(
  args: InferRequestType<(typeof client)['2']['chat']['message_requests']['$get']>,
) {
  return ['2', '/2/chat/message_requests', args] as const
}

export function get2ChatMessageRequestsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['chat']['message_requests']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2']['chat']['message_requests']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2']['chat']['message_requests']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2ChatMessageRequestsQueryKey>
  >({
    queryKey: get2ChatMessageRequestsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2'].chat.message_requests.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function inject2ChatMessageRequests<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['chat']['message_requests']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['2']['chat']['message_requests']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['2']['chat']['message_requests']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get2ChatMessageRequestsQueryKey>
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
      ...get2ChatMessageRequestsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function get2ChatMessageRequestsIdQueryKey(
  args: InferRequestType<(typeof client)['2']['chat']['message_requests'][':id']['$get']>,
) {
  return ['2', '/2/chat/message_requests/:id', args] as const
}

export function get2ChatMessageRequestsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['chat']['message_requests'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2']['chat']['message_requests'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2']['chat']['message_requests'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2ChatMessageRequestsIdQueryKey>
  >({
    queryKey: get2ChatMessageRequestsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2'].chat.message_requests[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function inject2ChatMessageRequestsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['chat']['message_requests'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['2']['chat']['message_requests'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['2']['chat']['message_requests'][':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get2ChatMessageRequestsIdQueryKey>
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
      ...get2ChatMessageRequestsIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPost2ChatMessageRequestsIdAcceptMutationKey() {
  return ['2', '/2/chat/message_requests/:id/accept', 'POST'] as const
}

export function getPost2ChatMessageRequestsIdAcceptMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['2']['chat']['message_requests'][':id']['accept']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPost2ChatMessageRequestsIdAcceptMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2']['chat']['message_requests'][':id']['accept']['$post']
      >,
    ) {
      return parseResponse(client['2'].chat.message_requests[':id'].accept.$post(args, options))
    },
  })
}

export function injectPost2ChatMessageRequestsIdAccept<
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
                  (typeof client)['2']['chat']['message_requests'][':id']['accept']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['2']['chat']['message_requests'][':id']['accept']['$post']
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
    const mutationDefaults = getPost2ChatMessageRequestsIdAcceptMutationOptions<
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

export function get2ChatSettingsQueryKey(
  args: InferRequestType<(typeof client)['2']['chat']['settings']['$get']>,
) {
  return ['2', '/2/chat/settings', args] as const
}

export function get2ChatSettingsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['chat']['settings']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2']['chat']['settings']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['chat']['settings']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2ChatSettingsQueryKey>
  >({
    queryKey: get2ChatSettingsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2'].chat.settings.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function inject2ChatSettings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['chat']['settings']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['2']['chat']['settings']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['2']['chat']['settings']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get2ChatSettingsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...get2ChatSettingsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPut2ChatSettingsMutationKey() {
  return ['2', '/2/chat/settings', 'PUT'] as const
}

export function getPut2ChatSettingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['chat']['settings']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['2']['chat']['settings']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPut2ChatSettingsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['2']['chat']['settings']['$put']>) {
      return parseResponse(client['2'].chat.settings.$put(args, options))
    },
  })
}

export function injectPut2ChatSettings<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['2']['chat']['settings']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['2']['chat']['settings']['$put']>,
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
    const mutationDefaults = getPut2ChatSettingsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function get2CommunitiesSearchQueryKey(
  args: InferRequestType<(typeof client)['2']['communities']['search']['$get']>,
) {
  return ['2', '/2/communities/search', args] as const
}

export function get2CommunitiesSearchQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['communities']['search']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2']['communities']['search']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2']['communities']['search']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2CommunitiesSearchQueryKey>
  >({
    queryKey: get2CommunitiesSearchQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2'].communities.search.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function inject2CommunitiesSearch<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['communities']['search']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['2']['communities']['search']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['2']['communities']['search']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get2CommunitiesSearchQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...get2CommunitiesSearchQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function get2CommunitiesIdQueryKey(
  args: InferRequestType<(typeof client)['2']['communities'][':id']['$get']>,
) {
  return ['2', '/2/communities/:id', args] as const
}

export function get2CommunitiesIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['communities'][':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2']['communities'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2']['communities'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2CommunitiesIdQueryKey>
  >({
    queryKey: get2CommunitiesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2'].communities[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function inject2CommunitiesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['communities'][':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['2']['communities'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['2']['communities'][':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get2CommunitiesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...get2CommunitiesIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function get2ComplianceJobsQueryKey(
  args: InferRequestType<(typeof client)['2']['compliance']['jobs']['$get']>,
) {
  return ['2', '/2/compliance/jobs', args] as const
}

export function get2ComplianceJobsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['compliance']['jobs']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2']['compliance']['jobs']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2']['compliance']['jobs']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2ComplianceJobsQueryKey>
  >({
    queryKey: get2ComplianceJobsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2'].compliance.jobs.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function inject2ComplianceJobs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['compliance']['jobs']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['2']['compliance']['jobs']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['2']['compliance']['jobs']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get2ComplianceJobsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...get2ComplianceJobsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPost2ComplianceJobsMutationKey() {
  return ['2', '/2/compliance/jobs', 'POST'] as const
}

export function getPost2ComplianceJobsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2']['compliance']['jobs']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['2']['compliance']['jobs']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPost2ComplianceJobsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['2']['compliance']['jobs']['$post']>) {
      return parseResponse(client['2'].compliance.jobs.$post(args, options))
    },
  })
}

export function injectPost2ComplianceJobs<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['2']['compliance']['jobs']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['2']['compliance']['jobs']['$post']>,
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
    const mutationDefaults = getPost2ComplianceJobsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function get2ComplianceJobsIdQueryKey(
  args: InferRequestType<(typeof client)['2']['compliance']['jobs'][':id']['$get']>,
) {
  return ['2', '/2/compliance/jobs/:id', args] as const
}

export function get2ComplianceJobsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['compliance']['jobs'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2']['compliance']['jobs'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2']['compliance']['jobs'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2ComplianceJobsIdQueryKey>
  >({
    queryKey: get2ComplianceJobsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2'].compliance.jobs[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function inject2ComplianceJobsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['compliance']['jobs'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['2']['compliance']['jobs'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['2']['compliance']['jobs'][':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get2ComplianceJobsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...get2ComplianceJobsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getDelete2ComplianceJobsIdMutationKey() {
  return ['2', '/2/compliance/jobs/:id', 'DELETE'] as const
}

export function getDelete2ComplianceJobsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2']['compliance']['jobs'][':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['2']['compliance']['jobs'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDelete2ComplianceJobsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['2']['compliance']['jobs'][':id']['$delete']>,
    ) {
      return parseResponse(client['2'].compliance.jobs[':id'].$delete(args, options))
    },
  })
}

export function injectDelete2ComplianceJobsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['2']['compliance']['jobs'][':id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['2']['compliance']['jobs'][':id']['$delete']>,
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
    const mutationDefaults = getDelete2ComplianceJobsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function get2ComplianceJobsIdDownloadQueryKey(
  args: InferRequestType<(typeof client)['2']['compliance']['jobs'][':id']['download']['$get']>,
) {
  return ['2', '/2/compliance/jobs/:id/download', args] as const
}

export function get2ComplianceJobsIdDownloadQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['compliance']['jobs'][':id']['download']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2']['compliance']['jobs'][':id']['download']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2']['compliance']['jobs'][':id']['download']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2ComplianceJobsIdDownloadQueryKey>
  >({
    queryKey: get2ComplianceJobsIdDownloadQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2'].compliance.jobs[':id'].download.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function inject2ComplianceJobsIdDownload<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['compliance']['jobs'][':id']['download']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['2']['compliance']['jobs'][':id']['download']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['2']['compliance']['jobs'][':id']['download']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get2ComplianceJobsIdDownloadQueryKey>
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
      ...get2ComplianceJobsIdDownloadQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPut2ComplianceJobsIdUploadMutationKey() {
  return ['2', '/2/compliance/jobs/:id/upload', 'PUT'] as const
}

export function getPut2ComplianceJobsIdUploadMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2']['compliance']['jobs'][':id']['upload']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['2']['compliance']['jobs'][':id']['upload']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPut2ComplianceJobsIdUploadMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['2']['compliance']['jobs'][':id']['upload']['$put']>,
    ) {
      return parseResponse(client['2'].compliance.jobs[':id'].upload.$put(args, options))
    },
  })
}

export function injectPut2ComplianceJobsIdUpload<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['2']['compliance']['jobs'][':id']['upload']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['2']['compliance']['jobs'][':id']['upload']['$put']>,
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
    const mutationDefaults = getPut2ComplianceJobsIdUploadMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function get2ConnectionsQueryKey(
  args: InferRequestType<(typeof client)['2']['connections']['$get']>,
) {
  return ['2', '/2/connections', args] as const
}

export function get2ConnectionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['connections']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2']['connections']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['connections']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2ConnectionsQueryKey>
  >({
    queryKey: get2ConnectionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2'].connections.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function inject2Connections<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['connections']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['2']['connections']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['connections']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof get2ConnectionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...get2ConnectionsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getDelete2ConnectionsMutationKey() {
  return ['2', '/2/connections', 'DELETE'] as const
}

export function getDelete2ConnectionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['connections']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['2']['connections']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDelete2ConnectionsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['2']['connections']['$delete']>) {
      return parseResponse(client['2'].connections.$delete(args, options))
    },
  })
}

export function injectDelete2Connections<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['2']['connections']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['2']['connections']['$delete']>,
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
    const mutationDefaults = getDelete2ConnectionsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDelete2ConnectionsAllMutationKey() {
  return ['2', '/2/connections/all', 'DELETE'] as const
}

export function getDelete2ConnectionsAllMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2']['connections']['all']['$delete']>>
        >
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getDelete2ConnectionsAllMutationKey(),
    async mutationFn() {
      return parseResponse(client['2'].connections.all.$delete(undefined, options))
    },
  })
}

export function injectDelete2ConnectionsAll<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['2']['connections']['all']['$delete']>>
            >
          >
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
    const mutationDefaults = getDelete2ConnectionsAllMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDelete2ConnectionsEndpointIdMutationKey() {
  return ['2', '/2/connections/:endpoint_id', 'DELETE'] as const
}

export function getDelete2ConnectionsEndpointIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2']['connections'][':endpoint_id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['2']['connections'][':endpoint_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDelete2ConnectionsEndpointIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['2']['connections'][':endpoint_id']['$delete']>,
    ) {
      return parseResponse(client['2'].connections[':endpoint_id'].$delete(args, options))
    },
  })
}

export function injectDelete2ConnectionsEndpointId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['2']['connections'][':endpoint_id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['2']['connections'][':endpoint_id']['$delete']>,
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
    const mutationDefaults = getDelete2ConnectionsEndpointIdMutationOptions<
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

export function getPost2DmConversationsMutationKey() {
  return ['2', '/2/dm_conversations', 'POST'] as const
}

export function getPost2DmConversationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['dm_conversations']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['2']['dm_conversations']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPost2DmConversationsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['2']['dm_conversations']['$post']>) {
      return parseResponse(client['2'].dm_conversations.$post(args, options))
    },
  })
}

export function injectPost2DmConversations<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['2']['dm_conversations']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['2']['dm_conversations']['$post']>,
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
    const mutationDefaults = getPost2DmConversationsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function get2DmConversationsMediaDmIdMediaIdResourceIdQueryKey(
  args: InferRequestType<
    (typeof client)['2']['dm_conversations']['media'][':dm_id'][':media_id'][':resource_id']['$get']
  >,
) {
  return ['2', '/2/dm_conversations/media/:dm_id/:media_id/:resource_id', args] as const
}

export function get2DmConversationsMediaDmIdMediaIdResourceIdQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2']['dm_conversations']['media'][':dm_id'][':media_id'][':resource_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof get2DmConversationsMediaDmIdMediaIdResourceIdQueryKey>
  >({
    queryKey: get2DmConversationsMediaDmIdMediaIdResourceIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2'].dm_conversations.media[':dm_id'][':media_id'][':resource_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function inject2DmConversationsMediaDmIdMediaIdResourceId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['2']['dm_conversations']['media'][':dm_id'][':media_id'][':resource_id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof get2DmConversationsMediaDmIdMediaIdResourceIdQueryKey>
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
      ...get2DmConversationsMediaDmIdMediaIdResourceIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function get2DmConversationsWithParticipantIdDmEventsQueryKey(
  args: InferRequestType<
    (typeof client)['2']['dm_conversations']['with'][':participant_id']['dm_events']['$get']
  >,
) {
  return ['2', '/2/dm_conversations/with/:participant_id/dm_events', args] as const
}

export function get2DmConversationsWithParticipantIdDmEventsQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2']['dm_conversations']['with'][':participant_id']['dm_events']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof get2DmConversationsWithParticipantIdDmEventsQueryKey>
  >({
    queryKey: get2DmConversationsWithParticipantIdDmEventsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2'].dm_conversations.with[':participant_id'].dm_events.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function inject2DmConversationsWithParticipantIdDmEvents<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['2']['dm_conversations']['with'][':participant_id']['dm_events']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof get2DmConversationsWithParticipantIdDmEventsQueryKey>
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
      ...get2DmConversationsWithParticipantIdDmEventsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPost2DmConversationsWithParticipantIdMessagesMutationKey() {
  return ['2', '/2/dm_conversations/with/:participant_id/messages', 'POST'] as const
}

export function getPost2DmConversationsWithParticipantIdMessagesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['2']['dm_conversations']['with'][':participant_id']['messages']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPost2DmConversationsWithParticipantIdMessagesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2']['dm_conversations']['with'][':participant_id']['messages']['$post']
      >,
    ) {
      return parseResponse(
        client['2'].dm_conversations.with[':participant_id'].messages.$post(args, options),
      )
    },
  })
}

export function injectPost2DmConversationsWithParticipantIdMessages<
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
                  (typeof client)['2']['dm_conversations']['with'][':participant_id']['messages']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['2']['dm_conversations']['with'][':participant_id']['messages']['$post']
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
    const mutationDefaults = getPost2DmConversationsWithParticipantIdMessagesMutationOptions<
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

export function getPost2DmConversationsDmConversationIdMessagesMutationKey() {
  return ['2', '/2/dm_conversations/:dm_conversation_id/messages', 'POST'] as const
}

export function getPost2DmConversationsDmConversationIdMessagesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['2']['dm_conversations'][':dm_conversation_id']['messages']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPost2DmConversationsDmConversationIdMessagesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2']['dm_conversations'][':dm_conversation_id']['messages']['$post']
      >,
    ) {
      return parseResponse(
        client['2'].dm_conversations[':dm_conversation_id'].messages.$post(args, options),
      )
    },
  })
}

export function injectPost2DmConversationsDmConversationIdMessages<
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
                  (typeof client)['2']['dm_conversations'][':dm_conversation_id']['messages']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['2']['dm_conversations'][':dm_conversation_id']['messages']['$post']
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
    const mutationDefaults = getPost2DmConversationsDmConversationIdMessagesMutationOptions<
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

export function get2DmConversationsIdDmEventsQueryKey(
  args: InferRequestType<(typeof client)['2']['dm_conversations'][':id']['dm_events']['$get']>,
) {
  return ['2', '/2/dm_conversations/:id/dm_events', args] as const
}

export function get2DmConversationsIdDmEventsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['dm_conversations'][':id']['dm_events']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2']['dm_conversations'][':id']['dm_events']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2']['dm_conversations'][':id']['dm_events']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2DmConversationsIdDmEventsQueryKey>
  >({
    queryKey: get2DmConversationsIdDmEventsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2'].dm_conversations[':id'].dm_events.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function inject2DmConversationsIdDmEvents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['dm_conversations'][':id']['dm_events']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['2']['dm_conversations'][':id']['dm_events']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['2']['dm_conversations'][':id']['dm_events']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get2DmConversationsIdDmEventsQueryKey>
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
      ...get2DmConversationsIdDmEventsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function get2DmEventsQueryKey(
  args: InferRequestType<(typeof client)['2']['dm_events']['$get']>,
) {
  return ['2', '/2/dm_events', args] as const
}

export function get2DmEventsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['dm_events']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2']['dm_events']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['dm_events']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2DmEventsQueryKey>
  >({
    queryKey: get2DmEventsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2'].dm_events.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function inject2DmEvents<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['dm_events']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['2']['dm_events']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['dm_events']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof get2DmEventsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...get2DmEventsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function get2DmEventsEventIdQueryKey(
  args: InferRequestType<(typeof client)['2']['dm_events'][':event_id']['$get']>,
) {
  return ['2', '/2/dm_events/:event_id', args] as const
}

export function get2DmEventsEventIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['dm_events'][':event_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2']['dm_events'][':event_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2']['dm_events'][':event_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2DmEventsEventIdQueryKey>
  >({
    queryKey: get2DmEventsEventIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2'].dm_events[':event_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function inject2DmEventsEventId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['dm_events'][':event_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['2']['dm_events'][':event_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['2']['dm_events'][':event_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get2DmEventsEventIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...get2DmEventsEventIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getDelete2DmEventsEventIdMutationKey() {
  return ['2', '/2/dm_events/:event_id', 'DELETE'] as const
}

export function getDelete2DmEventsEventIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2']['dm_events'][':event_id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['2']['dm_events'][':event_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDelete2DmEventsEventIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['2']['dm_events'][':event_id']['$delete']>,
    ) {
      return parseResponse(client['2'].dm_events[':event_id'].$delete(args, options))
    },
  })
}

export function injectDelete2DmEventsEventId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['2']['dm_events'][':event_id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['2']['dm_events'][':event_id']['$delete']>,
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
    const mutationDefaults = getDelete2DmEventsEventIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function get2LikesComplianceStreamQueryKey(
  args: InferRequestType<(typeof client)['2']['likes']['compliance']['stream']['$get']>,
) {
  return ['2', '/2/likes/compliance/stream', args] as const
}

export function get2LikesComplianceStreamQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['likes']['compliance']['stream']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2']['likes']['compliance']['stream']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2']['likes']['compliance']['stream']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2LikesComplianceStreamQueryKey>
  >({
    queryKey: get2LikesComplianceStreamQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2'].likes.compliance.stream.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function inject2LikesComplianceStream<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['likes']['compliance']['stream']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['2']['likes']['compliance']['stream']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['2']['likes']['compliance']['stream']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get2LikesComplianceStreamQueryKey>
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
      ...get2LikesComplianceStreamQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function get2LikesFirehoseStreamQueryKey(
  args: InferRequestType<(typeof client)['2']['likes']['firehose']['stream']['$get']>,
) {
  return ['2', '/2/likes/firehose/stream', args] as const
}

export function get2LikesFirehoseStreamQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['likes']['firehose']['stream']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2']['likes']['firehose']['stream']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2']['likes']['firehose']['stream']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2LikesFirehoseStreamQueryKey>
  >({
    queryKey: get2LikesFirehoseStreamQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2'].likes.firehose.stream.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function inject2LikesFirehoseStream<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['likes']['firehose']['stream']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['2']['likes']['firehose']['stream']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['2']['likes']['firehose']['stream']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get2LikesFirehoseStreamQueryKey>
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
      ...get2LikesFirehoseStreamQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function get2LikesSample10StreamQueryKey(
  args: InferRequestType<(typeof client)['2']['likes']['sample10']['stream']['$get']>,
) {
  return ['2', '/2/likes/sample10/stream', args] as const
}

export function get2LikesSample10StreamQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['likes']['sample10']['stream']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2']['likes']['sample10']['stream']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2']['likes']['sample10']['stream']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2LikesSample10StreamQueryKey>
  >({
    queryKey: get2LikesSample10StreamQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2'].likes.sample10.stream.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function inject2LikesSample10Stream<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['likes']['sample10']['stream']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['2']['likes']['sample10']['stream']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['2']['likes']['sample10']['stream']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get2LikesSample10StreamQueryKey>
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
      ...get2LikesSample10StreamQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPost2ListsMutationKey() {
  return ['2', '/2/lists', 'POST'] as const
}

export function getPost2ListsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['lists']['$post']>>>>
    >,
    TError,
    InferRequestType<(typeof client)['2']['lists']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPost2ListsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['2']['lists']['$post']>) {
      return parseResponse(client['2'].lists.$post(args, options))
    },
  })
}

export function injectPost2Lists<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['lists']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)['2']['lists']['$post']>,
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
    const mutationDefaults = getPost2ListsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function get2ListsIdQueryKey(
  args: InferRequestType<(typeof client)['2']['lists'][':id']['$get']>,
) {
  return ['2', '/2/lists/:id', args] as const
}

export function get2ListsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['lists'][':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2']['lists'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['lists'][':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2ListsIdQueryKey>
  >({
    queryKey: get2ListsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2'].lists[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function inject2ListsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['lists'][':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['2']['lists'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['lists'][':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof get2ListsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...get2ListsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPut2ListsIdMutationKey() {
  return ['2', '/2/lists/:id', 'PUT'] as const
}

export function getPut2ListsIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['lists'][':id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['2']['lists'][':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPut2ListsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['2']['lists'][':id']['$put']>) {
      return parseResponse(client['2'].lists[':id'].$put(args, options))
    },
  })
}

export function injectPut2ListsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['lists'][':id']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)['2']['lists'][':id']['$put']>,
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
    const mutationDefaults = getPut2ListsIdMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDelete2ListsIdMutationKey() {
  return ['2', '/2/lists/:id', 'DELETE'] as const
}

export function getDelete2ListsIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['lists'][':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['2']['lists'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDelete2ListsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['2']['lists'][':id']['$delete']>) {
      return parseResponse(client['2'].lists[':id'].$delete(args, options))
    },
  })
}

export function injectDelete2ListsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['2']['lists'][':id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['2']['lists'][':id']['$delete']>,
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
    const mutationDefaults = getDelete2ListsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function get2ListsIdFollowersQueryKey(
  args: InferRequestType<(typeof client)['2']['lists'][':id']['followers']['$get']>,
) {
  return ['2', '/2/lists/:id/followers', args] as const
}

export function get2ListsIdFollowersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['lists'][':id']['followers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2']['lists'][':id']['followers']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2']['lists'][':id']['followers']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2ListsIdFollowersQueryKey>
  >({
    queryKey: get2ListsIdFollowersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2'].lists[':id'].followers.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function inject2ListsIdFollowers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['lists'][':id']['followers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['2']['lists'][':id']['followers']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['2']['lists'][':id']['followers']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get2ListsIdFollowersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...get2ListsIdFollowersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function get2ListsIdMembersQueryKey(
  args: InferRequestType<(typeof client)['2']['lists'][':id']['members']['$get']>,
) {
  return ['2', '/2/lists/:id/members', args] as const
}

export function get2ListsIdMembersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['lists'][':id']['members']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2']['lists'][':id']['members']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2']['lists'][':id']['members']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2ListsIdMembersQueryKey>
  >({
    queryKey: get2ListsIdMembersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2'].lists[':id'].members.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function inject2ListsIdMembers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['lists'][':id']['members']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['2']['lists'][':id']['members']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['2']['lists'][':id']['members']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get2ListsIdMembersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...get2ListsIdMembersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPost2ListsIdMembersMutationKey() {
  return ['2', '/2/lists/:id/members', 'POST'] as const
}

export function getPost2ListsIdMembersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2']['lists'][':id']['members']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['2']['lists'][':id']['members']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPost2ListsIdMembersMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['2']['lists'][':id']['members']['$post']>,
    ) {
      return parseResponse(client['2'].lists[':id'].members.$post(args, options))
    },
  })
}

export function injectPost2ListsIdMembers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['2']['lists'][':id']['members']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['2']['lists'][':id']['members']['$post']>,
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
    const mutationDefaults = getPost2ListsIdMembersMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDelete2ListsIdMembersUserIdMutationKey() {
  return ['2', '/2/lists/:id/members/:user_id', 'DELETE'] as const
}

export function getDelete2ListsIdMembersUserIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['2']['lists'][':id']['members'][':user_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDelete2ListsIdMembersUserIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2']['lists'][':id']['members'][':user_id']['$delete']
      >,
    ) {
      return parseResponse(client['2'].lists[':id'].members[':user_id'].$delete(args, options))
    },
  })
}

export function injectDelete2ListsIdMembersUserId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<(typeof client)['2']['lists'][':id']['members'][':user_id']['$delete']>,
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
    const mutationDefaults = getDelete2ListsIdMembersUserIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function get2ListsIdTweetsQueryKey(
  args: InferRequestType<(typeof client)['2']['lists'][':id']['tweets']['$get']>,
) {
  return ['2', '/2/lists/:id/tweets', args] as const
}

export function get2ListsIdTweetsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['lists'][':id']['tweets']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2']['lists'][':id']['tweets']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2']['lists'][':id']['tweets']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2ListsIdTweetsQueryKey>
  >({
    queryKey: get2ListsIdTweetsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2'].lists[':id'].tweets.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function inject2ListsIdTweets<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['lists'][':id']['tweets']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['2']['lists'][':id']['tweets']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['2']['lists'][':id']['tweets']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get2ListsIdTweetsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...get2ListsIdTweetsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function get2MediaQueryKey(args: InferRequestType<(typeof client)['2']['media']['$get']>) {
  return ['2', '/2/media', args] as const
}

export function get2MediaQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['media']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client)['2']['media']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['media']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof get2MediaQueryKey>
  >({
    queryKey: get2MediaQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2'].media.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function inject2Media<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['media']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['2']['media']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['media']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof get2MediaQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...get2MediaQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPost2MediaAmplifyPostsMutationKey() {
  return ['2', '/2/media/amplify/posts', 'POST'] as const
}

export function getPost2MediaAmplifyPostsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2']['media']['amplify']['posts']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['2']['media']['amplify']['posts']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPost2MediaAmplifyPostsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['2']['media']['amplify']['posts']['$post']>,
    ) {
      return parseResponse(client['2'].media.amplify.posts.$post(args, options))
    },
  })
}

export function injectPost2MediaAmplifyPosts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['2']['media']['amplify']['posts']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['2']['media']['amplify']['posts']['$post']>,
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
    const mutationDefaults = getPost2MediaAmplifyPostsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function get2MediaAmplifyProgramsQueryKey() {
  return ['2', '/2/media/amplify/programs'] as const
}

export function get2MediaAmplifyProgramsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['media']['amplify']['programs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2']['media']['amplify']['programs']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2MediaAmplifyProgramsQueryKey>
  >({
    queryKey: get2MediaAmplifyProgramsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client['2'].media.amplify.programs.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function inject2MediaAmplifyPrograms<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['media']['amplify']['programs']['$get']>>
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
              Awaited<ReturnType<(typeof client)['2']['media']['amplify']['programs']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get2MediaAmplifyProgramsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...get2MediaAmplifyProgramsQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function get2MediaAmplifyProgramsProgramIdQueryKey(
  args: InferRequestType<
    (typeof client)['2']['media']['amplify']['programs'][':program_id']['$get']
  >,
) {
  return ['2', '/2/media/amplify/programs/:program_id', args] as const
}

export function get2MediaAmplifyProgramsProgramIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['2']['media']['amplify']['programs'][':program_id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2']['media']['amplify']['programs'][':program_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['2']['media']['amplify']['programs'][':program_id']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2MediaAmplifyProgramsProgramIdQueryKey>
  >({
    queryKey: get2MediaAmplifyProgramsProgramIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2'].media.amplify.programs[':program_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function inject2MediaAmplifyProgramsProgramId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['2']['media']['amplify']['programs'][':program_id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['2']['media']['amplify']['programs'][':program_id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof get2MediaAmplifyProgramsProgramIdQueryKey>
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
      ...get2MediaAmplifyProgramsProgramIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function get2MediaAmplifyProgramsProgramIdPostsQueryKey(
  args: InferRequestType<
    (typeof client)['2']['media']['amplify']['programs'][':program_id']['posts']['$get']
  >,
) {
  return ['2', '/2/media/amplify/programs/:program_id/posts', args] as const
}

export function get2MediaAmplifyProgramsProgramIdPostsQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2']['media']['amplify']['programs'][':program_id']['posts']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof get2MediaAmplifyProgramsProgramIdPostsQueryKey>
  >({
    queryKey: get2MediaAmplifyProgramsProgramIdPostsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2'].media.amplify.programs[':program_id'].posts.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function inject2MediaAmplifyProgramsProgramIdPosts<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['2']['media']['amplify']['programs'][':program_id']['posts']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof get2MediaAmplifyProgramsProgramIdPostsQueryKey>
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
      ...get2MediaAmplifyProgramsProgramIdPostsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function get2MediaAnalyticsQueryKey(
  args: InferRequestType<(typeof client)['2']['media']['analytics']['$get']>,
) {
  return ['2', '/2/media/analytics', args] as const
}

export function get2MediaAnalyticsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['media']['analytics']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2']['media']['analytics']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2']['media']['analytics']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2MediaAnalyticsQueryKey>
  >({
    queryKey: get2MediaAnalyticsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2'].media.analytics.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function inject2MediaAnalytics<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['media']['analytics']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['2']['media']['analytics']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['2']['media']['analytics']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get2MediaAnalyticsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...get2MediaAnalyticsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPost2MediaLibraryMutationKey() {
  return ['2', '/2/media/library', 'POST'] as const
}

export function getPost2MediaLibraryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['media']['library']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['2']['media']['library']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPost2MediaLibraryMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['2']['media']['library']['$post']>) {
      return parseResponse(client['2'].media.library.$post(args, options))
    },
  })
}

export function injectPost2MediaLibrary<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['2']['media']['library']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['2']['media']['library']['$post']>,
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
    const mutationDefaults = getPost2MediaLibraryMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function get2MediaLibraryCategoriesQueryKey(
  args: InferRequestType<(typeof client)['2']['media']['library']['categories']['$get']>,
) {
  return ['2', '/2/media/library/categories', args] as const
}

export function get2MediaLibraryCategoriesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['media']['library']['categories']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2']['media']['library']['categories']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2']['media']['library']['categories']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2MediaLibraryCategoriesQueryKey>
  >({
    queryKey: get2MediaLibraryCategoriesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2'].media.library.categories.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function inject2MediaLibraryCategories<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['media']['library']['categories']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['2']['media']['library']['categories']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['2']['media']['library']['categories']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get2MediaLibraryCategoriesQueryKey>
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
      ...get2MediaLibraryCategoriesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPut2MediaLibraryMediaKeyMutationKey() {
  return ['2', '/2/media/library/:media_key', 'PUT'] as const
}

export function getPut2MediaLibraryMediaKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2']['media']['library'][':media_key']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['2']['media']['library'][':media_key']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPut2MediaLibraryMediaKeyMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['2']['media']['library'][':media_key']['$put']>,
    ) {
      return parseResponse(client['2'].media.library[':media_key'].$put(args, options))
    },
  })
}

export function injectPut2MediaLibraryMediaKey<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['2']['media']['library'][':media_key']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['2']['media']['library'][':media_key']['$put']>,
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
    const mutationDefaults = getPut2MediaLibraryMediaKeyMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDelete2MediaLibraryMediaKeyMutationKey() {
  return ['2', '/2/media/library/:media_key', 'DELETE'] as const
}

export function getDelete2MediaLibraryMediaKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2']['media']['library'][':media_key']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['2']['media']['library'][':media_key']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDelete2MediaLibraryMediaKeyMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['2']['media']['library'][':media_key']['$delete']>,
    ) {
      return parseResponse(client['2'].media.library[':media_key'].$delete(args, options))
    },
  })
}

export function injectDelete2MediaLibraryMediaKey<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['2']['media']['library'][':media_key']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['2']['media']['library'][':media_key']['$delete']>,
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
    const mutationDefaults = getDelete2MediaLibraryMediaKeyMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPost2MediaMetadataMutationKey() {
  return ['2', '/2/media/metadata', 'POST'] as const
}

export function getPost2MediaMetadataMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2']['media']['metadata']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['2']['media']['metadata']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPost2MediaMetadataMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['2']['media']['metadata']['$post']>) {
      return parseResponse(client['2'].media.metadata.$post(args, options))
    },
  })
}

export function injectPost2MediaMetadata<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['2']['media']['metadata']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['2']['media']['metadata']['$post']>,
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
    const mutationDefaults = getPost2MediaMetadataMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPost2MediaSubtitlesMutationKey() {
  return ['2', '/2/media/subtitles', 'POST'] as const
}

export function getPost2MediaSubtitlesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2']['media']['subtitles']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['2']['media']['subtitles']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPost2MediaSubtitlesMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['2']['media']['subtitles']['$post']>) {
      return parseResponse(client['2'].media.subtitles.$post(args, options))
    },
  })
}

export function injectPost2MediaSubtitles<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['2']['media']['subtitles']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['2']['media']['subtitles']['$post']>,
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
    const mutationDefaults = getPost2MediaSubtitlesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDelete2MediaSubtitlesMutationKey() {
  return ['2', '/2/media/subtitles', 'DELETE'] as const
}

export function getDelete2MediaSubtitlesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2']['media']['subtitles']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['2']['media']['subtitles']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDelete2MediaSubtitlesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['2']['media']['subtitles']['$delete']>,
    ) {
      return parseResponse(client['2'].media.subtitles.$delete(args, options))
    },
  })
}

export function injectDelete2MediaSubtitles<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['2']['media']['subtitles']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['2']['media']['subtitles']['$delete']>,
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
    const mutationDefaults = getDelete2MediaSubtitlesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function get2MediaUploadQueryKey(
  args: InferRequestType<(typeof client)['2']['media']['upload']['$get']>,
) {
  return ['2', '/2/media/upload', args] as const
}

export function get2MediaUploadQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['media']['upload']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2']['media']['upload']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['media']['upload']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2MediaUploadQueryKey>
  >({
    queryKey: get2MediaUploadQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2'].media.upload.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function inject2MediaUpload<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['media']['upload']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['2']['media']['upload']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['2']['media']['upload']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get2MediaUploadQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...get2MediaUploadQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPost2MediaUploadMutationKey() {
  return ['2', '/2/media/upload', 'POST'] as const
}

export function getPost2MediaUploadMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['media']['upload']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['2']['media']['upload']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPost2MediaUploadMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['2']['media']['upload']['$post']>) {
      return parseResponse(client['2'].media.upload.$post(args, options))
    },
  })
}

export function injectPost2MediaUpload<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['2']['media']['upload']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['2']['media']['upload']['$post']>,
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
    const mutationDefaults = getPost2MediaUploadMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPost2MediaUploadInitializeMutationKey() {
  return ['2', '/2/media/upload/initialize', 'POST'] as const
}

export function getPost2MediaUploadInitializeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2']['media']['upload']['initialize']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['2']['media']['upload']['initialize']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPost2MediaUploadInitializeMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['2']['media']['upload']['initialize']['$post']>,
    ) {
      return parseResponse(client['2'].media.upload.initialize.$post(args, options))
    },
  })
}

export function injectPost2MediaUploadInitialize<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['2']['media']['upload']['initialize']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['2']['media']['upload']['initialize']['$post']>,
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
    const mutationDefaults = getPost2MediaUploadInitializeMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPost2MediaUploadIdAppendMutationKey() {
  return ['2', '/2/media/upload/:id/append', 'POST'] as const
}

export function getPost2MediaUploadIdAppendMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2']['media']['upload'][':id']['append']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['2']['media']['upload'][':id']['append']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPost2MediaUploadIdAppendMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['2']['media']['upload'][':id']['append']['$post']>,
    ) {
      return parseResponse(client['2'].media.upload[':id'].append.$post(args, options))
    },
  })
}

export function injectPost2MediaUploadIdAppend<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['2']['media']['upload'][':id']['append']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['2']['media']['upload'][':id']['append']['$post']>,
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
    const mutationDefaults = getPost2MediaUploadIdAppendMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPost2MediaUploadIdFinalizeMutationKey() {
  return ['2', '/2/media/upload/:id/finalize', 'POST'] as const
}

export function getPost2MediaUploadIdFinalizeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2']['media']['upload'][':id']['finalize']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['2']['media']['upload'][':id']['finalize']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPost2MediaUploadIdFinalizeMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['2']['media']['upload'][':id']['finalize']['$post']>,
    ) {
      return parseResponse(client['2'].media.upload[':id'].finalize.$post(args, options))
    },
  })
}

export function injectPost2MediaUploadIdFinalize<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['2']['media']['upload'][':id']['finalize']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['2']['media']['upload'][':id']['finalize']['$post']>,
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
    const mutationDefaults = getPost2MediaUploadIdFinalizeMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function get2MediaMediaKeyQueryKey(
  args: InferRequestType<(typeof client)['2']['media'][':media_key']['$get']>,
) {
  return ['2', '/2/media/:media_key', args] as const
}

export function get2MediaMediaKeyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['media'][':media_key']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2']['media'][':media_key']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2']['media'][':media_key']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2MediaMediaKeyQueryKey>
  >({
    queryKey: get2MediaMediaKeyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2'].media[':media_key'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function inject2MediaMediaKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['media'][':media_key']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['2']['media'][':media_key']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['2']['media'][':media_key']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get2MediaMediaKeyQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...get2MediaMediaKeyQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function get2NewsSearchQueryKey(
  args: InferRequestType<(typeof client)['2']['news']['search']['$get']>,
) {
  return ['2', '/2/news/search', args] as const
}

export function get2NewsSearchQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['news']['search']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2']['news']['search']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['news']['search']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2NewsSearchQueryKey>
  >({
    queryKey: get2NewsSearchQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2'].news.search.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function inject2NewsSearch<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['news']['search']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['2']['news']['search']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['2']['news']['search']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get2NewsSearchQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...get2NewsSearchQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function get2NewsIdQueryKey(
  args: InferRequestType<(typeof client)['2']['news'][':id']['$get']>,
) {
  return ['2', '/2/news/:id', args] as const
}

export function get2NewsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['news'][':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2']['news'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['news'][':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2NewsIdQueryKey>
  >({
    queryKey: get2NewsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2'].news[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function inject2NewsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['news'][':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['2']['news'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['news'][':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof get2NewsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...get2NewsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPost2NotesMutationKey() {
  return ['2', '/2/notes', 'POST'] as const
}

export function getPost2NotesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['notes']['$post']>>>>
    >,
    TError,
    InferRequestType<(typeof client)['2']['notes']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPost2NotesMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['2']['notes']['$post']>) {
      return parseResponse(client['2'].notes.$post(args, options))
    },
  })
}

export function injectPost2Notes<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['notes']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)['2']['notes']['$post']>,
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
    const mutationDefaults = getPost2NotesMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPost2NotesEvaluateMutationKey() {
  return ['2', '/2/notes/evaluate', 'POST'] as const
}

export function getPost2NotesEvaluateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2']['notes']['evaluate']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['2']['notes']['evaluate']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPost2NotesEvaluateMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['2']['notes']['evaluate']['$post']>) {
      return parseResponse(client['2'].notes.evaluate.$post(args, options))
    },
  })
}

export function injectPost2NotesEvaluate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['2']['notes']['evaluate']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['2']['notes']['evaluate']['$post']>,
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
    const mutationDefaults = getPost2NotesEvaluateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function get2NotesSearchNotesWrittenQueryKey(
  args: InferRequestType<(typeof client)['2']['notes']['search']['notes_written']['$get']>,
) {
  return ['2', '/2/notes/search/notes_written', args] as const
}

export function get2NotesSearchNotesWrittenQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['notes']['search']['notes_written']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2']['notes']['search']['notes_written']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2']['notes']['search']['notes_written']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2NotesSearchNotesWrittenQueryKey>
  >({
    queryKey: get2NotesSearchNotesWrittenQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2'].notes.search.notes_written.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function inject2NotesSearchNotesWritten<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['notes']['search']['notes_written']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['2']['notes']['search']['notes_written']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['2']['notes']['search']['notes_written']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get2NotesSearchNotesWrittenQueryKey>
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
      ...get2NotesSearchNotesWrittenQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function get2NotesSearchPostsEligibleForNotesQueryKey(
  args: InferRequestType<
    (typeof client)['2']['notes']['search']['posts_eligible_for_notes']['$get']
  >,
) {
  return ['2', '/2/notes/search/posts_eligible_for_notes', args] as const
}

export function get2NotesSearchPostsEligibleForNotesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['2']['notes']['search']['posts_eligible_for_notes']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2']['notes']['search']['posts_eligible_for_notes']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['2']['notes']['search']['posts_eligible_for_notes']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2NotesSearchPostsEligibleForNotesQueryKey>
  >({
    queryKey: get2NotesSearchPostsEligibleForNotesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2'].notes.search.posts_eligible_for_notes.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function inject2NotesSearchPostsEligibleForNotes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['2']['notes']['search']['posts_eligible_for_notes']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['2']['notes']['search']['posts_eligible_for_notes']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof get2NotesSearchPostsEligibleForNotesQueryKey>
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
      ...get2NotesSearchPostsEligibleForNotesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getDelete2NotesIdMutationKey() {
  return ['2', '/2/notes/:id', 'DELETE'] as const
}

export function getDelete2NotesIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['notes'][':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['2']['notes'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDelete2NotesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['2']['notes'][':id']['$delete']>) {
      return parseResponse(client['2'].notes[':id'].$delete(args, options))
    },
  })
}

export function injectDelete2NotesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['2']['notes'][':id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['2']['notes'][':id']['$delete']>,
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
    const mutationDefaults = getDelete2NotesIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function get2OpenapiJsonQueryKey() {
  return ['2', '/2/openapi.json'] as const
}

export function get2OpenapiJsonQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['openapi.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['openapi.json']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2OpenapiJsonQueryKey>
  >({
    queryKey: get2OpenapiJsonQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client['2']['openapi.json'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function inject2OpenapiJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['openapi.json']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['openapi.json']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof get2OpenapiJsonQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...get2OpenapiJsonQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function get2PostsDraftsQueryKey(
  args: InferRequestType<(typeof client)['2']['posts']['drafts']['$get']>,
) {
  return ['2', '/2/posts/drafts', args] as const
}

export function get2PostsDraftsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['posts']['drafts']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2']['posts']['drafts']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['posts']['drafts']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2PostsDraftsQueryKey>
  >({
    queryKey: get2PostsDraftsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2'].posts.drafts.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function inject2PostsDrafts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['posts']['drafts']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['2']['posts']['drafts']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['2']['posts']['drafts']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get2PostsDraftsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...get2PostsDraftsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPost2PostsDraftsMutationKey() {
  return ['2', '/2/posts/drafts', 'POST'] as const
}

export function getPost2PostsDraftsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['posts']['drafts']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['2']['posts']['drafts']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPost2PostsDraftsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['2']['posts']['drafts']['$post']>) {
      return parseResponse(client['2'].posts.drafts.$post(args, options))
    },
  })
}

export function injectPost2PostsDrafts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['2']['posts']['drafts']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['2']['posts']['drafts']['$post']>,
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
    const mutationDefaults = getPost2PostsDraftsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDelete2PostsDraftsIdMutationKey() {
  return ['2', '/2/posts/drafts/:id', 'DELETE'] as const
}

export function getDelete2PostsDraftsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2']['posts']['drafts'][':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['2']['posts']['drafts'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDelete2PostsDraftsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['2']['posts']['drafts'][':id']['$delete']>,
    ) {
      return parseResponse(client['2'].posts.drafts[':id'].$delete(args, options))
    },
  })
}

export function injectDelete2PostsDraftsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['2']['posts']['drafts'][':id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['2']['posts']['drafts'][':id']['$delete']>,
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
    const mutationDefaults = getDelete2PostsDraftsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function get2RegionQueryKey() {
  return ['2', '/2/region'] as const
}

export function get2RegionQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['region']['$get']>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['region']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof get2RegionQueryKey>
  >({
    queryKey: get2RegionQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client['2'].region.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function inject2Region<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['region']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['region']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof get2RegionQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...get2RegionQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function get2SourcesQueryKey() {
  return ['2', '/2/sources'] as const
}

export function get2SourcesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['sources']['$get']>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['sources']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof get2SourcesQueryKey>
  >({
    queryKey: get2SourcesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client['2'].sources.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function inject2Sources<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['sources']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['sources']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof get2SourcesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...get2SourcesQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getPost2SourcesMutationKey() {
  return ['2', '/2/sources', 'POST'] as const
}

export function getPost2SourcesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['sources']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['2']['sources']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPost2SourcesMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['2']['sources']['$post']>) {
      return parseResponse(client['2'].sources.$post(args, options))
    },
  })
}

export function injectPost2Sources<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['sources']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)['2']['sources']['$post']>,
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
    const mutationDefaults = getPost2SourcesMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function get2SourcesIdQueryKey(
  args: InferRequestType<(typeof client)['2']['sources'][':id']['$get']>,
) {
  return ['2', '/2/sources/:id', args] as const
}

export function get2SourcesIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['sources'][':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2']['sources'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['sources'][':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2SourcesIdQueryKey>
  >({
    queryKey: get2SourcesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2'].sources[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function inject2SourcesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['sources'][':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['2']['sources'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['2']['sources'][':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get2SourcesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...get2SourcesIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPut2SourcesIdMutationKey() {
  return ['2', '/2/sources/:id', 'PUT'] as const
}

export function getPut2SourcesIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['sources'][':id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['2']['sources'][':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPut2SourcesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['2']['sources'][':id']['$put']>) {
      return parseResponse(client['2'].sources[':id'].$put(args, options))
    },
  })
}

export function injectPut2SourcesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['2']['sources'][':id']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['2']['sources'][':id']['$put']>,
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
    const mutationDefaults = getPut2SourcesIdMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDelete2SourcesIdMutationKey() {
  return ['2', '/2/sources/:id', 'DELETE'] as const
}

export function getDelete2SourcesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['sources'][':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['2']['sources'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDelete2SourcesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['2']['sources'][':id']['$delete']>) {
      return parseResponse(client['2'].sources[':id'].$delete(args, options))
    },
  })
}

export function injectDelete2SourcesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['2']['sources'][':id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['2']['sources'][':id']['$delete']>,
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
    const mutationDefaults = getDelete2SourcesIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function get2SourcesIdStreamKeyQueryKey(
  args: InferRequestType<(typeof client)['2']['sources'][':id']['stream_key']['$get']>,
) {
  return ['2', '/2/sources/:id/stream_key', args] as const
}

export function get2SourcesIdStreamKeyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['sources'][':id']['stream_key']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2']['sources'][':id']['stream_key']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2']['sources'][':id']['stream_key']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2SourcesIdStreamKeyQueryKey>
  >({
    queryKey: get2SourcesIdStreamKeyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2'].sources[':id'].stream_key.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function inject2SourcesIdStreamKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['sources'][':id']['stream_key']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['2']['sources'][':id']['stream_key']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['2']['sources'][':id']['stream_key']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get2SourcesIdStreamKeyQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...get2SourcesIdStreamKeyQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function get2SpacesQueryKey(args: InferRequestType<(typeof client)['2']['spaces']['$get']>) {
  return ['2', '/2/spaces', args] as const
}

export function get2SpacesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['spaces']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client)['2']['spaces']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['spaces']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof get2SpacesQueryKey>
  >({
    queryKey: get2SpacesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2'].spaces.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function inject2Spaces<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['spaces']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['2']['spaces']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['spaces']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof get2SpacesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...get2SpacesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function get2SpacesByCreatorIdsQueryKey(
  args: InferRequestType<(typeof client)['2']['spaces']['by']['creator_ids']['$get']>,
) {
  return ['2', '/2/spaces/by/creator_ids', args] as const
}

export function get2SpacesByCreatorIdsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['spaces']['by']['creator_ids']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2']['spaces']['by']['creator_ids']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2']['spaces']['by']['creator_ids']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2SpacesByCreatorIdsQueryKey>
  >({
    queryKey: get2SpacesByCreatorIdsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2'].spaces.by.creator_ids.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function inject2SpacesByCreatorIds<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['spaces']['by']['creator_ids']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['2']['spaces']['by']['creator_ids']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['2']['spaces']['by']['creator_ids']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get2SpacesByCreatorIdsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...get2SpacesByCreatorIdsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function get2SpacesSearchQueryKey(
  args: InferRequestType<(typeof client)['2']['spaces']['search']['$get']>,
) {
  return ['2', '/2/spaces/search', args] as const
}

export function get2SpacesSearchQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['spaces']['search']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2']['spaces']['search']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['spaces']['search']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2SpacesSearchQueryKey>
  >({
    queryKey: get2SpacesSearchQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2'].spaces.search.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function inject2SpacesSearch<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['spaces']['search']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['2']['spaces']['search']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['2']['spaces']['search']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get2SpacesSearchQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...get2SpacesSearchQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function get2SpacesIdQueryKey(
  args: InferRequestType<(typeof client)['2']['spaces'][':id']['$get']>,
) {
  return ['2', '/2/spaces/:id', args] as const
}

export function get2SpacesIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['spaces'][':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2']['spaces'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['spaces'][':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2SpacesIdQueryKey>
  >({
    queryKey: get2SpacesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2'].spaces[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function inject2SpacesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['spaces'][':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['2']['spaces'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['spaces'][':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof get2SpacesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...get2SpacesIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function get2SpacesIdBuyersQueryKey(
  args: InferRequestType<(typeof client)['2']['spaces'][':id']['buyers']['$get']>,
) {
  return ['2', '/2/spaces/:id/buyers', args] as const
}

export function get2SpacesIdBuyersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['spaces'][':id']['buyers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2']['spaces'][':id']['buyers']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2']['spaces'][':id']['buyers']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2SpacesIdBuyersQueryKey>
  >({
    queryKey: get2SpacesIdBuyersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2'].spaces[':id'].buyers.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function inject2SpacesIdBuyers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['spaces'][':id']['buyers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['2']['spaces'][':id']['buyers']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['2']['spaces'][':id']['buyers']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get2SpacesIdBuyersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...get2SpacesIdBuyersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function get2SpacesIdTweetsQueryKey(
  args: InferRequestType<(typeof client)['2']['spaces'][':id']['tweets']['$get']>,
) {
  return ['2', '/2/spaces/:id/tweets', args] as const
}

export function get2SpacesIdTweetsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['spaces'][':id']['tweets']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2']['spaces'][':id']['tweets']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2']['spaces'][':id']['tweets']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2SpacesIdTweetsQueryKey>
  >({
    queryKey: get2SpacesIdTweetsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2'].spaces[':id'].tweets.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function inject2SpacesIdTweets<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['spaces'][':id']['tweets']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['2']['spaces'][':id']['tweets']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['2']['spaces'][':id']['tweets']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get2SpacesIdTweetsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...get2SpacesIdTweetsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function get2TrendsByWoeidWoeidQueryKey(
  args: InferRequestType<(typeof client)['2']['trends']['by']['woeid'][':woeid']['$get']>,
) {
  return ['2', '/2/trends/by/woeid/:woeid', args] as const
}

export function get2TrendsByWoeidWoeidQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['trends']['by']['woeid'][':woeid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2']['trends']['by']['woeid'][':woeid']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2']['trends']['by']['woeid'][':woeid']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2TrendsByWoeidWoeidQueryKey>
  >({
    queryKey: get2TrendsByWoeidWoeidQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2'].trends.by.woeid[':woeid'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function inject2TrendsByWoeidWoeid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['trends']['by']['woeid'][':woeid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['2']['trends']['by']['woeid'][':woeid']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['2']['trends']['by']['woeid'][':woeid']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get2TrendsByWoeidWoeidQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...get2TrendsByWoeidWoeidQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function get2TrendsLocationsQueryKey(
  args: InferRequestType<(typeof client)['2']['trends']['locations']['$get']>,
) {
  return ['2', '/2/trends/locations', args] as const
}

export function get2TrendsLocationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['trends']['locations']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2']['trends']['locations']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2']['trends']['locations']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2TrendsLocationsQueryKey>
  >({
    queryKey: get2TrendsLocationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2'].trends.locations.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function inject2TrendsLocations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['trends']['locations']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['2']['trends']['locations']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['2']['trends']['locations']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get2TrendsLocationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...get2TrendsLocationsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function get2TweetsQueryKey(args: InferRequestType<(typeof client)['2']['tweets']['$get']>) {
  return ['2', '/2/tweets', args] as const
}

export function get2TweetsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['tweets']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client)['2']['tweets']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['tweets']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof get2TweetsQueryKey>
  >({
    queryKey: get2TweetsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2'].tweets.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function inject2Tweets<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['tweets']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['2']['tweets']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['tweets']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof get2TweetsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...get2TweetsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPost2TweetsMutationKey() {
  return ['2', '/2/tweets', 'POST'] as const
}

export function getPost2TweetsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['tweets']['$post']>>>>
    >,
    TError,
    InferRequestType<(typeof client)['2']['tweets']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPost2TweetsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['2']['tweets']['$post']>) {
      return parseResponse(client['2'].tweets.$post(args, options))
    },
  })
}

export function injectPost2Tweets<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['tweets']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)['2']['tweets']['$post']>,
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
    const mutationDefaults = getPost2TweetsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function get2TweetsAnalyticsQueryKey(
  args: InferRequestType<(typeof client)['2']['tweets']['analytics']['$get']>,
) {
  return ['2', '/2/tweets/analytics', args] as const
}

export function get2TweetsAnalyticsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['tweets']['analytics']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2']['tweets']['analytics']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2']['tweets']['analytics']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2TweetsAnalyticsQueryKey>
  >({
    queryKey: get2TweetsAnalyticsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2'].tweets.analytics.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function inject2TweetsAnalytics<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['tweets']['analytics']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['2']['tweets']['analytics']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['2']['tweets']['analytics']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get2TweetsAnalyticsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...get2TweetsAnalyticsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function get2TweetsComplianceStreamQueryKey(
  args: InferRequestType<(typeof client)['2']['tweets']['compliance']['stream']['$get']>,
) {
  return ['2', '/2/tweets/compliance/stream', args] as const
}

export function get2TweetsComplianceStreamQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['tweets']['compliance']['stream']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2']['tweets']['compliance']['stream']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2']['tweets']['compliance']['stream']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2TweetsComplianceStreamQueryKey>
  >({
    queryKey: get2TweetsComplianceStreamQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2'].tweets.compliance.stream.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function inject2TweetsComplianceStream<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['tweets']['compliance']['stream']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['2']['tweets']['compliance']['stream']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['2']['tweets']['compliance']['stream']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get2TweetsComplianceStreamQueryKey>
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
      ...get2TweetsComplianceStreamQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function get2TweetsCountsAllQueryKey(
  args: InferRequestType<(typeof client)['2']['tweets']['counts']['all']['$get']>,
) {
  return ['2', '/2/tweets/counts/all', args] as const
}

export function get2TweetsCountsAllQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['tweets']['counts']['all']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2']['tweets']['counts']['all']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2']['tweets']['counts']['all']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2TweetsCountsAllQueryKey>
  >({
    queryKey: get2TweetsCountsAllQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2'].tweets.counts.all.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function inject2TweetsCountsAll<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['tweets']['counts']['all']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['2']['tweets']['counts']['all']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['2']['tweets']['counts']['all']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get2TweetsCountsAllQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...get2TweetsCountsAllQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function get2TweetsCountsRecentQueryKey(
  args: InferRequestType<(typeof client)['2']['tweets']['counts']['recent']['$get']>,
) {
  return ['2', '/2/tweets/counts/recent', args] as const
}

export function get2TweetsCountsRecentQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['tweets']['counts']['recent']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2']['tweets']['counts']['recent']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2']['tweets']['counts']['recent']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2TweetsCountsRecentQueryKey>
  >({
    queryKey: get2TweetsCountsRecentQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2'].tweets.counts.recent.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function inject2TweetsCountsRecent<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['tweets']['counts']['recent']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['2']['tweets']['counts']['recent']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['2']['tweets']['counts']['recent']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get2TweetsCountsRecentQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...get2TweetsCountsRecentQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function get2TweetsFirehoseStreamQueryKey(
  args: InferRequestType<(typeof client)['2']['tweets']['firehose']['stream']['$get']>,
) {
  return ['2', '/2/tweets/firehose/stream', args] as const
}

export function get2TweetsFirehoseStreamQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['tweets']['firehose']['stream']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2']['tweets']['firehose']['stream']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2']['tweets']['firehose']['stream']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2TweetsFirehoseStreamQueryKey>
  >({
    queryKey: get2TweetsFirehoseStreamQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2'].tweets.firehose.stream.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function inject2TweetsFirehoseStream<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['tweets']['firehose']['stream']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['2']['tweets']['firehose']['stream']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['2']['tweets']['firehose']['stream']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get2TweetsFirehoseStreamQueryKey>
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
      ...get2TweetsFirehoseStreamQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function get2TweetsFirehoseStreamLangEnQueryKey(
  args: InferRequestType<
    (typeof client)['2']['tweets']['firehose']['stream']['lang']['en']['$get']
  >,
) {
  return ['2', '/2/tweets/firehose/stream/lang/en', args] as const
}

export function get2TweetsFirehoseStreamLangEnQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['2']['tweets']['firehose']['stream']['lang']['en']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2']['tweets']['firehose']['stream']['lang']['en']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['2']['tweets']['firehose']['stream']['lang']['en']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2TweetsFirehoseStreamLangEnQueryKey>
  >({
    queryKey: get2TweetsFirehoseStreamLangEnQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2'].tweets.firehose.stream.lang.en.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function inject2TweetsFirehoseStreamLangEn<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['2']['tweets']['firehose']['stream']['lang']['en']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['2']['tweets']['firehose']['stream']['lang']['en']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['2']['tweets']['firehose']['stream']['lang']['en']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get2TweetsFirehoseStreamLangEnQueryKey>
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
      ...get2TweetsFirehoseStreamLangEnQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function get2TweetsFirehoseStreamLangJaQueryKey(
  args: InferRequestType<
    (typeof client)['2']['tweets']['firehose']['stream']['lang']['ja']['$get']
  >,
) {
  return ['2', '/2/tweets/firehose/stream/lang/ja', args] as const
}

export function get2TweetsFirehoseStreamLangJaQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['2']['tweets']['firehose']['stream']['lang']['ja']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2']['tweets']['firehose']['stream']['lang']['ja']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['2']['tweets']['firehose']['stream']['lang']['ja']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2TweetsFirehoseStreamLangJaQueryKey>
  >({
    queryKey: get2TweetsFirehoseStreamLangJaQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2'].tweets.firehose.stream.lang.ja.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function inject2TweetsFirehoseStreamLangJa<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['2']['tweets']['firehose']['stream']['lang']['ja']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['2']['tweets']['firehose']['stream']['lang']['ja']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['2']['tweets']['firehose']['stream']['lang']['ja']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get2TweetsFirehoseStreamLangJaQueryKey>
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
      ...get2TweetsFirehoseStreamLangJaQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function get2TweetsFirehoseStreamLangKoQueryKey(
  args: InferRequestType<
    (typeof client)['2']['tweets']['firehose']['stream']['lang']['ko']['$get']
  >,
) {
  return ['2', '/2/tweets/firehose/stream/lang/ko', args] as const
}

export function get2TweetsFirehoseStreamLangKoQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['2']['tweets']['firehose']['stream']['lang']['ko']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2']['tweets']['firehose']['stream']['lang']['ko']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['2']['tweets']['firehose']['stream']['lang']['ko']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2TweetsFirehoseStreamLangKoQueryKey>
  >({
    queryKey: get2TweetsFirehoseStreamLangKoQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2'].tweets.firehose.stream.lang.ko.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function inject2TweetsFirehoseStreamLangKo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['2']['tweets']['firehose']['stream']['lang']['ko']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['2']['tweets']['firehose']['stream']['lang']['ko']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['2']['tweets']['firehose']['stream']['lang']['ko']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get2TweetsFirehoseStreamLangKoQueryKey>
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
      ...get2TweetsFirehoseStreamLangKoQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function get2TweetsFirehoseStreamLangPtQueryKey(
  args: InferRequestType<
    (typeof client)['2']['tweets']['firehose']['stream']['lang']['pt']['$get']
  >,
) {
  return ['2', '/2/tweets/firehose/stream/lang/pt', args] as const
}

export function get2TweetsFirehoseStreamLangPtQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['2']['tweets']['firehose']['stream']['lang']['pt']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2']['tweets']['firehose']['stream']['lang']['pt']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['2']['tweets']['firehose']['stream']['lang']['pt']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2TweetsFirehoseStreamLangPtQueryKey>
  >({
    queryKey: get2TweetsFirehoseStreamLangPtQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2'].tweets.firehose.stream.lang.pt.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function inject2TweetsFirehoseStreamLangPt<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['2']['tweets']['firehose']['stream']['lang']['pt']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['2']['tweets']['firehose']['stream']['lang']['pt']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['2']['tweets']['firehose']['stream']['lang']['pt']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get2TweetsFirehoseStreamLangPtQueryKey>
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
      ...get2TweetsFirehoseStreamLangPtQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function get2TweetsLabelStreamQueryKey(
  args: InferRequestType<(typeof client)['2']['tweets']['label']['stream']['$get']>,
) {
  return ['2', '/2/tweets/label/stream', args] as const
}

export function get2TweetsLabelStreamQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['tweets']['label']['stream']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2']['tweets']['label']['stream']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2']['tweets']['label']['stream']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2TweetsLabelStreamQueryKey>
  >({
    queryKey: get2TweetsLabelStreamQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2'].tweets.label.stream.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function inject2TweetsLabelStream<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['tweets']['label']['stream']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['2']['tweets']['label']['stream']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['2']['tweets']['label']['stream']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get2TweetsLabelStreamQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...get2TweetsLabelStreamQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function get2TweetsSampleStreamQueryKey(
  args: InferRequestType<(typeof client)['2']['tweets']['sample']['stream']['$get']>,
) {
  return ['2', '/2/tweets/sample/stream', args] as const
}

export function get2TweetsSampleStreamQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['tweets']['sample']['stream']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2']['tweets']['sample']['stream']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2']['tweets']['sample']['stream']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2TweetsSampleStreamQueryKey>
  >({
    queryKey: get2TweetsSampleStreamQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2'].tweets.sample.stream.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function inject2TweetsSampleStream<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['tweets']['sample']['stream']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['2']['tweets']['sample']['stream']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['2']['tweets']['sample']['stream']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get2TweetsSampleStreamQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...get2TweetsSampleStreamQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function get2TweetsSample10StreamQueryKey(
  args: InferRequestType<(typeof client)['2']['tweets']['sample10']['stream']['$get']>,
) {
  return ['2', '/2/tweets/sample10/stream', args] as const
}

export function get2TweetsSample10StreamQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['tweets']['sample10']['stream']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2']['tweets']['sample10']['stream']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2']['tweets']['sample10']['stream']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2TweetsSample10StreamQueryKey>
  >({
    queryKey: get2TweetsSample10StreamQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2'].tweets.sample10.stream.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function inject2TweetsSample10Stream<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['tweets']['sample10']['stream']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['2']['tweets']['sample10']['stream']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['2']['tweets']['sample10']['stream']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get2TweetsSample10StreamQueryKey>
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
      ...get2TweetsSample10StreamQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function get2TweetsSearchAllQueryKey(
  args: InferRequestType<(typeof client)['2']['tweets']['search']['all']['$get']>,
) {
  return ['2', '/2/tweets/search/all', args] as const
}

export function get2TweetsSearchAllQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['tweets']['search']['all']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2']['tweets']['search']['all']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2']['tweets']['search']['all']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2TweetsSearchAllQueryKey>
  >({
    queryKey: get2TweetsSearchAllQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2'].tweets.search.all.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function inject2TweetsSearchAll<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['tweets']['search']['all']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['2']['tweets']['search']['all']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['2']['tweets']['search']['all']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get2TweetsSearchAllQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...get2TweetsSearchAllQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function get2TweetsSearchRecentQueryKey(
  args: InferRequestType<(typeof client)['2']['tweets']['search']['recent']['$get']>,
) {
  return ['2', '/2/tweets/search/recent', args] as const
}

export function get2TweetsSearchRecentQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['tweets']['search']['recent']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2']['tweets']['search']['recent']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2']['tweets']['search']['recent']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2TweetsSearchRecentQueryKey>
  >({
    queryKey: get2TweetsSearchRecentQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2'].tweets.search.recent.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function inject2TweetsSearchRecent<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['tweets']['search']['recent']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['2']['tweets']['search']['recent']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['2']['tweets']['search']['recent']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get2TweetsSearchRecentQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...get2TweetsSearchRecentQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function get2TweetsSearchStreamQueryKey(
  args: InferRequestType<(typeof client)['2']['tweets']['search']['stream']['$get']>,
) {
  return ['2', '/2/tweets/search/stream', args] as const
}

export function get2TweetsSearchStreamQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['tweets']['search']['stream']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2']['tweets']['search']['stream']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2']['tweets']['search']['stream']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2TweetsSearchStreamQueryKey>
  >({
    queryKey: get2TweetsSearchStreamQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2'].tweets.search.stream.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function inject2TweetsSearchStream<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['tweets']['search']['stream']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['2']['tweets']['search']['stream']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['2']['tweets']['search']['stream']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get2TweetsSearchStreamQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...get2TweetsSearchStreamQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function get2TweetsSearchStreamRulesQueryKey(
  args: InferRequestType<(typeof client)['2']['tweets']['search']['stream']['rules']['$get']>,
) {
  return ['2', '/2/tweets/search/stream/rules', args] as const
}

export function get2TweetsSearchStreamRulesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['tweets']['search']['stream']['rules']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2']['tweets']['search']['stream']['rules']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2']['tweets']['search']['stream']['rules']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2TweetsSearchStreamRulesQueryKey>
  >({
    queryKey: get2TweetsSearchStreamRulesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2'].tweets.search.stream.rules.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function inject2TweetsSearchStreamRules<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['tweets']['search']['stream']['rules']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['2']['tweets']['search']['stream']['rules']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['2']['tweets']['search']['stream']['rules']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get2TweetsSearchStreamRulesQueryKey>
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
      ...get2TweetsSearchStreamRulesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPost2TweetsSearchStreamRulesMutationKey() {
  return ['2', '/2/tweets/search/stream/rules', 'POST'] as const
}

export function getPost2TweetsSearchStreamRulesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2']['tweets']['search']['stream']['rules']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['2']['tweets']['search']['stream']['rules']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPost2TweetsSearchStreamRulesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['2']['tweets']['search']['stream']['rules']['$post']>,
    ) {
      return parseResponse(client['2'].tweets.search.stream.rules.$post(args, options))
    },
  })
}

export function injectPost2TweetsSearchStreamRules<
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
                ReturnType<(typeof client)['2']['tweets']['search']['stream']['rules']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['2']['tweets']['search']['stream']['rules']['$post']>,
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
    const mutationDefaults = getPost2TweetsSearchStreamRulesMutationOptions<
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

export function get2TweetsSearchStreamRulesCountsQueryKey(
  args: InferRequestType<
    (typeof client)['2']['tweets']['search']['stream']['rules']['counts']['$get']
  >,
) {
  return ['2', '/2/tweets/search/stream/rules/counts', args] as const
}

export function get2TweetsSearchStreamRulesCountsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['2']['tweets']['search']['stream']['rules']['counts']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2']['tweets']['search']['stream']['rules']['counts']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof get2TweetsSearchStreamRulesCountsQueryKey>
  >({
    queryKey: get2TweetsSearchStreamRulesCountsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2'].tweets.search.stream.rules.counts.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function inject2TweetsSearchStreamRulesCounts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['2']['tweets']['search']['stream']['rules']['counts']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['2']['tweets']['search']['stream']['rules']['counts']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof get2TweetsSearchStreamRulesCountsQueryKey>
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
      ...get2TweetsSearchStreamRulesCountsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function get2TweetsSearchWebhooksQueryKey() {
  return ['2', '/2/tweets/search/webhooks'] as const
}

export function get2TweetsSearchWebhooksQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['tweets']['search']['webhooks']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2']['tweets']['search']['webhooks']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2TweetsSearchWebhooksQueryKey>
  >({
    queryKey: get2TweetsSearchWebhooksQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client['2'].tweets.search.webhooks.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function inject2TweetsSearchWebhooks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['tweets']['search']['webhooks']['$get']>>
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
              Awaited<ReturnType<(typeof client)['2']['tweets']['search']['webhooks']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get2TweetsSearchWebhooksQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...get2TweetsSearchWebhooksQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getPost2TweetsSearchWebhooksWebhookIdMutationKey() {
  return ['2', '/2/tweets/search/webhooks/:webhook_id', 'POST'] as const
}

export function getPost2TweetsSearchWebhooksWebhookIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['2']['tweets']['search']['webhooks'][':webhook_id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPost2TweetsSearchWebhooksWebhookIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2']['tweets']['search']['webhooks'][':webhook_id']['$post']
      >,
    ) {
      return parseResponse(client['2'].tweets.search.webhooks[':webhook_id'].$post(args, options))
    },
  })
}

export function injectPost2TweetsSearchWebhooksWebhookId<
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
                  (typeof client)['2']['tweets']['search']['webhooks'][':webhook_id']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['2']['tweets']['search']['webhooks'][':webhook_id']['$post']
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
    const mutationDefaults = getPost2TweetsSearchWebhooksWebhookIdMutationOptions<
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

export function getDelete2TweetsSearchWebhooksWebhookIdMutationKey() {
  return ['2', '/2/tweets/search/webhooks/:webhook_id', 'DELETE'] as const
}

export function getDelete2TweetsSearchWebhooksWebhookIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['2']['tweets']['search']['webhooks'][':webhook_id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDelete2TweetsSearchWebhooksWebhookIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2']['tweets']['search']['webhooks'][':webhook_id']['$delete']
      >,
    ) {
      return parseResponse(client['2'].tweets.search.webhooks[':webhook_id'].$delete(args, options))
    },
  })
}

export function injectDelete2TweetsSearchWebhooksWebhookId<
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
                  (typeof client)['2']['tweets']['search']['webhooks'][':webhook_id']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['2']['tweets']['search']['webhooks'][':webhook_id']['$delete']
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
    const mutationDefaults = getDelete2TweetsSearchWebhooksWebhookIdMutationOptions<
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

export function get2TweetsIdQueryKey(
  args: InferRequestType<(typeof client)['2']['tweets'][':id']['$get']>,
) {
  return ['2', '/2/tweets/:id', args] as const
}

export function get2TweetsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['tweets'][':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2']['tweets'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['tweets'][':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2TweetsIdQueryKey>
  >({
    queryKey: get2TweetsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2'].tweets[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function inject2TweetsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['tweets'][':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['2']['tweets'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['tweets'][':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof get2TweetsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...get2TweetsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getDelete2TweetsIdMutationKey() {
  return ['2', '/2/tweets/:id', 'DELETE'] as const
}

export function getDelete2TweetsIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['tweets'][':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['2']['tweets'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDelete2TweetsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['2']['tweets'][':id']['$delete']>) {
      return parseResponse(client['2'].tweets[':id'].$delete(args, options))
    },
  })
}

export function injectDelete2TweetsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['2']['tweets'][':id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['2']['tweets'][':id']['$delete']>,
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
    const mutationDefaults = getDelete2TweetsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function get2TweetsIdLikingUsersQueryKey(
  args: InferRequestType<(typeof client)['2']['tweets'][':id']['liking_users']['$get']>,
) {
  return ['2', '/2/tweets/:id/liking_users', args] as const
}

export function get2TweetsIdLikingUsersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['tweets'][':id']['liking_users']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2']['tweets'][':id']['liking_users']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2']['tweets'][':id']['liking_users']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2TweetsIdLikingUsersQueryKey>
  >({
    queryKey: get2TweetsIdLikingUsersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2'].tweets[':id'].liking_users.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function inject2TweetsIdLikingUsers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['tweets'][':id']['liking_users']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['2']['tweets'][':id']['liking_users']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['2']['tweets'][':id']['liking_users']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get2TweetsIdLikingUsersQueryKey>
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
      ...get2TweetsIdLikingUsersQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function get2TweetsIdQuoteTweetsQueryKey(
  args: InferRequestType<(typeof client)['2']['tweets'][':id']['quote_tweets']['$get']>,
) {
  return ['2', '/2/tweets/:id/quote_tweets', args] as const
}

export function get2TweetsIdQuoteTweetsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['tweets'][':id']['quote_tweets']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2']['tweets'][':id']['quote_tweets']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2']['tweets'][':id']['quote_tweets']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2TweetsIdQuoteTweetsQueryKey>
  >({
    queryKey: get2TweetsIdQuoteTweetsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2'].tweets[':id'].quote_tweets.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function inject2TweetsIdQuoteTweets<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['tweets'][':id']['quote_tweets']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['2']['tweets'][':id']['quote_tweets']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['2']['tweets'][':id']['quote_tweets']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get2TweetsIdQuoteTweetsQueryKey>
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
      ...get2TweetsIdQuoteTweetsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function get2TweetsIdRetweetedByQueryKey(
  args: InferRequestType<(typeof client)['2']['tweets'][':id']['retweeted_by']['$get']>,
) {
  return ['2', '/2/tweets/:id/retweeted_by', args] as const
}

export function get2TweetsIdRetweetedByQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['tweets'][':id']['retweeted_by']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2']['tweets'][':id']['retweeted_by']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2']['tweets'][':id']['retweeted_by']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2TweetsIdRetweetedByQueryKey>
  >({
    queryKey: get2TweetsIdRetweetedByQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2'].tweets[':id'].retweeted_by.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function inject2TweetsIdRetweetedBy<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['tweets'][':id']['retweeted_by']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['2']['tweets'][':id']['retweeted_by']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['2']['tweets'][':id']['retweeted_by']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get2TweetsIdRetweetedByQueryKey>
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
      ...get2TweetsIdRetweetedByQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function get2TweetsIdRetweetsQueryKey(
  args: InferRequestType<(typeof client)['2']['tweets'][':id']['retweets']['$get']>,
) {
  return ['2', '/2/tweets/:id/retweets', args] as const
}

export function get2TweetsIdRetweetsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['tweets'][':id']['retweets']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2']['tweets'][':id']['retweets']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2']['tweets'][':id']['retweets']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2TweetsIdRetweetsQueryKey>
  >({
    queryKey: get2TweetsIdRetweetsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2'].tweets[':id'].retweets.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function inject2TweetsIdRetweets<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['tweets'][':id']['retweets']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['2']['tweets'][':id']['retweets']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['2']['tweets'][':id']['retweets']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get2TweetsIdRetweetsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...get2TweetsIdRetweetsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPut2TweetsTweetIdHiddenMutationKey() {
  return ['2', '/2/tweets/:tweet_id/hidden', 'PUT'] as const
}

export function getPut2TweetsTweetIdHiddenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2']['tweets'][':tweet_id']['hidden']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['2']['tweets'][':tweet_id']['hidden']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPut2TweetsTweetIdHiddenMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['2']['tweets'][':tweet_id']['hidden']['$put']>,
    ) {
      return parseResponse(client['2'].tweets[':tweet_id'].hidden.$put(args, options))
    },
  })
}

export function injectPut2TweetsTweetIdHidden<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['2']['tweets'][':tweet_id']['hidden']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['2']['tweets'][':tweet_id']['hidden']['$put']>,
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
    const mutationDefaults = getPut2TweetsTweetIdHiddenMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function get2UsageCreditsQueryKey() {
  return ['2', '/2/usage/credits'] as const
}

export function get2UsageCreditsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['usage']['credits']['$get']>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['usage']['credits']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2UsageCreditsQueryKey>
  >({
    queryKey: get2UsageCreditsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client['2'].usage.credits.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function inject2UsageCredits<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['usage']['credits']['$get']>>>
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
              Awaited<ReturnType<(typeof client)['2']['usage']['credits']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get2UsageCreditsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...get2UsageCreditsQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function get2UsageTweetsQueryKey(
  args: InferRequestType<(typeof client)['2']['usage']['tweets']['$get']>,
) {
  return ['2', '/2/usage/tweets', args] as const
}

export function get2UsageTweetsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['usage']['tweets']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2']['usage']['tweets']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['usage']['tweets']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2UsageTweetsQueryKey>
  >({
    queryKey: get2UsageTweetsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2'].usage.tweets.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function inject2UsageTweets<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['usage']['tweets']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['2']['usage']['tweets']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['2']['usage']['tweets']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get2UsageTweetsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...get2UsageTweetsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function get2UsersQueryKey(args: InferRequestType<(typeof client)['2']['users']['$get']>) {
  return ['2', '/2/users', args] as const
}

export function get2UsersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['users']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client)['2']['users']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['users']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof get2UsersQueryKey>
  >({
    queryKey: get2UsersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2'].users.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function inject2Users<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['users']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['2']['users']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['users']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof get2UsersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...get2UsersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function get2UsersByQueryKey(
  args: InferRequestType<(typeof client)['2']['users']['by']['$get']>,
) {
  return ['2', '/2/users/by', args] as const
}

export function get2UsersByQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['users']['by']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2']['users']['by']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['users']['by']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2UsersByQueryKey>
  >({
    queryKey: get2UsersByQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2'].users.by.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function inject2UsersBy<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['users']['by']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['2']['users']['by']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['users']['by']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof get2UsersByQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...get2UsersByQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function get2UsersByUsernameUsernameQueryKey(
  args: InferRequestType<(typeof client)['2']['users']['by']['username'][':username']['$get']>,
) {
  return ['2', '/2/users/by/username/:username', args] as const
}

export function get2UsersByUsernameUsernameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['users']['by']['username'][':username']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2']['users']['by']['username'][':username']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2']['users']['by']['username'][':username']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2UsersByUsernameUsernameQueryKey>
  >({
    queryKey: get2UsersByUsernameUsernameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2'].users.by.username[':username'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function inject2UsersByUsernameUsername<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['users']['by']['username'][':username']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['2']['users']['by']['username'][':username']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['2']['users']['by']['username'][':username']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get2UsersByUsernameUsernameQueryKey>
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
      ...get2UsersByUsernameUsernameQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function get2UsersComplianceStreamQueryKey(
  args: InferRequestType<(typeof client)['2']['users']['compliance']['stream']['$get']>,
) {
  return ['2', '/2/users/compliance/stream', args] as const
}

export function get2UsersComplianceStreamQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['users']['compliance']['stream']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2']['users']['compliance']['stream']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2']['users']['compliance']['stream']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2UsersComplianceStreamQueryKey>
  >({
    queryKey: get2UsersComplianceStreamQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2'].users.compliance.stream.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function inject2UsersComplianceStream<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['users']['compliance']['stream']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['2']['users']['compliance']['stream']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['2']['users']['compliance']['stream']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get2UsersComplianceStreamQueryKey>
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
      ...get2UsersComplianceStreamQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function get2UsersMeQueryKey(
  args: InferRequestType<(typeof client)['2']['users']['me']['$get']>,
) {
  return ['2', '/2/users/me', args] as const
}

export function get2UsersMeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['users']['me']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2']['users']['me']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['users']['me']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2UsersMeQueryKey>
  >({
    queryKey: get2UsersMeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2'].users.me.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function inject2UsersMe<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['users']['me']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['2']['users']['me']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['users']['me']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof get2UsersMeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...get2UsersMeQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function get2UsersMeFollowersQueryKey(
  args: InferRequestType<(typeof client)['2']['users']['me']['followers']['$get']>,
) {
  return ['2', '/2/users/me/followers', args] as const
}

export function get2UsersMeFollowersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['users']['me']['followers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2']['users']['me']['followers']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2']['users']['me']['followers']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2UsersMeFollowersQueryKey>
  >({
    queryKey: get2UsersMeFollowersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2'].users.me.followers.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function inject2UsersMeFollowers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['users']['me']['followers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['2']['users']['me']['followers']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['2']['users']['me']['followers']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get2UsersMeFollowersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...get2UsersMeFollowersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function get2UsersMeFollowingQueryKey(
  args: InferRequestType<(typeof client)['2']['users']['me']['following']['$get']>,
) {
  return ['2', '/2/users/me/following', args] as const
}

export function get2UsersMeFollowingQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['users']['me']['following']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2']['users']['me']['following']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2']['users']['me']['following']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2UsersMeFollowingQueryKey>
  >({
    queryKey: get2UsersMeFollowingQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2'].users.me.following.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function inject2UsersMeFollowing<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['users']['me']['following']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['2']['users']['me']['following']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['2']['users']['me']['following']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get2UsersMeFollowingQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...get2UsersMeFollowingQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function get2UsersPersonalizedTrendsQueryKey(
  args: InferRequestType<(typeof client)['2']['users']['personalized_trends']['$get']>,
) {
  return ['2', '/2/users/personalized_trends', args] as const
}

export function get2UsersPersonalizedTrendsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['users']['personalized_trends']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2']['users']['personalized_trends']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2']['users']['personalized_trends']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2UsersPersonalizedTrendsQueryKey>
  >({
    queryKey: get2UsersPersonalizedTrendsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2'].users.personalized_trends.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function inject2UsersPersonalizedTrends<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['users']['personalized_trends']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['2']['users']['personalized_trends']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['2']['users']['personalized_trends']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get2UsersPersonalizedTrendsQueryKey>
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
      ...get2UsersPersonalizedTrendsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function get2UsersPublicKeysQueryKey(
  args: InferRequestType<(typeof client)['2']['users']['public_keys']['$get']>,
) {
  return ['2', '/2/users/public_keys', args] as const
}

export function get2UsersPublicKeysQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['users']['public_keys']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2']['users']['public_keys']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2']['users']['public_keys']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2UsersPublicKeysQueryKey>
  >({
    queryKey: get2UsersPublicKeysQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2'].users.public_keys.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function inject2UsersPublicKeys<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['users']['public_keys']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['2']['users']['public_keys']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['2']['users']['public_keys']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get2UsersPublicKeysQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...get2UsersPublicKeysQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function get2UsersRepostsOfMeQueryKey(
  args: InferRequestType<(typeof client)['2']['users']['reposts_of_me']['$get']>,
) {
  return ['2', '/2/users/reposts_of_me', args] as const
}

export function get2UsersRepostsOfMeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['users']['reposts_of_me']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2']['users']['reposts_of_me']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2']['users']['reposts_of_me']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2UsersRepostsOfMeQueryKey>
  >({
    queryKey: get2UsersRepostsOfMeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2'].users.reposts_of_me.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function inject2UsersRepostsOfMe<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['users']['reposts_of_me']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['2']['users']['reposts_of_me']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['2']['users']['reposts_of_me']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get2UsersRepostsOfMeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...get2UsersRepostsOfMeQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function get2UsersSearchQueryKey(
  args: InferRequestType<(typeof client)['2']['users']['search']['$get']>,
) {
  return ['2', '/2/users/search', args] as const
}

export function get2UsersSearchQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['users']['search']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2']['users']['search']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['users']['search']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2UsersSearchQueryKey>
  >({
    queryKey: get2UsersSearchQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2'].users.search.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function inject2UsersSearch<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['users']['search']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['2']['users']['search']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['2']['users']['search']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get2UsersSearchQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...get2UsersSearchQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function get2UsersIdQueryKey(
  args: InferRequestType<(typeof client)['2']['users'][':id']['$get']>,
) {
  return ['2', '/2/users/:id', args] as const
}

export function get2UsersIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['users'][':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2']['users'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['users'][':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2UsersIdQueryKey>
  >({
    queryKey: get2UsersIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2'].users[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function inject2UsersId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['users'][':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['2']['users'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['users'][':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof get2UsersIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...get2UsersIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function get2UsersIdAffiliatesQueryKey(
  args: InferRequestType<(typeof client)['2']['users'][':id']['affiliates']['$get']>,
) {
  return ['2', '/2/users/:id/affiliates', args] as const
}

export function get2UsersIdAffiliatesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['users'][':id']['affiliates']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2']['users'][':id']['affiliates']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2']['users'][':id']['affiliates']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2UsersIdAffiliatesQueryKey>
  >({
    queryKey: get2UsersIdAffiliatesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2'].users[':id'].affiliates.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function inject2UsersIdAffiliates<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['users'][':id']['affiliates']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['2']['users'][':id']['affiliates']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['2']['users'][':id']['affiliates']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get2UsersIdAffiliatesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...get2UsersIdAffiliatesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function get2UsersIdBlockingQueryKey(
  args: InferRequestType<(typeof client)['2']['users'][':id']['blocking']['$get']>,
) {
  return ['2', '/2/users/:id/blocking', args] as const
}

export function get2UsersIdBlockingQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['users'][':id']['blocking']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2']['users'][':id']['blocking']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2']['users'][':id']['blocking']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2UsersIdBlockingQueryKey>
  >({
    queryKey: get2UsersIdBlockingQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2'].users[':id'].blocking.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function inject2UsersIdBlocking<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['users'][':id']['blocking']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['2']['users'][':id']['blocking']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['2']['users'][':id']['blocking']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get2UsersIdBlockingQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...get2UsersIdBlockingQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPost2UsersIdBlockingMutationKey() {
  return ['2', '/2/users/:id/blocking', 'POST'] as const
}

export function getPost2UsersIdBlockingMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2']['users'][':id']['blocking']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['2']['users'][':id']['blocking']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPost2UsersIdBlockingMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['2']['users'][':id']['blocking']['$post']>,
    ) {
      return parseResponse(client['2'].users[':id'].blocking.$post(args, options))
    },
  })
}

export function injectPost2UsersIdBlocking<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['2']['users'][':id']['blocking']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['2']['users'][':id']['blocking']['$post']>,
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
    const mutationDefaults = getPost2UsersIdBlockingMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function get2UsersIdBookmarksQueryKey(
  args: InferRequestType<(typeof client)['2']['users'][':id']['bookmarks']['$get']>,
) {
  return ['2', '/2/users/:id/bookmarks', args] as const
}

export function get2UsersIdBookmarksQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['users'][':id']['bookmarks']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2']['users'][':id']['bookmarks']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2']['users'][':id']['bookmarks']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2UsersIdBookmarksQueryKey>
  >({
    queryKey: get2UsersIdBookmarksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2'].users[':id'].bookmarks.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function inject2UsersIdBookmarks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['users'][':id']['bookmarks']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['2']['users'][':id']['bookmarks']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['2']['users'][':id']['bookmarks']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get2UsersIdBookmarksQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...get2UsersIdBookmarksQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPost2UsersIdBookmarksMutationKey() {
  return ['2', '/2/users/:id/bookmarks', 'POST'] as const
}

export function getPost2UsersIdBookmarksMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2']['users'][':id']['bookmarks']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['2']['users'][':id']['bookmarks']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPost2UsersIdBookmarksMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['2']['users'][':id']['bookmarks']['$post']>,
    ) {
      return parseResponse(client['2'].users[':id'].bookmarks.$post(args, options))
    },
  })
}

export function injectPost2UsersIdBookmarks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['2']['users'][':id']['bookmarks']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['2']['users'][':id']['bookmarks']['$post']>,
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
    const mutationDefaults = getPost2UsersIdBookmarksMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function get2UsersIdBookmarksFoldersQueryKey(
  args: InferRequestType<(typeof client)['2']['users'][':id']['bookmarks']['folders']['$get']>,
) {
  return ['2', '/2/users/:id/bookmarks/folders', args] as const
}

export function get2UsersIdBookmarksFoldersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['users'][':id']['bookmarks']['folders']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2']['users'][':id']['bookmarks']['folders']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2']['users'][':id']['bookmarks']['folders']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2UsersIdBookmarksFoldersQueryKey>
  >({
    queryKey: get2UsersIdBookmarksFoldersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2'].users[':id'].bookmarks.folders.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function inject2UsersIdBookmarksFolders<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['users'][':id']['bookmarks']['folders']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['2']['users'][':id']['bookmarks']['folders']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['2']['users'][':id']['bookmarks']['folders']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get2UsersIdBookmarksFoldersQueryKey>
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
      ...get2UsersIdBookmarksFoldersQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPost2UsersIdBookmarksFoldersMutationKey() {
  return ['2', '/2/users/:id/bookmarks/folders', 'POST'] as const
}

export function getPost2UsersIdBookmarksFoldersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2']['users'][':id']['bookmarks']['folders']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['2']['users'][':id']['bookmarks']['folders']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPost2UsersIdBookmarksFoldersMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['2']['users'][':id']['bookmarks']['folders']['$post']>,
    ) {
      return parseResponse(client['2'].users[':id'].bookmarks.folders.$post(args, options))
    },
  })
}

export function injectPost2UsersIdBookmarksFolders<
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
                ReturnType<(typeof client)['2']['users'][':id']['bookmarks']['folders']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['2']['users'][':id']['bookmarks']['folders']['$post']>,
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
    const mutationDefaults = getPost2UsersIdBookmarksFoldersMutationOptions<
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

export function get2UsersIdBookmarksFoldersFolderIdQueryKey(
  args: InferRequestType<
    (typeof client)['2']['users'][':id']['bookmarks']['folders'][':folder_id']['$get']
  >,
) {
  return ['2', '/2/users/:id/bookmarks/folders/:folder_id', args] as const
}

export function get2UsersIdBookmarksFoldersFolderIdQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2']['users'][':id']['bookmarks']['folders'][':folder_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof get2UsersIdBookmarksFoldersFolderIdQueryKey>
  >({
    queryKey: get2UsersIdBookmarksFoldersFolderIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2'].users[':id'].bookmarks.folders[':folder_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function inject2UsersIdBookmarksFoldersFolderId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['2']['users'][':id']['bookmarks']['folders'][':folder_id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof get2UsersIdBookmarksFoldersFolderIdQueryKey>
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
      ...get2UsersIdBookmarksFoldersFolderIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getDelete2UsersIdBookmarksTweetIdMutationKey() {
  return ['2', '/2/users/:id/bookmarks/:tweet_id', 'DELETE'] as const
}

export function getDelete2UsersIdBookmarksTweetIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['2']['users'][':id']['bookmarks'][':tweet_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDelete2UsersIdBookmarksTweetIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2']['users'][':id']['bookmarks'][':tweet_id']['$delete']
      >,
    ) {
      return parseResponse(client['2'].users[':id'].bookmarks[':tweet_id'].$delete(args, options))
    },
  })
}

export function injectDelete2UsersIdBookmarksTweetId<
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
                  (typeof client)['2']['users'][':id']['bookmarks'][':tweet_id']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['2']['users'][':id']['bookmarks'][':tweet_id']['$delete']>,
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
    const mutationDefaults = getDelete2UsersIdBookmarksTweetIdMutationOptions<
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

export function get2UsersIdBroadcastsQueryKey(
  args: InferRequestType<(typeof client)['2']['users'][':id']['broadcasts']['$get']>,
) {
  return ['2', '/2/users/:id/broadcasts', args] as const
}

export function get2UsersIdBroadcastsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['users'][':id']['broadcasts']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2']['users'][':id']['broadcasts']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2']['users'][':id']['broadcasts']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2UsersIdBroadcastsQueryKey>
  >({
    queryKey: get2UsersIdBroadcastsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2'].users[':id'].broadcasts.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function inject2UsersIdBroadcasts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['users'][':id']['broadcasts']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['2']['users'][':id']['broadcasts']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['2']['users'][':id']['broadcasts']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get2UsersIdBroadcastsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...get2UsersIdBroadcastsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPost2UsersIdBroadcastsMutationKey() {
  return ['2', '/2/users/:id/broadcasts', 'POST'] as const
}

export function getPost2UsersIdBroadcastsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2']['users'][':id']['broadcasts']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['2']['users'][':id']['broadcasts']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPost2UsersIdBroadcastsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['2']['users'][':id']['broadcasts']['$post']>,
    ) {
      return parseResponse(client['2'].users[':id'].broadcasts.$post(args, options))
    },
  })
}

export function injectPost2UsersIdBroadcasts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['2']['users'][':id']['broadcasts']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['2']['users'][':id']['broadcasts']['$post']>,
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
    const mutationDefaults = getPost2UsersIdBroadcastsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function get2UsersIdBroadcastsBroadcastIdQueryKey(
  args: InferRequestType<
    (typeof client)['2']['users'][':id']['broadcasts'][':broadcast_id']['$get']
  >,
) {
  return ['2', '/2/users/:id/broadcasts/:broadcast_id', args] as const
}

export function get2UsersIdBroadcastsBroadcastIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['2']['users'][':id']['broadcasts'][':broadcast_id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2']['users'][':id']['broadcasts'][':broadcast_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['2']['users'][':id']['broadcasts'][':broadcast_id']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2UsersIdBroadcastsBroadcastIdQueryKey>
  >({
    queryKey: get2UsersIdBroadcastsBroadcastIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2'].users[':id'].broadcasts[':broadcast_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function inject2UsersIdBroadcastsBroadcastId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['2']['users'][':id']['broadcasts'][':broadcast_id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['2']['users'][':id']['broadcasts'][':broadcast_id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof get2UsersIdBroadcastsBroadcastIdQueryKey>
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
      ...get2UsersIdBroadcastsBroadcastIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getDelete2UsersIdBroadcastsBroadcastIdMutationKey() {
  return ['2', '/2/users/:id/broadcasts/:broadcast_id', 'DELETE'] as const
}

export function getDelete2UsersIdBroadcastsBroadcastIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['2']['users'][':id']['broadcasts'][':broadcast_id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDelete2UsersIdBroadcastsBroadcastIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2']['users'][':id']['broadcasts'][':broadcast_id']['$delete']
      >,
    ) {
      return parseResponse(
        client['2'].users[':id'].broadcasts[':broadcast_id'].$delete(args, options),
      )
    },
  })
}

export function injectDelete2UsersIdBroadcastsBroadcastId<
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
                  (typeof client)['2']['users'][':id']['broadcasts'][':broadcast_id']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['2']['users'][':id']['broadcasts'][':broadcast_id']['$delete']
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
    const mutationDefaults = getDelete2UsersIdBroadcastsBroadcastIdMutationOptions<
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

export function getPut2UsersIdBroadcastsBroadcastIdStateMutationKey() {
  return ['2', '/2/users/:id/broadcasts/:broadcast_id/state', 'PUT'] as const
}

export function getPut2UsersIdBroadcastsBroadcastIdStateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['2']['users'][':id']['broadcasts'][':broadcast_id']['state']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPut2UsersIdBroadcastsBroadcastIdStateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2']['users'][':id']['broadcasts'][':broadcast_id']['state']['$put']
      >,
    ) {
      return parseResponse(
        client['2'].users[':id'].broadcasts[':broadcast_id'].state.$put(args, options),
      )
    },
  })
}

export function injectPut2UsersIdBroadcastsBroadcastIdState<
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
                  (typeof client)['2']['users'][':id']['broadcasts'][':broadcast_id']['state']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['2']['users'][':id']['broadcasts'][':broadcast_id']['state']['$put']
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
    const mutationDefaults = getPut2UsersIdBroadcastsBroadcastIdStateMutationOptions<
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

export function getPost2UsersIdDmBlockMutationKey() {
  return ['2', '/2/users/:id/dm/block', 'POST'] as const
}

export function getPost2UsersIdDmBlockMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2']['users'][':id']['dm']['block']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['2']['users'][':id']['dm']['block']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPost2UsersIdDmBlockMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['2']['users'][':id']['dm']['block']['$post']>,
    ) {
      return parseResponse(client['2'].users[':id'].dm.block.$post(args, options))
    },
  })
}

export function injectPost2UsersIdDmBlock<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['2']['users'][':id']['dm']['block']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['2']['users'][':id']['dm']['block']['$post']>,
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
    const mutationDefaults = getPost2UsersIdDmBlockMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPost2UsersIdDmUnblockMutationKey() {
  return ['2', '/2/users/:id/dm/unblock', 'POST'] as const
}

export function getPost2UsersIdDmUnblockMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2']['users'][':id']['dm']['unblock']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['2']['users'][':id']['dm']['unblock']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPost2UsersIdDmUnblockMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['2']['users'][':id']['dm']['unblock']['$post']>,
    ) {
      return parseResponse(client['2'].users[':id'].dm.unblock.$post(args, options))
    },
  })
}

export function injectPost2UsersIdDmUnblock<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['2']['users'][':id']['dm']['unblock']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['2']['users'][':id']['dm']['unblock']['$post']>,
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
    const mutationDefaults = getPost2UsersIdDmUnblockMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function get2UsersIdFollowedListsQueryKey(
  args: InferRequestType<(typeof client)['2']['users'][':id']['followed_lists']['$get']>,
) {
  return ['2', '/2/users/:id/followed_lists', args] as const
}

export function get2UsersIdFollowedListsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['users'][':id']['followed_lists']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2']['users'][':id']['followed_lists']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2']['users'][':id']['followed_lists']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2UsersIdFollowedListsQueryKey>
  >({
    queryKey: get2UsersIdFollowedListsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2'].users[':id'].followed_lists.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function inject2UsersIdFollowedLists<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['users'][':id']['followed_lists']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['2']['users'][':id']['followed_lists']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['2']['users'][':id']['followed_lists']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get2UsersIdFollowedListsQueryKey>
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
      ...get2UsersIdFollowedListsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPost2UsersIdFollowedListsMutationKey() {
  return ['2', '/2/users/:id/followed_lists', 'POST'] as const
}

export function getPost2UsersIdFollowedListsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2']['users'][':id']['followed_lists']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['2']['users'][':id']['followed_lists']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPost2UsersIdFollowedListsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['2']['users'][':id']['followed_lists']['$post']>,
    ) {
      return parseResponse(client['2'].users[':id'].followed_lists.$post(args, options))
    },
  })
}

export function injectPost2UsersIdFollowedLists<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['2']['users'][':id']['followed_lists']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['2']['users'][':id']['followed_lists']['$post']>,
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
    const mutationDefaults = getPost2UsersIdFollowedListsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDelete2UsersIdFollowedListsListIdMutationKey() {
  return ['2', '/2/users/:id/followed_lists/:list_id', 'DELETE'] as const
}

export function getDelete2UsersIdFollowedListsListIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['2']['users'][':id']['followed_lists'][':list_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDelete2UsersIdFollowedListsListIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2']['users'][':id']['followed_lists'][':list_id']['$delete']
      >,
    ) {
      return parseResponse(
        client['2'].users[':id'].followed_lists[':list_id'].$delete(args, options),
      )
    },
  })
}

export function injectDelete2UsersIdFollowedListsListId<
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
                  (typeof client)['2']['users'][':id']['followed_lists'][':list_id']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['2']['users'][':id']['followed_lists'][':list_id']['$delete']
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
    const mutationDefaults = getDelete2UsersIdFollowedListsListIdMutationOptions<
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

export function get2UsersIdFollowersQueryKey(
  args: InferRequestType<(typeof client)['2']['users'][':id']['followers']['$get']>,
) {
  return ['2', '/2/users/:id/followers', args] as const
}

export function get2UsersIdFollowersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['users'][':id']['followers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2']['users'][':id']['followers']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2']['users'][':id']['followers']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2UsersIdFollowersQueryKey>
  >({
    queryKey: get2UsersIdFollowersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2'].users[':id'].followers.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function inject2UsersIdFollowers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['users'][':id']['followers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['2']['users'][':id']['followers']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['2']['users'][':id']['followers']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get2UsersIdFollowersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...get2UsersIdFollowersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function get2UsersIdFollowingQueryKey(
  args: InferRequestType<(typeof client)['2']['users'][':id']['following']['$get']>,
) {
  return ['2', '/2/users/:id/following', args] as const
}

export function get2UsersIdFollowingQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['users'][':id']['following']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2']['users'][':id']['following']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2']['users'][':id']['following']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2UsersIdFollowingQueryKey>
  >({
    queryKey: get2UsersIdFollowingQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2'].users[':id'].following.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function inject2UsersIdFollowing<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['users'][':id']['following']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['2']['users'][':id']['following']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['2']['users'][':id']['following']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get2UsersIdFollowingQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...get2UsersIdFollowingQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPost2UsersIdFollowingMutationKey() {
  return ['2', '/2/users/:id/following', 'POST'] as const
}

export function getPost2UsersIdFollowingMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2']['users'][':id']['following']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['2']['users'][':id']['following']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPost2UsersIdFollowingMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['2']['users'][':id']['following']['$post']>,
    ) {
      return parseResponse(client['2'].users[':id'].following.$post(args, options))
    },
  })
}

export function injectPost2UsersIdFollowing<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['2']['users'][':id']['following']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['2']['users'][':id']['following']['$post']>,
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
    const mutationDefaults = getPost2UsersIdFollowingMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function get2UsersIdLikedTweetsQueryKey(
  args: InferRequestType<(typeof client)['2']['users'][':id']['liked_tweets']['$get']>,
) {
  return ['2', '/2/users/:id/liked_tweets', args] as const
}

export function get2UsersIdLikedTweetsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['users'][':id']['liked_tweets']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2']['users'][':id']['liked_tweets']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2']['users'][':id']['liked_tweets']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2UsersIdLikedTweetsQueryKey>
  >({
    queryKey: get2UsersIdLikedTweetsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2'].users[':id'].liked_tweets.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function inject2UsersIdLikedTweets<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['users'][':id']['liked_tweets']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['2']['users'][':id']['liked_tweets']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['2']['users'][':id']['liked_tweets']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get2UsersIdLikedTweetsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...get2UsersIdLikedTweetsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPost2UsersIdLikesMutationKey() {
  return ['2', '/2/users/:id/likes', 'POST'] as const
}

export function getPost2UsersIdLikesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2']['users'][':id']['likes']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['2']['users'][':id']['likes']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPost2UsersIdLikesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['2']['users'][':id']['likes']['$post']>,
    ) {
      return parseResponse(client['2'].users[':id'].likes.$post(args, options))
    },
  })
}

export function injectPost2UsersIdLikes<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['2']['users'][':id']['likes']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['2']['users'][':id']['likes']['$post']>,
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
    const mutationDefaults = getPost2UsersIdLikesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDelete2UsersIdLikesTweetIdMutationKey() {
  return ['2', '/2/users/:id/likes/:tweet_id', 'DELETE'] as const
}

export function getDelete2UsersIdLikesTweetIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2']['users'][':id']['likes'][':tweet_id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['2']['users'][':id']['likes'][':tweet_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDelete2UsersIdLikesTweetIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['2']['users'][':id']['likes'][':tweet_id']['$delete']>,
    ) {
      return parseResponse(client['2'].users[':id'].likes[':tweet_id'].$delete(args, options))
    },
  })
}

export function injectDelete2UsersIdLikesTweetId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['2']['users'][':id']['likes'][':tweet_id']['$delete']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['2']['users'][':id']['likes'][':tweet_id']['$delete']>,
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
    const mutationDefaults = getDelete2UsersIdLikesTweetIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function get2UsersIdListMembershipsQueryKey(
  args: InferRequestType<(typeof client)['2']['users'][':id']['list_memberships']['$get']>,
) {
  return ['2', '/2/users/:id/list_memberships', args] as const
}

export function get2UsersIdListMembershipsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['users'][':id']['list_memberships']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2']['users'][':id']['list_memberships']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2']['users'][':id']['list_memberships']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2UsersIdListMembershipsQueryKey>
  >({
    queryKey: get2UsersIdListMembershipsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2'].users[':id'].list_memberships.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function inject2UsersIdListMemberships<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['users'][':id']['list_memberships']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['2']['users'][':id']['list_memberships']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['2']['users'][':id']['list_memberships']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get2UsersIdListMembershipsQueryKey>
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
      ...get2UsersIdListMembershipsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function get2UsersIdMentionsQueryKey(
  args: InferRequestType<(typeof client)['2']['users'][':id']['mentions']['$get']>,
) {
  return ['2', '/2/users/:id/mentions', args] as const
}

export function get2UsersIdMentionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['users'][':id']['mentions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2']['users'][':id']['mentions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2']['users'][':id']['mentions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2UsersIdMentionsQueryKey>
  >({
    queryKey: get2UsersIdMentionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2'].users[':id'].mentions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function inject2UsersIdMentions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['users'][':id']['mentions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['2']['users'][':id']['mentions']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['2']['users'][':id']['mentions']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get2UsersIdMentionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...get2UsersIdMentionsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function get2UsersIdMutingQueryKey(
  args: InferRequestType<(typeof client)['2']['users'][':id']['muting']['$get']>,
) {
  return ['2', '/2/users/:id/muting', args] as const
}

export function get2UsersIdMutingQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['users'][':id']['muting']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2']['users'][':id']['muting']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2']['users'][':id']['muting']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2UsersIdMutingQueryKey>
  >({
    queryKey: get2UsersIdMutingQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2'].users[':id'].muting.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function inject2UsersIdMuting<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['users'][':id']['muting']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['2']['users'][':id']['muting']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['2']['users'][':id']['muting']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get2UsersIdMutingQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...get2UsersIdMutingQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPost2UsersIdMutingMutationKey() {
  return ['2', '/2/users/:id/muting', 'POST'] as const
}

export function getPost2UsersIdMutingMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2']['users'][':id']['muting']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['2']['users'][':id']['muting']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPost2UsersIdMutingMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['2']['users'][':id']['muting']['$post']>,
    ) {
      return parseResponse(client['2'].users[':id'].muting.$post(args, options))
    },
  })
}

export function injectPost2UsersIdMuting<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['2']['users'][':id']['muting']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['2']['users'][':id']['muting']['$post']>,
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
    const mutationDefaults = getPost2UsersIdMutingMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function get2UsersIdOwnedListsQueryKey(
  args: InferRequestType<(typeof client)['2']['users'][':id']['owned_lists']['$get']>,
) {
  return ['2', '/2/users/:id/owned_lists', args] as const
}

export function get2UsersIdOwnedListsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['users'][':id']['owned_lists']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2']['users'][':id']['owned_lists']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2']['users'][':id']['owned_lists']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2UsersIdOwnedListsQueryKey>
  >({
    queryKey: get2UsersIdOwnedListsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2'].users[':id'].owned_lists.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function inject2UsersIdOwnedLists<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['users'][':id']['owned_lists']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['2']['users'][':id']['owned_lists']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['2']['users'][':id']['owned_lists']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get2UsersIdOwnedListsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...get2UsersIdOwnedListsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function get2UsersIdPinnedListsQueryKey(
  args: InferRequestType<(typeof client)['2']['users'][':id']['pinned_lists']['$get']>,
) {
  return ['2', '/2/users/:id/pinned_lists', args] as const
}

export function get2UsersIdPinnedListsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['users'][':id']['pinned_lists']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2']['users'][':id']['pinned_lists']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2']['users'][':id']['pinned_lists']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2UsersIdPinnedListsQueryKey>
  >({
    queryKey: get2UsersIdPinnedListsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2'].users[':id'].pinned_lists.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function inject2UsersIdPinnedLists<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['users'][':id']['pinned_lists']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['2']['users'][':id']['pinned_lists']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['2']['users'][':id']['pinned_lists']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get2UsersIdPinnedListsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...get2UsersIdPinnedListsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPost2UsersIdPinnedListsMutationKey() {
  return ['2', '/2/users/:id/pinned_lists', 'POST'] as const
}

export function getPost2UsersIdPinnedListsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2']['users'][':id']['pinned_lists']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['2']['users'][':id']['pinned_lists']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPost2UsersIdPinnedListsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['2']['users'][':id']['pinned_lists']['$post']>,
    ) {
      return parseResponse(client['2'].users[':id'].pinned_lists.$post(args, options))
    },
  })
}

export function injectPost2UsersIdPinnedLists<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['2']['users'][':id']['pinned_lists']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['2']['users'][':id']['pinned_lists']['$post']>,
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
    const mutationDefaults = getPost2UsersIdPinnedListsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDelete2UsersIdPinnedListsListIdMutationKey() {
  return ['2', '/2/users/:id/pinned_lists/:list_id', 'DELETE'] as const
}

export function getDelete2UsersIdPinnedListsListIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['2']['users'][':id']['pinned_lists'][':list_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDelete2UsersIdPinnedListsListIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2']['users'][':id']['pinned_lists'][':list_id']['$delete']
      >,
    ) {
      return parseResponse(client['2'].users[':id'].pinned_lists[':list_id'].$delete(args, options))
    },
  })
}

export function injectDelete2UsersIdPinnedListsListId<
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
                  (typeof client)['2']['users'][':id']['pinned_lists'][':list_id']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['2']['users'][':id']['pinned_lists'][':list_id']['$delete']
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
    const mutationDefaults = getDelete2UsersIdPinnedListsListIdMutationOptions<
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

export function get2UsersIdPublicKeysQueryKey(
  args: InferRequestType<(typeof client)['2']['users'][':id']['public_keys']['$get']>,
) {
  return ['2', '/2/users/:id/public_keys', args] as const
}

export function get2UsersIdPublicKeysQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['users'][':id']['public_keys']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2']['users'][':id']['public_keys']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2']['users'][':id']['public_keys']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2UsersIdPublicKeysQueryKey>
  >({
    queryKey: get2UsersIdPublicKeysQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2'].users[':id'].public_keys.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function inject2UsersIdPublicKeys<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['users'][':id']['public_keys']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['2']['users'][':id']['public_keys']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['2']['users'][':id']['public_keys']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get2UsersIdPublicKeysQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...get2UsersIdPublicKeysQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPost2UsersIdPublicKeysMutationKey() {
  return ['2', '/2/users/:id/public_keys', 'POST'] as const
}

export function getPost2UsersIdPublicKeysMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2']['users'][':id']['public_keys']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['2']['users'][':id']['public_keys']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPost2UsersIdPublicKeysMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['2']['users'][':id']['public_keys']['$post']>,
    ) {
      return parseResponse(client['2'].users[':id'].public_keys.$post(args, options))
    },
  })
}

export function injectPost2UsersIdPublicKeys<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['2']['users'][':id']['public_keys']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['2']['users'][':id']['public_keys']['$post']>,
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
    const mutationDefaults = getPost2UsersIdPublicKeysMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPost2UsersIdRetweetsMutationKey() {
  return ['2', '/2/users/:id/retweets', 'POST'] as const
}

export function getPost2UsersIdRetweetsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2']['users'][':id']['retweets']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['2']['users'][':id']['retweets']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPost2UsersIdRetweetsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['2']['users'][':id']['retweets']['$post']>,
    ) {
      return parseResponse(client['2'].users[':id'].retweets.$post(args, options))
    },
  })
}

export function injectPost2UsersIdRetweets<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['2']['users'][':id']['retweets']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['2']['users'][':id']['retweets']['$post']>,
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
    const mutationDefaults = getPost2UsersIdRetweetsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDelete2UsersIdRetweetsSourceTweetIdMutationKey() {
  return ['2', '/2/users/:id/retweets/:source_tweet_id', 'DELETE'] as const
}

export function getDelete2UsersIdRetweetsSourceTweetIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['2']['users'][':id']['retweets'][':source_tweet_id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDelete2UsersIdRetweetsSourceTweetIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2']['users'][':id']['retweets'][':source_tweet_id']['$delete']
      >,
    ) {
      return parseResponse(
        client['2'].users[':id'].retweets[':source_tweet_id'].$delete(args, options),
      )
    },
  })
}

export function injectDelete2UsersIdRetweetsSourceTweetId<
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
                  (typeof client)['2']['users'][':id']['retweets'][':source_tweet_id']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['2']['users'][':id']['retweets'][':source_tweet_id']['$delete']
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
    const mutationDefaults = getDelete2UsersIdRetweetsSourceTweetIdMutationOptions<
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

export function get2UsersIdSourcesQueryKey(
  args: InferRequestType<(typeof client)['2']['users'][':id']['sources']['$get']>,
) {
  return ['2', '/2/users/:id/sources', args] as const
}

export function get2UsersIdSourcesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['users'][':id']['sources']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2']['users'][':id']['sources']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2']['users'][':id']['sources']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2UsersIdSourcesQueryKey>
  >({
    queryKey: get2UsersIdSourcesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2'].users[':id'].sources.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function inject2UsersIdSources<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['users'][':id']['sources']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['2']['users'][':id']['sources']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['2']['users'][':id']['sources']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get2UsersIdSourcesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...get2UsersIdSourcesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPost2UsersIdSourcesMutationKey() {
  return ['2', '/2/users/:id/sources', 'POST'] as const
}

export function getPost2UsersIdSourcesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2']['users'][':id']['sources']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['2']['users'][':id']['sources']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPost2UsersIdSourcesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['2']['users'][':id']['sources']['$post']>,
    ) {
      return parseResponse(client['2'].users[':id'].sources.$post(args, options))
    },
  })
}

export function injectPost2UsersIdSources<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['2']['users'][':id']['sources']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['2']['users'][':id']['sources']['$post']>,
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
    const mutationDefaults = getPost2UsersIdSourcesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function get2UsersIdSourcesSourceIdQueryKey(
  args: InferRequestType<(typeof client)['2']['users'][':id']['sources'][':source_id']['$get']>,
) {
  return ['2', '/2/users/:id/sources/:source_id', args] as const
}

export function get2UsersIdSourcesSourceIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['users'][':id']['sources'][':source_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2']['users'][':id']['sources'][':source_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2']['users'][':id']['sources'][':source_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2UsersIdSourcesSourceIdQueryKey>
  >({
    queryKey: get2UsersIdSourcesSourceIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2'].users[':id'].sources[':source_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function inject2UsersIdSourcesSourceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['users'][':id']['sources'][':source_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['2']['users'][':id']['sources'][':source_id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['2']['users'][':id']['sources'][':source_id']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get2UsersIdSourcesSourceIdQueryKey>
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
      ...get2UsersIdSourcesSourceIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPut2UsersIdSourcesSourceIdMutationKey() {
  return ['2', '/2/users/:id/sources/:source_id', 'PUT'] as const
}

export function getPut2UsersIdSourcesSourceIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2']['users'][':id']['sources'][':source_id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['2']['users'][':id']['sources'][':source_id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPut2UsersIdSourcesSourceIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['2']['users'][':id']['sources'][':source_id']['$put']>,
    ) {
      return parseResponse(client['2'].users[':id'].sources[':source_id'].$put(args, options))
    },
  })
}

export function injectPut2UsersIdSourcesSourceId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['2']['users'][':id']['sources'][':source_id']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['2']['users'][':id']['sources'][':source_id']['$put']>,
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
    const mutationDefaults = getPut2UsersIdSourcesSourceIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDelete2UsersIdSourcesSourceIdMutationKey() {
  return ['2', '/2/users/:id/sources/:source_id', 'DELETE'] as const
}

export function getDelete2UsersIdSourcesSourceIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['2']['users'][':id']['sources'][':source_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDelete2UsersIdSourcesSourceIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2']['users'][':id']['sources'][':source_id']['$delete']
      >,
    ) {
      return parseResponse(client['2'].users[':id'].sources[':source_id'].$delete(args, options))
    },
  })
}

export function injectDelete2UsersIdSourcesSourceId<
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
                ReturnType<(typeof client)['2']['users'][':id']['sources'][':source_id']['$delete']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['2']['users'][':id']['sources'][':source_id']['$delete']>,
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
    const mutationDefaults = getDelete2UsersIdSourcesSourceIdMutationOptions<
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

export function get2UsersIdTimelinesReverseChronologicalQueryKey(
  args: InferRequestType<
    (typeof client)['2']['users'][':id']['timelines']['reverse_chronological']['$get']
  >,
) {
  return ['2', '/2/users/:id/timelines/reverse_chronological', args] as const
}

export function get2UsersIdTimelinesReverseChronologicalQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['2']['users'][':id']['timelines']['reverse_chronological']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof get2UsersIdTimelinesReverseChronologicalQueryKey>
  >({
    queryKey: get2UsersIdTimelinesReverseChronologicalQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2'].users[':id'].timelines.reverse_chronological.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function inject2UsersIdTimelinesReverseChronological<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['2']['users'][':id']['timelines']['reverse_chronological']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof get2UsersIdTimelinesReverseChronologicalQueryKey>
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
      ...get2UsersIdTimelinesReverseChronologicalQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function get2UsersIdTweetsQueryKey(
  args: InferRequestType<(typeof client)['2']['users'][':id']['tweets']['$get']>,
) {
  return ['2', '/2/users/:id/tweets', args] as const
}

export function get2UsersIdTweetsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['users'][':id']['tweets']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2']['users'][':id']['tweets']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2']['users'][':id']['tweets']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2UsersIdTweetsQueryKey>
  >({
    queryKey: get2UsersIdTweetsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2'].users[':id'].tweets.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function inject2UsersIdTweets<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['users'][':id']['tweets']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['2']['users'][':id']['tweets']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['2']['users'][':id']['tweets']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof get2UsersIdTweetsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...get2UsersIdTweetsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getDelete2UsersSourceUserIdBlockingTargetUserIdMutationKey() {
  return ['2', '/2/users/:source_user_id/blocking/:target_user_id', 'DELETE'] as const
}

export function getDelete2UsersSourceUserIdBlockingTargetUserIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['2']['users'][':source_user_id']['blocking'][':target_user_id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDelete2UsersSourceUserIdBlockingTargetUserIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2']['users'][':source_user_id']['blocking'][':target_user_id']['$delete']
      >,
    ) {
      return parseResponse(
        client['2'].users[':source_user_id'].blocking[':target_user_id'].$delete(args, options),
      )
    },
  })
}

export function injectDelete2UsersSourceUserIdBlockingTargetUserId<
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
                  (typeof client)['2']['users'][':source_user_id']['blocking'][':target_user_id']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['2']['users'][':source_user_id']['blocking'][':target_user_id']['$delete']
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
    const mutationDefaults = getDelete2UsersSourceUserIdBlockingTargetUserIdMutationOptions<
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

export function getDelete2UsersSourceUserIdFollowingTargetUserIdMutationKey() {
  return ['2', '/2/users/:source_user_id/following/:target_user_id', 'DELETE'] as const
}

export function getDelete2UsersSourceUserIdFollowingTargetUserIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['2']['users'][':source_user_id']['following'][':target_user_id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDelete2UsersSourceUserIdFollowingTargetUserIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2']['users'][':source_user_id']['following'][':target_user_id']['$delete']
      >,
    ) {
      return parseResponse(
        client['2'].users[':source_user_id'].following[':target_user_id'].$delete(args, options),
      )
    },
  })
}

export function injectDelete2UsersSourceUserIdFollowingTargetUserId<
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
                  (typeof client)['2']['users'][':source_user_id']['following'][':target_user_id']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['2']['users'][':source_user_id']['following'][':target_user_id']['$delete']
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
    const mutationDefaults = getDelete2UsersSourceUserIdFollowingTargetUserIdMutationOptions<
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

export function getDelete2UsersSourceUserIdMutingTargetUserIdMutationKey() {
  return ['2', '/2/users/:source_user_id/muting/:target_user_id', 'DELETE'] as const
}

export function getDelete2UsersSourceUserIdMutingTargetUserIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['2']['users'][':source_user_id']['muting'][':target_user_id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDelete2UsersSourceUserIdMutingTargetUserIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['2']['users'][':source_user_id']['muting'][':target_user_id']['$delete']
      >,
    ) {
      return parseResponse(
        client['2'].users[':source_user_id'].muting[':target_user_id'].$delete(args, options),
      )
    },
  })
}

export function injectDelete2UsersSourceUserIdMutingTargetUserId<
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
                  (typeof client)['2']['users'][':source_user_id']['muting'][':target_user_id']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['2']['users'][':source_user_id']['muting'][':target_user_id']['$delete']
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
    const mutationDefaults = getDelete2UsersSourceUserIdMutingTargetUserIdMutationOptions<
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

export function get2WebhooksQueryKey(
  args: InferRequestType<(typeof client)['2']['webhooks']['$get']>,
) {
  return ['2', '/2/webhooks', args] as const
}

export function get2WebhooksQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['webhooks']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['2']['webhooks']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['webhooks']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2WebhooksQueryKey>
  >({
    queryKey: get2WebhooksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['2'].webhooks.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function inject2Webhooks<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['webhooks']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['2']['webhooks']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['webhooks']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof get2WebhooksQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...get2WebhooksQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPost2WebhooksMutationKey() {
  return ['2', '/2/webhooks', 'POST'] as const
}

export function getPost2WebhooksMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['webhooks']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['2']['webhooks']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPost2WebhooksMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['2']['webhooks']['$post']>) {
      return parseResponse(client['2'].webhooks.$post(args, options))
    },
  })
}

export function injectPost2Webhooks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['webhooks']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)['2']['webhooks']['$post']>,
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
    const mutationDefaults = getPost2WebhooksMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPost2WebhooksReplayMutationKey() {
  return ['2', '/2/webhooks/replay', 'POST'] as const
}

export function getPost2WebhooksReplayMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2']['webhooks']['replay']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['2']['webhooks']['replay']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPost2WebhooksReplayMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['2']['webhooks']['replay']['$post']>) {
      return parseResponse(client['2'].webhooks.replay.$post(args, options))
    },
  })
}

export function injectPost2WebhooksReplay<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['2']['webhooks']['replay']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['2']['webhooks']['replay']['$post']>,
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
    const mutationDefaults = getPost2WebhooksReplayMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPut2WebhooksWebhookIdMutationKey() {
  return ['2', '/2/webhooks/:webhook_id', 'PUT'] as const
}

export function getPut2WebhooksWebhookIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2']['webhooks'][':webhook_id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['2']['webhooks'][':webhook_id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPut2WebhooksWebhookIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['2']['webhooks'][':webhook_id']['$put']>,
    ) {
      return parseResponse(client['2'].webhooks[':webhook_id'].$put(args, options))
    },
  })
}

export function injectPut2WebhooksWebhookId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['2']['webhooks'][':webhook_id']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['2']['webhooks'][':webhook_id']['$put']>,
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
    const mutationDefaults = getPut2WebhooksWebhookIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDelete2WebhooksWebhookIdMutationKey() {
  return ['2', '/2/webhooks/:webhook_id', 'DELETE'] as const
}

export function getDelete2WebhooksWebhookIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['2']['webhooks'][':webhook_id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['2']['webhooks'][':webhook_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDelete2WebhooksWebhookIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['2']['webhooks'][':webhook_id']['$delete']>,
    ) {
      return parseResponse(client['2'].webhooks[':webhook_id'].$delete(args, options))
    },
  })
}

export function injectDelete2WebhooksWebhookId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['2']['webhooks'][':webhook_id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['2']['webhooks'][':webhook_id']['$delete']>,
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
    const mutationDefaults = getDelete2WebhooksWebhookIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}
