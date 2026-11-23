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

export function getOcsKey() {
  return ['ocs'] as const
}

export function getOcsV2PhpAppsWebhookListenersApiV1WebhooksQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['webhook_listeners']['api']['v1']['webhooks']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['ocs', '/ocs/v2.php/apps/webhook_listeners/api/v1/webhooks', keyArgs] as const
}

export function getOcsV2PhpAppsWebhookListenersApiV1WebhooksQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['webhook_listeners']['api']['v1']['webhooks']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOcsV2PhpAppsWebhookListenersApiV1WebhooksQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ocs['v2.php'].apps.webhook_listeners.api.v1.webhooks.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOcsV2PhpAppsWebhookListenersApiV1Webhooks<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['webhook_listeners']['api']['v1']['webhooks']['$get']
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
                    (typeof client.ocs)['v2.php']['apps']['webhook_listeners']['api']['v1']['webhooks']['$get']
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
                    (typeof client.ocs)['v2.php']['apps']['webhook_listeners']['api']['v1']['webhooks']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getOcsV2PhpAppsWebhookListenersApiV1WebhooksQueryKey>
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
              (typeof client.ocs)['v2.php']['apps']['webhook_listeners']['api']['v1']['webhooks']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOcsV2PhpAppsWebhookListenersApiV1WebhooksQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOcsV2PhpAppsWebhookListenersApiV1WebhooksQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ocs['v2.php'].apps.webhook_listeners.api.v1.webhooks.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostOcsV2PhpAppsWebhookListenersApiV1Webhooks<
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
  const mutationDefaults = getPostOcsV2PhpAppsWebhookListenersApiV1WebhooksMutationOptions<
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

export function getOcsV2PhpAppsWebhookListenersApiV1WebhooksIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['webhook_listeners']['api']['v1']['webhooks'][':id']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['ocs', '/ocs/v2.php/apps/webhook_listeners/api/v1/webhooks/:id', keyArgs] as const
}

export function getOcsV2PhpAppsWebhookListenersApiV1WebhooksIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['webhook_listeners']['api']['v1']['webhooks'][':id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOcsV2PhpAppsWebhookListenersApiV1WebhooksIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ocs['v2.php'].apps.webhook_listeners.api.v1.webhooks[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOcsV2PhpAppsWebhookListenersApiV1WebhooksId<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.ocs)['v2.php']['apps']['webhook_listeners']['api']['v1']['webhooks'][':id']['$get']
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
                    (typeof client.ocs)['v2.php']['apps']['webhook_listeners']['api']['v1']['webhooks'][':id']['$get']
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
                    (typeof client.ocs)['v2.php']['apps']['webhook_listeners']['api']['v1']['webhooks'][':id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getOcsV2PhpAppsWebhookListenersApiV1WebhooksIdQueryKey>
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
              (typeof client.ocs)['v2.php']['apps']['webhook_listeners']['api']['v1']['webhooks'][':id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOcsV2PhpAppsWebhookListenersApiV1WebhooksIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOcsV2PhpAppsWebhookListenersApiV1WebhooksIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ocs['v2.php'].apps.webhook_listeners.api.v1.webhooks[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostOcsV2PhpAppsWebhookListenersApiV1WebhooksId<
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
  const mutationDefaults = getPostOcsV2PhpAppsWebhookListenersApiV1WebhooksIdMutationOptions<
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

export function useDeleteOcsV2PhpAppsWebhookListenersApiV1WebhooksId<
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
  const mutationDefaults = getDeleteOcsV2PhpAppsWebhookListenersApiV1WebhooksIdMutationOptions<
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

export function useDeleteOcsV2PhpAppsWebhookListenersApiV1WebhooksByappidAppid<
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
    getDeleteOcsV2PhpAppsWebhookListenersApiV1WebhooksByappidAppidMutationOptions<
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
