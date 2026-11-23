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

export function get_2Key() {
  return ['2'] as const
}

export function get2AccountQueryKey() {
  return ['2', '/2/account'] as const
}

export function get2AccountQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: get2AccountQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2'].account.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function use2Account<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['account']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['account']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['account']['$get']>>>
            >
          >,
          ReturnType<typeof get2AccountQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['account']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof get2AccountQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: get2AccountQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client['2'].account.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePost2Account<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['account']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client)['2']['account']['$post']>,
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
  const mutationDefaults = getPost2AccountMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function get2AccountActivitySubscriptionsCountQueryKey() {
  return ['2', '/2/account_activity/subscriptions/count'] as const
}

export function get2AccountActivitySubscriptionsCountQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: get2AccountActivitySubscriptionsCountQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2'].account_activity.subscriptions.count.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use2AccountActivitySubscriptionsCount<
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
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          ReturnType<typeof get2AccountActivitySubscriptionsCountQueryKey>
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
            ReturnType<(typeof client)['2']['account_activity']['subscriptions']['count']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2AccountActivitySubscriptionsCountQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: get2AccountActivitySubscriptionsCountQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client['2'].account_activity.subscriptions.count.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get2AccountActivityWebhooksWebhookIdSubscriptionsAllQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2']['account_activity']['webhooks'][':webhook_id']['subscriptions']['all']['$get']
    >
  >,
) {
  return ['2', '/2/account_activity/webhooks/:webhook_id/subscriptions/all', toValue(args)] as const
}

export function get2AccountActivityWebhooksWebhookIdSubscriptionsAllQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2']['account_activity']['webhooks'][':webhook_id']['subscriptions']['all']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get2AccountActivityWebhooksWebhookIdSubscriptionsAllQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2'].account_activity.webhooks[':webhook_id'].subscriptions.all.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use2AccountActivityWebhooksWebhookIdSubscriptionsAll<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2']['account_activity']['webhooks'][':webhook_id']['subscriptions']['all']['$get']
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
                    (typeof client)['2']['account_activity']['webhooks'][':webhook_id']['subscriptions']['all']['$get']
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
                    (typeof client)['2']['account_activity']['webhooks'][':webhook_id']['subscriptions']['all']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof get2AccountActivityWebhooksWebhookIdSubscriptionsAllQueryKey>
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
              (typeof client)['2']['account_activity']['webhooks'][':webhook_id']['subscriptions']['all']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2AccountActivityWebhooksWebhookIdSubscriptionsAllQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get2AccountActivityWebhooksWebhookIdSubscriptionsAllQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2'].account_activity.webhooks[':webhook_id'].subscriptions.all.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
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

export function usePost2AccountActivityWebhooksWebhookIdSubscriptionsAll<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPost2AccountActivityWebhooksWebhookIdSubscriptionsAllMutationOptions<
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

export function get2AccountActivityWebhooksWebhookIdSubscriptionsAllListQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2']['account_activity']['webhooks'][':webhook_id']['subscriptions']['all']['list']['$get']
    >
  >,
) {
  return [
    '2',
    '/2/account_activity/webhooks/:webhook_id/subscriptions/all/list',
    toValue(args),
  ] as const
}

export function get2AccountActivityWebhooksWebhookIdSubscriptionsAllListQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2']['account_activity']['webhooks'][':webhook_id']['subscriptions']['all']['list']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      get2AccountActivityWebhooksWebhookIdSubscriptionsAllListQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2'].account_activity.webhooks[':webhook_id'].subscriptions.all.list.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function use2AccountActivityWebhooksWebhookIdSubscriptionsAllList<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2']['account_activity']['webhooks'][':webhook_id']['subscriptions']['all']['list']['$get']
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
                    (typeof client)['2']['account_activity']['webhooks'][':webhook_id']['subscriptions']['all']['list']['$get']
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
                    (typeof client)['2']['account_activity']['webhooks'][':webhook_id']['subscriptions']['all']['list']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof get2AccountActivityWebhooksWebhookIdSubscriptionsAllListQueryKey>
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
              (typeof client)['2']['account_activity']['webhooks'][':webhook_id']['subscriptions']['all']['list']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2AccountActivityWebhooksWebhookIdSubscriptionsAllListQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        get2AccountActivityWebhooksWebhookIdSubscriptionsAllListQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client['2'].account_activity.webhooks[':webhook_id'].subscriptions.all.list.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
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

export function useDelete2AccountActivityWebhooksWebhookIdSubscriptionsUserIdAll<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getDelete2AccountActivityWebhooksWebhookIdSubscriptionsUserIdAllMutationOptions<
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

export function get2ActivityStreamQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2']['activity']['stream']['$get']>>,
) {
  return ['2', '/2/activity/stream', toValue(args)] as const
}

export function get2ActivityStreamQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2']['activity']['stream']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get2ActivityStreamQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2'].activity.stream.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use2ActivityStream<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['activity']['stream']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2']['activity']['stream']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['activity']['stream']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['activity']['stream']['$get']>>
              >
            >
          >,
          ReturnType<typeof get2ActivityStreamQueryKey>
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
          Awaited<ReturnType<(typeof client)['2']['activity']['stream']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2ActivityStreamQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get2ActivityStreamQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2'].activity.stream.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get2ActivitySubscriptionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['activity']['subscriptions']['$get']>
  >,
) {
  return ['2', '/2/activity/subscriptions', toValue(args)] as const
}

export function get2ActivitySubscriptionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['activity']['subscriptions']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get2ActivitySubscriptionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2'].activity.subscriptions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use2ActivitySubscriptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['activity']['subscriptions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['activity']['subscriptions']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['activity']['subscriptions']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['activity']['subscriptions']['$get']>>
              >
            >
          >,
          ReturnType<typeof get2ActivitySubscriptionsQueryKey>
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
          Awaited<ReturnType<(typeof client)['2']['activity']['subscriptions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2ActivitySubscriptionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get2ActivitySubscriptionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2'].activity.subscriptions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePost2ActivitySubscriptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPost2ActivitySubscriptionsMutationOptions<TError, TOnMutateResult>(
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

export function useDelete2ActivitySubscriptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDelete2ActivitySubscriptionsMutationOptions<TError, TOnMutateResult>(
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

export function usePut2ActivitySubscriptionsSubscriptionId<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPut2ActivitySubscriptionsSubscriptionIdMutationOptions<
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

export function useDelete2ActivitySubscriptionsSubscriptionId<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDelete2ActivitySubscriptionsSubscriptionIdMutationOptions<
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

export function usePost2ArticlesDraft<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPost2ArticlesDraftMutationOptions<TError, TOnMutateResult>(
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

export function usePost2ArticlesArticleIdPublish<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPost2ArticlesArticleIdPublishMutationOptions<TError, TOnMutateResult>(
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

export function get2BotsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2']['bots']['$get']>>,
) {
  return ['2', '/2/bots', toValue(args)] as const
}

export function get2BotsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2']['bots']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get2BotsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2'].bots.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function use2Bots<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['bots']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2']['bots']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['bots']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['bots']['$get']>>>
            >
          >,
          ReturnType<typeof get2BotsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['bots']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof get2BotsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get2BotsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2'].bots.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePost2Bots<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['bots']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client)['2']['bots']['$post']>,
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
  const mutationDefaults = getPost2BotsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePut2BotsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['bots'][':id']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client)['2']['bots'][':id']['$put']>,
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
  const mutationDefaults = getPut2BotsIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useDelete2BotsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDelete2BotsIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePost2BotsIdToken<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPost2BotsIdTokenMutationOptions<TError, TOnMutateResult>(
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

export function useDelete2BotsIdToken<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDelete2BotsIdTokenMutationOptions<TError, TOnMutateResult>(
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

export function get2BroadcastsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2']['broadcasts']['$get']>>,
) {
  return ['2', '/2/broadcasts', toValue(args)] as const
}

export function get2BroadcastsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2']['broadcasts']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get2BroadcastsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2'].broadcasts.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use2Broadcasts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['broadcasts']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2']['broadcasts']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['broadcasts']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['broadcasts']['$get']>>>
            >
          >,
          ReturnType<typeof get2BroadcastsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['broadcasts']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2BroadcastsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get2BroadcastsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2'].broadcasts.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePost2Broadcasts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['broadcasts']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client)['2']['broadcasts']['$post']>,
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
  const mutationDefaults = getPost2BroadcastsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function get2BroadcastsCategoriesQueryKey() {
  return ['2', '/2/broadcasts/categories'] as const
}

export function get2BroadcastsCategoriesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: get2BroadcastsCategoriesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2'].broadcasts.categories.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use2BroadcastsCategories<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['broadcasts']['categories']['$get']>>
      >
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
                Awaited<ReturnType<(typeof client)['2']['broadcasts']['categories']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['broadcasts']['categories']['$get']>>
              >
            >
          >,
          ReturnType<typeof get2BroadcastsCategoriesQueryKey>
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
          Awaited<ReturnType<(typeof client)['2']['broadcasts']['categories']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2BroadcastsCategoriesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: get2BroadcastsCategoriesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client['2'].broadcasts.categories.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get2BroadcastsChatModeratorsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['broadcasts']['chat']['moderators']['$get']>
  >,
) {
  return ['2', '/2/broadcasts/chat/moderators', toValue(args)] as const
}

export function get2BroadcastsChatModeratorsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['broadcasts']['chat']['moderators']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get2BroadcastsChatModeratorsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2'].broadcasts.chat.moderators.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use2BroadcastsChatModerators<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['broadcasts']['chat']['moderators']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['broadcasts']['chat']['moderators']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['2']['broadcasts']['chat']['moderators']['$get']>
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
                  ReturnType<(typeof client)['2']['broadcasts']['chat']['moderators']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof get2BroadcastsChatModeratorsQueryKey>
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
          Awaited<ReturnType<(typeof client)['2']['broadcasts']['chat']['moderators']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2BroadcastsChatModeratorsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get2BroadcastsChatModeratorsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2'].broadcasts.chat.moderators.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePost2BroadcastsChatModerators<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['2']['broadcasts']['chat']['moderators']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['2']['broadcasts']['chat']['moderators']['$post']>,
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
  const mutationDefaults = getPost2BroadcastsChatModeratorsMutationOptions<TError, TOnMutateResult>(
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

export function useDelete2BroadcastsChatModeratorsUserId<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDelete2BroadcastsChatModeratorsUserIdMutationOptions<
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

export function get2BroadcastsChatMutesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['broadcasts']['chat']['mutes']['$get']>
  >,
) {
  return ['2', '/2/broadcasts/chat/mutes', toValue(args)] as const
}

export function get2BroadcastsChatMutesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['broadcasts']['chat']['mutes']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get2BroadcastsChatMutesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2'].broadcasts.chat.mutes.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use2BroadcastsChatMutes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['broadcasts']['chat']['mutes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['broadcasts']['chat']['mutes']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['broadcasts']['chat']['mutes']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['broadcasts']['chat']['mutes']['$get']>>
              >
            >
          >,
          ReturnType<typeof get2BroadcastsChatMutesQueryKey>
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
          Awaited<ReturnType<(typeof client)['2']['broadcasts']['chat']['mutes']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2BroadcastsChatMutesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get2BroadcastsChatMutesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2'].broadcasts.chat.mutes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePost2BroadcastsChatMutes<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPost2BroadcastsChatMutesMutationOptions<TError, TOnMutateResult>(
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

export function useDelete2BroadcastsChatMutesUserId<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDelete2BroadcastsChatMutesUserIdMutationOptions<
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

export function get2BroadcastsScheduledQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2']['broadcasts']['scheduled']['$get']>>,
) {
  return ['2', '/2/broadcasts/scheduled', toValue(args)] as const
}

export function get2BroadcastsScheduledQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2']['broadcasts']['scheduled']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get2BroadcastsScheduledQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2'].broadcasts.scheduled.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use2BroadcastsScheduled<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['broadcasts']['scheduled']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2']['broadcasts']['scheduled']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['broadcasts']['scheduled']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['broadcasts']['scheduled']['$get']>>
              >
            >
          >,
          ReturnType<typeof get2BroadcastsScheduledQueryKey>
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
          Awaited<ReturnType<(typeof client)['2']['broadcasts']['scheduled']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2BroadcastsScheduledQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get2BroadcastsScheduledQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2'].broadcasts.scheduled.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePost2BroadcastsScheduled<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPost2BroadcastsScheduledMutationOptions<TError, TOnMutateResult>(
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

export function get2BroadcastsScheduledIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['broadcasts']['scheduled'][':id']['$get']>
  >,
) {
  return ['2', '/2/broadcasts/scheduled/:id', toValue(args)] as const
}

