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

export function getV1Key() {
  return ['v1'] as const
}

export function getV1NotificationsWebhooksQueryKey(
  args: InferRequestType<typeof client.v1.notifications.webhooks.$get>,
) {
  return ['v1', '/v1/notifications/webhooks', args] as const
}

export function getV1NotificationsWebhooksQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.notifications.webhooks.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.notifications.webhooks.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.notifications.webhooks.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1NotificationsWebhooksQueryKey>
  >({
    queryKey: getV1NotificationsWebhooksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.notifications.webhooks.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1NotificationsWebhooks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.notifications.webhooks.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v1.notifications.webhooks.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.notifications.webhooks.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1NotificationsWebhooksQueryKey>
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
      ...getV1NotificationsWebhooksQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostV1NotificationsWebhooksMutationKey() {
  return ['v1', '/v1/notifications/webhooks', 'POST'] as const
}

export function getPostV1NotificationsWebhooksMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.notifications.webhooks.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.notifications.webhooks.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1NotificationsWebhooksMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.notifications.webhooks.$post>) {
      return parseResponse(client.v1.notifications.webhooks.$post(args, options))
    },
  })
}

export function injectPostV1NotificationsWebhooks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.notifications.webhooks.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.notifications.webhooks.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1NotificationsWebhooksMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getV1NotificationsWebhooksWebhookIdQueryKey(
  args: InferRequestType<(typeof client.v1.notifications.webhooks)[':webhook_id']['$get']>,
) {
  return ['v1', '/v1/notifications/webhooks/:webhook_id', args] as const
}

export function getV1NotificationsWebhooksWebhookIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.notifications.webhooks)[':webhook_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.notifications.webhooks)[':webhook_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.notifications.webhooks)[':webhook_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1NotificationsWebhooksWebhookIdQueryKey>
  >({
    queryKey: getV1NotificationsWebhooksWebhookIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.notifications.webhooks[':webhook_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1NotificationsWebhooksWebhookId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.notifications.webhooks)[':webhook_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.notifications.webhooks)[':webhook_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.notifications.webhooks)[':webhook_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1NotificationsWebhooksWebhookIdQueryKey>
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
      ...getV1NotificationsWebhooksWebhookIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getDeleteV1NotificationsWebhooksWebhookIdMutationKey() {
  return ['v1', '/v1/notifications/webhooks/:webhook_id', 'DELETE'] as const
}

export function getDeleteV1NotificationsWebhooksWebhookIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.notifications.webhooks)[':webhook_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1.notifications.webhooks)[':webhook_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1NotificationsWebhooksWebhookIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.notifications.webhooks)[':webhook_id']['$delete']>,
    ) {
      return parseResponse(client.v1.notifications.webhooks[':webhook_id'].$delete(args, options))
    },
  })
}

export function injectDeleteV1NotificationsWebhooksWebhookId<
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
                  ReturnType<(typeof client.v1.notifications.webhooks)[':webhook_id']['$delete']>
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.v1.notifications.webhooks)[':webhook_id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV1NotificationsWebhooksWebhookIdMutationOptions<
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

export function getPatchV1NotificationsWebhooksWebhookIdMutationKey() {
  return ['v1', '/v1/notifications/webhooks/:webhook_id', 'PATCH'] as const
}

export function getPatchV1NotificationsWebhooksWebhookIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.notifications.webhooks)[':webhook_id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.notifications.webhooks)[':webhook_id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV1NotificationsWebhooksWebhookIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.notifications.webhooks)[':webhook_id']['$patch']>,
    ) {
      return parseResponse(client.v1.notifications.webhooks[':webhook_id'].$patch(args, options))
    },
  })
}

export function injectPatchV1NotificationsWebhooksWebhookId<
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
                ReturnType<(typeof client.v1.notifications.webhooks)[':webhook_id']['$patch']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.notifications.webhooks)[':webhook_id']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchV1NotificationsWebhooksWebhookIdMutationOptions<
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

export function getV1NotificationsWebhooksWebhookIdEventTypesQueryKey(
  args: InferRequestType<
    (typeof client.v1.notifications.webhooks)[':webhook_id']['event-types']['$get']
  >,
) {
  return ['v1', '/v1/notifications/webhooks/:webhook_id/event-types', args] as const
}

