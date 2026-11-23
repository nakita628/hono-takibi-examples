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

export function getDownloadKey() {
  return ['download'] as const
}

export function getMediaKey() {
  return ['media'] as const
}

export function getV2Key() {
  return ['v2'] as const
}

export function getDownloadResourceNameQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.download)[':resourceName']['$get']>>,
) {
  return ['download', '/download/:resourceName', toValue(args)] as const
}

export function getDownloadResourceNameQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.download)[':resourceName']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDownloadResourceNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.download[':resourceName'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDownloadResourceName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.download)[':resourceName']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.download)[':resourceName']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.download)[':resourceName']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.download)[':resourceName']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDownloadResourceNameQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.download)[':resourceName']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDownloadResourceNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDownloadResourceNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.download[':resourceName'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostMediaResourceNameMutationKey() {
  return ['media', '/media/:resourceName', 'POST'] as const
}

export function getPostMediaResourceNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.media)[':resourceName']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.media)[':resourceName']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostMediaResourceNameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.media)[':resourceName']['$post']>) {
      return parseResponse(client.media[':resourceName'].$post(args, options))
    },
  })
}

export function usePostMediaResourceName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.media)[':resourceName']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.media)[':resourceName']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostMediaResourceNameMutationOptions<TError, TOnMutateResult>(
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

export function getV2AdvertisersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.advertisers.$get>>,
) {
  return ['v2', '/v2/advertisers', toValue(args)] as const
}

export function getV2AdvertisersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.advertisers.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2AdvertisersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.advertisers.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2Advertisers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.advertisers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.advertisers.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.advertisers.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.advertisers.$get>>>>
          >,
          ReturnType<typeof getV2AdvertisersQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.advertisers.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV2AdvertisersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2AdvertisersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.advertisers.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV2AdvertisersMutationKey() {
  return ['v2', '/v2/advertisers', 'POST'] as const
}

export function getPostV2AdvertisersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.advertisers.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v2.advertisers.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2AdvertisersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.advertisers.$post>) {
      return parseResponse(client.v2.advertisers.$post(args, options))
    },
  })
}

export function usePostV2Advertisers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.advertisers.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v2.advertisers.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2AdvertisersMutationOptions<TError, TOnMutateResult>(
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

export function getV2AdvertisersAdvertiserIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.advertisers)[':advertiserId']['$get']>>,
) {
  return ['v2', '/v2/advertisers/:advertiserId', toValue(args)] as const
}

export function getV2AdvertisersAdvertiserIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.advertisers)[':advertiserId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2AdvertisersAdvertiserIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.advertisers[':advertiserId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2AdvertisersAdvertiserId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.advertisers)[':advertiserId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.advertisers)[':advertiserId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.advertisers)[':advertiserId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.advertisers)[':advertiserId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2AdvertisersAdvertiserIdQueryKey>
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
          Awaited<ReturnType<(typeof client.v2.advertisers)[':advertiserId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2AdvertisersAdvertiserIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2AdvertisersAdvertiserIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.advertisers[':advertiserId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteV2AdvertisersAdvertiserIdMutationKey() {
  return ['v2', '/v2/advertisers/:advertiserId', 'DELETE'] as const
}

export function getDeleteV2AdvertisersAdvertiserIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.advertisers)[':advertiserId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.advertisers)[':advertiserId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2AdvertisersAdvertiserIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.advertisers)[':advertiserId']['$delete']>,
    ) {
      return parseResponse(client.v2.advertisers[':advertiserId'].$delete(args, options))
    },
  })
}

export function useDeleteV2AdvertisersAdvertiserId<
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
                Awaited<ReturnType<(typeof client.v2.advertisers)[':advertiserId']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v2.advertisers)[':advertiserId']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV2AdvertisersAdvertiserIdMutationOptions<
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

export function getPatchV2AdvertisersAdvertiserIdMutationKey() {
  return ['v2', '/v2/advertisers/:advertiserId', 'PATCH'] as const
}

export function getPatchV2AdvertisersAdvertiserIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.advertisers)[':advertiserId']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.advertisers)[':advertiserId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV2AdvertisersAdvertiserIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.advertisers)[':advertiserId']['$patch']>,
    ) {
      return parseResponse(client.v2.advertisers[':advertiserId'].$patch(args, options))
    },
  })
}

export function usePatchV2AdvertisersAdvertiserId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.advertisers)[':advertiserId']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v2.advertisers)[':advertiserId']['$patch']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchV2AdvertisersAdvertiserIdMutationOptions<
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

export function getPostV2AdvertisersAdvertiserIdAssetsMutationKey() {
  return ['v2', '/v2/advertisers/:advertiserId/assets', 'POST'] as const
}

export function getPostV2AdvertisersAdvertiserIdAssetsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.advertisers)[':advertiserId']['assets']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.advertisers)[':advertiserId']['assets']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2AdvertisersAdvertiserIdAssetsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.advertisers)[':advertiserId']['assets']['$post']>,
    ) {
      return parseResponse(client.v2.advertisers[':advertiserId'].assets.$post(args, options))
    },
  })
}

export function usePostV2AdvertisersAdvertiserIdAssets<
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
                  ReturnType<(typeof client.v2.advertisers)[':advertiserId']['assets']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v2.advertisers)[':advertiserId']['assets']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2AdvertisersAdvertiserIdAssetsMutationOptions<
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

export function getV2AdvertisersAdvertiserIdCampaignsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.advertisers)[':advertiserId']['campaigns']['$get']>
  >,
) {
  return ['v2', '/v2/advertisers/:advertiserId/campaigns', toValue(args)] as const
}

export function getV2AdvertisersAdvertiserIdCampaignsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.advertisers)[':advertiserId']['campaigns']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2AdvertisersAdvertiserIdCampaignsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.advertisers[':advertiserId'].campaigns.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2AdvertisersAdvertiserIdCampaigns<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.advertisers)[':advertiserId']['campaigns']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.advertisers)[':advertiserId']['campaigns']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v2.advertisers)[':advertiserId']['campaigns']['$get']>
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
                  ReturnType<(typeof client.v2.advertisers)[':advertiserId']['campaigns']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV2AdvertisersAdvertiserIdCampaignsQueryKey>
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
          Awaited<ReturnType<(typeof client.v2.advertisers)[':advertiserId']['campaigns']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2AdvertisersAdvertiserIdCampaignsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2AdvertisersAdvertiserIdCampaignsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.advertisers[':advertiserId'].campaigns.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV2AdvertisersAdvertiserIdCampaignsMutationKey() {
  return ['v2', '/v2/advertisers/:advertiserId/campaigns', 'POST'] as const
}

export function getPostV2AdvertisersAdvertiserIdCampaignsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.advertisers)[':advertiserId']['campaigns']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.advertisers)[':advertiserId']['campaigns']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2AdvertisersAdvertiserIdCampaignsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.advertisers)[':advertiserId']['campaigns']['$post']>,
    ) {
      return parseResponse(client.v2.advertisers[':advertiserId'].campaigns.$post(args, options))
    },
  })
}

export function usePostV2AdvertisersAdvertiserIdCampaigns<
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
                  ReturnType<(typeof client.v2.advertisers)[':advertiserId']['campaigns']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v2.advertisers)[':advertiserId']['campaigns']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2AdvertisersAdvertiserIdCampaignsMutationOptions<
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

export function getV2AdvertisersAdvertiserIdCampaignsCampaignIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.advertisers)[':advertiserId']['campaigns'][':campaignId']['$get']
    >
  >,
) {
  return ['v2', '/v2/advertisers/:advertiserId/campaigns/:campaignId', toValue(args)] as const
}

export function getV2AdvertisersAdvertiserIdCampaignsCampaignIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.advertisers)[':advertiserId']['campaigns'][':campaignId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2AdvertisersAdvertiserIdCampaignsCampaignIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.advertisers[':advertiserId'].campaigns[':campaignId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2AdvertisersAdvertiserIdCampaignsCampaignId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2.advertisers)[':advertiserId']['campaigns'][':campaignId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.advertisers)[':advertiserId']['campaigns'][':campaignId']['$get']
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
                    (typeof client.v2.advertisers)[':advertiserId']['campaigns'][':campaignId']['$get']
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
                    (typeof client.v2.advertisers)[':advertiserId']['campaigns'][':campaignId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV2AdvertisersAdvertiserIdCampaignsCampaignIdQueryKey>
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
              (typeof client.v2.advertisers)[':advertiserId']['campaigns'][':campaignId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2AdvertisersAdvertiserIdCampaignsCampaignIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2AdvertisersAdvertiserIdCampaignsCampaignIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.advertisers[':advertiserId'].campaigns[':campaignId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteV2AdvertisersAdvertiserIdCampaignsCampaignIdMutationKey() {
  return ['v2', '/v2/advertisers/:advertiserId/campaigns/:campaignId', 'DELETE'] as const
}

export function getDeleteV2AdvertisersAdvertiserIdCampaignsCampaignIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.advertisers)[':advertiserId']['campaigns'][':campaignId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v2.advertisers)[':advertiserId']['campaigns'][':campaignId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2AdvertisersAdvertiserIdCampaignsCampaignIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.advertisers)[':advertiserId']['campaigns'][':campaignId']['$delete']
      >,
    ) {
      return parseResponse(
        client.v2.advertisers[':advertiserId'].campaigns[':campaignId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteV2AdvertisersAdvertiserIdCampaignsCampaignId<
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
                    (typeof client.v2.advertisers)[':advertiserId']['campaigns'][':campaignId']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v2.advertisers)[':advertiserId']['campaigns'][':campaignId']['$delete']
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
  const mutationDefaults = getDeleteV2AdvertisersAdvertiserIdCampaignsCampaignIdMutationOptions<
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

export function getPatchV2AdvertisersAdvertiserIdCampaignsCampaignIdMutationKey() {
  return ['v2', '/v2/advertisers/:advertiserId/campaigns/:campaignId', 'PATCH'] as const
}

export function getPatchV2AdvertisersAdvertiserIdCampaignsCampaignIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.advertisers)[':advertiserId']['campaigns'][':campaignId']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v2.advertisers)[':advertiserId']['campaigns'][':campaignId']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchV2AdvertisersAdvertiserIdCampaignsCampaignIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.advertisers)[':advertiserId']['campaigns'][':campaignId']['$patch']
      >,
    ) {
      return parseResponse(
        client.v2.advertisers[':advertiserId'].campaigns[':campaignId'].$patch(args, options),
      )
    },
  })
}

export function usePatchV2AdvertisersAdvertiserIdCampaignsCampaignId<
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
                    (typeof client.v2.advertisers)[':advertiserId']['campaigns'][':campaignId']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v2.advertisers)[':advertiserId']['campaigns'][':campaignId']['$patch']
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
  const mutationDefaults = getPatchV2AdvertisersAdvertiserIdCampaignsCampaignIdMutationOptions<
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

export function getV2AdvertisersAdvertiserIdCampaignsCampaignIdTargetingTypesTargetingTypeAssignedTargetingOptionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.advertisers)[':advertiserId']['campaigns'][':campaignId']['targetingTypes'][':targetingType']['assignedTargetingOptions']['$get']
    >
  >,
) {
  return [
    'v2',
    '/v2/advertisers/:advertiserId/campaigns/:campaignId/targetingTypes/:targetingType/assignedTargetingOptions',
    toValue(args),
  ] as const
}

export function getV2AdvertisersAdvertiserIdCampaignsCampaignIdTargetingTypesTargetingTypeAssignedTargetingOptionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.advertisers)[':advertiserId']['campaigns'][':campaignId']['targetingTypes'][':targetingType']['assignedTargetingOptions']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getV2AdvertisersAdvertiserIdCampaignsCampaignIdTargetingTypesTargetingTypeAssignedTargetingOptionsQueryKey(
        args,
      ),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.advertisers[':advertiserId'].campaigns[':campaignId'].targetingTypes[
          ':targetingType'
        ].assignedTargetingOptions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2AdvertisersAdvertiserIdCampaignsCampaignIdTargetingTypesTargetingTypeAssignedTargetingOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2.advertisers)[':advertiserId']['campaigns'][':campaignId']['targetingTypes'][':targetingType']['assignedTargetingOptions']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.advertisers)[':advertiserId']['campaigns'][':campaignId']['targetingTypes'][':targetingType']['assignedTargetingOptions']['$get']
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
                    (typeof client.v2.advertisers)[':advertiserId']['campaigns'][':campaignId']['targetingTypes'][':targetingType']['assignedTargetingOptions']['$get']
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
                    (typeof client.v2.advertisers)[':advertiserId']['campaigns'][':campaignId']['targetingTypes'][':targetingType']['assignedTargetingOptions']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getV2AdvertisersAdvertiserIdCampaignsCampaignIdTargetingTypesTargetingTypeAssignedTargetingOptionsQueryKey
          >
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
              (typeof client.v2.advertisers)[':advertiserId']['campaigns'][':campaignId']['targetingTypes'][':targetingType']['assignedTargetingOptions']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getV2AdvertisersAdvertiserIdCampaignsCampaignIdTargetingTypesTargetingTypeAssignedTargetingOptionsQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV2AdvertisersAdvertiserIdCampaignsCampaignIdTargetingTypesTargetingTypeAssignedTargetingOptionsQueryKey(
          args,
        ),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.advertisers[':advertiserId'].campaigns[':campaignId'].targetingTypes[
            ':targetingType'
          ].assignedTargetingOptions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2AdvertisersAdvertiserIdCampaignsCampaignIdTargetingTypesTargetingTypeAssignedTargetingOptionsAssignedTargetingOptionIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.advertisers)[':advertiserId']['campaigns'][':campaignId']['targetingTypes'][':targetingType']['assignedTargetingOptions'][':assignedTargetingOptionId']['$get']
    >
  >,
) {
  return [
    'v2',
    '/v2/advertisers/:advertiserId/campaigns/:campaignId/targetingTypes/:targetingType/assignedTargetingOptions/:assignedTargetingOptionId',
    toValue(args),
  ] as const
}

export function getV2AdvertisersAdvertiserIdCampaignsCampaignIdTargetingTypesTargetingTypeAssignedTargetingOptionsAssignedTargetingOptionIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.advertisers)[':advertiserId']['campaigns'][':campaignId']['targetingTypes'][':targetingType']['assignedTargetingOptions'][':assignedTargetingOptionId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getV2AdvertisersAdvertiserIdCampaignsCampaignIdTargetingTypesTargetingTypeAssignedTargetingOptionsAssignedTargetingOptionIdQueryKey(
        args,
      ),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.advertisers[':advertiserId'].campaigns[':campaignId'].targetingTypes[
          ':targetingType'
        ].assignedTargetingOptions[':assignedTargetingOptionId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2AdvertisersAdvertiserIdCampaignsCampaignIdTargetingTypesTargetingTypeAssignedTargetingOptionsAssignedTargetingOptionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2.advertisers)[':advertiserId']['campaigns'][':campaignId']['targetingTypes'][':targetingType']['assignedTargetingOptions'][':assignedTargetingOptionId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.advertisers)[':advertiserId']['campaigns'][':campaignId']['targetingTypes'][':targetingType']['assignedTargetingOptions'][':assignedTargetingOptionId']['$get']
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
                    (typeof client.v2.advertisers)[':advertiserId']['campaigns'][':campaignId']['targetingTypes'][':targetingType']['assignedTargetingOptions'][':assignedTargetingOptionId']['$get']
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
                    (typeof client.v2.advertisers)[':advertiserId']['campaigns'][':campaignId']['targetingTypes'][':targetingType']['assignedTargetingOptions'][':assignedTargetingOptionId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getV2AdvertisersAdvertiserIdCampaignsCampaignIdTargetingTypesTargetingTypeAssignedTargetingOptionsAssignedTargetingOptionIdQueryKey
          >
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
              (typeof client.v2.advertisers)[':advertiserId']['campaigns'][':campaignId']['targetingTypes'][':targetingType']['assignedTargetingOptions'][':assignedTargetingOptionId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getV2AdvertisersAdvertiserIdCampaignsCampaignIdTargetingTypesTargetingTypeAssignedTargetingOptionsAssignedTargetingOptionIdQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV2AdvertisersAdvertiserIdCampaignsCampaignIdTargetingTypesTargetingTypeAssignedTargetingOptionsAssignedTargetingOptionIdQueryKey(
          args,
        ),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.advertisers[':advertiserId'].campaigns[':campaignId'].targetingTypes[
            ':targetingType'
          ].assignedTargetingOptions[':assignedTargetingOptionId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2AdvertisersAdvertiserIdCampaignsCampaignIdListAssignedTargetingOptionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.advertisers)[':advertiserId']['campaigns'][':campaignId:listAssignedTargetingOptions']['$get']
    >
  >,
) {
  return [
    'v2',
    '/v2/advertisers/:advertiserId/campaigns/:campaignId:listAssignedTargetingOptions',
    toValue(args),
  ] as const
}

export function getV2AdvertisersAdvertiserIdCampaignsCampaignIdListAssignedTargetingOptionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.advertisers)[':advertiserId']['campaigns'][':campaignId:listAssignedTargetingOptions']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getV2AdvertisersAdvertiserIdCampaignsCampaignIdListAssignedTargetingOptionsQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.advertisers[':advertiserId'].campaigns[
          ':campaignId:listAssignedTargetingOptions'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV2AdvertisersAdvertiserIdCampaignsCampaignIdListAssignedTargetingOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2.advertisers)[':advertiserId']['campaigns'][':campaignId:listAssignedTargetingOptions']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.advertisers)[':advertiserId']['campaigns'][':campaignId:listAssignedTargetingOptions']['$get']
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
                    (typeof client.v2.advertisers)[':advertiserId']['campaigns'][':campaignId:listAssignedTargetingOptions']['$get']
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
                    (typeof client.v2.advertisers)[':advertiserId']['campaigns'][':campaignId:listAssignedTargetingOptions']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getV2AdvertisersAdvertiserIdCampaignsCampaignIdListAssignedTargetingOptionsQueryKey
          >
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
              (typeof client.v2.advertisers)[':advertiserId']['campaigns'][':campaignId:listAssignedTargetingOptions']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getV2AdvertisersAdvertiserIdCampaignsCampaignIdListAssignedTargetingOptionsQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV2AdvertisersAdvertiserIdCampaignsCampaignIdListAssignedTargetingOptionsQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.advertisers[':advertiserId'].campaigns[
            ':campaignId:listAssignedTargetingOptions'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function getV2AdvertisersAdvertiserIdChannelsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.advertisers)[':advertiserId']['channels']['$get']>
  >,
) {
  return ['v2', '/v2/advertisers/:advertiserId/channels', toValue(args)] as const
}

export function getV2AdvertisersAdvertiserIdChannelsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.advertisers)[':advertiserId']['channels']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2AdvertisersAdvertiserIdChannelsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.advertisers[':advertiserId'].channels.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2AdvertisersAdvertiserIdChannels<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.advertisers)[':advertiserId']['channels']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.advertisers)[':advertiserId']['channels']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v2.advertisers)[':advertiserId']['channels']['$get']>
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
                  ReturnType<(typeof client.v2.advertisers)[':advertiserId']['channels']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV2AdvertisersAdvertiserIdChannelsQueryKey>
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
          Awaited<ReturnType<(typeof client.v2.advertisers)[':advertiserId']['channels']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2AdvertisersAdvertiserIdChannelsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2AdvertisersAdvertiserIdChannelsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.advertisers[':advertiserId'].channels.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV2AdvertisersAdvertiserIdChannelsMutationKey() {
  return ['v2', '/v2/advertisers/:advertiserId/channels', 'POST'] as const
}

export function getPostV2AdvertisersAdvertiserIdChannelsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.advertisers)[':advertiserId']['channels']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.advertisers)[':advertiserId']['channels']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2AdvertisersAdvertiserIdChannelsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.advertisers)[':advertiserId']['channels']['$post']>,
    ) {
      return parseResponse(client.v2.advertisers[':advertiserId'].channels.$post(args, options))
    },
  })
}

export function usePostV2AdvertisersAdvertiserIdChannels<
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
                  ReturnType<(typeof client.v2.advertisers)[':advertiserId']['channels']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v2.advertisers)[':advertiserId']['channels']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2AdvertisersAdvertiserIdChannelsMutationOptions<
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

export function getPatchV2AdvertisersAdvertiserIdChannelsChannelIdMutationKey() {
  return ['v2', '/v2/advertisers/:advertiserId/channels/:channelId', 'PATCH'] as const
}

export function getPatchV2AdvertisersAdvertiserIdChannelsChannelIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.advertisers)[':advertiserId']['channels'][':channelId']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v2.advertisers)[':advertiserId']['channels'][':channelId']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchV2AdvertisersAdvertiserIdChannelsChannelIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.advertisers)[':advertiserId']['channels'][':channelId']['$patch']
      >,
    ) {
      return parseResponse(
        client.v2.advertisers[':advertiserId'].channels[':channelId'].$patch(args, options),
      )
    },
  })
}

export function usePatchV2AdvertisersAdvertiserIdChannelsChannelId<
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
                    (typeof client.v2.advertisers)[':advertiserId']['channels'][':channelId']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v2.advertisers)[':advertiserId']['channels'][':channelId']['$patch']
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
  const mutationDefaults = getPatchV2AdvertisersAdvertiserIdChannelsChannelIdMutationOptions<
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

export function getV2AdvertisersAdvertiserIdChannelsChannelIdSitesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.advertisers)[':advertiserId']['channels'][':channelId']['sites']['$get']
    >
  >,
) {
  return ['v2', '/v2/advertisers/:advertiserId/channels/:channelId/sites', toValue(args)] as const
}

export function getV2AdvertisersAdvertiserIdChannelsChannelIdSitesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.advertisers)[':advertiserId']['channels'][':channelId']['sites']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2AdvertisersAdvertiserIdChannelsChannelIdSitesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.advertisers[':advertiserId'].channels[':channelId'].sites.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2AdvertisersAdvertiserIdChannelsChannelIdSites<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2.advertisers)[':advertiserId']['channels'][':channelId']['sites']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.advertisers)[':advertiserId']['channels'][':channelId']['sites']['$get']
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
                    (typeof client.v2.advertisers)[':advertiserId']['channels'][':channelId']['sites']['$get']
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
                    (typeof client.v2.advertisers)[':advertiserId']['channels'][':channelId']['sites']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV2AdvertisersAdvertiserIdChannelsChannelIdSitesQueryKey>
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
              (typeof client.v2.advertisers)[':advertiserId']['channels'][':channelId']['sites']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2AdvertisersAdvertiserIdChannelsChannelIdSitesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2AdvertisersAdvertiserIdChannelsChannelIdSitesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.advertisers[':advertiserId'].channels[':channelId'].sites.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteV2AdvertisersAdvertiserIdChannelsChannelIdSitesUrlOrAppIdMutationKey() {
  return [
    'v2',
    '/v2/advertisers/:advertiserId/channels/:channelId/sites/:urlOrAppId',
    'DELETE',
  ] as const
}

