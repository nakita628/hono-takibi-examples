import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
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

export function getGetDownloadResourceNameKey(
  args: InferRequestType<(typeof client.download)[':resourceName']['$get']>,
) {
  return ['download', '/download/:resourceName', args] as const
}

export function useGetDownloadResourceName<TError = unknown>(
  args: InferRequestType<(typeof client.download)[':resourceName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.download)[':resourceName']['$get']>>
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
        ? getGetDownloadResourceNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.download)[':resourceName']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.download[':resourceName'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDownloadResourceName<TError = unknown>(
  args: InferRequestType<(typeof client.download)[':resourceName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.download)[':resourceName']['$get']>>
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
        ? getGetDownloadResourceNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.download)[':resourceName']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.download[':resourceName'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostMediaResourceNameKey() {
  return ['media', '/media/:resourceName', 'POST'] as const
}

export function usePostMediaResourceName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.media)[':resourceName']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.media)[':resourceName']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMediaResourceNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.media)[':resourceName']['$post']> },
      ) => parseResponse(client.media[':resourceName'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2AdvertisersKey(args: InferRequestType<typeof client.v2.advertisers.$get>) {
  return ['v2', '/v2/advertisers', args] as const
}

export function useGetV2Advertisers<TError = unknown>(
  args: InferRequestType<typeof client.v2.advertisers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.advertisers.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2AdvertisersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.advertisers.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.advertisers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2Advertisers<TError = unknown>(
  args: InferRequestType<typeof client.v2.advertisers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.advertisers.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2AdvertisersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.advertisers.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.advertisers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2AdvertisersKey() {
  return ['v2', '/v2/advertisers', 'POST'] as const
}

export function usePostV2Advertisers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.advertisers.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v2.advertisers.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2AdvertisersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v2.advertisers.$post> }) =>
        parseResponse(client.v2.advertisers.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2AdvertisersAdvertiserIdKey(
  args: InferRequestType<(typeof client.v2.advertisers)[':advertiserId']['$get']>,
) {
  return ['v2', '/v2/advertisers/:advertiserId', args] as const
}

export function useGetV2AdvertisersAdvertiserId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.advertisers)[':advertiserId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.advertisers)[':advertiserId']['$get']>>
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
        ? getGetV2AdvertisersAdvertiserIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.advertisers)[':advertiserId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.advertisers[':advertiserId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2AdvertisersAdvertiserId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.advertisers)[':advertiserId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.advertisers)[':advertiserId']['$get']>>
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
        ? getGetV2AdvertisersAdvertiserIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.advertisers)[':advertiserId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.advertisers[':advertiserId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV2AdvertisersAdvertiserIdKey() {
  return ['v2', '/v2/advertisers/:advertiserId', 'DELETE'] as const
}

export function useDeleteV2AdvertisersAdvertiserId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.advertisers)[':advertiserId']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.advertisers)[':advertiserId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV2AdvertisersAdvertiserIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v2.advertisers)[':advertiserId']['$delete']> },
      ) => parseResponse(client.v2.advertisers[':advertiserId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchV2AdvertisersAdvertiserIdKey() {
  return ['v2', '/v2/advertisers/:advertiserId', 'PATCH'] as const
}

export function usePatchV2AdvertisersAdvertiserId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.advertisers)[':advertiserId']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.advertisers)[':advertiserId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV2AdvertisersAdvertiserIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v2.advertisers)[':advertiserId']['$patch']> },
      ) => parseResponse(client.v2.advertisers[':advertiserId'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2AdvertisersAdvertiserIdAssetsKey() {
  return ['v2', '/v2/advertisers/:advertiserId/assets', 'POST'] as const
}

export function usePostV2AdvertisersAdvertiserIdAssets<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.advertisers)[':advertiserId']['assets']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.advertisers)[':advertiserId']['assets']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2AdvertisersAdvertiserIdAssetsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v2.advertisers)[':advertiserId']['assets']['$post']>
        },
      ) => parseResponse(client.v2.advertisers[':advertiserId'].assets.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2AdvertisersAdvertiserIdCampaignsKey(
  args: InferRequestType<(typeof client.v2.advertisers)[':advertiserId']['campaigns']['$get']>,
) {
  return ['v2', '/v2/advertisers/:advertiserId/campaigns', args] as const
}

export function useGetV2AdvertisersAdvertiserIdCampaigns<TError = unknown>(
  args: InferRequestType<(typeof client.v2.advertisers)[':advertiserId']['campaigns']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.advertisers)[':advertiserId']['campaigns']['$get']>
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
        ? getGetV2AdvertisersAdvertiserIdCampaignsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.advertisers)[':advertiserId']['campaigns']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.advertisers[':advertiserId'].campaigns.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2AdvertisersAdvertiserIdCampaigns<TError = unknown>(
  args: InferRequestType<(typeof client.v2.advertisers)[':advertiserId']['campaigns']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.advertisers)[':advertiserId']['campaigns']['$get']>
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
        ? getGetV2AdvertisersAdvertiserIdCampaignsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.advertisers)[':advertiserId']['campaigns']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.advertisers[':advertiserId'].campaigns.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2AdvertisersAdvertiserIdCampaignsKey() {
  return ['v2', '/v2/advertisers/:advertiserId/campaigns', 'POST'] as const
}

export function usePostV2AdvertisersAdvertiserIdCampaigns<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.advertisers)[':advertiserId']['campaigns']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.advertisers)[':advertiserId']['campaigns']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2AdvertisersAdvertiserIdCampaignsKey()
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
            (typeof client.v2.advertisers)[':advertiserId']['campaigns']['$post']
          >
        },
      ) =>
        parseResponse(client.v2.advertisers[':advertiserId'].campaigns.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2AdvertisersAdvertiserIdCampaignsCampaignIdKey(
  args: InferRequestType<
    (typeof client.v2.advertisers)[':advertiserId']['campaigns'][':campaignId']['$get']
  >,
) {
  return ['v2', '/v2/advertisers/:advertiserId/campaigns/:campaignId', args] as const
}

export function useGetV2AdvertisersAdvertiserIdCampaignsCampaignId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.advertisers)[':advertiserId']['campaigns'][':campaignId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV2AdvertisersAdvertiserIdCampaignsCampaignIdKey(args)
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
                (typeof client.v2.advertisers)[':advertiserId']['campaigns'][':campaignId']['$get']
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
          client.v2.advertisers[':advertiserId'].campaigns[':campaignId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2AdvertisersAdvertiserIdCampaignsCampaignId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.advertisers)[':advertiserId']['campaigns'][':campaignId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV2AdvertisersAdvertiserIdCampaignsCampaignIdKey(args)
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
                (typeof client.v2.advertisers)[':advertiserId']['campaigns'][':campaignId']['$get']
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
          client.v2.advertisers[':advertiserId'].campaigns[':campaignId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteV2AdvertisersAdvertiserIdCampaignsCampaignIdKey() {
  return ['v2', '/v2/advertisers/:advertiserId/campaigns/:campaignId', 'DELETE'] as const
}

export function useDeleteV2AdvertisersAdvertiserIdCampaignsCampaignId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v2.advertisers)[':advertiserId']['campaigns'][':campaignId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV2AdvertisersAdvertiserIdCampaignsCampaignIdKey()
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
            (typeof client.v2.advertisers)[':advertiserId']['campaigns'][':campaignId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v2.advertisers[':advertiserId'].campaigns[':campaignId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchV2AdvertisersAdvertiserIdCampaignsCampaignIdKey() {
  return ['v2', '/v2/advertisers/:advertiserId/campaigns/:campaignId', 'PATCH'] as const
}

export function usePatchV2AdvertisersAdvertiserIdCampaignsCampaignId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v2.advertisers)[':advertiserId']['campaigns'][':campaignId']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV2AdvertisersAdvertiserIdCampaignsCampaignIdKey()
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
            (typeof client.v2.advertisers)[':advertiserId']['campaigns'][':campaignId']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.v2.advertisers[':advertiserId'].campaigns[':campaignId'].$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV2AdvertisersAdvertiserIdCampaignsCampaignIdTargetingTypesTargetingTypeAssignedTargetingOptionsKey(
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

export function useGetV2AdvertisersAdvertiserIdCampaignsCampaignIdTargetingTypesTargetingTypeAssignedTargetingOptions<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v2.advertisers)[':advertiserId']['campaigns'][':campaignId']['targetingTypes'][':targetingType']['assignedTargetingOptions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV2AdvertisersAdvertiserIdCampaignsCampaignIdTargetingTypesTargetingTypeAssignedTargetingOptionsKey(
            args,
          )
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
                (typeof client.v2.advertisers)[':advertiserId']['campaigns'][':campaignId']['targetingTypes'][':targetingType']['assignedTargetingOptions']['$get']
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
          client.v2.advertisers[':advertiserId'].campaigns[':campaignId'].targetingTypes[
            ':targetingType'
          ].assignedTargetingOptions.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2AdvertisersAdvertiserIdCampaignsCampaignIdTargetingTypesTargetingTypeAssignedTargetingOptions<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v2.advertisers)[':advertiserId']['campaigns'][':campaignId']['targetingTypes'][':targetingType']['assignedTargetingOptions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV2AdvertisersAdvertiserIdCampaignsCampaignIdTargetingTypesTargetingTypeAssignedTargetingOptionsKey(
            args,
          )
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
                (typeof client.v2.advertisers)[':advertiserId']['campaigns'][':campaignId']['targetingTypes'][':targetingType']['assignedTargetingOptions']['$get']
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
          client.v2.advertisers[':advertiserId'].campaigns[':campaignId'].targetingTypes[
            ':targetingType'
          ].assignedTargetingOptions.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV2AdvertisersAdvertiserIdCampaignsCampaignIdTargetingTypesTargetingTypeAssignedTargetingOptionsAssignedTargetingOptionIdKey(
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

export function useGetV2AdvertisersAdvertiserIdCampaignsCampaignIdTargetingTypesTargetingTypeAssignedTargetingOptionsAssignedTargetingOptionId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v2.advertisers)[':advertiserId']['campaigns'][':campaignId']['targetingTypes'][':targetingType']['assignedTargetingOptions'][':assignedTargetingOptionId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV2AdvertisersAdvertiserIdCampaignsCampaignIdTargetingTypesTargetingTypeAssignedTargetingOptionsAssignedTargetingOptionIdKey(
            args,
          )
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
                (typeof client.v2.advertisers)[':advertiserId']['campaigns'][':campaignId']['targetingTypes'][':targetingType']['assignedTargetingOptions'][':assignedTargetingOptionId']['$get']
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
          client.v2.advertisers[':advertiserId'].campaigns[':campaignId'].targetingTypes[
            ':targetingType'
          ].assignedTargetingOptions[':assignedTargetingOptionId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2AdvertisersAdvertiserIdCampaignsCampaignIdTargetingTypesTargetingTypeAssignedTargetingOptionsAssignedTargetingOptionId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v2.advertisers)[':advertiserId']['campaigns'][':campaignId']['targetingTypes'][':targetingType']['assignedTargetingOptions'][':assignedTargetingOptionId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV2AdvertisersAdvertiserIdCampaignsCampaignIdTargetingTypesTargetingTypeAssignedTargetingOptionsAssignedTargetingOptionIdKey(
            args,
          )
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
                (typeof client.v2.advertisers)[':advertiserId']['campaigns'][':campaignId']['targetingTypes'][':targetingType']['assignedTargetingOptions'][':assignedTargetingOptionId']['$get']
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
          client.v2.advertisers[':advertiserId'].campaigns[':campaignId'].targetingTypes[
            ':targetingType'
          ].assignedTargetingOptions[':assignedTargetingOptionId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV2AdvertisersAdvertiserIdCampaignsCampaignIdListAssignedTargetingOptionsKey(
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

export function useGetV2AdvertisersAdvertiserIdCampaignsCampaignIdListAssignedTargetingOptions<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v2.advertisers)[':advertiserId']['campaigns'][':campaignId:listAssignedTargetingOptions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV2AdvertisersAdvertiserIdCampaignsCampaignIdListAssignedTargetingOptionsKey(args)
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
                (typeof client.v2.advertisers)[':advertiserId']['campaigns'][':campaignId:listAssignedTargetingOptions']['$get']
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
          client.v2.advertisers[':advertiserId'].campaigns[
            ':campaignId:listAssignedTargetingOptions'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2AdvertisersAdvertiserIdCampaignsCampaignIdListAssignedTargetingOptions<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v2.advertisers)[':advertiserId']['campaigns'][':campaignId:listAssignedTargetingOptions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV2AdvertisersAdvertiserIdCampaignsCampaignIdListAssignedTargetingOptionsKey(args)
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
                (typeof client.v2.advertisers)[':advertiserId']['campaigns'][':campaignId:listAssignedTargetingOptions']['$get']
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
          client.v2.advertisers[':advertiserId'].campaigns[
            ':campaignId:listAssignedTargetingOptions'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV2AdvertisersAdvertiserIdChannelsKey(
  args: InferRequestType<(typeof client.v2.advertisers)[':advertiserId']['channels']['$get']>,
) {
  return ['v2', '/v2/advertisers/:advertiserId/channels', args] as const
}

export function useGetV2AdvertisersAdvertiserIdChannels<TError = unknown>(
  args: InferRequestType<(typeof client.v2.advertisers)[':advertiserId']['channels']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.advertisers)[':advertiserId']['channels']['$get']>>
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
        ? getGetV2AdvertisersAdvertiserIdChannelsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.advertisers)[':advertiserId']['channels']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.advertisers[':advertiserId'].channels.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2AdvertisersAdvertiserIdChannels<TError = unknown>(
  args: InferRequestType<(typeof client.v2.advertisers)[':advertiserId']['channels']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.advertisers)[':advertiserId']['channels']['$get']>>
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
        ? getGetV2AdvertisersAdvertiserIdChannelsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.advertisers)[':advertiserId']['channels']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.advertisers[':advertiserId'].channels.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2AdvertisersAdvertiserIdChannelsKey() {
  return ['v2', '/v2/advertisers/:advertiserId/channels', 'POST'] as const
}

export function usePostV2AdvertisersAdvertiserIdChannels<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.advertisers)[':advertiserId']['channels']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.advertisers)[':advertiserId']['channels']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2AdvertisersAdvertiserIdChannelsKey()
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
            (typeof client.v2.advertisers)[':advertiserId']['channels']['$post']
          >
        },
      ) => parseResponse(client.v2.advertisers[':advertiserId'].channels.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchV2AdvertisersAdvertiserIdChannelsChannelIdKey() {
  return ['v2', '/v2/advertisers/:advertiserId/channels/:channelId', 'PATCH'] as const
}

export function usePatchV2AdvertisersAdvertiserIdChannelsChannelId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v2.advertisers)[':advertiserId']['channels'][':channelId']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV2AdvertisersAdvertiserIdChannelsChannelIdKey()
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
            (typeof client.v2.advertisers)[':advertiserId']['channels'][':channelId']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.v2.advertisers[':advertiserId'].channels[':channelId'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV2AdvertisersAdvertiserIdChannelsChannelIdSitesKey(
  args: InferRequestType<
    (typeof client.v2.advertisers)[':advertiserId']['channels'][':channelId']['sites']['$get']
  >,
) {
  return ['v2', '/v2/advertisers/:advertiserId/channels/:channelId/sites', args] as const
}

export function useGetV2AdvertisersAdvertiserIdChannelsChannelIdSites<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.advertisers)[':advertiserId']['channels'][':channelId']['sites']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV2AdvertisersAdvertiserIdChannelsChannelIdSitesKey(args)
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
                (typeof client.v2.advertisers)[':advertiserId']['channels'][':channelId']['sites']['$get']
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
          client.v2.advertisers[':advertiserId'].channels[':channelId'].sites.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2AdvertisersAdvertiserIdChannelsChannelIdSites<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.advertisers)[':advertiserId']['channels'][':channelId']['sites']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV2AdvertisersAdvertiserIdChannelsChannelIdSitesKey(args)
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
                (typeof client.v2.advertisers)[':advertiserId']['channels'][':channelId']['sites']['$get']
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
          client.v2.advertisers[':advertiserId'].channels[':channelId'].sites.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteV2AdvertisersAdvertiserIdChannelsChannelIdSitesUrlOrAppIdKey() {
  return [
    'v2',
    '/v2/advertisers/:advertiserId/channels/:channelId/sites/:urlOrAppId',
    'DELETE',
  ] as const
}

