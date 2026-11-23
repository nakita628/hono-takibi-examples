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

export function getV4Key() {
  return ['v4'] as const
}

export function getV1IntegrationsWebhooksQueryKey(
  args: InferRequestType<typeof client.v1.integrations.webhooks.$get>,
) {
  return ['v1', '/v1/integrations/webhooks', args] as const
}

export function getV1IntegrationsWebhooksQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.integrations.webhooks.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.integrations.webhooks.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.integrations.webhooks.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1IntegrationsWebhooksQueryKey>
  >({
    queryKey: getV1IntegrationsWebhooksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.integrations.webhooks.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1IntegrationsWebhooks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.integrations.webhooks.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v1.integrations.webhooks.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.integrations.webhooks.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1IntegrationsWebhooksQueryKey>
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
      ...getV1IntegrationsWebhooksQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostV1IntegrationsWebhooksMutationKey() {
  return ['v1', '/v1/integrations/webhooks', 'POST'] as const
}

export function getPostV1IntegrationsWebhooksMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.integrations.webhooks.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.integrations.webhooks.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1IntegrationsWebhooksMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.integrations.webhooks.$post>) {
      return parseResponse(client.v1.integrations.webhooks.$post(args, options))
    },
  })
}

export function injectPostV1IntegrationsWebhooks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.integrations.webhooks.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.integrations.webhooks.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1IntegrationsWebhooksMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteV1IntegrationsWebhooksIdMutationKey() {
  return ['v1', '/v1/integrations/webhooks/:id', 'DELETE'] as const
}

export function getDeleteV1IntegrationsWebhooksIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.integrations.webhooks)[':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1.integrations.webhooks)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1IntegrationsWebhooksIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.integrations.webhooks)[':id']['$delete']>,
    ) {
      return parseResponse(client.v1.integrations.webhooks[':id'].$delete(args, options))
    },
  })
}

export function injectDeleteV1IntegrationsWebhooksId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.integrations.webhooks)[':id']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.v1.integrations.webhooks)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV1IntegrationsWebhooksIdMutationOptions<
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

export function getV4DomainsQueryKey(args: InferRequestType<typeof client.v4.domains.$get>) {
  return ['v4', '/v4/domains', args] as const
}

export function getV4DomainsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.domains.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v4.domains.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.domains.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV4DomainsQueryKey>
  >({
    queryKey: getV4DomainsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v4.domains.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV4Domains<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.domains.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v4.domains.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.domains.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV4DomainsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV4DomainsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getV4DomainsNameQueryKey(
  args: InferRequestType<(typeof client.v4.domains)[':name']['$get']>,
) {
  return ['v4', '/v4/domains/:name', args] as const
}

export function getV4DomainsNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v4.domains)[':name']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v4.domains)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v4.domains)[':name']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV4DomainsNameQueryKey>
  >({
    queryKey: getV4DomainsNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v4.domains[':name'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV4DomainsName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v4.domains)[':name']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v4.domains)[':name']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v4.domains)[':name']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV4DomainsNameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV4DomainsNameQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}
