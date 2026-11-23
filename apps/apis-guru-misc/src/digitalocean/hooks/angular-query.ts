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

export function getV2Key() {
  return ['v2'] as const
}

export function getV21ClicksQueryKey(
  args: InferRequestType<(typeof client.v2)['1-clicks']['$get']>,
) {
  return ['v2', '/v2/1-clicks', args] as const
}

export function getV21ClicksQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['1-clicks']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.v2)['1-clicks']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['1-clicks']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV21ClicksQueryKey>
  >({
    queryKey: getV21ClicksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2['1-clicks'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV21Clicks<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['1-clicks']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2)['1-clicks']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['1-clicks']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV21ClicksQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV21ClicksQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostV21ClicksKubernetesMutationKey() {
  return ['v2', '/v2/1-clicks/kubernetes', 'POST'] as const
}

export function getPostV21ClicksKubernetesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2)['1-clicks']['kubernetes']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2)['1-clicks']['kubernetes']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV21ClicksKubernetesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2)['1-clicks']['kubernetes']['$post']>,
    ) {
      return parseResponse(client.v2['1-clicks'].kubernetes.$post(args, options))
    },
  })
}

export function injectPostV21ClicksKubernetes<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2)['1-clicks']['kubernetes']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2)['1-clicks']['kubernetes']['$post']>,
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
    const mutationDefaults = getPostV21ClicksKubernetesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getV2AccountQueryKey() {
  return ['v2', '/v2/account'] as const
}

export function getV2AccountQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.account.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.account.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV2AccountQueryKey>
  >({
    queryKey: getV2AccountQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.account.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV2Account<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.account.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.account.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV2AccountQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV2AccountQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getV2AccountKeysQueryKey(
  args: InferRequestType<typeof client.v2.account.keys.$get>,
) {
  return ['v2', '/v2/account/keys', args] as const
}

export function getV2AccountKeysQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.account.keys.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v2.account.keys.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.account.keys.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV2AccountKeysQueryKey>
  >({
    queryKey: getV2AccountKeysQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.account.keys.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV2AccountKeys<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.account.keys.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v2.account.keys.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.account.keys.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV2AccountKeysQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV2AccountKeysQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostV2AccountKeysMutationKey() {
  return ['v2', '/v2/account/keys', 'POST'] as const
}

export function getPostV2AccountKeysMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.account.keys.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v2.account.keys.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2AccountKeysMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.account.keys.$post>) {
      return parseResponse(client.v2.account.keys.$post(args, options))
    },
  })
}

export function injectPostV2AccountKeys<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.account.keys.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v2.account.keys.$post>,
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
    const mutationDefaults = getPostV2AccountKeysMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getV2AccountKeysSshKeyIdentifierQueryKey(
  args: InferRequestType<(typeof client.v2.account.keys)[':ssh_key_identifier']['$get']>,
) {
  return ['v2', '/v2/account/keys/:ssh_key_identifier', args] as const
}

export function getV2AccountKeysSshKeyIdentifierQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.account.keys)[':ssh_key_identifier']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.account.keys)[':ssh_key_identifier']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.account.keys)[':ssh_key_identifier']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2AccountKeysSshKeyIdentifierQueryKey>
  >({
    queryKey: getV2AccountKeysSshKeyIdentifierQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.account.keys[':ssh_key_identifier'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2AccountKeysSshKeyIdentifier<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.account.keys)[':ssh_key_identifier']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2.account.keys)[':ssh_key_identifier']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.account.keys)[':ssh_key_identifier']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2AccountKeysSshKeyIdentifierQueryKey>
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
      ...getV2AccountKeysSshKeyIdentifierQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPutV2AccountKeysSshKeyIdentifierMutationKey() {
  return ['v2', '/v2/account/keys/:ssh_key_identifier', 'PUT'] as const
}

export function getPutV2AccountKeysSshKeyIdentifierMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.account.keys)[':ssh_key_identifier']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.account.keys)[':ssh_key_identifier']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV2AccountKeysSshKeyIdentifierMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.account.keys)[':ssh_key_identifier']['$put']>,
    ) {
      return parseResponse(client.v2.account.keys[':ssh_key_identifier'].$put(args, options))
    },
  })
}

export function injectPutV2AccountKeysSshKeyIdentifier<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.account.keys)[':ssh_key_identifier']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.account.keys)[':ssh_key_identifier']['$put']>,
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
    const mutationDefaults = getPutV2AccountKeysSshKeyIdentifierMutationOptions<
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

export function getDeleteV2AccountKeysSshKeyIdentifierMutationKey() {
  return ['v2', '/v2/account/keys/:ssh_key_identifier', 'DELETE'] as const
}

export function getDeleteV2AccountKeysSshKeyIdentifierMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.account.keys)[':ssh_key_identifier']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v2.account.keys)[':ssh_key_identifier']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2AccountKeysSshKeyIdentifierMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.account.keys)[':ssh_key_identifier']['$delete']>,
    ) {
      return parseResponse(client.v2.account.keys[':ssh_key_identifier'].$delete(args, options))
    },
  })
}

export function injectDeleteV2AccountKeysSshKeyIdentifier<
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
                  ReturnType<(typeof client.v2.account.keys)[':ssh_key_identifier']['$delete']>
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.v2.account.keys)[':ssh_key_identifier']['$delete']>,
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
    const mutationDefaults = getDeleteV2AccountKeysSshKeyIdentifierMutationOptions<
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

export function getV2ActionsQueryKey(args: InferRequestType<typeof client.v2.actions.$get>) {
  return ['v2', '/v2/actions', args] as const
}

export function getV2ActionsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.actions.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v2.actions.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.actions.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV2ActionsQueryKey>
  >({
    queryKey: getV2ActionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.actions.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV2Actions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.actions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v2.actions.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.actions.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV2ActionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV2ActionsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getV2ActionsActionIdQueryKey(
  args: InferRequestType<(typeof client.v2.actions)[':action_id']['$get']>,
) {
  return ['v2', '/v2/actions/:action_id', args] as const
}

export function getV2ActionsActionIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.actions)[':action_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.actions)[':action_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2.actions)[':action_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2ActionsActionIdQueryKey>
  >({
    queryKey: getV2ActionsActionIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.actions[':action_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2ActionsActionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.actions)[':action_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2.actions)[':action_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.actions)[':action_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2ActionsActionIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV2ActionsActionIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getV2AppsQueryKey(args: InferRequestType<typeof client.v2.apps.$get>) {
  return ['v2', '/v2/apps', args] as const
}

export function getV2AppsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.apps.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v2.apps.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.apps.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV2AppsQueryKey>
  >({
    queryKey: getV2AppsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.apps.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV2Apps<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.apps.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v2.apps.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.apps.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getV2AppsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV2AppsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostV2AppsMutationKey() {
  return ['v2', '/v2/apps', 'POST'] as const
}

export function getPostV2AppsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.apps.$post>>>>>,
    TError,
    InferRequestType<typeof client.v2.apps.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2AppsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.apps.$post>) {
      return parseResponse(client.v2.apps.$post(args, options))
    },
  })
}

export function injectPostV2Apps<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.apps.$post>>>>>,
        TError,
        InferRequestType<typeof client.v2.apps.$post>,
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
    const mutationDefaults = getPostV2AppsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostV2AppsMetricsBandwidthDailyMutationKey() {
  return ['v2', '/v2/apps/metrics/bandwidth_daily', 'POST'] as const
}

export function getPostV2AppsMetricsBandwidthDailyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v2.apps.metrics.bandwidth_daily.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v2.apps.metrics.bandwidth_daily.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2AppsMetricsBandwidthDailyMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.apps.metrics.bandwidth_daily.$post>) {
      return parseResponse(client.v2.apps.metrics.bandwidth_daily.$post(args, options))
    },
  })
}

export function injectPostV2AppsMetricsBandwidthDaily<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v2.apps.metrics.bandwidth_daily.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v2.apps.metrics.bandwidth_daily.$post>,
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
    const mutationDefaults = getPostV2AppsMetricsBandwidthDailyMutationOptions<
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

export function getPostV2AppsProposeMutationKey() {
  return ['v2', '/v2/apps/propose', 'POST'] as const
}

export function getPostV2AppsProposeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.apps.propose.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v2.apps.propose.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2AppsProposeMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.apps.propose.$post>) {
      return parseResponse(client.v2.apps.propose.$post(args, options))
    },
  })
}

export function injectPostV2AppsPropose<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.apps.propose.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v2.apps.propose.$post>,
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
    const mutationDefaults = getPostV2AppsProposeMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getV2AppsRegionsQueryKey() {
  return ['v2', '/v2/apps/regions'] as const
}

export function getV2AppsRegionsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.apps.regions.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.apps.regions.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV2AppsRegionsQueryKey>
  >({
    queryKey: getV2AppsRegionsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.apps.regions.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV2AppsRegions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.apps.regions.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.apps.regions.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV2AppsRegionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV2AppsRegionsQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getV2AppsTiersQueryKey() {
  return ['v2', '/v2/apps/tiers'] as const
}

export function getV2AppsTiersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.apps.tiers.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.apps.tiers.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV2AppsTiersQueryKey>
  >({
    queryKey: getV2AppsTiersQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.apps.tiers.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV2AppsTiers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.apps.tiers.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.apps.tiers.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV2AppsTiersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV2AppsTiersQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getV2AppsTiersInstanceSizesQueryKey() {
  return ['v2', '/v2/apps/tiers/instance_sizes'] as const
}

export function getV2AppsTiersInstanceSizesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v2.apps.tiers.instance_sizes.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.apps.tiers.instance_sizes.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2AppsTiersInstanceSizesQueryKey>
  >({
    queryKey: getV2AppsTiersInstanceSizesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.apps.tiers.instance_sizes.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2AppsTiersInstanceSizes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v2.apps.tiers.instance_sizes.$get>>>
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
              Awaited<ReturnType<typeof client.v2.apps.tiers.instance_sizes.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2AppsTiersInstanceSizesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV2AppsTiersInstanceSizesQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getV2AppsTiersInstanceSizesSlugQueryKey(
  args: InferRequestType<(typeof client.v2.apps.tiers.instance_sizes)[':slug']['$get']>,
) {
  return ['v2', '/v2/apps/tiers/instance_sizes/:slug', args] as const
}

export function getV2AppsTiersInstanceSizesSlugQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.apps.tiers.instance_sizes)[':slug']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.apps.tiers.instance_sizes)[':slug']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.apps.tiers.instance_sizes)[':slug']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2AppsTiersInstanceSizesSlugQueryKey>
  >({
    queryKey: getV2AppsTiersInstanceSizesSlugQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.apps.tiers.instance_sizes[':slug'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2AppsTiersInstanceSizesSlug<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.apps.tiers.instance_sizes)[':slug']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2.apps.tiers.instance_sizes)[':slug']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.apps.tiers.instance_sizes)[':slug']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2AppsTiersInstanceSizesSlugQueryKey>
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
      ...getV2AppsTiersInstanceSizesSlugQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getV2AppsTiersSlugQueryKey(
  args: InferRequestType<(typeof client.v2.apps.tiers)[':slug']['$get']>,
) {
  return ['v2', '/v2/apps/tiers/:slug', args] as const
}

export function getV2AppsTiersSlugQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.apps.tiers)[':slug']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.apps.tiers)[':slug']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2.apps.tiers)[':slug']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2AppsTiersSlugQueryKey>
  >({
    queryKey: getV2AppsTiersSlugQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.apps.tiers[':slug'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2AppsTiersSlug<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.apps.tiers)[':slug']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2.apps.tiers)[':slug']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.apps.tiers)[':slug']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2AppsTiersSlugQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV2AppsTiersSlugQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getV2AppsAppIdAlertsQueryKey(
  args: InferRequestType<(typeof client.v2.apps)[':app_id']['alerts']['$get']>,
) {
  return ['v2', '/v2/apps/:app_id/alerts', args] as const
}

export function getV2AppsAppIdAlertsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.apps)[':app_id']['alerts']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.apps)[':app_id']['alerts']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.apps)[':app_id']['alerts']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2AppsAppIdAlertsQueryKey>
  >({
    queryKey: getV2AppsAppIdAlertsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.apps[':app_id'].alerts.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2AppsAppIdAlerts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.apps)[':app_id']['alerts']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2.apps)[':app_id']['alerts']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.apps)[':app_id']['alerts']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2AppsAppIdAlertsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV2AppsAppIdAlertsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostV2AppsAppIdAlertsAlertIdDestinationsMutationKey() {
  return ['v2', '/v2/apps/:app_id/alerts/:alert_id/destinations', 'POST'] as const
}

export function getPostV2AppsAppIdAlertsAlertIdDestinationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.apps)[':app_id']['alerts'][':alert_id']['destinations']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v2.apps)[':app_id']['alerts'][':alert_id']['destinations']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV2AppsAppIdAlertsAlertIdDestinationsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.apps)[':app_id']['alerts'][':alert_id']['destinations']['$post']
      >,
    ) {
      return parseResponse(
        client.v2.apps[':app_id'].alerts[':alert_id'].destinations.$post(args, options),
      )
    },
  })
}

export function injectPostV2AppsAppIdAlertsAlertIdDestinations<
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
                  (typeof client.v2.apps)[':app_id']['alerts'][':alert_id']['destinations']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v2.apps)[':app_id']['alerts'][':alert_id']['destinations']['$post']
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
    const mutationDefaults = getPostV2AppsAppIdAlertsAlertIdDestinationsMutationOptions<
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

export function getV2AppsAppIdComponentsComponentNameLogsQueryKey(
  args: InferRequestType<
    (typeof client.v2.apps)[':app_id']['components'][':component_name']['logs']['$get']
  >,
) {
  return ['v2', '/v2/apps/:app_id/components/:component_name/logs', args] as const
}

export function getV2AppsAppIdComponentsComponentNameLogsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2.apps)[':app_id']['components'][':component_name']['logs']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.apps)[':app_id']['components'][':component_name']['logs']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.apps)[':app_id']['components'][':component_name']['logs']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2AppsAppIdComponentsComponentNameLogsQueryKey>
  >({
    queryKey: getV2AppsAppIdComponentsComponentNameLogsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.apps[':app_id'].components[':component_name'].logs.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2AppsAppIdComponentsComponentNameLogs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2.apps)[':app_id']['components'][':component_name']['logs']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v2.apps)[':app_id']['components'][':component_name']['logs']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2.apps)[':app_id']['components'][':component_name']['logs']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2AppsAppIdComponentsComponentNameLogsQueryKey>
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
      ...getV2AppsAppIdComponentsComponentNameLogsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getV2AppsAppIdDeploymentsQueryKey(
  args: InferRequestType<(typeof client.v2.apps)[':app_id']['deployments']['$get']>,
) {
  return ['v2', '/v2/apps/:app_id/deployments', args] as const
}

export function getV2AppsAppIdDeploymentsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.apps)[':app_id']['deployments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.apps)[':app_id']['deployments']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.apps)[':app_id']['deployments']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2AppsAppIdDeploymentsQueryKey>
  >({
    queryKey: getV2AppsAppIdDeploymentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.apps[':app_id'].deployments.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2AppsAppIdDeployments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.apps)[':app_id']['deployments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2.apps)[':app_id']['deployments']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.apps)[':app_id']['deployments']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2AppsAppIdDeploymentsQueryKey>
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
      ...getV2AppsAppIdDeploymentsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostV2AppsAppIdDeploymentsMutationKey() {
  return ['v2', '/v2/apps/:app_id/deployments', 'POST'] as const
}

export function getPostV2AppsAppIdDeploymentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.apps)[':app_id']['deployments']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.apps)[':app_id']['deployments']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2AppsAppIdDeploymentsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.apps)[':app_id']['deployments']['$post']>,
    ) {
      return parseResponse(client.v2.apps[':app_id'].deployments.$post(args, options))
    },
  })
}

export function injectPostV2AppsAppIdDeployments<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.apps)[':app_id']['deployments']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.apps)[':app_id']['deployments']['$post']>,
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
    const mutationDefaults = getPostV2AppsAppIdDeploymentsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getV2AppsAppIdDeploymentsDeploymentIdQueryKey(
  args: InferRequestType<
    (typeof client.v2.apps)[':app_id']['deployments'][':deployment_id']['$get']
  >,
) {
  return ['v2', '/v2/apps/:app_id/deployments/:deployment_id', args] as const
}

export function getV2AppsAppIdDeploymentsDeploymentIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2.apps)[':app_id']['deployments'][':deployment_id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.apps)[':app_id']['deployments'][':deployment_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v2.apps)[':app_id']['deployments'][':deployment_id']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2AppsAppIdDeploymentsDeploymentIdQueryKey>
  >({
    queryKey: getV2AppsAppIdDeploymentsDeploymentIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.apps[':app_id'].deployments[':deployment_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2AppsAppIdDeploymentsDeploymentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2.apps)[':app_id']['deployments'][':deployment_id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v2.apps)[':app_id']['deployments'][':deployment_id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2.apps)[':app_id']['deployments'][':deployment_id']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2AppsAppIdDeploymentsDeploymentIdQueryKey>
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
      ...getV2AppsAppIdDeploymentsDeploymentIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostV2AppsAppIdDeploymentsDeploymentIdCancelMutationKey() {
  return ['v2', '/v2/apps/:app_id/deployments/:deployment_id/cancel', 'POST'] as const
}

export function getPostV2AppsAppIdDeploymentsDeploymentIdCancelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.apps)[':app_id']['deployments'][':deployment_id']['cancel']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v2.apps)[':app_id']['deployments'][':deployment_id']['cancel']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV2AppsAppIdDeploymentsDeploymentIdCancelMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.apps)[':app_id']['deployments'][':deployment_id']['cancel']['$post']
      >,
    ) {
      return parseResponse(
        client.v2.apps[':app_id'].deployments[':deployment_id'].cancel.$post(args, options),
      )
    },
  })
}

export function injectPostV2AppsAppIdDeploymentsDeploymentIdCancel<
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
                  (typeof client.v2.apps)[':app_id']['deployments'][':deployment_id']['cancel']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v2.apps)[':app_id']['deployments'][':deployment_id']['cancel']['$post']
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
    const mutationDefaults = getPostV2AppsAppIdDeploymentsDeploymentIdCancelMutationOptions<
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

export function getV2AppsAppIdDeploymentsDeploymentIdComponentsComponentNameLogsQueryKey(
  args: InferRequestType<
    (typeof client.v2.apps)[':app_id']['deployments'][':deployment_id']['components'][':component_name']['logs']['$get']
  >,
) {
  return [
    'v2',
    '/v2/apps/:app_id/deployments/:deployment_id/components/:component_name/logs',
    args,
  ] as const
}

export function getV2AppsAppIdDeploymentsDeploymentIdComponentsComponentNameLogsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2.apps)[':app_id']['deployments'][':deployment_id']['components'][':component_name']['logs']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.apps)[':app_id']['deployments'][':deployment_id']['components'][':component_name']['logs']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.apps)[':app_id']['deployments'][':deployment_id']['components'][':component_name']['logs']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2AppsAppIdDeploymentsDeploymentIdComponentsComponentNameLogsQueryKey>
  >({
    queryKey: getV2AppsAppIdDeploymentsDeploymentIdComponentsComponentNameLogsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.apps[':app_id'].deployments[':deployment_id'].components[
          ':component_name'
        ].logs.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV2AppsAppIdDeploymentsDeploymentIdComponentsComponentNameLogs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2.apps)[':app_id']['deployments'][':deployment_id']['components'][':component_name']['logs']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v2.apps)[':app_id']['deployments'][':deployment_id']['components'][':component_name']['logs']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2.apps)[':app_id']['deployments'][':deployment_id']['components'][':component_name']['logs']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2AppsAppIdDeploymentsDeploymentIdComponentsComponentNameLogsQueryKey>
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
      ...getV2AppsAppIdDeploymentsDeploymentIdComponentsComponentNameLogsQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getV2AppsAppIdDeploymentsDeploymentIdLogsQueryKey(
  args: InferRequestType<
    (typeof client.v2.apps)[':app_id']['deployments'][':deployment_id']['logs']['$get']
  >,
) {
  return ['v2', '/v2/apps/:app_id/deployments/:deployment_id/logs', args] as const
}

export function getV2AppsAppIdDeploymentsDeploymentIdLogsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2.apps)[':app_id']['deployments'][':deployment_id']['logs']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.apps)[':app_id']['deployments'][':deployment_id']['logs']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.apps)[':app_id']['deployments'][':deployment_id']['logs']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2AppsAppIdDeploymentsDeploymentIdLogsQueryKey>
  >({
    queryKey: getV2AppsAppIdDeploymentsDeploymentIdLogsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.apps[':app_id'].deployments[':deployment_id'].logs.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2AppsAppIdDeploymentsDeploymentIdLogs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2.apps)[':app_id']['deployments'][':deployment_id']['logs']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v2.apps)[':app_id']['deployments'][':deployment_id']['logs']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2.apps)[':app_id']['deployments'][':deployment_id']['logs']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2AppsAppIdDeploymentsDeploymentIdLogsQueryKey>
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
      ...getV2AppsAppIdDeploymentsDeploymentIdLogsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getV2AppsAppIdLogsQueryKey(
  args: InferRequestType<(typeof client.v2.apps)[':app_id']['logs']['$get']>,
) {
  return ['v2', '/v2/apps/:app_id/logs', args] as const
}

export function getV2AppsAppIdLogsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.apps)[':app_id']['logs']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.apps)[':app_id']['logs']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.apps)[':app_id']['logs']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2AppsAppIdLogsQueryKey>
  >({
    queryKey: getV2AppsAppIdLogsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.apps[':app_id'].logs.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2AppsAppIdLogs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.apps)[':app_id']['logs']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2.apps)[':app_id']['logs']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.apps)[':app_id']['logs']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2AppsAppIdLogsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV2AppsAppIdLogsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getV2AppsAppIdMetricsBandwidthDailyQueryKey(
  args: InferRequestType<(typeof client.v2.apps)[':app_id']['metrics']['bandwidth_daily']['$get']>,
) {
  return ['v2', '/v2/apps/:app_id/metrics/bandwidth_daily', args] as const
}

export function getV2AppsAppIdMetricsBandwidthDailyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2.apps)[':app_id']['metrics']['bandwidth_daily']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.apps)[':app_id']['metrics']['bandwidth_daily']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v2.apps)[':app_id']['metrics']['bandwidth_daily']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2AppsAppIdMetricsBandwidthDailyQueryKey>
  >({
    queryKey: getV2AppsAppIdMetricsBandwidthDailyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.apps[':app_id'].metrics.bandwidth_daily.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2AppsAppIdMetricsBandwidthDaily<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2.apps)[':app_id']['metrics']['bandwidth_daily']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v2.apps)[':app_id']['metrics']['bandwidth_daily']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v2.apps)[':app_id']['metrics']['bandwidth_daily']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2AppsAppIdMetricsBandwidthDailyQueryKey>
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
      ...getV2AppsAppIdMetricsBandwidthDailyQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostV2AppsAppIdRollbackMutationKey() {
  return ['v2', '/v2/apps/:app_id/rollback', 'POST'] as const
}

export function getPostV2AppsAppIdRollbackMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.apps)[':app_id']['rollback']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.apps)[':app_id']['rollback']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2AppsAppIdRollbackMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.apps)[':app_id']['rollback']['$post']>,
    ) {
      return parseResponse(client.v2.apps[':app_id'].rollback.$post(args, options))
    },
  })
}

export function injectPostV2AppsAppIdRollback<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.apps)[':app_id']['rollback']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.apps)[':app_id']['rollback']['$post']>,
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
    const mutationDefaults = getPostV2AppsAppIdRollbackMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostV2AppsAppIdRollbackCommitMutationKey() {
  return ['v2', '/v2/apps/:app_id/rollback/commit', 'POST'] as const
}

export function getPostV2AppsAppIdRollbackCommitMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.apps)[':app_id']['rollback']['commit']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.apps)[':app_id']['rollback']['commit']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2AppsAppIdRollbackCommitMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.apps)[':app_id']['rollback']['commit']['$post']>,
    ) {
      return parseResponse(client.v2.apps[':app_id'].rollback.commit.$post(args, options))
    },
  })
}

export function injectPostV2AppsAppIdRollbackCommit<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.apps)[':app_id']['rollback']['commit']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.apps)[':app_id']['rollback']['commit']['$post']>,
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
    const mutationDefaults = getPostV2AppsAppIdRollbackCommitMutationOptions<
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

export function getPostV2AppsAppIdRollbackRevertMutationKey() {
  return ['v2', '/v2/apps/:app_id/rollback/revert', 'POST'] as const
}

export function getPostV2AppsAppIdRollbackRevertMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.apps)[':app_id']['rollback']['revert']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.apps)[':app_id']['rollback']['revert']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2AppsAppIdRollbackRevertMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.apps)[':app_id']['rollback']['revert']['$post']>,
    ) {
      return parseResponse(client.v2.apps[':app_id'].rollback.revert.$post(args, options))
    },
  })
}

export function injectPostV2AppsAppIdRollbackRevert<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.apps)[':app_id']['rollback']['revert']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.apps)[':app_id']['rollback']['revert']['$post']>,
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
    const mutationDefaults = getPostV2AppsAppIdRollbackRevertMutationOptions<
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

export function getPostV2AppsAppIdRollbackValidateMutationKey() {
  return ['v2', '/v2/apps/:app_id/rollback/validate', 'POST'] as const
}

export function getPostV2AppsAppIdRollbackValidateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.apps)[':app_id']['rollback']['validate']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.apps)[':app_id']['rollback']['validate']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2AppsAppIdRollbackValidateMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.apps)[':app_id']['rollback']['validate']['$post']>,
    ) {
      return parseResponse(client.v2.apps[':app_id'].rollback.validate.$post(args, options))
    },
  })
}

export function injectPostV2AppsAppIdRollbackValidate<
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
                ReturnType<(typeof client.v2.apps)[':app_id']['rollback']['validate']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.apps)[':app_id']['rollback']['validate']['$post']>,
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
    const mutationDefaults = getPostV2AppsAppIdRollbackValidateMutationOptions<
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

export function getV2AppsIdQueryKey(
  args: InferRequestType<(typeof client.v2.apps)[':id']['$get']>,
) {
  return ['v2', '/v2/apps/:id', args] as const
}

export function getV2AppsIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v2.apps)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.v2.apps)[':id']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v2.apps)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV2AppsIdQueryKey>
  >({
    queryKey: getV2AppsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.apps[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV2AppsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v2.apps)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2.apps)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v2.apps)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2AppsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV2AppsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPutV2AppsIdMutationKey() {
  return ['v2', '/v2/apps/:id', 'PUT'] as const
}

export function getPutV2AppsIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v2.apps)[':id']['$put']>>>>
    >,
    TError,
    InferRequestType<(typeof client.v2.apps)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV2AppsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v2.apps)[':id']['$put']>) {
      return parseResponse(client.v2.apps[':id'].$put(args, options))
    },
  })
}

export function injectPutV2AppsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v2.apps)[':id']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.apps)[':id']['$put']>,
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
    const mutationDefaults = getPutV2AppsIdMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteV2AppsIdMutationKey() {
  return ['v2', '/v2/apps/:id', 'DELETE'] as const
}

export function getDeleteV2AppsIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2.apps)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.apps)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2AppsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v2.apps)[':id']['$delete']>) {
      return parseResponse(client.v2.apps[':id'].$delete(args, options))
    },
  })
}

export function injectDeleteV2AppsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v2.apps)[':id']['$delete']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.apps)[':id']['$delete']>,
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
    const mutationDefaults = getDeleteV2AppsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getV2CdnEndpointsQueryKey(
  args: InferRequestType<typeof client.v2.cdn.endpoints.$get>,
) {
  return ['v2', '/v2/cdn/endpoints', args] as const
}

export function getV2CdnEndpointsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.cdn.endpoints.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v2.cdn.endpoints.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.cdn.endpoints.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV2CdnEndpointsQueryKey>
  >({
    queryKey: getV2CdnEndpointsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.cdn.endpoints.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV2CdnEndpoints<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.cdn.endpoints.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v2.cdn.endpoints.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.cdn.endpoints.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV2CdnEndpointsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV2CdnEndpointsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostV2CdnEndpointsMutationKey() {
  return ['v2', '/v2/cdn/endpoints', 'POST'] as const
}

export function getPostV2CdnEndpointsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.cdn.endpoints.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v2.cdn.endpoints.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2CdnEndpointsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.cdn.endpoints.$post>) {
      return parseResponse(client.v2.cdn.endpoints.$post(args, options))
    },
  })
}

export function injectPostV2CdnEndpoints<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v2.cdn.endpoints.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v2.cdn.endpoints.$post>,
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
    const mutationDefaults = getPostV2CdnEndpointsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getV2CdnEndpointsCdnIdQueryKey(
  args: InferRequestType<(typeof client.v2.cdn.endpoints)[':cdn_id']['$get']>,
) {
  return ['v2', '/v2/cdn/endpoints/:cdn_id', args] as const
}

export function getV2CdnEndpointsCdnIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.cdn.endpoints)[':cdn_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.cdn.endpoints)[':cdn_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.cdn.endpoints)[':cdn_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2CdnEndpointsCdnIdQueryKey>
  >({
    queryKey: getV2CdnEndpointsCdnIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.cdn.endpoints[':cdn_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2CdnEndpointsCdnId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.cdn.endpoints)[':cdn_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2.cdn.endpoints)[':cdn_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.cdn.endpoints)[':cdn_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2CdnEndpointsCdnIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV2CdnEndpointsCdnIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPutV2CdnEndpointsCdnIdMutationKey() {
  return ['v2', '/v2/cdn/endpoints/:cdn_id', 'PUT'] as const
}

export function getPutV2CdnEndpointsCdnIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.cdn.endpoints)[':cdn_id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.cdn.endpoints)[':cdn_id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV2CdnEndpointsCdnIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v2.cdn.endpoints)[':cdn_id']['$put']>) {
      return parseResponse(client.v2.cdn.endpoints[':cdn_id'].$put(args, options))
    },
  })
}

