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

export function getAdminKey() {
  return ['admin'] as const
}

export function getAuthKey() {
  return ['auth'] as const
}

export function getAdminApiKeysQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.admin)['api-keys']['$get']>>,
) {
  return ['admin', '/admin/api-keys', toValue(args)] as const
}

export function getAdminApiKeysQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.admin)['api-keys']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdminApiKeysQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.admin['api-keys'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdminApiKeys<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.admin)['api-keys']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.admin)['api-keys']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.admin)['api-keys']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.admin)['api-keys']['$get']>>>
            >
          >,
          ReturnType<typeof getAdminApiKeysQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.admin)['api-keys']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminApiKeysQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdminApiKeysQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.admin['api-keys'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAdminApiKeysMutationKey() {
  return ['admin', '/admin/api-keys', 'POST'] as const
}

export function getPostAdminApiKeysMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.admin)['api-keys']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.admin)['api-keys']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminApiKeysMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.admin)['api-keys']['$post']>) {
      return parseResponse(client.admin['api-keys'].$post(args, options))
    },
  })
}

export function usePostAdminApiKeys<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.admin)['api-keys']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.admin)['api-keys']['$post']>,
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
  const mutationDefaults = getPostAdminApiKeysMutationOptions<TError, TOnMutateResult>(
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

export function getAdminApiKeysIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.admin)['api-keys'][':id']['$get']>>,
) {
  return ['admin', '/admin/api-keys/:id', toValue(args)] as const
}

export function getAdminApiKeysIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.admin)['api-keys'][':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdminApiKeysIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.admin['api-keys'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdminApiKeysId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.admin)['api-keys'][':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.admin)['api-keys'][':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin)['api-keys'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin)['api-keys'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAdminApiKeysIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.admin)['api-keys'][':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminApiKeysIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdminApiKeysIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.admin['api-keys'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAdminApiKeysIdMutationKey() {
  return ['admin', '/admin/api-keys/:id', 'POST'] as const
}

export function getPostAdminApiKeysIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.admin)['api-keys'][':id']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.admin)['api-keys'][':id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminApiKeysIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.admin)['api-keys'][':id']['$post']>) {
      return parseResponse(client.admin['api-keys'][':id'].$post(args, options))
    },
  })
}

export function usePostAdminApiKeysId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin)['api-keys'][':id']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.admin)['api-keys'][':id']['$post']>,
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
  const mutationDefaults = getPostAdminApiKeysIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteAdminApiKeysIdMutationKey() {
  return ['admin', '/admin/api-keys/:id', 'DELETE'] as const
}

export function getDeleteAdminApiKeysIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin)['api-keys'][':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.admin)['api-keys'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAdminApiKeysIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.admin)['api-keys'][':id']['$delete']>) {
      return parseResponse(client.admin['api-keys'][':id'].$delete(args, options))
    },
  })
}

export function useDeleteAdminApiKeysId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin)['api-keys'][':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.admin)['api-keys'][':id']['$delete']>,
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
  const mutationDefaults = getDeleteAdminApiKeysIdMutationOptions<TError, TOnMutateResult>(
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

export function getPostAdminApiKeysIdRevokeMutationKey() {
  return ['admin', '/admin/api-keys/:id/revoke', 'POST'] as const
}

export function getPostAdminApiKeysIdRevokeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin)['api-keys'][':id']['revoke']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.admin)['api-keys'][':id']['revoke']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminApiKeysIdRevokeMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.admin)['api-keys'][':id']['revoke']['$post']>,
    ) {
      return parseResponse(client.admin['api-keys'][':id'].revoke.$post(args, options))
    },
  })
}

export function usePostAdminApiKeysIdRevoke<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin)['api-keys'][':id']['revoke']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.admin)['api-keys'][':id']['revoke']['$post']>,
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
  const mutationDefaults = getPostAdminApiKeysIdRevokeMutationOptions<TError, TOnMutateResult>(
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

export function getPostAdminApiKeysIdSalesChannelsMutationKey() {
  return ['admin', '/admin/api-keys/:id/sales-channels', 'POST'] as const
}

export function getPostAdminApiKeysIdSalesChannelsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin)['api-keys'][':id']['sales-channels']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.admin)['api-keys'][':id']['sales-channels']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminApiKeysIdSalesChannelsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.admin)['api-keys'][':id']['sales-channels']['$post']>,
    ) {
      return parseResponse(client.admin['api-keys'][':id']['sales-channels'].$post(args, options))
    },
  })
}

export function usePostAdminApiKeysIdSalesChannels<
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
                  ReturnType<(typeof client.admin)['api-keys'][':id']['sales-channels']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.admin)['api-keys'][':id']['sales-channels']['$post']>,
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
  const mutationDefaults = getPostAdminApiKeysIdSalesChannelsMutationOptions<
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

export function getAdminCampaignsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.admin.campaigns.$get>>,
) {
  return ['admin', '/admin/campaigns', toValue(args)] as const
}

export function getAdminCampaignsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.admin.campaigns.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdminCampaignsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.admin.campaigns.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdminCampaigns<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.campaigns.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.admin.campaigns.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.admin.campaigns.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.admin.campaigns.$get>>>
            >
          >,
          ReturnType<typeof getAdminCampaignsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.campaigns.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAdminCampaignsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdminCampaignsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.admin.campaigns.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAdminCampaignsMutationKey() {
  return ['admin', '/admin/campaigns', 'POST'] as const
}

export function getPostAdminCampaignsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.campaigns.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.admin.campaigns.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminCampaignsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.admin.campaigns.$post>) {
      return parseResponse(client.admin.campaigns.$post(args, options))
    },
  })
}

export function usePostAdminCampaigns<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.admin.campaigns.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.admin.campaigns.$post>,
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
  const mutationDefaults = getPostAdminCampaignsMutationOptions<TError, TOnMutateResult>(
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

export function getAdminCampaignsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.admin.campaigns)[':id']['$get']>>,
) {
  return ['admin', '/admin/campaigns/:id', toValue(args)] as const
}

export function getAdminCampaignsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.admin.campaigns)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdminCampaignsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.admin.campaigns[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdminCampaignsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.admin.campaigns)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.admin.campaigns)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin.campaigns)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin.campaigns)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAdminCampaignsIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.admin.campaigns)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminCampaignsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdminCampaignsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.admin.campaigns[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAdminCampaignsIdMutationKey() {
  return ['admin', '/admin/campaigns/:id', 'POST'] as const
}

export function getPostAdminCampaignsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.admin.campaigns)[':id']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.admin.campaigns)[':id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminCampaignsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.admin.campaigns)[':id']['$post']>) {
      return parseResponse(client.admin.campaigns[':id'].$post(args, options))
    },
  })
}

export function usePostAdminCampaignsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin.campaigns)[':id']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.admin.campaigns)[':id']['$post']>,
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
  const mutationDefaults = getPostAdminCampaignsIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteAdminCampaignsIdMutationKey() {
  return ['admin', '/admin/campaigns/:id', 'DELETE'] as const
}

export function getDeleteAdminCampaignsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.admin.campaigns)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.admin.campaigns)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAdminCampaignsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.admin.campaigns)[':id']['$delete']>) {
      return parseResponse(client.admin.campaigns[':id'].$delete(args, options))
    },
  })
}

export function useDeleteAdminCampaignsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin.campaigns)[':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.admin.campaigns)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteAdminCampaignsIdMutationOptions<TError, TOnMutateResult>(
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

export function getPostAdminCampaignsIdPromotionsMutationKey() {
  return ['admin', '/admin/campaigns/:id/promotions', 'POST'] as const
}

export function getPostAdminCampaignsIdPromotionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin.campaigns)[':id']['promotions']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.admin.campaigns)[':id']['promotions']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminCampaignsIdPromotionsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.admin.campaigns)[':id']['promotions']['$post']>,
    ) {
      return parseResponse(client.admin.campaigns[':id'].promotions.$post(args, options))
    },
  })
}

export function usePostAdminCampaignsIdPromotions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin.campaigns)[':id']['promotions']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.admin.campaigns)[':id']['promotions']['$post']>,
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
  const mutationDefaults = getPostAdminCampaignsIdPromotionsMutationOptions<
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

export function getAdminClaimsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.admin.claims.$get>>,
) {
  return ['admin', '/admin/claims', toValue(args)] as const
}

export function getAdminClaimsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.admin.claims.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdminClaimsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.admin.claims.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useAdminClaims<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.claims.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.admin.claims.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.claims.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.claims.$get>>>>
          >,
          ReturnType<typeof getAdminClaimsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.claims.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAdminClaimsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdminClaimsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.admin.claims.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAdminClaimsMutationKey() {
  return ['admin', '/admin/claims', 'POST'] as const
}

export function getPostAdminClaimsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.claims.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.admin.claims.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminClaimsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.admin.claims.$post>) {
      return parseResponse(client.admin.claims.$post(args, options))
    },
  })
}

export function usePostAdminClaims<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.claims.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.admin.claims.$post>,
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
  const mutationDefaults = getPostAdminClaimsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getAdminClaimsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.admin.claims)[':id']['$get']>>,
) {
  return ['admin', '/admin/claims/:id', toValue(args)] as const
}

export function getAdminClaimsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.admin.claims)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdminClaimsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.admin.claims[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdminClaimsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.admin.claims)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.admin.claims)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.admin.claims)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.admin.claims)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getAdminClaimsIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.admin.claims)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminClaimsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdminClaimsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.admin.claims[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAdminClaimsIdCancelMutationKey() {
  return ['admin', '/admin/claims/:id/cancel', 'POST'] as const
}

export function getPostAdminClaimsIdCancelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin.claims)[':id']['cancel']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.admin.claims)[':id']['cancel']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminClaimsIdCancelMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.admin.claims)[':id']['cancel']['$post']>,
    ) {
      return parseResponse(client.admin.claims[':id'].cancel.$post(args, options))
    },
  })
}

export function usePostAdminClaimsIdCancel<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin.claims)[':id']['cancel']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.admin.claims)[':id']['cancel']['$post']>,
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
  const mutationDefaults = getPostAdminClaimsIdCancelMutationOptions<TError, TOnMutateResult>(
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

export function getPostAdminClaimsIdClaimItemsMutationKey() {
  return ['admin', '/admin/claims/:id/claim-items', 'POST'] as const
}

export function getPostAdminClaimsIdClaimItemsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin.claims)[':id']['claim-items']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.admin.claims)[':id']['claim-items']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminClaimsIdClaimItemsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.admin.claims)[':id']['claim-items']['$post']>,
    ) {
      return parseResponse(client.admin.claims[':id']['claim-items'].$post(args, options))
    },
  })
}

export function usePostAdminClaimsIdClaimItems<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin.claims)[':id']['claim-items']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.admin.claims)[':id']['claim-items']['$post']>,
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
  const mutationDefaults = getPostAdminClaimsIdClaimItemsMutationOptions<TError, TOnMutateResult>(
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

export function getPostAdminClaimsIdClaimItemsActionIdMutationKey() {
  return ['admin', '/admin/claims/:id/claim-items/:action_id', 'POST'] as const
}

export function getPostAdminClaimsIdClaimItemsActionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.admin.claims)[':id']['claim-items'][':action_id']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.admin.claims)[':id']['claim-items'][':action_id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminClaimsIdClaimItemsActionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.admin.claims)[':id']['claim-items'][':action_id']['$post']
      >,
    ) {
      return parseResponse(
        client.admin.claims[':id']['claim-items'][':action_id'].$post(args, options),
      )
    },
  })
}

export function usePostAdminClaimsIdClaimItemsActionId<
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
                    (typeof client.admin.claims)[':id']['claim-items'][':action_id']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.admin.claims)[':id']['claim-items'][':action_id']['$post']
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
  const mutationDefaults = getPostAdminClaimsIdClaimItemsActionIdMutationOptions<
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

export function getDeleteAdminClaimsIdClaimItemsActionIdMutationKey() {
  return ['admin', '/admin/claims/:id/claim-items/:action_id', 'DELETE'] as const
}

export function getDeleteAdminClaimsIdClaimItemsActionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.admin.claims)[':id']['claim-items'][':action_id']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.admin.claims)[':id']['claim-items'][':action_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAdminClaimsIdClaimItemsActionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.admin.claims)[':id']['claim-items'][':action_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.admin.claims[':id']['claim-items'][':action_id'].$delete(args, options),
      )
    },
  })
}

export function useDeleteAdminClaimsIdClaimItemsActionId<
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
                    (typeof client.admin.claims)[':id']['claim-items'][':action_id']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.admin.claims)[':id']['claim-items'][':action_id']['$delete']
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
  const mutationDefaults = getDeleteAdminClaimsIdClaimItemsActionIdMutationOptions<
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

export function getPostAdminClaimsIdInboundItemsMutationKey() {
  return ['admin', '/admin/claims/:id/inbound/items', 'POST'] as const
}

export function getPostAdminClaimsIdInboundItemsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin.claims)[':id']['inbound']['items']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.admin.claims)[':id']['inbound']['items']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminClaimsIdInboundItemsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.admin.claims)[':id']['inbound']['items']['$post']>,
    ) {
      return parseResponse(client.admin.claims[':id'].inbound.items.$post(args, options))
    },
  })
}

export function usePostAdminClaimsIdInboundItems<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.admin.claims)[':id']['inbound']['items']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.admin.claims)[':id']['inbound']['items']['$post']>,
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
  const mutationDefaults = getPostAdminClaimsIdInboundItemsMutationOptions<TError, TOnMutateResult>(
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

export function getPostAdminClaimsIdInboundItemsActionIdMutationKey() {
  return ['admin', '/admin/claims/:id/inbound/items/:action_id', 'POST'] as const
}

export function getPostAdminClaimsIdInboundItemsActionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.admin.claims)[':id']['inbound']['items'][':action_id']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.admin.claims)[':id']['inbound']['items'][':action_id']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAdminClaimsIdInboundItemsActionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.admin.claims)[':id']['inbound']['items'][':action_id']['$post']
      >,
    ) {
      return parseResponse(
        client.admin.claims[':id'].inbound.items[':action_id'].$post(args, options),
      )
    },
  })
}

export function usePostAdminClaimsIdInboundItemsActionId<
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
                    (typeof client.admin.claims)[':id']['inbound']['items'][':action_id']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.admin.claims)[':id']['inbound']['items'][':action_id']['$post']
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
  const mutationDefaults = getPostAdminClaimsIdInboundItemsActionIdMutationOptions<
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

export function getDeleteAdminClaimsIdInboundItemsActionIdMutationKey() {
  return ['admin', '/admin/claims/:id/inbound/items/:action_id', 'DELETE'] as const
}

export function getDeleteAdminClaimsIdInboundItemsActionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.admin.claims)[':id']['inbound']['items'][':action_id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.admin.claims)[':id']['inbound']['items'][':action_id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteAdminClaimsIdInboundItemsActionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.admin.claims)[':id']['inbound']['items'][':action_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.admin.claims[':id'].inbound.items[':action_id'].$delete(args, options),
      )
    },
  })
}

export function useDeleteAdminClaimsIdInboundItemsActionId<
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
                    (typeof client.admin.claims)[':id']['inbound']['items'][':action_id']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.admin.claims)[':id']['inbound']['items'][':action_id']['$delete']
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
  const mutationDefaults = getDeleteAdminClaimsIdInboundItemsActionIdMutationOptions<
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

export function getPostAdminClaimsIdInboundShippingMethodMutationKey() {
  return ['admin', '/admin/claims/:id/inbound/shipping-method', 'POST'] as const
}

export function getPostAdminClaimsIdInboundShippingMethodMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.admin.claims)[':id']['inbound']['shipping-method']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.admin.claims)[':id']['inbound']['shipping-method']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminClaimsIdInboundShippingMethodMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.admin.claims)[':id']['inbound']['shipping-method']['$post']
      >,
    ) {
      return parseResponse(
        client.admin.claims[':id'].inbound['shipping-method'].$post(args, options),
      )
    },
  })
}

export function usePostAdminClaimsIdInboundShippingMethod<
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
                    (typeof client.admin.claims)[':id']['inbound']['shipping-method']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.admin.claims)[':id']['inbound']['shipping-method']['$post']
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
  const mutationDefaults = getPostAdminClaimsIdInboundShippingMethodMutationOptions<
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

export function getPostAdminClaimsIdInboundShippingMethodActionIdMutationKey() {
  return ['admin', '/admin/claims/:id/inbound/shipping-method/:action_id', 'POST'] as const
}

export function getPostAdminClaimsIdInboundShippingMethodActionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.admin.claims)[':id']['inbound']['shipping-method'][':action_id']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.admin.claims)[':id']['inbound']['shipping-method'][':action_id']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAdminClaimsIdInboundShippingMethodActionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.admin.claims)[':id']['inbound']['shipping-method'][':action_id']['$post']
      >,
    ) {
      return parseResponse(
        client.admin.claims[':id'].inbound['shipping-method'][':action_id'].$post(args, options),
      )
    },
  })
}

export function usePostAdminClaimsIdInboundShippingMethodActionId<
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
                    (typeof client.admin.claims)[':id']['inbound']['shipping-method'][':action_id']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.admin.claims)[':id']['inbound']['shipping-method'][':action_id']['$post']
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
  const mutationDefaults = getPostAdminClaimsIdInboundShippingMethodActionIdMutationOptions<
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

export function getDeleteAdminClaimsIdInboundShippingMethodActionIdMutationKey() {
  return ['admin', '/admin/claims/:id/inbound/shipping-method/:action_id', 'DELETE'] as const
}

export function getDeleteAdminClaimsIdInboundShippingMethodActionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.admin.claims)[':id']['inbound']['shipping-method'][':action_id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.admin.claims)[':id']['inbound']['shipping-method'][':action_id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteAdminClaimsIdInboundShippingMethodActionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.admin.claims)[':id']['inbound']['shipping-method'][':action_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.admin.claims[':id'].inbound['shipping-method'][':action_id'].$delete(args, options),
      )
    },
  })
}

export function useDeleteAdminClaimsIdInboundShippingMethodActionId<
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
                    (typeof client.admin.claims)[':id']['inbound']['shipping-method'][':action_id']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.admin.claims)[':id']['inbound']['shipping-method'][':action_id']['$delete']
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
  const mutationDefaults = getDeleteAdminClaimsIdInboundShippingMethodActionIdMutationOptions<
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

export function getPostAdminClaimsIdOutboundItemsMutationKey() {
  return ['admin', '/admin/claims/:id/outbound/items', 'POST'] as const
}

export function getPostAdminClaimsIdOutboundItemsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin.claims)[':id']['outbound']['items']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.admin.claims)[':id']['outbound']['items']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminClaimsIdOutboundItemsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.admin.claims)[':id']['outbound']['items']['$post']>,
    ) {
      return parseResponse(client.admin.claims[':id'].outbound.items.$post(args, options))
    },
  })
}

export function usePostAdminClaimsIdOutboundItems<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.admin.claims)[':id']['outbound']['items']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.admin.claims)[':id']['outbound']['items']['$post']>,
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
  const mutationDefaults = getPostAdminClaimsIdOutboundItemsMutationOptions<
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

export function getPostAdminClaimsIdOutboundItemsActionIdMutationKey() {
  return ['admin', '/admin/claims/:id/outbound/items/:action_id', 'POST'] as const
}

export function getPostAdminClaimsIdOutboundItemsActionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.admin.claims)[':id']['outbound']['items'][':action_id']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.admin.claims)[':id']['outbound']['items'][':action_id']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAdminClaimsIdOutboundItemsActionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.admin.claims)[':id']['outbound']['items'][':action_id']['$post']
      >,
    ) {
      return parseResponse(
        client.admin.claims[':id'].outbound.items[':action_id'].$post(args, options),
      )
    },
  })
}

export function usePostAdminClaimsIdOutboundItemsActionId<
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
                    (typeof client.admin.claims)[':id']['outbound']['items'][':action_id']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.admin.claims)[':id']['outbound']['items'][':action_id']['$post']
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
  const mutationDefaults = getPostAdminClaimsIdOutboundItemsActionIdMutationOptions<
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

export function getDeleteAdminClaimsIdOutboundItemsActionIdMutationKey() {
  return ['admin', '/admin/claims/:id/outbound/items/:action_id', 'DELETE'] as const
}

export function getDeleteAdminClaimsIdOutboundItemsActionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.admin.claims)[':id']['outbound']['items'][':action_id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.admin.claims)[':id']['outbound']['items'][':action_id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteAdminClaimsIdOutboundItemsActionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.admin.claims)[':id']['outbound']['items'][':action_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.admin.claims[':id'].outbound.items[':action_id'].$delete(args, options),
      )
    },
  })
}

export function useDeleteAdminClaimsIdOutboundItemsActionId<
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
                    (typeof client.admin.claims)[':id']['outbound']['items'][':action_id']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.admin.claims)[':id']['outbound']['items'][':action_id']['$delete']
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
  const mutationDefaults = getDeleteAdminClaimsIdOutboundItemsActionIdMutationOptions<
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

export function getPostAdminClaimsIdOutboundShippingMethodMutationKey() {
  return ['admin', '/admin/claims/:id/outbound/shipping-method', 'POST'] as const
}

export function getPostAdminClaimsIdOutboundShippingMethodMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.admin.claims)[':id']['outbound']['shipping-method']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.admin.claims)[':id']['outbound']['shipping-method']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminClaimsIdOutboundShippingMethodMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.admin.claims)[':id']['outbound']['shipping-method']['$post']
      >,
    ) {
      return parseResponse(
        client.admin.claims[':id'].outbound['shipping-method'].$post(args, options),
      )
    },
  })
}

export function usePostAdminClaimsIdOutboundShippingMethod<
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
                    (typeof client.admin.claims)[':id']['outbound']['shipping-method']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.admin.claims)[':id']['outbound']['shipping-method']['$post']
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
  const mutationDefaults = getPostAdminClaimsIdOutboundShippingMethodMutationOptions<
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

export function getPostAdminClaimsIdOutboundShippingMethodActionIdMutationKey() {
  return ['admin', '/admin/claims/:id/outbound/shipping-method/:action_id', 'POST'] as const
}

export function getPostAdminClaimsIdOutboundShippingMethodActionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.admin.claims)[':id']['outbound']['shipping-method'][':action_id']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.admin.claims)[':id']['outbound']['shipping-method'][':action_id']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAdminClaimsIdOutboundShippingMethodActionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.admin.claims)[':id']['outbound']['shipping-method'][':action_id']['$post']
      >,
    ) {
      return parseResponse(
        client.admin.claims[':id'].outbound['shipping-method'][':action_id'].$post(args, options),
      )
    },
  })
}

export function usePostAdminClaimsIdOutboundShippingMethodActionId<
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
                    (typeof client.admin.claims)[':id']['outbound']['shipping-method'][':action_id']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.admin.claims)[':id']['outbound']['shipping-method'][':action_id']['$post']
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
  const mutationDefaults = getPostAdminClaimsIdOutboundShippingMethodActionIdMutationOptions<
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

export function getDeleteAdminClaimsIdOutboundShippingMethodActionIdMutationKey() {
  return ['admin', '/admin/claims/:id/outbound/shipping-method/:action_id', 'DELETE'] as const
}

export function getDeleteAdminClaimsIdOutboundShippingMethodActionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.admin.claims)[':id']['outbound']['shipping-method'][':action_id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.admin.claims)[':id']['outbound']['shipping-method'][':action_id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteAdminClaimsIdOutboundShippingMethodActionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.admin.claims)[':id']['outbound']['shipping-method'][':action_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.admin.claims[':id'].outbound['shipping-method'][':action_id'].$delete(args, options),
      )
    },
  })
}

export function useDeleteAdminClaimsIdOutboundShippingMethodActionId<
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
                    (typeof client.admin.claims)[':id']['outbound']['shipping-method'][':action_id']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.admin.claims)[':id']['outbound']['shipping-method'][':action_id']['$delete']
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
  const mutationDefaults = getDeleteAdminClaimsIdOutboundShippingMethodActionIdMutationOptions<
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

export function getPostAdminClaimsIdRequestMutationKey() {
  return ['admin', '/admin/claims/:id/request', 'POST'] as const
}

export function getPostAdminClaimsIdRequestMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin.claims)[':id']['request']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.admin.claims)[':id']['request']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminClaimsIdRequestMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.admin.claims)[':id']['request']['$post']>,
    ) {
      return parseResponse(client.admin.claims[':id'].request.$post(args, options))
    },
  })
}

export function usePostAdminClaimsIdRequest<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin.claims)[':id']['request']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.admin.claims)[':id']['request']['$post']>,
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
  const mutationDefaults = getPostAdminClaimsIdRequestMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteAdminClaimsIdRequestMutationKey() {
  return ['admin', '/admin/claims/:id/request', 'DELETE'] as const
}

export function getDeleteAdminClaimsIdRequestMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin.claims)[':id']['request']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.admin.claims)[':id']['request']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAdminClaimsIdRequestMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.admin.claims)[':id']['request']['$delete']>,
    ) {
      return parseResponse(client.admin.claims[':id'].request.$delete(args, options))
    },
  })
}

export function useDeleteAdminClaimsIdRequest<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin.claims)[':id']['request']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.admin.claims)[':id']['request']['$delete']>,
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
  const mutationDefaults = getDeleteAdminClaimsIdRequestMutationOptions<TError, TOnMutateResult>(
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

export function getAdminCollectionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.admin.collections.$get>>,
) {
  return ['admin', '/admin/collections', toValue(args)] as const
}

export function getAdminCollectionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.admin.collections.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdminCollectionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.admin.collections.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdminCollections<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.collections.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.admin.collections.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.admin.collections.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.admin.collections.$get>>>
            >
          >,
          ReturnType<typeof getAdminCollectionsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.collections.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAdminCollectionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdminCollectionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.admin.collections.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAdminCollectionsMutationKey() {
  return ['admin', '/admin/collections', 'POST'] as const
}

export function getPostAdminCollectionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.collections.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.admin.collections.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminCollectionsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.admin.collections.$post>) {
      return parseResponse(client.admin.collections.$post(args, options))
    },
  })
}

export function usePostAdminCollections<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.admin.collections.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.admin.collections.$post>,
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
  const mutationDefaults = getPostAdminCollectionsMutationOptions<TError, TOnMutateResult>(
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

export function getAdminCollectionsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.admin.collections)[':id']['$get']>>,
) {
  return ['admin', '/admin/collections/:id', toValue(args)] as const
}

export function getAdminCollectionsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.admin.collections)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdminCollectionsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.admin.collections[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdminCollectionsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.admin.collections)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.admin.collections)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin.collections)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin.collections)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAdminCollectionsIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.admin.collections)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminCollectionsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdminCollectionsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.admin.collections[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAdminCollectionsIdMutationKey() {
  return ['admin', '/admin/collections/:id', 'POST'] as const
}

export function getPostAdminCollectionsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.admin.collections)[':id']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.admin.collections)[':id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminCollectionsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.admin.collections)[':id']['$post']>) {
      return parseResponse(client.admin.collections[':id'].$post(args, options))
    },
  })
}

export function usePostAdminCollectionsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin.collections)[':id']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.admin.collections)[':id']['$post']>,
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
  const mutationDefaults = getPostAdminCollectionsIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteAdminCollectionsIdMutationKey() {
  return ['admin', '/admin/collections/:id', 'DELETE'] as const
}

export function getDeleteAdminCollectionsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin.collections)[':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.admin.collections)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAdminCollectionsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.admin.collections)[':id']['$delete']>) {
      return parseResponse(client.admin.collections[':id'].$delete(args, options))
    },
  })
}

export function useDeleteAdminCollectionsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin.collections)[':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.admin.collections)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteAdminCollectionsIdMutationOptions<TError, TOnMutateResult>(
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

export function getPostAdminCollectionsIdProductsMutationKey() {
  return ['admin', '/admin/collections/:id/products', 'POST'] as const
}

export function getPostAdminCollectionsIdProductsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin.collections)[':id']['products']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.admin.collections)[':id']['products']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminCollectionsIdProductsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.admin.collections)[':id']['products']['$post']>,
    ) {
      return parseResponse(client.admin.collections[':id'].products.$post(args, options))
    },
  })
}

export function usePostAdminCollectionsIdProducts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin.collections)[':id']['products']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.admin.collections)[':id']['products']['$post']>,
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
  const mutationDefaults = getPostAdminCollectionsIdProductsMutationOptions<
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

export function getAdminCurrenciesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.admin.currencies.$get>>,
) {
  return ['admin', '/admin/currencies', toValue(args)] as const
}

export function getAdminCurrenciesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.admin.currencies.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdminCurrenciesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.admin.currencies.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdminCurrencies<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.currencies.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.admin.currencies.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.admin.currencies.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.admin.currencies.$get>>>
            >
          >,
          ReturnType<typeof getAdminCurrenciesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.currencies.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAdminCurrenciesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdminCurrenciesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.admin.currencies.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAdminCurrenciesCodeQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.admin.currencies)[':code']['$get']>>,
) {
  return ['admin', '/admin/currencies/:code', toValue(args)] as const
}

export function getAdminCurrenciesCodeQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.admin.currencies)[':code']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdminCurrenciesCodeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.admin.currencies[':code'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdminCurrenciesCode<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.admin.currencies)[':code']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.admin.currencies)[':code']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin.currencies)[':code']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin.currencies)[':code']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAdminCurrenciesCodeQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.admin.currencies)[':code']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminCurrenciesCodeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdminCurrenciesCodeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.admin.currencies[':code'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAdminCustomerGroupsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.admin)['customer-groups']['$get']>>,
) {
  return ['admin', '/admin/customer-groups', toValue(args)] as const
}

export function getAdminCustomerGroupsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.admin)['customer-groups']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdminCustomerGroupsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.admin['customer-groups'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdminCustomerGroups<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.admin)['customer-groups']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.admin)['customer-groups']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin)['customer-groups']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin)['customer-groups']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAdminCustomerGroupsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.admin)['customer-groups']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminCustomerGroupsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdminCustomerGroupsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.admin['customer-groups'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAdminCustomerGroupsMutationKey() {
  return ['admin', '/admin/customer-groups', 'POST'] as const
}

export function getPostAdminCustomerGroupsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.admin)['customer-groups']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.admin)['customer-groups']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminCustomerGroupsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.admin)['customer-groups']['$post']>) {
      return parseResponse(client.admin['customer-groups'].$post(args, options))
    },
  })
}

export function usePostAdminCustomerGroups<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin)['customer-groups']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.admin)['customer-groups']['$post']>,
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
  const mutationDefaults = getPostAdminCustomerGroupsMutationOptions<TError, TOnMutateResult>(
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

export function getAdminCustomerGroupsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.admin)['customer-groups'][':id']['$get']>>,
) {
  return ['admin', '/admin/customer-groups/:id', toValue(args)] as const
}

export function getAdminCustomerGroupsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.admin)['customer-groups'][':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdminCustomerGroupsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.admin['customer-groups'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdminCustomerGroupsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.admin)['customer-groups'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.admin)['customer-groups'][':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin)['customer-groups'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin)['customer-groups'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAdminCustomerGroupsIdQueryKey>
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
          Awaited<ReturnType<(typeof client.admin)['customer-groups'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminCustomerGroupsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdminCustomerGroupsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.admin['customer-groups'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAdminCustomerGroupsIdMutationKey() {
  return ['admin', '/admin/customer-groups/:id', 'POST'] as const
}

export function getPostAdminCustomerGroupsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin)['customer-groups'][':id']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.admin)['customer-groups'][':id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminCustomerGroupsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.admin)['customer-groups'][':id']['$post']>,
    ) {
      return parseResponse(client.admin['customer-groups'][':id'].$post(args, options))
    },
  })
}

export function usePostAdminCustomerGroupsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin)['customer-groups'][':id']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.admin)['customer-groups'][':id']['$post']>,
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
  const mutationDefaults = getPostAdminCustomerGroupsIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteAdminCustomerGroupsIdMutationKey() {
  return ['admin', '/admin/customer-groups/:id', 'DELETE'] as const
}

export function getDeleteAdminCustomerGroupsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin)['customer-groups'][':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.admin)['customer-groups'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAdminCustomerGroupsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.admin)['customer-groups'][':id']['$delete']>,
    ) {
      return parseResponse(client.admin['customer-groups'][':id'].$delete(args, options))
    },
  })
}

export function useDeleteAdminCustomerGroupsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin)['customer-groups'][':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.admin)['customer-groups'][':id']['$delete']>,
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
  const mutationDefaults = getDeleteAdminCustomerGroupsIdMutationOptions<TError, TOnMutateResult>(
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

export function getPostAdminCustomerGroupsIdCustomersMutationKey() {
  return ['admin', '/admin/customer-groups/:id/customers', 'POST'] as const
}

export function getPostAdminCustomerGroupsIdCustomersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin)['customer-groups'][':id']['customers']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.admin)['customer-groups'][':id']['customers']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminCustomerGroupsIdCustomersMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.admin)['customer-groups'][':id']['customers']['$post']>,
    ) {
      return parseResponse(client.admin['customer-groups'][':id'].customers.$post(args, options))
    },
  })
}

export function usePostAdminCustomerGroupsIdCustomers<
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
                  ReturnType<(typeof client.admin)['customer-groups'][':id']['customers']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.admin)['customer-groups'][':id']['customers']['$post']>,
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
  const mutationDefaults = getPostAdminCustomerGroupsIdCustomersMutationOptions<
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

export function getAdminCustomersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.admin.customers.$get>>,
) {
  return ['admin', '/admin/customers', toValue(args)] as const
}

export function getAdminCustomersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.admin.customers.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdminCustomersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.admin.customers.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdminCustomers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.customers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.admin.customers.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.admin.customers.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.admin.customers.$get>>>
            >
          >,
          ReturnType<typeof getAdminCustomersQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.customers.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAdminCustomersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdminCustomersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.admin.customers.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAdminCustomersMutationKey() {
  return ['admin', '/admin/customers', 'POST'] as const
}

export function getPostAdminCustomersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.customers.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.admin.customers.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminCustomersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.admin.customers.$post>) {
      return parseResponse(client.admin.customers.$post(args, options))
    },
  })
}

export function usePostAdminCustomers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.admin.customers.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.admin.customers.$post>,
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
  const mutationDefaults = getPostAdminCustomersMutationOptions<TError, TOnMutateResult>(
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

export function getPostAdminCustomersExportMutationKey() {
  return ['admin', '/admin/customers/export', 'POST'] as const
}

export function getPostAdminCustomersExportMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.admin.customers.export.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.admin.customers.export.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminCustomersExportMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.admin.customers.export.$post>) {
      return parseResponse(client.admin.customers.export.$post(args, options))
    },
  })
}

export function usePostAdminCustomersExport<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.admin.customers.export.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.admin.customers.export.$post>,
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
  const mutationDefaults = getPostAdminCustomersExportMutationOptions<TError, TOnMutateResult>(
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

export function getAdminCustomersIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.admin.customers)[':id']['$get']>>,
) {
  return ['admin', '/admin/customers/:id', toValue(args)] as const
}

export function getAdminCustomersIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.admin.customers)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdminCustomersIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.admin.customers[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdminCustomersId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.admin.customers)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.admin.customers)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin.customers)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin.customers)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAdminCustomersIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.admin.customers)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminCustomersIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdminCustomersIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.admin.customers[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAdminCustomersIdMutationKey() {
  return ['admin', '/admin/customers/:id', 'POST'] as const
}

export function getPostAdminCustomersIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.admin.customers)[':id']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.admin.customers)[':id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminCustomersIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.admin.customers)[':id']['$post']>) {
      return parseResponse(client.admin.customers[':id'].$post(args, options))
    },
  })
}

export function usePostAdminCustomersId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin.customers)[':id']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.admin.customers)[':id']['$post']>,
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
  const mutationDefaults = getPostAdminCustomersIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteAdminCustomersIdMutationKey() {
  return ['admin', '/admin/customers/:id', 'DELETE'] as const
}

export function getDeleteAdminCustomersIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.admin.customers)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.admin.customers)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAdminCustomersIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.admin.customers)[':id']['$delete']>) {
      return parseResponse(client.admin.customers[':id'].$delete(args, options))
    },
  })
}

export function useDeleteAdminCustomersId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin.customers)[':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.admin.customers)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteAdminCustomersIdMutationOptions<TError, TOnMutateResult>(
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

export function getAdminCustomersIdAddressesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.admin.customers)[':id']['addresses']['$get']>
  >,
) {
  return ['admin', '/admin/customers/:id/addresses', toValue(args)] as const
}

export function getAdminCustomersIdAddressesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.admin.customers)[':id']['addresses']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdminCustomersIdAddressesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.admin.customers[':id'].addresses.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdminCustomersIdAddresses<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.admin.customers)[':id']['addresses']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.admin.customers)[':id']['addresses']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin.customers)[':id']['addresses']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin.customers)[':id']['addresses']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAdminCustomersIdAddressesQueryKey>
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
          Awaited<ReturnType<(typeof client.admin.customers)[':id']['addresses']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminCustomersIdAddressesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdminCustomersIdAddressesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.admin.customers[':id'].addresses.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAdminCustomersIdAddressesMutationKey() {
  return ['admin', '/admin/customers/:id/addresses', 'POST'] as const
}

export function getPostAdminCustomersIdAddressesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin.customers)[':id']['addresses']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.admin.customers)[':id']['addresses']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminCustomersIdAddressesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.admin.customers)[':id']['addresses']['$post']>,
    ) {
      return parseResponse(client.admin.customers[':id'].addresses.$post(args, options))
    },
  })
}