export function get2BroadcastsScheduledIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['broadcasts']['scheduled'][':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get2BroadcastsScheduledIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2'].broadcasts.scheduled[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use2BroadcastsScheduledId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['broadcasts']['scheduled'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['broadcasts']['scheduled'][':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['broadcasts']['scheduled'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['broadcasts']['scheduled'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof get2BroadcastsScheduledIdQueryKey>
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
          Awaited<ReturnType<(typeof client)['2']['broadcasts']['scheduled'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2BroadcastsScheduledIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get2BroadcastsScheduledIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2'].broadcasts.scheduled[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePut2BroadcastsScheduledId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPut2BroadcastsScheduledIdMutationOptions<TError, TOnMutateResult>(
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

export function useDelete2BroadcastsScheduledId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['2']['broadcasts']['scheduled'][':id']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['2']['broadcasts']['scheduled'][':id']['$delete']>,
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
  const mutationDefaults = getDelete2BroadcastsScheduledIdMutationOptions<TError, TOnMutateResult>(
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

export function usePost2BroadcastsScheduledIdLive<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['2']['broadcasts']['scheduled'][':id']['live']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['2']['broadcasts']['scheduled'][':id']['live']['$post']>,
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
  const mutationDefaults = getPost2BroadcastsScheduledIdLiveMutationOptions<
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

export function get2BroadcastsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2']['broadcasts'][':id']['$get']>>,
) {
  return ['2', '/2/broadcasts/:id', toValue(args)] as const
}

export function get2BroadcastsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2']['broadcasts'][':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get2BroadcastsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2'].broadcasts[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use2BroadcastsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['broadcasts'][':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2']['broadcasts'][':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['broadcasts'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['broadcasts'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof get2BroadcastsIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['broadcasts'][':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2BroadcastsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get2BroadcastsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2'].broadcasts[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePut2BroadcastsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPut2BroadcastsIdMutationOptions<TError, TOnMutateResult>(
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

export function useDelete2BroadcastsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDelete2BroadcastsIdMutationOptions<TError, TOnMutateResult>(
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

export function get2BroadcastsIdChatQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['broadcasts'][':id']['chat']['$get']>
  >,
) {
  return ['2', '/2/broadcasts/:id/chat', toValue(args)] as const
}

export function get2BroadcastsIdChatQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['broadcasts'][':id']['chat']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get2BroadcastsIdChatQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2'].broadcasts[':id'].chat.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use2BroadcastsIdChat<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['broadcasts'][':id']['chat']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['broadcasts'][':id']['chat']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['broadcasts'][':id']['chat']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['broadcasts'][':id']['chat']['$get']>>
              >
            >
          >,
          ReturnType<typeof get2BroadcastsIdChatQueryKey>
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
          Awaited<ReturnType<(typeof client)['2']['broadcasts'][':id']['chat']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2BroadcastsIdChatQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get2BroadcastsIdChatQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2'].broadcasts[':id'].chat.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePost2BroadcastsIdChat<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPost2BroadcastsIdChatMutationOptions<TError, TOnMutateResult>(
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

export function usePost2BroadcastsIdChatMutes<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPost2BroadcastsIdChatMutesMutationOptions<TError, TOnMutateResult>(
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

export function useDelete2BroadcastsIdChatMutesUserId<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDelete2BroadcastsIdChatMutesUserIdMutationOptions<
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

export function useDelete2BroadcastsIdChatMessageId<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDelete2BroadcastsIdChatMessageIdMutationOptions<
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

export function usePut2BroadcastsIdState<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPut2BroadcastsIdStateMutationOptions<TError, TOnMutateResult>(
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

export function usePost2Calls<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['calls']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client)['2']['calls']['$post']>,
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
  const mutationDefaults = getPost2CallsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function get2CallsScheduledQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2']['calls']['scheduled']['$get']>>,
) {
  return ['2', '/2/calls/scheduled', toValue(args)] as const
}

export function get2CallsScheduledQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2']['calls']['scheduled']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get2CallsScheduledQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2'].calls.scheduled.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use2CallsScheduled<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['calls']['scheduled']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2']['calls']['scheduled']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['calls']['scheduled']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['calls']['scheduled']['$get']>>
              >
            >
          >,
          ReturnType<typeof get2CallsScheduledQueryKey>
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
          Awaited<ReturnType<(typeof client)['2']['calls']['scheduled']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2CallsScheduledQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get2CallsScheduledQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2'].calls.scheduled.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePost2CallsScheduled<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPost2CallsScheduledMutationOptions<TError, TOnMutateResult>(
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

export function get2CallsScheduledIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['calls']['scheduled'][':id']['$get']>
  >,
) {
  return ['2', '/2/calls/scheduled/:id', toValue(args)] as const
}

export function get2CallsScheduledIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['calls']['scheduled'][':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get2CallsScheduledIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2'].calls.scheduled[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use2CallsScheduledId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['calls']['scheduled'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['calls']['scheduled'][':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['calls']['scheduled'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['calls']['scheduled'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof get2CallsScheduledIdQueryKey>
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
          Awaited<ReturnType<(typeof client)['2']['calls']['scheduled'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2CallsScheduledIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get2CallsScheduledIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2'].calls.scheduled[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePut2CallsScheduledId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPut2CallsScheduledIdMutationOptions<TError, TOnMutateResult>(
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

export function useDelete2CallsScheduledId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDelete2CallsScheduledIdMutationOptions<TError, TOnMutateResult>(
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

export function usePost2CallsScheduledIdRsvp<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPost2CallsScheduledIdRsvpMutationOptions<TError, TOnMutateResult>(
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

export function get2CallsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2']['calls'][':id']['$get']>>,
) {
  return ['2', '/2/calls/:id', toValue(args)] as const
}

export function get2CallsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2']['calls'][':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get2CallsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2'].calls[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use2CallsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['calls'][':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2']['calls'][':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['calls'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['calls'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof get2CallsIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['calls'][':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2CallsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get2CallsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2'].calls[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePost2CallsIdJoin<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPost2CallsIdJoinMutationOptions<TError, TOnMutateResult>(
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

export function usePost2CallsIdLeave<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPost2CallsIdLeaveMutationOptions<TError, TOnMutateResult>(
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

export function get2ChatConversationsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2']['chat']['conversations']['$get']>>,
) {
  return ['2', '/2/chat/conversations', toValue(args)] as const
}

export function get2ChatConversationsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2']['chat']['conversations']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get2ChatConversationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2'].chat.conversations.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use2ChatConversations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['chat']['conversations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2']['chat']['conversations']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['chat']['conversations']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['chat']['conversations']['$get']>>
              >
            >
          >,
          ReturnType<typeof get2ChatConversationsQueryKey>
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
          Awaited<ReturnType<(typeof client)['2']['chat']['conversations']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2ChatConversationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get2ChatConversationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2'].chat.conversations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePost2ChatConversationsGroup<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPost2ChatConversationsGroupMutationOptions<TError, TOnMutateResult>(
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

export function usePost2ChatConversationsGroupInitialize<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPost2ChatConversationsGroupInitializeMutationOptions<
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

export function get2ChatConversationsIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['chat']['conversations'][':id']['$get']>
  >,
) {
  return ['2', '/2/chat/conversations/:id', toValue(args)] as const
}

export function get2ChatConversationsIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['chat']['conversations'][':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get2ChatConversationsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2'].chat.conversations[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use2ChatConversationsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['chat']['conversations'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['chat']['conversations'][':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['chat']['conversations'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['chat']['conversations'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof get2ChatConversationsIdQueryKey>
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
          Awaited<ReturnType<(typeof client)['2']['chat']['conversations'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2ChatConversationsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get2ChatConversationsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2'].chat.conversations[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePut2ChatConversationsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPut2ChatConversationsIdMutationOptions<TError, TOnMutateResult>(
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

export function useDelete2ChatConversationsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDelete2ChatConversationsIdMutationOptions<TError, TOnMutateResult>(
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

export function get2ChatConversationsIdAdminRequestsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['chat']['conversations'][':id']['admin_requests']['$get']>
  >,
) {
  return ['2', '/2/chat/conversations/:id/admin_requests', toValue(args)] as const
}

export function get2ChatConversationsIdAdminRequestsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['chat']['conversations'][':id']['admin_requests']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get2ChatConversationsIdAdminRequestsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2'].chat.conversations[':id'].admin_requests.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use2ChatConversationsIdAdminRequests<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['chat']['conversations'][':id']['admin_requests']['$get']>
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
                    (typeof client)['2']['chat']['conversations'][':id']['admin_requests']['$get']
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
                    (typeof client)['2']['chat']['conversations'][':id']['admin_requests']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof get2ChatConversationsIdAdminRequestsQueryKey>
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
              (typeof client)['2']['chat']['conversations'][':id']['admin_requests']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2ChatConversationsIdAdminRequestsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get2ChatConversationsIdAdminRequestsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2'].chat.conversations[':id'].admin_requests.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePost2ChatConversationsIdAdminRequests<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPost2ChatConversationsIdAdminRequestsMutationOptions<
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

export function usePost2ChatConversationsIdAdminRequestsUserIdApprove<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPost2ChatConversationsIdAdminRequestsUserIdApproveMutationOptions<
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

export function usePost2ChatConversationsIdAdminRequestsUserIdReject<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPost2ChatConversationsIdAdminRequestsUserIdRejectMutationOptions<
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

export function usePut2ChatConversationsIdAdminSettings<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPut2ChatConversationsIdAdminSettingsMutationOptions<
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

export function usePost2ChatConversationsIdAdmins<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['2']['chat']['conversations'][':id']['admins']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['2']['chat']['conversations'][':id']['admins']['$post']>,
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
  const mutationDefaults = getPost2ChatConversationsIdAdminsMutationOptions<
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

export function usePost2ChatConversationsIdAdminsRemove<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPost2ChatConversationsIdAdminsRemoveMutationOptions<
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

export function usePost2ChatConversationsIdArchive<
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
                    (typeof client)['2']['chat']['conversations'][':id']['archive']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['2']['chat']['conversations'][':id']['archive']['$post']
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
  const mutationDefaults = getPost2ChatConversationsIdArchiveMutationOptions<
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

export function useDelete2ChatConversationsIdArchive<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDelete2ChatConversationsIdArchiveMutationOptions<
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

export function get2ChatConversationsIdEventsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['chat']['conversations'][':id']['events']['$get']>
  >,
) {
  return ['2', '/2/chat/conversations/:id/events', toValue(args)] as const
}

export function get2ChatConversationsIdEventsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['chat']['conversations'][':id']['events']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get2ChatConversationsIdEventsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2'].chat.conversations[':id'].events.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use2ChatConversationsIdEvents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['chat']['conversations'][':id']['events']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['chat']['conversations'][':id']['events']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['2']['chat']['conversations'][':id']['events']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof get2ChatConversationsIdEventsQueryKey>
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
            ReturnType<(typeof client)['2']['chat']['conversations'][':id']['events']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2ChatConversationsIdEventsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get2ChatConversationsIdEventsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2'].chat.conversations[':id'].events.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePost2ChatConversationsIdInvite<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['2']['chat']['conversations'][':id']['invite']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['2']['chat']['conversations'][':id']['invite']['$post']>,
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
  const mutationDefaults = getPost2ChatConversationsIdInviteMutationOptions<
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

export function useDelete2ChatConversationsIdInvite<
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
                    (typeof client)['2']['chat']['conversations'][':id']['invite']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['2']['chat']['conversations'][':id']['invite']['$delete']
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
  const mutationDefaults = getDelete2ChatConversationsIdInviteMutationOptions<
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

export function get2ChatConversationsIdInvitesTokenQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2']['chat']['conversations'][':id']['invites'][':token']['$get']
    >
  >,
) {
  return ['2', '/2/chat/conversations/:id/invites/:token', toValue(args)] as const
}

export function get2ChatConversationsIdInvitesTokenQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2']['chat']['conversations'][':id']['invites'][':token']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get2ChatConversationsIdInvitesTokenQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2'].chat.conversations[':id'].invites[':token'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use2ChatConversationsIdInvitesToken<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2']['chat']['conversations'][':id']['invites'][':token']['$get']
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
                    (typeof client)['2']['chat']['conversations'][':id']['invites'][':token']['$get']
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
                    (typeof client)['2']['chat']['conversations'][':id']['invites'][':token']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof get2ChatConversationsIdInvitesTokenQueryKey>
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
              (typeof client)['2']['chat']['conversations'][':id']['invites'][':token']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2ChatConversationsIdInvitesTokenQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get2ChatConversationsIdInvitesTokenQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2'].chat.conversations[':id'].invites[':token'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePost2ChatConversationsIdJoinRequests<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPost2ChatConversationsIdJoinRequestsMutationOptions<
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

export function usePost2ChatConversationsIdJoinRequestsReject<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPost2ChatConversationsIdJoinRequestsRejectMutationOptions<
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

export function usePost2ChatConversationsIdKeys<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPost2ChatConversationsIdKeysMutationOptions<TError, TOnMutateResult>(
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

export function usePost2ChatConversationsIdMembers<
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
                    (typeof client)['2']['chat']['conversations'][':id']['members']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['2']['chat']['conversations'][':id']['members']['$post']
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
  const mutationDefaults = getPost2ChatConversationsIdMembersMutationOptions<
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

export function usePost2ChatConversationsIdMembersRemove<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPost2ChatConversationsIdMembersRemoveMutationOptions<
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

export function usePut2ChatConversationsIdMessageTtl<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPut2ChatConversationsIdMessageTtlMutationOptions<
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

export function useDelete2ChatConversationsIdMessageTtl<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDelete2ChatConversationsIdMessageTtlMutationOptions<
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

export function usePost2ChatConversationsIdMessages<
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
                    (typeof client)['2']['chat']['conversations'][':id']['messages']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['2']['chat']['conversations'][':id']['messages']['$post']
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
  const mutationDefaults = getPost2ChatConversationsIdMessagesMutationOptions<
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

export function usePost2ChatConversationsIdMessagesDelete<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPost2ChatConversationsIdMessagesDeleteMutationOptions<
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

export function usePost2ChatConversationsIdMute<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPost2ChatConversationsIdMuteMutationOptions<TError, TOnMutateResult>(
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

export function useDelete2ChatConversationsIdMute<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['2']['chat']['conversations'][':id']['mute']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['2']['chat']['conversations'][':id']['mute']['$delete']>,
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
  const mutationDefaults = getDelete2ChatConversationsIdMuteMutationOptions<
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

export function get2ChatConversationsIdPinnedMessagesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2']['chat']['conversations'][':id']['pinned_messages']['$get']
    >
  >,
) {
  return ['2', '/2/chat/conversations/:id/pinned_messages', toValue(args)] as const
}

export function get2ChatConversationsIdPinnedMessagesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2']['chat']['conversations'][':id']['pinned_messages']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get2ChatConversationsIdPinnedMessagesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2'].chat.conversations[':id'].pinned_messages.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use2ChatConversationsIdPinnedMessages<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2']['chat']['conversations'][':id']['pinned_messages']['$get']
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
                    (typeof client)['2']['chat']['conversations'][':id']['pinned_messages']['$get']
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
                    (typeof client)['2']['chat']['conversations'][':id']['pinned_messages']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof get2ChatConversationsIdPinnedMessagesQueryKey>
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
              (typeof client)['2']['chat']['conversations'][':id']['pinned_messages']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2ChatConversationsIdPinnedMessagesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get2ChatConversationsIdPinnedMessagesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2'].chat.conversations[':id'].pinned_messages.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePost2ChatConversationsIdRead<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPost2ChatConversationsIdReadMutationOptions<TError, TOnMutateResult>(
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

export function usePut2ChatConversationsIdScreenCapture<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPut2ChatConversationsIdScreenCaptureMutationOptions<
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

export function usePost2ChatConversationsIdTyping<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['2']['chat']['conversations'][':id']['typing']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['2']['chat']['conversations'][':id']['typing']['$post']>,
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
  const mutationDefaults = getPost2ChatConversationsIdTypingMutationOptions<
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

export function usePost2ChatConversationsIdUnread<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['2']['chat']['conversations'][':id']['unread']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['2']['chat']['conversations'][':id']['unread']['$post']>,
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
  const mutationDefaults = getPost2ChatConversationsIdUnreadMutationOptions<
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

export function usePost2ChatMediaUploadInitialize<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPost2ChatMediaUploadInitializeMutationOptions<
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

export function usePost2ChatMediaUploadIdAppend<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['2']['chat']['media']['upload'][':id']['append']['$post']
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
  const mutationDefaults = getPost2ChatMediaUploadIdAppendMutationOptions<TError, TOnMutateResult>(
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

export function usePost2ChatMediaUploadIdFinalize<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPost2ChatMediaUploadIdFinalizeMutationOptions<
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

export function get2ChatMediaIdMediaHashKeyQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['chat']['media'][':id'][':media_hash_key']['$get']>
  >,
) {
  return ['2', '/2/chat/media/:id/:media_hash_key', toValue(args)] as const
}

export function get2ChatMediaIdMediaHashKeyQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['chat']['media'][':id'][':media_hash_key']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get2ChatMediaIdMediaHashKeyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2'].chat.media[':id'][':media_hash_key'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use2ChatMediaIdMediaHashKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['chat']['media'][':id'][':media_hash_key']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['chat']['media'][':id'][':media_hash_key']['$get']>
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
                    (typeof client)['2']['chat']['media'][':id'][':media_hash_key']['$get']
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
                    (typeof client)['2']['chat']['media'][':id'][':media_hash_key']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof get2ChatMediaIdMediaHashKeyQueryKey>
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
            ReturnType<(typeof client)['2']['chat']['media'][':id'][':media_hash_key']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2ChatMediaIdMediaHashKeyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get2ChatMediaIdMediaHashKeyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2'].chat.media[':id'][':media_hash_key'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get2ChatMessageRequestsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['chat']['message_requests']['$get']>
  >,
) {
  return ['2', '/2/chat/message_requests', toValue(args)] as const
}

export function get2ChatMessageRequestsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['chat']['message_requests']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get2ChatMessageRequestsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2'].chat.message_requests.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use2ChatMessageRequests<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['chat']['message_requests']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['chat']['message_requests']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['chat']['message_requests']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['chat']['message_requests']['$get']>>
              >
            >
          >,
          ReturnType<typeof get2ChatMessageRequestsQueryKey>
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
          Awaited<ReturnType<(typeof client)['2']['chat']['message_requests']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2ChatMessageRequestsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get2ChatMessageRequestsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2'].chat.message_requests.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get2ChatMessageRequestsIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['chat']['message_requests'][':id']['$get']>
  >,
) {
  return ['2', '/2/chat/message_requests/:id', toValue(args)] as const
}

export function get2ChatMessageRequestsIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['chat']['message_requests'][':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get2ChatMessageRequestsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2'].chat.message_requests[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use2ChatMessageRequestsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['chat']['message_requests'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['chat']['message_requests'][':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['chat']['message_requests'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['chat']['message_requests'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof get2ChatMessageRequestsIdQueryKey>
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
          Awaited<ReturnType<(typeof client)['2']['chat']['message_requests'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2ChatMessageRequestsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get2ChatMessageRequestsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2'].chat.message_requests[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePost2ChatMessageRequestsIdAccept<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPost2ChatMessageRequestsIdAcceptMutationOptions<
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

export function get2ChatSettingsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2']['chat']['settings']['$get']>>,
) {
  return ['2', '/2/chat/settings', toValue(args)] as const
}

export function get2ChatSettingsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2']['chat']['settings']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get2ChatSettingsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2'].chat.settings.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use2ChatSettings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['chat']['settings']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2']['chat']['settings']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['chat']['settings']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['chat']['settings']['$get']>>
              >
            >
          >,
          ReturnType<typeof get2ChatSettingsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['chat']['settings']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2ChatSettingsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get2ChatSettingsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2'].chat.settings.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePut2ChatSettings<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPut2ChatSettingsMutationOptions<TError, TOnMutateResult>(
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

export function get2CommunitiesSearchQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2']['communities']['search']['$get']>>,
) {
  return ['2', '/2/communities/search', toValue(args)] as const
}

export function get2CommunitiesSearchQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2']['communities']['search']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get2CommunitiesSearchQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2'].communities.search.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use2CommunitiesSearch<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['communities']['search']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2']['communities']['search']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['communities']['search']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['communities']['search']['$get']>>
              >
            >
          >,
          ReturnType<typeof get2CommunitiesSearchQueryKey>
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
          Awaited<ReturnType<(typeof client)['2']['communities']['search']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2CommunitiesSearchQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get2CommunitiesSearchQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2'].communities.search.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get2CommunitiesIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2']['communities'][':id']['$get']>>,
) {
  return ['2', '/2/communities/:id', toValue(args)] as const
}

export function get2CommunitiesIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2']['communities'][':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get2CommunitiesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2'].communities[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use2CommunitiesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['communities'][':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2']['communities'][':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['communities'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['communities'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof get2CommunitiesIdQueryKey>
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
          Awaited<ReturnType<(typeof client)['2']['communities'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2CommunitiesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get2CommunitiesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2'].communities[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get2ComplianceJobsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2']['compliance']['jobs']['$get']>>,
) {
  return ['2', '/2/compliance/jobs', toValue(args)] as const
}

export function get2ComplianceJobsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2']['compliance']['jobs']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get2ComplianceJobsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2'].compliance.jobs.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use2ComplianceJobs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['compliance']['jobs']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2']['compliance']['jobs']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['compliance']['jobs']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['compliance']['jobs']['$get']>>
              >
            >
          >,
          ReturnType<typeof get2ComplianceJobsQueryKey>
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
          Awaited<ReturnType<(typeof client)['2']['compliance']['jobs']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2ComplianceJobsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get2ComplianceJobsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2'].compliance.jobs.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePost2ComplianceJobs<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPost2ComplianceJobsMutationOptions<TError, TOnMutateResult>(
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

export function get2ComplianceJobsIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['compliance']['jobs'][':id']['$get']>
  >,
) {
  return ['2', '/2/compliance/jobs/:id', toValue(args)] as const
}

export function get2ComplianceJobsIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['compliance']['jobs'][':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get2ComplianceJobsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2'].compliance.jobs[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use2ComplianceJobsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['compliance']['jobs'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['compliance']['jobs'][':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['compliance']['jobs'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['compliance']['jobs'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof get2ComplianceJobsIdQueryKey>
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
          Awaited<ReturnType<(typeof client)['2']['compliance']['jobs'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2ComplianceJobsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get2ComplianceJobsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2'].compliance.jobs[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDelete2ComplianceJobsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDelete2ComplianceJobsIdMutationOptions<TError, TOnMutateResult>(
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

export function get2ComplianceJobsIdDownloadQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['compliance']['jobs'][':id']['download']['$get']>
  >,
) {
  return ['2', '/2/compliance/jobs/:id/download', toValue(args)] as const
}

export function get2ComplianceJobsIdDownloadQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['compliance']['jobs'][':id']['download']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get2ComplianceJobsIdDownloadQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2'].compliance.jobs[':id'].download.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use2ComplianceJobsIdDownload<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['compliance']['jobs'][':id']['download']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['compliance']['jobs'][':id']['download']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['2']['compliance']['jobs'][':id']['download']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof get2ComplianceJobsIdDownloadQueryKey>
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
          Awaited<ReturnType<(typeof client)['2']['compliance']['jobs'][':id']['download']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2ComplianceJobsIdDownloadQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get2ComplianceJobsIdDownloadQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2'].compliance.jobs[':id'].download.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePut2ComplianceJobsIdUpload<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPut2ComplianceJobsIdUploadMutationOptions<TError, TOnMutateResult>(
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

export function get2ConnectionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2']['connections']['$get']>>,
) {
  return ['2', '/2/connections', toValue(args)] as const
}

export function get2ConnectionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2']['connections']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get2ConnectionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2'].connections.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use2Connections<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['connections']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2']['connections']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['connections']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['connections']['$get']>>>
            >
          >,
          ReturnType<typeof get2ConnectionsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['connections']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2ConnectionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get2ConnectionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2'].connections.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDelete2Connections<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDelete2ConnectionsMutationOptions<TError, TOnMutateResult>(
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

export function useDelete2ConnectionsAll<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDelete2ConnectionsAllMutationOptions<TError, TOnMutateResult>(
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

export function useDelete2ConnectionsEndpointId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDelete2ConnectionsEndpointIdMutationOptions<TError, TOnMutateResult>(
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

export function usePost2DmConversations<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPost2DmConversationsMutationOptions<TError, TOnMutateResult>(
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

export function get2DmConversationsMediaDmIdMediaIdResourceIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2']['dm_conversations']['media'][':dm_id'][':media_id'][':resource_id']['$get']
    >
  >,
) {
  return ['2', '/2/dm_conversations/media/:dm_id/:media_id/:resource_id', toValue(args)] as const
}

export function get2DmConversationsMediaDmIdMediaIdResourceIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2']['dm_conversations']['media'][':dm_id'][':media_id'][':resource_id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get2DmConversationsMediaDmIdMediaIdResourceIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2'].dm_conversations.media[':dm_id'][':media_id'][':resource_id'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function use2DmConversationsMediaDmIdMediaIdResourceId<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2']['dm_conversations']['media'][':dm_id'][':media_id'][':resource_id']['$get']
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
                    (typeof client)['2']['dm_conversations']['media'][':dm_id'][':media_id'][':resource_id']['$get']
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
                    (typeof client)['2']['dm_conversations']['media'][':dm_id'][':media_id'][':resource_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof get2DmConversationsMediaDmIdMediaIdResourceIdQueryKey>
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
              (typeof client)['2']['dm_conversations']['media'][':dm_id'][':media_id'][':resource_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2DmConversationsMediaDmIdMediaIdResourceIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get2DmConversationsMediaDmIdMediaIdResourceIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2'].dm_conversations.media[':dm_id'][':media_id'][':resource_id'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function get2DmConversationsWithParticipantIdDmEventsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2']['dm_conversations']['with'][':participant_id']['dm_events']['$get']
    >
  >,
) {
  return ['2', '/2/dm_conversations/with/:participant_id/dm_events', toValue(args)] as const
}

export function get2DmConversationsWithParticipantIdDmEventsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2']['dm_conversations']['with'][':participant_id']['dm_events']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get2DmConversationsWithParticipantIdDmEventsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2'].dm_conversations.with[':participant_id'].dm_events.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use2DmConversationsWithParticipantIdDmEvents<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2']['dm_conversations']['with'][':participant_id']['dm_events']['$get']
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
                    (typeof client)['2']['dm_conversations']['with'][':participant_id']['dm_events']['$get']
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
                    (typeof client)['2']['dm_conversations']['with'][':participant_id']['dm_events']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof get2DmConversationsWithParticipantIdDmEventsQueryKey>
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
              (typeof client)['2']['dm_conversations']['with'][':participant_id']['dm_events']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2DmConversationsWithParticipantIdDmEventsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get2DmConversationsWithParticipantIdDmEventsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2'].dm_conversations.with[':participant_id'].dm_events.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePost2DmConversationsWithParticipantIdMessages<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPost2DmConversationsWithParticipantIdMessagesMutationOptions<
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

export function usePost2DmConversationsDmConversationIdMessages<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPost2DmConversationsDmConversationIdMessagesMutationOptions<
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

export function get2DmConversationsIdDmEventsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['dm_conversations'][':id']['dm_events']['$get']>
  >,
) {
  return ['2', '/2/dm_conversations/:id/dm_events', toValue(args)] as const
}

export function get2DmConversationsIdDmEventsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['dm_conversations'][':id']['dm_events']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get2DmConversationsIdDmEventsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2'].dm_conversations[':id'].dm_events.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use2DmConversationsIdDmEvents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['dm_conversations'][':id']['dm_events']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['dm_conversations'][':id']['dm_events']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['2']['dm_conversations'][':id']['dm_events']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof get2DmConversationsIdDmEventsQueryKey>
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
          Awaited<ReturnType<(typeof client)['2']['dm_conversations'][':id']['dm_events']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2DmConversationsIdDmEventsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get2DmConversationsIdDmEventsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2'].dm_conversations[':id'].dm_events.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get2DmEventsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2']['dm_events']['$get']>>,
) {
  return ['2', '/2/dm_events', toValue(args)] as const
}

export function get2DmEventsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2']['dm_events']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get2DmEventsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2'].dm_events.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use2DmEvents<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['dm_events']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2']['dm_events']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['dm_events']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['dm_events']['$get']>>>
            >
          >,
          ReturnType<typeof get2DmEventsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['dm_events']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2DmEventsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get2DmEventsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2'].dm_events.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get2DmEventsEventIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2']['dm_events'][':event_id']['$get']>>,
) {
  return ['2', '/2/dm_events/:event_id', toValue(args)] as const
}

export function get2DmEventsEventIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2']['dm_events'][':event_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get2DmEventsEventIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2'].dm_events[':event_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use2DmEventsEventId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['dm_events'][':event_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2']['dm_events'][':event_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['dm_events'][':event_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['dm_events'][':event_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof get2DmEventsEventIdQueryKey>
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
          Awaited<ReturnType<(typeof client)['2']['dm_events'][':event_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2DmEventsEventIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get2DmEventsEventIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2'].dm_events[':event_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDelete2DmEventsEventId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDelete2DmEventsEventIdMutationOptions<TError, TOnMutateResult>(
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

export function get2LikesComplianceStreamQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['likes']['compliance']['stream']['$get']>
  >,
) {
  return ['2', '/2/likes/compliance/stream', toValue(args)] as const
}

export function get2LikesComplianceStreamQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['likes']['compliance']['stream']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get2LikesComplianceStreamQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2'].likes.compliance.stream.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use2LikesComplianceStream<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['likes']['compliance']['stream']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['likes']['compliance']['stream']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['likes']['compliance']['stream']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['likes']['compliance']['stream']['$get']>>
              >
            >
          >,
          ReturnType<typeof get2LikesComplianceStreamQueryKey>
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
          Awaited<ReturnType<(typeof client)['2']['likes']['compliance']['stream']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2LikesComplianceStreamQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get2LikesComplianceStreamQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2'].likes.compliance.stream.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get2LikesFirehoseStreamQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['likes']['firehose']['stream']['$get']>
  >,
) {
  return ['2', '/2/likes/firehose/stream', toValue(args)] as const
}

export function get2LikesFirehoseStreamQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['likes']['firehose']['stream']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get2LikesFirehoseStreamQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2'].likes.firehose.stream.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use2LikesFirehoseStream<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['likes']['firehose']['stream']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['likes']['firehose']['stream']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['likes']['firehose']['stream']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['likes']['firehose']['stream']['$get']>>
              >
            >
          >,
          ReturnType<typeof get2LikesFirehoseStreamQueryKey>
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
          Awaited<ReturnType<(typeof client)['2']['likes']['firehose']['stream']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2LikesFirehoseStreamQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get2LikesFirehoseStreamQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2'].likes.firehose.stream.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get2LikesSample10StreamQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['likes']['sample10']['stream']['$get']>
  >,
) {
  return ['2', '/2/likes/sample10/stream', toValue(args)] as const
}

export function get2LikesSample10StreamQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['likes']['sample10']['stream']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get2LikesSample10StreamQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2'].likes.sample10.stream.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use2LikesSample10Stream<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['likes']['sample10']['stream']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['likes']['sample10']['stream']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['likes']['sample10']['stream']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['likes']['sample10']['stream']['$get']>>
              >
            >
          >,
          ReturnType<typeof get2LikesSample10StreamQueryKey>
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
          Awaited<ReturnType<(typeof client)['2']['likes']['sample10']['stream']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2LikesSample10StreamQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get2LikesSample10StreamQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2'].likes.sample10.stream.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePost2Lists<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['lists']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client)['2']['lists']['$post']>,
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
  const mutationDefaults = getPost2ListsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function get2ListsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2']['lists'][':id']['$get']>>,
) {
  return ['2', '/2/lists/:id', toValue(args)] as const
}

export function get2ListsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2']['lists'][':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get2ListsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2'].lists[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use2ListsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['lists'][':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2']['lists'][':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['lists'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['lists'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof get2ListsIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['lists'][':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2ListsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get2ListsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2'].lists[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePut2ListsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['lists'][':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['2']['lists'][':id']['$put']>,
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
  const mutationDefaults = getPut2ListsIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useDelete2ListsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDelete2ListsIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function get2ListsIdFollowersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['lists'][':id']['followers']['$get']>
  >,
) {
  return ['2', '/2/lists/:id/followers', toValue(args)] as const
}

export function get2ListsIdFollowersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['lists'][':id']['followers']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get2ListsIdFollowersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2'].lists[':id'].followers.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use2ListsIdFollowers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['lists'][':id']['followers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['lists'][':id']['followers']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['lists'][':id']['followers']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['lists'][':id']['followers']['$get']>>
              >
            >
          >,
          ReturnType<typeof get2ListsIdFollowersQueryKey>
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
          Awaited<ReturnType<(typeof client)['2']['lists'][':id']['followers']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2ListsIdFollowersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get2ListsIdFollowersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2'].lists[':id'].followers.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get2ListsIdMembersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2']['lists'][':id']['members']['$get']>>,
) {
  return ['2', '/2/lists/:id/members', toValue(args)] as const
}

export function get2ListsIdMembersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2']['lists'][':id']['members']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get2ListsIdMembersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2'].lists[':id'].members.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use2ListsIdMembers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['lists'][':id']['members']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2']['lists'][':id']['members']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['lists'][':id']['members']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['lists'][':id']['members']['$get']>>
              >
            >
          >,
          ReturnType<typeof get2ListsIdMembersQueryKey>
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
          Awaited<ReturnType<(typeof client)['2']['lists'][':id']['members']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2ListsIdMembersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get2ListsIdMembersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2'].lists[':id'].members.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePost2ListsIdMembers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPost2ListsIdMembersMutationOptions<TError, TOnMutateResult>(
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

export function useDelete2ListsIdMembersUserId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDelete2ListsIdMembersUserIdMutationOptions<TError, TOnMutateResult>(
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

export function get2ListsIdTweetsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2']['lists'][':id']['tweets']['$get']>>,
) {
  return ['2', '/2/lists/:id/tweets', toValue(args)] as const
}

export function get2ListsIdTweetsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2']['lists'][':id']['tweets']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get2ListsIdTweetsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2'].lists[':id'].tweets.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use2ListsIdTweets<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['lists'][':id']['tweets']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2']['lists'][':id']['tweets']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['lists'][':id']['tweets']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['lists'][':id']['tweets']['$get']>>
              >
            >
          >,
          ReturnType<typeof get2ListsIdTweetsQueryKey>
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
          Awaited<ReturnType<(typeof client)['2']['lists'][':id']['tweets']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2ListsIdTweetsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get2ListsIdTweetsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2'].lists[':id'].tweets.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get2MediaQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2']['media']['$get']>>,
) {
  return ['2', '/2/media', toValue(args)] as const
}

export function get2MediaQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2']['media']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get2MediaQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2'].media.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function use2Media<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['media']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2']['media']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['media']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['media']['$get']>>>
            >
          >,
          ReturnType<typeof get2MediaQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['media']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof get2MediaQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get2MediaQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2'].media.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePost2MediaAmplifyPosts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPost2MediaAmplifyPostsMutationOptions<TError, TOnMutateResult>(
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

export function get2MediaAmplifyProgramsQueryKey() {
  return ['2', '/2/media/amplify/programs'] as const
}

export function get2MediaAmplifyProgramsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: get2MediaAmplifyProgramsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2'].media.amplify.programs.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use2MediaAmplifyPrograms<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['media']['amplify']['programs']['$get']>>
      >
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
                Awaited<ReturnType<(typeof client)['2']['media']['amplify']['programs']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['media']['amplify']['programs']['$get']>>
              >
            >
          >,
          ReturnType<typeof get2MediaAmplifyProgramsQueryKey>
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
          Awaited<ReturnType<(typeof client)['2']['media']['amplify']['programs']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2MediaAmplifyProgramsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: get2MediaAmplifyProgramsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client['2'].media.amplify.programs.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get2MediaAmplifyProgramsProgramIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['media']['amplify']['programs'][':program_id']['$get']>
  >,
) {
  return ['2', '/2/media/amplify/programs/:program_id', toValue(args)] as const
}

export function get2MediaAmplifyProgramsProgramIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['media']['amplify']['programs'][':program_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get2MediaAmplifyProgramsProgramIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2'].media.amplify.programs[':program_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use2MediaAmplifyProgramsProgramId<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['media']['amplify']['programs'][':program_id']['$get']>
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
                    (typeof client)['2']['media']['amplify']['programs'][':program_id']['$get']
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
                    (typeof client)['2']['media']['amplify']['programs'][':program_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof get2MediaAmplifyProgramsProgramIdQueryKey>
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
            ReturnType<(typeof client)['2']['media']['amplify']['programs'][':program_id']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2MediaAmplifyProgramsProgramIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get2MediaAmplifyProgramsProgramIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2'].media.amplify.programs[':program_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get2MediaAmplifyProgramsProgramIdPostsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2']['media']['amplify']['programs'][':program_id']['posts']['$get']
    >
  >,
) {
  return ['2', '/2/media/amplify/programs/:program_id/posts', toValue(args)] as const
}

export function get2MediaAmplifyProgramsProgramIdPostsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2']['media']['amplify']['programs'][':program_id']['posts']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get2MediaAmplifyProgramsProgramIdPostsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2'].media.amplify.programs[':program_id'].posts.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use2MediaAmplifyProgramsProgramIdPosts<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2']['media']['amplify']['programs'][':program_id']['posts']['$get']
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
                    (typeof client)['2']['media']['amplify']['programs'][':program_id']['posts']['$get']
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
                    (typeof client)['2']['media']['amplify']['programs'][':program_id']['posts']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof get2MediaAmplifyProgramsProgramIdPostsQueryKey>
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
              (typeof client)['2']['media']['amplify']['programs'][':program_id']['posts']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2MediaAmplifyProgramsProgramIdPostsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get2MediaAmplifyProgramsProgramIdPostsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2'].media.amplify.programs[':program_id'].posts.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get2MediaAnalyticsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2']['media']['analytics']['$get']>>,
) {
  return ['2', '/2/media/analytics', toValue(args)] as const
}

