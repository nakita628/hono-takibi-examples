import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getOcsKey() {
  return ['ocs'] as const
}

export function getGetOcsV2PhpAppsWebhookListenersApiV1WebhooksKey(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['webhook_listeners']['api']['v1']['webhooks']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['ocs', '/ocs/v2.php/apps/webhook_listeners/api/v1/webhooks', keyArgs] as const
}

export function useGetOcsV2PhpAppsWebhookListenersApiV1Webhooks<TError = unknown>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['webhook_listeners']['api']['v1']['webhooks']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetOcsV2PhpAppsWebhookListenersApiV1WebhooksKey(args)
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
                (typeof client.ocs)['v2.php']['apps']['webhook_listeners']['api']['v1']['webhooks']['$get']
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
          client.ocs['v2.php'].apps.webhook_listeners.api.v1.webhooks.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOcsV2PhpAppsWebhookListenersApiV1Webhooks<TError = unknown>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['webhook_listeners']['api']['v1']['webhooks']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetOcsV2PhpAppsWebhookListenersApiV1WebhooksKey(args)
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
                (typeof client.ocs)['v2.php']['apps']['webhook_listeners']['api']['v1']['webhooks']['$get']
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
          client.ocs['v2.php'].apps.webhook_listeners.api.v1.webhooks.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostOcsV2PhpAppsWebhookListenersApiV1WebhooksKey() {
  return ['ocs', '/ocs/v2.php/apps/webhook_listeners/api/v1/webhooks', 'POST'] as const
}

export function usePostOcsV2PhpAppsWebhookListenersApiV1Webhooks<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['webhook_listeners']['api']['v1']['webhooks']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOcsV2PhpAppsWebhookListenersApiV1WebhooksKey()
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
            (typeof client.ocs)['v2.php']['apps']['webhook_listeners']['api']['v1']['webhooks']['$post']
          >
        },
      ) =>
        parseResponse(
          client.ocs['v2.php'].apps.webhook_listeners.api.v1.webhooks.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetOcsV2PhpAppsWebhookListenersApiV1WebhooksIdKey(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['webhook_listeners']['api']['v1']['webhooks'][':id']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['ocs', '/ocs/v2.php/apps/webhook_listeners/api/v1/webhooks/:id', keyArgs] as const
}

export function useGetOcsV2PhpAppsWebhookListenersApiV1WebhooksId<TError = unknown>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['webhook_listeners']['api']['v1']['webhooks'][':id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetOcsV2PhpAppsWebhookListenersApiV1WebhooksIdKey(args)
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
                (typeof client.ocs)['v2.php']['apps']['webhook_listeners']['api']['v1']['webhooks'][':id']['$get']
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
          client.ocs['v2.php'].apps.webhook_listeners.api.v1.webhooks[':id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOcsV2PhpAppsWebhookListenersApiV1WebhooksId<TError = unknown>(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['webhook_listeners']['api']['v1']['webhooks'][':id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetOcsV2PhpAppsWebhookListenersApiV1WebhooksIdKey(args)
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
                (typeof client.ocs)['v2.php']['apps']['webhook_listeners']['api']['v1']['webhooks'][':id']['$get']
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
          client.ocs['v2.php'].apps.webhook_listeners.api.v1.webhooks[':id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostOcsV2PhpAppsWebhookListenersApiV1WebhooksIdKey() {
  return ['ocs', '/ocs/v2.php/apps/webhook_listeners/api/v1/webhooks/:id', 'POST'] as const
}

export function usePostOcsV2PhpAppsWebhookListenersApiV1WebhooksId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['webhook_listeners']['api']['v1']['webhooks'][':id']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOcsV2PhpAppsWebhookListenersApiV1WebhooksIdKey()
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
            (typeof client.ocs)['v2.php']['apps']['webhook_listeners']['api']['v1']['webhooks'][':id']['$post']
          >
        },
      ) =>
        parseResponse(
          client.ocs['v2.php'].apps.webhook_listeners.api.v1.webhooks[':id'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteOcsV2PhpAppsWebhookListenersApiV1WebhooksIdKey() {
  return ['ocs', '/ocs/v2.php/apps/webhook_listeners/api/v1/webhooks/:id', 'DELETE'] as const
}

export function useDeleteOcsV2PhpAppsWebhookListenersApiV1WebhooksId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['webhook_listeners']['api']['v1']['webhooks'][':id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteOcsV2PhpAppsWebhookListenersApiV1WebhooksIdKey()
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
            (typeof client.ocs)['v2.php']['apps']['webhook_listeners']['api']['v1']['webhooks'][':id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.ocs['v2.php'].apps.webhook_listeners.api.v1.webhooks[':id'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteOcsV2PhpAppsWebhookListenersApiV1WebhooksByappidAppidKey() {
  return [
    'ocs',
    '/ocs/v2.php/apps/webhook_listeners/api/v1/webhooks/byappid/:appid',
    'DELETE',
  ] as const
}

export function useDeleteOcsV2PhpAppsWebhookListenersApiV1WebhooksByappidAppid<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['webhook_listeners']['api']['v1']['webhooks']['byappid'][':appid']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteOcsV2PhpAppsWebhookListenersApiV1WebhooksByappidAppidKey()
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
            (typeof client.ocs)['v2.php']['apps']['webhook_listeners']['api']['v1']['webhooks']['byappid'][':appid']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.ocs['v2.php'].apps.webhook_listeners.api.v1.webhooks.byappid[':appid'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}
