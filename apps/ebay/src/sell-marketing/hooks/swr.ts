import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getAdCampaignKey() {
  return ['ad_campaign'] as const
}

export function getAdReportKey() {
  return ['ad_report'] as const
}

export function getAdReportMetadataKey() {
  return ['ad_report_metadata'] as const
}

export function getAdReportTaskKey() {
  return ['ad_report_task'] as const
}

export function getBulkCreateNegativeKeywordKey() {
  return ['bulk_create_negative_keyword'] as const
}

export function getBulkUpdateNegativeKeywordKey() {
  return ['bulk_update_negative_keyword'] as const
}

export function getItemPriceMarkdownKey() {
  return ['item_price_markdown'] as const
}

export function getItemPromotionKey() {
  return ['item_promotion'] as const
}

export function getNegativeKeywordKey() {
  return ['negative_keyword'] as const
}

export function getPromotionKey() {
  return ['promotion'] as const
}

export function getPromotionReportKey() {
  return ['promotion_report'] as const
}

export function getPromotionSummaryReportKey() {
  return ['promotion_summary_report'] as const
}

export function getGetAdCampaignKey(args: InferRequestType<typeof client.ad_campaign.$get>) {
  return ['ad_campaign', '/ad_campaign', args] as const
}

export function useGetAdCampaign<TError = unknown>(
  args: InferRequestType<typeof client.ad_campaign.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ad_campaign.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAdCampaignKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ad_campaign.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ad_campaign.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdCampaign<TError = unknown>(
  args: InferRequestType<typeof client.ad_campaign.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ad_campaign.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAdCampaignKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ad_campaign.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ad_campaign.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAdCampaignKey() {
  return ['ad_campaign', '/ad_campaign', 'POST'] as const
}

export function usePostAdCampaign<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ad_campaign.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.ad_campaign.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdCampaignKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.ad_campaign.$post> }) =>
        parseResponse(client.ad_campaign.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAdCampaignFindCampaignByAdReferenceKey(
  args: InferRequestType<typeof client.ad_campaign.find_campaign_by_ad_reference.$get>,
) {
  return ['ad_campaign', '/ad_campaign/find_campaign_by_ad_reference', args] as const
}

export function useGetAdCampaignFindCampaignByAdReference<TError = unknown>(
  args: InferRequestType<typeof client.ad_campaign.find_campaign_by_ad_reference.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.ad_campaign.find_campaign_by_ad_reference.$get>>
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
        ? getGetAdCampaignFindCampaignByAdReferenceKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.ad_campaign.find_campaign_by_ad_reference.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.ad_campaign.find_campaign_by_ad_reference.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdCampaignFindCampaignByAdReference<TError = unknown>(
  args: InferRequestType<typeof client.ad_campaign.find_campaign_by_ad_reference.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.ad_campaign.find_campaign_by_ad_reference.$get>>
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
        ? getGetAdCampaignFindCampaignByAdReferenceKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.ad_campaign.find_campaign_by_ad_reference.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.ad_campaign.find_campaign_by_ad_reference.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAdCampaignGetCampaignByNameKey(
  args: InferRequestType<typeof client.ad_campaign.get_campaign_by_name.$get>,
) {
  return ['ad_campaign', '/ad_campaign/get_campaign_by_name', args] as const
}

export function useGetAdCampaignGetCampaignByName<TError = unknown>(
  args: InferRequestType<typeof client.ad_campaign.get_campaign_by_name.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.ad_campaign.get_campaign_by_name.$get>>
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
        ? getGetAdCampaignGetCampaignByNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.ad_campaign.get_campaign_by_name.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ad_campaign.get_campaign_by_name.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdCampaignGetCampaignByName<TError = unknown>(
  args: InferRequestType<typeof client.ad_campaign.get_campaign_by_name.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.ad_campaign.get_campaign_by_name.$get>>
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
        ? getGetAdCampaignGetCampaignByNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.ad_campaign.get_campaign_by_name.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ad_campaign.get_campaign_by_name.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAdCampaignCampaignIdKey(
  args: InferRequestType<(typeof client.ad_campaign)[':campaign_id']['$get']>,
) {
  return ['ad_campaign', '/ad_campaign/:campaign_id', args] as const
}

export function useGetAdCampaignCampaignId<TError = unknown>(
  args: InferRequestType<(typeof client.ad_campaign)[':campaign_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ad_campaign)[':campaign_id']['$get']>>
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
        ? getGetAdCampaignCampaignIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ad_campaign)[':campaign_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ad_campaign[':campaign_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdCampaignCampaignId<TError = unknown>(
  args: InferRequestType<(typeof client.ad_campaign)[':campaign_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ad_campaign)[':campaign_id']['$get']>>
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
        ? getGetAdCampaignCampaignIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ad_campaign)[':campaign_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ad_campaign[':campaign_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteAdCampaignCampaignIdKey() {
  return ['ad_campaign', '/ad_campaign/:campaign_id', 'DELETE'] as const
}

export function useDeleteAdCampaignCampaignId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ad_campaign)[':campaign_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.ad_campaign)[':campaign_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAdCampaignCampaignIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.ad_campaign)[':campaign_id']['$delete']> },
      ) => parseResponse(client.ad_campaign[':campaign_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAdCampaignCampaignIdAdKey(
  args: InferRequestType<(typeof client.ad_campaign)[':campaign_id']['ad']['$get']>,
) {
  return ['ad_campaign', '/ad_campaign/:campaign_id/ad', args] as const
}

export function useGetAdCampaignCampaignIdAd<TError = unknown>(
  args: InferRequestType<(typeof client.ad_campaign)[':campaign_id']['ad']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ad_campaign)[':campaign_id']['ad']['$get']>>
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
        ? getGetAdCampaignCampaignIdAdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ad_campaign)[':campaign_id']['ad']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ad_campaign[':campaign_id'].ad.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdCampaignCampaignIdAd<TError = unknown>(
  args: InferRequestType<(typeof client.ad_campaign)[':campaign_id']['ad']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ad_campaign)[':campaign_id']['ad']['$get']>>
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
        ? getGetAdCampaignCampaignIdAdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ad_campaign)[':campaign_id']['ad']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ad_campaign[':campaign_id'].ad.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAdCampaignCampaignIdAdKey() {
  return ['ad_campaign', '/ad_campaign/:campaign_id/ad', 'POST'] as const
}

export function usePostAdCampaignCampaignIdAd<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ad_campaign)[':campaign_id']['ad']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.ad_campaign)[':campaign_id']['ad']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdCampaignCampaignIdAdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.ad_campaign)[':campaign_id']['ad']['$post']> },
      ) => parseResponse(client.ad_campaign[':campaign_id'].ad.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAdCampaignCampaignIdAdAdIdKey(
  args: InferRequestType<(typeof client.ad_campaign)[':campaign_id']['ad'][':ad_id']['$get']>,
) {
  return ['ad_campaign', '/ad_campaign/:campaign_id/ad/:ad_id', args] as const
}

export function useGetAdCampaignCampaignIdAdAdId<TError = unknown>(
  args: InferRequestType<(typeof client.ad_campaign)[':campaign_id']['ad'][':ad_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ad_campaign)[':campaign_id']['ad'][':ad_id']['$get']>>
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
        ? getGetAdCampaignCampaignIdAdAdIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ad_campaign)[':campaign_id']['ad'][':ad_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.ad_campaign[':campaign_id'].ad[':ad_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdCampaignCampaignIdAdAdId<TError = unknown>(
  args: InferRequestType<(typeof client.ad_campaign)[':campaign_id']['ad'][':ad_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ad_campaign)[':campaign_id']['ad'][':ad_id']['$get']>>
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
        ? getGetAdCampaignCampaignIdAdAdIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ad_campaign)[':campaign_id']['ad'][':ad_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.ad_campaign[':campaign_id'].ad[':ad_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteAdCampaignCampaignIdAdAdIdKey() {
  return ['ad_campaign', '/ad_campaign/:campaign_id/ad/:ad_id', 'DELETE'] as const
}

export function useDeleteAdCampaignCampaignIdAdAdId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.ad_campaign)[':campaign_id']['ad'][':ad_id']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.ad_campaign)[':campaign_id']['ad'][':ad_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAdCampaignCampaignIdAdAdIdKey()
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
            (typeof client.ad_campaign)[':campaign_id']['ad'][':ad_id']['$delete']
          >
        },
      ) =>
        parseResponse(client.ad_campaign[':campaign_id'].ad[':ad_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAdCampaignCampaignIdAdAdIdUpdateBidKey() {
  return ['ad_campaign', '/ad_campaign/:campaign_id/ad/:ad_id/update_bid', 'POST'] as const
}

export function usePostAdCampaignCampaignIdAdAdIdUpdateBid<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.ad_campaign)[':campaign_id']['ad'][':ad_id']['update_bid']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.ad_campaign)[':campaign_id']['ad'][':ad_id']['update_bid']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdCampaignCampaignIdAdAdIdUpdateBidKey()
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
            (typeof client.ad_campaign)[':campaign_id']['ad'][':ad_id']['update_bid']['$post']
          >
        },
      ) =>
        parseResponse(
          client.ad_campaign[':campaign_id'].ad[':ad_id'].update_bid.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAdCampaignCampaignIdAdGroupKey(
  args: InferRequestType<(typeof client.ad_campaign)[':campaign_id']['ad_group']['$get']>,
) {
  return ['ad_campaign', '/ad_campaign/:campaign_id/ad_group', args] as const
}

export function useGetAdCampaignCampaignIdAdGroup<TError = unknown>(
  args: InferRequestType<(typeof client.ad_campaign)[':campaign_id']['ad_group']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ad_campaign)[':campaign_id']['ad_group']['$get']>>
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
        ? getGetAdCampaignCampaignIdAdGroupKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ad_campaign)[':campaign_id']['ad_group']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.ad_campaign[':campaign_id'].ad_group.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdCampaignCampaignIdAdGroup<TError = unknown>(
  args: InferRequestType<(typeof client.ad_campaign)[':campaign_id']['ad_group']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ad_campaign)[':campaign_id']['ad_group']['$get']>>
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
        ? getGetAdCampaignCampaignIdAdGroupKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ad_campaign)[':campaign_id']['ad_group']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.ad_campaign[':campaign_id'].ad_group.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAdCampaignCampaignIdAdGroupKey() {
  return ['ad_campaign', '/ad_campaign/:campaign_id/ad_group', 'POST'] as const
}

