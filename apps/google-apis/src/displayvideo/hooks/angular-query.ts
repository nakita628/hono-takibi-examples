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
  args: InferRequestType<(typeof client.download)[':resourceName']['$get']>,
) {
  return ['download', '/download/:resourceName', args] as const
}

export function getDownloadResourceNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.download)[':resourceName']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.download)[':resourceName']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.download)[':resourceName']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDownloadResourceNameQueryKey>
  >({
    queryKey: getDownloadResourceNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.download[':resourceName'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectDownloadResourceName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.download)[':resourceName']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.download)[':resourceName']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.download)[':resourceName']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDownloadResourceNameQueryKey>
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
      ...getDownloadResourceNameQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostMediaResourceName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostMediaResourceNameMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getV2AdvertisersQueryKey(
  args: InferRequestType<typeof client.v2.advertisers.$get>,
) {
  return ['v2', '/v2/advertisers', args] as const
}

export function getV2AdvertisersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.advertisers.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v2.advertisers.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.advertisers.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV2AdvertisersQueryKey>
  >({
    queryKey: getV2AdvertisersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.advertisers.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV2Advertisers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.advertisers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v2.advertisers.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.advertisers.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV2AdvertisersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV2AdvertisersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostV2Advertisers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.advertisers.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v2.advertisers.$post>,
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
    const mutationDefaults = getPostV2AdvertisersMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getV2AdvertisersAdvertiserIdQueryKey(
  args: InferRequestType<(typeof client.v2.advertisers)[':advertiserId']['$get']>,
) {
  return ['v2', '/v2/advertisers/:advertiserId', args] as const
}

export function getV2AdvertisersAdvertiserIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.advertisers)[':advertiserId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.advertisers)[':advertiserId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV2AdvertisersAdvertiserIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.advertisers[':advertiserId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2AdvertisersAdvertiserId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.advertisers)[':advertiserId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2.advertisers)[':advertiserId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV2AdvertisersAdvertiserIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectDeleteV2AdvertisersAdvertiserId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV2AdvertisersAdvertiserIdMutationOptions<
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

export function injectPatchV2AdvertisersAdvertiserId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchV2AdvertisersAdvertiserIdMutationOptions<
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

export function injectPostV2AdvertisersAdvertiserIdAssets<
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
                ReturnType<(typeof client.v2.advertisers)[':advertiserId']['assets']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.advertisers)[':advertiserId']['assets']['$post']>,
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
    const mutationDefaults = getPostV2AdvertisersAdvertiserIdAssetsMutationOptions<
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

export function getV2AdvertisersAdvertiserIdCampaignsQueryKey(
  args: InferRequestType<(typeof client.v2.advertisers)[':advertiserId']['campaigns']['$get']>,
) {
  return ['v2', '/v2/advertisers/:advertiserId/campaigns', args] as const
}

export function getV2AdvertisersAdvertiserIdCampaignsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.advertisers)[':advertiserId']['campaigns']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.advertisers)[':advertiserId']['campaigns']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV2AdvertisersAdvertiserIdCampaignsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.advertisers[':advertiserId'].campaigns.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2AdvertisersAdvertiserIdCampaigns<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.advertisers)[':advertiserId']['campaigns']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v2.advertisers)[':advertiserId']['campaigns']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getV2AdvertisersAdvertiserIdCampaignsQueryKey>
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
      ...getV2AdvertisersAdvertiserIdCampaignsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostV2AdvertisersAdvertiserIdCampaigns<
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
                ReturnType<(typeof client.v2.advertisers)[':advertiserId']['campaigns']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.advertisers)[':advertiserId']['campaigns']['$post']>,
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
    const mutationDefaults = getPostV2AdvertisersAdvertiserIdCampaignsMutationOptions<
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

export function getV2AdvertisersAdvertiserIdCampaignsCampaignIdQueryKey(
  args: InferRequestType<
    (typeof client.v2.advertisers)[':advertiserId']['campaigns'][':campaignId']['$get']
  >,
) {
  return ['v2', '/v2/advertisers/:advertiserId/campaigns/:campaignId', args] as const
}

export function getV2AdvertisersAdvertiserIdCampaignsCampaignIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.v2.advertisers)[':advertiserId']['campaigns'][':campaignId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV2AdvertisersAdvertiserIdCampaignsCampaignIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.advertisers[':advertiserId'].campaigns[':campaignId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2AdvertisersAdvertiserIdCampaignsCampaignId<
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
  args: () => InferRequestType<
    (typeof client.v2.advertisers)[':advertiserId']['campaigns'][':campaignId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV2AdvertisersAdvertiserIdCampaignsCampaignIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
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

export function injectDeleteV2AdvertisersAdvertiserIdCampaignsCampaignId<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV2AdvertisersAdvertiserIdCampaignsCampaignIdMutationOptions<
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

export function injectPatchV2AdvertisersAdvertiserIdCampaignsCampaignId<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchV2AdvertisersAdvertiserIdCampaignsCampaignIdMutationOptions<
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

export function getV2AdvertisersAdvertiserIdCampaignsCampaignIdTargetingTypesTargetingTypeAssignedTargetingOptionsQueryKey(
  args: InferRequestType<
    (typeof client.v2.advertisers)[':advertiserId']['campaigns'][':campaignId']['targetingTypes'][':targetingType']['assignedTargetingOptions']['$get']
  >,
) {
  return [
    'v2',
    '/v2/advertisers/:advertiserId/campaigns/:campaignId/targetingTypes/:targetingType/assignedTargetingOptions',
    args,
  ] as const
}

export function getV2AdvertisersAdvertiserIdCampaignsCampaignIdTargetingTypesTargetingTypeAssignedTargetingOptionsQueryOptions<
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
  args: InferRequestType<
    (typeof client.v2.advertisers)[':advertiserId']['campaigns'][':campaignId']['targetingTypes'][':targetingType']['assignedTargetingOptions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey:
      getV2AdvertisersAdvertiserIdCampaignsCampaignIdTargetingTypesTargetingTypeAssignedTargetingOptionsQueryKey(
        args,
      ),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.advertisers[':advertiserId'].campaigns[':campaignId'].targetingTypes[
          ':targetingType'
        ].assignedTargetingOptions.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV2AdvertisersAdvertiserIdCampaignsCampaignIdTargetingTypesTargetingTypeAssignedTargetingOptions<
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
  args: () => InferRequestType<
    (typeof client.v2.advertisers)[':advertiserId']['campaigns'][':campaignId']['targetingTypes'][':targetingType']['assignedTargetingOptions']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV2AdvertisersAdvertiserIdCampaignsCampaignIdTargetingTypesTargetingTypeAssignedTargetingOptionsQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getV2AdvertisersAdvertiserIdCampaignsCampaignIdTargetingTypesTargetingTypeAssignedTargetingOptionsAssignedTargetingOptionIdQueryKey(
  args: InferRequestType<
    (typeof client.v2.advertisers)[':advertiserId']['campaigns'][':campaignId']['targetingTypes'][':targetingType']['assignedTargetingOptions'][':assignedTargetingOptionId']['$get']
  >,
) {
  return [
    'v2',
    '/v2/advertisers/:advertiserId/campaigns/:campaignId/targetingTypes/:targetingType/assignedTargetingOptions/:assignedTargetingOptionId',
    args,
  ] as const
}

export function getV2AdvertisersAdvertiserIdCampaignsCampaignIdTargetingTypesTargetingTypeAssignedTargetingOptionsAssignedTargetingOptionIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.v2.advertisers)[':advertiserId']['campaigns'][':campaignId']['targetingTypes'][':targetingType']['assignedTargetingOptions'][':assignedTargetingOptionId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey:
      getV2AdvertisersAdvertiserIdCampaignsCampaignIdTargetingTypesTargetingTypeAssignedTargetingOptionsAssignedTargetingOptionIdQueryKey(
        args,
      ),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.advertisers[':advertiserId'].campaigns[':campaignId'].targetingTypes[
          ':targetingType'
        ].assignedTargetingOptions[':assignedTargetingOptionId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2AdvertisersAdvertiserIdCampaignsCampaignIdTargetingTypesTargetingTypeAssignedTargetingOptionsAssignedTargetingOptionId<
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
  args: () => InferRequestType<
    (typeof client.v2.advertisers)[':advertiserId']['campaigns'][':campaignId']['targetingTypes'][':targetingType']['assignedTargetingOptions'][':assignedTargetingOptionId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV2AdvertisersAdvertiserIdCampaignsCampaignIdTargetingTypesTargetingTypeAssignedTargetingOptionsAssignedTargetingOptionIdQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getV2AdvertisersAdvertiserIdCampaignsCampaignIdListAssignedTargetingOptionsQueryKey(
  args: InferRequestType<
    (typeof client.v2.advertisers)[':advertiserId']['campaigns'][':campaignId:listAssignedTargetingOptions']['$get']
  >,
) {
  return [
    'v2',
    '/v2/advertisers/:advertiserId/campaigns/:campaignId:listAssignedTargetingOptions',
    args,
  ] as const
}

export function getV2AdvertisersAdvertiserIdCampaignsCampaignIdListAssignedTargetingOptionsQueryOptions<
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
  args: InferRequestType<
    (typeof client.v2.advertisers)[':advertiserId']['campaigns'][':campaignId:listAssignedTargetingOptions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey:
      getV2AdvertisersAdvertiserIdCampaignsCampaignIdListAssignedTargetingOptionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.advertisers[':advertiserId'].campaigns[
          ':campaignId:listAssignedTargetingOptions'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV2AdvertisersAdvertiserIdCampaignsCampaignIdListAssignedTargetingOptions<
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
  args: () => InferRequestType<
    (typeof client.v2.advertisers)[':advertiserId']['campaigns'][':campaignId:listAssignedTargetingOptions']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV2AdvertisersAdvertiserIdCampaignsCampaignIdListAssignedTargetingOptionsQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getV2AdvertisersAdvertiserIdChannelsQueryKey(
  args: InferRequestType<(typeof client.v2.advertisers)[':advertiserId']['channels']['$get']>,
) {
  return ['v2', '/v2/advertisers/:advertiserId/channels', args] as const
}

export function getV2AdvertisersAdvertiserIdChannelsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.advertisers)[':advertiserId']['channels']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.advertisers)[':advertiserId']['channels']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV2AdvertisersAdvertiserIdChannelsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.advertisers[':advertiserId'].channels.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2AdvertisersAdvertiserIdChannels<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.advertisers)[':advertiserId']['channels']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2.advertisers)[':advertiserId']['channels']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getV2AdvertisersAdvertiserIdChannelsQueryKey>
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
      ...getV2AdvertisersAdvertiserIdChannelsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostV2AdvertisersAdvertiserIdChannels<
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
                ReturnType<(typeof client.v2.advertisers)[':advertiserId']['channels']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.advertisers)[':advertiserId']['channels']['$post']>,
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
    const mutationDefaults = getPostV2AdvertisersAdvertiserIdChannelsMutationOptions<
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

export function injectPatchV2AdvertisersAdvertiserIdChannelsChannelId<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchV2AdvertisersAdvertiserIdChannelsChannelIdMutationOptions<
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

export function getV2AdvertisersAdvertiserIdChannelsChannelIdSitesQueryKey(
  args: InferRequestType<
    (typeof client.v2.advertisers)[':advertiserId']['channels'][':channelId']['sites']['$get']
  >,
) {
  return ['v2', '/v2/advertisers/:advertiserId/channels/:channelId/sites', args] as const
}

export function getV2AdvertisersAdvertiserIdChannelsChannelIdSitesQueryOptions<
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
  args: InferRequestType<
    (typeof client.v2.advertisers)[':advertiserId']['channels'][':channelId']['sites']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV2AdvertisersAdvertiserIdChannelsChannelIdSitesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.advertisers[':advertiserId'].channels[':channelId'].sites.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2AdvertisersAdvertiserIdChannelsChannelIdSites<
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
  args: () => InferRequestType<
    (typeof client.v2.advertisers)[':advertiserId']['channels'][':channelId']['sites']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV2AdvertisersAdvertiserIdChannelsChannelIdSitesQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
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

export function injectDeleteV2AdvertisersAdvertiserIdChannelsChannelIdSitesUrlOrAppId<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteV2AdvertisersAdvertiserIdChannelsChannelIdSitesUrlOrAppIdMutationOptions<
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

export function injectPostV2AdvertisersAdvertiserIdChannelsChannelIdSitesBulkEdit<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostV2AdvertisersAdvertiserIdChannelsChannelIdSitesBulkEditMutationOptions<
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

export function injectPostV2AdvertisersAdvertiserIdChannelsChannelIdSitesReplace<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostV2AdvertisersAdvertiserIdChannelsChannelIdSitesReplaceMutationOptions<
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

export function getV2AdvertisersAdvertiserIdCreativesQueryKey(
  args: InferRequestType<(typeof client.v2.advertisers)[':advertiserId']['creatives']['$get']>,
) {
  return ['v2', '/v2/advertisers/:advertiserId/creatives', args] as const
}

export function getV2AdvertisersAdvertiserIdCreativesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.advertisers)[':advertiserId']['creatives']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.advertisers)[':advertiserId']['creatives']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV2AdvertisersAdvertiserIdCreativesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.advertisers[':advertiserId'].creatives.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2AdvertisersAdvertiserIdCreatives<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.advertisers)[':advertiserId']['creatives']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v2.advertisers)[':advertiserId']['creatives']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getV2AdvertisersAdvertiserIdCreativesQueryKey>
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
      ...getV2AdvertisersAdvertiserIdCreativesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostV2AdvertisersAdvertiserIdCreatives<
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
                ReturnType<(typeof client.v2.advertisers)[':advertiserId']['creatives']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.advertisers)[':advertiserId']['creatives']['$post']>,
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
    const mutationDefaults = getPostV2AdvertisersAdvertiserIdCreativesMutationOptions<
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