export function injectPutV2CdnEndpointsCdnId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.cdn.endpoints)[':cdn_id']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.cdn.endpoints)[':cdn_id']['$put']>,
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
    const mutationDefaults = getPutV2CdnEndpointsCdnIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteV2CdnEndpointsCdnIdMutationKey() {
  return ['v2', '/v2/cdn/endpoints/:cdn_id', 'DELETE'] as const
}

export function getDeleteV2CdnEndpointsCdnIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.cdn.endpoints)[':cdn_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v2.cdn.endpoints)[':cdn_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2CdnEndpointsCdnIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.cdn.endpoints)[':cdn_id']['$delete']>,
    ) {
      return parseResponse(client.v2.cdn.endpoints[':cdn_id'].$delete(args, options))
    },
  })
}

export function injectDeleteV2CdnEndpointsCdnId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.cdn.endpoints)[':cdn_id']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.v2.cdn.endpoints)[':cdn_id']['$delete']>,
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
    const mutationDefaults = getDeleteV2CdnEndpointsCdnIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteV2CdnEndpointsCdnIdCacheMutationKey() {
  return ['v2', '/v2/cdn/endpoints/:cdn_id/cache', 'DELETE'] as const
}

export function getDeleteV2CdnEndpointsCdnIdCacheMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.cdn.endpoints)[':cdn_id']['cache']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v2.cdn.endpoints)[':cdn_id']['cache']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2CdnEndpointsCdnIdCacheMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.cdn.endpoints)[':cdn_id']['cache']['$delete']>,
    ) {
      return parseResponse(client.v2.cdn.endpoints[':cdn_id'].cache.$delete(args, options))
    },
  })
}

export function injectDeleteV2CdnEndpointsCdnIdCache<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.cdn.endpoints)[':cdn_id']['cache']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.v2.cdn.endpoints)[':cdn_id']['cache']['$delete']>,
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
    const mutationDefaults = getDeleteV2CdnEndpointsCdnIdCacheMutationOptions<
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

export function getV2CertificatesQueryKey(
  args: InferRequestType<typeof client.v2.certificates.$get>,
) {
  return ['v2', '/v2/certificates', args] as const
}

export function getV2CertificatesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.certificates.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v2.certificates.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.certificates.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV2CertificatesQueryKey>
  >({
    queryKey: getV2CertificatesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.certificates.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV2Certificates<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.certificates.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v2.certificates.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.certificates.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV2CertificatesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV2CertificatesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostV2CertificatesMutationKey() {
  return ['v2', '/v2/certificates', 'POST'] as const
}

export function getPostV2CertificatesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.certificates.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v2.certificates.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2CertificatesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.certificates.$post>) {
      return parseResponse(client.v2.certificates.$post(args, options))
    },
  })
}

export function injectPostV2Certificates<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.certificates.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v2.certificates.$post>,
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
    const mutationDefaults = getPostV2CertificatesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getV2CertificatesCertificateIdQueryKey(
  args: InferRequestType<(typeof client.v2.certificates)[':certificate_id']['$get']>,
) {
  return ['v2', '/v2/certificates/:certificate_id', args] as const
}

export function getV2CertificatesCertificateIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.certificates)[':certificate_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.certificates)[':certificate_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.certificates)[':certificate_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2CertificatesCertificateIdQueryKey>
  >({
    queryKey: getV2CertificatesCertificateIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.certificates[':certificate_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2CertificatesCertificateId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.certificates)[':certificate_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2.certificates)[':certificate_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.certificates)[':certificate_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2CertificatesCertificateIdQueryKey>
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
      ...getV2CertificatesCertificateIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getDeleteV2CertificatesCertificateIdMutationKey() {
  return ['v2', '/v2/certificates/:certificate_id', 'DELETE'] as const
}

export function getDeleteV2CertificatesCertificateIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.certificates)[':certificate_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v2.certificates)[':certificate_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2CertificatesCertificateIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.certificates)[':certificate_id']['$delete']>,
    ) {
      return parseResponse(client.v2.certificates[':certificate_id'].$delete(args, options))
    },
  })
}

export function injectDeleteV2CertificatesCertificateId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.certificates)[':certificate_id']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.v2.certificates)[':certificate_id']['$delete']>,
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
    const mutationDefaults = getDeleteV2CertificatesCertificateIdMutationOptions<
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

export function getV2CustomersMyBalanceQueryKey() {
  return ['v2', '/v2/customers/my/balance'] as const
}

export function getV2CustomersMyBalanceQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v2.customers.my.balance.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.customers.my.balance.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2CustomersMyBalanceQueryKey>
  >({
    queryKey: getV2CustomersMyBalanceQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.customers.my.balance.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2CustomersMyBalance<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v2.customers.my.balance.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v2.customers.my.balance.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2CustomersMyBalanceQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV2CustomersMyBalanceQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getV2CustomersMyBillingHistoryQueryKey() {
  return ['v2', '/v2/customers/my/billing_history'] as const
}

export function getV2CustomersMyBillingHistoryQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v2.customers.my.billing_history.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v2.customers.my.billing_history.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2CustomersMyBillingHistoryQueryKey>
  >({
    queryKey: getV2CustomersMyBillingHistoryQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.customers.my.billing_history.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2CustomersMyBillingHistory<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v2.customers.my.billing_history.$get>>>
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
              Awaited<ReturnType<typeof client.v2.customers.my.billing_history.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2CustomersMyBillingHistoryQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV2CustomersMyBillingHistoryQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getV2CustomersMyInvoicesQueryKey(
  args: InferRequestType<typeof client.v2.customers.my.invoices.$get>,
) {
  return ['v2', '/v2/customers/my/invoices', args] as const
}

export function getV2CustomersMyInvoicesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v2.customers.my.invoices.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.customers.my.invoices.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.customers.my.invoices.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2CustomersMyInvoicesQueryKey>
  >({
    queryKey: getV2CustomersMyInvoicesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.customers.my.invoices.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2CustomersMyInvoices<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v2.customers.my.invoices.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v2.customers.my.invoices.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v2.customers.my.invoices.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2CustomersMyInvoicesQueryKey>
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
      ...getV2CustomersMyInvoicesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getV2CustomersMyInvoicesInvoiceUuidQueryKey(
  args: InferRequestType<(typeof client.v2.customers.my.invoices)[':invoice_uuid']['$get']>,
) {
  return ['v2', '/v2/customers/my/invoices/:invoice_uuid', args] as const
}

export function getV2CustomersMyInvoicesInvoiceUuidQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.customers.my.invoices)[':invoice_uuid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.customers.my.invoices)[':invoice_uuid']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.customers.my.invoices)[':invoice_uuid']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2CustomersMyInvoicesInvoiceUuidQueryKey>
  >({
    queryKey: getV2CustomersMyInvoicesInvoiceUuidQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.customers.my.invoices[':invoice_uuid'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2CustomersMyInvoicesInvoiceUuid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.customers.my.invoices)[':invoice_uuid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2.customers.my.invoices)[':invoice_uuid']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.customers.my.invoices)[':invoice_uuid']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2CustomersMyInvoicesInvoiceUuidQueryKey>
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
      ...getV2CustomersMyInvoicesInvoiceUuidQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getV2CustomersMyInvoicesInvoiceUuidCsvQueryKey(
  args: InferRequestType<(typeof client.v2.customers.my.invoices)[':invoice_uuid']['csv']['$get']>,
) {
  return ['v2', '/v2/customers/my/invoices/:invoice_uuid/csv', args] as const
}

export function getV2CustomersMyInvoicesInvoiceUuidCsvQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2.customers.my.invoices)[':invoice_uuid']['csv']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.customers.my.invoices)[':invoice_uuid']['csv']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v2.customers.my.invoices)[':invoice_uuid']['csv']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2CustomersMyInvoicesInvoiceUuidCsvQueryKey>
  >({
    queryKey: getV2CustomersMyInvoicesInvoiceUuidCsvQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.customers.my.invoices[':invoice_uuid'].csv.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2CustomersMyInvoicesInvoiceUuidCsv<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2.customers.my.invoices)[':invoice_uuid']['csv']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v2.customers.my.invoices)[':invoice_uuid']['csv']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v2.customers.my.invoices)[':invoice_uuid']['csv']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2CustomersMyInvoicesInvoiceUuidCsvQueryKey>
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
      ...getV2CustomersMyInvoicesInvoiceUuidCsvQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getV2CustomersMyInvoicesInvoiceUuidPdfQueryKey(
  args: InferRequestType<(typeof client.v2.customers.my.invoices)[':invoice_uuid']['pdf']['$get']>,
) {
  return ['v2', '/v2/customers/my/invoices/:invoice_uuid/pdf', args] as const
}

export function getV2CustomersMyInvoicesInvoiceUuidPdfQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2.customers.my.invoices)[':invoice_uuid']['pdf']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.customers.my.invoices)[':invoice_uuid']['pdf']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v2.customers.my.invoices)[':invoice_uuid']['pdf']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2CustomersMyInvoicesInvoiceUuidPdfQueryKey>
  >({
    queryKey: getV2CustomersMyInvoicesInvoiceUuidPdfQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.customers.my.invoices[':invoice_uuid'].pdf.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2CustomersMyInvoicesInvoiceUuidPdf<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2.customers.my.invoices)[':invoice_uuid']['pdf']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v2.customers.my.invoices)[':invoice_uuid']['pdf']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v2.customers.my.invoices)[':invoice_uuid']['pdf']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2CustomersMyInvoicesInvoiceUuidPdfQueryKey>
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
      ...getV2CustomersMyInvoicesInvoiceUuidPdfQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getV2CustomersMyInvoicesInvoiceUuidSummaryQueryKey(
  args: InferRequestType<
    (typeof client.v2.customers.my.invoices)[':invoice_uuid']['summary']['$get']
  >,
) {
  return ['v2', '/v2/customers/my/invoices/:invoice_uuid/summary', args] as const
}

export function getV2CustomersMyInvoicesInvoiceUuidSummaryQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2.customers.my.invoices)[':invoice_uuid']['summary']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.customers.my.invoices)[':invoice_uuid']['summary']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v2.customers.my.invoices)[':invoice_uuid']['summary']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2CustomersMyInvoicesInvoiceUuidSummaryQueryKey>
  >({
    queryKey: getV2CustomersMyInvoicesInvoiceUuidSummaryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.customers.my.invoices[':invoice_uuid'].summary.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2CustomersMyInvoicesInvoiceUuidSummary<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2.customers.my.invoices)[':invoice_uuid']['summary']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v2.customers.my.invoices)[':invoice_uuid']['summary']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2.customers.my.invoices)[':invoice_uuid']['summary']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2CustomersMyInvoicesInvoiceUuidSummaryQueryKey>
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
      ...getV2CustomersMyInvoicesInvoiceUuidSummaryQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getV2DatabasesQueryKey(args: InferRequestType<typeof client.v2.databases.$get>) {
  return ['v2', '/v2/databases', args] as const
}

export function getV2DatabasesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.databases.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v2.databases.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.databases.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV2DatabasesQueryKey>
  >({
    queryKey: getV2DatabasesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.databases.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV2Databases<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.databases.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v2.databases.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.databases.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV2DatabasesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV2DatabasesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostV2DatabasesMutationKey() {
  return ['v2', '/v2/databases', 'POST'] as const
}

export function getPostV2DatabasesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.databases.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v2.databases.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2DatabasesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.databases.$post>) {
      return parseResponse(client.v2.databases.$post(args, options))
    },
  })
}

export function injectPostV2Databases<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.databases.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v2.databases.$post>,
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
    const mutationDefaults = getPostV2DatabasesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getV2DatabasesOptionsQueryKey() {
  return ['v2', '/v2/databases/options'] as const
}

export function getV2DatabasesOptionsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.databases.options.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.databases.options.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV2DatabasesOptionsQueryKey>
  >({
    queryKey: getV2DatabasesOptionsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.databases.options.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2DatabasesOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.databases.options.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v2.databases.options.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2DatabasesOptionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV2DatabasesOptionsQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getV2DatabasesDatabaseClusterUuidQueryKey(
  args: InferRequestType<(typeof client.v2.databases)[':database_cluster_uuid']['$get']>,
) {
  return ['v2', '/v2/databases/:database_cluster_uuid', args] as const
}

export function getV2DatabasesDatabaseClusterUuidQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.databases)[':database_cluster_uuid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.databases)[':database_cluster_uuid']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.databases)[':database_cluster_uuid']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2DatabasesDatabaseClusterUuidQueryKey>
  >({
    queryKey: getV2DatabasesDatabaseClusterUuidQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.databases[':database_cluster_uuid'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2DatabasesDatabaseClusterUuid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.databases)[':database_cluster_uuid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2.databases)[':database_cluster_uuid']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.databases)[':database_cluster_uuid']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2DatabasesDatabaseClusterUuidQueryKey>
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
      ...getV2DatabasesDatabaseClusterUuidQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getDeleteV2DatabasesDatabaseClusterUuidMutationKey() {
  return ['v2', '/v2/databases/:database_cluster_uuid', 'DELETE'] as const
}

export function getDeleteV2DatabasesDatabaseClusterUuidMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.databases)[':database_cluster_uuid']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v2.databases)[':database_cluster_uuid']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2DatabasesDatabaseClusterUuidMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.databases)[':database_cluster_uuid']['$delete']>,
    ) {
      return parseResponse(client.v2.databases[':database_cluster_uuid'].$delete(args, options))
    },
  })
}

export function injectDeleteV2DatabasesDatabaseClusterUuid<
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
                  ReturnType<(typeof client.v2.databases)[':database_cluster_uuid']['$delete']>
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.v2.databases)[':database_cluster_uuid']['$delete']>,
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
    const mutationDefaults = getDeleteV2DatabasesDatabaseClusterUuidMutationOptions<
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

export function getV2DatabasesDatabaseClusterUuidBackupsQueryKey(
  args: InferRequestType<(typeof client.v2.databases)[':database_cluster_uuid']['backups']['$get']>,
) {
  return ['v2', '/v2/databases/:database_cluster_uuid/backups', args] as const
}

export function getV2DatabasesDatabaseClusterUuidBackupsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2.databases)[':database_cluster_uuid']['backups']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.databases)[':database_cluster_uuid']['backups']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v2.databases)[':database_cluster_uuid']['backups']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2DatabasesDatabaseClusterUuidBackupsQueryKey>
  >({
    queryKey: getV2DatabasesDatabaseClusterUuidBackupsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.databases[':database_cluster_uuid'].backups.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2DatabasesDatabaseClusterUuidBackups<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2.databases)[':database_cluster_uuid']['backups']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v2.databases)[':database_cluster_uuid']['backups']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2.databases)[':database_cluster_uuid']['backups']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2DatabasesDatabaseClusterUuidBackupsQueryKey>
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
      ...getV2DatabasesDatabaseClusterUuidBackupsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getV2DatabasesDatabaseClusterUuidCaQueryKey(
  args: InferRequestType<(typeof client.v2.databases)[':database_cluster_uuid']['ca']['$get']>,
) {
  return ['v2', '/v2/databases/:database_cluster_uuid/ca', args] as const
}

export function getV2DatabasesDatabaseClusterUuidCaQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.databases)[':database_cluster_uuid']['ca']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.databases)[':database_cluster_uuid']['ca']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.databases)[':database_cluster_uuid']['ca']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2DatabasesDatabaseClusterUuidCaQueryKey>
  >({
    queryKey: getV2DatabasesDatabaseClusterUuidCaQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.databases[':database_cluster_uuid'].ca.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2DatabasesDatabaseClusterUuidCa<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.databases)[':database_cluster_uuid']['ca']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v2.databases)[':database_cluster_uuid']['ca']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v2.databases)[':database_cluster_uuid']['ca']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2DatabasesDatabaseClusterUuidCaQueryKey>
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
      ...getV2DatabasesDatabaseClusterUuidCaQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getV2DatabasesDatabaseClusterUuidConfigQueryKey(
  args: InferRequestType<(typeof client.v2.databases)[':database_cluster_uuid']['config']['$get']>,
) {
  return ['v2', '/v2/databases/:database_cluster_uuid/config', args] as const
}

export function getV2DatabasesDatabaseClusterUuidConfigQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2.databases)[':database_cluster_uuid']['config']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.databases)[':database_cluster_uuid']['config']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v2.databases)[':database_cluster_uuid']['config']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2DatabasesDatabaseClusterUuidConfigQueryKey>
  >({
    queryKey: getV2DatabasesDatabaseClusterUuidConfigQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.databases[':database_cluster_uuid'].config.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2DatabasesDatabaseClusterUuidConfig<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2.databases)[':database_cluster_uuid']['config']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v2.databases)[':database_cluster_uuid']['config']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v2.databases)[':database_cluster_uuid']['config']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2DatabasesDatabaseClusterUuidConfigQueryKey>
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
      ...getV2DatabasesDatabaseClusterUuidConfigQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPatchV2DatabasesDatabaseClusterUuidConfigMutationKey() {
  return ['v2', '/v2/databases/:database_cluster_uuid/config', 'PATCH'] as const
}

export function getPatchV2DatabasesDatabaseClusterUuidConfigMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.databases)[':database_cluster_uuid']['config']['$patch']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v2.databases)[':database_cluster_uuid']['config']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV2DatabasesDatabaseClusterUuidConfigMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.databases)[':database_cluster_uuid']['config']['$patch']
      >,
    ) {
      return parseResponse(
        client.v2.databases[':database_cluster_uuid'].config.$patch(args, options),
      )
    },
  })
}

export function injectPatchV2DatabasesDatabaseClusterUuidConfig<
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
                    (typeof client.v2.databases)[':database_cluster_uuid']['config']['$patch']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.v2.databases)[':database_cluster_uuid']['config']['$patch']
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
    const mutationDefaults = getPatchV2DatabasesDatabaseClusterUuidConfigMutationOptions<
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

export function getV2DatabasesDatabaseClusterUuidDbsQueryKey(
  args: InferRequestType<(typeof client.v2.databases)[':database_cluster_uuid']['dbs']['$get']>,
) {
  return ['v2', '/v2/databases/:database_cluster_uuid/dbs', args] as const
}

export function getV2DatabasesDatabaseClusterUuidDbsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.databases)[':database_cluster_uuid']['dbs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.databases)[':database_cluster_uuid']['dbs']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.databases)[':database_cluster_uuid']['dbs']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2DatabasesDatabaseClusterUuidDbsQueryKey>
  >({
    queryKey: getV2DatabasesDatabaseClusterUuidDbsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.databases[':database_cluster_uuid'].dbs.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2DatabasesDatabaseClusterUuidDbs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.databases)[':database_cluster_uuid']['dbs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v2.databases)[':database_cluster_uuid']['dbs']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v2.databases)[':database_cluster_uuid']['dbs']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2DatabasesDatabaseClusterUuidDbsQueryKey>
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
      ...getV2DatabasesDatabaseClusterUuidDbsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostV2DatabasesDatabaseClusterUuidDbsMutationKey() {
  return ['v2', '/v2/databases/:database_cluster_uuid/dbs', 'POST'] as const
}

export function getPostV2DatabasesDatabaseClusterUuidDbsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v2.databases)[':database_cluster_uuid']['dbs']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.databases)[':database_cluster_uuid']['dbs']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2DatabasesDatabaseClusterUuidDbsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.databases)[':database_cluster_uuid']['dbs']['$post']
      >,
    ) {
      return parseResponse(client.v2.databases[':database_cluster_uuid'].dbs.$post(args, options))
    },
  })
}

export function injectPostV2DatabasesDatabaseClusterUuidDbs<
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
                ReturnType<(typeof client.v2.databases)[':database_cluster_uuid']['dbs']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.databases)[':database_cluster_uuid']['dbs']['$post']>,
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
    const mutationDefaults = getPostV2DatabasesDatabaseClusterUuidDbsMutationOptions<
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

export function getV2DatabasesDatabaseClusterUuidDbsDatabaseNameQueryKey(
  args: InferRequestType<
    (typeof client.v2.databases)[':database_cluster_uuid']['dbs'][':database_name']['$get']
  >,
) {
  return ['v2', '/v2/databases/:database_cluster_uuid/dbs/:database_name', args] as const
}

export function getV2DatabasesDatabaseClusterUuidDbsDatabaseNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2.databases)[':database_cluster_uuid']['dbs'][':database_name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.databases)[':database_cluster_uuid']['dbs'][':database_name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.databases)[':database_cluster_uuid']['dbs'][':database_name']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2DatabasesDatabaseClusterUuidDbsDatabaseNameQueryKey>
  >({
    queryKey: getV2DatabasesDatabaseClusterUuidDbsDatabaseNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.databases[':database_cluster_uuid'].dbs[':database_name'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2DatabasesDatabaseClusterUuidDbsDatabaseName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2.databases)[':database_cluster_uuid']['dbs'][':database_name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v2.databases)[':database_cluster_uuid']['dbs'][':database_name']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2.databases)[':database_cluster_uuid']['dbs'][':database_name']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2DatabasesDatabaseClusterUuidDbsDatabaseNameQueryKey>
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
      ...getV2DatabasesDatabaseClusterUuidDbsDatabaseNameQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getDeleteV2DatabasesDatabaseClusterUuidDbsDatabaseNameMutationKey() {
  return ['v2', '/v2/databases/:database_cluster_uuid/dbs/:database_name', 'DELETE'] as const
}

export function getDeleteV2DatabasesDatabaseClusterUuidDbsDatabaseNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.databases)[':database_cluster_uuid']['dbs'][':database_name']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.v2.databases)[':database_cluster_uuid']['dbs'][':database_name']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2DatabasesDatabaseClusterUuidDbsDatabaseNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.databases)[':database_cluster_uuid']['dbs'][':database_name']['$delete']
      >,
    ) {
      return parseResponse(
        client.v2.databases[':database_cluster_uuid'].dbs[':database_name'].$delete(args, options),
      )
    },
  })
}

export function injectDeleteV2DatabasesDatabaseClusterUuidDbsDatabaseName<
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
                    (typeof client.v2.databases)[':database_cluster_uuid']['dbs'][':database_name']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.v2.databases)[':database_cluster_uuid']['dbs'][':database_name']['$delete']
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
    const mutationDefaults = getDeleteV2DatabasesDatabaseClusterUuidDbsDatabaseNameMutationOptions<
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

export function getV2DatabasesDatabaseClusterUuidEvictionPolicyQueryKey(
  args: InferRequestType<
    (typeof client.v2.databases)[':database_cluster_uuid']['eviction_policy']['$get']
  >,
) {
  return ['v2', '/v2/databases/:database_cluster_uuid/eviction_policy', args] as const
}

export function getV2DatabasesDatabaseClusterUuidEvictionPolicyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2.databases)[':database_cluster_uuid']['eviction_policy']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.databases)[':database_cluster_uuid']['eviction_policy']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.databases)[':database_cluster_uuid']['eviction_policy']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2DatabasesDatabaseClusterUuidEvictionPolicyQueryKey>
  >({
    queryKey: getV2DatabasesDatabaseClusterUuidEvictionPolicyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.databases[':database_cluster_uuid'].eviction_policy.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2DatabasesDatabaseClusterUuidEvictionPolicy<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2.databases)[':database_cluster_uuid']['eviction_policy']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v2.databases)[':database_cluster_uuid']['eviction_policy']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2.databases)[':database_cluster_uuid']['eviction_policy']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2DatabasesDatabaseClusterUuidEvictionPolicyQueryKey>
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
      ...getV2DatabasesDatabaseClusterUuidEvictionPolicyQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPutV2DatabasesDatabaseClusterUuidEvictionPolicyMutationKey() {
  return ['v2', '/v2/databases/:database_cluster_uuid/eviction_policy', 'PUT'] as const
}

export function getPutV2DatabasesDatabaseClusterUuidEvictionPolicyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.databases)[':database_cluster_uuid']['eviction_policy']['$put']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.v2.databases)[':database_cluster_uuid']['eviction_policy']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutV2DatabasesDatabaseClusterUuidEvictionPolicyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.databases)[':database_cluster_uuid']['eviction_policy']['$put']
      >,
    ) {
      return parseResponse(
        client.v2.databases[':database_cluster_uuid'].eviction_policy.$put(args, options),
      )
    },
  })
}

export function injectPutV2DatabasesDatabaseClusterUuidEvictionPolicy<
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
                    (typeof client.v2.databases)[':database_cluster_uuid']['eviction_policy']['$put']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.v2.databases)[':database_cluster_uuid']['eviction_policy']['$put']
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
    const mutationDefaults = getPutV2DatabasesDatabaseClusterUuidEvictionPolicyMutationOptions<
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

export function getV2DatabasesDatabaseClusterUuidFirewallQueryKey(
  args: InferRequestType<
    (typeof client.v2.databases)[':database_cluster_uuid']['firewall']['$get']
  >,
) {
  return ['v2', '/v2/databases/:database_cluster_uuid/firewall', args] as const
}

export function getV2DatabasesDatabaseClusterUuidFirewallQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2.databases)[':database_cluster_uuid']['firewall']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.databases)[':database_cluster_uuid']['firewall']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v2.databases)[':database_cluster_uuid']['firewall']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2DatabasesDatabaseClusterUuidFirewallQueryKey>
  >({
    queryKey: getV2DatabasesDatabaseClusterUuidFirewallQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.databases[':database_cluster_uuid'].firewall.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2DatabasesDatabaseClusterUuidFirewall<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2.databases)[':database_cluster_uuid']['firewall']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v2.databases)[':database_cluster_uuid']['firewall']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2.databases)[':database_cluster_uuid']['firewall']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2DatabasesDatabaseClusterUuidFirewallQueryKey>
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
      ...getV2DatabasesDatabaseClusterUuidFirewallQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPutV2DatabasesDatabaseClusterUuidFirewallMutationKey() {
  return ['v2', '/v2/databases/:database_cluster_uuid/firewall', 'PUT'] as const
}

export function getPutV2DatabasesDatabaseClusterUuidFirewallMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.databases)[':database_cluster_uuid']['firewall']['$put']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v2.databases)[':database_cluster_uuid']['firewall']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV2DatabasesDatabaseClusterUuidFirewallMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.databases)[':database_cluster_uuid']['firewall']['$put']
      >,
    ) {
      return parseResponse(
        client.v2.databases[':database_cluster_uuid'].firewall.$put(args, options),
      )
    },
  })
}

export function injectPutV2DatabasesDatabaseClusterUuidFirewall<
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
                    (typeof client.v2.databases)[':database_cluster_uuid']['firewall']['$put']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.v2.databases)[':database_cluster_uuid']['firewall']['$put']
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
    const mutationDefaults = getPutV2DatabasesDatabaseClusterUuidFirewallMutationOptions<
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

export function getPutV2DatabasesDatabaseClusterUuidMaintenanceMutationKey() {
  return ['v2', '/v2/databases/:database_cluster_uuid/maintenance', 'PUT'] as const
}

export function getPutV2DatabasesDatabaseClusterUuidMaintenanceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.databases)[':database_cluster_uuid']['maintenance']['$put']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v2.databases)[':database_cluster_uuid']['maintenance']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV2DatabasesDatabaseClusterUuidMaintenanceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.databases)[':database_cluster_uuid']['maintenance']['$put']
      >,
    ) {
      return parseResponse(
        client.v2.databases[':database_cluster_uuid'].maintenance.$put(args, options),
      )
    },
  })
}

export function injectPutV2DatabasesDatabaseClusterUuidMaintenance<
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
                    (typeof client.v2.databases)[':database_cluster_uuid']['maintenance']['$put']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.v2.databases)[':database_cluster_uuid']['maintenance']['$put']
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
    const mutationDefaults = getPutV2DatabasesDatabaseClusterUuidMaintenanceMutationOptions<
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

export function getPutV2DatabasesDatabaseClusterUuidMigrateMutationKey() {
  return ['v2', '/v2/databases/:database_cluster_uuid/migrate', 'PUT'] as const
}

export function getPutV2DatabasesDatabaseClusterUuidMigrateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v2.databases)[':database_cluster_uuid']['migrate']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.databases)[':database_cluster_uuid']['migrate']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV2DatabasesDatabaseClusterUuidMigrateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.databases)[':database_cluster_uuid']['migrate']['$put']
      >,
    ) {
      return parseResponse(
        client.v2.databases[':database_cluster_uuid'].migrate.$put(args, options),
      )
    },
  })
}

export function injectPutV2DatabasesDatabaseClusterUuidMigrate<
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
                  (typeof client.v2.databases)[':database_cluster_uuid']['migrate']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.databases)[':database_cluster_uuid']['migrate']['$put']>,
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
    const mutationDefaults = getPutV2DatabasesDatabaseClusterUuidMigrateMutationOptions<
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

export function getV2DatabasesDatabaseClusterUuidOnlineMigrationQueryKey(
  args: InferRequestType<
    (typeof client.v2.databases)[':database_cluster_uuid']['online-migration']['$get']
  >,
) {
  return ['v2', '/v2/databases/:database_cluster_uuid/online-migration', args] as const
}

export function getV2DatabasesDatabaseClusterUuidOnlineMigrationQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2.databases)[':database_cluster_uuid']['online-migration']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.databases)[':database_cluster_uuid']['online-migration']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.databases)[':database_cluster_uuid']['online-migration']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2DatabasesDatabaseClusterUuidOnlineMigrationQueryKey>
  >({
    queryKey: getV2DatabasesDatabaseClusterUuidOnlineMigrationQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.databases[':database_cluster_uuid']['online-migration'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2DatabasesDatabaseClusterUuidOnlineMigration<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2.databases)[':database_cluster_uuid']['online-migration']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v2.databases)[':database_cluster_uuid']['online-migration']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2.databases)[':database_cluster_uuid']['online-migration']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2DatabasesDatabaseClusterUuidOnlineMigrationQueryKey>
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
      ...getV2DatabasesDatabaseClusterUuidOnlineMigrationQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPutV2DatabasesDatabaseClusterUuidOnlineMigrationMutationKey() {
  return ['v2', '/v2/databases/:database_cluster_uuid/online-migration', 'PUT'] as const
}