export function usePostAdCampaignCampaignIdAdGroup<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ad_campaign)[':campaign_id']['ad_group']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.ad_campaign)[':campaign_id']['ad_group']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdCampaignCampaignIdAdGroupKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.ad_campaign)[':campaign_id']['ad_group']['$post']>
        },
      ) => parseResponse(client.ad_campaign[':campaign_id'].ad_group.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAdCampaignCampaignIdAdGroupAdGroupIdKey(
  args: InferRequestType<
    (typeof client.ad_campaign)[':campaign_id']['ad_group'][':ad_group_id']['$get']
  >,
) {
  return ['ad_campaign', '/ad_campaign/:campaign_id/ad_group/:ad_group_id', args] as const
}

export function useGetAdCampaignCampaignIdAdGroupAdGroupId<TError = unknown>(
  args: InferRequestType<
    (typeof client.ad_campaign)[':campaign_id']['ad_group'][':ad_group_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.ad_campaign)[':campaign_id']['ad_group'][':ad_group_id']['$get']
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
        ? getGetAdCampaignCampaignIdAdGroupAdGroupIdKey(args)
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
                (typeof client.ad_campaign)[':campaign_id']['ad_group'][':ad_group_id']['$get']
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
          client.ad_campaign[':campaign_id'].ad_group[':ad_group_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdCampaignCampaignIdAdGroupAdGroupId<TError = unknown>(
  args: InferRequestType<
    (typeof client.ad_campaign)[':campaign_id']['ad_group'][':ad_group_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.ad_campaign)[':campaign_id']['ad_group'][':ad_group_id']['$get']
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
        ? getGetAdCampaignCampaignIdAdGroupAdGroupIdKey(args)
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
                (typeof client.ad_campaign)[':campaign_id']['ad_group'][':ad_group_id']['$get']
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
          client.ad_campaign[':campaign_id'].ad_group[':ad_group_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutAdCampaignCampaignIdAdGroupAdGroupIdKey() {
  return ['ad_campaign', '/ad_campaign/:campaign_id/ad_group/:ad_group_id', 'PUT'] as const
}

export function usePutAdCampaignCampaignIdAdGroupAdGroupId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.ad_campaign)[':campaign_id']['ad_group'][':ad_group_id']['$put']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.ad_campaign)[':campaign_id']['ad_group'][':ad_group_id']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAdCampaignCampaignIdAdGroupAdGroupIdKey()
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
            (typeof client.ad_campaign)[':campaign_id']['ad_group'][':ad_group_id']['$put']
          >
        },
      ) =>
        parseResponse(
          client.ad_campaign[':campaign_id'].ad_group[':ad_group_id'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAdCampaignCampaignIdAdGroupAdGroupIdSuggestBidsKey() {
  return [
    'ad_campaign',
    '/ad_campaign/:campaign_id/ad_group/:ad_group_id/suggest_bids',
    'POST',
  ] as const
}

export function usePostAdCampaignCampaignIdAdGroupAdGroupIdSuggestBids<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ad_campaign)[':campaign_id']['ad_group'][':ad_group_id']['suggest_bids']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.ad_campaign)[':campaign_id']['ad_group'][':ad_group_id']['suggest_bids']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdCampaignCampaignIdAdGroupAdGroupIdSuggestBidsKey()
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
            (typeof client.ad_campaign)[':campaign_id']['ad_group'][':ad_group_id']['suggest_bids']['$post']
          >
        },
      ) =>
        parseResponse(
          client.ad_campaign[':campaign_id'].ad_group[':ad_group_id'].suggest_bids.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAdCampaignCampaignIdAdGroupAdGroupIdSuggestKeywordsKey() {
  return [
    'ad_campaign',
    '/ad_campaign/:campaign_id/ad_group/:ad_group_id/suggest_keywords',
    'POST',
  ] as const
}

export function usePostAdCampaignCampaignIdAdGroupAdGroupIdSuggestKeywords<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ad_campaign)[':campaign_id']['ad_group'][':ad_group_id']['suggest_keywords']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.ad_campaign)[':campaign_id']['ad_group'][':ad_group_id']['suggest_keywords']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdCampaignCampaignIdAdGroupAdGroupIdSuggestKeywordsKey()
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
            (typeof client.ad_campaign)[':campaign_id']['ad_group'][':ad_group_id']['suggest_keywords']['$post']
          >
        },
      ) =>
        parseResponse(
          client.ad_campaign[':campaign_id'].ad_group[':ad_group_id'].suggest_keywords.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAdCampaignCampaignIdBulkCreateAdsByInventoryReferenceKey() {
  return [
    'ad_campaign',
    '/ad_campaign/:campaign_id/bulk_create_ads_by_inventory_reference',
    'POST',
  ] as const
}

export function usePostAdCampaignCampaignIdBulkCreateAdsByInventoryReference<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ad_campaign)[':campaign_id']['bulk_create_ads_by_inventory_reference']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.ad_campaign)[':campaign_id']['bulk_create_ads_by_inventory_reference']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdCampaignCampaignIdBulkCreateAdsByInventoryReferenceKey()
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
            (typeof client.ad_campaign)[':campaign_id']['bulk_create_ads_by_inventory_reference']['$post']
          >
        },
      ) =>
        parseResponse(
          client.ad_campaign[':campaign_id'].bulk_create_ads_by_inventory_reference.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAdCampaignCampaignIdBulkCreateAdsByListingIdKey() {
  return ['ad_campaign', '/ad_campaign/:campaign_id/bulk_create_ads_by_listing_id', 'POST'] as const
}

export function usePostAdCampaignCampaignIdBulkCreateAdsByListingId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ad_campaign)[':campaign_id']['bulk_create_ads_by_listing_id']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.ad_campaign)[':campaign_id']['bulk_create_ads_by_listing_id']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdCampaignCampaignIdBulkCreateAdsByListingIdKey()
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
            (typeof client.ad_campaign)[':campaign_id']['bulk_create_ads_by_listing_id']['$post']
          >
        },
      ) =>
        parseResponse(
          client.ad_campaign[':campaign_id'].bulk_create_ads_by_listing_id.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAdCampaignCampaignIdBulkCreateKeywordKey() {
  return ['ad_campaign', '/ad_campaign/:campaign_id/bulk_create_keyword', 'POST'] as const
}

export function usePostAdCampaignCampaignIdBulkCreateKeyword<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.ad_campaign)[':campaign_id']['bulk_create_keyword']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.ad_campaign)[':campaign_id']['bulk_create_keyword']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdCampaignCampaignIdBulkCreateKeywordKey()
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
            (typeof client.ad_campaign)[':campaign_id']['bulk_create_keyword']['$post']
          >
        },
      ) =>
        parseResponse(
          client.ad_campaign[':campaign_id'].bulk_create_keyword.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAdCampaignCampaignIdBulkDeleteAdsByInventoryReferenceKey() {
  return [
    'ad_campaign',
    '/ad_campaign/:campaign_id/bulk_delete_ads_by_inventory_reference',
    'POST',
  ] as const
}

export function usePostAdCampaignCampaignIdBulkDeleteAdsByInventoryReference<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ad_campaign)[':campaign_id']['bulk_delete_ads_by_inventory_reference']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.ad_campaign)[':campaign_id']['bulk_delete_ads_by_inventory_reference']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdCampaignCampaignIdBulkDeleteAdsByInventoryReferenceKey()
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
            (typeof client.ad_campaign)[':campaign_id']['bulk_delete_ads_by_inventory_reference']['$post']
          >
        },
      ) =>
        parseResponse(
          client.ad_campaign[':campaign_id'].bulk_delete_ads_by_inventory_reference.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAdCampaignCampaignIdBulkDeleteAdsByListingIdKey() {
  return ['ad_campaign', '/ad_campaign/:campaign_id/bulk_delete_ads_by_listing_id', 'POST'] as const
}

export function usePostAdCampaignCampaignIdBulkDeleteAdsByListingId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ad_campaign)[':campaign_id']['bulk_delete_ads_by_listing_id']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.ad_campaign)[':campaign_id']['bulk_delete_ads_by_listing_id']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdCampaignCampaignIdBulkDeleteAdsByListingIdKey()
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
            (typeof client.ad_campaign)[':campaign_id']['bulk_delete_ads_by_listing_id']['$post']
          >
        },
      ) =>
        parseResponse(
          client.ad_campaign[':campaign_id'].bulk_delete_ads_by_listing_id.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAdCampaignCampaignIdBulkUpdateAdsBidByInventoryReferenceKey() {
  return [
    'ad_campaign',
    '/ad_campaign/:campaign_id/bulk_update_ads_bid_by_inventory_reference',
    'POST',
  ] as const
}

export function usePostAdCampaignCampaignIdBulkUpdateAdsBidByInventoryReference<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ad_campaign)[':campaign_id']['bulk_update_ads_bid_by_inventory_reference']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.ad_campaign)[':campaign_id']['bulk_update_ads_bid_by_inventory_reference']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdCampaignCampaignIdBulkUpdateAdsBidByInventoryReferenceKey()
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
            (typeof client.ad_campaign)[':campaign_id']['bulk_update_ads_bid_by_inventory_reference']['$post']
          >
        },
      ) =>
        parseResponse(
          client.ad_campaign[':campaign_id'].bulk_update_ads_bid_by_inventory_reference.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAdCampaignCampaignIdBulkUpdateAdsBidByListingIdKey() {
  return [
    'ad_campaign',
    '/ad_campaign/:campaign_id/bulk_update_ads_bid_by_listing_id',
    'POST',
  ] as const
}

export function usePostAdCampaignCampaignIdBulkUpdateAdsBidByListingId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ad_campaign)[':campaign_id']['bulk_update_ads_bid_by_listing_id']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.ad_campaign)[':campaign_id']['bulk_update_ads_bid_by_listing_id']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdCampaignCampaignIdBulkUpdateAdsBidByListingIdKey()
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
            (typeof client.ad_campaign)[':campaign_id']['bulk_update_ads_bid_by_listing_id']['$post']
          >
        },
      ) =>
        parseResponse(
          client.ad_campaign[':campaign_id'].bulk_update_ads_bid_by_listing_id.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAdCampaignCampaignIdBulkUpdateAdsStatusKey() {
  return ['ad_campaign', '/ad_campaign/:campaign_id/bulk_update_ads_status', 'POST'] as const
}

export function usePostAdCampaignCampaignIdBulkUpdateAdsStatus<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ad_campaign)[':campaign_id']['bulk_update_ads_status']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.ad_campaign)[':campaign_id']['bulk_update_ads_status']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdCampaignCampaignIdBulkUpdateAdsStatusKey()
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
            (typeof client.ad_campaign)[':campaign_id']['bulk_update_ads_status']['$post']
          >
        },
      ) =>
        parseResponse(
          client.ad_campaign[':campaign_id'].bulk_update_ads_status.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAdCampaignCampaignIdBulkUpdateAdsStatusByListingIdKey() {
  return [
    'ad_campaign',
    '/ad_campaign/:campaign_id/bulk_update_ads_status_by_listing_id',
    'POST',
  ] as const
}

export function usePostAdCampaignCampaignIdBulkUpdateAdsStatusByListingId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ad_campaign)[':campaign_id']['bulk_update_ads_status_by_listing_id']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.ad_campaign)[':campaign_id']['bulk_update_ads_status_by_listing_id']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdCampaignCampaignIdBulkUpdateAdsStatusByListingIdKey()
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
            (typeof client.ad_campaign)[':campaign_id']['bulk_update_ads_status_by_listing_id']['$post']
          >
        },
      ) =>
        parseResponse(
          client.ad_campaign[':campaign_id'].bulk_update_ads_status_by_listing_id.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAdCampaignCampaignIdBulkUpdateKeywordKey() {
  return ['ad_campaign', '/ad_campaign/:campaign_id/bulk_update_keyword', 'POST'] as const
}

export function usePostAdCampaignCampaignIdBulkUpdateKeyword<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.ad_campaign)[':campaign_id']['bulk_update_keyword']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.ad_campaign)[':campaign_id']['bulk_update_keyword']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdCampaignCampaignIdBulkUpdateKeywordKey()
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
            (typeof client.ad_campaign)[':campaign_id']['bulk_update_keyword']['$post']
          >
        },
      ) =>
        parseResponse(
          client.ad_campaign[':campaign_id'].bulk_update_keyword.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAdCampaignCampaignIdCloneKey() {
  return ['ad_campaign', '/ad_campaign/:campaign_id/clone', 'POST'] as const
}

export function usePostAdCampaignCampaignIdClone<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ad_campaign)[':campaign_id']['clone']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.ad_campaign)[':campaign_id']['clone']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdCampaignCampaignIdCloneKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.ad_campaign)[':campaign_id']['clone']['$post']> },
      ) => parseResponse(client.ad_campaign[':campaign_id'].clone.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAdCampaignCampaignIdCreateAdsByInventoryReferenceKey() {
  return [
    'ad_campaign',
    '/ad_campaign/:campaign_id/create_ads_by_inventory_reference',
    'POST',
  ] as const
}

export function usePostAdCampaignCampaignIdCreateAdsByInventoryReference<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ad_campaign)[':campaign_id']['create_ads_by_inventory_reference']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.ad_campaign)[':campaign_id']['create_ads_by_inventory_reference']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdCampaignCampaignIdCreateAdsByInventoryReferenceKey()
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
            (typeof client.ad_campaign)[':campaign_id']['create_ads_by_inventory_reference']['$post']
          >
        },
      ) =>
        parseResponse(
          client.ad_campaign[':campaign_id'].create_ads_by_inventory_reference.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAdCampaignCampaignIdDeleteAdsByInventoryReferenceKey() {
  return [
    'ad_campaign',
    '/ad_campaign/:campaign_id/delete_ads_by_inventory_reference',
    'POST',
  ] as const
}

export function usePostAdCampaignCampaignIdDeleteAdsByInventoryReference<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ad_campaign)[':campaign_id']['delete_ads_by_inventory_reference']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.ad_campaign)[':campaign_id']['delete_ads_by_inventory_reference']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdCampaignCampaignIdDeleteAdsByInventoryReferenceKey()
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
            (typeof client.ad_campaign)[':campaign_id']['delete_ads_by_inventory_reference']['$post']
          >
        },
      ) =>
        parseResponse(
          client.ad_campaign[':campaign_id'].delete_ads_by_inventory_reference.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAdCampaignCampaignIdEndKey() {
  return ['ad_campaign', '/ad_campaign/:campaign_id/end', 'POST'] as const
}

export function usePostAdCampaignCampaignIdEnd<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ad_campaign)[':campaign_id']['end']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.ad_campaign)[':campaign_id']['end']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdCampaignCampaignIdEndKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.ad_campaign)[':campaign_id']['end']['$post']> },
      ) => parseResponse(client.ad_campaign[':campaign_id'].end.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAdCampaignCampaignIdGetAdsByInventoryReferenceKey(
  args: InferRequestType<
    (typeof client.ad_campaign)[':campaign_id']['get_ads_by_inventory_reference']['$get']
  >,
) {
  return ['ad_campaign', '/ad_campaign/:campaign_id/get_ads_by_inventory_reference', args] as const
}

export function useGetAdCampaignCampaignIdGetAdsByInventoryReference<TError = unknown>(
  args: InferRequestType<
    (typeof client.ad_campaign)[':campaign_id']['get_ads_by_inventory_reference']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.ad_campaign)[':campaign_id']['get_ads_by_inventory_reference']['$get']
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
        ? getGetAdCampaignCampaignIdGetAdsByInventoryReferenceKey(args)
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
                (typeof client.ad_campaign)[':campaign_id']['get_ads_by_inventory_reference']['$get']
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
          client.ad_campaign[':campaign_id'].get_ads_by_inventory_reference.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdCampaignCampaignIdGetAdsByInventoryReference<TError = unknown>(
  args: InferRequestType<
    (typeof client.ad_campaign)[':campaign_id']['get_ads_by_inventory_reference']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.ad_campaign)[':campaign_id']['get_ads_by_inventory_reference']['$get']
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
        ? getGetAdCampaignCampaignIdGetAdsByInventoryReferenceKey(args)
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
                (typeof client.ad_campaign)[':campaign_id']['get_ads_by_inventory_reference']['$get']
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
          client.ad_campaign[':campaign_id'].get_ads_by_inventory_reference.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetAdCampaignCampaignIdKeywordKey(
  args: InferRequestType<(typeof client.ad_campaign)[':campaign_id']['keyword']['$get']>,
) {
  return ['ad_campaign', '/ad_campaign/:campaign_id/keyword', args] as const
}

export function useGetAdCampaignCampaignIdKeyword<TError = unknown>(
  args: InferRequestType<(typeof client.ad_campaign)[':campaign_id']['keyword']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ad_campaign)[':campaign_id']['keyword']['$get']>>
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
        ? getGetAdCampaignCampaignIdKeywordKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ad_campaign)[':campaign_id']['keyword']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.ad_campaign[':campaign_id'].keyword.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdCampaignCampaignIdKeyword<TError = unknown>(
  args: InferRequestType<(typeof client.ad_campaign)[':campaign_id']['keyword']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ad_campaign)[':campaign_id']['keyword']['$get']>>
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
        ? getGetAdCampaignCampaignIdKeywordKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ad_campaign)[':campaign_id']['keyword']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.ad_campaign[':campaign_id'].keyword.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAdCampaignCampaignIdKeywordKey() {
  return ['ad_campaign', '/ad_campaign/:campaign_id/keyword', 'POST'] as const
}