export function useDeleteV2AdvertisersAdvertiserIdChannelsChannelIdSitesUrlOrAppId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v2.advertisers)[':advertiserId']['channels'][':channelId']['sites'][':urlOrAppId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteV2AdvertisersAdvertiserIdChannelsChannelIdSitesUrlOrAppIdKey()
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
            (typeof client.v2.advertisers)[':advertiserId']['channels'][':channelId']['sites'][':urlOrAppId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v2.advertisers[':advertiserId'].channels[':channelId'].sites[
            ':urlOrAppId'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV2AdvertisersAdvertiserIdChannelsChannelIdSitesBulkEditKey() {
  return ['v2', '/v2/advertisers/:advertiserId/channels/:channelId/sites:bulkEdit', 'POST'] as const
}

export function usePostV2AdvertisersAdvertiserIdChannelsChannelIdSitesBulkEdit<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v2.advertisers)[':advertiserId']['channels'][':channelId']['sites:bulkEdit']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2AdvertisersAdvertiserIdChannelsChannelIdSitesBulkEditKey()
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
            (typeof client.v2.advertisers)[':advertiserId']['channels'][':channelId']['sites:bulkEdit']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2.advertisers[':advertiserId'].channels[':channelId']['sites:bulkEdit'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV2AdvertisersAdvertiserIdChannelsChannelIdSitesReplaceKey() {
  return ['v2', '/v2/advertisers/:advertiserId/channels/:channelId/sites:replace', 'POST'] as const
}

export function usePostV2AdvertisersAdvertiserIdChannelsChannelIdSitesReplace<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v2.advertisers)[':advertiserId']['channels'][':channelId']['sites:replace']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2AdvertisersAdvertiserIdChannelsChannelIdSitesReplaceKey()
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
            (typeof client.v2.advertisers)[':advertiserId']['channels'][':channelId']['sites:replace']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2.advertisers[':advertiserId'].channels[':channelId']['sites:replace'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV2AdvertisersAdvertiserIdCreativesKey(
  args: InferRequestType<(typeof client.v2.advertisers)[':advertiserId']['creatives']['$get']>,
) {
  return ['v2', '/v2/advertisers/:advertiserId/creatives', args] as const
}

export function useGetV2AdvertisersAdvertiserIdCreatives<TError = unknown>(
  args: InferRequestType<(typeof client.v2.advertisers)[':advertiserId']['creatives']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.advertisers)[':advertiserId']['creatives']['$get']>
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
        ? getGetV2AdvertisersAdvertiserIdCreativesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.advertisers)[':advertiserId']['creatives']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.advertisers[':advertiserId'].creatives.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2AdvertisersAdvertiserIdCreatives<TError = unknown>(
  args: InferRequestType<(typeof client.v2.advertisers)[':advertiserId']['creatives']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.advertisers)[':advertiserId']['creatives']['$get']>
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
        ? getGetV2AdvertisersAdvertiserIdCreativesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.advertisers)[':advertiserId']['creatives']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.advertisers[':advertiserId'].creatives.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2AdvertisersAdvertiserIdCreativesKey() {
  return ['v2', '/v2/advertisers/:advertiserId/creatives', 'POST'] as const
}

export function usePostV2AdvertisersAdvertiserIdCreatives<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.advertisers)[':advertiserId']['creatives']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.advertisers)[':advertiserId']['creatives']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2AdvertisersAdvertiserIdCreativesKey()
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
            (typeof client.v2.advertisers)[':advertiserId']['creatives']['$post']
          >
        },
      ) =>
        parseResponse(client.v2.advertisers[':advertiserId'].creatives.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2AdvertisersAdvertiserIdCreativesCreativeIdKey(
  args: InferRequestType<
    (typeof client.v2.advertisers)[':advertiserId']['creatives'][':creativeId']['$get']
  >,
) {
  return ['v2', '/v2/advertisers/:advertiserId/creatives/:creativeId', args] as const
}

export function useGetV2AdvertisersAdvertiserIdCreativesCreativeId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.advertisers)[':advertiserId']['creatives'][':creativeId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV2AdvertisersAdvertiserIdCreativesCreativeIdKey(args)
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
                (typeof client.v2.advertisers)[':advertiserId']['creatives'][':creativeId']['$get']
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
          client.v2.advertisers[':advertiserId'].creatives[':creativeId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2AdvertisersAdvertiserIdCreativesCreativeId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.advertisers)[':advertiserId']['creatives'][':creativeId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV2AdvertisersAdvertiserIdCreativesCreativeIdKey(args)
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
                (typeof client.v2.advertisers)[':advertiserId']['creatives'][':creativeId']['$get']
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
          client.v2.advertisers[':advertiserId'].creatives[':creativeId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteV2AdvertisersAdvertiserIdCreativesCreativeIdKey() {
  return ['v2', '/v2/advertisers/:advertiserId/creatives/:creativeId', 'DELETE'] as const
}

export function useDeleteV2AdvertisersAdvertiserIdCreativesCreativeId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v2.advertisers)[':advertiserId']['creatives'][':creativeId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV2AdvertisersAdvertiserIdCreativesCreativeIdKey()
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
            (typeof client.v2.advertisers)[':advertiserId']['creatives'][':creativeId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v2.advertisers[':advertiserId'].creatives[':creativeId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchV2AdvertisersAdvertiserIdCreativesCreativeIdKey() {
  return ['v2', '/v2/advertisers/:advertiserId/creatives/:creativeId', 'PATCH'] as const
}

export function usePatchV2AdvertisersAdvertiserIdCreativesCreativeId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v2.advertisers)[':advertiserId']['creatives'][':creativeId']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV2AdvertisersAdvertiserIdCreativesCreativeIdKey()
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
            (typeof client.v2.advertisers)[':advertiserId']['creatives'][':creativeId']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.v2.advertisers[':advertiserId'].creatives[':creativeId'].$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV2AdvertisersAdvertiserIdInsertionOrdersKey(
  args: InferRequestType<
    (typeof client.v2.advertisers)[':advertiserId']['insertionOrders']['$get']
  >,
) {
  return ['v2', '/v2/advertisers/:advertiserId/insertionOrders', args] as const
}

export function useGetV2AdvertisersAdvertiserIdInsertionOrders<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.advertisers)[':advertiserId']['insertionOrders']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.advertisers)[':advertiserId']['insertionOrders']['$get']>
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
        ? getGetV2AdvertisersAdvertiserIdInsertionOrdersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.advertisers)[':advertiserId']['insertionOrders']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2.advertisers[':advertiserId'].insertionOrders.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2AdvertisersAdvertiserIdInsertionOrders<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.advertisers)[':advertiserId']['insertionOrders']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.advertisers)[':advertiserId']['insertionOrders']['$get']>
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
        ? getGetV2AdvertisersAdvertiserIdInsertionOrdersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.advertisers)[':advertiserId']['insertionOrders']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2.advertisers[':advertiserId'].insertionOrders.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV2AdvertisersAdvertiserIdInsertionOrdersKey() {
  return ['v2', '/v2/advertisers/:advertiserId/insertionOrders', 'POST'] as const
}

export function usePostV2AdvertisersAdvertiserIdInsertionOrders<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.v2.advertisers)[':advertiserId']['insertionOrders']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2AdvertisersAdvertiserIdInsertionOrdersKey()
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
            (typeof client.v2.advertisers)[':advertiserId']['insertionOrders']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2.advertisers[':advertiserId'].insertionOrders.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV2AdvertisersAdvertiserIdInsertionOrdersInsertionOrderIdKey(
  args: InferRequestType<
    (typeof client.v2.advertisers)[':advertiserId']['insertionOrders'][':insertionOrderId']['$get']
  >,
) {
  return ['v2', '/v2/advertisers/:advertiserId/insertionOrders/:insertionOrderId', args] as const
}

export function useGetV2AdvertisersAdvertiserIdInsertionOrdersInsertionOrderId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.advertisers)[':advertiserId']['insertionOrders'][':insertionOrderId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV2AdvertisersAdvertiserIdInsertionOrdersInsertionOrderIdKey(args)
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
                (typeof client.v2.advertisers)[':advertiserId']['insertionOrders'][':insertionOrderId']['$get']
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
          client.v2.advertisers[':advertiserId'].insertionOrders[':insertionOrderId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2AdvertisersAdvertiserIdInsertionOrdersInsertionOrderId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v2.advertisers)[':advertiserId']['insertionOrders'][':insertionOrderId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV2AdvertisersAdvertiserIdInsertionOrdersInsertionOrderIdKey(args)
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
                (typeof client.v2.advertisers)[':advertiserId']['insertionOrders'][':insertionOrderId']['$get']
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
          client.v2.advertisers[':advertiserId'].insertionOrders[':insertionOrderId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteV2AdvertisersAdvertiserIdInsertionOrdersInsertionOrderIdKey() {
  return [
    'v2',
    '/v2/advertisers/:advertiserId/insertionOrders/:insertionOrderId',
    'DELETE',
  ] as const
}

export function useDeleteV2AdvertisersAdvertiserIdInsertionOrdersInsertionOrderId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v2.advertisers)[':advertiserId']['insertionOrders'][':insertionOrderId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV2AdvertisersAdvertiserIdInsertionOrdersInsertionOrderIdKey()
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
            (typeof client.v2.advertisers)[':advertiserId']['insertionOrders'][':insertionOrderId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v2.advertisers[':advertiserId'].insertionOrders[':insertionOrderId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchV2AdvertisersAdvertiserIdInsertionOrdersInsertionOrderIdKey() {
  return ['v2', '/v2/advertisers/:advertiserId/insertionOrders/:insertionOrderId', 'PATCH'] as const
}

export function usePatchV2AdvertisersAdvertiserIdInsertionOrdersInsertionOrderId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v2.advertisers)[':advertiserId']['insertionOrders'][':insertionOrderId']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV2AdvertisersAdvertiserIdInsertionOrdersInsertionOrderIdKey()
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
            (typeof client.v2.advertisers)[':advertiserId']['insertionOrders'][':insertionOrderId']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.v2.advertisers[':advertiserId'].insertionOrders[':insertionOrderId'].$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV2AdvertisersAdvertiserIdInsertionOrdersInsertionOrderIdTargetingTypesTargetingTypeAssignedTargetingOptionsKey(
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

export function useGetV2AdvertisersAdvertiserIdInsertionOrdersInsertionOrderIdTargetingTypesTargetingTypeAssignedTargetingOptions<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v2.advertisers)[':advertiserId']['insertionOrders'][':insertionOrderId']['targetingTypes'][':targetingType']['assignedTargetingOptions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV2AdvertisersAdvertiserIdInsertionOrdersInsertionOrderIdTargetingTypesTargetingTypeAssignedTargetingOptionsKey(
            args,
          )
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
                (typeof client.v2.advertisers)[':advertiserId']['insertionOrders'][':insertionOrderId']['targetingTypes'][':targetingType']['assignedTargetingOptions']['$get']
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
          client.v2.advertisers[':advertiserId'].insertionOrders[
            ':insertionOrderId'
          ].targetingTypes[':targetingType'].assignedTargetingOptions.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2AdvertisersAdvertiserIdInsertionOrdersInsertionOrderIdTargetingTypesTargetingTypeAssignedTargetingOptions<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v2.advertisers)[':advertiserId']['insertionOrders'][':insertionOrderId']['targetingTypes'][':targetingType']['assignedTargetingOptions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV2AdvertisersAdvertiserIdInsertionOrdersInsertionOrderIdTargetingTypesTargetingTypeAssignedTargetingOptionsKey(
            args,
          )
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
                (typeof client.v2.advertisers)[':advertiserId']['insertionOrders'][':insertionOrderId']['targetingTypes'][':targetingType']['assignedTargetingOptions']['$get']
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
          client.v2.advertisers[':advertiserId'].insertionOrders[
            ':insertionOrderId'
          ].targetingTypes[':targetingType'].assignedTargetingOptions.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV2AdvertisersAdvertiserIdInsertionOrdersInsertionOrderIdTargetingTypesTargetingTypeAssignedTargetingOptionsKey() {
  return [
    'v2',
    '/v2/advertisers/:advertiserId/insertionOrders/:insertionOrderId/targetingTypes/:targetingType/assignedTargetingOptions',
    'POST',
  ] as const
}

export function usePostV2AdvertisersAdvertiserIdInsertionOrdersInsertionOrderIdTargetingTypesTargetingTypeAssignedTargetingOptions<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v2.advertisers)[':advertiserId']['insertionOrders'][':insertionOrderId']['targetingTypes'][':targetingType']['assignedTargetingOptions']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostV2AdvertisersAdvertiserIdInsertionOrdersInsertionOrderIdTargetingTypesTargetingTypeAssignedTargetingOptionsKey()
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
            (typeof client.v2.advertisers)[':advertiserId']['insertionOrders'][':insertionOrderId']['targetingTypes'][':targetingType']['assignedTargetingOptions']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2.advertisers[':advertiserId'].insertionOrders[
            ':insertionOrderId'
          ].targetingTypes[':targetingType'].assignedTargetingOptions.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV2AdvertisersAdvertiserIdInsertionOrdersInsertionOrderIdTargetingTypesTargetingTypeAssignedTargetingOptionsAssignedTargetingOptionIdKey(
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

export function useGetV2AdvertisersAdvertiserIdInsertionOrdersInsertionOrderIdTargetingTypesTargetingTypeAssignedTargetingOptionsAssignedTargetingOptionId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v2.advertisers)[':advertiserId']['insertionOrders'][':insertionOrderId']['targetingTypes'][':targetingType']['assignedTargetingOptions'][':assignedTargetingOptionId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV2AdvertisersAdvertiserIdInsertionOrdersInsertionOrderIdTargetingTypesTargetingTypeAssignedTargetingOptionsAssignedTargetingOptionIdKey(
            args,
          )
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
                (typeof client.v2.advertisers)[':advertiserId']['insertionOrders'][':insertionOrderId']['targetingTypes'][':targetingType']['assignedTargetingOptions'][':assignedTargetingOptionId']['$get']
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
          client.v2.advertisers[':advertiserId'].insertionOrders[
            ':insertionOrderId'
          ].targetingTypes[':targetingType'].assignedTargetingOptions[
            ':assignedTargetingOptionId'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2AdvertisersAdvertiserIdInsertionOrdersInsertionOrderIdTargetingTypesTargetingTypeAssignedTargetingOptionsAssignedTargetingOptionId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v2.advertisers)[':advertiserId']['insertionOrders'][':insertionOrderId']['targetingTypes'][':targetingType']['assignedTargetingOptions'][':assignedTargetingOptionId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV2AdvertisersAdvertiserIdInsertionOrdersInsertionOrderIdTargetingTypesTargetingTypeAssignedTargetingOptionsAssignedTargetingOptionIdKey(
            args,
          )
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
                (typeof client.v2.advertisers)[':advertiserId']['insertionOrders'][':insertionOrderId']['targetingTypes'][':targetingType']['assignedTargetingOptions'][':assignedTargetingOptionId']['$get']
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
          client.v2.advertisers[':advertiserId'].insertionOrders[
            ':insertionOrderId'
          ].targetingTypes[':targetingType'].assignedTargetingOptions[
            ':assignedTargetingOptionId'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteV2AdvertisersAdvertiserIdInsertionOrdersInsertionOrderIdTargetingTypesTargetingTypeAssignedTargetingOptionsAssignedTargetingOptionIdKey() {
  return [
    'v2',
    '/v2/advertisers/:advertiserId/insertionOrders/:insertionOrderId/targetingTypes/:targetingType/assignedTargetingOptions/:assignedTargetingOptionId',
    'DELETE',
  ] as const
}

export function useDeleteV2AdvertisersAdvertiserIdInsertionOrdersInsertionOrderIdTargetingTypesTargetingTypeAssignedTargetingOptionsAssignedTargetingOptionId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v2.advertisers)[':advertiserId']['insertionOrders'][':insertionOrderId']['targetingTypes'][':targetingType']['assignedTargetingOptions'][':assignedTargetingOptionId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getDeleteV2AdvertisersAdvertiserIdInsertionOrdersInsertionOrderIdTargetingTypesTargetingTypeAssignedTargetingOptionsAssignedTargetingOptionIdKey()
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
            (typeof client.v2.advertisers)[':advertiserId']['insertionOrders'][':insertionOrderId']['targetingTypes'][':targetingType']['assignedTargetingOptions'][':assignedTargetingOptionId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v2.advertisers[':advertiserId'].insertionOrders[
            ':insertionOrderId'
          ].targetingTypes[':targetingType'].assignedTargetingOptions[
            ':assignedTargetingOptionId'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV2AdvertisersAdvertiserIdInsertionOrdersInsertionOrderIdListAssignedTargetingOptionsKey(
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

export function useGetV2AdvertisersAdvertiserIdInsertionOrdersInsertionOrderIdListAssignedTargetingOptions<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v2.advertisers)[':advertiserId']['insertionOrders'][':insertionOrderId:listAssignedTargetingOptions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV2AdvertisersAdvertiserIdInsertionOrdersInsertionOrderIdListAssignedTargetingOptionsKey(
            args,
          )
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
                (typeof client.v2.advertisers)[':advertiserId']['insertionOrders'][':insertionOrderId:listAssignedTargetingOptions']['$get']
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
          client.v2.advertisers[':advertiserId'].insertionOrders[
            ':insertionOrderId:listAssignedTargetingOptions'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2AdvertisersAdvertiserIdInsertionOrdersInsertionOrderIdListAssignedTargetingOptions<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v2.advertisers)[':advertiserId']['insertionOrders'][':insertionOrderId:listAssignedTargetingOptions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV2AdvertisersAdvertiserIdInsertionOrdersInsertionOrderIdListAssignedTargetingOptionsKey(
            args,
          )
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
                (typeof client.v2.advertisers)[':advertiserId']['insertionOrders'][':insertionOrderId:listAssignedTargetingOptions']['$get']
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
          client.v2.advertisers[':advertiserId'].insertionOrders[
            ':insertionOrderId:listAssignedTargetingOptions'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV2AdvertisersAdvertiserIdInvoicesKey(
  args: InferRequestType<(typeof client.v2.advertisers)[':advertiserId']['invoices']['$get']>,
) {
  return ['v2', '/v2/advertisers/:advertiserId/invoices', args] as const
}

export function useGetV2AdvertisersAdvertiserIdInvoices<TError = unknown>(
  args: InferRequestType<(typeof client.v2.advertisers)[':advertiserId']['invoices']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.advertisers)[':advertiserId']['invoices']['$get']>>
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
        ? getGetV2AdvertisersAdvertiserIdInvoicesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.advertisers)[':advertiserId']['invoices']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.advertisers[':advertiserId'].invoices.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2AdvertisersAdvertiserIdInvoices<TError = unknown>(
  args: InferRequestType<(typeof client.v2.advertisers)[':advertiserId']['invoices']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.advertisers)[':advertiserId']['invoices']['$get']>>
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
        ? getGetV2AdvertisersAdvertiserIdInvoicesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.advertisers)[':advertiserId']['invoices']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.advertisers[':advertiserId'].invoices.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2AdvertisersAdvertiserIdInvoicesLookupInvoiceCurrencyKey(
  args: InferRequestType<
    (typeof client.v2.advertisers)[':advertiserId']['invoices:lookupInvoiceCurrency']['$get']
  >,
) {
  return ['v2', '/v2/advertisers/:advertiserId/invoices:lookupInvoiceCurrency', args] as const
}

export function useGetV2AdvertisersAdvertiserIdInvoicesLookupInvoiceCurrency<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.advertisers)[':advertiserId']['invoices:lookupInvoiceCurrency']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV2AdvertisersAdvertiserIdInvoicesLookupInvoiceCurrencyKey(args)
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
                (typeof client.v2.advertisers)[':advertiserId']['invoices:lookupInvoiceCurrency']['$get']
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
          client.v2.advertisers[':advertiserId']['invoices:lookupInvoiceCurrency'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2AdvertisersAdvertiserIdInvoicesLookupInvoiceCurrency<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v2.advertisers)[':advertiserId']['invoices:lookupInvoiceCurrency']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV2AdvertisersAdvertiserIdInvoicesLookupInvoiceCurrencyKey(args)
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
                (typeof client.v2.advertisers)[':advertiserId']['invoices:lookupInvoiceCurrency']['$get']
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
          client.v2.advertisers[':advertiserId']['invoices:lookupInvoiceCurrency'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV2AdvertisersAdvertiserIdLineItemsKey(
  args: InferRequestType<(typeof client.v2.advertisers)[':advertiserId']['lineItems']['$get']>,
) {
  return ['v2', '/v2/advertisers/:advertiserId/lineItems', args] as const
}

export function useGetV2AdvertisersAdvertiserIdLineItems<TError = unknown>(
  args: InferRequestType<(typeof client.v2.advertisers)[':advertiserId']['lineItems']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.advertisers)[':advertiserId']['lineItems']['$get']>
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
        ? getGetV2AdvertisersAdvertiserIdLineItemsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.advertisers)[':advertiserId']['lineItems']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.advertisers[':advertiserId'].lineItems.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2AdvertisersAdvertiserIdLineItems<TError = unknown>(
  args: InferRequestType<(typeof client.v2.advertisers)[':advertiserId']['lineItems']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.advertisers)[':advertiserId']['lineItems']['$get']>
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
        ? getGetV2AdvertisersAdvertiserIdLineItemsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.advertisers)[':advertiserId']['lineItems']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.advertisers[':advertiserId'].lineItems.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2AdvertisersAdvertiserIdLineItemsKey() {
  return ['v2', '/v2/advertisers/:advertiserId/lineItems', 'POST'] as const
}

