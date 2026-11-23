import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getWebhookKey() {
  return ['webhook'] as const
}

export function getGetWebhookLogsKey(args: InferRequestType<typeof client.webhook.logs.$get>) {
  const { header: _, ...keyArgs } = args
  return ['webhook', '/webhook/logs', keyArgs] as const
}

export function useGetWebhookLogs<TError = unknown>(
  args: InferRequestType<typeof client.webhook.logs.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhook.logs.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetWebhookLogsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhook.logs.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.webhook.logs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWebhookLogs<TError = unknown>(
  args: InferRequestType<typeof client.webhook.logs.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhook.logs.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetWebhookLogsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhook.logs.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.webhook.logs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostWebhookWIdServiceIdKey() {
  return ['webhook', '/webhook/w/:id/:serviceId', 'POST'] as const
}

export function usePostWebhookWIdServiceId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.webhook.w)[':id'][':serviceId']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.webhook.w)[':id'][':serviceId']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWebhookWIdServiceIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.webhook.w)[':id'][':serviceId']['$post']> },
      ) => parseResponse(client.webhook.w[':id'][':serviceId'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetWebhookWebhooksKey(
  args: InferRequestType<typeof client.webhook.webhooks.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['webhook', '/webhook/webhooks', keyArgs] as const
}

export function useGetWebhookWebhooks<TError = unknown>(
  args: InferRequestType<typeof client.webhook.webhooks.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhook.webhooks.$get>>>>
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
        ? getGetWebhookWebhooksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhook.webhooks.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.webhook.webhooks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWebhookWebhooks<TError = unknown>(
  args: InferRequestType<typeof client.webhook.webhooks.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhook.webhooks.$get>>>>
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
        ? getGetWebhookWebhooksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhook.webhooks.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.webhook.webhooks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostWebhookWebhooksKey() {
  return ['webhook', '/webhook/webhooks', 'POST'] as const
}

export function usePostWebhookWebhooks<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhook.webhooks.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.webhook.webhooks.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWebhookWebhooksKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.webhook.webhooks.$post> }) =>
        parseResponse(client.webhook.webhooks.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetWebhookWebhooksIdKey(
  args: InferRequestType<(typeof client.webhook.webhooks)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['webhook', '/webhook/webhooks/:id', keyArgs] as const
}

export function useGetWebhookWebhooksId<TError = unknown>(
  args: InferRequestType<(typeof client.webhook.webhooks)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.webhook.webhooks)[':id']['$get']>>>
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
        ? getGetWebhookWebhooksIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.webhook.webhooks)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.webhook.webhooks[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWebhookWebhooksId<TError = unknown>(
  args: InferRequestType<(typeof client.webhook.webhooks)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.webhook.webhooks)[':id']['$get']>>>
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
        ? getGetWebhookWebhooksIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.webhook.webhooks)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.webhook.webhooks[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteWebhookWebhooksIdKey() {
  return ['webhook', '/webhook/webhooks/:id', 'DELETE'] as const
}

export function useDeleteWebhookWebhooksId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.webhook.webhooks)[':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.webhook.webhooks)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteWebhookWebhooksIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.webhook.webhooks)[':id']['$delete']> },
      ) => parseResponse(client.webhook.webhooks[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchWebhookWebhooksIdKey() {
  return ['webhook', '/webhook/webhooks/:id', 'PATCH'] as const
}

export function usePatchWebhookWebhooksId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.webhook.webhooks)[':id']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.webhook.webhooks)[':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchWebhookWebhooksIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.webhook.webhooks)[':id']['$patch']> },
      ) => parseResponse(client.webhook.webhooks[':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostWebhookWebhooksIdExecuteServiceIdKey() {
  return ['webhook', '/webhook/webhooks/:id/execute/:serviceId', 'POST'] as const
}

export function usePostWebhookWebhooksIdExecuteServiceId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.webhook.webhooks)[':id']['execute'][':serviceId']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.webhook.webhooks)[':id']['execute'][':serviceId']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWebhookWebhooksIdExecuteServiceIdKey()
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
            (typeof client.webhook.webhooks)[':id']['execute'][':serviceId']['$post']
          >
        },
      ) =>
        parseResponse(
          client.webhook.webhooks[':id'].execute[':serviceId'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostWebhookWebhooksIdXServiceIdKey() {
  return ['webhook', '/webhook/webhooks/:id/x/:serviceId', 'POST'] as const
}

export function usePostWebhookWebhooksIdXServiceId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.webhook.webhooks)[':id']['x'][':serviceId']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.webhook.webhooks)[':id']['x'][':serviceId']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWebhookWebhooksIdXServiceIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.webhook.webhooks)[':id']['x'][':serviceId']['$post']>
        },
      ) => parseResponse(client.webhook.webhooks[':id'].x[':serviceId'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