export function usePostAdCampaignCampaignIdKeyword<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ad_campaign)[':campaign_id']['keyword']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.ad_campaign)[':campaign_id']['keyword']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdCampaignCampaignIdKeywordKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.ad_campaign)[':campaign_id']['keyword']['$post']>
        },
      ) => parseResponse(client.ad_campaign[':campaign_id'].keyword.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAdCampaignCampaignIdKeywordKeywordIdKey(
  args: InferRequestType<
    (typeof client.ad_campaign)[':campaign_id']['keyword'][':keyword_id']['$get']
  >,
) {
  return ['ad_campaign', '/ad_campaign/:campaign_id/keyword/:keyword_id', args] as const
}

export function useGetAdCampaignCampaignIdKeywordKeywordId<TError = unknown>(
  args: InferRequestType<
    (typeof client.ad_campaign)[':campaign_id']['keyword'][':keyword_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.ad_campaign)[':campaign_id']['keyword'][':keyword_id']['$get']
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
        ? getGetAdCampaignCampaignIdKeywordKeywordIdKey(args)
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
                (typeof client.ad_campaign)[':campaign_id']['keyword'][':keyword_id']['$get']
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
          client.ad_campaign[':campaign_id'].keyword[':keyword_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdCampaignCampaignIdKeywordKeywordId<TError = unknown>(
  args: InferRequestType<
    (typeof client.ad_campaign)[':campaign_id']['keyword'][':keyword_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.ad_campaign)[':campaign_id']['keyword'][':keyword_id']['$get']
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
        ? getGetAdCampaignCampaignIdKeywordKeywordIdKey(args)
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
                (typeof client.ad_campaign)[':campaign_id']['keyword'][':keyword_id']['$get']
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
          client.ad_campaign[':campaign_id'].keyword[':keyword_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutAdCampaignCampaignIdKeywordKeywordIdKey() {
  return ['ad_campaign', '/ad_campaign/:campaign_id/keyword/:keyword_id', 'PUT'] as const
}

export function usePutAdCampaignCampaignIdKeywordKeywordId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.ad_campaign)[':campaign_id']['keyword'][':keyword_id']['$put']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.ad_campaign)[':campaign_id']['keyword'][':keyword_id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAdCampaignCampaignIdKeywordKeywordIdKey()
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
            (typeof client.ad_campaign)[':campaign_id']['keyword'][':keyword_id']['$put']
          >
        },
      ) =>
        parseResponse(
          client.ad_campaign[':campaign_id'].keyword[':keyword_id'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAdCampaignCampaignIdPauseKey() {
  return ['ad_campaign', '/ad_campaign/:campaign_id/pause', 'POST'] as const
}

export function usePostAdCampaignCampaignIdPause<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ad_campaign)[':campaign_id']['pause']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.ad_campaign)[':campaign_id']['pause']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdCampaignCampaignIdPauseKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.ad_campaign)[':campaign_id']['pause']['$post']> },
      ) => parseResponse(client.ad_campaign[':campaign_id'].pause.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAdCampaignCampaignIdResumeKey() {
  return ['ad_campaign', '/ad_campaign/:campaign_id/resume', 'POST'] as const
}

export function usePostAdCampaignCampaignIdResume<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ad_campaign)[':campaign_id']['resume']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.ad_campaign)[':campaign_id']['resume']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdCampaignCampaignIdResumeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.ad_campaign)[':campaign_id']['resume']['$post']>
        },
      ) => parseResponse(client.ad_campaign[':campaign_id'].resume.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAdCampaignCampaignIdSuggestItemsKey(
  args: InferRequestType<(typeof client.ad_campaign)[':campaign_id']['suggest_items']['$get']>,
) {
  return ['ad_campaign', '/ad_campaign/:campaign_id/suggest_items', args] as const
}

export function useGetAdCampaignCampaignIdSuggestItems<TError = unknown>(
  args: InferRequestType<(typeof client.ad_campaign)[':campaign_id']['suggest_items']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.ad_campaign)[':campaign_id']['suggest_items']['$get']>
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
        ? getGetAdCampaignCampaignIdSuggestItemsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.ad_campaign)[':campaign_id']['suggest_items']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.ad_campaign[':campaign_id'].suggest_items.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdCampaignCampaignIdSuggestItems<TError = unknown>(
  args: InferRequestType<(typeof client.ad_campaign)[':campaign_id']['suggest_items']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.ad_campaign)[':campaign_id']['suggest_items']['$get']>
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
        ? getGetAdCampaignCampaignIdSuggestItemsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.ad_campaign)[':campaign_id']['suggest_items']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.ad_campaign[':campaign_id'].suggest_items.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAdCampaignCampaignIdUpdateAdRateStrategyKey() {
  return ['ad_campaign', '/ad_campaign/:campaign_id/update_ad_rate_strategy', 'POST'] as const
}