export function usePostV2AdvertisersAdvertiserIdLineItems<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.advertisers)[':advertiserId']['lineItems']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.advertisers)[':advertiserId']['lineItems']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2AdvertisersAdvertiserIdLineItemsKey()
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
            (typeof client.v2.advertisers)[':advertiserId']['lineItems']['$post']
          >
        },
      ) =>
        parseResponse(client.v2.advertisers[':advertiserId'].lineItems.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2AdvertisersAdvertiserIdLineItemsLineItemIdKey(
  args: InferRequestType<
    (typeof client.v2.advertisers)[':advertiserId']['lineItems'][':lineItemId']['$get']
  >,
) {
  return ['v2', '/v2/advertisers/:advertiserId/lineItems/:lineItemId', args] as const
}

export function useGetV2AdvertisersAdvertiserIdLineItemsLineItemId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.advertisers)[':advertiserId']['lineItems'][':lineItemId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV2AdvertisersAdvertiserIdLineItemsLineItemIdKey(args)
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
                (typeof client.v2.advertisers)[':advertiserId']['lineItems'][':lineItemId']['$get']
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
          client.v2.advertisers[':advertiserId'].lineItems[':lineItemId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2AdvertisersAdvertiserIdLineItemsLineItemId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.advertisers)[':advertiserId']['lineItems'][':lineItemId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV2AdvertisersAdvertiserIdLineItemsLineItemIdKey(args)
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
                (typeof client.v2.advertisers)[':advertiserId']['lineItems'][':lineItemId']['$get']
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
          client.v2.advertisers[':advertiserId'].lineItems[':lineItemId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteV2AdvertisersAdvertiserIdLineItemsLineItemIdKey() {
  return ['v2', '/v2/advertisers/:advertiserId/lineItems/:lineItemId', 'DELETE'] as const
}

export function useDeleteV2AdvertisersAdvertiserIdLineItemsLineItemId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v2.advertisers)[':advertiserId']['lineItems'][':lineItemId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV2AdvertisersAdvertiserIdLineItemsLineItemIdKey()
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
            (typeof client.v2.advertisers)[':advertiserId']['lineItems'][':lineItemId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v2.advertisers[':advertiserId'].lineItems[':lineItemId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchV2AdvertisersAdvertiserIdLineItemsLineItemIdKey() {
  return ['v2', '/v2/advertisers/:advertiserId/lineItems/:lineItemId', 'PATCH'] as const
}

export function usePatchV2AdvertisersAdvertiserIdLineItemsLineItemId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v2.advertisers)[':advertiserId']['lineItems'][':lineItemId']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV2AdvertisersAdvertiserIdLineItemsLineItemIdKey()
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
            (typeof client.v2.advertisers)[':advertiserId']['lineItems'][':lineItemId']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.v2.advertisers[':advertiserId'].lineItems[':lineItemId'].$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV2AdvertisersAdvertiserIdLineItemsLineItemIdTargetingTypesTargetingTypeAssignedTargetingOptionsKey(
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

export function useGetV2AdvertisersAdvertiserIdLineItemsLineItemIdTargetingTypesTargetingTypeAssignedTargetingOptions<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v2.advertisers)[':advertiserId']['lineItems'][':lineItemId']['targetingTypes'][':targetingType']['assignedTargetingOptions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV2AdvertisersAdvertiserIdLineItemsLineItemIdTargetingTypesTargetingTypeAssignedTargetingOptionsKey(
            args,
          )
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
                (typeof client.v2.advertisers)[':advertiserId']['lineItems'][':lineItemId']['targetingTypes'][':targetingType']['assignedTargetingOptions']['$get']
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
          client.v2.advertisers[':advertiserId'].lineItems[':lineItemId'].targetingTypes[
            ':targetingType'
          ].assignedTargetingOptions.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2AdvertisersAdvertiserIdLineItemsLineItemIdTargetingTypesTargetingTypeAssignedTargetingOptions<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v2.advertisers)[':advertiserId']['lineItems'][':lineItemId']['targetingTypes'][':targetingType']['assignedTargetingOptions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV2AdvertisersAdvertiserIdLineItemsLineItemIdTargetingTypesTargetingTypeAssignedTargetingOptionsKey(
            args,
          )
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
                (typeof client.v2.advertisers)[':advertiserId']['lineItems'][':lineItemId']['targetingTypes'][':targetingType']['assignedTargetingOptions']['$get']
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
          client.v2.advertisers[':advertiserId'].lineItems[':lineItemId'].targetingTypes[
            ':targetingType'
          ].assignedTargetingOptions.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV2AdvertisersAdvertiserIdLineItemsLineItemIdTargetingTypesTargetingTypeAssignedTargetingOptionsKey() {
  return [
    'v2',
    '/v2/advertisers/:advertiserId/lineItems/:lineItemId/targetingTypes/:targetingType/assignedTargetingOptions',
    'POST',
  ] as const
}

export function usePostV2AdvertisersAdvertiserIdLineItemsLineItemIdTargetingTypesTargetingTypeAssignedTargetingOptions<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v2.advertisers)[':advertiserId']['lineItems'][':lineItemId']['targetingTypes'][':targetingType']['assignedTargetingOptions']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostV2AdvertisersAdvertiserIdLineItemsLineItemIdTargetingTypesTargetingTypeAssignedTargetingOptionsKey()
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
            (typeof client.v2.advertisers)[':advertiserId']['lineItems'][':lineItemId']['targetingTypes'][':targetingType']['assignedTargetingOptions']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2.advertisers[':advertiserId'].lineItems[':lineItemId'].targetingTypes[
            ':targetingType'
          ].assignedTargetingOptions.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV2AdvertisersAdvertiserIdLineItemsLineItemIdTargetingTypesTargetingTypeAssignedTargetingOptionsAssignedTargetingOptionIdKey(
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

export function useGetV2AdvertisersAdvertiserIdLineItemsLineItemIdTargetingTypesTargetingTypeAssignedTargetingOptionsAssignedTargetingOptionId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v2.advertisers)[':advertiserId']['lineItems'][':lineItemId']['targetingTypes'][':targetingType']['assignedTargetingOptions'][':assignedTargetingOptionId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV2AdvertisersAdvertiserIdLineItemsLineItemIdTargetingTypesTargetingTypeAssignedTargetingOptionsAssignedTargetingOptionIdKey(
            args,
          )
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
                (typeof client.v2.advertisers)[':advertiserId']['lineItems'][':lineItemId']['targetingTypes'][':targetingType']['assignedTargetingOptions'][':assignedTargetingOptionId']['$get']
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
          client.v2.advertisers[':advertiserId'].lineItems[':lineItemId'].targetingTypes[
            ':targetingType'
          ].assignedTargetingOptions[':assignedTargetingOptionId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2AdvertisersAdvertiserIdLineItemsLineItemIdTargetingTypesTargetingTypeAssignedTargetingOptionsAssignedTargetingOptionId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v2.advertisers)[':advertiserId']['lineItems'][':lineItemId']['targetingTypes'][':targetingType']['assignedTargetingOptions'][':assignedTargetingOptionId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV2AdvertisersAdvertiserIdLineItemsLineItemIdTargetingTypesTargetingTypeAssignedTargetingOptionsAssignedTargetingOptionIdKey(
            args,
          )
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
                (typeof client.v2.advertisers)[':advertiserId']['lineItems'][':lineItemId']['targetingTypes'][':targetingType']['assignedTargetingOptions'][':assignedTargetingOptionId']['$get']
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
          client.v2.advertisers[':advertiserId'].lineItems[':lineItemId'].targetingTypes[
            ':targetingType'
          ].assignedTargetingOptions[':assignedTargetingOptionId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteV2AdvertisersAdvertiserIdLineItemsLineItemIdTargetingTypesTargetingTypeAssignedTargetingOptionsAssignedTargetingOptionIdKey() {
  return [
    'v2',
    '/v2/advertisers/:advertiserId/lineItems/:lineItemId/targetingTypes/:targetingType/assignedTargetingOptions/:assignedTargetingOptionId',
    'DELETE',
  ] as const
}

export function useDeleteV2AdvertisersAdvertiserIdLineItemsLineItemIdTargetingTypesTargetingTypeAssignedTargetingOptionsAssignedTargetingOptionId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v2.advertisers)[':advertiserId']['lineItems'][':lineItemId']['targetingTypes'][':targetingType']['assignedTargetingOptions'][':assignedTargetingOptionId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getDeleteV2AdvertisersAdvertiserIdLineItemsLineItemIdTargetingTypesTargetingTypeAssignedTargetingOptionsAssignedTargetingOptionIdKey()
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
            (typeof client.v2.advertisers)[':advertiserId']['lineItems'][':lineItemId']['targetingTypes'][':targetingType']['assignedTargetingOptions'][':assignedTargetingOptionId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v2.advertisers[':advertiserId'].lineItems[':lineItemId'].targetingTypes[
            ':targetingType'
          ].assignedTargetingOptions[':assignedTargetingOptionId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV2AdvertisersAdvertiserIdLineItemsLineItemIdDuplicateKey() {
  return ['v2', '/v2/advertisers/:advertiserId/lineItems/:lineItemId:duplicate', 'POST'] as const
}

export function usePostV2AdvertisersAdvertiserIdLineItemsLineItemIdDuplicate<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v2.advertisers)[':advertiserId']['lineItems'][':lineItemId:duplicate']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2AdvertisersAdvertiserIdLineItemsLineItemIdDuplicateKey()
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
            (typeof client.v2.advertisers)[':advertiserId']['lineItems'][':lineItemId:duplicate']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2.advertisers[':advertiserId'].lineItems[':lineItemId:duplicate'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV2AdvertisersAdvertiserIdLineItemsBulkEditAssignedTargetingOptionsKey() {
  return [
    'v2',
    '/v2/advertisers/:advertiserId/lineItems:bulkEditAssignedTargetingOptions',
    'POST',
  ] as const
}

export function usePostV2AdvertisersAdvertiserIdLineItemsBulkEditAssignedTargetingOptions<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v2.advertisers)[':advertiserId']['lineItems:bulkEditAssignedTargetingOptions']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostV2AdvertisersAdvertiserIdLineItemsBulkEditAssignedTargetingOptionsKey()
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
            (typeof client.v2.advertisers)[':advertiserId']['lineItems:bulkEditAssignedTargetingOptions']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2.advertisers[':advertiserId'][
            'lineItems:bulkEditAssignedTargetingOptions'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV2AdvertisersAdvertiserIdLineItemsBulkListAssignedTargetingOptionsKey(
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

export function useGetV2AdvertisersAdvertiserIdLineItemsBulkListAssignedTargetingOptions<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v2.advertisers)[':advertiserId']['lineItems:bulkListAssignedTargetingOptions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV2AdvertisersAdvertiserIdLineItemsBulkListAssignedTargetingOptionsKey(args)
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
                (typeof client.v2.advertisers)[':advertiserId']['lineItems:bulkListAssignedTargetingOptions']['$get']
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
          client.v2.advertisers[':advertiserId']['lineItems:bulkListAssignedTargetingOptions'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2AdvertisersAdvertiserIdLineItemsBulkListAssignedTargetingOptions<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v2.advertisers)[':advertiserId']['lineItems:bulkListAssignedTargetingOptions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV2AdvertisersAdvertiserIdLineItemsBulkListAssignedTargetingOptionsKey(args)
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
                (typeof client.v2.advertisers)[':advertiserId']['lineItems:bulkListAssignedTargetingOptions']['$get']
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
          client.v2.advertisers[':advertiserId']['lineItems:bulkListAssignedTargetingOptions'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV2AdvertisersAdvertiserIdLineItemsBulkUpdateKey() {
  return ['v2', '/v2/advertisers/:advertiserId/lineItems:bulkUpdate', 'POST'] as const
}

export function usePostV2AdvertisersAdvertiserIdLineItemsBulkUpdate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v2.advertisers)[':advertiserId']['lineItems:bulkUpdate']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2AdvertisersAdvertiserIdLineItemsBulkUpdateKey()
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
            (typeof client.v2.advertisers)[':advertiserId']['lineItems:bulkUpdate']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2.advertisers[':advertiserId']['lineItems:bulkUpdate'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV2AdvertisersAdvertiserIdLineItemsGenerateDefaultKey() {
  return ['v2', '/v2/advertisers/:advertiserId/lineItems:generateDefault', 'POST'] as const
}

export function usePostV2AdvertisersAdvertiserIdLineItemsGenerateDefault<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v2.advertisers)[':advertiserId']['lineItems:generateDefault']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2AdvertisersAdvertiserIdLineItemsGenerateDefaultKey()
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
            (typeof client.v2.advertisers)[':advertiserId']['lineItems:generateDefault']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2.advertisers[':advertiserId']['lineItems:generateDefault'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV2AdvertisersAdvertiserIdLocationListsKey(
  args: InferRequestType<(typeof client.v2.advertisers)[':advertiserId']['locationLists']['$get']>,
) {
  return ['v2', '/v2/advertisers/:advertiserId/locationLists', args] as const
}

export function useGetV2AdvertisersAdvertiserIdLocationLists<TError = unknown>(
  args: InferRequestType<(typeof client.v2.advertisers)[':advertiserId']['locationLists']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.advertisers)[':advertiserId']['locationLists']['$get']>
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
        ? getGetV2AdvertisersAdvertiserIdLocationListsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.advertisers)[':advertiserId']['locationLists']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2.advertisers[':advertiserId'].locationLists.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2AdvertisersAdvertiserIdLocationLists<TError = unknown>(
  args: InferRequestType<(typeof client.v2.advertisers)[':advertiserId']['locationLists']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.advertisers)[':advertiserId']['locationLists']['$get']>
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
        ? getGetV2AdvertisersAdvertiserIdLocationListsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.advertisers)[':advertiserId']['locationLists']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2.advertisers[':advertiserId'].locationLists.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV2AdvertisersAdvertiserIdLocationListsKey() {
  return ['v2', '/v2/advertisers/:advertiserId/locationLists', 'POST'] as const
}

export function usePostV2AdvertisersAdvertiserIdLocationLists<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.v2.advertisers)[':advertiserId']['locationLists']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2AdvertisersAdvertiserIdLocationListsKey()
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
            (typeof client.v2.advertisers)[':advertiserId']['locationLists']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2.advertisers[':advertiserId'].locationLists.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchV2AdvertisersAdvertiserIdLocationListsLocationListIdKey() {
  return ['v2', '/v2/advertisers/:advertiserId/locationLists/:locationListId', 'PATCH'] as const
}

export function usePatchV2AdvertisersAdvertiserIdLocationListsLocationListId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v2.advertisers)[':advertiserId']['locationLists'][':locationListId']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV2AdvertisersAdvertiserIdLocationListsLocationListIdKey()
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
            (typeof client.v2.advertisers)[':advertiserId']['locationLists'][':locationListId']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.v2.advertisers[':advertiserId'].locationLists[':locationListId'].$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV2AdvertisersAdvertiserIdLocationListsLocationListIdAssignedLocationsKey(
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

export function useGetV2AdvertisersAdvertiserIdLocationListsLocationListIdAssignedLocations<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v2.advertisers)[':advertiserId']['locationLists'][':locationListId']['assignedLocations']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV2AdvertisersAdvertiserIdLocationListsLocationListIdAssignedLocationsKey(args)
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
                (typeof client.v2.advertisers)[':advertiserId']['locationLists'][':locationListId']['assignedLocations']['$get']
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
          client.v2.advertisers[':advertiserId'].locationLists[
            ':locationListId'
          ].assignedLocations.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2AdvertisersAdvertiserIdLocationListsLocationListIdAssignedLocations<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v2.advertisers)[':advertiserId']['locationLists'][':locationListId']['assignedLocations']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV2AdvertisersAdvertiserIdLocationListsLocationListIdAssignedLocationsKey(args)
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
                (typeof client.v2.advertisers)[':advertiserId']['locationLists'][':locationListId']['assignedLocations']['$get']
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
          client.v2.advertisers[':advertiserId'].locationLists[
            ':locationListId'
          ].assignedLocations.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV2AdvertisersAdvertiserIdLocationListsLocationListIdAssignedLocationsKey() {
  return [
    'v2',
    '/v2/advertisers/:advertiserId/locationLists/:locationListId/assignedLocations',
    'POST',
  ] as const
}