export function get2MediaAnalyticsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2']['media']['analytics']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get2MediaAnalyticsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2'].media.analytics.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use2MediaAnalytics<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['media']['analytics']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2']['media']['analytics']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['media']['analytics']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['media']['analytics']['$get']>>
              >
            >
          >,
          ReturnType<typeof get2MediaAnalyticsQueryKey>
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
          Awaited<ReturnType<(typeof client)['2']['media']['analytics']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2MediaAnalyticsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get2MediaAnalyticsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2'].media.analytics.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePost2MediaLibrary<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPost2MediaLibraryMutationOptions<TError, TOnMutateResult>(
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

export function get2MediaLibraryCategoriesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['media']['library']['categories']['$get']>
  >,
) {
  return ['2', '/2/media/library/categories', toValue(args)] as const
}

export function get2MediaLibraryCategoriesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['media']['library']['categories']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get2MediaLibraryCategoriesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2'].media.library.categories.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use2MediaLibraryCategories<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['media']['library']['categories']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['media']['library']['categories']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['media']['library']['categories']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['media']['library']['categories']['$get']>>
              >
            >
          >,
          ReturnType<typeof get2MediaLibraryCategoriesQueryKey>
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
          Awaited<ReturnType<(typeof client)['2']['media']['library']['categories']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2MediaLibraryCategoriesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get2MediaLibraryCategoriesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2'].media.library.categories.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePut2MediaLibraryMediaKey<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPut2MediaLibraryMediaKeyMutationOptions<TError, TOnMutateResult>(
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

export function useDelete2MediaLibraryMediaKey<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['2']['media']['library'][':media_key']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['2']['media']['library'][':media_key']['$delete']>,
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
  const mutationDefaults = getDelete2MediaLibraryMediaKeyMutationOptions<TError, TOnMutateResult>(
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

export function usePost2MediaMetadata<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPost2MediaMetadataMutationOptions<TError, TOnMutateResult>(
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

export function usePost2MediaSubtitles<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPost2MediaSubtitlesMutationOptions<TError, TOnMutateResult>(
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

export function useDelete2MediaSubtitles<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDelete2MediaSubtitlesMutationOptions<TError, TOnMutateResult>(
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

export function get2MediaUploadQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2']['media']['upload']['$get']>>,
) {
  return ['2', '/2/media/upload', toValue(args)] as const
}

export function get2MediaUploadQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2']['media']['upload']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get2MediaUploadQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2'].media.upload.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use2MediaUpload<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['media']['upload']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2']['media']['upload']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['media']['upload']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['media']['upload']['$get']>>
              >
            >
          >,
          ReturnType<typeof get2MediaUploadQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['media']['upload']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2MediaUploadQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get2MediaUploadQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2'].media.upload.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePost2MediaUpload<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPost2MediaUploadMutationOptions<TError, TOnMutateResult>(
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

export function usePost2MediaUploadInitialize<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPost2MediaUploadInitializeMutationOptions<TError, TOnMutateResult>(
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

export function usePost2MediaUploadIdAppend<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['2']['media']['upload'][':id']['append']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['2']['media']['upload'][':id']['append']['$post']>,
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
  const mutationDefaults = getPost2MediaUploadIdAppendMutationOptions<TError, TOnMutateResult>(
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

export function usePost2MediaUploadIdFinalize<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPost2MediaUploadIdFinalizeMutationOptions<TError, TOnMutateResult>(
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

export function get2MediaMediaKeyQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2']['media'][':media_key']['$get']>>,
) {
  return ['2', '/2/media/:media_key', toValue(args)] as const
}

export function get2MediaMediaKeyQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2']['media'][':media_key']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get2MediaMediaKeyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2'].media[':media_key'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use2MediaMediaKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['media'][':media_key']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2']['media'][':media_key']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['media'][':media_key']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['media'][':media_key']['$get']>>
              >
            >
          >,
          ReturnType<typeof get2MediaMediaKeyQueryKey>
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
          Awaited<ReturnType<(typeof client)['2']['media'][':media_key']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2MediaMediaKeyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get2MediaMediaKeyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2'].media[':media_key'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get2NewsSearchQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2']['news']['search']['$get']>>,
) {
  return ['2', '/2/news/search', toValue(args)] as const
}

export function get2NewsSearchQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2']['news']['search']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get2NewsSearchQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2'].news.search.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use2NewsSearch<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['news']['search']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2']['news']['search']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['news']['search']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['news']['search']['$get']>>
              >
            >
          >,
          ReturnType<typeof get2NewsSearchQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['news']['search']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2NewsSearchQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get2NewsSearchQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2'].news.search.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get2NewsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2']['news'][':id']['$get']>>,
) {
  return ['2', '/2/news/:id', toValue(args)] as const
}

export function get2NewsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2']['news'][':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get2NewsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2'].news[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use2NewsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['news'][':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2']['news'][':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['news'][':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['news'][':id']['$get']>>>
            >
          >,
          ReturnType<typeof get2NewsIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['news'][':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2NewsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get2NewsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2'].news[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePost2Notes<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['notes']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client)['2']['notes']['$post']>,
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
  const mutationDefaults = getPost2NotesMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePost2NotesEvaluate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPost2NotesEvaluateMutationOptions<TError, TOnMutateResult>(
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

export function get2NotesSearchNotesWrittenQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['notes']['search']['notes_written']['$get']>
  >,
) {
  return ['2', '/2/notes/search/notes_written', toValue(args)] as const
}

export function get2NotesSearchNotesWrittenQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['notes']['search']['notes_written']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get2NotesSearchNotesWrittenQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2'].notes.search.notes_written.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use2NotesSearchNotesWritten<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['notes']['search']['notes_written']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['notes']['search']['notes_written']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['2']['notes']['search']['notes_written']['$get']>
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
                  ReturnType<(typeof client)['2']['notes']['search']['notes_written']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof get2NotesSearchNotesWrittenQueryKey>
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
          Awaited<ReturnType<(typeof client)['2']['notes']['search']['notes_written']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2NotesSearchNotesWrittenQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get2NotesSearchNotesWrittenQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2'].notes.search.notes_written.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get2NotesSearchPostsEligibleForNotesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['notes']['search']['posts_eligible_for_notes']['$get']>
  >,
) {
  return ['2', '/2/notes/search/posts_eligible_for_notes', toValue(args)] as const
}

export function get2NotesSearchPostsEligibleForNotesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['notes']['search']['posts_eligible_for_notes']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get2NotesSearchPostsEligibleForNotesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2'].notes.search.posts_eligible_for_notes.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use2NotesSearchPostsEligibleForNotes<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['notes']['search']['posts_eligible_for_notes']['$get']>
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
                    (typeof client)['2']['notes']['search']['posts_eligible_for_notes']['$get']
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
                    (typeof client)['2']['notes']['search']['posts_eligible_for_notes']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof get2NotesSearchPostsEligibleForNotesQueryKey>
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
            ReturnType<(typeof client)['2']['notes']['search']['posts_eligible_for_notes']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2NotesSearchPostsEligibleForNotesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get2NotesSearchPostsEligibleForNotesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2'].notes.search.posts_eligible_for_notes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDelete2NotesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDelete2NotesIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function get2OpenapiJsonQueryKey() {
  return ['2', '/2/openapi.json'] as const
}

export function get2OpenapiJsonQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: get2OpenapiJsonQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2']['openapi.json'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use2OpenapiJson<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['openapi.json']['$get']>>>
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
                Awaited<ReturnType<(typeof client)['2']['openapi.json']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['openapi.json']['$get']>>
              >
            >
          >,
          ReturnType<typeof get2OpenapiJsonQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['openapi.json']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2OpenapiJsonQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: get2OpenapiJsonQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client['2']['openapi.json'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get2PostsDraftsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2']['posts']['drafts']['$get']>>,
) {
  return ['2', '/2/posts/drafts', toValue(args)] as const
}

export function get2PostsDraftsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2']['posts']['drafts']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get2PostsDraftsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2'].posts.drafts.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use2PostsDrafts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['posts']['drafts']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2']['posts']['drafts']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['posts']['drafts']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['posts']['drafts']['$get']>>
              >
            >
          >,
          ReturnType<typeof get2PostsDraftsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['posts']['drafts']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2PostsDraftsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get2PostsDraftsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2'].posts.drafts.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePost2PostsDrafts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPost2PostsDraftsMutationOptions<TError, TOnMutateResult>(
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

