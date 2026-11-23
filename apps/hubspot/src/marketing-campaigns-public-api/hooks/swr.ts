import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getMarketingKey() {
  return ['marketing'] as const
}

export function getGetMarketingCampaigns202609Key(
  args: InferRequestType<(typeof client.marketing.campaigns)['2026-09']['$get']>,
) {
  return ['marketing', '/marketing/campaigns/2026-09', args] as const
}

export function useGetMarketingCampaigns202609<TError = unknown>(
  args: InferRequestType<(typeof client.marketing.campaigns)['2026-09']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.marketing.campaigns)['2026-09']['$get']>>
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
        ? getGetMarketingCampaigns202609Key(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.marketing.campaigns)['2026-09']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.marketing.campaigns['2026-09'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMarketingCampaigns202609<TError = unknown>(
  args: InferRequestType<(typeof client.marketing.campaigns)['2026-09']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.marketing.campaigns)['2026-09']['$get']>>
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
        ? getGetMarketingCampaigns202609Key(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.marketing.campaigns)['2026-09']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.marketing.campaigns['2026-09'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostMarketingCampaigns202609Key() {
  return ['marketing', '/marketing/campaigns/2026-09', 'POST'] as const
}

export function usePostMarketingCampaigns202609<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.marketing.campaigns)['2026-09']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.marketing.campaigns)['2026-09']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMarketingCampaigns202609Key()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.marketing.campaigns)['2026-09']['$post']> },
      ) => parseResponse(client.marketing.campaigns['2026-09'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetMarketingCampaigns202609AssetTypesKey() {
  return ['marketing', '/marketing/campaigns/2026-09/asset-types'] as const
}

export function useGetMarketingCampaigns202609AssetTypes<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.marketing.campaigns)['2026-09']['asset-types']['$get']>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMarketingCampaigns202609AssetTypesKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.marketing.campaigns)['2026-09']['asset-types']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.marketing.campaigns['2026-09']['asset-types'].$get(undefined, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMarketingCampaigns202609AssetTypes<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.marketing.campaigns)['2026-09']['asset-types']['$get']>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMarketingCampaigns202609AssetTypesKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.marketing.campaigns)['2026-09']['asset-types']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.marketing.campaigns['2026-09']['asset-types'].$get(undefined, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostMarketingCampaigns202609BatchArchiveKey() {
  return ['marketing', '/marketing/campaigns/2026-09/batch/archive', 'POST'] as const
}

export function usePostMarketingCampaigns202609BatchArchive<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.marketing.campaigns)['2026-09']['batch']['archive']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.marketing.campaigns)['2026-09']['batch']['archive']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMarketingCampaigns202609BatchArchiveKey()
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
            (typeof client.marketing.campaigns)['2026-09']['batch']['archive']['$post']
          >
        },
      ) =>
        parseResponse(
          client.marketing.campaigns['2026-09'].batch.archive.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostMarketingCampaigns202609BatchCreateKey() {
  return ['marketing', '/marketing/campaigns/2026-09/batch/create', 'POST'] as const
}

export function usePostMarketingCampaigns202609BatchCreate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.marketing.campaigns)['2026-09']['batch']['create']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.marketing.campaigns)['2026-09']['batch']['create']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMarketingCampaigns202609BatchCreateKey()
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
            (typeof client.marketing.campaigns)['2026-09']['batch']['create']['$post']
          >
        },
      ) =>
        parseResponse(client.marketing.campaigns['2026-09'].batch.create.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostMarketingCampaigns202609BatchReadKey() {
  return ['marketing', '/marketing/campaigns/2026-09/batch/read', 'POST'] as const
}

export function usePostMarketingCampaigns202609BatchRead<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.marketing.campaigns)['2026-09']['batch']['read']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.marketing.campaigns)['2026-09']['batch']['read']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMarketingCampaigns202609BatchReadKey()
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
            (typeof client.marketing.campaigns)['2026-09']['batch']['read']['$post']
          >
        },
      ) =>
        parseResponse(client.marketing.campaigns['2026-09'].batch.read.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostMarketingCampaigns202609BatchUpdateKey() {
  return ['marketing', '/marketing/campaigns/2026-09/batch/update', 'POST'] as const
}

export function usePostMarketingCampaigns202609BatchUpdate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.marketing.campaigns)['2026-09']['batch']['update']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.marketing.campaigns)['2026-09']['batch']['update']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMarketingCampaigns202609BatchUpdateKey()
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
            (typeof client.marketing.campaigns)['2026-09']['batch']['update']['$post']
          >
        },
      ) =>
        parseResponse(client.marketing.campaigns['2026-09'].batch.update.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostMarketingCampaigns202609CloneKey() {
  return ['marketing', '/marketing/campaigns/2026-09/clone', 'POST'] as const
}

export function usePostMarketingCampaigns202609Clone<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.marketing.campaigns)['2026-09']['clone']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.marketing.campaigns)['2026-09']['clone']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMarketingCampaigns202609CloneKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.marketing.campaigns)['2026-09']['clone']['$post']>
        },
      ) => parseResponse(client.marketing.campaigns['2026-09'].clone.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetMarketingCampaigns202609CloneAssetTypesKey() {
  return ['marketing', '/marketing/campaigns/2026-09/clone/asset-types'] as const
}

export function useGetMarketingCampaigns202609CloneAssetTypes<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.marketing.campaigns)['2026-09']['clone']['asset-types']['$get']
            >
          >
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMarketingCampaigns202609CloneAssetTypesKey()
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
                (typeof client.marketing.campaigns)['2026-09']['clone']['asset-types']['$get']
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
          client.marketing.campaigns['2026-09'].clone['asset-types'].$get(undefined, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMarketingCampaigns202609CloneAssetTypes<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.marketing.campaigns)['2026-09']['clone']['asset-types']['$get']
            >
          >
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMarketingCampaigns202609CloneAssetTypesKey()
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
                (typeof client.marketing.campaigns)['2026-09']['clone']['asset-types']['$get']
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
          client.marketing.campaigns['2026-09'].clone['asset-types'].$get(undefined, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetMarketingCampaigns202609CloneCampaignGuidStatusKey(
  args: InferRequestType<
    (typeof client.marketing.campaigns)['2026-09']['clone'][':campaignGuid']['status']['$get']
  >,
) {
  return ['marketing', '/marketing/campaigns/2026-09/clone/:campaignGuid/status', args] as const
}

export function useGetMarketingCampaigns202609CloneCampaignGuidStatus<TError = unknown>(
  args: InferRequestType<
    (typeof client.marketing.campaigns)['2026-09']['clone'][':campaignGuid']['status']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.marketing.campaigns)['2026-09']['clone'][':campaignGuid']['status']['$get']
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
        ? getGetMarketingCampaigns202609CloneCampaignGuidStatusKey(args)
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
                (typeof client.marketing.campaigns)['2026-09']['clone'][':campaignGuid']['status']['$get']
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
          client.marketing.campaigns['2026-09'].clone[':campaignGuid'].status.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMarketingCampaigns202609CloneCampaignGuidStatus<TError = unknown>(
  args: InferRequestType<
    (typeof client.marketing.campaigns)['2026-09']['clone'][':campaignGuid']['status']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.marketing.campaigns)['2026-09']['clone'][':campaignGuid']['status']['$get']
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
        ? getGetMarketingCampaigns202609CloneCampaignGuidStatusKey(args)
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
                (typeof client.marketing.campaigns)['2026-09']['clone'][':campaignGuid']['status']['$get']
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
          client.marketing.campaigns['2026-09'].clone[':campaignGuid'].status.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetMarketingCampaigns202609CampaignGuidKey(
  args: InferRequestType<(typeof client.marketing.campaigns)['2026-09'][':campaignGuid']['$get']>,
) {
  return ['marketing', '/marketing/campaigns/2026-09/:campaignGuid', args] as const
}

export function useGetMarketingCampaigns202609CampaignGuid<TError = unknown>(
  args: InferRequestType<(typeof client.marketing.campaigns)['2026-09'][':campaignGuid']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.marketing.campaigns)['2026-09'][':campaignGuid']['$get']>
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
        ? getGetMarketingCampaigns202609CampaignGuidKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.marketing.campaigns)['2026-09'][':campaignGuid']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.marketing.campaigns['2026-09'][':campaignGuid'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMarketingCampaigns202609CampaignGuid<TError = unknown>(
  args: InferRequestType<(typeof client.marketing.campaigns)['2026-09'][':campaignGuid']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.marketing.campaigns)['2026-09'][':campaignGuid']['$get']>
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
        ? getGetMarketingCampaigns202609CampaignGuidKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.marketing.campaigns)['2026-09'][':campaignGuid']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.marketing.campaigns['2026-09'][':campaignGuid'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteMarketingCampaigns202609CampaignGuidKey() {
  return ['marketing', '/marketing/campaigns/2026-09/:campaignGuid', 'DELETE'] as const
}

export function useDeleteMarketingCampaigns202609CampaignGuid<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.marketing.campaigns)['2026-09'][':campaignGuid']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.marketing.campaigns)['2026-09'][':campaignGuid']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteMarketingCampaigns202609CampaignGuidKey()
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
            (typeof client.marketing.campaigns)['2026-09'][':campaignGuid']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.marketing.campaigns['2026-09'][':campaignGuid'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchMarketingCampaigns202609CampaignGuidKey() {
  return ['marketing', '/marketing/campaigns/2026-09/:campaignGuid', 'PATCH'] as const
}

export function usePatchMarketingCampaigns202609CampaignGuid<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.marketing.campaigns)['2026-09'][':campaignGuid']['$patch']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.marketing.campaigns)['2026-09'][':campaignGuid']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchMarketingCampaigns202609CampaignGuidKey()
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
            (typeof client.marketing.campaigns)['2026-09'][':campaignGuid']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.marketing.campaigns['2026-09'][':campaignGuid'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetMarketingCampaigns202609CampaignGuidAssetsAssetTypeKey(
  args: InferRequestType<
    (typeof client.marketing.campaigns)['2026-09'][':campaignGuid']['assets'][':assetType']['$get']
  >,
) {
  return [
    'marketing',
    '/marketing/campaigns/2026-09/:campaignGuid/assets/:assetType',
    args,
  ] as const
}

export function useGetMarketingCampaigns202609CampaignGuidAssetsAssetType<TError = unknown>(
  args: InferRequestType<
    (typeof client.marketing.campaigns)['2026-09'][':campaignGuid']['assets'][':assetType']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.marketing.campaigns)['2026-09'][':campaignGuid']['assets'][':assetType']['$get']
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
        ? getGetMarketingCampaigns202609CampaignGuidAssetsAssetTypeKey(args)
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
                (typeof client.marketing.campaigns)['2026-09'][':campaignGuid']['assets'][':assetType']['$get']
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
          client.marketing.campaigns['2026-09'][':campaignGuid'].assets[':assetType'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMarketingCampaigns202609CampaignGuidAssetsAssetType<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.marketing.campaigns)['2026-09'][':campaignGuid']['assets'][':assetType']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.marketing.campaigns)['2026-09'][':campaignGuid']['assets'][':assetType']['$get']
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
        ? getGetMarketingCampaigns202609CampaignGuidAssetsAssetTypeKey(args)
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
                (typeof client.marketing.campaigns)['2026-09'][':campaignGuid']['assets'][':assetType']['$get']
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
          client.marketing.campaigns['2026-09'][':campaignGuid'].assets[':assetType'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutMarketingCampaigns202609CampaignGuidAssetsAssetTypeAssetIdKey() {
  return [
    'marketing',
    '/marketing/campaigns/2026-09/:campaignGuid/assets/:assetType/:assetId',
    'PUT',
  ] as const
}

export function usePutMarketingCampaigns202609CampaignGuidAssetsAssetTypeAssetId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.marketing.campaigns)['2026-09'][':campaignGuid']['assets'][':assetType'][':assetId']['$put']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.marketing.campaigns)['2026-09'][':campaignGuid']['assets'][':assetType'][':assetId']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutMarketingCampaigns202609CampaignGuidAssetsAssetTypeAssetIdKey()
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
            (typeof client.marketing.campaigns)['2026-09'][':campaignGuid']['assets'][':assetType'][':assetId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.marketing.campaigns['2026-09'][':campaignGuid'].assets[':assetType'][
            ':assetId'
          ].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteMarketingCampaigns202609CampaignGuidAssetsAssetTypeAssetIdKey() {
  return [
    'marketing',
    '/marketing/campaigns/2026-09/:campaignGuid/assets/:assetType/:assetId',
    'DELETE',
  ] as const
}