export function getDeleteV2AdvertisersAdvertiserIdChannelsChannelIdSitesUrlOrAppIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.advertisers)[':advertiserId']['channels'][':channelId']['sites'][':urlOrAppId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v2.advertisers)[':advertiserId']['channels'][':channelId']['sites'][':urlOrAppId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2AdvertisersAdvertiserIdChannelsChannelIdSitesUrlOrAppIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.advertisers)[':advertiserId']['channels'][':channelId']['sites'][':urlOrAppId']['$delete']
      >,
    ) {
      return parseResponse(
        client.v2.advertisers[':advertiserId'].channels[':channelId'].sites[':urlOrAppId'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteV2AdvertisersAdvertiserIdChannelsChannelIdSitesUrlOrAppId<
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
                    (typeof client.v2.advertisers)[':advertiserId']['channels'][':channelId']['sites'][':urlOrAppId']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v2.advertisers)[':advertiserId']['channels'][':channelId']['sites'][':urlOrAppId']['$delete']
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
    getDeleteV2AdvertisersAdvertiserIdChannelsChannelIdSitesUrlOrAppIdMutationOptions<
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

export function getPostV2AdvertisersAdvertiserIdChannelsChannelIdSitesBulkEditMutationKey() {
  return ['v2', '/v2/advertisers/:advertiserId/channels/:channelId/sites:bulkEdit', 'POST'] as const
}

export function getPostV2AdvertisersAdvertiserIdChannelsChannelIdSitesBulkEditMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.advertisers)[':advertiserId']['channels'][':channelId']['sites:bulkEdit']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v2.advertisers)[':advertiserId']['channels'][':channelId']['sites:bulkEdit']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV2AdvertisersAdvertiserIdChannelsChannelIdSitesBulkEditMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.advertisers)[':advertiserId']['channels'][':channelId']['sites:bulkEdit']['$post']
      >,
    ) {
      return parseResponse(
        client.v2.advertisers[':advertiserId'].channels[':channelId']['sites:bulkEdit'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostV2AdvertisersAdvertiserIdChannelsChannelIdSitesBulkEdit<
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
                    (typeof client.v2.advertisers)[':advertiserId']['channels'][':channelId']['sites:bulkEdit']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v2.advertisers)[':advertiserId']['channels'][':channelId']['sites:bulkEdit']['$post']
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
    getPostV2AdvertisersAdvertiserIdChannelsChannelIdSitesBulkEditMutationOptions<
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

export function getPostV2AdvertisersAdvertiserIdChannelsChannelIdSitesReplaceMutationKey() {
  return ['v2', '/v2/advertisers/:advertiserId/channels/:channelId/sites:replace', 'POST'] as const
}

export function getPostV2AdvertisersAdvertiserIdChannelsChannelIdSitesReplaceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.advertisers)[':advertiserId']['channels'][':channelId']['sites:replace']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v2.advertisers)[':advertiserId']['channels'][':channelId']['sites:replace']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV2AdvertisersAdvertiserIdChannelsChannelIdSitesReplaceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.advertisers)[':advertiserId']['channels'][':channelId']['sites:replace']['$post']
      >,
    ) {
      return parseResponse(
        client.v2.advertisers[':advertiserId'].channels[':channelId']['sites:replace'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostV2AdvertisersAdvertiserIdChannelsChannelIdSitesReplace<
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
                    (typeof client.v2.advertisers)[':advertiserId']['channels'][':channelId']['sites:replace']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v2.advertisers)[':advertiserId']['channels'][':channelId']['sites:replace']['$post']
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
    getPostV2AdvertisersAdvertiserIdChannelsChannelIdSitesReplaceMutationOptions<
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

export function getV2AdvertisersAdvertiserIdCreativesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.advertisers)[':advertiserId']['creatives']['$get']>
  >,
) {
  return ['v2', '/v2/advertisers/:advertiserId/creatives', toValue(args)] as const
}

export function getV2AdvertisersAdvertiserIdCreativesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.advertisers)[':advertiserId']['creatives']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2AdvertisersAdvertiserIdCreativesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.advertisers[':advertiserId'].creatives.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2AdvertisersAdvertiserIdCreatives<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.advertisers)[':advertiserId']['creatives']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.advertisers)[':advertiserId']['creatives']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v2.advertisers)[':advertiserId']['creatives']['$get']>
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
                  ReturnType<(typeof client.v2.advertisers)[':advertiserId']['creatives']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV2AdvertisersAdvertiserIdCreativesQueryKey>
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
          Awaited<ReturnType<(typeof client.v2.advertisers)[':advertiserId']['creatives']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2AdvertisersAdvertiserIdCreativesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2AdvertisersAdvertiserIdCreativesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.advertisers[':advertiserId'].creatives.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV2AdvertisersAdvertiserIdCreativesMutationKey() {
  return ['v2', '/v2/advertisers/:advertiserId/creatives', 'POST'] as const
}

export function getPostV2AdvertisersAdvertiserIdCreativesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.advertisers)[':advertiserId']['creatives']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.advertisers)[':advertiserId']['creatives']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2AdvertisersAdvertiserIdCreativesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.advertisers)[':advertiserId']['creatives']['$post']>,
    ) {
      return parseResponse(client.v2.advertisers[':advertiserId'].creatives.$post(args, options))
    },
  })
}

export function usePostV2AdvertisersAdvertiserIdCreatives<
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
                  ReturnType<(typeof client.v2.advertisers)[':advertiserId']['creatives']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v2.advertisers)[':advertiserId']['creatives']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2AdvertisersAdvertiserIdCreativesMutationOptions<
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

export function getV2AdvertisersAdvertiserIdCreativesCreativeIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.advertisers)[':advertiserId']['creatives'][':creativeId']['$get']
    >
  >,
) {
  return ['v2', '/v2/advertisers/:advertiserId/creatives/:creativeId', toValue(args)] as const
}

export function getV2AdvertisersAdvertiserIdCreativesCreativeIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.advertisers)[':advertiserId']['creatives'][':creativeId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2AdvertisersAdvertiserIdCreativesCreativeIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.advertisers[':advertiserId'].creatives[':creativeId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2AdvertisersAdvertiserIdCreativesCreativeId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2.advertisers)[':advertiserId']['creatives'][':creativeId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.advertisers)[':advertiserId']['creatives'][':creativeId']['$get']
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
                    (typeof client.v2.advertisers)[':advertiserId']['creatives'][':creativeId']['$get']
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
                    (typeof client.v2.advertisers)[':advertiserId']['creatives'][':creativeId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV2AdvertisersAdvertiserIdCreativesCreativeIdQueryKey>
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
              (typeof client.v2.advertisers)[':advertiserId']['creatives'][':creativeId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2AdvertisersAdvertiserIdCreativesCreativeIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2AdvertisersAdvertiserIdCreativesCreativeIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.advertisers[':advertiserId'].creatives[':creativeId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteV2AdvertisersAdvertiserIdCreativesCreativeIdMutationKey() {
  return ['v2', '/v2/advertisers/:advertiserId/creatives/:creativeId', 'DELETE'] as const
}

export function getDeleteV2AdvertisersAdvertiserIdCreativesCreativeIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.advertisers)[':advertiserId']['creatives'][':creativeId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v2.advertisers)[':advertiserId']['creatives'][':creativeId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2AdvertisersAdvertiserIdCreativesCreativeIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.advertisers)[':advertiserId']['creatives'][':creativeId']['$delete']
      >,
    ) {
      return parseResponse(
        client.v2.advertisers[':advertiserId'].creatives[':creativeId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteV2AdvertisersAdvertiserIdCreativesCreativeId<
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
                    (typeof client.v2.advertisers)[':advertiserId']['creatives'][':creativeId']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v2.advertisers)[':advertiserId']['creatives'][':creativeId']['$delete']
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
  const mutationDefaults = getDeleteV2AdvertisersAdvertiserIdCreativesCreativeIdMutationOptions<
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

export function getPatchV2AdvertisersAdvertiserIdCreativesCreativeIdMutationKey() {
  return ['v2', '/v2/advertisers/:advertiserId/creatives/:creativeId', 'PATCH'] as const
}

export function getPatchV2AdvertisersAdvertiserIdCreativesCreativeIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.advertisers)[':advertiserId']['creatives'][':creativeId']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v2.advertisers)[':advertiserId']['creatives'][':creativeId']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchV2AdvertisersAdvertiserIdCreativesCreativeIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.advertisers)[':advertiserId']['creatives'][':creativeId']['$patch']
      >,
    ) {
      return parseResponse(
        client.v2.advertisers[':advertiserId'].creatives[':creativeId'].$patch(args, options),
      )
    },
  })
}

export function usePatchV2AdvertisersAdvertiserIdCreativesCreativeId<
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
                    (typeof client.v2.advertisers)[':advertiserId']['creatives'][':creativeId']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v2.advertisers)[':advertiserId']['creatives'][':creativeId']['$patch']
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
  const mutationDefaults = getPatchV2AdvertisersAdvertiserIdCreativesCreativeIdMutationOptions<
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

export function getV2AdvertisersAdvertiserIdInsertionOrdersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.advertisers)[':advertiserId']['insertionOrders']['$get']>
  >,
) {
  return ['v2', '/v2/advertisers/:advertiserId/insertionOrders', toValue(args)] as const
}

export function getV2AdvertisersAdvertiserIdInsertionOrdersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.advertisers)[':advertiserId']['insertionOrders']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2AdvertisersAdvertiserIdInsertionOrdersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.advertisers[':advertiserId'].insertionOrders.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2AdvertisersAdvertiserIdInsertionOrders<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2.advertisers)[':advertiserId']['insertionOrders']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.advertisers)[':advertiserId']['insertionOrders']['$get']>
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
                    (typeof client.v2.advertisers)[':advertiserId']['insertionOrders']['$get']
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
                    (typeof client.v2.advertisers)[':advertiserId']['insertionOrders']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV2AdvertisersAdvertiserIdInsertionOrdersQueryKey>
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
            ReturnType<(typeof client.v2.advertisers)[':advertiserId']['insertionOrders']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2AdvertisersAdvertiserIdInsertionOrdersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2AdvertisersAdvertiserIdInsertionOrdersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.advertisers[':advertiserId'].insertionOrders.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV2AdvertisersAdvertiserIdInsertionOrdersMutationKey() {
  return ['v2', '/v2/advertisers/:advertiserId/insertionOrders', 'POST'] as const
}

export function getPostV2AdvertisersAdvertiserIdInsertionOrdersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v2.advertisers)[':advertiserId']['insertionOrders']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.advertisers)[':advertiserId']['insertionOrders']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2AdvertisersAdvertiserIdInsertionOrdersMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.advertisers)[':advertiserId']['insertionOrders']['$post']
      >,
    ) {
      return parseResponse(
        client.v2.advertisers[':advertiserId'].insertionOrders.$post(args, options),
      )
    },
  })
}

export function usePostV2AdvertisersAdvertiserIdInsertionOrders<
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
                    (typeof client.v2.advertisers)[':advertiserId']['insertionOrders']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v2.advertisers)[':advertiserId']['insertionOrders']['$post']
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
  const mutationDefaults = getPostV2AdvertisersAdvertiserIdInsertionOrdersMutationOptions<
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

export function getV2AdvertisersAdvertiserIdInsertionOrdersInsertionOrderIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.advertisers)[':advertiserId']['insertionOrders'][':insertionOrderId']['$get']
    >
  >,
) {
  return [
    'v2',
    '/v2/advertisers/:advertiserId/insertionOrders/:insertionOrderId',
    toValue(args),
  ] as const
}

export function getV2AdvertisersAdvertiserIdInsertionOrdersInsertionOrderIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.advertisers)[':advertiserId']['insertionOrders'][':insertionOrderId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getV2AdvertisersAdvertiserIdInsertionOrdersInsertionOrderIdQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.advertisers[':advertiserId'].insertionOrders[':insertionOrderId'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useV2AdvertisersAdvertiserIdInsertionOrdersInsertionOrderId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2.advertisers)[':advertiserId']['insertionOrders'][':insertionOrderId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.advertisers)[':advertiserId']['insertionOrders'][':insertionOrderId']['$get']
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
                    (typeof client.v2.advertisers)[':advertiserId']['insertionOrders'][':insertionOrderId']['$get']
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
                    (typeof client.v2.advertisers)[':advertiserId']['insertionOrders'][':insertionOrderId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV2AdvertisersAdvertiserIdInsertionOrdersInsertionOrderIdQueryKey>
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
              (typeof client.v2.advertisers)[':advertiserId']['insertionOrders'][':insertionOrderId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2AdvertisersAdvertiserIdInsertionOrdersInsertionOrderIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV2AdvertisersAdvertiserIdInsertionOrdersInsertionOrderIdQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.advertisers[':advertiserId'].insertionOrders[':insertionOrderId'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteV2AdvertisersAdvertiserIdInsertionOrdersInsertionOrderIdMutationKey() {
  return [
    'v2',
    '/v2/advertisers/:advertiserId/insertionOrders/:insertionOrderId',
    'DELETE',
  ] as const
}

export function getDeleteV2AdvertisersAdvertiserIdInsertionOrdersInsertionOrderIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.advertisers)[':advertiserId']['insertionOrders'][':insertionOrderId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v2.advertisers)[':advertiserId']['insertionOrders'][':insertionOrderId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2AdvertisersAdvertiserIdInsertionOrdersInsertionOrderIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.advertisers)[':advertiserId']['insertionOrders'][':insertionOrderId']['$delete']
      >,
    ) {
      return parseResponse(
        client.v2.advertisers[':advertiserId'].insertionOrders[':insertionOrderId'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteV2AdvertisersAdvertiserIdInsertionOrdersInsertionOrderId<
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
                    (typeof client.v2.advertisers)[':advertiserId']['insertionOrders'][':insertionOrderId']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v2.advertisers)[':advertiserId']['insertionOrders'][':insertionOrderId']['$delete']
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
    getDeleteV2AdvertisersAdvertiserIdInsertionOrdersInsertionOrderIdMutationOptions<
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

export function getPatchV2AdvertisersAdvertiserIdInsertionOrdersInsertionOrderIdMutationKey() {
  return ['v2', '/v2/advertisers/:advertiserId/insertionOrders/:insertionOrderId', 'PATCH'] as const
}

export function getPatchV2AdvertisersAdvertiserIdInsertionOrdersInsertionOrderIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.advertisers)[':advertiserId']['insertionOrders'][':insertionOrderId']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v2.advertisers)[':advertiserId']['insertionOrders'][':insertionOrderId']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchV2AdvertisersAdvertiserIdInsertionOrdersInsertionOrderIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.advertisers)[':advertiserId']['insertionOrders'][':insertionOrderId']['$patch']
      >,
    ) {
      return parseResponse(
        client.v2.advertisers[':advertiserId'].insertionOrders[':insertionOrderId'].$patch(
          args,
          options,
        ),
      )
    },
  })
}

export function usePatchV2AdvertisersAdvertiserIdInsertionOrdersInsertionOrderId<
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
                    (typeof client.v2.advertisers)[':advertiserId']['insertionOrders'][':insertionOrderId']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v2.advertisers)[':advertiserId']['insertionOrders'][':insertionOrderId']['$patch']
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
    getPatchV2AdvertisersAdvertiserIdInsertionOrdersInsertionOrderIdMutationOptions<
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

export function getV2AdvertisersAdvertiserIdInsertionOrdersInsertionOrderIdTargetingTypesTargetingTypeAssignedTargetingOptionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.advertisers)[':advertiserId']['insertionOrders'][':insertionOrderId']['targetingTypes'][':targetingType']['assignedTargetingOptions']['$get']
    >
  >,
) {
  return [
    'v2',
    '/v2/advertisers/:advertiserId/insertionOrders/:insertionOrderId/targetingTypes/:targetingType/assignedTargetingOptions',
    toValue(args),
  ] as const
}

export function getV2AdvertisersAdvertiserIdInsertionOrdersInsertionOrderIdTargetingTypesTargetingTypeAssignedTargetingOptionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.advertisers)[':advertiserId']['insertionOrders'][':insertionOrderId']['targetingTypes'][':targetingType']['assignedTargetingOptions']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getV2AdvertisersAdvertiserIdInsertionOrdersInsertionOrderIdTargetingTypesTargetingTypeAssignedTargetingOptionsQueryKey(
        args,
      ),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.advertisers[':advertiserId'].insertionOrders[':insertionOrderId'].targetingTypes[
          ':targetingType'
        ].assignedTargetingOptions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2AdvertisersAdvertiserIdInsertionOrdersInsertionOrderIdTargetingTypesTargetingTypeAssignedTargetingOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2.advertisers)[':advertiserId']['insertionOrders'][':insertionOrderId']['targetingTypes'][':targetingType']['assignedTargetingOptions']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.advertisers)[':advertiserId']['insertionOrders'][':insertionOrderId']['targetingTypes'][':targetingType']['assignedTargetingOptions']['$get']
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
                    (typeof client.v2.advertisers)[':advertiserId']['insertionOrders'][':insertionOrderId']['targetingTypes'][':targetingType']['assignedTargetingOptions']['$get']
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
                    (typeof client.v2.advertisers)[':advertiserId']['insertionOrders'][':insertionOrderId']['targetingTypes'][':targetingType']['assignedTargetingOptions']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getV2AdvertisersAdvertiserIdInsertionOrdersInsertionOrderIdTargetingTypesTargetingTypeAssignedTargetingOptionsQueryKey
          >
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
              (typeof client.v2.advertisers)[':advertiserId']['insertionOrders'][':insertionOrderId']['targetingTypes'][':targetingType']['assignedTargetingOptions']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getV2AdvertisersAdvertiserIdInsertionOrdersInsertionOrderIdTargetingTypesTargetingTypeAssignedTargetingOptionsQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV2AdvertisersAdvertiserIdInsertionOrdersInsertionOrderIdTargetingTypesTargetingTypeAssignedTargetingOptionsQueryKey(
          args,
        ),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.advertisers[':advertiserId'].insertionOrders[
            ':insertionOrderId'
          ].targetingTypes[':targetingType'].assignedTargetingOptions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV2AdvertisersAdvertiserIdInsertionOrdersInsertionOrderIdTargetingTypesTargetingTypeAssignedTargetingOptionsMutationKey() {
  return [
    'v2',
    '/v2/advertisers/:advertiserId/insertionOrders/:insertionOrderId/targetingTypes/:targetingType/assignedTargetingOptions',
    'POST',
  ] as const
}

export function getPostV2AdvertisersAdvertiserIdInsertionOrdersInsertionOrderIdTargetingTypesTargetingTypeAssignedTargetingOptionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.advertisers)[':advertiserId']['insertionOrders'][':insertionOrderId']['targetingTypes'][':targetingType']['assignedTargetingOptions']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v2.advertisers)[':advertiserId']['insertionOrders'][':insertionOrderId']['targetingTypes'][':targetingType']['assignedTargetingOptions']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostV2AdvertisersAdvertiserIdInsertionOrdersInsertionOrderIdTargetingTypesTargetingTypeAssignedTargetingOptionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.advertisers)[':advertiserId']['insertionOrders'][':insertionOrderId']['targetingTypes'][':targetingType']['assignedTargetingOptions']['$post']
      >,
    ) {
      return parseResponse(
        client.v2.advertisers[':advertiserId'].insertionOrders[':insertionOrderId'].targetingTypes[
          ':targetingType'
        ].assignedTargetingOptions.$post(args, options),
      )
    },
  })
}

export function usePostV2AdvertisersAdvertiserIdInsertionOrdersInsertionOrderIdTargetingTypesTargetingTypeAssignedTargetingOptions<
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
                    (typeof client.v2.advertisers)[':advertiserId']['insertionOrders'][':insertionOrderId']['targetingTypes'][':targetingType']['assignedTargetingOptions']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v2.advertisers)[':advertiserId']['insertionOrders'][':insertionOrderId']['targetingTypes'][':targetingType']['assignedTargetingOptions']['$post']
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
    getPostV2AdvertisersAdvertiserIdInsertionOrdersInsertionOrderIdTargetingTypesTargetingTypeAssignedTargetingOptionsMutationOptions<
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

export function getV2AdvertisersAdvertiserIdInsertionOrdersInsertionOrderIdTargetingTypesTargetingTypeAssignedTargetingOptionsAssignedTargetingOptionIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.advertisers)[':advertiserId']['insertionOrders'][':insertionOrderId']['targetingTypes'][':targetingType']['assignedTargetingOptions'][':assignedTargetingOptionId']['$get']
    >
  >,
) {
  return [
    'v2',
    '/v2/advertisers/:advertiserId/insertionOrders/:insertionOrderId/targetingTypes/:targetingType/assignedTargetingOptions/:assignedTargetingOptionId',
    toValue(args),
  ] as const
}

export function getV2AdvertisersAdvertiserIdInsertionOrdersInsertionOrderIdTargetingTypesTargetingTypeAssignedTargetingOptionsAssignedTargetingOptionIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.advertisers)[':advertiserId']['insertionOrders'][':insertionOrderId']['targetingTypes'][':targetingType']['assignedTargetingOptions'][':assignedTargetingOptionId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getV2AdvertisersAdvertiserIdInsertionOrdersInsertionOrderIdTargetingTypesTargetingTypeAssignedTargetingOptionsAssignedTargetingOptionIdQueryKey(
        args,
      ),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.advertisers[':advertiserId'].insertionOrders[':insertionOrderId'].targetingTypes[
          ':targetingType'
        ].assignedTargetingOptions[':assignedTargetingOptionId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2AdvertisersAdvertiserIdInsertionOrdersInsertionOrderIdTargetingTypesTargetingTypeAssignedTargetingOptionsAssignedTargetingOptionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2.advertisers)[':advertiserId']['insertionOrders'][':insertionOrderId']['targetingTypes'][':targetingType']['assignedTargetingOptions'][':assignedTargetingOptionId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.advertisers)[':advertiserId']['insertionOrders'][':insertionOrderId']['targetingTypes'][':targetingType']['assignedTargetingOptions'][':assignedTargetingOptionId']['$get']
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
                    (typeof client.v2.advertisers)[':advertiserId']['insertionOrders'][':insertionOrderId']['targetingTypes'][':targetingType']['assignedTargetingOptions'][':assignedTargetingOptionId']['$get']
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
                    (typeof client.v2.advertisers)[':advertiserId']['insertionOrders'][':insertionOrderId']['targetingTypes'][':targetingType']['assignedTargetingOptions'][':assignedTargetingOptionId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getV2AdvertisersAdvertiserIdInsertionOrdersInsertionOrderIdTargetingTypesTargetingTypeAssignedTargetingOptionsAssignedTargetingOptionIdQueryKey
          >
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
              (typeof client.v2.advertisers)[':advertiserId']['insertionOrders'][':insertionOrderId']['targetingTypes'][':targetingType']['assignedTargetingOptions'][':assignedTargetingOptionId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getV2AdvertisersAdvertiserIdInsertionOrdersInsertionOrderIdTargetingTypesTargetingTypeAssignedTargetingOptionsAssignedTargetingOptionIdQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV2AdvertisersAdvertiserIdInsertionOrdersInsertionOrderIdTargetingTypesTargetingTypeAssignedTargetingOptionsAssignedTargetingOptionIdQueryKey(
          args,
        ),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.advertisers[':advertiserId'].insertionOrders[
            ':insertionOrderId'
          ].targetingTypes[':targetingType'].assignedTargetingOptions[
            ':assignedTargetingOptionId'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteV2AdvertisersAdvertiserIdInsertionOrdersInsertionOrderIdTargetingTypesTargetingTypeAssignedTargetingOptionsAssignedTargetingOptionIdMutationKey() {
  return [
    'v2',
    '/v2/advertisers/:advertiserId/insertionOrders/:insertionOrderId/targetingTypes/:targetingType/assignedTargetingOptions/:assignedTargetingOptionId',
    'DELETE',
  ] as const
}

export function getDeleteV2AdvertisersAdvertiserIdInsertionOrdersInsertionOrderIdTargetingTypesTargetingTypeAssignedTargetingOptionsAssignedTargetingOptionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.advertisers)[':advertiserId']['insertionOrders'][':insertionOrderId']['targetingTypes'][':targetingType']['assignedTargetingOptions'][':assignedTargetingOptionId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v2.advertisers)[':advertiserId']['insertionOrders'][':insertionOrderId']['targetingTypes'][':targetingType']['assignedTargetingOptions'][':assignedTargetingOptionId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteV2AdvertisersAdvertiserIdInsertionOrdersInsertionOrderIdTargetingTypesTargetingTypeAssignedTargetingOptionsAssignedTargetingOptionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.advertisers)[':advertiserId']['insertionOrders'][':insertionOrderId']['targetingTypes'][':targetingType']['assignedTargetingOptions'][':assignedTargetingOptionId']['$delete']
      >,
    ) {
      return parseResponse(
        client.v2.advertisers[':advertiserId'].insertionOrders[':insertionOrderId'].targetingTypes[
          ':targetingType'
        ].assignedTargetingOptions[':assignedTargetingOptionId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteV2AdvertisersAdvertiserIdInsertionOrdersInsertionOrderIdTargetingTypesTargetingTypeAssignedTargetingOptionsAssignedTargetingOptionId<
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
                    (typeof client.v2.advertisers)[':advertiserId']['insertionOrders'][':insertionOrderId']['targetingTypes'][':targetingType']['assignedTargetingOptions'][':assignedTargetingOptionId']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v2.advertisers)[':advertiserId']['insertionOrders'][':insertionOrderId']['targetingTypes'][':targetingType']['assignedTargetingOptions'][':assignedTargetingOptionId']['$delete']
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
    getDeleteV2AdvertisersAdvertiserIdInsertionOrdersInsertionOrderIdTargetingTypesTargetingTypeAssignedTargetingOptionsAssignedTargetingOptionIdMutationOptions<
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

export function getV2AdvertisersAdvertiserIdInsertionOrdersInsertionOrderIdListAssignedTargetingOptionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.advertisers)[':advertiserId']['insertionOrders'][':insertionOrderId:listAssignedTargetingOptions']['$get']
    >
  >,
) {
  return [
    'v2',
    '/v2/advertisers/:advertiserId/insertionOrders/:insertionOrderId:listAssignedTargetingOptions',
    toValue(args),
  ] as const
}