export function usePostV2AdvertisersAdvertiserIdLocationListsLocationListIdAssignedLocations<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v2.advertisers)[':advertiserId']['locationLists'][':locationListId']['assignedLocations']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostV2AdvertisersAdvertiserIdLocationListsLocationListIdAssignedLocationsKey()
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
            (typeof client.v2.advertisers)[':advertiserId']['locationLists'][':locationListId']['assignedLocations']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2.advertisers[':advertiserId'].locationLists[
            ':locationListId'
          ].assignedLocations.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV2AdvertisersAdvertiserIdLocationListsLocationListIdAssignedLocationsAssignedLocationIdKey() {
  return [
    'v2',
    '/v2/advertisers/:advertiserId/locationLists/:locationListId/assignedLocations/:assignedLocationId',
    'DELETE',
  ] as const
}

export function useDeleteV2AdvertisersAdvertiserIdLocationListsLocationListIdAssignedLocationsAssignedLocationId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v2.advertisers)[':advertiserId']['locationLists'][':locationListId']['assignedLocations'][':assignedLocationId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getDeleteV2AdvertisersAdvertiserIdLocationListsLocationListIdAssignedLocationsAssignedLocationIdKey()
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
            (typeof client.v2.advertisers)[':advertiserId']['locationLists'][':locationListId']['assignedLocations'][':assignedLocationId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v2.advertisers[':advertiserId'].locationLists[':locationListId'].assignedLocations[
            ':assignedLocationId'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV2AdvertisersAdvertiserIdLocationListsLocationListIdAssignedLocationsBulkEditKey() {
  return [
    'v2',
    '/v2/advertisers/:advertiserId/locationLists/:locationListId/assignedLocations:bulkEdit',
    'POST',
  ] as const
}

export function usePostV2AdvertisersAdvertiserIdLocationListsLocationListIdAssignedLocationsBulkEdit<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v2.advertisers)[':advertiserId']['locationLists'][':locationListId']['assignedLocations:bulkEdit']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostV2AdvertisersAdvertiserIdLocationListsLocationListIdAssignedLocationsBulkEditKey()
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
            (typeof client.v2.advertisers)[':advertiserId']['locationLists'][':locationListId']['assignedLocations:bulkEdit']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2.advertisers[':advertiserId'].locationLists[':locationListId'][
            'assignedLocations:bulkEdit'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV2AdvertisersAdvertiserIdManualTriggersKey(
  args: InferRequestType<(typeof client.v2.advertisers)[':advertiserId']['manualTriggers']['$get']>,
) {
  return ['v2', '/v2/advertisers/:advertiserId/manualTriggers', args] as const
}

export function useGetV2AdvertisersAdvertiserIdManualTriggers<TError = unknown>(
  args: InferRequestType<(typeof client.v2.advertisers)[':advertiserId']['manualTriggers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.advertisers)[':advertiserId']['manualTriggers']['$get']>
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
        ? getGetV2AdvertisersAdvertiserIdManualTriggersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.advertisers)[':advertiserId']['manualTriggers']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2.advertisers[':advertiserId'].manualTriggers.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2AdvertisersAdvertiserIdManualTriggers<TError = unknown>(
  args: InferRequestType<(typeof client.v2.advertisers)[':advertiserId']['manualTriggers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.advertisers)[':advertiserId']['manualTriggers']['$get']>
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
        ? getGetV2AdvertisersAdvertiserIdManualTriggersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.advertisers)[':advertiserId']['manualTriggers']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2.advertisers[':advertiserId'].manualTriggers.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV2AdvertisersAdvertiserIdManualTriggersKey() {
  return ['v2', '/v2/advertisers/:advertiserId/manualTriggers', 'POST'] as const
}

export function usePostV2AdvertisersAdvertiserIdManualTriggers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.v2.advertisers)[':advertiserId']['manualTriggers']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2AdvertisersAdvertiserIdManualTriggersKey()
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
            (typeof client.v2.advertisers)[':advertiserId']['manualTriggers']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2.advertisers[':advertiserId'].manualTriggers.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV2AdvertisersAdvertiserIdManualTriggersTriggerIdKey(
  args: InferRequestType<
    (typeof client.v2.advertisers)[':advertiserId']['manualTriggers'][':triggerId']['$get']
  >,
) {
  return ['v2', '/v2/advertisers/:advertiserId/manualTriggers/:triggerId', args] as const
}

export function useGetV2AdvertisersAdvertiserIdManualTriggersTriggerId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.advertisers)[':advertiserId']['manualTriggers'][':triggerId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV2AdvertisersAdvertiserIdManualTriggersTriggerIdKey(args)
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
                (typeof client.v2.advertisers)[':advertiserId']['manualTriggers'][':triggerId']['$get']
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
          client.v2.advertisers[':advertiserId'].manualTriggers[':triggerId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2AdvertisersAdvertiserIdManualTriggersTriggerId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.advertisers)[':advertiserId']['manualTriggers'][':triggerId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV2AdvertisersAdvertiserIdManualTriggersTriggerIdKey(args)
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
                (typeof client.v2.advertisers)[':advertiserId']['manualTriggers'][':triggerId']['$get']
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
          client.v2.advertisers[':advertiserId'].manualTriggers[':triggerId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPatchV2AdvertisersAdvertiserIdManualTriggersTriggerIdKey() {
  return ['v2', '/v2/advertisers/:advertiserId/manualTriggers/:triggerId', 'PATCH'] as const
}

export function usePatchV2AdvertisersAdvertiserIdManualTriggersTriggerId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v2.advertisers)[':advertiserId']['manualTriggers'][':triggerId']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV2AdvertisersAdvertiserIdManualTriggersTriggerIdKey()
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
            (typeof client.v2.advertisers)[':advertiserId']['manualTriggers'][':triggerId']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.v2.advertisers[':advertiserId'].manualTriggers[':triggerId'].$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV2AdvertisersAdvertiserIdManualTriggersTriggerIdActivateKey() {
  return ['v2', '/v2/advertisers/:advertiserId/manualTriggers/:triggerId:activate', 'POST'] as const
}

export function usePostV2AdvertisersAdvertiserIdManualTriggersTriggerIdActivate<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v2.advertisers)[':advertiserId']['manualTriggers'][':triggerId:activate']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2AdvertisersAdvertiserIdManualTriggersTriggerIdActivateKey()
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
            (typeof client.v2.advertisers)[':advertiserId']['manualTriggers'][':triggerId:activate']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2.advertisers[':advertiserId'].manualTriggers[':triggerId:activate'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV2AdvertisersAdvertiserIdManualTriggersTriggerIdDeactivateKey() {
  return [
    'v2',
    '/v2/advertisers/:advertiserId/manualTriggers/:triggerId:deactivate',
    'POST',
  ] as const
}

export function usePostV2AdvertisersAdvertiserIdManualTriggersTriggerIdDeactivate<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v2.advertisers)[':advertiserId']['manualTriggers'][':triggerId:deactivate']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2AdvertisersAdvertiserIdManualTriggersTriggerIdDeactivateKey()
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
            (typeof client.v2.advertisers)[':advertiserId']['manualTriggers'][':triggerId:deactivate']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2.advertisers[':advertiserId'].manualTriggers[':triggerId:deactivate'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV2AdvertisersAdvertiserIdNegativeKeywordListsKey(
  args: InferRequestType<
    (typeof client.v2.advertisers)[':advertiserId']['negativeKeywordLists']['$get']
  >,
) {
  return ['v2', '/v2/advertisers/:advertiserId/negativeKeywordLists', args] as const
}

export function useGetV2AdvertisersAdvertiserIdNegativeKeywordLists<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.advertisers)[':advertiserId']['negativeKeywordLists']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV2AdvertisersAdvertiserIdNegativeKeywordListsKey(args)
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
                (typeof client.v2.advertisers)[':advertiserId']['negativeKeywordLists']['$get']
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
          client.v2.advertisers[':advertiserId'].negativeKeywordLists.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2AdvertisersAdvertiserIdNegativeKeywordLists<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.advertisers)[':advertiserId']['negativeKeywordLists']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV2AdvertisersAdvertiserIdNegativeKeywordListsKey(args)
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
                (typeof client.v2.advertisers)[':advertiserId']['negativeKeywordLists']['$get']
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
          client.v2.advertisers[':advertiserId'].negativeKeywordLists.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV2AdvertisersAdvertiserIdNegativeKeywordListsKey() {
  return ['v2', '/v2/advertisers/:advertiserId/negativeKeywordLists', 'POST'] as const
}

export function usePostV2AdvertisersAdvertiserIdNegativeKeywordLists<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v2.advertisers)[':advertiserId']['negativeKeywordLists']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2AdvertisersAdvertiserIdNegativeKeywordListsKey()
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
            (typeof client.v2.advertisers)[':advertiserId']['negativeKeywordLists']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2.advertisers[':advertiserId'].negativeKeywordLists.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchV2AdvertisersAdvertiserIdNegativeKeywordListsNegativeKeywordListIdKey() {
  return [
    'v2',
    '/v2/advertisers/:advertiserId/negativeKeywordLists/:negativeKeywordListId',
    'PATCH',
  ] as const
}

export function usePatchV2AdvertisersAdvertiserIdNegativeKeywordListsNegativeKeywordListId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v2.advertisers)[':advertiserId']['negativeKeywordLists'][':negativeKeywordListId']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPatchV2AdvertisersAdvertiserIdNegativeKeywordListsNegativeKeywordListIdKey()
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
            (typeof client.v2.advertisers)[':advertiserId']['negativeKeywordLists'][':negativeKeywordListId']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.v2.advertisers[':advertiserId'].negativeKeywordLists[
            ':negativeKeywordListId'
          ].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV2AdvertisersAdvertiserIdNegativeKeywordListsNegativeKeywordListIdNegativeKeywordsKey(
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

export function useGetV2AdvertisersAdvertiserIdNegativeKeywordListsNegativeKeywordListIdNegativeKeywords<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v2.advertisers)[':advertiserId']['negativeKeywordLists'][':negativeKeywordListId']['negativeKeywords']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV2AdvertisersAdvertiserIdNegativeKeywordListsNegativeKeywordListIdNegativeKeywordsKey(
            args,
          )
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
                (typeof client.v2.advertisers)[':advertiserId']['negativeKeywordLists'][':negativeKeywordListId']['negativeKeywords']['$get']
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
          client.v2.advertisers[':advertiserId'].negativeKeywordLists[
            ':negativeKeywordListId'
          ].negativeKeywords.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2AdvertisersAdvertiserIdNegativeKeywordListsNegativeKeywordListIdNegativeKeywords<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v2.advertisers)[':advertiserId']['negativeKeywordLists'][':negativeKeywordListId']['negativeKeywords']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV2AdvertisersAdvertiserIdNegativeKeywordListsNegativeKeywordListIdNegativeKeywordsKey(
            args,
          )
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
                (typeof client.v2.advertisers)[':advertiserId']['negativeKeywordLists'][':negativeKeywordListId']['negativeKeywords']['$get']
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
          client.v2.advertisers[':advertiserId'].negativeKeywordLists[
            ':negativeKeywordListId'
          ].negativeKeywords.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteV2AdvertisersAdvertiserIdNegativeKeywordListsNegativeKeywordListIdNegativeKeywordsKeywordValueKey() {
  return [
    'v2',
    '/v2/advertisers/:advertiserId/negativeKeywordLists/:negativeKeywordListId/negativeKeywords/:keywordValue',
    'DELETE',
  ] as const
}

