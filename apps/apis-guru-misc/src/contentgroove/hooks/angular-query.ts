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

export function getApiKey() {
  return ['api'] as const
}

export function getApiV1ClipsQueryKey(args: InferRequestType<typeof client.api.v1.clips.$get>) {
  return ['api', '/api/v1/clips', args] as const
}

export function getApiV1ClipsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.clips.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v1.clips.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.clips.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiV1ClipsQueryKey>
  >({
    queryKey: getApiV1ClipsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.clips.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectApiV1Clips<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.clips.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v1.clips.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.clips.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1ClipsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV1ClipsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostApiV1ClipsMutationKey() {
  return ['api', '/api/v1/clips', 'POST'] as const
}

export function getPostApiV1ClipsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.clips.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.v1.clips.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1ClipsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.clips.$post>) {
      return parseResponse(client.api.v1.clips.$post(args, options))
    },
  })
}

export function injectPostApiV1Clips<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.clips.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.api.v1.clips.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV1ClipsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getApiV1ClipsIdQueryKey(
  args: InferRequestType<(typeof client.api.v1.clips)[':id']['$get']>,
) {
  return ['api', '/api/v1/clips/:id', args] as const
}

export function getApiV1ClipsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.clips)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.clips)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.clips)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ClipsIdQueryKey>
  >({
    queryKey: getApiV1ClipsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.clips[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectApiV1ClipsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.clips)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1.clips)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.clips)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1ClipsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV1ClipsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPutApiV1ClipsIdMutationKey() {
  return ['api', '/api/v1/clips/:id', 'PUT'] as const
}

export function getPutApiV1ClipsIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.clips)[':id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.clips)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1ClipsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1.clips)[':id']['$put']>) {
      return parseResponse(client.api.v1.clips[':id'].$put(args, options))
    },
  })
}

export function injectPutApiV1ClipsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.clips)[':id']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.clips)[':id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutApiV1ClipsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteApiV1ClipsIdMutationKey() {
  return ['api', '/api/v1/clips/:id', 'DELETE'] as const
}

export function getDeleteApiV1ClipsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.clips)[':id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v1.clips)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1ClipsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1.clips)[':id']['$delete']>) {
      return parseResponse(client.api.v1.clips[':id'].$delete(args, options))
    },
  })
}

export function injectDeleteApiV1ClipsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.clips)[':id']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.api.v1.clips)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteApiV1ClipsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getApiV1DirectUploadsQueryKey() {
  return ['api', '/api/v1/direct_uploads'] as const
}

export function getApiV1DirectUploadsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.direct_uploads.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.direct_uploads.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1DirectUploadsQueryKey>
  >({
    queryKey: getApiV1DirectUploadsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.direct_uploads.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiV1DirectUploads<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.direct_uploads.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.direct_uploads.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1DirectUploadsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV1DirectUploadsQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getApiV1MediasQueryKey(args: InferRequestType<typeof client.api.v1.medias.$get>) {
  return ['api', '/api/v1/medias', args] as const
}

export function getApiV1MediasQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.medias.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v1.medias.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.medias.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1MediasQueryKey>
  >({
    queryKey: getApiV1MediasQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.medias.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectApiV1Medias<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.medias.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v1.medias.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.medias.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1MediasQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV1MediasQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostApiV1MediasMutationKey() {
  return ['api', '/api/v1/medias', 'POST'] as const
}

export function getPostApiV1MediasMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.medias.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.v1.medias.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1MediasMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.medias.$post>) {
      return parseResponse(client.api.v1.medias.$post(args, options))
    },
  })
}

export function injectPostApiV1Medias<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.medias.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.api.v1.medias.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV1MediasMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getApiV1MediasIdQueryKey(
  args: InferRequestType<(typeof client.api.v1.medias)[':id']['$get']>,
) {
  return ['api', '/api/v1/medias/:id', args] as const
}