export function usePostAdCampaignCampaignIdUpdateAdRateStrategy<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.ad_campaign)[':campaign_id']['update_ad_rate_strategy']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.ad_campaign)[':campaign_id']['update_ad_rate_strategy']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdCampaignCampaignIdUpdateAdRateStrategyKey()
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
            (typeof client.ad_campaign)[':campaign_id']['update_ad_rate_strategy']['$post']
          >
        },
      ) =>
        parseResponse(
          client.ad_campaign[':campaign_id'].update_ad_rate_strategy.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAdCampaignCampaignIdUpdateCampaignBudgetKey() {
  return ['ad_campaign', '/ad_campaign/:campaign_id/update_campaign_budget', 'POST'] as const
}

export function usePostAdCampaignCampaignIdUpdateCampaignBudget<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.ad_campaign)[':campaign_id']['update_campaign_budget']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.ad_campaign)[':campaign_id']['update_campaign_budget']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdCampaignCampaignIdUpdateCampaignBudgetKey()
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
            (typeof client.ad_campaign)[':campaign_id']['update_campaign_budget']['$post']
          >
        },
      ) =>
        parseResponse(
          client.ad_campaign[':campaign_id'].update_campaign_budget.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAdCampaignCampaignIdUpdateCampaignIdentificationKey() {
  return [
    'ad_campaign',
    '/ad_campaign/:campaign_id/update_campaign_identification',
    'POST',
  ] as const
}

export function usePostAdCampaignCampaignIdUpdateCampaignIdentification<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.ad_campaign)[':campaign_id']['update_campaign_identification']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.ad_campaign)[':campaign_id']['update_campaign_identification']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdCampaignCampaignIdUpdateCampaignIdentificationKey()
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
            (typeof client.ad_campaign)[':campaign_id']['update_campaign_identification']['$post']
          >
        },
      ) =>
        parseResponse(
          client.ad_campaign[':campaign_id'].update_campaign_identification.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAdReportReportIdKey(
  args: InferRequestType<(typeof client.ad_report)[':report_id']['$get']>,
) {
  return ['ad_report', '/ad_report/:report_id', args] as const
}

export function useGetAdReportReportId<TError = unknown>(
  args: InferRequestType<(typeof client.ad_report)[':report_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.ad_report)[':report_id']['$get']>>>
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
        ? getGetAdReportReportIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.ad_report)[':report_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ad_report[':report_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdReportReportId<TError = unknown>(
  args: InferRequestType<(typeof client.ad_report)[':report_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.ad_report)[':report_id']['$get']>>>
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
        ? getGetAdReportReportIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.ad_report)[':report_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ad_report[':report_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAdReportMetadataKey() {
  return ['ad_report_metadata', '/ad_report_metadata'] as const
}

export function useGetAdReportMetadata<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ad_report_metadata.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAdReportMetadataKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ad_report_metadata.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ad_report_metadata.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdReportMetadata<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ad_report_metadata.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAdReportMetadataKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ad_report_metadata.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ad_report_metadata.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAdReportMetadataReportTypeKey(
  args: InferRequestType<(typeof client.ad_report_metadata)[':report_type']['$get']>,
) {
  return ['ad_report_metadata', '/ad_report_metadata/:report_type', args] as const
}

export function useGetAdReportMetadataReportType<TError = unknown>(
  args: InferRequestType<(typeof client.ad_report_metadata)[':report_type']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ad_report_metadata)[':report_type']['$get']>>
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
        ? getGetAdReportMetadataReportTypeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ad_report_metadata)[':report_type']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.ad_report_metadata[':report_type'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdReportMetadataReportType<TError = unknown>(
  args: InferRequestType<(typeof client.ad_report_metadata)[':report_type']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ad_report_metadata)[':report_type']['$get']>>
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
        ? getGetAdReportMetadataReportTypeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ad_report_metadata)[':report_type']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.ad_report_metadata[':report_type'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAdReportTaskKey(args: InferRequestType<typeof client.ad_report_task.$get>) {
  return ['ad_report_task', '/ad_report_task', args] as const
}

export function useGetAdReportTask<TError = unknown>(
  args: InferRequestType<typeof client.ad_report_task.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ad_report_task.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAdReportTaskKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ad_report_task.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ad_report_task.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdReportTask<TError = unknown>(
  args: InferRequestType<typeof client.ad_report_task.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ad_report_task.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAdReportTaskKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ad_report_task.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ad_report_task.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAdReportTaskKey() {
  return ['ad_report_task', '/ad_report_task', 'POST'] as const
}

export function usePostAdReportTask<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ad_report_task.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.ad_report_task.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdReportTaskKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.ad_report_task.$post> }) =>
        parseResponse(client.ad_report_task.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAdReportTaskReportTaskIdKey(
  args: InferRequestType<(typeof client.ad_report_task)[':report_task_id']['$get']>,
) {
  return ['ad_report_task', '/ad_report_task/:report_task_id', args] as const
}

export function useGetAdReportTaskReportTaskId<TError = unknown>(
  args: InferRequestType<(typeof client.ad_report_task)[':report_task_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ad_report_task)[':report_task_id']['$get']>>
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
        ? getGetAdReportTaskReportTaskIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ad_report_task)[':report_task_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ad_report_task[':report_task_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdReportTaskReportTaskId<TError = unknown>(
  args: InferRequestType<(typeof client.ad_report_task)[':report_task_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ad_report_task)[':report_task_id']['$get']>>
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
        ? getGetAdReportTaskReportTaskIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ad_report_task)[':report_task_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ad_report_task[':report_task_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteAdReportTaskReportTaskIdKey() {
  return ['ad_report_task', '/ad_report_task/:report_task_id', 'DELETE'] as const
}

export function useDeleteAdReportTaskReportTaskId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ad_report_task)[':report_task_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.ad_report_task)[':report_task_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAdReportTaskReportTaskIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.ad_report_task)[':report_task_id']['$delete']> },
      ) => parseResponse(client.ad_report_task[':report_task_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostBulkCreateNegativeKeywordKey() {
  return ['bulk_create_negative_keyword', '/bulk_create_negative_keyword', 'POST'] as const
}

export function usePostBulkCreateNegativeKeyword<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.bulk_create_negative_keyword.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.bulk_create_negative_keyword.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBulkCreateNegativeKeywordKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.bulk_create_negative_keyword.$post> },
      ) => parseResponse(client.bulk_create_negative_keyword.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostBulkUpdateNegativeKeywordKey() {
  return ['bulk_update_negative_keyword', '/bulk_update_negative_keyword', 'POST'] as const
}

export function usePostBulkUpdateNegativeKeyword<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.bulk_update_negative_keyword.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.bulk_update_negative_keyword.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBulkUpdateNegativeKeywordKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.bulk_update_negative_keyword.$post> },
      ) => parseResponse(client.bulk_update_negative_keyword.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostItemPriceMarkdownKey() {
  return ['item_price_markdown', '/item_price_markdown', 'POST'] as const
}

export function usePostItemPriceMarkdown<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.item_price_markdown.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.item_price_markdown.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostItemPriceMarkdownKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.item_price_markdown.$post> }) =>
        parseResponse(client.item_price_markdown.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetItemPriceMarkdownPromotionIdKey(
  args: InferRequestType<(typeof client.item_price_markdown)[':promotion_id']['$get']>,
) {
  return ['item_price_markdown', '/item_price_markdown/:promotion_id', args] as const
}

export function useGetItemPriceMarkdownPromotionId<TError = unknown>(
  args: InferRequestType<(typeof client.item_price_markdown)[':promotion_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.item_price_markdown)[':promotion_id']['$get']>>
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
        ? getGetItemPriceMarkdownPromotionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.item_price_markdown)[':promotion_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.item_price_markdown[':promotion_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetItemPriceMarkdownPromotionId<TError = unknown>(
  args: InferRequestType<(typeof client.item_price_markdown)[':promotion_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.item_price_markdown)[':promotion_id']['$get']>>
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
        ? getGetItemPriceMarkdownPromotionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.item_price_markdown)[':promotion_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.item_price_markdown[':promotion_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutItemPriceMarkdownPromotionIdKey() {
  return ['item_price_markdown', '/item_price_markdown/:promotion_id', 'PUT'] as const
}

export function usePutItemPriceMarkdownPromotionId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.item_price_markdown)[':promotion_id']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.item_price_markdown)[':promotion_id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutItemPriceMarkdownPromotionIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.item_price_markdown)[':promotion_id']['$put']> },
      ) => parseResponse(client.item_price_markdown[':promotion_id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteItemPriceMarkdownPromotionIdKey() {
  return ['item_price_markdown', '/item_price_markdown/:promotion_id', 'DELETE'] as const
}

export function useDeleteItemPriceMarkdownPromotionId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.item_price_markdown)[':promotion_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.item_price_markdown)[':promotion_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteItemPriceMarkdownPromotionIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.item_price_markdown)[':promotion_id']['$delete']>
        },
      ) => parseResponse(client.item_price_markdown[':promotion_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostItemPromotionKey() {
  return ['item_promotion', '/item_promotion', 'POST'] as const
}

export function usePostItemPromotion<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.item_promotion.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.item_promotion.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostItemPromotionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.item_promotion.$post> }) =>
        parseResponse(client.item_promotion.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetItemPromotionPromotionIdKey(
  args: InferRequestType<(typeof client.item_promotion)[':promotion_id']['$get']>,
) {
  return ['item_promotion', '/item_promotion/:promotion_id', args] as const
}

export function useGetItemPromotionPromotionId<TError = unknown>(
  args: InferRequestType<(typeof client.item_promotion)[':promotion_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.item_promotion)[':promotion_id']['$get']>>
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
        ? getGetItemPromotionPromotionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.item_promotion)[':promotion_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.item_promotion[':promotion_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetItemPromotionPromotionId<TError = unknown>(
  args: InferRequestType<(typeof client.item_promotion)[':promotion_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.item_promotion)[':promotion_id']['$get']>>
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
        ? getGetItemPromotionPromotionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.item_promotion)[':promotion_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.item_promotion[':promotion_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutItemPromotionPromotionIdKey() {
  return ['item_promotion', '/item_promotion/:promotion_id', 'PUT'] as const
}

export function usePutItemPromotionPromotionId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.item_promotion)[':promotion_id']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.item_promotion)[':promotion_id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutItemPromotionPromotionIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.item_promotion)[':promotion_id']['$put']> },
      ) => parseResponse(client.item_promotion[':promotion_id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteItemPromotionPromotionIdKey() {
  return ['item_promotion', '/item_promotion/:promotion_id', 'DELETE'] as const
}

export function useDeleteItemPromotionPromotionId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.item_promotion)[':promotion_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.item_promotion)[':promotion_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteItemPromotionPromotionIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.item_promotion)[':promotion_id']['$delete']> },
      ) => parseResponse(client.item_promotion[':promotion_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetNegativeKeywordKey(
  args: InferRequestType<typeof client.negative_keyword.$get>,
) {
  return ['negative_keyword', '/negative_keyword', args] as const
}

export function useGetNegativeKeyword<TError = unknown>(
  args: InferRequestType<typeof client.negative_keyword.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.negative_keyword.$get>>>>
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
        ? getGetNegativeKeywordKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.negative_keyword.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.negative_keyword.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNegativeKeyword<TError = unknown>(
  args: InferRequestType<typeof client.negative_keyword.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.negative_keyword.$get>>>>
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
        ? getGetNegativeKeywordKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.negative_keyword.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.negative_keyword.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostNegativeKeywordKey() {
  return ['negative_keyword', '/negative_keyword', 'POST'] as const
}

export function usePostNegativeKeyword<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.negative_keyword.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.negative_keyword.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostNegativeKeywordKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.negative_keyword.$post> }) =>
        parseResponse(client.negative_keyword.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetNegativeKeywordNegativeKeywordIdKey(
  args: InferRequestType<(typeof client.negative_keyword)[':negative_keyword_id']['$get']>,
) {
  return ['negative_keyword', '/negative_keyword/:negative_keyword_id', args] as const
}

export function useGetNegativeKeywordNegativeKeywordId<TError = unknown>(
  args: InferRequestType<(typeof client.negative_keyword)[':negative_keyword_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.negative_keyword)[':negative_keyword_id']['$get']>>
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
        ? getGetNegativeKeywordNegativeKeywordIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.negative_keyword)[':negative_keyword_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.negative_keyword[':negative_keyword_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNegativeKeywordNegativeKeywordId<TError = unknown>(
  args: InferRequestType<(typeof client.negative_keyword)[':negative_keyword_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.negative_keyword)[':negative_keyword_id']['$get']>>
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
        ? getGetNegativeKeywordNegativeKeywordIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.negative_keyword)[':negative_keyword_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.negative_keyword[':negative_keyword_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutNegativeKeywordNegativeKeywordIdKey() {
  return ['negative_keyword', '/negative_keyword/:negative_keyword_id', 'PUT'] as const
}

export function usePutNegativeKeywordNegativeKeywordId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.negative_keyword)[':negative_keyword_id']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.negative_keyword)[':negative_keyword_id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutNegativeKeywordNegativeKeywordIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.negative_keyword)[':negative_keyword_id']['$put']>
        },
      ) => parseResponse(client.negative_keyword[':negative_keyword_id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPromotionKey(args: InferRequestType<typeof client.promotion.$get>) {
  return ['promotion', '/promotion', args] as const
}

export function useGetPromotion<TError = unknown>(
  args: InferRequestType<typeof client.promotion.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.promotion.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPromotionKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.promotion.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.promotion.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPromotion<TError = unknown>(
  args: InferRequestType<typeof client.promotion.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.promotion.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPromotionKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.promotion.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.promotion.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPromotionPromotionIdGetListingSetKey(
  args: InferRequestType<(typeof client.promotion)[':promotion_id']['get_listing_set']['$get']>,
) {
  return ['promotion', '/promotion/:promotion_id/get_listing_set', args] as const
}

export function useGetPromotionPromotionIdGetListingSet<TError = unknown>(
  args: InferRequestType<(typeof client.promotion)[':promotion_id']['get_listing_set']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.promotion)[':promotion_id']['get_listing_set']['$get']>
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
        ? getGetPromotionPromotionIdGetListingSetKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.promotion)[':promotion_id']['get_listing_set']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.promotion[':promotion_id'].get_listing_set.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPromotionPromotionIdGetListingSet<TError = unknown>(
  args: InferRequestType<(typeof client.promotion)[':promotion_id']['get_listing_set']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.promotion)[':promotion_id']['get_listing_set']['$get']>
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
        ? getGetPromotionPromotionIdGetListingSetKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.promotion)[':promotion_id']['get_listing_set']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.promotion[':promotion_id'].get_listing_set.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostPromotionPromotionIdPauseKey() {
  return ['promotion', '/promotion/:promotion_id/pause', 'POST'] as const
}

export function usePostPromotionPromotionIdPause<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.promotion)[':promotion_id']['pause']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.promotion)[':promotion_id']['pause']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPromotionPromotionIdPauseKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.promotion)[':promotion_id']['pause']['$post']> },
      ) => parseResponse(client.promotion[':promotion_id'].pause.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostPromotionPromotionIdResumeKey() {
  return ['promotion', '/promotion/:promotion_id/resume', 'POST'] as const
}

export function usePostPromotionPromotionIdResume<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.promotion)[':promotion_id']['resume']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.promotion)[':promotion_id']['resume']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPromotionPromotionIdResumeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.promotion)[':promotion_id']['resume']['$post']> },
      ) => parseResponse(client.promotion[':promotion_id'].resume.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPromotionReportKey(
  args: InferRequestType<typeof client.promotion_report.$get>,
) {
  return ['promotion_report', '/promotion_report', args] as const
}

export function useGetPromotionReport<TError = unknown>(
  args: InferRequestType<typeof client.promotion_report.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.promotion_report.$get>>>>
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
        ? getGetPromotionReportKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.promotion_report.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.promotion_report.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPromotionReport<TError = unknown>(
  args: InferRequestType<typeof client.promotion_report.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.promotion_report.$get>>>>
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
        ? getGetPromotionReportKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.promotion_report.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.promotion_report.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPromotionSummaryReportKey(
  args: InferRequestType<typeof client.promotion_summary_report.$get>,
) {
  return ['promotion_summary_report', '/promotion_summary_report', args] as const
}

export function useGetPromotionSummaryReport<TError = unknown>(
  args: InferRequestType<typeof client.promotion_summary_report.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.promotion_summary_report.$get>>>
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
        ? getGetPromotionSummaryReportKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.promotion_summary_report.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.promotion_summary_report.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPromotionSummaryReport<TError = unknown>(
  args: InferRequestType<typeof client.promotion_summary_report.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.promotion_summary_report.$get>>>
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
        ? getGetPromotionSummaryReportKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.promotion_summary_report.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.promotion_summary_report.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}