export function useDeleteMarketingCampaigns202609CampaignGuidAssetsAssetTypeAssetId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.marketing.campaigns)['2026-09'][':campaignGuid']['assets'][':assetType'][':assetId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.marketing.campaigns)['2026-09'][':campaignGuid']['assets'][':assetType'][':assetId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteMarketingCampaigns202609CampaignGuidAssetsAssetTypeAssetIdKey()
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
            (typeof client.marketing.campaigns)['2026-09'][':campaignGuid']['assets'][':assetType'][':assetId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.marketing.campaigns['2026-09'][':campaignGuid'].assets[':assetType'][
            ':assetId'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostMarketingCampaigns202609CampaignGuidBudgetKey() {
  return ['marketing', '/marketing/campaigns/2026-09/:campaignGuid/budget', 'POST'] as const
}

export function usePostMarketingCampaigns202609CampaignGuidBudget<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.marketing.campaigns)['2026-09'][':campaignGuid']['budget']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.marketing.campaigns)['2026-09'][':campaignGuid']['budget']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMarketingCampaigns202609CampaignGuidBudgetKey()
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
            (typeof client.marketing.campaigns)['2026-09'][':campaignGuid']['budget']['$post']
          >
        },
      ) =>
        parseResponse(
          client.marketing.campaigns['2026-09'][':campaignGuid'].budget.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetMarketingCampaigns202609CampaignGuidBudgetTotalsKey(
  args: InferRequestType<
    (typeof client.marketing.campaigns)['2026-09'][':campaignGuid']['budget']['totals']['$get']
  >,
) {
  return ['marketing', '/marketing/campaigns/2026-09/:campaignGuid/budget/totals', args] as const
}

export function useGetMarketingCampaigns202609CampaignGuidBudgetTotals<TError = unknown>(
  args: InferRequestType<
    (typeof client.marketing.campaigns)['2026-09'][':campaignGuid']['budget']['totals']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.marketing.campaigns)['2026-09'][':campaignGuid']['budget']['totals']['$get']
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
        ? getGetMarketingCampaigns202609CampaignGuidBudgetTotalsKey(args)
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
                (typeof client.marketing.campaigns)['2026-09'][':campaignGuid']['budget']['totals']['$get']
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
          client.marketing.campaigns['2026-09'][':campaignGuid'].budget.totals.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMarketingCampaigns202609CampaignGuidBudgetTotals<TError = unknown>(
  args: InferRequestType<
    (typeof client.marketing.campaigns)['2026-09'][':campaignGuid']['budget']['totals']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.marketing.campaigns)['2026-09'][':campaignGuid']['budget']['totals']['$get']
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
        ? getGetMarketingCampaigns202609CampaignGuidBudgetTotalsKey(args)
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
                (typeof client.marketing.campaigns)['2026-09'][':campaignGuid']['budget']['totals']['$get']
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
          client.marketing.campaigns['2026-09'][':campaignGuid'].budget.totals.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetMarketingCampaigns202609CampaignGuidBudgetBudgetIdKey(
  args: InferRequestType<
    (typeof client.marketing.campaigns)['2026-09'][':campaignGuid']['budget'][':budgetId']['$get']
  >,
) {
  return ['marketing', '/marketing/campaigns/2026-09/:campaignGuid/budget/:budgetId', args] as const
}

export function useGetMarketingCampaigns202609CampaignGuidBudgetBudgetId<TError = unknown>(
  args: InferRequestType<
    (typeof client.marketing.campaigns)['2026-09'][':campaignGuid']['budget'][':budgetId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.marketing.campaigns)['2026-09'][':campaignGuid']['budget'][':budgetId']['$get']
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
        ? getGetMarketingCampaigns202609CampaignGuidBudgetBudgetIdKey(args)
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
                (typeof client.marketing.campaigns)['2026-09'][':campaignGuid']['budget'][':budgetId']['$get']
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
          client.marketing.campaigns['2026-09'][':campaignGuid'].budget[':budgetId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMarketingCampaigns202609CampaignGuidBudgetBudgetId<TError = unknown>(
  args: InferRequestType<
    (typeof client.marketing.campaigns)['2026-09'][':campaignGuid']['budget'][':budgetId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.marketing.campaigns)['2026-09'][':campaignGuid']['budget'][':budgetId']['$get']
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
        ? getGetMarketingCampaigns202609CampaignGuidBudgetBudgetIdKey(args)
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
                (typeof client.marketing.campaigns)['2026-09'][':campaignGuid']['budget'][':budgetId']['$get']
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
          client.marketing.campaigns['2026-09'][':campaignGuid'].budget[':budgetId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutMarketingCampaigns202609CampaignGuidBudgetBudgetIdKey() {
  return [
    'marketing',
    '/marketing/campaigns/2026-09/:campaignGuid/budget/:budgetId',
    'PUT',
  ] as const
}

export function usePutMarketingCampaigns202609CampaignGuidBudgetBudgetId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.marketing.campaigns)['2026-09'][':campaignGuid']['budget'][':budgetId']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.marketing.campaigns)['2026-09'][':campaignGuid']['budget'][':budgetId']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutMarketingCampaigns202609CampaignGuidBudgetBudgetIdKey()
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
            (typeof client.marketing.campaigns)['2026-09'][':campaignGuid']['budget'][':budgetId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.marketing.campaigns['2026-09'][':campaignGuid'].budget[':budgetId'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteMarketingCampaigns202609CampaignGuidBudgetBudgetIdKey() {
  return [
    'marketing',
    '/marketing/campaigns/2026-09/:campaignGuid/budget/:budgetId',
    'DELETE',
  ] as const
}

export function useDeleteMarketingCampaigns202609CampaignGuidBudgetBudgetId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.marketing.campaigns)['2026-09'][':campaignGuid']['budget'][':budgetId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.marketing.campaigns)['2026-09'][':campaignGuid']['budget'][':budgetId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteMarketingCampaigns202609CampaignGuidBudgetBudgetIdKey()
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
            (typeof client.marketing.campaigns)['2026-09'][':campaignGuid']['budget'][':budgetId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.marketing.campaigns['2026-09'][':campaignGuid'].budget[':budgetId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetMarketingCampaigns202609CampaignGuidReportsContactsContactTypeKey(
  args: InferRequestType<
    (typeof client.marketing.campaigns)['2026-09'][':campaignGuid']['reports']['contacts'][':contactType']['$get']
  >,
) {
  return [
    'marketing',
    '/marketing/campaigns/2026-09/:campaignGuid/reports/contacts/:contactType',
    args,
  ] as const
}

export function useGetMarketingCampaigns202609CampaignGuidReportsContactsContactType<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.marketing.campaigns)['2026-09'][':campaignGuid']['reports']['contacts'][':contactType']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.marketing.campaigns)['2026-09'][':campaignGuid']['reports']['contacts'][':contactType']['$get']
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
        ? getGetMarketingCampaigns202609CampaignGuidReportsContactsContactTypeKey(args)
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
                (typeof client.marketing.campaigns)['2026-09'][':campaignGuid']['reports']['contacts'][':contactType']['$get']
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
          client.marketing.campaigns['2026-09'][':campaignGuid'].reports.contacts[
            ':contactType'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMarketingCampaigns202609CampaignGuidReportsContactsContactType<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.marketing.campaigns)['2026-09'][':campaignGuid']['reports']['contacts'][':contactType']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.marketing.campaigns)['2026-09'][':campaignGuid']['reports']['contacts'][':contactType']['$get']
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
        ? getGetMarketingCampaigns202609CampaignGuidReportsContactsContactTypeKey(args)
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
                (typeof client.marketing.campaigns)['2026-09'][':campaignGuid']['reports']['contacts'][':contactType']['$get']
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
          client.marketing.campaigns['2026-09'][':campaignGuid'].reports.contacts[
            ':contactType'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetMarketingCampaigns202609CampaignGuidReportsMetricsKey(
  args: InferRequestType<
    (typeof client.marketing.campaigns)['2026-09'][':campaignGuid']['reports']['metrics']['$get']
  >,
) {
  return ['marketing', '/marketing/campaigns/2026-09/:campaignGuid/reports/metrics', args] as const
}

export function useGetMarketingCampaigns202609CampaignGuidReportsMetrics<TError = unknown>(
  args: InferRequestType<
    (typeof client.marketing.campaigns)['2026-09'][':campaignGuid']['reports']['metrics']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.marketing.campaigns)['2026-09'][':campaignGuid']['reports']['metrics']['$get']
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
        ? getGetMarketingCampaigns202609CampaignGuidReportsMetricsKey(args)
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
                (typeof client.marketing.campaigns)['2026-09'][':campaignGuid']['reports']['metrics']['$get']
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
          client.marketing.campaigns['2026-09'][':campaignGuid'].reports.metrics.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMarketingCampaigns202609CampaignGuidReportsMetrics<TError = unknown>(
  args: InferRequestType<
    (typeof client.marketing.campaigns)['2026-09'][':campaignGuid']['reports']['metrics']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.marketing.campaigns)['2026-09'][':campaignGuid']['reports']['metrics']['$get']
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
        ? getGetMarketingCampaigns202609CampaignGuidReportsMetricsKey(args)
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
                (typeof client.marketing.campaigns)['2026-09'][':campaignGuid']['reports']['metrics']['$get']
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
          client.marketing.campaigns['2026-09'][':campaignGuid'].reports.metrics.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetMarketingCampaigns202609CampaignGuidReportsRevenueKey(
  args: InferRequestType<
    (typeof client.marketing.campaigns)['2026-09'][':campaignGuid']['reports']['revenue']['$get']
  >,
) {
  return ['marketing', '/marketing/campaigns/2026-09/:campaignGuid/reports/revenue', args] as const
}

export function useGetMarketingCampaigns202609CampaignGuidReportsRevenue<TError = unknown>(
  args: InferRequestType<
    (typeof client.marketing.campaigns)['2026-09'][':campaignGuid']['reports']['revenue']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.marketing.campaigns)['2026-09'][':campaignGuid']['reports']['revenue']['$get']
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
        ? getGetMarketingCampaigns202609CampaignGuidReportsRevenueKey(args)
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
                (typeof client.marketing.campaigns)['2026-09'][':campaignGuid']['reports']['revenue']['$get']
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
          client.marketing.campaigns['2026-09'][':campaignGuid'].reports.revenue.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMarketingCampaigns202609CampaignGuidReportsRevenue<TError = unknown>(
  args: InferRequestType<
    (typeof client.marketing.campaigns)['2026-09'][':campaignGuid']['reports']['revenue']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.marketing.campaigns)['2026-09'][':campaignGuid']['reports']['revenue']['$get']
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
        ? getGetMarketingCampaigns202609CampaignGuidReportsRevenueKey(args)
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
                (typeof client.marketing.campaigns)['2026-09'][':campaignGuid']['reports']['revenue']['$get']
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
          client.marketing.campaigns['2026-09'][':campaignGuid'].reports.revenue.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostMarketingCampaigns202609CampaignGuidSpendKey() {
  return ['marketing', '/marketing/campaigns/2026-09/:campaignGuid/spend', 'POST'] as const
}

export function usePostMarketingCampaigns202609CampaignGuidSpend<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.marketing.campaigns)['2026-09'][':campaignGuid']['spend']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.marketing.campaigns)['2026-09'][':campaignGuid']['spend']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMarketingCampaigns202609CampaignGuidSpendKey()
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
            (typeof client.marketing.campaigns)['2026-09'][':campaignGuid']['spend']['$post']
          >
        },
      ) =>
        parseResponse(
          client.marketing.campaigns['2026-09'][':campaignGuid'].spend.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetMarketingCampaigns202609CampaignGuidSpendSpendIdKey(
  args: InferRequestType<
    (typeof client.marketing.campaigns)['2026-09'][':campaignGuid']['spend'][':spendId']['$get']
  >,
) {
  return ['marketing', '/marketing/campaigns/2026-09/:campaignGuid/spend/:spendId', args] as const
}

export function useGetMarketingCampaigns202609CampaignGuidSpendSpendId<TError = unknown>(
  args: InferRequestType<
    (typeof client.marketing.campaigns)['2026-09'][':campaignGuid']['spend'][':spendId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.marketing.campaigns)['2026-09'][':campaignGuid']['spend'][':spendId']['$get']
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
        ? getGetMarketingCampaigns202609CampaignGuidSpendSpendIdKey(args)
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
                (typeof client.marketing.campaigns)['2026-09'][':campaignGuid']['spend'][':spendId']['$get']
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
          client.marketing.campaigns['2026-09'][':campaignGuid'].spend[':spendId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMarketingCampaigns202609CampaignGuidSpendSpendId<TError = unknown>(
  args: InferRequestType<
    (typeof client.marketing.campaigns)['2026-09'][':campaignGuid']['spend'][':spendId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.marketing.campaigns)['2026-09'][':campaignGuid']['spend'][':spendId']['$get']
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
        ? getGetMarketingCampaigns202609CampaignGuidSpendSpendIdKey(args)
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
                (typeof client.marketing.campaigns)['2026-09'][':campaignGuid']['spend'][':spendId']['$get']
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
          client.marketing.campaigns['2026-09'][':campaignGuid'].spend[':spendId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutMarketingCampaigns202609CampaignGuidSpendSpendIdKey() {
  return ['marketing', '/marketing/campaigns/2026-09/:campaignGuid/spend/:spendId', 'PUT'] as const
}

export function usePutMarketingCampaigns202609CampaignGuidSpendSpendId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.marketing.campaigns)['2026-09'][':campaignGuid']['spend'][':spendId']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.marketing.campaigns)['2026-09'][':campaignGuid']['spend'][':spendId']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutMarketingCampaigns202609CampaignGuidSpendSpendIdKey()
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
            (typeof client.marketing.campaigns)['2026-09'][':campaignGuid']['spend'][':spendId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.marketing.campaigns['2026-09'][':campaignGuid'].spend[':spendId'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteMarketingCampaigns202609CampaignGuidSpendSpendIdKey() {
  return [
    'marketing',
    '/marketing/campaigns/2026-09/:campaignGuid/spend/:spendId',
    'DELETE',
  ] as const
}

export function useDeleteMarketingCampaigns202609CampaignGuidSpendSpendId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.marketing.campaigns)['2026-09'][':campaignGuid']['spend'][':spendId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.marketing.campaigns)['2026-09'][':campaignGuid']['spend'][':spendId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteMarketingCampaigns202609CampaignGuidSpendSpendIdKey()
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
            (typeof client.marketing.campaigns)['2026-09'][':campaignGuid']['spend'][':spendId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.marketing.campaigns['2026-09'][':campaignGuid'].spend[':spendId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}