export function usePostAdminCustomersIdAddresses<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin.customers)[':id']['addresses']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.admin.customers)[':id']['addresses']['$post']>,
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
  const mutationDefaults = getPostAdminCustomersIdAddressesMutationOptions<TError, TOnMutateResult>(
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

export function getAdminCustomersIdAddressesAddressIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.admin.customers)[':id']['addresses'][':address_id']['$get']>
  >,
) {
  return ['admin', '/admin/customers/:id/addresses/:address_id', toValue(args)] as const
}

export function getAdminCustomersIdAddressesAddressIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.admin.customers)[':id']['addresses'][':address_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdminCustomersIdAddressesAddressIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.admin.customers[':id'].addresses[':address_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdminCustomersIdAddressesAddressId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.admin.customers)[':id']['addresses'][':address_id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.admin.customers)[':id']['addresses'][':address_id']['$get']>
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
                    (typeof client.admin.customers)[':id']['addresses'][':address_id']['$get']
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
                    (typeof client.admin.customers)[':id']['addresses'][':address_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAdminCustomersIdAddressesAddressIdQueryKey>
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
            ReturnType<(typeof client.admin.customers)[':id']['addresses'][':address_id']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminCustomersIdAddressesAddressIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdminCustomersIdAddressesAddressIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.admin.customers[':id'].addresses[':address_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAdminCustomersIdAddressesAddressIdMutationKey() {
  return ['admin', '/admin/customers/:id/addresses/:address_id', 'POST'] as const
}

export function getPostAdminCustomersIdAddressesAddressIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.admin.customers)[':id']['addresses'][':address_id']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.admin.customers)[':id']['addresses'][':address_id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminCustomersIdAddressesAddressIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.admin.customers)[':id']['addresses'][':address_id']['$post']
      >,
    ) {
      return parseResponse(
        client.admin.customers[':id'].addresses[':address_id'].$post(args, options),
      )
    },
  })
}

export function usePostAdminCustomersIdAddressesAddressId<
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
                    (typeof client.admin.customers)[':id']['addresses'][':address_id']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.admin.customers)[':id']['addresses'][':address_id']['$post']
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
  const mutationDefaults = getPostAdminCustomersIdAddressesAddressIdMutationOptions<
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

export function getDeleteAdminCustomersIdAddressesAddressIdMutationKey() {
  return ['admin', '/admin/customers/:id/addresses/:address_id', 'DELETE'] as const
}

export function getDeleteAdminCustomersIdAddressesAddressIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.admin.customers)[':id']['addresses'][':address_id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.admin.customers)[':id']['addresses'][':address_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAdminCustomersIdAddressesAddressIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.admin.customers)[':id']['addresses'][':address_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.admin.customers[':id'].addresses[':address_id'].$delete(args, options),
      )
    },
  })
}

export function useDeleteAdminCustomersIdAddressesAddressId<
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
                    (typeof client.admin.customers)[':id']['addresses'][':address_id']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.admin.customers)[':id']['addresses'][':address_id']['$delete']
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
  const mutationDefaults = getDeleteAdminCustomersIdAddressesAddressIdMutationOptions<
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

export function getPostAdminCustomersIdCustomerGroupsMutationKey() {
  return ['admin', '/admin/customers/:id/customer-groups', 'POST'] as const
}

export function getPostAdminCustomersIdCustomerGroupsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin.customers)[':id']['customer-groups']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.admin.customers)[':id']['customer-groups']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminCustomersIdCustomerGroupsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.admin.customers)[':id']['customer-groups']['$post']>,
    ) {
      return parseResponse(client.admin.customers[':id']['customer-groups'].$post(args, options))
    },
  })
}

export function usePostAdminCustomersIdCustomerGroups<
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
                  ReturnType<(typeof client.admin.customers)[':id']['customer-groups']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.admin.customers)[':id']['customer-groups']['$post']>,
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
  const mutationDefaults = getPostAdminCustomersIdCustomerGroupsMutationOptions<
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

export function getAdminDraftOrdersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.admin)['draft-orders']['$get']>>,
) {
  return ['admin', '/admin/draft-orders', toValue(args)] as const
}

export function getAdminDraftOrdersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.admin)['draft-orders']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdminDraftOrdersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.admin['draft-orders'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdminDraftOrders<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.admin)['draft-orders']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.admin)['draft-orders']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin)['draft-orders']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin)['draft-orders']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAdminDraftOrdersQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.admin)['draft-orders']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminDraftOrdersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdminDraftOrdersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.admin['draft-orders'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAdminDraftOrdersMutationKey() {
  return ['admin', '/admin/draft-orders', 'POST'] as const
}

export function getPostAdminDraftOrdersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.admin)['draft-orders']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.admin)['draft-orders']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminDraftOrdersMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.admin)['draft-orders']['$post']>) {
      return parseResponse(client.admin['draft-orders'].$post(args, options))
    },
  })
}

export function usePostAdminDraftOrders<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin)['draft-orders']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.admin)['draft-orders']['$post']>,
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
  const mutationDefaults = getPostAdminDraftOrdersMutationOptions<TError, TOnMutateResult>(
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

export function getAdminDraftOrdersIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.admin)['draft-orders'][':id']['$get']>>,
) {
  return ['admin', '/admin/draft-orders/:id', toValue(args)] as const
}

export function getAdminDraftOrdersIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.admin)['draft-orders'][':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdminDraftOrdersIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.admin['draft-orders'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdminDraftOrdersId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.admin)['draft-orders'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.admin)['draft-orders'][':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin)['draft-orders'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin)['draft-orders'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAdminDraftOrdersIdQueryKey>
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
          Awaited<ReturnType<(typeof client.admin)['draft-orders'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminDraftOrdersIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdminDraftOrdersIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.admin['draft-orders'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAdminDraftOrdersIdMutationKey() {
  return ['admin', '/admin/draft-orders/:id', 'POST'] as const
}

export function getPostAdminDraftOrdersIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin)['draft-orders'][':id']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.admin)['draft-orders'][':id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminDraftOrdersIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.admin)['draft-orders'][':id']['$post']>,
    ) {
      return parseResponse(client.admin['draft-orders'][':id'].$post(args, options))
    },
  })
}

export function usePostAdminDraftOrdersId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin)['draft-orders'][':id']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.admin)['draft-orders'][':id']['$post']>,
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
  const mutationDefaults = getPostAdminDraftOrdersIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteAdminDraftOrdersIdMutationKey() {
  return ['admin', '/admin/draft-orders/:id', 'DELETE'] as const
}

export function getDeleteAdminDraftOrdersIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin)['draft-orders'][':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.admin)['draft-orders'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAdminDraftOrdersIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.admin)['draft-orders'][':id']['$delete']>,
    ) {
      return parseResponse(client.admin['draft-orders'][':id'].$delete(args, options))
    },
  })
}

export function useDeleteAdminDraftOrdersId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin)['draft-orders'][':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.admin)['draft-orders'][':id']['$delete']>,
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
  const mutationDefaults = getDeleteAdminDraftOrdersIdMutationOptions<TError, TOnMutateResult>(
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

export function getPostAdminDraftOrdersIdConvertToOrderMutationKey() {
  return ['admin', '/admin/draft-orders/:id/convert-to-order', 'POST'] as const
}

export function getPostAdminDraftOrdersIdConvertToOrderMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.admin)['draft-orders'][':id']['convert-to-order']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.admin)['draft-orders'][':id']['convert-to-order']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminDraftOrdersIdConvertToOrderMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.admin)['draft-orders'][':id']['convert-to-order']['$post']
      >,
    ) {
      return parseResponse(
        client.admin['draft-orders'][':id']['convert-to-order'].$post(args, options),
      )
    },
  })
}

export function usePostAdminDraftOrdersIdConvertToOrder<
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
                    (typeof client.admin)['draft-orders'][':id']['convert-to-order']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.admin)['draft-orders'][':id']['convert-to-order']['$post']
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
  const mutationDefaults = getPostAdminDraftOrdersIdConvertToOrderMutationOptions<
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

export function getPostAdminDraftOrdersIdEditMutationKey() {
  return ['admin', '/admin/draft-orders/:id/edit', 'POST'] as const
}

export function getPostAdminDraftOrdersIdEditMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin)['draft-orders'][':id']['edit']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.admin)['draft-orders'][':id']['edit']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminDraftOrdersIdEditMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.admin)['draft-orders'][':id']['edit']['$post']>,
    ) {
      return parseResponse(client.admin['draft-orders'][':id'].edit.$post(args, options))
    },
  })
}

export function usePostAdminDraftOrdersIdEdit<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin)['draft-orders'][':id']['edit']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.admin)['draft-orders'][':id']['edit']['$post']>,
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
  const mutationDefaults = getPostAdminDraftOrdersIdEditMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteAdminDraftOrdersIdEditMutationKey() {
  return ['admin', '/admin/draft-orders/:id/edit', 'DELETE'] as const
}

export function getDeleteAdminDraftOrdersIdEditMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin)['draft-orders'][':id']['edit']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.admin)['draft-orders'][':id']['edit']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAdminDraftOrdersIdEditMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.admin)['draft-orders'][':id']['edit']['$delete']>,
    ) {
      return parseResponse(client.admin['draft-orders'][':id'].edit.$delete(args, options))
    },
  })
}

export function useDeleteAdminDraftOrdersIdEdit<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin)['draft-orders'][':id']['edit']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.admin)['draft-orders'][':id']['edit']['$delete']>,
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
  const mutationDefaults = getDeleteAdminDraftOrdersIdEditMutationOptions<TError, TOnMutateResult>(
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

export function getPostAdminDraftOrdersIdEditConfirmMutationKey() {
  return ['admin', '/admin/draft-orders/:id/edit/confirm', 'POST'] as const
}

export function getPostAdminDraftOrdersIdEditConfirmMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.admin)['draft-orders'][':id']['edit']['confirm']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.admin)['draft-orders'][':id']['edit']['confirm']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminDraftOrdersIdEditConfirmMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.admin)['draft-orders'][':id']['edit']['confirm']['$post']
      >,
    ) {
      return parseResponse(client.admin['draft-orders'][':id'].edit.confirm.$post(args, options))
    },
  })
}

export function usePostAdminDraftOrdersIdEditConfirm<
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
                    (typeof client.admin)['draft-orders'][':id']['edit']['confirm']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.admin)['draft-orders'][':id']['edit']['confirm']['$post']
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
  const mutationDefaults = getPostAdminDraftOrdersIdEditConfirmMutationOptions<
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

export function getPostAdminDraftOrdersIdEditItemsMutationKey() {
  return ['admin', '/admin/draft-orders/:id/edit/items', 'POST'] as const
}

export function getPostAdminDraftOrdersIdEditItemsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.admin)['draft-orders'][':id']['edit']['items']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.admin)['draft-orders'][':id']['edit']['items']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminDraftOrdersIdEditItemsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.admin)['draft-orders'][':id']['edit']['items']['$post']
      >,
    ) {
      return parseResponse(client.admin['draft-orders'][':id'].edit.items.$post(args, options))
    },
  })
}

export function usePostAdminDraftOrdersIdEditItems<
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
                  ReturnType<(typeof client.admin)['draft-orders'][':id']['edit']['items']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.admin)['draft-orders'][':id']['edit']['items']['$post']>,
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
  const mutationDefaults = getPostAdminDraftOrdersIdEditItemsMutationOptions<
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

export function getPostAdminDraftOrdersIdEditItemsItemItemIdMutationKey() {
  return ['admin', '/admin/draft-orders/:id/edit/items/item/:item_id', 'POST'] as const
}

export function getPostAdminDraftOrdersIdEditItemsItemItemIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.admin)['draft-orders'][':id']['edit']['items']['item'][':item_id']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.admin)['draft-orders'][':id']['edit']['items']['item'][':item_id']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAdminDraftOrdersIdEditItemsItemItemIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.admin)['draft-orders'][':id']['edit']['items']['item'][':item_id']['$post']
      >,
    ) {
      return parseResponse(
        client.admin['draft-orders'][':id'].edit.items.item[':item_id'].$post(args, options),
      )
    },
  })
}

export function usePostAdminDraftOrdersIdEditItemsItemItemId<
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
                    (typeof client.admin)['draft-orders'][':id']['edit']['items']['item'][':item_id']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.admin)['draft-orders'][':id']['edit']['items']['item'][':item_id']['$post']
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
  const mutationDefaults = getPostAdminDraftOrdersIdEditItemsItemItemIdMutationOptions<
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

export function getPostAdminDraftOrdersIdEditItemsActionIdMutationKey() {
  return ['admin', '/admin/draft-orders/:id/edit/items/:action_id', 'POST'] as const
}

export function getPostAdminDraftOrdersIdEditItemsActionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.admin)['draft-orders'][':id']['edit']['items'][':action_id']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.admin)['draft-orders'][':id']['edit']['items'][':action_id']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAdminDraftOrdersIdEditItemsActionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.admin)['draft-orders'][':id']['edit']['items'][':action_id']['$post']
      >,
    ) {
      return parseResponse(
        client.admin['draft-orders'][':id'].edit.items[':action_id'].$post(args, options),
      )
    },
  })
}

export function usePostAdminDraftOrdersIdEditItemsActionId<
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
                    (typeof client.admin)['draft-orders'][':id']['edit']['items'][':action_id']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.admin)['draft-orders'][':id']['edit']['items'][':action_id']['$post']
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
  const mutationDefaults = getPostAdminDraftOrdersIdEditItemsActionIdMutationOptions<
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

export function getDeleteAdminDraftOrdersIdEditItemsActionIdMutationKey() {
  return ['admin', '/admin/draft-orders/:id/edit/items/:action_id', 'DELETE'] as const
}

export function getDeleteAdminDraftOrdersIdEditItemsActionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.admin)['draft-orders'][':id']['edit']['items'][':action_id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.admin)['draft-orders'][':id']['edit']['items'][':action_id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteAdminDraftOrdersIdEditItemsActionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.admin)['draft-orders'][':id']['edit']['items'][':action_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.admin['draft-orders'][':id'].edit.items[':action_id'].$delete(args, options),
      )
    },
  })
}

export function useDeleteAdminDraftOrdersIdEditItemsActionId<
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
                    (typeof client.admin)['draft-orders'][':id']['edit']['items'][':action_id']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.admin)['draft-orders'][':id']['edit']['items'][':action_id']['$delete']
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
  const mutationDefaults = getDeleteAdminDraftOrdersIdEditItemsActionIdMutationOptions<
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

export function getPostAdminDraftOrdersIdEditPromotionsMutationKey() {
  return ['admin', '/admin/draft-orders/:id/edit/promotions', 'POST'] as const
}

export function getPostAdminDraftOrdersIdEditPromotionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.admin)['draft-orders'][':id']['edit']['promotions']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.admin)['draft-orders'][':id']['edit']['promotions']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminDraftOrdersIdEditPromotionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.admin)['draft-orders'][':id']['edit']['promotions']['$post']
      >,
    ) {
      return parseResponse(client.admin['draft-orders'][':id'].edit.promotions.$post(args, options))
    },
  })
}

export function usePostAdminDraftOrdersIdEditPromotions<
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
                    (typeof client.admin)['draft-orders'][':id']['edit']['promotions']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.admin)['draft-orders'][':id']['edit']['promotions']['$post']
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
  const mutationDefaults = getPostAdminDraftOrdersIdEditPromotionsMutationOptions<
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

export function getDeleteAdminDraftOrdersIdEditPromotionsMutationKey() {
  return ['admin', '/admin/draft-orders/:id/edit/promotions', 'DELETE'] as const
}

export function getDeleteAdminDraftOrdersIdEditPromotionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.admin)['draft-orders'][':id']['edit']['promotions']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.admin)['draft-orders'][':id']['edit']['promotions']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAdminDraftOrdersIdEditPromotionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.admin)['draft-orders'][':id']['edit']['promotions']['$delete']
      >,
    ) {
      return parseResponse(
        client.admin['draft-orders'][':id'].edit.promotions.$delete(args, options),
      )
    },
  })
}

export function useDeleteAdminDraftOrdersIdEditPromotions<
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
                    (typeof client.admin)['draft-orders'][':id']['edit']['promotions']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.admin)['draft-orders'][':id']['edit']['promotions']['$delete']
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
  const mutationDefaults = getDeleteAdminDraftOrdersIdEditPromotionsMutationOptions<
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

export function getPostAdminDraftOrdersIdEditRequestMutationKey() {
  return ['admin', '/admin/draft-orders/:id/edit/request', 'POST'] as const
}

export function getPostAdminDraftOrdersIdEditRequestMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.admin)['draft-orders'][':id']['edit']['request']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.admin)['draft-orders'][':id']['edit']['request']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminDraftOrdersIdEditRequestMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.admin)['draft-orders'][':id']['edit']['request']['$post']
      >,
    ) {
      return parseResponse(client.admin['draft-orders'][':id'].edit.request.$post(args, options))
    },
  })
}

export function usePostAdminDraftOrdersIdEditRequest<
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
                    (typeof client.admin)['draft-orders'][':id']['edit']['request']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.admin)['draft-orders'][':id']['edit']['request']['$post']
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
  const mutationDefaults = getPostAdminDraftOrdersIdEditRequestMutationOptions<
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

export function getPostAdminDraftOrdersIdEditShippingMethodsMutationKey() {
  return ['admin', '/admin/draft-orders/:id/edit/shipping-methods', 'POST'] as const
}

export function getPostAdminDraftOrdersIdEditShippingMethodsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.admin)['draft-orders'][':id']['edit']['shipping-methods']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.admin)['draft-orders'][':id']['edit']['shipping-methods']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAdminDraftOrdersIdEditShippingMethodsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.admin)['draft-orders'][':id']['edit']['shipping-methods']['$post']
      >,
    ) {
      return parseResponse(
        client.admin['draft-orders'][':id'].edit['shipping-methods'].$post(args, options),
      )
    },
  })
}

export function usePostAdminDraftOrdersIdEditShippingMethods<
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
                    (typeof client.admin)['draft-orders'][':id']['edit']['shipping-methods']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.admin)['draft-orders'][':id']['edit']['shipping-methods']['$post']
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
  const mutationDefaults = getPostAdminDraftOrdersIdEditShippingMethodsMutationOptions<
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

export function getPostAdminDraftOrdersIdEditShippingMethodsMethodMethodIdMutationKey() {
  return [
    'admin',
    '/admin/draft-orders/:id/edit/shipping-methods/method/:method_id',
    'POST',
  ] as const
}

export function getPostAdminDraftOrdersIdEditShippingMethodsMethodMethodIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.admin)['draft-orders'][':id']['edit']['shipping-methods']['method'][':method_id']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.admin)['draft-orders'][':id']['edit']['shipping-methods']['method'][':method_id']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAdminDraftOrdersIdEditShippingMethodsMethodMethodIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.admin)['draft-orders'][':id']['edit']['shipping-methods']['method'][':method_id']['$post']
      >,
    ) {
      return parseResponse(
        client.admin['draft-orders'][':id'].edit['shipping-methods'].method[':method_id'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostAdminDraftOrdersIdEditShippingMethodsMethodMethodId<
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
                    (typeof client.admin)['draft-orders'][':id']['edit']['shipping-methods']['method'][':method_id']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.admin)['draft-orders'][':id']['edit']['shipping-methods']['method'][':method_id']['$post']
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
    getPostAdminDraftOrdersIdEditShippingMethodsMethodMethodIdMutationOptions<
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

export function getDeleteAdminDraftOrdersIdEditShippingMethodsMethodMethodIdMutationKey() {
  return [
    'admin',
    '/admin/draft-orders/:id/edit/shipping-methods/method/:method_id',
    'DELETE',
  ] as const
}

export function getDeleteAdminDraftOrdersIdEditShippingMethodsMethodMethodIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.admin)['draft-orders'][':id']['edit']['shipping-methods']['method'][':method_id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.admin)['draft-orders'][':id']['edit']['shipping-methods']['method'][':method_id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteAdminDraftOrdersIdEditShippingMethodsMethodMethodIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.admin)['draft-orders'][':id']['edit']['shipping-methods']['method'][':method_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.admin['draft-orders'][':id'].edit['shipping-methods'].method[':method_id'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteAdminDraftOrdersIdEditShippingMethodsMethodMethodId<
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
                    (typeof client.admin)['draft-orders'][':id']['edit']['shipping-methods']['method'][':method_id']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.admin)['draft-orders'][':id']['edit']['shipping-methods']['method'][':method_id']['$delete']
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
    getDeleteAdminDraftOrdersIdEditShippingMethodsMethodMethodIdMutationOptions<
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

export function getPostAdminDraftOrdersIdEditShippingMethodsActionIdMutationKey() {
  return ['admin', '/admin/draft-orders/:id/edit/shipping-methods/:action_id', 'POST'] as const
}

export function getPostAdminDraftOrdersIdEditShippingMethodsActionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.admin)['draft-orders'][':id']['edit']['shipping-methods'][':action_id']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.admin)['draft-orders'][':id']['edit']['shipping-methods'][':action_id']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAdminDraftOrdersIdEditShippingMethodsActionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.admin)['draft-orders'][':id']['edit']['shipping-methods'][':action_id']['$post']
      >,
    ) {
      return parseResponse(
        client.admin['draft-orders'][':id'].edit['shipping-methods'][':action_id'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostAdminDraftOrdersIdEditShippingMethodsActionId<
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
                    (typeof client.admin)['draft-orders'][':id']['edit']['shipping-methods'][':action_id']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.admin)['draft-orders'][':id']['edit']['shipping-methods'][':action_id']['$post']
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
  const mutationDefaults = getPostAdminDraftOrdersIdEditShippingMethodsActionIdMutationOptions<
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

export function getDeleteAdminDraftOrdersIdEditShippingMethodsActionIdMutationKey() {
  return ['admin', '/admin/draft-orders/:id/edit/shipping-methods/:action_id', 'DELETE'] as const
}

export function getDeleteAdminDraftOrdersIdEditShippingMethodsActionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.admin)['draft-orders'][':id']['edit']['shipping-methods'][':action_id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.admin)['draft-orders'][':id']['edit']['shipping-methods'][':action_id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteAdminDraftOrdersIdEditShippingMethodsActionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.admin)['draft-orders'][':id']['edit']['shipping-methods'][':action_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.admin['draft-orders'][':id'].edit['shipping-methods'][':action_id'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteAdminDraftOrdersIdEditShippingMethodsActionId<
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
                    (typeof client.admin)['draft-orders'][':id']['edit']['shipping-methods'][':action_id']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.admin)['draft-orders'][':id']['edit']['shipping-methods'][':action_id']['$delete']
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
  const mutationDefaults = getDeleteAdminDraftOrdersIdEditShippingMethodsActionIdMutationOptions<
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

export function getAdminExchangesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.admin.exchanges.$get>>,
) {
  return ['admin', '/admin/exchanges', toValue(args)] as const
}

export function getAdminExchangesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.admin.exchanges.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdminExchangesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.admin.exchanges.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdminExchanges<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.exchanges.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.admin.exchanges.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.admin.exchanges.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.admin.exchanges.$get>>>
            >
          >,
          ReturnType<typeof getAdminExchangesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.exchanges.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAdminExchangesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdminExchangesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.admin.exchanges.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAdminExchangesMutationKey() {
  return ['admin', '/admin/exchanges', 'POST'] as const
}

export function getPostAdminExchangesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.exchanges.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.admin.exchanges.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminExchangesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.admin.exchanges.$post>) {
      return parseResponse(client.admin.exchanges.$post(args, options))
    },
  })
}

export function usePostAdminExchanges<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.admin.exchanges.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.admin.exchanges.$post>,
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
  const mutationDefaults = getPostAdminExchangesMutationOptions<TError, TOnMutateResult>(
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

export function getAdminExchangesIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.admin.exchanges)[':id']['$get']>>,
) {
  return ['admin', '/admin/exchanges/:id', toValue(args)] as const
}

export function getAdminExchangesIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.admin.exchanges)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdminExchangesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.admin.exchanges[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdminExchangesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.admin.exchanges)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.admin.exchanges)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin.exchanges)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin.exchanges)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAdminExchangesIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.admin.exchanges)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminExchangesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdminExchangesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.admin.exchanges[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAdminExchangesIdCancelMutationKey() {
  return ['admin', '/admin/exchanges/:id/cancel', 'POST'] as const
}

export function getPostAdminExchangesIdCancelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin.exchanges)[':id']['cancel']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.admin.exchanges)[':id']['cancel']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminExchangesIdCancelMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.admin.exchanges)[':id']['cancel']['$post']>,
    ) {
      return parseResponse(client.admin.exchanges[':id'].cancel.$post(args, options))
    },
  })
}

export function usePostAdminExchangesIdCancel<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin.exchanges)[':id']['cancel']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.admin.exchanges)[':id']['cancel']['$post']>,
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
  const mutationDefaults = getPostAdminExchangesIdCancelMutationOptions<TError, TOnMutateResult>(
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

export function getPostAdminExchangesIdInboundItemsMutationKey() {
  return ['admin', '/admin/exchanges/:id/inbound/items', 'POST'] as const
}

export function getPostAdminExchangesIdInboundItemsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin.exchanges)[':id']['inbound']['items']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.admin.exchanges)[':id']['inbound']['items']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminExchangesIdInboundItemsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.admin.exchanges)[':id']['inbound']['items']['$post']>,
    ) {
      return parseResponse(client.admin.exchanges[':id'].inbound.items.$post(args, options))
    },
  })
}

export function usePostAdminExchangesIdInboundItems<
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
                  ReturnType<(typeof client.admin.exchanges)[':id']['inbound']['items']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.admin.exchanges)[':id']['inbound']['items']['$post']>,
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
  const mutationDefaults = getPostAdminExchangesIdInboundItemsMutationOptions<
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

export function getPostAdminExchangesIdInboundItemsActionIdMutationKey() {
  return ['admin', '/admin/exchanges/:id/inbound/items/:action_id', 'POST'] as const
}

export function getPostAdminExchangesIdInboundItemsActionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.admin.exchanges)[':id']['inbound']['items'][':action_id']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.admin.exchanges)[':id']['inbound']['items'][':action_id']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAdminExchangesIdInboundItemsActionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.admin.exchanges)[':id']['inbound']['items'][':action_id']['$post']
      >,
    ) {
      return parseResponse(
        client.admin.exchanges[':id'].inbound.items[':action_id'].$post(args, options),
      )
    },
  })
}

export function usePostAdminExchangesIdInboundItemsActionId<
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
                    (typeof client.admin.exchanges)[':id']['inbound']['items'][':action_id']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.admin.exchanges)[':id']['inbound']['items'][':action_id']['$post']
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
  const mutationDefaults = getPostAdminExchangesIdInboundItemsActionIdMutationOptions<
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

export function getDeleteAdminExchangesIdInboundItemsActionIdMutationKey() {
  return ['admin', '/admin/exchanges/:id/inbound/items/:action_id', 'DELETE'] as const
}

export function getDeleteAdminExchangesIdInboundItemsActionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.admin.exchanges)[':id']['inbound']['items'][':action_id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.admin.exchanges)[':id']['inbound']['items'][':action_id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteAdminExchangesIdInboundItemsActionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.admin.exchanges)[':id']['inbound']['items'][':action_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.admin.exchanges[':id'].inbound.items[':action_id'].$delete(args, options),
      )
    },
  })
}

export function useDeleteAdminExchangesIdInboundItemsActionId<
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
                    (typeof client.admin.exchanges)[':id']['inbound']['items'][':action_id']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.admin.exchanges)[':id']['inbound']['items'][':action_id']['$delete']
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
  const mutationDefaults = getDeleteAdminExchangesIdInboundItemsActionIdMutationOptions<
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

export function getPostAdminExchangesIdInboundShippingMethodMutationKey() {
  return ['admin', '/admin/exchanges/:id/inbound/shipping-method', 'POST'] as const
}

export function getPostAdminExchangesIdInboundShippingMethodMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.admin.exchanges)[':id']['inbound']['shipping-method']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.admin.exchanges)[':id']['inbound']['shipping-method']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminExchangesIdInboundShippingMethodMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.admin.exchanges)[':id']['inbound']['shipping-method']['$post']
      >,
    ) {
      return parseResponse(
        client.admin.exchanges[':id'].inbound['shipping-method'].$post(args, options),
      )
    },
  })
}

export function usePostAdminExchangesIdInboundShippingMethod<
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
                    (typeof client.admin.exchanges)[':id']['inbound']['shipping-method']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.admin.exchanges)[':id']['inbound']['shipping-method']['$post']
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
  const mutationDefaults = getPostAdminExchangesIdInboundShippingMethodMutationOptions<
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

export function getPostAdminExchangesIdInboundShippingMethodActionIdMutationKey() {
  return ['admin', '/admin/exchanges/:id/inbound/shipping-method/:action_id', 'POST'] as const
}

export function getPostAdminExchangesIdInboundShippingMethodActionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.admin.exchanges)[':id']['inbound']['shipping-method'][':action_id']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.admin.exchanges)[':id']['inbound']['shipping-method'][':action_id']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAdminExchangesIdInboundShippingMethodActionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.admin.exchanges)[':id']['inbound']['shipping-method'][':action_id']['$post']
      >,
    ) {
      return parseResponse(
        client.admin.exchanges[':id'].inbound['shipping-method'][':action_id'].$post(args, options),
      )
    },
  })
}

export function usePostAdminExchangesIdInboundShippingMethodActionId<
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
                    (typeof client.admin.exchanges)[':id']['inbound']['shipping-method'][':action_id']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.admin.exchanges)[':id']['inbound']['shipping-method'][':action_id']['$post']
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
  const mutationDefaults = getPostAdminExchangesIdInboundShippingMethodActionIdMutationOptions<
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

export function getDeleteAdminExchangesIdInboundShippingMethodActionIdMutationKey() {
  return ['admin', '/admin/exchanges/:id/inbound/shipping-method/:action_id', 'DELETE'] as const
}

export function getDeleteAdminExchangesIdInboundShippingMethodActionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.admin.exchanges)[':id']['inbound']['shipping-method'][':action_id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.admin.exchanges)[':id']['inbound']['shipping-method'][':action_id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteAdminExchangesIdInboundShippingMethodActionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.admin.exchanges)[':id']['inbound']['shipping-method'][':action_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.admin.exchanges[':id'].inbound['shipping-method'][':action_id'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteAdminExchangesIdInboundShippingMethodActionId<
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
                    (typeof client.admin.exchanges)[':id']['inbound']['shipping-method'][':action_id']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.admin.exchanges)[':id']['inbound']['shipping-method'][':action_id']['$delete']
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
  const mutationDefaults = getDeleteAdminExchangesIdInboundShippingMethodActionIdMutationOptions<
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

export function getPostAdminExchangesIdOutboundItemsMutationKey() {
  return ['admin', '/admin/exchanges/:id/outbound/items', 'POST'] as const
}

export function getPostAdminExchangesIdOutboundItemsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin.exchanges)[':id']['outbound']['items']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.admin.exchanges)[':id']['outbound']['items']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminExchangesIdOutboundItemsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.admin.exchanges)[':id']['outbound']['items']['$post']>,
    ) {
      return parseResponse(client.admin.exchanges[':id'].outbound.items.$post(args, options))
    },
  })
}

export function usePostAdminExchangesIdOutboundItems<
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
                  ReturnType<(typeof client.admin.exchanges)[':id']['outbound']['items']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.admin.exchanges)[':id']['outbound']['items']['$post']>,
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
  const mutationDefaults = getPostAdminExchangesIdOutboundItemsMutationOptions<
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

export function getPostAdminExchangesIdOutboundItemsActionIdMutationKey() {
  return ['admin', '/admin/exchanges/:id/outbound/items/:action_id', 'POST'] as const
}

export function getPostAdminExchangesIdOutboundItemsActionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.admin.exchanges)[':id']['outbound']['items'][':action_id']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.admin.exchanges)[':id']['outbound']['items'][':action_id']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAdminExchangesIdOutboundItemsActionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.admin.exchanges)[':id']['outbound']['items'][':action_id']['$post']
      >,
    ) {
      return parseResponse(
        client.admin.exchanges[':id'].outbound.items[':action_id'].$post(args, options),
      )
    },
  })
}

export function usePostAdminExchangesIdOutboundItemsActionId<
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
                    (typeof client.admin.exchanges)[':id']['outbound']['items'][':action_id']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.admin.exchanges)[':id']['outbound']['items'][':action_id']['$post']
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
  const mutationDefaults = getPostAdminExchangesIdOutboundItemsActionIdMutationOptions<
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

export function getDeleteAdminExchangesIdOutboundItemsActionIdMutationKey() {
  return ['admin', '/admin/exchanges/:id/outbound/items/:action_id', 'DELETE'] as const
}

export function getDeleteAdminExchangesIdOutboundItemsActionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.admin.exchanges)[':id']['outbound']['items'][':action_id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.admin.exchanges)[':id']['outbound']['items'][':action_id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteAdminExchangesIdOutboundItemsActionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.admin.exchanges)[':id']['outbound']['items'][':action_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.admin.exchanges[':id'].outbound.items[':action_id'].$delete(args, options),
      )
    },
  })
}

export function useDeleteAdminExchangesIdOutboundItemsActionId<
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
                    (typeof client.admin.exchanges)[':id']['outbound']['items'][':action_id']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.admin.exchanges)[':id']['outbound']['items'][':action_id']['$delete']
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
  const mutationDefaults = getDeleteAdminExchangesIdOutboundItemsActionIdMutationOptions<
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

export function getPostAdminExchangesIdOutboundShippingMethodMutationKey() {
  return ['admin', '/admin/exchanges/:id/outbound/shipping-method', 'POST'] as const
}

export function getPostAdminExchangesIdOutboundShippingMethodMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.admin.exchanges)[':id']['outbound']['shipping-method']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.admin.exchanges)[':id']['outbound']['shipping-method']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAdminExchangesIdOutboundShippingMethodMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.admin.exchanges)[':id']['outbound']['shipping-method']['$post']
      >,
    ) {
      return parseResponse(
        client.admin.exchanges[':id'].outbound['shipping-method'].$post(args, options),
      )
    },
  })
}

export function usePostAdminExchangesIdOutboundShippingMethod<
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
                    (typeof client.admin.exchanges)[':id']['outbound']['shipping-method']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.admin.exchanges)[':id']['outbound']['shipping-method']['$post']
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
  const mutationDefaults = getPostAdminExchangesIdOutboundShippingMethodMutationOptions<
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

export function getPostAdminExchangesIdOutboundShippingMethodActionIdMutationKey() {
  return ['admin', '/admin/exchanges/:id/outbound/shipping-method/:action_id', 'POST'] as const
}

export function getPostAdminExchangesIdOutboundShippingMethodActionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.admin.exchanges)[':id']['outbound']['shipping-method'][':action_id']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.admin.exchanges)[':id']['outbound']['shipping-method'][':action_id']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAdminExchangesIdOutboundShippingMethodActionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.admin.exchanges)[':id']['outbound']['shipping-method'][':action_id']['$post']
      >,
    ) {
      return parseResponse(
        client.admin.exchanges[':id'].outbound['shipping-method'][':action_id'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostAdminExchangesIdOutboundShippingMethodActionId<
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
                    (typeof client.admin.exchanges)[':id']['outbound']['shipping-method'][':action_id']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.admin.exchanges)[':id']['outbound']['shipping-method'][':action_id']['$post']
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
  const mutationDefaults = getPostAdminExchangesIdOutboundShippingMethodActionIdMutationOptions<
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

export function getDeleteAdminExchangesIdOutboundShippingMethodActionIdMutationKey() {
  return ['admin', '/admin/exchanges/:id/outbound/shipping-method/:action_id', 'DELETE'] as const
}

export function getDeleteAdminExchangesIdOutboundShippingMethodActionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.admin.exchanges)[':id']['outbound']['shipping-method'][':action_id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.admin.exchanges)[':id']['outbound']['shipping-method'][':action_id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteAdminExchangesIdOutboundShippingMethodActionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.admin.exchanges)[':id']['outbound']['shipping-method'][':action_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.admin.exchanges[':id'].outbound['shipping-method'][':action_id'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteAdminExchangesIdOutboundShippingMethodActionId<
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
                    (typeof client.admin.exchanges)[':id']['outbound']['shipping-method'][':action_id']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.admin.exchanges)[':id']['outbound']['shipping-method'][':action_id']['$delete']
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
  const mutationDefaults = getDeleteAdminExchangesIdOutboundShippingMethodActionIdMutationOptions<
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

export function getPostAdminExchangesIdRequestMutationKey() {
  return ['admin', '/admin/exchanges/:id/request', 'POST'] as const
}

export function getPostAdminExchangesIdRequestMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin.exchanges)[':id']['request']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.admin.exchanges)[':id']['request']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminExchangesIdRequestMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.admin.exchanges)[':id']['request']['$post']>,
    ) {
      return parseResponse(client.admin.exchanges[':id'].request.$post(args, options))
    },
  })
}

export function usePostAdminExchangesIdRequest<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin.exchanges)[':id']['request']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.admin.exchanges)[':id']['request']['$post']>,
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
  const mutationDefaults = getPostAdminExchangesIdRequestMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteAdminExchangesIdRequestMutationKey() {
  return ['admin', '/admin/exchanges/:id/request', 'DELETE'] as const
}

export function getDeleteAdminExchangesIdRequestMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin.exchanges)[':id']['request']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.admin.exchanges)[':id']['request']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAdminExchangesIdRequestMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.admin.exchanges)[':id']['request']['$delete']>,
    ) {
      return parseResponse(client.admin.exchanges[':id'].request.$delete(args, options))
    },
  })
}

export function useDeleteAdminExchangesIdRequest<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin.exchanges)[':id']['request']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.admin.exchanges)[':id']['request']['$delete']>,
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
  const mutationDefaults = getDeleteAdminExchangesIdRequestMutationOptions<TError, TOnMutateResult>(
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

export function getAdminFeatureFlagsQueryKey() {
  return ['admin', '/admin/feature-flags'] as const
}

export function getAdminFeatureFlagsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getAdminFeatureFlagsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.admin['feature-flags'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdminFeatureFlags<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.admin)['feature-flags']['$get']>>>
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
                Awaited<ReturnType<(typeof client.admin)['feature-flags']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin)['feature-flags']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAdminFeatureFlagsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.admin)['feature-flags']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminFeatureFlagsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getAdminFeatureFlagsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.admin['feature-flags'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAdminFulfillmentProvidersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.admin)['fulfillment-providers']['$get']>>,
) {
  return ['admin', '/admin/fulfillment-providers', toValue(args)] as const
}

export function getAdminFulfillmentProvidersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.admin)['fulfillment-providers']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdminFulfillmentProvidersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.admin['fulfillment-providers'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdminFulfillmentProviders<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.admin)['fulfillment-providers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.admin)['fulfillment-providers']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin)['fulfillment-providers']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin)['fulfillment-providers']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAdminFulfillmentProvidersQueryKey>
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
          Awaited<ReturnType<(typeof client.admin)['fulfillment-providers']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminFulfillmentProvidersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdminFulfillmentProvidersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.admin['fulfillment-providers'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAdminFulfillmentProvidersIdOptionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.admin)['fulfillment-providers'][':id']['options']['$get']>
  >,
) {
  return ['admin', '/admin/fulfillment-providers/:id/options', toValue(args)] as const
}

export function getAdminFulfillmentProvidersIdOptionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.admin)['fulfillment-providers'][':id']['options']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdminFulfillmentProvidersIdOptionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.admin['fulfillment-providers'][':id'].options.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdminFulfillmentProvidersIdOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.admin)['fulfillment-providers'][':id']['options']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.admin)['fulfillment-providers'][':id']['options']['$get']>
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
                    (typeof client.admin)['fulfillment-providers'][':id']['options']['$get']
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
                    (typeof client.admin)['fulfillment-providers'][':id']['options']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAdminFulfillmentProvidersIdOptionsQueryKey>
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
            ReturnType<(typeof client.admin)['fulfillment-providers'][':id']['options']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminFulfillmentProvidersIdOptionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdminFulfillmentProvidersIdOptionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.admin['fulfillment-providers'][':id'].options.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteAdminFulfillmentSetsIdMutationKey() {
  return ['admin', '/admin/fulfillment-sets/:id', 'DELETE'] as const
}

export function getDeleteAdminFulfillmentSetsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin)['fulfillment-sets'][':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.admin)['fulfillment-sets'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAdminFulfillmentSetsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.admin)['fulfillment-sets'][':id']['$delete']>,
    ) {
      return parseResponse(client.admin['fulfillment-sets'][':id'].$delete(args, options))
    },
  })
}

export function useDeleteAdminFulfillmentSetsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin)['fulfillment-sets'][':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.admin)['fulfillment-sets'][':id']['$delete']>,
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
  const mutationDefaults = getDeleteAdminFulfillmentSetsIdMutationOptions<TError, TOnMutateResult>(
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

export function getPostAdminFulfillmentSetsIdServiceZonesMutationKey() {
  return ['admin', '/admin/fulfillment-sets/:id/service-zones', 'POST'] as const
}

export function getPostAdminFulfillmentSetsIdServiceZonesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.admin)['fulfillment-sets'][':id']['service-zones']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.admin)['fulfillment-sets'][':id']['service-zones']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminFulfillmentSetsIdServiceZonesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.admin)['fulfillment-sets'][':id']['service-zones']['$post']
      >,
    ) {
      return parseResponse(
        client.admin['fulfillment-sets'][':id']['service-zones'].$post(args, options),
      )
    },
  })
}

export function usePostAdminFulfillmentSetsIdServiceZones<
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
                    (typeof client.admin)['fulfillment-sets'][':id']['service-zones']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.admin)['fulfillment-sets'][':id']['service-zones']['$post']
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
  const mutationDefaults = getPostAdminFulfillmentSetsIdServiceZonesMutationOptions<
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

export function getAdminFulfillmentSetsIdServiceZonesZoneIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.admin)['fulfillment-sets'][':id']['service-zones'][':zone_id']['$get']
    >
  >,
) {
  return ['admin', '/admin/fulfillment-sets/:id/service-zones/:zone_id', toValue(args)] as const
}

export function getAdminFulfillmentSetsIdServiceZonesZoneIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.admin)['fulfillment-sets'][':id']['service-zones'][':zone_id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdminFulfillmentSetsIdServiceZonesZoneIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.admin['fulfillment-sets'][':id']['service-zones'][':zone_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdminFulfillmentSetsIdServiceZonesZoneId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.admin)['fulfillment-sets'][':id']['service-zones'][':zone_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.admin)['fulfillment-sets'][':id']['service-zones'][':zone_id']['$get']
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
                    (typeof client.admin)['fulfillment-sets'][':id']['service-zones'][':zone_id']['$get']
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
                    (typeof client.admin)['fulfillment-sets'][':id']['service-zones'][':zone_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAdminFulfillmentSetsIdServiceZonesZoneIdQueryKey>
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
              (typeof client.admin)['fulfillment-sets'][':id']['service-zones'][':zone_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminFulfillmentSetsIdServiceZonesZoneIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdminFulfillmentSetsIdServiceZonesZoneIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.admin['fulfillment-sets'][':id']['service-zones'][':zone_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAdminFulfillmentSetsIdServiceZonesZoneIdMutationKey() {
  return ['admin', '/admin/fulfillment-sets/:id/service-zones/:zone_id', 'POST'] as const
}

export function getPostAdminFulfillmentSetsIdServiceZonesZoneIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.admin)['fulfillment-sets'][':id']['service-zones'][':zone_id']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.admin)['fulfillment-sets'][':id']['service-zones'][':zone_id']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAdminFulfillmentSetsIdServiceZonesZoneIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.admin)['fulfillment-sets'][':id']['service-zones'][':zone_id']['$post']
      >,
    ) {
      return parseResponse(
        client.admin['fulfillment-sets'][':id']['service-zones'][':zone_id'].$post(args, options),
      )
    },
  })
}

export function usePostAdminFulfillmentSetsIdServiceZonesZoneId<
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
                    (typeof client.admin)['fulfillment-sets'][':id']['service-zones'][':zone_id']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.admin)['fulfillment-sets'][':id']['service-zones'][':zone_id']['$post']
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
  const mutationDefaults = getPostAdminFulfillmentSetsIdServiceZonesZoneIdMutationOptions<
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

export function getDeleteAdminFulfillmentSetsIdServiceZonesZoneIdMutationKey() {
  return ['admin', '/admin/fulfillment-sets/:id/service-zones/:zone_id', 'DELETE'] as const
}

export function getDeleteAdminFulfillmentSetsIdServiceZonesZoneIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.admin)['fulfillment-sets'][':id']['service-zones'][':zone_id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.admin)['fulfillment-sets'][':id']['service-zones'][':zone_id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteAdminFulfillmentSetsIdServiceZonesZoneIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.admin)['fulfillment-sets'][':id']['service-zones'][':zone_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.admin['fulfillment-sets'][':id']['service-zones'][':zone_id'].$delete(args, options),
      )
    },
  })
}

export function useDeleteAdminFulfillmentSetsIdServiceZonesZoneId<
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
                    (typeof client.admin)['fulfillment-sets'][':id']['service-zones'][':zone_id']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.admin)['fulfillment-sets'][':id']['service-zones'][':zone_id']['$delete']
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
  const mutationDefaults = getDeleteAdminFulfillmentSetsIdServiceZonesZoneIdMutationOptions<
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

export function getPostAdminFulfillmentsMutationKey() {
  return ['admin', '/admin/fulfillments', 'POST'] as const
}

export function getPostAdminFulfillmentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.fulfillments.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.admin.fulfillments.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminFulfillmentsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.admin.fulfillments.$post>) {
      return parseResponse(client.admin.fulfillments.$post(args, options))
    },
  })
}

export function usePostAdminFulfillments<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.admin.fulfillments.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.admin.fulfillments.$post>,
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
  const mutationDefaults = getPostAdminFulfillmentsMutationOptions<TError, TOnMutateResult>(
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

export function getPostAdminFulfillmentsIdCancelMutationKey() {
  return ['admin', '/admin/fulfillments/:id/cancel', 'POST'] as const
}

export function getPostAdminFulfillmentsIdCancelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin.fulfillments)[':id']['cancel']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.admin.fulfillments)[':id']['cancel']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminFulfillmentsIdCancelMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.admin.fulfillments)[':id']['cancel']['$post']>,
    ) {
      return parseResponse(client.admin.fulfillments[':id'].cancel.$post(args, options))
    },
  })
}

export function usePostAdminFulfillmentsIdCancel<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin.fulfillments)[':id']['cancel']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.admin.fulfillments)[':id']['cancel']['$post']>,
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
  const mutationDefaults = getPostAdminFulfillmentsIdCancelMutationOptions<TError, TOnMutateResult>(
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

export function getPostAdminFulfillmentsIdShipmentMutationKey() {
  return ['admin', '/admin/fulfillments/:id/shipment', 'POST'] as const
}

export function getPostAdminFulfillmentsIdShipmentMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin.fulfillments)[':id']['shipment']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.admin.fulfillments)[':id']['shipment']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminFulfillmentsIdShipmentMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.admin.fulfillments)[':id']['shipment']['$post']>,
    ) {
      return parseResponse(client.admin.fulfillments[':id'].shipment.$post(args, options))
    },
  })
}

export function usePostAdminFulfillmentsIdShipment<
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
                Awaited<ReturnType<(typeof client.admin.fulfillments)[':id']['shipment']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.admin.fulfillments)[':id']['shipment']['$post']>,
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
  const mutationDefaults = getPostAdminFulfillmentsIdShipmentMutationOptions<
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

export function getAdminGiftCardsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.admin)['gift-cards']['$get']>>,
) {
  return ['admin', '/admin/gift-cards', toValue(args)] as const
}

export function getAdminGiftCardsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.admin)['gift-cards']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdminGiftCardsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.admin['gift-cards'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdminGiftCards<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.admin)['gift-cards']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.admin)['gift-cards']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.admin)['gift-cards']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.admin)['gift-cards']['$get']>>>
            >
          >,
          ReturnType<typeof getAdminGiftCardsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.admin)['gift-cards']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminGiftCardsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdminGiftCardsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.admin['gift-cards'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAdminGiftCardsMutationKey() {
  return ['admin', '/admin/gift-cards', 'POST'] as const
}

export function getPostAdminGiftCardsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.admin)['gift-cards']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.admin)['gift-cards']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminGiftCardsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.admin)['gift-cards']['$post']>) {
      return parseResponse(client.admin['gift-cards'].$post(args, options))
    },
  })
}

export function usePostAdminGiftCards<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin)['gift-cards']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.admin)['gift-cards']['$post']>,
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
  const mutationDefaults = getPostAdminGiftCardsMutationOptions<TError, TOnMutateResult>(
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

export function getAdminGiftCardsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.admin)['gift-cards'][':id']['$get']>>,
) {
  return ['admin', '/admin/gift-cards/:id', toValue(args)] as const
}

export function getAdminGiftCardsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.admin)['gift-cards'][':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdminGiftCardsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.admin['gift-cards'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdminGiftCardsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.admin)['gift-cards'][':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.admin)['gift-cards'][':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin)['gift-cards'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin)['gift-cards'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAdminGiftCardsIdQueryKey>
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
          Awaited<ReturnType<(typeof client.admin)['gift-cards'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminGiftCardsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdminGiftCardsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.admin['gift-cards'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAdminGiftCardsIdMutationKey() {
  return ['admin', '/admin/gift-cards/:id', 'POST'] as const
}

export function getPostAdminGiftCardsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin)['gift-cards'][':id']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.admin)['gift-cards'][':id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminGiftCardsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.admin)['gift-cards'][':id']['$post']>) {
      return parseResponse(client.admin['gift-cards'][':id'].$post(args, options))
    },
  })
}

export function usePostAdminGiftCardsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin)['gift-cards'][':id']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.admin)['gift-cards'][':id']['$post']>,
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
  const mutationDefaults = getPostAdminGiftCardsIdMutationOptions<TError, TOnMutateResult>(
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

export function getAdminGiftCardsIdOrdersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.admin)['gift-cards'][':id']['orders']['$get']>
  >,
) {
  return ['admin', '/admin/gift-cards/:id/orders', toValue(args)] as const
}

export function getAdminGiftCardsIdOrdersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.admin)['gift-cards'][':id']['orders']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdminGiftCardsIdOrdersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.admin['gift-cards'][':id'].orders.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdminGiftCardsIdOrders<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.admin)['gift-cards'][':id']['orders']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.admin)['gift-cards'][':id']['orders']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin)['gift-cards'][':id']['orders']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin)['gift-cards'][':id']['orders']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAdminGiftCardsIdOrdersQueryKey>
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
          Awaited<ReturnType<(typeof client.admin)['gift-cards'][':id']['orders']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminGiftCardsIdOrdersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdminGiftCardsIdOrdersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.admin['gift-cards'][':id'].orders.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAdminIndexDetailsQueryKey() {
  return ['admin', '/admin/index/details'] as const
}

export function getAdminIndexDetailsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getAdminIndexDetailsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.admin.index.details.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdminIndexDetails<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.index.details.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.admin.index.details.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.admin.index.details.$get>>>
            >
          >,
          ReturnType<typeof getAdminIndexDetailsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.index.details.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAdminIndexDetailsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getAdminIndexDetailsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.admin.index.details.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAdminIndexSyncMutationKey() {
  return ['admin', '/admin/index/sync', 'POST'] as const
}

export function getPostAdminIndexSyncMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.index.sync.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.admin.index.sync.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminIndexSyncMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.admin.index.sync.$post>) {
      return parseResponse(client.admin.index.sync.$post(args, options))
    },
  })
}

export function usePostAdminIndexSync<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.admin.index.sync.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.admin.index.sync.$post>,
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
  const mutationDefaults = getPostAdminIndexSyncMutationOptions<TError, TOnMutateResult>(
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

export function getAdminInventoryItemsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.admin)['inventory-items']['$get']>>,
) {
  return ['admin', '/admin/inventory-items', toValue(args)] as const
}

export function getAdminInventoryItemsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.admin)['inventory-items']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdminInventoryItemsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.admin['inventory-items'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdminInventoryItems<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.admin)['inventory-items']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.admin)['inventory-items']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin)['inventory-items']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin)['inventory-items']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAdminInventoryItemsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.admin)['inventory-items']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminInventoryItemsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdminInventoryItemsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.admin['inventory-items'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAdminInventoryItemsMutationKey() {
  return ['admin', '/admin/inventory-items', 'POST'] as const
}

export function getPostAdminInventoryItemsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.admin)['inventory-items']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.admin)['inventory-items']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminInventoryItemsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.admin)['inventory-items']['$post']>) {
      return parseResponse(client.admin['inventory-items'].$post(args, options))
    },
  })
}

export function usePostAdminInventoryItems<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin)['inventory-items']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.admin)['inventory-items']['$post']>,
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
  const mutationDefaults = getPostAdminInventoryItemsMutationOptions<TError, TOnMutateResult>(
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

export function getPostAdminInventoryItemsExportMutationKey() {
  return ['admin', '/admin/inventory-items/export', 'POST'] as const
}

export function getPostAdminInventoryItemsExportMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin)['inventory-items']['export']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.admin)['inventory-items']['export']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminInventoryItemsExportMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.admin)['inventory-items']['export']['$post']>,
    ) {
      return parseResponse(client.admin['inventory-items'].export.$post(args, options))
    },
  })
}

export function usePostAdminInventoryItemsExport<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin)['inventory-items']['export']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.admin)['inventory-items']['export']['$post']>,
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
  const mutationDefaults = getPostAdminInventoryItemsExportMutationOptions<TError, TOnMutateResult>(
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

export function getPostAdminInventoryItemsLocationLevelsBatchMutationKey() {
  return ['admin', '/admin/inventory-items/location-levels/batch', 'POST'] as const
}

export function getPostAdminInventoryItemsLocationLevelsBatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.admin)['inventory-items']['location-levels']['batch']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.admin)['inventory-items']['location-levels']['batch']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminInventoryItemsLocationLevelsBatchMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.admin)['inventory-items']['location-levels']['batch']['$post']
      >,
    ) {
      return parseResponse(
        client.admin['inventory-items']['location-levels'].batch.$post(args, options),
      )
    },
  })
}

export function usePostAdminInventoryItemsLocationLevelsBatch<
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
                    (typeof client.admin)['inventory-items']['location-levels']['batch']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.admin)['inventory-items']['location-levels']['batch']['$post']
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
  const mutationDefaults = getPostAdminInventoryItemsLocationLevelsBatchMutationOptions<
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

export function getAdminInventoryItemsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.admin)['inventory-items'][':id']['$get']>>,
) {
  return ['admin', '/admin/inventory-items/:id', toValue(args)] as const
}

export function getAdminInventoryItemsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.admin)['inventory-items'][':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdminInventoryItemsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.admin['inventory-items'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdminInventoryItemsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.admin)['inventory-items'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.admin)['inventory-items'][':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin)['inventory-items'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin)['inventory-items'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAdminInventoryItemsIdQueryKey>
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
          Awaited<ReturnType<(typeof client.admin)['inventory-items'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminInventoryItemsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdminInventoryItemsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.admin['inventory-items'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAdminInventoryItemsIdMutationKey() {
  return ['admin', '/admin/inventory-items/:id', 'POST'] as const
}

export function getPostAdminInventoryItemsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin)['inventory-items'][':id']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.admin)['inventory-items'][':id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminInventoryItemsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.admin)['inventory-items'][':id']['$post']>,
    ) {
      return parseResponse(client.admin['inventory-items'][':id'].$post(args, options))
    },
  })
}

export function usePostAdminInventoryItemsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin)['inventory-items'][':id']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.admin)['inventory-items'][':id']['$post']>,
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
  const mutationDefaults = getPostAdminInventoryItemsIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteAdminInventoryItemsIdMutationKey() {
  return ['admin', '/admin/inventory-items/:id', 'DELETE'] as const
}

export function getDeleteAdminInventoryItemsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin)['inventory-items'][':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.admin)['inventory-items'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAdminInventoryItemsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.admin)['inventory-items'][':id']['$delete']>,
    ) {
      return parseResponse(client.admin['inventory-items'][':id'].$delete(args, options))
    },
  })
}

export function useDeleteAdminInventoryItemsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin)['inventory-items'][':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.admin)['inventory-items'][':id']['$delete']>,
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
  const mutationDefaults = getDeleteAdminInventoryItemsIdMutationOptions<TError, TOnMutateResult>(
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

export function getAdminInventoryItemsIdLocationLevelsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.admin)['inventory-items'][':id']['location-levels']['$get']>
  >,
) {
  return ['admin', '/admin/inventory-items/:id/location-levels', toValue(args)] as const
}

export function getAdminInventoryItemsIdLocationLevelsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.admin)['inventory-items'][':id']['location-levels']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdminInventoryItemsIdLocationLevelsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.admin['inventory-items'][':id']['location-levels'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdminInventoryItemsIdLocationLevels<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.admin)['inventory-items'][':id']['location-levels']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.admin)['inventory-items'][':id']['location-levels']['$get']>
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
                    (typeof client.admin)['inventory-items'][':id']['location-levels']['$get']
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
                    (typeof client.admin)['inventory-items'][':id']['location-levels']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAdminInventoryItemsIdLocationLevelsQueryKey>
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
            ReturnType<(typeof client.admin)['inventory-items'][':id']['location-levels']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminInventoryItemsIdLocationLevelsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdminInventoryItemsIdLocationLevelsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.admin['inventory-items'][':id']['location-levels'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAdminInventoryItemsIdLocationLevelsMutationKey() {
  return ['admin', '/admin/inventory-items/:id/location-levels', 'POST'] as const
}

export function getPostAdminInventoryItemsIdLocationLevelsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.admin)['inventory-items'][':id']['location-levels']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.admin)['inventory-items'][':id']['location-levels']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminInventoryItemsIdLocationLevelsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.admin)['inventory-items'][':id']['location-levels']['$post']
      >,
    ) {
      return parseResponse(
        client.admin['inventory-items'][':id']['location-levels'].$post(args, options),
      )
    },
  })
}

export function usePostAdminInventoryItemsIdLocationLevels<
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
                    (typeof client.admin)['inventory-items'][':id']['location-levels']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.admin)['inventory-items'][':id']['location-levels']['$post']
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
  const mutationDefaults = getPostAdminInventoryItemsIdLocationLevelsMutationOptions<
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

export function getPostAdminInventoryItemsIdLocationLevelsBatchMutationKey() {
  return ['admin', '/admin/inventory-items/:id/location-levels/batch', 'POST'] as const
}

export function getPostAdminInventoryItemsIdLocationLevelsBatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.admin)['inventory-items'][':id']['location-levels']['batch']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.admin)['inventory-items'][':id']['location-levels']['batch']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAdminInventoryItemsIdLocationLevelsBatchMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.admin)['inventory-items'][':id']['location-levels']['batch']['$post']
      >,
    ) {
      return parseResponse(
        client.admin['inventory-items'][':id']['location-levels'].batch.$post(args, options),
      )
    },
  })
}

export function usePostAdminInventoryItemsIdLocationLevelsBatch<
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
                    (typeof client.admin)['inventory-items'][':id']['location-levels']['batch']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.admin)['inventory-items'][':id']['location-levels']['batch']['$post']
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
  const mutationDefaults = getPostAdminInventoryItemsIdLocationLevelsBatchMutationOptions<
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

export function getPostAdminInventoryItemsIdLocationLevelsLocationIdMutationKey() {
  return ['admin', '/admin/inventory-items/:id/location-levels/:location_id', 'POST'] as const
}

export function getPostAdminInventoryItemsIdLocationLevelsLocationIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.admin)['inventory-items'][':id']['location-levels'][':location_id']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.admin)['inventory-items'][':id']['location-levels'][':location_id']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAdminInventoryItemsIdLocationLevelsLocationIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.admin)['inventory-items'][':id']['location-levels'][':location_id']['$post']
      >,
    ) {
      return parseResponse(
        client.admin['inventory-items'][':id']['location-levels'][':location_id'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostAdminInventoryItemsIdLocationLevelsLocationId<
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
                    (typeof client.admin)['inventory-items'][':id']['location-levels'][':location_id']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.admin)['inventory-items'][':id']['location-levels'][':location_id']['$post']
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
  const mutationDefaults = getPostAdminInventoryItemsIdLocationLevelsLocationIdMutationOptions<
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

export function getDeleteAdminInventoryItemsIdLocationLevelsLocationIdMutationKey() {
  return ['admin', '/admin/inventory-items/:id/location-levels/:location_id', 'DELETE'] as const
}

export function getDeleteAdminInventoryItemsIdLocationLevelsLocationIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.admin)['inventory-items'][':id']['location-levels'][':location_id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.admin)['inventory-items'][':id']['location-levels'][':location_id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteAdminInventoryItemsIdLocationLevelsLocationIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.admin)['inventory-items'][':id']['location-levels'][':location_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.admin['inventory-items'][':id']['location-levels'][':location_id'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteAdminInventoryItemsIdLocationLevelsLocationId<
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
                    (typeof client.admin)['inventory-items'][':id']['location-levels'][':location_id']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.admin)['inventory-items'][':id']['location-levels'][':location_id']['$delete']
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
  const mutationDefaults = getDeleteAdminInventoryItemsIdLocationLevelsLocationIdMutationOptions<
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

export function getAdminInvitesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.admin.invites.$get>>,
) {
  return ['admin', '/admin/invites', toValue(args)] as const
}

export function getAdminInvitesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.admin.invites.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdminInvitesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.admin.invites.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdminInvites<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.invites.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.admin.invites.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.invites.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.invites.$get>>>>
          >,
          ReturnType<typeof getAdminInvitesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.invites.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAdminInvitesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdminInvitesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.admin.invites.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAdminInvitesMutationKey() {
  return ['admin', '/admin/invites', 'POST'] as const
}

export function getPostAdminInvitesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.invites.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.admin.invites.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminInvitesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.admin.invites.$post>) {
      return parseResponse(client.admin.invites.$post(args, options))
    },
  })
}

export function usePostAdminInvites<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.invites.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.admin.invites.$post>,
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
  const mutationDefaults = getPostAdminInvitesMutationOptions<TError, TOnMutateResult>(
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

export function getPostAdminInvitesAcceptMutationKey() {
  return ['admin', '/admin/invites/accept', 'POST'] as const
}

export function getPostAdminInvitesAcceptMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.admin.invites.accept.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.admin.invites.accept.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminInvitesAcceptMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.admin.invites.accept.$post>) {
      return parseResponse(client.admin.invites.accept.$post(args, options))
    },
  })
}

export function usePostAdminInvitesAccept<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.admin.invites.accept.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.admin.invites.accept.$post>,
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
  const mutationDefaults = getPostAdminInvitesAcceptMutationOptions<TError, TOnMutateResult>(
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

export function getAdminInvitesIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.admin.invites)[':id']['$get']>>,
) {
  return ['admin', '/admin/invites/:id', toValue(args)] as const
}

export function getAdminInvitesIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.admin.invites)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdminInvitesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.admin.invites[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdminInvitesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.admin.invites)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.admin.invites)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin.invites)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin.invites)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAdminInvitesIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.admin.invites)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminInvitesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdminInvitesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.admin.invites[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteAdminInvitesIdMutationKey() {
  return ['admin', '/admin/invites/:id', 'DELETE'] as const
}

export function getDeleteAdminInvitesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.admin.invites)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.admin.invites)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAdminInvitesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.admin.invites)[':id']['$delete']>) {
      return parseResponse(client.admin.invites[':id'].$delete(args, options))
    },
  })
}

export function useDeleteAdminInvitesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin.invites)[':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.admin.invites)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteAdminInvitesIdMutationOptions<TError, TOnMutateResult>(
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

export function getPostAdminInvitesIdResendMutationKey() {
  return ['admin', '/admin/invites/:id/resend', 'POST'] as const
}

export function getPostAdminInvitesIdResendMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin.invites)[':id']['resend']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.admin.invites)[':id']['resend']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminInvitesIdResendMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.admin.invites)[':id']['resend']['$post']>,
    ) {
      return parseResponse(client.admin.invites[':id'].resend.$post(args, options))
    },
  })
}

export function usePostAdminInvitesIdResend<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin.invites)[':id']['resend']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.admin.invites)[':id']['resend']['$post']>,
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
  const mutationDefaults = getPostAdminInvitesIdResendMutationOptions<TError, TOnMutateResult>(
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

export function getAdminLayoutsConfigurationsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.admin.layouts.configurations.$get>>,
) {
  return ['admin', '/admin/layouts/configurations', toValue(args)] as const
}

export function getAdminLayoutsConfigurationsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.admin.layouts.configurations.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdminLayoutsConfigurationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.admin.layouts.configurations.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdminLayoutsConfigurations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.admin.layouts.configurations.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.admin.layouts.configurations.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.admin.layouts.configurations.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.admin.layouts.configurations.$get>>
              >
            >
          >,
          ReturnType<typeof getAdminLayoutsConfigurationsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.admin.layouts.configurations.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminLayoutsConfigurationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdminLayoutsConfigurationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.admin.layouts.configurations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAdminLayoutsZoneConfigurationQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.admin.layouts)[':zone']['configuration']['$get']>
  >,
) {
  return ['admin', '/admin/layouts/:zone/configuration', toValue(args)] as const
}

export function getAdminLayoutsZoneConfigurationQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.admin.layouts)[':zone']['configuration']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdminLayoutsZoneConfigurationQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.admin.layouts[':zone'].configuration.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdminLayoutsZoneConfiguration<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.admin.layouts)[':zone']['configuration']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.admin.layouts)[':zone']['configuration']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin.layouts)[':zone']['configuration']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin.layouts)[':zone']['configuration']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAdminLayoutsZoneConfigurationQueryKey>
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
          Awaited<ReturnType<(typeof client.admin.layouts)[':zone']['configuration']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminLayoutsZoneConfigurationQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdminLayoutsZoneConfigurationQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.admin.layouts[':zone'].configuration.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAdminLayoutsZoneConfigurationMutationKey() {
  return ['admin', '/admin/layouts/:zone/configuration', 'POST'] as const
}

export function getPostAdminLayoutsZoneConfigurationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin.layouts)[':zone']['configuration']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.admin.layouts)[':zone']['configuration']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminLayoutsZoneConfigurationMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.admin.layouts)[':zone']['configuration']['$post']>,
    ) {
      return parseResponse(client.admin.layouts[':zone'].configuration.$post(args, options))
    },
  })
}

export function usePostAdminLayoutsZoneConfiguration<
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
                  ReturnType<(typeof client.admin.layouts)[':zone']['configuration']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.admin.layouts)[':zone']['configuration']['$post']>,
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
  const mutationDefaults = getPostAdminLayoutsZoneConfigurationMutationOptions<
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

export function getDeleteAdminLayoutsZoneConfigurationMutationKey() {
  return ['admin', '/admin/layouts/:zone/configuration', 'DELETE'] as const
}

export function getDeleteAdminLayoutsZoneConfigurationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin.layouts)[':zone']['configuration']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.admin.layouts)[':zone']['configuration']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAdminLayoutsZoneConfigurationMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.admin.layouts)[':zone']['configuration']['$delete']>,
    ) {
      return parseResponse(client.admin.layouts[':zone'].configuration.$delete(args, options))
    },
  })
}

export function useDeleteAdminLayoutsZoneConfiguration<
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
                  ReturnType<(typeof client.admin.layouts)[':zone']['configuration']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.admin.layouts)[':zone']['configuration']['$delete']>,
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
  const mutationDefaults = getDeleteAdminLayoutsZoneConfigurationMutationOptions<
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

export function getAdminLocalesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.admin.locales.$get>>,
) {
  return ['admin', '/admin/locales', toValue(args)] as const
}

export function getAdminLocalesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.admin.locales.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdminLocalesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.admin.locales.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdminLocales<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.locales.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.admin.locales.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.locales.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.locales.$get>>>>
          >,
          ReturnType<typeof getAdminLocalesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.locales.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAdminLocalesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdminLocalesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.admin.locales.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAdminLocalesCodeQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.admin.locales)[':code']['$get']>>,
) {
  return ['admin', '/admin/locales/:code', toValue(args)] as const
}

export function getAdminLocalesCodeQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.admin.locales)[':code']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdminLocalesCodeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.admin.locales[':code'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdminLocalesCode<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.admin.locales)[':code']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.admin.locales)[':code']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin.locales)[':code']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin.locales)[':code']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAdminLocalesCodeQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.admin.locales)[':code']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminLocalesCodeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdminLocalesCodeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.admin.locales[':code'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAdminModulesQueryKey() {
  return ['admin', '/admin/modules'] as const
}

export function getAdminModulesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getAdminModulesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.admin.modules.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useAdminModules<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.modules.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.modules.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.modules.$get>>>>
          >,
          ReturnType<typeof getAdminModulesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.modules.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAdminModulesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getAdminModulesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.admin.modules.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAdminNotificationsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.admin.notifications.$get>>,
) {
  return ['admin', '/admin/notifications', toValue(args)] as const
}

export function getAdminNotificationsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.admin.notifications.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdminNotificationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.admin.notifications.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdminNotifications<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.notifications.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.admin.notifications.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.admin.notifications.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.admin.notifications.$get>>>
            >
          >,
          ReturnType<typeof getAdminNotificationsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.notifications.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAdminNotificationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdminNotificationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.admin.notifications.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAdminNotificationsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.admin.notifications)[':id']['$get']>>,
) {
  return ['admin', '/admin/notifications/:id', toValue(args)] as const
}

export function getAdminNotificationsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.admin.notifications)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdminNotificationsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.admin.notifications[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdminNotificationsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.admin.notifications)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.admin.notifications)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin.notifications)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin.notifications)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAdminNotificationsIdQueryKey>
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
          Awaited<ReturnType<(typeof client.admin.notifications)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminNotificationsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdminNotificationsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.admin.notifications[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAdminOrderChangesIdMutationKey() {
  return ['admin', '/admin/order-changes/:id', 'POST'] as const
}

export function getPostAdminOrderChangesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin)['order-changes'][':id']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.admin)['order-changes'][':id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminOrderChangesIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.admin)['order-changes'][':id']['$post']>,
    ) {
      return parseResponse(client.admin['order-changes'][':id'].$post(args, options))
    },
  })
}

export function usePostAdminOrderChangesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin)['order-changes'][':id']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.admin)['order-changes'][':id']['$post']>,
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
  const mutationDefaults = getPostAdminOrderChangesIdMutationOptions<TError, TOnMutateResult>(
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

export function getPostAdminOrderEditsMutationKey() {
  return ['admin', '/admin/order-edits', 'POST'] as const
}

export function getPostAdminOrderEditsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.admin)['order-edits']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.admin)['order-edits']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminOrderEditsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.admin)['order-edits']['$post']>) {
      return parseResponse(client.admin['order-edits'].$post(args, options))
    },
  })
}

export function usePostAdminOrderEdits<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin)['order-edits']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.admin)['order-edits']['$post']>,
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
  const mutationDefaults = getPostAdminOrderEditsMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteAdminOrderEditsIdMutationKey() {
  return ['admin', '/admin/order-edits/:id', 'DELETE'] as const
}

export function getDeleteAdminOrderEditsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin)['order-edits'][':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.admin)['order-edits'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAdminOrderEditsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.admin)['order-edits'][':id']['$delete']>,
    ) {
      return parseResponse(client.admin['order-edits'][':id'].$delete(args, options))
    },
  })
}

export function useDeleteAdminOrderEditsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin)['order-edits'][':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.admin)['order-edits'][':id']['$delete']>,
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
  const mutationDefaults = getDeleteAdminOrderEditsIdMutationOptions<TError, TOnMutateResult>(
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

export function getPostAdminOrderEditsIdConfirmMutationKey() {
  return ['admin', '/admin/order-edits/:id/confirm', 'POST'] as const
}

export function getPostAdminOrderEditsIdConfirmMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin)['order-edits'][':id']['confirm']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.admin)['order-edits'][':id']['confirm']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminOrderEditsIdConfirmMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.admin)['order-edits'][':id']['confirm']['$post']>,
    ) {
      return parseResponse(client.admin['order-edits'][':id'].confirm.$post(args, options))
    },
  })
}

export function usePostAdminOrderEditsIdConfirm<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin)['order-edits'][':id']['confirm']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.admin)['order-edits'][':id']['confirm']['$post']>,
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
  const mutationDefaults = getPostAdminOrderEditsIdConfirmMutationOptions<TError, TOnMutateResult>(
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

export function getPostAdminOrderEditsIdItemsMutationKey() {
  return ['admin', '/admin/order-edits/:id/items', 'POST'] as const
}

export function getPostAdminOrderEditsIdItemsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin)['order-edits'][':id']['items']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.admin)['order-edits'][':id']['items']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminOrderEditsIdItemsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.admin)['order-edits'][':id']['items']['$post']>,
    ) {
      return parseResponse(client.admin['order-edits'][':id'].items.$post(args, options))
    },
  })
}

export function usePostAdminOrderEditsIdItems<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin)['order-edits'][':id']['items']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.admin)['order-edits'][':id']['items']['$post']>,
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
  const mutationDefaults = getPostAdminOrderEditsIdItemsMutationOptions<TError, TOnMutateResult>(
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

export function getPostAdminOrderEditsIdItemsItemItemIdMutationKey() {
  return ['admin', '/admin/order-edits/:id/items/item/:item_id', 'POST'] as const
}

export function getPostAdminOrderEditsIdItemsItemItemIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.admin)['order-edits'][':id']['items']['item'][':item_id']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.admin)['order-edits'][':id']['items']['item'][':item_id']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAdminOrderEditsIdItemsItemItemIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.admin)['order-edits'][':id']['items']['item'][':item_id']['$post']
      >,
    ) {
      return parseResponse(
        client.admin['order-edits'][':id'].items.item[':item_id'].$post(args, options),
      )
    },
  })
}

export function usePostAdminOrderEditsIdItemsItemItemId<
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
                    (typeof client.admin)['order-edits'][':id']['items']['item'][':item_id']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.admin)['order-edits'][':id']['items']['item'][':item_id']['$post']
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
  const mutationDefaults = getPostAdminOrderEditsIdItemsItemItemIdMutationOptions<
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

export function getPostAdminOrderEditsIdItemsActionIdMutationKey() {
  return ['admin', '/admin/order-edits/:id/items/:action_id', 'POST'] as const
}

export function getPostAdminOrderEditsIdItemsActionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.admin)['order-edits'][':id']['items'][':action_id']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.admin)['order-edits'][':id']['items'][':action_id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminOrderEditsIdItemsActionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.admin)['order-edits'][':id']['items'][':action_id']['$post']
      >,
    ) {
      return parseResponse(
        client.admin['order-edits'][':id'].items[':action_id'].$post(args, options),
      )
    },
  })
}