export function getPutV2DatabasesDatabaseClusterUuidOnlineMigrationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.databases)[':database_cluster_uuid']['online-migration']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v2.databases)[':database_cluster_uuid']['online-migration']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutV2DatabasesDatabaseClusterUuidOnlineMigrationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.databases)[':database_cluster_uuid']['online-migration']['$put']
      >,
    ) {
      return parseResponse(
        client.v2.databases[':database_cluster_uuid']['online-migration'].$put(args, options),
      )
    },
  })
}

export function injectPutV2DatabasesDatabaseClusterUuidOnlineMigration<
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
                  (typeof client.v2.databases)[':database_cluster_uuid']['online-migration']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v2.databases)[':database_cluster_uuid']['online-migration']['$put']
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
    const mutationDefaults = getPutV2DatabasesDatabaseClusterUuidOnlineMigrationMutationOptions<
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

export function getDeleteV2DatabasesDatabaseClusterUuidOnlineMigrationMigrationIdMutationKey() {
  return [
    'v2',
    '/v2/databases/:database_cluster_uuid/online-migration/:migration_id',
    'DELETE',
  ] as const
}

export function getDeleteV2DatabasesDatabaseClusterUuidOnlineMigrationMigrationIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.databases)[':database_cluster_uuid']['online-migration'][':migration_id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.v2.databases)[':database_cluster_uuid']['online-migration'][':migration_id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2DatabasesDatabaseClusterUuidOnlineMigrationMigrationIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.databases)[':database_cluster_uuid']['online-migration'][':migration_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.v2.databases[':database_cluster_uuid']['online-migration'][':migration_id'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function injectDeleteV2DatabasesDatabaseClusterUuidOnlineMigrationMigrationId<
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
                    (typeof client.v2.databases)[':database_cluster_uuid']['online-migration'][':migration_id']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.v2.databases)[':database_cluster_uuid']['online-migration'][':migration_id']['$delete']
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
      getDeleteV2DatabasesDatabaseClusterUuidOnlineMigrationMigrationIdMutationOptions<
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

export function getV2DatabasesDatabaseClusterUuidPoolsQueryKey(
  args: InferRequestType<(typeof client.v2.databases)[':database_cluster_uuid']['pools']['$get']>,
) {
  return ['v2', '/v2/databases/:database_cluster_uuid/pools', args] as const
}

export function getV2DatabasesDatabaseClusterUuidPoolsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.databases)[':database_cluster_uuid']['pools']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.databases)[':database_cluster_uuid']['pools']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v2.databases)[':database_cluster_uuid']['pools']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2DatabasesDatabaseClusterUuidPoolsQueryKey>
  >({
    queryKey: getV2DatabasesDatabaseClusterUuidPoolsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.databases[':database_cluster_uuid'].pools.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2DatabasesDatabaseClusterUuidPools<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.databases)[':database_cluster_uuid']['pools']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v2.databases)[':database_cluster_uuid']['pools']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v2.databases)[':database_cluster_uuid']['pools']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2DatabasesDatabaseClusterUuidPoolsQueryKey>
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
      ...getV2DatabasesDatabaseClusterUuidPoolsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostV2DatabasesDatabaseClusterUuidPoolsMutationKey() {
  return ['v2', '/v2/databases/:database_cluster_uuid/pools', 'POST'] as const
}

export function getPostV2DatabasesDatabaseClusterUuidPoolsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v2.databases)[':database_cluster_uuid']['pools']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.databases)[':database_cluster_uuid']['pools']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2DatabasesDatabaseClusterUuidPoolsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.databases)[':database_cluster_uuid']['pools']['$post']
      >,
    ) {
      return parseResponse(client.v2.databases[':database_cluster_uuid'].pools.$post(args, options))
    },
  })
}

export function injectPostV2DatabasesDatabaseClusterUuidPools<
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
                ReturnType<(typeof client.v2.databases)[':database_cluster_uuid']['pools']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.databases)[':database_cluster_uuid']['pools']['$post']>,
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
    const mutationDefaults = getPostV2DatabasesDatabaseClusterUuidPoolsMutationOptions<
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

export function getV2DatabasesDatabaseClusterUuidPoolsPoolNameQueryKey(
  args: InferRequestType<
    (typeof client.v2.databases)[':database_cluster_uuid']['pools'][':pool_name']['$get']
  >,
) {
  return ['v2', '/v2/databases/:database_cluster_uuid/pools/:pool_name', args] as const
}

export function getV2DatabasesDatabaseClusterUuidPoolsPoolNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2.databases)[':database_cluster_uuid']['pools'][':pool_name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.databases)[':database_cluster_uuid']['pools'][':pool_name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.databases)[':database_cluster_uuid']['pools'][':pool_name']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2DatabasesDatabaseClusterUuidPoolsPoolNameQueryKey>
  >({
    queryKey: getV2DatabasesDatabaseClusterUuidPoolsPoolNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.databases[':database_cluster_uuid'].pools[':pool_name'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2DatabasesDatabaseClusterUuidPoolsPoolName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2.databases)[':database_cluster_uuid']['pools'][':pool_name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v2.databases)[':database_cluster_uuid']['pools'][':pool_name']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2.databases)[':database_cluster_uuid']['pools'][':pool_name']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2DatabasesDatabaseClusterUuidPoolsPoolNameQueryKey>
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
      ...getV2DatabasesDatabaseClusterUuidPoolsPoolNameQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPutV2DatabasesDatabaseClusterUuidPoolsPoolNameMutationKey() {
  return ['v2', '/v2/databases/:database_cluster_uuid/pools/:pool_name', 'PUT'] as const
}

export function getPutV2DatabasesDatabaseClusterUuidPoolsPoolNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.databases)[':database_cluster_uuid']['pools'][':pool_name']['$put']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.v2.databases)[':database_cluster_uuid']['pools'][':pool_name']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutV2DatabasesDatabaseClusterUuidPoolsPoolNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.databases)[':database_cluster_uuid']['pools'][':pool_name']['$put']
      >,
    ) {
      return parseResponse(
        client.v2.databases[':database_cluster_uuid'].pools[':pool_name'].$put(args, options),
      )
    },
  })
}

export function injectPutV2DatabasesDatabaseClusterUuidPoolsPoolName<
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
                    (typeof client.v2.databases)[':database_cluster_uuid']['pools'][':pool_name']['$put']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.v2.databases)[':database_cluster_uuid']['pools'][':pool_name']['$put']
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
    const mutationDefaults = getPutV2DatabasesDatabaseClusterUuidPoolsPoolNameMutationOptions<
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

export function getDeleteV2DatabasesDatabaseClusterUuidPoolsPoolNameMutationKey() {
  return ['v2', '/v2/databases/:database_cluster_uuid/pools/:pool_name', 'DELETE'] as const
}

export function getDeleteV2DatabasesDatabaseClusterUuidPoolsPoolNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.databases)[':database_cluster_uuid']['pools'][':pool_name']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.v2.databases)[':database_cluster_uuid']['pools'][':pool_name']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2DatabasesDatabaseClusterUuidPoolsPoolNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.databases)[':database_cluster_uuid']['pools'][':pool_name']['$delete']
      >,
    ) {
      return parseResponse(
        client.v2.databases[':database_cluster_uuid'].pools[':pool_name'].$delete(args, options),
      )
    },
  })
}

export function injectDeleteV2DatabasesDatabaseClusterUuidPoolsPoolName<
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
                    (typeof client.v2.databases)[':database_cluster_uuid']['pools'][':pool_name']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.v2.databases)[':database_cluster_uuid']['pools'][':pool_name']['$delete']
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
    const mutationDefaults = getDeleteV2DatabasesDatabaseClusterUuidPoolsPoolNameMutationOptions<
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

export function getV2DatabasesDatabaseClusterUuidReplicasQueryKey(
  args: InferRequestType<
    (typeof client.v2.databases)[':database_cluster_uuid']['replicas']['$get']
  >,
) {
  return ['v2', '/v2/databases/:database_cluster_uuid/replicas', args] as const
}

export function getV2DatabasesDatabaseClusterUuidReplicasQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2.databases)[':database_cluster_uuid']['replicas']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.databases)[':database_cluster_uuid']['replicas']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v2.databases)[':database_cluster_uuid']['replicas']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2DatabasesDatabaseClusterUuidReplicasQueryKey>
  >({
    queryKey: getV2DatabasesDatabaseClusterUuidReplicasQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.databases[':database_cluster_uuid'].replicas.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2DatabasesDatabaseClusterUuidReplicas<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2.databases)[':database_cluster_uuid']['replicas']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v2.databases)[':database_cluster_uuid']['replicas']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2.databases)[':database_cluster_uuid']['replicas']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2DatabasesDatabaseClusterUuidReplicasQueryKey>
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
      ...getV2DatabasesDatabaseClusterUuidReplicasQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPostV2DatabasesDatabaseClusterUuidReplicasMutationKey() {
  return ['v2', '/v2/databases/:database_cluster_uuid/replicas', 'POST'] as const
}

export function getPostV2DatabasesDatabaseClusterUuidReplicasMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v2.databases)[':database_cluster_uuid']['replicas']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.databases)[':database_cluster_uuid']['replicas']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2DatabasesDatabaseClusterUuidReplicasMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.databases)[':database_cluster_uuid']['replicas']['$post']
      >,
    ) {
      return parseResponse(
        client.v2.databases[':database_cluster_uuid'].replicas.$post(args, options),
      )
    },
  })
}

export function injectPostV2DatabasesDatabaseClusterUuidReplicas<
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
                  (typeof client.v2.databases)[':database_cluster_uuid']['replicas']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v2.databases)[':database_cluster_uuid']['replicas']['$post']
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
    const mutationDefaults = getPostV2DatabasesDatabaseClusterUuidReplicasMutationOptions<
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

export function getV2DatabasesDatabaseClusterUuidReplicasReplicaNameQueryKey(
  args: InferRequestType<
    (typeof client.v2.databases)[':database_cluster_uuid']['replicas'][':replica_name']['$get']
  >,
) {
  return ['v2', '/v2/databases/:database_cluster_uuid/replicas/:replica_name', args] as const
}

export function getV2DatabasesDatabaseClusterUuidReplicasReplicaNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2.databases)[':database_cluster_uuid']['replicas'][':replica_name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.databases)[':database_cluster_uuid']['replicas'][':replica_name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.databases)[':database_cluster_uuid']['replicas'][':replica_name']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2DatabasesDatabaseClusterUuidReplicasReplicaNameQueryKey>
  >({
    queryKey: getV2DatabasesDatabaseClusterUuidReplicasReplicaNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.databases[':database_cluster_uuid'].replicas[':replica_name'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2DatabasesDatabaseClusterUuidReplicasReplicaName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2.databases)[':database_cluster_uuid']['replicas'][':replica_name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v2.databases)[':database_cluster_uuid']['replicas'][':replica_name']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2.databases)[':database_cluster_uuid']['replicas'][':replica_name']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2DatabasesDatabaseClusterUuidReplicasReplicaNameQueryKey>
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
      ...getV2DatabasesDatabaseClusterUuidReplicasReplicaNameQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getDeleteV2DatabasesDatabaseClusterUuidReplicasReplicaNameMutationKey() {
  return ['v2', '/v2/databases/:database_cluster_uuid/replicas/:replica_name', 'DELETE'] as const
}

export function getDeleteV2DatabasesDatabaseClusterUuidReplicasReplicaNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.databases)[':database_cluster_uuid']['replicas'][':replica_name']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.v2.databases)[':database_cluster_uuid']['replicas'][':replica_name']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2DatabasesDatabaseClusterUuidReplicasReplicaNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.databases)[':database_cluster_uuid']['replicas'][':replica_name']['$delete']
      >,
    ) {
      return parseResponse(
        client.v2.databases[':database_cluster_uuid'].replicas[':replica_name'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function injectDeleteV2DatabasesDatabaseClusterUuidReplicasReplicaName<
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
                    (typeof client.v2.databases)[':database_cluster_uuid']['replicas'][':replica_name']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.v2.databases)[':database_cluster_uuid']['replicas'][':replica_name']['$delete']
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
      getDeleteV2DatabasesDatabaseClusterUuidReplicasReplicaNameMutationOptions<
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

export function getPutV2DatabasesDatabaseClusterUuidReplicasReplicaNamePromoteMutationKey() {
  return [
    'v2',
    '/v2/databases/:database_cluster_uuid/replicas/:replica_name/promote',
    'PUT',
  ] as const
}

export function getPutV2DatabasesDatabaseClusterUuidReplicasReplicaNamePromoteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.databases)[':database_cluster_uuid']['replicas'][':replica_name']['promote']['$put']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.v2.databases)[':database_cluster_uuid']['replicas'][':replica_name']['promote']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutV2DatabasesDatabaseClusterUuidReplicasReplicaNamePromoteMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.databases)[':database_cluster_uuid']['replicas'][':replica_name']['promote']['$put']
      >,
    ) {
      return parseResponse(
        client.v2.databases[':database_cluster_uuid'].replicas[':replica_name'].promote.$put(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPutV2DatabasesDatabaseClusterUuidReplicasReplicaNamePromote<
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
                    (typeof client.v2.databases)[':database_cluster_uuid']['replicas'][':replica_name']['promote']['$put']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.v2.databases)[':database_cluster_uuid']['replicas'][':replica_name']['promote']['$put']
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
      getPutV2DatabasesDatabaseClusterUuidReplicasReplicaNamePromoteMutationOptions<
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

export function getPutV2DatabasesDatabaseClusterUuidResizeMutationKey() {
  return ['v2', '/v2/databases/:database_cluster_uuid/resize', 'PUT'] as const
}

export function getPutV2DatabasesDatabaseClusterUuidResizeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v2.databases)[':database_cluster_uuid']['resize']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.databases)[':database_cluster_uuid']['resize']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV2DatabasesDatabaseClusterUuidResizeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.databases)[':database_cluster_uuid']['resize']['$put']
      >,
    ) {
      return parseResponse(client.v2.databases[':database_cluster_uuid'].resize.$put(args, options))
    },
  })
}

export function injectPutV2DatabasesDatabaseClusterUuidResize<
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
                ReturnType<(typeof client.v2.databases)[':database_cluster_uuid']['resize']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.databases)[':database_cluster_uuid']['resize']['$put']>,
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
    const mutationDefaults = getPutV2DatabasesDatabaseClusterUuidResizeMutationOptions<
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

export function getV2DatabasesDatabaseClusterUuidSqlModeQueryKey(
  args: InferRequestType<
    (typeof client.v2.databases)[':database_cluster_uuid']['sql_mode']['$get']
  >,
) {
  return ['v2', '/v2/databases/:database_cluster_uuid/sql_mode', args] as const
}

export function getV2DatabasesDatabaseClusterUuidSqlModeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2.databases)[':database_cluster_uuid']['sql_mode']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.databases)[':database_cluster_uuid']['sql_mode']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v2.databases)[':database_cluster_uuid']['sql_mode']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2DatabasesDatabaseClusterUuidSqlModeQueryKey>
  >({
    queryKey: getV2DatabasesDatabaseClusterUuidSqlModeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.databases[':database_cluster_uuid'].sql_mode.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2DatabasesDatabaseClusterUuidSqlMode<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2.databases)[':database_cluster_uuid']['sql_mode']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v2.databases)[':database_cluster_uuid']['sql_mode']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2.databases)[':database_cluster_uuid']['sql_mode']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2DatabasesDatabaseClusterUuidSqlModeQueryKey>
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
      ...getV2DatabasesDatabaseClusterUuidSqlModeQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPutV2DatabasesDatabaseClusterUuidSqlModeMutationKey() {
  return ['v2', '/v2/databases/:database_cluster_uuid/sql_mode', 'PUT'] as const
}

export function getPutV2DatabasesDatabaseClusterUuidSqlModeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.databases)[':database_cluster_uuid']['sql_mode']['$put']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v2.databases)[':database_cluster_uuid']['sql_mode']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV2DatabasesDatabaseClusterUuidSqlModeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.databases)[':database_cluster_uuid']['sql_mode']['$put']
      >,
    ) {
      return parseResponse(
        client.v2.databases[':database_cluster_uuid'].sql_mode.$put(args, options),
      )
    },
  })
}

export function injectPutV2DatabasesDatabaseClusterUuidSqlMode<
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
                    (typeof client.v2.databases)[':database_cluster_uuid']['sql_mode']['$put']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.v2.databases)[':database_cluster_uuid']['sql_mode']['$put']
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
    const mutationDefaults = getPutV2DatabasesDatabaseClusterUuidSqlModeMutationOptions<
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

export function getPutV2DatabasesDatabaseClusterUuidUpgradeMutationKey() {
  return ['v2', '/v2/databases/:database_cluster_uuid/upgrade', 'PUT'] as const
}

export function getPutV2DatabasesDatabaseClusterUuidUpgradeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.databases)[':database_cluster_uuid']['upgrade']['$put']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v2.databases)[':database_cluster_uuid']['upgrade']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV2DatabasesDatabaseClusterUuidUpgradeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.databases)[':database_cluster_uuid']['upgrade']['$put']
      >,
    ) {
      return parseResponse(
        client.v2.databases[':database_cluster_uuid'].upgrade.$put(args, options),
      )
    },
  })
}

export function injectPutV2DatabasesDatabaseClusterUuidUpgrade<
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
                    (typeof client.v2.databases)[':database_cluster_uuid']['upgrade']['$put']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.v2.databases)[':database_cluster_uuid']['upgrade']['$put']>,
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
    const mutationDefaults = getPutV2DatabasesDatabaseClusterUuidUpgradeMutationOptions<
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

export function getV2DatabasesDatabaseClusterUuidUsersQueryKey(
  args: InferRequestType<(typeof client.v2.databases)[':database_cluster_uuid']['users']['$get']>,
) {
  return ['v2', '/v2/databases/:database_cluster_uuid/users', args] as const
}

export function getV2DatabasesDatabaseClusterUuidUsersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.databases)[':database_cluster_uuid']['users']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.databases)[':database_cluster_uuid']['users']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v2.databases)[':database_cluster_uuid']['users']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2DatabasesDatabaseClusterUuidUsersQueryKey>
  >({
    queryKey: getV2DatabasesDatabaseClusterUuidUsersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.databases[':database_cluster_uuid'].users.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2DatabasesDatabaseClusterUuidUsers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.databases)[':database_cluster_uuid']['users']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v2.databases)[':database_cluster_uuid']['users']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v2.databases)[':database_cluster_uuid']['users']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2DatabasesDatabaseClusterUuidUsersQueryKey>
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
      ...getV2DatabasesDatabaseClusterUuidUsersQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostV2DatabasesDatabaseClusterUuidUsersMutationKey() {
  return ['v2', '/v2/databases/:database_cluster_uuid/users', 'POST'] as const
}

export function getPostV2DatabasesDatabaseClusterUuidUsersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v2.databases)[':database_cluster_uuid']['users']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.databases)[':database_cluster_uuid']['users']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2DatabasesDatabaseClusterUuidUsersMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.databases)[':database_cluster_uuid']['users']['$post']
      >,
    ) {
      return parseResponse(client.v2.databases[':database_cluster_uuid'].users.$post(args, options))
    },
  })
}

export function injectPostV2DatabasesDatabaseClusterUuidUsers<
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
                ReturnType<(typeof client.v2.databases)[':database_cluster_uuid']['users']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.databases)[':database_cluster_uuid']['users']['$post']>,
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
    const mutationDefaults = getPostV2DatabasesDatabaseClusterUuidUsersMutationOptions<
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

export function getV2DatabasesDatabaseClusterUuidUsersUsernameQueryKey(
  args: InferRequestType<
    (typeof client.v2.databases)[':database_cluster_uuid']['users'][':username']['$get']
  >,
) {
  return ['v2', '/v2/databases/:database_cluster_uuid/users/:username', args] as const
}

export function getV2DatabasesDatabaseClusterUuidUsersUsernameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2.databases)[':database_cluster_uuid']['users'][':username']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.databases)[':database_cluster_uuid']['users'][':username']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.databases)[':database_cluster_uuid']['users'][':username']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2DatabasesDatabaseClusterUuidUsersUsernameQueryKey>
  >({
    queryKey: getV2DatabasesDatabaseClusterUuidUsersUsernameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.databases[':database_cluster_uuid'].users[':username'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2DatabasesDatabaseClusterUuidUsersUsername<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2.databases)[':database_cluster_uuid']['users'][':username']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v2.databases)[':database_cluster_uuid']['users'][':username']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2.databases)[':database_cluster_uuid']['users'][':username']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2DatabasesDatabaseClusterUuidUsersUsernameQueryKey>
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
      ...getV2DatabasesDatabaseClusterUuidUsersUsernameQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getDeleteV2DatabasesDatabaseClusterUuidUsersUsernameMutationKey() {
  return ['v2', '/v2/databases/:database_cluster_uuid/users/:username', 'DELETE'] as const
}

export function getDeleteV2DatabasesDatabaseClusterUuidUsersUsernameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.databases)[':database_cluster_uuid']['users'][':username']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.v2.databases)[':database_cluster_uuid']['users'][':username']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2DatabasesDatabaseClusterUuidUsersUsernameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.databases)[':database_cluster_uuid']['users'][':username']['$delete']
      >,
    ) {
      return parseResponse(
        client.v2.databases[':database_cluster_uuid'].users[':username'].$delete(args, options),
      )
    },
  })
}

export function injectDeleteV2DatabasesDatabaseClusterUuidUsersUsername<
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
                    (typeof client.v2.databases)[':database_cluster_uuid']['users'][':username']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.v2.databases)[':database_cluster_uuid']['users'][':username']['$delete']
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
    const mutationDefaults = getDeleteV2DatabasesDatabaseClusterUuidUsersUsernameMutationOptions<
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

export function getPostV2DatabasesDatabaseClusterUuidUsersUsernameResetAuthMutationKey() {
  return ['v2', '/v2/databases/:database_cluster_uuid/users/:username/reset_auth', 'POST'] as const
}

export function getPostV2DatabasesDatabaseClusterUuidUsersUsernameResetAuthMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.databases)[':database_cluster_uuid']['users'][':username']['reset_auth']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v2.databases)[':database_cluster_uuid']['users'][':username']['reset_auth']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV2DatabasesDatabaseClusterUuidUsersUsernameResetAuthMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.databases)[':database_cluster_uuid']['users'][':username']['reset_auth']['$post']
      >,
    ) {
      return parseResponse(
        client.v2.databases[':database_cluster_uuid'].users[':username'].reset_auth.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostV2DatabasesDatabaseClusterUuidUsersUsernameResetAuth<
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
                  (typeof client.v2.databases)[':database_cluster_uuid']['users'][':username']['reset_auth']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v2.databases)[':database_cluster_uuid']['users'][':username']['reset_auth']['$post']
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
      getPostV2DatabasesDatabaseClusterUuidUsersUsernameResetAuthMutationOptions<
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

export function getV2DomainsQueryKey(args: InferRequestType<typeof client.v2.domains.$get>) {
  return ['v2', '/v2/domains', args] as const
}

export function getV2DomainsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.domains.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v2.domains.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.domains.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV2DomainsQueryKey>
  >({
    queryKey: getV2DomainsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.domains.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV2Domains<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.domains.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v2.domains.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.domains.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV2DomainsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV2DomainsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostV2DomainsMutationKey() {
  return ['v2', '/v2/domains', 'POST'] as const
}

export function getPostV2DomainsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.domains.$post>>>>>,
    TError,
    InferRequestType<typeof client.v2.domains.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2DomainsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.domains.$post>) {
      return parseResponse(client.v2.domains.$post(args, options))
    },
  })
}

export function injectPostV2Domains<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.domains.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v2.domains.$post>,
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
    const mutationDefaults = getPostV2DomainsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getV2DomainsDomainNameQueryKey(
  args: InferRequestType<(typeof client.v2.domains)[':domain_name']['$get']>,
) {
  return ['v2', '/v2/domains/:domain_name', args] as const
}

export function getV2DomainsDomainNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.domains)[':domain_name']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.domains)[':domain_name']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.domains)[':domain_name']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2DomainsDomainNameQueryKey>
  >({
    queryKey: getV2DomainsDomainNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.domains[':domain_name'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2DomainsDomainName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.domains)[':domain_name']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2.domains)[':domain_name']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.domains)[':domain_name']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2DomainsDomainNameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV2DomainsDomainNameQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getDeleteV2DomainsDomainNameMutationKey() {
  return ['v2', '/v2/domains/:domain_name', 'DELETE'] as const
}

export function getDeleteV2DomainsDomainNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.domains)[':domain_name']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v2.domains)[':domain_name']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2DomainsDomainNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.domains)[':domain_name']['$delete']>,
    ) {
      return parseResponse(client.v2.domains[':domain_name'].$delete(args, options))
    },
  })
}

export function injectDeleteV2DomainsDomainName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.domains)[':domain_name']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.v2.domains)[':domain_name']['$delete']>,
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
    const mutationDefaults = getDeleteV2DomainsDomainNameMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getV2DomainsDomainNameRecordsQueryKey(
  args: InferRequestType<(typeof client.v2.domains)[':domain_name']['records']['$get']>,
) {
  return ['v2', '/v2/domains/:domain_name/records', args] as const
}

export function getV2DomainsDomainNameRecordsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.domains)[':domain_name']['records']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.domains)[':domain_name']['records']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.domains)[':domain_name']['records']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2DomainsDomainNameRecordsQueryKey>
  >({
    queryKey: getV2DomainsDomainNameRecordsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.domains[':domain_name'].records.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2DomainsDomainNameRecords<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.domains)[':domain_name']['records']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2.domains)[':domain_name']['records']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.domains)[':domain_name']['records']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2DomainsDomainNameRecordsQueryKey>
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
      ...getV2DomainsDomainNameRecordsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostV2DomainsDomainNameRecordsMutationKey() {
  return ['v2', '/v2/domains/:domain_name/records', 'POST'] as const
}

export function getPostV2DomainsDomainNameRecordsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.domains)[':domain_name']['records']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.domains)[':domain_name']['records']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2DomainsDomainNameRecordsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.domains)[':domain_name']['records']['$post']>,
    ) {
      return parseResponse(client.v2.domains[':domain_name'].records.$post(args, options))
    },
  })
}

export function injectPostV2DomainsDomainNameRecords<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.domains)[':domain_name']['records']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.domains)[':domain_name']['records']['$post']>,
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
    const mutationDefaults = getPostV2DomainsDomainNameRecordsMutationOptions<
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

export function getV2DomainsDomainNameRecordsDomainRecordIdQueryKey(
  args: InferRequestType<
    (typeof client.v2.domains)[':domain_name']['records'][':domain_record_id']['$get']
  >,
) {
  return ['v2', '/v2/domains/:domain_name/records/:domain_record_id', args] as const
}

export function getV2DomainsDomainNameRecordsDomainRecordIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2.domains)[':domain_name']['records'][':domain_record_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.domains)[':domain_name']['records'][':domain_record_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.domains)[':domain_name']['records'][':domain_record_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2DomainsDomainNameRecordsDomainRecordIdQueryKey>
  >({
    queryKey: getV2DomainsDomainNameRecordsDomainRecordIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.domains[':domain_name'].records[':domain_record_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2DomainsDomainNameRecordsDomainRecordId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2.domains)[':domain_name']['records'][':domain_record_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v2.domains)[':domain_name']['records'][':domain_record_id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2.domains)[':domain_name']['records'][':domain_record_id']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2DomainsDomainNameRecordsDomainRecordIdQueryKey>
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
      ...getV2DomainsDomainNameRecordsDomainRecordIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPutV2DomainsDomainNameRecordsDomainRecordIdMutationKey() {
  return ['v2', '/v2/domains/:domain_name/records/:domain_record_id', 'PUT'] as const
}

export function getPutV2DomainsDomainNameRecordsDomainRecordIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.domains)[':domain_name']['records'][':domain_record_id']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v2.domains)[':domain_name']['records'][':domain_record_id']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutV2DomainsDomainNameRecordsDomainRecordIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.domains)[':domain_name']['records'][':domain_record_id']['$put']
      >,
    ) {
      return parseResponse(
        client.v2.domains[':domain_name'].records[':domain_record_id'].$put(args, options),
      )
    },
  })
}

export function injectPutV2DomainsDomainNameRecordsDomainRecordId<
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
                  (typeof client.v2.domains)[':domain_name']['records'][':domain_record_id']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v2.domains)[':domain_name']['records'][':domain_record_id']['$put']
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
    const mutationDefaults = getPutV2DomainsDomainNameRecordsDomainRecordIdMutationOptions<
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

export function getDeleteV2DomainsDomainNameRecordsDomainRecordIdMutationKey() {
  return ['v2', '/v2/domains/:domain_name/records/:domain_record_id', 'DELETE'] as const
}

export function getDeleteV2DomainsDomainNameRecordsDomainRecordIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.domains)[':domain_name']['records'][':domain_record_id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.v2.domains)[':domain_name']['records'][':domain_record_id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2DomainsDomainNameRecordsDomainRecordIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.domains)[':domain_name']['records'][':domain_record_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.v2.domains[':domain_name'].records[':domain_record_id'].$delete(args, options),
      )
    },
  })
}

export function injectDeleteV2DomainsDomainNameRecordsDomainRecordId<
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
                    (typeof client.v2.domains)[':domain_name']['records'][':domain_record_id']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.v2.domains)[':domain_name']['records'][':domain_record_id']['$delete']
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
    const mutationDefaults = getDeleteV2DomainsDomainNameRecordsDomainRecordIdMutationOptions<
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

export function getPatchV2DomainsDomainNameRecordsDomainRecordIdMutationKey() {
  return ['v2', '/v2/domains/:domain_name/records/:domain_record_id', 'PATCH'] as const
}

export function getPatchV2DomainsDomainNameRecordsDomainRecordIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.domains)[':domain_name']['records'][':domain_record_id']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v2.domains)[':domain_name']['records'][':domain_record_id']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchV2DomainsDomainNameRecordsDomainRecordIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.domains)[':domain_name']['records'][':domain_record_id']['$patch']
      >,
    ) {
      return parseResponse(
        client.v2.domains[':domain_name'].records[':domain_record_id'].$patch(args, options),
      )
    },
  })
}

