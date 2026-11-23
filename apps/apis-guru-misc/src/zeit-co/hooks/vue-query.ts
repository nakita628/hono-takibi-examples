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

export function getV1Key() {
  return ['v1'] as const
}

export function getV4Key() {
  return ['v4'] as const
}

export function getV1IntegrationsWebhooksQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.integrations.webhooks.$get>>,
) {
  return ['v1', '/v1/integrations/webhooks', toValue(args)] as const
}

export function getV1IntegrationsWebhooksQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.integrations.webhooks.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1IntegrationsWebhooksQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.integrations.webhooks.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1IntegrationsWebhooks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.integrations.webhooks.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.integrations.webhooks.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.integrations.webhooks.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.integrations.webhooks.$get>>>
            >
          >,
          ReturnType<typeof getV1IntegrationsWebhooksQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.integrations.webhooks.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1IntegrationsWebhooksQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1IntegrationsWebhooksQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.integrations.webhooks.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostV1IntegrationsWebhooks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v1.integrations.webhooks.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.v1.integrations.webhooks.$post>,
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
  const mutationDefaults = getPostV1IntegrationsWebhooksMutationOptions<TError, TOnMutateResult>(
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

export function useDeleteV1IntegrationsWebhooksId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV1IntegrationsWebhooksIdMutationOptions<
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

export function getV4DomainsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v4.domains.$get>>,
) {
  return ['v4', '/v4/domains', toValue(args)] as const
}

export function getV4DomainsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v4.domains.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV4DomainsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v4.domains.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV4Domains<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.domains.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v4.domains.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.domains.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.domains.$get>>>>
          >,
          ReturnType<typeof getV4DomainsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.domains.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV4DomainsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV4DomainsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v4.domains.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV4DomainsNameQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v4.domains)[':name']['$get']>>,
) {
  return ['v4', '/v4/domains/:name', toValue(args)] as const
}

export function getV4DomainsNameQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v4.domains)[':name']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV4DomainsNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v4.domains[':name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV4DomainsName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v4.domains)[':name']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v4.domains)[':name']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v4.domains)[':name']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v4.domains)[':name']['$get']>>>
            >
          >,
          ReturnType<typeof getV4DomainsNameQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v4.domains)[':name']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV4DomainsNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV4DomainsNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v4.domains[':name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