export function usePostAdminOrderEditsIdItemsActionId<
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
                    (typeof client.admin)['order-edits'][':id']['items'][':action_id']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.admin)['order-edits'][':id']['items'][':action_id']['$post']
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
  const mutationDefaults = getPostAdminOrderEditsIdItemsActionIdMutationOptions<
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

export function getDeleteAdminOrderEditsIdItemsActionIdMutationKey() {
  return ['admin', '/admin/order-edits/:id/items/:action_id', 'DELETE'] as const
}

export function getDeleteAdminOrderEditsIdItemsActionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.admin)['order-edits'][':id']['items'][':action_id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.admin)['order-edits'][':id']['items'][':action_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAdminOrderEditsIdItemsActionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.admin)['order-edits'][':id']['items'][':action_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.admin['order-edits'][':id'].items[':action_id'].$delete(args, options),
      )
    },
  })
}

export function useDeleteAdminOrderEditsIdItemsActionId<
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
                    (typeof client.admin)['order-edits'][':id']['items'][':action_id']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.admin)['order-edits'][':id']['items'][':action_id']['$delete']
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
  const mutationDefaults = getDeleteAdminOrderEditsIdItemsActionIdMutationOptions<
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

export function getPostAdminOrderEditsIdRequestMutationKey() {
  return ['admin', '/admin/order-edits/:id/request', 'POST'] as const
}

export function getPostAdminOrderEditsIdRequestMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin)['order-edits'][':id']['request']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.admin)['order-edits'][':id']['request']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminOrderEditsIdRequestMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.admin)['order-edits'][':id']['request']['$post']>,
    ) {
      return parseResponse(client.admin['order-edits'][':id'].request.$post(args, options))
    },
  })
}

export function usePostAdminOrderEditsIdRequest<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin)['order-edits'][':id']['request']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.admin)['order-edits'][':id']['request']['$post']>,
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
  const mutationDefaults = getPostAdminOrderEditsIdRequestMutationOptions<TError, TOnMutateResult>(
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

export function getPostAdminOrderEditsIdShippingMethodMutationKey() {
  return ['admin', '/admin/order-edits/:id/shipping-method', 'POST'] as const
}

export function getPostAdminOrderEditsIdShippingMethodMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.admin)['order-edits'][':id']['shipping-method']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.admin)['order-edits'][':id']['shipping-method']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminOrderEditsIdShippingMethodMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.admin)['order-edits'][':id']['shipping-method']['$post']
      >,
    ) {
      return parseResponse(
        client.admin['order-edits'][':id']['shipping-method'].$post(args, options),
      )
    },
  })
}

export function usePostAdminOrderEditsIdShippingMethod<
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
                    (typeof client.admin)['order-edits'][':id']['shipping-method']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.admin)['order-edits'][':id']['shipping-method']['$post']>,
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
  const mutationDefaults = getPostAdminOrderEditsIdShippingMethodMutationOptions<
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

export function getPostAdminOrderEditsIdShippingMethodActionIdMutationKey() {
  return ['admin', '/admin/order-edits/:id/shipping-method/:action_id', 'POST'] as const
}

export function getPostAdminOrderEditsIdShippingMethodActionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.admin)['order-edits'][':id']['shipping-method'][':action_id']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.admin)['order-edits'][':id']['shipping-method'][':action_id']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAdminOrderEditsIdShippingMethodActionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.admin)['order-edits'][':id']['shipping-method'][':action_id']['$post']
      >,
    ) {
      return parseResponse(
        client.admin['order-edits'][':id']['shipping-method'][':action_id'].$post(args, options),
      )
    },
  })
}

export function usePostAdminOrderEditsIdShippingMethodActionId<
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
                    (typeof client.admin)['order-edits'][':id']['shipping-method'][':action_id']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.admin)['order-edits'][':id']['shipping-method'][':action_id']['$post']
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
  const mutationDefaults = getPostAdminOrderEditsIdShippingMethodActionIdMutationOptions<
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

export function getDeleteAdminOrderEditsIdShippingMethodActionIdMutationKey() {
  return ['admin', '/admin/order-edits/:id/shipping-method/:action_id', 'DELETE'] as const
}

export function getDeleteAdminOrderEditsIdShippingMethodActionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.admin)['order-edits'][':id']['shipping-method'][':action_id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.admin)['order-edits'][':id']['shipping-method'][':action_id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteAdminOrderEditsIdShippingMethodActionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.admin)['order-edits'][':id']['shipping-method'][':action_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.admin['order-edits'][':id']['shipping-method'][':action_id'].$delete(args, options),
      )
    },
  })
}

export function useDeleteAdminOrderEditsIdShippingMethodActionId<
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
                    (typeof client.admin)['order-edits'][':id']['shipping-method'][':action_id']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.admin)['order-edits'][':id']['shipping-method'][':action_id']['$delete']
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
  const mutationDefaults = getDeleteAdminOrderEditsIdShippingMethodActionIdMutationOptions<
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

export function getAdminOrdersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.admin.orders.$get>>,
) {
  return ['admin', '/admin/orders', toValue(args)] as const
}

export function getAdminOrdersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.admin.orders.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdminOrdersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.admin.orders.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useAdminOrders<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.orders.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.admin.orders.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.orders.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.orders.$get>>>>
          >,
          ReturnType<typeof getAdminOrdersQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.orders.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAdminOrdersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdminOrdersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.admin.orders.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAdminOrdersExportMutationKey() {
  return ['admin', '/admin/orders/export', 'POST'] as const
}

export function getPostAdminOrdersExportMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.orders.export.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.admin.orders.export.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminOrdersExportMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.admin.orders.export.$post>) {
      return parseResponse(client.admin.orders.export.$post(args, options))
    },
  })
}

export function usePostAdminOrdersExport<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.admin.orders.export.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.admin.orders.export.$post>,
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
  const mutationDefaults = getPostAdminOrdersExportMutationOptions<TError, TOnMutateResult>(
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

export function getAdminOrdersIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.admin.orders)[':id']['$get']>>,
) {
  return ['admin', '/admin/orders/:id', toValue(args)] as const
}

export function getAdminOrdersIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.admin.orders)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdminOrdersIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.admin.orders[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdminOrdersId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.admin.orders)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.admin.orders)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.admin.orders)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.admin.orders)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getAdminOrdersIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.admin.orders)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminOrdersIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdminOrdersIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.admin.orders[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAdminOrdersIdMutationKey() {
  return ['admin', '/admin/orders/:id', 'POST'] as const
}

export function getPostAdminOrdersIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.admin.orders)[':id']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.admin.orders)[':id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminOrdersIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.admin.orders)[':id']['$post']>) {
      return parseResponse(client.admin.orders[':id'].$post(args, options))
    },
  })
}

export function usePostAdminOrdersId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin.orders)[':id']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.admin.orders)[':id']['$post']>,
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
  const mutationDefaults = getPostAdminOrdersIdMutationOptions<TError, TOnMutateResult>(
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

export function getPostAdminOrdersIdArchiveMutationKey() {
  return ['admin', '/admin/orders/:id/archive', 'POST'] as const
}

export function getPostAdminOrdersIdArchiveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin.orders)[':id']['archive']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.admin.orders)[':id']['archive']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminOrdersIdArchiveMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.admin.orders)[':id']['archive']['$post']>,
    ) {
      return parseResponse(client.admin.orders[':id'].archive.$post(args, options))
    },
  })
}

export function usePostAdminOrdersIdArchive<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin.orders)[':id']['archive']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.admin.orders)[':id']['archive']['$post']>,
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
  const mutationDefaults = getPostAdminOrdersIdArchiveMutationOptions<TError, TOnMutateResult>(
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

export function getPostAdminOrdersIdCancelMutationKey() {
  return ['admin', '/admin/orders/:id/cancel', 'POST'] as const
}

export function getPostAdminOrdersIdCancelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin.orders)[':id']['cancel']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.admin.orders)[':id']['cancel']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminOrdersIdCancelMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.admin.orders)[':id']['cancel']['$post']>,
    ) {
      return parseResponse(client.admin.orders[':id'].cancel.$post(args, options))
    },
  })
}

export function usePostAdminOrdersIdCancel<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin.orders)[':id']['cancel']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.admin.orders)[':id']['cancel']['$post']>,
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
  const mutationDefaults = getPostAdminOrdersIdCancelMutationOptions<TError, TOnMutateResult>(
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

export function getAdminOrdersIdChangesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.admin.orders)[':id']['changes']['$get']>>,
) {
  return ['admin', '/admin/orders/:id/changes', toValue(args)] as const
}

export function getAdminOrdersIdChangesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.admin.orders)[':id']['changes']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdminOrdersIdChangesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.admin.orders[':id'].changes.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdminOrdersIdChanges<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.admin.orders)[':id']['changes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.admin.orders)[':id']['changes']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin.orders)[':id']['changes']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin.orders)[':id']['changes']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAdminOrdersIdChangesQueryKey>
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
          Awaited<ReturnType<(typeof client.admin.orders)[':id']['changes']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminOrdersIdChangesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdminOrdersIdChangesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.admin.orders[':id'].changes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAdminOrdersIdCompleteMutationKey() {
  return ['admin', '/admin/orders/:id/complete', 'POST'] as const
}

export function getPostAdminOrdersIdCompleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin.orders)[':id']['complete']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.admin.orders)[':id']['complete']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminOrdersIdCompleteMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.admin.orders)[':id']['complete']['$post']>,
    ) {
      return parseResponse(client.admin.orders[':id'].complete.$post(args, options))
    },
  })
}

export function usePostAdminOrdersIdComplete<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin.orders)[':id']['complete']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.admin.orders)[':id']['complete']['$post']>,
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
  const mutationDefaults = getPostAdminOrdersIdCompleteMutationOptions<TError, TOnMutateResult>(
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

export function getPostAdminOrdersIdCreditLinesMutationKey() {
  return ['admin', '/admin/orders/:id/credit-lines', 'POST'] as const
}

export function getPostAdminOrdersIdCreditLinesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin.orders)[':id']['credit-lines']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.admin.orders)[':id']['credit-lines']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminOrdersIdCreditLinesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.admin.orders)[':id']['credit-lines']['$post']>,
    ) {
      return parseResponse(client.admin.orders[':id']['credit-lines'].$post(args, options))
    },
  })
}

export function usePostAdminOrdersIdCreditLines<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin.orders)[':id']['credit-lines']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.admin.orders)[':id']['credit-lines']['$post']>,
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
  const mutationDefaults = getPostAdminOrdersIdCreditLinesMutationOptions<TError, TOnMutateResult>(
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

export function getPostAdminOrdersIdFulfillmentsMutationKey() {
  return ['admin', '/admin/orders/:id/fulfillments', 'POST'] as const
}

export function getPostAdminOrdersIdFulfillmentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin.orders)[':id']['fulfillments']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.admin.orders)[':id']['fulfillments']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminOrdersIdFulfillmentsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.admin.orders)[':id']['fulfillments']['$post']>,
    ) {
      return parseResponse(client.admin.orders[':id'].fulfillments.$post(args, options))
    },
  })
}

export function usePostAdminOrdersIdFulfillments<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin.orders)[':id']['fulfillments']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.admin.orders)[':id']['fulfillments']['$post']>,
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
  const mutationDefaults = getPostAdminOrdersIdFulfillmentsMutationOptions<TError, TOnMutateResult>(
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

export function getPostAdminOrdersIdFulfillmentsFulfillmentIdCancelMutationKey() {
  return ['admin', '/admin/orders/:id/fulfillments/:fulfillment_id/cancel', 'POST'] as const
}

export function getPostAdminOrdersIdFulfillmentsFulfillmentIdCancelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.admin.orders)[':id']['fulfillments'][':fulfillment_id']['cancel']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.admin.orders)[':id']['fulfillments'][':fulfillment_id']['cancel']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAdminOrdersIdFulfillmentsFulfillmentIdCancelMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.admin.orders)[':id']['fulfillments'][':fulfillment_id']['cancel']['$post']
      >,
    ) {
      return parseResponse(
        client.admin.orders[':id'].fulfillments[':fulfillment_id'].cancel.$post(args, options),
      )
    },
  })
}

export function usePostAdminOrdersIdFulfillmentsFulfillmentIdCancel<
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
                    (typeof client.admin.orders)[':id']['fulfillments'][':fulfillment_id']['cancel']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.admin.orders)[':id']['fulfillments'][':fulfillment_id']['cancel']['$post']
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
  const mutationDefaults = getPostAdminOrdersIdFulfillmentsFulfillmentIdCancelMutationOptions<
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

export function getPostAdminOrdersIdFulfillmentsFulfillmentIdMarkAsDeliveredMutationKey() {
  return [
    'admin',
    '/admin/orders/:id/fulfillments/:fulfillment_id/mark-as-delivered',
    'POST',
  ] as const
}

export function getPostAdminOrdersIdFulfillmentsFulfillmentIdMarkAsDeliveredMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.admin.orders)[':id']['fulfillments'][':fulfillment_id']['mark-as-delivered']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.admin.orders)[':id']['fulfillments'][':fulfillment_id']['mark-as-delivered']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAdminOrdersIdFulfillmentsFulfillmentIdMarkAsDeliveredMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.admin.orders)[':id']['fulfillments'][':fulfillment_id']['mark-as-delivered']['$post']
      >,
    ) {
      return parseResponse(
        client.admin.orders[':id'].fulfillments[':fulfillment_id']['mark-as-delivered'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostAdminOrdersIdFulfillmentsFulfillmentIdMarkAsDelivered<
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
                    (typeof client.admin.orders)[':id']['fulfillments'][':fulfillment_id']['mark-as-delivered']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.admin.orders)[':id']['fulfillments'][':fulfillment_id']['mark-as-delivered']['$post']
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
    getPostAdminOrdersIdFulfillmentsFulfillmentIdMarkAsDeliveredMutationOptions<
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

export function getPostAdminOrdersIdFulfillmentsFulfillmentIdShipmentsMutationKey() {
  return ['admin', '/admin/orders/:id/fulfillments/:fulfillment_id/shipments', 'POST'] as const
}

export function getPostAdminOrdersIdFulfillmentsFulfillmentIdShipmentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.admin.orders)[':id']['fulfillments'][':fulfillment_id']['shipments']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.admin.orders)[':id']['fulfillments'][':fulfillment_id']['shipments']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAdminOrdersIdFulfillmentsFulfillmentIdShipmentsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.admin.orders)[':id']['fulfillments'][':fulfillment_id']['shipments']['$post']
      >,
    ) {
      return parseResponse(
        client.admin.orders[':id'].fulfillments[':fulfillment_id'].shipments.$post(args, options),
      )
    },
  })
}

export function usePostAdminOrdersIdFulfillmentsFulfillmentIdShipments<
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
                    (typeof client.admin.orders)[':id']['fulfillments'][':fulfillment_id']['shipments']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.admin.orders)[':id']['fulfillments'][':fulfillment_id']['shipments']['$post']
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
  const mutationDefaults = getPostAdminOrdersIdFulfillmentsFulfillmentIdShipmentsMutationOptions<
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

export function getAdminOrdersIdLineItemsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.admin.orders)[':id']['line-items']['$get']>
  >,
) {
  return ['admin', '/admin/orders/:id/line-items', toValue(args)] as const
}

export function getAdminOrdersIdLineItemsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.admin.orders)[':id']['line-items']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdminOrdersIdLineItemsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.admin.orders[':id']['line-items'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdminOrdersIdLineItems<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.admin.orders)[':id']['line-items']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.admin.orders)[':id']['line-items']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin.orders)[':id']['line-items']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin.orders)[':id']['line-items']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAdminOrdersIdLineItemsQueryKey>
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
          Awaited<ReturnType<(typeof client.admin.orders)[':id']['line-items']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminOrdersIdLineItemsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdminOrdersIdLineItemsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.admin.orders[':id']['line-items'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAdminOrdersIdPaymentSessionsAuthorizeMutationKey() {
  return ['admin', '/admin/orders/:id/payment-sessions/authorize', 'POST'] as const
}

export function getPostAdminOrdersIdPaymentSessionsAuthorizeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.admin.orders)[':id']['payment-sessions']['authorize']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.admin.orders)[':id']['payment-sessions']['authorize']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminOrdersIdPaymentSessionsAuthorizeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.admin.orders)[':id']['payment-sessions']['authorize']['$post']
      >,
    ) {
      return parseResponse(
        client.admin.orders[':id']['payment-sessions'].authorize.$post(args, options),
      )
    },
  })
}

export function usePostAdminOrdersIdPaymentSessionsAuthorize<
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
                    (typeof client.admin.orders)[':id']['payment-sessions']['authorize']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.admin.orders)[':id']['payment-sessions']['authorize']['$post']
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
  const mutationDefaults = getPostAdminOrdersIdPaymentSessionsAuthorizeMutationOptions<
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

export function getAdminOrdersIdPreviewQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.admin.orders)[':id']['preview']['$get']>>,
) {
  return ['admin', '/admin/orders/:id/preview', toValue(args)] as const
}

export function getAdminOrdersIdPreviewQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.admin.orders)[':id']['preview']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdminOrdersIdPreviewQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.admin.orders[':id'].preview.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdminOrdersIdPreview<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.admin.orders)[':id']['preview']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.admin.orders)[':id']['preview']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin.orders)[':id']['preview']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin.orders)[':id']['preview']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAdminOrdersIdPreviewQueryKey>
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
          Awaited<ReturnType<(typeof client.admin.orders)[':id']['preview']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminOrdersIdPreviewQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdminOrdersIdPreviewQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.admin.orders[':id'].preview.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAdminOrdersIdShippingOptionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.admin.orders)[':id']['shipping-options']['$get']>
  >,
) {
  return ['admin', '/admin/orders/:id/shipping-options', toValue(args)] as const
}

export function getAdminOrdersIdShippingOptionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.admin.orders)[':id']['shipping-options']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdminOrdersIdShippingOptionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.admin.orders[':id']['shipping-options'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdminOrdersIdShippingOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.admin.orders)[':id']['shipping-options']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.admin.orders)[':id']['shipping-options']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin.orders)[':id']['shipping-options']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin.orders)[':id']['shipping-options']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAdminOrdersIdShippingOptionsQueryKey>
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
          Awaited<ReturnType<(typeof client.admin.orders)[':id']['shipping-options']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminOrdersIdShippingOptionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdminOrdersIdShippingOptionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.admin.orders[':id']['shipping-options'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAdminOrdersIdTransferMutationKey() {
  return ['admin', '/admin/orders/:id/transfer', 'POST'] as const
}

export function getPostAdminOrdersIdTransferMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin.orders)[':id']['transfer']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.admin.orders)[':id']['transfer']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminOrdersIdTransferMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.admin.orders)[':id']['transfer']['$post']>,
    ) {
      return parseResponse(client.admin.orders[':id'].transfer.$post(args, options))
    },
  })
}

export function usePostAdminOrdersIdTransfer<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin.orders)[':id']['transfer']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.admin.orders)[':id']['transfer']['$post']>,
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
  const mutationDefaults = getPostAdminOrdersIdTransferMutationOptions<TError, TOnMutateResult>(
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

export function getPostAdminOrdersIdTransferCancelMutationKey() {
  return ['admin', '/admin/orders/:id/transfer/cancel', 'POST'] as const
}

export function getPostAdminOrdersIdTransferCancelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin.orders)[':id']['transfer']['cancel']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.admin.orders)[':id']['transfer']['cancel']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminOrdersIdTransferCancelMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.admin.orders)[':id']['transfer']['cancel']['$post']>,
    ) {
      return parseResponse(client.admin.orders[':id'].transfer.cancel.$post(args, options))
    },
  })
}

export function usePostAdminOrdersIdTransferCancel<
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
                  ReturnType<(typeof client.admin.orders)[':id']['transfer']['cancel']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.admin.orders)[':id']['transfer']['cancel']['$post']>,
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
  const mutationDefaults = getPostAdminOrdersIdTransferCancelMutationOptions<
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

export function getPostAdminOrdersIdTransferGuestMutationKey() {
  return ['admin', '/admin/orders/:id/transfer/guest', 'POST'] as const
}

export function getPostAdminOrdersIdTransferGuestMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin.orders)[':id']['transfer']['guest']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.admin.orders)[':id']['transfer']['guest']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminOrdersIdTransferGuestMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.admin.orders)[':id']['transfer']['guest']['$post']>,
    ) {
      return parseResponse(client.admin.orders[':id'].transfer.guest.$post(args, options))
    },
  })
}

export function usePostAdminOrdersIdTransferGuest<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.admin.orders)[':id']['transfer']['guest']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.admin.orders)[':id']['transfer']['guest']['$post']>,
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
  const mutationDefaults = getPostAdminOrdersIdTransferGuestMutationOptions<
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

export function getPostAdminPaymentCollectionsMutationKey() {
  return ['admin', '/admin/payment-collections', 'POST'] as const
}

export function getPostAdminPaymentCollectionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin)['payment-collections']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.admin)['payment-collections']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminPaymentCollectionsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.admin)['payment-collections']['$post']>,
    ) {
      return parseResponse(client.admin['payment-collections'].$post(args, options))
    },
  })
}

export function usePostAdminPaymentCollections<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin)['payment-collections']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.admin)['payment-collections']['$post']>,
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
  const mutationDefaults = getPostAdminPaymentCollectionsMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteAdminPaymentCollectionsIdMutationKey() {
  return ['admin', '/admin/payment-collections/:id', 'DELETE'] as const
}

export function getDeleteAdminPaymentCollectionsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin)['payment-collections'][':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.admin)['payment-collections'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAdminPaymentCollectionsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.admin)['payment-collections'][':id']['$delete']>,
    ) {
      return parseResponse(client.admin['payment-collections'][':id'].$delete(args, options))
    },
  })
}

export function useDeleteAdminPaymentCollectionsId<
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
                Awaited<ReturnType<(typeof client.admin)['payment-collections'][':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.admin)['payment-collections'][':id']['$delete']>,
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
  const mutationDefaults = getDeleteAdminPaymentCollectionsIdMutationOptions<
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

export function getPostAdminPaymentCollectionsIdMarkAsPaidMutationKey() {
  return ['admin', '/admin/payment-collections/:id/mark-as-paid', 'POST'] as const
}

export function getPostAdminPaymentCollectionsIdMarkAsPaidMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.admin)['payment-collections'][':id']['mark-as-paid']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.admin)['payment-collections'][':id']['mark-as-paid']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminPaymentCollectionsIdMarkAsPaidMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.admin)['payment-collections'][':id']['mark-as-paid']['$post']
      >,
    ) {
      return parseResponse(
        client.admin['payment-collections'][':id']['mark-as-paid'].$post(args, options),
      )
    },
  })
}

export function usePostAdminPaymentCollectionsIdMarkAsPaid<
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
                    (typeof client.admin)['payment-collections'][':id']['mark-as-paid']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.admin)['payment-collections'][':id']['mark-as-paid']['$post']
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
  const mutationDefaults = getPostAdminPaymentCollectionsIdMarkAsPaidMutationOptions<
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

export function getPostAdminPaymentCollectionsIdPaymentSessionsMutationKey() {
  return ['admin', '/admin/payment-collections/:id/payment-sessions', 'POST'] as const
}

export function getPostAdminPaymentCollectionsIdPaymentSessionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.admin)['payment-collections'][':id']['payment-sessions']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.admin)['payment-collections'][':id']['payment-sessions']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAdminPaymentCollectionsIdPaymentSessionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.admin)['payment-collections'][':id']['payment-sessions']['$post']
      >,
    ) {
      return parseResponse(
        client.admin['payment-collections'][':id']['payment-sessions'].$post(args, options),
      )
    },
  })
}

export function usePostAdminPaymentCollectionsIdPaymentSessions<
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
                    (typeof client.admin)['payment-collections'][':id']['payment-sessions']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.admin)['payment-collections'][':id']['payment-sessions']['$post']
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
  const mutationDefaults = getPostAdminPaymentCollectionsIdPaymentSessionsMutationOptions<
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

export function getAdminPaymentsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.admin.payments.$get>>,
) {
  return ['admin', '/admin/payments', toValue(args)] as const
}

export function getAdminPaymentsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.admin.payments.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdminPaymentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.admin.payments.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdminPayments<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.payments.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.admin.payments.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.payments.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.payments.$get>>>>
          >,
          ReturnType<typeof getAdminPaymentsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.payments.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAdminPaymentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdminPaymentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.admin.payments.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAdminPaymentsPaymentProvidersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.admin.payments)['payment-providers']['$get']>
  >,
) {
  return ['admin', '/admin/payments/payment-providers', toValue(args)] as const
}

export function getAdminPaymentsPaymentProvidersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.admin.payments)['payment-providers']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdminPaymentsPaymentProvidersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.admin.payments['payment-providers'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdminPaymentsPaymentProviders<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.admin.payments)['payment-providers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.admin.payments)['payment-providers']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin.payments)['payment-providers']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin.payments)['payment-providers']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAdminPaymentsPaymentProvidersQueryKey>
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
          Awaited<ReturnType<(typeof client.admin.payments)['payment-providers']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminPaymentsPaymentProvidersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdminPaymentsPaymentProvidersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.admin.payments['payment-providers'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAdminPaymentsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.admin.payments)[':id']['$get']>>,
) {
  return ['admin', '/admin/payments/:id', toValue(args)] as const
}

export function getAdminPaymentsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.admin.payments)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdminPaymentsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.admin.payments[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdminPaymentsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.admin.payments)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.admin.payments)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin.payments)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin.payments)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAdminPaymentsIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.admin.payments)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminPaymentsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdminPaymentsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.admin.payments[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAdminPaymentsIdCaptureMutationKey() {
  return ['admin', '/admin/payments/:id/capture', 'POST'] as const
}

export function getPostAdminPaymentsIdCaptureMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin.payments)[':id']['capture']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.admin.payments)[':id']['capture']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminPaymentsIdCaptureMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.admin.payments)[':id']['capture']['$post']>,
    ) {
      return parseResponse(client.admin.payments[':id'].capture.$post(args, options))
    },
  })
}

export function usePostAdminPaymentsIdCapture<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin.payments)[':id']['capture']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.admin.payments)[':id']['capture']['$post']>,
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
  const mutationDefaults = getPostAdminPaymentsIdCaptureMutationOptions<TError, TOnMutateResult>(
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

export function getPostAdminPaymentsIdRefundMutationKey() {
  return ['admin', '/admin/payments/:id/refund', 'POST'] as const
}

export function getPostAdminPaymentsIdRefundMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin.payments)[':id']['refund']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.admin.payments)[':id']['refund']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminPaymentsIdRefundMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.admin.payments)[':id']['refund']['$post']>,
    ) {
      return parseResponse(client.admin.payments[':id'].refund.$post(args, options))
    },
  })
}

export function usePostAdminPaymentsIdRefund<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin.payments)[':id']['refund']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.admin.payments)[':id']['refund']['$post']>,
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
  const mutationDefaults = getPostAdminPaymentsIdRefundMutationOptions<TError, TOnMutateResult>(
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

export function getAdminPluginsQueryKey() {
  return ['admin', '/admin/plugins'] as const
}

export function getAdminPluginsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getAdminPluginsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.admin.plugins.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useAdminPlugins<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.plugins.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.plugins.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.plugins.$get>>>>
          >,
          ReturnType<typeof getAdminPluginsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.plugins.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAdminPluginsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getAdminPluginsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.admin.plugins.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAdminPriceListsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.admin)['price-lists']['$get']>>,
) {
  return ['admin', '/admin/price-lists', toValue(args)] as const
}

export function getAdminPriceListsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.admin)['price-lists']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdminPriceListsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.admin['price-lists'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdminPriceLists<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.admin)['price-lists']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.admin)['price-lists']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin)['price-lists']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin)['price-lists']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAdminPriceListsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.admin)['price-lists']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminPriceListsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdminPriceListsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.admin['price-lists'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAdminPriceListsMutationKey() {
  return ['admin', '/admin/price-lists', 'POST'] as const
}

export function getPostAdminPriceListsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.admin)['price-lists']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.admin)['price-lists']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminPriceListsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.admin)['price-lists']['$post']>) {
      return parseResponse(client.admin['price-lists'].$post(args, options))
    },
  })
}

export function usePostAdminPriceLists<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin)['price-lists']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.admin)['price-lists']['$post']>,
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
  const mutationDefaults = getPostAdminPriceListsMutationOptions<TError, TOnMutateResult>(
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

export function getAdminPriceListsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.admin)['price-lists'][':id']['$get']>>,
) {
  return ['admin', '/admin/price-lists/:id', toValue(args)] as const
}

export function getAdminPriceListsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.admin)['price-lists'][':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdminPriceListsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.admin['price-lists'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdminPriceListsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.admin)['price-lists'][':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.admin)['price-lists'][':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin)['price-lists'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin)['price-lists'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAdminPriceListsIdQueryKey>
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
          Awaited<ReturnType<(typeof client.admin)['price-lists'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminPriceListsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdminPriceListsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.admin['price-lists'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAdminPriceListsIdMutationKey() {
  return ['admin', '/admin/price-lists/:id', 'POST'] as const
}

export function getPostAdminPriceListsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin)['price-lists'][':id']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.admin)['price-lists'][':id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminPriceListsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.admin)['price-lists'][':id']['$post']>) {
      return parseResponse(client.admin['price-lists'][':id'].$post(args, options))
    },
  })
}

export function usePostAdminPriceListsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin)['price-lists'][':id']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.admin)['price-lists'][':id']['$post']>,
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
  const mutationDefaults = getPostAdminPriceListsIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteAdminPriceListsIdMutationKey() {
  return ['admin', '/admin/price-lists/:id', 'DELETE'] as const
}

export function getDeleteAdminPriceListsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin)['price-lists'][':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.admin)['price-lists'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAdminPriceListsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.admin)['price-lists'][':id']['$delete']>,
    ) {
      return parseResponse(client.admin['price-lists'][':id'].$delete(args, options))
    },
  })
}

export function useDeleteAdminPriceListsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin)['price-lists'][':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.admin)['price-lists'][':id']['$delete']>,
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
  const mutationDefaults = getDeleteAdminPriceListsIdMutationOptions<TError, TOnMutateResult>(
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

export function getAdminPriceListsIdPricesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.admin)['price-lists'][':id']['prices']['$get']>
  >,
) {
  return ['admin', '/admin/price-lists/:id/prices', toValue(args)] as const
}

export function getAdminPriceListsIdPricesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.admin)['price-lists'][':id']['prices']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdminPriceListsIdPricesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.admin['price-lists'][':id'].prices.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdminPriceListsIdPrices<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.admin)['price-lists'][':id']['prices']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.admin)['price-lists'][':id']['prices']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin)['price-lists'][':id']['prices']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin)['price-lists'][':id']['prices']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAdminPriceListsIdPricesQueryKey>
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
          Awaited<ReturnType<(typeof client.admin)['price-lists'][':id']['prices']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminPriceListsIdPricesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdminPriceListsIdPricesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.admin['price-lists'][':id'].prices.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAdminPriceListsIdPricesBatchMutationKey() {
  return ['admin', '/admin/price-lists/:id/prices/batch', 'POST'] as const
}

export function getPostAdminPriceListsIdPricesBatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.admin)['price-lists'][':id']['prices']['batch']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.admin)['price-lists'][':id']['prices']['batch']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminPriceListsIdPricesBatchMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.admin)['price-lists'][':id']['prices']['batch']['$post']
      >,
    ) {
      return parseResponse(client.admin['price-lists'][':id'].prices.batch.$post(args, options))
    },
  })
}

export function usePostAdminPriceListsIdPricesBatch<
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
                    (typeof client.admin)['price-lists'][':id']['prices']['batch']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.admin)['price-lists'][':id']['prices']['batch']['$post']>,
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
  const mutationDefaults = getPostAdminPriceListsIdPricesBatchMutationOptions<
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

export function getPostAdminPriceListsIdProductsMutationKey() {
  return ['admin', '/admin/price-lists/:id/products', 'POST'] as const
}

export function getPostAdminPriceListsIdProductsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin)['price-lists'][':id']['products']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.admin)['price-lists'][':id']['products']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminPriceListsIdProductsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.admin)['price-lists'][':id']['products']['$post']>,
    ) {
      return parseResponse(client.admin['price-lists'][':id'].products.$post(args, options))
    },
  })
}

export function usePostAdminPriceListsIdProducts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.admin)['price-lists'][':id']['products']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.admin)['price-lists'][':id']['products']['$post']>,
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
  const mutationDefaults = getPostAdminPriceListsIdProductsMutationOptions<TError, TOnMutateResult>(
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

export function getAdminPricePreferencesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.admin)['price-preferences']['$get']>>,
) {
  return ['admin', '/admin/price-preferences', toValue(args)] as const
}

export function getAdminPricePreferencesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.admin)['price-preferences']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdminPricePreferencesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.admin['price-preferences'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdminPricePreferences<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.admin)['price-preferences']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.admin)['price-preferences']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin)['price-preferences']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin)['price-preferences']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAdminPricePreferencesQueryKey>
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
          Awaited<ReturnType<(typeof client.admin)['price-preferences']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminPricePreferencesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdminPricePreferencesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.admin['price-preferences'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAdminPricePreferencesMutationKey() {
  return ['admin', '/admin/price-preferences', 'POST'] as const
}

export function getPostAdminPricePreferencesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin)['price-preferences']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.admin)['price-preferences']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminPricePreferencesMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.admin)['price-preferences']['$post']>) {
      return parseResponse(client.admin['price-preferences'].$post(args, options))
    },
  })
}

export function usePostAdminPricePreferences<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin)['price-preferences']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.admin)['price-preferences']['$post']>,
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
  const mutationDefaults = getPostAdminPricePreferencesMutationOptions<TError, TOnMutateResult>(
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

export function getAdminPricePreferencesIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.admin)['price-preferences'][':id']['$get']>
  >,
) {
  return ['admin', '/admin/price-preferences/:id', toValue(args)] as const
}

export function getAdminPricePreferencesIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.admin)['price-preferences'][':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdminPricePreferencesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.admin['price-preferences'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdminPricePreferencesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.admin)['price-preferences'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.admin)['price-preferences'][':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin)['price-preferences'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin)['price-preferences'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAdminPricePreferencesIdQueryKey>
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
          Awaited<ReturnType<(typeof client.admin)['price-preferences'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminPricePreferencesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdminPricePreferencesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.admin['price-preferences'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAdminPricePreferencesIdMutationKey() {
  return ['admin', '/admin/price-preferences/:id', 'POST'] as const
}

export function getPostAdminPricePreferencesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin)['price-preferences'][':id']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.admin)['price-preferences'][':id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminPricePreferencesIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.admin)['price-preferences'][':id']['$post']>,
    ) {
      return parseResponse(client.admin['price-preferences'][':id'].$post(args, options))
    },
  })
}

export function usePostAdminPricePreferencesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin)['price-preferences'][':id']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.admin)['price-preferences'][':id']['$post']>,
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
  const mutationDefaults = getPostAdminPricePreferencesIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteAdminPricePreferencesIdMutationKey() {
  return ['admin', '/admin/price-preferences/:id', 'DELETE'] as const
}

export function getDeleteAdminPricePreferencesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin)['price-preferences'][':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.admin)['price-preferences'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAdminPricePreferencesIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.admin)['price-preferences'][':id']['$delete']>,
    ) {
      return parseResponse(client.admin['price-preferences'][':id'].$delete(args, options))
    },
  })
}

export function useDeleteAdminPricePreferencesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin)['price-preferences'][':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.admin)['price-preferences'][':id']['$delete']>,
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
  const mutationDefaults = getDeleteAdminPricePreferencesIdMutationOptions<TError, TOnMutateResult>(
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

export function getAdminProductCategoriesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.admin)['product-categories']['$get']>>,
) {
  return ['admin', '/admin/product-categories', toValue(args)] as const
}

export function getAdminProductCategoriesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.admin)['product-categories']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdminProductCategoriesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.admin['product-categories'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdminProductCategories<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.admin)['product-categories']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.admin)['product-categories']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin)['product-categories']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin)['product-categories']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAdminProductCategoriesQueryKey>
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
          Awaited<ReturnType<(typeof client.admin)['product-categories']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminProductCategoriesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdminProductCategoriesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.admin['product-categories'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAdminProductCategoriesMutationKey() {
  return ['admin', '/admin/product-categories', 'POST'] as const
}

export function getPostAdminProductCategoriesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin)['product-categories']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.admin)['product-categories']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminProductCategoriesMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.admin)['product-categories']['$post']>) {
      return parseResponse(client.admin['product-categories'].$post(args, options))
    },
  })
}

export function usePostAdminProductCategories<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin)['product-categories']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.admin)['product-categories']['$post']>,
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
  const mutationDefaults = getPostAdminProductCategoriesMutationOptions<TError, TOnMutateResult>(
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

export function getAdminProductCategoriesIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.admin)['product-categories'][':id']['$get']>
  >,
) {
  return ['admin', '/admin/product-categories/:id', toValue(args)] as const
}

export function getAdminProductCategoriesIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.admin)['product-categories'][':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdminProductCategoriesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.admin['product-categories'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdminProductCategoriesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.admin)['product-categories'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.admin)['product-categories'][':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin)['product-categories'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin)['product-categories'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAdminProductCategoriesIdQueryKey>
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
          Awaited<ReturnType<(typeof client.admin)['product-categories'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminProductCategoriesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdminProductCategoriesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.admin['product-categories'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAdminProductCategoriesIdMutationKey() {
  return ['admin', '/admin/product-categories/:id', 'POST'] as const
}

export function getPostAdminProductCategoriesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin)['product-categories'][':id']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.admin)['product-categories'][':id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminProductCategoriesIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.admin)['product-categories'][':id']['$post']>,
    ) {
      return parseResponse(client.admin['product-categories'][':id'].$post(args, options))
    },
  })
}

export function usePostAdminProductCategoriesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin)['product-categories'][':id']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.admin)['product-categories'][':id']['$post']>,
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
  const mutationDefaults = getPostAdminProductCategoriesIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteAdminProductCategoriesIdMutationKey() {
  return ['admin', '/admin/product-categories/:id', 'DELETE'] as const
}

export function getDeleteAdminProductCategoriesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin)['product-categories'][':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.admin)['product-categories'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAdminProductCategoriesIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.admin)['product-categories'][':id']['$delete']>,
    ) {
      return parseResponse(client.admin['product-categories'][':id'].$delete(args, options))
    },
  })
}

export function useDeleteAdminProductCategoriesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin)['product-categories'][':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.admin)['product-categories'][':id']['$delete']>,
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
  const mutationDefaults = getDeleteAdminProductCategoriesIdMutationOptions<
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

export function getPostAdminProductCategoriesIdProductsMutationKey() {
  return ['admin', '/admin/product-categories/:id/products', 'POST'] as const
}

export function getPostAdminProductCategoriesIdProductsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.admin)['product-categories'][':id']['products']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.admin)['product-categories'][':id']['products']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminProductCategoriesIdProductsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.admin)['product-categories'][':id']['products']['$post']
      >,
    ) {
      return parseResponse(client.admin['product-categories'][':id'].products.$post(args, options))
    },
  })
}

export function usePostAdminProductCategoriesIdProducts<
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
                    (typeof client.admin)['product-categories'][':id']['products']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.admin)['product-categories'][':id']['products']['$post']>,
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
  const mutationDefaults = getPostAdminProductCategoriesIdProductsMutationOptions<
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

export function getAdminProductOptionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.admin)['product-options']['$get']>>,
) {
  return ['admin', '/admin/product-options', toValue(args)] as const
}

export function getAdminProductOptionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.admin)['product-options']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdminProductOptionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.admin['product-options'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdminProductOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.admin)['product-options']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.admin)['product-options']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin)['product-options']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin)['product-options']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAdminProductOptionsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.admin)['product-options']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminProductOptionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdminProductOptionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.admin['product-options'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAdminProductOptionsMutationKey() {
  return ['admin', '/admin/product-options', 'POST'] as const
}

export function getPostAdminProductOptionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.admin)['product-options']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.admin)['product-options']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminProductOptionsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.admin)['product-options']['$post']>) {
      return parseResponse(client.admin['product-options'].$post(args, options))
    },
  })
}

export function usePostAdminProductOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin)['product-options']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.admin)['product-options']['$post']>,
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
  const mutationDefaults = getPostAdminProductOptionsMutationOptions<TError, TOnMutateResult>(
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

export function getAdminProductOptionsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.admin)['product-options'][':id']['$get']>>,
) {
  return ['admin', '/admin/product-options/:id', toValue(args)] as const
}

export function getAdminProductOptionsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.admin)['product-options'][':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdminProductOptionsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.admin['product-options'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdminProductOptionsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.admin)['product-options'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.admin)['product-options'][':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin)['product-options'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin)['product-options'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAdminProductOptionsIdQueryKey>
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
          Awaited<ReturnType<(typeof client.admin)['product-options'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminProductOptionsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdminProductOptionsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.admin['product-options'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAdminProductOptionsIdMutationKey() {
  return ['admin', '/admin/product-options/:id', 'POST'] as const
}

export function getPostAdminProductOptionsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin)['product-options'][':id']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.admin)['product-options'][':id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminProductOptionsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.admin)['product-options'][':id']['$post']>,
    ) {
      return parseResponse(client.admin['product-options'][':id'].$post(args, options))
    },
  })
}

export function usePostAdminProductOptionsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin)['product-options'][':id']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.admin)['product-options'][':id']['$post']>,
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
  const mutationDefaults = getPostAdminProductOptionsIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteAdminProductOptionsIdMutationKey() {
  return ['admin', '/admin/product-options/:id', 'DELETE'] as const
}

export function getDeleteAdminProductOptionsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin)['product-options'][':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.admin)['product-options'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAdminProductOptionsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.admin)['product-options'][':id']['$delete']>,
    ) {
      return parseResponse(client.admin['product-options'][':id'].$delete(args, options))
    },
  })
}

export function useDeleteAdminProductOptionsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin)['product-options'][':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.admin)['product-options'][':id']['$delete']>,
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
  const mutationDefaults = getDeleteAdminProductOptionsIdMutationOptions<TError, TOnMutateResult>(
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

export function getAdminProductOptionsIdValuesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.admin)['product-options'][':id']['values']['$get']>
  >,
) {
  return ['admin', '/admin/product-options/:id/values', toValue(args)] as const
}

export function getAdminProductOptionsIdValuesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.admin)['product-options'][':id']['values']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdminProductOptionsIdValuesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.admin['product-options'][':id'].values.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdminProductOptionsIdValues<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.admin)['product-options'][':id']['values']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.admin)['product-options'][':id']['values']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.admin)['product-options'][':id']['values']['$get']>
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
                  ReturnType<(typeof client.admin)['product-options'][':id']['values']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getAdminProductOptionsIdValuesQueryKey>
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
          Awaited<ReturnType<(typeof client.admin)['product-options'][':id']['values']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminProductOptionsIdValuesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdminProductOptionsIdValuesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.admin['product-options'][':id'].values.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAdminProductOptionsIdValuesValueIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.admin)['product-options'][':id']['values'][':value_id']['$get']>
  >,
) {
  return ['admin', '/admin/product-options/:id/values/:value_id', toValue(args)] as const
}

export function getAdminProductOptionsIdValuesValueIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.admin)['product-options'][':id']['values'][':value_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdminProductOptionsIdValuesValueIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.admin['product-options'][':id'].values[':value_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdminProductOptionsIdValuesValueId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.admin)['product-options'][':id']['values'][':value_id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.admin)['product-options'][':id']['values'][':value_id']['$get']>
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
                    (typeof client.admin)['product-options'][':id']['values'][':value_id']['$get']
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
                    (typeof client.admin)['product-options'][':id']['values'][':value_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAdminProductOptionsIdValuesValueIdQueryKey>
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
              (typeof client.admin)['product-options'][':id']['values'][':value_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminProductOptionsIdValuesValueIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdminProductOptionsIdValuesValueIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.admin['product-options'][':id'].values[':value_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAdminProductOptionsIdValuesValueIdMutationKey() {
  return ['admin', '/admin/product-options/:id/values/:value_id', 'POST'] as const
}

export function getPostAdminProductOptionsIdValuesValueIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.admin)['product-options'][':id']['values'][':value_id']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.admin)['product-options'][':id']['values'][':value_id']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAdminProductOptionsIdValuesValueIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.admin)['product-options'][':id']['values'][':value_id']['$post']
      >,
    ) {
      return parseResponse(
        client.admin['product-options'][':id'].values[':value_id'].$post(args, options),
      )
    },
  })
}

export function usePostAdminProductOptionsIdValuesValueId<
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
                    (typeof client.admin)['product-options'][':id']['values'][':value_id']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.admin)['product-options'][':id']['values'][':value_id']['$post']
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
  const mutationDefaults = getPostAdminProductOptionsIdValuesValueIdMutationOptions<
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

export function getDeleteAdminProductOptionsIdValuesValueIdMutationKey() {
  return ['admin', '/admin/product-options/:id/values/:value_id', 'DELETE'] as const
}

export function getDeleteAdminProductOptionsIdValuesValueIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.admin)['product-options'][':id']['values'][':value_id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.admin)['product-options'][':id']['values'][':value_id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteAdminProductOptionsIdValuesValueIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.admin)['product-options'][':id']['values'][':value_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.admin['product-options'][':id'].values[':value_id'].$delete(args, options),
      )
    },
  })
}

export function useDeleteAdminProductOptionsIdValuesValueId<
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
                    (typeof client.admin)['product-options'][':id']['values'][':value_id']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.admin)['product-options'][':id']['values'][':value_id']['$delete']
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
  const mutationDefaults = getDeleteAdminProductOptionsIdValuesValueIdMutationOptions<
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

export function getAdminProductTagsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.admin)['product-tags']['$get']>>,
) {
  return ['admin', '/admin/product-tags', toValue(args)] as const
}

export function getAdminProductTagsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.admin)['product-tags']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdminProductTagsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.admin['product-tags'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdminProductTags<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.admin)['product-tags']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.admin)['product-tags']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin)['product-tags']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin)['product-tags']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAdminProductTagsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.admin)['product-tags']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminProductTagsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdminProductTagsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.admin['product-tags'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAdminProductTagsMutationKey() {
  return ['admin', '/admin/product-tags', 'POST'] as const
}

export function getPostAdminProductTagsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.admin)['product-tags']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.admin)['product-tags']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminProductTagsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.admin)['product-tags']['$post']>) {
      return parseResponse(client.admin['product-tags'].$post(args, options))
    },
  })
}

export function usePostAdminProductTags<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin)['product-tags']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.admin)['product-tags']['$post']>,
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
  const mutationDefaults = getPostAdminProductTagsMutationOptions<TError, TOnMutateResult>(
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

export function getAdminProductTagsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.admin)['product-tags'][':id']['$get']>>,
) {
  return ['admin', '/admin/product-tags/:id', toValue(args)] as const
}

export function getAdminProductTagsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.admin)['product-tags'][':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdminProductTagsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.admin['product-tags'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdminProductTagsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.admin)['product-tags'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.admin)['product-tags'][':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin)['product-tags'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin)['product-tags'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAdminProductTagsIdQueryKey>
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
          Awaited<ReturnType<(typeof client.admin)['product-tags'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminProductTagsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdminProductTagsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.admin['product-tags'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAdminProductTagsIdMutationKey() {
  return ['admin', '/admin/product-tags/:id', 'POST'] as const
}

export function getPostAdminProductTagsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin)['product-tags'][':id']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.admin)['product-tags'][':id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminProductTagsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.admin)['product-tags'][':id']['$post']>,
    ) {
      return parseResponse(client.admin['product-tags'][':id'].$post(args, options))
    },
  })
}

export function usePostAdminProductTagsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin)['product-tags'][':id']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.admin)['product-tags'][':id']['$post']>,
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
  const mutationDefaults = getPostAdminProductTagsIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteAdminProductTagsIdMutationKey() {
  return ['admin', '/admin/product-tags/:id', 'DELETE'] as const
}

export function getDeleteAdminProductTagsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin)['product-tags'][':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.admin)['product-tags'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAdminProductTagsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.admin)['product-tags'][':id']['$delete']>,
    ) {
      return parseResponse(client.admin['product-tags'][':id'].$delete(args, options))
    },
  })
}

export function useDeleteAdminProductTagsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin)['product-tags'][':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.admin)['product-tags'][':id']['$delete']>,
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
  const mutationDefaults = getDeleteAdminProductTagsIdMutationOptions<TError, TOnMutateResult>(
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

export function getAdminProductTypesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.admin)['product-types']['$get']>>,
) {
  return ['admin', '/admin/product-types', toValue(args)] as const
}

export function getAdminProductTypesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.admin)['product-types']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdminProductTypesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.admin['product-types'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdminProductTypes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.admin)['product-types']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.admin)['product-types']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin)['product-types']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin)['product-types']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAdminProductTypesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.admin)['product-types']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminProductTypesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdminProductTypesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.admin['product-types'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAdminProductTypesMutationKey() {
  return ['admin', '/admin/product-types', 'POST'] as const
}

export function getPostAdminProductTypesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.admin)['product-types']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.admin)['product-types']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminProductTypesMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.admin)['product-types']['$post']>) {
      return parseResponse(client.admin['product-types'].$post(args, options))
    },
  })
}

export function usePostAdminProductTypes<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin)['product-types']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.admin)['product-types']['$post']>,
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
  const mutationDefaults = getPostAdminProductTypesMutationOptions<TError, TOnMutateResult>(
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

export function getAdminProductTypesIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.admin)['product-types'][':id']['$get']>>,
) {
  return ['admin', '/admin/product-types/:id', toValue(args)] as const
}

export function getAdminProductTypesIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.admin)['product-types'][':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdminProductTypesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.admin['product-types'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdminProductTypesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.admin)['product-types'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.admin)['product-types'][':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin)['product-types'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin)['product-types'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAdminProductTypesIdQueryKey>
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
          Awaited<ReturnType<(typeof client.admin)['product-types'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminProductTypesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdminProductTypesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.admin['product-types'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAdminProductTypesIdMutationKey() {
  return ['admin', '/admin/product-types/:id', 'POST'] as const
}

export function getPostAdminProductTypesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin)['product-types'][':id']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.admin)['product-types'][':id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminProductTypesIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.admin)['product-types'][':id']['$post']>,
    ) {
      return parseResponse(client.admin['product-types'][':id'].$post(args, options))
    },
  })
}

export function usePostAdminProductTypesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin)['product-types'][':id']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.admin)['product-types'][':id']['$post']>,
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
  const mutationDefaults = getPostAdminProductTypesIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteAdminProductTypesIdMutationKey() {
  return ['admin', '/admin/product-types/:id', 'DELETE'] as const
}

export function getDeleteAdminProductTypesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin)['product-types'][':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.admin)['product-types'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAdminProductTypesIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.admin)['product-types'][':id']['$delete']>,
    ) {
      return parseResponse(client.admin['product-types'][':id'].$delete(args, options))
    },
  })
}

export function useDeleteAdminProductTypesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin)['product-types'][':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.admin)['product-types'][':id']['$delete']>,
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
  const mutationDefaults = getDeleteAdminProductTypesIdMutationOptions<TError, TOnMutateResult>(
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

export function getAdminProductVariantsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.admin)['product-variants']['$get']>>,
) {
  return ['admin', '/admin/product-variants', toValue(args)] as const
}

export function getAdminProductVariantsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.admin)['product-variants']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdminProductVariantsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.admin['product-variants'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdminProductVariants<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.admin)['product-variants']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.admin)['product-variants']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin)['product-variants']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin)['product-variants']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAdminProductVariantsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.admin)['product-variants']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminProductVariantsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdminProductVariantsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.admin['product-variants'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAdminProductsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.admin.products.$get>>,
) {
  return ['admin', '/admin/products', toValue(args)] as const
}

export function getAdminProductsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.admin.products.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdminProductsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.admin.products.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdminProducts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.products.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.admin.products.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.products.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.products.$get>>>>
          >,
          ReturnType<typeof getAdminProductsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.products.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAdminProductsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdminProductsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.admin.products.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAdminProductsMutationKey() {
  return ['admin', '/admin/products', 'POST'] as const
}

export function getPostAdminProductsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.products.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.admin.products.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminProductsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.admin.products.$post>) {
      return parseResponse(client.admin.products.$post(args, options))
    },
  })
}

export function usePostAdminProducts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.admin.products.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.admin.products.$post>,
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
  const mutationDefaults = getPostAdminProductsMutationOptions<TError, TOnMutateResult>(
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

export function getPostAdminProductsBatchMutationKey() {
  return ['admin', '/admin/products/batch', 'POST'] as const
}

export function getPostAdminProductsBatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.admin.products.batch.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.admin.products.batch.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminProductsBatchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.admin.products.batch.$post>) {
      return parseResponse(client.admin.products.batch.$post(args, options))
    },
  })
}

export function usePostAdminProductsBatch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.admin.products.batch.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.admin.products.batch.$post>,
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
  const mutationDefaults = getPostAdminProductsBatchMutationOptions<TError, TOnMutateResult>(
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

export function getPostAdminProductsExportMutationKey() {
  return ['admin', '/admin/products/export', 'POST'] as const
}

export function getPostAdminProductsExportMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.admin.products.export.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.admin.products.export.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminProductsExportMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.admin.products.export.$post>) {
      return parseResponse(client.admin.products.export.$post(args, options))
    },
  })
}

export function usePostAdminProductsExport<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.admin.products.export.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.admin.products.export.$post>,
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
  const mutationDefaults = getPostAdminProductsExportMutationOptions<TError, TOnMutateResult>(
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

export function getPostAdminProductsImportMutationKey() {
  return ['admin', '/admin/products/import', 'POST'] as const
}

export function getPostAdminProductsImportMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.admin.products.import.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.admin.products.import.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminProductsImportMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.admin.products.import.$post>) {
      return parseResponse(client.admin.products.import.$post(args, options))
    },
  })
}

export function usePostAdminProductsImport<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.admin.products.import.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.admin.products.import.$post>,
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
  const mutationDefaults = getPostAdminProductsImportMutationOptions<TError, TOnMutateResult>(
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

export function getPostAdminProductsImportTransactionIdConfirmMutationKey() {
  return ['admin', '/admin/products/import/:transaction_id/confirm', 'POST'] as const
}

export function getPostAdminProductsImportTransactionIdConfirmMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.admin.products.import)[':transaction_id']['confirm']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.admin.products.import)[':transaction_id']['confirm']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminProductsImportTransactionIdConfirmMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.admin.products.import)[':transaction_id']['confirm']['$post']
      >,
    ) {
      return parseResponse(
        client.admin.products.import[':transaction_id'].confirm.$post(args, options),
      )
    },
  })
}

export function usePostAdminProductsImportTransactionIdConfirm<
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
                    (typeof client.admin.products.import)[':transaction_id']['confirm']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.admin.products.import)[':transaction_id']['confirm']['$post']
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
  const mutationDefaults = getPostAdminProductsImportTransactionIdConfirmMutationOptions<
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

export function getPostAdminProductsImportsMutationKey() {
  return ['admin', '/admin/products/imports', 'POST'] as const
}

export function getPostAdminProductsImportsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.admin.products.imports.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.admin.products.imports.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminProductsImportsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.admin.products.imports.$post>) {
      return parseResponse(client.admin.products.imports.$post(args, options))
    },
  })
}

export function usePostAdminProductsImports<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.admin.products.imports.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.admin.products.imports.$post>,
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
  const mutationDefaults = getPostAdminProductsImportsMutationOptions<TError, TOnMutateResult>(
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

export function getPostAdminProductsImportsTransactionIdConfirmMutationKey() {
  return ['admin', '/admin/products/imports/:transaction_id/confirm', 'POST'] as const
}

export function getPostAdminProductsImportsTransactionIdConfirmMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.admin.products.imports)[':transaction_id']['confirm']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.admin.products.imports)[':transaction_id']['confirm']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminProductsImportsTransactionIdConfirmMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.admin.products.imports)[':transaction_id']['confirm']['$post']
      >,
    ) {
      return parseResponse(
        client.admin.products.imports[':transaction_id'].confirm.$post(args, options),
      )
    },
  })
}

export function usePostAdminProductsImportsTransactionIdConfirm<
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
                    (typeof client.admin.products.imports)[':transaction_id']['confirm']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.admin.products.imports)[':transaction_id']['confirm']['$post']
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
  const mutationDefaults = getPostAdminProductsImportsTransactionIdConfirmMutationOptions<
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

export function getAdminProductsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.admin.products)[':id']['$get']>>,
) {
  return ['admin', '/admin/products/:id', toValue(args)] as const
}

export function getAdminProductsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.admin.products)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdminProductsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.admin.products[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdminProductsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.admin.products)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.admin.products)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin.products)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin.products)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAdminProductsIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.admin.products)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminProductsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdminProductsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.admin.products[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAdminProductsIdMutationKey() {
  return ['admin', '/admin/products/:id', 'POST'] as const
}

export function getPostAdminProductsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.admin.products)[':id']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.admin.products)[':id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminProductsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.admin.products)[':id']['$post']>) {
      return parseResponse(client.admin.products[':id'].$post(args, options))
    },
  })
}

export function usePostAdminProductsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin.products)[':id']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.admin.products)[':id']['$post']>,
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
  const mutationDefaults = getPostAdminProductsIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteAdminProductsIdMutationKey() {
  return ['admin', '/admin/products/:id', 'DELETE'] as const
}

export function getDeleteAdminProductsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.admin.products)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.admin.products)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAdminProductsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.admin.products)[':id']['$delete']>) {
      return parseResponse(client.admin.products[':id'].$delete(args, options))
    },
  })
}

export function useDeleteAdminProductsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin.products)[':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.admin.products)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteAdminProductsIdMutationOptions<TError, TOnMutateResult>(
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

export function getPostAdminProductsIdImagesImageIdVariantsBatchMutationKey() {
  return ['admin', '/admin/products/:id/images/:image_id/variants/batch', 'POST'] as const
}

export function getPostAdminProductsIdImagesImageIdVariantsBatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.admin.products)[':id']['images'][':image_id']['variants']['batch']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.admin.products)[':id']['images'][':image_id']['variants']['batch']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAdminProductsIdImagesImageIdVariantsBatchMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.admin.products)[':id']['images'][':image_id']['variants']['batch']['$post']
      >,
    ) {
      return parseResponse(
        client.admin.products[':id'].images[':image_id'].variants.batch.$post(args, options),
      )
    },
  })
}

export function usePostAdminProductsIdImagesImageIdVariantsBatch<
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
                    (typeof client.admin.products)[':id']['images'][':image_id']['variants']['batch']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.admin.products)[':id']['images'][':image_id']['variants']['batch']['$post']
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
  const mutationDefaults = getPostAdminProductsIdImagesImageIdVariantsBatchMutationOptions<
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

export function getAdminProductsIdOptionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.admin.products)[':id']['options']['$get']>
  >,
) {
  return ['admin', '/admin/products/:id/options', toValue(args)] as const
}

export function getAdminProductsIdOptionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.admin.products)[':id']['options']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdminProductsIdOptionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.admin.products[':id'].options.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdminProductsIdOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.admin.products)[':id']['options']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.admin.products)[':id']['options']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin.products)[':id']['options']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin.products)[':id']['options']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAdminProductsIdOptionsQueryKey>
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
          Awaited<ReturnType<(typeof client.admin.products)[':id']['options']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminProductsIdOptionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdminProductsIdOptionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.admin.products[':id'].options.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAdminProductsIdOptionsBatchMutationKey() {
  return ['admin', '/admin/products/:id/options/batch', 'POST'] as const
}

export function getPostAdminProductsIdOptionsBatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin.products)[':id']['options']['batch']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.admin.products)[':id']['options']['batch']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminProductsIdOptionsBatchMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.admin.products)[':id']['options']['batch']['$post']>,
    ) {
      return parseResponse(client.admin.products[':id'].options.batch.$post(args, options))
    },
  })
}

export function usePostAdminProductsIdOptionsBatch<
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
                  ReturnType<(typeof client.admin.products)[':id']['options']['batch']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.admin.products)[':id']['options']['batch']['$post']>,
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
  const mutationDefaults = getPostAdminProductsIdOptionsBatchMutationOptions<
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

export function getAdminProductsIdVariantsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.admin.products)[':id']['variants']['$get']>
  >,
) {
  return ['admin', '/admin/products/:id/variants', toValue(args)] as const
}

export function getAdminProductsIdVariantsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.admin.products)[':id']['variants']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdminProductsIdVariantsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.admin.products[':id'].variants.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdminProductsIdVariants<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.admin.products)[':id']['variants']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.admin.products)[':id']['variants']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin.products)[':id']['variants']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin.products)[':id']['variants']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAdminProductsIdVariantsQueryKey>
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
          Awaited<ReturnType<(typeof client.admin.products)[':id']['variants']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminProductsIdVariantsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdminProductsIdVariantsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.admin.products[':id'].variants.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAdminProductsIdVariantsMutationKey() {
  return ['admin', '/admin/products/:id/variants', 'POST'] as const
}

export function getPostAdminProductsIdVariantsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin.products)[':id']['variants']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.admin.products)[':id']['variants']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminProductsIdVariantsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.admin.products)[':id']['variants']['$post']>,
    ) {
      return parseResponse(client.admin.products[':id'].variants.$post(args, options))
    },
  })
}

export function usePostAdminProductsIdVariants<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin.products)[':id']['variants']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.admin.products)[':id']['variants']['$post']>,
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
  const mutationDefaults = getPostAdminProductsIdVariantsMutationOptions<TError, TOnMutateResult>(
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

export function getPostAdminProductsIdVariantsBatchMutationKey() {
  return ['admin', '/admin/products/:id/variants/batch', 'POST'] as const
}

export function getPostAdminProductsIdVariantsBatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin.products)[':id']['variants']['batch']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.admin.products)[':id']['variants']['batch']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminProductsIdVariantsBatchMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.admin.products)[':id']['variants']['batch']['$post']>,
    ) {
      return parseResponse(client.admin.products[':id'].variants.batch.$post(args, options))
    },
  })
}

export function usePostAdminProductsIdVariantsBatch<
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
                  ReturnType<(typeof client.admin.products)[':id']['variants']['batch']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.admin.products)[':id']['variants']['batch']['$post']>,
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
  const mutationDefaults = getPostAdminProductsIdVariantsBatchMutationOptions<
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

export function getPostAdminProductsIdVariantsInventoryItemsBatchMutationKey() {
  return ['admin', '/admin/products/:id/variants/inventory-items/batch', 'POST'] as const
}

export function getPostAdminProductsIdVariantsInventoryItemsBatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.admin.products)[':id']['variants']['inventory-items']['batch']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.admin.products)[':id']['variants']['inventory-items']['batch']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAdminProductsIdVariantsInventoryItemsBatchMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.admin.products)[':id']['variants']['inventory-items']['batch']['$post']
      >,
    ) {
      return parseResponse(
        client.admin.products[':id'].variants['inventory-items'].batch.$post(args, options),
      )
    },
  })
}

export function usePostAdminProductsIdVariantsInventoryItemsBatch<
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
                    (typeof client.admin.products)[':id']['variants']['inventory-items']['batch']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.admin.products)[':id']['variants']['inventory-items']['batch']['$post']
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
  const mutationDefaults = getPostAdminProductsIdVariantsInventoryItemsBatchMutationOptions<
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

export function getAdminProductsIdVariantsVariantIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.admin.products)[':id']['variants'][':variant_id']['$get']>
  >,
) {
  return ['admin', '/admin/products/:id/variants/:variant_id', toValue(args)] as const
}

export function getAdminProductsIdVariantsVariantIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.admin.products)[':id']['variants'][':variant_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdminProductsIdVariantsVariantIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.admin.products[':id'].variants[':variant_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdminProductsIdVariantsVariantId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.admin.products)[':id']['variants'][':variant_id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.admin.products)[':id']['variants'][':variant_id']['$get']>
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
                    (typeof client.admin.products)[':id']['variants'][':variant_id']['$get']
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
                    (typeof client.admin.products)[':id']['variants'][':variant_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAdminProductsIdVariantsVariantIdQueryKey>
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
            ReturnType<(typeof client.admin.products)[':id']['variants'][':variant_id']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminProductsIdVariantsVariantIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdminProductsIdVariantsVariantIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.admin.products[':id'].variants[':variant_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAdminProductsIdVariantsVariantIdMutationKey() {
  return ['admin', '/admin/products/:id/variants/:variant_id', 'POST'] as const
}

export function getPostAdminProductsIdVariantsVariantIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.admin.products)[':id']['variants'][':variant_id']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.admin.products)[':id']['variants'][':variant_id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminProductsIdVariantsVariantIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.admin.products)[':id']['variants'][':variant_id']['$post']
      >,
    ) {
      return parseResponse(
        client.admin.products[':id'].variants[':variant_id'].$post(args, options),
      )
    },
  })
}

export function usePostAdminProductsIdVariantsVariantId<
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
                    (typeof client.admin.products)[':id']['variants'][':variant_id']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.admin.products)[':id']['variants'][':variant_id']['$post']
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
  const mutationDefaults = getPostAdminProductsIdVariantsVariantIdMutationOptions<
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

export function getDeleteAdminProductsIdVariantsVariantIdMutationKey() {
  return ['admin', '/admin/products/:id/variants/:variant_id', 'DELETE'] as const
}

export function getDeleteAdminProductsIdVariantsVariantIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.admin.products)[':id']['variants'][':variant_id']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.admin.products)[':id']['variants'][':variant_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAdminProductsIdVariantsVariantIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.admin.products)[':id']['variants'][':variant_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.admin.products[':id'].variants[':variant_id'].$delete(args, options),
      )
    },
  })
}

export function useDeleteAdminProductsIdVariantsVariantId<
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
                    (typeof client.admin.products)[':id']['variants'][':variant_id']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.admin.products)[':id']['variants'][':variant_id']['$delete']
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
  const mutationDefaults = getDeleteAdminProductsIdVariantsVariantIdMutationOptions<
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

export function getPostAdminProductsIdVariantsVariantIdImagesBatchMutationKey() {
  return ['admin', '/admin/products/:id/variants/:variant_id/images/batch', 'POST'] as const
}

export function getPostAdminProductsIdVariantsVariantIdImagesBatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.admin.products)[':id']['variants'][':variant_id']['images']['batch']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.admin.products)[':id']['variants'][':variant_id']['images']['batch']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAdminProductsIdVariantsVariantIdImagesBatchMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.admin.products)[':id']['variants'][':variant_id']['images']['batch']['$post']
      >,
    ) {
      return parseResponse(
        client.admin.products[':id'].variants[':variant_id'].images.batch.$post(args, options),
      )
    },
  })
}

export function usePostAdminProductsIdVariantsVariantIdImagesBatch<
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
                    (typeof client.admin.products)[':id']['variants'][':variant_id']['images']['batch']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.admin.products)[':id']['variants'][':variant_id']['images']['batch']['$post']
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
  const mutationDefaults = getPostAdminProductsIdVariantsVariantIdImagesBatchMutationOptions<
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

export function getPostAdminProductsIdVariantsVariantIdInventoryItemsMutationKey() {
  return ['admin', '/admin/products/:id/variants/:variant_id/inventory-items', 'POST'] as const
}

export function getPostAdminProductsIdVariantsVariantIdInventoryItemsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.admin.products)[':id']['variants'][':variant_id']['inventory-items']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.admin.products)[':id']['variants'][':variant_id']['inventory-items']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAdminProductsIdVariantsVariantIdInventoryItemsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.admin.products)[':id']['variants'][':variant_id']['inventory-items']['$post']
      >,
    ) {
      return parseResponse(
        client.admin.products[':id'].variants[':variant_id']['inventory-items'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostAdminProductsIdVariantsVariantIdInventoryItems<
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
                    (typeof client.admin.products)[':id']['variants'][':variant_id']['inventory-items']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.admin.products)[':id']['variants'][':variant_id']['inventory-items']['$post']
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
  const mutationDefaults = getPostAdminProductsIdVariantsVariantIdInventoryItemsMutationOptions<
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

export function getPostAdminProductsIdVariantsVariantIdInventoryItemsInventoryItemIdMutationKey() {
  return [
    'admin',
    '/admin/products/:id/variants/:variant_id/inventory-items/:inventory_item_id',
    'POST',
  ] as const
}

export function getPostAdminProductsIdVariantsVariantIdInventoryItemsInventoryItemIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.admin.products)[':id']['variants'][':variant_id']['inventory-items'][':inventory_item_id']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.admin.products)[':id']['variants'][':variant_id']['inventory-items'][':inventory_item_id']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAdminProductsIdVariantsVariantIdInventoryItemsInventoryItemIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.admin.products)[':id']['variants'][':variant_id']['inventory-items'][':inventory_item_id']['$post']
      >,
    ) {
      return parseResponse(
        client.admin.products[':id'].variants[':variant_id']['inventory-items'][
          ':inventory_item_id'
        ].$post(args, options),
      )
    },
  })
}

export function usePostAdminProductsIdVariantsVariantIdInventoryItemsInventoryItemId<
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
                    (typeof client.admin.products)[':id']['variants'][':variant_id']['inventory-items'][':inventory_item_id']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.admin.products)[':id']['variants'][':variant_id']['inventory-items'][':inventory_item_id']['$post']
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
    getPostAdminProductsIdVariantsVariantIdInventoryItemsInventoryItemIdMutationOptions<
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

export function getDeleteAdminProductsIdVariantsVariantIdInventoryItemsInventoryItemIdMutationKey() {
  return [
    'admin',
    '/admin/products/:id/variants/:variant_id/inventory-items/:inventory_item_id',
    'DELETE',
  ] as const
}

export function getDeleteAdminProductsIdVariantsVariantIdInventoryItemsInventoryItemIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.admin.products)[':id']['variants'][':variant_id']['inventory-items'][':inventory_item_id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.admin.products)[':id']['variants'][':variant_id']['inventory-items'][':inventory_item_id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteAdminProductsIdVariantsVariantIdInventoryItemsInventoryItemIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.admin.products)[':id']['variants'][':variant_id']['inventory-items'][':inventory_item_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.admin.products[':id'].variants[':variant_id']['inventory-items'][
          ':inventory_item_id'
        ].$delete(args, options),
      )
    },
  })
}

export function useDeleteAdminProductsIdVariantsVariantIdInventoryItemsInventoryItemId<
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
                    (typeof client.admin.products)[':id']['variants'][':variant_id']['inventory-items'][':inventory_item_id']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.admin.products)[':id']['variants'][':variant_id']['inventory-items'][':inventory_item_id']['$delete']
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
    getDeleteAdminProductsIdVariantsVariantIdInventoryItemsInventoryItemIdMutationOptions<
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

export function getAdminPromotionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.admin.promotions.$get>>,
) {
  return ['admin', '/admin/promotions', toValue(args)] as const
}

export function getAdminPromotionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.admin.promotions.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdminPromotionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.admin.promotions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdminPromotions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.promotions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.admin.promotions.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.admin.promotions.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.admin.promotions.$get>>>
            >
          >,
          ReturnType<typeof getAdminPromotionsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.promotions.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAdminPromotionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdminPromotionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.admin.promotions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAdminPromotionsMutationKey() {
  return ['admin', '/admin/promotions', 'POST'] as const
}

export function getPostAdminPromotionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.promotions.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.admin.promotions.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminPromotionsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.admin.promotions.$post>) {
      return parseResponse(client.admin.promotions.$post(args, options))
    },
  })
}

export function usePostAdminPromotions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.admin.promotions.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.admin.promotions.$post>,
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
  const mutationDefaults = getPostAdminPromotionsMutationOptions<TError, TOnMutateResult>(
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

export function getAdminPromotionsRuleAttributeOptionsRuleTypeQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.admin.promotions)['rule-attribute-options'][':rule_type']['$get']
    >
  >,
) {
  return ['admin', '/admin/promotions/rule-attribute-options/:rule_type', toValue(args)] as const
}

export function getAdminPromotionsRuleAttributeOptionsRuleTypeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.admin.promotions)['rule-attribute-options'][':rule_type']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdminPromotionsRuleAttributeOptionsRuleTypeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.admin.promotions['rule-attribute-options'][':rule_type'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdminPromotionsRuleAttributeOptionsRuleType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.admin.promotions)['rule-attribute-options'][':rule_type']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.admin.promotions)['rule-attribute-options'][':rule_type']['$get']
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
                    (typeof client.admin.promotions)['rule-attribute-options'][':rule_type']['$get']
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
                    (typeof client.admin.promotions)['rule-attribute-options'][':rule_type']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAdminPromotionsRuleAttributeOptionsRuleTypeQueryKey>
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
              (typeof client.admin.promotions)['rule-attribute-options'][':rule_type']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminPromotionsRuleAttributeOptionsRuleTypeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdminPromotionsRuleAttributeOptionsRuleTypeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.admin.promotions['rule-attribute-options'][':rule_type'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAdminPromotionsRuleValueOptionsRuleTypeRuleAttributeIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.admin.promotions)['rule-value-options'][':rule_type'][':rule_attribute_id']['$get']
    >
  >,
) {
  return [
    'admin',
    '/admin/promotions/rule-value-options/:rule_type/:rule_attribute_id',
    toValue(args),
  ] as const
}

export function getAdminPromotionsRuleValueOptionsRuleTypeRuleAttributeIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.admin.promotions)['rule-value-options'][':rule_type'][':rule_attribute_id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getAdminPromotionsRuleValueOptionsRuleTypeRuleAttributeIdQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.admin.promotions['rule-value-options'][':rule_type'][':rule_attribute_id'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useAdminPromotionsRuleValueOptionsRuleTypeRuleAttributeId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.admin.promotions)['rule-value-options'][':rule_type'][':rule_attribute_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.admin.promotions)['rule-value-options'][':rule_type'][':rule_attribute_id']['$get']
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
                    (typeof client.admin.promotions)['rule-value-options'][':rule_type'][':rule_attribute_id']['$get']
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
                    (typeof client.admin.promotions)['rule-value-options'][':rule_type'][':rule_attribute_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAdminPromotionsRuleValueOptionsRuleTypeRuleAttributeIdQueryKey>
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
              (typeof client.admin.promotions)['rule-value-options'][':rule_type'][':rule_attribute_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminPromotionsRuleValueOptionsRuleTypeRuleAttributeIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getAdminPromotionsRuleValueOptionsRuleTypeRuleAttributeIdQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.admin.promotions['rule-value-options'][':rule_type'][':rule_attribute_id'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getAdminPromotionsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.admin.promotions)[':id']['$get']>>,
) {
  return ['admin', '/admin/promotions/:id', toValue(args)] as const
}

export function getAdminPromotionsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.admin.promotions)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdminPromotionsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.admin.promotions[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdminPromotionsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.admin.promotions)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.admin.promotions)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin.promotions)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin.promotions)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAdminPromotionsIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.admin.promotions)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminPromotionsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdminPromotionsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.admin.promotions[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAdminPromotionsIdMutationKey() {
  return ['admin', '/admin/promotions/:id', 'POST'] as const
}

export function getPostAdminPromotionsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.admin.promotions)[':id']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.admin.promotions)[':id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminPromotionsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.admin.promotions)[':id']['$post']>) {
      return parseResponse(client.admin.promotions[':id'].$post(args, options))
    },
  })
}