export function injectPatchV2DomainsDomainNameRecordsDomainRecordId<
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
                  (typeof client.v2.domains)[':domain_name']['records'][':domain_record_id']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v2.domains)[':domain_name']['records'][':domain_record_id']['$patch']
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
    const mutationDefaults = getPatchV2DomainsDomainNameRecordsDomainRecordIdMutationOptions<
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

export function getV2DropletsQueryKey(args: InferRequestType<typeof client.v2.droplets.$get>) {
  return ['v2', '/v2/droplets', args] as const
}

export function getV2DropletsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.droplets.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v2.droplets.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.droplets.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV2DropletsQueryKey>
  >({
    queryKey: getV2DropletsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.droplets.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV2Droplets<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.droplets.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v2.droplets.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.droplets.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV2DropletsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV2DropletsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostV2DropletsMutationKey() {
  return ['v2', '/v2/droplets', 'POST'] as const
}

export function getPostV2DropletsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.droplets.$post>>>>>,
    TError,
    InferRequestType<typeof client.v2.droplets.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2DropletsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.droplets.$post>) {
      return parseResponse(client.v2.droplets.$post(args, options))
    },
  })
}

export function injectPostV2Droplets<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.droplets.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v2.droplets.$post>,
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
    const mutationDefaults = getPostV2DropletsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteV2DropletsMutationKey() {
  return ['v2', '/v2/droplets', 'DELETE'] as const
}

export function getDeleteV2DropletsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.droplets.$delete>>>>
      >
    | undefined,
    TError,
    InferRequestType<typeof client.v2.droplets.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2DropletsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.droplets.$delete>) {
      return parseResponse(client.v2.droplets.$delete(args, options))
    },
  })
}

export function injectDeleteV2Droplets<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.droplets.$delete>>>>
          >
        | undefined,
        TError,
        InferRequestType<typeof client.v2.droplets.$delete>,
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
    const mutationDefaults = getDeleteV2DropletsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostV2DropletsActionsMutationKey() {
  return ['v2', '/v2/droplets/actions', 'POST'] as const
}

export function getPostV2DropletsActionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.droplets.actions.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v2.droplets.actions.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2DropletsActionsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.droplets.actions.$post>) {
      return parseResponse(client.v2.droplets.actions.$post(args, options))
    },
  })
}

export function injectPostV2DropletsActions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v2.droplets.actions.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v2.droplets.actions.$post>,
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
    const mutationDefaults = getPostV2DropletsActionsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getV2DropletsDropletIdQueryKey(
  args: InferRequestType<(typeof client.v2.droplets)[':droplet_id']['$get']>,
) {
  return ['v2', '/v2/droplets/:droplet_id', args] as const
}

export function getV2DropletsDropletIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.droplets)[':droplet_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.droplets)[':droplet_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.droplets)[':droplet_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2DropletsDropletIdQueryKey>
  >({
    queryKey: getV2DropletsDropletIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.droplets[':droplet_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2DropletsDropletId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.droplets)[':droplet_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2.droplets)[':droplet_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.droplets)[':droplet_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2DropletsDropletIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV2DropletsDropletIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getDeleteV2DropletsDropletIdMutationKey() {
  return ['v2', '/v2/droplets/:droplet_id', 'DELETE'] as const
}

export function getDeleteV2DropletsDropletIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.droplets)[':droplet_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v2.droplets)[':droplet_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2DropletsDropletIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.droplets)[':droplet_id']['$delete']>,
    ) {
      return parseResponse(client.v2.droplets[':droplet_id'].$delete(args, options))
    },
  })
}

export function injectDeleteV2DropletsDropletId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.droplets)[':droplet_id']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.v2.droplets)[':droplet_id']['$delete']>,
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
    const mutationDefaults = getDeleteV2DropletsDropletIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getV2DropletsDropletIdActionsQueryKey(
  args: InferRequestType<(typeof client.v2.droplets)[':droplet_id']['actions']['$get']>,
) {
  return ['v2', '/v2/droplets/:droplet_id/actions', args] as const
}

export function getV2DropletsDropletIdActionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.droplets)[':droplet_id']['actions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.droplets)[':droplet_id']['actions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.droplets)[':droplet_id']['actions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2DropletsDropletIdActionsQueryKey>
  >({
    queryKey: getV2DropletsDropletIdActionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.droplets[':droplet_id'].actions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2DropletsDropletIdActions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.droplets)[':droplet_id']['actions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2.droplets)[':droplet_id']['actions']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.droplets)[':droplet_id']['actions']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2DropletsDropletIdActionsQueryKey>
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
      ...getV2DropletsDropletIdActionsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostV2DropletsDropletIdActionsMutationKey() {
  return ['v2', '/v2/droplets/:droplet_id/actions', 'POST'] as const
}

export function getPostV2DropletsDropletIdActionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.droplets)[':droplet_id']['actions']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.droplets)[':droplet_id']['actions']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2DropletsDropletIdActionsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.droplets)[':droplet_id']['actions']['$post']>,
    ) {
      return parseResponse(client.v2.droplets[':droplet_id'].actions.$post(args, options))
    },
  })
}

export function injectPostV2DropletsDropletIdActions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.droplets)[':droplet_id']['actions']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.droplets)[':droplet_id']['actions']['$post']>,
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
    const mutationDefaults = getPostV2DropletsDropletIdActionsMutationOptions<
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

export function getV2DropletsDropletIdActionsActionIdQueryKey(
  args: InferRequestType<
    (typeof client.v2.droplets)[':droplet_id']['actions'][':action_id']['$get']
  >,
) {
  return ['v2', '/v2/droplets/:droplet_id/actions/:action_id', args] as const
}

export function getV2DropletsDropletIdActionsActionIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2.droplets)[':droplet_id']['actions'][':action_id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.droplets)[':droplet_id']['actions'][':action_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v2.droplets)[':droplet_id']['actions'][':action_id']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2DropletsDropletIdActionsActionIdQueryKey>
  >({
    queryKey: getV2DropletsDropletIdActionsActionIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.droplets[':droplet_id'].actions[':action_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2DropletsDropletIdActionsActionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2.droplets)[':droplet_id']['actions'][':action_id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v2.droplets)[':droplet_id']['actions'][':action_id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2.droplets)[':droplet_id']['actions'][':action_id']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2DropletsDropletIdActionsActionIdQueryKey>
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
      ...getV2DropletsDropletIdActionsActionIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getV2DropletsDropletIdBackupsQueryKey(
  args: InferRequestType<(typeof client.v2.droplets)[':droplet_id']['backups']['$get']>,
) {
  return ['v2', '/v2/droplets/:droplet_id/backups', args] as const
}

export function getV2DropletsDropletIdBackupsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.droplets)[':droplet_id']['backups']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.droplets)[':droplet_id']['backups']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.droplets)[':droplet_id']['backups']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2DropletsDropletIdBackupsQueryKey>
  >({
    queryKey: getV2DropletsDropletIdBackupsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.droplets[':droplet_id'].backups.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2DropletsDropletIdBackups<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.droplets)[':droplet_id']['backups']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2.droplets)[':droplet_id']['backups']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.droplets)[':droplet_id']['backups']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2DropletsDropletIdBackupsQueryKey>
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
      ...getV2DropletsDropletIdBackupsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getV2DropletsDropletIdDestroyWithAssociatedResourcesQueryKey(
  args: InferRequestType<
    (typeof client.v2.droplets)[':droplet_id']['destroy_with_associated_resources']['$get']
  >,
) {
  return ['v2', '/v2/droplets/:droplet_id/destroy_with_associated_resources', args] as const
}

export function getV2DropletsDropletIdDestroyWithAssociatedResourcesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2.droplets)[':droplet_id']['destroy_with_associated_resources']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.droplets)[':droplet_id']['destroy_with_associated_resources']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.droplets)[':droplet_id']['destroy_with_associated_resources']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2DropletsDropletIdDestroyWithAssociatedResourcesQueryKey>
  >({
    queryKey: getV2DropletsDropletIdDestroyWithAssociatedResourcesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.droplets[':droplet_id'].destroy_with_associated_resources.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2DropletsDropletIdDestroyWithAssociatedResources<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2.droplets)[':droplet_id']['destroy_with_associated_resources']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v2.droplets)[':droplet_id']['destroy_with_associated_resources']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2.droplets)[':droplet_id']['destroy_with_associated_resources']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2DropletsDropletIdDestroyWithAssociatedResourcesQueryKey>
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
      ...getV2DropletsDropletIdDestroyWithAssociatedResourcesQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getDeleteV2DropletsDropletIdDestroyWithAssociatedResourcesDangerousMutationKey() {
  return [
    'v2',
    '/v2/droplets/:droplet_id/destroy_with_associated_resources/dangerous',
    'DELETE',
  ] as const
}

export function getDeleteV2DropletsDropletIdDestroyWithAssociatedResourcesDangerousMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.droplets)[':droplet_id']['destroy_with_associated_resources']['dangerous']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v2.droplets)[':droplet_id']['destroy_with_associated_resources']['dangerous']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2DropletsDropletIdDestroyWithAssociatedResourcesDangerousMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.droplets)[':droplet_id']['destroy_with_associated_resources']['dangerous']['$delete']
      >,
    ) {
      return parseResponse(
        client.v2.droplets[':droplet_id'].destroy_with_associated_resources.dangerous.$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function injectDeleteV2DropletsDropletIdDestroyWithAssociatedResourcesDangerous<
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
                  (typeof client.v2.droplets)[':droplet_id']['destroy_with_associated_resources']['dangerous']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v2.droplets)[':droplet_id']['destroy_with_associated_resources']['dangerous']['$delete']
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
      getDeleteV2DropletsDropletIdDestroyWithAssociatedResourcesDangerousMutationOptions<
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

export function getPostV2DropletsDropletIdDestroyWithAssociatedResourcesRetryMutationKey() {
  return ['v2', '/v2/droplets/:droplet_id/destroy_with_associated_resources/retry', 'POST'] as const
}

export function getPostV2DropletsDropletIdDestroyWithAssociatedResourcesRetryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.droplets)[':droplet_id']['destroy_with_associated_resources']['retry']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v2.droplets)[':droplet_id']['destroy_with_associated_resources']['retry']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV2DropletsDropletIdDestroyWithAssociatedResourcesRetryMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.droplets)[':droplet_id']['destroy_with_associated_resources']['retry']['$post']
      >,
    ) {
      return parseResponse(
        client.v2.droplets[':droplet_id'].destroy_with_associated_resources.retry.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostV2DropletsDropletIdDestroyWithAssociatedResourcesRetry<
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
                  (typeof client.v2.droplets)[':droplet_id']['destroy_with_associated_resources']['retry']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v2.droplets)[':droplet_id']['destroy_with_associated_resources']['retry']['$post']
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
      getPostV2DropletsDropletIdDestroyWithAssociatedResourcesRetryMutationOptions<
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

export function getDeleteV2DropletsDropletIdDestroyWithAssociatedResourcesSelectiveMutationKey() {
  return [
    'v2',
    '/v2/droplets/:droplet_id/destroy_with_associated_resources/selective',
    'DELETE',
  ] as const
}

export function getDeleteV2DropletsDropletIdDestroyWithAssociatedResourcesSelectiveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.droplets)[':droplet_id']['destroy_with_associated_resources']['selective']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v2.droplets)[':droplet_id']['destroy_with_associated_resources']['selective']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2DropletsDropletIdDestroyWithAssociatedResourcesSelectiveMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.droplets)[':droplet_id']['destroy_with_associated_resources']['selective']['$delete']
      >,
    ) {
      return parseResponse(
        client.v2.droplets[':droplet_id'].destroy_with_associated_resources.selective.$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function injectDeleteV2DropletsDropletIdDestroyWithAssociatedResourcesSelective<
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
                  (typeof client.v2.droplets)[':droplet_id']['destroy_with_associated_resources']['selective']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v2.droplets)[':droplet_id']['destroy_with_associated_resources']['selective']['$delete']
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
      getDeleteV2DropletsDropletIdDestroyWithAssociatedResourcesSelectiveMutationOptions<
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

export function getV2DropletsDropletIdDestroyWithAssociatedResourcesStatusQueryKey(
  args: InferRequestType<
    (typeof client.v2.droplets)[':droplet_id']['destroy_with_associated_resources']['status']['$get']
  >,
) {
  return ['v2', '/v2/droplets/:droplet_id/destroy_with_associated_resources/status', args] as const
}

export function getV2DropletsDropletIdDestroyWithAssociatedResourcesStatusQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2.droplets)[':droplet_id']['destroy_with_associated_resources']['status']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.droplets)[':droplet_id']['destroy_with_associated_resources']['status']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.droplets)[':droplet_id']['destroy_with_associated_resources']['status']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2DropletsDropletIdDestroyWithAssociatedResourcesStatusQueryKey>
  >({
    queryKey: getV2DropletsDropletIdDestroyWithAssociatedResourcesStatusQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.droplets[':droplet_id'].destroy_with_associated_resources.status.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2DropletsDropletIdDestroyWithAssociatedResourcesStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2.droplets)[':droplet_id']['destroy_with_associated_resources']['status']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v2.droplets)[':droplet_id']['destroy_with_associated_resources']['status']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2.droplets)[':droplet_id']['destroy_with_associated_resources']['status']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2DropletsDropletIdDestroyWithAssociatedResourcesStatusQueryKey>
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
      ...getV2DropletsDropletIdDestroyWithAssociatedResourcesStatusQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getV2DropletsDropletIdFirewallsQueryKey(
  args: InferRequestType<(typeof client.v2.droplets)[':droplet_id']['firewalls']['$get']>,
) {
  return ['v2', '/v2/droplets/:droplet_id/firewalls', args] as const
}

export function getV2DropletsDropletIdFirewallsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.droplets)[':droplet_id']['firewalls']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.droplets)[':droplet_id']['firewalls']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.droplets)[':droplet_id']['firewalls']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2DropletsDropletIdFirewallsQueryKey>
  >({
    queryKey: getV2DropletsDropletIdFirewallsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.droplets[':droplet_id'].firewalls.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2DropletsDropletIdFirewalls<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.droplets)[':droplet_id']['firewalls']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2.droplets)[':droplet_id']['firewalls']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.droplets)[':droplet_id']['firewalls']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2DropletsDropletIdFirewallsQueryKey>
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
      ...getV2DropletsDropletIdFirewallsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getV2DropletsDropletIdKernelsQueryKey(
  args: InferRequestType<(typeof client.v2.droplets)[':droplet_id']['kernels']['$get']>,
) {
  return ['v2', '/v2/droplets/:droplet_id/kernels', args] as const
}

export function getV2DropletsDropletIdKernelsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.droplets)[':droplet_id']['kernels']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.droplets)[':droplet_id']['kernels']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.droplets)[':droplet_id']['kernels']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2DropletsDropletIdKernelsQueryKey>
  >({
    queryKey: getV2DropletsDropletIdKernelsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.droplets[':droplet_id'].kernels.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2DropletsDropletIdKernels<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.droplets)[':droplet_id']['kernels']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2.droplets)[':droplet_id']['kernels']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.droplets)[':droplet_id']['kernels']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2DropletsDropletIdKernelsQueryKey>
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
      ...getV2DropletsDropletIdKernelsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getV2DropletsDropletIdNeighborsQueryKey(
  args: InferRequestType<(typeof client.v2.droplets)[':droplet_id']['neighbors']['$get']>,
) {
  return ['v2', '/v2/droplets/:droplet_id/neighbors', args] as const
}

export function getV2DropletsDropletIdNeighborsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.droplets)[':droplet_id']['neighbors']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.droplets)[':droplet_id']['neighbors']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.droplets)[':droplet_id']['neighbors']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2DropletsDropletIdNeighborsQueryKey>
  >({
    queryKey: getV2DropletsDropletIdNeighborsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.droplets[':droplet_id'].neighbors.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2DropletsDropletIdNeighbors<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.droplets)[':droplet_id']['neighbors']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2.droplets)[':droplet_id']['neighbors']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.droplets)[':droplet_id']['neighbors']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2DropletsDropletIdNeighborsQueryKey>
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
      ...getV2DropletsDropletIdNeighborsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getV2DropletsDropletIdSnapshotsQueryKey(
  args: InferRequestType<(typeof client.v2.droplets)[':droplet_id']['snapshots']['$get']>,
) {
  return ['v2', '/v2/droplets/:droplet_id/snapshots', args] as const
}

export function getV2DropletsDropletIdSnapshotsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.droplets)[':droplet_id']['snapshots']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.droplets)[':droplet_id']['snapshots']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.droplets)[':droplet_id']['snapshots']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2DropletsDropletIdSnapshotsQueryKey>
  >({
    queryKey: getV2DropletsDropletIdSnapshotsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.droplets[':droplet_id'].snapshots.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2DropletsDropletIdSnapshots<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.droplets)[':droplet_id']['snapshots']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2.droplets)[':droplet_id']['snapshots']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.droplets)[':droplet_id']['snapshots']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2DropletsDropletIdSnapshotsQueryKey>
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
      ...getV2DropletsDropletIdSnapshotsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getV2FirewallsQueryKey(args: InferRequestType<typeof client.v2.firewalls.$get>) {
  return ['v2', '/v2/firewalls', args] as const
}

export function getV2FirewallsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.firewalls.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v2.firewalls.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.firewalls.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV2FirewallsQueryKey>
  >({
    queryKey: getV2FirewallsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.firewalls.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV2Firewalls<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.firewalls.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v2.firewalls.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.firewalls.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV2FirewallsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV2FirewallsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostV2FirewallsMutationKey() {
  return ['v2', '/v2/firewalls', 'POST'] as const
}

export function getPostV2FirewallsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.firewalls.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v2.firewalls.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2FirewallsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.firewalls.$post>) {
      return parseResponse(client.v2.firewalls.$post(args, options))
    },
  })
}

export function injectPostV2Firewalls<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.firewalls.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v2.firewalls.$post>,
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
    const mutationDefaults = getPostV2FirewallsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getV2FirewallsFirewallIdQueryKey(
  args: InferRequestType<(typeof client.v2.firewalls)[':firewall_id']['$get']>,
) {
  return ['v2', '/v2/firewalls/:firewall_id', args] as const
}

export function getV2FirewallsFirewallIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.firewalls)[':firewall_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.firewalls)[':firewall_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.firewalls)[':firewall_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2FirewallsFirewallIdQueryKey>
  >({
    queryKey: getV2FirewallsFirewallIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.firewalls[':firewall_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2FirewallsFirewallId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.firewalls)[':firewall_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2.firewalls)[':firewall_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.firewalls)[':firewall_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2FirewallsFirewallIdQueryKey>
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
      ...getV2FirewallsFirewallIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPutV2FirewallsFirewallIdMutationKey() {
  return ['v2', '/v2/firewalls/:firewall_id', 'PUT'] as const
}

export function getPutV2FirewallsFirewallIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.firewalls)[':firewall_id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.firewalls)[':firewall_id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV2FirewallsFirewallIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v2.firewalls)[':firewall_id']['$put']>) {
      return parseResponse(client.v2.firewalls[':firewall_id'].$put(args, options))
    },
  })
}

export function injectPutV2FirewallsFirewallId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.firewalls)[':firewall_id']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.firewalls)[':firewall_id']['$put']>,
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
    const mutationDefaults = getPutV2FirewallsFirewallIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteV2FirewallsFirewallIdMutationKey() {
  return ['v2', '/v2/firewalls/:firewall_id', 'DELETE'] as const
}

export function getDeleteV2FirewallsFirewallIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.firewalls)[':firewall_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v2.firewalls)[':firewall_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2FirewallsFirewallIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.firewalls)[':firewall_id']['$delete']>,
    ) {
      return parseResponse(client.v2.firewalls[':firewall_id'].$delete(args, options))
    },
  })
}

export function injectDeleteV2FirewallsFirewallId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.firewalls)[':firewall_id']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.v2.firewalls)[':firewall_id']['$delete']>,
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
    const mutationDefaults = getDeleteV2FirewallsFirewallIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostV2FirewallsFirewallIdDropletsMutationKey() {
  return ['v2', '/v2/firewalls/:firewall_id/droplets', 'POST'] as const
}

export function getPostV2FirewallsFirewallIdDropletsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.firewalls)[':firewall_id']['droplets']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v2.firewalls)[':firewall_id']['droplets']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2FirewallsFirewallIdDropletsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.firewalls)[':firewall_id']['droplets']['$post']>,
    ) {
      return parseResponse(client.v2.firewalls[':firewall_id'].droplets.$post(args, options))
    },
  })
}

export function injectPostV2FirewallsFirewallIdDroplets<
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
                  ReturnType<(typeof client.v2.firewalls)[':firewall_id']['droplets']['$post']>
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.v2.firewalls)[':firewall_id']['droplets']['$post']>,
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
    const mutationDefaults = getPostV2FirewallsFirewallIdDropletsMutationOptions<
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

export function getDeleteV2FirewallsFirewallIdDropletsMutationKey() {
  return ['v2', '/v2/firewalls/:firewall_id/droplets', 'DELETE'] as const
}

export function getDeleteV2FirewallsFirewallIdDropletsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.firewalls)[':firewall_id']['droplets']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v2.firewalls)[':firewall_id']['droplets']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2FirewallsFirewallIdDropletsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.firewalls)[':firewall_id']['droplets']['$delete']>,
    ) {
      return parseResponse(client.v2.firewalls[':firewall_id'].droplets.$delete(args, options))
    },
  })
}

export function injectDeleteV2FirewallsFirewallIdDroplets<
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
                  ReturnType<(typeof client.v2.firewalls)[':firewall_id']['droplets']['$delete']>
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.v2.firewalls)[':firewall_id']['droplets']['$delete']>,
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
    const mutationDefaults = getDeleteV2FirewallsFirewallIdDropletsMutationOptions<
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

export function getPostV2FirewallsFirewallIdRulesMutationKey() {
  return ['v2', '/v2/firewalls/:firewall_id/rules', 'POST'] as const
}

export function getPostV2FirewallsFirewallIdRulesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.firewalls)[':firewall_id']['rules']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v2.firewalls)[':firewall_id']['rules']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2FirewallsFirewallIdRulesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.firewalls)[':firewall_id']['rules']['$post']>,
    ) {
      return parseResponse(client.v2.firewalls[':firewall_id'].rules.$post(args, options))
    },
  })
}

export function injectPostV2FirewallsFirewallIdRules<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.firewalls)[':firewall_id']['rules']['$post']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.v2.firewalls)[':firewall_id']['rules']['$post']>,
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
    const mutationDefaults = getPostV2FirewallsFirewallIdRulesMutationOptions<
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

export function getDeleteV2FirewallsFirewallIdRulesMutationKey() {
  return ['v2', '/v2/firewalls/:firewall_id/rules', 'DELETE'] as const
}

export function getDeleteV2FirewallsFirewallIdRulesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.firewalls)[':firewall_id']['rules']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v2.firewalls)[':firewall_id']['rules']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2FirewallsFirewallIdRulesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.firewalls)[':firewall_id']['rules']['$delete']>,
    ) {
      return parseResponse(client.v2.firewalls[':firewall_id'].rules.$delete(args, options))
    },
  })
}

export function injectDeleteV2FirewallsFirewallIdRules<
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
                  ReturnType<(typeof client.v2.firewalls)[':firewall_id']['rules']['$delete']>
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.v2.firewalls)[':firewall_id']['rules']['$delete']>,
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
    const mutationDefaults = getDeleteV2FirewallsFirewallIdRulesMutationOptions<
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

export function getPostV2FirewallsFirewallIdTagsMutationKey() {
  return ['v2', '/v2/firewalls/:firewall_id/tags', 'POST'] as const
}

export function getPostV2FirewallsFirewallIdTagsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.firewalls)[':firewall_id']['tags']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v2.firewalls)[':firewall_id']['tags']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2FirewallsFirewallIdTagsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.firewalls)[':firewall_id']['tags']['$post']>,
    ) {
      return parseResponse(client.v2.firewalls[':firewall_id'].tags.$post(args, options))
    },
  })
}

export function injectPostV2FirewallsFirewallIdTags<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.firewalls)[':firewall_id']['tags']['$post']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.v2.firewalls)[':firewall_id']['tags']['$post']>,
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
    const mutationDefaults = getPostV2FirewallsFirewallIdTagsMutationOptions<
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

export function getDeleteV2FirewallsFirewallIdTagsMutationKey() {
  return ['v2', '/v2/firewalls/:firewall_id/tags', 'DELETE'] as const
}

export function getDeleteV2FirewallsFirewallIdTagsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.firewalls)[':firewall_id']['tags']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v2.firewalls)[':firewall_id']['tags']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2FirewallsFirewallIdTagsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.firewalls)[':firewall_id']['tags']['$delete']>,
    ) {
      return parseResponse(client.v2.firewalls[':firewall_id'].tags.$delete(args, options))
    },
  })
}

export function injectDeleteV2FirewallsFirewallIdTags<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.firewalls)[':firewall_id']['tags']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.v2.firewalls)[':firewall_id']['tags']['$delete']>,
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
    const mutationDefaults = getDeleteV2FirewallsFirewallIdTagsMutationOptions<
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

export function getV2FloatingIpsQueryKey(
  args: InferRequestType<typeof client.v2.floating_ips.$get>,
) {
  return ['v2', '/v2/floating_ips', args] as const
}

export function getV2FloatingIpsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.floating_ips.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v2.floating_ips.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.floating_ips.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV2FloatingIpsQueryKey>
  >({
    queryKey: getV2FloatingIpsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.floating_ips.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV2FloatingIps<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.floating_ips.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v2.floating_ips.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.floating_ips.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV2FloatingIpsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV2FloatingIpsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostV2FloatingIpsMutationKey() {
  return ['v2', '/v2/floating_ips', 'POST'] as const
}

export function getPostV2FloatingIpsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.floating_ips.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v2.floating_ips.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2FloatingIpsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.floating_ips.$post>) {
      return parseResponse(client.v2.floating_ips.$post(args, options))
    },
  })
}

export function injectPostV2FloatingIps<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.floating_ips.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v2.floating_ips.$post>,
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
    const mutationDefaults = getPostV2FloatingIpsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getV2FloatingIpsFloatingIpQueryKey(
  args: InferRequestType<(typeof client.v2.floating_ips)[':floating_ip']['$get']>,
) {
  return ['v2', '/v2/floating_ips/:floating_ip', args] as const
}

export function getV2FloatingIpsFloatingIpQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.floating_ips)[':floating_ip']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.floating_ips)[':floating_ip']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.floating_ips)[':floating_ip']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2FloatingIpsFloatingIpQueryKey>
  >({
    queryKey: getV2FloatingIpsFloatingIpQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.floating_ips[':floating_ip'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2FloatingIpsFloatingIp<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.floating_ips)[':floating_ip']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2.floating_ips)[':floating_ip']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.floating_ips)[':floating_ip']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2FloatingIpsFloatingIpQueryKey>
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
      ...getV2FloatingIpsFloatingIpQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getDeleteV2FloatingIpsFloatingIpMutationKey() {
  return ['v2', '/v2/floating_ips/:floating_ip', 'DELETE'] as const
}

export function getDeleteV2FloatingIpsFloatingIpMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.floating_ips)[':floating_ip']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v2.floating_ips)[':floating_ip']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2FloatingIpsFloatingIpMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.floating_ips)[':floating_ip']['$delete']>,
    ) {
      return parseResponse(client.v2.floating_ips[':floating_ip'].$delete(args, options))
    },
  })
}

export function injectDeleteV2FloatingIpsFloatingIp<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.floating_ips)[':floating_ip']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.v2.floating_ips)[':floating_ip']['$delete']>,
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
    const mutationDefaults = getDeleteV2FloatingIpsFloatingIpMutationOptions<
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

export function getV2FloatingIpsFloatingIpActionsQueryKey(
  args: InferRequestType<(typeof client.v2.floating_ips)[':floating_ip']['actions']['$get']>,
) {
  return ['v2', '/v2/floating_ips/:floating_ip/actions', args] as const
}

export function getV2FloatingIpsFloatingIpActionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.floating_ips)[':floating_ip']['actions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.floating_ips)[':floating_ip']['actions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.floating_ips)[':floating_ip']['actions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2FloatingIpsFloatingIpActionsQueryKey>
  >({
    queryKey: getV2FloatingIpsFloatingIpActionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.floating_ips[':floating_ip'].actions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2FloatingIpsFloatingIpActions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.floating_ips)[':floating_ip']['actions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2.floating_ips)[':floating_ip']['actions']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v2.floating_ips)[':floating_ip']['actions']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2FloatingIpsFloatingIpActionsQueryKey>
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
      ...getV2FloatingIpsFloatingIpActionsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostV2FloatingIpsFloatingIpActionsMutationKey() {
  return ['v2', '/v2/floating_ips/:floating_ip/actions', 'POST'] as const
}

export function getPostV2FloatingIpsFloatingIpActionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.floating_ips)[':floating_ip']['actions']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.floating_ips)[':floating_ip']['actions']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2FloatingIpsFloatingIpActionsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.floating_ips)[':floating_ip']['actions']['$post']>,
    ) {
      return parseResponse(client.v2.floating_ips[':floating_ip'].actions.$post(args, options))
    },
  })
}

export function injectPostV2FloatingIpsFloatingIpActions<
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
                ReturnType<(typeof client.v2.floating_ips)[':floating_ip']['actions']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.floating_ips)[':floating_ip']['actions']['$post']>,
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
    const mutationDefaults = getPostV2FloatingIpsFloatingIpActionsMutationOptions<
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

export function getV2FloatingIpsFloatingIpActionsActionIdQueryKey(
  args: InferRequestType<
    (typeof client.v2.floating_ips)[':floating_ip']['actions'][':action_id']['$get']
  >,
) {
  return ['v2', '/v2/floating_ips/:floating_ip/actions/:action_id', args] as const
}