export function getV1NotificationsWebhooksWebhookIdEventTypesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.notifications.webhooks)[':webhook_id']['event-types']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.notifications.webhooks)[':webhook_id']['event-types']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.notifications.webhooks)[':webhook_id']['event-types']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1NotificationsWebhooksWebhookIdEventTypesQueryKey>
  >({
    queryKey: getV1NotificationsWebhooksWebhookIdEventTypesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.notifications.webhooks[':webhook_id']['event-types'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1NotificationsWebhooksWebhookIdEventTypes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.notifications.webhooks)[':webhook_id']['event-types']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1.notifications.webhooks)[':webhook_id']['event-types']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.notifications.webhooks)[':webhook_id']['event-types']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1NotificationsWebhooksWebhookIdEventTypesQueryKey>
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
      ...getV1NotificationsWebhooksWebhookIdEventTypesQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getV1NotificationsWebhooksLookupQueryKey() {
  return ['v1', '/v1/notifications/webhooks-lookup'] as const
}

export function getV1NotificationsWebhooksLookupQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.notifications)['webhooks-lookup']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.notifications)['webhooks-lookup']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1NotificationsWebhooksLookupQueryKey>
  >({
    queryKey: getV1NotificationsWebhooksLookupQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.notifications['webhooks-lookup'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1NotificationsWebhooksLookup<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.notifications)['webhooks-lookup']['$get']>>
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
              Awaited<ReturnType<(typeof client.v1.notifications)['webhooks-lookup']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1NotificationsWebhooksLookupQueryKey>
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
      ...getV1NotificationsWebhooksLookupQueryOptions<TData, TError>(clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostV1NotificationsWebhooksLookupMutationKey() {
  return ['v1', '/v1/notifications/webhooks-lookup', 'POST'] as const
}

export function getPostV1NotificationsWebhooksLookupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.notifications)['webhooks-lookup']['$post']>>
        >
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostV1NotificationsWebhooksLookupMutationKey(),
    async mutationFn() {
      return parseResponse(client.v1.notifications['webhooks-lookup'].$post(undefined, options))
    },
  })
}

export function injectPostV1NotificationsWebhooksLookup<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.notifications)['webhooks-lookup']['$post']>>
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
    const mutationDefaults = getPostV1NotificationsWebhooksLookupMutationOptions<
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

export function getV1NotificationsWebhooksLookupWebhookLookupIdQueryKey(
  args: InferRequestType<
    (typeof client.v1.notifications)['webhooks-lookup'][':webhook_lookup_id']['$get']
  >,
) {
  return ['v1', '/v1/notifications/webhooks-lookup/:webhook_lookup_id', args] as const
}

export function getV1NotificationsWebhooksLookupWebhookLookupIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.notifications)['webhooks-lookup'][':webhook_lookup_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.notifications)['webhooks-lookup'][':webhook_lookup_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.notifications)['webhooks-lookup'][':webhook_lookup_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1NotificationsWebhooksLookupWebhookLookupIdQueryKey>
  >({
    queryKey: getV1NotificationsWebhooksLookupWebhookLookupIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.notifications['webhooks-lookup'][':webhook_lookup_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1NotificationsWebhooksLookupWebhookLookupId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.notifications)['webhooks-lookup'][':webhook_lookup_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1.notifications)['webhooks-lookup'][':webhook_lookup_id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.notifications)['webhooks-lookup'][':webhook_lookup_id']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1NotificationsWebhooksLookupWebhookLookupIdQueryKey>
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
      ...getV1NotificationsWebhooksLookupWebhookLookupIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getDeleteV1NotificationsWebhooksLookupWebhookLookupIdMutationKey() {
  return ['v1', '/v1/notifications/webhooks-lookup/:webhook_lookup_id', 'DELETE'] as const
}

export function getDeleteV1NotificationsWebhooksLookupWebhookLookupIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.notifications)['webhooks-lookup'][':webhook_lookup_id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.v1.notifications)['webhooks-lookup'][':webhook_lookup_id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1NotificationsWebhooksLookupWebhookLookupIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.notifications)['webhooks-lookup'][':webhook_lookup_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.v1.notifications['webhooks-lookup'][':webhook_lookup_id'].$delete(args, options),
      )
    },
  })
}

export function injectDeleteV1NotificationsWebhooksLookupWebhookLookupId<
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
                    (typeof client.v1.notifications)['webhooks-lookup'][':webhook_lookup_id']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.v1.notifications)['webhooks-lookup'][':webhook_lookup_id']['$delete']
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
    const mutationDefaults = getDeleteV1NotificationsWebhooksLookupWebhookLookupIdMutationOptions<
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

export function getPostV1NotificationsVerifyWebhookSignatureMutationKey() {
  return ['v1', '/v1/notifications/verify-webhook-signature', 'POST'] as const
}

