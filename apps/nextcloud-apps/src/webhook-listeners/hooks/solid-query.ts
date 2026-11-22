import { createQuery, createMutation, queryOptions, mutationOptions } from '@tanstack/solid-query'
import type {
  UndefinedInitialDataOptions,
  CreateMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/solid-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getOcsKey() {
  return ['ocs'] as const
}

export function getOcsV2PhpAppsWebhookListenersApiV1WebhooksQueryKey(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['webhook_listeners']['api']['v1']['webhooks']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['ocs', '/ocs/v2.php/apps/webhook_listeners/api/v1/webhooks', keyArgs] as const
}

export function getOcsV2PhpAppsWebhookListenersApiV1WebhooksQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ocs)['v2.php']['apps']['webhook_listeners']['api']['v1']['webhooks']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['webhook_listeners']['api']['v1']['webhooks']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['webhook_listeners']['api']['v1']['webhooks']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOcsV2PhpAppsWebhookListenersApiV1WebhooksQueryKey>
  >({
    queryKey: getOcsV2PhpAppsWebhookListenersApiV1WebhooksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ocs['v2.php'].apps.webhook_listeners.api.v1.webhooks.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOcsV2PhpAppsWebhookListenersApiV1Webhooks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ocs)['v2.php']['apps']['webhook_listeners']['api']['v1']['webhooks']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['webhook_listeners']['api']['v1']['webhooks']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.ocs)['v2.php']['apps']['webhook_listeners']['api']['v1']['webhooks']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getOcsV2PhpAppsWebhookListenersApiV1WebhooksQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getOcsV2PhpAppsWebhookListenersApiV1WebhooksQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPostOcsV2PhpAppsWebhookListenersApiV1WebhooksMutationKey() {
  return ['ocs', '/ocs/v2.php/apps/webhook_listeners/api/v1/webhooks', 'POST'] as const
}

export function getPostOcsV2PhpAppsWebhookListenersApiV1WebhooksMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['webhook_listeners']['api']['v1']['webhooks']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['webhook_listeners']['api']['v1']['webhooks']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostOcsV2PhpAppsWebhookListenersApiV1WebhooksMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['apps']['webhook_listeners']['api']['v1']['webhooks']['$post']
      >,
    ) {
      return parseResponse(
        client.ocs['v2.php'].apps.webhook_listeners.api.v1.webhooks.$post(args, options),
      )
    },
  })
}

export function createPostOcsV2PhpAppsWebhookListenersApiV1Webhooks<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.ocs)['v2.php']['apps']['webhook_listeners']['api']['v1']['webhooks']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['webhook_listeners']['api']['v1']['webhooks']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostOcsV2PhpAppsWebhookListenersApiV1WebhooksMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getOcsV2PhpAppsWebhookListenersApiV1WebhooksIdQueryKey(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['webhook_listeners']['api']['v1']['webhooks'][':id']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['ocs', '/ocs/v2.php/apps/webhook_listeners/api/v1/webhooks/:id', keyArgs] as const
}