export function getV2FloatingIpsFloatingIpActionsActionIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2.floating_ips)[':floating_ip']['actions'][':action_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.floating_ips)[':floating_ip']['actions'][':action_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.floating_ips)[':floating_ip']['actions'][':action_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2FloatingIpsFloatingIpActionsActionIdQueryKey>
  >({
    queryKey: getV2FloatingIpsFloatingIpActionsActionIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.floating_ips[':floating_ip'].actions[':action_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2FloatingIpsFloatingIpActionsActionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2.floating_ips)[':floating_ip']['actions'][':action_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v2.floating_ips)[':floating_ip']['actions'][':action_id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2.floating_ips)[':floating_ip']['actions'][':action_id']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2FloatingIpsFloatingIpActionsActionIdQueryKey>
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
      ...getV2FloatingIpsFloatingIpActionsActionIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getV2FunctionsNamespacesQueryKey() {
  return ['v2', '/v2/functions/namespaces'] as const
}

export function getV2FunctionsNamespacesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v2.functions.namespaces.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.functions.namespaces.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2FunctionsNamespacesQueryKey>
  >({
    queryKey: getV2FunctionsNamespacesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.functions.namespaces.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2FunctionsNamespaces<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v2.functions.namespaces.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v2.functions.namespaces.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2FunctionsNamespacesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV2FunctionsNamespacesQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getPostV2FunctionsNamespacesMutationKey() {
  return ['v2', '/v2/functions/namespaces', 'POST'] as const
}

export function getPostV2FunctionsNamespacesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.functions.namespaces.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v2.functions.namespaces.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2FunctionsNamespacesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.functions.namespaces.$post>) {
      return parseResponse(client.v2.functions.namespaces.$post(args, options))
    },
  })
}

export function injectPostV2FunctionsNamespaces<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v2.functions.namespaces.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v2.functions.namespaces.$post>,
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
    const mutationDefaults = getPostV2FunctionsNamespacesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getV2FunctionsNamespacesNamespaceIdQueryKey(
  args: InferRequestType<(typeof client.v2.functions.namespaces)[':namespace_id']['$get']>,
) {
  return ['v2', '/v2/functions/namespaces/:namespace_id', args] as const
}

export function getV2FunctionsNamespacesNamespaceIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.functions.namespaces)[':namespace_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.functions.namespaces)[':namespace_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.functions.namespaces)[':namespace_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2FunctionsNamespacesNamespaceIdQueryKey>
  >({
    queryKey: getV2FunctionsNamespacesNamespaceIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.functions.namespaces[':namespace_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2FunctionsNamespacesNamespaceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.functions.namespaces)[':namespace_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2.functions.namespaces)[':namespace_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.functions.namespaces)[':namespace_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2FunctionsNamespacesNamespaceIdQueryKey>
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
      ...getV2FunctionsNamespacesNamespaceIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getDeleteV2FunctionsNamespacesNamespaceIdMutationKey() {
  return ['v2', '/v2/functions/namespaces/:namespace_id', 'DELETE'] as const
}

export function getDeleteV2FunctionsNamespacesNamespaceIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.functions.namespaces)[':namespace_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v2.functions.namespaces)[':namespace_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2FunctionsNamespacesNamespaceIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.functions.namespaces)[':namespace_id']['$delete']>,
    ) {
      return parseResponse(client.v2.functions.namespaces[':namespace_id'].$delete(args, options))
    },
  })
}

export function injectDeleteV2FunctionsNamespacesNamespaceId<
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
                  ReturnType<(typeof client.v2.functions.namespaces)[':namespace_id']['$delete']>
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.v2.functions.namespaces)[':namespace_id']['$delete']>,
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
    const mutationDefaults = getDeleteV2FunctionsNamespacesNamespaceIdMutationOptions<
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

export function getV2FunctionsNamespacesNamespaceIdTriggersQueryKey(
  args: InferRequestType<
    (typeof client.v2.functions.namespaces)[':namespace_id']['triggers']['$get']
  >,
) {
  return ['v2', '/v2/functions/namespaces/:namespace_id/triggers', args] as const
}

export function getV2FunctionsNamespacesNamespaceIdTriggersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2.functions.namespaces)[':namespace_id']['triggers']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.functions.namespaces)[':namespace_id']['triggers']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v2.functions.namespaces)[':namespace_id']['triggers']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2FunctionsNamespacesNamespaceIdTriggersQueryKey>
  >({
    queryKey: getV2FunctionsNamespacesNamespaceIdTriggersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.functions.namespaces[':namespace_id'].triggers.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2FunctionsNamespacesNamespaceIdTriggers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2.functions.namespaces)[':namespace_id']['triggers']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v2.functions.namespaces)[':namespace_id']['triggers']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2.functions.namespaces)[':namespace_id']['triggers']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2FunctionsNamespacesNamespaceIdTriggersQueryKey>
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
      ...getV2FunctionsNamespacesNamespaceIdTriggersQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPostV2FunctionsNamespacesNamespaceIdTriggersMutationKey() {
  return ['v2', '/v2/functions/namespaces/:namespace_id/triggers', 'POST'] as const
}

export function getPostV2FunctionsNamespacesNamespaceIdTriggersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.functions.namespaces)[':namespace_id']['triggers']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.functions.namespaces)[':namespace_id']['triggers']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2FunctionsNamespacesNamespaceIdTriggersMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.functions.namespaces)[':namespace_id']['triggers']['$post']
      >,
    ) {
      return parseResponse(
        client.v2.functions.namespaces[':namespace_id'].triggers.$post(args, options),
      )
    },
  })
}

export function injectPostV2FunctionsNamespacesNamespaceIdTriggers<
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
                  (typeof client.v2.functions.namespaces)[':namespace_id']['triggers']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v2.functions.namespaces)[':namespace_id']['triggers']['$post']
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
    const mutationDefaults = getPostV2FunctionsNamespacesNamespaceIdTriggersMutationOptions<
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

export function getV2FunctionsNamespacesNamespaceIdTriggersTriggerNameQueryKey(
  args: InferRequestType<
    (typeof client.v2.functions.namespaces)[':namespace_id']['triggers'][':trigger_name']['$get']
  >,
) {
  return ['v2', '/v2/functions/namespaces/:namespace_id/triggers/:trigger_name', args] as const
}

export function getV2FunctionsNamespacesNamespaceIdTriggersTriggerNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2.functions.namespaces)[':namespace_id']['triggers'][':trigger_name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.functions.namespaces)[':namespace_id']['triggers'][':trigger_name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.functions.namespaces)[':namespace_id']['triggers'][':trigger_name']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2FunctionsNamespacesNamespaceIdTriggersTriggerNameQueryKey>
  >({
    queryKey: getV2FunctionsNamespacesNamespaceIdTriggersTriggerNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.functions.namespaces[':namespace_id'].triggers[':trigger_name'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2FunctionsNamespacesNamespaceIdTriggersTriggerName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2.functions.namespaces)[':namespace_id']['triggers'][':trigger_name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v2.functions.namespaces)[':namespace_id']['triggers'][':trigger_name']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2.functions.namespaces)[':namespace_id']['triggers'][':trigger_name']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2FunctionsNamespacesNamespaceIdTriggersTriggerNameQueryKey>
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
      ...getV2FunctionsNamespacesNamespaceIdTriggersTriggerNameQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPutV2FunctionsNamespacesNamespaceIdTriggersTriggerNameMutationKey() {
  return ['v2', '/v2/functions/namespaces/:namespace_id/triggers/:trigger_name', 'PUT'] as const
}

export function getPutV2FunctionsNamespacesNamespaceIdTriggersTriggerNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.functions.namespaces)[':namespace_id']['triggers'][':trigger_name']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v2.functions.namespaces)[':namespace_id']['triggers'][':trigger_name']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutV2FunctionsNamespacesNamespaceIdTriggersTriggerNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.functions.namespaces)[':namespace_id']['triggers'][':trigger_name']['$put']
      >,
    ) {
      return parseResponse(
        client.v2.functions.namespaces[':namespace_id'].triggers[':trigger_name'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPutV2FunctionsNamespacesNamespaceIdTriggersTriggerName<
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
                  (typeof client.v2.functions.namespaces)[':namespace_id']['triggers'][':trigger_name']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v2.functions.namespaces)[':namespace_id']['triggers'][':trigger_name']['$put']
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
      getPutV2FunctionsNamespacesNamespaceIdTriggersTriggerNameMutationOptions<
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

export function getDeleteV2FunctionsNamespacesNamespaceIdTriggersTriggerNameMutationKey() {
  return ['v2', '/v2/functions/namespaces/:namespace_id/triggers/:trigger_name', 'DELETE'] as const
}

export function getDeleteV2FunctionsNamespacesNamespaceIdTriggersTriggerNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.functions.namespaces)[':namespace_id']['triggers'][':trigger_name']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.v2.functions.namespaces)[':namespace_id']['triggers'][':trigger_name']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2FunctionsNamespacesNamespaceIdTriggersTriggerNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.functions.namespaces)[':namespace_id']['triggers'][':trigger_name']['$delete']
      >,
    ) {
      return parseResponse(
        client.v2.functions.namespaces[':namespace_id'].triggers[':trigger_name'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function injectDeleteV2FunctionsNamespacesNamespaceIdTriggersTriggerName<
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
                    (typeof client.v2.functions.namespaces)[':namespace_id']['triggers'][':trigger_name']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.v2.functions.namespaces)[':namespace_id']['triggers'][':trigger_name']['$delete']
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
      getDeleteV2FunctionsNamespacesNamespaceIdTriggersTriggerNameMutationOptions<
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

export function getV2ImagesQueryKey(args: InferRequestType<typeof client.v2.images.$get>) {
  return ['v2', '/v2/images', args] as const
}

export function getV2ImagesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.images.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v2.images.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.images.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV2ImagesQueryKey>
  >({
    queryKey: getV2ImagesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.images.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV2Images<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.images.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v2.images.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.images.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV2ImagesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV2ImagesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostV2ImagesMutationKey() {
  return ['v2', '/v2/images', 'POST'] as const
}

export function getPostV2ImagesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.images.$post>>>>>,
    TError,
    InferRequestType<typeof client.v2.images.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2ImagesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.images.$post>) {
      return parseResponse(client.v2.images.$post(args, options))
    },
  })
}

export function injectPostV2Images<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.images.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v2.images.$post>,
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
    const mutationDefaults = getPostV2ImagesMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getV2ImagesImageIdQueryKey(
  args: InferRequestType<(typeof client.v2.images)[':image_id']['$get']>,
) {
  return ['v2', '/v2/images/:image_id', args] as const
}

export function getV2ImagesImageIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.images)[':image_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.images)[':image_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2.images)[':image_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2ImagesImageIdQueryKey>
  >({
    queryKey: getV2ImagesImageIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.images[':image_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2ImagesImageId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.images)[':image_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2.images)[':image_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.images)[':image_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2ImagesImageIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV2ImagesImageIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPutV2ImagesImageIdMutationKey() {
  return ['v2', '/v2/images/:image_id', 'PUT'] as const
}

export function getPutV2ImagesImageIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2.images)[':image_id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.images)[':image_id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV2ImagesImageIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v2.images)[':image_id']['$put']>) {
      return parseResponse(client.v2.images[':image_id'].$put(args, options))
    },
  })
}

export function injectPutV2ImagesImageId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.images)[':image_id']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.images)[':image_id']['$put']>,
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
    const mutationDefaults = getPutV2ImagesImageIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteV2ImagesImageIdMutationKey() {
  return ['v2', '/v2/images/:image_id', 'DELETE'] as const
}

export function getDeleteV2ImagesImageIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.images)[':image_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v2.images)[':image_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2ImagesImageIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v2.images)[':image_id']['$delete']>) {
      return parseResponse(client.v2.images[':image_id'].$delete(args, options))
    },
  })
}

export function injectDeleteV2ImagesImageId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.images)[':image_id']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.v2.images)[':image_id']['$delete']>,
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
    const mutationDefaults = getDeleteV2ImagesImageIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getV2ImagesImageIdActionsQueryKey(
  args: InferRequestType<(typeof client.v2.images)[':image_id']['actions']['$get']>,
) {
  return ['v2', '/v2/images/:image_id/actions', args] as const
}

export function getV2ImagesImageIdActionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.images)[':image_id']['actions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.images)[':image_id']['actions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.images)[':image_id']['actions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2ImagesImageIdActionsQueryKey>
  >({
    queryKey: getV2ImagesImageIdActionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.images[':image_id'].actions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2ImagesImageIdActions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.images)[':image_id']['actions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2.images)[':image_id']['actions']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.images)[':image_id']['actions']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2ImagesImageIdActionsQueryKey>
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
      ...getV2ImagesImageIdActionsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostV2ImagesImageIdActionsMutationKey() {
  return ['v2', '/v2/images/:image_id/actions', 'POST'] as const
}

export function getPostV2ImagesImageIdActionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.images)[':image_id']['actions']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.images)[':image_id']['actions']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2ImagesImageIdActionsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.images)[':image_id']['actions']['$post']>,
    ) {
      return parseResponse(client.v2.images[':image_id'].actions.$post(args, options))
    },
  })
}

export function injectPostV2ImagesImageIdActions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.images)[':image_id']['actions']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.images)[':image_id']['actions']['$post']>,
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
    const mutationDefaults = getPostV2ImagesImageIdActionsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getV2ImagesImageIdActionsActionIdQueryKey(
  args: InferRequestType<(typeof client.v2.images)[':image_id']['actions'][':action_id']['$get']>,
) {
  return ['v2', '/v2/images/:image_id/actions/:action_id', args] as const
}

export function getV2ImagesImageIdActionsActionIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.images)[':image_id']['actions'][':action_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.images)[':image_id']['actions'][':action_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v2.images)[':image_id']['actions'][':action_id']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2ImagesImageIdActionsActionIdQueryKey>
  >({
    queryKey: getV2ImagesImageIdActionsActionIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.images[':image_id'].actions[':action_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2ImagesImageIdActionsActionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.images)[':image_id']['actions'][':action_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v2.images)[':image_id']['actions'][':action_id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v2.images)[':image_id']['actions'][':action_id']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2ImagesImageIdActionsActionIdQueryKey>
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
      ...getV2ImagesImageIdActionsActionIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getV2KubernetesClustersQueryKey(
  args: InferRequestType<typeof client.v2.kubernetes.clusters.$get>,
) {
  return ['v2', '/v2/kubernetes/clusters', args] as const
}

export function getV2KubernetesClustersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.kubernetes.clusters.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.kubernetes.clusters.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.kubernetes.clusters.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2KubernetesClustersQueryKey>
  >({
    queryKey: getV2KubernetesClustersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.kubernetes.clusters.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2KubernetesClusters<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.kubernetes.clusters.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v2.kubernetes.clusters.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v2.kubernetes.clusters.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2KubernetesClustersQueryKey>
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
      ...getV2KubernetesClustersQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostV2KubernetesClustersMutationKey() {
  return ['v2', '/v2/kubernetes/clusters', 'POST'] as const
}

export function getPostV2KubernetesClustersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.kubernetes.clusters.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v2.kubernetes.clusters.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2KubernetesClustersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.kubernetes.clusters.$post>) {
      return parseResponse(client.v2.kubernetes.clusters.$post(args, options))
    },
  })
}

export function injectPostV2KubernetesClusters<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v2.kubernetes.clusters.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v2.kubernetes.clusters.$post>,
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
    const mutationDefaults = getPostV2KubernetesClustersMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getV2KubernetesClustersClusterIdQueryKey(
  args: InferRequestType<(typeof client.v2.kubernetes.clusters)[':cluster_id']['$get']>,
) {
  return ['v2', '/v2/kubernetes/clusters/:cluster_id', args] as const
}

export function getV2KubernetesClustersClusterIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.kubernetes.clusters)[':cluster_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.kubernetes.clusters)[':cluster_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.kubernetes.clusters)[':cluster_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2KubernetesClustersClusterIdQueryKey>
  >({
    queryKey: getV2KubernetesClustersClusterIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.kubernetes.clusters[':cluster_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2KubernetesClustersClusterId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.kubernetes.clusters)[':cluster_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2.kubernetes.clusters)[':cluster_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.kubernetes.clusters)[':cluster_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2KubernetesClustersClusterIdQueryKey>
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
      ...getV2KubernetesClustersClusterIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPutV2KubernetesClustersClusterIdMutationKey() {
  return ['v2', '/v2/kubernetes/clusters/:cluster_id', 'PUT'] as const
}

export function getPutV2KubernetesClustersClusterIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.kubernetes.clusters)[':cluster_id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.kubernetes.clusters)[':cluster_id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV2KubernetesClustersClusterIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.kubernetes.clusters)[':cluster_id']['$put']>,
    ) {
      return parseResponse(client.v2.kubernetes.clusters[':cluster_id'].$put(args, options))
    },
  })
}

export function injectPutV2KubernetesClustersClusterId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.kubernetes.clusters)[':cluster_id']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.kubernetes.clusters)[':cluster_id']['$put']>,
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
    const mutationDefaults = getPutV2KubernetesClustersClusterIdMutationOptions<
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

export function getDeleteV2KubernetesClustersClusterIdMutationKey() {
  return ['v2', '/v2/kubernetes/clusters/:cluster_id', 'DELETE'] as const
}

export function getDeleteV2KubernetesClustersClusterIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.kubernetes.clusters)[':cluster_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v2.kubernetes.clusters)[':cluster_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2KubernetesClustersClusterIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.kubernetes.clusters)[':cluster_id']['$delete']>,
    ) {
      return parseResponse(client.v2.kubernetes.clusters[':cluster_id'].$delete(args, options))
    },
  })
}

export function injectDeleteV2KubernetesClustersClusterId<
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
                  ReturnType<(typeof client.v2.kubernetes.clusters)[':cluster_id']['$delete']>
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.v2.kubernetes.clusters)[':cluster_id']['$delete']>,
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
    const mutationDefaults = getDeleteV2KubernetesClustersClusterIdMutationOptions<
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

export function getV2KubernetesClustersClusterIdClusterlintQueryKey(
  args: InferRequestType<
    (typeof client.v2.kubernetes.clusters)[':cluster_id']['clusterlint']['$get']
  >,
) {
  return ['v2', '/v2/kubernetes/clusters/:cluster_id/clusterlint', args] as const
}

export function getV2KubernetesClustersClusterIdClusterlintQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2.kubernetes.clusters)[':cluster_id']['clusterlint']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.kubernetes.clusters)[':cluster_id']['clusterlint']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v2.kubernetes.clusters)[':cluster_id']['clusterlint']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2KubernetesClustersClusterIdClusterlintQueryKey>
  >({
    queryKey: getV2KubernetesClustersClusterIdClusterlintQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.kubernetes.clusters[':cluster_id'].clusterlint.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2KubernetesClustersClusterIdClusterlint<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2.kubernetes.clusters)[':cluster_id']['clusterlint']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v2.kubernetes.clusters)[':cluster_id']['clusterlint']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2.kubernetes.clusters)[':cluster_id']['clusterlint']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2KubernetesClustersClusterIdClusterlintQueryKey>
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
      ...getV2KubernetesClustersClusterIdClusterlintQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPostV2KubernetesClustersClusterIdClusterlintMutationKey() {
  return ['v2', '/v2/kubernetes/clusters/:cluster_id/clusterlint', 'POST'] as const
}

export function getPostV2KubernetesClustersClusterIdClusterlintMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.kubernetes.clusters)[':cluster_id']['clusterlint']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.kubernetes.clusters)[':cluster_id']['clusterlint']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2KubernetesClustersClusterIdClusterlintMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.kubernetes.clusters)[':cluster_id']['clusterlint']['$post']
      >,
    ) {
      return parseResponse(
        client.v2.kubernetes.clusters[':cluster_id'].clusterlint.$post(args, options),
      )
    },
  })
}

export function injectPostV2KubernetesClustersClusterIdClusterlint<
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
                  (typeof client.v2.kubernetes.clusters)[':cluster_id']['clusterlint']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v2.kubernetes.clusters)[':cluster_id']['clusterlint']['$post']
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
    const mutationDefaults = getPostV2KubernetesClustersClusterIdClusterlintMutationOptions<
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

export function getV2KubernetesClustersClusterIdCredentialsQueryKey(
  args: InferRequestType<
    (typeof client.v2.kubernetes.clusters)[':cluster_id']['credentials']['$get']
  >,
) {
  return ['v2', '/v2/kubernetes/clusters/:cluster_id/credentials', args] as const
}

export function getV2KubernetesClustersClusterIdCredentialsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2.kubernetes.clusters)[':cluster_id']['credentials']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.kubernetes.clusters)[':cluster_id']['credentials']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v2.kubernetes.clusters)[':cluster_id']['credentials']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2KubernetesClustersClusterIdCredentialsQueryKey>
  >({
    queryKey: getV2KubernetesClustersClusterIdCredentialsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.kubernetes.clusters[':cluster_id'].credentials.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2KubernetesClustersClusterIdCredentials<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2.kubernetes.clusters)[':cluster_id']['credentials']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v2.kubernetes.clusters)[':cluster_id']['credentials']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2.kubernetes.clusters)[':cluster_id']['credentials']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2KubernetesClustersClusterIdCredentialsQueryKey>
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
      ...getV2KubernetesClustersClusterIdCredentialsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getV2KubernetesClustersClusterIdDestroyWithAssociatedResourcesQueryKey(
  args: InferRequestType<
    (typeof client.v2.kubernetes.clusters)[':cluster_id']['destroy_with_associated_resources']['$get']
  >,
) {
  return [
    'v2',
    '/v2/kubernetes/clusters/:cluster_id/destroy_with_associated_resources',
    args,
  ] as const
}

export function getV2KubernetesClustersClusterIdDestroyWithAssociatedResourcesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2.kubernetes.clusters)[':cluster_id']['destroy_with_associated_resources']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.kubernetes.clusters)[':cluster_id']['destroy_with_associated_resources']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.kubernetes.clusters)[':cluster_id']['destroy_with_associated_resources']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2KubernetesClustersClusterIdDestroyWithAssociatedResourcesQueryKey>
  >({
    queryKey: getV2KubernetesClustersClusterIdDestroyWithAssociatedResourcesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.kubernetes.clusters[':cluster_id'].destroy_with_associated_resources.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2KubernetesClustersClusterIdDestroyWithAssociatedResources<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2.kubernetes.clusters)[':cluster_id']['destroy_with_associated_resources']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v2.kubernetes.clusters)[':cluster_id']['destroy_with_associated_resources']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2.kubernetes.clusters)[':cluster_id']['destroy_with_associated_resources']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2KubernetesClustersClusterIdDestroyWithAssociatedResourcesQueryKey>
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
      ...getV2KubernetesClustersClusterIdDestroyWithAssociatedResourcesQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getDeleteV2KubernetesClustersClusterIdDestroyWithAssociatedResourcesDangerousMutationKey() {
  return [
    'v2',
    '/v2/kubernetes/clusters/:cluster_id/destroy_with_associated_resources/dangerous',
    'DELETE',
  ] as const
}

export function getDeleteV2KubernetesClustersClusterIdDestroyWithAssociatedResourcesDangerousMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.kubernetes.clusters)[':cluster_id']['destroy_with_associated_resources']['dangerous']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.v2.kubernetes.clusters)[':cluster_id']['destroy_with_associated_resources']['dangerous']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteV2KubernetesClustersClusterIdDestroyWithAssociatedResourcesDangerousMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.kubernetes.clusters)[':cluster_id']['destroy_with_associated_resources']['dangerous']['$delete']
      >,
    ) {
      return parseResponse(
        client.v2.kubernetes.clusters[
          ':cluster_id'
        ].destroy_with_associated_resources.dangerous.$delete(args, options),
      )
    },
  })
}

export function injectDeleteV2KubernetesClustersClusterIdDestroyWithAssociatedResourcesDangerous<
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
                    (typeof client.v2.kubernetes.clusters)[':cluster_id']['destroy_with_associated_resources']['dangerous']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.v2.kubernetes.clusters)[':cluster_id']['destroy_with_associated_resources']['dangerous']['$delete']
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
      getDeleteV2KubernetesClustersClusterIdDestroyWithAssociatedResourcesDangerousMutationOptions<
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

export function getDeleteV2KubernetesClustersClusterIdDestroyWithAssociatedResourcesSelectiveMutationKey() {
  return [
    'v2',
    '/v2/kubernetes/clusters/:cluster_id/destroy_with_associated_resources/selective',
    'DELETE',
  ] as const
}

export function getDeleteV2KubernetesClustersClusterIdDestroyWithAssociatedResourcesSelectiveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.kubernetes.clusters)[':cluster_id']['destroy_with_associated_resources']['selective']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.v2.kubernetes.clusters)[':cluster_id']['destroy_with_associated_resources']['selective']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteV2KubernetesClustersClusterIdDestroyWithAssociatedResourcesSelectiveMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.kubernetes.clusters)[':cluster_id']['destroy_with_associated_resources']['selective']['$delete']
      >,
    ) {
      return parseResponse(
        client.v2.kubernetes.clusters[
          ':cluster_id'
        ].destroy_with_associated_resources.selective.$delete(args, options),
      )
    },
  })
}

export function injectDeleteV2KubernetesClustersClusterIdDestroyWithAssociatedResourcesSelective<
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
                    (typeof client.v2.kubernetes.clusters)[':cluster_id']['destroy_with_associated_resources']['selective']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.v2.kubernetes.clusters)[':cluster_id']['destroy_with_associated_resources']['selective']['$delete']
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
      getDeleteV2KubernetesClustersClusterIdDestroyWithAssociatedResourcesSelectiveMutationOptions<
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

export function getV2KubernetesClustersClusterIdKubeconfigQueryKey(
  args: InferRequestType<
    (typeof client.v2.kubernetes.clusters)[':cluster_id']['kubeconfig']['$get']
  >,
) {
  return ['v2', '/v2/kubernetes/clusters/:cluster_id/kubeconfig', args] as const
}

export function getV2KubernetesClustersClusterIdKubeconfigQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2.kubernetes.clusters)[':cluster_id']['kubeconfig']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.kubernetes.clusters)[':cluster_id']['kubeconfig']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v2.kubernetes.clusters)[':cluster_id']['kubeconfig']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2KubernetesClustersClusterIdKubeconfigQueryKey>
  >({
    queryKey: getV2KubernetesClustersClusterIdKubeconfigQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.kubernetes.clusters[':cluster_id'].kubeconfig.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2KubernetesClustersClusterIdKubeconfig<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2.kubernetes.clusters)[':cluster_id']['kubeconfig']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v2.kubernetes.clusters)[':cluster_id']['kubeconfig']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2.kubernetes.clusters)[':cluster_id']['kubeconfig']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2KubernetesClustersClusterIdKubeconfigQueryKey>
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
      ...getV2KubernetesClustersClusterIdKubeconfigQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getV2KubernetesClustersClusterIdNodePoolsQueryKey(
  args: InferRequestType<
    (typeof client.v2.kubernetes.clusters)[':cluster_id']['node_pools']['$get']
  >,
) {
  return ['v2', '/v2/kubernetes/clusters/:cluster_id/node_pools', args] as const
}

export function getV2KubernetesClustersClusterIdNodePoolsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2.kubernetes.clusters)[':cluster_id']['node_pools']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.kubernetes.clusters)[':cluster_id']['node_pools']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v2.kubernetes.clusters)[':cluster_id']['node_pools']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2KubernetesClustersClusterIdNodePoolsQueryKey>
  >({
    queryKey: getV2KubernetesClustersClusterIdNodePoolsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.kubernetes.clusters[':cluster_id'].node_pools.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2KubernetesClustersClusterIdNodePools<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2.kubernetes.clusters)[':cluster_id']['node_pools']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v2.kubernetes.clusters)[':cluster_id']['node_pools']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2.kubernetes.clusters)[':cluster_id']['node_pools']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2KubernetesClustersClusterIdNodePoolsQueryKey>
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
      ...getV2KubernetesClustersClusterIdNodePoolsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPostV2KubernetesClustersClusterIdNodePoolsMutationKey() {
  return ['v2', '/v2/kubernetes/clusters/:cluster_id/node_pools', 'POST'] as const
}

export function getPostV2KubernetesClustersClusterIdNodePoolsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v2.kubernetes.clusters)[':cluster_id']['node_pools']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.kubernetes.clusters)[':cluster_id']['node_pools']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2KubernetesClustersClusterIdNodePoolsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.kubernetes.clusters)[':cluster_id']['node_pools']['$post']
      >,
    ) {
      return parseResponse(
        client.v2.kubernetes.clusters[':cluster_id'].node_pools.$post(args, options),
      )
    },
  })
}

export function injectPostV2KubernetesClustersClusterIdNodePools<
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
                  (typeof client.v2.kubernetes.clusters)[':cluster_id']['node_pools']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v2.kubernetes.clusters)[':cluster_id']['node_pools']['$post']
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
    const mutationDefaults = getPostV2KubernetesClustersClusterIdNodePoolsMutationOptions<
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

export function getV2KubernetesClustersClusterIdNodePoolsNodePoolIdQueryKey(
  args: InferRequestType<
    (typeof client.v2.kubernetes.clusters)[':cluster_id']['node_pools'][':node_pool_id']['$get']
  >,
) {
  return ['v2', '/v2/kubernetes/clusters/:cluster_id/node_pools/:node_pool_id', args] as const
}