export function useDeleteV2AdvertisersAdvertiserIdNegativeKeywordListsNegativeKeywordListIdNegativeKeywordsKeywordValue<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v2.advertisers)[':advertiserId']['negativeKeywordLists'][':negativeKeywordListId']['negativeKeywords'][':keywordValue']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getDeleteV2AdvertisersAdvertiserIdNegativeKeywordListsNegativeKeywordListIdNegativeKeywordsKeywordValueKey()
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
            (typeof client.v2.advertisers)[':advertiserId']['negativeKeywordLists'][':negativeKeywordListId']['negativeKeywords'][':keywordValue']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v2.advertisers[':advertiserId'].negativeKeywordLists[
            ':negativeKeywordListId'
          ].negativeKeywords[':keywordValue'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV2AdvertisersAdvertiserIdNegativeKeywordListsNegativeKeywordListIdNegativeKeywordsBulkEditKey() {
  return [
    'v2',
    '/v2/advertisers/:advertiserId/negativeKeywordLists/:negativeKeywordListId/negativeKeywords:bulkEdit',
    'POST',
  ] as const
}

export function usePostV2AdvertisersAdvertiserIdNegativeKeywordListsNegativeKeywordListIdNegativeKeywordsBulkEdit<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v2.advertisers)[':advertiserId']['negativeKeywordLists'][':negativeKeywordListId']['negativeKeywords:bulkEdit']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostV2AdvertisersAdvertiserIdNegativeKeywordListsNegativeKeywordListIdNegativeKeywordsBulkEditKey()
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
            (typeof client.v2.advertisers)[':advertiserId']['negativeKeywordLists'][':negativeKeywordListId']['negativeKeywords:bulkEdit']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2.advertisers[':advertiserId'].negativeKeywordLists[':negativeKeywordListId'][
            'negativeKeywords:bulkEdit'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV2AdvertisersAdvertiserIdNegativeKeywordListsNegativeKeywordListIdNegativeKeywordsReplaceKey() {
  return [
    'v2',
    '/v2/advertisers/:advertiserId/negativeKeywordLists/:negativeKeywordListId/negativeKeywords:replace',
    'POST',
  ] as const
}

export function usePostV2AdvertisersAdvertiserIdNegativeKeywordListsNegativeKeywordListIdNegativeKeywordsReplace<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v2.advertisers)[':advertiserId']['negativeKeywordLists'][':negativeKeywordListId']['negativeKeywords:replace']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostV2AdvertisersAdvertiserIdNegativeKeywordListsNegativeKeywordListIdNegativeKeywordsReplaceKey()
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
            (typeof client.v2.advertisers)[':advertiserId']['negativeKeywordLists'][':negativeKeywordListId']['negativeKeywords:replace']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2.advertisers[':advertiserId'].negativeKeywordLists[':negativeKeywordListId'][
            'negativeKeywords:replace'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV2AdvertisersAdvertiserIdTargetingTypesTargetingTypeAssignedTargetingOptionsKey(
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

export function useGetV2AdvertisersAdvertiserIdTargetingTypesTargetingTypeAssignedTargetingOptions<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v2.advertisers)[':advertiserId']['targetingTypes'][':targetingType']['assignedTargetingOptions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV2AdvertisersAdvertiserIdTargetingTypesTargetingTypeAssignedTargetingOptionsKey(
            args,
          )
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
                (typeof client.v2.advertisers)[':advertiserId']['targetingTypes'][':targetingType']['assignedTargetingOptions']['$get']
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
          client.v2.advertisers[':advertiserId'].targetingTypes[
            ':targetingType'
          ].assignedTargetingOptions.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2AdvertisersAdvertiserIdTargetingTypesTargetingTypeAssignedTargetingOptions<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v2.advertisers)[':advertiserId']['targetingTypes'][':targetingType']['assignedTargetingOptions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV2AdvertisersAdvertiserIdTargetingTypesTargetingTypeAssignedTargetingOptionsKey(
            args,
          )
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
                (typeof client.v2.advertisers)[':advertiserId']['targetingTypes'][':targetingType']['assignedTargetingOptions']['$get']
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
          client.v2.advertisers[':advertiserId'].targetingTypes[
            ':targetingType'
          ].assignedTargetingOptions.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV2AdvertisersAdvertiserIdTargetingTypesTargetingTypeAssignedTargetingOptionsKey() {
  return [
    'v2',
    '/v2/advertisers/:advertiserId/targetingTypes/:targetingType/assignedTargetingOptions',
    'POST',
  ] as const
}

export function usePostV2AdvertisersAdvertiserIdTargetingTypesTargetingTypeAssignedTargetingOptions<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v2.advertisers)[':advertiserId']['targetingTypes'][':targetingType']['assignedTargetingOptions']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostV2AdvertisersAdvertiserIdTargetingTypesTargetingTypeAssignedTargetingOptionsKey()
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
            (typeof client.v2.advertisers)[':advertiserId']['targetingTypes'][':targetingType']['assignedTargetingOptions']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2.advertisers[':advertiserId'].targetingTypes[
            ':targetingType'
          ].assignedTargetingOptions.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV2AdvertisersAdvertiserIdTargetingTypesTargetingTypeAssignedTargetingOptionsAssignedTargetingOptionIdKey(
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

export function useGetV2AdvertisersAdvertiserIdTargetingTypesTargetingTypeAssignedTargetingOptionsAssignedTargetingOptionId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v2.advertisers)[':advertiserId']['targetingTypes'][':targetingType']['assignedTargetingOptions'][':assignedTargetingOptionId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV2AdvertisersAdvertiserIdTargetingTypesTargetingTypeAssignedTargetingOptionsAssignedTargetingOptionIdKey(
            args,
          )
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
                (typeof client.v2.advertisers)[':advertiserId']['targetingTypes'][':targetingType']['assignedTargetingOptions'][':assignedTargetingOptionId']['$get']
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
          client.v2.advertisers[':advertiserId'].targetingTypes[
            ':targetingType'
          ].assignedTargetingOptions[':assignedTargetingOptionId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2AdvertisersAdvertiserIdTargetingTypesTargetingTypeAssignedTargetingOptionsAssignedTargetingOptionId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v2.advertisers)[':advertiserId']['targetingTypes'][':targetingType']['assignedTargetingOptions'][':assignedTargetingOptionId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV2AdvertisersAdvertiserIdTargetingTypesTargetingTypeAssignedTargetingOptionsAssignedTargetingOptionIdKey(
            args,
          )
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
                (typeof client.v2.advertisers)[':advertiserId']['targetingTypes'][':targetingType']['assignedTargetingOptions'][':assignedTargetingOptionId']['$get']
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
          client.v2.advertisers[':advertiserId'].targetingTypes[
            ':targetingType'
          ].assignedTargetingOptions[':assignedTargetingOptionId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteV2AdvertisersAdvertiserIdTargetingTypesTargetingTypeAssignedTargetingOptionsAssignedTargetingOptionIdKey() {
  return [
    'v2',
    '/v2/advertisers/:advertiserId/targetingTypes/:targetingType/assignedTargetingOptions/:assignedTargetingOptionId',
    'DELETE',
  ] as const
}

export function useDeleteV2AdvertisersAdvertiserIdTargetingTypesTargetingTypeAssignedTargetingOptionsAssignedTargetingOptionId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v2.advertisers)[':advertiserId']['targetingTypes'][':targetingType']['assignedTargetingOptions'][':assignedTargetingOptionId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getDeleteV2AdvertisersAdvertiserIdTargetingTypesTargetingTypeAssignedTargetingOptionsAssignedTargetingOptionIdKey()
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
            (typeof client.v2.advertisers)[':advertiserId']['targetingTypes'][':targetingType']['assignedTargetingOptions'][':assignedTargetingOptionId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v2.advertisers[':advertiserId'].targetingTypes[
            ':targetingType'
          ].assignedTargetingOptions[':assignedTargetingOptionId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV2AdvertisersAdvertiserIdYoutubeAdGroupAdsKey(
  args: InferRequestType<
    (typeof client.v2.advertisers)[':advertiserId']['youtubeAdGroupAds']['$get']
  >,
) {
  return ['v2', '/v2/advertisers/:advertiserId/youtubeAdGroupAds', args] as const
}

export function useGetV2AdvertisersAdvertiserIdYoutubeAdGroupAds<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.advertisers)[':advertiserId']['youtubeAdGroupAds']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV2AdvertisersAdvertiserIdYoutubeAdGroupAdsKey(args)
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
                (typeof client.v2.advertisers)[':advertiserId']['youtubeAdGroupAds']['$get']
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
          client.v2.advertisers[':advertiserId'].youtubeAdGroupAds.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2AdvertisersAdvertiserIdYoutubeAdGroupAds<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.advertisers)[':advertiserId']['youtubeAdGroupAds']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV2AdvertisersAdvertiserIdYoutubeAdGroupAdsKey(args)
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
                (typeof client.v2.advertisers)[':advertiserId']['youtubeAdGroupAds']['$get']
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
          client.v2.advertisers[':advertiserId'].youtubeAdGroupAds.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV2AdvertisersAdvertiserIdYoutubeAdGroupAdsYoutubeAdGroupAdIdKey(
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

export function useGetV2AdvertisersAdvertiserIdYoutubeAdGroupAdsYoutubeAdGroupAdId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v2.advertisers)[':advertiserId']['youtubeAdGroupAds'][':youtubeAdGroupAdId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV2AdvertisersAdvertiserIdYoutubeAdGroupAdsYoutubeAdGroupAdIdKey(args)
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
                (typeof client.v2.advertisers)[':advertiserId']['youtubeAdGroupAds'][':youtubeAdGroupAdId']['$get']
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
          client.v2.advertisers[':advertiserId'].youtubeAdGroupAds[':youtubeAdGroupAdId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2AdvertisersAdvertiserIdYoutubeAdGroupAdsYoutubeAdGroupAdId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v2.advertisers)[':advertiserId']['youtubeAdGroupAds'][':youtubeAdGroupAdId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV2AdvertisersAdvertiserIdYoutubeAdGroupAdsYoutubeAdGroupAdIdKey(args)
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
                (typeof client.v2.advertisers)[':advertiserId']['youtubeAdGroupAds'][':youtubeAdGroupAdId']['$get']
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
          client.v2.advertisers[':advertiserId'].youtubeAdGroupAds[':youtubeAdGroupAdId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV2AdvertisersAdvertiserIdYoutubeAdGroupsKey(
  args: InferRequestType<
    (typeof client.v2.advertisers)[':advertiserId']['youtubeAdGroups']['$get']
  >,
) {
  return ['v2', '/v2/advertisers/:advertiserId/youtubeAdGroups', args] as const
}

export function useGetV2AdvertisersAdvertiserIdYoutubeAdGroups<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.advertisers)[':advertiserId']['youtubeAdGroups']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.advertisers)[':advertiserId']['youtubeAdGroups']['$get']>
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
        ? getGetV2AdvertisersAdvertiserIdYoutubeAdGroupsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.advertisers)[':advertiserId']['youtubeAdGroups']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2.advertisers[':advertiserId'].youtubeAdGroups.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2AdvertisersAdvertiserIdYoutubeAdGroups<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.advertisers)[':advertiserId']['youtubeAdGroups']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.advertisers)[':advertiserId']['youtubeAdGroups']['$get']>
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
        ? getGetV2AdvertisersAdvertiserIdYoutubeAdGroupsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.advertisers)[':advertiserId']['youtubeAdGroups']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2.advertisers[':advertiserId'].youtubeAdGroups.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV2AdvertisersAdvertiserIdYoutubeAdGroupsYoutubeAdGroupIdKey(
  args: InferRequestType<
    (typeof client.v2.advertisers)[':advertiserId']['youtubeAdGroups'][':youtubeAdGroupId']['$get']
  >,
) {
  return ['v2', '/v2/advertisers/:advertiserId/youtubeAdGroups/:youtubeAdGroupId', args] as const
}