export function getV2AdvertisersAdvertiserIdInsertionOrdersInsertionOrderIdListAssignedTargetingOptionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.advertisers)[':advertiserId']['insertionOrders'][':insertionOrderId:listAssignedTargetingOptions']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getV2AdvertisersAdvertiserIdInsertionOrdersInsertionOrderIdListAssignedTargetingOptionsQueryKey(
        args,
      ),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.advertisers[':advertiserId'].insertionOrders[
          ':insertionOrderId:listAssignedTargetingOptions'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV2AdvertisersAdvertiserIdInsertionOrdersInsertionOrderIdListAssignedTargetingOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2.advertisers)[':advertiserId']['insertionOrders'][':insertionOrderId:listAssignedTargetingOptions']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.advertisers)[':advertiserId']['insertionOrders'][':insertionOrderId:listAssignedTargetingOptions']['$get']
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
                    (typeof client.v2.advertisers)[':advertiserId']['insertionOrders'][':insertionOrderId:listAssignedTargetingOptions']['$get']
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
                    (typeof client.v2.advertisers)[':advertiserId']['insertionOrders'][':insertionOrderId:listAssignedTargetingOptions']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getV2AdvertisersAdvertiserIdInsertionOrdersInsertionOrderIdListAssignedTargetingOptionsQueryKey
          >
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
              (typeof client.v2.advertisers)[':advertiserId']['insertionOrders'][':insertionOrderId:listAssignedTargetingOptions']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getV2AdvertisersAdvertiserIdInsertionOrdersInsertionOrderIdListAssignedTargetingOptionsQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV2AdvertisersAdvertiserIdInsertionOrdersInsertionOrderIdListAssignedTargetingOptionsQueryKey(
          args,
        ),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.advertisers[':advertiserId'].insertionOrders[
            ':insertionOrderId:listAssignedTargetingOptions'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function getV2AdvertisersAdvertiserIdInvoicesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.advertisers)[':advertiserId']['invoices']['$get']>
  >,
) {
  return ['v2', '/v2/advertisers/:advertiserId/invoices', toValue(args)] as const
}

export function getV2AdvertisersAdvertiserIdInvoicesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.advertisers)[':advertiserId']['invoices']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2AdvertisersAdvertiserIdInvoicesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.advertisers[':advertiserId'].invoices.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2AdvertisersAdvertiserIdInvoices<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.advertisers)[':advertiserId']['invoices']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.advertisers)[':advertiserId']['invoices']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v2.advertisers)[':advertiserId']['invoices']['$get']>
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
                  ReturnType<(typeof client.v2.advertisers)[':advertiserId']['invoices']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV2AdvertisersAdvertiserIdInvoicesQueryKey>
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
          Awaited<ReturnType<(typeof client.v2.advertisers)[':advertiserId']['invoices']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2AdvertisersAdvertiserIdInvoicesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2AdvertisersAdvertiserIdInvoicesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.advertisers[':advertiserId'].invoices.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2AdvertisersAdvertiserIdInvoicesLookupInvoiceCurrencyQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.advertisers)[':advertiserId']['invoices:lookupInvoiceCurrency']['$get']
    >
  >,
) {
  return [
    'v2',
    '/v2/advertisers/:advertiserId/invoices:lookupInvoiceCurrency',
    toValue(args),
  ] as const
}

export function getV2AdvertisersAdvertiserIdInvoicesLookupInvoiceCurrencyQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.advertisers)[':advertiserId']['invoices:lookupInvoiceCurrency']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getV2AdvertisersAdvertiserIdInvoicesLookupInvoiceCurrencyQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.advertisers[':advertiserId']['invoices:lookupInvoiceCurrency'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useV2AdvertisersAdvertiserIdInvoicesLookupInvoiceCurrency<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2.advertisers)[':advertiserId']['invoices:lookupInvoiceCurrency']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.advertisers)[':advertiserId']['invoices:lookupInvoiceCurrency']['$get']
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
                    (typeof client.v2.advertisers)[':advertiserId']['invoices:lookupInvoiceCurrency']['$get']
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
                    (typeof client.v2.advertisers)[':advertiserId']['invoices:lookupInvoiceCurrency']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV2AdvertisersAdvertiserIdInvoicesLookupInvoiceCurrencyQueryKey>
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
              (typeof client.v2.advertisers)[':advertiserId']['invoices:lookupInvoiceCurrency']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2AdvertisersAdvertiserIdInvoicesLookupInvoiceCurrencyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV2AdvertisersAdvertiserIdInvoicesLookupInvoiceCurrencyQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.advertisers[':advertiserId']['invoices:lookupInvoiceCurrency'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getV2AdvertisersAdvertiserIdLineItemsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.advertisers)[':advertiserId']['lineItems']['$get']>
  >,
) {
  return ['v2', '/v2/advertisers/:advertiserId/lineItems', toValue(args)] as const
}

export function getV2AdvertisersAdvertiserIdLineItemsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.advertisers)[':advertiserId']['lineItems']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2AdvertisersAdvertiserIdLineItemsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.advertisers[':advertiserId'].lineItems.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2AdvertisersAdvertiserIdLineItems<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.advertisers)[':advertiserId']['lineItems']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.advertisers)[':advertiserId']['lineItems']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v2.advertisers)[':advertiserId']['lineItems']['$get']>
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
                  ReturnType<(typeof client.v2.advertisers)[':advertiserId']['lineItems']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV2AdvertisersAdvertiserIdLineItemsQueryKey>
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
          Awaited<ReturnType<(typeof client.v2.advertisers)[':advertiserId']['lineItems']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2AdvertisersAdvertiserIdLineItemsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2AdvertisersAdvertiserIdLineItemsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.advertisers[':advertiserId'].lineItems.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV2AdvertisersAdvertiserIdLineItemsMutationKey() {
  return ['v2', '/v2/advertisers/:advertiserId/lineItems', 'POST'] as const
}

export function getPostV2AdvertisersAdvertiserIdLineItemsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.advertisers)[':advertiserId']['lineItems']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.advertisers)[':advertiserId']['lineItems']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2AdvertisersAdvertiserIdLineItemsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.advertisers)[':advertiserId']['lineItems']['$post']>,
    ) {
      return parseResponse(client.v2.advertisers[':advertiserId'].lineItems.$post(args, options))
    },
  })
}

export function usePostV2AdvertisersAdvertiserIdLineItems<
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
                  ReturnType<(typeof client.v2.advertisers)[':advertiserId']['lineItems']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v2.advertisers)[':advertiserId']['lineItems']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2AdvertisersAdvertiserIdLineItemsMutationOptions<
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

export function getV2AdvertisersAdvertiserIdLineItemsLineItemIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.advertisers)[':advertiserId']['lineItems'][':lineItemId']['$get']
    >
  >,
) {
  return ['v2', '/v2/advertisers/:advertiserId/lineItems/:lineItemId', toValue(args)] as const
}

export function getV2AdvertisersAdvertiserIdLineItemsLineItemIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.advertisers)[':advertiserId']['lineItems'][':lineItemId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2AdvertisersAdvertiserIdLineItemsLineItemIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.advertisers[':advertiserId'].lineItems[':lineItemId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2AdvertisersAdvertiserIdLineItemsLineItemId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2.advertisers)[':advertiserId']['lineItems'][':lineItemId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.advertisers)[':advertiserId']['lineItems'][':lineItemId']['$get']
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
                    (typeof client.v2.advertisers)[':advertiserId']['lineItems'][':lineItemId']['$get']
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
                    (typeof client.v2.advertisers)[':advertiserId']['lineItems'][':lineItemId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV2AdvertisersAdvertiserIdLineItemsLineItemIdQueryKey>
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
              (typeof client.v2.advertisers)[':advertiserId']['lineItems'][':lineItemId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2AdvertisersAdvertiserIdLineItemsLineItemIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2AdvertisersAdvertiserIdLineItemsLineItemIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.advertisers[':advertiserId'].lineItems[':lineItemId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteV2AdvertisersAdvertiserIdLineItemsLineItemIdMutationKey() {
  return ['v2', '/v2/advertisers/:advertiserId/lineItems/:lineItemId', 'DELETE'] as const
}

export function getDeleteV2AdvertisersAdvertiserIdLineItemsLineItemIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.advertisers)[':advertiserId']['lineItems'][':lineItemId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v2.advertisers)[':advertiserId']['lineItems'][':lineItemId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2AdvertisersAdvertiserIdLineItemsLineItemIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.advertisers)[':advertiserId']['lineItems'][':lineItemId']['$delete']
      >,
    ) {
      return parseResponse(
        client.v2.advertisers[':advertiserId'].lineItems[':lineItemId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteV2AdvertisersAdvertiserIdLineItemsLineItemId<
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
                    (typeof client.v2.advertisers)[':advertiserId']['lineItems'][':lineItemId']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v2.advertisers)[':advertiserId']['lineItems'][':lineItemId']['$delete']
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
  const mutationDefaults = getDeleteV2AdvertisersAdvertiserIdLineItemsLineItemIdMutationOptions<
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

export function getPatchV2AdvertisersAdvertiserIdLineItemsLineItemIdMutationKey() {
  return ['v2', '/v2/advertisers/:advertiserId/lineItems/:lineItemId', 'PATCH'] as const
}

export function getPatchV2AdvertisersAdvertiserIdLineItemsLineItemIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.advertisers)[':advertiserId']['lineItems'][':lineItemId']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v2.advertisers)[':advertiserId']['lineItems'][':lineItemId']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchV2AdvertisersAdvertiserIdLineItemsLineItemIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.advertisers)[':advertiserId']['lineItems'][':lineItemId']['$patch']
      >,
    ) {
      return parseResponse(
        client.v2.advertisers[':advertiserId'].lineItems[':lineItemId'].$patch(args, options),
      )
    },
  })
}

export function usePatchV2AdvertisersAdvertiserIdLineItemsLineItemId<
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
                    (typeof client.v2.advertisers)[':advertiserId']['lineItems'][':lineItemId']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v2.advertisers)[':advertiserId']['lineItems'][':lineItemId']['$patch']
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
  const mutationDefaults = getPatchV2AdvertisersAdvertiserIdLineItemsLineItemIdMutationOptions<
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

export function getV2AdvertisersAdvertiserIdLineItemsLineItemIdTargetingTypesTargetingTypeAssignedTargetingOptionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.advertisers)[':advertiserId']['lineItems'][':lineItemId']['targetingTypes'][':targetingType']['assignedTargetingOptions']['$get']
    >
  >,
) {
  return [
    'v2',
    '/v2/advertisers/:advertiserId/lineItems/:lineItemId/targetingTypes/:targetingType/assignedTargetingOptions',
    toValue(args),
  ] as const
}

export function getV2AdvertisersAdvertiserIdLineItemsLineItemIdTargetingTypesTargetingTypeAssignedTargetingOptionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.advertisers)[':advertiserId']['lineItems'][':lineItemId']['targetingTypes'][':targetingType']['assignedTargetingOptions']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getV2AdvertisersAdvertiserIdLineItemsLineItemIdTargetingTypesTargetingTypeAssignedTargetingOptionsQueryKey(
        args,
      ),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.advertisers[':advertiserId'].lineItems[':lineItemId'].targetingTypes[
          ':targetingType'
        ].assignedTargetingOptions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2AdvertisersAdvertiserIdLineItemsLineItemIdTargetingTypesTargetingTypeAssignedTargetingOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2.advertisers)[':advertiserId']['lineItems'][':lineItemId']['targetingTypes'][':targetingType']['assignedTargetingOptions']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.advertisers)[':advertiserId']['lineItems'][':lineItemId']['targetingTypes'][':targetingType']['assignedTargetingOptions']['$get']
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
                    (typeof client.v2.advertisers)[':advertiserId']['lineItems'][':lineItemId']['targetingTypes'][':targetingType']['assignedTargetingOptions']['$get']
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
                    (typeof client.v2.advertisers)[':advertiserId']['lineItems'][':lineItemId']['targetingTypes'][':targetingType']['assignedTargetingOptions']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getV2AdvertisersAdvertiserIdLineItemsLineItemIdTargetingTypesTargetingTypeAssignedTargetingOptionsQueryKey
          >
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
              (typeof client.v2.advertisers)[':advertiserId']['lineItems'][':lineItemId']['targetingTypes'][':targetingType']['assignedTargetingOptions']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getV2AdvertisersAdvertiserIdLineItemsLineItemIdTargetingTypesTargetingTypeAssignedTargetingOptionsQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV2AdvertisersAdvertiserIdLineItemsLineItemIdTargetingTypesTargetingTypeAssignedTargetingOptionsQueryKey(
          args,
        ),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.advertisers[':advertiserId'].lineItems[':lineItemId'].targetingTypes[
            ':targetingType'
          ].assignedTargetingOptions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV2AdvertisersAdvertiserIdLineItemsLineItemIdTargetingTypesTargetingTypeAssignedTargetingOptionsMutationKey() {
  return [
    'v2',
    '/v2/advertisers/:advertiserId/lineItems/:lineItemId/targetingTypes/:targetingType/assignedTargetingOptions',
    'POST',
  ] as const
}

export function getPostV2AdvertisersAdvertiserIdLineItemsLineItemIdTargetingTypesTargetingTypeAssignedTargetingOptionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.advertisers)[':advertiserId']['lineItems'][':lineItemId']['targetingTypes'][':targetingType']['assignedTargetingOptions']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v2.advertisers)[':advertiserId']['lineItems'][':lineItemId']['targetingTypes'][':targetingType']['assignedTargetingOptions']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostV2AdvertisersAdvertiserIdLineItemsLineItemIdTargetingTypesTargetingTypeAssignedTargetingOptionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.advertisers)[':advertiserId']['lineItems'][':lineItemId']['targetingTypes'][':targetingType']['assignedTargetingOptions']['$post']
      >,
    ) {
      return parseResponse(
        client.v2.advertisers[':advertiserId'].lineItems[':lineItemId'].targetingTypes[
          ':targetingType'
        ].assignedTargetingOptions.$post(args, options),
      )
    },
  })
}

export function usePostV2AdvertisersAdvertiserIdLineItemsLineItemIdTargetingTypesTargetingTypeAssignedTargetingOptions<
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
                    (typeof client.v2.advertisers)[':advertiserId']['lineItems'][':lineItemId']['targetingTypes'][':targetingType']['assignedTargetingOptions']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v2.advertisers)[':advertiserId']['lineItems'][':lineItemId']['targetingTypes'][':targetingType']['assignedTargetingOptions']['$post']
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
    getPostV2AdvertisersAdvertiserIdLineItemsLineItemIdTargetingTypesTargetingTypeAssignedTargetingOptionsMutationOptions<
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

export function getV2AdvertisersAdvertiserIdLineItemsLineItemIdTargetingTypesTargetingTypeAssignedTargetingOptionsAssignedTargetingOptionIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.advertisers)[':advertiserId']['lineItems'][':lineItemId']['targetingTypes'][':targetingType']['assignedTargetingOptions'][':assignedTargetingOptionId']['$get']
    >
  >,
) {
  return [
    'v2',
    '/v2/advertisers/:advertiserId/lineItems/:lineItemId/targetingTypes/:targetingType/assignedTargetingOptions/:assignedTargetingOptionId',
    toValue(args),
  ] as const
}

export function getV2AdvertisersAdvertiserIdLineItemsLineItemIdTargetingTypesTargetingTypeAssignedTargetingOptionsAssignedTargetingOptionIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.advertisers)[':advertiserId']['lineItems'][':lineItemId']['targetingTypes'][':targetingType']['assignedTargetingOptions'][':assignedTargetingOptionId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getV2AdvertisersAdvertiserIdLineItemsLineItemIdTargetingTypesTargetingTypeAssignedTargetingOptionsAssignedTargetingOptionIdQueryKey(
        args,
      ),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.advertisers[':advertiserId'].lineItems[':lineItemId'].targetingTypes[
          ':targetingType'
        ].assignedTargetingOptions[':assignedTargetingOptionId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2AdvertisersAdvertiserIdLineItemsLineItemIdTargetingTypesTargetingTypeAssignedTargetingOptionsAssignedTargetingOptionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2.advertisers)[':advertiserId']['lineItems'][':lineItemId']['targetingTypes'][':targetingType']['assignedTargetingOptions'][':assignedTargetingOptionId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.advertisers)[':advertiserId']['lineItems'][':lineItemId']['targetingTypes'][':targetingType']['assignedTargetingOptions'][':assignedTargetingOptionId']['$get']
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
                    (typeof client.v2.advertisers)[':advertiserId']['lineItems'][':lineItemId']['targetingTypes'][':targetingType']['assignedTargetingOptions'][':assignedTargetingOptionId']['$get']
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
                    (typeof client.v2.advertisers)[':advertiserId']['lineItems'][':lineItemId']['targetingTypes'][':targetingType']['assignedTargetingOptions'][':assignedTargetingOptionId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getV2AdvertisersAdvertiserIdLineItemsLineItemIdTargetingTypesTargetingTypeAssignedTargetingOptionsAssignedTargetingOptionIdQueryKey
          >
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
              (typeof client.v2.advertisers)[':advertiserId']['lineItems'][':lineItemId']['targetingTypes'][':targetingType']['assignedTargetingOptions'][':assignedTargetingOptionId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getV2AdvertisersAdvertiserIdLineItemsLineItemIdTargetingTypesTargetingTypeAssignedTargetingOptionsAssignedTargetingOptionIdQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV2AdvertisersAdvertiserIdLineItemsLineItemIdTargetingTypesTargetingTypeAssignedTargetingOptionsAssignedTargetingOptionIdQueryKey(
          args,
        ),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.advertisers[':advertiserId'].lineItems[':lineItemId'].targetingTypes[
            ':targetingType'
          ].assignedTargetingOptions[':assignedTargetingOptionId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteV2AdvertisersAdvertiserIdLineItemsLineItemIdTargetingTypesTargetingTypeAssignedTargetingOptionsAssignedTargetingOptionIdMutationKey() {
  return [
    'v2',
    '/v2/advertisers/:advertiserId/lineItems/:lineItemId/targetingTypes/:targetingType/assignedTargetingOptions/:assignedTargetingOptionId',
    'DELETE',
  ] as const
}

export function getDeleteV2AdvertisersAdvertiserIdLineItemsLineItemIdTargetingTypesTargetingTypeAssignedTargetingOptionsAssignedTargetingOptionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.advertisers)[':advertiserId']['lineItems'][':lineItemId']['targetingTypes'][':targetingType']['assignedTargetingOptions'][':assignedTargetingOptionId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v2.advertisers)[':advertiserId']['lineItems'][':lineItemId']['targetingTypes'][':targetingType']['assignedTargetingOptions'][':assignedTargetingOptionId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteV2AdvertisersAdvertiserIdLineItemsLineItemIdTargetingTypesTargetingTypeAssignedTargetingOptionsAssignedTargetingOptionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.advertisers)[':advertiserId']['lineItems'][':lineItemId']['targetingTypes'][':targetingType']['assignedTargetingOptions'][':assignedTargetingOptionId']['$delete']
      >,
    ) {
      return parseResponse(
        client.v2.advertisers[':advertiserId'].lineItems[':lineItemId'].targetingTypes[
          ':targetingType'
        ].assignedTargetingOptions[':assignedTargetingOptionId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteV2AdvertisersAdvertiserIdLineItemsLineItemIdTargetingTypesTargetingTypeAssignedTargetingOptionsAssignedTargetingOptionId<
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
                    (typeof client.v2.advertisers)[':advertiserId']['lineItems'][':lineItemId']['targetingTypes'][':targetingType']['assignedTargetingOptions'][':assignedTargetingOptionId']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v2.advertisers)[':advertiserId']['lineItems'][':lineItemId']['targetingTypes'][':targetingType']['assignedTargetingOptions'][':assignedTargetingOptionId']['$delete']
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
    getDeleteV2AdvertisersAdvertiserIdLineItemsLineItemIdTargetingTypesTargetingTypeAssignedTargetingOptionsAssignedTargetingOptionIdMutationOptions<
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

export function getPostV2AdvertisersAdvertiserIdLineItemsLineItemIdDuplicateMutationKey() {
  return ['v2', '/v2/advertisers/:advertiserId/lineItems/:lineItemId:duplicate', 'POST'] as const
}

export function getPostV2AdvertisersAdvertiserIdLineItemsLineItemIdDuplicateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.advertisers)[':advertiserId']['lineItems'][':lineItemId:duplicate']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v2.advertisers)[':advertiserId']['lineItems'][':lineItemId:duplicate']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV2AdvertisersAdvertiserIdLineItemsLineItemIdDuplicateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.advertisers)[':advertiserId']['lineItems'][':lineItemId:duplicate']['$post']
      >,
    ) {
      return parseResponse(
        client.v2.advertisers[':advertiserId'].lineItems[':lineItemId:duplicate'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostV2AdvertisersAdvertiserIdLineItemsLineItemIdDuplicate<
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
                    (typeof client.v2.advertisers)[':advertiserId']['lineItems'][':lineItemId:duplicate']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v2.advertisers)[':advertiserId']['lineItems'][':lineItemId:duplicate']['$post']
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
    getPostV2AdvertisersAdvertiserIdLineItemsLineItemIdDuplicateMutationOptions<
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

export function getPostV2AdvertisersAdvertiserIdLineItemsBulkEditAssignedTargetingOptionsMutationKey() {
  return [
    'v2',
    '/v2/advertisers/:advertiserId/lineItems:bulkEditAssignedTargetingOptions',
    'POST',
  ] as const
}

export function getPostV2AdvertisersAdvertiserIdLineItemsBulkEditAssignedTargetingOptionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.advertisers)[':advertiserId']['lineItems:bulkEditAssignedTargetingOptions']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v2.advertisers)[':advertiserId']['lineItems:bulkEditAssignedTargetingOptions']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostV2AdvertisersAdvertiserIdLineItemsBulkEditAssignedTargetingOptionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.advertisers)[':advertiserId']['lineItems:bulkEditAssignedTargetingOptions']['$post']
      >,
    ) {
      return parseResponse(
        client.v2.advertisers[':advertiserId']['lineItems:bulkEditAssignedTargetingOptions'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostV2AdvertisersAdvertiserIdLineItemsBulkEditAssignedTargetingOptions<
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
                    (typeof client.v2.advertisers)[':advertiserId']['lineItems:bulkEditAssignedTargetingOptions']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v2.advertisers)[':advertiserId']['lineItems:bulkEditAssignedTargetingOptions']['$post']
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
    getPostV2AdvertisersAdvertiserIdLineItemsBulkEditAssignedTargetingOptionsMutationOptions<
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

export function getV2AdvertisersAdvertiserIdLineItemsBulkListAssignedTargetingOptionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.advertisers)[':advertiserId']['lineItems:bulkListAssignedTargetingOptions']['$get']
    >
  >,
) {
  return [
    'v2',
    '/v2/advertisers/:advertiserId/lineItems:bulkListAssignedTargetingOptions',
    toValue(args),
  ] as const
}

export function getV2AdvertisersAdvertiserIdLineItemsBulkListAssignedTargetingOptionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.advertisers)[':advertiserId']['lineItems:bulkListAssignedTargetingOptions']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getV2AdvertisersAdvertiserIdLineItemsBulkListAssignedTargetingOptionsQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.advertisers[':advertiserId']['lineItems:bulkListAssignedTargetingOptions'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useV2AdvertisersAdvertiserIdLineItemsBulkListAssignedTargetingOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2.advertisers)[':advertiserId']['lineItems:bulkListAssignedTargetingOptions']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.advertisers)[':advertiserId']['lineItems:bulkListAssignedTargetingOptions']['$get']
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
                    (typeof client.v2.advertisers)[':advertiserId']['lineItems:bulkListAssignedTargetingOptions']['$get']
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
                    (typeof client.v2.advertisers)[':advertiserId']['lineItems:bulkListAssignedTargetingOptions']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getV2AdvertisersAdvertiserIdLineItemsBulkListAssignedTargetingOptionsQueryKey
          >
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
              (typeof client.v2.advertisers)[':advertiserId']['lineItems:bulkListAssignedTargetingOptions']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2AdvertisersAdvertiserIdLineItemsBulkListAssignedTargetingOptionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV2AdvertisersAdvertiserIdLineItemsBulkListAssignedTargetingOptionsQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.advertisers[':advertiserId']['lineItems:bulkListAssignedTargetingOptions'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPostV2AdvertisersAdvertiserIdLineItemsBulkUpdateMutationKey() {
  return ['v2', '/v2/advertisers/:advertiserId/lineItems:bulkUpdate', 'POST'] as const
}

export function getPostV2AdvertisersAdvertiserIdLineItemsBulkUpdateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.advertisers)[':advertiserId']['lineItems:bulkUpdate']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v2.advertisers)[':advertiserId']['lineItems:bulkUpdate']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV2AdvertisersAdvertiserIdLineItemsBulkUpdateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.advertisers)[':advertiserId']['lineItems:bulkUpdate']['$post']
      >,
    ) {
      return parseResponse(
        client.v2.advertisers[':advertiserId']['lineItems:bulkUpdate'].$post(args, options),
      )
    },
  })
}