export function getPostV1NotificationsVerifyWebhookSignatureMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.notifications)['verify-webhook-signature']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.notifications)['verify-webhook-signature']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1NotificationsVerifyWebhookSignatureMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.notifications)['verify-webhook-signature']['$post']>,
    ) {
      return parseResponse(client.v1.notifications['verify-webhook-signature'].$post(args, options))
    },
  })
}

export function injectPostV1NotificationsVerifyWebhookSignature<
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
                ReturnType<(typeof client.v1.notifications)['verify-webhook-signature']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.notifications)['verify-webhook-signature']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1NotificationsVerifyWebhookSignatureMutationOptions<
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

export function getV1NotificationsWebhooksEventTypesQueryKey() {
  return ['v1', '/v1/notifications/webhooks-event-types'] as const
}

export function getV1NotificationsWebhooksEventTypesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.notifications)['webhooks-event-types']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.notifications)['webhooks-event-types']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1NotificationsWebhooksEventTypesQueryKey>
  >({
    queryKey: getV1NotificationsWebhooksEventTypesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.notifications['webhooks-event-types'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1NotificationsWebhooksEventTypes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.notifications)['webhooks-event-types']['$get']>>
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
              Awaited<ReturnType<(typeof client.v1.notifications)['webhooks-event-types']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1NotificationsWebhooksEventTypesQueryKey>
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
      ...getV1NotificationsWebhooksEventTypesQueryOptions<TData, TError>(clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getV1NotificationsWebhooksEventsQueryKey(
  args: InferRequestType<(typeof client.v1.notifications)['webhooks-events']['$get']>,
) {
  return ['v1', '/v1/notifications/webhooks-events', args] as const
}

export function getV1NotificationsWebhooksEventsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.notifications)['webhooks-events']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.notifications)['webhooks-events']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.notifications)['webhooks-events']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1NotificationsWebhooksEventsQueryKey>
  >({
    queryKey: getV1NotificationsWebhooksEventsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.notifications['webhooks-events'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1NotificationsWebhooksEvents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.notifications)['webhooks-events']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.notifications)['webhooks-events']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.notifications)['webhooks-events']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1NotificationsWebhooksEventsQueryKey>
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
      ...getV1NotificationsWebhooksEventsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getV1NotificationsWebhooksEventsEventIdQueryKey(
  args: InferRequestType<(typeof client.v1.notifications)['webhooks-events'][':event_id']['$get']>,
) {
  return ['v1', '/v1/notifications/webhooks-events/:event_id', args] as const
}

export function getV1NotificationsWebhooksEventsEventIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.notifications)['webhooks-events'][':event_id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.notifications)['webhooks-events'][':event_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.notifications)['webhooks-events'][':event_id']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1NotificationsWebhooksEventsEventIdQueryKey>
  >({
    queryKey: getV1NotificationsWebhooksEventsEventIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.notifications['webhooks-events'][':event_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1NotificationsWebhooksEventsEventId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.notifications)['webhooks-events'][':event_id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1.notifications)['webhooks-events'][':event_id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v1.notifications)['webhooks-events'][':event_id']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1NotificationsWebhooksEventsEventIdQueryKey>
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
      ...getV1NotificationsWebhooksEventsEventIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostV1NotificationsWebhooksEventsEventIdResendMutationKey() {
  return ['v1', '/v1/notifications/webhooks-events/:event_id/resend', 'POST'] as const
}

export function getPostV1NotificationsWebhooksEventsEventIdResendMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.notifications)['webhooks-events'][':event_id']['resend']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.notifications)['webhooks-events'][':event_id']['resend']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1NotificationsWebhooksEventsEventIdResendMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.notifications)['webhooks-events'][':event_id']['resend']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.notifications['webhooks-events'][':event_id'].resend.$post(args, options),
      )
    },
  })
}

export function injectPostV1NotificationsWebhooksEventsEventIdResend<
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
                  (typeof client.v1.notifications)['webhooks-events'][':event_id']['resend']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1.notifications)['webhooks-events'][':event_id']['resend']['$post']
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
    const mutationDefaults = getPostV1NotificationsWebhooksEventsEventIdResendMutationOptions<
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

export function getPostV1NotificationsSimulateEventMutationKey() {
  return ['v1', '/v1/notifications/simulate-event', 'POST'] as const
}

export function getPostV1NotificationsSimulateEventMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.notifications)['simulate-event']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.notifications)['simulate-event']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1NotificationsSimulateEventMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.notifications)['simulate-event']['$post']>,
    ) {
      return parseResponse(client.v1.notifications['simulate-event'].$post(args, options))
    },
  })
}

export function injectPostV1NotificationsSimulateEvent<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.notifications)['simulate-event']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.notifications)['simulate-event']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1NotificationsSimulateEventMutationOptions<
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