export function useDelete2PostsDraftsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDelete2PostsDraftsIdMutationOptions<TError, TOnMutateResult>(
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

export function get2RegionQueryKey() {
  return ['2', '/2/region'] as const
}

export function get2RegionQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: get2RegionQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2'].region.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function use2Region<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['region']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['region']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['region']['$get']>>>
            >
          >,
          ReturnType<typeof get2RegionQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['region']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof get2RegionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: get2RegionQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client['2'].region.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get2SourcesQueryKey() {
  return ['2', '/2/sources'] as const
}

export function get2SourcesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: get2SourcesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2'].sources.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function use2Sources<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['sources']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['sources']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['sources']['$get']>>>
            >
          >,
          ReturnType<typeof get2SourcesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['sources']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof get2SourcesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: get2SourcesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client['2'].sources.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePost2Sources<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['sources']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client)['2']['sources']['$post']>,
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
  const mutationDefaults = getPost2SourcesMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function get2SourcesIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2']['sources'][':id']['$get']>>,
) {
  return ['2', '/2/sources/:id', toValue(args)] as const
}

export function get2SourcesIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2']['sources'][':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get2SourcesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2'].sources[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use2SourcesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['sources'][':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2']['sources'][':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['sources'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['sources'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof get2SourcesIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['sources'][':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2SourcesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get2SourcesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2'].sources[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePut2SourcesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPut2SourcesIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useDelete2SourcesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDelete2SourcesIdMutationOptions<TError, TOnMutateResult>(
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

export function get2SourcesIdStreamKeyQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['sources'][':id']['stream_key']['$get']>
  >,
) {
  return ['2', '/2/sources/:id/stream_key', toValue(args)] as const
}

export function get2SourcesIdStreamKeyQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['sources'][':id']['stream_key']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get2SourcesIdStreamKeyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2'].sources[':id'].stream_key.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use2SourcesIdStreamKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['sources'][':id']['stream_key']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['sources'][':id']['stream_key']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['sources'][':id']['stream_key']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['sources'][':id']['stream_key']['$get']>>
              >
            >
          >,
          ReturnType<typeof get2SourcesIdStreamKeyQueryKey>
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
          Awaited<ReturnType<(typeof client)['2']['sources'][':id']['stream_key']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2SourcesIdStreamKeyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get2SourcesIdStreamKeyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2'].sources[':id'].stream_key.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get2SpacesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2']['spaces']['$get']>>,
) {
  return ['2', '/2/spaces', toValue(args)] as const
}

export function get2SpacesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2']['spaces']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get2SpacesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2'].spaces.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function use2Spaces<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['spaces']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2']['spaces']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['spaces']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['spaces']['$get']>>>
            >
          >,
          ReturnType<typeof get2SpacesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['spaces']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof get2SpacesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get2SpacesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2'].spaces.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get2SpacesByCreatorIdsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['spaces']['by']['creator_ids']['$get']>
  >,
) {
  return ['2', '/2/spaces/by/creator_ids', toValue(args)] as const
}

export function get2SpacesByCreatorIdsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['spaces']['by']['creator_ids']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get2SpacesByCreatorIdsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2'].spaces.by.creator_ids.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use2SpacesByCreatorIds<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['spaces']['by']['creator_ids']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['spaces']['by']['creator_ids']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['spaces']['by']['creator_ids']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['spaces']['by']['creator_ids']['$get']>>
              >
            >
          >,
          ReturnType<typeof get2SpacesByCreatorIdsQueryKey>
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
          Awaited<ReturnType<(typeof client)['2']['spaces']['by']['creator_ids']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2SpacesByCreatorIdsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get2SpacesByCreatorIdsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2'].spaces.by.creator_ids.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get2SpacesSearchQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2']['spaces']['search']['$get']>>,
) {
  return ['2', '/2/spaces/search', toValue(args)] as const
}

export function get2SpacesSearchQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2']['spaces']['search']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get2SpacesSearchQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2'].spaces.search.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use2SpacesSearch<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['spaces']['search']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2']['spaces']['search']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['spaces']['search']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['spaces']['search']['$get']>>
              >
            >
          >,
          ReturnType<typeof get2SpacesSearchQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['spaces']['search']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2SpacesSearchQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get2SpacesSearchQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2'].spaces.search.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get2SpacesIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2']['spaces'][':id']['$get']>>,
) {
  return ['2', '/2/spaces/:id', toValue(args)] as const
}

export function get2SpacesIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2']['spaces'][':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get2SpacesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2'].spaces[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use2SpacesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['spaces'][':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2']['spaces'][':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['spaces'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['spaces'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof get2SpacesIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['spaces'][':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2SpacesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get2SpacesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2'].spaces[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get2SpacesIdBuyersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2']['spaces'][':id']['buyers']['$get']>>,
) {
  return ['2', '/2/spaces/:id/buyers', toValue(args)] as const
}

export function get2SpacesIdBuyersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2']['spaces'][':id']['buyers']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get2SpacesIdBuyersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2'].spaces[':id'].buyers.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use2SpacesIdBuyers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['spaces'][':id']['buyers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2']['spaces'][':id']['buyers']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['spaces'][':id']['buyers']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['spaces'][':id']['buyers']['$get']>>
              >
            >
          >,
          ReturnType<typeof get2SpacesIdBuyersQueryKey>
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
          Awaited<ReturnType<(typeof client)['2']['spaces'][':id']['buyers']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2SpacesIdBuyersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get2SpacesIdBuyersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2'].spaces[':id'].buyers.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get2SpacesIdTweetsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2']['spaces'][':id']['tweets']['$get']>>,
) {
  return ['2', '/2/spaces/:id/tweets', toValue(args)] as const
}

export function get2SpacesIdTweetsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2']['spaces'][':id']['tweets']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get2SpacesIdTweetsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2'].spaces[':id'].tweets.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use2SpacesIdTweets<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['spaces'][':id']['tweets']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2']['spaces'][':id']['tweets']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['spaces'][':id']['tweets']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['spaces'][':id']['tweets']['$get']>>
              >
            >
          >,
          ReturnType<typeof get2SpacesIdTweetsQueryKey>
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
          Awaited<ReturnType<(typeof client)['2']['spaces'][':id']['tweets']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2SpacesIdTweetsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get2SpacesIdTweetsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2'].spaces[':id'].tweets.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get2TrendsByWoeidWoeidQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['trends']['by']['woeid'][':woeid']['$get']>
  >,
) {
  return ['2', '/2/trends/by/woeid/:woeid', toValue(args)] as const
}

export function get2TrendsByWoeidWoeidQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['trends']['by']['woeid'][':woeid']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get2TrendsByWoeidWoeidQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2'].trends.by.woeid[':woeid'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use2TrendsByWoeidWoeid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['trends']['by']['woeid'][':woeid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['trends']['by']['woeid'][':woeid']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['trends']['by']['woeid'][':woeid']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['trends']['by']['woeid'][':woeid']['$get']>>
              >
            >
          >,
          ReturnType<typeof get2TrendsByWoeidWoeidQueryKey>
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
          Awaited<ReturnType<(typeof client)['2']['trends']['by']['woeid'][':woeid']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2TrendsByWoeidWoeidQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get2TrendsByWoeidWoeidQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2'].trends.by.woeid[':woeid'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get2TrendsLocationsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2']['trends']['locations']['$get']>>,
) {
  return ['2', '/2/trends/locations', toValue(args)] as const
}

export function get2TrendsLocationsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2']['trends']['locations']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get2TrendsLocationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2'].trends.locations.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use2TrendsLocations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['trends']['locations']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2']['trends']['locations']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['trends']['locations']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['trends']['locations']['$get']>>
              >
            >
          >,
          ReturnType<typeof get2TrendsLocationsQueryKey>
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
          Awaited<ReturnType<(typeof client)['2']['trends']['locations']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2TrendsLocationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get2TrendsLocationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2'].trends.locations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get2TweetsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2']['tweets']['$get']>>,
) {
  return ['2', '/2/tweets', toValue(args)] as const
}

export function get2TweetsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2']['tweets']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get2TweetsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2'].tweets.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function use2Tweets<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['tweets']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2']['tweets']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['tweets']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['tweets']['$get']>>>
            >
          >,
          ReturnType<typeof get2TweetsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['tweets']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof get2TweetsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get2TweetsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2'].tweets.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePost2Tweets<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['tweets']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client)['2']['tweets']['$post']>,
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
  const mutationDefaults = getPost2TweetsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function get2TweetsAnalyticsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2']['tweets']['analytics']['$get']>>,
) {
  return ['2', '/2/tweets/analytics', toValue(args)] as const
}

export function get2TweetsAnalyticsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2']['tweets']['analytics']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get2TweetsAnalyticsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2'].tweets.analytics.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use2TweetsAnalytics<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['tweets']['analytics']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2']['tweets']['analytics']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['tweets']['analytics']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['tweets']['analytics']['$get']>>
              >
            >
          >,
          ReturnType<typeof get2TweetsAnalyticsQueryKey>
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
          Awaited<ReturnType<(typeof client)['2']['tweets']['analytics']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2TweetsAnalyticsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get2TweetsAnalyticsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2'].tweets.analytics.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get2TweetsComplianceStreamQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['tweets']['compliance']['stream']['$get']>
  >,
) {
  return ['2', '/2/tweets/compliance/stream', toValue(args)] as const
}

export function get2TweetsComplianceStreamQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['tweets']['compliance']['stream']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get2TweetsComplianceStreamQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2'].tweets.compliance.stream.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use2TweetsComplianceStream<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['tweets']['compliance']['stream']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['tweets']['compliance']['stream']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['tweets']['compliance']['stream']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['tweets']['compliance']['stream']['$get']>>
              >
            >
          >,
          ReturnType<typeof get2TweetsComplianceStreamQueryKey>
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
          Awaited<ReturnType<(typeof client)['2']['tweets']['compliance']['stream']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2TweetsComplianceStreamQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get2TweetsComplianceStreamQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2'].tweets.compliance.stream.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get2TweetsCountsAllQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2']['tweets']['counts']['all']['$get']>>,
) {
  return ['2', '/2/tweets/counts/all', toValue(args)] as const
}

export function get2TweetsCountsAllQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2']['tweets']['counts']['all']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get2TweetsCountsAllQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2'].tweets.counts.all.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use2TweetsCountsAll<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['tweets']['counts']['all']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2']['tweets']['counts']['all']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['tweets']['counts']['all']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['tweets']['counts']['all']['$get']>>
              >
            >
          >,
          ReturnType<typeof get2TweetsCountsAllQueryKey>
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
          Awaited<ReturnType<(typeof client)['2']['tweets']['counts']['all']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2TweetsCountsAllQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get2TweetsCountsAllQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2'].tweets.counts.all.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get2TweetsCountsRecentQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['tweets']['counts']['recent']['$get']>
  >,
) {
  return ['2', '/2/tweets/counts/recent', toValue(args)] as const
}

export function get2TweetsCountsRecentQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['tweets']['counts']['recent']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get2TweetsCountsRecentQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2'].tweets.counts.recent.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use2TweetsCountsRecent<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['tweets']['counts']['recent']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['tweets']['counts']['recent']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['tweets']['counts']['recent']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['tweets']['counts']['recent']['$get']>>
              >
            >
          >,
          ReturnType<typeof get2TweetsCountsRecentQueryKey>
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
          Awaited<ReturnType<(typeof client)['2']['tweets']['counts']['recent']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2TweetsCountsRecentQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get2TweetsCountsRecentQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2'].tweets.counts.recent.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get2TweetsFirehoseStreamQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['tweets']['firehose']['stream']['$get']>
  >,
) {
  return ['2', '/2/tweets/firehose/stream', toValue(args)] as const
}

export function get2TweetsFirehoseStreamQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['tweets']['firehose']['stream']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get2TweetsFirehoseStreamQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2'].tweets.firehose.stream.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use2TweetsFirehoseStream<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['tweets']['firehose']['stream']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['tweets']['firehose']['stream']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['tweets']['firehose']['stream']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['tweets']['firehose']['stream']['$get']>>
              >
            >
          >,
          ReturnType<typeof get2TweetsFirehoseStreamQueryKey>
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
          Awaited<ReturnType<(typeof client)['2']['tweets']['firehose']['stream']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2TweetsFirehoseStreamQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get2TweetsFirehoseStreamQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2'].tweets.firehose.stream.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get2TweetsFirehoseStreamLangEnQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['tweets']['firehose']['stream']['lang']['en']['$get']>
  >,
) {
  return ['2', '/2/tweets/firehose/stream/lang/en', toValue(args)] as const
}

export function get2TweetsFirehoseStreamLangEnQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['tweets']['firehose']['stream']['lang']['en']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get2TweetsFirehoseStreamLangEnQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2'].tweets.firehose.stream.lang.en.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use2TweetsFirehoseStreamLangEn<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['tweets']['firehose']['stream']['lang']['en']['$get']>
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
                    (typeof client)['2']['tweets']['firehose']['stream']['lang']['en']['$get']
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
                    (typeof client)['2']['tweets']['firehose']['stream']['lang']['en']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof get2TweetsFirehoseStreamLangEnQueryKey>
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
            ReturnType<(typeof client)['2']['tweets']['firehose']['stream']['lang']['en']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2TweetsFirehoseStreamLangEnQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get2TweetsFirehoseStreamLangEnQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2'].tweets.firehose.stream.lang.en.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get2TweetsFirehoseStreamLangJaQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['tweets']['firehose']['stream']['lang']['ja']['$get']>
  >,
) {
  return ['2', '/2/tweets/firehose/stream/lang/ja', toValue(args)] as const
}

export function get2TweetsFirehoseStreamLangJaQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['tweets']['firehose']['stream']['lang']['ja']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get2TweetsFirehoseStreamLangJaQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2'].tweets.firehose.stream.lang.ja.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use2TweetsFirehoseStreamLangJa<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['tweets']['firehose']['stream']['lang']['ja']['$get']>
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
                    (typeof client)['2']['tweets']['firehose']['stream']['lang']['ja']['$get']
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
                    (typeof client)['2']['tweets']['firehose']['stream']['lang']['ja']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof get2TweetsFirehoseStreamLangJaQueryKey>
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
            ReturnType<(typeof client)['2']['tweets']['firehose']['stream']['lang']['ja']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2TweetsFirehoseStreamLangJaQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get2TweetsFirehoseStreamLangJaQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2'].tweets.firehose.stream.lang.ja.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get2TweetsFirehoseStreamLangKoQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['tweets']['firehose']['stream']['lang']['ko']['$get']>
  >,
) {
  return ['2', '/2/tweets/firehose/stream/lang/ko', toValue(args)] as const
}

export function get2TweetsFirehoseStreamLangKoQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['tweets']['firehose']['stream']['lang']['ko']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get2TweetsFirehoseStreamLangKoQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2'].tweets.firehose.stream.lang.ko.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use2TweetsFirehoseStreamLangKo<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['tweets']['firehose']['stream']['lang']['ko']['$get']>
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
                    (typeof client)['2']['tweets']['firehose']['stream']['lang']['ko']['$get']
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
                    (typeof client)['2']['tweets']['firehose']['stream']['lang']['ko']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof get2TweetsFirehoseStreamLangKoQueryKey>
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
            ReturnType<(typeof client)['2']['tweets']['firehose']['stream']['lang']['ko']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2TweetsFirehoseStreamLangKoQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get2TweetsFirehoseStreamLangKoQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2'].tweets.firehose.stream.lang.ko.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get2TweetsFirehoseStreamLangPtQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['tweets']['firehose']['stream']['lang']['pt']['$get']>
  >,
) {
  return ['2', '/2/tweets/firehose/stream/lang/pt', toValue(args)] as const
}

export function get2TweetsFirehoseStreamLangPtQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['tweets']['firehose']['stream']['lang']['pt']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get2TweetsFirehoseStreamLangPtQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2'].tweets.firehose.stream.lang.pt.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use2TweetsFirehoseStreamLangPt<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['tweets']['firehose']['stream']['lang']['pt']['$get']>
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
                    (typeof client)['2']['tweets']['firehose']['stream']['lang']['pt']['$get']
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
                    (typeof client)['2']['tweets']['firehose']['stream']['lang']['pt']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof get2TweetsFirehoseStreamLangPtQueryKey>
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
            ReturnType<(typeof client)['2']['tweets']['firehose']['stream']['lang']['pt']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2TweetsFirehoseStreamLangPtQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get2TweetsFirehoseStreamLangPtQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2'].tweets.firehose.stream.lang.pt.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get2TweetsLabelStreamQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['tweets']['label']['stream']['$get']>
  >,
) {
  return ['2', '/2/tweets/label/stream', toValue(args)] as const
}

export function get2TweetsLabelStreamQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['tweets']['label']['stream']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get2TweetsLabelStreamQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2'].tweets.label.stream.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use2TweetsLabelStream<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['tweets']['label']['stream']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['tweets']['label']['stream']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['tweets']['label']['stream']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['tweets']['label']['stream']['$get']>>
              >
            >
          >,
          ReturnType<typeof get2TweetsLabelStreamQueryKey>
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
          Awaited<ReturnType<(typeof client)['2']['tweets']['label']['stream']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2TweetsLabelStreamQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get2TweetsLabelStreamQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2'].tweets.label.stream.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get2TweetsSampleStreamQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['tweets']['sample']['stream']['$get']>
  >,
) {
  return ['2', '/2/tweets/sample/stream', toValue(args)] as const
}

export function get2TweetsSampleStreamQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['tweets']['sample']['stream']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get2TweetsSampleStreamQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2'].tweets.sample.stream.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use2TweetsSampleStream<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['tweets']['sample']['stream']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['tweets']['sample']['stream']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['tweets']['sample']['stream']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['tweets']['sample']['stream']['$get']>>
              >
            >
          >,
          ReturnType<typeof get2TweetsSampleStreamQueryKey>
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
          Awaited<ReturnType<(typeof client)['2']['tweets']['sample']['stream']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2TweetsSampleStreamQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get2TweetsSampleStreamQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2'].tweets.sample.stream.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get2TweetsSample10StreamQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['tweets']['sample10']['stream']['$get']>
  >,
) {
  return ['2', '/2/tweets/sample10/stream', toValue(args)] as const
}

export function get2TweetsSample10StreamQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['tweets']['sample10']['stream']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get2TweetsSample10StreamQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2'].tweets.sample10.stream.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use2TweetsSample10Stream<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['tweets']['sample10']['stream']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['tweets']['sample10']['stream']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['tweets']['sample10']['stream']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['tweets']['sample10']['stream']['$get']>>
              >
            >
          >,
          ReturnType<typeof get2TweetsSample10StreamQueryKey>
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
          Awaited<ReturnType<(typeof client)['2']['tweets']['sample10']['stream']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2TweetsSample10StreamQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get2TweetsSample10StreamQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2'].tweets.sample10.stream.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get2TweetsSearchAllQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2']['tweets']['search']['all']['$get']>>,
) {
  return ['2', '/2/tweets/search/all', toValue(args)] as const
}

export function get2TweetsSearchAllQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2']['tweets']['search']['all']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get2TweetsSearchAllQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2'].tweets.search.all.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use2TweetsSearchAll<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['tweets']['search']['all']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2']['tweets']['search']['all']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['tweets']['search']['all']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['tweets']['search']['all']['$get']>>
              >
            >
          >,
          ReturnType<typeof get2TweetsSearchAllQueryKey>
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
          Awaited<ReturnType<(typeof client)['2']['tweets']['search']['all']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2TweetsSearchAllQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get2TweetsSearchAllQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2'].tweets.search.all.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get2TweetsSearchRecentQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['tweets']['search']['recent']['$get']>
  >,
) {
  return ['2', '/2/tweets/search/recent', toValue(args)] as const
}

export function get2TweetsSearchRecentQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['tweets']['search']['recent']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get2TweetsSearchRecentQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2'].tweets.search.recent.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use2TweetsSearchRecent<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['tweets']['search']['recent']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['tweets']['search']['recent']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['tweets']['search']['recent']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['tweets']['search']['recent']['$get']>>
              >
            >
          >,
          ReturnType<typeof get2TweetsSearchRecentQueryKey>
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
          Awaited<ReturnType<(typeof client)['2']['tweets']['search']['recent']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2TweetsSearchRecentQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get2TweetsSearchRecentQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2'].tweets.search.recent.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get2TweetsSearchStreamQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['tweets']['search']['stream']['$get']>
  >,
) {
  return ['2', '/2/tweets/search/stream', toValue(args)] as const
}

export function get2TweetsSearchStreamQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['tweets']['search']['stream']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get2TweetsSearchStreamQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2'].tweets.search.stream.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use2TweetsSearchStream<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['tweets']['search']['stream']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['tweets']['search']['stream']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['tweets']['search']['stream']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['tweets']['search']['stream']['$get']>>
              >
            >
          >,
          ReturnType<typeof get2TweetsSearchStreamQueryKey>
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
          Awaited<ReturnType<(typeof client)['2']['tweets']['search']['stream']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2TweetsSearchStreamQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get2TweetsSearchStreamQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2'].tweets.search.stream.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get2TweetsSearchStreamRulesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['tweets']['search']['stream']['rules']['$get']>
  >,
) {
  return ['2', '/2/tweets/search/stream/rules', toValue(args)] as const
}

export function get2TweetsSearchStreamRulesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['tweets']['search']['stream']['rules']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get2TweetsSearchStreamRulesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2'].tweets.search.stream.rules.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use2TweetsSearchStreamRules<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['tweets']['search']['stream']['rules']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['tweets']['search']['stream']['rules']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['2']['tweets']['search']['stream']['rules']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof get2TweetsSearchStreamRulesQueryKey>
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
          Awaited<ReturnType<(typeof client)['2']['tweets']['search']['stream']['rules']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2TweetsSearchStreamRulesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get2TweetsSearchStreamRulesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2'].tweets.search.stream.rules.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePost2TweetsSearchStreamRules<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPost2TweetsSearchStreamRulesMutationOptions<TError, TOnMutateResult>(
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

export function get2TweetsSearchStreamRulesCountsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['tweets']['search']['stream']['rules']['counts']['$get']>
  >,
) {
  return ['2', '/2/tweets/search/stream/rules/counts', toValue(args)] as const
}

export function get2TweetsSearchStreamRulesCountsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['tweets']['search']['stream']['rules']['counts']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get2TweetsSearchStreamRulesCountsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2'].tweets.search.stream.rules.counts.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use2TweetsSearchStreamRulesCounts<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['tweets']['search']['stream']['rules']['counts']['$get']>
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
                    (typeof client)['2']['tweets']['search']['stream']['rules']['counts']['$get']
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
                    (typeof client)['2']['tweets']['search']['stream']['rules']['counts']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof get2TweetsSearchStreamRulesCountsQueryKey>
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
              (typeof client)['2']['tweets']['search']['stream']['rules']['counts']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2TweetsSearchStreamRulesCountsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get2TweetsSearchStreamRulesCountsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2'].tweets.search.stream.rules.counts.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get2TweetsSearchWebhooksQueryKey() {
  return ['2', '/2/tweets/search/webhooks'] as const
}

export function get2TweetsSearchWebhooksQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: get2TweetsSearchWebhooksQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2'].tweets.search.webhooks.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use2TweetsSearchWebhooks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['tweets']['search']['webhooks']['$get']>>
      >
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
                Awaited<ReturnType<(typeof client)['2']['tweets']['search']['webhooks']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['tweets']['search']['webhooks']['$get']>>
              >
            >
          >,
          ReturnType<typeof get2TweetsSearchWebhooksQueryKey>
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
          Awaited<ReturnType<(typeof client)['2']['tweets']['search']['webhooks']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2TweetsSearchWebhooksQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: get2TweetsSearchWebhooksQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client['2'].tweets.search.webhooks.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePost2TweetsSearchWebhooksWebhookId<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPost2TweetsSearchWebhooksWebhookIdMutationOptions<
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

export function useDelete2TweetsSearchWebhooksWebhookId<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDelete2TweetsSearchWebhooksWebhookIdMutationOptions<
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

export function get2TweetsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2']['tweets'][':id']['$get']>>,
) {
  return ['2', '/2/tweets/:id', toValue(args)] as const
}

export function get2TweetsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2']['tweets'][':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get2TweetsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2'].tweets[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use2TweetsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['tweets'][':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2']['tweets'][':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['tweets'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['tweets'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof get2TweetsIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['tweets'][':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2TweetsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get2TweetsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2'].tweets[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDelete2TweetsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDelete2TweetsIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function get2TweetsIdLikingUsersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['tweets'][':id']['liking_users']['$get']>
  >,
) {
  return ['2', '/2/tweets/:id/liking_users', toValue(args)] as const
}

export function get2TweetsIdLikingUsersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['tweets'][':id']['liking_users']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get2TweetsIdLikingUsersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2'].tweets[':id'].liking_users.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use2TweetsIdLikingUsers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['tweets'][':id']['liking_users']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['tweets'][':id']['liking_users']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['tweets'][':id']['liking_users']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['tweets'][':id']['liking_users']['$get']>>
              >
            >
          >,
          ReturnType<typeof get2TweetsIdLikingUsersQueryKey>
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
          Awaited<ReturnType<(typeof client)['2']['tweets'][':id']['liking_users']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2TweetsIdLikingUsersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get2TweetsIdLikingUsersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2'].tweets[':id'].liking_users.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get2TweetsIdQuoteTweetsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['tweets'][':id']['quote_tweets']['$get']>
  >,
) {
  return ['2', '/2/tweets/:id/quote_tweets', toValue(args)] as const
}

export function get2TweetsIdQuoteTweetsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['tweets'][':id']['quote_tweets']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get2TweetsIdQuoteTweetsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2'].tweets[':id'].quote_tweets.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use2TweetsIdQuoteTweets<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['tweets'][':id']['quote_tweets']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['tweets'][':id']['quote_tweets']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['tweets'][':id']['quote_tweets']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['tweets'][':id']['quote_tweets']['$get']>>
              >
            >
          >,
          ReturnType<typeof get2TweetsIdQuoteTweetsQueryKey>
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
          Awaited<ReturnType<(typeof client)['2']['tweets'][':id']['quote_tweets']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2TweetsIdQuoteTweetsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get2TweetsIdQuoteTweetsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2'].tweets[':id'].quote_tweets.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get2TweetsIdRetweetedByQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['tweets'][':id']['retweeted_by']['$get']>
  >,
) {
  return ['2', '/2/tweets/:id/retweeted_by', toValue(args)] as const
}

export function get2TweetsIdRetweetedByQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['tweets'][':id']['retweeted_by']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get2TweetsIdRetweetedByQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2'].tweets[':id'].retweeted_by.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use2TweetsIdRetweetedBy<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['tweets'][':id']['retweeted_by']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['tweets'][':id']['retweeted_by']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['tweets'][':id']['retweeted_by']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['tweets'][':id']['retweeted_by']['$get']>>
              >
            >
          >,
          ReturnType<typeof get2TweetsIdRetweetedByQueryKey>
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
          Awaited<ReturnType<(typeof client)['2']['tweets'][':id']['retweeted_by']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2TweetsIdRetweetedByQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get2TweetsIdRetweetedByQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2'].tweets[':id'].retweeted_by.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get2TweetsIdRetweetsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['tweets'][':id']['retweets']['$get']>
  >,
) {
  return ['2', '/2/tweets/:id/retweets', toValue(args)] as const
}

export function get2TweetsIdRetweetsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['tweets'][':id']['retweets']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get2TweetsIdRetweetsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2'].tweets[':id'].retweets.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use2TweetsIdRetweets<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['tweets'][':id']['retweets']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['tweets'][':id']['retweets']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['tweets'][':id']['retweets']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['tweets'][':id']['retweets']['$get']>>
              >
            >
          >,
          ReturnType<typeof get2TweetsIdRetweetsQueryKey>
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
          Awaited<ReturnType<(typeof client)['2']['tweets'][':id']['retweets']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2TweetsIdRetweetsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get2TweetsIdRetweetsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2'].tweets[':id'].retweets.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePut2TweetsTweetIdHidden<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPut2TweetsTweetIdHiddenMutationOptions<TError, TOnMutateResult>(
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

export function get2UsageCreditsQueryKey() {
  return ['2', '/2/usage/credits'] as const
}

export function get2UsageCreditsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: get2UsageCreditsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2'].usage.credits.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use2UsageCredits<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['usage']['credits']['$get']>>>
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
                Awaited<ReturnType<(typeof client)['2']['usage']['credits']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['usage']['credits']['$get']>>
              >
            >
          >,
          ReturnType<typeof get2UsageCreditsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['usage']['credits']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2UsageCreditsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: get2UsageCreditsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client['2'].usage.credits.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get2UsageTweetsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2']['usage']['tweets']['$get']>>,
) {
  return ['2', '/2/usage/tweets', toValue(args)] as const
}

export function get2UsageTweetsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2']['usage']['tweets']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get2UsageTweetsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2'].usage.tweets.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use2UsageTweets<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['usage']['tweets']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2']['usage']['tweets']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['usage']['tweets']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['usage']['tweets']['$get']>>
              >
            >
          >,
          ReturnType<typeof get2UsageTweetsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['usage']['tweets']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2UsageTweetsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get2UsageTweetsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2'].usage.tweets.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get2UsersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2']['users']['$get']>>,
) {
  return ['2', '/2/users', toValue(args)] as const
}