export function usePostV2AdvertisersAdvertiserIdLineItemsBulkUpdate<
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
                    (typeof client.v2.advertisers)[':advertiserId']['lineItems:bulkUpdate']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v2.advertisers)[':advertiserId']['lineItems:bulkUpdate']['$post']
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
  const mutationDefaults = getPostV2AdvertisersAdvertiserIdLineItemsBulkUpdateMutationOptions<
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

export function getPostV2AdvertisersAdvertiserIdLineItemsGenerateDefaultMutationKey() {
  return ['v2', '/v2/advertisers/:advertiserId/lineItems:generateDefault', 'POST'] as const
}

export function getPostV2AdvertisersAdvertiserIdLineItemsGenerateDefaultMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.advertisers)[':advertiserId']['lineItems:generateDefault']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v2.advertisers)[':advertiserId']['lineItems:generateDefault']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV2AdvertisersAdvertiserIdLineItemsGenerateDefaultMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.advertisers)[':advertiserId']['lineItems:generateDefault']['$post']
      >,
    ) {
      return parseResponse(
        client.v2.advertisers[':advertiserId']['lineItems:generateDefault'].$post(args, options),
      )
    },
  })
}

export function usePostV2AdvertisersAdvertiserIdLineItemsGenerateDefault<
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
                    (typeof client.v2.advertisers)[':advertiserId']['lineItems:generateDefault']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v2.advertisers)[':advertiserId']['lineItems:generateDefault']['$post']
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
  const mutationDefaults = getPostV2AdvertisersAdvertiserIdLineItemsGenerateDefaultMutationOptions<
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

export function getV2AdvertisersAdvertiserIdLocationListsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.advertisers)[':advertiserId']['locationLists']['$get']>
  >,
) {
  return ['v2', '/v2/advertisers/:advertiserId/locationLists', toValue(args)] as const
}

export function getV2AdvertisersAdvertiserIdLocationListsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.advertisers)[':advertiserId']['locationLists']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2AdvertisersAdvertiserIdLocationListsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.advertisers[':advertiserId'].locationLists.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2AdvertisersAdvertiserIdLocationLists<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2.advertisers)[':advertiserId']['locationLists']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.advertisers)[':advertiserId']['locationLists']['$get']>
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
                    (typeof client.v2.advertisers)[':advertiserId']['locationLists']['$get']
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
                    (typeof client.v2.advertisers)[':advertiserId']['locationLists']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV2AdvertisersAdvertiserIdLocationListsQueryKey>
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
            ReturnType<(typeof client.v2.advertisers)[':advertiserId']['locationLists']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2AdvertisersAdvertiserIdLocationListsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2AdvertisersAdvertiserIdLocationListsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.advertisers[':advertiserId'].locationLists.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV2AdvertisersAdvertiserIdLocationListsMutationKey() {
  return ['v2', '/v2/advertisers/:advertiserId/locationLists', 'POST'] as const
}

export function getPostV2AdvertisersAdvertiserIdLocationListsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v2.advertisers)[':advertiserId']['locationLists']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.advertisers)[':advertiserId']['locationLists']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2AdvertisersAdvertiserIdLocationListsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.advertisers)[':advertiserId']['locationLists']['$post']
      >,
    ) {
      return parseResponse(
        client.v2.advertisers[':advertiserId'].locationLists.$post(args, options),
      )
    },
  })
}

export function usePostV2AdvertisersAdvertiserIdLocationLists<
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
                    (typeof client.v2.advertisers)[':advertiserId']['locationLists']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v2.advertisers)[':advertiserId']['locationLists']['$post']
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
  const mutationDefaults = getPostV2AdvertisersAdvertiserIdLocationListsMutationOptions<
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

export function getPatchV2AdvertisersAdvertiserIdLocationListsLocationListIdMutationKey() {
  return ['v2', '/v2/advertisers/:advertiserId/locationLists/:locationListId', 'PATCH'] as const
}

export function getPatchV2AdvertisersAdvertiserIdLocationListsLocationListIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.advertisers)[':advertiserId']['locationLists'][':locationListId']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v2.advertisers)[':advertiserId']['locationLists'][':locationListId']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchV2AdvertisersAdvertiserIdLocationListsLocationListIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.advertisers)[':advertiserId']['locationLists'][':locationListId']['$patch']
      >,
    ) {
      return parseResponse(
        client.v2.advertisers[':advertiserId'].locationLists[':locationListId'].$patch(
          args,
          options,
        ),
      )
    },
  })
}

export function usePatchV2AdvertisersAdvertiserIdLocationListsLocationListId<
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
                    (typeof client.v2.advertisers)[':advertiserId']['locationLists'][':locationListId']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v2.advertisers)[':advertiserId']['locationLists'][':locationListId']['$patch']
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
    getPatchV2AdvertisersAdvertiserIdLocationListsLocationListIdMutationOptions<
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

export function getV2AdvertisersAdvertiserIdLocationListsLocationListIdAssignedLocationsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.advertisers)[':advertiserId']['locationLists'][':locationListId']['assignedLocations']['$get']
    >
  >,
) {
  return [
    'v2',
    '/v2/advertisers/:advertiserId/locationLists/:locationListId/assignedLocations',
    toValue(args),
  ] as const
}

export function getV2AdvertisersAdvertiserIdLocationListsLocationListIdAssignedLocationsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.advertisers)[':advertiserId']['locationLists'][':locationListId']['assignedLocations']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getV2AdvertisersAdvertiserIdLocationListsLocationListIdAssignedLocationsQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.advertisers[':advertiserId'].locationLists[
          ':locationListId'
        ].assignedLocations.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV2AdvertisersAdvertiserIdLocationListsLocationListIdAssignedLocations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2.advertisers)[':advertiserId']['locationLists'][':locationListId']['assignedLocations']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.advertisers)[':advertiserId']['locationLists'][':locationListId']['assignedLocations']['$get']
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
                    (typeof client.v2.advertisers)[':advertiserId']['locationLists'][':locationListId']['assignedLocations']['$get']
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
                    (typeof client.v2.advertisers)[':advertiserId']['locationLists'][':locationListId']['assignedLocations']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getV2AdvertisersAdvertiserIdLocationListsLocationListIdAssignedLocationsQueryKey
          >
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
              (typeof client.v2.advertisers)[':advertiserId']['locationLists'][':locationListId']['assignedLocations']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getV2AdvertisersAdvertiserIdLocationListsLocationListIdAssignedLocationsQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV2AdvertisersAdvertiserIdLocationListsLocationListIdAssignedLocationsQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.advertisers[':advertiserId'].locationLists[
            ':locationListId'
          ].assignedLocations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV2AdvertisersAdvertiserIdLocationListsLocationListIdAssignedLocationsMutationKey() {
  return [
    'v2',
    '/v2/advertisers/:advertiserId/locationLists/:locationListId/assignedLocations',
    'POST',
  ] as const
}

export function getPostV2AdvertisersAdvertiserIdLocationListsLocationListIdAssignedLocationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.advertisers)[':advertiserId']['locationLists'][':locationListId']['assignedLocations']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v2.advertisers)[':advertiserId']['locationLists'][':locationListId']['assignedLocations']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostV2AdvertisersAdvertiserIdLocationListsLocationListIdAssignedLocationsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.advertisers)[':advertiserId']['locationLists'][':locationListId']['assignedLocations']['$post']
      >,
    ) {
      return parseResponse(
        client.v2.advertisers[':advertiserId'].locationLists[
          ':locationListId'
        ].assignedLocations.$post(args, options),
      )
    },
  })
}

export function usePostV2AdvertisersAdvertiserIdLocationListsLocationListIdAssignedLocations<
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
                    (typeof client.v2.advertisers)[':advertiserId']['locationLists'][':locationListId']['assignedLocations']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v2.advertisers)[':advertiserId']['locationLists'][':locationListId']['assignedLocations']['$post']
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
    getPostV2AdvertisersAdvertiserIdLocationListsLocationListIdAssignedLocationsMutationOptions<
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

export function getDeleteV2AdvertisersAdvertiserIdLocationListsLocationListIdAssignedLocationsAssignedLocationIdMutationKey() {
  return [
    'v2',
    '/v2/advertisers/:advertiserId/locationLists/:locationListId/assignedLocations/:assignedLocationId',
    'DELETE',
  ] as const
}

export function getDeleteV2AdvertisersAdvertiserIdLocationListsLocationListIdAssignedLocationsAssignedLocationIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.advertisers)[':advertiserId']['locationLists'][':locationListId']['assignedLocations'][':assignedLocationId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v2.advertisers)[':advertiserId']['locationLists'][':locationListId']['assignedLocations'][':assignedLocationId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteV2AdvertisersAdvertiserIdLocationListsLocationListIdAssignedLocationsAssignedLocationIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.advertisers)[':advertiserId']['locationLists'][':locationListId']['assignedLocations'][':assignedLocationId']['$delete']
      >,
    ) {
      return parseResponse(
        client.v2.advertisers[':advertiserId'].locationLists[':locationListId'].assignedLocations[
          ':assignedLocationId'
        ].$delete(args, options),
      )
    },
  })
}

export function useDeleteV2AdvertisersAdvertiserIdLocationListsLocationListIdAssignedLocationsAssignedLocationId<
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
                    (typeof client.v2.advertisers)[':advertiserId']['locationLists'][':locationListId']['assignedLocations'][':assignedLocationId']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v2.advertisers)[':advertiserId']['locationLists'][':locationListId']['assignedLocations'][':assignedLocationId']['$delete']
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
    getDeleteV2AdvertisersAdvertiserIdLocationListsLocationListIdAssignedLocationsAssignedLocationIdMutationOptions<
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

export function getPostV2AdvertisersAdvertiserIdLocationListsLocationListIdAssignedLocationsBulkEditMutationKey() {
  return [
    'v2',
    '/v2/advertisers/:advertiserId/locationLists/:locationListId/assignedLocations:bulkEdit',
    'POST',
  ] as const
}

export function getPostV2AdvertisersAdvertiserIdLocationListsLocationListIdAssignedLocationsBulkEditMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.advertisers)[':advertiserId']['locationLists'][':locationListId']['assignedLocations:bulkEdit']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v2.advertisers)[':advertiserId']['locationLists'][':locationListId']['assignedLocations:bulkEdit']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostV2AdvertisersAdvertiserIdLocationListsLocationListIdAssignedLocationsBulkEditMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.advertisers)[':advertiserId']['locationLists'][':locationListId']['assignedLocations:bulkEdit']['$post']
      >,
    ) {
      return parseResponse(
        client.v2.advertisers[':advertiserId'].locationLists[':locationListId'][
          'assignedLocations:bulkEdit'
        ].$post(args, options),
      )
    },
  })
}

export function usePostV2AdvertisersAdvertiserIdLocationListsLocationListIdAssignedLocationsBulkEdit<
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
                    (typeof client.v2.advertisers)[':advertiserId']['locationLists'][':locationListId']['assignedLocations:bulkEdit']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v2.advertisers)[':advertiserId']['locationLists'][':locationListId']['assignedLocations:bulkEdit']['$post']
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
    getPostV2AdvertisersAdvertiserIdLocationListsLocationListIdAssignedLocationsBulkEditMutationOptions<
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

export function getV2AdvertisersAdvertiserIdManualTriggersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.advertisers)[':advertiserId']['manualTriggers']['$get']>
  >,
) {
  return ['v2', '/v2/advertisers/:advertiserId/manualTriggers', toValue(args)] as const
}

export function getV2AdvertisersAdvertiserIdManualTriggersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.advertisers)[':advertiserId']['manualTriggers']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2AdvertisersAdvertiserIdManualTriggersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.advertisers[':advertiserId'].manualTriggers.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2AdvertisersAdvertiserIdManualTriggers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2.advertisers)[':advertiserId']['manualTriggers']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.advertisers)[':advertiserId']['manualTriggers']['$get']>
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
                    (typeof client.v2.advertisers)[':advertiserId']['manualTriggers']['$get']
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
                    (typeof client.v2.advertisers)[':advertiserId']['manualTriggers']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV2AdvertisersAdvertiserIdManualTriggersQueryKey>
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
            ReturnType<(typeof client.v2.advertisers)[':advertiserId']['manualTriggers']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2AdvertisersAdvertiserIdManualTriggersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2AdvertisersAdvertiserIdManualTriggersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.advertisers[':advertiserId'].manualTriggers.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV2AdvertisersAdvertiserIdManualTriggersMutationKey() {
  return ['v2', '/v2/advertisers/:advertiserId/manualTriggers', 'POST'] as const
}

export function getPostV2AdvertisersAdvertiserIdManualTriggersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v2.advertisers)[':advertiserId']['manualTriggers']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.advertisers)[':advertiserId']['manualTriggers']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2AdvertisersAdvertiserIdManualTriggersMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.advertisers)[':advertiserId']['manualTriggers']['$post']
      >,
    ) {
      return parseResponse(
        client.v2.advertisers[':advertiserId'].manualTriggers.$post(args, options),
      )
    },
  })
}

export function usePostV2AdvertisersAdvertiserIdManualTriggers<
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
                    (typeof client.v2.advertisers)[':advertiserId']['manualTriggers']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v2.advertisers)[':advertiserId']['manualTriggers']['$post']
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
  const mutationDefaults = getPostV2AdvertisersAdvertiserIdManualTriggersMutationOptions<
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

export function getV2AdvertisersAdvertiserIdManualTriggersTriggerIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.advertisers)[':advertiserId']['manualTriggers'][':triggerId']['$get']
    >
  >,
) {
  return ['v2', '/v2/advertisers/:advertiserId/manualTriggers/:triggerId', toValue(args)] as const
}

export function getV2AdvertisersAdvertiserIdManualTriggersTriggerIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.advertisers)[':advertiserId']['manualTriggers'][':triggerId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2AdvertisersAdvertiserIdManualTriggersTriggerIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.advertisers[':advertiserId'].manualTriggers[':triggerId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2AdvertisersAdvertiserIdManualTriggersTriggerId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2.advertisers)[':advertiserId']['manualTriggers'][':triggerId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.advertisers)[':advertiserId']['manualTriggers'][':triggerId']['$get']
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
                    (typeof client.v2.advertisers)[':advertiserId']['manualTriggers'][':triggerId']['$get']
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
                    (typeof client.v2.advertisers)[':advertiserId']['manualTriggers'][':triggerId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV2AdvertisersAdvertiserIdManualTriggersTriggerIdQueryKey>
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
              (typeof client.v2.advertisers)[':advertiserId']['manualTriggers'][':triggerId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2AdvertisersAdvertiserIdManualTriggersTriggerIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2AdvertisersAdvertiserIdManualTriggersTriggerIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.advertisers[':advertiserId'].manualTriggers[':triggerId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPatchV2AdvertisersAdvertiserIdManualTriggersTriggerIdMutationKey() {
  return ['v2', '/v2/advertisers/:advertiserId/manualTriggers/:triggerId', 'PATCH'] as const
}

export function getPatchV2AdvertisersAdvertiserIdManualTriggersTriggerIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.advertisers)[':advertiserId']['manualTriggers'][':triggerId']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v2.advertisers)[':advertiserId']['manualTriggers'][':triggerId']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchV2AdvertisersAdvertiserIdManualTriggersTriggerIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.advertisers)[':advertiserId']['manualTriggers'][':triggerId']['$patch']
      >,
    ) {
      return parseResponse(
        client.v2.advertisers[':advertiserId'].manualTriggers[':triggerId'].$patch(args, options),
      )
    },
  })
}

export function usePatchV2AdvertisersAdvertiserIdManualTriggersTriggerId<
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
                    (typeof client.v2.advertisers)[':advertiserId']['manualTriggers'][':triggerId']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v2.advertisers)[':advertiserId']['manualTriggers'][':triggerId']['$patch']
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
  const mutationDefaults = getPatchV2AdvertisersAdvertiserIdManualTriggersTriggerIdMutationOptions<
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

export function getPostV2AdvertisersAdvertiserIdManualTriggersTriggerIdActivateMutationKey() {
  return ['v2', '/v2/advertisers/:advertiserId/manualTriggers/:triggerId:activate', 'POST'] as const
}

export function getPostV2AdvertisersAdvertiserIdManualTriggersTriggerIdActivateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.advertisers)[':advertiserId']['manualTriggers'][':triggerId:activate']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v2.advertisers)[':advertiserId']['manualTriggers'][':triggerId:activate']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV2AdvertisersAdvertiserIdManualTriggersTriggerIdActivateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.advertisers)[':advertiserId']['manualTriggers'][':triggerId:activate']['$post']
      >,
    ) {
      return parseResponse(
        client.v2.advertisers[':advertiserId'].manualTriggers[':triggerId:activate'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostV2AdvertisersAdvertiserIdManualTriggersTriggerIdActivate<
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
                    (typeof client.v2.advertisers)[':advertiserId']['manualTriggers'][':triggerId:activate']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v2.advertisers)[':advertiserId']['manualTriggers'][':triggerId:activate']['$post']
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
    getPostV2AdvertisersAdvertiserIdManualTriggersTriggerIdActivateMutationOptions<
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

export function getPostV2AdvertisersAdvertiserIdManualTriggersTriggerIdDeactivateMutationKey() {
  return [
    'v2',
    '/v2/advertisers/:advertiserId/manualTriggers/:triggerId:deactivate',
    'POST',
  ] as const
}

export function getPostV2AdvertisersAdvertiserIdManualTriggersTriggerIdDeactivateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.advertisers)[':advertiserId']['manualTriggers'][':triggerId:deactivate']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v2.advertisers)[':advertiserId']['manualTriggers'][':triggerId:deactivate']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV2AdvertisersAdvertiserIdManualTriggersTriggerIdDeactivateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.advertisers)[':advertiserId']['manualTriggers'][':triggerId:deactivate']['$post']
      >,
    ) {
      return parseResponse(
        client.v2.advertisers[':advertiserId'].manualTriggers[':triggerId:deactivate'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostV2AdvertisersAdvertiserIdManualTriggersTriggerIdDeactivate<
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
                    (typeof client.v2.advertisers)[':advertiserId']['manualTriggers'][':triggerId:deactivate']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v2.advertisers)[':advertiserId']['manualTriggers'][':triggerId:deactivate']['$post']
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
    getPostV2AdvertisersAdvertiserIdManualTriggersTriggerIdDeactivateMutationOptions<
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

export function getV2AdvertisersAdvertiserIdNegativeKeywordListsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.advertisers)[':advertiserId']['negativeKeywordLists']['$get']
    >
  >,
) {
  return ['v2', '/v2/advertisers/:advertiserId/negativeKeywordLists', toValue(args)] as const
}

export function getV2AdvertisersAdvertiserIdNegativeKeywordListsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.advertisers)[':advertiserId']['negativeKeywordLists']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2AdvertisersAdvertiserIdNegativeKeywordListsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.advertisers[':advertiserId'].negativeKeywordLists.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2AdvertisersAdvertiserIdNegativeKeywordLists<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2.advertisers)[':advertiserId']['negativeKeywordLists']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.advertisers)[':advertiserId']['negativeKeywordLists']['$get']
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
                    (typeof client.v2.advertisers)[':advertiserId']['negativeKeywordLists']['$get']
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
                    (typeof client.v2.advertisers)[':advertiserId']['negativeKeywordLists']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV2AdvertisersAdvertiserIdNegativeKeywordListsQueryKey>
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
              (typeof client.v2.advertisers)[':advertiserId']['negativeKeywordLists']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2AdvertisersAdvertiserIdNegativeKeywordListsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2AdvertisersAdvertiserIdNegativeKeywordListsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.advertisers[':advertiserId'].negativeKeywordLists.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV2AdvertisersAdvertiserIdNegativeKeywordListsMutationKey() {
  return ['v2', '/v2/advertisers/:advertiserId/negativeKeywordLists', 'POST'] as const
}

export function getPostV2AdvertisersAdvertiserIdNegativeKeywordListsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.advertisers)[':advertiserId']['negativeKeywordLists']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v2.advertisers)[':advertiserId']['negativeKeywordLists']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV2AdvertisersAdvertiserIdNegativeKeywordListsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.advertisers)[':advertiserId']['negativeKeywordLists']['$post']
      >,
    ) {
      return parseResponse(
        client.v2.advertisers[':advertiserId'].negativeKeywordLists.$post(args, options),
      )
    },
  })
}

export function usePostV2AdvertisersAdvertiserIdNegativeKeywordLists<
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
                    (typeof client.v2.advertisers)[':advertiserId']['negativeKeywordLists']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v2.advertisers)[':advertiserId']['negativeKeywordLists']['$post']
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
  const mutationDefaults = getPostV2AdvertisersAdvertiserIdNegativeKeywordListsMutationOptions<
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

export function getPatchV2AdvertisersAdvertiserIdNegativeKeywordListsNegativeKeywordListIdMutationKey() {
  return [
    'v2',
    '/v2/advertisers/:advertiserId/negativeKeywordLists/:negativeKeywordListId',
    'PATCH',
  ] as const
}

export function getPatchV2AdvertisersAdvertiserIdNegativeKeywordListsNegativeKeywordListIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.advertisers)[':advertiserId']['negativeKeywordLists'][':negativeKeywordListId']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v2.advertisers)[':advertiserId']['negativeKeywordLists'][':negativeKeywordListId']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPatchV2AdvertisersAdvertiserIdNegativeKeywordListsNegativeKeywordListIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.advertisers)[':advertiserId']['negativeKeywordLists'][':negativeKeywordListId']['$patch']
      >,
    ) {
      return parseResponse(
        client.v2.advertisers[':advertiserId'].negativeKeywordLists[
          ':negativeKeywordListId'
        ].$patch(args, options),
      )
    },
  })
}

export function usePatchV2AdvertisersAdvertiserIdNegativeKeywordListsNegativeKeywordListId<
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
                    (typeof client.v2.advertisers)[':advertiserId']['negativeKeywordLists'][':negativeKeywordListId']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v2.advertisers)[':advertiserId']['negativeKeywordLists'][':negativeKeywordListId']['$patch']
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
    getPatchV2AdvertisersAdvertiserIdNegativeKeywordListsNegativeKeywordListIdMutationOptions<
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

export function getV2AdvertisersAdvertiserIdNegativeKeywordListsNegativeKeywordListIdNegativeKeywordsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.advertisers)[':advertiserId']['negativeKeywordLists'][':negativeKeywordListId']['negativeKeywords']['$get']
    >
  >,
) {
  return [
    'v2',
    '/v2/advertisers/:advertiserId/negativeKeywordLists/:negativeKeywordListId/negativeKeywords',
    toValue(args),
  ] as const
}

export function getV2AdvertisersAdvertiserIdNegativeKeywordListsNegativeKeywordListIdNegativeKeywordsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.advertisers)[':advertiserId']['negativeKeywordLists'][':negativeKeywordListId']['negativeKeywords']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getV2AdvertisersAdvertiserIdNegativeKeywordListsNegativeKeywordListIdNegativeKeywordsQueryKey(
        args,
      ),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.advertisers[':advertiserId'].negativeKeywordLists[
          ':negativeKeywordListId'
        ].negativeKeywords.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV2AdvertisersAdvertiserIdNegativeKeywordListsNegativeKeywordListIdNegativeKeywords<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2.advertisers)[':advertiserId']['negativeKeywordLists'][':negativeKeywordListId']['negativeKeywords']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.advertisers)[':advertiserId']['negativeKeywordLists'][':negativeKeywordListId']['negativeKeywords']['$get']
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
                    (typeof client.v2.advertisers)[':advertiserId']['negativeKeywordLists'][':negativeKeywordListId']['negativeKeywords']['$get']
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
                    (typeof client.v2.advertisers)[':advertiserId']['negativeKeywordLists'][':negativeKeywordListId']['negativeKeywords']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getV2AdvertisersAdvertiserIdNegativeKeywordListsNegativeKeywordListIdNegativeKeywordsQueryKey
          >
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
              (typeof client.v2.advertisers)[':advertiserId']['negativeKeywordLists'][':negativeKeywordListId']['negativeKeywords']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getV2AdvertisersAdvertiserIdNegativeKeywordListsNegativeKeywordListIdNegativeKeywordsQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV2AdvertisersAdvertiserIdNegativeKeywordListsNegativeKeywordListIdNegativeKeywordsQueryKey(
          args,
        ),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.advertisers[':advertiserId'].negativeKeywordLists[
            ':negativeKeywordListId'
          ].negativeKeywords.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteV2AdvertisersAdvertiserIdNegativeKeywordListsNegativeKeywordListIdNegativeKeywordsKeywordValueMutationKey() {
  return [
    'v2',
    '/v2/advertisers/:advertiserId/negativeKeywordLists/:negativeKeywordListId/negativeKeywords/:keywordValue',
    'DELETE',
  ] as const
}