export function getApiV1MediasIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.medias)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.medias)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.medias)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1MediasIdQueryKey>
  >({
    queryKey: getApiV1MediasIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.medias[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectApiV1MediasId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.medias)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1.medias)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.medias)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1MediasIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV1MediasIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPutApiV1MediasIdMutationKey() {
  return ['api', '/api/v1/medias/:id', 'PUT'] as const
}

export function getPutApiV1MediasIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.medias)[':id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.medias)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiV1MediasIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1.medias)[':id']['$put']>) {
      return parseResponse(client.api.v1.medias[':id'].$put(args, options))
    },
  })
}

export function injectPutApiV1MediasId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.medias)[':id']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.medias)[':id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutApiV1MediasIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteApiV1MediasIdMutationKey() {
  return ['api', '/api/v1/medias/:id', 'DELETE'] as const
}

export function getDeleteApiV1MediasIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.medias)[':id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v1.medias)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1MediasIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1.medias)[':id']['$delete']>) {
      return parseResponse(client.api.v1.medias[':id'].$delete(args, options))
    },
  })
}

export function injectDeleteApiV1MediasId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.medias)[':id']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.api.v1.medias)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteApiV1MediasIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getApiV1WebhookSubscriptionsQueryKey(
  args: InferRequestType<typeof client.api.v1.webhook_subscriptions.$get>,
) {
  return ['api', '/api/v1/webhook_subscriptions', args] as const
}

export function getApiV1WebhookSubscriptionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.webhook_subscriptions.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.webhook_subscriptions.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.webhook_subscriptions.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1WebhookSubscriptionsQueryKey>
  >({
    queryKey: getApiV1WebhookSubscriptionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.webhook_subscriptions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiV1WebhookSubscriptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.webhook_subscriptions.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v1.webhook_subscriptions.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.v1.webhook_subscriptions.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1WebhookSubscriptionsQueryKey>
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
      ...getApiV1WebhookSubscriptionsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostApiV1WebhookSubscriptionsMutationKey() {
  return ['api', '/api/v1/webhook_subscriptions', 'POST'] as const
}

export function getPostApiV1WebhookSubscriptionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.webhook_subscriptions.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v1.webhook_subscriptions.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1WebhookSubscriptionsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.webhook_subscriptions.$post>) {
      return parseResponse(client.api.v1.webhook_subscriptions.$post(args, options))
    },
  })
}

export function injectPostApiV1WebhookSubscriptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.v1.webhook_subscriptions.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.api.v1.webhook_subscriptions.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV1WebhookSubscriptionsMutationOptions<
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

export function getApiV1WebhookSubscriptionsIdQueryKey(
  args: InferRequestType<(typeof client.api.v1.webhook_subscriptions)[':id']['$get']>,
) {
  return ['api', '/api/v1/webhook_subscriptions/:id', args] as const
}

export function getApiV1WebhookSubscriptionsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.webhook_subscriptions)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.webhook_subscriptions)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.webhook_subscriptions)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1WebhookSubscriptionsIdQueryKey>
  >({
    queryKey: getApiV1WebhookSubscriptionsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.webhook_subscriptions[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiV1WebhookSubscriptionsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.webhook_subscriptions)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1.webhook_subscriptions)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.webhook_subscriptions)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1WebhookSubscriptionsIdQueryKey>
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
      ...getApiV1WebhookSubscriptionsIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getDeleteApiV1WebhookSubscriptionsIdMutationKey() {
  return ['api', '/api/v1/webhook_subscriptions/:id', 'DELETE'] as const
}

export function getDeleteApiV1WebhookSubscriptionsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.webhook_subscriptions)[':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.v1.webhook_subscriptions)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1WebhookSubscriptionsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.webhook_subscriptions)[':id']['$delete']>,
    ) {
      return parseResponse(client.api.v1.webhook_subscriptions[':id'].$delete(args, options))
    },
  })
}

export function injectDeleteApiV1WebhookSubscriptionsId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.webhook_subscriptions)[':id']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.api.v1.webhook_subscriptions)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteApiV1WebhookSubscriptionsIdMutationOptions<
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