export function get2UsersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2']['users']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get2UsersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2'].users.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function use2Users<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['users']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2']['users']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['users']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['users']['$get']>>>
            >
          >,
          ReturnType<typeof get2UsersQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['users']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof get2UsersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get2UsersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2'].users.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get2UsersByQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2']['users']['by']['$get']>>,
) {
  return ['2', '/2/users/by', toValue(args)] as const
}

export function get2UsersByQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2']['users']['by']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get2UsersByQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2'].users.by.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use2UsersBy<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['users']['by']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2']['users']['by']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['users']['by']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['users']['by']['$get']>>>
            >
          >,
          ReturnType<typeof get2UsersByQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['users']['by']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2UsersByQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get2UsersByQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2'].users.by.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get2UsersByUsernameUsernameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['users']['by']['username'][':username']['$get']>
  >,
) {
  return ['2', '/2/users/by/username/:username', toValue(args)] as const
}

export function get2UsersByUsernameUsernameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['users']['by']['username'][':username']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get2UsersByUsernameUsernameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2'].users.by.username[':username'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use2UsersByUsernameUsername<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['users']['by']['username'][':username']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['users']['by']['username'][':username']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['2']['users']['by']['username'][':username']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof get2UsersByUsernameUsernameQueryKey>
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
          Awaited<ReturnType<(typeof client)['2']['users']['by']['username'][':username']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2UsersByUsernameUsernameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get2UsersByUsernameUsernameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2'].users.by.username[':username'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get2UsersComplianceStreamQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['users']['compliance']['stream']['$get']>
  >,
) {
  return ['2', '/2/users/compliance/stream', toValue(args)] as const
}

export function get2UsersComplianceStreamQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['users']['compliance']['stream']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get2UsersComplianceStreamQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2'].users.compliance.stream.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use2UsersComplianceStream<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['users']['compliance']['stream']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['users']['compliance']['stream']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['users']['compliance']['stream']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['users']['compliance']['stream']['$get']>>
              >
            >
          >,
          ReturnType<typeof get2UsersComplianceStreamQueryKey>
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
          Awaited<ReturnType<(typeof client)['2']['users']['compliance']['stream']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2UsersComplianceStreamQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get2UsersComplianceStreamQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2'].users.compliance.stream.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get2UsersMeQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2']['users']['me']['$get']>>,
) {
  return ['2', '/2/users/me', toValue(args)] as const
}

export function get2UsersMeQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2']['users']['me']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get2UsersMeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2'].users.me.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use2UsersMe<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['users']['me']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2']['users']['me']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['users']['me']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['users']['me']['$get']>>>
            >
          >,
          ReturnType<typeof get2UsersMeQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['users']['me']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2UsersMeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get2UsersMeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2'].users.me.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get2UsersMeFollowersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['users']['me']['followers']['$get']>
  >,
) {
  return ['2', '/2/users/me/followers', toValue(args)] as const
}

export function get2UsersMeFollowersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['users']['me']['followers']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get2UsersMeFollowersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2'].users.me.followers.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use2UsersMeFollowers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['users']['me']['followers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['users']['me']['followers']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['users']['me']['followers']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['users']['me']['followers']['$get']>>
              >
            >
          >,
          ReturnType<typeof get2UsersMeFollowersQueryKey>
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
          Awaited<ReturnType<(typeof client)['2']['users']['me']['followers']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2UsersMeFollowersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get2UsersMeFollowersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2'].users.me.followers.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get2UsersMeFollowingQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['users']['me']['following']['$get']>
  >,
) {
  return ['2', '/2/users/me/following', toValue(args)] as const
}

export function get2UsersMeFollowingQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['users']['me']['following']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get2UsersMeFollowingQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2'].users.me.following.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use2UsersMeFollowing<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['users']['me']['following']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['users']['me']['following']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['users']['me']['following']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['users']['me']['following']['$get']>>
              >
            >
          >,
          ReturnType<typeof get2UsersMeFollowingQueryKey>
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
          Awaited<ReturnType<(typeof client)['2']['users']['me']['following']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2UsersMeFollowingQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get2UsersMeFollowingQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2'].users.me.following.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get2UsersPersonalizedTrendsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['users']['personalized_trends']['$get']>
  >,
) {
  return ['2', '/2/users/personalized_trends', toValue(args)] as const
}

export function get2UsersPersonalizedTrendsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['users']['personalized_trends']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get2UsersPersonalizedTrendsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2'].users.personalized_trends.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use2UsersPersonalizedTrends<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['users']['personalized_trends']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['users']['personalized_trends']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['users']['personalized_trends']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['users']['personalized_trends']['$get']>>
              >
            >
          >,
          ReturnType<typeof get2UsersPersonalizedTrendsQueryKey>
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
          Awaited<ReturnType<(typeof client)['2']['users']['personalized_trends']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2UsersPersonalizedTrendsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get2UsersPersonalizedTrendsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2'].users.personalized_trends.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get2UsersPublicKeysQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2']['users']['public_keys']['$get']>>,
) {
  return ['2', '/2/users/public_keys', toValue(args)] as const
}

export function get2UsersPublicKeysQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2']['users']['public_keys']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get2UsersPublicKeysQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2'].users.public_keys.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use2UsersPublicKeys<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['users']['public_keys']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2']['users']['public_keys']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['users']['public_keys']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['users']['public_keys']['$get']>>
              >
            >
          >,
          ReturnType<typeof get2UsersPublicKeysQueryKey>
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
          Awaited<ReturnType<(typeof client)['2']['users']['public_keys']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2UsersPublicKeysQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get2UsersPublicKeysQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2'].users.public_keys.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get2UsersRepostsOfMeQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2']['users']['reposts_of_me']['$get']>>,
) {
  return ['2', '/2/users/reposts_of_me', toValue(args)] as const
}

export function get2UsersRepostsOfMeQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2']['users']['reposts_of_me']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get2UsersRepostsOfMeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2'].users.reposts_of_me.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use2UsersRepostsOfMe<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['users']['reposts_of_me']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2']['users']['reposts_of_me']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['users']['reposts_of_me']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['users']['reposts_of_me']['$get']>>
              >
            >
          >,
          ReturnType<typeof get2UsersRepostsOfMeQueryKey>
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
          Awaited<ReturnType<(typeof client)['2']['users']['reposts_of_me']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2UsersRepostsOfMeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get2UsersRepostsOfMeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2'].users.reposts_of_me.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get2UsersSearchQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2']['users']['search']['$get']>>,
) {
  return ['2', '/2/users/search', toValue(args)] as const
}

export function get2UsersSearchQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2']['users']['search']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get2UsersSearchQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2'].users.search.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use2UsersSearch<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['users']['search']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2']['users']['search']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['users']['search']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['users']['search']['$get']>>
              >
            >
          >,
          ReturnType<typeof get2UsersSearchQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['users']['search']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2UsersSearchQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get2UsersSearchQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2'].users.search.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get2UsersIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2']['users'][':id']['$get']>>,
) {
  return ['2', '/2/users/:id', toValue(args)] as const
}

export function get2UsersIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2']['users'][':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get2UsersIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2'].users[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use2UsersId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['users'][':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2']['users'][':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['users'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['users'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof get2UsersIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['users'][':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2UsersIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get2UsersIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2'].users[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get2UsersIdAffiliatesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['users'][':id']['affiliates']['$get']>
  >,
) {
  return ['2', '/2/users/:id/affiliates', toValue(args)] as const
}

export function get2UsersIdAffiliatesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['users'][':id']['affiliates']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get2UsersIdAffiliatesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2'].users[':id'].affiliates.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use2UsersIdAffiliates<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['users'][':id']['affiliates']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['users'][':id']['affiliates']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['users'][':id']['affiliates']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['users'][':id']['affiliates']['$get']>>
              >
            >
          >,
          ReturnType<typeof get2UsersIdAffiliatesQueryKey>
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
          Awaited<ReturnType<(typeof client)['2']['users'][':id']['affiliates']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2UsersIdAffiliatesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get2UsersIdAffiliatesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2'].users[':id'].affiliates.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get2UsersIdBlockingQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['users'][':id']['blocking']['$get']>
  >,
) {
  return ['2', '/2/users/:id/blocking', toValue(args)] as const
}

export function get2UsersIdBlockingQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['users'][':id']['blocking']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get2UsersIdBlockingQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2'].users[':id'].blocking.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use2UsersIdBlocking<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['users'][':id']['blocking']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['users'][':id']['blocking']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['users'][':id']['blocking']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['users'][':id']['blocking']['$get']>>
              >
            >
          >,
          ReturnType<typeof get2UsersIdBlockingQueryKey>
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
          Awaited<ReturnType<(typeof client)['2']['users'][':id']['blocking']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2UsersIdBlockingQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get2UsersIdBlockingQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2'].users[':id'].blocking.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePost2UsersIdBlocking<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPost2UsersIdBlockingMutationOptions<TError, TOnMutateResult>(
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

export function get2UsersIdBookmarksQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['users'][':id']['bookmarks']['$get']>
  >,
) {
  return ['2', '/2/users/:id/bookmarks', toValue(args)] as const
}

export function get2UsersIdBookmarksQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['users'][':id']['bookmarks']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get2UsersIdBookmarksQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2'].users[':id'].bookmarks.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use2UsersIdBookmarks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['users'][':id']['bookmarks']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['users'][':id']['bookmarks']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['users'][':id']['bookmarks']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['users'][':id']['bookmarks']['$get']>>
              >
            >
          >,
          ReturnType<typeof get2UsersIdBookmarksQueryKey>
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
          Awaited<ReturnType<(typeof client)['2']['users'][':id']['bookmarks']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2UsersIdBookmarksQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get2UsersIdBookmarksQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2'].users[':id'].bookmarks.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePost2UsersIdBookmarks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPost2UsersIdBookmarksMutationOptions<TError, TOnMutateResult>(
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

export function get2UsersIdBookmarksFoldersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['users'][':id']['bookmarks']['folders']['$get']>
  >,
) {
  return ['2', '/2/users/:id/bookmarks/folders', toValue(args)] as const
}

export function get2UsersIdBookmarksFoldersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['users'][':id']['bookmarks']['folders']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get2UsersIdBookmarksFoldersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2'].users[':id'].bookmarks.folders.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use2UsersIdBookmarksFolders<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['users'][':id']['bookmarks']['folders']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['users'][':id']['bookmarks']['folders']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['2']['users'][':id']['bookmarks']['folders']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof get2UsersIdBookmarksFoldersQueryKey>
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
          Awaited<ReturnType<(typeof client)['2']['users'][':id']['bookmarks']['folders']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2UsersIdBookmarksFoldersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get2UsersIdBookmarksFoldersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2'].users[':id'].bookmarks.folders.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePost2UsersIdBookmarksFolders<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPost2UsersIdBookmarksFoldersMutationOptions<TError, TOnMutateResult>(
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

export function get2UsersIdBookmarksFoldersFolderIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2']['users'][':id']['bookmarks']['folders'][':folder_id']['$get']
    >
  >,
) {
  return ['2', '/2/users/:id/bookmarks/folders/:folder_id', toValue(args)] as const
}

export function get2UsersIdBookmarksFoldersFolderIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2']['users'][':id']['bookmarks']['folders'][':folder_id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get2UsersIdBookmarksFoldersFolderIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2'].users[':id'].bookmarks.folders[':folder_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use2UsersIdBookmarksFoldersFolderId<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2']['users'][':id']['bookmarks']['folders'][':folder_id']['$get']
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
                    (typeof client)['2']['users'][':id']['bookmarks']['folders'][':folder_id']['$get']
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
                    (typeof client)['2']['users'][':id']['bookmarks']['folders'][':folder_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof get2UsersIdBookmarksFoldersFolderIdQueryKey>
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
              (typeof client)['2']['users'][':id']['bookmarks']['folders'][':folder_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2UsersIdBookmarksFoldersFolderIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get2UsersIdBookmarksFoldersFolderIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2'].users[':id'].bookmarks.folders[':folder_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDelete2UsersIdBookmarksTweetId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client)['2']['users'][':id']['bookmarks'][':tweet_id']['$delete']
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
  const mutationDefaults = getDelete2UsersIdBookmarksTweetIdMutationOptions<
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

export function get2UsersIdBroadcastsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['users'][':id']['broadcasts']['$get']>
  >,
) {
  return ['2', '/2/users/:id/broadcasts', toValue(args)] as const
}

export function get2UsersIdBroadcastsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['users'][':id']['broadcasts']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get2UsersIdBroadcastsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2'].users[':id'].broadcasts.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use2UsersIdBroadcasts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['users'][':id']['broadcasts']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['users'][':id']['broadcasts']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['users'][':id']['broadcasts']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['users'][':id']['broadcasts']['$get']>>
              >
            >
          >,
          ReturnType<typeof get2UsersIdBroadcastsQueryKey>
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
          Awaited<ReturnType<(typeof client)['2']['users'][':id']['broadcasts']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2UsersIdBroadcastsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get2UsersIdBroadcastsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2'].users[':id'].broadcasts.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePost2UsersIdBroadcasts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPost2UsersIdBroadcastsMutationOptions<TError, TOnMutateResult>(
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

export function get2UsersIdBroadcastsBroadcastIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['users'][':id']['broadcasts'][':broadcast_id']['$get']>
  >,
) {
  return ['2', '/2/users/:id/broadcasts/:broadcast_id', toValue(args)] as const
}

export function get2UsersIdBroadcastsBroadcastIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['users'][':id']['broadcasts'][':broadcast_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get2UsersIdBroadcastsBroadcastIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2'].users[':id'].broadcasts[':broadcast_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use2UsersIdBroadcastsBroadcastId<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['users'][':id']['broadcasts'][':broadcast_id']['$get']>
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
                    (typeof client)['2']['users'][':id']['broadcasts'][':broadcast_id']['$get']
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
                    (typeof client)['2']['users'][':id']['broadcasts'][':broadcast_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof get2UsersIdBroadcastsBroadcastIdQueryKey>
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
            ReturnType<(typeof client)['2']['users'][':id']['broadcasts'][':broadcast_id']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2UsersIdBroadcastsBroadcastIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get2UsersIdBroadcastsBroadcastIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2'].users[':id'].broadcasts[':broadcast_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDelete2UsersIdBroadcastsBroadcastId<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDelete2UsersIdBroadcastsBroadcastIdMutationOptions<
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

export function usePut2UsersIdBroadcastsBroadcastIdState<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPut2UsersIdBroadcastsBroadcastIdStateMutationOptions<
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

export function usePost2UsersIdDmBlock<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPost2UsersIdDmBlockMutationOptions<TError, TOnMutateResult>(
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

export function usePost2UsersIdDmUnblock<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPost2UsersIdDmUnblockMutationOptions<TError, TOnMutateResult>(
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

export function get2UsersIdFollowedListsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['users'][':id']['followed_lists']['$get']>
  >,
) {
  return ['2', '/2/users/:id/followed_lists', toValue(args)] as const
}

export function get2UsersIdFollowedListsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['users'][':id']['followed_lists']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get2UsersIdFollowedListsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2'].users[':id'].followed_lists.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use2UsersIdFollowedLists<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['users'][':id']['followed_lists']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['users'][':id']['followed_lists']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['users'][':id']['followed_lists']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['users'][':id']['followed_lists']['$get']>>
              >
            >
          >,
          ReturnType<typeof get2UsersIdFollowedListsQueryKey>
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
          Awaited<ReturnType<(typeof client)['2']['users'][':id']['followed_lists']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2UsersIdFollowedListsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get2UsersIdFollowedListsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2'].users[':id'].followed_lists.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePost2UsersIdFollowedLists<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPost2UsersIdFollowedListsMutationOptions<TError, TOnMutateResult>(
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

export function useDelete2UsersIdFollowedListsListId<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDelete2UsersIdFollowedListsListIdMutationOptions<
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

export function get2UsersIdFollowersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['users'][':id']['followers']['$get']>
  >,
) {
  return ['2', '/2/users/:id/followers', toValue(args)] as const
}

export function get2UsersIdFollowersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['users'][':id']['followers']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get2UsersIdFollowersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2'].users[':id'].followers.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use2UsersIdFollowers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['users'][':id']['followers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['users'][':id']['followers']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['users'][':id']['followers']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['users'][':id']['followers']['$get']>>
              >
            >
          >,
          ReturnType<typeof get2UsersIdFollowersQueryKey>
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
          Awaited<ReturnType<(typeof client)['2']['users'][':id']['followers']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2UsersIdFollowersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get2UsersIdFollowersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2'].users[':id'].followers.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get2UsersIdFollowingQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['users'][':id']['following']['$get']>
  >,
) {
  return ['2', '/2/users/:id/following', toValue(args)] as const
}

export function get2UsersIdFollowingQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['users'][':id']['following']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get2UsersIdFollowingQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2'].users[':id'].following.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use2UsersIdFollowing<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['users'][':id']['following']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['users'][':id']['following']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['users'][':id']['following']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['users'][':id']['following']['$get']>>
              >
            >
          >,
          ReturnType<typeof get2UsersIdFollowingQueryKey>
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
          Awaited<ReturnType<(typeof client)['2']['users'][':id']['following']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2UsersIdFollowingQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get2UsersIdFollowingQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2'].users[':id'].following.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePost2UsersIdFollowing<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPost2UsersIdFollowingMutationOptions<TError, TOnMutateResult>(
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

export function get2UsersIdLikedTweetsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['users'][':id']['liked_tweets']['$get']>
  >,
) {
  return ['2', '/2/users/:id/liked_tweets', toValue(args)] as const
}

export function get2UsersIdLikedTweetsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['users'][':id']['liked_tweets']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get2UsersIdLikedTweetsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2'].users[':id'].liked_tweets.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use2UsersIdLikedTweets<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['users'][':id']['liked_tweets']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['users'][':id']['liked_tweets']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['users'][':id']['liked_tweets']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['users'][':id']['liked_tweets']['$get']>>
              >
            >
          >,
          ReturnType<typeof get2UsersIdLikedTweetsQueryKey>
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
          Awaited<ReturnType<(typeof client)['2']['users'][':id']['liked_tweets']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2UsersIdLikedTweetsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get2UsersIdLikedTweetsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2'].users[':id'].liked_tweets.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePost2UsersIdLikes<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPost2UsersIdLikesMutationOptions<TError, TOnMutateResult>(
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

export function useDelete2UsersIdLikesTweetId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDelete2UsersIdLikesTweetIdMutationOptions<TError, TOnMutateResult>(
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

export function get2UsersIdListMembershipsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['users'][':id']['list_memberships']['$get']>
  >,
) {
  return ['2', '/2/users/:id/list_memberships', toValue(args)] as const
}

export function get2UsersIdListMembershipsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['users'][':id']['list_memberships']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get2UsersIdListMembershipsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2'].users[':id'].list_memberships.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use2UsersIdListMemberships<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['users'][':id']['list_memberships']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['users'][':id']['list_memberships']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['2']['users'][':id']['list_memberships']['$get']>
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
                  ReturnType<(typeof client)['2']['users'][':id']['list_memberships']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof get2UsersIdListMembershipsQueryKey>
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
          Awaited<ReturnType<(typeof client)['2']['users'][':id']['list_memberships']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2UsersIdListMembershipsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get2UsersIdListMembershipsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2'].users[':id'].list_memberships.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get2UsersIdMentionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['users'][':id']['mentions']['$get']>
  >,
) {
  return ['2', '/2/users/:id/mentions', toValue(args)] as const
}

export function get2UsersIdMentionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['users'][':id']['mentions']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get2UsersIdMentionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2'].users[':id'].mentions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use2UsersIdMentions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['users'][':id']['mentions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['users'][':id']['mentions']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['users'][':id']['mentions']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['users'][':id']['mentions']['$get']>>
              >
            >
          >,
          ReturnType<typeof get2UsersIdMentionsQueryKey>
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
          Awaited<ReturnType<(typeof client)['2']['users'][':id']['mentions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2UsersIdMentionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get2UsersIdMentionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2'].users[':id'].mentions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get2UsersIdMutingQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2']['users'][':id']['muting']['$get']>>,
) {
  return ['2', '/2/users/:id/muting', toValue(args)] as const
}

export function get2UsersIdMutingQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2']['users'][':id']['muting']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get2UsersIdMutingQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2'].users[':id'].muting.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use2UsersIdMuting<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['users'][':id']['muting']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2']['users'][':id']['muting']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['users'][':id']['muting']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['users'][':id']['muting']['$get']>>
              >
            >
          >,
          ReturnType<typeof get2UsersIdMutingQueryKey>
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
          Awaited<ReturnType<(typeof client)['2']['users'][':id']['muting']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2UsersIdMutingQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get2UsersIdMutingQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2'].users[':id'].muting.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePost2UsersIdMuting<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPost2UsersIdMutingMutationOptions<TError, TOnMutateResult>(
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

export function get2UsersIdOwnedListsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['users'][':id']['owned_lists']['$get']>
  >,
) {
  return ['2', '/2/users/:id/owned_lists', toValue(args)] as const
}

export function get2UsersIdOwnedListsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['users'][':id']['owned_lists']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get2UsersIdOwnedListsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2'].users[':id'].owned_lists.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use2UsersIdOwnedLists<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['users'][':id']['owned_lists']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['users'][':id']['owned_lists']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['users'][':id']['owned_lists']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['users'][':id']['owned_lists']['$get']>>
              >
            >
          >,
          ReturnType<typeof get2UsersIdOwnedListsQueryKey>
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
          Awaited<ReturnType<(typeof client)['2']['users'][':id']['owned_lists']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2UsersIdOwnedListsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get2UsersIdOwnedListsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2'].users[':id'].owned_lists.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get2UsersIdPinnedListsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['users'][':id']['pinned_lists']['$get']>
  >,
) {
  return ['2', '/2/users/:id/pinned_lists', toValue(args)] as const
}

export function get2UsersIdPinnedListsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['users'][':id']['pinned_lists']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get2UsersIdPinnedListsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2'].users[':id'].pinned_lists.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use2UsersIdPinnedLists<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['users'][':id']['pinned_lists']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['users'][':id']['pinned_lists']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['users'][':id']['pinned_lists']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['users'][':id']['pinned_lists']['$get']>>
              >
            >
          >,
          ReturnType<typeof get2UsersIdPinnedListsQueryKey>
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
          Awaited<ReturnType<(typeof client)['2']['users'][':id']['pinned_lists']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2UsersIdPinnedListsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get2UsersIdPinnedListsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2'].users[':id'].pinned_lists.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePost2UsersIdPinnedLists<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPost2UsersIdPinnedListsMutationOptions<TError, TOnMutateResult>(
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

export function useDelete2UsersIdPinnedListsListId<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDelete2UsersIdPinnedListsListIdMutationOptions<
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

export function get2UsersIdPublicKeysQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['users'][':id']['public_keys']['$get']>
  >,
) {
  return ['2', '/2/users/:id/public_keys', toValue(args)] as const
}

export function get2UsersIdPublicKeysQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['users'][':id']['public_keys']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get2UsersIdPublicKeysQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2'].users[':id'].public_keys.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use2UsersIdPublicKeys<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['users'][':id']['public_keys']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['users'][':id']['public_keys']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['users'][':id']['public_keys']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['users'][':id']['public_keys']['$get']>>
              >
            >
          >,
          ReturnType<typeof get2UsersIdPublicKeysQueryKey>
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
          Awaited<ReturnType<(typeof client)['2']['users'][':id']['public_keys']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2UsersIdPublicKeysQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get2UsersIdPublicKeysQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2'].users[':id'].public_keys.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePost2UsersIdPublicKeys<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPost2UsersIdPublicKeysMutationOptions<TError, TOnMutateResult>(
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

export function usePost2UsersIdRetweets<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPost2UsersIdRetweetsMutationOptions<TError, TOnMutateResult>(
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

export function useDelete2UsersIdRetweetsSourceTweetId<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDelete2UsersIdRetweetsSourceTweetIdMutationOptions<
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

export function get2UsersIdSourcesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2']['users'][':id']['sources']['$get']>>,
) {
  return ['2', '/2/users/:id/sources', toValue(args)] as const
}

export function get2UsersIdSourcesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2']['users'][':id']['sources']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get2UsersIdSourcesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2'].users[':id'].sources.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use2UsersIdSources<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['users'][':id']['sources']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2']['users'][':id']['sources']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['users'][':id']['sources']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['users'][':id']['sources']['$get']>>
              >
            >
          >,
          ReturnType<typeof get2UsersIdSourcesQueryKey>
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
          Awaited<ReturnType<(typeof client)['2']['users'][':id']['sources']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2UsersIdSourcesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get2UsersIdSourcesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2'].users[':id'].sources.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePost2UsersIdSources<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPost2UsersIdSourcesMutationOptions<TError, TOnMutateResult>(
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

export function get2UsersIdSourcesSourceIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['users'][':id']['sources'][':source_id']['$get']>
  >,
) {
  return ['2', '/2/users/:id/sources/:source_id', toValue(args)] as const
}

export function get2UsersIdSourcesSourceIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['users'][':id']['sources'][':source_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get2UsersIdSourcesSourceIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2'].users[':id'].sources[':source_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use2UsersIdSourcesSourceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['users'][':id']['sources'][':source_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['2']['users'][':id']['sources'][':source_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['2']['users'][':id']['sources'][':source_id']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof get2UsersIdSourcesSourceIdQueryKey>
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
          Awaited<ReturnType<(typeof client)['2']['users'][':id']['sources'][':source_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2UsersIdSourcesSourceIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get2UsersIdSourcesSourceIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2'].users[':id'].sources[':source_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePut2UsersIdSourcesSourceId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPut2UsersIdSourcesSourceIdMutationOptions<TError, TOnMutateResult>(
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

export function useDelete2UsersIdSourcesSourceId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['2']['users'][':id']['sources'][':source_id']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['2']['users'][':id']['sources'][':source_id']['$delete']
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
  const mutationDefaults = getDelete2UsersIdSourcesSourceIdMutationOptions<TError, TOnMutateResult>(
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

export function get2UsersIdTimelinesReverseChronologicalQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2']['users'][':id']['timelines']['reverse_chronological']['$get']
    >
  >,
) {
  return ['2', '/2/users/:id/timelines/reverse_chronological', toValue(args)] as const
}

export function get2UsersIdTimelinesReverseChronologicalQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2']['users'][':id']['timelines']['reverse_chronological']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get2UsersIdTimelinesReverseChronologicalQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2'].users[':id'].timelines.reverse_chronological.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use2UsersIdTimelinesReverseChronological<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['2']['users'][':id']['timelines']['reverse_chronological']['$get']
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
                    (typeof client)['2']['users'][':id']['timelines']['reverse_chronological']['$get']
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
                    (typeof client)['2']['users'][':id']['timelines']['reverse_chronological']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof get2UsersIdTimelinesReverseChronologicalQueryKey>
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
              (typeof client)['2']['users'][':id']['timelines']['reverse_chronological']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2UsersIdTimelinesReverseChronologicalQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get2UsersIdTimelinesReverseChronologicalQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2'].users[':id'].timelines.reverse_chronological.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function get2UsersIdTweetsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2']['users'][':id']['tweets']['$get']>>,
) {
  return ['2', '/2/users/:id/tweets', toValue(args)] as const
}

export function get2UsersIdTweetsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2']['users'][':id']['tweets']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get2UsersIdTweetsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2'].users[':id'].tweets.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use2UsersIdTweets<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['2']['users'][':id']['tweets']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2']['users'][':id']['tweets']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['users'][':id']['tweets']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['2']['users'][':id']['tweets']['$get']>>
              >
            >
          >,
          ReturnType<typeof get2UsersIdTweetsQueryKey>
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
          Awaited<ReturnType<(typeof client)['2']['users'][':id']['tweets']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2UsersIdTweetsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get2UsersIdTweetsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2'].users[':id'].tweets.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDelete2UsersSourceUserIdBlockingTargetUserId<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDelete2UsersSourceUserIdBlockingTargetUserIdMutationOptions<
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

export function useDelete2UsersSourceUserIdFollowingTargetUserId<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDelete2UsersSourceUserIdFollowingTargetUserIdMutationOptions<
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

export function useDelete2UsersSourceUserIdMutingTargetUserId<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDelete2UsersSourceUserIdMutingTargetUserIdMutationOptions<
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

export function get2WebhooksQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2']['webhooks']['$get']>>,
) {
  return ['2', '/2/webhooks', toValue(args)] as const
}

export function get2WebhooksQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2']['webhooks']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => get2WebhooksQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['2'].webhooks.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function use2Webhooks<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['webhooks']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['2']['webhooks']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['webhooks']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['webhooks']['$get']>>>
            >
          >,
          ReturnType<typeof get2WebhooksQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['webhooks']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof get2WebhooksQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => get2WebhooksQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['2'].webhooks.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePost2Webhooks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['2']['webhooks']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client)['2']['webhooks']['$post']>,
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
  const mutationDefaults = getPost2WebhooksMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePost2WebhooksReplay<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPost2WebhooksReplayMutationOptions<TError, TOnMutateResult>(
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

export function usePut2WebhooksWebhookId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPut2WebhooksWebhookIdMutationOptions<TError, TOnMutateResult>(
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

export function useDelete2WebhooksWebhookId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDelete2WebhooksWebhookIdMutationOptions<TError, TOnMutateResult>(
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