export function getDeleteV2AdvertisersAdvertiserIdNegativeKeywordListsNegativeKeywordListIdNegativeKeywordsKeywordValueMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.advertisers)[':advertiserId']['negativeKeywordLists'][':negativeKeywordListId']['negativeKeywords'][':keywordValue']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v2.advertisers)[':advertiserId']['negativeKeywordLists'][':negativeKeywordListId']['negativeKeywords'][':keywordValue']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteV2AdvertisersAdvertiserIdNegativeKeywordListsNegativeKeywordListIdNegativeKeywordsKeywordValueMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.advertisers)[':advertiserId']['negativeKeywordLists'][':negativeKeywordListId']['negativeKeywords'][':keywordValue']['$delete']
      >,
    ) {
      return parseResponse(
        client.v2.advertisers[':advertiserId'].negativeKeywordLists[
          ':negativeKeywordListId'
        ].negativeKeywords[':keywordValue'].$delete(args, options),
      )
    },
  })
}

export function useDeleteV2AdvertisersAdvertiserIdNegativeKeywordListsNegativeKeywordListIdNegativeKeywordsKeywordValue<
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
                    (typeof client.v2.advertisers)[':advertiserId']['negativeKeywordLists'][':negativeKeywordListId']['negativeKeywords'][':keywordValue']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v2.advertisers)[':advertiserId']['negativeKeywordLists'][':negativeKeywordListId']['negativeKeywords'][':keywordValue']['$delete']
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
    getDeleteV2AdvertisersAdvertiserIdNegativeKeywordListsNegativeKeywordListIdNegativeKeywordsKeywordValueMutationOptions<
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

export function getPostV2AdvertisersAdvertiserIdNegativeKeywordListsNegativeKeywordListIdNegativeKeywordsBulkEditMutationKey() {
  return [
    'v2',
    '/v2/advertisers/:advertiserId/negativeKeywordLists/:negativeKeywordListId/negativeKeywords:bulkEdit',
    'POST',
  ] as const
}

export function getPostV2AdvertisersAdvertiserIdNegativeKeywordListsNegativeKeywordListIdNegativeKeywordsBulkEditMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.advertisers)[':advertiserId']['negativeKeywordLists'][':negativeKeywordListId']['negativeKeywords:bulkEdit']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v2.advertisers)[':advertiserId']['negativeKeywordLists'][':negativeKeywordListId']['negativeKeywords:bulkEdit']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostV2AdvertisersAdvertiserIdNegativeKeywordListsNegativeKeywordListIdNegativeKeywordsBulkEditMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.advertisers)[':advertiserId']['negativeKeywordLists'][':negativeKeywordListId']['negativeKeywords:bulkEdit']['$post']
      >,
    ) {
      return parseResponse(
        client.v2.advertisers[':advertiserId'].negativeKeywordLists[':negativeKeywordListId'][
          'negativeKeywords:bulkEdit'
        ].$post(args, options),
      )
    },
  })
}

export function usePostV2AdvertisersAdvertiserIdNegativeKeywordListsNegativeKeywordListIdNegativeKeywordsBulkEdit<
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
                    (typeof client.v2.advertisers)[':advertiserId']['negativeKeywordLists'][':negativeKeywordListId']['negativeKeywords:bulkEdit']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v2.advertisers)[':advertiserId']['negativeKeywordLists'][':negativeKeywordListId']['negativeKeywords:bulkEdit']['$post']
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
    getPostV2AdvertisersAdvertiserIdNegativeKeywordListsNegativeKeywordListIdNegativeKeywordsBulkEditMutationOptions<
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

export function getPostV2AdvertisersAdvertiserIdNegativeKeywordListsNegativeKeywordListIdNegativeKeywordsReplaceMutationKey() {
  return [
    'v2',
    '/v2/advertisers/:advertiserId/negativeKeywordLists/:negativeKeywordListId/negativeKeywords:replace',
    'POST',
  ] as const
}

export function getPostV2AdvertisersAdvertiserIdNegativeKeywordListsNegativeKeywordListIdNegativeKeywordsReplaceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.advertisers)[':advertiserId']['negativeKeywordLists'][':negativeKeywordListId']['negativeKeywords:replace']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v2.advertisers)[':advertiserId']['negativeKeywordLists'][':negativeKeywordListId']['negativeKeywords:replace']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostV2AdvertisersAdvertiserIdNegativeKeywordListsNegativeKeywordListIdNegativeKeywordsReplaceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.advertisers)[':advertiserId']['negativeKeywordLists'][':negativeKeywordListId']['negativeKeywords:replace']['$post']
      >,
    ) {
      return parseResponse(
        client.v2.advertisers[':advertiserId'].negativeKeywordLists[':negativeKeywordListId'][
          'negativeKeywords:replace'
        ].$post(args, options),
      )
    },
  })
}

export function usePostV2AdvertisersAdvertiserIdNegativeKeywordListsNegativeKeywordListIdNegativeKeywordsReplace<
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
                    (typeof client.v2.advertisers)[':advertiserId']['negativeKeywordLists'][':negativeKeywordListId']['negativeKeywords:replace']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v2.advertisers)[':advertiserId']['negativeKeywordLists'][':negativeKeywordListId']['negativeKeywords:replace']['$post']
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
    getPostV2AdvertisersAdvertiserIdNegativeKeywordListsNegativeKeywordListIdNegativeKeywordsReplaceMutationOptions<
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

export function getV2AdvertisersAdvertiserIdTargetingTypesTargetingTypeAssignedTargetingOptionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.advertisers)[':advertiserId']['targetingTypes'][':targetingType']['assignedTargetingOptions']['$get']
    >
  >,
) {
  return [
    'v2',
    '/v2/advertisers/:advertiserId/targetingTypes/:targetingType/assignedTargetingOptions',
    toValue(args),
  ] as const
}

export function getV2AdvertisersAdvertiserIdTargetingTypesTargetingTypeAssignedTargetingOptionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.advertisers)[':advertiserId']['targetingTypes'][':targetingType']['assignedTargetingOptions']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getV2AdvertisersAdvertiserIdTargetingTypesTargetingTypeAssignedTargetingOptionsQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.advertisers[':advertiserId'].targetingTypes[
          ':targetingType'
        ].assignedTargetingOptions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2AdvertisersAdvertiserIdTargetingTypesTargetingTypeAssignedTargetingOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2.advertisers)[':advertiserId']['targetingTypes'][':targetingType']['assignedTargetingOptions']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.advertisers)[':advertiserId']['targetingTypes'][':targetingType']['assignedTargetingOptions']['$get']
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
                    (typeof client.v2.advertisers)[':advertiserId']['targetingTypes'][':targetingType']['assignedTargetingOptions']['$get']
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
                    (typeof client.v2.advertisers)[':advertiserId']['targetingTypes'][':targetingType']['assignedTargetingOptions']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getV2AdvertisersAdvertiserIdTargetingTypesTargetingTypeAssignedTargetingOptionsQueryKey
          >
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
              (typeof client.v2.advertisers)[':advertiserId']['targetingTypes'][':targetingType']['assignedTargetingOptions']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getV2AdvertisersAdvertiserIdTargetingTypesTargetingTypeAssignedTargetingOptionsQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV2AdvertisersAdvertiserIdTargetingTypesTargetingTypeAssignedTargetingOptionsQueryKey(
          args,
        ),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.advertisers[':advertiserId'].targetingTypes[
            ':targetingType'
          ].assignedTargetingOptions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV2AdvertisersAdvertiserIdTargetingTypesTargetingTypeAssignedTargetingOptionsMutationKey() {
  return [
    'v2',
    '/v2/advertisers/:advertiserId/targetingTypes/:targetingType/assignedTargetingOptions',
    'POST',
  ] as const
}

export function getPostV2AdvertisersAdvertiserIdTargetingTypesTargetingTypeAssignedTargetingOptionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.advertisers)[':advertiserId']['targetingTypes'][':targetingType']['assignedTargetingOptions']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v2.advertisers)[':advertiserId']['targetingTypes'][':targetingType']['assignedTargetingOptions']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostV2AdvertisersAdvertiserIdTargetingTypesTargetingTypeAssignedTargetingOptionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.advertisers)[':advertiserId']['targetingTypes'][':targetingType']['assignedTargetingOptions']['$post']
      >,
    ) {
      return parseResponse(
        client.v2.advertisers[':advertiserId'].targetingTypes[
          ':targetingType'
        ].assignedTargetingOptions.$post(args, options),
      )
    },
  })
}

export function usePostV2AdvertisersAdvertiserIdTargetingTypesTargetingTypeAssignedTargetingOptions<
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
                    (typeof client.v2.advertisers)[':advertiserId']['targetingTypes'][':targetingType']['assignedTargetingOptions']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v2.advertisers)[':advertiserId']['targetingTypes'][':targetingType']['assignedTargetingOptions']['$post']
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
    getPostV2AdvertisersAdvertiserIdTargetingTypesTargetingTypeAssignedTargetingOptionsMutationOptions<
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

export function getV2AdvertisersAdvertiserIdTargetingTypesTargetingTypeAssignedTargetingOptionsAssignedTargetingOptionIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.advertisers)[':advertiserId']['targetingTypes'][':targetingType']['assignedTargetingOptions'][':assignedTargetingOptionId']['$get']
    >
  >,
) {
  return [
    'v2',
    '/v2/advertisers/:advertiserId/targetingTypes/:targetingType/assignedTargetingOptions/:assignedTargetingOptionId',
    toValue(args),
  ] as const
}

export function getV2AdvertisersAdvertiserIdTargetingTypesTargetingTypeAssignedTargetingOptionsAssignedTargetingOptionIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.advertisers)[':advertiserId']['targetingTypes'][':targetingType']['assignedTargetingOptions'][':assignedTargetingOptionId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getV2AdvertisersAdvertiserIdTargetingTypesTargetingTypeAssignedTargetingOptionsAssignedTargetingOptionIdQueryKey(
        args,
      ),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.advertisers[':advertiserId'].targetingTypes[
          ':targetingType'
        ].assignedTargetingOptions[':assignedTargetingOptionId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2AdvertisersAdvertiserIdTargetingTypesTargetingTypeAssignedTargetingOptionsAssignedTargetingOptionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2.advertisers)[':advertiserId']['targetingTypes'][':targetingType']['assignedTargetingOptions'][':assignedTargetingOptionId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.advertisers)[':advertiserId']['targetingTypes'][':targetingType']['assignedTargetingOptions'][':assignedTargetingOptionId']['$get']
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
                    (typeof client.v2.advertisers)[':advertiserId']['targetingTypes'][':targetingType']['assignedTargetingOptions'][':assignedTargetingOptionId']['$get']
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
                    (typeof client.v2.advertisers)[':advertiserId']['targetingTypes'][':targetingType']['assignedTargetingOptions'][':assignedTargetingOptionId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getV2AdvertisersAdvertiserIdTargetingTypesTargetingTypeAssignedTargetingOptionsAssignedTargetingOptionIdQueryKey
          >
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
              (typeof client.v2.advertisers)[':advertiserId']['targetingTypes'][':targetingType']['assignedTargetingOptions'][':assignedTargetingOptionId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getV2AdvertisersAdvertiserIdTargetingTypesTargetingTypeAssignedTargetingOptionsAssignedTargetingOptionIdQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV2AdvertisersAdvertiserIdTargetingTypesTargetingTypeAssignedTargetingOptionsAssignedTargetingOptionIdQueryKey(
          args,
        ),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.advertisers[':advertiserId'].targetingTypes[
            ':targetingType'
          ].assignedTargetingOptions[':assignedTargetingOptionId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteV2AdvertisersAdvertiserIdTargetingTypesTargetingTypeAssignedTargetingOptionsAssignedTargetingOptionIdMutationKey() {
  return [
    'v2',
    '/v2/advertisers/:advertiserId/targetingTypes/:targetingType/assignedTargetingOptions/:assignedTargetingOptionId',
    'DELETE',
  ] as const
}

export function getDeleteV2AdvertisersAdvertiserIdTargetingTypesTargetingTypeAssignedTargetingOptionsAssignedTargetingOptionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.advertisers)[':advertiserId']['targetingTypes'][':targetingType']['assignedTargetingOptions'][':assignedTargetingOptionId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v2.advertisers)[':advertiserId']['targetingTypes'][':targetingType']['assignedTargetingOptions'][':assignedTargetingOptionId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteV2AdvertisersAdvertiserIdTargetingTypesTargetingTypeAssignedTargetingOptionsAssignedTargetingOptionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.advertisers)[':advertiserId']['targetingTypes'][':targetingType']['assignedTargetingOptions'][':assignedTargetingOptionId']['$delete']
      >,
    ) {
      return parseResponse(
        client.v2.advertisers[':advertiserId'].targetingTypes[
          ':targetingType'
        ].assignedTargetingOptions[':assignedTargetingOptionId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteV2AdvertisersAdvertiserIdTargetingTypesTargetingTypeAssignedTargetingOptionsAssignedTargetingOptionId<
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
                    (typeof client.v2.advertisers)[':advertiserId']['targetingTypes'][':targetingType']['assignedTargetingOptions'][':assignedTargetingOptionId']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v2.advertisers)[':advertiserId']['targetingTypes'][':targetingType']['assignedTargetingOptions'][':assignedTargetingOptionId']['$delete']
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
    getDeleteV2AdvertisersAdvertiserIdTargetingTypesTargetingTypeAssignedTargetingOptionsAssignedTargetingOptionIdMutationOptions<
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

export function getV2AdvertisersAdvertiserIdYoutubeAdGroupAdsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.advertisers)[':advertiserId']['youtubeAdGroupAds']['$get']>
  >,
) {
  return ['v2', '/v2/advertisers/:advertiserId/youtubeAdGroupAds', toValue(args)] as const
}

export function getV2AdvertisersAdvertiserIdYoutubeAdGroupAdsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.advertisers)[':advertiserId']['youtubeAdGroupAds']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2AdvertisersAdvertiserIdYoutubeAdGroupAdsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.advertisers[':advertiserId'].youtubeAdGroupAds.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2AdvertisersAdvertiserIdYoutubeAdGroupAds<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2.advertisers)[':advertiserId']['youtubeAdGroupAds']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.advertisers)[':advertiserId']['youtubeAdGroupAds']['$get']>
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
                    (typeof client.v2.advertisers)[':advertiserId']['youtubeAdGroupAds']['$get']
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
                    (typeof client.v2.advertisers)[':advertiserId']['youtubeAdGroupAds']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV2AdvertisersAdvertiserIdYoutubeAdGroupAdsQueryKey>
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
            ReturnType<(typeof client.v2.advertisers)[':advertiserId']['youtubeAdGroupAds']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2AdvertisersAdvertiserIdYoutubeAdGroupAdsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2AdvertisersAdvertiserIdYoutubeAdGroupAdsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.advertisers[':advertiserId'].youtubeAdGroupAds.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2AdvertisersAdvertiserIdYoutubeAdGroupAdsYoutubeAdGroupAdIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.advertisers)[':advertiserId']['youtubeAdGroupAds'][':youtubeAdGroupAdId']['$get']
    >
  >,
) {
  return [
    'v2',
    '/v2/advertisers/:advertiserId/youtubeAdGroupAds/:youtubeAdGroupAdId',
    toValue(args),
  ] as const
}

export function getV2AdvertisersAdvertiserIdYoutubeAdGroupAdsYoutubeAdGroupAdIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.advertisers)[':advertiserId']['youtubeAdGroupAds'][':youtubeAdGroupAdId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getV2AdvertisersAdvertiserIdYoutubeAdGroupAdsYoutubeAdGroupAdIdQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.advertisers[':advertiserId'].youtubeAdGroupAds[':youtubeAdGroupAdId'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useV2AdvertisersAdvertiserIdYoutubeAdGroupAdsYoutubeAdGroupAdId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2.advertisers)[':advertiserId']['youtubeAdGroupAds'][':youtubeAdGroupAdId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.advertisers)[':advertiserId']['youtubeAdGroupAds'][':youtubeAdGroupAdId']['$get']
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
                    (typeof client.v2.advertisers)[':advertiserId']['youtubeAdGroupAds'][':youtubeAdGroupAdId']['$get']
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
                    (typeof client.v2.advertisers)[':advertiserId']['youtubeAdGroupAds'][':youtubeAdGroupAdId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV2AdvertisersAdvertiserIdYoutubeAdGroupAdsYoutubeAdGroupAdIdQueryKey>
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
              (typeof client.v2.advertisers)[':advertiserId']['youtubeAdGroupAds'][':youtubeAdGroupAdId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2AdvertisersAdvertiserIdYoutubeAdGroupAdsYoutubeAdGroupAdIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV2AdvertisersAdvertiserIdYoutubeAdGroupAdsYoutubeAdGroupAdIdQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.advertisers[':advertiserId'].youtubeAdGroupAds[':youtubeAdGroupAdId'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getV2AdvertisersAdvertiserIdYoutubeAdGroupsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.advertisers)[':advertiserId']['youtubeAdGroups']['$get']>
  >,
) {
  return ['v2', '/v2/advertisers/:advertiserId/youtubeAdGroups', toValue(args)] as const
}

export function getV2AdvertisersAdvertiserIdYoutubeAdGroupsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.advertisers)[':advertiserId']['youtubeAdGroups']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2AdvertisersAdvertiserIdYoutubeAdGroupsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.advertisers[':advertiserId'].youtubeAdGroups.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2AdvertisersAdvertiserIdYoutubeAdGroups<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2.advertisers)[':advertiserId']['youtubeAdGroups']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.advertisers)[':advertiserId']['youtubeAdGroups']['$get']>
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
                    (typeof client.v2.advertisers)[':advertiserId']['youtubeAdGroups']['$get']
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
                    (typeof client.v2.advertisers)[':advertiserId']['youtubeAdGroups']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV2AdvertisersAdvertiserIdYoutubeAdGroupsQueryKey>
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
            ReturnType<(typeof client.v2.advertisers)[':advertiserId']['youtubeAdGroups']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2AdvertisersAdvertiserIdYoutubeAdGroupsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2AdvertisersAdvertiserIdYoutubeAdGroupsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.advertisers[':advertiserId'].youtubeAdGroups.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2AdvertisersAdvertiserIdYoutubeAdGroupsYoutubeAdGroupIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.advertisers)[':advertiserId']['youtubeAdGroups'][':youtubeAdGroupId']['$get']
    >
  >,
) {
  return [
    'v2',
    '/v2/advertisers/:advertiserId/youtubeAdGroups/:youtubeAdGroupId',
    toValue(args),
  ] as const
}

export function getV2AdvertisersAdvertiserIdYoutubeAdGroupsYoutubeAdGroupIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.advertisers)[':advertiserId']['youtubeAdGroups'][':youtubeAdGroupId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getV2AdvertisersAdvertiserIdYoutubeAdGroupsYoutubeAdGroupIdQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.advertisers[':advertiserId'].youtubeAdGroups[':youtubeAdGroupId'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useV2AdvertisersAdvertiserIdYoutubeAdGroupsYoutubeAdGroupId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2.advertisers)[':advertiserId']['youtubeAdGroups'][':youtubeAdGroupId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.advertisers)[':advertiserId']['youtubeAdGroups'][':youtubeAdGroupId']['$get']
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
                    (typeof client.v2.advertisers)[':advertiserId']['youtubeAdGroups'][':youtubeAdGroupId']['$get']
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
                    (typeof client.v2.advertisers)[':advertiserId']['youtubeAdGroups'][':youtubeAdGroupId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV2AdvertisersAdvertiserIdYoutubeAdGroupsYoutubeAdGroupIdQueryKey>
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
              (typeof client.v2.advertisers)[':advertiserId']['youtubeAdGroups'][':youtubeAdGroupId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2AdvertisersAdvertiserIdYoutubeAdGroupsYoutubeAdGroupIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV2AdvertisersAdvertiserIdYoutubeAdGroupsYoutubeAdGroupIdQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.advertisers[':advertiserId'].youtubeAdGroups[':youtubeAdGroupId'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getV2AdvertisersAdvertiserIdYoutubeAdGroupsYoutubeAdGroupIdTargetingTypesTargetingTypeAssignedTargetingOptionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.advertisers)[':advertiserId']['youtubeAdGroups'][':youtubeAdGroupId']['targetingTypes'][':targetingType']['assignedTargetingOptions']['$get']
    >
  >,
) {
  return [
    'v2',
    '/v2/advertisers/:advertiserId/youtubeAdGroups/:youtubeAdGroupId/targetingTypes/:targetingType/assignedTargetingOptions',
    toValue(args),
  ] as const
}

export function getV2AdvertisersAdvertiserIdYoutubeAdGroupsYoutubeAdGroupIdTargetingTypesTargetingTypeAssignedTargetingOptionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.advertisers)[':advertiserId']['youtubeAdGroups'][':youtubeAdGroupId']['targetingTypes'][':targetingType']['assignedTargetingOptions']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getV2AdvertisersAdvertiserIdYoutubeAdGroupsYoutubeAdGroupIdTargetingTypesTargetingTypeAssignedTargetingOptionsQueryKey(
        args,
      ),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.advertisers[':advertiserId'].youtubeAdGroups[':youtubeAdGroupId'].targetingTypes[
          ':targetingType'
        ].assignedTargetingOptions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2AdvertisersAdvertiserIdYoutubeAdGroupsYoutubeAdGroupIdTargetingTypesTargetingTypeAssignedTargetingOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2.advertisers)[':advertiserId']['youtubeAdGroups'][':youtubeAdGroupId']['targetingTypes'][':targetingType']['assignedTargetingOptions']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.advertisers)[':advertiserId']['youtubeAdGroups'][':youtubeAdGroupId']['targetingTypes'][':targetingType']['assignedTargetingOptions']['$get']
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
                    (typeof client.v2.advertisers)[':advertiserId']['youtubeAdGroups'][':youtubeAdGroupId']['targetingTypes'][':targetingType']['assignedTargetingOptions']['$get']
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
                    (typeof client.v2.advertisers)[':advertiserId']['youtubeAdGroups'][':youtubeAdGroupId']['targetingTypes'][':targetingType']['assignedTargetingOptions']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getV2AdvertisersAdvertiserIdYoutubeAdGroupsYoutubeAdGroupIdTargetingTypesTargetingTypeAssignedTargetingOptionsQueryKey
          >
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
              (typeof client.v2.advertisers)[':advertiserId']['youtubeAdGroups'][':youtubeAdGroupId']['targetingTypes'][':targetingType']['assignedTargetingOptions']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getV2AdvertisersAdvertiserIdYoutubeAdGroupsYoutubeAdGroupIdTargetingTypesTargetingTypeAssignedTargetingOptionsQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV2AdvertisersAdvertiserIdYoutubeAdGroupsYoutubeAdGroupIdTargetingTypesTargetingTypeAssignedTargetingOptionsQueryKey(
          args,
        ),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.advertisers[':advertiserId'].youtubeAdGroups[
            ':youtubeAdGroupId'
          ].targetingTypes[':targetingType'].assignedTargetingOptions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2AdvertisersAdvertiserIdYoutubeAdGroupsYoutubeAdGroupIdTargetingTypesTargetingTypeAssignedTargetingOptionsAssignedTargetingOptionIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.advertisers)[':advertiserId']['youtubeAdGroups'][':youtubeAdGroupId']['targetingTypes'][':targetingType']['assignedTargetingOptions'][':assignedTargetingOptionId']['$get']
    >
  >,
) {
  return [
    'v2',
    '/v2/advertisers/:advertiserId/youtubeAdGroups/:youtubeAdGroupId/targetingTypes/:targetingType/assignedTargetingOptions/:assignedTargetingOptionId',
    toValue(args),
  ] as const
}