export function useGetV2AdvertisersAdvertiserIdYoutubeAdGroupsYoutubeAdGroupId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.advertisers)[':advertiserId']['youtubeAdGroups'][':youtubeAdGroupId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV2AdvertisersAdvertiserIdYoutubeAdGroupsYoutubeAdGroupIdKey(args)
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
                (typeof client.v2.advertisers)[':advertiserId']['youtubeAdGroups'][':youtubeAdGroupId']['$get']
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
          client.v2.advertisers[':advertiserId'].youtubeAdGroups[':youtubeAdGroupId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2AdvertisersAdvertiserIdYoutubeAdGroupsYoutubeAdGroupId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v2.advertisers)[':advertiserId']['youtubeAdGroups'][':youtubeAdGroupId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV2AdvertisersAdvertiserIdYoutubeAdGroupsYoutubeAdGroupIdKey(args)
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
                (typeof client.v2.advertisers)[':advertiserId']['youtubeAdGroups'][':youtubeAdGroupId']['$get']
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
          client.v2.advertisers[':advertiserId'].youtubeAdGroups[':youtubeAdGroupId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV2AdvertisersAdvertiserIdYoutubeAdGroupsYoutubeAdGroupIdTargetingTypesTargetingTypeAssignedTargetingOptionsKey(
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

export function useGetV2AdvertisersAdvertiserIdYoutubeAdGroupsYoutubeAdGroupIdTargetingTypesTargetingTypeAssignedTargetingOptions<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v2.advertisers)[':advertiserId']['youtubeAdGroups'][':youtubeAdGroupId']['targetingTypes'][':targetingType']['assignedTargetingOptions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV2AdvertisersAdvertiserIdYoutubeAdGroupsYoutubeAdGroupIdTargetingTypesTargetingTypeAssignedTargetingOptionsKey(
            args,
          )
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
                (typeof client.v2.advertisers)[':advertiserId']['youtubeAdGroups'][':youtubeAdGroupId']['targetingTypes'][':targetingType']['assignedTargetingOptions']['$get']
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
          client.v2.advertisers[':advertiserId'].youtubeAdGroups[
            ':youtubeAdGroupId'
          ].targetingTypes[':targetingType'].assignedTargetingOptions.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2AdvertisersAdvertiserIdYoutubeAdGroupsYoutubeAdGroupIdTargetingTypesTargetingTypeAssignedTargetingOptions<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v2.advertisers)[':advertiserId']['youtubeAdGroups'][':youtubeAdGroupId']['targetingTypes'][':targetingType']['assignedTargetingOptions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV2AdvertisersAdvertiserIdYoutubeAdGroupsYoutubeAdGroupIdTargetingTypesTargetingTypeAssignedTargetingOptionsKey(
            args,
          )
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
                (typeof client.v2.advertisers)[':advertiserId']['youtubeAdGroups'][':youtubeAdGroupId']['targetingTypes'][':targetingType']['assignedTargetingOptions']['$get']
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
          client.v2.advertisers[':advertiserId'].youtubeAdGroups[
            ':youtubeAdGroupId'
          ].targetingTypes[':targetingType'].assignedTargetingOptions.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV2AdvertisersAdvertiserIdYoutubeAdGroupsYoutubeAdGroupIdTargetingTypesTargetingTypeAssignedTargetingOptionsAssignedTargetingOptionIdKey(
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

export function useGetV2AdvertisersAdvertiserIdYoutubeAdGroupsYoutubeAdGroupIdTargetingTypesTargetingTypeAssignedTargetingOptionsAssignedTargetingOptionId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v2.advertisers)[':advertiserId']['youtubeAdGroups'][':youtubeAdGroupId']['targetingTypes'][':targetingType']['assignedTargetingOptions'][':assignedTargetingOptionId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV2AdvertisersAdvertiserIdYoutubeAdGroupsYoutubeAdGroupIdTargetingTypesTargetingTypeAssignedTargetingOptionsAssignedTargetingOptionIdKey(
            args,
          )
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
                (typeof client.v2.advertisers)[':advertiserId']['youtubeAdGroups'][':youtubeAdGroupId']['targetingTypes'][':targetingType']['assignedTargetingOptions'][':assignedTargetingOptionId']['$get']
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
          client.v2.advertisers[':advertiserId'].youtubeAdGroups[
            ':youtubeAdGroupId'
          ].targetingTypes[':targetingType'].assignedTargetingOptions[
            ':assignedTargetingOptionId'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2AdvertisersAdvertiserIdYoutubeAdGroupsYoutubeAdGroupIdTargetingTypesTargetingTypeAssignedTargetingOptionsAssignedTargetingOptionId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v2.advertisers)[':advertiserId']['youtubeAdGroups'][':youtubeAdGroupId']['targetingTypes'][':targetingType']['assignedTargetingOptions'][':assignedTargetingOptionId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV2AdvertisersAdvertiserIdYoutubeAdGroupsYoutubeAdGroupIdTargetingTypesTargetingTypeAssignedTargetingOptionsAssignedTargetingOptionIdKey(
            args,
          )
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
                (typeof client.v2.advertisers)[':advertiserId']['youtubeAdGroups'][':youtubeAdGroupId']['targetingTypes'][':targetingType']['assignedTargetingOptions'][':assignedTargetingOptionId']['$get']
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
          client.v2.advertisers[':advertiserId'].youtubeAdGroups[
            ':youtubeAdGroupId'
          ].targetingTypes[':targetingType'].assignedTargetingOptions[
            ':assignedTargetingOptionId'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV2AdvertisersAdvertiserIdYoutubeAdGroupsBulkListAdGroupAssignedTargetingOptionsKey(
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

export function useGetV2AdvertisersAdvertiserIdYoutubeAdGroupsBulkListAdGroupAssignedTargetingOptions<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v2.advertisers)[':advertiserId']['youtubeAdGroups:bulkListAdGroupAssignedTargetingOptions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV2AdvertisersAdvertiserIdYoutubeAdGroupsBulkListAdGroupAssignedTargetingOptionsKey(
            args,
          )
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
                (typeof client.v2.advertisers)[':advertiserId']['youtubeAdGroups:bulkListAdGroupAssignedTargetingOptions']['$get']
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
          client.v2.advertisers[':advertiserId'][
            'youtubeAdGroups:bulkListAdGroupAssignedTargetingOptions'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2AdvertisersAdvertiserIdYoutubeAdGroupsBulkListAdGroupAssignedTargetingOptions<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v2.advertisers)[':advertiserId']['youtubeAdGroups:bulkListAdGroupAssignedTargetingOptions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV2AdvertisersAdvertiserIdYoutubeAdGroupsBulkListAdGroupAssignedTargetingOptionsKey(
            args,
          )
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
                (typeof client.v2.advertisers)[':advertiserId']['youtubeAdGroups:bulkListAdGroupAssignedTargetingOptions']['$get']
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
          client.v2.advertisers[':advertiserId'][
            'youtubeAdGroups:bulkListAdGroupAssignedTargetingOptions'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV2AdvertisersAdvertiserIdAuditKey(
  args: InferRequestType<(typeof client.v2.advertisers)[':advertiserId:audit']['$get']>,
) {
  return ['v2', '/v2/advertisers/:advertiserId:audit', args] as const
}

export function useGetV2AdvertisersAdvertiserIdAudit<TError = unknown>(
  args: InferRequestType<(typeof client.v2.advertisers)[':advertiserId:audit']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.advertisers)[':advertiserId:audit']['$get']>>
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
        ? getGetV2AdvertisersAdvertiserIdAuditKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.advertisers)[':advertiserId:audit']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.advertisers[':advertiserId:audit'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2AdvertisersAdvertiserIdAudit<TError = unknown>(
  args: InferRequestType<(typeof client.v2.advertisers)[':advertiserId:audit']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.advertisers)[':advertiserId:audit']['$get']>>
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
        ? getGetV2AdvertisersAdvertiserIdAuditKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.advertisers)[':advertiserId:audit']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.advertisers[':advertiserId:audit'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2AdvertisersAdvertiserIdEditAssignedTargetingOptionsKey() {
  return ['v2', '/v2/advertisers/:advertiserId:editAssignedTargetingOptions', 'POST'] as const
}

export function usePostV2AdvertisersAdvertiserIdEditAssignedTargetingOptions<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v2.advertisers)[':advertiserId:editAssignedTargetingOptions']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2AdvertisersAdvertiserIdEditAssignedTargetingOptionsKey()
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
            (typeof client.v2.advertisers)[':advertiserId:editAssignedTargetingOptions']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2.advertisers[':advertiserId:editAssignedTargetingOptions'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV2AdvertisersAdvertiserIdListAssignedTargetingOptionsKey(
  args: InferRequestType<
    (typeof client.v2.advertisers)[':advertiserId:listAssignedTargetingOptions']['$get']
  >,
) {
  return ['v2', '/v2/advertisers/:advertiserId:listAssignedTargetingOptions', args] as const
}

export function useGetV2AdvertisersAdvertiserIdListAssignedTargetingOptions<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.advertisers)[':advertiserId:listAssignedTargetingOptions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV2AdvertisersAdvertiserIdListAssignedTargetingOptionsKey(args)
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
                (typeof client.v2.advertisers)[':advertiserId:listAssignedTargetingOptions']['$get']
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
          client.v2.advertisers[':advertiserId:listAssignedTargetingOptions'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2AdvertisersAdvertiserIdListAssignedTargetingOptions<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v2.advertisers)[':advertiserId:listAssignedTargetingOptions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV2AdvertisersAdvertiserIdListAssignedTargetingOptionsKey(args)
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
                (typeof client.v2.advertisers)[':advertiserId:listAssignedTargetingOptions']['$get']
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
          client.v2.advertisers[':advertiserId:listAssignedTargetingOptions'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV2CombinedAudiencesKey(
  args: InferRequestType<typeof client.v2.combinedAudiences.$get>,
) {
  return ['v2', '/v2/combinedAudiences', args] as const
}

export function useGetV2CombinedAudiences<TError = unknown>(
  args: InferRequestType<typeof client.v2.combinedAudiences.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.combinedAudiences.$get>>>
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
        ? getGetV2CombinedAudiencesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.combinedAudiences.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.combinedAudiences.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2CombinedAudiences<TError = unknown>(
  args: InferRequestType<typeof client.v2.combinedAudiences.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.combinedAudiences.$get>>>
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
        ? getGetV2CombinedAudiencesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.combinedAudiences.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.combinedAudiences.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2CombinedAudiencesCombinedAudienceIdKey(
  args: InferRequestType<(typeof client.v2.combinedAudiences)[':combinedAudienceId']['$get']>,
) {
  return ['v2', '/v2/combinedAudiences/:combinedAudienceId', args] as const
}

export function useGetV2CombinedAudiencesCombinedAudienceId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.combinedAudiences)[':combinedAudienceId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.combinedAudiences)[':combinedAudienceId']['$get']>>
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
        ? getGetV2CombinedAudiencesCombinedAudienceIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.combinedAudiences)[':combinedAudienceId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.combinedAudiences[':combinedAudienceId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2CombinedAudiencesCombinedAudienceId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.combinedAudiences)[':combinedAudienceId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.combinedAudiences)[':combinedAudienceId']['$get']>>
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
        ? getGetV2CombinedAudiencesCombinedAudienceIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.combinedAudiences)[':combinedAudienceId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.combinedAudiences[':combinedAudienceId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2CustomBiddingAlgorithmsKey(
  args: InferRequestType<typeof client.v2.customBiddingAlgorithms.$get>,
) {
  return ['v2', '/v2/customBiddingAlgorithms', args] as const
}

export function useGetV2CustomBiddingAlgorithms<TError = unknown>(
  args: InferRequestType<typeof client.v2.customBiddingAlgorithms.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.customBiddingAlgorithms.$get>>>
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
        ? getGetV2CustomBiddingAlgorithmsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.customBiddingAlgorithms.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.customBiddingAlgorithms.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2CustomBiddingAlgorithms<TError = unknown>(
  args: InferRequestType<typeof client.v2.customBiddingAlgorithms.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.customBiddingAlgorithms.$get>>>
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
        ? getGetV2CustomBiddingAlgorithmsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.customBiddingAlgorithms.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.customBiddingAlgorithms.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2CustomBiddingAlgorithmsKey() {
  return ['v2', '/v2/customBiddingAlgorithms', 'POST'] as const
}

export function usePostV2CustomBiddingAlgorithms<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.customBiddingAlgorithms.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v2.customBiddingAlgorithms.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2CustomBiddingAlgorithmsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v2.customBiddingAlgorithms.$post> },
      ) => parseResponse(client.v2.customBiddingAlgorithms.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2CustomBiddingAlgorithmsCustomBiddingAlgorithmIdKey(
  args: InferRequestType<
    (typeof client.v2.customBiddingAlgorithms)[':customBiddingAlgorithmId']['$get']
  >,
) {
  return ['v2', '/v2/customBiddingAlgorithms/:customBiddingAlgorithmId', args] as const
}

export function useGetV2CustomBiddingAlgorithmsCustomBiddingAlgorithmId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.customBiddingAlgorithms)[':customBiddingAlgorithmId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV2CustomBiddingAlgorithmsCustomBiddingAlgorithmIdKey(args)
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
                (typeof client.v2.customBiddingAlgorithms)[':customBiddingAlgorithmId']['$get']
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
          client.v2.customBiddingAlgorithms[':customBiddingAlgorithmId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2CustomBiddingAlgorithmsCustomBiddingAlgorithmId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.customBiddingAlgorithms)[':customBiddingAlgorithmId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV2CustomBiddingAlgorithmsCustomBiddingAlgorithmIdKey(args)
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
                (typeof client.v2.customBiddingAlgorithms)[':customBiddingAlgorithmId']['$get']
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
          client.v2.customBiddingAlgorithms[':customBiddingAlgorithmId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPatchV2CustomBiddingAlgorithmsCustomBiddingAlgorithmIdKey() {
  return ['v2', '/v2/customBiddingAlgorithms/:customBiddingAlgorithmId', 'PATCH'] as const
}

export function usePatchV2CustomBiddingAlgorithmsCustomBiddingAlgorithmId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v2.customBiddingAlgorithms)[':customBiddingAlgorithmId']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV2CustomBiddingAlgorithmsCustomBiddingAlgorithmIdKey()
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
            (typeof client.v2.customBiddingAlgorithms)[':customBiddingAlgorithmId']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.v2.customBiddingAlgorithms[':customBiddingAlgorithmId'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV2CustomBiddingAlgorithmsCustomBiddingAlgorithmIdScriptsKey(
  args: InferRequestType<
    (typeof client.v2.customBiddingAlgorithms)[':customBiddingAlgorithmId']['scripts']['$get']
  >,
) {
  return ['v2', '/v2/customBiddingAlgorithms/:customBiddingAlgorithmId/scripts', args] as const
}

export function useGetV2CustomBiddingAlgorithmsCustomBiddingAlgorithmIdScripts<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.customBiddingAlgorithms)[':customBiddingAlgorithmId']['scripts']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV2CustomBiddingAlgorithmsCustomBiddingAlgorithmIdScriptsKey(args)
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
                (typeof client.v2.customBiddingAlgorithms)[':customBiddingAlgorithmId']['scripts']['$get']
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
          client.v2.customBiddingAlgorithms[':customBiddingAlgorithmId'].scripts.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2CustomBiddingAlgorithmsCustomBiddingAlgorithmIdScripts<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v2.customBiddingAlgorithms)[':customBiddingAlgorithmId']['scripts']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV2CustomBiddingAlgorithmsCustomBiddingAlgorithmIdScriptsKey(args)
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
                (typeof client.v2.customBiddingAlgorithms)[':customBiddingAlgorithmId']['scripts']['$get']
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
          client.v2.customBiddingAlgorithms[':customBiddingAlgorithmId'].scripts.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV2CustomBiddingAlgorithmsCustomBiddingAlgorithmIdScriptsKey() {
  return ['v2', '/v2/customBiddingAlgorithms/:customBiddingAlgorithmId/scripts', 'POST'] as const
}

export function usePostV2CustomBiddingAlgorithmsCustomBiddingAlgorithmIdScripts<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v2.customBiddingAlgorithms)[':customBiddingAlgorithmId']['scripts']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2CustomBiddingAlgorithmsCustomBiddingAlgorithmIdScriptsKey()
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
            (typeof client.v2.customBiddingAlgorithms)[':customBiddingAlgorithmId']['scripts']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2.customBiddingAlgorithms[':customBiddingAlgorithmId'].scripts.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV2CustomBiddingAlgorithmsCustomBiddingAlgorithmIdScriptsCustomBiddingScriptIdKey(
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

export function useGetV2CustomBiddingAlgorithmsCustomBiddingAlgorithmIdScriptsCustomBiddingScriptId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v2.customBiddingAlgorithms)[':customBiddingAlgorithmId']['scripts'][':customBiddingScriptId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV2CustomBiddingAlgorithmsCustomBiddingAlgorithmIdScriptsCustomBiddingScriptIdKey(
            args,
          )
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
                (typeof client.v2.customBiddingAlgorithms)[':customBiddingAlgorithmId']['scripts'][':customBiddingScriptId']['$get']
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
          client.v2.customBiddingAlgorithms[':customBiddingAlgorithmId'].scripts[
            ':customBiddingScriptId'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2CustomBiddingAlgorithmsCustomBiddingAlgorithmIdScriptsCustomBiddingScriptId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v2.customBiddingAlgorithms)[':customBiddingAlgorithmId']['scripts'][':customBiddingScriptId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV2CustomBiddingAlgorithmsCustomBiddingAlgorithmIdScriptsCustomBiddingScriptIdKey(
            args,
          )
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
                (typeof client.v2.customBiddingAlgorithms)[':customBiddingAlgorithmId']['scripts'][':customBiddingScriptId']['$get']
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
          client.v2.customBiddingAlgorithms[':customBiddingAlgorithmId'].scripts[
            ':customBiddingScriptId'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV2CustomBiddingAlgorithmsCustomBiddingAlgorithmIdUploadScriptKey(
  args: InferRequestType<
    (typeof client.v2.customBiddingAlgorithms)[':customBiddingAlgorithmId:uploadScript']['$get']
  >,
) {
  return ['v2', '/v2/customBiddingAlgorithms/:customBiddingAlgorithmId:uploadScript', args] as const
}

export function useGetV2CustomBiddingAlgorithmsCustomBiddingAlgorithmIdUploadScript<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v2.customBiddingAlgorithms)[':customBiddingAlgorithmId:uploadScript']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV2CustomBiddingAlgorithmsCustomBiddingAlgorithmIdUploadScriptKey(args)
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
                (typeof client.v2.customBiddingAlgorithms)[':customBiddingAlgorithmId:uploadScript']['$get']
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
          client.v2.customBiddingAlgorithms[':customBiddingAlgorithmId:uploadScript'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2CustomBiddingAlgorithmsCustomBiddingAlgorithmIdUploadScript<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v2.customBiddingAlgorithms)[':customBiddingAlgorithmId:uploadScript']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV2CustomBiddingAlgorithmsCustomBiddingAlgorithmIdUploadScriptKey(args)
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
                (typeof client.v2.customBiddingAlgorithms)[':customBiddingAlgorithmId:uploadScript']['$get']
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
          client.v2.customBiddingAlgorithms[':customBiddingAlgorithmId:uploadScript'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV2CustomListsKey(args: InferRequestType<typeof client.v2.customLists.$get>) {
  return ['v2', '/v2/customLists', args] as const
}

export function useGetV2CustomLists<TError = unknown>(
  args: InferRequestType<typeof client.v2.customLists.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.customLists.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2CustomListsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.customLists.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.customLists.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2CustomLists<TError = unknown>(
  args: InferRequestType<typeof client.v2.customLists.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.customLists.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2CustomListsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.customLists.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.customLists.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2CustomListsCustomListIdKey(
  args: InferRequestType<(typeof client.v2.customLists)[':customListId']['$get']>,
) {
  return ['v2', '/v2/customLists/:customListId', args] as const
}

export function useGetV2CustomListsCustomListId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.customLists)[':customListId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.customLists)[':customListId']['$get']>>
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
        ? getGetV2CustomListsCustomListIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.customLists)[':customListId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.customLists[':customListId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2CustomListsCustomListId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.customLists)[':customListId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.customLists)[':customListId']['$get']>>
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
        ? getGetV2CustomListsCustomListIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.customLists)[':customListId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.customLists[':customListId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2FirstAndThirdPartyAudiencesKey(
  args: InferRequestType<typeof client.v2.firstAndThirdPartyAudiences.$get>,
) {
  return ['v2', '/v2/firstAndThirdPartyAudiences', args] as const
}

export function useGetV2FirstAndThirdPartyAudiences<TError = unknown>(
  args: InferRequestType<typeof client.v2.firstAndThirdPartyAudiences.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v2.firstAndThirdPartyAudiences.$get>>
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
        ? getGetV2FirstAndThirdPartyAudiencesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v2.firstAndThirdPartyAudiences.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.firstAndThirdPartyAudiences.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2FirstAndThirdPartyAudiences<TError = unknown>(
  args: InferRequestType<typeof client.v2.firstAndThirdPartyAudiences.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v2.firstAndThirdPartyAudiences.$get>>
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
        ? getGetV2FirstAndThirdPartyAudiencesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v2.firstAndThirdPartyAudiences.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.firstAndThirdPartyAudiences.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2FirstAndThirdPartyAudiencesKey() {
  return ['v2', '/v2/firstAndThirdPartyAudiences', 'POST'] as const
}

export function usePostV2FirstAndThirdPartyAudiences<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v2.firstAndThirdPartyAudiences.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v2.firstAndThirdPartyAudiences.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2FirstAndThirdPartyAudiencesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v2.firstAndThirdPartyAudiences.$post> },
      ) => parseResponse(client.v2.firstAndThirdPartyAudiences.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2FirstAndThirdPartyAudiencesFirstAndThirdPartyAudienceIdKey(
  args: InferRequestType<
    (typeof client.v2.firstAndThirdPartyAudiences)[':firstAndThirdPartyAudienceId']['$get']
  >,
) {
  return ['v2', '/v2/firstAndThirdPartyAudiences/:firstAndThirdPartyAudienceId', args] as const
}

export function useGetV2FirstAndThirdPartyAudiencesFirstAndThirdPartyAudienceId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.firstAndThirdPartyAudiences)[':firstAndThirdPartyAudienceId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV2FirstAndThirdPartyAudiencesFirstAndThirdPartyAudienceIdKey(args)
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
                (typeof client.v2.firstAndThirdPartyAudiences)[':firstAndThirdPartyAudienceId']['$get']
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
          client.v2.firstAndThirdPartyAudiences[':firstAndThirdPartyAudienceId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2FirstAndThirdPartyAudiencesFirstAndThirdPartyAudienceId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v2.firstAndThirdPartyAudiences)[':firstAndThirdPartyAudienceId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV2FirstAndThirdPartyAudiencesFirstAndThirdPartyAudienceIdKey(args)
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
                (typeof client.v2.firstAndThirdPartyAudiences)[':firstAndThirdPartyAudienceId']['$get']
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
          client.v2.firstAndThirdPartyAudiences[':firstAndThirdPartyAudienceId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPatchV2FirstAndThirdPartyAudiencesFirstAndThirdPartyAudienceIdKey() {
  return ['v2', '/v2/firstAndThirdPartyAudiences/:firstAndThirdPartyAudienceId', 'PATCH'] as const
}

export function usePatchV2FirstAndThirdPartyAudiencesFirstAndThirdPartyAudienceId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v2.firstAndThirdPartyAudiences)[':firstAndThirdPartyAudienceId']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV2FirstAndThirdPartyAudiencesFirstAndThirdPartyAudienceIdKey()
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
            (typeof client.v2.firstAndThirdPartyAudiences)[':firstAndThirdPartyAudienceId']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.v2.firstAndThirdPartyAudiences[':firstAndThirdPartyAudienceId'].$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV2FirstAndThirdPartyAudiencesFirstAndThirdPartyAudienceIdEditCustomerMatchMembersKey() {
  return [
    'v2',
    '/v2/firstAndThirdPartyAudiences/:firstAndThirdPartyAudienceId:editCustomerMatchMembers',
    'POST',
  ] as const
}

export function usePostV2FirstAndThirdPartyAudiencesFirstAndThirdPartyAudienceIdEditCustomerMatchMembers<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v2.firstAndThirdPartyAudiences)[':firstAndThirdPartyAudienceId:editCustomerMatchMembers']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostV2FirstAndThirdPartyAudiencesFirstAndThirdPartyAudienceIdEditCustomerMatchMembersKey()
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
            (typeof client.v2.firstAndThirdPartyAudiences)[':firstAndThirdPartyAudienceId:editCustomerMatchMembers']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2.firstAndThirdPartyAudiences[
            ':firstAndThirdPartyAudienceId:editCustomerMatchMembers'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV2FloodlightGroupsFloodlightGroupIdKey(
  args: InferRequestType<(typeof client.v2.floodlightGroups)[':floodlightGroupId']['$get']>,
) {
  return ['v2', '/v2/floodlightGroups/:floodlightGroupId', args] as const
}

export function useGetV2FloodlightGroupsFloodlightGroupId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.floodlightGroups)[':floodlightGroupId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.floodlightGroups)[':floodlightGroupId']['$get']>>
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
        ? getGetV2FloodlightGroupsFloodlightGroupIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.floodlightGroups)[':floodlightGroupId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.floodlightGroups[':floodlightGroupId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2FloodlightGroupsFloodlightGroupId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.floodlightGroups)[':floodlightGroupId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.floodlightGroups)[':floodlightGroupId']['$get']>>
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
        ? getGetV2FloodlightGroupsFloodlightGroupIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.floodlightGroups)[':floodlightGroupId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.floodlightGroups[':floodlightGroupId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2GoogleAudiencesKey(
  args: InferRequestType<typeof client.v2.googleAudiences.$get>,
) {
  return ['v2', '/v2/googleAudiences', args] as const
}

export function useGetV2GoogleAudiences<TError = unknown>(
  args: InferRequestType<typeof client.v2.googleAudiences.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.googleAudiences.$get>>>>
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
        ? getGetV2GoogleAudiencesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.googleAudiences.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.googleAudiences.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2GoogleAudiences<TError = unknown>(
  args: InferRequestType<typeof client.v2.googleAudiences.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.googleAudiences.$get>>>>
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
        ? getGetV2GoogleAudiencesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.googleAudiences.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.googleAudiences.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2GoogleAudiencesGoogleAudienceIdKey(
  args: InferRequestType<(typeof client.v2.googleAudiences)[':googleAudienceId']['$get']>,
) {
  return ['v2', '/v2/googleAudiences/:googleAudienceId', args] as const
}

export function useGetV2GoogleAudiencesGoogleAudienceId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.googleAudiences)[':googleAudienceId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.googleAudiences)[':googleAudienceId']['$get']>>
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
        ? getGetV2GoogleAudiencesGoogleAudienceIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.googleAudiences)[':googleAudienceId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.googleAudiences[':googleAudienceId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2GoogleAudiencesGoogleAudienceId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.googleAudiences)[':googleAudienceId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.googleAudiences)[':googleAudienceId']['$get']>>
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
        ? getGetV2GoogleAudiencesGoogleAudienceIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.googleAudiences)[':googleAudienceId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.googleAudiences[':googleAudienceId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2GuaranteedOrdersKey(
  args: InferRequestType<typeof client.v2.guaranteedOrders.$get>,
) {
  return ['v2', '/v2/guaranteedOrders', args] as const
}

export function useGetV2GuaranteedOrders<TError = unknown>(
  args: InferRequestType<typeof client.v2.guaranteedOrders.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.guaranteedOrders.$get>>>
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
        ? getGetV2GuaranteedOrdersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.guaranteedOrders.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.guaranteedOrders.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2GuaranteedOrders<TError = unknown>(
  args: InferRequestType<typeof client.v2.guaranteedOrders.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.guaranteedOrders.$get>>>
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
        ? getGetV2GuaranteedOrdersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.guaranteedOrders.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.guaranteedOrders.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2GuaranteedOrdersKey() {
  return ['v2', '/v2/guaranteedOrders', 'POST'] as const
}

export function usePostV2GuaranteedOrders<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.guaranteedOrders.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v2.guaranteedOrders.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2GuaranteedOrdersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v2.guaranteedOrders.$post> }) =>
        parseResponse(client.v2.guaranteedOrders.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2GuaranteedOrdersGuaranteedOrderIdKey(
  args: InferRequestType<(typeof client.v2.guaranteedOrders)[':guaranteedOrderId']['$get']>,
) {
  return ['v2', '/v2/guaranteedOrders/:guaranteedOrderId', args] as const
}

export function useGetV2GuaranteedOrdersGuaranteedOrderId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.guaranteedOrders)[':guaranteedOrderId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.guaranteedOrders)[':guaranteedOrderId']['$get']>>
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
        ? getGetV2GuaranteedOrdersGuaranteedOrderIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.guaranteedOrders)[':guaranteedOrderId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.guaranteedOrders[':guaranteedOrderId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2GuaranteedOrdersGuaranteedOrderId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.guaranteedOrders)[':guaranteedOrderId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.guaranteedOrders)[':guaranteedOrderId']['$get']>>
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
        ? getGetV2GuaranteedOrdersGuaranteedOrderIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.guaranteedOrders)[':guaranteedOrderId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.guaranteedOrders[':guaranteedOrderId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchV2GuaranteedOrdersGuaranteedOrderIdKey() {
  return ['v2', '/v2/guaranteedOrders/:guaranteedOrderId', 'PATCH'] as const
}

export function usePatchV2GuaranteedOrdersGuaranteedOrderId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.guaranteedOrders)[':guaranteedOrderId']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.guaranteedOrders)[':guaranteedOrderId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV2GuaranteedOrdersGuaranteedOrderIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v2.guaranteedOrders)[':guaranteedOrderId']['$patch']>
        },
      ) =>
        parseResponse(client.v2.guaranteedOrders[':guaranteedOrderId'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2GuaranteedOrdersGuaranteedOrderIdEditGuaranteedOrderReadAccessorsKey() {
  return [
    'v2',
    '/v2/guaranteedOrders/:guaranteedOrderId:editGuaranteedOrderReadAccessors',
    'POST',
  ] as const
}

export function usePostV2GuaranteedOrdersGuaranteedOrderIdEditGuaranteedOrderReadAccessors<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v2.guaranteedOrders)[':guaranteedOrderId:editGuaranteedOrderReadAccessors']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostV2GuaranteedOrdersGuaranteedOrderIdEditGuaranteedOrderReadAccessorsKey()
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
            (typeof client.v2.guaranteedOrders)[':guaranteedOrderId:editGuaranteedOrderReadAccessors']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2.guaranteedOrders[':guaranteedOrderId:editGuaranteedOrderReadAccessors'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV2InventorySourceGroupsKey(
  args: InferRequestType<typeof client.v2.inventorySourceGroups.$get>,
) {
  return ['v2', '/v2/inventorySourceGroups', args] as const
}

export function useGetV2InventorySourceGroups<TError = unknown>(
  args: InferRequestType<typeof client.v2.inventorySourceGroups.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.inventorySourceGroups.$get>>>
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
        ? getGetV2InventorySourceGroupsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.inventorySourceGroups.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.inventorySourceGroups.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2InventorySourceGroups<TError = unknown>(
  args: InferRequestType<typeof client.v2.inventorySourceGroups.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.inventorySourceGroups.$get>>>
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
        ? getGetV2InventorySourceGroupsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.inventorySourceGroups.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.inventorySourceGroups.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2InventorySourceGroupsKey() {
  return ['v2', '/v2/inventorySourceGroups', 'POST'] as const
}

export function usePostV2InventorySourceGroups<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.inventorySourceGroups.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v2.inventorySourceGroups.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2InventorySourceGroupsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v2.inventorySourceGroups.$post> },
      ) => parseResponse(client.v2.inventorySourceGroups.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2InventorySourceGroupsInventorySourceGroupIdKey(
  args: InferRequestType<
    (typeof client.v2.inventorySourceGroups)[':inventorySourceGroupId']['$get']
  >,
) {
  return ['v2', '/v2/inventorySourceGroups/:inventorySourceGroupId', args] as const
}

export function useGetV2InventorySourceGroupsInventorySourceGroupId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.inventorySourceGroups)[':inventorySourceGroupId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV2InventorySourceGroupsInventorySourceGroupIdKey(args)
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
                (typeof client.v2.inventorySourceGroups)[':inventorySourceGroupId']['$get']
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
          client.v2.inventorySourceGroups[':inventorySourceGroupId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2InventorySourceGroupsInventorySourceGroupId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.inventorySourceGroups)[':inventorySourceGroupId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV2InventorySourceGroupsInventorySourceGroupIdKey(args)
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
                (typeof client.v2.inventorySourceGroups)[':inventorySourceGroupId']['$get']
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
          client.v2.inventorySourceGroups[':inventorySourceGroupId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteV2InventorySourceGroupsInventorySourceGroupIdKey() {
  return ['v2', '/v2/inventorySourceGroups/:inventorySourceGroupId', 'DELETE'] as const
}

export function useDeleteV2InventorySourceGroupsInventorySourceGroupId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.v2.inventorySourceGroups)[':inventorySourceGroupId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV2InventorySourceGroupsInventorySourceGroupIdKey()
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
            (typeof client.v2.inventorySourceGroups)[':inventorySourceGroupId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v2.inventorySourceGroups[':inventorySourceGroupId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV2InventorySourceGroupsInventorySourceGroupIdAssignedInventorySourcesKey(
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

export function useGetV2InventorySourceGroupsInventorySourceGroupIdAssignedInventorySources<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v2.inventorySourceGroups)[':inventorySourceGroupId']['assignedInventorySources']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV2InventorySourceGroupsInventorySourceGroupIdAssignedInventorySourcesKey(args)
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
                (typeof client.v2.inventorySourceGroups)[':inventorySourceGroupId']['assignedInventorySources']['$get']
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
          client.v2.inventorySourceGroups[':inventorySourceGroupId'].assignedInventorySources.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2InventorySourceGroupsInventorySourceGroupIdAssignedInventorySources<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v2.inventorySourceGroups)[':inventorySourceGroupId']['assignedInventorySources']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV2InventorySourceGroupsInventorySourceGroupIdAssignedInventorySourcesKey(args)
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
                (typeof client.v2.inventorySourceGroups)[':inventorySourceGroupId']['assignedInventorySources']['$get']
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
          client.v2.inventorySourceGroups[':inventorySourceGroupId'].assignedInventorySources.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV2InventorySourceGroupsInventorySourceGroupIdAssignedInventorySourcesKey() {
  return [
    'v2',
    '/v2/inventorySourceGroups/:inventorySourceGroupId/assignedInventorySources',
    'POST',
  ] as const
}

export function usePostV2InventorySourceGroupsInventorySourceGroupIdAssignedInventorySources<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v2.inventorySourceGroups)[':inventorySourceGroupId']['assignedInventorySources']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostV2InventorySourceGroupsInventorySourceGroupIdAssignedInventorySourcesKey()
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
            (typeof client.v2.inventorySourceGroups)[':inventorySourceGroupId']['assignedInventorySources']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2.inventorySourceGroups[':inventorySourceGroupId'].assignedInventorySources.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV2InventorySourceGroupsInventorySourceGroupIdAssignedInventorySourcesAssignedInventorySourceIdKey() {
  return [
    'v2',
    '/v2/inventorySourceGroups/:inventorySourceGroupId/assignedInventorySources/:assignedInventorySourceId',
    'DELETE',
  ] as const
}

export function useDeleteV2InventorySourceGroupsInventorySourceGroupIdAssignedInventorySourcesAssignedInventorySourceId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v2.inventorySourceGroups)[':inventorySourceGroupId']['assignedInventorySources'][':assignedInventorySourceId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getDeleteV2InventorySourceGroupsInventorySourceGroupIdAssignedInventorySourcesAssignedInventorySourceIdKey()
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
            (typeof client.v2.inventorySourceGroups)[':inventorySourceGroupId']['assignedInventorySources'][':assignedInventorySourceId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v2.inventorySourceGroups[':inventorySourceGroupId'].assignedInventorySources[
            ':assignedInventorySourceId'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV2InventorySourceGroupsInventorySourceGroupIdAssignedInventorySourcesBulkEditKey() {
  return [
    'v2',
    '/v2/inventorySourceGroups/:inventorySourceGroupId/assignedInventorySources:bulkEdit',
    'POST',
  ] as const
}

export function usePostV2InventorySourceGroupsInventorySourceGroupIdAssignedInventorySourcesBulkEdit<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v2.inventorySourceGroups)[':inventorySourceGroupId']['assignedInventorySources:bulkEdit']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostV2InventorySourceGroupsInventorySourceGroupIdAssignedInventorySourcesBulkEditKey()
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
            (typeof client.v2.inventorySourceGroups)[':inventorySourceGroupId']['assignedInventorySources:bulkEdit']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2.inventorySourceGroups[':inventorySourceGroupId'][
            'assignedInventorySources:bulkEdit'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV2InventorySourcesKey(
  args: InferRequestType<typeof client.v2.inventorySources.$get>,
) {
  return ['v2', '/v2/inventorySources', args] as const
}

export function useGetV2InventorySources<TError = unknown>(
  args: InferRequestType<typeof client.v2.inventorySources.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.inventorySources.$get>>>
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
        ? getGetV2InventorySourcesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.inventorySources.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.inventorySources.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2InventorySources<TError = unknown>(
  args: InferRequestType<typeof client.v2.inventorySources.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.inventorySources.$get>>>
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
        ? getGetV2InventorySourcesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.inventorySources.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.inventorySources.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2InventorySourcesKey() {
  return ['v2', '/v2/inventorySources', 'POST'] as const
}

export function usePostV2InventorySources<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.inventorySources.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v2.inventorySources.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2InventorySourcesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v2.inventorySources.$post> }) =>
        parseResponse(client.v2.inventorySources.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2InventorySourcesInventorySourceIdKey(
  args: InferRequestType<(typeof client.v2.inventorySources)[':inventorySourceId']['$get']>,
) {
  return ['v2', '/v2/inventorySources/:inventorySourceId', args] as const
}

export function useGetV2InventorySourcesInventorySourceId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.inventorySources)[':inventorySourceId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.inventorySources)[':inventorySourceId']['$get']>>
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
        ? getGetV2InventorySourcesInventorySourceIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.inventorySources)[':inventorySourceId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.inventorySources[':inventorySourceId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2InventorySourcesInventorySourceId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.inventorySources)[':inventorySourceId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.inventorySources)[':inventorySourceId']['$get']>>
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
        ? getGetV2InventorySourcesInventorySourceIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.inventorySources)[':inventorySourceId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.inventorySources[':inventorySourceId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchV2InventorySourcesInventorySourceIdKey() {
  return ['v2', '/v2/inventorySources/:inventorySourceId', 'PATCH'] as const
}

export function usePatchV2InventorySourcesInventorySourceId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.inventorySources)[':inventorySourceId']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.inventorySources)[':inventorySourceId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV2InventorySourcesInventorySourceIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v2.inventorySources)[':inventorySourceId']['$patch']>
        },
      ) =>
        parseResponse(client.v2.inventorySources[':inventorySourceId'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2InventorySourcesInventorySourceIdEditInventorySourceReadWriteAccessorsKey() {
  return [
    'v2',
    '/v2/inventorySources/:inventorySourceId:editInventorySourceReadWriteAccessors',
    'POST',
  ] as const
}

export function usePostV2InventorySourcesInventorySourceIdEditInventorySourceReadWriteAccessors<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v2.inventorySources)[':inventorySourceId:editInventorySourceReadWriteAccessors']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostV2InventorySourcesInventorySourceIdEditInventorySourceReadWriteAccessorsKey()
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
            (typeof client.v2.inventorySources)[':inventorySourceId:editInventorySourceReadWriteAccessors']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2.inventorySources[
            ':inventorySourceId:editInventorySourceReadWriteAccessors'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV2PartnersKey(args: InferRequestType<typeof client.v2.partners.$get>) {
  return ['v2', '/v2/partners', args] as const
}

export function useGetV2Partners<TError = unknown>(
  args: InferRequestType<typeof client.v2.partners.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.partners.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2PartnersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.partners.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.partners.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2Partners<TError = unknown>(
  args: InferRequestType<typeof client.v2.partners.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.partners.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2PartnersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.partners.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.partners.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2PartnersPartnerIdKey(
  args: InferRequestType<(typeof client.v2.partners)[':partnerId']['$get']>,
) {
  return ['v2', '/v2/partners/:partnerId', args] as const
}

export function useGetV2PartnersPartnerId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.partners)[':partnerId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.partners)[':partnerId']['$get']>>
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
        ? getGetV2PartnersPartnerIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.partners)[':partnerId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.partners[':partnerId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2PartnersPartnerId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.partners)[':partnerId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.partners)[':partnerId']['$get']>>
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
        ? getGetV2PartnersPartnerIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.partners)[':partnerId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.partners[':partnerId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2PartnersPartnerIdChannelsKey(
  args: InferRequestType<(typeof client.v2.partners)[':partnerId']['channels']['$get']>,
) {
  return ['v2', '/v2/partners/:partnerId/channels', args] as const
}

export function useGetV2PartnersPartnerIdChannels<TError = unknown>(
  args: InferRequestType<(typeof client.v2.partners)[':partnerId']['channels']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.partners)[':partnerId']['channels']['$get']>>
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
        ? getGetV2PartnersPartnerIdChannelsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.partners)[':partnerId']['channels']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.partners[':partnerId'].channels.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2PartnersPartnerIdChannels<TError = unknown>(
  args: InferRequestType<(typeof client.v2.partners)[':partnerId']['channels']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.partners)[':partnerId']['channels']['$get']>>
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
        ? getGetV2PartnersPartnerIdChannelsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.partners)[':partnerId']['channels']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.partners[':partnerId'].channels.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2PartnersPartnerIdChannelsKey() {
  return ['v2', '/v2/partners/:partnerId/channels', 'POST'] as const
}

export function usePostV2PartnersPartnerIdChannels<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.partners)[':partnerId']['channels']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.partners)[':partnerId']['channels']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2PartnersPartnerIdChannelsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v2.partners)[':partnerId']['channels']['$post']>
        },
      ) => parseResponse(client.v2.partners[':partnerId'].channels.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchV2PartnersPartnerIdChannelsChannelIdKey() {
  return ['v2', '/v2/partners/:partnerId/channels/:channelId', 'PATCH'] as const
}

export function usePatchV2PartnersPartnerIdChannelsChannelId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.v2.partners)[':partnerId']['channels'][':channelId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV2PartnersPartnerIdChannelsChannelIdKey()
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
            (typeof client.v2.partners)[':partnerId']['channels'][':channelId']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.v2.partners[':partnerId'].channels[':channelId'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV2PartnersPartnerIdChannelsChannelIdSitesKey(
  args: InferRequestType<
    (typeof client.v2.partners)[':partnerId']['channels'][':channelId']['sites']['$get']
  >,
) {
  return ['v2', '/v2/partners/:partnerId/channels/:channelId/sites', args] as const
}

export function useGetV2PartnersPartnerIdChannelsChannelIdSites<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.partners)[':partnerId']['channels'][':channelId']['sites']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV2PartnersPartnerIdChannelsChannelIdSitesKey(args)
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
                (typeof client.v2.partners)[':partnerId']['channels'][':channelId']['sites']['$get']
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
          client.v2.partners[':partnerId'].channels[':channelId'].sites.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2PartnersPartnerIdChannelsChannelIdSites<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.partners)[':partnerId']['channels'][':channelId']['sites']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV2PartnersPartnerIdChannelsChannelIdSitesKey(args)
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
                (typeof client.v2.partners)[':partnerId']['channels'][':channelId']['sites']['$get']
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
          client.v2.partners[':partnerId'].channels[':channelId'].sites.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteV2PartnersPartnerIdChannelsChannelIdSitesUrlOrAppIdKey() {
  return ['v2', '/v2/partners/:partnerId/channels/:channelId/sites/:urlOrAppId', 'DELETE'] as const
}

export function useDeleteV2PartnersPartnerIdChannelsChannelIdSitesUrlOrAppId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v2.partners)[':partnerId']['channels'][':channelId']['sites'][':urlOrAppId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV2PartnersPartnerIdChannelsChannelIdSitesUrlOrAppIdKey()
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
            (typeof client.v2.partners)[':partnerId']['channels'][':channelId']['sites'][':urlOrAppId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v2.partners[':partnerId'].channels[':channelId'].sites[':urlOrAppId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV2PartnersPartnerIdChannelsChannelIdSitesBulkEditKey() {
  return ['v2', '/v2/partners/:partnerId/channels/:channelId/sites:bulkEdit', 'POST'] as const
}

export function usePostV2PartnersPartnerIdChannelsChannelIdSitesBulkEdit<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v2.partners)[':partnerId']['channels'][':channelId']['sites:bulkEdit']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2PartnersPartnerIdChannelsChannelIdSitesBulkEditKey()
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
            (typeof client.v2.partners)[':partnerId']['channels'][':channelId']['sites:bulkEdit']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2.partners[':partnerId'].channels[':channelId']['sites:bulkEdit'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV2PartnersPartnerIdChannelsChannelIdSitesReplaceKey() {
  return ['v2', '/v2/partners/:partnerId/channels/:channelId/sites:replace', 'POST'] as const
}

export function usePostV2PartnersPartnerIdChannelsChannelIdSitesReplace<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v2.partners)[':partnerId']['channels'][':channelId']['sites:replace']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2PartnersPartnerIdChannelsChannelIdSitesReplaceKey()
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
            (typeof client.v2.partners)[':partnerId']['channels'][':channelId']['sites:replace']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2.partners[':partnerId'].channels[':channelId']['sites:replace'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV2PartnersPartnerIdTargetingTypesTargetingTypeAssignedTargetingOptionsKey(
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

export function useGetV2PartnersPartnerIdTargetingTypesTargetingTypeAssignedTargetingOptions<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v2.partners)[':partnerId']['targetingTypes'][':targetingType']['assignedTargetingOptions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV2PartnersPartnerIdTargetingTypesTargetingTypeAssignedTargetingOptionsKey(args)
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
                (typeof client.v2.partners)[':partnerId']['targetingTypes'][':targetingType']['assignedTargetingOptions']['$get']
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
          client.v2.partners[':partnerId'].targetingTypes[
            ':targetingType'
          ].assignedTargetingOptions.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2PartnersPartnerIdTargetingTypesTargetingTypeAssignedTargetingOptions<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v2.partners)[':partnerId']['targetingTypes'][':targetingType']['assignedTargetingOptions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV2PartnersPartnerIdTargetingTypesTargetingTypeAssignedTargetingOptionsKey(args)
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
                (typeof client.v2.partners)[':partnerId']['targetingTypes'][':targetingType']['assignedTargetingOptions']['$get']
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
          client.v2.partners[':partnerId'].targetingTypes[
            ':targetingType'
          ].assignedTargetingOptions.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV2PartnersPartnerIdTargetingTypesTargetingTypeAssignedTargetingOptionsKey() {
  return [
    'v2',
    '/v2/partners/:partnerId/targetingTypes/:targetingType/assignedTargetingOptions',
    'POST',
  ] as const
}

export function usePostV2PartnersPartnerIdTargetingTypesTargetingTypeAssignedTargetingOptions<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v2.partners)[':partnerId']['targetingTypes'][':targetingType']['assignedTargetingOptions']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostV2PartnersPartnerIdTargetingTypesTargetingTypeAssignedTargetingOptionsKey()
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
            (typeof client.v2.partners)[':partnerId']['targetingTypes'][':targetingType']['assignedTargetingOptions']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2.partners[':partnerId'].targetingTypes[
            ':targetingType'
          ].assignedTargetingOptions.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV2PartnersPartnerIdTargetingTypesTargetingTypeAssignedTargetingOptionsAssignedTargetingOptionIdKey(
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

export function useGetV2PartnersPartnerIdTargetingTypesTargetingTypeAssignedTargetingOptionsAssignedTargetingOptionId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v2.partners)[':partnerId']['targetingTypes'][':targetingType']['assignedTargetingOptions'][':assignedTargetingOptionId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV2PartnersPartnerIdTargetingTypesTargetingTypeAssignedTargetingOptionsAssignedTargetingOptionIdKey(
            args,
          )
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
                (typeof client.v2.partners)[':partnerId']['targetingTypes'][':targetingType']['assignedTargetingOptions'][':assignedTargetingOptionId']['$get']
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
          client.v2.partners[':partnerId'].targetingTypes[
            ':targetingType'
          ].assignedTargetingOptions[':assignedTargetingOptionId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2PartnersPartnerIdTargetingTypesTargetingTypeAssignedTargetingOptionsAssignedTargetingOptionId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v2.partners)[':partnerId']['targetingTypes'][':targetingType']['assignedTargetingOptions'][':assignedTargetingOptionId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV2PartnersPartnerIdTargetingTypesTargetingTypeAssignedTargetingOptionsAssignedTargetingOptionIdKey(
            args,
          )
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
                (typeof client.v2.partners)[':partnerId']['targetingTypes'][':targetingType']['assignedTargetingOptions'][':assignedTargetingOptionId']['$get']
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
          client.v2.partners[':partnerId'].targetingTypes[
            ':targetingType'
          ].assignedTargetingOptions[':assignedTargetingOptionId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteV2PartnersPartnerIdTargetingTypesTargetingTypeAssignedTargetingOptionsAssignedTargetingOptionIdKey() {
  return [
    'v2',
    '/v2/partners/:partnerId/targetingTypes/:targetingType/assignedTargetingOptions/:assignedTargetingOptionId',
    'DELETE',
  ] as const
}

export function useDeleteV2PartnersPartnerIdTargetingTypesTargetingTypeAssignedTargetingOptionsAssignedTargetingOptionId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v2.partners)[':partnerId']['targetingTypes'][':targetingType']['assignedTargetingOptions'][':assignedTargetingOptionId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getDeleteV2PartnersPartnerIdTargetingTypesTargetingTypeAssignedTargetingOptionsAssignedTargetingOptionIdKey()
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
            (typeof client.v2.partners)[':partnerId']['targetingTypes'][':targetingType']['assignedTargetingOptions'][':assignedTargetingOptionId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v2.partners[':partnerId'].targetingTypes[
            ':targetingType'
          ].assignedTargetingOptions[':assignedTargetingOptionId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV2PartnersPartnerIdEditAssignedTargetingOptionsKey() {
  return ['v2', '/v2/partners/:partnerId:editAssignedTargetingOptions', 'POST'] as const
}

export function usePostV2PartnersPartnerIdEditAssignedTargetingOptions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v2.partners)[':partnerId:editAssignedTargetingOptions']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2PartnersPartnerIdEditAssignedTargetingOptionsKey()
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
            (typeof client.v2.partners)[':partnerId:editAssignedTargetingOptions']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2.partners[':partnerId:editAssignedTargetingOptions'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV2SdfdownloadtasksKey() {
  return ['v2', '/v2/sdfdownloadtasks', 'POST'] as const
}

export function usePostV2Sdfdownloadtasks<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.sdfdownloadtasks.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v2.sdfdownloadtasks.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2SdfdownloadtasksKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v2.sdfdownloadtasks.$post> }) =>
        parseResponse(client.v2.sdfdownloadtasks.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2TargetingTypesTargetingTypeTargetingOptionsKey(
  args: InferRequestType<
    (typeof client.v2.targetingTypes)[':targetingType']['targetingOptions']['$get']
  >,
) {
  return ['v2', '/v2/targetingTypes/:targetingType/targetingOptions', args] as const
}

export function useGetV2TargetingTypesTargetingTypeTargetingOptions<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.targetingTypes)[':targetingType']['targetingOptions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV2TargetingTypesTargetingTypeTargetingOptionsKey(args)
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
                (typeof client.v2.targetingTypes)[':targetingType']['targetingOptions']['$get']
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
          client.v2.targetingTypes[':targetingType'].targetingOptions.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2TargetingTypesTargetingTypeTargetingOptions<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.targetingTypes)[':targetingType']['targetingOptions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV2TargetingTypesTargetingTypeTargetingOptionsKey(args)
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
                (typeof client.v2.targetingTypes)[':targetingType']['targetingOptions']['$get']
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
          client.v2.targetingTypes[':targetingType'].targetingOptions.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV2TargetingTypesTargetingTypeTargetingOptionsTargetingOptionIdKey(
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

export function useGetV2TargetingTypesTargetingTypeTargetingOptionsTargetingOptionId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v2.targetingTypes)[':targetingType']['targetingOptions'][':targetingOptionId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV2TargetingTypesTargetingTypeTargetingOptionsTargetingOptionIdKey(args)
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
                (typeof client.v2.targetingTypes)[':targetingType']['targetingOptions'][':targetingOptionId']['$get']
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
          client.v2.targetingTypes[':targetingType'].targetingOptions[':targetingOptionId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2TargetingTypesTargetingTypeTargetingOptionsTargetingOptionId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v2.targetingTypes)[':targetingType']['targetingOptions'][':targetingOptionId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV2TargetingTypesTargetingTypeTargetingOptionsTargetingOptionIdKey(args)
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
                (typeof client.v2.targetingTypes)[':targetingType']['targetingOptions'][':targetingOptionId']['$get']
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
          client.v2.targetingTypes[':targetingType'].targetingOptions[':targetingOptionId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV2TargetingTypesTargetingTypeTargetingOptionsSearchKey() {
  return ['v2', '/v2/targetingTypes/:targetingType/targetingOptions:search', 'POST'] as const
}

export function usePostV2TargetingTypesTargetingTypeTargetingOptionsSearch<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v2.targetingTypes)[':targetingType']['targetingOptions:search']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2TargetingTypesTargetingTypeTargetingOptionsSearchKey()
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
            (typeof client.v2.targetingTypes)[':targetingType']['targetingOptions:search']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2.targetingTypes[':targetingType']['targetingOptions:search'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV2UsersKey(args: InferRequestType<typeof client.v2.users.$get>) {
  return ['v2', '/v2/users', args] as const
}

export function useGetV2Users<TError = unknown>(
  args: InferRequestType<typeof client.v2.users.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.users.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2UsersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.users.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.v2.users.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetV2Users<TError = unknown>(
  args: InferRequestType<typeof client.v2.users.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.users.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2UsersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.users.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.v2.users.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostV2UsersKey() {
  return ['v2', '/v2/users', 'POST'] as const
}

export function usePostV2Users<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.users.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.v2.users.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2UsersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v2.users.$post> }) =>
        parseResponse(client.v2.users.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2UsersUserIdKey(
  args: InferRequestType<(typeof client.v2.users)[':userId']['$get']>,
) {
  return ['v2', '/v2/users/:userId', args] as const
}

export function useGetV2UsersUserId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.users)[':userId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2.users)[':userId']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetV2UsersUserIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2.users)[':userId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.users[':userId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2UsersUserId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.users)[':userId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2.users)[':userId']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetV2UsersUserIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2.users)[':userId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.users[':userId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV2UsersUserIdKey() {
  return ['v2', '/v2/users/:userId', 'DELETE'] as const
}

export function useDeleteV2UsersUserId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2.users)[':userId']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.users)[':userId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV2UsersUserIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v2.users)[':userId']['$delete']> },
      ) => parseResponse(client.v2.users[':userId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchV2UsersUserIdKey() {
  return ['v2', '/v2/users/:userId', 'PATCH'] as const
}

export function usePatchV2UsersUserId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2.users)[':userId']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.users)[':userId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV2UsersUserIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v2.users)[':userId']['$patch']> },
      ) => parseResponse(client.v2.users[':userId'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2UsersUserIdBulkEditAssignedUserRolesKey() {
  return ['v2', '/v2/users/:userId:bulkEditAssignedUserRoles', 'POST'] as const
}

export function usePostV2UsersUserIdBulkEditAssignedUserRoles<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.v2.users)[':userId:bulkEditAssignedUserRoles']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2UsersUserIdBulkEditAssignedUserRolesKey()
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
            (typeof client.v2.users)[':userId:bulkEditAssignedUserRoles']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2.users[':userId:bulkEditAssignedUserRoles'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV2NameKey(args: InferRequestType<(typeof client.v2)[':name']['$get']>) {
  return ['v2', '/v2/:name', args] as const
}

export function useGetV2Name<TError = unknown>(
  args: InferRequestType<(typeof client.v2)[':name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v2)[':name']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2NameKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v2)[':name']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2[':name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2Name<TError = unknown>(
  args: InferRequestType<(typeof client.v2)[':name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v2)[':name']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2NameKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v2)[':name']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2[':name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}