export function usePostAdminPromotionsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin.promotions)[':id']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.admin.promotions)[':id']['$post']>,
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
  const mutationDefaults = getPostAdminPromotionsIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteAdminPromotionsIdMutationKey() {
  return ['admin', '/admin/promotions/:id', 'DELETE'] as const
}

export function getDeleteAdminPromotionsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin.promotions)[':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.admin.promotions)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAdminPromotionsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.admin.promotions)[':id']['$delete']>) {
      return parseResponse(client.admin.promotions[':id'].$delete(args, options))
    },
  })
}

export function useDeleteAdminPromotionsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin.promotions)[':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.admin.promotions)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteAdminPromotionsIdMutationOptions<TError, TOnMutateResult>(
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

export function getPostAdminPromotionsIdBuyRulesBatchMutationKey() {
  return ['admin', '/admin/promotions/:id/buy-rules/batch', 'POST'] as const
}

export function getPostAdminPromotionsIdBuyRulesBatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.admin.promotions)[':id']['buy-rules']['batch']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.admin.promotions)[':id']['buy-rules']['batch']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminPromotionsIdBuyRulesBatchMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.admin.promotions)[':id']['buy-rules']['batch']['$post']
      >,
    ) {
      return parseResponse(client.admin.promotions[':id']['buy-rules'].batch.$post(args, options))
    },
  })
}

export function usePostAdminPromotionsIdBuyRulesBatch<
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
                  ReturnType<(typeof client.admin.promotions)[':id']['buy-rules']['batch']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.admin.promotions)[':id']['buy-rules']['batch']['$post']>,
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
  const mutationDefaults = getPostAdminPromotionsIdBuyRulesBatchMutationOptions<
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

export function getPostAdminPromotionsIdRulesBatchMutationKey() {
  return ['admin', '/admin/promotions/:id/rules/batch', 'POST'] as const
}

export function getPostAdminPromotionsIdRulesBatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin.promotions)[':id']['rules']['batch']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.admin.promotions)[':id']['rules']['batch']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminPromotionsIdRulesBatchMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.admin.promotions)[':id']['rules']['batch']['$post']>,
    ) {
      return parseResponse(client.admin.promotions[':id'].rules.batch.$post(args, options))
    },
  })
}

export function usePostAdminPromotionsIdRulesBatch<
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
                  ReturnType<(typeof client.admin.promotions)[':id']['rules']['batch']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.admin.promotions)[':id']['rules']['batch']['$post']>,
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
  const mutationDefaults = getPostAdminPromotionsIdRulesBatchMutationOptions<
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

export function getPostAdminPromotionsIdTargetRulesBatchMutationKey() {
  return ['admin', '/admin/promotions/:id/target-rules/batch', 'POST'] as const
}

export function getPostAdminPromotionsIdTargetRulesBatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.admin.promotions)[':id']['target-rules']['batch']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.admin.promotions)[':id']['target-rules']['batch']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminPromotionsIdTargetRulesBatchMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.admin.promotions)[':id']['target-rules']['batch']['$post']
      >,
    ) {
      return parseResponse(
        client.admin.promotions[':id']['target-rules'].batch.$post(args, options),
      )
    },
  })
}

export function usePostAdminPromotionsIdTargetRulesBatch<
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
                    (typeof client.admin.promotions)[':id']['target-rules']['batch']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.admin.promotions)[':id']['target-rules']['batch']['$post']
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
  const mutationDefaults = getPostAdminPromotionsIdTargetRulesBatchMutationOptions<
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

export function getAdminPromotionsIdRuleTypeQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.admin.promotions)[':id'][':rule_type']['$get']>
  >,
) {
  return ['admin', '/admin/promotions/:id/:rule_type', toValue(args)] as const
}

export function getAdminPromotionsIdRuleTypeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.admin.promotions)[':id'][':rule_type']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdminPromotionsIdRuleTypeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.admin.promotions[':id'][':rule_type'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdminPromotionsIdRuleType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.admin.promotions)[':id'][':rule_type']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.admin.promotions)[':id'][':rule_type']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin.promotions)[':id'][':rule_type']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin.promotions)[':id'][':rule_type']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAdminPromotionsIdRuleTypeQueryKey>
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
          Awaited<ReturnType<(typeof client.admin.promotions)[':id'][':rule_type']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminPromotionsIdRuleTypeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdminPromotionsIdRuleTypeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.admin.promotions[':id'][':rule_type'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAdminPropertyLabelsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.admin)['property-labels']['$get']>>,
) {
  return ['admin', '/admin/property-labels', toValue(args)] as const
}

export function getAdminPropertyLabelsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.admin)['property-labels']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdminPropertyLabelsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.admin['property-labels'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdminPropertyLabels<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.admin)['property-labels']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.admin)['property-labels']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin)['property-labels']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin)['property-labels']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAdminPropertyLabelsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.admin)['property-labels']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminPropertyLabelsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdminPropertyLabelsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.admin['property-labels'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAdminPropertyLabelsMutationKey() {
  return ['admin', '/admin/property-labels', 'POST'] as const
}

export function getPostAdminPropertyLabelsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.admin)['property-labels']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.admin)['property-labels']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminPropertyLabelsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.admin)['property-labels']['$post']>) {
      return parseResponse(client.admin['property-labels'].$post(args, options))
    },
  })
}

export function usePostAdminPropertyLabels<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin)['property-labels']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.admin)['property-labels']['$post']>,
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
  const mutationDefaults = getPostAdminPropertyLabelsMutationOptions<TError, TOnMutateResult>(
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

export function getPostAdminPropertyLabelsBatchMutationKey() {
  return ['admin', '/admin/property-labels/batch', 'POST'] as const
}

export function getPostAdminPropertyLabelsBatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin)['property-labels']['batch']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.admin)['property-labels']['batch']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminPropertyLabelsBatchMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.admin)['property-labels']['batch']['$post']>,
    ) {
      return parseResponse(client.admin['property-labels'].batch.$post(args, options))
    },
  })
}

export function usePostAdminPropertyLabelsBatch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin)['property-labels']['batch']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.admin)['property-labels']['batch']['$post']>,
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
  const mutationDefaults = getPostAdminPropertyLabelsBatchMutationOptions<TError, TOnMutateResult>(
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

export function getAdminPropertyLabelsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.admin)['property-labels'][':id']['$get']>>,
) {
  return ['admin', '/admin/property-labels/:id', toValue(args)] as const
}

export function getAdminPropertyLabelsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.admin)['property-labels'][':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdminPropertyLabelsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.admin['property-labels'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdminPropertyLabelsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.admin)['property-labels'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.admin)['property-labels'][':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin)['property-labels'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin)['property-labels'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAdminPropertyLabelsIdQueryKey>
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
          Awaited<ReturnType<(typeof client.admin)['property-labels'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminPropertyLabelsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdminPropertyLabelsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.admin['property-labels'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAdminPropertyLabelsIdMutationKey() {
  return ['admin', '/admin/property-labels/:id', 'POST'] as const
}

export function getPostAdminPropertyLabelsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin)['property-labels'][':id']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.admin)['property-labels'][':id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminPropertyLabelsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.admin)['property-labels'][':id']['$post']>,
    ) {
      return parseResponse(client.admin['property-labels'][':id'].$post(args, options))
    },
  })
}

export function usePostAdminPropertyLabelsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin)['property-labels'][':id']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.admin)['property-labels'][':id']['$post']>,
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
  const mutationDefaults = getPostAdminPropertyLabelsIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteAdminPropertyLabelsIdMutationKey() {
  return ['admin', '/admin/property-labels/:id', 'DELETE'] as const
}

export function getDeleteAdminPropertyLabelsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin)['property-labels'][':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.admin)['property-labels'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAdminPropertyLabelsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.admin)['property-labels'][':id']['$delete']>,
    ) {
      return parseResponse(client.admin['property-labels'][':id'].$delete(args, options))
    },
  })
}

export function useDeleteAdminPropertyLabelsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin)['property-labels'][':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.admin)['property-labels'][':id']['$delete']>,
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
  const mutationDefaults = getDeleteAdminPropertyLabelsIdMutationOptions<TError, TOnMutateResult>(
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

export function getAdminRefundReasonsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.admin)['refund-reasons']['$get']>>,
) {
  return ['admin', '/admin/refund-reasons', toValue(args)] as const
}

export function getAdminRefundReasonsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.admin)['refund-reasons']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdminRefundReasonsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.admin['refund-reasons'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdminRefundReasons<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.admin)['refund-reasons']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.admin)['refund-reasons']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin)['refund-reasons']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin)['refund-reasons']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAdminRefundReasonsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.admin)['refund-reasons']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminRefundReasonsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdminRefundReasonsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.admin['refund-reasons'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAdminRefundReasonsMutationKey() {
  return ['admin', '/admin/refund-reasons', 'POST'] as const
}

export function getPostAdminRefundReasonsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.admin)['refund-reasons']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.admin)['refund-reasons']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminRefundReasonsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.admin)['refund-reasons']['$post']>) {
      return parseResponse(client.admin['refund-reasons'].$post(args, options))
    },
  })
}

export function usePostAdminRefundReasons<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin)['refund-reasons']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.admin)['refund-reasons']['$post']>,
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
  const mutationDefaults = getPostAdminRefundReasonsMutationOptions<TError, TOnMutateResult>(
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

export function getAdminRefundReasonsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.admin)['refund-reasons'][':id']['$get']>>,
) {
  return ['admin', '/admin/refund-reasons/:id', toValue(args)] as const
}

export function getAdminRefundReasonsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.admin)['refund-reasons'][':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdminRefundReasonsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.admin['refund-reasons'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdminRefundReasonsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.admin)['refund-reasons'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.admin)['refund-reasons'][':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin)['refund-reasons'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin)['refund-reasons'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAdminRefundReasonsIdQueryKey>
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
          Awaited<ReturnType<(typeof client.admin)['refund-reasons'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminRefundReasonsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdminRefundReasonsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.admin['refund-reasons'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAdminRefundReasonsIdMutationKey() {
  return ['admin', '/admin/refund-reasons/:id', 'POST'] as const
}

export function getPostAdminRefundReasonsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin)['refund-reasons'][':id']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.admin)['refund-reasons'][':id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminRefundReasonsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.admin)['refund-reasons'][':id']['$post']>,
    ) {
      return parseResponse(client.admin['refund-reasons'][':id'].$post(args, options))
    },
  })
}

export function usePostAdminRefundReasonsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin)['refund-reasons'][':id']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.admin)['refund-reasons'][':id']['$post']>,
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
  const mutationDefaults = getPostAdminRefundReasonsIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteAdminRefundReasonsIdMutationKey() {
  return ['admin', '/admin/refund-reasons/:id', 'DELETE'] as const
}

export function getDeleteAdminRefundReasonsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin)['refund-reasons'][':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.admin)['refund-reasons'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAdminRefundReasonsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.admin)['refund-reasons'][':id']['$delete']>,
    ) {
      return parseResponse(client.admin['refund-reasons'][':id'].$delete(args, options))
    },
  })
}

export function useDeleteAdminRefundReasonsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin)['refund-reasons'][':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.admin)['refund-reasons'][':id']['$delete']>,
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
  const mutationDefaults = getDeleteAdminRefundReasonsIdMutationOptions<TError, TOnMutateResult>(
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

export function getAdminRegionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.admin.regions.$get>>,
) {
  return ['admin', '/admin/regions', toValue(args)] as const
}

export function getAdminRegionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.admin.regions.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdminRegionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.admin.regions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdminRegions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.regions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.admin.regions.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.regions.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.regions.$get>>>>
          >,
          ReturnType<typeof getAdminRegionsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.regions.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAdminRegionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdminRegionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.admin.regions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAdminRegionsMutationKey() {
  return ['admin', '/admin/regions', 'POST'] as const
}

export function getPostAdminRegionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.regions.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.admin.regions.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminRegionsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.admin.regions.$post>) {
      return parseResponse(client.admin.regions.$post(args, options))
    },
  })
}

export function usePostAdminRegions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.regions.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.admin.regions.$post>,
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
  const mutationDefaults = getPostAdminRegionsMutationOptions<TError, TOnMutateResult>(
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

export function getAdminRegionsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.admin.regions)[':id']['$get']>>,
) {
  return ['admin', '/admin/regions/:id', toValue(args)] as const
}

export function getAdminRegionsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.admin.regions)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdminRegionsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.admin.regions[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdminRegionsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.admin.regions)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.admin.regions)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin.regions)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin.regions)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAdminRegionsIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.admin.regions)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminRegionsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdminRegionsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.admin.regions[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAdminRegionsIdMutationKey() {
  return ['admin', '/admin/regions/:id', 'POST'] as const
}

export function getPostAdminRegionsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.admin.regions)[':id']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.admin.regions)[':id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminRegionsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.admin.regions)[':id']['$post']>) {
      return parseResponse(client.admin.regions[':id'].$post(args, options))
    },
  })
}

export function usePostAdminRegionsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin.regions)[':id']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.admin.regions)[':id']['$post']>,
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
  const mutationDefaults = getPostAdminRegionsIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteAdminRegionsIdMutationKey() {
  return ['admin', '/admin/regions/:id', 'DELETE'] as const
}

export function getDeleteAdminRegionsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.admin.regions)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.admin.regions)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAdminRegionsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.admin.regions)[':id']['$delete']>) {
      return parseResponse(client.admin.regions[':id'].$delete(args, options))
    },
  })
}

export function useDeleteAdminRegionsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin.regions)[':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.admin.regions)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteAdminRegionsIdMutationOptions<TError, TOnMutateResult>(
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

export function getAdminReservationsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.admin.reservations.$get>>,
) {
  return ['admin', '/admin/reservations', toValue(args)] as const
}

export function getAdminReservationsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.admin.reservations.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdminReservationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.admin.reservations.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdminReservations<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.reservations.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.admin.reservations.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.admin.reservations.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.admin.reservations.$get>>>
            >
          >,
          ReturnType<typeof getAdminReservationsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.reservations.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAdminReservationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdminReservationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.admin.reservations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAdminReservationsMutationKey() {
  return ['admin', '/admin/reservations', 'POST'] as const
}

export function getPostAdminReservationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.reservations.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.admin.reservations.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminReservationsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.admin.reservations.$post>) {
      return parseResponse(client.admin.reservations.$post(args, options))
    },
  })
}

export function usePostAdminReservations<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.admin.reservations.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.admin.reservations.$post>,
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
  const mutationDefaults = getPostAdminReservationsMutationOptions<TError, TOnMutateResult>(
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

export function getAdminReservationsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.admin.reservations)[':id']['$get']>>,
) {
  return ['admin', '/admin/reservations/:id', toValue(args)] as const
}

export function getAdminReservationsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.admin.reservations)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdminReservationsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.admin.reservations[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdminReservationsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.admin.reservations)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.admin.reservations)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin.reservations)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin.reservations)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAdminReservationsIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.admin.reservations)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminReservationsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdminReservationsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.admin.reservations[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAdminReservationsIdMutationKey() {
  return ['admin', '/admin/reservations/:id', 'POST'] as const
}

export function getPostAdminReservationsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin.reservations)[':id']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.admin.reservations)[':id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminReservationsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.admin.reservations)[':id']['$post']>) {
      return parseResponse(client.admin.reservations[':id'].$post(args, options))
    },
  })
}

export function usePostAdminReservationsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin.reservations)[':id']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.admin.reservations)[':id']['$post']>,
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
  const mutationDefaults = getPostAdminReservationsIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteAdminReservationsIdMutationKey() {
  return ['admin', '/admin/reservations/:id', 'DELETE'] as const
}

export function getDeleteAdminReservationsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin.reservations)[':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.admin.reservations)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAdminReservationsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.admin.reservations)[':id']['$delete']>) {
      return parseResponse(client.admin.reservations[':id'].$delete(args, options))
    },
  })
}

export function useDeleteAdminReservationsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin.reservations)[':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.admin.reservations)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteAdminReservationsIdMutationOptions<TError, TOnMutateResult>(
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

export function getAdminReturnReasonsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.admin)['return-reasons']['$get']>>,
) {
  return ['admin', '/admin/return-reasons', toValue(args)] as const
}

export function getAdminReturnReasonsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.admin)['return-reasons']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdminReturnReasonsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.admin['return-reasons'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdminReturnReasons<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.admin)['return-reasons']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.admin)['return-reasons']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin)['return-reasons']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin)['return-reasons']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAdminReturnReasonsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.admin)['return-reasons']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminReturnReasonsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdminReturnReasonsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.admin['return-reasons'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAdminReturnReasonsMutationKey() {
  return ['admin', '/admin/return-reasons', 'POST'] as const
}

export function getPostAdminReturnReasonsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.admin)['return-reasons']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.admin)['return-reasons']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminReturnReasonsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.admin)['return-reasons']['$post']>) {
      return parseResponse(client.admin['return-reasons'].$post(args, options))
    },
  })
}

export function usePostAdminReturnReasons<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin)['return-reasons']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.admin)['return-reasons']['$post']>,
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
  const mutationDefaults = getPostAdminReturnReasonsMutationOptions<TError, TOnMutateResult>(
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

export function getAdminReturnReasonsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.admin)['return-reasons'][':id']['$get']>>,
) {
  return ['admin', '/admin/return-reasons/:id', toValue(args)] as const
}

export function getAdminReturnReasonsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.admin)['return-reasons'][':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdminReturnReasonsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.admin['return-reasons'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdminReturnReasonsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.admin)['return-reasons'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.admin)['return-reasons'][':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin)['return-reasons'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin)['return-reasons'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAdminReturnReasonsIdQueryKey>
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
          Awaited<ReturnType<(typeof client.admin)['return-reasons'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminReturnReasonsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdminReturnReasonsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.admin['return-reasons'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAdminReturnReasonsIdMutationKey() {
  return ['admin', '/admin/return-reasons/:id', 'POST'] as const
}

export function getPostAdminReturnReasonsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin)['return-reasons'][':id']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.admin)['return-reasons'][':id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminReturnReasonsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.admin)['return-reasons'][':id']['$post']>,
    ) {
      return parseResponse(client.admin['return-reasons'][':id'].$post(args, options))
    },
  })
}

export function usePostAdminReturnReasonsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin)['return-reasons'][':id']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.admin)['return-reasons'][':id']['$post']>,
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
  const mutationDefaults = getPostAdminReturnReasonsIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteAdminReturnReasonsIdMutationKey() {
  return ['admin', '/admin/return-reasons/:id', 'DELETE'] as const
}

export function getDeleteAdminReturnReasonsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin)['return-reasons'][':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.admin)['return-reasons'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAdminReturnReasonsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.admin)['return-reasons'][':id']['$delete']>,
    ) {
      return parseResponse(client.admin['return-reasons'][':id'].$delete(args, options))
    },
  })
}

export function useDeleteAdminReturnReasonsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin)['return-reasons'][':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.admin)['return-reasons'][':id']['$delete']>,
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
  const mutationDefaults = getDeleteAdminReturnReasonsIdMutationOptions<TError, TOnMutateResult>(
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

export function getAdminReturnsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.admin.returns.$get>>,
) {
  return ['admin', '/admin/returns', toValue(args)] as const
}

export function getAdminReturnsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.admin.returns.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdminReturnsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.admin.returns.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdminReturns<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.returns.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.admin.returns.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.returns.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.returns.$get>>>>
          >,
          ReturnType<typeof getAdminReturnsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.returns.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAdminReturnsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdminReturnsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.admin.returns.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAdminReturnsMutationKey() {
  return ['admin', '/admin/returns', 'POST'] as const
}

export function getPostAdminReturnsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.returns.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.admin.returns.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminReturnsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.admin.returns.$post>) {
      return parseResponse(client.admin.returns.$post(args, options))
    },
  })
}

export function usePostAdminReturns<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.returns.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.admin.returns.$post>,
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
  const mutationDefaults = getPostAdminReturnsMutationOptions<TError, TOnMutateResult>(
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

export function getAdminReturnsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.admin.returns)[':id']['$get']>>,
) {
  return ['admin', '/admin/returns/:id', toValue(args)] as const
}

export function getAdminReturnsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.admin.returns)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdminReturnsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.admin.returns[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdminReturnsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.admin.returns)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.admin.returns)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin.returns)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin.returns)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAdminReturnsIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.admin.returns)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminReturnsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdminReturnsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.admin.returns[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAdminReturnsIdMutationKey() {
  return ['admin', '/admin/returns/:id', 'POST'] as const
}

export function getPostAdminReturnsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.admin.returns)[':id']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.admin.returns)[':id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminReturnsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.admin.returns)[':id']['$post']>) {
      return parseResponse(client.admin.returns[':id'].$post(args, options))
    },
  })
}

export function usePostAdminReturnsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin.returns)[':id']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.admin.returns)[':id']['$post']>,
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
  const mutationDefaults = getPostAdminReturnsIdMutationOptions<TError, TOnMutateResult>(
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

export function getPostAdminReturnsIdCancelMutationKey() {
  return ['admin', '/admin/returns/:id/cancel', 'POST'] as const
}

export function getPostAdminReturnsIdCancelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin.returns)[':id']['cancel']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.admin.returns)[':id']['cancel']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminReturnsIdCancelMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.admin.returns)[':id']['cancel']['$post']>,
    ) {
      return parseResponse(client.admin.returns[':id'].cancel.$post(args, options))
    },
  })
}

export function usePostAdminReturnsIdCancel<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin.returns)[':id']['cancel']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.admin.returns)[':id']['cancel']['$post']>,
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
  const mutationDefaults = getPostAdminReturnsIdCancelMutationOptions<TError, TOnMutateResult>(
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

export function getPostAdminReturnsIdDismissItemsMutationKey() {
  return ['admin', '/admin/returns/:id/dismiss-items', 'POST'] as const
}

export function getPostAdminReturnsIdDismissItemsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin.returns)[':id']['dismiss-items']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.admin.returns)[':id']['dismiss-items']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminReturnsIdDismissItemsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.admin.returns)[':id']['dismiss-items']['$post']>,
    ) {
      return parseResponse(client.admin.returns[':id']['dismiss-items'].$post(args, options))
    },
  })
}

export function usePostAdminReturnsIdDismissItems<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin.returns)[':id']['dismiss-items']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.admin.returns)[':id']['dismiss-items']['$post']>,
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
  const mutationDefaults = getPostAdminReturnsIdDismissItemsMutationOptions<
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

export function getPostAdminReturnsIdDismissItemsActionIdMutationKey() {
  return ['admin', '/admin/returns/:id/dismiss-items/:action_id', 'POST'] as const
}

export function getPostAdminReturnsIdDismissItemsActionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.admin.returns)[':id']['dismiss-items'][':action_id']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.admin.returns)[':id']['dismiss-items'][':action_id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminReturnsIdDismissItemsActionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.admin.returns)[':id']['dismiss-items'][':action_id']['$post']
      >,
    ) {
      return parseResponse(
        client.admin.returns[':id']['dismiss-items'][':action_id'].$post(args, options),
      )
    },
  })
}

export function usePostAdminReturnsIdDismissItemsActionId<
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
                    (typeof client.admin.returns)[':id']['dismiss-items'][':action_id']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.admin.returns)[':id']['dismiss-items'][':action_id']['$post']
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
  const mutationDefaults = getPostAdminReturnsIdDismissItemsActionIdMutationOptions<
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

export function getDeleteAdminReturnsIdDismissItemsActionIdMutationKey() {
  return ['admin', '/admin/returns/:id/dismiss-items/:action_id', 'DELETE'] as const
}

export function getDeleteAdminReturnsIdDismissItemsActionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.admin.returns)[':id']['dismiss-items'][':action_id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.admin.returns)[':id']['dismiss-items'][':action_id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteAdminReturnsIdDismissItemsActionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.admin.returns)[':id']['dismiss-items'][':action_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.admin.returns[':id']['dismiss-items'][':action_id'].$delete(args, options),
      )
    },
  })
}

export function useDeleteAdminReturnsIdDismissItemsActionId<
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
                    (typeof client.admin.returns)[':id']['dismiss-items'][':action_id']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.admin.returns)[':id']['dismiss-items'][':action_id']['$delete']
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
  const mutationDefaults = getDeleteAdminReturnsIdDismissItemsActionIdMutationOptions<
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

export function getPostAdminReturnsIdReceiveMutationKey() {
  return ['admin', '/admin/returns/:id/receive', 'POST'] as const
}

export function getPostAdminReturnsIdReceiveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin.returns)[':id']['receive']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.admin.returns)[':id']['receive']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminReturnsIdReceiveMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.admin.returns)[':id']['receive']['$post']>,
    ) {
      return parseResponse(client.admin.returns[':id'].receive.$post(args, options))
    },
  })
}

export function usePostAdminReturnsIdReceive<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin.returns)[':id']['receive']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.admin.returns)[':id']['receive']['$post']>,
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
  const mutationDefaults = getPostAdminReturnsIdReceiveMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteAdminReturnsIdReceiveMutationKey() {
  return ['admin', '/admin/returns/:id/receive', 'DELETE'] as const
}

export function getDeleteAdminReturnsIdReceiveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin.returns)[':id']['receive']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.admin.returns)[':id']['receive']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAdminReturnsIdReceiveMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.admin.returns)[':id']['receive']['$delete']>,
    ) {
      return parseResponse(client.admin.returns[':id'].receive.$delete(args, options))
    },
  })
}

export function useDeleteAdminReturnsIdReceive<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin.returns)[':id']['receive']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.admin.returns)[':id']['receive']['$delete']>,
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
  const mutationDefaults = getDeleteAdminReturnsIdReceiveMutationOptions<TError, TOnMutateResult>(
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

export function getPostAdminReturnsIdReceiveItemsMutationKey() {
  return ['admin', '/admin/returns/:id/receive-items', 'POST'] as const
}

export function getPostAdminReturnsIdReceiveItemsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin.returns)[':id']['receive-items']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.admin.returns)[':id']['receive-items']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminReturnsIdReceiveItemsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.admin.returns)[':id']['receive-items']['$post']>,
    ) {
      return parseResponse(client.admin.returns[':id']['receive-items'].$post(args, options))
    },
  })
}

export function usePostAdminReturnsIdReceiveItems<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin.returns)[':id']['receive-items']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.admin.returns)[':id']['receive-items']['$post']>,
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
  const mutationDefaults = getPostAdminReturnsIdReceiveItemsMutationOptions<
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

export function getPostAdminReturnsIdReceiveItemsActionIdMutationKey() {
  return ['admin', '/admin/returns/:id/receive-items/:action_id', 'POST'] as const
}

export function getPostAdminReturnsIdReceiveItemsActionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.admin.returns)[':id']['receive-items'][':action_id']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.admin.returns)[':id']['receive-items'][':action_id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminReturnsIdReceiveItemsActionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.admin.returns)[':id']['receive-items'][':action_id']['$post']
      >,
    ) {
      return parseResponse(
        client.admin.returns[':id']['receive-items'][':action_id'].$post(args, options),
      )
    },
  })
}

export function usePostAdminReturnsIdReceiveItemsActionId<
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
                    (typeof client.admin.returns)[':id']['receive-items'][':action_id']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.admin.returns)[':id']['receive-items'][':action_id']['$post']
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
  const mutationDefaults = getPostAdminReturnsIdReceiveItemsActionIdMutationOptions<
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

export function getDeleteAdminReturnsIdReceiveItemsActionIdMutationKey() {
  return ['admin', '/admin/returns/:id/receive-items/:action_id', 'DELETE'] as const
}

export function getDeleteAdminReturnsIdReceiveItemsActionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.admin.returns)[':id']['receive-items'][':action_id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.admin.returns)[':id']['receive-items'][':action_id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteAdminReturnsIdReceiveItemsActionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.admin.returns)[':id']['receive-items'][':action_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.admin.returns[':id']['receive-items'][':action_id'].$delete(args, options),
      )
    },
  })
}

export function useDeleteAdminReturnsIdReceiveItemsActionId<
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
                    (typeof client.admin.returns)[':id']['receive-items'][':action_id']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.admin.returns)[':id']['receive-items'][':action_id']['$delete']
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
  const mutationDefaults = getDeleteAdminReturnsIdReceiveItemsActionIdMutationOptions<
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

export function getPostAdminReturnsIdReceiveConfirmMutationKey() {
  return ['admin', '/admin/returns/:id/receive/confirm', 'POST'] as const
}

export function getPostAdminReturnsIdReceiveConfirmMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin.returns)[':id']['receive']['confirm']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.admin.returns)[':id']['receive']['confirm']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminReturnsIdReceiveConfirmMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.admin.returns)[':id']['receive']['confirm']['$post']>,
    ) {
      return parseResponse(client.admin.returns[':id'].receive.confirm.$post(args, options))
    },
  })
}

export function usePostAdminReturnsIdReceiveConfirm<
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
                  ReturnType<(typeof client.admin.returns)[':id']['receive']['confirm']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.admin.returns)[':id']['receive']['confirm']['$post']>,
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
  const mutationDefaults = getPostAdminReturnsIdReceiveConfirmMutationOptions<
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

export function getPostAdminReturnsIdRequestMutationKey() {
  return ['admin', '/admin/returns/:id/request', 'POST'] as const
}

export function getPostAdminReturnsIdRequestMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin.returns)[':id']['request']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.admin.returns)[':id']['request']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminReturnsIdRequestMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.admin.returns)[':id']['request']['$post']>,
    ) {
      return parseResponse(client.admin.returns[':id'].request.$post(args, options))
    },
  })
}

export function usePostAdminReturnsIdRequest<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin.returns)[':id']['request']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.admin.returns)[':id']['request']['$post']>,
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
  const mutationDefaults = getPostAdminReturnsIdRequestMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteAdminReturnsIdRequestMutationKey() {
  return ['admin', '/admin/returns/:id/request', 'DELETE'] as const
}

export function getDeleteAdminReturnsIdRequestMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin.returns)[':id']['request']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.admin.returns)[':id']['request']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAdminReturnsIdRequestMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.admin.returns)[':id']['request']['$delete']>,
    ) {
      return parseResponse(client.admin.returns[':id'].request.$delete(args, options))
    },
  })
}

export function useDeleteAdminReturnsIdRequest<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin.returns)[':id']['request']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.admin.returns)[':id']['request']['$delete']>,
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
  const mutationDefaults = getDeleteAdminReturnsIdRequestMutationOptions<TError, TOnMutateResult>(
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

export function getPostAdminReturnsIdRequestItemsMutationKey() {
  return ['admin', '/admin/returns/:id/request-items', 'POST'] as const
}

export function getPostAdminReturnsIdRequestItemsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin.returns)[':id']['request-items']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.admin.returns)[':id']['request-items']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminReturnsIdRequestItemsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.admin.returns)[':id']['request-items']['$post']>,
    ) {
      return parseResponse(client.admin.returns[':id']['request-items'].$post(args, options))
    },
  })
}

export function usePostAdminReturnsIdRequestItems<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin.returns)[':id']['request-items']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.admin.returns)[':id']['request-items']['$post']>,
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
  const mutationDefaults = getPostAdminReturnsIdRequestItemsMutationOptions<
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

export function getPostAdminReturnsIdRequestItemsActionIdMutationKey() {
  return ['admin', '/admin/returns/:id/request-items/:action_id', 'POST'] as const
}

export function getPostAdminReturnsIdRequestItemsActionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.admin.returns)[':id']['request-items'][':action_id']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.admin.returns)[':id']['request-items'][':action_id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminReturnsIdRequestItemsActionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.admin.returns)[':id']['request-items'][':action_id']['$post']
      >,
    ) {
      return parseResponse(
        client.admin.returns[':id']['request-items'][':action_id'].$post(args, options),
      )
    },
  })
}

export function usePostAdminReturnsIdRequestItemsActionId<
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
                    (typeof client.admin.returns)[':id']['request-items'][':action_id']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.admin.returns)[':id']['request-items'][':action_id']['$post']
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
  const mutationDefaults = getPostAdminReturnsIdRequestItemsActionIdMutationOptions<
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

export function getDeleteAdminReturnsIdRequestItemsActionIdMutationKey() {
  return ['admin', '/admin/returns/:id/request-items/:action_id', 'DELETE'] as const
}

export function getDeleteAdminReturnsIdRequestItemsActionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.admin.returns)[':id']['request-items'][':action_id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.admin.returns)[':id']['request-items'][':action_id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteAdminReturnsIdRequestItemsActionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.admin.returns)[':id']['request-items'][':action_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.admin.returns[':id']['request-items'][':action_id'].$delete(args, options),
      )
    },
  })
}

export function useDeleteAdminReturnsIdRequestItemsActionId<
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
                    (typeof client.admin.returns)[':id']['request-items'][':action_id']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.admin.returns)[':id']['request-items'][':action_id']['$delete']
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
  const mutationDefaults = getDeleteAdminReturnsIdRequestItemsActionIdMutationOptions<
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

export function getPostAdminReturnsIdShippingMethodMutationKey() {
  return ['admin', '/admin/returns/:id/shipping-method', 'POST'] as const
}

export function getPostAdminReturnsIdShippingMethodMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin.returns)[':id']['shipping-method']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.admin.returns)[':id']['shipping-method']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminReturnsIdShippingMethodMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.admin.returns)[':id']['shipping-method']['$post']>,
    ) {
      return parseResponse(client.admin.returns[':id']['shipping-method'].$post(args, options))
    },
  })
}

export function usePostAdminReturnsIdShippingMethod<
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
                  ReturnType<(typeof client.admin.returns)[':id']['shipping-method']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.admin.returns)[':id']['shipping-method']['$post']>,
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
  const mutationDefaults = getPostAdminReturnsIdShippingMethodMutationOptions<
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

export function getPostAdminReturnsIdShippingMethodActionIdMutationKey() {
  return ['admin', '/admin/returns/:id/shipping-method/:action_id', 'POST'] as const
}

export function getPostAdminReturnsIdShippingMethodActionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.admin.returns)[':id']['shipping-method'][':action_id']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.admin.returns)[':id']['shipping-method'][':action_id']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAdminReturnsIdShippingMethodActionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.admin.returns)[':id']['shipping-method'][':action_id']['$post']
      >,
    ) {
      return parseResponse(
        client.admin.returns[':id']['shipping-method'][':action_id'].$post(args, options),
      )
    },
  })
}

export function usePostAdminReturnsIdShippingMethodActionId<
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
                    (typeof client.admin.returns)[':id']['shipping-method'][':action_id']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.admin.returns)[':id']['shipping-method'][':action_id']['$post']
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
  const mutationDefaults = getPostAdminReturnsIdShippingMethodActionIdMutationOptions<
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

export function getDeleteAdminReturnsIdShippingMethodActionIdMutationKey() {
  return ['admin', '/admin/returns/:id/shipping-method/:action_id', 'DELETE'] as const
}

export function getDeleteAdminReturnsIdShippingMethodActionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.admin.returns)[':id']['shipping-method'][':action_id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.admin.returns)[':id']['shipping-method'][':action_id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteAdminReturnsIdShippingMethodActionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.admin.returns)[':id']['shipping-method'][':action_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.admin.returns[':id']['shipping-method'][':action_id'].$delete(args, options),
      )
    },
  })
}

export function useDeleteAdminReturnsIdShippingMethodActionId<
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
                    (typeof client.admin.returns)[':id']['shipping-method'][':action_id']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.admin.returns)[':id']['shipping-method'][':action_id']['$delete']
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
  const mutationDefaults = getDeleteAdminReturnsIdShippingMethodActionIdMutationOptions<
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

export function getAdminSalesChannelsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.admin)['sales-channels']['$get']>>,
) {
  return ['admin', '/admin/sales-channels', toValue(args)] as const
}

export function getAdminSalesChannelsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.admin)['sales-channels']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdminSalesChannelsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.admin['sales-channels'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdminSalesChannels<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.admin)['sales-channels']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.admin)['sales-channels']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin)['sales-channels']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin)['sales-channels']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAdminSalesChannelsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.admin)['sales-channels']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminSalesChannelsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdminSalesChannelsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.admin['sales-channels'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAdminSalesChannelsMutationKey() {
  return ['admin', '/admin/sales-channels', 'POST'] as const
}

export function getPostAdminSalesChannelsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.admin)['sales-channels']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.admin)['sales-channels']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminSalesChannelsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.admin)['sales-channels']['$post']>) {
      return parseResponse(client.admin['sales-channels'].$post(args, options))
    },
  })
}

export function usePostAdminSalesChannels<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin)['sales-channels']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.admin)['sales-channels']['$post']>,
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
  const mutationDefaults = getPostAdminSalesChannelsMutationOptions<TError, TOnMutateResult>(
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

export function getAdminSalesChannelsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.admin)['sales-channels'][':id']['$get']>>,
) {
  return ['admin', '/admin/sales-channels/:id', toValue(args)] as const
}

export function getAdminSalesChannelsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.admin)['sales-channels'][':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdminSalesChannelsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.admin['sales-channels'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdminSalesChannelsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.admin)['sales-channels'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.admin)['sales-channels'][':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin)['sales-channels'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin)['sales-channels'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAdminSalesChannelsIdQueryKey>
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
          Awaited<ReturnType<(typeof client.admin)['sales-channels'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminSalesChannelsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdminSalesChannelsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.admin['sales-channels'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAdminSalesChannelsIdMutationKey() {
  return ['admin', '/admin/sales-channels/:id', 'POST'] as const
}

export function getPostAdminSalesChannelsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin)['sales-channels'][':id']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.admin)['sales-channels'][':id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminSalesChannelsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.admin)['sales-channels'][':id']['$post']>,
    ) {
      return parseResponse(client.admin['sales-channels'][':id'].$post(args, options))
    },
  })
}

export function usePostAdminSalesChannelsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin)['sales-channels'][':id']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.admin)['sales-channels'][':id']['$post']>,
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
  const mutationDefaults = getPostAdminSalesChannelsIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteAdminSalesChannelsIdMutationKey() {
  return ['admin', '/admin/sales-channels/:id', 'DELETE'] as const
}

export function getDeleteAdminSalesChannelsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin)['sales-channels'][':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.admin)['sales-channels'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAdminSalesChannelsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.admin)['sales-channels'][':id']['$delete']>,
    ) {
      return parseResponse(client.admin['sales-channels'][':id'].$delete(args, options))
    },
  })
}

export function useDeleteAdminSalesChannelsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin)['sales-channels'][':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.admin)['sales-channels'][':id']['$delete']>,
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
  const mutationDefaults = getDeleteAdminSalesChannelsIdMutationOptions<TError, TOnMutateResult>(
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

export function getPostAdminSalesChannelsIdProductsMutationKey() {
  return ['admin', '/admin/sales-channels/:id/products', 'POST'] as const
}

export function getPostAdminSalesChannelsIdProductsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin)['sales-channels'][':id']['products']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.admin)['sales-channels'][':id']['products']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminSalesChannelsIdProductsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.admin)['sales-channels'][':id']['products']['$post']>,
    ) {
      return parseResponse(client.admin['sales-channels'][':id'].products.$post(args, options))
    },
  })
}

export function usePostAdminSalesChannelsIdProducts<
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
                  ReturnType<(typeof client.admin)['sales-channels'][':id']['products']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.admin)['sales-channels'][':id']['products']['$post']>,
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
  const mutationDefaults = getPostAdminSalesChannelsIdProductsMutationOptions<
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

export function getAdminSearchQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.admin.search.$get>>,
) {
  return ['admin', '/admin/search', toValue(args)] as const
}

export function getAdminSearchQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.admin.search.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdminSearchQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.admin.search.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useAdminSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.admin.search.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.search.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.search.$get>>>>
          >,
          ReturnType<typeof getAdminSearchQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.search.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAdminSearchQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdminSearchQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.admin.search.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAdminSearchIndexesQueryKey() {
  return ['admin', '/admin/search-indexes'] as const
}

export function getAdminSearchIndexesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getAdminSearchIndexesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.admin['search-indexes'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdminSearchIndexes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.admin)['search-indexes']['$get']>>>
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
                Awaited<ReturnType<(typeof client.admin)['search-indexes']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin)['search-indexes']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAdminSearchIndexesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.admin)['search-indexes']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminSearchIndexesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getAdminSearchIndexesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.admin['search-indexes'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteAdminSearchIndexesIdMutationKey() {
  return ['admin', '/admin/search-indexes/:id', 'DELETE'] as const
}

export function getDeleteAdminSearchIndexesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin)['search-indexes'][':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.admin)['search-indexes'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAdminSearchIndexesIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.admin)['search-indexes'][':id']['$delete']>,
    ) {
      return parseResponse(client.admin['search-indexes'][':id'].$delete(args, options))
    },
  })
}

export function useDeleteAdminSearchIndexesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin)['search-indexes'][':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.admin)['search-indexes'][':id']['$delete']>,
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
  const mutationDefaults = getDeleteAdminSearchIndexesIdMutationOptions<TError, TOnMutateResult>(
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

export function getPostAdminSearchIndexesIdReindexMutationKey() {
  return ['admin', '/admin/search-indexes/:id/reindex', 'POST'] as const
}

export function getPostAdminSearchIndexesIdReindexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin)['search-indexes'][':id']['reindex']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.admin)['search-indexes'][':id']['reindex']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminSearchIndexesIdReindexMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.admin)['search-indexes'][':id']['reindex']['$post']>,
    ) {
      return parseResponse(client.admin['search-indexes'][':id'].reindex.$post(args, options))
    },
  })
}

export function usePostAdminSearchIndexesIdReindex<
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
                  ReturnType<(typeof client.admin)['search-indexes'][':id']['reindex']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.admin)['search-indexes'][':id']['reindex']['$post']>,
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
  const mutationDefaults = getPostAdminSearchIndexesIdReindexMutationOptions<
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

export function getAdminShippingOptionTypesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.admin)['shipping-option-types']['$get']>>,
) {
  return ['admin', '/admin/shipping-option-types', toValue(args)] as const
}

export function getAdminShippingOptionTypesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.admin)['shipping-option-types']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdminShippingOptionTypesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.admin['shipping-option-types'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdminShippingOptionTypes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.admin)['shipping-option-types']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.admin)['shipping-option-types']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin)['shipping-option-types']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin)['shipping-option-types']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAdminShippingOptionTypesQueryKey>
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
          Awaited<ReturnType<(typeof client.admin)['shipping-option-types']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminShippingOptionTypesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdminShippingOptionTypesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.admin['shipping-option-types'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAdminShippingOptionTypesMutationKey() {
  return ['admin', '/admin/shipping-option-types', 'POST'] as const
}

export function getPostAdminShippingOptionTypesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin)['shipping-option-types']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.admin)['shipping-option-types']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminShippingOptionTypesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.admin)['shipping-option-types']['$post']>,
    ) {
      return parseResponse(client.admin['shipping-option-types'].$post(args, options))
    },
  })
}

export function usePostAdminShippingOptionTypes<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin)['shipping-option-types']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.admin)['shipping-option-types']['$post']>,
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
  const mutationDefaults = getPostAdminShippingOptionTypesMutationOptions<TError, TOnMutateResult>(
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

export function getAdminShippingOptionTypesIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.admin)['shipping-option-types'][':id']['$get']>
  >,
) {
  return ['admin', '/admin/shipping-option-types/:id', toValue(args)] as const
}

export function getAdminShippingOptionTypesIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.admin)['shipping-option-types'][':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdminShippingOptionTypesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.admin['shipping-option-types'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdminShippingOptionTypesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.admin)['shipping-option-types'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.admin)['shipping-option-types'][':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin)['shipping-option-types'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin)['shipping-option-types'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAdminShippingOptionTypesIdQueryKey>
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
          Awaited<ReturnType<(typeof client.admin)['shipping-option-types'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminShippingOptionTypesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdminShippingOptionTypesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.admin['shipping-option-types'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAdminShippingOptionTypesIdMutationKey() {
  return ['admin', '/admin/shipping-option-types/:id', 'POST'] as const
}

export function getPostAdminShippingOptionTypesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin)['shipping-option-types'][':id']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.admin)['shipping-option-types'][':id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminShippingOptionTypesIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.admin)['shipping-option-types'][':id']['$post']>,
    ) {
      return parseResponse(client.admin['shipping-option-types'][':id'].$post(args, options))
    },
  })
}

export function usePostAdminShippingOptionTypesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin)['shipping-option-types'][':id']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.admin)['shipping-option-types'][':id']['$post']>,
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
  const mutationDefaults = getPostAdminShippingOptionTypesIdMutationOptions<
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

export function getDeleteAdminShippingOptionTypesIdMutationKey() {
  return ['admin', '/admin/shipping-option-types/:id', 'DELETE'] as const
}

export function getDeleteAdminShippingOptionTypesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin)['shipping-option-types'][':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.admin)['shipping-option-types'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAdminShippingOptionTypesIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.admin)['shipping-option-types'][':id']['$delete']>,
    ) {
      return parseResponse(client.admin['shipping-option-types'][':id'].$delete(args, options))
    },
  })
}

export function useDeleteAdminShippingOptionTypesId<
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
                  ReturnType<(typeof client.admin)['shipping-option-types'][':id']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.admin)['shipping-option-types'][':id']['$delete']>,
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
  const mutationDefaults = getDeleteAdminShippingOptionTypesIdMutationOptions<
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

export function getAdminShippingOptionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.admin)['shipping-options']['$get']>>,
) {
  return ['admin', '/admin/shipping-options', toValue(args)] as const
}

export function getAdminShippingOptionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.admin)['shipping-options']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdminShippingOptionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.admin['shipping-options'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdminShippingOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.admin)['shipping-options']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.admin)['shipping-options']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin)['shipping-options']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin)['shipping-options']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAdminShippingOptionsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.admin)['shipping-options']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminShippingOptionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdminShippingOptionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.admin['shipping-options'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAdminShippingOptionsMutationKey() {
  return ['admin', '/admin/shipping-options', 'POST'] as const
}

export function getPostAdminShippingOptionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin)['shipping-options']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.admin)['shipping-options']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminShippingOptionsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.admin)['shipping-options']['$post']>) {
      return parseResponse(client.admin['shipping-options'].$post(args, options))
    },
  })
}

export function usePostAdminShippingOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin)['shipping-options']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.admin)['shipping-options']['$post']>,
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
  const mutationDefaults = getPostAdminShippingOptionsMutationOptions<TError, TOnMutateResult>(
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

export function getAdminShippingOptionsIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.admin)['shipping-options'][':id']['$get']>
  >,
) {
  return ['admin', '/admin/shipping-options/:id', toValue(args)] as const
}

export function getAdminShippingOptionsIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.admin)['shipping-options'][':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdminShippingOptionsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.admin['shipping-options'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdminShippingOptionsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.admin)['shipping-options'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.admin)['shipping-options'][':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin)['shipping-options'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin)['shipping-options'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAdminShippingOptionsIdQueryKey>
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
          Awaited<ReturnType<(typeof client.admin)['shipping-options'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminShippingOptionsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdminShippingOptionsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.admin['shipping-options'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAdminShippingOptionsIdMutationKey() {
  return ['admin', '/admin/shipping-options/:id', 'POST'] as const
}

export function getPostAdminShippingOptionsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin)['shipping-options'][':id']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.admin)['shipping-options'][':id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminShippingOptionsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.admin)['shipping-options'][':id']['$post']>,
    ) {
      return parseResponse(client.admin['shipping-options'][':id'].$post(args, options))
    },
  })
}

export function usePostAdminShippingOptionsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin)['shipping-options'][':id']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.admin)['shipping-options'][':id']['$post']>,
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
  const mutationDefaults = getPostAdminShippingOptionsIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteAdminShippingOptionsIdMutationKey() {
  return ['admin', '/admin/shipping-options/:id', 'DELETE'] as const
}

export function getDeleteAdminShippingOptionsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin)['shipping-options'][':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.admin)['shipping-options'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAdminShippingOptionsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.admin)['shipping-options'][':id']['$delete']>,
    ) {
      return parseResponse(client.admin['shipping-options'][':id'].$delete(args, options))
    },
  })
}

export function useDeleteAdminShippingOptionsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin)['shipping-options'][':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.admin)['shipping-options'][':id']['$delete']>,
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
  const mutationDefaults = getDeleteAdminShippingOptionsIdMutationOptions<TError, TOnMutateResult>(
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

export function getPostAdminShippingOptionsIdRulesBatchMutationKey() {
  return ['admin', '/admin/shipping-options/:id/rules/batch', 'POST'] as const
}

export function getPostAdminShippingOptionsIdRulesBatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.admin)['shipping-options'][':id']['rules']['batch']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.admin)['shipping-options'][':id']['rules']['batch']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminShippingOptionsIdRulesBatchMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.admin)['shipping-options'][':id']['rules']['batch']['$post']
      >,
    ) {
      return parseResponse(client.admin['shipping-options'][':id'].rules.batch.$post(args, options))
    },
  })
}

export function usePostAdminShippingOptionsIdRulesBatch<
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
                    (typeof client.admin)['shipping-options'][':id']['rules']['batch']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.admin)['shipping-options'][':id']['rules']['batch']['$post']
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
  const mutationDefaults = getPostAdminShippingOptionsIdRulesBatchMutationOptions<
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

export function getAdminShippingProfilesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.admin)['shipping-profiles']['$get']>>,
) {
  return ['admin', '/admin/shipping-profiles', toValue(args)] as const
}

export function getAdminShippingProfilesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.admin)['shipping-profiles']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdminShippingProfilesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.admin['shipping-profiles'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdminShippingProfiles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.admin)['shipping-profiles']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.admin)['shipping-profiles']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin)['shipping-profiles']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin)['shipping-profiles']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAdminShippingProfilesQueryKey>
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
          Awaited<ReturnType<(typeof client.admin)['shipping-profiles']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminShippingProfilesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdminShippingProfilesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.admin['shipping-profiles'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAdminShippingProfilesMutationKey() {
  return ['admin', '/admin/shipping-profiles', 'POST'] as const
}

export function getPostAdminShippingProfilesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin)['shipping-profiles']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.admin)['shipping-profiles']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminShippingProfilesMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.admin)['shipping-profiles']['$post']>) {
      return parseResponse(client.admin['shipping-profiles'].$post(args, options))
    },
  })
}

export function usePostAdminShippingProfiles<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin)['shipping-profiles']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.admin)['shipping-profiles']['$post']>,
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
  const mutationDefaults = getPostAdminShippingProfilesMutationOptions<TError, TOnMutateResult>(
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

export function getAdminShippingProfilesIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.admin)['shipping-profiles'][':id']['$get']>
  >,
) {
  return ['admin', '/admin/shipping-profiles/:id', toValue(args)] as const
}

export function getAdminShippingProfilesIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.admin)['shipping-profiles'][':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdminShippingProfilesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.admin['shipping-profiles'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdminShippingProfilesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.admin)['shipping-profiles'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.admin)['shipping-profiles'][':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin)['shipping-profiles'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin)['shipping-profiles'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAdminShippingProfilesIdQueryKey>
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
          Awaited<ReturnType<(typeof client.admin)['shipping-profiles'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminShippingProfilesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdminShippingProfilesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.admin['shipping-profiles'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAdminShippingProfilesIdMutationKey() {
  return ['admin', '/admin/shipping-profiles/:id', 'POST'] as const
}

export function getPostAdminShippingProfilesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin)['shipping-profiles'][':id']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.admin)['shipping-profiles'][':id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminShippingProfilesIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.admin)['shipping-profiles'][':id']['$post']>,
    ) {
      return parseResponse(client.admin['shipping-profiles'][':id'].$post(args, options))
    },
  })
}

export function usePostAdminShippingProfilesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin)['shipping-profiles'][':id']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.admin)['shipping-profiles'][':id']['$post']>,
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
  const mutationDefaults = getPostAdminShippingProfilesIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteAdminShippingProfilesIdMutationKey() {
  return ['admin', '/admin/shipping-profiles/:id', 'DELETE'] as const
}

export function getDeleteAdminShippingProfilesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin)['shipping-profiles'][':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.admin)['shipping-profiles'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAdminShippingProfilesIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.admin)['shipping-profiles'][':id']['$delete']>,
    ) {
      return parseResponse(client.admin['shipping-profiles'][':id'].$delete(args, options))
    },
  })
}

export function useDeleteAdminShippingProfilesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin)['shipping-profiles'][':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.admin)['shipping-profiles'][':id']['$delete']>,
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
  const mutationDefaults = getDeleteAdminShippingProfilesIdMutationOptions<TError, TOnMutateResult>(
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

export function getAdminStockLocationsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.admin)['stock-locations']['$get']>>,
) {
  return ['admin', '/admin/stock-locations', toValue(args)] as const
}

export function getAdminStockLocationsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.admin)['stock-locations']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdminStockLocationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.admin['stock-locations'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdminStockLocations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.admin)['stock-locations']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.admin)['stock-locations']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin)['stock-locations']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin)['stock-locations']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAdminStockLocationsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.admin)['stock-locations']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminStockLocationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdminStockLocationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.admin['stock-locations'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAdminStockLocationsMutationKey() {
  return ['admin', '/admin/stock-locations', 'POST'] as const
}

export function getPostAdminStockLocationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.admin)['stock-locations']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.admin)['stock-locations']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminStockLocationsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.admin)['stock-locations']['$post']>) {
      return parseResponse(client.admin['stock-locations'].$post(args, options))
    },
  })
}

export function usePostAdminStockLocations<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin)['stock-locations']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.admin)['stock-locations']['$post']>,
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
  const mutationDefaults = getPostAdminStockLocationsMutationOptions<TError, TOnMutateResult>(
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

export function getAdminStockLocationsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.admin)['stock-locations'][':id']['$get']>>,
) {
  return ['admin', '/admin/stock-locations/:id', toValue(args)] as const
}

export function getAdminStockLocationsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.admin)['stock-locations'][':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdminStockLocationsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.admin['stock-locations'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdminStockLocationsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.admin)['stock-locations'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.admin)['stock-locations'][':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin)['stock-locations'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin)['stock-locations'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAdminStockLocationsIdQueryKey>
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
          Awaited<ReturnType<(typeof client.admin)['stock-locations'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminStockLocationsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdminStockLocationsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.admin['stock-locations'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAdminStockLocationsIdMutationKey() {
  return ['admin', '/admin/stock-locations/:id', 'POST'] as const
}

export function getPostAdminStockLocationsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin)['stock-locations'][':id']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.admin)['stock-locations'][':id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminStockLocationsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.admin)['stock-locations'][':id']['$post']>,
    ) {
      return parseResponse(client.admin['stock-locations'][':id'].$post(args, options))
    },
  })
}

export function usePostAdminStockLocationsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin)['stock-locations'][':id']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.admin)['stock-locations'][':id']['$post']>,
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
  const mutationDefaults = getPostAdminStockLocationsIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteAdminStockLocationsIdMutationKey() {
  return ['admin', '/admin/stock-locations/:id', 'DELETE'] as const
}

export function getDeleteAdminStockLocationsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin)['stock-locations'][':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.admin)['stock-locations'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAdminStockLocationsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.admin)['stock-locations'][':id']['$delete']>,
    ) {
      return parseResponse(client.admin['stock-locations'][':id'].$delete(args, options))
    },
  })
}

export function useDeleteAdminStockLocationsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin)['stock-locations'][':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.admin)['stock-locations'][':id']['$delete']>,
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
  const mutationDefaults = getDeleteAdminStockLocationsIdMutationOptions<TError, TOnMutateResult>(
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

export function getPostAdminStockLocationsIdFulfillmentProvidersMutationKey() {
  return ['admin', '/admin/stock-locations/:id/fulfillment-providers', 'POST'] as const
}

export function getPostAdminStockLocationsIdFulfillmentProvidersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.admin)['stock-locations'][':id']['fulfillment-providers']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.admin)['stock-locations'][':id']['fulfillment-providers']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAdminStockLocationsIdFulfillmentProvidersMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.admin)['stock-locations'][':id']['fulfillment-providers']['$post']
      >,
    ) {
      return parseResponse(
        client.admin['stock-locations'][':id']['fulfillment-providers'].$post(args, options),
      )
    },
  })
}

export function usePostAdminStockLocationsIdFulfillmentProviders<
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
                    (typeof client.admin)['stock-locations'][':id']['fulfillment-providers']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.admin)['stock-locations'][':id']['fulfillment-providers']['$post']
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
  const mutationDefaults = getPostAdminStockLocationsIdFulfillmentProvidersMutationOptions<
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

export function getPostAdminStockLocationsIdFulfillmentSetsMutationKey() {
  return ['admin', '/admin/stock-locations/:id/fulfillment-sets', 'POST'] as const
}

export function getPostAdminStockLocationsIdFulfillmentSetsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.admin)['stock-locations'][':id']['fulfillment-sets']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.admin)['stock-locations'][':id']['fulfillment-sets']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminStockLocationsIdFulfillmentSetsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.admin)['stock-locations'][':id']['fulfillment-sets']['$post']
      >,
    ) {
      return parseResponse(
        client.admin['stock-locations'][':id']['fulfillment-sets'].$post(args, options),
      )
    },
  })
}

export function usePostAdminStockLocationsIdFulfillmentSets<
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
                    (typeof client.admin)['stock-locations'][':id']['fulfillment-sets']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.admin)['stock-locations'][':id']['fulfillment-sets']['$post']
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
  const mutationDefaults = getPostAdminStockLocationsIdFulfillmentSetsMutationOptions<
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

export function getPostAdminStockLocationsIdSalesChannelsMutationKey() {
  return ['admin', '/admin/stock-locations/:id/sales-channels', 'POST'] as const
}

export function getPostAdminStockLocationsIdSalesChannelsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.admin)['stock-locations'][':id']['sales-channels']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.admin)['stock-locations'][':id']['sales-channels']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminStockLocationsIdSalesChannelsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.admin)['stock-locations'][':id']['sales-channels']['$post']
      >,
    ) {
      return parseResponse(
        client.admin['stock-locations'][':id']['sales-channels'].$post(args, options),
      )
    },
  })
}

export function usePostAdminStockLocationsIdSalesChannels<
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
                    (typeof client.admin)['stock-locations'][':id']['sales-channels']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.admin)['stock-locations'][':id']['sales-channels']['$post']
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
  const mutationDefaults = getPostAdminStockLocationsIdSalesChannelsMutationOptions<
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

export function getAdminStoreCreditAccountsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.admin)['store-credit-accounts']['$get']>>,
) {
  return ['admin', '/admin/store-credit-accounts', toValue(args)] as const
}

export function getAdminStoreCreditAccountsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.admin)['store-credit-accounts']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdminStoreCreditAccountsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.admin['store-credit-accounts'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdminStoreCreditAccounts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.admin)['store-credit-accounts']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.admin)['store-credit-accounts']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin)['store-credit-accounts']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin)['store-credit-accounts']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAdminStoreCreditAccountsQueryKey>
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
          Awaited<ReturnType<(typeof client.admin)['store-credit-accounts']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminStoreCreditAccountsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdminStoreCreditAccountsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.admin['store-credit-accounts'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAdminStoreCreditAccountsMutationKey() {
  return ['admin', '/admin/store-credit-accounts', 'POST'] as const
}

export function getPostAdminStoreCreditAccountsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin)['store-credit-accounts']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.admin)['store-credit-accounts']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminStoreCreditAccountsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.admin)['store-credit-accounts']['$post']>,
    ) {
      return parseResponse(client.admin['store-credit-accounts'].$post(args, options))
    },
  })
}

export function usePostAdminStoreCreditAccounts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin)['store-credit-accounts']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.admin)['store-credit-accounts']['$post']>,
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
  const mutationDefaults = getPostAdminStoreCreditAccountsMutationOptions<TError, TOnMutateResult>(
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

export function getAdminStoreCreditAccountsIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.admin)['store-credit-accounts'][':id']['$get']>
  >,
) {
  return ['admin', '/admin/store-credit-accounts/:id', toValue(args)] as const
}

export function getAdminStoreCreditAccountsIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.admin)['store-credit-accounts'][':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdminStoreCreditAccountsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.admin['store-credit-accounts'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdminStoreCreditAccountsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.admin)['store-credit-accounts'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.admin)['store-credit-accounts'][':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin)['store-credit-accounts'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin)['store-credit-accounts'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAdminStoreCreditAccountsIdQueryKey>
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
          Awaited<ReturnType<(typeof client.admin)['store-credit-accounts'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminStoreCreditAccountsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdminStoreCreditAccountsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.admin['store-credit-accounts'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAdminStoreCreditAccountsIdCreditMutationKey() {
  return ['admin', '/admin/store-credit-accounts/:id/credit', 'POST'] as const
}

export function getPostAdminStoreCreditAccountsIdCreditMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.admin)['store-credit-accounts'][':id']['credit']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.admin)['store-credit-accounts'][':id']['credit']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminStoreCreditAccountsIdCreditMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.admin)['store-credit-accounts'][':id']['credit']['$post']
      >,
    ) {
      return parseResponse(client.admin['store-credit-accounts'][':id'].credit.$post(args, options))
    },
  })
}

export function usePostAdminStoreCreditAccountsIdCredit<
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
                    (typeof client.admin)['store-credit-accounts'][':id']['credit']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.admin)['store-credit-accounts'][':id']['credit']['$post']
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
  const mutationDefaults = getPostAdminStoreCreditAccountsIdCreditMutationOptions<
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

export function getPostAdminStoreCreditAccountsIdDebitMutationKey() {
  return ['admin', '/admin/store-credit-accounts/:id/debit', 'POST'] as const
}

export function getPostAdminStoreCreditAccountsIdDebitMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.admin)['store-credit-accounts'][':id']['debit']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.admin)['store-credit-accounts'][':id']['debit']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminStoreCreditAccountsIdDebitMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.admin)['store-credit-accounts'][':id']['debit']['$post']
      >,
    ) {
      return parseResponse(client.admin['store-credit-accounts'][':id'].debit.$post(args, options))
    },
  })
}

export function usePostAdminStoreCreditAccountsIdDebit<
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
                    (typeof client.admin)['store-credit-accounts'][':id']['debit']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.admin)['store-credit-accounts'][':id']['debit']['$post']>,
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
  const mutationDefaults = getPostAdminStoreCreditAccountsIdDebitMutationOptions<
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

export function getAdminStoreCreditAccountsIdTransactionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.admin)['store-credit-accounts'][':id']['transactions']['$get']>
  >,
) {
  return ['admin', '/admin/store-credit-accounts/:id/transactions', toValue(args)] as const
}

export function getAdminStoreCreditAccountsIdTransactionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.admin)['store-credit-accounts'][':id']['transactions']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdminStoreCreditAccountsIdTransactionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.admin['store-credit-accounts'][':id'].transactions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdminStoreCreditAccountsIdTransactions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.admin)['store-credit-accounts'][':id']['transactions']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.admin)['store-credit-accounts'][':id']['transactions']['$get']>
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
                    (typeof client.admin)['store-credit-accounts'][':id']['transactions']['$get']
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
                    (typeof client.admin)['store-credit-accounts'][':id']['transactions']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAdminStoreCreditAccountsIdTransactionsQueryKey>
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
              (typeof client.admin)['store-credit-accounts'][':id']['transactions']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminStoreCreditAccountsIdTransactionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdminStoreCreditAccountsIdTransactionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.admin['store-credit-accounts'][':id'].transactions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAdminStoresQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.admin.stores.$get>>,
) {
  return ['admin', '/admin/stores', toValue(args)] as const
}

export function getAdminStoresQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.admin.stores.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdminStoresQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.admin.stores.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useAdminStores<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.stores.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.admin.stores.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.stores.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.stores.$get>>>>
          >,
          ReturnType<typeof getAdminStoresQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.stores.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAdminStoresQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdminStoresQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.admin.stores.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAdminStoresIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.admin.stores)[':id']['$get']>>,
) {
  return ['admin', '/admin/stores/:id', toValue(args)] as const
}

export function getAdminStoresIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.admin.stores)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdminStoresIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.admin.stores[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdminStoresId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.admin.stores)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.admin.stores)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.admin.stores)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.admin.stores)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getAdminStoresIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.admin.stores)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminStoresIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdminStoresIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.admin.stores[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAdminStoresIdMutationKey() {
  return ['admin', '/admin/stores/:id', 'POST'] as const
}

export function getPostAdminStoresIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.admin.stores)[':id']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.admin.stores)[':id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminStoresIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.admin.stores)[':id']['$post']>) {
      return parseResponse(client.admin.stores[':id'].$post(args, options))
    },
  })
}

export function usePostAdminStoresId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin.stores)[':id']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.admin.stores)[':id']['$post']>,
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
  const mutationDefaults = getPostAdminStoresIdMutationOptions<TError, TOnMutateResult>(
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

export function getAdminTaxProvidersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.admin)['tax-providers']['$get']>>,
) {
  return ['admin', '/admin/tax-providers', toValue(args)] as const
}

export function getAdminTaxProvidersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.admin)['tax-providers']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdminTaxProvidersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.admin['tax-providers'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdminTaxProviders<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.admin)['tax-providers']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.admin)['tax-providers']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin)['tax-providers']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin)['tax-providers']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAdminTaxProvidersQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.admin)['tax-providers']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminTaxProvidersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdminTaxProvidersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.admin['tax-providers'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAdminTaxRatesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.admin)['tax-rates']['$get']>>,
) {
  return ['admin', '/admin/tax-rates', toValue(args)] as const
}

export function getAdminTaxRatesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.admin)['tax-rates']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdminTaxRatesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.admin['tax-rates'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdminTaxRates<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.admin)['tax-rates']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.admin)['tax-rates']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.admin)['tax-rates']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.admin)['tax-rates']['$get']>>>
            >
          >,
          ReturnType<typeof getAdminTaxRatesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.admin)['tax-rates']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminTaxRatesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdminTaxRatesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.admin['tax-rates'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAdminTaxRatesMutationKey() {
  return ['admin', '/admin/tax-rates', 'POST'] as const
}

export function getPostAdminTaxRatesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.admin)['tax-rates']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.admin)['tax-rates']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminTaxRatesMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.admin)['tax-rates']['$post']>) {
      return parseResponse(client.admin['tax-rates'].$post(args, options))
    },
  })
}

export function usePostAdminTaxRates<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.admin)['tax-rates']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.admin)['tax-rates']['$post']>,
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
  const mutationDefaults = getPostAdminTaxRatesMutationOptions<TError, TOnMutateResult>(
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

export function getAdminTaxRatesIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.admin)['tax-rates'][':id']['$get']>>,
) {
  return ['admin', '/admin/tax-rates/:id', toValue(args)] as const
}

export function getAdminTaxRatesIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.admin)['tax-rates'][':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdminTaxRatesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.admin['tax-rates'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdminTaxRatesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.admin)['tax-rates'][':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.admin)['tax-rates'][':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin)['tax-rates'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin)['tax-rates'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAdminTaxRatesIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.admin)['tax-rates'][':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminTaxRatesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdminTaxRatesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.admin['tax-rates'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAdminTaxRatesIdMutationKey() {
  return ['admin', '/admin/tax-rates/:id', 'POST'] as const
}

export function getPostAdminTaxRatesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin)['tax-rates'][':id']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.admin)['tax-rates'][':id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminTaxRatesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.admin)['tax-rates'][':id']['$post']>) {
      return parseResponse(client.admin['tax-rates'][':id'].$post(args, options))
    },
  })
}

export function usePostAdminTaxRatesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin)['tax-rates'][':id']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.admin)['tax-rates'][':id']['$post']>,
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
  const mutationDefaults = getPostAdminTaxRatesIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteAdminTaxRatesIdMutationKey() {
  return ['admin', '/admin/tax-rates/:id', 'DELETE'] as const
}

export function getDeleteAdminTaxRatesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin)['tax-rates'][':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.admin)['tax-rates'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAdminTaxRatesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.admin)['tax-rates'][':id']['$delete']>) {
      return parseResponse(client.admin['tax-rates'][':id'].$delete(args, options))
    },
  })
}

export function useDeleteAdminTaxRatesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin)['tax-rates'][':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.admin)['tax-rates'][':id']['$delete']>,
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
  const mutationDefaults = getDeleteAdminTaxRatesIdMutationOptions<TError, TOnMutateResult>(
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

export function getPostAdminTaxRatesIdRulesMutationKey() {
  return ['admin', '/admin/tax-rates/:id/rules', 'POST'] as const
}

export function getPostAdminTaxRatesIdRulesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin)['tax-rates'][':id']['rules']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.admin)['tax-rates'][':id']['rules']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminTaxRatesIdRulesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.admin)['tax-rates'][':id']['rules']['$post']>,
    ) {
      return parseResponse(client.admin['tax-rates'][':id'].rules.$post(args, options))
    },
  })
}

export function usePostAdminTaxRatesIdRules<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin)['tax-rates'][':id']['rules']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.admin)['tax-rates'][':id']['rules']['$post']>,
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
  const mutationDefaults = getPostAdminTaxRatesIdRulesMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteAdminTaxRatesIdRulesRuleIdMutationKey() {
  return ['admin', '/admin/tax-rates/:id/rules/:rule_id', 'DELETE'] as const
}

export function getDeleteAdminTaxRatesIdRulesRuleIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.admin)['tax-rates'][':id']['rules'][':rule_id']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.admin)['tax-rates'][':id']['rules'][':rule_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAdminTaxRatesIdRulesRuleIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.admin)['tax-rates'][':id']['rules'][':rule_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.admin['tax-rates'][':id'].rules[':rule_id'].$delete(args, options),
      )
    },
  })
}

export function useDeleteAdminTaxRatesIdRulesRuleId<
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
                    (typeof client.admin)['tax-rates'][':id']['rules'][':rule_id']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.admin)['tax-rates'][':id']['rules'][':rule_id']['$delete']
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
  const mutationDefaults = getDeleteAdminTaxRatesIdRulesRuleIdMutationOptions<
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

export function getAdminTaxRegionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.admin)['tax-regions']['$get']>>,
) {
  return ['admin', '/admin/tax-regions', toValue(args)] as const
}

export function getAdminTaxRegionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.admin)['tax-regions']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdminTaxRegionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.admin['tax-regions'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdminTaxRegions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.admin)['tax-regions']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.admin)['tax-regions']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin)['tax-regions']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin)['tax-regions']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAdminTaxRegionsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.admin)['tax-regions']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminTaxRegionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdminTaxRegionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.admin['tax-regions'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAdminTaxRegionsMutationKey() {
  return ['admin', '/admin/tax-regions', 'POST'] as const
}

export function getPostAdminTaxRegionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.admin)['tax-regions']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.admin)['tax-regions']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminTaxRegionsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.admin)['tax-regions']['$post']>) {
      return parseResponse(client.admin['tax-regions'].$post(args, options))
    },
  })
}

export function usePostAdminTaxRegions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin)['tax-regions']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.admin)['tax-regions']['$post']>,
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
  const mutationDefaults = getPostAdminTaxRegionsMutationOptions<TError, TOnMutateResult>(
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

export function getAdminTaxRegionsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.admin)['tax-regions'][':id']['$get']>>,
) {
  return ['admin', '/admin/tax-regions/:id', toValue(args)] as const
}

export function getAdminTaxRegionsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.admin)['tax-regions'][':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdminTaxRegionsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.admin['tax-regions'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdminTaxRegionsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.admin)['tax-regions'][':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.admin)['tax-regions'][':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin)['tax-regions'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin)['tax-regions'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAdminTaxRegionsIdQueryKey>
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
          Awaited<ReturnType<(typeof client.admin)['tax-regions'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminTaxRegionsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdminTaxRegionsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.admin['tax-regions'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAdminTaxRegionsIdMutationKey() {
  return ['admin', '/admin/tax-regions/:id', 'POST'] as const
}

export function getPostAdminTaxRegionsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin)['tax-regions'][':id']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.admin)['tax-regions'][':id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminTaxRegionsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.admin)['tax-regions'][':id']['$post']>) {
      return parseResponse(client.admin['tax-regions'][':id'].$post(args, options))
    },
  })
}

export function usePostAdminTaxRegionsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin)['tax-regions'][':id']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.admin)['tax-regions'][':id']['$post']>,
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
  const mutationDefaults = getPostAdminTaxRegionsIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteAdminTaxRegionsIdMutationKey() {
  return ['admin', '/admin/tax-regions/:id', 'DELETE'] as const
}

export function getDeleteAdminTaxRegionsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin)['tax-regions'][':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.admin)['tax-regions'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAdminTaxRegionsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.admin)['tax-regions'][':id']['$delete']>,
    ) {
      return parseResponse(client.admin['tax-regions'][':id'].$delete(args, options))
    },
  })
}

export function useDeleteAdminTaxRegionsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin)['tax-regions'][':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.admin)['tax-regions'][':id']['$delete']>,
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
  const mutationDefaults = getDeleteAdminTaxRegionsIdMutationOptions<TError, TOnMutateResult>(
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

export function getAdminTranslationsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.admin.translations.$get>>,
) {
  return ['admin', '/admin/translations', toValue(args)] as const
}

export function getAdminTranslationsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.admin.translations.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdminTranslationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.admin.translations.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdminTranslations<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.translations.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.admin.translations.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.admin.translations.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.admin.translations.$get>>>
            >
          >,
          ReturnType<typeof getAdminTranslationsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.translations.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAdminTranslationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdminTranslationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.admin.translations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAdminTranslationsBatchMutationKey() {
  return ['admin', '/admin/translations/batch', 'POST'] as const
}

export function getPostAdminTranslationsBatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.admin.translations.batch.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.admin.translations.batch.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminTranslationsBatchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.admin.translations.batch.$post>) {
      return parseResponse(client.admin.translations.batch.$post(args, options))
    },
  })
}

export function usePostAdminTranslationsBatch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.admin.translations.batch.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.admin.translations.batch.$post>,
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
  const mutationDefaults = getPostAdminTranslationsBatchMutationOptions<TError, TOnMutateResult>(
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

export function getAdminTranslationsEntitiesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.admin.translations.entities.$get>>,
) {
  return ['admin', '/admin/translations/entities', toValue(args)] as const
}

export function getAdminTranslationsEntitiesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.admin.translations.entities.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdminTranslationsEntitiesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.admin.translations.entities.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdminTranslationsEntities<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.admin.translations.entities.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.admin.translations.entities.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.admin.translations.entities.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.admin.translations.entities.$get>>
              >
            >
          >,
          ReturnType<typeof getAdminTranslationsEntitiesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.admin.translations.entities.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminTranslationsEntitiesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdminTranslationsEntitiesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.admin.translations.entities.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAdminTranslationsSettingsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.admin.translations.settings.$get>>,
) {
  return ['admin', '/admin/translations/settings', toValue(args)] as const
}

export function getAdminTranslationsSettingsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.admin.translations.settings.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdminTranslationsSettingsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.admin.translations.settings.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdminTranslationsSettings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.admin.translations.settings.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.admin.translations.settings.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.admin.translations.settings.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.admin.translations.settings.$get>>
              >
            >
          >,
          ReturnType<typeof getAdminTranslationsSettingsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.admin.translations.settings.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminTranslationsSettingsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdminTranslationsSettingsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.admin.translations.settings.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAdminTranslationsSettingsBatchMutationKey() {
  return ['admin', '/admin/translations/settings/batch', 'POST'] as const
}

export function getPostAdminTranslationsSettingsBatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.admin.translations.settings.batch.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.admin.translations.settings.batch.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminTranslationsSettingsBatchMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.admin.translations.settings.batch.$post>,
    ) {
      return parseResponse(client.admin.translations.settings.batch.$post(args, options))
    },
  })
}

export function usePostAdminTranslationsSettingsBatch<
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
                Awaited<ReturnType<typeof client.admin.translations.settings.batch.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.admin.translations.settings.batch.$post>,
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
  const mutationDefaults = getPostAdminTranslationsSettingsBatchMutationOptions<
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

export function getAdminTranslationsStatisticsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.admin.translations.statistics.$get>>,
) {
  return ['admin', '/admin/translations/statistics', toValue(args)] as const
}

export function getAdminTranslationsStatisticsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.admin.translations.statistics.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdminTranslationsStatisticsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.admin.translations.statistics.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdminTranslationsStatistics<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.admin.translations.statistics.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.admin.translations.statistics.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.admin.translations.statistics.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.admin.translations.statistics.$get>>
              >
            >
          >,
          ReturnType<typeof getAdminTranslationsStatisticsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.admin.translations.statistics.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminTranslationsStatisticsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdminTranslationsStatisticsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.admin.translations.statistics.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAdminUploadsMutationKey() {
  return ['admin', '/admin/uploads', 'POST'] as const
}

export function getPostAdminUploadsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.uploads.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.admin.uploads.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminUploadsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.admin.uploads.$post>) {
      return parseResponse(client.admin.uploads.$post(args, options))
    },
  })
}

export function usePostAdminUploads<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.uploads.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.admin.uploads.$post>,
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
  const mutationDefaults = getPostAdminUploadsMutationOptions<TError, TOnMutateResult>(
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

export function getPostAdminUploadsPresignedUrlsMutationKey() {
  return ['admin', '/admin/uploads/presigned-urls', 'POST'] as const
}

export function getPostAdminUploadsPresignedUrlsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin.uploads)['presigned-urls']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.admin.uploads)['presigned-urls']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminUploadsPresignedUrlsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.admin.uploads)['presigned-urls']['$post']>,
    ) {
      return parseResponse(client.admin.uploads['presigned-urls'].$post(args, options))
    },
  })
}

export function usePostAdminUploadsPresignedUrls<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin.uploads)['presigned-urls']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.admin.uploads)['presigned-urls']['$post']>,
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
  const mutationDefaults = getPostAdminUploadsPresignedUrlsMutationOptions<TError, TOnMutateResult>(
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

export function getAdminUploadsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.admin.uploads)[':id']['$get']>>,
) {
  return ['admin', '/admin/uploads/:id', toValue(args)] as const
}

export function getAdminUploadsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.admin.uploads)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdminUploadsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.admin.uploads[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdminUploadsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.admin.uploads)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.admin.uploads)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin.uploads)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin.uploads)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAdminUploadsIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.admin.uploads)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminUploadsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdminUploadsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.admin.uploads[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteAdminUploadsIdMutationKey() {
  return ['admin', '/admin/uploads/:id', 'DELETE'] as const
}

export function getDeleteAdminUploadsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.admin.uploads)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.admin.uploads)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAdminUploadsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.admin.uploads)[':id']['$delete']>) {
      return parseResponse(client.admin.uploads[':id'].$delete(args, options))
    },
  })
}

export function useDeleteAdminUploadsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin.uploads)[':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.admin.uploads)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteAdminUploadsIdMutationOptions<TError, TOnMutateResult>(
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

export function getAdminUsersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.admin.users.$get>>,
) {
  return ['admin', '/admin/users', toValue(args)] as const
}

export function getAdminUsersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.admin.users.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdminUsersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.admin.users.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useAdminUsers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.users.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.admin.users.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.users.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.users.$get>>>>
          >,
          ReturnType<typeof getAdminUsersQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.users.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAdminUsersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdminUsersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.admin.users.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAdminUsersMeQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.admin.users.me.$get>>,
) {
  return ['admin', '/admin/users/me', toValue(args)] as const
}

export function getAdminUsersMeQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.admin.users.me.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdminUsersMeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.admin.users.me.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdminUsersMe<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.users.me.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.admin.users.me.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.users.me.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.users.me.$get>>>>
          >,
          ReturnType<typeof getAdminUsersMeQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.users.me.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAdminUsersMeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdminUsersMeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.admin.users.me.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAdminUsersMeMutationKey() {
  return ['admin', '/admin/users/me', 'POST'] as const
}

export function getPostAdminUsersMeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.users.me.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.admin.users.me.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminUsersMeMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.admin.users.me.$post>) {
      return parseResponse(client.admin.users.me.$post(args, options))
    },
  })
}

export function usePostAdminUsersMe<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.admin.users.me.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.admin.users.me.$post>,
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
  const mutationDefaults = getPostAdminUsersMeMutationOptions<TError, TOnMutateResult>(
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

export function getAdminUsersIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.admin.users)[':id']['$get']>>,
) {
  return ['admin', '/admin/users/:id', toValue(args)] as const
}

export function getAdminUsersIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.admin.users)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdminUsersIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.admin.users[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdminUsersId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.admin.users)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.admin.users)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.admin.users)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.admin.users)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getAdminUsersIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.admin.users)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminUsersIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdminUsersIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.admin.users[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAdminUsersIdMutationKey() {
  return ['admin', '/admin/users/:id', 'POST'] as const
}

export function getPostAdminUsersIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.admin.users)[':id']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.admin.users)[':id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminUsersIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.admin.users)[':id']['$post']>) {
      return parseResponse(client.admin.users[':id'].$post(args, options))
    },
  })
}

export function usePostAdminUsersId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.admin.users)[':id']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.admin.users)[':id']['$post']>,
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
  const mutationDefaults = getPostAdminUsersIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteAdminUsersIdMutationKey() {
  return ['admin', '/admin/users/:id', 'DELETE'] as const
}

export function getDeleteAdminUsersIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.admin.users)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.admin.users)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAdminUsersIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.admin.users)[':id']['$delete']>) {
      return parseResponse(client.admin.users[':id'].$delete(args, options))
    },
  })
}

export function useDeleteAdminUsersId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin.users)[':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.admin.users)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteAdminUsersIdMutationOptions<TError, TOnMutateResult>(
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

export function getAdminUsersIdAuthProvidersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.admin.users)[':id']['auth-providers']['$get']>
  >,
) {
  return ['admin', '/admin/users/:id/auth-providers', toValue(args)] as const
}

export function getAdminUsersIdAuthProvidersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.admin.users)[':id']['auth-providers']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdminUsersIdAuthProvidersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.admin.users[':id']['auth-providers'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdminUsersIdAuthProviders<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.admin.users)[':id']['auth-providers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.admin.users)[':id']['auth-providers']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin.users)[':id']['auth-providers']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin.users)[':id']['auth-providers']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAdminUsersIdAuthProvidersQueryKey>
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
          Awaited<ReturnType<(typeof client.admin.users)[':id']['auth-providers']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminUsersIdAuthProvidersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdminUsersIdAuthProvidersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.admin.users[':id']['auth-providers'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAdminUsersIdResetPasswordMutationKey() {
  return ['admin', '/admin/users/:id/reset-password', 'POST'] as const
}

export function getPostAdminUsersIdResetPasswordMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin.users)[':id']['reset-password']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.admin.users)[':id']['reset-password']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminUsersIdResetPasswordMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.admin.users)[':id']['reset-password']['$post']>,
    ) {
      return parseResponse(client.admin.users[':id']['reset-password'].$post(args, options))
    },
  })
}

export function usePostAdminUsersIdResetPassword<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin.users)[':id']['reset-password']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.admin.users)[':id']['reset-password']['$post']>,
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
  const mutationDefaults = getPostAdminUsersIdResetPasswordMutationOptions<TError, TOnMutateResult>(
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

export function getAdminUsersIdRolesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.admin.users)[':id']['roles']['$get']>>,
) {
  return ['admin', '/admin/users/:id/roles', toValue(args)] as const
}

export function getAdminUsersIdRolesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.admin.users)[':id']['roles']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdminUsersIdRolesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.admin.users[':id'].roles.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdminUsersIdRoles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.admin.users)[':id']['roles']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.admin.users)[':id']['roles']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin.users)[':id']['roles']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin.users)[':id']['roles']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAdminUsersIdRolesQueryKey>
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
          Awaited<ReturnType<(typeof client.admin.users)[':id']['roles']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminUsersIdRolesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdminUsersIdRolesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.admin.users[':id'].roles.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAdminUsersIdRolesMutationKey() {
  return ['admin', '/admin/users/:id/roles', 'POST'] as const
}

export function getPostAdminUsersIdRolesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin.users)[':id']['roles']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.admin.users)[':id']['roles']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminUsersIdRolesMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.admin.users)[':id']['roles']['$post']>) {
      return parseResponse(client.admin.users[':id'].roles.$post(args, options))
    },
  })
}

export function usePostAdminUsersIdRoles<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin.users)[':id']['roles']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.admin.users)[':id']['roles']['$post']>,
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
  const mutationDefaults = getPostAdminUsersIdRolesMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteAdminUsersIdRolesMutationKey() {
  return ['admin', '/admin/users/:id/roles', 'DELETE'] as const
}

export function getDeleteAdminUsersIdRolesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin.users)[':id']['roles']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.admin.users)[':id']['roles']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAdminUsersIdRolesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.admin.users)[':id']['roles']['$delete']>,
    ) {
      return parseResponse(client.admin.users[':id'].roles.$delete(args, options))
    },
  })
}

export function useDeleteAdminUsersIdRoles<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin.users)[':id']['roles']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.admin.users)[':id']['roles']['$delete']>,
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
  const mutationDefaults = getDeleteAdminUsersIdRolesMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteAdminUsersIdRolesRoleIdMutationKey() {
  return ['admin', '/admin/users/:id/roles/:role_id', 'DELETE'] as const
}

export function getDeleteAdminUsersIdRolesRoleIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin.users)[':id']['roles'][':role_id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.admin.users)[':id']['roles'][':role_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAdminUsersIdRolesRoleIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.admin.users)[':id']['roles'][':role_id']['$delete']>,
    ) {
      return parseResponse(client.admin.users[':id'].roles[':role_id'].$delete(args, options))
    },
  })
}

export function useDeleteAdminUsersIdRolesRoleId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.admin.users)[':id']['roles'][':role_id']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.admin.users)[':id']['roles'][':role_id']['$delete']>,
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
  const mutationDefaults = getDeleteAdminUsersIdRolesRoleIdMutationOptions<TError, TOnMutateResult>(
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

export function getAdminViewsEntitiesQueryKey() {
  return ['admin', '/admin/views/entities'] as const
}

export function getAdminViewsEntitiesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getAdminViewsEntitiesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.admin.views.entities.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdminViewsEntities<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.views.entities.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.admin.views.entities.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.admin.views.entities.$get>>>
            >
          >,
          ReturnType<typeof getAdminViewsEntitiesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.views.entities.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAdminViewsEntitiesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getAdminViewsEntitiesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.admin.views.entities.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAdminViewsEntityColumnsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.admin.views)[':entity']['columns']['$get']>
  >,
) {
  return ['admin', '/admin/views/:entity/columns', toValue(args)] as const
}

export function getAdminViewsEntityColumnsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.admin.views)[':entity']['columns']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdminViewsEntityColumnsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.admin.views[':entity'].columns.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdminViewsEntityColumns<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.admin.views)[':entity']['columns']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.admin.views)[':entity']['columns']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin.views)[':entity']['columns']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin.views)[':entity']['columns']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAdminViewsEntityColumnsQueryKey>
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
          Awaited<ReturnType<(typeof client.admin.views)[':entity']['columns']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminViewsEntityColumnsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdminViewsEntityColumnsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.admin.views[':entity'].columns.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAdminViewsEntityConfigurationsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.admin.views)[':entity']['configurations']['$get']>
  >,
) {
  return ['admin', '/admin/views/:entity/configurations', toValue(args)] as const
}

export function getAdminViewsEntityConfigurationsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.admin.views)[':entity']['configurations']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdminViewsEntityConfigurationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.admin.views[':entity'].configurations.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdminViewsEntityConfigurations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.admin.views)[':entity']['configurations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.admin.views)[':entity']['configurations']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.admin.views)[':entity']['configurations']['$get']>
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
                  ReturnType<(typeof client.admin.views)[':entity']['configurations']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getAdminViewsEntityConfigurationsQueryKey>
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
          Awaited<ReturnType<(typeof client.admin.views)[':entity']['configurations']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminViewsEntityConfigurationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdminViewsEntityConfigurationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.admin.views[':entity'].configurations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAdminViewsEntityConfigurationsMutationKey() {
  return ['admin', '/admin/views/:entity/configurations', 'POST'] as const
}

export function getPostAdminViewsEntityConfigurationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin.views)[':entity']['configurations']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.admin.views)[':entity']['configurations']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminViewsEntityConfigurationsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.admin.views)[':entity']['configurations']['$post']>,
    ) {
      return parseResponse(client.admin.views[':entity'].configurations.$post(args, options))
    },
  })
}

export function usePostAdminViewsEntityConfigurations<
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
                  ReturnType<(typeof client.admin.views)[':entity']['configurations']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.admin.views)[':entity']['configurations']['$post']>,
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
  const mutationDefaults = getPostAdminViewsEntityConfigurationsMutationOptions<
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

export function getAdminViewsEntityConfigurationsActiveQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.admin.views)[':entity']['configurations']['active']['$get']>
  >,
) {
  return ['admin', '/admin/views/:entity/configurations/active', toValue(args)] as const
}

export function getAdminViewsEntityConfigurationsActiveQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.admin.views)[':entity']['configurations']['active']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdminViewsEntityConfigurationsActiveQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.admin.views[':entity'].configurations.active.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdminViewsEntityConfigurationsActive<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.admin.views)[':entity']['configurations']['active']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.admin.views)[':entity']['configurations']['active']['$get']>
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
                    (typeof client.admin.views)[':entity']['configurations']['active']['$get']
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
                    (typeof client.admin.views)[':entity']['configurations']['active']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAdminViewsEntityConfigurationsActiveQueryKey>
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
            ReturnType<(typeof client.admin.views)[':entity']['configurations']['active']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminViewsEntityConfigurationsActiveQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdminViewsEntityConfigurationsActiveQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.admin.views[':entity'].configurations.active.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAdminViewsEntityConfigurationsActiveMutationKey() {
  return ['admin', '/admin/views/:entity/configurations/active', 'POST'] as const
}

export function getPostAdminViewsEntityConfigurationsActiveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.admin.views)[':entity']['configurations']['active']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.admin.views)[':entity']['configurations']['active']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminViewsEntityConfigurationsActiveMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.admin.views)[':entity']['configurations']['active']['$post']
      >,
    ) {
      return parseResponse(client.admin.views[':entity'].configurations.active.$post(args, options))
    },
  })
}

export function usePostAdminViewsEntityConfigurationsActive<
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
                    (typeof client.admin.views)[':entity']['configurations']['active']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.admin.views)[':entity']['configurations']['active']['$post']
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
  const mutationDefaults = getPostAdminViewsEntityConfigurationsActiveMutationOptions<
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

export function getAdminViewsEntityConfigurationsIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.admin.views)[':entity']['configurations'][':id']['$get']>
  >,
) {
  return ['admin', '/admin/views/:entity/configurations/:id', toValue(args)] as const
}

export function getAdminViewsEntityConfigurationsIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.admin.views)[':entity']['configurations'][':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdminViewsEntityConfigurationsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.admin.views[':entity'].configurations[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdminViewsEntityConfigurationsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.admin.views)[':entity']['configurations'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.admin.views)[':entity']['configurations'][':id']['$get']>
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
                    (typeof client.admin.views)[':entity']['configurations'][':id']['$get']
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
                    (typeof client.admin.views)[':entity']['configurations'][':id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAdminViewsEntityConfigurationsIdQueryKey>
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
            ReturnType<(typeof client.admin.views)[':entity']['configurations'][':id']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminViewsEntityConfigurationsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdminViewsEntityConfigurationsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.admin.views[':entity'].configurations[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAdminViewsEntityConfigurationsIdMutationKey() {
  return ['admin', '/admin/views/:entity/configurations/:id', 'POST'] as const
}

export function getPostAdminViewsEntityConfigurationsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.admin.views)[':entity']['configurations'][':id']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.admin.views)[':entity']['configurations'][':id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminViewsEntityConfigurationsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.admin.views)[':entity']['configurations'][':id']['$post']
      >,
    ) {
      return parseResponse(client.admin.views[':entity'].configurations[':id'].$post(args, options))
    },
  })
}

export function usePostAdminViewsEntityConfigurationsId<
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
                    (typeof client.admin.views)[':entity']['configurations'][':id']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.admin.views)[':entity']['configurations'][':id']['$post']
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
  const mutationDefaults = getPostAdminViewsEntityConfigurationsIdMutationOptions<
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

export function getDeleteAdminViewsEntityConfigurationsIdMutationKey() {
  return ['admin', '/admin/views/:entity/configurations/:id', 'DELETE'] as const
}

export function getDeleteAdminViewsEntityConfigurationsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.admin.views)[':entity']['configurations'][':id']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.admin.views)[':entity']['configurations'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAdminViewsEntityConfigurationsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.admin.views)[':entity']['configurations'][':id']['$delete']
      >,
    ) {
      return parseResponse(
        client.admin.views[':entity'].configurations[':id'].$delete(args, options),
      )
    },
  })
}

export function useDeleteAdminViewsEntityConfigurationsId<
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
                    (typeof client.admin.views)[':entity']['configurations'][':id']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.admin.views)[':entity']['configurations'][':id']['$delete']
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
  const mutationDefaults = getDeleteAdminViewsEntityConfigurationsIdMutationOptions<
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

export function getAdminWorkflowsExecutionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.admin)['workflows-executions']['$get']>>,
) {
  return ['admin', '/admin/workflows-executions', toValue(args)] as const
}

export function getAdminWorkflowsExecutionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.admin)['workflows-executions']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdminWorkflowsExecutionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.admin['workflows-executions'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdminWorkflowsExecutions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.admin)['workflows-executions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.admin)['workflows-executions']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin)['workflows-executions']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin)['workflows-executions']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAdminWorkflowsExecutionsQueryKey>
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
          Awaited<ReturnType<(typeof client.admin)['workflows-executions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminWorkflowsExecutionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdminWorkflowsExecutionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.admin['workflows-executions'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAdminWorkflowsExecutionsIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.admin)['workflows-executions'][':id']['$get']>
  >,
) {
  return ['admin', '/admin/workflows-executions/:id', toValue(args)] as const
}

export function getAdminWorkflowsExecutionsIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.admin)['workflows-executions'][':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdminWorkflowsExecutionsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.admin['workflows-executions'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdminWorkflowsExecutionsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.admin)['workflows-executions'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.admin)['workflows-executions'][':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin)['workflows-executions'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin)['workflows-executions'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAdminWorkflowsExecutionsIdQueryKey>
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
          Awaited<ReturnType<(typeof client.admin)['workflows-executions'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminWorkflowsExecutionsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdminWorkflowsExecutionsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.admin['workflows-executions'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAdminWorkflowsExecutionsWorkflowIdRunMutationKey() {
  return ['admin', '/admin/workflows-executions/:workflow_id/run', 'POST'] as const
}

export function getPostAdminWorkflowsExecutionsWorkflowIdRunMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.admin)['workflows-executions'][':workflow_id']['run']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.admin)['workflows-executions'][':workflow_id']['run']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminWorkflowsExecutionsWorkflowIdRunMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.admin)['workflows-executions'][':workflow_id']['run']['$post']
      >,
    ) {
      return parseResponse(
        client.admin['workflows-executions'][':workflow_id'].run.$post(args, options),
      )
    },
  })
}

export function usePostAdminWorkflowsExecutionsWorkflowIdRun<
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
                    (typeof client.admin)['workflows-executions'][':workflow_id']['run']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.admin)['workflows-executions'][':workflow_id']['run']['$post']
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
  const mutationDefaults = getPostAdminWorkflowsExecutionsWorkflowIdRunMutationOptions<
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

export function getPostAdminWorkflowsExecutionsWorkflowIdStepsFailureMutationKey() {
  return ['admin', '/admin/workflows-executions/:workflow_id/steps/failure', 'POST'] as const
}

export function getPostAdminWorkflowsExecutionsWorkflowIdStepsFailureMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.admin)['workflows-executions'][':workflow_id']['steps']['failure']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.admin)['workflows-executions'][':workflow_id']['steps']['failure']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAdminWorkflowsExecutionsWorkflowIdStepsFailureMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.admin)['workflows-executions'][':workflow_id']['steps']['failure']['$post']
      >,
    ) {
      return parseResponse(
        client.admin['workflows-executions'][':workflow_id'].steps.failure.$post(args, options),
      )
    },
  })
}

export function usePostAdminWorkflowsExecutionsWorkflowIdStepsFailure<
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
                    (typeof client.admin)['workflows-executions'][':workflow_id']['steps']['failure']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.admin)['workflows-executions'][':workflow_id']['steps']['failure']['$post']
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
  const mutationDefaults = getPostAdminWorkflowsExecutionsWorkflowIdStepsFailureMutationOptions<
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

export function getPostAdminWorkflowsExecutionsWorkflowIdStepsSuccessMutationKey() {
  return ['admin', '/admin/workflows-executions/:workflow_id/steps/success', 'POST'] as const
}

export function getPostAdminWorkflowsExecutionsWorkflowIdStepsSuccessMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.admin)['workflows-executions'][':workflow_id']['steps']['success']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.admin)['workflows-executions'][':workflow_id']['steps']['success']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAdminWorkflowsExecutionsWorkflowIdStepsSuccessMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.admin)['workflows-executions'][':workflow_id']['steps']['success']['$post']
      >,
    ) {
      return parseResponse(
        client.admin['workflows-executions'][':workflow_id'].steps.success.$post(args, options),
      )
    },
  })
}

export function usePostAdminWorkflowsExecutionsWorkflowIdStepsSuccess<
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
                    (typeof client.admin)['workflows-executions'][':workflow_id']['steps']['success']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.admin)['workflows-executions'][':workflow_id']['steps']['success']['$post']
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
  const mutationDefaults = getPostAdminWorkflowsExecutionsWorkflowIdStepsSuccessMutationOptions<
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

export function getAdminWorkflowsExecutionsWorkflowIdSubscribeQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.admin)['workflows-executions'][':workflow_id']['subscribe']['$get']
    >
  >,
) {
  return ['admin', '/admin/workflows-executions/:workflow_id/subscribe', toValue(args)] as const
}

export function getAdminWorkflowsExecutionsWorkflowIdSubscribeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.admin)['workflows-executions'][':workflow_id']['subscribe']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdminWorkflowsExecutionsWorkflowIdSubscribeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.admin['workflows-executions'][':workflow_id'].subscribe.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdminWorkflowsExecutionsWorkflowIdSubscribe<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.admin)['workflows-executions'][':workflow_id']['subscribe']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.admin)['workflows-executions'][':workflow_id']['subscribe']['$get']
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
                    (typeof client.admin)['workflows-executions'][':workflow_id']['subscribe']['$get']
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
                    (typeof client.admin)['workflows-executions'][':workflow_id']['subscribe']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAdminWorkflowsExecutionsWorkflowIdSubscribeQueryKey>
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
              (typeof client.admin)['workflows-executions'][':workflow_id']['subscribe']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminWorkflowsExecutionsWorkflowIdSubscribeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdminWorkflowsExecutionsWorkflowIdSubscribeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.admin['workflows-executions'][':workflow_id'].subscribe.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAdminWorkflowsExecutionsWorkflowIdTransactionIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.admin)['workflows-executions'][':workflow_id'][':transaction_id']['$get']
    >
  >,
) {
  return [
    'admin',
    '/admin/workflows-executions/:workflow_id/:transaction_id',
    toValue(args),
  ] as const
}

export function getAdminWorkflowsExecutionsWorkflowIdTransactionIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.admin)['workflows-executions'][':workflow_id'][':transaction_id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdminWorkflowsExecutionsWorkflowIdTransactionIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.admin['workflows-executions'][':workflow_id'][':transaction_id'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useAdminWorkflowsExecutionsWorkflowIdTransactionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.admin)['workflows-executions'][':workflow_id'][':transaction_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.admin)['workflows-executions'][':workflow_id'][':transaction_id']['$get']
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
                    (typeof client.admin)['workflows-executions'][':workflow_id'][':transaction_id']['$get']
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
                    (typeof client.admin)['workflows-executions'][':workflow_id'][':transaction_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAdminWorkflowsExecutionsWorkflowIdTransactionIdQueryKey>
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
              (typeof client.admin)['workflows-executions'][':workflow_id'][':transaction_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminWorkflowsExecutionsWorkflowIdTransactionIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdminWorkflowsExecutionsWorkflowIdTransactionIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.admin['workflows-executions'][':workflow_id'][':transaction_id'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getAdminWorkflowsExecutionsWorkflowIdTransactionIdSubscribeQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.admin)['workflows-executions'][':workflow_id'][':transaction_id']['subscribe']['$get']
    >
  >,
) {
  return [
    'admin',
    '/admin/workflows-executions/:workflow_id/:transaction_id/subscribe',
    toValue(args),
  ] as const
}

export function getAdminWorkflowsExecutionsWorkflowIdTransactionIdSubscribeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.admin)['workflows-executions'][':workflow_id'][':transaction_id']['subscribe']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getAdminWorkflowsExecutionsWorkflowIdTransactionIdSubscribeQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.admin['workflows-executions'][':workflow_id'][':transaction_id'].subscribe.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useAdminWorkflowsExecutionsWorkflowIdTransactionIdSubscribe<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.admin)['workflows-executions'][':workflow_id'][':transaction_id']['subscribe']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.admin)['workflows-executions'][':workflow_id'][':transaction_id']['subscribe']['$get']
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
                    (typeof client.admin)['workflows-executions'][':workflow_id'][':transaction_id']['subscribe']['$get']
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
                    (typeof client.admin)['workflows-executions'][':workflow_id'][':transaction_id']['subscribe']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAdminWorkflowsExecutionsWorkflowIdTransactionIdSubscribeQueryKey>
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
              (typeof client.admin)['workflows-executions'][':workflow_id'][':transaction_id']['subscribe']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminWorkflowsExecutionsWorkflowIdTransactionIdSubscribeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getAdminWorkflowsExecutionsWorkflowIdTransactionIdSubscribeQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.admin['workflows-executions'][':workflow_id'][':transaction_id'].subscribe.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPostAuthMfaChallengesIdVerifyMutationKey() {
  return ['auth', '/auth/mfa/challenges/:id/verify', 'POST'] as const
}

export function getPostAuthMfaChallengesIdVerifyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.auth.mfa.challenges)[':id']['verify']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.auth.mfa.challenges)[':id']['verify']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAuthMfaChallengesIdVerifyMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.auth.mfa.challenges)[':id']['verify']['$post']>,
    ) {
      return parseResponse(client.auth.mfa.challenges[':id'].verify.$post(args, options))
    },
  })
}

export function usePostAuthMfaChallengesIdVerify<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.auth.mfa.challenges)[':id']['verify']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.auth.mfa.challenges)[':id']['verify']['$post']>,
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
  const mutationDefaults = getPostAuthMfaChallengesIdVerifyMutationOptions<TError, TOnMutateResult>(
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

export function getAuthMfaFactorsQueryKey() {
  return ['auth', '/auth/mfa/factors'] as const
}

export function getAuthMfaFactorsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getAuthMfaFactorsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.auth.mfa.factors.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useAuthMfaFactors<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.mfa.factors.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.auth.mfa.factors.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.auth.mfa.factors.$get>>>
            >
          >,
          ReturnType<typeof getAuthMfaFactorsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.mfa.factors.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAuthMfaFactorsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getAuthMfaFactorsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.auth.mfa.factors.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAuthMfaFactorsMutationKey() {
  return ['auth', '/auth/mfa/factors', 'POST'] as const
}

export function getPostAuthMfaFactorsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.mfa.factors.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.auth.mfa.factors.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAuthMfaFactorsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.auth.mfa.factors.$post>) {
      return parseResponse(client.auth.mfa.factors.$post(args, options))
    },
  })
}

export function usePostAuthMfaFactors<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.auth.mfa.factors.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.auth.mfa.factors.$post>,
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
  const mutationDefaults = getPostAuthMfaFactorsMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteAuthMfaFactorsIdMutationKey() {
  return ['auth', '/auth/mfa/factors/:id', 'DELETE'] as const
}

export function getDeleteAuthMfaFactorsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.auth.mfa.factors)[':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.auth.mfa.factors)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAuthMfaFactorsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.auth.mfa.factors)[':id']['$delete']>) {
      return parseResponse(client.auth.mfa.factors[':id'].$delete(args, options))
    },
  })
}

export function useDeleteAuthMfaFactorsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.auth.mfa.factors)[':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.auth.mfa.factors)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteAuthMfaFactorsIdMutationOptions<TError, TOnMutateResult>(
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

export function getPostAuthMfaFactorsIdVerifyMutationKey() {
  return ['auth', '/auth/mfa/factors/:id/verify', 'POST'] as const
}

export function getPostAuthMfaFactorsIdVerifyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.auth.mfa.factors)[':id']['verify']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.auth.mfa.factors)[':id']['verify']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAuthMfaFactorsIdVerifyMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.auth.mfa.factors)[':id']['verify']['$post']>,
    ) {
      return parseResponse(client.auth.mfa.factors[':id'].verify.$post(args, options))
    },
  })
}

export function usePostAuthMfaFactorsIdVerify<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.auth.mfa.factors)[':id']['verify']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.auth.mfa.factors)[':id']['verify']['$post']>,
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
  const mutationDefaults = getPostAuthMfaFactorsIdVerifyMutationOptions<TError, TOnMutateResult>(
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

export function getPostAuthMfaRecoveryCodesMutationKey() {
  return ['auth', '/auth/mfa/recovery-codes', 'POST'] as const
}

export function getPostAuthMfaRecoveryCodesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.auth.mfa)['recovery-codes']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.auth.mfa)['recovery-codes']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAuthMfaRecoveryCodesMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.auth.mfa)['recovery-codes']['$post']>) {
      return parseResponse(client.auth.mfa['recovery-codes'].$post(args, options))
    },
  })
}

export function usePostAuthMfaRecoveryCodes<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.auth.mfa)['recovery-codes']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.auth.mfa)['recovery-codes']['$post']>,
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
  const mutationDefaults = getPostAuthMfaRecoveryCodesMutationOptions<TError, TOnMutateResult>(
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

export function getPostAuthSessionMutationKey() {
  return ['auth', '/auth/session', 'POST'] as const
}

export function getPostAuthSessionMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.session.$post>>>>
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostAuthSessionMutationKey(),
    async mutationFn() {
      return parseResponse(client.auth.session.$post(undefined, options))
    },
  })
}

export function usePostAuthSession<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.session.$post>>>>
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
  const mutationDefaults = getPostAuthSessionMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteAuthSessionMutationKey() {
  return ['auth', '/auth/session', 'DELETE'] as const
}

export function getDeleteAuthSessionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.session.$delete>>>>
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getDeleteAuthSessionMutationKey(),
    async mutationFn() {
      return parseResponse(client.auth.session.$delete(undefined, options))
    },
  })
}

export function useDeleteAuthSession<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.auth.session.$delete>>>
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
  const mutationDefaults = getDeleteAuthSessionMutationOptions<TError, TOnMutateResult>(
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

export function getPostAuthTokenRefreshMutationKey() {
  return ['auth', '/auth/token/refresh', 'POST'] as const
}

export function getPostAuthTokenRefreshMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.token.refresh.$post>>>>
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostAuthTokenRefreshMutationKey(),
    async mutationFn() {
      return parseResponse(client.auth.token.refresh.$post(undefined, options))
    },
  })
}

export function usePostAuthTokenRefresh<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.auth.token.refresh.$post>>>
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
  const mutationDefaults = getPostAuthTokenRefreshMutationOptions<TError, TOnMutateResult>(
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

export function getAuthUserProvidersQueryKey() {
  return ['auth', '/auth/user/providers'] as const
}

export function getAuthUserProvidersQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getAuthUserProvidersQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.auth.user.providers.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAuthUserProviders<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.user.providers.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.auth.user.providers.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.auth.user.providers.$get>>>
            >
          >,
          ReturnType<typeof getAuthUserProvidersQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.user.providers.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAuthUserProvidersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getAuthUserProvidersQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.auth.user.providers.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAuthUserAuthProviderMutationKey() {
  return ['auth', '/auth/user/:auth_provider', 'POST'] as const
}

export function getPostAuthUserAuthProviderMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.auth.user)[':auth_provider']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.auth.user)[':auth_provider']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAuthUserAuthProviderMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.auth.user)[':auth_provider']['$post']>) {
      return parseResponse(client.auth.user[':auth_provider'].$post(args, options))
    },
  })
}

export function usePostAuthUserAuthProvider<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.auth.user)[':auth_provider']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.auth.user)[':auth_provider']['$post']>,
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
  const mutationDefaults = getPostAuthUserAuthProviderMutationOptions<TError, TOnMutateResult>(
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

export function getPostAuthUserAuthProviderCallbackMutationKey() {
  return ['auth', '/auth/user/:auth_provider/callback', 'POST'] as const
}

export function getPostAuthUserAuthProviderCallbackMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.auth.user)[':auth_provider']['callback']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.auth.user)[':auth_provider']['callback']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAuthUserAuthProviderCallbackMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.auth.user)[':auth_provider']['callback']['$post']>,
    ) {
      return parseResponse(client.auth.user[':auth_provider'].callback.$post(args, options))
    },
  })
}

export function usePostAuthUserAuthProviderCallback<
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
                  ReturnType<(typeof client.auth.user)[':auth_provider']['callback']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.auth.user)[':auth_provider']['callback']['$post']>,
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
  const mutationDefaults = getPostAuthUserAuthProviderCallbackMutationOptions<
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

export function getPostAuthUserAuthProviderRegisterMutationKey() {
  return ['auth', '/auth/user/:auth_provider/register', 'POST'] as const
}

export function getPostAuthUserAuthProviderRegisterMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.auth.user)[':auth_provider']['register']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.auth.user)[':auth_provider']['register']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAuthUserAuthProviderRegisterMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.auth.user)[':auth_provider']['register']['$post']>,
    ) {
      return parseResponse(client.auth.user[':auth_provider'].register.$post(args, options))
    },
  })
}

export function usePostAuthUserAuthProviderRegister<
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
                  ReturnType<(typeof client.auth.user)[':auth_provider']['register']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.auth.user)[':auth_provider']['register']['$post']>,
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
  const mutationDefaults = getPostAuthUserAuthProviderRegisterMutationOptions<
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

export function getPostAuthUserAuthProviderResetPasswordMutationKey() {
  return ['auth', '/auth/user/:auth_provider/reset-password', 'POST'] as const
}

export function getPostAuthUserAuthProviderResetPasswordMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.auth.user)[':auth_provider']['reset-password']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.auth.user)[':auth_provider']['reset-password']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAuthUserAuthProviderResetPasswordMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.auth.user)[':auth_provider']['reset-password']['$post']
      >,
    ) {
      return parseResponse(
        client.auth.user[':auth_provider']['reset-password'].$post(args, options),
      )
    },
  })
}

export function usePostAuthUserAuthProviderResetPassword<
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
                  ReturnType<(typeof client.auth.user)[':auth_provider']['reset-password']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.auth.user)[':auth_provider']['reset-password']['$post']>,
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
  const mutationDefaults = getPostAuthUserAuthProviderResetPasswordMutationOptions<
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

export function getPostAuthUserAuthProviderUpdateMutationKey() {
  return ['auth', '/auth/user/:auth_provider/update', 'POST'] as const
}

export function getPostAuthUserAuthProviderUpdateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.auth.user)[':auth_provider']['update']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.auth.user)[':auth_provider']['update']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAuthUserAuthProviderUpdateMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.auth.user)[':auth_provider']['update']['$post']>,
    ) {
      return parseResponse(client.auth.user[':auth_provider'].update.$post(args, options))
    },
  })
}

export function usePostAuthUserAuthProviderUpdate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.auth.user)[':auth_provider']['update']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.auth.user)[':auth_provider']['update']['$post']>,
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
  const mutationDefaults = getPostAuthUserAuthProviderUpdateMutationOptions<
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

export function getPostAuthAuthProviderUserMutationKey() {
  return ['auth', '/auth/:auth_provider/user', 'POST'] as const
}

export function getPostAuthAuthProviderUserMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.auth)[':auth_provider']['user']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.auth)[':auth_provider']['user']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAuthAuthProviderUserMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.auth)[':auth_provider']['user']['$post']>,
    ) {
      return parseResponse(client.auth[':auth_provider'].user.$post(args, options))
    },
  })
}

export function usePostAuthAuthProviderUser<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.auth)[':auth_provider']['user']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.auth)[':auth_provider']['user']['$post']>,
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
  const mutationDefaults = getPostAuthAuthProviderUserMutationOptions<TError, TOnMutateResult>(
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