export function getV2AdvertisersAdvertiserIdYoutubeAdGroupsYoutubeAdGroupIdTargetingTypesTargetingTypeAssignedTargetingOptionsAssignedTargetingOptionIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.advertisers)[':advertiserId']['youtubeAdGroups'][':youtubeAdGroupId']['targetingTypes'][':targetingType']['assignedTargetingOptions'][':assignedTargetingOptionId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getV2AdvertisersAdvertiserIdYoutubeAdGroupsYoutubeAdGroupIdTargetingTypesTargetingTypeAssignedTargetingOptionsAssignedTargetingOptionIdQueryKey(
        args,
      ),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.advertisers[':advertiserId'].youtubeAdGroups[':youtubeAdGroupId'].targetingTypes[
          ':targetingType'
        ].assignedTargetingOptions[':assignedTargetingOptionId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2AdvertisersAdvertiserIdYoutubeAdGroupsYoutubeAdGroupIdTargetingTypesTargetingTypeAssignedTargetingOptionsAssignedTargetingOptionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2.advertisers)[':advertiserId']['youtubeAdGroups'][':youtubeAdGroupId']['targetingTypes'][':targetingType']['assignedTargetingOptions'][':assignedTargetingOptionId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.advertisers)[':advertiserId']['youtubeAdGroups'][':youtubeAdGroupId']['targetingTypes'][':targetingType']['assignedTargetingOptions'][':assignedTargetingOptionId']['$get']
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
                    (typeof client.v2.advertisers)[':advertiserId']['youtubeAdGroups'][':youtubeAdGroupId']['targetingTypes'][':targetingType']['assignedTargetingOptions'][':assignedTargetingOptionId']['$get']
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
                    (typeof client.v2.advertisers)[':advertiserId']['youtubeAdGroups'][':youtubeAdGroupId']['targetingTypes'][':targetingType']['assignedTargetingOptions'][':assignedTargetingOptionId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getV2AdvertisersAdvertiserIdYoutubeAdGroupsYoutubeAdGroupIdTargetingTypesTargetingTypeAssignedTargetingOptionsAssignedTargetingOptionIdQueryKey
          >
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
              (typeof client.v2.advertisers)[':advertiserId']['youtubeAdGroups'][':youtubeAdGroupId']['targetingTypes'][':targetingType']['assignedTargetingOptions'][':assignedTargetingOptionId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getV2AdvertisersAdvertiserIdYoutubeAdGroupsYoutubeAdGroupIdTargetingTypesTargetingTypeAssignedTargetingOptionsAssignedTargetingOptionIdQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV2AdvertisersAdvertiserIdYoutubeAdGroupsYoutubeAdGroupIdTargetingTypesTargetingTypeAssignedTargetingOptionsAssignedTargetingOptionIdQueryKey(
          args,
        ),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.advertisers[':advertiserId'].youtubeAdGroups[
            ':youtubeAdGroupId'
          ].targetingTypes[':targetingType'].assignedTargetingOptions[
            ':assignedTargetingOptionId'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function getV2AdvertisersAdvertiserIdYoutubeAdGroupsBulkListAdGroupAssignedTargetingOptionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.advertisers)[':advertiserId']['youtubeAdGroups:bulkListAdGroupAssignedTargetingOptions']['$get']
    >
  >,
) {
  return [
    'v2',
    '/v2/advertisers/:advertiserId/youtubeAdGroups:bulkListAdGroupAssignedTargetingOptions',
    toValue(args),
  ] as const
}

export function getV2AdvertisersAdvertiserIdYoutubeAdGroupsBulkListAdGroupAssignedTargetingOptionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.advertisers)[':advertiserId']['youtubeAdGroups:bulkListAdGroupAssignedTargetingOptions']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getV2AdvertisersAdvertiserIdYoutubeAdGroupsBulkListAdGroupAssignedTargetingOptionsQueryKey(
        args,
      ),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.advertisers[':advertiserId'][
          'youtubeAdGroups:bulkListAdGroupAssignedTargetingOptions'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV2AdvertisersAdvertiserIdYoutubeAdGroupsBulkListAdGroupAssignedTargetingOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2.advertisers)[':advertiserId']['youtubeAdGroups:bulkListAdGroupAssignedTargetingOptions']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.advertisers)[':advertiserId']['youtubeAdGroups:bulkListAdGroupAssignedTargetingOptions']['$get']
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
                    (typeof client.v2.advertisers)[':advertiserId']['youtubeAdGroups:bulkListAdGroupAssignedTargetingOptions']['$get']
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
                    (typeof client.v2.advertisers)[':advertiserId']['youtubeAdGroups:bulkListAdGroupAssignedTargetingOptions']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getV2AdvertisersAdvertiserIdYoutubeAdGroupsBulkListAdGroupAssignedTargetingOptionsQueryKey
          >
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
              (typeof client.v2.advertisers)[':advertiserId']['youtubeAdGroups:bulkListAdGroupAssignedTargetingOptions']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getV2AdvertisersAdvertiserIdYoutubeAdGroupsBulkListAdGroupAssignedTargetingOptionsQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV2AdvertisersAdvertiserIdYoutubeAdGroupsBulkListAdGroupAssignedTargetingOptionsQueryKey(
          args,
        ),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.advertisers[':advertiserId'][
            'youtubeAdGroups:bulkListAdGroupAssignedTargetingOptions'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function getV2AdvertisersAdvertiserIdAuditQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.advertisers)[':advertiserId:audit']['$get']>
  >,
) {
  return ['v2', '/v2/advertisers/:advertiserId:audit', toValue(args)] as const
}

export function getV2AdvertisersAdvertiserIdAuditQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.advertisers)[':advertiserId:audit']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2AdvertisersAdvertiserIdAuditQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.advertisers[':advertiserId:audit'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2AdvertisersAdvertiserIdAudit<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.advertisers)[':advertiserId:audit']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.advertisers)[':advertiserId:audit']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.advertisers)[':advertiserId:audit']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.advertisers)[':advertiserId:audit']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2AdvertisersAdvertiserIdAuditQueryKey>
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
          Awaited<ReturnType<(typeof client.v2.advertisers)[':advertiserId:audit']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2AdvertisersAdvertiserIdAuditQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2AdvertisersAdvertiserIdAuditQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.advertisers[':advertiserId:audit'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV2AdvertisersAdvertiserIdEditAssignedTargetingOptionsMutationKey() {
  return ['v2', '/v2/advertisers/:advertiserId:editAssignedTargetingOptions', 'POST'] as const
}

export function getPostV2AdvertisersAdvertiserIdEditAssignedTargetingOptionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.advertisers)[':advertiserId:editAssignedTargetingOptions']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v2.advertisers)[':advertiserId:editAssignedTargetingOptions']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV2AdvertisersAdvertiserIdEditAssignedTargetingOptionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.advertisers)[':advertiserId:editAssignedTargetingOptions']['$post']
      >,
    ) {
      return parseResponse(
        client.v2.advertisers[':advertiserId:editAssignedTargetingOptions'].$post(args, options),
      )
    },
  })
}

export function usePostV2AdvertisersAdvertiserIdEditAssignedTargetingOptions<
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
                    (typeof client.v2.advertisers)[':advertiserId:editAssignedTargetingOptions']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v2.advertisers)[':advertiserId:editAssignedTargetingOptions']['$post']
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
    getPostV2AdvertisersAdvertiserIdEditAssignedTargetingOptionsMutationOptions<
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

export function getV2AdvertisersAdvertiserIdListAssignedTargetingOptionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.advertisers)[':advertiserId:listAssignedTargetingOptions']['$get']
    >
  >,
) {
  return [
    'v2',
    '/v2/advertisers/:advertiserId:listAssignedTargetingOptions',
    toValue(args),
  ] as const
}

export function getV2AdvertisersAdvertiserIdListAssignedTargetingOptionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.advertisers)[':advertiserId:listAssignedTargetingOptions']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getV2AdvertisersAdvertiserIdListAssignedTargetingOptionsQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.advertisers[':advertiserId:listAssignedTargetingOptions'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2AdvertisersAdvertiserIdListAssignedTargetingOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2.advertisers)[':advertiserId:listAssignedTargetingOptions']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.advertisers)[':advertiserId:listAssignedTargetingOptions']['$get']
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
                    (typeof client.v2.advertisers)[':advertiserId:listAssignedTargetingOptions']['$get']
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
                    (typeof client.v2.advertisers)[':advertiserId:listAssignedTargetingOptions']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV2AdvertisersAdvertiserIdListAssignedTargetingOptionsQueryKey>
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
              (typeof client.v2.advertisers)[':advertiserId:listAssignedTargetingOptions']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2AdvertisersAdvertiserIdListAssignedTargetingOptionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV2AdvertisersAdvertiserIdListAssignedTargetingOptionsQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.advertisers[':advertiserId:listAssignedTargetingOptions'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2CombinedAudiencesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.combinedAudiences.$get>>,
) {
  return ['v2', '/v2/combinedAudiences', toValue(args)] as const
}

export function getV2CombinedAudiencesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.combinedAudiences.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2CombinedAudiencesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.combinedAudiences.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2CombinedAudiences<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.combinedAudiences.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.combinedAudiences.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.combinedAudiences.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.combinedAudiences.$get>>>
            >
          >,
          ReturnType<typeof getV2CombinedAudiencesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.combinedAudiences.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV2CombinedAudiencesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2CombinedAudiencesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.combinedAudiences.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2CombinedAudiencesCombinedAudienceIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.combinedAudiences)[':combinedAudienceId']['$get']>
  >,
) {
  return ['v2', '/v2/combinedAudiences/:combinedAudienceId', toValue(args)] as const
}

export function getV2CombinedAudiencesCombinedAudienceIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.combinedAudiences)[':combinedAudienceId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2CombinedAudiencesCombinedAudienceIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.combinedAudiences[':combinedAudienceId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2CombinedAudiencesCombinedAudienceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.combinedAudiences)[':combinedAudienceId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.combinedAudiences)[':combinedAudienceId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v2.combinedAudiences)[':combinedAudienceId']['$get']>
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
                  ReturnType<(typeof client.v2.combinedAudiences)[':combinedAudienceId']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV2CombinedAudiencesCombinedAudienceIdQueryKey>
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
          Awaited<ReturnType<(typeof client.v2.combinedAudiences)[':combinedAudienceId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2CombinedAudiencesCombinedAudienceIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2CombinedAudiencesCombinedAudienceIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.combinedAudiences[':combinedAudienceId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2CustomBiddingAlgorithmsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.customBiddingAlgorithms.$get>>,
) {
  return ['v2', '/v2/customBiddingAlgorithms', toValue(args)] as const
}

export function getV2CustomBiddingAlgorithmsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.customBiddingAlgorithms.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2CustomBiddingAlgorithmsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.customBiddingAlgorithms.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2CustomBiddingAlgorithms<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v2.customBiddingAlgorithms.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.customBiddingAlgorithms.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v2.customBiddingAlgorithms.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v2.customBiddingAlgorithms.$get>>
              >
            >
          >,
          ReturnType<typeof getV2CustomBiddingAlgorithmsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.customBiddingAlgorithms.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2CustomBiddingAlgorithmsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2CustomBiddingAlgorithmsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.customBiddingAlgorithms.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV2CustomBiddingAlgorithmsMutationKey() {
  return ['v2', '/v2/customBiddingAlgorithms', 'POST'] as const
}

export function getPostV2CustomBiddingAlgorithmsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.customBiddingAlgorithms.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v2.customBiddingAlgorithms.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2CustomBiddingAlgorithmsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.customBiddingAlgorithms.$post>) {
      return parseResponse(client.v2.customBiddingAlgorithms.$post(args, options))
    },
  })
}

export function usePostV2CustomBiddingAlgorithms<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v2.customBiddingAlgorithms.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.v2.customBiddingAlgorithms.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2CustomBiddingAlgorithmsMutationOptions<TError, TOnMutateResult>(
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

export function getV2CustomBiddingAlgorithmsCustomBiddingAlgorithmIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.customBiddingAlgorithms)[':customBiddingAlgorithmId']['$get']
    >
  >,
) {
  return ['v2', '/v2/customBiddingAlgorithms/:customBiddingAlgorithmId', toValue(args)] as const
}

export function getV2CustomBiddingAlgorithmsCustomBiddingAlgorithmIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.customBiddingAlgorithms)[':customBiddingAlgorithmId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2CustomBiddingAlgorithmsCustomBiddingAlgorithmIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.customBiddingAlgorithms[':customBiddingAlgorithmId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2CustomBiddingAlgorithmsCustomBiddingAlgorithmId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2.customBiddingAlgorithms)[':customBiddingAlgorithmId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.customBiddingAlgorithms)[':customBiddingAlgorithmId']['$get']
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
                    (typeof client.v2.customBiddingAlgorithms)[':customBiddingAlgorithmId']['$get']
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
                    (typeof client.v2.customBiddingAlgorithms)[':customBiddingAlgorithmId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV2CustomBiddingAlgorithmsCustomBiddingAlgorithmIdQueryKey>
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
              (typeof client.v2.customBiddingAlgorithms)[':customBiddingAlgorithmId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2CustomBiddingAlgorithmsCustomBiddingAlgorithmIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2CustomBiddingAlgorithmsCustomBiddingAlgorithmIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.customBiddingAlgorithms[':customBiddingAlgorithmId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPatchV2CustomBiddingAlgorithmsCustomBiddingAlgorithmIdMutationKey() {
  return ['v2', '/v2/customBiddingAlgorithms/:customBiddingAlgorithmId', 'PATCH'] as const
}

export function getPatchV2CustomBiddingAlgorithmsCustomBiddingAlgorithmIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.customBiddingAlgorithms)[':customBiddingAlgorithmId']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v2.customBiddingAlgorithms)[':customBiddingAlgorithmId']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchV2CustomBiddingAlgorithmsCustomBiddingAlgorithmIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.customBiddingAlgorithms)[':customBiddingAlgorithmId']['$patch']
      >,
    ) {
      return parseResponse(
        client.v2.customBiddingAlgorithms[':customBiddingAlgorithmId'].$patch(args, options),
      )
    },
  })
}

export function usePatchV2CustomBiddingAlgorithmsCustomBiddingAlgorithmId<
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
                    (typeof client.v2.customBiddingAlgorithms)[':customBiddingAlgorithmId']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v2.customBiddingAlgorithms)[':customBiddingAlgorithmId']['$patch']
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
  const mutationDefaults = getPatchV2CustomBiddingAlgorithmsCustomBiddingAlgorithmIdMutationOptions<
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

export function getV2CustomBiddingAlgorithmsCustomBiddingAlgorithmIdScriptsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.customBiddingAlgorithms)[':customBiddingAlgorithmId']['scripts']['$get']
    >
  >,
) {
  return [
    'v2',
    '/v2/customBiddingAlgorithms/:customBiddingAlgorithmId/scripts',
    toValue(args),
  ] as const
}

export function getV2CustomBiddingAlgorithmsCustomBiddingAlgorithmIdScriptsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.customBiddingAlgorithms)[':customBiddingAlgorithmId']['scripts']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getV2CustomBiddingAlgorithmsCustomBiddingAlgorithmIdScriptsQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.customBiddingAlgorithms[':customBiddingAlgorithmId'].scripts.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2CustomBiddingAlgorithmsCustomBiddingAlgorithmIdScripts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2.customBiddingAlgorithms)[':customBiddingAlgorithmId']['scripts']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.customBiddingAlgorithms)[':customBiddingAlgorithmId']['scripts']['$get']
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
                    (typeof client.v2.customBiddingAlgorithms)[':customBiddingAlgorithmId']['scripts']['$get']
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
                    (typeof client.v2.customBiddingAlgorithms)[':customBiddingAlgorithmId']['scripts']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV2CustomBiddingAlgorithmsCustomBiddingAlgorithmIdScriptsQueryKey>
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
              (typeof client.v2.customBiddingAlgorithms)[':customBiddingAlgorithmId']['scripts']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2CustomBiddingAlgorithmsCustomBiddingAlgorithmIdScriptsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV2CustomBiddingAlgorithmsCustomBiddingAlgorithmIdScriptsQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.customBiddingAlgorithms[':customBiddingAlgorithmId'].scripts.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPostV2CustomBiddingAlgorithmsCustomBiddingAlgorithmIdScriptsMutationKey() {
  return ['v2', '/v2/customBiddingAlgorithms/:customBiddingAlgorithmId/scripts', 'POST'] as const
}

export function getPostV2CustomBiddingAlgorithmsCustomBiddingAlgorithmIdScriptsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.customBiddingAlgorithms)[':customBiddingAlgorithmId']['scripts']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v2.customBiddingAlgorithms)[':customBiddingAlgorithmId']['scripts']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV2CustomBiddingAlgorithmsCustomBiddingAlgorithmIdScriptsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.customBiddingAlgorithms)[':customBiddingAlgorithmId']['scripts']['$post']
      >,
    ) {
      return parseResponse(
        client.v2.customBiddingAlgorithms[':customBiddingAlgorithmId'].scripts.$post(args, options),
      )
    },
  })
}

export function usePostV2CustomBiddingAlgorithmsCustomBiddingAlgorithmIdScripts<
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
                    (typeof client.v2.customBiddingAlgorithms)[':customBiddingAlgorithmId']['scripts']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v2.customBiddingAlgorithms)[':customBiddingAlgorithmId']['scripts']['$post']
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
    getPostV2CustomBiddingAlgorithmsCustomBiddingAlgorithmIdScriptsMutationOptions<
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

export function getV2CustomBiddingAlgorithmsCustomBiddingAlgorithmIdScriptsCustomBiddingScriptIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.customBiddingAlgorithms)[':customBiddingAlgorithmId']['scripts'][':customBiddingScriptId']['$get']
    >
  >,
) {
  return [
    'v2',
    '/v2/customBiddingAlgorithms/:customBiddingAlgorithmId/scripts/:customBiddingScriptId',
    toValue(args),
  ] as const
}

export function getV2CustomBiddingAlgorithmsCustomBiddingAlgorithmIdScriptsCustomBiddingScriptIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.customBiddingAlgorithms)[':customBiddingAlgorithmId']['scripts'][':customBiddingScriptId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getV2CustomBiddingAlgorithmsCustomBiddingAlgorithmIdScriptsCustomBiddingScriptIdQueryKey(
        args,
      ),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.customBiddingAlgorithms[':customBiddingAlgorithmId'].scripts[
          ':customBiddingScriptId'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV2CustomBiddingAlgorithmsCustomBiddingAlgorithmIdScriptsCustomBiddingScriptId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2.customBiddingAlgorithms)[':customBiddingAlgorithmId']['scripts'][':customBiddingScriptId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.customBiddingAlgorithms)[':customBiddingAlgorithmId']['scripts'][':customBiddingScriptId']['$get']
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
                    (typeof client.v2.customBiddingAlgorithms)[':customBiddingAlgorithmId']['scripts'][':customBiddingScriptId']['$get']
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
                    (typeof client.v2.customBiddingAlgorithms)[':customBiddingAlgorithmId']['scripts'][':customBiddingScriptId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getV2CustomBiddingAlgorithmsCustomBiddingAlgorithmIdScriptsCustomBiddingScriptIdQueryKey
          >
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
              (typeof client.v2.customBiddingAlgorithms)[':customBiddingAlgorithmId']['scripts'][':customBiddingScriptId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getV2CustomBiddingAlgorithmsCustomBiddingAlgorithmIdScriptsCustomBiddingScriptIdQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV2CustomBiddingAlgorithmsCustomBiddingAlgorithmIdScriptsCustomBiddingScriptIdQueryKey(
          args,
        ),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.customBiddingAlgorithms[':customBiddingAlgorithmId'].scripts[
            ':customBiddingScriptId'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function getV2CustomBiddingAlgorithmsCustomBiddingAlgorithmIdUploadScriptQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.customBiddingAlgorithms)[':customBiddingAlgorithmId:uploadScript']['$get']
    >
  >,
) {
  return [
    'v2',
    '/v2/customBiddingAlgorithms/:customBiddingAlgorithmId:uploadScript',
    toValue(args),
  ] as const
}

export function getV2CustomBiddingAlgorithmsCustomBiddingAlgorithmIdUploadScriptQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.customBiddingAlgorithms)[':customBiddingAlgorithmId:uploadScript']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getV2CustomBiddingAlgorithmsCustomBiddingAlgorithmIdUploadScriptQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.customBiddingAlgorithms[':customBiddingAlgorithmId:uploadScript'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useV2CustomBiddingAlgorithmsCustomBiddingAlgorithmIdUploadScript<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2.customBiddingAlgorithms)[':customBiddingAlgorithmId:uploadScript']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.customBiddingAlgorithms)[':customBiddingAlgorithmId:uploadScript']['$get']
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
                    (typeof client.v2.customBiddingAlgorithms)[':customBiddingAlgorithmId:uploadScript']['$get']
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
                    (typeof client.v2.customBiddingAlgorithms)[':customBiddingAlgorithmId:uploadScript']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getV2CustomBiddingAlgorithmsCustomBiddingAlgorithmIdUploadScriptQueryKey
          >
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
              (typeof client.v2.customBiddingAlgorithms)[':customBiddingAlgorithmId:uploadScript']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2CustomBiddingAlgorithmsCustomBiddingAlgorithmIdUploadScriptQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV2CustomBiddingAlgorithmsCustomBiddingAlgorithmIdUploadScriptQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.customBiddingAlgorithms[':customBiddingAlgorithmId:uploadScript'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getV2CustomListsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.customLists.$get>>,
) {
  return ['v2', '/v2/customLists', toValue(args)] as const
}

export function getV2CustomListsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.customLists.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2CustomListsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.customLists.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2CustomLists<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.customLists.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.customLists.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.customLists.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.customLists.$get>>>>
          >,
          ReturnType<typeof getV2CustomListsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.customLists.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV2CustomListsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2CustomListsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.customLists.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2CustomListsCustomListIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.customLists)[':customListId']['$get']>>,
) {
  return ['v2', '/v2/customLists/:customListId', toValue(args)] as const
}

export function getV2CustomListsCustomListIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.customLists)[':customListId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2CustomListsCustomListIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.customLists[':customListId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2CustomListsCustomListId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.customLists)[':customListId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.customLists)[':customListId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.customLists)[':customListId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.customLists)[':customListId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2CustomListsCustomListIdQueryKey>
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
          Awaited<ReturnType<(typeof client.v2.customLists)[':customListId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2CustomListsCustomListIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2CustomListsCustomListIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.customLists[':customListId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2FirstAndThirdPartyAudiencesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.firstAndThirdPartyAudiences.$get>>,
) {
  return ['v2', '/v2/firstAndThirdPartyAudiences', toValue(args)] as const
}

export function getV2FirstAndThirdPartyAudiencesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.firstAndThirdPartyAudiences.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2FirstAndThirdPartyAudiencesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.firstAndThirdPartyAudiences.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2FirstAndThirdPartyAudiences<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v2.firstAndThirdPartyAudiences.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.firstAndThirdPartyAudiences.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v2.firstAndThirdPartyAudiences.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v2.firstAndThirdPartyAudiences.$get>>
              >
            >
          >,
          ReturnType<typeof getV2FirstAndThirdPartyAudiencesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.firstAndThirdPartyAudiences.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2FirstAndThirdPartyAudiencesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2FirstAndThirdPartyAudiencesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.firstAndThirdPartyAudiences.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV2FirstAndThirdPartyAudiencesMutationKey() {
  return ['v2', '/v2/firstAndThirdPartyAudiences', 'POST'] as const
}

export function getPostV2FirstAndThirdPartyAudiencesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v2.firstAndThirdPartyAudiences.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v2.firstAndThirdPartyAudiences.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2FirstAndThirdPartyAudiencesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.firstAndThirdPartyAudiences.$post>) {
      return parseResponse(client.v2.firstAndThirdPartyAudiences.$post(args, options))
    },
  })
}

export function usePostV2FirstAndThirdPartyAudiences<
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
                Awaited<ReturnType<typeof client.v2.firstAndThirdPartyAudiences.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.v2.firstAndThirdPartyAudiences.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2FirstAndThirdPartyAudiencesMutationOptions<
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

export function getV2FirstAndThirdPartyAudiencesFirstAndThirdPartyAudienceIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.firstAndThirdPartyAudiences)[':firstAndThirdPartyAudienceId']['$get']
    >
  >,
) {
  return [
    'v2',
    '/v2/firstAndThirdPartyAudiences/:firstAndThirdPartyAudienceId',
    toValue(args),
  ] as const
}

export function getV2FirstAndThirdPartyAudiencesFirstAndThirdPartyAudienceIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.firstAndThirdPartyAudiences)[':firstAndThirdPartyAudienceId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getV2FirstAndThirdPartyAudiencesFirstAndThirdPartyAudienceIdQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.firstAndThirdPartyAudiences[':firstAndThirdPartyAudienceId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2FirstAndThirdPartyAudiencesFirstAndThirdPartyAudienceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2.firstAndThirdPartyAudiences)[':firstAndThirdPartyAudienceId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.firstAndThirdPartyAudiences)[':firstAndThirdPartyAudienceId']['$get']
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
                    (typeof client.v2.firstAndThirdPartyAudiences)[':firstAndThirdPartyAudienceId']['$get']
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
                    (typeof client.v2.firstAndThirdPartyAudiences)[':firstAndThirdPartyAudienceId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV2FirstAndThirdPartyAudiencesFirstAndThirdPartyAudienceIdQueryKey>
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
              (typeof client.v2.firstAndThirdPartyAudiences)[':firstAndThirdPartyAudienceId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2FirstAndThirdPartyAudiencesFirstAndThirdPartyAudienceIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV2FirstAndThirdPartyAudiencesFirstAndThirdPartyAudienceIdQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.firstAndThirdPartyAudiences[':firstAndThirdPartyAudienceId'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPatchV2FirstAndThirdPartyAudiencesFirstAndThirdPartyAudienceIdMutationKey() {
  return ['v2', '/v2/firstAndThirdPartyAudiences/:firstAndThirdPartyAudienceId', 'PATCH'] as const
}

export function getPatchV2FirstAndThirdPartyAudiencesFirstAndThirdPartyAudienceIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.firstAndThirdPartyAudiences)[':firstAndThirdPartyAudienceId']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v2.firstAndThirdPartyAudiences)[':firstAndThirdPartyAudienceId']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchV2FirstAndThirdPartyAudiencesFirstAndThirdPartyAudienceIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.firstAndThirdPartyAudiences)[':firstAndThirdPartyAudienceId']['$patch']
      >,
    ) {
      return parseResponse(
        client.v2.firstAndThirdPartyAudiences[':firstAndThirdPartyAudienceId'].$patch(
          args,
          options,
        ),
      )
    },
  })
}