export function getV2AdvertisersAdvertiserIdCreativesCreativeIdQueryKey(
  args: InferRequestType<
    (typeof client.v2.advertisers)[':advertiserId']['creatives'][':creativeId']['$get']
  >,
) {
  return ['v2', '/v2/advertisers/:advertiserId/creatives/:creativeId', args] as const
}

export function getV2AdvertisersAdvertiserIdCreativesCreativeIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.v2.advertisers)[':advertiserId']['creatives'][':creativeId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV2AdvertisersAdvertiserIdCreativesCreativeIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.advertisers[':advertiserId'].creatives[':creativeId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2AdvertisersAdvertiserIdCreativesCreativeId<
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
  args: () => InferRequestType<
    (typeof client.v2.advertisers)[':advertiserId']['creatives'][':creativeId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV2AdvertisersAdvertiserIdCreativesCreativeIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
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

export function injectDeleteV2AdvertisersAdvertiserIdCreativesCreativeId<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV2AdvertisersAdvertiserIdCreativesCreativeIdMutationOptions<
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

export function injectPatchV2AdvertisersAdvertiserIdCreativesCreativeId<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchV2AdvertisersAdvertiserIdCreativesCreativeIdMutationOptions<
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

export function getV2AdvertisersAdvertiserIdInsertionOrdersQueryKey(
  args: InferRequestType<
    (typeof client.v2.advertisers)[':advertiserId']['insertionOrders']['$get']
  >,
) {
  return ['v2', '/v2/advertisers/:advertiserId/insertionOrders', args] as const
}

export function getV2AdvertisersAdvertiserIdInsertionOrdersQueryOptions<
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
  args: InferRequestType<
    (typeof client.v2.advertisers)[':advertiserId']['insertionOrders']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV2AdvertisersAdvertiserIdInsertionOrdersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.advertisers[':advertiserId'].insertionOrders.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2AdvertisersAdvertiserIdInsertionOrders<
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
  args: () => InferRequestType<
    (typeof client.v2.advertisers)[':advertiserId']['insertionOrders']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getV2AdvertisersAdvertiserIdInsertionOrdersQueryKey>
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
      ...getV2AdvertisersAdvertiserIdInsertionOrdersQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
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

export function injectPostV2AdvertisersAdvertiserIdInsertionOrders<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV2AdvertisersAdvertiserIdInsertionOrdersMutationOptions<
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

export function getV2AdvertisersAdvertiserIdInsertionOrdersInsertionOrderIdQueryKey(
  args: InferRequestType<
    (typeof client.v2.advertisers)[':advertiserId']['insertionOrders'][':insertionOrderId']['$get']
  >,
) {
  return ['v2', '/v2/advertisers/:advertiserId/insertionOrders/:insertionOrderId', args] as const
}

export function getV2AdvertisersAdvertiserIdInsertionOrdersInsertionOrderIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.v2.advertisers)[':advertiserId']['insertionOrders'][':insertionOrderId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV2AdvertisersAdvertiserIdInsertionOrdersInsertionOrderIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.advertisers[':advertiserId'].insertionOrders[':insertionOrderId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2AdvertisersAdvertiserIdInsertionOrdersInsertionOrderId<
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
  args: () => InferRequestType<
    (typeof client.v2.advertisers)[':advertiserId']['insertionOrders'][':insertionOrderId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV2AdvertisersAdvertiserIdInsertionOrdersInsertionOrderIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
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

export function injectDeleteV2AdvertisersAdvertiserIdInsertionOrdersInsertionOrderId<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteV2AdvertisersAdvertiserIdInsertionOrdersInsertionOrderIdMutationOptions<
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

export function injectPatchV2AdvertisersAdvertiserIdInsertionOrdersInsertionOrderId<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPatchV2AdvertisersAdvertiserIdInsertionOrdersInsertionOrderIdMutationOptions<
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

export function getV2AdvertisersAdvertiserIdInsertionOrdersInsertionOrderIdTargetingTypesTargetingTypeAssignedTargetingOptionsQueryKey(
  args: InferRequestType<
    (typeof client.v2.advertisers)[':advertiserId']['insertionOrders'][':insertionOrderId']['targetingTypes'][':targetingType']['assignedTargetingOptions']['$get']
  >,
) {
  return [
    'v2',
    '/v2/advertisers/:advertiserId/insertionOrders/:insertionOrderId/targetingTypes/:targetingType/assignedTargetingOptions',
    args,
  ] as const
}

export function getV2AdvertisersAdvertiserIdInsertionOrdersInsertionOrderIdTargetingTypesTargetingTypeAssignedTargetingOptionsQueryOptions<
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
  args: InferRequestType<
    (typeof client.v2.advertisers)[':advertiserId']['insertionOrders'][':insertionOrderId']['targetingTypes'][':targetingType']['assignedTargetingOptions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey:
      getV2AdvertisersAdvertiserIdInsertionOrdersInsertionOrderIdTargetingTypesTargetingTypeAssignedTargetingOptionsQueryKey(
        args,
      ),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.advertisers[':advertiserId'].insertionOrders[':insertionOrderId'].targetingTypes[
          ':targetingType'
        ].assignedTargetingOptions.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV2AdvertisersAdvertiserIdInsertionOrdersInsertionOrderIdTargetingTypesTargetingTypeAssignedTargetingOptions<
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
  args: () => InferRequestType<
    (typeof client.v2.advertisers)[':advertiserId']['insertionOrders'][':insertionOrderId']['targetingTypes'][':targetingType']['assignedTargetingOptions']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV2AdvertisersAdvertiserIdInsertionOrdersInsertionOrderIdTargetingTypesTargetingTypeAssignedTargetingOptionsQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostV2AdvertisersAdvertiserIdInsertionOrdersInsertionOrderIdTargetingTypesTargetingTypeAssignedTargetingOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostV2AdvertisersAdvertiserIdInsertionOrdersInsertionOrderIdTargetingTypesTargetingTypeAssignedTargetingOptionsMutationOptions<
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

export function getV2AdvertisersAdvertiserIdInsertionOrdersInsertionOrderIdTargetingTypesTargetingTypeAssignedTargetingOptionsAssignedTargetingOptionIdQueryKey(
  args: InferRequestType<
    (typeof client.v2.advertisers)[':advertiserId']['insertionOrders'][':insertionOrderId']['targetingTypes'][':targetingType']['assignedTargetingOptions'][':assignedTargetingOptionId']['$get']
  >,
) {
  return [
    'v2',
    '/v2/advertisers/:advertiserId/insertionOrders/:insertionOrderId/targetingTypes/:targetingType/assignedTargetingOptions/:assignedTargetingOptionId',
    args,
  ] as const
}

export function getV2AdvertisersAdvertiserIdInsertionOrdersInsertionOrderIdTargetingTypesTargetingTypeAssignedTargetingOptionsAssignedTargetingOptionIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.v2.advertisers)[':advertiserId']['insertionOrders'][':insertionOrderId']['targetingTypes'][':targetingType']['assignedTargetingOptions'][':assignedTargetingOptionId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey:
      getV2AdvertisersAdvertiserIdInsertionOrdersInsertionOrderIdTargetingTypesTargetingTypeAssignedTargetingOptionsAssignedTargetingOptionIdQueryKey(
        args,
      ),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.advertisers[':advertiserId'].insertionOrders[':insertionOrderId'].targetingTypes[
          ':targetingType'
        ].assignedTargetingOptions[':assignedTargetingOptionId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2AdvertisersAdvertiserIdInsertionOrdersInsertionOrderIdTargetingTypesTargetingTypeAssignedTargetingOptionsAssignedTargetingOptionId<
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
  args: () => InferRequestType<
    (typeof client.v2.advertisers)[':advertiserId']['insertionOrders'][':insertionOrderId']['targetingTypes'][':targetingType']['assignedTargetingOptions'][':assignedTargetingOptionId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV2AdvertisersAdvertiserIdInsertionOrdersInsertionOrderIdTargetingTypesTargetingTypeAssignedTargetingOptionsAssignedTargetingOptionIdQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectDeleteV2AdvertisersAdvertiserIdInsertionOrdersInsertionOrderIdTargetingTypesTargetingTypeAssignedTargetingOptionsAssignedTargetingOptionId<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteV2AdvertisersAdvertiserIdInsertionOrdersInsertionOrderIdTargetingTypesTargetingTypeAssignedTargetingOptionsAssignedTargetingOptionIdMutationOptions<
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

export function getV2AdvertisersAdvertiserIdInsertionOrdersInsertionOrderIdListAssignedTargetingOptionsQueryKey(
  args: InferRequestType<
    (typeof client.v2.advertisers)[':advertiserId']['insertionOrders'][':insertionOrderId:listAssignedTargetingOptions']['$get']
  >,
) {
  return [
    'v2',
    '/v2/advertisers/:advertiserId/insertionOrders/:insertionOrderId:listAssignedTargetingOptions',
    args,
  ] as const
}

export function getV2AdvertisersAdvertiserIdInsertionOrdersInsertionOrderIdListAssignedTargetingOptionsQueryOptions<
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
  args: InferRequestType<
    (typeof client.v2.advertisers)[':advertiserId']['insertionOrders'][':insertionOrderId:listAssignedTargetingOptions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey:
      getV2AdvertisersAdvertiserIdInsertionOrdersInsertionOrderIdListAssignedTargetingOptionsQueryKey(
        args,
      ),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.advertisers[':advertiserId'].insertionOrders[
          ':insertionOrderId:listAssignedTargetingOptions'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV2AdvertisersAdvertiserIdInsertionOrdersInsertionOrderIdListAssignedTargetingOptions<
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
  args: () => InferRequestType<
    (typeof client.v2.advertisers)[':advertiserId']['insertionOrders'][':insertionOrderId:listAssignedTargetingOptions']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV2AdvertisersAdvertiserIdInsertionOrdersInsertionOrderIdListAssignedTargetingOptionsQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getV2AdvertisersAdvertiserIdInvoicesQueryKey(
  args: InferRequestType<(typeof client.v2.advertisers)[':advertiserId']['invoices']['$get']>,
) {
  return ['v2', '/v2/advertisers/:advertiserId/invoices', args] as const
}

export function getV2AdvertisersAdvertiserIdInvoicesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.advertisers)[':advertiserId']['invoices']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.advertisers)[':advertiserId']['invoices']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV2AdvertisersAdvertiserIdInvoicesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.advertisers[':advertiserId'].invoices.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2AdvertisersAdvertiserIdInvoices<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.advertisers)[':advertiserId']['invoices']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2.advertisers)[':advertiserId']['invoices']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getV2AdvertisersAdvertiserIdInvoicesQueryKey>
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
      ...getV2AdvertisersAdvertiserIdInvoicesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getV2AdvertisersAdvertiserIdInvoicesLookupInvoiceCurrencyQueryKey(
  args: InferRequestType<
    (typeof client.v2.advertisers)[':advertiserId']['invoices:lookupInvoiceCurrency']['$get']
  >,
) {
  return ['v2', '/v2/advertisers/:advertiserId/invoices:lookupInvoiceCurrency', args] as const
}

export function getV2AdvertisersAdvertiserIdInvoicesLookupInvoiceCurrencyQueryOptions<
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
  args: InferRequestType<
    (typeof client.v2.advertisers)[':advertiserId']['invoices:lookupInvoiceCurrency']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV2AdvertisersAdvertiserIdInvoicesLookupInvoiceCurrencyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.advertisers[':advertiserId']['invoices:lookupInvoiceCurrency'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2AdvertisersAdvertiserIdInvoicesLookupInvoiceCurrency<
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
  args: () => InferRequestType<
    (typeof client.v2.advertisers)[':advertiserId']['invoices:lookupInvoiceCurrency']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV2AdvertisersAdvertiserIdInvoicesLookupInvoiceCurrencyQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getV2AdvertisersAdvertiserIdLineItemsQueryKey(
  args: InferRequestType<(typeof client.v2.advertisers)[':advertiserId']['lineItems']['$get']>,
) {
  return ['v2', '/v2/advertisers/:advertiserId/lineItems', args] as const
}

export function getV2AdvertisersAdvertiserIdLineItemsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.advertisers)[':advertiserId']['lineItems']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.advertisers)[':advertiserId']['lineItems']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV2AdvertisersAdvertiserIdLineItemsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.advertisers[':advertiserId'].lineItems.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2AdvertisersAdvertiserIdLineItems<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.advertisers)[':advertiserId']['lineItems']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v2.advertisers)[':advertiserId']['lineItems']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getV2AdvertisersAdvertiserIdLineItemsQueryKey>
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
      ...getV2AdvertisersAdvertiserIdLineItemsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostV2AdvertisersAdvertiserIdLineItems<
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
                ReturnType<(typeof client.v2.advertisers)[':advertiserId']['lineItems']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.advertisers)[':advertiserId']['lineItems']['$post']>,
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
    const mutationDefaults = getPostV2AdvertisersAdvertiserIdLineItemsMutationOptions<
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