export function getV2KubernetesClustersClusterIdNodePoolsNodePoolIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2.kubernetes.clusters)[':cluster_id']['node_pools'][':node_pool_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.kubernetes.clusters)[':cluster_id']['node_pools'][':node_pool_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.kubernetes.clusters)[':cluster_id']['node_pools'][':node_pool_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2KubernetesClustersClusterIdNodePoolsNodePoolIdQueryKey>
  >({
    queryKey: getV2KubernetesClustersClusterIdNodePoolsNodePoolIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.kubernetes.clusters[':cluster_id'].node_pools[':node_pool_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2KubernetesClustersClusterIdNodePoolsNodePoolId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2.kubernetes.clusters)[':cluster_id']['node_pools'][':node_pool_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v2.kubernetes.clusters)[':cluster_id']['node_pools'][':node_pool_id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2.kubernetes.clusters)[':cluster_id']['node_pools'][':node_pool_id']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2KubernetesClustersClusterIdNodePoolsNodePoolIdQueryKey>
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
      ...getV2KubernetesClustersClusterIdNodePoolsNodePoolIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPutV2KubernetesClustersClusterIdNodePoolsNodePoolIdMutationKey() {
  return ['v2', '/v2/kubernetes/clusters/:cluster_id/node_pools/:node_pool_id', 'PUT'] as const
}

export function getPutV2KubernetesClustersClusterIdNodePoolsNodePoolIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.kubernetes.clusters)[':cluster_id']['node_pools'][':node_pool_id']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v2.kubernetes.clusters)[':cluster_id']['node_pools'][':node_pool_id']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutV2KubernetesClustersClusterIdNodePoolsNodePoolIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.kubernetes.clusters)[':cluster_id']['node_pools'][':node_pool_id']['$put']
      >,
    ) {
      return parseResponse(
        client.v2.kubernetes.clusters[':cluster_id'].node_pools[':node_pool_id'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPutV2KubernetesClustersClusterIdNodePoolsNodePoolId<
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
                  (typeof client.v2.kubernetes.clusters)[':cluster_id']['node_pools'][':node_pool_id']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v2.kubernetes.clusters)[':cluster_id']['node_pools'][':node_pool_id']['$put']
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
    const mutationDefaults = getPutV2KubernetesClustersClusterIdNodePoolsNodePoolIdMutationOptions<
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

export function getDeleteV2KubernetesClustersClusterIdNodePoolsNodePoolIdMutationKey() {
  return ['v2', '/v2/kubernetes/clusters/:cluster_id/node_pools/:node_pool_id', 'DELETE'] as const
}

export function getDeleteV2KubernetesClustersClusterIdNodePoolsNodePoolIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.kubernetes.clusters)[':cluster_id']['node_pools'][':node_pool_id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.v2.kubernetes.clusters)[':cluster_id']['node_pools'][':node_pool_id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2KubernetesClustersClusterIdNodePoolsNodePoolIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.kubernetes.clusters)[':cluster_id']['node_pools'][':node_pool_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.v2.kubernetes.clusters[':cluster_id'].node_pools[':node_pool_id'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function injectDeleteV2KubernetesClustersClusterIdNodePoolsNodePoolId<
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
                    (typeof client.v2.kubernetes.clusters)[':cluster_id']['node_pools'][':node_pool_id']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.v2.kubernetes.clusters)[':cluster_id']['node_pools'][':node_pool_id']['$delete']
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
      getDeleteV2KubernetesClustersClusterIdNodePoolsNodePoolIdMutationOptions<
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

export function getDeleteV2KubernetesClustersClusterIdNodePoolsNodePoolIdNodesNodeIdMutationKey() {
  return [
    'v2',
    '/v2/kubernetes/clusters/:cluster_id/node_pools/:node_pool_id/nodes/:node_id',
    'DELETE',
  ] as const
}

export function getDeleteV2KubernetesClustersClusterIdNodePoolsNodePoolIdNodesNodeIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.kubernetes.clusters)[':cluster_id']['node_pools'][':node_pool_id']['nodes'][':node_id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v2.kubernetes.clusters)[':cluster_id']['node_pools'][':node_pool_id']['nodes'][':node_id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2KubernetesClustersClusterIdNodePoolsNodePoolIdNodesNodeIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.kubernetes.clusters)[':cluster_id']['node_pools'][':node_pool_id']['nodes'][':node_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.v2.kubernetes.clusters[':cluster_id'].node_pools[':node_pool_id'].nodes[
          ':node_id'
        ].$delete(args, options),
      )
    },
  })
}

export function injectDeleteV2KubernetesClustersClusterIdNodePoolsNodePoolIdNodesNodeId<
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
                  (typeof client.v2.kubernetes.clusters)[':cluster_id']['node_pools'][':node_pool_id']['nodes'][':node_id']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v2.kubernetes.clusters)[':cluster_id']['node_pools'][':node_pool_id']['nodes'][':node_id']['$delete']
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
      getDeleteV2KubernetesClustersClusterIdNodePoolsNodePoolIdNodesNodeIdMutationOptions<
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

export function getPostV2KubernetesClustersClusterIdNodePoolsNodePoolIdRecycleMutationKey() {
  return [
    'v2',
    '/v2/kubernetes/clusters/:cluster_id/node_pools/:node_pool_id/recycle',
    'POST',
  ] as const
}

export function getPostV2KubernetesClustersClusterIdNodePoolsNodePoolIdRecycleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.kubernetes.clusters)[':cluster_id']['node_pools'][':node_pool_id']['recycle']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v2.kubernetes.clusters)[':cluster_id']['node_pools'][':node_pool_id']['recycle']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV2KubernetesClustersClusterIdNodePoolsNodePoolIdRecycleMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.kubernetes.clusters)[':cluster_id']['node_pools'][':node_pool_id']['recycle']['$post']
      >,
    ) {
      return parseResponse(
        client.v2.kubernetes.clusters[':cluster_id'].node_pools[':node_pool_id'].recycle.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostV2KubernetesClustersClusterIdNodePoolsNodePoolIdRecycle<
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
                  (typeof client.v2.kubernetes.clusters)[':cluster_id']['node_pools'][':node_pool_id']['recycle']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v2.kubernetes.clusters)[':cluster_id']['node_pools'][':node_pool_id']['recycle']['$post']
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
      getPostV2KubernetesClustersClusterIdNodePoolsNodePoolIdRecycleMutationOptions<
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

export function getPostV2KubernetesClustersClusterIdUpgradeMutationKey() {
  return ['v2', '/v2/kubernetes/clusters/:cluster_id/upgrade', 'POST'] as const
}

export function getPostV2KubernetesClustersClusterIdUpgradeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v2.kubernetes.clusters)[':cluster_id']['upgrade']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.kubernetes.clusters)[':cluster_id']['upgrade']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2KubernetesClustersClusterIdUpgradeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.kubernetes.clusters)[':cluster_id']['upgrade']['$post']
      >,
    ) {
      return parseResponse(
        client.v2.kubernetes.clusters[':cluster_id'].upgrade.$post(args, options),
      )
    },
  })
}

export function injectPostV2KubernetesClustersClusterIdUpgrade<
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
                  (typeof client.v2.kubernetes.clusters)[':cluster_id']['upgrade']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.kubernetes.clusters)[':cluster_id']['upgrade']['$post']>,
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
    const mutationDefaults = getPostV2KubernetesClustersClusterIdUpgradeMutationOptions<
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

export function getV2KubernetesClustersClusterIdUpgradesQueryKey(
  args: InferRequestType<(typeof client.v2.kubernetes.clusters)[':cluster_id']['upgrades']['$get']>,
) {
  return ['v2', '/v2/kubernetes/clusters/:cluster_id/upgrades', args] as const
}

export function getV2KubernetesClustersClusterIdUpgradesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2.kubernetes.clusters)[':cluster_id']['upgrades']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.kubernetes.clusters)[':cluster_id']['upgrades']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v2.kubernetes.clusters)[':cluster_id']['upgrades']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2KubernetesClustersClusterIdUpgradesQueryKey>
  >({
    queryKey: getV2KubernetesClustersClusterIdUpgradesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.kubernetes.clusters[':cluster_id'].upgrades.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2KubernetesClustersClusterIdUpgrades<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2.kubernetes.clusters)[':cluster_id']['upgrades']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v2.kubernetes.clusters)[':cluster_id']['upgrades']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2.kubernetes.clusters)[':cluster_id']['upgrades']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2KubernetesClustersClusterIdUpgradesQueryKey>
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
      ...getV2KubernetesClustersClusterIdUpgradesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getV2KubernetesClustersClusterIdUserQueryKey(
  args: InferRequestType<(typeof client.v2.kubernetes.clusters)[':cluster_id']['user']['$get']>,
) {
  return ['v2', '/v2/kubernetes/clusters/:cluster_id/user', args] as const
}

export function getV2KubernetesClustersClusterIdUserQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.kubernetes.clusters)[':cluster_id']['user']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.kubernetes.clusters)[':cluster_id']['user']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.kubernetes.clusters)[':cluster_id']['user']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2KubernetesClustersClusterIdUserQueryKey>
  >({
    queryKey: getV2KubernetesClustersClusterIdUserQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.kubernetes.clusters[':cluster_id'].user.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2KubernetesClustersClusterIdUser<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.kubernetes.clusters)[':cluster_id']['user']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v2.kubernetes.clusters)[':cluster_id']['user']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v2.kubernetes.clusters)[':cluster_id']['user']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2KubernetesClustersClusterIdUserQueryKey>
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
      ...getV2KubernetesClustersClusterIdUserQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getV2KubernetesOptionsQueryKey() {
  return ['v2', '/v2/kubernetes/options'] as const
}

export function getV2KubernetesOptionsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.kubernetes.options.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.kubernetes.options.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2KubernetesOptionsQueryKey>
  >({
    queryKey: getV2KubernetesOptionsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.kubernetes.options.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2KubernetesOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.kubernetes.options.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v2.kubernetes.options.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2KubernetesOptionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV2KubernetesOptionsQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getPostV2KubernetesRegistryMutationKey() {
  return ['v2', '/v2/kubernetes/registry', 'POST'] as const
}

export function getPostV2KubernetesRegistryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.kubernetes.registry.$post>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.v2.kubernetes.registry.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2KubernetesRegistryMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.kubernetes.registry.$post>) {
      return parseResponse(client.v2.kubernetes.registry.$post(args, options))
    },
  })
}

export function injectPostV2KubernetesRegistry<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.kubernetes.registry.$post>>>
            >
          >
        | undefined,
        TError,
        InferRequestType<typeof client.v2.kubernetes.registry.$post>,
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
    const mutationDefaults = getPostV2KubernetesRegistryMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteV2KubernetesRegistryMutationKey() {
  return ['v2', '/v2/kubernetes/registry', 'DELETE'] as const
}

export function getDeleteV2KubernetesRegistryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.kubernetes.registry.$delete>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.v2.kubernetes.registry.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2KubernetesRegistryMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.kubernetes.registry.$delete>) {
      return parseResponse(client.v2.kubernetes.registry.$delete(args, options))
    },
  })
}

export function injectDeleteV2KubernetesRegistry<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v2.kubernetes.registry.$delete>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<typeof client.v2.kubernetes.registry.$delete>,
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
    const mutationDefaults = getDeleteV2KubernetesRegistryMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getV2LoadBalancersQueryKey(
  args: InferRequestType<typeof client.v2.load_balancers.$get>,
) {
  return ['v2', '/v2/load_balancers', args] as const
}

export function getV2LoadBalancersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.load_balancers.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v2.load_balancers.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.load_balancers.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV2LoadBalancersQueryKey>
  >({
    queryKey: getV2LoadBalancersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.load_balancers.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV2LoadBalancers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.load_balancers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v2.load_balancers.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v2.load_balancers.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2LoadBalancersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV2LoadBalancersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostV2LoadBalancersMutationKey() {
  return ['v2', '/v2/load_balancers', 'POST'] as const
}

export function getPostV2LoadBalancersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.load_balancers.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v2.load_balancers.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2LoadBalancersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.load_balancers.$post>) {
      return parseResponse(client.v2.load_balancers.$post(args, options))
    },
  })
}

export function injectPostV2LoadBalancers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v2.load_balancers.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v2.load_balancers.$post>,
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
    const mutationDefaults = getPostV2LoadBalancersMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getV2LoadBalancersLbIdQueryKey(
  args: InferRequestType<(typeof client.v2.load_balancers)[':lb_id']['$get']>,
) {
  return ['v2', '/v2/load_balancers/:lb_id', args] as const
}

export function getV2LoadBalancersLbIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.load_balancers)[':lb_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.load_balancers)[':lb_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.load_balancers)[':lb_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2LoadBalancersLbIdQueryKey>
  >({
    queryKey: getV2LoadBalancersLbIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.load_balancers[':lb_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2LoadBalancersLbId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.load_balancers)[':lb_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2.load_balancers)[':lb_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.load_balancers)[':lb_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2LoadBalancersLbIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV2LoadBalancersLbIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPutV2LoadBalancersLbIdMutationKey() {
  return ['v2', '/v2/load_balancers/:lb_id', 'PUT'] as const
}

export function getPutV2LoadBalancersLbIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.load_balancers)[':lb_id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.load_balancers)[':lb_id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV2LoadBalancersLbIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v2.load_balancers)[':lb_id']['$put']>) {
      return parseResponse(client.v2.load_balancers[':lb_id'].$put(args, options))
    },
  })
}

export function injectPutV2LoadBalancersLbId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.load_balancers)[':lb_id']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.load_balancers)[':lb_id']['$put']>,
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
    const mutationDefaults = getPutV2LoadBalancersLbIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteV2LoadBalancersLbIdMutationKey() {
  return ['v2', '/v2/load_balancers/:lb_id', 'DELETE'] as const
}

export function getDeleteV2LoadBalancersLbIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.load_balancers)[':lb_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v2.load_balancers)[':lb_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2LoadBalancersLbIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.load_balancers)[':lb_id']['$delete']>,
    ) {
      return parseResponse(client.v2.load_balancers[':lb_id'].$delete(args, options))
    },
  })
}

export function injectDeleteV2LoadBalancersLbId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.load_balancers)[':lb_id']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.v2.load_balancers)[':lb_id']['$delete']>,
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
    const mutationDefaults = getDeleteV2LoadBalancersLbIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostV2LoadBalancersLbIdDropletsMutationKey() {
  return ['v2', '/v2/load_balancers/:lb_id/droplets', 'POST'] as const
}

export function getPostV2LoadBalancersLbIdDropletsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.load_balancers)[':lb_id']['droplets']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v2.load_balancers)[':lb_id']['droplets']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2LoadBalancersLbIdDropletsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.load_balancers)[':lb_id']['droplets']['$post']>,
    ) {
      return parseResponse(client.v2.load_balancers[':lb_id'].droplets.$post(args, options))
    },
  })
}

export function injectPostV2LoadBalancersLbIdDroplets<
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
                  ReturnType<(typeof client.v2.load_balancers)[':lb_id']['droplets']['$post']>
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.v2.load_balancers)[':lb_id']['droplets']['$post']>,
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
    const mutationDefaults = getPostV2LoadBalancersLbIdDropletsMutationOptions<
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

export function getDeleteV2LoadBalancersLbIdDropletsMutationKey() {
  return ['v2', '/v2/load_balancers/:lb_id/droplets', 'DELETE'] as const
}

export function getDeleteV2LoadBalancersLbIdDropletsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.load_balancers)[':lb_id']['droplets']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v2.load_balancers)[':lb_id']['droplets']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2LoadBalancersLbIdDropletsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.load_balancers)[':lb_id']['droplets']['$delete']>,
    ) {
      return parseResponse(client.v2.load_balancers[':lb_id'].droplets.$delete(args, options))
    },
  })
}

export function injectDeleteV2LoadBalancersLbIdDroplets<
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
                  ReturnType<(typeof client.v2.load_balancers)[':lb_id']['droplets']['$delete']>
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.v2.load_balancers)[':lb_id']['droplets']['$delete']>,
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
    const mutationDefaults = getDeleteV2LoadBalancersLbIdDropletsMutationOptions<
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

export function getPostV2LoadBalancersLbIdForwardingRulesMutationKey() {
  return ['v2', '/v2/load_balancers/:lb_id/forwarding_rules', 'POST'] as const
}

export function getPostV2LoadBalancersLbIdForwardingRulesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.load_balancers)[':lb_id']['forwarding_rules']['$post']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v2.load_balancers)[':lb_id']['forwarding_rules']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2LoadBalancersLbIdForwardingRulesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.load_balancers)[':lb_id']['forwarding_rules']['$post']
      >,
    ) {
      return parseResponse(client.v2.load_balancers[':lb_id'].forwarding_rules.$post(args, options))
    },
  })
}

export function injectPostV2LoadBalancersLbIdForwardingRules<
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
                    (typeof client.v2.load_balancers)[':lb_id']['forwarding_rules']['$post']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.v2.load_balancers)[':lb_id']['forwarding_rules']['$post']>,
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
    const mutationDefaults = getPostV2LoadBalancersLbIdForwardingRulesMutationOptions<
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

export function getDeleteV2LoadBalancersLbIdForwardingRulesMutationKey() {
  return ['v2', '/v2/load_balancers/:lb_id/forwarding_rules', 'DELETE'] as const
}

export function getDeleteV2LoadBalancersLbIdForwardingRulesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.load_balancers)[':lb_id']['forwarding_rules']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v2.load_balancers)[':lb_id']['forwarding_rules']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2LoadBalancersLbIdForwardingRulesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.load_balancers)[':lb_id']['forwarding_rules']['$delete']
      >,
    ) {
      return parseResponse(
        client.v2.load_balancers[':lb_id'].forwarding_rules.$delete(args, options),
      )
    },
  })
}

export function injectDeleteV2LoadBalancersLbIdForwardingRules<
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
                    (typeof client.v2.load_balancers)[':lb_id']['forwarding_rules']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.v2.load_balancers)[':lb_id']['forwarding_rules']['$delete']
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
    const mutationDefaults = getDeleteV2LoadBalancersLbIdForwardingRulesMutationOptions<
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

export function getV2MonitoringAlertsQueryKey(
  args: InferRequestType<typeof client.v2.monitoring.alerts.$get>,
) {
  return ['v2', '/v2/monitoring/alerts', args] as const
}

export function getV2MonitoringAlertsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.monitoring.alerts.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v2.monitoring.alerts.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.monitoring.alerts.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV2MonitoringAlertsQueryKey>
  >({
    queryKey: getV2MonitoringAlertsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.monitoring.alerts.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV2MonitoringAlerts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.monitoring.alerts.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v2.monitoring.alerts.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v2.monitoring.alerts.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2MonitoringAlertsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV2MonitoringAlertsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostV2MonitoringAlertsMutationKey() {
  return ['v2', '/v2/monitoring/alerts', 'POST'] as const
}

export function getPostV2MonitoringAlertsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.monitoring.alerts.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v2.monitoring.alerts.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2MonitoringAlertsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.monitoring.alerts.$post>) {
      return parseResponse(client.v2.monitoring.alerts.$post(args, options))
    },
  })
}

export function injectPostV2MonitoringAlerts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v2.monitoring.alerts.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v2.monitoring.alerts.$post>,
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
    const mutationDefaults = getPostV2MonitoringAlertsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getV2MonitoringAlertsAlertUuidQueryKey(
  args: InferRequestType<(typeof client.v2.monitoring.alerts)[':alert_uuid']['$get']>,
) {
  return ['v2', '/v2/monitoring/alerts/:alert_uuid', args] as const
}

export function getV2MonitoringAlertsAlertUuidQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.monitoring.alerts)[':alert_uuid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.monitoring.alerts)[':alert_uuid']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.monitoring.alerts)[':alert_uuid']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2MonitoringAlertsAlertUuidQueryKey>
  >({
    queryKey: getV2MonitoringAlertsAlertUuidQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.monitoring.alerts[':alert_uuid'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2MonitoringAlertsAlertUuid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.monitoring.alerts)[':alert_uuid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2.monitoring.alerts)[':alert_uuid']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.monitoring.alerts)[':alert_uuid']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2MonitoringAlertsAlertUuidQueryKey>
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
      ...getV2MonitoringAlertsAlertUuidQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPutV2MonitoringAlertsAlertUuidMutationKey() {
  return ['v2', '/v2/monitoring/alerts/:alert_uuid', 'PUT'] as const
}

export function getPutV2MonitoringAlertsAlertUuidMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.monitoring.alerts)[':alert_uuid']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.monitoring.alerts)[':alert_uuid']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV2MonitoringAlertsAlertUuidMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.monitoring.alerts)[':alert_uuid']['$put']>,
    ) {
      return parseResponse(client.v2.monitoring.alerts[':alert_uuid'].$put(args, options))
    },
  })
}

export function injectPutV2MonitoringAlertsAlertUuid<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.monitoring.alerts)[':alert_uuid']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.monitoring.alerts)[':alert_uuid']['$put']>,
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
    const mutationDefaults = getPutV2MonitoringAlertsAlertUuidMutationOptions<
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

export function getDeleteV2MonitoringAlertsAlertUuidMutationKey() {
  return ['v2', '/v2/monitoring/alerts/:alert_uuid', 'DELETE'] as const
}

export function getDeleteV2MonitoringAlertsAlertUuidMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.monitoring.alerts)[':alert_uuid']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v2.monitoring.alerts)[':alert_uuid']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2MonitoringAlertsAlertUuidMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.monitoring.alerts)[':alert_uuid']['$delete']>,
    ) {
      return parseResponse(client.v2.monitoring.alerts[':alert_uuid'].$delete(args, options))
    },
  })
}

export function injectDeleteV2MonitoringAlertsAlertUuid<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.monitoring.alerts)[':alert_uuid']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.v2.monitoring.alerts)[':alert_uuid']['$delete']>,
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
    const mutationDefaults = getDeleteV2MonitoringAlertsAlertUuidMutationOptions<
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

export function getV2MonitoringMetricsDropletBandwidthQueryKey(
  args: InferRequestType<typeof client.v2.monitoring.metrics.droplet.bandwidth.$get>,
) {
  return ['v2', '/v2/monitoring/metrics/droplet/bandwidth', args] as const
}

export function getV2MonitoringMetricsDropletBandwidthQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.v2.monitoring.metrics.droplet.bandwidth.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.monitoring.metrics.droplet.bandwidth.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v2.monitoring.metrics.droplet.bandwidth.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2MonitoringMetricsDropletBandwidthQueryKey>
  >({
    queryKey: getV2MonitoringMetricsDropletBandwidthQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.monitoring.metrics.droplet.bandwidth.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2MonitoringMetricsDropletBandwidth<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.v2.monitoring.metrics.droplet.bandwidth.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v2.monitoring.metrics.droplet.bandwidth.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v2.monitoring.metrics.droplet.bandwidth.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2MonitoringMetricsDropletBandwidthQueryKey>
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
      ...getV2MonitoringMetricsDropletBandwidthQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getV2MonitoringMetricsDropletCpuQueryKey(
  args: InferRequestType<typeof client.v2.monitoring.metrics.droplet.cpu.$get>,
) {
  return ['v2', '/v2/monitoring/metrics/droplet/cpu', args] as const
}

export function getV2MonitoringMetricsDropletCpuQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.v2.monitoring.metrics.droplet.cpu.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.monitoring.metrics.droplet.cpu.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v2.monitoring.metrics.droplet.cpu.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2MonitoringMetricsDropletCpuQueryKey>
  >({
    queryKey: getV2MonitoringMetricsDropletCpuQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.monitoring.metrics.droplet.cpu.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2MonitoringMetricsDropletCpu<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.v2.monitoring.metrics.droplet.cpu.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v2.monitoring.metrics.droplet.cpu.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v2.monitoring.metrics.droplet.cpu.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2MonitoringMetricsDropletCpuQueryKey>
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
      ...getV2MonitoringMetricsDropletCpuQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getV2MonitoringMetricsDropletFilesystemFreeQueryKey(
  args: InferRequestType<typeof client.v2.monitoring.metrics.droplet.filesystem_free.$get>,
) {
  return ['v2', '/v2/monitoring/metrics/droplet/filesystem_free', args] as const
}

export function getV2MonitoringMetricsDropletFilesystemFreeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.v2.monitoring.metrics.droplet.filesystem_free.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.monitoring.metrics.droplet.filesystem_free.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v2.monitoring.metrics.droplet.filesystem_free.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2MonitoringMetricsDropletFilesystemFreeQueryKey>
  >({
    queryKey: getV2MonitoringMetricsDropletFilesystemFreeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.monitoring.metrics.droplet.filesystem_free.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2MonitoringMetricsDropletFilesystemFree<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.v2.monitoring.metrics.droplet.filesystem_free.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v2.monitoring.metrics.droplet.filesystem_free.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v2.monitoring.metrics.droplet.filesystem_free.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2MonitoringMetricsDropletFilesystemFreeQueryKey>
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
      ...getV2MonitoringMetricsDropletFilesystemFreeQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getV2MonitoringMetricsDropletFilesystemSizeQueryKey(
  args: InferRequestType<typeof client.v2.monitoring.metrics.droplet.filesystem_size.$get>,
) {
  return ['v2', '/v2/monitoring/metrics/droplet/filesystem_size', args] as const
}

export function getV2MonitoringMetricsDropletFilesystemSizeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.v2.monitoring.metrics.droplet.filesystem_size.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.monitoring.metrics.droplet.filesystem_size.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v2.monitoring.metrics.droplet.filesystem_size.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2MonitoringMetricsDropletFilesystemSizeQueryKey>
  >({
    queryKey: getV2MonitoringMetricsDropletFilesystemSizeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.monitoring.metrics.droplet.filesystem_size.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2MonitoringMetricsDropletFilesystemSize<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.v2.monitoring.metrics.droplet.filesystem_size.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v2.monitoring.metrics.droplet.filesystem_size.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v2.monitoring.metrics.droplet.filesystem_size.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2MonitoringMetricsDropletFilesystemSizeQueryKey>
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
      ...getV2MonitoringMetricsDropletFilesystemSizeQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getV2MonitoringMetricsDropletLoad1QueryKey(
  args: InferRequestType<typeof client.v2.monitoring.metrics.droplet.load_1.$get>,
) {
  return ['v2', '/v2/monitoring/metrics/droplet/load_1', args] as const
}

export function getV2MonitoringMetricsDropletLoad1QueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.v2.monitoring.metrics.droplet.load_1.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.monitoring.metrics.droplet.load_1.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v2.monitoring.metrics.droplet.load_1.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2MonitoringMetricsDropletLoad1QueryKey>
  >({
    queryKey: getV2MonitoringMetricsDropletLoad1QueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.monitoring.metrics.droplet.load_1.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2MonitoringMetricsDropletLoad1<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.v2.monitoring.metrics.droplet.load_1.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v2.monitoring.metrics.droplet.load_1.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v2.monitoring.metrics.droplet.load_1.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2MonitoringMetricsDropletLoad1QueryKey>
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
      ...getV2MonitoringMetricsDropletLoad1QueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getV2MonitoringMetricsDropletLoad15QueryKey(
  args: InferRequestType<typeof client.v2.monitoring.metrics.droplet.load_15.$get>,
) {
  return ['v2', '/v2/monitoring/metrics/droplet/load_15', args] as const
}

export function getV2MonitoringMetricsDropletLoad15QueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.v2.monitoring.metrics.droplet.load_15.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.monitoring.metrics.droplet.load_15.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v2.monitoring.metrics.droplet.load_15.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2MonitoringMetricsDropletLoad15QueryKey>
  >({
    queryKey: getV2MonitoringMetricsDropletLoad15QueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.monitoring.metrics.droplet.load_15.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2MonitoringMetricsDropletLoad15<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.v2.monitoring.metrics.droplet.load_15.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v2.monitoring.metrics.droplet.load_15.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v2.monitoring.metrics.droplet.load_15.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2MonitoringMetricsDropletLoad15QueryKey>
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
      ...getV2MonitoringMetricsDropletLoad15QueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getV2MonitoringMetricsDropletLoad5QueryKey(
  args: InferRequestType<typeof client.v2.monitoring.metrics.droplet.load_5.$get>,
) {
  return ['v2', '/v2/monitoring/metrics/droplet/load_5', args] as const
}

export function getV2MonitoringMetricsDropletLoad5QueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.v2.monitoring.metrics.droplet.load_5.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.monitoring.metrics.droplet.load_5.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v2.monitoring.metrics.droplet.load_5.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2MonitoringMetricsDropletLoad5QueryKey>
  >({
    queryKey: getV2MonitoringMetricsDropletLoad5QueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.monitoring.metrics.droplet.load_5.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2MonitoringMetricsDropletLoad5<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.v2.monitoring.metrics.droplet.load_5.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v2.monitoring.metrics.droplet.load_5.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v2.monitoring.metrics.droplet.load_5.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2MonitoringMetricsDropletLoad5QueryKey>
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
      ...getV2MonitoringMetricsDropletLoad5QueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getV2MonitoringMetricsDropletMemoryAvailableQueryKey(
  args: InferRequestType<typeof client.v2.monitoring.metrics.droplet.memory_available.$get>,
) {
  return ['v2', '/v2/monitoring/metrics/droplet/memory_available', args] as const
}

export function getV2MonitoringMetricsDropletMemoryAvailableQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.v2.monitoring.metrics.droplet.memory_available.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.monitoring.metrics.droplet.memory_available.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v2.monitoring.metrics.droplet.memory_available.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2MonitoringMetricsDropletMemoryAvailableQueryKey>
  >({
    queryKey: getV2MonitoringMetricsDropletMemoryAvailableQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.monitoring.metrics.droplet.memory_available.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2MonitoringMetricsDropletMemoryAvailable<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.v2.monitoring.metrics.droplet.memory_available.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v2.monitoring.metrics.droplet.memory_available.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v2.monitoring.metrics.droplet.memory_available.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2MonitoringMetricsDropletMemoryAvailableQueryKey>
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
      ...getV2MonitoringMetricsDropletMemoryAvailableQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getV2MonitoringMetricsDropletMemoryCachedQueryKey(
  args: InferRequestType<typeof client.v2.monitoring.metrics.droplet.memory_cached.$get>,
) {
  return ['v2', '/v2/monitoring/metrics/droplet/memory_cached', args] as const
}

export function getV2MonitoringMetricsDropletMemoryCachedQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.v2.monitoring.metrics.droplet.memory_cached.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.monitoring.metrics.droplet.memory_cached.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v2.monitoring.metrics.droplet.memory_cached.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2MonitoringMetricsDropletMemoryCachedQueryKey>
  >({
    queryKey: getV2MonitoringMetricsDropletMemoryCachedQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.monitoring.metrics.droplet.memory_cached.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2MonitoringMetricsDropletMemoryCached<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.v2.monitoring.metrics.droplet.memory_cached.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v2.monitoring.metrics.droplet.memory_cached.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v2.monitoring.metrics.droplet.memory_cached.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2MonitoringMetricsDropletMemoryCachedQueryKey>
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
      ...getV2MonitoringMetricsDropletMemoryCachedQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getV2MonitoringMetricsDropletMemoryFreeQueryKey(
  args: InferRequestType<typeof client.v2.monitoring.metrics.droplet.memory_free.$get>,
) {
  return ['v2', '/v2/monitoring/metrics/droplet/memory_free', args] as const
}

export function getV2MonitoringMetricsDropletMemoryFreeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.v2.monitoring.metrics.droplet.memory_free.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.monitoring.metrics.droplet.memory_free.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v2.monitoring.metrics.droplet.memory_free.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2MonitoringMetricsDropletMemoryFreeQueryKey>
  >({
    queryKey: getV2MonitoringMetricsDropletMemoryFreeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.monitoring.metrics.droplet.memory_free.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2MonitoringMetricsDropletMemoryFree<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.v2.monitoring.metrics.droplet.memory_free.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v2.monitoring.metrics.droplet.memory_free.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v2.monitoring.metrics.droplet.memory_free.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2MonitoringMetricsDropletMemoryFreeQueryKey>
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
      ...getV2MonitoringMetricsDropletMemoryFreeQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getV2MonitoringMetricsDropletMemoryTotalQueryKey(
  args: InferRequestType<typeof client.v2.monitoring.metrics.droplet.memory_total.$get>,
) {
  return ['v2', '/v2/monitoring/metrics/droplet/memory_total', args] as const
}

export function getV2MonitoringMetricsDropletMemoryTotalQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.v2.monitoring.metrics.droplet.memory_total.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.monitoring.metrics.droplet.memory_total.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v2.monitoring.metrics.droplet.memory_total.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2MonitoringMetricsDropletMemoryTotalQueryKey>
  >({
    queryKey: getV2MonitoringMetricsDropletMemoryTotalQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.monitoring.metrics.droplet.memory_total.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2MonitoringMetricsDropletMemoryTotal<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.v2.monitoring.metrics.droplet.memory_total.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v2.monitoring.metrics.droplet.memory_total.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v2.monitoring.metrics.droplet.memory_total.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2MonitoringMetricsDropletMemoryTotalQueryKey>
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
      ...getV2MonitoringMetricsDropletMemoryTotalQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getV2ProjectsQueryKey(args: InferRequestType<typeof client.v2.projects.$get>) {
  return ['v2', '/v2/projects', args] as const
}

export function getV2ProjectsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.projects.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v2.projects.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.projects.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV2ProjectsQueryKey>
  >({
    queryKey: getV2ProjectsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.projects.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV2Projects<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.projects.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v2.projects.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.projects.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV2ProjectsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV2ProjectsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostV2ProjectsMutationKey() {
  return ['v2', '/v2/projects', 'POST'] as const
}

export function getPostV2ProjectsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.projects.$post>>>>>,
    TError,
    InferRequestType<typeof client.v2.projects.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2ProjectsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.projects.$post>) {
      return parseResponse(client.v2.projects.$post(args, options))
    },
  })
}

export function injectPostV2Projects<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.projects.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v2.projects.$post>,
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
    const mutationDefaults = getPostV2ProjectsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getV2ProjectsDefaultQueryKey() {
  return ['v2', '/v2/projects/default'] as const
}

export function getV2ProjectsDefaultQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.projects.default.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.projects.default.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV2ProjectsDefaultQueryKey>
  >({
    queryKey: getV2ProjectsDefaultQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.projects.default.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2ProjectsDefault<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.projects.default.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v2.projects.default.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2ProjectsDefaultQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV2ProjectsDefaultQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getPutV2ProjectsDefaultMutationKey() {
  return ['v2', '/v2/projects/default', 'PUT'] as const
}

export function getPutV2ProjectsDefaultMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.projects.default.$put>>>>
    >,
    TError,
    InferRequestType<typeof client.v2.projects.default.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutV2ProjectsDefaultMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.projects.default.$put>) {
      return parseResponse(client.v2.projects.default.$put(args, options))
    },
  })
}

export function injectPutV2ProjectsDefault<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v2.projects.default.$put>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v2.projects.default.$put>,
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
    const mutationDefaults = getPutV2ProjectsDefaultMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPatchV2ProjectsDefaultMutationKey() {
  return ['v2', '/v2/projects/default', 'PATCH'] as const
}

export function getPatchV2ProjectsDefaultMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.projects.default.$patch>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v2.projects.default.$patch>,
    TOnMutateResult
  >({
    mutationKey: getPatchV2ProjectsDefaultMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.projects.default.$patch>) {
      return parseResponse(client.v2.projects.default.$patch(args, options))
    },
  })
}

export function injectPatchV2ProjectsDefault<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v2.projects.default.$patch>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v2.projects.default.$patch>,
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
    const mutationDefaults = getPatchV2ProjectsDefaultMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getV2ProjectsDefaultResourcesQueryKey() {
  return ['v2', '/v2/projects/default/resources'] as const
}

export function getV2ProjectsDefaultResourcesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v2.projects.default.resources.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.projects.default.resources.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2ProjectsDefaultResourcesQueryKey>
  >({
    queryKey: getV2ProjectsDefaultResourcesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.projects.default.resources.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2ProjectsDefaultResources<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v2.projects.default.resources.$get>>>
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
              Awaited<ReturnType<typeof client.v2.projects.default.resources.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2ProjectsDefaultResourcesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV2ProjectsDefaultResourcesQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getPostV2ProjectsDefaultResourcesMutationKey() {
  return ['v2', '/v2/projects/default/resources', 'POST'] as const
}

export function getPostV2ProjectsDefaultResourcesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.projects.default.resources.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v2.projects.default.resources.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2ProjectsDefaultResourcesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.projects.default.resources.$post>) {
      return parseResponse(client.v2.projects.default.resources.$post(args, options))
    },
  })
}

export function injectPostV2ProjectsDefaultResources<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v2.projects.default.resources.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.v2.projects.default.resources.$post>,
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
    const mutationDefaults = getPostV2ProjectsDefaultResourcesMutationOptions<
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

export function getV2ProjectsProjectIdQueryKey(
  args: InferRequestType<(typeof client.v2.projects)[':project_id']['$get']>,
) {
  return ['v2', '/v2/projects/:project_id', args] as const
}

export function getV2ProjectsProjectIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.projects)[':project_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.projects)[':project_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.projects)[':project_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2ProjectsProjectIdQueryKey>
  >({
    queryKey: getV2ProjectsProjectIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.projects[':project_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2ProjectsProjectId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.projects)[':project_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2.projects)[':project_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.projects)[':project_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2ProjectsProjectIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV2ProjectsProjectIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPutV2ProjectsProjectIdMutationKey() {
  return ['v2', '/v2/projects/:project_id', 'PUT'] as const
}

export function getPutV2ProjectsProjectIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.projects)[':project_id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.projects)[':project_id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV2ProjectsProjectIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v2.projects)[':project_id']['$put']>) {
      return parseResponse(client.v2.projects[':project_id'].$put(args, options))
    },
  })
}

export function injectPutV2ProjectsProjectId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.projects)[':project_id']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.projects)[':project_id']['$put']>,
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
    const mutationDefaults = getPutV2ProjectsProjectIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteV2ProjectsProjectIdMutationKey() {
  return ['v2', '/v2/projects/:project_id', 'DELETE'] as const
}

export function getDeleteV2ProjectsProjectIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.projects)[':project_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v2.projects)[':project_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2ProjectsProjectIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.projects)[':project_id']['$delete']>,
    ) {
      return parseResponse(client.v2.projects[':project_id'].$delete(args, options))
    },
  })
}

export function injectDeleteV2ProjectsProjectId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.projects)[':project_id']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.v2.projects)[':project_id']['$delete']>,
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
    const mutationDefaults = getDeleteV2ProjectsProjectIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPatchV2ProjectsProjectIdMutationKey() {
  return ['v2', '/v2/projects/:project_id', 'PATCH'] as const
}

export function getPatchV2ProjectsProjectIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.projects)[':project_id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.projects)[':project_id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV2ProjectsProjectIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v2.projects)[':project_id']['$patch']>) {
      return parseResponse(client.v2.projects[':project_id'].$patch(args, options))
    },
  })
}