export function usePatchV2FirstAndThirdPartyAudiencesFirstAndThirdPartyAudienceId<
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
                    (typeof client.v2.firstAndThirdPartyAudiences)[':firstAndThirdPartyAudienceId']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v2.firstAndThirdPartyAudiences)[':firstAndThirdPartyAudienceId']['$patch']
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
    getPatchV2FirstAndThirdPartyAudiencesFirstAndThirdPartyAudienceIdMutationOptions<
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

export function getPostV2FirstAndThirdPartyAudiencesFirstAndThirdPartyAudienceIdEditCustomerMatchMembersMutationKey() {
  return [
    'v2',
    '/v2/firstAndThirdPartyAudiences/:firstAndThirdPartyAudienceId:editCustomerMatchMembers',
    'POST',
  ] as const
}

export function getPostV2FirstAndThirdPartyAudiencesFirstAndThirdPartyAudienceIdEditCustomerMatchMembersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.firstAndThirdPartyAudiences)[':firstAndThirdPartyAudienceId:editCustomerMatchMembers']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v2.firstAndThirdPartyAudiences)[':firstAndThirdPartyAudienceId:editCustomerMatchMembers']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostV2FirstAndThirdPartyAudiencesFirstAndThirdPartyAudienceIdEditCustomerMatchMembersMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.firstAndThirdPartyAudiences)[':firstAndThirdPartyAudienceId:editCustomerMatchMembers']['$post']
      >,
    ) {
      return parseResponse(
        client.v2.firstAndThirdPartyAudiences[
          ':firstAndThirdPartyAudienceId:editCustomerMatchMembers'
        ].$post(args, options),
      )
    },
  })
}

export function usePostV2FirstAndThirdPartyAudiencesFirstAndThirdPartyAudienceIdEditCustomerMatchMembers<
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
                    (typeof client.v2.firstAndThirdPartyAudiences)[':firstAndThirdPartyAudienceId:editCustomerMatchMembers']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v2.firstAndThirdPartyAudiences)[':firstAndThirdPartyAudienceId:editCustomerMatchMembers']['$post']
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
    getPostV2FirstAndThirdPartyAudiencesFirstAndThirdPartyAudienceIdEditCustomerMatchMembersMutationOptions<
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

export function getV2FloodlightGroupsFloodlightGroupIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.floodlightGroups)[':floodlightGroupId']['$get']>
  >,
) {
  return ['v2', '/v2/floodlightGroups/:floodlightGroupId', toValue(args)] as const
}

export function getV2FloodlightGroupsFloodlightGroupIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.floodlightGroups)[':floodlightGroupId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2FloodlightGroupsFloodlightGroupIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.floodlightGroups[':floodlightGroupId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2FloodlightGroupsFloodlightGroupId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.floodlightGroups)[':floodlightGroupId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.floodlightGroups)[':floodlightGroupId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v2.floodlightGroups)[':floodlightGroupId']['$get']>
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
                  ReturnType<(typeof client.v2.floodlightGroups)[':floodlightGroupId']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV2FloodlightGroupsFloodlightGroupIdQueryKey>
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
          Awaited<ReturnType<(typeof client.v2.floodlightGroups)[':floodlightGroupId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2FloodlightGroupsFloodlightGroupIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2FloodlightGroupsFloodlightGroupIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.floodlightGroups[':floodlightGroupId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2GoogleAudiencesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.googleAudiences.$get>>,
) {
  return ['v2', '/v2/googleAudiences', toValue(args)] as const
}

export function getV2GoogleAudiencesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.googleAudiences.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2GoogleAudiencesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.googleAudiences.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2GoogleAudiences<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.googleAudiences.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.googleAudiences.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.googleAudiences.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.googleAudiences.$get>>>
            >
          >,
          ReturnType<typeof getV2GoogleAudiencesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.googleAudiences.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV2GoogleAudiencesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2GoogleAudiencesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.googleAudiences.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2GoogleAudiencesGoogleAudienceIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.googleAudiences)[':googleAudienceId']['$get']>
  >,
) {
  return ['v2', '/v2/googleAudiences/:googleAudienceId', toValue(args)] as const
}

export function getV2GoogleAudiencesGoogleAudienceIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.googleAudiences)[':googleAudienceId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2GoogleAudiencesGoogleAudienceIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.googleAudiences[':googleAudienceId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2GoogleAudiencesGoogleAudienceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.googleAudiences)[':googleAudienceId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.googleAudiences)[':googleAudienceId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.googleAudiences)[':googleAudienceId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.googleAudiences)[':googleAudienceId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2GoogleAudiencesGoogleAudienceIdQueryKey>
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
          Awaited<ReturnType<(typeof client.v2.googleAudiences)[':googleAudienceId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2GoogleAudiencesGoogleAudienceIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2GoogleAudiencesGoogleAudienceIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.googleAudiences[':googleAudienceId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2GuaranteedOrdersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.guaranteedOrders.$get>>,
) {
  return ['v2', '/v2/guaranteedOrders', toValue(args)] as const
}

export function getV2GuaranteedOrdersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.guaranteedOrders.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2GuaranteedOrdersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.guaranteedOrders.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2GuaranteedOrders<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.guaranteedOrders.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.guaranteedOrders.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.guaranteedOrders.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.guaranteedOrders.$get>>>
            >
          >,
          ReturnType<typeof getV2GuaranteedOrdersQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.guaranteedOrders.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV2GuaranteedOrdersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2GuaranteedOrdersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.guaranteedOrders.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV2GuaranteedOrdersMutationKey() {
  return ['v2', '/v2/guaranteedOrders', 'POST'] as const
}

export function getPostV2GuaranteedOrdersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.guaranteedOrders.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v2.guaranteedOrders.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2GuaranteedOrdersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.guaranteedOrders.$post>) {
      return parseResponse(client.v2.guaranteedOrders.$post(args, options))
    },
  })
}

export function usePostV2GuaranteedOrders<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.guaranteedOrders.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v2.guaranteedOrders.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2GuaranteedOrdersMutationOptions<TError, TOnMutateResult>(
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

export function getV2GuaranteedOrdersGuaranteedOrderIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.guaranteedOrders)[':guaranteedOrderId']['$get']>
  >,
) {
  return ['v2', '/v2/guaranteedOrders/:guaranteedOrderId', toValue(args)] as const
}

export function getV2GuaranteedOrdersGuaranteedOrderIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.guaranteedOrders)[':guaranteedOrderId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2GuaranteedOrdersGuaranteedOrderIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.guaranteedOrders[':guaranteedOrderId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2GuaranteedOrdersGuaranteedOrderId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.guaranteedOrders)[':guaranteedOrderId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.guaranteedOrders)[':guaranteedOrderId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v2.guaranteedOrders)[':guaranteedOrderId']['$get']>
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
                  ReturnType<(typeof client.v2.guaranteedOrders)[':guaranteedOrderId']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV2GuaranteedOrdersGuaranteedOrderIdQueryKey>
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
          Awaited<ReturnType<(typeof client.v2.guaranteedOrders)[':guaranteedOrderId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2GuaranteedOrdersGuaranteedOrderIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2GuaranteedOrdersGuaranteedOrderIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.guaranteedOrders[':guaranteedOrderId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPatchV2GuaranteedOrdersGuaranteedOrderIdMutationKey() {
  return ['v2', '/v2/guaranteedOrders/:guaranteedOrderId', 'PATCH'] as const
}

export function getPatchV2GuaranteedOrdersGuaranteedOrderIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.guaranteedOrders)[':guaranteedOrderId']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.guaranteedOrders)[':guaranteedOrderId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV2GuaranteedOrdersGuaranteedOrderIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.guaranteedOrders)[':guaranteedOrderId']['$patch']>,
    ) {
      return parseResponse(client.v2.guaranteedOrders[':guaranteedOrderId'].$patch(args, options))
    },
  })
}

export function usePatchV2GuaranteedOrdersGuaranteedOrderId<
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
                  ReturnType<(typeof client.v2.guaranteedOrders)[':guaranteedOrderId']['$patch']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v2.guaranteedOrders)[':guaranteedOrderId']['$patch']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchV2GuaranteedOrdersGuaranteedOrderIdMutationOptions<
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

export function getPostV2GuaranteedOrdersGuaranteedOrderIdEditGuaranteedOrderReadAccessorsMutationKey() {
  return [
    'v2',
    '/v2/guaranteedOrders/:guaranteedOrderId:editGuaranteedOrderReadAccessors',
    'POST',
  ] as const
}

export function getPostV2GuaranteedOrdersGuaranteedOrderIdEditGuaranteedOrderReadAccessorsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.guaranteedOrders)[':guaranteedOrderId:editGuaranteedOrderReadAccessors']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v2.guaranteedOrders)[':guaranteedOrderId:editGuaranteedOrderReadAccessors']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostV2GuaranteedOrdersGuaranteedOrderIdEditGuaranteedOrderReadAccessorsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.guaranteedOrders)[':guaranteedOrderId:editGuaranteedOrderReadAccessors']['$post']
      >,
    ) {
      return parseResponse(
        client.v2.guaranteedOrders[':guaranteedOrderId:editGuaranteedOrderReadAccessors'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostV2GuaranteedOrdersGuaranteedOrderIdEditGuaranteedOrderReadAccessors<
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
                    (typeof client.v2.guaranteedOrders)[':guaranteedOrderId:editGuaranteedOrderReadAccessors']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v2.guaranteedOrders)[':guaranteedOrderId:editGuaranteedOrderReadAccessors']['$post']
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
    getPostV2GuaranteedOrdersGuaranteedOrderIdEditGuaranteedOrderReadAccessorsMutationOptions<
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

export function getV2InventorySourceGroupsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.inventorySourceGroups.$get>>,
) {
  return ['v2', '/v2/inventorySourceGroups', toValue(args)] as const
}

export function getV2InventorySourceGroupsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.inventorySourceGroups.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2InventorySourceGroupsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.inventorySourceGroups.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2InventorySourceGroups<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v2.inventorySourceGroups.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.inventorySourceGroups.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.inventorySourceGroups.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.inventorySourceGroups.$get>>>
            >
          >,
          ReturnType<typeof getV2InventorySourceGroupsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.inventorySourceGroups.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2InventorySourceGroupsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2InventorySourceGroupsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.inventorySourceGroups.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV2InventorySourceGroupsMutationKey() {
  return ['v2', '/v2/inventorySourceGroups', 'POST'] as const
}

export function getPostV2InventorySourceGroupsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.inventorySourceGroups.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v2.inventorySourceGroups.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2InventorySourceGroupsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.inventorySourceGroups.$post>) {
      return parseResponse(client.v2.inventorySourceGroups.$post(args, options))
    },
  })
}

export function usePostV2InventorySourceGroups<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v2.inventorySourceGroups.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.v2.inventorySourceGroups.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2InventorySourceGroupsMutationOptions<TError, TOnMutateResult>(
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

export function getV2InventorySourceGroupsInventorySourceGroupIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.inventorySourceGroups)[':inventorySourceGroupId']['$get']>
  >,
) {
  return ['v2', '/v2/inventorySourceGroups/:inventorySourceGroupId', toValue(args)] as const
}

export function getV2InventorySourceGroupsInventorySourceGroupIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.inventorySourceGroups)[':inventorySourceGroupId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2InventorySourceGroupsInventorySourceGroupIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.inventorySourceGroups[':inventorySourceGroupId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2InventorySourceGroupsInventorySourceGroupId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2.inventorySourceGroups)[':inventorySourceGroupId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.inventorySourceGroups)[':inventorySourceGroupId']['$get']>
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
                    (typeof client.v2.inventorySourceGroups)[':inventorySourceGroupId']['$get']
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
                    (typeof client.v2.inventorySourceGroups)[':inventorySourceGroupId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV2InventorySourceGroupsInventorySourceGroupIdQueryKey>
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
            ReturnType<(typeof client.v2.inventorySourceGroups)[':inventorySourceGroupId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2InventorySourceGroupsInventorySourceGroupIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2InventorySourceGroupsInventorySourceGroupIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.inventorySourceGroups[':inventorySourceGroupId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteV2InventorySourceGroupsInventorySourceGroupIdMutationKey() {
  return ['v2', '/v2/inventorySourceGroups/:inventorySourceGroupId', 'DELETE'] as const
}

export function getDeleteV2InventorySourceGroupsInventorySourceGroupIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.inventorySourceGroups)[':inventorySourceGroupId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v2.inventorySourceGroups)[':inventorySourceGroupId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2InventorySourceGroupsInventorySourceGroupIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.inventorySourceGroups)[':inventorySourceGroupId']['$delete']
      >,
    ) {
      return parseResponse(
        client.v2.inventorySourceGroups[':inventorySourceGroupId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteV2InventorySourceGroupsInventorySourceGroupId<
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
                    (typeof client.v2.inventorySourceGroups)[':inventorySourceGroupId']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v2.inventorySourceGroups)[':inventorySourceGroupId']['$delete']
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
  const mutationDefaults = getDeleteV2InventorySourceGroupsInventorySourceGroupIdMutationOptions<
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

export function getV2InventorySourceGroupsInventorySourceGroupIdAssignedInventorySourcesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.inventorySourceGroups)[':inventorySourceGroupId']['assignedInventorySources']['$get']
    >
  >,
) {
  return [
    'v2',
    '/v2/inventorySourceGroups/:inventorySourceGroupId/assignedInventorySources',
    toValue(args),
  ] as const
}

export function getV2InventorySourceGroupsInventorySourceGroupIdAssignedInventorySourcesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.inventorySourceGroups)[':inventorySourceGroupId']['assignedInventorySources']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getV2InventorySourceGroupsInventorySourceGroupIdAssignedInventorySourcesQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.inventorySourceGroups[':inventorySourceGroupId'].assignedInventorySources.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useV2InventorySourceGroupsInventorySourceGroupIdAssignedInventorySources<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2.inventorySourceGroups)[':inventorySourceGroupId']['assignedInventorySources']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.inventorySourceGroups)[':inventorySourceGroupId']['assignedInventorySources']['$get']
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
                    (typeof client.v2.inventorySourceGroups)[':inventorySourceGroupId']['assignedInventorySources']['$get']
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
                    (typeof client.v2.inventorySourceGroups)[':inventorySourceGroupId']['assignedInventorySources']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getV2InventorySourceGroupsInventorySourceGroupIdAssignedInventorySourcesQueryKey
          >
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
              (typeof client.v2.inventorySourceGroups)[':inventorySourceGroupId']['assignedInventorySources']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getV2InventorySourceGroupsInventorySourceGroupIdAssignedInventorySourcesQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV2InventorySourceGroupsInventorySourceGroupIdAssignedInventorySourcesQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.inventorySourceGroups[':inventorySourceGroupId'].assignedInventorySources.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPostV2InventorySourceGroupsInventorySourceGroupIdAssignedInventorySourcesMutationKey() {
  return [
    'v2',
    '/v2/inventorySourceGroups/:inventorySourceGroupId/assignedInventorySources',
    'POST',
  ] as const
}

export function getPostV2InventorySourceGroupsInventorySourceGroupIdAssignedInventorySourcesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.inventorySourceGroups)[':inventorySourceGroupId']['assignedInventorySources']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v2.inventorySourceGroups)[':inventorySourceGroupId']['assignedInventorySources']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostV2InventorySourceGroupsInventorySourceGroupIdAssignedInventorySourcesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.inventorySourceGroups)[':inventorySourceGroupId']['assignedInventorySources']['$post']
      >,
    ) {
      return parseResponse(
        client.v2.inventorySourceGroups[':inventorySourceGroupId'].assignedInventorySources.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostV2InventorySourceGroupsInventorySourceGroupIdAssignedInventorySources<
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
                    (typeof client.v2.inventorySourceGroups)[':inventorySourceGroupId']['assignedInventorySources']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v2.inventorySourceGroups)[':inventorySourceGroupId']['assignedInventorySources']['$post']
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
    getPostV2InventorySourceGroupsInventorySourceGroupIdAssignedInventorySourcesMutationOptions<
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

export function getDeleteV2InventorySourceGroupsInventorySourceGroupIdAssignedInventorySourcesAssignedInventorySourceIdMutationKey() {
  return [
    'v2',
    '/v2/inventorySourceGroups/:inventorySourceGroupId/assignedInventorySources/:assignedInventorySourceId',
    'DELETE',
  ] as const
}

export function getDeleteV2InventorySourceGroupsInventorySourceGroupIdAssignedInventorySourcesAssignedInventorySourceIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.inventorySourceGroups)[':inventorySourceGroupId']['assignedInventorySources'][':assignedInventorySourceId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v2.inventorySourceGroups)[':inventorySourceGroupId']['assignedInventorySources'][':assignedInventorySourceId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteV2InventorySourceGroupsInventorySourceGroupIdAssignedInventorySourcesAssignedInventorySourceIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.inventorySourceGroups)[':inventorySourceGroupId']['assignedInventorySources'][':assignedInventorySourceId']['$delete']
      >,
    ) {
      return parseResponse(
        client.v2.inventorySourceGroups[':inventorySourceGroupId'].assignedInventorySources[
          ':assignedInventorySourceId'
        ].$delete(args, options),
      )
    },
  })
}

export function useDeleteV2InventorySourceGroupsInventorySourceGroupIdAssignedInventorySourcesAssignedInventorySourceId<
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
                    (typeof client.v2.inventorySourceGroups)[':inventorySourceGroupId']['assignedInventorySources'][':assignedInventorySourceId']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v2.inventorySourceGroups)[':inventorySourceGroupId']['assignedInventorySources'][':assignedInventorySourceId']['$delete']
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
    getDeleteV2InventorySourceGroupsInventorySourceGroupIdAssignedInventorySourcesAssignedInventorySourceIdMutationOptions<
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

export function getPostV2InventorySourceGroupsInventorySourceGroupIdAssignedInventorySourcesBulkEditMutationKey() {
  return [
    'v2',
    '/v2/inventorySourceGroups/:inventorySourceGroupId/assignedInventorySources:bulkEdit',
    'POST',
  ] as const
}

export function getPostV2InventorySourceGroupsInventorySourceGroupIdAssignedInventorySourcesBulkEditMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.inventorySourceGroups)[':inventorySourceGroupId']['assignedInventorySources:bulkEdit']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v2.inventorySourceGroups)[':inventorySourceGroupId']['assignedInventorySources:bulkEdit']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostV2InventorySourceGroupsInventorySourceGroupIdAssignedInventorySourcesBulkEditMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.inventorySourceGroups)[':inventorySourceGroupId']['assignedInventorySources:bulkEdit']['$post']
      >,
    ) {
      return parseResponse(
        client.v2.inventorySourceGroups[':inventorySourceGroupId'][
          'assignedInventorySources:bulkEdit'
        ].$post(args, options),
      )
    },
  })
}

export function usePostV2InventorySourceGroupsInventorySourceGroupIdAssignedInventorySourcesBulkEdit<
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
                    (typeof client.v2.inventorySourceGroups)[':inventorySourceGroupId']['assignedInventorySources:bulkEdit']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v2.inventorySourceGroups)[':inventorySourceGroupId']['assignedInventorySources:bulkEdit']['$post']
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
    getPostV2InventorySourceGroupsInventorySourceGroupIdAssignedInventorySourcesBulkEditMutationOptions<
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

export function getV2InventorySourcesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.inventorySources.$get>>,
) {
  return ['v2', '/v2/inventorySources', toValue(args)] as const
}

export function getV2InventorySourcesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.inventorySources.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2InventorySourcesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.inventorySources.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2InventorySources<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.inventorySources.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.inventorySources.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.inventorySources.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.inventorySources.$get>>>
            >
          >,
          ReturnType<typeof getV2InventorySourcesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.inventorySources.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV2InventorySourcesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2InventorySourcesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.inventorySources.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV2InventorySourcesMutationKey() {
  return ['v2', '/v2/inventorySources', 'POST'] as const
}

export function getPostV2InventorySourcesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.inventorySources.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v2.inventorySources.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2InventorySourcesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.inventorySources.$post>) {
      return parseResponse(client.v2.inventorySources.$post(args, options))
    },
  })
}

export function usePostV2InventorySources<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.inventorySources.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v2.inventorySources.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2InventorySourcesMutationOptions<TError, TOnMutateResult>(
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

export function getV2InventorySourcesInventorySourceIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.inventorySources)[':inventorySourceId']['$get']>
  >,
) {
  return ['v2', '/v2/inventorySources/:inventorySourceId', toValue(args)] as const
}

export function getV2InventorySourcesInventorySourceIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.inventorySources)[':inventorySourceId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2InventorySourcesInventorySourceIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.inventorySources[':inventorySourceId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2InventorySourcesInventorySourceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.inventorySources)[':inventorySourceId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.inventorySources)[':inventorySourceId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v2.inventorySources)[':inventorySourceId']['$get']>
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
                  ReturnType<(typeof client.v2.inventorySources)[':inventorySourceId']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV2InventorySourcesInventorySourceIdQueryKey>
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
          Awaited<ReturnType<(typeof client.v2.inventorySources)[':inventorySourceId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2InventorySourcesInventorySourceIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2InventorySourcesInventorySourceIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.inventorySources[':inventorySourceId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPatchV2InventorySourcesInventorySourceIdMutationKey() {
  return ['v2', '/v2/inventorySources/:inventorySourceId', 'PATCH'] as const
}

export function getPatchV2InventorySourcesInventorySourceIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.inventorySources)[':inventorySourceId']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.inventorySources)[':inventorySourceId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV2InventorySourcesInventorySourceIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.inventorySources)[':inventorySourceId']['$patch']>,
    ) {
      return parseResponse(client.v2.inventorySources[':inventorySourceId'].$patch(args, options))
    },
  })
}

export function usePatchV2InventorySourcesInventorySourceId<
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
                  ReturnType<(typeof client.v2.inventorySources)[':inventorySourceId']['$patch']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v2.inventorySources)[':inventorySourceId']['$patch']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchV2InventorySourcesInventorySourceIdMutationOptions<
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

export function getPostV2InventorySourcesInventorySourceIdEditInventorySourceReadWriteAccessorsMutationKey() {
  return [
    'v2',
    '/v2/inventorySources/:inventorySourceId:editInventorySourceReadWriteAccessors',
    'POST',
  ] as const
}

export function getPostV2InventorySourcesInventorySourceIdEditInventorySourceReadWriteAccessorsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.inventorySources)[':inventorySourceId:editInventorySourceReadWriteAccessors']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v2.inventorySources)[':inventorySourceId:editInventorySourceReadWriteAccessors']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostV2InventorySourcesInventorySourceIdEditInventorySourceReadWriteAccessorsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.inventorySources)[':inventorySourceId:editInventorySourceReadWriteAccessors']['$post']
      >,
    ) {
      return parseResponse(
        client.v2.inventorySources[
          ':inventorySourceId:editInventorySourceReadWriteAccessors'
        ].$post(args, options),
      )
    },
  })
}

export function usePostV2InventorySourcesInventorySourceIdEditInventorySourceReadWriteAccessors<
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
                    (typeof client.v2.inventorySources)[':inventorySourceId:editInventorySourceReadWriteAccessors']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v2.inventorySources)[':inventorySourceId:editInventorySourceReadWriteAccessors']['$post']
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
    getPostV2InventorySourcesInventorySourceIdEditInventorySourceReadWriteAccessorsMutationOptions<
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

export function getV2PartnersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.partners.$get>>,
) {
  return ['v2', '/v2/partners', toValue(args)] as const
}

export function getV2PartnersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.partners.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2PartnersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.partners.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV2Partners<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.partners.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.partners.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.partners.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.partners.$get>>>>
          >,
          ReturnType<typeof getV2PartnersQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.partners.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV2PartnersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2PartnersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.partners.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2PartnersPartnerIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.partners)[':partnerId']['$get']>>,
) {
  return ['v2', '/v2/partners/:partnerId', toValue(args)] as const
}