export function getV2AdvertisersAdvertiserIdLineItemsLineItemIdQueryKey(
  args: InferRequestType<
    (typeof client.v2.advertisers)[':advertiserId']['lineItems'][':lineItemId']['$get']
  >,
) {
  return ['v2', '/v2/advertisers/:advertiserId/lineItems/:lineItemId', args] as const
}

export function getV2AdvertisersAdvertiserIdLineItemsLineItemIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.v2.advertisers)[':advertiserId']['lineItems'][':lineItemId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV2AdvertisersAdvertiserIdLineItemsLineItemIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.advertisers[':advertiserId'].lineItems[':lineItemId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2AdvertisersAdvertiserIdLineItemsLineItemId<
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
  args: () => InferRequestType<
    (typeof client.v2.advertisers)[':advertiserId']['lineItems'][':lineItemId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV2AdvertisersAdvertiserIdLineItemsLineItemIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
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

export function injectDeleteV2AdvertisersAdvertiserIdLineItemsLineItemId<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV2AdvertisersAdvertiserIdLineItemsLineItemIdMutationOptions<
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

export function injectPatchV2AdvertisersAdvertiserIdLineItemsLineItemId<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchV2AdvertisersAdvertiserIdLineItemsLineItemIdMutationOptions<
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

export function getV2AdvertisersAdvertiserIdLineItemsLineItemIdTargetingTypesTargetingTypeAssignedTargetingOptionsQueryKey(
  args: InferRequestType<
    (typeof client.v2.advertisers)[':advertiserId']['lineItems'][':lineItemId']['targetingTypes'][':targetingType']['assignedTargetingOptions']['$get']
  >,
) {
  return [
    'v2',
    '/v2/advertisers/:advertiserId/lineItems/:lineItemId/targetingTypes/:targetingType/assignedTargetingOptions',
    args,
  ] as const
}

export function getV2AdvertisersAdvertiserIdLineItemsLineItemIdTargetingTypesTargetingTypeAssignedTargetingOptionsQueryOptions<
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
  args: InferRequestType<
    (typeof client.v2.advertisers)[':advertiserId']['lineItems'][':lineItemId']['targetingTypes'][':targetingType']['assignedTargetingOptions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey:
      getV2AdvertisersAdvertiserIdLineItemsLineItemIdTargetingTypesTargetingTypeAssignedTargetingOptionsQueryKey(
        args,
      ),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.advertisers[':advertiserId'].lineItems[':lineItemId'].targetingTypes[
          ':targetingType'
        ].assignedTargetingOptions.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV2AdvertisersAdvertiserIdLineItemsLineItemIdTargetingTypesTargetingTypeAssignedTargetingOptions<
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
  args: () => InferRequestType<
    (typeof client.v2.advertisers)[':advertiserId']['lineItems'][':lineItemId']['targetingTypes'][':targetingType']['assignedTargetingOptions']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV2AdvertisersAdvertiserIdLineItemsLineItemIdTargetingTypesTargetingTypeAssignedTargetingOptionsQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostV2AdvertisersAdvertiserIdLineItemsLineItemIdTargetingTypesTargetingTypeAssignedTargetingOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostV2AdvertisersAdvertiserIdLineItemsLineItemIdTargetingTypesTargetingTypeAssignedTargetingOptionsMutationOptions<
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

export function getV2AdvertisersAdvertiserIdLineItemsLineItemIdTargetingTypesTargetingTypeAssignedTargetingOptionsAssignedTargetingOptionIdQueryKey(
  args: InferRequestType<
    (typeof client.v2.advertisers)[':advertiserId']['lineItems'][':lineItemId']['targetingTypes'][':targetingType']['assignedTargetingOptions'][':assignedTargetingOptionId']['$get']
  >,
) {
  return [
    'v2',
    '/v2/advertisers/:advertiserId/lineItems/:lineItemId/targetingTypes/:targetingType/assignedTargetingOptions/:assignedTargetingOptionId',
    args,
  ] as const
}

export function getV2AdvertisersAdvertiserIdLineItemsLineItemIdTargetingTypesTargetingTypeAssignedTargetingOptionsAssignedTargetingOptionIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.v2.advertisers)[':advertiserId']['lineItems'][':lineItemId']['targetingTypes'][':targetingType']['assignedTargetingOptions'][':assignedTargetingOptionId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey:
      getV2AdvertisersAdvertiserIdLineItemsLineItemIdTargetingTypesTargetingTypeAssignedTargetingOptionsAssignedTargetingOptionIdQueryKey(
        args,
      ),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.advertisers[':advertiserId'].lineItems[':lineItemId'].targetingTypes[
          ':targetingType'
        ].assignedTargetingOptions[':assignedTargetingOptionId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2AdvertisersAdvertiserIdLineItemsLineItemIdTargetingTypesTargetingTypeAssignedTargetingOptionsAssignedTargetingOptionId<
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
  args: () => InferRequestType<
    (typeof client.v2.advertisers)[':advertiserId']['lineItems'][':lineItemId']['targetingTypes'][':targetingType']['assignedTargetingOptions'][':assignedTargetingOptionId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV2AdvertisersAdvertiserIdLineItemsLineItemIdTargetingTypesTargetingTypeAssignedTargetingOptionsAssignedTargetingOptionIdQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectDeleteV2AdvertisersAdvertiserIdLineItemsLineItemIdTargetingTypesTargetingTypeAssignedTargetingOptionsAssignedTargetingOptionId<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteV2AdvertisersAdvertiserIdLineItemsLineItemIdTargetingTypesTargetingTypeAssignedTargetingOptionsAssignedTargetingOptionIdMutationOptions<
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

export function injectPostV2AdvertisersAdvertiserIdLineItemsLineItemIdDuplicate<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostV2AdvertisersAdvertiserIdLineItemsLineItemIdDuplicateMutationOptions<
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

export function injectPostV2AdvertisersAdvertiserIdLineItemsBulkEditAssignedTargetingOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostV2AdvertisersAdvertiserIdLineItemsBulkEditAssignedTargetingOptionsMutationOptions<
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

export function getV2AdvertisersAdvertiserIdLineItemsBulkListAssignedTargetingOptionsQueryKey(
  args: InferRequestType<
    (typeof client.v2.advertisers)[':advertiserId']['lineItems:bulkListAssignedTargetingOptions']['$get']
  >,
) {
  return [
    'v2',
    '/v2/advertisers/:advertiserId/lineItems:bulkListAssignedTargetingOptions',
    args,
  ] as const
}

export function getV2AdvertisersAdvertiserIdLineItemsBulkListAssignedTargetingOptionsQueryOptions<
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
  args: InferRequestType<
    (typeof client.v2.advertisers)[':advertiserId']['lineItems:bulkListAssignedTargetingOptions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV2AdvertisersAdvertiserIdLineItemsBulkListAssignedTargetingOptionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.advertisers[':advertiserId']['lineItems:bulkListAssignedTargetingOptions'].$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function injectV2AdvertisersAdvertiserIdLineItemsBulkListAssignedTargetingOptions<
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
  args: () => InferRequestType<
    (typeof client.v2.advertisers)[':advertiserId']['lineItems:bulkListAssignedTargetingOptions']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<
          typeof getV2AdvertisersAdvertiserIdLineItemsBulkListAssignedTargetingOptionsQueryKey
        >
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
      ...getV2AdvertisersAdvertiserIdLineItemsBulkListAssignedTargetingOptionsQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostV2AdvertisersAdvertiserIdLineItemsBulkUpdate<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV2AdvertisersAdvertiserIdLineItemsBulkUpdateMutationOptions<
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

export function injectPostV2AdvertisersAdvertiserIdLineItemsGenerateDefault<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostV2AdvertisersAdvertiserIdLineItemsGenerateDefaultMutationOptions<
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

export function getV2AdvertisersAdvertiserIdLocationListsQueryKey(
  args: InferRequestType<(typeof client.v2.advertisers)[':advertiserId']['locationLists']['$get']>,
) {
  return ['v2', '/v2/advertisers/:advertiserId/locationLists', args] as const
}

export function getV2AdvertisersAdvertiserIdLocationListsQueryOptions<
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
  args: InferRequestType<(typeof client.v2.advertisers)[':advertiserId']['locationLists']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV2AdvertisersAdvertiserIdLocationListsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.advertisers[':advertiserId'].locationLists.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2AdvertisersAdvertiserIdLocationLists<
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
  args: () => InferRequestType<
    (typeof client.v2.advertisers)[':advertiserId']['locationLists']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV2AdvertisersAdvertiserIdLocationListsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
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

export function injectPostV2AdvertisersAdvertiserIdLocationLists<
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
                  (typeof client.v2.advertisers)[':advertiserId']['locationLists']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.advertisers)[':advertiserId']['locationLists']['$post']>,
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
    const mutationDefaults = getPostV2AdvertisersAdvertiserIdLocationListsMutationOptions<
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

export function injectPatchV2AdvertisersAdvertiserIdLocationListsLocationListId<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPatchV2AdvertisersAdvertiserIdLocationListsLocationListIdMutationOptions<
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

export function getV2AdvertisersAdvertiserIdLocationListsLocationListIdAssignedLocationsQueryKey(
  args: InferRequestType<
    (typeof client.v2.advertisers)[':advertiserId']['locationLists'][':locationListId']['assignedLocations']['$get']
  >,
) {
  return [
    'v2',
    '/v2/advertisers/:advertiserId/locationLists/:locationListId/assignedLocations',
    args,
  ] as const
}

export function getV2AdvertisersAdvertiserIdLocationListsLocationListIdAssignedLocationsQueryOptions<
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
  args: InferRequestType<
    (typeof client.v2.advertisers)[':advertiserId']['locationLists'][':locationListId']['assignedLocations']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey:
      getV2AdvertisersAdvertiserIdLocationListsLocationListIdAssignedLocationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.advertisers[':advertiserId'].locationLists[
          ':locationListId'
        ].assignedLocations.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV2AdvertisersAdvertiserIdLocationListsLocationListIdAssignedLocations<
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
  args: () => InferRequestType<
    (typeof client.v2.advertisers)[':advertiserId']['locationLists'][':locationListId']['assignedLocations']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV2AdvertisersAdvertiserIdLocationListsLocationListIdAssignedLocationsQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostV2AdvertisersAdvertiserIdLocationListsLocationListIdAssignedLocations<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostV2AdvertisersAdvertiserIdLocationListsLocationListIdAssignedLocationsMutationOptions<
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

export function injectDeleteV2AdvertisersAdvertiserIdLocationListsLocationListIdAssignedLocationsAssignedLocationId<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteV2AdvertisersAdvertiserIdLocationListsLocationListIdAssignedLocationsAssignedLocationIdMutationOptions<
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

export function injectPostV2AdvertisersAdvertiserIdLocationListsLocationListIdAssignedLocationsBulkEdit<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostV2AdvertisersAdvertiserIdLocationListsLocationListIdAssignedLocationsBulkEditMutationOptions<
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

export function getV2AdvertisersAdvertiserIdManualTriggersQueryKey(
  args: InferRequestType<(typeof client.v2.advertisers)[':advertiserId']['manualTriggers']['$get']>,
) {
  return ['v2', '/v2/advertisers/:advertiserId/manualTriggers', args] as const
}

export function getV2AdvertisersAdvertiserIdManualTriggersQueryOptions<
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
  args: InferRequestType<(typeof client.v2.advertisers)[':advertiserId']['manualTriggers']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV2AdvertisersAdvertiserIdManualTriggersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.advertisers[':advertiserId'].manualTriggers.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2AdvertisersAdvertiserIdManualTriggers<
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
  args: () => InferRequestType<
    (typeof client.v2.advertisers)[':advertiserId']['manualTriggers']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getV2AdvertisersAdvertiserIdManualTriggersQueryKey>
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
      ...getV2AdvertisersAdvertiserIdManualTriggersQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
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

export function injectPostV2AdvertisersAdvertiserIdManualTriggers<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV2AdvertisersAdvertiserIdManualTriggersMutationOptions<
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

export function getV2AdvertisersAdvertiserIdManualTriggersTriggerIdQueryKey(
  args: InferRequestType<
    (typeof client.v2.advertisers)[':advertiserId']['manualTriggers'][':triggerId']['$get']
  >,
) {
  return ['v2', '/v2/advertisers/:advertiserId/manualTriggers/:triggerId', args] as const
}

export function getV2AdvertisersAdvertiserIdManualTriggersTriggerIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.v2.advertisers)[':advertiserId']['manualTriggers'][':triggerId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV2AdvertisersAdvertiserIdManualTriggersTriggerIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.advertisers[':advertiserId'].manualTriggers[':triggerId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2AdvertisersAdvertiserIdManualTriggersTriggerId<
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
  args: () => InferRequestType<
    (typeof client.v2.advertisers)[':advertiserId']['manualTriggers'][':triggerId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV2AdvertisersAdvertiserIdManualTriggersTriggerIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
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

export function injectPatchV2AdvertisersAdvertiserIdManualTriggersTriggerId<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPatchV2AdvertisersAdvertiserIdManualTriggersTriggerIdMutationOptions<
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

export function injectPostV2AdvertisersAdvertiserIdManualTriggersTriggerIdActivate<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostV2AdvertisersAdvertiserIdManualTriggersTriggerIdActivateMutationOptions<
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

export function injectPostV2AdvertisersAdvertiserIdManualTriggersTriggerIdDeactivate<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostV2AdvertisersAdvertiserIdManualTriggersTriggerIdDeactivateMutationOptions<
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

export function getV2AdvertisersAdvertiserIdNegativeKeywordListsQueryKey(
  args: InferRequestType<
    (typeof client.v2.advertisers)[':advertiserId']['negativeKeywordLists']['$get']
  >,
) {
  return ['v2', '/v2/advertisers/:advertiserId/negativeKeywordLists', args] as const
}

export function getV2AdvertisersAdvertiserIdNegativeKeywordListsQueryOptions<
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
  args: InferRequestType<
    (typeof client.v2.advertisers)[':advertiserId']['negativeKeywordLists']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV2AdvertisersAdvertiserIdNegativeKeywordListsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.advertisers[':advertiserId'].negativeKeywordLists.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2AdvertisersAdvertiserIdNegativeKeywordLists<
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
  args: () => InferRequestType<
    (typeof client.v2.advertisers)[':advertiserId']['negativeKeywordLists']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV2AdvertisersAdvertiserIdNegativeKeywordListsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
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

export function injectPostV2AdvertisersAdvertiserIdNegativeKeywordLists<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV2AdvertisersAdvertiserIdNegativeKeywordListsMutationOptions<
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

export function injectPatchV2AdvertisersAdvertiserIdNegativeKeywordListsNegativeKeywordListId<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPatchV2AdvertisersAdvertiserIdNegativeKeywordListsNegativeKeywordListIdMutationOptions<
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

export function getV2AdvertisersAdvertiserIdNegativeKeywordListsNegativeKeywordListIdNegativeKeywordsQueryKey(
  args: InferRequestType<
    (typeof client.v2.advertisers)[':advertiserId']['negativeKeywordLists'][':negativeKeywordListId']['negativeKeywords']['$get']
  >,
) {
  return [
    'v2',
    '/v2/advertisers/:advertiserId/negativeKeywordLists/:negativeKeywordListId/negativeKeywords',
    args,
  ] as const
}

export function getV2AdvertisersAdvertiserIdNegativeKeywordListsNegativeKeywordListIdNegativeKeywordsQueryOptions<
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
  args: InferRequestType<
    (typeof client.v2.advertisers)[':advertiserId']['negativeKeywordLists'][':negativeKeywordListId']['negativeKeywords']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey:
      getV2AdvertisersAdvertiserIdNegativeKeywordListsNegativeKeywordListIdNegativeKeywordsQueryKey(
        args,
      ),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.advertisers[':advertiserId'].negativeKeywordLists[
          ':negativeKeywordListId'
        ].negativeKeywords.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV2AdvertisersAdvertiserIdNegativeKeywordListsNegativeKeywordListIdNegativeKeywords<
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
  args: () => InferRequestType<
    (typeof client.v2.advertisers)[':advertiserId']['negativeKeywordLists'][':negativeKeywordListId']['negativeKeywords']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV2AdvertisersAdvertiserIdNegativeKeywordListsNegativeKeywordListIdNegativeKeywordsQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectDeleteV2AdvertisersAdvertiserIdNegativeKeywordListsNegativeKeywordListIdNegativeKeywordsKeywordValue<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteV2AdvertisersAdvertiserIdNegativeKeywordListsNegativeKeywordListIdNegativeKeywordsKeywordValueMutationOptions<
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

export function injectPostV2AdvertisersAdvertiserIdNegativeKeywordListsNegativeKeywordListIdNegativeKeywordsBulkEdit<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostV2AdvertisersAdvertiserIdNegativeKeywordListsNegativeKeywordListIdNegativeKeywordsBulkEditMutationOptions<
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

export function injectPostV2AdvertisersAdvertiserIdNegativeKeywordListsNegativeKeywordListIdNegativeKeywordsReplace<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostV2AdvertisersAdvertiserIdNegativeKeywordListsNegativeKeywordListIdNegativeKeywordsReplaceMutationOptions<
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

export function getV2AdvertisersAdvertiserIdTargetingTypesTargetingTypeAssignedTargetingOptionsQueryKey(
  args: InferRequestType<
    (typeof client.v2.advertisers)[':advertiserId']['targetingTypes'][':targetingType']['assignedTargetingOptions']['$get']
  >,
) {
  return [
    'v2',
    '/v2/advertisers/:advertiserId/targetingTypes/:targetingType/assignedTargetingOptions',
    args,
  ] as const
}

export function getV2AdvertisersAdvertiserIdTargetingTypesTargetingTypeAssignedTargetingOptionsQueryOptions<
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
  args: InferRequestType<
    (typeof client.v2.advertisers)[':advertiserId']['targetingTypes'][':targetingType']['assignedTargetingOptions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey:
      getV2AdvertisersAdvertiserIdTargetingTypesTargetingTypeAssignedTargetingOptionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.advertisers[':advertiserId'].targetingTypes[
          ':targetingType'
        ].assignedTargetingOptions.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV2AdvertisersAdvertiserIdTargetingTypesTargetingTypeAssignedTargetingOptions<
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
  args: () => InferRequestType<
    (typeof client.v2.advertisers)[':advertiserId']['targetingTypes'][':targetingType']['assignedTargetingOptions']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV2AdvertisersAdvertiserIdTargetingTypesTargetingTypeAssignedTargetingOptionsQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostV2AdvertisersAdvertiserIdTargetingTypesTargetingTypeAssignedTargetingOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostV2AdvertisersAdvertiserIdTargetingTypesTargetingTypeAssignedTargetingOptionsMutationOptions<
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

export function getV2AdvertisersAdvertiserIdTargetingTypesTargetingTypeAssignedTargetingOptionsAssignedTargetingOptionIdQueryKey(
  args: InferRequestType<
    (typeof client.v2.advertisers)[':advertiserId']['targetingTypes'][':targetingType']['assignedTargetingOptions'][':assignedTargetingOptionId']['$get']
  >,
) {
  return [
    'v2',
    '/v2/advertisers/:advertiserId/targetingTypes/:targetingType/assignedTargetingOptions/:assignedTargetingOptionId',
    args,
  ] as const
}

export function getV2AdvertisersAdvertiserIdTargetingTypesTargetingTypeAssignedTargetingOptionsAssignedTargetingOptionIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.v2.advertisers)[':advertiserId']['targetingTypes'][':targetingType']['assignedTargetingOptions'][':assignedTargetingOptionId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey:
      getV2AdvertisersAdvertiserIdTargetingTypesTargetingTypeAssignedTargetingOptionsAssignedTargetingOptionIdQueryKey(
        args,
      ),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.advertisers[':advertiserId'].targetingTypes[
          ':targetingType'
        ].assignedTargetingOptions[':assignedTargetingOptionId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2AdvertisersAdvertiserIdTargetingTypesTargetingTypeAssignedTargetingOptionsAssignedTargetingOptionId<
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
  args: () => InferRequestType<
    (typeof client.v2.advertisers)[':advertiserId']['targetingTypes'][':targetingType']['assignedTargetingOptions'][':assignedTargetingOptionId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV2AdvertisersAdvertiserIdTargetingTypesTargetingTypeAssignedTargetingOptionsAssignedTargetingOptionIdQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectDeleteV2AdvertisersAdvertiserIdTargetingTypesTargetingTypeAssignedTargetingOptionsAssignedTargetingOptionId<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteV2AdvertisersAdvertiserIdTargetingTypesTargetingTypeAssignedTargetingOptionsAssignedTargetingOptionIdMutationOptions<
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

export function getV2AdvertisersAdvertiserIdYoutubeAdGroupAdsQueryKey(
  args: InferRequestType<
    (typeof client.v2.advertisers)[':advertiserId']['youtubeAdGroupAds']['$get']
  >,
) {
  return ['v2', '/v2/advertisers/:advertiserId/youtubeAdGroupAds', args] as const
}

export function getV2AdvertisersAdvertiserIdYoutubeAdGroupAdsQueryOptions<
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
  args: InferRequestType<
    (typeof client.v2.advertisers)[':advertiserId']['youtubeAdGroupAds']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV2AdvertisersAdvertiserIdYoutubeAdGroupAdsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.advertisers[':advertiserId'].youtubeAdGroupAds.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2AdvertisersAdvertiserIdYoutubeAdGroupAds<
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
  args: () => InferRequestType<
    (typeof client.v2.advertisers)[':advertiserId']['youtubeAdGroupAds']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getV2AdvertisersAdvertiserIdYoutubeAdGroupAdsQueryKey>
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
      ...getV2AdvertisersAdvertiserIdYoutubeAdGroupAdsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getV2AdvertisersAdvertiserIdYoutubeAdGroupAdsYoutubeAdGroupAdIdQueryKey(
  args: InferRequestType<
    (typeof client.v2.advertisers)[':advertiserId']['youtubeAdGroupAds'][':youtubeAdGroupAdId']['$get']
  >,
) {
  return [
    'v2',
    '/v2/advertisers/:advertiserId/youtubeAdGroupAds/:youtubeAdGroupAdId',
    args,
  ] as const
}

export function getV2AdvertisersAdvertiserIdYoutubeAdGroupAdsYoutubeAdGroupAdIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.v2.advertisers)[':advertiserId']['youtubeAdGroupAds'][':youtubeAdGroupAdId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV2AdvertisersAdvertiserIdYoutubeAdGroupAdsYoutubeAdGroupAdIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.advertisers[':advertiserId'].youtubeAdGroupAds[':youtubeAdGroupAdId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2AdvertisersAdvertiserIdYoutubeAdGroupAdsYoutubeAdGroupAdId<
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
  args: () => InferRequestType<
    (typeof client.v2.advertisers)[':advertiserId']['youtubeAdGroupAds'][':youtubeAdGroupAdId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV2AdvertisersAdvertiserIdYoutubeAdGroupAdsYoutubeAdGroupAdIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getV2AdvertisersAdvertiserIdYoutubeAdGroupsQueryKey(
  args: InferRequestType<
    (typeof client.v2.advertisers)[':advertiserId']['youtubeAdGroups']['$get']
  >,
) {
  return ['v2', '/v2/advertisers/:advertiserId/youtubeAdGroups', args] as const
}

export function getV2AdvertisersAdvertiserIdYoutubeAdGroupsQueryOptions<
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
  args: InferRequestType<
    (typeof client.v2.advertisers)[':advertiserId']['youtubeAdGroups']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV2AdvertisersAdvertiserIdYoutubeAdGroupsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.advertisers[':advertiserId'].youtubeAdGroups.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2AdvertisersAdvertiserIdYoutubeAdGroups<
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
  args: () => InferRequestType<
    (typeof client.v2.advertisers)[':advertiserId']['youtubeAdGroups']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getV2AdvertisersAdvertiserIdYoutubeAdGroupsQueryKey>
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
      ...getV2AdvertisersAdvertiserIdYoutubeAdGroupsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getV2AdvertisersAdvertiserIdYoutubeAdGroupsYoutubeAdGroupIdQueryKey(
  args: InferRequestType<
    (typeof client.v2.advertisers)[':advertiserId']['youtubeAdGroups'][':youtubeAdGroupId']['$get']
  >,
) {
  return ['v2', '/v2/advertisers/:advertiserId/youtubeAdGroups/:youtubeAdGroupId', args] as const
}

export function getV2AdvertisersAdvertiserIdYoutubeAdGroupsYoutubeAdGroupIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.v2.advertisers)[':advertiserId']['youtubeAdGroups'][':youtubeAdGroupId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV2AdvertisersAdvertiserIdYoutubeAdGroupsYoutubeAdGroupIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.advertisers[':advertiserId'].youtubeAdGroups[':youtubeAdGroupId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2AdvertisersAdvertiserIdYoutubeAdGroupsYoutubeAdGroupId<
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
  args: () => InferRequestType<
    (typeof client.v2.advertisers)[':advertiserId']['youtubeAdGroups'][':youtubeAdGroupId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV2AdvertisersAdvertiserIdYoutubeAdGroupsYoutubeAdGroupIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getV2AdvertisersAdvertiserIdYoutubeAdGroupsYoutubeAdGroupIdTargetingTypesTargetingTypeAssignedTargetingOptionsQueryKey(
  args: InferRequestType<
    (typeof client.v2.advertisers)[':advertiserId']['youtubeAdGroups'][':youtubeAdGroupId']['targetingTypes'][':targetingType']['assignedTargetingOptions']['$get']
  >,
) {
  return [
    'v2',
    '/v2/advertisers/:advertiserId/youtubeAdGroups/:youtubeAdGroupId/targetingTypes/:targetingType/assignedTargetingOptions',
    args,
  ] as const
}

export function getV2AdvertisersAdvertiserIdYoutubeAdGroupsYoutubeAdGroupIdTargetingTypesTargetingTypeAssignedTargetingOptionsQueryOptions<
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
  args: InferRequestType<
    (typeof client.v2.advertisers)[':advertiserId']['youtubeAdGroups'][':youtubeAdGroupId']['targetingTypes'][':targetingType']['assignedTargetingOptions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey:
      getV2AdvertisersAdvertiserIdYoutubeAdGroupsYoutubeAdGroupIdTargetingTypesTargetingTypeAssignedTargetingOptionsQueryKey(
        args,
      ),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.advertisers[':advertiserId'].youtubeAdGroups[':youtubeAdGroupId'].targetingTypes[
          ':targetingType'
        ].assignedTargetingOptions.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV2AdvertisersAdvertiserIdYoutubeAdGroupsYoutubeAdGroupIdTargetingTypesTargetingTypeAssignedTargetingOptions<
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
  args: () => InferRequestType<
    (typeof client.v2.advertisers)[':advertiserId']['youtubeAdGroups'][':youtubeAdGroupId']['targetingTypes'][':targetingType']['assignedTargetingOptions']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV2AdvertisersAdvertiserIdYoutubeAdGroupsYoutubeAdGroupIdTargetingTypesTargetingTypeAssignedTargetingOptionsQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getV2AdvertisersAdvertiserIdYoutubeAdGroupsYoutubeAdGroupIdTargetingTypesTargetingTypeAssignedTargetingOptionsAssignedTargetingOptionIdQueryKey(
  args: InferRequestType<
    (typeof client.v2.advertisers)[':advertiserId']['youtubeAdGroups'][':youtubeAdGroupId']['targetingTypes'][':targetingType']['assignedTargetingOptions'][':assignedTargetingOptionId']['$get']
  >,
) {
  return [
    'v2',
    '/v2/advertisers/:advertiserId/youtubeAdGroups/:youtubeAdGroupId/targetingTypes/:targetingType/assignedTargetingOptions/:assignedTargetingOptionId',
    args,
  ] as const
}

export function getV2AdvertisersAdvertiserIdYoutubeAdGroupsYoutubeAdGroupIdTargetingTypesTargetingTypeAssignedTargetingOptionsAssignedTargetingOptionIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.v2.advertisers)[':advertiserId']['youtubeAdGroups'][':youtubeAdGroupId']['targetingTypes'][':targetingType']['assignedTargetingOptions'][':assignedTargetingOptionId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey:
      getV2AdvertisersAdvertiserIdYoutubeAdGroupsYoutubeAdGroupIdTargetingTypesTargetingTypeAssignedTargetingOptionsAssignedTargetingOptionIdQueryKey(
        args,
      ),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.advertisers[':advertiserId'].youtubeAdGroups[':youtubeAdGroupId'].targetingTypes[
          ':targetingType'
        ].assignedTargetingOptions[':assignedTargetingOptionId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2AdvertisersAdvertiserIdYoutubeAdGroupsYoutubeAdGroupIdTargetingTypesTargetingTypeAssignedTargetingOptionsAssignedTargetingOptionId<
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
  args: () => InferRequestType<
    (typeof client.v2.advertisers)[':advertiserId']['youtubeAdGroups'][':youtubeAdGroupId']['targetingTypes'][':targetingType']['assignedTargetingOptions'][':assignedTargetingOptionId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV2AdvertisersAdvertiserIdYoutubeAdGroupsYoutubeAdGroupIdTargetingTypesTargetingTypeAssignedTargetingOptionsAssignedTargetingOptionIdQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getV2AdvertisersAdvertiserIdYoutubeAdGroupsBulkListAdGroupAssignedTargetingOptionsQueryKey(
  args: InferRequestType<
    (typeof client.v2.advertisers)[':advertiserId']['youtubeAdGroups:bulkListAdGroupAssignedTargetingOptions']['$get']
  >,
) {
  return [
    'v2',
    '/v2/advertisers/:advertiserId/youtubeAdGroups:bulkListAdGroupAssignedTargetingOptions',
    args,
  ] as const
}

export function getV2AdvertisersAdvertiserIdYoutubeAdGroupsBulkListAdGroupAssignedTargetingOptionsQueryOptions<
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
  args: InferRequestType<
    (typeof client.v2.advertisers)[':advertiserId']['youtubeAdGroups:bulkListAdGroupAssignedTargetingOptions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey:
      getV2AdvertisersAdvertiserIdYoutubeAdGroupsBulkListAdGroupAssignedTargetingOptionsQueryKey(
        args,
      ),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.advertisers[':advertiserId'][
          'youtubeAdGroups:bulkListAdGroupAssignedTargetingOptions'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV2AdvertisersAdvertiserIdYoutubeAdGroupsBulkListAdGroupAssignedTargetingOptions<
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
  args: () => InferRequestType<
    (typeof client.v2.advertisers)[':advertiserId']['youtubeAdGroups:bulkListAdGroupAssignedTargetingOptions']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV2AdvertisersAdvertiserIdYoutubeAdGroupsBulkListAdGroupAssignedTargetingOptionsQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getV2AdvertisersAdvertiserIdAuditQueryKey(
  args: InferRequestType<(typeof client.v2.advertisers)[':advertiserId:audit']['$get']>,
) {
  return ['v2', '/v2/advertisers/:advertiserId:audit', args] as const
}

export function getV2AdvertisersAdvertiserIdAuditQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.advertisers)[':advertiserId:audit']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.advertisers)[':advertiserId:audit']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV2AdvertisersAdvertiserIdAuditQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.advertisers[':advertiserId:audit'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2AdvertisersAdvertiserIdAudit<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.advertisers)[':advertiserId:audit']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2.advertisers)[':advertiserId:audit']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV2AdvertisersAdvertiserIdAuditQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostV2AdvertisersAdvertiserIdEditAssignedTargetingOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostV2AdvertisersAdvertiserIdEditAssignedTargetingOptionsMutationOptions<
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

export function getV2AdvertisersAdvertiserIdListAssignedTargetingOptionsQueryKey(
  args: InferRequestType<
    (typeof client.v2.advertisers)[':advertiserId:listAssignedTargetingOptions']['$get']
  >,
) {
  return ['v2', '/v2/advertisers/:advertiserId:listAssignedTargetingOptions', args] as const
}

export function getV2AdvertisersAdvertiserIdListAssignedTargetingOptionsQueryOptions<
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
  args: InferRequestType<
    (typeof client.v2.advertisers)[':advertiserId:listAssignedTargetingOptions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV2AdvertisersAdvertiserIdListAssignedTargetingOptionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.advertisers[':advertiserId:listAssignedTargetingOptions'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2AdvertisersAdvertiserIdListAssignedTargetingOptions<
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
  args: () => InferRequestType<
    (typeof client.v2.advertisers)[':advertiserId:listAssignedTargetingOptions']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV2AdvertisersAdvertiserIdListAssignedTargetingOptionsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getV2CombinedAudiencesQueryKey(
  args: InferRequestType<typeof client.v2.combinedAudiences.$get>,
) {
  return ['v2', '/v2/combinedAudiences', args] as const
}

export function getV2CombinedAudiencesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.combinedAudiences.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v2.combinedAudiences.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.combinedAudiences.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV2CombinedAudiencesQueryKey>
  >({
    queryKey: getV2CombinedAudiencesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.combinedAudiences.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV2CombinedAudiences<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.combinedAudiences.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v2.combinedAudiences.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v2.combinedAudiences.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2CombinedAudiencesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV2CombinedAudiencesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getV2CombinedAudiencesCombinedAudienceIdQueryKey(
  args: InferRequestType<(typeof client.v2.combinedAudiences)[':combinedAudienceId']['$get']>,
) {
  return ['v2', '/v2/combinedAudiences/:combinedAudienceId', args] as const
}

export function getV2CombinedAudiencesCombinedAudienceIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.combinedAudiences)[':combinedAudienceId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.combinedAudiences)[':combinedAudienceId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV2CombinedAudiencesCombinedAudienceIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.combinedAudiences[':combinedAudienceId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2CombinedAudiencesCombinedAudienceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.combinedAudiences)[':combinedAudienceId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2.combinedAudiences)[':combinedAudienceId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getV2CombinedAudiencesCombinedAudienceIdQueryKey>
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
      ...getV2CombinedAudiencesCombinedAudienceIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getV2CustomBiddingAlgorithmsQueryKey(
  args: InferRequestType<typeof client.v2.customBiddingAlgorithms.$get>,
) {
  return ['v2', '/v2/customBiddingAlgorithms', args] as const
}

export function getV2CustomBiddingAlgorithmsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v2.customBiddingAlgorithms.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.customBiddingAlgorithms.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.customBiddingAlgorithms.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2CustomBiddingAlgorithmsQueryKey>
  >({
    queryKey: getV2CustomBiddingAlgorithmsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.customBiddingAlgorithms.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2CustomBiddingAlgorithms<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v2.customBiddingAlgorithms.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v2.customBiddingAlgorithms.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v2.customBiddingAlgorithms.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2CustomBiddingAlgorithmsQueryKey>
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
      ...getV2CustomBiddingAlgorithmsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostV2CustomBiddingAlgorithms<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV2CustomBiddingAlgorithmsMutationOptions<
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

export function getV2CustomBiddingAlgorithmsCustomBiddingAlgorithmIdQueryKey(
  args: InferRequestType<
    (typeof client.v2.customBiddingAlgorithms)[':customBiddingAlgorithmId']['$get']
  >,
) {
  return ['v2', '/v2/customBiddingAlgorithms/:customBiddingAlgorithmId', args] as const
}

export function getV2CustomBiddingAlgorithmsCustomBiddingAlgorithmIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.v2.customBiddingAlgorithms)[':customBiddingAlgorithmId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV2CustomBiddingAlgorithmsCustomBiddingAlgorithmIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.customBiddingAlgorithms[':customBiddingAlgorithmId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2CustomBiddingAlgorithmsCustomBiddingAlgorithmId<
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
  args: () => InferRequestType<
    (typeof client.v2.customBiddingAlgorithms)[':customBiddingAlgorithmId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV2CustomBiddingAlgorithmsCustomBiddingAlgorithmIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
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

export function injectPatchV2CustomBiddingAlgorithmsCustomBiddingAlgorithmId<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPatchV2CustomBiddingAlgorithmsCustomBiddingAlgorithmIdMutationOptions<
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

export function getV2CustomBiddingAlgorithmsCustomBiddingAlgorithmIdScriptsQueryKey(
  args: InferRequestType<
    (typeof client.v2.customBiddingAlgorithms)[':customBiddingAlgorithmId']['scripts']['$get']
  >,
) {
  return ['v2', '/v2/customBiddingAlgorithms/:customBiddingAlgorithmId/scripts', args] as const
}

export function getV2CustomBiddingAlgorithmsCustomBiddingAlgorithmIdScriptsQueryOptions<
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
  args: InferRequestType<
    (typeof client.v2.customBiddingAlgorithms)[':customBiddingAlgorithmId']['scripts']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV2CustomBiddingAlgorithmsCustomBiddingAlgorithmIdScriptsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.customBiddingAlgorithms[':customBiddingAlgorithmId'].scripts.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2CustomBiddingAlgorithmsCustomBiddingAlgorithmIdScripts<
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
  args: () => InferRequestType<
    (typeof client.v2.customBiddingAlgorithms)[':customBiddingAlgorithmId']['scripts']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV2CustomBiddingAlgorithmsCustomBiddingAlgorithmIdScriptsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
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

export function injectPostV2CustomBiddingAlgorithmsCustomBiddingAlgorithmIdScripts<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostV2CustomBiddingAlgorithmsCustomBiddingAlgorithmIdScriptsMutationOptions<
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

export function getV2CustomBiddingAlgorithmsCustomBiddingAlgorithmIdScriptsCustomBiddingScriptIdQueryKey(
  args: InferRequestType<
    (typeof client.v2.customBiddingAlgorithms)[':customBiddingAlgorithmId']['scripts'][':customBiddingScriptId']['$get']
  >,
) {
  return [
    'v2',
    '/v2/customBiddingAlgorithms/:customBiddingAlgorithmId/scripts/:customBiddingScriptId',
    args,
  ] as const
}

export function getV2CustomBiddingAlgorithmsCustomBiddingAlgorithmIdScriptsCustomBiddingScriptIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.v2.customBiddingAlgorithms)[':customBiddingAlgorithmId']['scripts'][':customBiddingScriptId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey:
      getV2CustomBiddingAlgorithmsCustomBiddingAlgorithmIdScriptsCustomBiddingScriptIdQueryKey(
        args,
      ),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.customBiddingAlgorithms[':customBiddingAlgorithmId'].scripts[
          ':customBiddingScriptId'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV2CustomBiddingAlgorithmsCustomBiddingAlgorithmIdScriptsCustomBiddingScriptId<
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
  args: () => InferRequestType<
    (typeof client.v2.customBiddingAlgorithms)[':customBiddingAlgorithmId']['scripts'][':customBiddingScriptId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV2CustomBiddingAlgorithmsCustomBiddingAlgorithmIdScriptsCustomBiddingScriptIdQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getV2CustomBiddingAlgorithmsCustomBiddingAlgorithmIdUploadScriptQueryKey(
  args: InferRequestType<
    (typeof client.v2.customBiddingAlgorithms)[':customBiddingAlgorithmId:uploadScript']['$get']
  >,
) {
  return ['v2', '/v2/customBiddingAlgorithms/:customBiddingAlgorithmId:uploadScript', args] as const
}

export function getV2CustomBiddingAlgorithmsCustomBiddingAlgorithmIdUploadScriptQueryOptions<
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
  args: InferRequestType<
    (typeof client.v2.customBiddingAlgorithms)[':customBiddingAlgorithmId:uploadScript']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV2CustomBiddingAlgorithmsCustomBiddingAlgorithmIdUploadScriptQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.customBiddingAlgorithms[':customBiddingAlgorithmId:uploadScript'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2CustomBiddingAlgorithmsCustomBiddingAlgorithmIdUploadScript<
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
  args: () => InferRequestType<
    (typeof client.v2.customBiddingAlgorithms)[':customBiddingAlgorithmId:uploadScript']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV2CustomBiddingAlgorithmsCustomBiddingAlgorithmIdUploadScriptQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getV2CustomListsQueryKey(
  args: InferRequestType<typeof client.v2.customLists.$get>,
) {
  return ['v2', '/v2/customLists', args] as const
}

export function getV2CustomListsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.customLists.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v2.customLists.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.customLists.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV2CustomListsQueryKey>
  >({
    queryKey: getV2CustomListsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.customLists.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV2CustomLists<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.customLists.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v2.customLists.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.customLists.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV2CustomListsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV2CustomListsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getV2CustomListsCustomListIdQueryKey(
  args: InferRequestType<(typeof client.v2.customLists)[':customListId']['$get']>,
) {
  return ['v2', '/v2/customLists/:customListId', args] as const
}

export function getV2CustomListsCustomListIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.customLists)[':customListId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.customLists)[':customListId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV2CustomListsCustomListIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.customLists[':customListId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2CustomListsCustomListId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.customLists)[':customListId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2.customLists)[':customListId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV2CustomListsCustomListIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getV2FirstAndThirdPartyAudiencesQueryKey(
  args: InferRequestType<typeof client.v2.firstAndThirdPartyAudiences.$get>,
) {
  return ['v2', '/v2/firstAndThirdPartyAudiences', args] as const
}

export function getV2FirstAndThirdPartyAudiencesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v2.firstAndThirdPartyAudiences.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.firstAndThirdPartyAudiences.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.firstAndThirdPartyAudiences.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2FirstAndThirdPartyAudiencesQueryKey>
  >({
    queryKey: getV2FirstAndThirdPartyAudiencesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.firstAndThirdPartyAudiences.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2FirstAndThirdPartyAudiences<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v2.firstAndThirdPartyAudiences.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v2.firstAndThirdPartyAudiences.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v2.firstAndThirdPartyAudiences.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2FirstAndThirdPartyAudiencesQueryKey>
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
      ...getV2FirstAndThirdPartyAudiencesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostV2FirstAndThirdPartyAudiences<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV2FirstAndThirdPartyAudiencesMutationOptions<
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

export function getV2FirstAndThirdPartyAudiencesFirstAndThirdPartyAudienceIdQueryKey(
  args: InferRequestType<
    (typeof client.v2.firstAndThirdPartyAudiences)[':firstAndThirdPartyAudienceId']['$get']
  >,
) {
  return ['v2', '/v2/firstAndThirdPartyAudiences/:firstAndThirdPartyAudienceId', args] as const
}

export function getV2FirstAndThirdPartyAudiencesFirstAndThirdPartyAudienceIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.v2.firstAndThirdPartyAudiences)[':firstAndThirdPartyAudienceId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV2FirstAndThirdPartyAudiencesFirstAndThirdPartyAudienceIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.firstAndThirdPartyAudiences[':firstAndThirdPartyAudienceId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2FirstAndThirdPartyAudiencesFirstAndThirdPartyAudienceId<
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
  args: () => InferRequestType<
    (typeof client.v2.firstAndThirdPartyAudiences)[':firstAndThirdPartyAudienceId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV2FirstAndThirdPartyAudiencesFirstAndThirdPartyAudienceIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
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

export function injectPatchV2FirstAndThirdPartyAudiencesFirstAndThirdPartyAudienceId<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPatchV2FirstAndThirdPartyAudiencesFirstAndThirdPartyAudienceIdMutationOptions<
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

export function injectPostV2FirstAndThirdPartyAudiencesFirstAndThirdPartyAudienceIdEditCustomerMatchMembers<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostV2FirstAndThirdPartyAudiencesFirstAndThirdPartyAudienceIdEditCustomerMatchMembersMutationOptions<
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

export function getV2FloodlightGroupsFloodlightGroupIdQueryKey(
  args: InferRequestType<(typeof client.v2.floodlightGroups)[':floodlightGroupId']['$get']>,
) {
  return ['v2', '/v2/floodlightGroups/:floodlightGroupId', args] as const
}

export function getV2FloodlightGroupsFloodlightGroupIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.floodlightGroups)[':floodlightGroupId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.floodlightGroups)[':floodlightGroupId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV2FloodlightGroupsFloodlightGroupIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.floodlightGroups[':floodlightGroupId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2FloodlightGroupsFloodlightGroupId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.floodlightGroups)[':floodlightGroupId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2.floodlightGroups)[':floodlightGroupId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV2FloodlightGroupsFloodlightGroupIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getV2GoogleAudiencesQueryKey(
  args: InferRequestType<typeof client.v2.googleAudiences.$get>,
) {
  return ['v2', '/v2/googleAudiences', args] as const
}

export function getV2GoogleAudiencesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.googleAudiences.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v2.googleAudiences.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.googleAudiences.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV2GoogleAudiencesQueryKey>
  >({
    queryKey: getV2GoogleAudiencesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.googleAudiences.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV2GoogleAudiences<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.googleAudiences.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v2.googleAudiences.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v2.googleAudiences.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2GoogleAudiencesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV2GoogleAudiencesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getV2GoogleAudiencesGoogleAudienceIdQueryKey(
  args: InferRequestType<(typeof client.v2.googleAudiences)[':googleAudienceId']['$get']>,
) {
  return ['v2', '/v2/googleAudiences/:googleAudienceId', args] as const
}

export function getV2GoogleAudiencesGoogleAudienceIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.googleAudiences)[':googleAudienceId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.googleAudiences)[':googleAudienceId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV2GoogleAudiencesGoogleAudienceIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.googleAudiences[':googleAudienceId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2GoogleAudiencesGoogleAudienceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.googleAudiences)[':googleAudienceId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2.googleAudiences)[':googleAudienceId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV2GoogleAudiencesGoogleAudienceIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getV2GuaranteedOrdersQueryKey(
  args: InferRequestType<typeof client.v2.guaranteedOrders.$get>,
) {
  return ['v2', '/v2/guaranteedOrders', args] as const
}

export function getV2GuaranteedOrdersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.guaranteedOrders.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v2.guaranteedOrders.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.guaranteedOrders.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV2GuaranteedOrdersQueryKey>
  >({
    queryKey: getV2GuaranteedOrdersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.guaranteedOrders.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV2GuaranteedOrders<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.guaranteedOrders.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v2.guaranteedOrders.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v2.guaranteedOrders.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2GuaranteedOrdersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV2GuaranteedOrdersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostV2GuaranteedOrders<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v2.guaranteedOrders.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v2.guaranteedOrders.$post>,
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
    const mutationDefaults = getPostV2GuaranteedOrdersMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getV2GuaranteedOrdersGuaranteedOrderIdQueryKey(
  args: InferRequestType<(typeof client.v2.guaranteedOrders)[':guaranteedOrderId']['$get']>,
) {
  return ['v2', '/v2/guaranteedOrders/:guaranteedOrderId', args] as const
}

export function getV2GuaranteedOrdersGuaranteedOrderIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.guaranteedOrders)[':guaranteedOrderId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.guaranteedOrders)[':guaranteedOrderId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV2GuaranteedOrdersGuaranteedOrderIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.guaranteedOrders[':guaranteedOrderId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2GuaranteedOrdersGuaranteedOrderId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.guaranteedOrders)[':guaranteedOrderId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2.guaranteedOrders)[':guaranteedOrderId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV2GuaranteedOrdersGuaranteedOrderIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPatchV2GuaranteedOrdersGuaranteedOrderId<
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
                ReturnType<(typeof client.v2.guaranteedOrders)[':guaranteedOrderId']['$patch']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.guaranteedOrders)[':guaranteedOrderId']['$patch']>,
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
    const mutationDefaults = getPatchV2GuaranteedOrdersGuaranteedOrderIdMutationOptions<
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

export function injectPostV2GuaranteedOrdersGuaranteedOrderIdEditGuaranteedOrderReadAccessors<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostV2GuaranteedOrdersGuaranteedOrderIdEditGuaranteedOrderReadAccessorsMutationOptions<
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

export function getV2InventorySourceGroupsQueryKey(
  args: InferRequestType<typeof client.v2.inventorySourceGroups.$get>,
) {
  return ['v2', '/v2/inventorySourceGroups', args] as const
}

export function getV2InventorySourceGroupsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v2.inventorySourceGroups.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.inventorySourceGroups.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.inventorySourceGroups.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2InventorySourceGroupsQueryKey>
  >({
    queryKey: getV2InventorySourceGroupsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.inventorySourceGroups.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2InventorySourceGroups<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v2.inventorySourceGroups.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v2.inventorySourceGroups.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v2.inventorySourceGroups.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2InventorySourceGroupsQueryKey>
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
      ...getV2InventorySourceGroupsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostV2InventorySourceGroups<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v2.inventorySourceGroups.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v2.inventorySourceGroups.$post>,
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
    const mutationDefaults = getPostV2InventorySourceGroupsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getV2InventorySourceGroupsInventorySourceGroupIdQueryKey(
  args: InferRequestType<
    (typeof client.v2.inventorySourceGroups)[':inventorySourceGroupId']['$get']
  >,
) {
  return ['v2', '/v2/inventorySourceGroups/:inventorySourceGroupId', args] as const
}

export function getV2InventorySourceGroupsInventorySourceGroupIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.v2.inventorySourceGroups)[':inventorySourceGroupId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV2InventorySourceGroupsInventorySourceGroupIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.inventorySourceGroups[':inventorySourceGroupId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2InventorySourceGroupsInventorySourceGroupId<
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
  args: () => InferRequestType<
    (typeof client.v2.inventorySourceGroups)[':inventorySourceGroupId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getV2InventorySourceGroupsInventorySourceGroupIdQueryKey>
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
      ...getV2InventorySourceGroupsInventorySourceGroupIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
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

export function injectDeleteV2InventorySourceGroupsInventorySourceGroupId<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV2InventorySourceGroupsInventorySourceGroupIdMutationOptions<
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

export function getV2InventorySourceGroupsInventorySourceGroupIdAssignedInventorySourcesQueryKey(
  args: InferRequestType<
    (typeof client.v2.inventorySourceGroups)[':inventorySourceGroupId']['assignedInventorySources']['$get']
  >,
) {
  return [
    'v2',
    '/v2/inventorySourceGroups/:inventorySourceGroupId/assignedInventorySources',
    args,
  ] as const
}

export function getV2InventorySourceGroupsInventorySourceGroupIdAssignedInventorySourcesQueryOptions<
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
  args: InferRequestType<
    (typeof client.v2.inventorySourceGroups)[':inventorySourceGroupId']['assignedInventorySources']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey:
      getV2InventorySourceGroupsInventorySourceGroupIdAssignedInventorySourcesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.inventorySourceGroups[':inventorySourceGroupId'].assignedInventorySources.$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function injectV2InventorySourceGroupsInventorySourceGroupIdAssignedInventorySources<
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
  args: () => InferRequestType<
    (typeof client.v2.inventorySourceGroups)[':inventorySourceGroupId']['assignedInventorySources']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV2InventorySourceGroupsInventorySourceGroupIdAssignedInventorySourcesQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostV2InventorySourceGroupsInventorySourceGroupIdAssignedInventorySources<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostV2InventorySourceGroupsInventorySourceGroupIdAssignedInventorySourcesMutationOptions<
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

export function injectDeleteV2InventorySourceGroupsInventorySourceGroupIdAssignedInventorySourcesAssignedInventorySourceId<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteV2InventorySourceGroupsInventorySourceGroupIdAssignedInventorySourcesAssignedInventorySourceIdMutationOptions<
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

export function injectPostV2InventorySourceGroupsInventorySourceGroupIdAssignedInventorySourcesBulkEdit<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostV2InventorySourceGroupsInventorySourceGroupIdAssignedInventorySourcesBulkEditMutationOptions<
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

export function getV2InventorySourcesQueryKey(
  args: InferRequestType<typeof client.v2.inventorySources.$get>,
) {
  return ['v2', '/v2/inventorySources', args] as const
}

export function getV2InventorySourcesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.inventorySources.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v2.inventorySources.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.inventorySources.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV2InventorySourcesQueryKey>
  >({
    queryKey: getV2InventorySourcesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.inventorySources.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV2InventorySources<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.inventorySources.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v2.inventorySources.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v2.inventorySources.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2InventorySourcesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV2InventorySourcesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostV2InventorySources<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v2.inventorySources.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v2.inventorySources.$post>,
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
    const mutationDefaults = getPostV2InventorySourcesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getV2InventorySourcesInventorySourceIdQueryKey(
  args: InferRequestType<(typeof client.v2.inventorySources)[':inventorySourceId']['$get']>,
) {
  return ['v2', '/v2/inventorySources/:inventorySourceId', args] as const
}

export function getV2InventorySourcesInventorySourceIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.inventorySources)[':inventorySourceId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.inventorySources)[':inventorySourceId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV2InventorySourcesInventorySourceIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.inventorySources[':inventorySourceId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2InventorySourcesInventorySourceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.inventorySources)[':inventorySourceId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2.inventorySources)[':inventorySourceId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV2InventorySourcesInventorySourceIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPatchV2InventorySourcesInventorySourceId<
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
                ReturnType<(typeof client.v2.inventorySources)[':inventorySourceId']['$patch']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.inventorySources)[':inventorySourceId']['$patch']>,
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
    const mutationDefaults = getPatchV2InventorySourcesInventorySourceIdMutationOptions<
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

export function injectPostV2InventorySourcesInventorySourceIdEditInventorySourceReadWriteAccessors<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostV2InventorySourcesInventorySourceIdEditInventorySourceReadWriteAccessorsMutationOptions<
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

export function getV2PartnersQueryKey(args: InferRequestType<typeof client.v2.partners.$get>) {
  return ['v2', '/v2/partners', args] as const
}

export function getV2PartnersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.partners.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v2.partners.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.partners.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV2PartnersQueryKey>
  >({
    queryKey: getV2PartnersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.partners.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV2Partners<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.partners.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v2.partners.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.partners.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV2PartnersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV2PartnersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getV2PartnersPartnerIdQueryKey(
  args: InferRequestType<(typeof client.v2.partners)[':partnerId']['$get']>,
) {
  return ['v2', '/v2/partners/:partnerId', args] as const
}

export function getV2PartnersPartnerIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.partners)[':partnerId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.partners)[':partnerId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2.partners)[':partnerId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2PartnersPartnerIdQueryKey>
  >({
    queryKey: getV2PartnersPartnerIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.partners[':partnerId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2PartnersPartnerId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.partners)[':partnerId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2.partners)[':partnerId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.partners)[':partnerId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2PartnersPartnerIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV2PartnersPartnerIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getV2PartnersPartnerIdChannelsQueryKey(
  args: InferRequestType<(typeof client.v2.partners)[':partnerId']['channels']['$get']>,
) {
  return ['v2', '/v2/partners/:partnerId/channels', args] as const
}

export function getV2PartnersPartnerIdChannelsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.partners)[':partnerId']['channels']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.partners)[':partnerId']['channels']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV2PartnersPartnerIdChannelsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.partners[':partnerId'].channels.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2PartnersPartnerIdChannels<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.partners)[':partnerId']['channels']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2.partners)[':partnerId']['channels']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV2PartnersPartnerIdChannelsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostV2PartnersPartnerIdChannels<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV2PartnersPartnerIdChannelsMutationOptions<
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

export function injectPatchV2PartnersPartnerIdChannelsChannelId<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchV2PartnersPartnerIdChannelsChannelIdMutationOptions<
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

export function getV2PartnersPartnerIdChannelsChannelIdSitesQueryKey(
  args: InferRequestType<
    (typeof client.v2.partners)[':partnerId']['channels'][':channelId']['sites']['$get']
  >,
) {
  return ['v2', '/v2/partners/:partnerId/channels/:channelId/sites', args] as const
}

export function getV2PartnersPartnerIdChannelsChannelIdSitesQueryOptions<
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
  args: InferRequestType<
    (typeof client.v2.partners)[':partnerId']['channels'][':channelId']['sites']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV2PartnersPartnerIdChannelsChannelIdSitesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.partners[':partnerId'].channels[':channelId'].sites.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2PartnersPartnerIdChannelsChannelIdSites<
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
  args: () => InferRequestType<
    (typeof client.v2.partners)[':partnerId']['channels'][':channelId']['sites']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV2PartnersPartnerIdChannelsChannelIdSitesQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
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

export function injectDeleteV2PartnersPartnerIdChannelsChannelIdSitesUrlOrAppId<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteV2PartnersPartnerIdChannelsChannelIdSitesUrlOrAppIdMutationOptions<
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

export function injectPostV2PartnersPartnerIdChannelsChannelIdSitesBulkEdit<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostV2PartnersPartnerIdChannelsChannelIdSitesBulkEditMutationOptions<
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

export function injectPostV2PartnersPartnerIdChannelsChannelIdSitesReplace<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV2PartnersPartnerIdChannelsChannelIdSitesReplaceMutationOptions<
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

export function getV2PartnersPartnerIdTargetingTypesTargetingTypeAssignedTargetingOptionsQueryKey(
  args: InferRequestType<
    (typeof client.v2.partners)[':partnerId']['targetingTypes'][':targetingType']['assignedTargetingOptions']['$get']
  >,
) {
  return [
    'v2',
    '/v2/partners/:partnerId/targetingTypes/:targetingType/assignedTargetingOptions',
    args,
  ] as const
}

export function getV2PartnersPartnerIdTargetingTypesTargetingTypeAssignedTargetingOptionsQueryOptions<
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
  args: InferRequestType<
    (typeof client.v2.partners)[':partnerId']['targetingTypes'][':targetingType']['assignedTargetingOptions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey:
      getV2PartnersPartnerIdTargetingTypesTargetingTypeAssignedTargetingOptionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.partners[':partnerId'].targetingTypes[
          ':targetingType'
        ].assignedTargetingOptions.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV2PartnersPartnerIdTargetingTypesTargetingTypeAssignedTargetingOptions<
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
  args: () => InferRequestType<
    (typeof client.v2.partners)[':partnerId']['targetingTypes'][':targetingType']['assignedTargetingOptions']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV2PartnersPartnerIdTargetingTypesTargetingTypeAssignedTargetingOptionsQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostV2PartnersPartnerIdTargetingTypesTargetingTypeAssignedTargetingOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostV2PartnersPartnerIdTargetingTypesTargetingTypeAssignedTargetingOptionsMutationOptions<
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

export function getV2PartnersPartnerIdTargetingTypesTargetingTypeAssignedTargetingOptionsAssignedTargetingOptionIdQueryKey(
  args: InferRequestType<
    (typeof client.v2.partners)[':partnerId']['targetingTypes'][':targetingType']['assignedTargetingOptions'][':assignedTargetingOptionId']['$get']
  >,
) {
  return [
    'v2',
    '/v2/partners/:partnerId/targetingTypes/:targetingType/assignedTargetingOptions/:assignedTargetingOptionId',
    args,
  ] as const
}

export function getV2PartnersPartnerIdTargetingTypesTargetingTypeAssignedTargetingOptionsAssignedTargetingOptionIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.v2.partners)[':partnerId']['targetingTypes'][':targetingType']['assignedTargetingOptions'][':assignedTargetingOptionId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey:
      getV2PartnersPartnerIdTargetingTypesTargetingTypeAssignedTargetingOptionsAssignedTargetingOptionIdQueryKey(
        args,
      ),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.partners[':partnerId'].targetingTypes[':targetingType'].assignedTargetingOptions[
          ':assignedTargetingOptionId'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV2PartnersPartnerIdTargetingTypesTargetingTypeAssignedTargetingOptionsAssignedTargetingOptionId<
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
  args: () => InferRequestType<
    (typeof client.v2.partners)[':partnerId']['targetingTypes'][':targetingType']['assignedTargetingOptions'][':assignedTargetingOptionId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV2PartnersPartnerIdTargetingTypesTargetingTypeAssignedTargetingOptionsAssignedTargetingOptionIdQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectDeleteV2PartnersPartnerIdTargetingTypesTargetingTypeAssignedTargetingOptionsAssignedTargetingOptionId<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteV2PartnersPartnerIdTargetingTypesTargetingTypeAssignedTargetingOptionsAssignedTargetingOptionIdMutationOptions<
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

export function injectPostV2PartnersPartnerIdEditAssignedTargetingOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV2PartnersPartnerIdEditAssignedTargetingOptionsMutationOptions<
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

export function injectPostV2Sdfdownloadtasks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v2.sdfdownloadtasks.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v2.sdfdownloadtasks.$post>,
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
    const mutationDefaults = getPostV2SdfdownloadtasksMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getV2TargetingTypesTargetingTypeTargetingOptionsQueryKey(
  args: InferRequestType<
    (typeof client.v2.targetingTypes)[':targetingType']['targetingOptions']['$get']
  >,
) {
  return ['v2', '/v2/targetingTypes/:targetingType/targetingOptions', args] as const
}

export function getV2TargetingTypesTargetingTypeTargetingOptionsQueryOptions<
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
  args: InferRequestType<
    (typeof client.v2.targetingTypes)[':targetingType']['targetingOptions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV2TargetingTypesTargetingTypeTargetingOptionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.targetingTypes[':targetingType'].targetingOptions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2TargetingTypesTargetingTypeTargetingOptions<
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
  args: () => InferRequestType<
    (typeof client.v2.targetingTypes)[':targetingType']['targetingOptions']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV2TargetingTypesTargetingTypeTargetingOptionsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getV2TargetingTypesTargetingTypeTargetingOptionsTargetingOptionIdQueryKey(
  args: InferRequestType<
    (typeof client.v2.targetingTypes)[':targetingType']['targetingOptions'][':targetingOptionId']['$get']
  >,
) {
  return [
    'v2',
    '/v2/targetingTypes/:targetingType/targetingOptions/:targetingOptionId',
    args,
  ] as const
}

export function getV2TargetingTypesTargetingTypeTargetingOptionsTargetingOptionIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.v2.targetingTypes)[':targetingType']['targetingOptions'][':targetingOptionId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV2TargetingTypesTargetingTypeTargetingOptionsTargetingOptionIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.targetingTypes[':targetingType'].targetingOptions[':targetingOptionId'].$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function injectV2TargetingTypesTargetingTypeTargetingOptionsTargetingOptionId<
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
  args: () => InferRequestType<
    (typeof client.v2.targetingTypes)[':targetingType']['targetingOptions'][':targetingOptionId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV2TargetingTypesTargetingTypeTargetingOptionsTargetingOptionIdQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostV2TargetingTypesTargetingTypeTargetingOptionsSearch<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostV2TargetingTypesTargetingTypeTargetingOptionsSearchMutationOptions<
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

export function getV2UsersQueryKey(args: InferRequestType<typeof client.v2.users.$get>) {
  return ['v2', '/v2/users', args] as const
}

export function getV2UsersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.users.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v2.users.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.users.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV2UsersQueryKey>
  >({
    queryKey: getV2UsersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.users.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV2Users<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.users.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v2.users.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.users.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getV2UsersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV2UsersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostV2Users<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.users.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v2.users.$post>,
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
    const mutationDefaults = getPostV2UsersMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getV2UsersUserIdQueryKey(
  args: InferRequestType<(typeof client.v2.users)[':userId']['$get']>,
) {
  return ['v2', '/v2/users/:userId', args] as const
}

export function getV2UsersUserIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.users)[':userId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.users)[':userId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2.users)[':userId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2UsersUserIdQueryKey>
  >({
    queryKey: getV2UsersUserIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.users[':userId'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV2UsersUserId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.users)[':userId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2.users)[':userId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v2.users)[':userId']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2UsersUserIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV2UsersUserIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectDeleteV2UsersUserId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV2UsersUserIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPatchV2UsersUserId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v2.users)[':userId']['$patch']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.users)[':userId']['$patch']>,
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
    const mutationDefaults = getPatchV2UsersUserIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostV2UsersUserIdBulkEditAssignedUserRoles<
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
                ReturnType<(typeof client.v2.users)[':userId:bulkEditAssignedUserRoles']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.users)[':userId:bulkEditAssignedUserRoles']['$post']>,
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
    const mutationDefaults = getPostV2UsersUserIdBulkEditAssignedUserRolesMutationOptions<
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

export function getV2NameQueryKey(args: InferRequestType<(typeof client.v2)[':name']['$get']>) {
  return ['v2', '/v2/:name', args] as const
}

export function getV2NameQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v2)[':name']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.v2)[':name']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v2)[':name']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV2NameQueryKey>
  >({
    queryKey: getV2NameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2[':name'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV2Name<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v2)[':name']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2)[':name']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v2)[':name']['$get']>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV2NameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV2NameQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}