export function injectPatchV2ProjectsProjectId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.projects)[':project_id']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.projects)[':project_id']['$patch']>,
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
    const mutationDefaults = getPatchV2ProjectsProjectIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getV2ProjectsProjectIdResourcesQueryKey(
  args: InferRequestType<(typeof client.v2.projects)[':project_id']['resources']['$get']>,
) {
  return ['v2', '/v2/projects/:project_id/resources', args] as const
}

export function getV2ProjectsProjectIdResourcesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.projects)[':project_id']['resources']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.projects)[':project_id']['resources']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.projects)[':project_id']['resources']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2ProjectsProjectIdResourcesQueryKey>
  >({
    queryKey: getV2ProjectsProjectIdResourcesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.projects[':project_id'].resources.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2ProjectsProjectIdResources<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.projects)[':project_id']['resources']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2.projects)[':project_id']['resources']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.projects)[':project_id']['resources']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2ProjectsProjectIdResourcesQueryKey>
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
      ...getV2ProjectsProjectIdResourcesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostV2ProjectsProjectIdResourcesMutationKey() {
  return ['v2', '/v2/projects/:project_id/resources', 'POST'] as const
}

export function getPostV2ProjectsProjectIdResourcesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.projects)[':project_id']['resources']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.projects)[':project_id']['resources']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2ProjectsProjectIdResourcesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.projects)[':project_id']['resources']['$post']>,
    ) {
      return parseResponse(client.v2.projects[':project_id'].resources.$post(args, options))
    },
  })
}

export function injectPostV2ProjectsProjectIdResources<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.projects)[':project_id']['resources']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.projects)[':project_id']['resources']['$post']>,
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
    const mutationDefaults = getPostV2ProjectsProjectIdResourcesMutationOptions<
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

export function getV2RegionsQueryKey(args: InferRequestType<typeof client.v2.regions.$get>) {
  return ['v2', '/v2/regions', args] as const
}

export function getV2RegionsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.regions.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v2.regions.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.regions.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV2RegionsQueryKey>
  >({
    queryKey: getV2RegionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.regions.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV2Regions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.regions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v2.regions.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.regions.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV2RegionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV2RegionsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getV2RegistryQueryKey() {
  return ['v2', '/v2/registry'] as const
}

export function getV2RegistryQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.registry.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.registry.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV2RegistryQueryKey>
  >({
    queryKey: getV2RegistryQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.registry.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV2Registry<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.registry.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.registry.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV2RegistryQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV2RegistryQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getPostV2RegistryMutationKey() {
  return ['v2', '/v2/registry', 'POST'] as const
}

export function getPostV2RegistryMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.registry.$post>>>>>,
    TError,
    InferRequestType<typeof client.v2.registry.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2RegistryMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.registry.$post>) {
      return parseResponse(client.v2.registry.$post(args, options))
    },
  })
}

export function injectPostV2Registry<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.registry.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v2.registry.$post>,
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
    const mutationDefaults = getPostV2RegistryMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteV2RegistryMutationKey() {
  return ['v2', '/v2/registry', 'DELETE'] as const
}

export function getDeleteV2RegistryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.registry.$delete>>>>
      >
    | undefined,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2RegistryMutationKey(),
    async mutationFn() {
      return parseResponse(client.v2.registry.$delete(undefined, options))
    },
  })
}

export function injectDeleteV2Registry<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.registry.$delete>>>>
          >
        | undefined,
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
    const mutationDefaults = getDeleteV2RegistryMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getV2RegistryDockerCredentialsQueryKey(
  args: InferRequestType<(typeof client.v2.registry)['docker-credentials']['$get']>,
) {
  return ['v2', '/v2/registry/docker-credentials', args] as const
}

export function getV2RegistryDockerCredentialsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.registry)['docker-credentials']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.registry)['docker-credentials']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.registry)['docker-credentials']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2RegistryDockerCredentialsQueryKey>
  >({
    queryKey: getV2RegistryDockerCredentialsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.registry['docker-credentials'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2RegistryDockerCredentials<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.registry)['docker-credentials']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2.registry)['docker-credentials']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.registry)['docker-credentials']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2RegistryDockerCredentialsQueryKey>
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
      ...getV2RegistryDockerCredentialsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getV2RegistryOptionsQueryKey() {
  return ['v2', '/v2/registry/options'] as const
}

export function getV2RegistryOptionsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.registry.options.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.registry.options.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV2RegistryOptionsQueryKey>
  >({
    queryKey: getV2RegistryOptionsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.registry.options.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2RegistryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.registry.options.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v2.registry.options.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2RegistryOptionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV2RegistryOptionsQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getV2RegistrySubscriptionQueryKey() {
  return ['v2', '/v2/registry/subscription'] as const
}

export function getV2RegistrySubscriptionQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v2.registry.subscription.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.registry.subscription.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2RegistrySubscriptionQueryKey>
  >({
    queryKey: getV2RegistrySubscriptionQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.registry.subscription.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2RegistrySubscription<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v2.registry.subscription.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v2.registry.subscription.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2RegistrySubscriptionQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV2RegistrySubscriptionQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getPostV2RegistrySubscriptionMutationKey() {
  return ['v2', '/v2/registry/subscription', 'POST'] as const
}

export function getPostV2RegistrySubscriptionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.registry.subscription.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v2.registry.subscription.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2RegistrySubscriptionMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.registry.subscription.$post>) {
      return parseResponse(client.v2.registry.subscription.$post(args, options))
    },
  })
}

export function injectPostV2RegistrySubscription<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v2.registry.subscription.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v2.registry.subscription.$post>,
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
    const mutationDefaults = getPostV2RegistrySubscriptionMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostV2RegistryValidateNameMutationKey() {
  return ['v2', '/v2/registry/validate-name', 'POST'] as const
}

export function getPostV2RegistryValidateNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.registry)['validate-name']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v2.registry)['validate-name']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2RegistryValidateNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.registry)['validate-name']['$post']>,
    ) {
      return parseResponse(client.v2.registry['validate-name'].$post(args, options))
    },
  })
}

export function injectPostV2RegistryValidateName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.registry)['validate-name']['$post']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.v2.registry)['validate-name']['$post']>,
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
    const mutationDefaults = getPostV2RegistryValidateNameMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getV2RegistryRegistryNameGarbageCollectionQueryKey(
  args: InferRequestType<
    (typeof client.v2.registry)[':registry_name']['garbage-collection']['$get']
  >,
) {
  return ['v2', '/v2/registry/:registry_name/garbage-collection', args] as const
}

export function getV2RegistryRegistryNameGarbageCollectionQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2.registry)[':registry_name']['garbage-collection']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.registry)[':registry_name']['garbage-collection']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v2.registry)[':registry_name']['garbage-collection']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2RegistryRegistryNameGarbageCollectionQueryKey>
  >({
    queryKey: getV2RegistryRegistryNameGarbageCollectionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.registry[':registry_name']['garbage-collection'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2RegistryRegistryNameGarbageCollection<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2.registry)[':registry_name']['garbage-collection']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v2.registry)[':registry_name']['garbage-collection']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2.registry)[':registry_name']['garbage-collection']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2RegistryRegistryNameGarbageCollectionQueryKey>
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
      ...getV2RegistryRegistryNameGarbageCollectionQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPostV2RegistryRegistryNameGarbageCollectionMutationKey() {
  return ['v2', '/v2/registry/:registry_name/garbage-collection', 'POST'] as const
}

export function getPostV2RegistryRegistryNameGarbageCollectionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v2.registry)[':registry_name']['garbage-collection']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.registry)[':registry_name']['garbage-collection']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2RegistryRegistryNameGarbageCollectionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.registry)[':registry_name']['garbage-collection']['$post']
      >,
    ) {
      return parseResponse(
        client.v2.registry[':registry_name']['garbage-collection'].$post(args, options),
      )
    },
  })
}

export function injectPostV2RegistryRegistryNameGarbageCollection<
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
                  (typeof client.v2.registry)[':registry_name']['garbage-collection']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v2.registry)[':registry_name']['garbage-collection']['$post']
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
    const mutationDefaults = getPostV2RegistryRegistryNameGarbageCollectionMutationOptions<
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

export function getPutV2RegistryRegistryNameGarbageCollectionGarbageCollectionUuidMutationKey() {
  return [
    'v2',
    '/v2/registry/:registry_name/garbage-collection/:garbage_collection_uuid',
    'PUT',
  ] as const
}

export function getPutV2RegistryRegistryNameGarbageCollectionGarbageCollectionUuidMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.registry)[':registry_name']['garbage-collection'][':garbage_collection_uuid']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v2.registry)[':registry_name']['garbage-collection'][':garbage_collection_uuid']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutV2RegistryRegistryNameGarbageCollectionGarbageCollectionUuidMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.registry)[':registry_name']['garbage-collection'][':garbage_collection_uuid']['$put']
      >,
    ) {
      return parseResponse(
        client.v2.registry[':registry_name']['garbage-collection'][':garbage_collection_uuid'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPutV2RegistryRegistryNameGarbageCollectionGarbageCollectionUuid<
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
                  (typeof client.v2.registry)[':registry_name']['garbage-collection'][':garbage_collection_uuid']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v2.registry)[':registry_name']['garbage-collection'][':garbage_collection_uuid']['$put']
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
      getPutV2RegistryRegistryNameGarbageCollectionGarbageCollectionUuidMutationOptions<
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

export function getV2RegistryRegistryNameGarbageCollectionsQueryKey(
  args: InferRequestType<
    (typeof client.v2.registry)[':registry_name']['garbage-collections']['$get']
  >,
) {
  return ['v2', '/v2/registry/:registry_name/garbage-collections', args] as const
}

export function getV2RegistryRegistryNameGarbageCollectionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2.registry)[':registry_name']['garbage-collections']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.registry)[':registry_name']['garbage-collections']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v2.registry)[':registry_name']['garbage-collections']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2RegistryRegistryNameGarbageCollectionsQueryKey>
  >({
    queryKey: getV2RegistryRegistryNameGarbageCollectionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.registry[':registry_name']['garbage-collections'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2RegistryRegistryNameGarbageCollections<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2.registry)[':registry_name']['garbage-collections']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v2.registry)[':registry_name']['garbage-collections']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2.registry)[':registry_name']['garbage-collections']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2RegistryRegistryNameGarbageCollectionsQueryKey>
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
      ...getV2RegistryRegistryNameGarbageCollectionsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getV2RegistryRegistryNameRepositoriesQueryKey(
  args: InferRequestType<(typeof client.v2.registry)[':registry_name']['repositories']['$get']>,
) {
  return ['v2', '/v2/registry/:registry_name/repositories', args] as const
}

export function getV2RegistryRegistryNameRepositoriesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.registry)[':registry_name']['repositories']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.registry)[':registry_name']['repositories']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.registry)[':registry_name']['repositories']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2RegistryRegistryNameRepositoriesQueryKey>
  >({
    queryKey: getV2RegistryRegistryNameRepositoriesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.registry[':registry_name'].repositories.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2RegistryRegistryNameRepositories<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.registry)[':registry_name']['repositories']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v2.registry)[':registry_name']['repositories']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v2.registry)[':registry_name']['repositories']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2RegistryRegistryNameRepositoriesQueryKey>
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
      ...getV2RegistryRegistryNameRepositoriesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getV2RegistryRegistryNameRepositoriesV2QueryKey(
  args: InferRequestType<(typeof client.v2.registry)[':registry_name']['repositoriesV2']['$get']>,
) {
  return ['v2', '/v2/registry/:registry_name/repositoriesV2', args] as const
}

export function getV2RegistryRegistryNameRepositoriesV2QueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.registry)[':registry_name']['repositoriesV2']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.registry)[':registry_name']['repositoriesV2']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v2.registry)[':registry_name']['repositoriesV2']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2RegistryRegistryNameRepositoriesV2QueryKey>
  >({
    queryKey: getV2RegistryRegistryNameRepositoriesV2QueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.registry[':registry_name'].repositoriesV2.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2RegistryRegistryNameRepositoriesV2<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.registry)[':registry_name']['repositoriesV2']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v2.registry)[':registry_name']['repositoriesV2']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v2.registry)[':registry_name']['repositoriesV2']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2RegistryRegistryNameRepositoriesV2QueryKey>
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
      ...getV2RegistryRegistryNameRepositoriesV2QueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getV2RegistryRegistryNameRepositoryNameDigestsQueryKey(
  args: InferRequestType<
    (typeof client.v2.registry)[':registry_name'][':repository_name']['digests']['$get']
  >,
) {
  return ['v2', '/v2/registry/:registry_name/:repository_name/digests', args] as const
}

export function getV2RegistryRegistryNameRepositoryNameDigestsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2.registry)[':registry_name'][':repository_name']['digests']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.registry)[':registry_name'][':repository_name']['digests']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.registry)[':registry_name'][':repository_name']['digests']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2RegistryRegistryNameRepositoryNameDigestsQueryKey>
  >({
    queryKey: getV2RegistryRegistryNameRepositoryNameDigestsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.registry[':registry_name'][':repository_name'].digests.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2RegistryRegistryNameRepositoryNameDigests<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2.registry)[':registry_name'][':repository_name']['digests']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v2.registry)[':registry_name'][':repository_name']['digests']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2.registry)[':registry_name'][':repository_name']['digests']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2RegistryRegistryNameRepositoryNameDigestsQueryKey>
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
      ...getV2RegistryRegistryNameRepositoryNameDigestsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getDeleteV2RegistryRegistryNameRepositoryNameDigestsManifestDigestMutationKey() {
  return [
    'v2',
    '/v2/registry/:registry_name/:repository_name/digests/:manifest_digest',
    'DELETE',
  ] as const
}

export function getDeleteV2RegistryRegistryNameRepositoryNameDigestsManifestDigestMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.registry)[':registry_name'][':repository_name']['digests'][':manifest_digest']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.v2.registry)[':registry_name'][':repository_name']['digests'][':manifest_digest']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2RegistryRegistryNameRepositoryNameDigestsManifestDigestMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.registry)[':registry_name'][':repository_name']['digests'][':manifest_digest']['$delete']
      >,
    ) {
      return parseResponse(
        client.v2.registry[':registry_name'][':repository_name'].digests[
          ':manifest_digest'
        ].$delete(args, options),
      )
    },
  })
}

export function injectDeleteV2RegistryRegistryNameRepositoryNameDigestsManifestDigest<
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
                    (typeof client.v2.registry)[':registry_name'][':repository_name']['digests'][':manifest_digest']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.v2.registry)[':registry_name'][':repository_name']['digests'][':manifest_digest']['$delete']
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
      getDeleteV2RegistryRegistryNameRepositoryNameDigestsManifestDigestMutationOptions<
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

export function getV2RegistryRegistryNameRepositoryNameTagsQueryKey(
  args: InferRequestType<
    (typeof client.v2.registry)[':registry_name'][':repository_name']['tags']['$get']
  >,
) {
  return ['v2', '/v2/registry/:registry_name/:repository_name/tags', args] as const
}

export function getV2RegistryRegistryNameRepositoryNameTagsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2.registry)[':registry_name'][':repository_name']['tags']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.registry)[':registry_name'][':repository_name']['tags']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.registry)[':registry_name'][':repository_name']['tags']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2RegistryRegistryNameRepositoryNameTagsQueryKey>
  >({
    queryKey: getV2RegistryRegistryNameRepositoryNameTagsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.registry[':registry_name'][':repository_name'].tags.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2RegistryRegistryNameRepositoryNameTags<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2.registry)[':registry_name'][':repository_name']['tags']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v2.registry)[':registry_name'][':repository_name']['tags']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2.registry)[':registry_name'][':repository_name']['tags']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2RegistryRegistryNameRepositoryNameTagsQueryKey>
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
      ...getV2RegistryRegistryNameRepositoryNameTagsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getDeleteV2RegistryRegistryNameRepositoryNameTagsRepositoryTagMutationKey() {
  return [
    'v2',
    '/v2/registry/:registry_name/:repository_name/tags/:repository_tag',
    'DELETE',
  ] as const
}

export function getDeleteV2RegistryRegistryNameRepositoryNameTagsRepositoryTagMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.registry)[':registry_name'][':repository_name']['tags'][':repository_tag']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.v2.registry)[':registry_name'][':repository_name']['tags'][':repository_tag']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2RegistryRegistryNameRepositoryNameTagsRepositoryTagMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.registry)[':registry_name'][':repository_name']['tags'][':repository_tag']['$delete']
      >,
    ) {
      return parseResponse(
        client.v2.registry[':registry_name'][':repository_name'].tags[':repository_tag'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function injectDeleteV2RegistryRegistryNameRepositoryNameTagsRepositoryTag<
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
                    (typeof client.v2.registry)[':registry_name'][':repository_name']['tags'][':repository_tag']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.v2.registry)[':registry_name'][':repository_name']['tags'][':repository_tag']['$delete']
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
      getDeleteV2RegistryRegistryNameRepositoryNameTagsRepositoryTagMutationOptions<
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

export function getV2ReportsDropletNeighborsIdsQueryKey() {
  return ['v2', '/v2/reports/droplet_neighbors_ids'] as const
}

export function getV2ReportsDropletNeighborsIdsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v2.reports.droplet_neighbors_ids.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v2.reports.droplet_neighbors_ids.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2ReportsDropletNeighborsIdsQueryKey>
  >({
    queryKey: getV2ReportsDropletNeighborsIdsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.reports.droplet_neighbors_ids.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2ReportsDropletNeighborsIds<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v2.reports.droplet_neighbors_ids.$get>>>
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
              Awaited<ReturnType<typeof client.v2.reports.droplet_neighbors_ids.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2ReportsDropletNeighborsIdsQueryKey>
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
      ...getV2ReportsDropletNeighborsIdsQueryOptions<TData, TError>(clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getV2ReservedIpsQueryKey(
  args: InferRequestType<typeof client.v2.reserved_ips.$get>,
) {
  return ['v2', '/v2/reserved_ips', args] as const
}

export function getV2ReservedIpsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.reserved_ips.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v2.reserved_ips.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.reserved_ips.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV2ReservedIpsQueryKey>
  >({
    queryKey: getV2ReservedIpsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.reserved_ips.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV2ReservedIps<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.reserved_ips.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v2.reserved_ips.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.reserved_ips.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV2ReservedIpsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV2ReservedIpsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostV2ReservedIpsMutationKey() {
  return ['v2', '/v2/reserved_ips', 'POST'] as const
}

export function getPostV2ReservedIpsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.reserved_ips.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v2.reserved_ips.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2ReservedIpsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.reserved_ips.$post>) {
      return parseResponse(client.v2.reserved_ips.$post(args, options))
    },
  })
}

export function injectPostV2ReservedIps<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.reserved_ips.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v2.reserved_ips.$post>,
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
    const mutationDefaults = getPostV2ReservedIpsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getV2ReservedIpsReservedIpQueryKey(
  args: InferRequestType<(typeof client.v2.reserved_ips)[':reserved_ip']['$get']>,
) {
  return ['v2', '/v2/reserved_ips/:reserved_ip', args] as const
}

export function getV2ReservedIpsReservedIpQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.reserved_ips)[':reserved_ip']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.reserved_ips)[':reserved_ip']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.reserved_ips)[':reserved_ip']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2ReservedIpsReservedIpQueryKey>
  >({
    queryKey: getV2ReservedIpsReservedIpQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.reserved_ips[':reserved_ip'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2ReservedIpsReservedIp<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.reserved_ips)[':reserved_ip']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2.reserved_ips)[':reserved_ip']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.reserved_ips)[':reserved_ip']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2ReservedIpsReservedIpQueryKey>
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
      ...getV2ReservedIpsReservedIpQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getDeleteV2ReservedIpsReservedIpMutationKey() {
  return ['v2', '/v2/reserved_ips/:reserved_ip', 'DELETE'] as const
}

export function getDeleteV2ReservedIpsReservedIpMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.reserved_ips)[':reserved_ip']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v2.reserved_ips)[':reserved_ip']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2ReservedIpsReservedIpMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.reserved_ips)[':reserved_ip']['$delete']>,
    ) {
      return parseResponse(client.v2.reserved_ips[':reserved_ip'].$delete(args, options))
    },
  })
}

export function injectDeleteV2ReservedIpsReservedIp<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.reserved_ips)[':reserved_ip']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.v2.reserved_ips)[':reserved_ip']['$delete']>,
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
    const mutationDefaults = getDeleteV2ReservedIpsReservedIpMutationOptions<
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

export function getV2ReservedIpsReservedIpActionsQueryKey(
  args: InferRequestType<(typeof client.v2.reserved_ips)[':reserved_ip']['actions']['$get']>,
) {
  return ['v2', '/v2/reserved_ips/:reserved_ip/actions', args] as const
}

export function getV2ReservedIpsReservedIpActionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.reserved_ips)[':reserved_ip']['actions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.reserved_ips)[':reserved_ip']['actions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.reserved_ips)[':reserved_ip']['actions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2ReservedIpsReservedIpActionsQueryKey>
  >({
    queryKey: getV2ReservedIpsReservedIpActionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.reserved_ips[':reserved_ip'].actions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2ReservedIpsReservedIpActions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.reserved_ips)[':reserved_ip']['actions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2.reserved_ips)[':reserved_ip']['actions']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v2.reserved_ips)[':reserved_ip']['actions']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2ReservedIpsReservedIpActionsQueryKey>
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
      ...getV2ReservedIpsReservedIpActionsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostV2ReservedIpsReservedIpActionsMutationKey() {
  return ['v2', '/v2/reserved_ips/:reserved_ip/actions', 'POST'] as const
}

export function getPostV2ReservedIpsReservedIpActionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.reserved_ips)[':reserved_ip']['actions']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.reserved_ips)[':reserved_ip']['actions']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2ReservedIpsReservedIpActionsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.reserved_ips)[':reserved_ip']['actions']['$post']>,
    ) {
      return parseResponse(client.v2.reserved_ips[':reserved_ip'].actions.$post(args, options))
    },
  })
}

export function injectPostV2ReservedIpsReservedIpActions<
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
                ReturnType<(typeof client.v2.reserved_ips)[':reserved_ip']['actions']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.reserved_ips)[':reserved_ip']['actions']['$post']>,
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
    const mutationDefaults = getPostV2ReservedIpsReservedIpActionsMutationOptions<
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