export function getV2PartnersPartnerIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.partners)[':partnerId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2PartnersPartnerIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.partners[':partnerId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2PartnersPartnerId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.partners)[':partnerId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.partners)[':partnerId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.partners)[':partnerId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.partners)[':partnerId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2PartnersPartnerIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2.partners)[':partnerId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2PartnersPartnerIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2PartnersPartnerIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.partners[':partnerId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2PartnersPartnerIdChannelsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.partners)[':partnerId']['channels']['$get']>
  >,
) {
  return ['v2', '/v2/partners/:partnerId/channels', toValue(args)] as const
}

export function getV2PartnersPartnerIdChannelsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.partners)[':partnerId']['channels']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2PartnersPartnerIdChannelsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.partners[':partnerId'].channels.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2PartnersPartnerIdChannels<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.partners)[':partnerId']['channels']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.partners)[':partnerId']['channels']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.partners)[':partnerId']['channels']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.partners)[':partnerId']['channels']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2PartnersPartnerIdChannelsQueryKey>
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
          Awaited<ReturnType<(typeof client.v2.partners)[':partnerId']['channels']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2PartnersPartnerIdChannelsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2PartnersPartnerIdChannelsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.partners[':partnerId'].channels.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV2PartnersPartnerIdChannelsMutationKey() {
  return ['v2', '/v2/partners/:partnerId/channels', 'POST'] as const
}

export function getPostV2PartnersPartnerIdChannelsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.partners)[':partnerId']['channels']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.partners)[':partnerId']['channels']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2PartnersPartnerIdChannelsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.partners)[':partnerId']['channels']['$post']>,
    ) {
      return parseResponse(client.v2.partners[':partnerId'].channels.$post(args, options))
    },
  })
}

export function usePostV2PartnersPartnerIdChannels<
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
                Awaited<ReturnType<(typeof client.v2.partners)[':partnerId']['channels']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v2.partners)[':partnerId']['channels']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2PartnersPartnerIdChannelsMutationOptions<
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

export function getPatchV2PartnersPartnerIdChannelsChannelIdMutationKey() {
  return ['v2', '/v2/partners/:partnerId/channels/:channelId', 'PATCH'] as const
}

export function getPatchV2PartnersPartnerIdChannelsChannelIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.partners)[':partnerId']['channels'][':channelId']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.partners)[':partnerId']['channels'][':channelId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV2PartnersPartnerIdChannelsChannelIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.partners)[':partnerId']['channels'][':channelId']['$patch']
      >,
    ) {
      return parseResponse(
        client.v2.partners[':partnerId'].channels[':channelId'].$patch(args, options),
      )
    },
  })
}

export function usePatchV2PartnersPartnerIdChannelsChannelId<
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
                    (typeof client.v2.partners)[':partnerId']['channels'][':channelId']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v2.partners)[':partnerId']['channels'][':channelId']['$patch']
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
  const mutationDefaults = getPatchV2PartnersPartnerIdChannelsChannelIdMutationOptions<
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

export function getV2PartnersPartnerIdChannelsChannelIdSitesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.partners)[':partnerId']['channels'][':channelId']['sites']['$get']
    >
  >,
) {
  return ['v2', '/v2/partners/:partnerId/channels/:channelId/sites', toValue(args)] as const
}

export function getV2PartnersPartnerIdChannelsChannelIdSitesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.partners)[':partnerId']['channels'][':channelId']['sites']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2PartnersPartnerIdChannelsChannelIdSitesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.partners[':partnerId'].channels[':channelId'].sites.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2PartnersPartnerIdChannelsChannelIdSites<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2.partners)[':partnerId']['channels'][':channelId']['sites']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.partners)[':partnerId']['channels'][':channelId']['sites']['$get']
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
                    (typeof client.v2.partners)[':partnerId']['channels'][':channelId']['sites']['$get']
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
                    (typeof client.v2.partners)[':partnerId']['channels'][':channelId']['sites']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV2PartnersPartnerIdChannelsChannelIdSitesQueryKey>
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
              (typeof client.v2.partners)[':partnerId']['channels'][':channelId']['sites']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2PartnersPartnerIdChannelsChannelIdSitesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2PartnersPartnerIdChannelsChannelIdSitesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.partners[':partnerId'].channels[':channelId'].sites.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteV2PartnersPartnerIdChannelsChannelIdSitesUrlOrAppIdMutationKey() {
  return ['v2', '/v2/partners/:partnerId/channels/:channelId/sites/:urlOrAppId', 'DELETE'] as const
}

export function getDeleteV2PartnersPartnerIdChannelsChannelIdSitesUrlOrAppIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.partners)[':partnerId']['channels'][':channelId']['sites'][':urlOrAppId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v2.partners)[':partnerId']['channels'][':channelId']['sites'][':urlOrAppId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2PartnersPartnerIdChannelsChannelIdSitesUrlOrAppIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.partners)[':partnerId']['channels'][':channelId']['sites'][':urlOrAppId']['$delete']
      >,
    ) {
      return parseResponse(
        client.v2.partners[':partnerId'].channels[':channelId'].sites[':urlOrAppId'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteV2PartnersPartnerIdChannelsChannelIdSitesUrlOrAppId<
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
                    (typeof client.v2.partners)[':partnerId']['channels'][':channelId']['sites'][':urlOrAppId']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v2.partners)[':partnerId']['channels'][':channelId']['sites'][':urlOrAppId']['$delete']
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
    getDeleteV2PartnersPartnerIdChannelsChannelIdSitesUrlOrAppIdMutationOptions<
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

export function getPostV2PartnersPartnerIdChannelsChannelIdSitesBulkEditMutationKey() {
  return ['v2', '/v2/partners/:partnerId/channels/:channelId/sites:bulkEdit', 'POST'] as const
}

export function getPostV2PartnersPartnerIdChannelsChannelIdSitesBulkEditMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.partners)[':partnerId']['channels'][':channelId']['sites:bulkEdit']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v2.partners)[':partnerId']['channels'][':channelId']['sites:bulkEdit']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV2PartnersPartnerIdChannelsChannelIdSitesBulkEditMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.partners)[':partnerId']['channels'][':channelId']['sites:bulkEdit']['$post']
      >,
    ) {
      return parseResponse(
        client.v2.partners[':partnerId'].channels[':channelId']['sites:bulkEdit'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostV2PartnersPartnerIdChannelsChannelIdSitesBulkEdit<
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
                    (typeof client.v2.partners)[':partnerId']['channels'][':channelId']['sites:bulkEdit']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v2.partners)[':partnerId']['channels'][':channelId']['sites:bulkEdit']['$post']
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
  const mutationDefaults = getPostV2PartnersPartnerIdChannelsChannelIdSitesBulkEditMutationOptions<
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

export function getPostV2PartnersPartnerIdChannelsChannelIdSitesReplaceMutationKey() {
  return ['v2', '/v2/partners/:partnerId/channels/:channelId/sites:replace', 'POST'] as const
}

export function getPostV2PartnersPartnerIdChannelsChannelIdSitesReplaceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.partners)[':partnerId']['channels'][':channelId']['sites:replace']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v2.partners)[':partnerId']['channels'][':channelId']['sites:replace']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV2PartnersPartnerIdChannelsChannelIdSitesReplaceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.partners)[':partnerId']['channels'][':channelId']['sites:replace']['$post']
      >,
    ) {
      return parseResponse(
        client.v2.partners[':partnerId'].channels[':channelId']['sites:replace'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostV2PartnersPartnerIdChannelsChannelIdSitesReplace<
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
                    (typeof client.v2.partners)[':partnerId']['channels'][':channelId']['sites:replace']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v2.partners)[':partnerId']['channels'][':channelId']['sites:replace']['$post']
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
  const mutationDefaults = getPostV2PartnersPartnerIdChannelsChannelIdSitesReplaceMutationOptions<
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

export function getV2PartnersPartnerIdTargetingTypesTargetingTypeAssignedTargetingOptionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.partners)[':partnerId']['targetingTypes'][':targetingType']['assignedTargetingOptions']['$get']
    >
  >,
) {
  return [
    'v2',
    '/v2/partners/:partnerId/targetingTypes/:targetingType/assignedTargetingOptions',
    toValue(args),
  ] as const
}

export function getV2PartnersPartnerIdTargetingTypesTargetingTypeAssignedTargetingOptionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.partners)[':partnerId']['targetingTypes'][':targetingType']['assignedTargetingOptions']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getV2PartnersPartnerIdTargetingTypesTargetingTypeAssignedTargetingOptionsQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.partners[':partnerId'].targetingTypes[
          ':targetingType'
        ].assignedTargetingOptions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2PartnersPartnerIdTargetingTypesTargetingTypeAssignedTargetingOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2.partners)[':partnerId']['targetingTypes'][':targetingType']['assignedTargetingOptions']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.partners)[':partnerId']['targetingTypes'][':targetingType']['assignedTargetingOptions']['$get']
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
                    (typeof client.v2.partners)[':partnerId']['targetingTypes'][':targetingType']['assignedTargetingOptions']['$get']
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
                    (typeof client.v2.partners)[':partnerId']['targetingTypes'][':targetingType']['assignedTargetingOptions']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getV2PartnersPartnerIdTargetingTypesTargetingTypeAssignedTargetingOptionsQueryKey
          >
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
              (typeof client.v2.partners)[':partnerId']['targetingTypes'][':targetingType']['assignedTargetingOptions']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getV2PartnersPartnerIdTargetingTypesTargetingTypeAssignedTargetingOptionsQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV2PartnersPartnerIdTargetingTypesTargetingTypeAssignedTargetingOptionsQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.partners[':partnerId'].targetingTypes[
            ':targetingType'
          ].assignedTargetingOptions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV2PartnersPartnerIdTargetingTypesTargetingTypeAssignedTargetingOptionsMutationKey() {
  return [
    'v2',
    '/v2/partners/:partnerId/targetingTypes/:targetingType/assignedTargetingOptions',
    'POST',
  ] as const
}

export function getPostV2PartnersPartnerIdTargetingTypesTargetingTypeAssignedTargetingOptionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.partners)[':partnerId']['targetingTypes'][':targetingType']['assignedTargetingOptions']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v2.partners)[':partnerId']['targetingTypes'][':targetingType']['assignedTargetingOptions']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostV2PartnersPartnerIdTargetingTypesTargetingTypeAssignedTargetingOptionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.partners)[':partnerId']['targetingTypes'][':targetingType']['assignedTargetingOptions']['$post']
      >,
    ) {
      return parseResponse(
        client.v2.partners[':partnerId'].targetingTypes[
          ':targetingType'
        ].assignedTargetingOptions.$post(args, options),
      )
    },
  })
}

export function usePostV2PartnersPartnerIdTargetingTypesTargetingTypeAssignedTargetingOptions<
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
                    (typeof client.v2.partners)[':partnerId']['targetingTypes'][':targetingType']['assignedTargetingOptions']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v2.partners)[':partnerId']['targetingTypes'][':targetingType']['assignedTargetingOptions']['$post']
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
    getPostV2PartnersPartnerIdTargetingTypesTargetingTypeAssignedTargetingOptionsMutationOptions<
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

export function getV2PartnersPartnerIdTargetingTypesTargetingTypeAssignedTargetingOptionsAssignedTargetingOptionIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.partners)[':partnerId']['targetingTypes'][':targetingType']['assignedTargetingOptions'][':assignedTargetingOptionId']['$get']
    >
  >,
) {
  return [
    'v2',
    '/v2/partners/:partnerId/targetingTypes/:targetingType/assignedTargetingOptions/:assignedTargetingOptionId',
    toValue(args),
  ] as const
}

export function getV2PartnersPartnerIdTargetingTypesTargetingTypeAssignedTargetingOptionsAssignedTargetingOptionIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.partners)[':partnerId']['targetingTypes'][':targetingType']['assignedTargetingOptions'][':assignedTargetingOptionId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getV2PartnersPartnerIdTargetingTypesTargetingTypeAssignedTargetingOptionsAssignedTargetingOptionIdQueryKey(
        args,
      ),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.partners[':partnerId'].targetingTypes[':targetingType'].assignedTargetingOptions[
          ':assignedTargetingOptionId'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV2PartnersPartnerIdTargetingTypesTargetingTypeAssignedTargetingOptionsAssignedTargetingOptionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2.partners)[':partnerId']['targetingTypes'][':targetingType']['assignedTargetingOptions'][':assignedTargetingOptionId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.partners)[':partnerId']['targetingTypes'][':targetingType']['assignedTargetingOptions'][':assignedTargetingOptionId']['$get']
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
                    (typeof client.v2.partners)[':partnerId']['targetingTypes'][':targetingType']['assignedTargetingOptions'][':assignedTargetingOptionId']['$get']
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
                    (typeof client.v2.partners)[':partnerId']['targetingTypes'][':targetingType']['assignedTargetingOptions'][':assignedTargetingOptionId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getV2PartnersPartnerIdTargetingTypesTargetingTypeAssignedTargetingOptionsAssignedTargetingOptionIdQueryKey
          >
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
              (typeof client.v2.partners)[':partnerId']['targetingTypes'][':targetingType']['assignedTargetingOptions'][':assignedTargetingOptionId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getV2PartnersPartnerIdTargetingTypesTargetingTypeAssignedTargetingOptionsAssignedTargetingOptionIdQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV2PartnersPartnerIdTargetingTypesTargetingTypeAssignedTargetingOptionsAssignedTargetingOptionIdQueryKey(
          args,
        ),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.partners[':partnerId'].targetingTypes[
            ':targetingType'
          ].assignedTargetingOptions[':assignedTargetingOptionId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteV2PartnersPartnerIdTargetingTypesTargetingTypeAssignedTargetingOptionsAssignedTargetingOptionIdMutationKey() {
  return [
    'v2',
    '/v2/partners/:partnerId/targetingTypes/:targetingType/assignedTargetingOptions/:assignedTargetingOptionId',
    'DELETE',
  ] as const
}

export function getDeleteV2PartnersPartnerIdTargetingTypesTargetingTypeAssignedTargetingOptionsAssignedTargetingOptionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.partners)[':partnerId']['targetingTypes'][':targetingType']['assignedTargetingOptions'][':assignedTargetingOptionId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v2.partners)[':partnerId']['targetingTypes'][':targetingType']['assignedTargetingOptions'][':assignedTargetingOptionId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteV2PartnersPartnerIdTargetingTypesTargetingTypeAssignedTargetingOptionsAssignedTargetingOptionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.partners)[':partnerId']['targetingTypes'][':targetingType']['assignedTargetingOptions'][':assignedTargetingOptionId']['$delete']
      >,
    ) {
      return parseResponse(
        client.v2.partners[':partnerId'].targetingTypes[':targetingType'].assignedTargetingOptions[
          ':assignedTargetingOptionId'
        ].$delete(args, options),
      )
    },
  })
}

export function useDeleteV2PartnersPartnerIdTargetingTypesTargetingTypeAssignedTargetingOptionsAssignedTargetingOptionId<
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
                    (typeof client.v2.partners)[':partnerId']['targetingTypes'][':targetingType']['assignedTargetingOptions'][':assignedTargetingOptionId']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v2.partners)[':partnerId']['targetingTypes'][':targetingType']['assignedTargetingOptions'][':assignedTargetingOptionId']['$delete']
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
    getDeleteV2PartnersPartnerIdTargetingTypesTargetingTypeAssignedTargetingOptionsAssignedTargetingOptionIdMutationOptions<
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

export function getPostV2PartnersPartnerIdEditAssignedTargetingOptionsMutationKey() {
  return ['v2', '/v2/partners/:partnerId:editAssignedTargetingOptions', 'POST'] as const
}

export function getPostV2PartnersPartnerIdEditAssignedTargetingOptionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.partners)[':partnerId:editAssignedTargetingOptions']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v2.partners)[':partnerId:editAssignedTargetingOptions']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV2PartnersPartnerIdEditAssignedTargetingOptionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.partners)[':partnerId:editAssignedTargetingOptions']['$post']
      >,
    ) {
      return parseResponse(
        client.v2.partners[':partnerId:editAssignedTargetingOptions'].$post(args, options),
      )
    },
  })
}

export function usePostV2PartnersPartnerIdEditAssignedTargetingOptions<
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
                    (typeof client.v2.partners)[':partnerId:editAssignedTargetingOptions']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v2.partners)[':partnerId:editAssignedTargetingOptions']['$post']
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
  const mutationDefaults = getPostV2PartnersPartnerIdEditAssignedTargetingOptionsMutationOptions<
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

export function getPostV2SdfdownloadtasksMutationKey() {
  return ['v2', '/v2/sdfdownloadtasks', 'POST'] as const
}

export function getPostV2SdfdownloadtasksMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.sdfdownloadtasks.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v2.sdfdownloadtasks.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2SdfdownloadtasksMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.sdfdownloadtasks.$post>) {
      return parseResponse(client.v2.sdfdownloadtasks.$post(args, options))
    },
  })
}

export function usePostV2Sdfdownloadtasks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.sdfdownloadtasks.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v2.sdfdownloadtasks.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2SdfdownloadtasksMutationOptions<TError, TOnMutateResult>(
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

export function getV2TargetingTypesTargetingTypeTargetingOptionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.targetingTypes)[':targetingType']['targetingOptions']['$get']
    >
  >,
) {
  return ['v2', '/v2/targetingTypes/:targetingType/targetingOptions', toValue(args)] as const
}

export function getV2TargetingTypesTargetingTypeTargetingOptionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.targetingTypes)[':targetingType']['targetingOptions']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2TargetingTypesTargetingTypeTargetingOptionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.targetingTypes[':targetingType'].targetingOptions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2TargetingTypesTargetingTypeTargetingOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2.targetingTypes)[':targetingType']['targetingOptions']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.targetingTypes)[':targetingType']['targetingOptions']['$get']
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
                    (typeof client.v2.targetingTypes)[':targetingType']['targetingOptions']['$get']
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
                    (typeof client.v2.targetingTypes)[':targetingType']['targetingOptions']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV2TargetingTypesTargetingTypeTargetingOptionsQueryKey>
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
              (typeof client.v2.targetingTypes)[':targetingType']['targetingOptions']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2TargetingTypesTargetingTypeTargetingOptionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2TargetingTypesTargetingTypeTargetingOptionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.targetingTypes[':targetingType'].targetingOptions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2TargetingTypesTargetingTypeTargetingOptionsTargetingOptionIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.targetingTypes)[':targetingType']['targetingOptions'][':targetingOptionId']['$get']
    >
  >,
) {
  return [
    'v2',
    '/v2/targetingTypes/:targetingType/targetingOptions/:targetingOptionId',
    toValue(args),
  ] as const
}

export function getV2TargetingTypesTargetingTypeTargetingOptionsTargetingOptionIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.targetingTypes)[':targetingType']['targetingOptions'][':targetingOptionId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getV2TargetingTypesTargetingTypeTargetingOptionsTargetingOptionIdQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.targetingTypes[':targetingType'].targetingOptions[':targetingOptionId'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useV2TargetingTypesTargetingTypeTargetingOptionsTargetingOptionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2.targetingTypes)[':targetingType']['targetingOptions'][':targetingOptionId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.targetingTypes)[':targetingType']['targetingOptions'][':targetingOptionId']['$get']
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
                    (typeof client.v2.targetingTypes)[':targetingType']['targetingOptions'][':targetingOptionId']['$get']
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
                    (typeof client.v2.targetingTypes)[':targetingType']['targetingOptions'][':targetingOptionId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getV2TargetingTypesTargetingTypeTargetingOptionsTargetingOptionIdQueryKey
          >
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
              (typeof client.v2.targetingTypes)[':targetingType']['targetingOptions'][':targetingOptionId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2TargetingTypesTargetingTypeTargetingOptionsTargetingOptionIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV2TargetingTypesTargetingTypeTargetingOptionsTargetingOptionIdQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.targetingTypes[':targetingType'].targetingOptions[':targetingOptionId'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPostV2TargetingTypesTargetingTypeTargetingOptionsSearchMutationKey() {
  return ['v2', '/v2/targetingTypes/:targetingType/targetingOptions:search', 'POST'] as const
}

export function getPostV2TargetingTypesTargetingTypeTargetingOptionsSearchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.targetingTypes)[':targetingType']['targetingOptions:search']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v2.targetingTypes)[':targetingType']['targetingOptions:search']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV2TargetingTypesTargetingTypeTargetingOptionsSearchMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.targetingTypes)[':targetingType']['targetingOptions:search']['$post']
      >,
    ) {
      return parseResponse(
        client.v2.targetingTypes[':targetingType']['targetingOptions:search'].$post(args, options),
      )
    },
  })
}

export function usePostV2TargetingTypesTargetingTypeTargetingOptionsSearch<
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
                    (typeof client.v2.targetingTypes)[':targetingType']['targetingOptions:search']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v2.targetingTypes)[':targetingType']['targetingOptions:search']['$post']
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
    getPostV2TargetingTypesTargetingTypeTargetingOptionsSearchMutationOptions<
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

export function getV2UsersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.users.$get>>,
) {
  return ['v2', '/v2/users', toValue(args)] as const
}

export function getV2UsersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.users.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2UsersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.users.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV2Users<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.users.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.users.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.users.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.users.$get>>>>
          >,
          ReturnType<typeof getV2UsersQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.users.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV2UsersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2UsersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.users.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV2UsersMutationKey() {
  return ['v2', '/v2/users', 'POST'] as const
}

export function getPostV2UsersMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.users.$post>>>>>,
    TError,
    InferRequestType<typeof client.v2.users.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2UsersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.users.$post>) {
      return parseResponse(client.v2.users.$post(args, options))
    },
  })
}

export function usePostV2Users<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.users.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.v2.users.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2UsersMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV2UsersUserIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.users)[':userId']['$get']>>,
) {
  return ['v2', '/v2/users/:userId', toValue(args)] as const
}

export function getV2UsersUserIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.users)[':userId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2UsersUserIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.users[':userId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2UsersUserId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.users)[':userId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.users)[':userId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v2.users)[':userId']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v2.users)[':userId']['$get']>>>
            >
          >,
          ReturnType<typeof getV2UsersUserIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2.users)[':userId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2UsersUserIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2UsersUserIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.users[':userId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteV2UsersUserIdMutationKey() {
  return ['v2', '/v2/users/:userId', 'DELETE'] as const
}

export function getDeleteV2UsersUserIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2.users)[':userId']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.users)[':userId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2UsersUserIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v2.users)[':userId']['$delete']>) {
      return parseResponse(client.v2.users[':userId'].$delete(args, options))
    },
  })
}

export function useDeleteV2UsersUserId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.users)[':userId']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v2.users)[':userId']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV2UsersUserIdMutationOptions<TError, TOnMutateResult>(
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

export function getPatchV2UsersUserIdMutationKey() {
  return ['v2', '/v2/users/:userId', 'PATCH'] as const
}

export function getPatchV2UsersUserIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2.users)[':userId']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.users)[':userId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV2UsersUserIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v2.users)[':userId']['$patch']>) {
      return parseResponse(client.v2.users[':userId'].$patch(args, options))
    },
  })
}

export function usePatchV2UsersUserId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.users)[':userId']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v2.users)[':userId']['$patch']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchV2UsersUserIdMutationOptions<TError, TOnMutateResult>(
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

export function getPostV2UsersUserIdBulkEditAssignedUserRolesMutationKey() {
  return ['v2', '/v2/users/:userId:bulkEditAssignedUserRoles', 'POST'] as const
}

export function getPostV2UsersUserIdBulkEditAssignedUserRolesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v2.users)[':userId:bulkEditAssignedUserRoles']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.users)[':userId:bulkEditAssignedUserRoles']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2UsersUserIdBulkEditAssignedUserRolesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.users)[':userId:bulkEditAssignedUserRoles']['$post']
      >,
    ) {
      return parseResponse(
        client.v2.users[':userId:bulkEditAssignedUserRoles'].$post(args, options),
      )
    },
  })
}

export function usePostV2UsersUserIdBulkEditAssignedUserRoles<
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
                  ReturnType<(typeof client.v2.users)[':userId:bulkEditAssignedUserRoles']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v2.users)[':userId:bulkEditAssignedUserRoles']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2UsersUserIdBulkEditAssignedUserRolesMutationOptions<
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

export function getV2NameQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2)[':name']['$get']>>,
) {
  return ['v2', '/v2/:name', toValue(args)] as const
}

export function getV2NameQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2)[':name']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2NameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2[':name'].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV2Name<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v2)[':name']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2)[':name']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v2)[':name']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v2)[':name']['$get']>>>
            >
          >,
          ReturnType<typeof getV2NameQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v2)[':name']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV2NameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2NameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2[':name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