export function getOcsV2PhpAppsWebhookListenersApiV1WebhooksIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ocs)['v2.php']['apps']['webhook_listeners']['api']['v1']['webhooks'][':id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['webhook_listeners']['api']['v1']['webhooks'][':id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['webhook_listeners']['api']['v1']['webhooks'][':id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOcsV2PhpAppsWebhookListenersApiV1WebhooksIdQueryKey>
  >({
    queryKey: getOcsV2PhpAppsWebhookListenersApiV1WebhooksIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ocs['v2.php'].apps.webhook_listeners.api.v1.webhooks[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createOcsV2PhpAppsWebhookListenersApiV1WebhooksId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ocs)['v2.php']['apps']['webhook_listeners']['api']['v1']['webhooks'][':id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['webhook_listeners']['api']['v1']['webhooks'][':id']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.ocs)['v2.php']['apps']['webhook_listeners']['api']['v1']['webhooks'][':id']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getOcsV2PhpAppsWebhookListenersApiV1WebhooksIdQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getOcsV2PhpAppsWebhookListenersApiV1WebhooksIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPostOcsV2PhpAppsWebhookListenersApiV1WebhooksIdMutationKey() {
  return ['ocs', '/ocs/v2.php/apps/webhook_listeners/api/v1/webhooks/:id', 'POST'] as const
}

export function getPostOcsV2PhpAppsWebhookListenersApiV1WebhooksIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['webhook_listeners']['api']['v1']['webhooks'][':id']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['webhook_listeners']['api']['v1']['webhooks'][':id']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostOcsV2PhpAppsWebhookListenersApiV1WebhooksIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['apps']['webhook_listeners']['api']['v1']['webhooks'][':id']['$post']
      >,
    ) {
      return parseResponse(
        client.ocs['v2.php'].apps.webhook_listeners.api.v1.webhooks[':id'].$post(args, options),
      )
    },
  })
}

export function createPostOcsV2PhpAppsWebhookListenersApiV1WebhooksId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.ocs)['v2.php']['apps']['webhook_listeners']['api']['v1']['webhooks'][':id']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['webhook_listeners']['api']['v1']['webhooks'][':id']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostOcsV2PhpAppsWebhookListenersApiV1WebhooksIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteOcsV2PhpAppsWebhookListenersApiV1WebhooksIdMutationKey() {
  return ['ocs', '/ocs/v2.php/apps/webhook_listeners/api/v1/webhooks/:id', 'DELETE'] as const
}

export function getDeleteOcsV2PhpAppsWebhookListenersApiV1WebhooksIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['webhook_listeners']['api']['v1']['webhooks'][':id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['webhook_listeners']['api']['v1']['webhooks'][':id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteOcsV2PhpAppsWebhookListenersApiV1WebhooksIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['apps']['webhook_listeners']['api']['v1']['webhooks'][':id']['$delete']
      >,
    ) {
      return parseResponse(
        client.ocs['v2.php'].apps.webhook_listeners.api.v1.webhooks[':id'].$delete(args, options),
      )
    },
  })
}

export function createDeleteOcsV2PhpAppsWebhookListenersApiV1WebhooksId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.ocs)['v2.php']['apps']['webhook_listeners']['api']['v1']['webhooks'][':id']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['webhook_listeners']['api']['v1']['webhooks'][':id']['$delete']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteOcsV2PhpAppsWebhookListenersApiV1WebhooksIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteOcsV2PhpAppsWebhookListenersApiV1WebhooksByappidAppidMutationKey() {
  return [
    'ocs',
    '/ocs/v2.php/apps/webhook_listeners/api/v1/webhooks/byappid/:appid',
    'DELETE',
  ] as const
}

export function getDeleteOcsV2PhpAppsWebhookListenersApiV1WebhooksByappidAppidMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ocs)['v2.php']['apps']['webhook_listeners']['api']['v1']['webhooks']['byappid'][':appid']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['webhook_listeners']['api']['v1']['webhooks']['byappid'][':appid']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteOcsV2PhpAppsWebhookListenersApiV1WebhooksByappidAppidMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ocs)['v2.php']['apps']['webhook_listeners']['api']['v1']['webhooks']['byappid'][':appid']['$delete']
      >,
    ) {
      return parseResponse(
        client.ocs['v2.php'].apps.webhook_listeners.api.v1.webhooks.byappid[':appid'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function createDeleteOcsV2PhpAppsWebhookListenersApiV1WebhooksByappidAppid<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.ocs)['v2.php']['apps']['webhook_listeners']['api']['v1']['webhooks']['byappid'][':appid']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.ocs)['v2.php']['apps']['webhook_listeners']['api']['v1']['webhooks']['byappid'][':appid']['$delete']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteOcsV2PhpAppsWebhookListenersApiV1WebhooksByappidAppidMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}