export function getV2ReservedIpsReservedIpActionsActionIdQueryKey(
  args: InferRequestType<
    (typeof client.v2.reserved_ips)[':reserved_ip']['actions'][':action_id']['$get']
  >,
) {
  return ['v2', '/v2/reserved_ips/:reserved_ip/actions/:action_id', args] as const
}

export function getV2ReservedIpsReservedIpActionsActionIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2.reserved_ips)[':reserved_ip']['actions'][':action_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.reserved_ips)[':reserved_ip']['actions'][':action_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.reserved_ips)[':reserved_ip']['actions'][':action_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2ReservedIpsReservedIpActionsActionIdQueryKey>
  >({
    queryKey: getV2ReservedIpsReservedIpActionsActionIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.reserved_ips[':reserved_ip'].actions[':action_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2ReservedIpsReservedIpActionsActionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2.reserved_ips)[':reserved_ip']['actions'][':action_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v2.reserved_ips)[':reserved_ip']['actions'][':action_id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2.reserved_ips)[':reserved_ip']['actions'][':action_id']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2ReservedIpsReservedIpActionsActionIdQueryKey>
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
      ...getV2ReservedIpsReservedIpActionsActionIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getV2SizesQueryKey(args: InferRequestType<typeof client.v2.sizes.$get>) {
  return ['v2', '/v2/sizes', args] as const
}

export function getV2SizesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.sizes.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v2.sizes.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.sizes.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV2SizesQueryKey>
  >({
    queryKey: getV2SizesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.sizes.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV2Sizes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.sizes.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v2.sizes.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.sizes.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getV2SizesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV2SizesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getV2SnapshotsQueryKey(args: InferRequestType<typeof client.v2.snapshots.$get>) {
  return ['v2', '/v2/snapshots', args] as const
}

export function getV2SnapshotsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.snapshots.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v2.snapshots.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.snapshots.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV2SnapshotsQueryKey>
  >({
    queryKey: getV2SnapshotsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.snapshots.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV2Snapshots<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.snapshots.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v2.snapshots.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.snapshots.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV2SnapshotsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV2SnapshotsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getV2SnapshotsSnapshotIdQueryKey(
  args: InferRequestType<(typeof client.v2.snapshots)[':snapshot_id']['$get']>,
) {
  return ['v2', '/v2/snapshots/:snapshot_id', args] as const
}

export function getV2SnapshotsSnapshotIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.snapshots)[':snapshot_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.snapshots)[':snapshot_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.snapshots)[':snapshot_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2SnapshotsSnapshotIdQueryKey>
  >({
    queryKey: getV2SnapshotsSnapshotIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.snapshots[':snapshot_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2SnapshotsSnapshotId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.snapshots)[':snapshot_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2.snapshots)[':snapshot_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.snapshots)[':snapshot_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2SnapshotsSnapshotIdQueryKey>
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
      ...getV2SnapshotsSnapshotIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getDeleteV2SnapshotsSnapshotIdMutationKey() {
  return ['v2', '/v2/snapshots/:snapshot_id', 'DELETE'] as const
}

export function getDeleteV2SnapshotsSnapshotIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.snapshots)[':snapshot_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v2.snapshots)[':snapshot_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2SnapshotsSnapshotIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.snapshots)[':snapshot_id']['$delete']>,
    ) {
      return parseResponse(client.v2.snapshots[':snapshot_id'].$delete(args, options))
    },
  })
}

export function injectDeleteV2SnapshotsSnapshotId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.snapshots)[':snapshot_id']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.v2.snapshots)[':snapshot_id']['$delete']>,
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
    const mutationDefaults = getDeleteV2SnapshotsSnapshotIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getV2TagsQueryKey(args: InferRequestType<typeof client.v2.tags.$get>) {
  return ['v2', '/v2/tags', args] as const
}

export function getV2TagsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.tags.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v2.tags.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.tags.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV2TagsQueryKey>
  >({
    queryKey: getV2TagsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.tags.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV2Tags<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.tags.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v2.tags.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.tags.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getV2TagsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV2TagsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostV2TagsMutationKey() {
  return ['v2', '/v2/tags', 'POST'] as const
}

export function getPostV2TagsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.tags.$post>>>>>,
    TError,
    InferRequestType<typeof client.v2.tags.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2TagsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.tags.$post>) {
      return parseResponse(client.v2.tags.$post(args, options))
    },
  })
}

export function injectPostV2Tags<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.tags.$post>>>>>,
        TError,
        InferRequestType<typeof client.v2.tags.$post>,
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
    const mutationDefaults = getPostV2TagsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getV2TagsTagIdQueryKey(
  args: InferRequestType<(typeof client.v2.tags)[':tag_id']['$get']>,
) {
  return ['v2', '/v2/tags/:tag_id', args] as const
}

export function getV2TagsTagIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.tags)[':tag_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.tags)[':tag_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2.tags)[':tag_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2TagsTagIdQueryKey>
  >({
    queryKey: getV2TagsTagIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.tags[':tag_id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV2TagsTagId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.tags)[':tag_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2.tags)[':tag_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v2.tags)[':tag_id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2TagsTagIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV2TagsTagIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getDeleteV2TagsTagIdMutationKey() {
  return ['v2', '/v2/tags/:tag_id', 'DELETE'] as const
}

export function getDeleteV2TagsTagIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2.tags)[':tag_id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v2.tags)[':tag_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2TagsTagIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v2.tags)[':tag_id']['$delete']>) {
      return parseResponse(client.v2.tags[':tag_id'].$delete(args, options))
    },
  })
}

export function injectDeleteV2TagsTagId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.tags)[':tag_id']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.v2.tags)[':tag_id']['$delete']>,
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
    const mutationDefaults = getDeleteV2TagsTagIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostV2TagsTagIdResourcesMutationKey() {
  return ['v2', '/v2/tags/:tag_id/resources', 'POST'] as const
}

export function getPostV2TagsTagIdResourcesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.tags)[':tag_id']['resources']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v2.tags)[':tag_id']['resources']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2TagsTagIdResourcesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.tags)[':tag_id']['resources']['$post']>,
    ) {
      return parseResponse(client.v2.tags[':tag_id'].resources.$post(args, options))
    },
  })
}

export function injectPostV2TagsTagIdResources<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.tags)[':tag_id']['resources']['$post']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.v2.tags)[':tag_id']['resources']['$post']>,
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
    const mutationDefaults = getPostV2TagsTagIdResourcesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteV2TagsTagIdResourcesMutationKey() {
  return ['v2', '/v2/tags/:tag_id/resources', 'DELETE'] as const
}

export function getDeleteV2TagsTagIdResourcesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.tags)[':tag_id']['resources']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v2.tags)[':tag_id']['resources']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2TagsTagIdResourcesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.tags)[':tag_id']['resources']['$delete']>,
    ) {
      return parseResponse(client.v2.tags[':tag_id'].resources.$delete(args, options))
    },
  })
}

export function injectDeleteV2TagsTagIdResources<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.tags)[':tag_id']['resources']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.v2.tags)[':tag_id']['resources']['$delete']>,
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
    const mutationDefaults = getDeleteV2TagsTagIdResourcesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getV2UptimeChecksQueryKey(
  args: InferRequestType<typeof client.v2.uptime.checks.$get>,
) {
  return ['v2', '/v2/uptime/checks', args] as const
}

export function getV2UptimeChecksQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.uptime.checks.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v2.uptime.checks.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.uptime.checks.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV2UptimeChecksQueryKey>
  >({
    queryKey: getV2UptimeChecksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.uptime.checks.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV2UptimeChecks<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.uptime.checks.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v2.uptime.checks.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.uptime.checks.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV2UptimeChecksQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV2UptimeChecksQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostV2UptimeChecksMutationKey() {
  return ['v2', '/v2/uptime/checks', 'POST'] as const
}

export function getPostV2UptimeChecksMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.uptime.checks.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v2.uptime.checks.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2UptimeChecksMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.uptime.checks.$post>) {
      return parseResponse(client.v2.uptime.checks.$post(args, options))
    },
  })
}

export function injectPostV2UptimeChecks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v2.uptime.checks.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v2.uptime.checks.$post>,
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
    const mutationDefaults = getPostV2UptimeChecksMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getV2UptimeChecksCheckIdQueryKey(
  args: InferRequestType<(typeof client.v2.uptime.checks)[':check_id']['$get']>,
) {
  return ['v2', '/v2/uptime/checks/:check_id', args] as const
}

export function getV2UptimeChecksCheckIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.uptime.checks)[':check_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.uptime.checks)[':check_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.uptime.checks)[':check_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2UptimeChecksCheckIdQueryKey>
  >({
    queryKey: getV2UptimeChecksCheckIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.uptime.checks[':check_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2UptimeChecksCheckId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.uptime.checks)[':check_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2.uptime.checks)[':check_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.uptime.checks)[':check_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2UptimeChecksCheckIdQueryKey>
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
      ...getV2UptimeChecksCheckIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPutV2UptimeChecksCheckIdMutationKey() {
  return ['v2', '/v2/uptime/checks/:check_id', 'PUT'] as const
}

export function getPutV2UptimeChecksCheckIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.uptime.checks)[':check_id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.uptime.checks)[':check_id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV2UptimeChecksCheckIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.uptime.checks)[':check_id']['$put']>,
    ) {
      return parseResponse(client.v2.uptime.checks[':check_id'].$put(args, options))
    },
  })
}

export function injectPutV2UptimeChecksCheckId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.uptime.checks)[':check_id']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.uptime.checks)[':check_id']['$put']>,
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
    const mutationDefaults = getPutV2UptimeChecksCheckIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteV2UptimeChecksCheckIdMutationKey() {
  return ['v2', '/v2/uptime/checks/:check_id', 'DELETE'] as const
}

export function getDeleteV2UptimeChecksCheckIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.uptime.checks)[':check_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v2.uptime.checks)[':check_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2UptimeChecksCheckIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.uptime.checks)[':check_id']['$delete']>,
    ) {
      return parseResponse(client.v2.uptime.checks[':check_id'].$delete(args, options))
    },
  })
}

export function injectDeleteV2UptimeChecksCheckId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.uptime.checks)[':check_id']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.v2.uptime.checks)[':check_id']['$delete']>,
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
    const mutationDefaults = getDeleteV2UptimeChecksCheckIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getV2UptimeChecksCheckIdAlertsQueryKey(
  args: InferRequestType<(typeof client.v2.uptime.checks)[':check_id']['alerts']['$get']>,
) {
  return ['v2', '/v2/uptime/checks/:check_id/alerts', args] as const
}

export function getV2UptimeChecksCheckIdAlertsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.uptime.checks)[':check_id']['alerts']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.uptime.checks)[':check_id']['alerts']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.uptime.checks)[':check_id']['alerts']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2UptimeChecksCheckIdAlertsQueryKey>
  >({
    queryKey: getV2UptimeChecksCheckIdAlertsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.uptime.checks[':check_id'].alerts.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2UptimeChecksCheckIdAlerts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.uptime.checks)[':check_id']['alerts']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2.uptime.checks)[':check_id']['alerts']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.uptime.checks)[':check_id']['alerts']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2UptimeChecksCheckIdAlertsQueryKey>
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
      ...getV2UptimeChecksCheckIdAlertsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostV2UptimeChecksCheckIdAlertsMutationKey() {
  return ['v2', '/v2/uptime/checks/:check_id/alerts', 'POST'] as const
}

export function getPostV2UptimeChecksCheckIdAlertsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.uptime.checks)[':check_id']['alerts']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.uptime.checks)[':check_id']['alerts']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2UptimeChecksCheckIdAlertsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.uptime.checks)[':check_id']['alerts']['$post']>,
    ) {
      return parseResponse(client.v2.uptime.checks[':check_id'].alerts.$post(args, options))
    },
  })
}

export function injectPostV2UptimeChecksCheckIdAlerts<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.uptime.checks)[':check_id']['alerts']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.uptime.checks)[':check_id']['alerts']['$post']>,
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
    const mutationDefaults = getPostV2UptimeChecksCheckIdAlertsMutationOptions<
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

export function getV2UptimeChecksCheckIdAlertsAlertIdQueryKey(
  args: InferRequestType<
    (typeof client.v2.uptime.checks)[':check_id']['alerts'][':alert_id']['$get']
  >,
) {
  return ['v2', '/v2/uptime/checks/:check_id/alerts/:alert_id', args] as const
}

export function getV2UptimeChecksCheckIdAlertsAlertIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2.uptime.checks)[':check_id']['alerts'][':alert_id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v2.uptime.checks)[':check_id']['alerts'][':alert_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v2.uptime.checks)[':check_id']['alerts'][':alert_id']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2UptimeChecksCheckIdAlertsAlertIdQueryKey>
  >({
    queryKey: getV2UptimeChecksCheckIdAlertsAlertIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.uptime.checks[':check_id'].alerts[':alert_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2UptimeChecksCheckIdAlertsAlertId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2.uptime.checks)[':check_id']['alerts'][':alert_id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v2.uptime.checks)[':check_id']['alerts'][':alert_id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2.uptime.checks)[':check_id']['alerts'][':alert_id']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2UptimeChecksCheckIdAlertsAlertIdQueryKey>
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
      ...getV2UptimeChecksCheckIdAlertsAlertIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPutV2UptimeChecksCheckIdAlertsAlertIdMutationKey() {
  return ['v2', '/v2/uptime/checks/:check_id/alerts/:alert_id', 'PUT'] as const
}

export function getPutV2UptimeChecksCheckIdAlertsAlertIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v2.uptime.checks)[':check_id']['alerts'][':alert_id']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.uptime.checks)[':check_id']['alerts'][':alert_id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV2UptimeChecksCheckIdAlertsAlertIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.uptime.checks)[':check_id']['alerts'][':alert_id']['$put']
      >,
    ) {
      return parseResponse(
        client.v2.uptime.checks[':check_id'].alerts[':alert_id'].$put(args, options),
      )
    },
  })
}

export function injectPutV2UptimeChecksCheckIdAlertsAlertId<
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
                  (typeof client.v2.uptime.checks)[':check_id']['alerts'][':alert_id']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v2.uptime.checks)[':check_id']['alerts'][':alert_id']['$put']
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
    const mutationDefaults = getPutV2UptimeChecksCheckIdAlertsAlertIdMutationOptions<
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

export function getDeleteV2UptimeChecksCheckIdAlertsAlertIdMutationKey() {
  return ['v2', '/v2/uptime/checks/:check_id/alerts/:alert_id', 'DELETE'] as const
}

export function getDeleteV2UptimeChecksCheckIdAlertsAlertIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.uptime.checks)[':check_id']['alerts'][':alert_id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.v2.uptime.checks)[':check_id']['alerts'][':alert_id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2UptimeChecksCheckIdAlertsAlertIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.uptime.checks)[':check_id']['alerts'][':alert_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.v2.uptime.checks[':check_id'].alerts[':alert_id'].$delete(args, options),
      )
    },
  })
}

export function injectDeleteV2UptimeChecksCheckIdAlertsAlertId<
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
                    (typeof client.v2.uptime.checks)[':check_id']['alerts'][':alert_id']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.v2.uptime.checks)[':check_id']['alerts'][':alert_id']['$delete']
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
    const mutationDefaults = getDeleteV2UptimeChecksCheckIdAlertsAlertIdMutationOptions<
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

export function getV2UptimeChecksCheckIdStateQueryKey(
  args: InferRequestType<(typeof client.v2.uptime.checks)[':check_id']['state']['$get']>,
) {
  return ['v2', '/v2/uptime/checks/:check_id/state', args] as const
}

export function getV2UptimeChecksCheckIdStateQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.uptime.checks)[':check_id']['state']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.uptime.checks)[':check_id']['state']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.uptime.checks)[':check_id']['state']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2UptimeChecksCheckIdStateQueryKey>
  >({
    queryKey: getV2UptimeChecksCheckIdStateQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.uptime.checks[':check_id'].state.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2UptimeChecksCheckIdState<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.uptime.checks)[':check_id']['state']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2.uptime.checks)[':check_id']['state']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.uptime.checks)[':check_id']['state']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2UptimeChecksCheckIdStateQueryKey>
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
      ...getV2UptimeChecksCheckIdStateQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getV2VolumesQueryKey(args: InferRequestType<typeof client.v2.volumes.$get>) {
  return ['v2', '/v2/volumes', args] as const
}

export function getV2VolumesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.volumes.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v2.volumes.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.volumes.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV2VolumesQueryKey>
  >({
    queryKey: getV2VolumesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.volumes.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV2Volumes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.volumes.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v2.volumes.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.volumes.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV2VolumesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV2VolumesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostV2VolumesMutationKey() {
  return ['v2', '/v2/volumes', 'POST'] as const
}

export function getPostV2VolumesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.volumes.$post>>>>>,
    TError,
    InferRequestType<typeof client.v2.volumes.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2VolumesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.volumes.$post>) {
      return parseResponse(client.v2.volumes.$post(args, options))
    },
  })
}

export function injectPostV2Volumes<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.volumes.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v2.volumes.$post>,
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
    const mutationDefaults = getPostV2VolumesMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteV2VolumesMutationKey() {
  return ['v2', '/v2/volumes', 'DELETE'] as const
}

export function getDeleteV2VolumesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.volumes.$delete>>>>
      >
    | undefined,
    TError,
    InferRequestType<typeof client.v2.volumes.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2VolumesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.volumes.$delete>) {
      return parseResponse(client.v2.volumes.$delete(args, options))
    },
  })
}

export function injectDeleteV2Volumes<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.volumes.$delete>>>>
          >
        | undefined,
        TError,
        InferRequestType<typeof client.v2.volumes.$delete>,
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
    const mutationDefaults = getDeleteV2VolumesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostV2VolumesActionsMutationKey() {
  return ['v2', '/v2/volumes/actions', 'POST'] as const
}

export function getPostV2VolumesActionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.volumes.actions.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v2.volumes.actions.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2VolumesActionsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.volumes.actions.$post>) {
      return parseResponse(client.v2.volumes.actions.$post(args, options))
    },
  })
}

export function injectPostV2VolumesActions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v2.volumes.actions.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v2.volumes.actions.$post>,
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
    const mutationDefaults = getPostV2VolumesActionsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getV2VolumesSnapshotsSnapshotIdQueryKey(
  args: InferRequestType<(typeof client.v2.volumes.snapshots)[':snapshot_id']['$get']>,
) {
  return ['v2', '/v2/volumes/snapshots/:snapshot_id', args] as const
}

export function getV2VolumesSnapshotsSnapshotIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.volumes.snapshots)[':snapshot_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.volumes.snapshots)[':snapshot_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.volumes.snapshots)[':snapshot_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2VolumesSnapshotsSnapshotIdQueryKey>
  >({
    queryKey: getV2VolumesSnapshotsSnapshotIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.volumes.snapshots[':snapshot_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2VolumesSnapshotsSnapshotId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.volumes.snapshots)[':snapshot_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2.volumes.snapshots)[':snapshot_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.volumes.snapshots)[':snapshot_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2VolumesSnapshotsSnapshotIdQueryKey>
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
      ...getV2VolumesSnapshotsSnapshotIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getDeleteV2VolumesSnapshotsSnapshotIdMutationKey() {
  return ['v2', '/v2/volumes/snapshots/:snapshot_id', 'DELETE'] as const
}

export function getDeleteV2VolumesSnapshotsSnapshotIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.volumes.snapshots)[':snapshot_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v2.volumes.snapshots)[':snapshot_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2VolumesSnapshotsSnapshotIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.volumes.snapshots)[':snapshot_id']['$delete']>,
    ) {
      return parseResponse(client.v2.volumes.snapshots[':snapshot_id'].$delete(args, options))
    },
  })
}

export function injectDeleteV2VolumesSnapshotsSnapshotId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.volumes.snapshots)[':snapshot_id']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.v2.volumes.snapshots)[':snapshot_id']['$delete']>,
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
    const mutationDefaults = getDeleteV2VolumesSnapshotsSnapshotIdMutationOptions<
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

export function getV2VolumesVolumeIdQueryKey(
  args: InferRequestType<(typeof client.v2.volumes)[':volume_id']['$get']>,
) {
  return ['v2', '/v2/volumes/:volume_id', args] as const
}

export function getV2VolumesVolumeIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.volumes)[':volume_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.volumes)[':volume_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2.volumes)[':volume_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2VolumesVolumeIdQueryKey>
  >({
    queryKey: getV2VolumesVolumeIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.volumes[':volume_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2VolumesVolumeId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.volumes)[':volume_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2.volumes)[':volume_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.volumes)[':volume_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2VolumesVolumeIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV2VolumesVolumeIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getDeleteV2VolumesVolumeIdMutationKey() {
  return ['v2', '/v2/volumes/:volume_id', 'DELETE'] as const
}

export function getDeleteV2VolumesVolumeIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.volumes)[':volume_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v2.volumes)[':volume_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2VolumesVolumeIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v2.volumes)[':volume_id']['$delete']>) {
      return parseResponse(client.v2.volumes[':volume_id'].$delete(args, options))
    },
  })
}

export function injectDeleteV2VolumesVolumeId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.volumes)[':volume_id']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.v2.volumes)[':volume_id']['$delete']>,
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
    const mutationDefaults = getDeleteV2VolumesVolumeIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getV2VolumesVolumeIdActionsQueryKey(
  args: InferRequestType<(typeof client.v2.volumes)[':volume_id']['actions']['$get']>,
) {
  return ['v2', '/v2/volumes/:volume_id/actions', args] as const
}

export function getV2VolumesVolumeIdActionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.volumes)[':volume_id']['actions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.volumes)[':volume_id']['actions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.volumes)[':volume_id']['actions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2VolumesVolumeIdActionsQueryKey>
  >({
    queryKey: getV2VolumesVolumeIdActionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.volumes[':volume_id'].actions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2VolumesVolumeIdActions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.volumes)[':volume_id']['actions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2.volumes)[':volume_id']['actions']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.volumes)[':volume_id']['actions']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2VolumesVolumeIdActionsQueryKey>
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
      ...getV2VolumesVolumeIdActionsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostV2VolumesVolumeIdActionsMutationKey() {
  return ['v2', '/v2/volumes/:volume_id/actions', 'POST'] as const
}

export function getPostV2VolumesVolumeIdActionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.volumes)[':volume_id']['actions']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.volumes)[':volume_id']['actions']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2VolumesVolumeIdActionsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.volumes)[':volume_id']['actions']['$post']>,
    ) {
      return parseResponse(client.v2.volumes[':volume_id'].actions.$post(args, options))
    },
  })
}

export function injectPostV2VolumesVolumeIdActions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.volumes)[':volume_id']['actions']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.volumes)[':volume_id']['actions']['$post']>,
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
    const mutationDefaults = getPostV2VolumesVolumeIdActionsMutationOptions<
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

export function getV2VolumesVolumeIdActionsActionIdQueryKey(
  args: InferRequestType<(typeof client.v2.volumes)[':volume_id']['actions'][':action_id']['$get']>,
) {
  return ['v2', '/v2/volumes/:volume_id/actions/:action_id', args] as const
}

export function getV2VolumesVolumeIdActionsActionIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2.volumes)[':volume_id']['actions'][':action_id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.volumes)[':volume_id']['actions'][':action_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v2.volumes)[':volume_id']['actions'][':action_id']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2VolumesVolumeIdActionsActionIdQueryKey>
  >({
    queryKey: getV2VolumesVolumeIdActionsActionIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.volumes[':volume_id'].actions[':action_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2VolumesVolumeIdActionsActionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2.volumes)[':volume_id']['actions'][':action_id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v2.volumes)[':volume_id']['actions'][':action_id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2.volumes)[':volume_id']['actions'][':action_id']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2VolumesVolumeIdActionsActionIdQueryKey>
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
      ...getV2VolumesVolumeIdActionsActionIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getV2VolumesVolumeIdSnapshotsQueryKey(
  args: InferRequestType<(typeof client.v2.volumes)[':volume_id']['snapshots']['$get']>,
) {
  return ['v2', '/v2/volumes/:volume_id/snapshots', args] as const
}

export function getV2VolumesVolumeIdSnapshotsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.volumes)[':volume_id']['snapshots']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.volumes)[':volume_id']['snapshots']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.volumes)[':volume_id']['snapshots']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2VolumesVolumeIdSnapshotsQueryKey>
  >({
    queryKey: getV2VolumesVolumeIdSnapshotsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.volumes[':volume_id'].snapshots.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2VolumesVolumeIdSnapshots<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.volumes)[':volume_id']['snapshots']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2.volumes)[':volume_id']['snapshots']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.volumes)[':volume_id']['snapshots']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2VolumesVolumeIdSnapshotsQueryKey>
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
      ...getV2VolumesVolumeIdSnapshotsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostV2VolumesVolumeIdSnapshotsMutationKey() {
  return ['v2', '/v2/volumes/:volume_id/snapshots', 'POST'] as const
}

export function getPostV2VolumesVolumeIdSnapshotsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.volumes)[':volume_id']['snapshots']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.volumes)[':volume_id']['snapshots']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2VolumesVolumeIdSnapshotsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.volumes)[':volume_id']['snapshots']['$post']>,
    ) {
      return parseResponse(client.v2.volumes[':volume_id'].snapshots.$post(args, options))
    },
  })
}

export function injectPostV2VolumesVolumeIdSnapshots<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.volumes)[':volume_id']['snapshots']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.volumes)[':volume_id']['snapshots']['$post']>,
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
    const mutationDefaults = getPostV2VolumesVolumeIdSnapshotsMutationOptions<
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

export function getV2VpcsQueryKey(args: InferRequestType<typeof client.v2.vpcs.$get>) {
  return ['v2', '/v2/vpcs', args] as const
}

export function getV2VpcsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.vpcs.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v2.vpcs.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.vpcs.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV2VpcsQueryKey>
  >({
    queryKey: getV2VpcsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.vpcs.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV2Vpcs<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.vpcs.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v2.vpcs.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.vpcs.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getV2VpcsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV2VpcsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostV2VpcsMutationKey() {
  return ['v2', '/v2/vpcs', 'POST'] as const
}

export function getPostV2VpcsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.vpcs.$post>>>>>,
    TError,
    InferRequestType<typeof client.v2.vpcs.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2VpcsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.vpcs.$post>) {
      return parseResponse(client.v2.vpcs.$post(args, options))
    },
  })
}

export function injectPostV2Vpcs<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.vpcs.$post>>>>>,
        TError,
        InferRequestType<typeof client.v2.vpcs.$post>,
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
    const mutationDefaults = getPostV2VpcsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getV2VpcsVpcIdQueryKey(
  args: InferRequestType<(typeof client.v2.vpcs)[':vpc_id']['$get']>,
) {
  return ['v2', '/v2/vpcs/:vpc_id', args] as const
}

export function getV2VpcsVpcIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.vpcs)[':vpc_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.vpcs)[':vpc_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2.vpcs)[':vpc_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2VpcsVpcIdQueryKey>
  >({
    queryKey: getV2VpcsVpcIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.vpcs[':vpc_id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV2VpcsVpcId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.vpcs)[':vpc_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2.vpcs)[':vpc_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v2.vpcs)[':vpc_id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2VpcsVpcIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV2VpcsVpcIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPutV2VpcsVpcIdMutationKey() {
  return ['v2', '/v2/vpcs/:vpc_id', 'PUT'] as const
}

export function getPutV2VpcsVpcIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2.vpcs)[':vpc_id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.vpcs)[':vpc_id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV2VpcsVpcIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v2.vpcs)[':vpc_id']['$put']>) {
      return parseResponse(client.v2.vpcs[':vpc_id'].$put(args, options))
    },
  })
}

export function injectPutV2VpcsVpcId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v2.vpcs)[':vpc_id']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.vpcs)[':vpc_id']['$put']>,
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
    const mutationDefaults = getPutV2VpcsVpcIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteV2VpcsVpcIdMutationKey() {
  return ['v2', '/v2/vpcs/:vpc_id', 'DELETE'] as const
}

export function getDeleteV2VpcsVpcIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2.vpcs)[':vpc_id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v2.vpcs)[':vpc_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2VpcsVpcIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v2.vpcs)[':vpc_id']['$delete']>) {
      return parseResponse(client.v2.vpcs[':vpc_id'].$delete(args, options))
    },
  })
}

export function injectDeleteV2VpcsVpcId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.vpcs)[':vpc_id']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.v2.vpcs)[':vpc_id']['$delete']>,
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
    const mutationDefaults = getDeleteV2VpcsVpcIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPatchV2VpcsVpcIdMutationKey() {
  return ['v2', '/v2/vpcs/:vpc_id', 'PATCH'] as const
}

export function getPatchV2VpcsVpcIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2.vpcs)[':vpc_id']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.vpcs)[':vpc_id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV2VpcsVpcIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v2.vpcs)[':vpc_id']['$patch']>) {
      return parseResponse(client.v2.vpcs[':vpc_id'].$patch(args, options))
    },
  })
}

export function injectPatchV2VpcsVpcId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v2.vpcs)[':vpc_id']['$patch']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.vpcs)[':vpc_id']['$patch']>,
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
    const mutationDefaults = getPatchV2VpcsVpcIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getV2VpcsVpcIdMembersQueryKey(
  args: InferRequestType<(typeof client.v2.vpcs)[':vpc_id']['members']['$get']>,
) {
  return ['v2', '/v2/vpcs/:vpc_id/members', args] as const
}

export function getV2VpcsVpcIdMembersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.vpcs)[':vpc_id']['members']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.vpcs)[':vpc_id']['members']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.vpcs)[':vpc_id']['members']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2VpcsVpcIdMembersQueryKey>
  >({
    queryKey: getV2VpcsVpcIdMembersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.vpcs[':vpc_id'].members.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2VpcsVpcIdMembers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.vpcs)[':vpc_id']['members']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2.vpcs)[':vpc_id']['members']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.vpcs)[':vpc_id']['members']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2VpcsVpcIdMembersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV2VpcsVpcIdMembersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}
