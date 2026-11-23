import {
  useQuery,
  useSuspenseQuery,
  useMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/preact-query'
import type {
  UseQueryOptions,
  UseSuspenseQueryOptions,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/preact-query'
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

export function getAdCampaignQueryKey(args: InferRequestType<typeof client.ad_campaign.$get>) {
  return ['ad_campaign', '/ad_campaign', args] as const
}

export function getAdCampaignQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ad_campaign.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.ad_campaign.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ad_campaign.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAdCampaignQueryKey>
  >({
    queryKey: getAdCampaignQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ad_campaign.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useAdCampaign<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ad_campaign.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.ad_campaign.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ad_campaign.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getAdCampaignQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAdCampaignQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAdCampaign<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ad_campaign.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.ad_campaign.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ad_campaign.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getAdCampaignQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAdCampaignQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostAdCampaignMutationKey() {
  return ['ad_campaign', '/ad_campaign', 'POST'] as const
}

export function getPostAdCampaignMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ad_campaign.$post>>>>>,
    TError,
    InferRequestType<typeof client.ad_campaign.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAdCampaignMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.ad_campaign.$post>) {
      return parseResponse(client.ad_campaign.$post(args, options))
    },
  })
}

export function usePostAdCampaign<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ad_campaign.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.ad_campaign.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAdCampaignMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getAdCampaignFindCampaignByAdReferenceQueryKey(
  args: InferRequestType<typeof client.ad_campaign.find_campaign_by_ad_reference.$get>,
) {
  return ['ad_campaign', '/ad_campaign/find_campaign_by_ad_reference', args] as const
}

export function getAdCampaignFindCampaignByAdReferenceQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.ad_campaign.find_campaign_by_ad_reference.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.ad_campaign.find_campaign_by_ad_reference.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.ad_campaign.find_campaign_by_ad_reference.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdCampaignFindCampaignByAdReferenceQueryKey>
  >({
    queryKey: getAdCampaignFindCampaignByAdReferenceQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ad_campaign.find_campaign_by_ad_reference.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAdCampaignFindCampaignByAdReference<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.ad_campaign.find_campaign_by_ad_reference.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.ad_campaign.find_campaign_by_ad_reference.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.ad_campaign.find_campaign_by_ad_reference.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAdCampaignFindCampaignByAdReferenceQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getAdCampaignFindCampaignByAdReferenceQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAdCampaignFindCampaignByAdReference<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.ad_campaign.find_campaign_by_ad_reference.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.ad_campaign.find_campaign_by_ad_reference.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.ad_campaign.find_campaign_by_ad_reference.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAdCampaignFindCampaignByAdReferenceQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getAdCampaignFindCampaignByAdReferenceQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getAdCampaignGetCampaignByNameQueryKey(
  args: InferRequestType<typeof client.ad_campaign.get_campaign_by_name.$get>,
) {
  return ['ad_campaign', '/ad_campaign/get_campaign_by_name', args] as const
}

export function getAdCampaignGetCampaignByNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.ad_campaign.get_campaign_by_name.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.ad_campaign.get_campaign_by_name.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.ad_campaign.get_campaign_by_name.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdCampaignGetCampaignByNameQueryKey>
  >({
    queryKey: getAdCampaignGetCampaignByNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ad_campaign.get_campaign_by_name.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAdCampaignGetCampaignByName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.ad_campaign.get_campaign_by_name.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.ad_campaign.get_campaign_by_name.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.ad_campaign.get_campaign_by_name.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAdCampaignGetCampaignByNameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getAdCampaignGetCampaignByNameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAdCampaignGetCampaignByName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.ad_campaign.get_campaign_by_name.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.ad_campaign.get_campaign_by_name.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.ad_campaign.get_campaign_by_name.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAdCampaignGetCampaignByNameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getAdCampaignGetCampaignByNameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getAdCampaignCampaignIdQueryKey(
  args: InferRequestType<(typeof client.ad_campaign)[':campaign_id']['$get']>,
) {
  return ['ad_campaign', '/ad_campaign/:campaign_id', args] as const
}

export function getAdCampaignCampaignIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.ad_campaign)[':campaign_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ad_campaign)[':campaign_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ad_campaign)[':campaign_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdCampaignCampaignIdQueryKey>
  >({
    queryKey: getAdCampaignCampaignIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ad_campaign[':campaign_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAdCampaignCampaignId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.ad_campaign)[':campaign_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ad_campaign)[':campaign_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.ad_campaign)[':campaign_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAdCampaignCampaignIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAdCampaignCampaignIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAdCampaignCampaignId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.ad_campaign)[':campaign_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ad_campaign)[':campaign_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.ad_campaign)[':campaign_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAdCampaignCampaignIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAdCampaignCampaignIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDeleteAdCampaignCampaignIdMutationKey() {
  return ['ad_campaign', '/ad_campaign/:campaign_id', 'DELETE'] as const
}

export function getDeleteAdCampaignCampaignIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ad_campaign)[':campaign_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.ad_campaign)[':campaign_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAdCampaignCampaignIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.ad_campaign)[':campaign_id']['$delete']>,
    ) {
      return parseResponse(client.ad_campaign[':campaign_id'].$delete(args, options))
    },
  })
}

export function useDeleteAdCampaignCampaignId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ad_campaign)[':campaign_id']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.ad_campaign)[':campaign_id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteAdCampaignCampaignIdMutationOptions<TError, TOnMutateResult>(
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

export function getAdCampaignCampaignIdAdQueryKey(
  args: InferRequestType<(typeof client.ad_campaign)[':campaign_id']['ad']['$get']>,
) {
  return ['ad_campaign', '/ad_campaign/:campaign_id/ad', args] as const
}

export function getAdCampaignCampaignIdAdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ad_campaign)[':campaign_id']['ad']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ad_campaign)[':campaign_id']['ad']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ad_campaign)[':campaign_id']['ad']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdCampaignCampaignIdAdQueryKey>
  >({
    queryKey: getAdCampaignCampaignIdAdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ad_campaign[':campaign_id'].ad.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAdCampaignCampaignIdAd<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ad_campaign)[':campaign_id']['ad']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ad_campaign)[':campaign_id']['ad']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.ad_campaign)[':campaign_id']['ad']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAdCampaignCampaignIdAdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getAdCampaignCampaignIdAdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAdCampaignCampaignIdAd<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ad_campaign)[':campaign_id']['ad']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ad_campaign)[':campaign_id']['ad']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.ad_campaign)[':campaign_id']['ad']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAdCampaignCampaignIdAdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getAdCampaignCampaignIdAdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostAdCampaignCampaignIdAdMutationKey() {
  return ['ad_campaign', '/ad_campaign/:campaign_id/ad', 'POST'] as const
}

export function getPostAdCampaignCampaignIdAdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ad_campaign)[':campaign_id']['ad']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.ad_campaign)[':campaign_id']['ad']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdCampaignCampaignIdAdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.ad_campaign)[':campaign_id']['ad']['$post']>,
    ) {
      return parseResponse(client.ad_campaign[':campaign_id'].ad.$post(args, options))
    },
  })
}

export function usePostAdCampaignCampaignIdAd<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.ad_campaign)[':campaign_id']['ad']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.ad_campaign)[':campaign_id']['ad']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAdCampaignCampaignIdAdMutationOptions<TError, TOnMutateResult>(
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

export function getAdCampaignCampaignIdAdAdIdQueryKey(
  args: InferRequestType<(typeof client.ad_campaign)[':campaign_id']['ad'][':ad_id']['$get']>,
) {
  return ['ad_campaign', '/ad_campaign/:campaign_id/ad/:ad_id', args] as const
}

export function getAdCampaignCampaignIdAdAdIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ad_campaign)[':campaign_id']['ad'][':ad_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ad_campaign)[':campaign_id']['ad'][':ad_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ad_campaign)[':campaign_id']['ad'][':ad_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdCampaignCampaignIdAdAdIdQueryKey>
  >({
    queryKey: getAdCampaignCampaignIdAdAdIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ad_campaign[':campaign_id'].ad[':ad_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAdCampaignCampaignIdAdAdId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ad_campaign)[':campaign_id']['ad'][':ad_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ad_campaign)[':campaign_id']['ad'][':ad_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.ad_campaign)[':campaign_id']['ad'][':ad_id']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAdCampaignCampaignIdAdAdIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getAdCampaignCampaignIdAdAdIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAdCampaignCampaignIdAdAdId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ad_campaign)[':campaign_id']['ad'][':ad_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ad_campaign)[':campaign_id']['ad'][':ad_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.ad_campaign)[':campaign_id']['ad'][':ad_id']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAdCampaignCampaignIdAdAdIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getAdCampaignCampaignIdAdAdIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteAdCampaignCampaignIdAdAdIdMutationKey() {
  return ['ad_campaign', '/ad_campaign/:campaign_id/ad/:ad_id', 'DELETE'] as const
}

export function getDeleteAdCampaignCampaignIdAdAdIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.ad_campaign)[':campaign_id']['ad'][':ad_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAdCampaignCampaignIdAdAdIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ad_campaign)[':campaign_id']['ad'][':ad_id']['$delete']
      >,
    ) {
      return parseResponse(client.ad_campaign[':campaign_id'].ad[':ad_id'].$delete(args, options))
    },
  })
}

export function useDeleteAdCampaignCampaignIdAdAdId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<(typeof client.ad_campaign)[':campaign_id']['ad'][':ad_id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteAdCampaignCampaignIdAdAdIdMutationOptions<
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

export function getPostAdCampaignCampaignIdAdAdIdUpdateBidMutationKey() {
  return ['ad_campaign', '/ad_campaign/:campaign_id/ad/:ad_id/update_bid', 'POST'] as const
}

export function getPostAdCampaignCampaignIdAdAdIdUpdateBidMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.ad_campaign)[':campaign_id']['ad'][':ad_id']['update_bid']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAdCampaignCampaignIdAdAdIdUpdateBidMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ad_campaign)[':campaign_id']['ad'][':ad_id']['update_bid']['$post']
      >,
    ) {
      return parseResponse(
        client.ad_campaign[':campaign_id'].ad[':ad_id'].update_bid.$post(args, options),
      )
    },
  })
}

export function usePostAdCampaignCampaignIdAdAdIdUpdateBid<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client.ad_campaign)[':campaign_id']['ad'][':ad_id']['update_bid']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAdCampaignCampaignIdAdAdIdUpdateBidMutationOptions<
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

export function getAdCampaignCampaignIdAdGroupQueryKey(
  args: InferRequestType<(typeof client.ad_campaign)[':campaign_id']['ad_group']['$get']>,
) {
  return ['ad_campaign', '/ad_campaign/:campaign_id/ad_group', args] as const
}

export function getAdCampaignCampaignIdAdGroupQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ad_campaign)[':campaign_id']['ad_group']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ad_campaign)[':campaign_id']['ad_group']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ad_campaign)[':campaign_id']['ad_group']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdCampaignCampaignIdAdGroupQueryKey>
  >({
    queryKey: getAdCampaignCampaignIdAdGroupQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ad_campaign[':campaign_id'].ad_group.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAdCampaignCampaignIdAdGroup<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ad_campaign)[':campaign_id']['ad_group']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ad_campaign)[':campaign_id']['ad_group']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.ad_campaign)[':campaign_id']['ad_group']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAdCampaignCampaignIdAdGroupQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getAdCampaignCampaignIdAdGroupQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAdCampaignCampaignIdAdGroup<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ad_campaign)[':campaign_id']['ad_group']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ad_campaign)[':campaign_id']['ad_group']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.ad_campaign)[':campaign_id']['ad_group']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAdCampaignCampaignIdAdGroupQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getAdCampaignCampaignIdAdGroupQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostAdCampaignCampaignIdAdGroupMutationKey() {
  return ['ad_campaign', '/ad_campaign/:campaign_id/ad_group', 'POST'] as const
}

export function getPostAdCampaignCampaignIdAdGroupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ad_campaign)[':campaign_id']['ad_group']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.ad_campaign)[':campaign_id']['ad_group']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdCampaignCampaignIdAdGroupMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.ad_campaign)[':campaign_id']['ad_group']['$post']>,
    ) {
      return parseResponse(client.ad_campaign[':campaign_id'].ad_group.$post(args, options))
    },
  })
}

export function usePostAdCampaignCampaignIdAdGroup<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.ad_campaign)[':campaign_id']['ad_group']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.ad_campaign)[':campaign_id']['ad_group']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAdCampaignCampaignIdAdGroupMutationOptions<
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

export function getAdCampaignCampaignIdAdGroupAdGroupIdQueryKey(
  args: InferRequestType<
    (typeof client.ad_campaign)[':campaign_id']['ad_group'][':ad_group_id']['$get']
  >,
) {
  return ['ad_campaign', '/ad_campaign/:campaign_id/ad_group/:ad_group_id', args] as const
}

export function getAdCampaignCampaignIdAdGroupAdGroupIdQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.ad_campaign)[':campaign_id']['ad_group'][':ad_group_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getAdCampaignCampaignIdAdGroupAdGroupIdQueryKey>
  >({
    queryKey: getAdCampaignCampaignIdAdGroupAdGroupIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ad_campaign[':campaign_id'].ad_group[':ad_group_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAdCampaignCampaignIdAdGroupAdGroupId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.ad_campaign)[':campaign_id']['ad_group'][':ad_group_id']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getAdCampaignCampaignIdAdGroupAdGroupIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getAdCampaignCampaignIdAdGroupAdGroupIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAdCampaignCampaignIdAdGroupAdGroupId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.ad_campaign)[':campaign_id']['ad_group'][':ad_group_id']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getAdCampaignCampaignIdAdGroupAdGroupIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getAdCampaignCampaignIdAdGroupAdGroupIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutAdCampaignCampaignIdAdGroupAdGroupIdMutationKey() {
  return ['ad_campaign', '/ad_campaign/:campaign_id/ad_group/:ad_group_id', 'PUT'] as const
}

export function getPutAdCampaignCampaignIdAdGroupAdGroupIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.ad_campaign)[':campaign_id']['ad_group'][':ad_group_id']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutAdCampaignCampaignIdAdGroupAdGroupIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ad_campaign)[':campaign_id']['ad_group'][':ad_group_id']['$put']
      >,
    ) {
      return parseResponse(
        client.ad_campaign[':campaign_id'].ad_group[':ad_group_id'].$put(args, options),
      )
    },
  })
}

export function usePutAdCampaignCampaignIdAdGroupAdGroupId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client.ad_campaign)[':campaign_id']['ad_group'][':ad_group_id']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutAdCampaignCampaignIdAdGroupAdGroupIdMutationOptions<
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

export function getPostAdCampaignCampaignIdAdGroupAdGroupIdSuggestBidsMutationKey() {
  return [
    'ad_campaign',
    '/ad_campaign/:campaign_id/ad_group/:ad_group_id/suggest_bids',
    'POST',
  ] as const
}

export function getPostAdCampaignCampaignIdAdGroupAdGroupIdSuggestBidsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.ad_campaign)[':campaign_id']['ad_group'][':ad_group_id']['suggest_bids']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAdCampaignCampaignIdAdGroupAdGroupIdSuggestBidsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ad_campaign)[':campaign_id']['ad_group'][':ad_group_id']['suggest_bids']['$post']
      >,
    ) {
      return parseResponse(
        client.ad_campaign[':campaign_id'].ad_group[':ad_group_id'].suggest_bids.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostAdCampaignCampaignIdAdGroupAdGroupIdSuggestBids<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client.ad_campaign)[':campaign_id']['ad_group'][':ad_group_id']['suggest_bids']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAdCampaignCampaignIdAdGroupAdGroupIdSuggestBidsMutationOptions<
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

export function getPostAdCampaignCampaignIdAdGroupAdGroupIdSuggestKeywordsMutationKey() {
  return [
    'ad_campaign',
    '/ad_campaign/:campaign_id/ad_group/:ad_group_id/suggest_keywords',
    'POST',
  ] as const
}

export function getPostAdCampaignCampaignIdAdGroupAdGroupIdSuggestKeywordsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.ad_campaign)[':campaign_id']['ad_group'][':ad_group_id']['suggest_keywords']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAdCampaignCampaignIdAdGroupAdGroupIdSuggestKeywordsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ad_campaign)[':campaign_id']['ad_group'][':ad_group_id']['suggest_keywords']['$post']
      >,
    ) {
      return parseResponse(
        client.ad_campaign[':campaign_id'].ad_group[':ad_group_id'].suggest_keywords.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostAdCampaignCampaignIdAdGroupAdGroupIdSuggestKeywords<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client.ad_campaign)[':campaign_id']['ad_group'][':ad_group_id']['suggest_keywords']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostAdCampaignCampaignIdAdGroupAdGroupIdSuggestKeywordsMutationOptions<
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

export function getPostAdCampaignCampaignIdBulkCreateAdsByInventoryReferenceMutationKey() {
  return [
    'ad_campaign',
    '/ad_campaign/:campaign_id/bulk_create_ads_by_inventory_reference',
    'POST',
  ] as const
}

export function getPostAdCampaignCampaignIdBulkCreateAdsByInventoryReferenceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.ad_campaign)[':campaign_id']['bulk_create_ads_by_inventory_reference']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAdCampaignCampaignIdBulkCreateAdsByInventoryReferenceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ad_campaign)[':campaign_id']['bulk_create_ads_by_inventory_reference']['$post']
      >,
    ) {
      return parseResponse(
        client.ad_campaign[':campaign_id'].bulk_create_ads_by_inventory_reference.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostAdCampaignCampaignIdBulkCreateAdsByInventoryReference<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client.ad_campaign)[':campaign_id']['bulk_create_ads_by_inventory_reference']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostAdCampaignCampaignIdBulkCreateAdsByInventoryReferenceMutationOptions<
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

export function getPostAdCampaignCampaignIdBulkCreateAdsByListingIdMutationKey() {
  return ['ad_campaign', '/ad_campaign/:campaign_id/bulk_create_ads_by_listing_id', 'POST'] as const
}

export function getPostAdCampaignCampaignIdBulkCreateAdsByListingIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.ad_campaign)[':campaign_id']['bulk_create_ads_by_listing_id']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAdCampaignCampaignIdBulkCreateAdsByListingIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ad_campaign)[':campaign_id']['bulk_create_ads_by_listing_id']['$post']
      >,
    ) {
      return parseResponse(
        client.ad_campaign[':campaign_id'].bulk_create_ads_by_listing_id.$post(args, options),
      )
    },
  })
}

export function usePostAdCampaignCampaignIdBulkCreateAdsByListingId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client.ad_campaign)[':campaign_id']['bulk_create_ads_by_listing_id']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAdCampaignCampaignIdBulkCreateAdsByListingIdMutationOptions<
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

export function getPostAdCampaignCampaignIdBulkCreateKeywordMutationKey() {
  return ['ad_campaign', '/ad_campaign/:campaign_id/bulk_create_keyword', 'POST'] as const
}

export function getPostAdCampaignCampaignIdBulkCreateKeywordMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.ad_campaign)[':campaign_id']['bulk_create_keyword']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdCampaignCampaignIdBulkCreateKeywordMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ad_campaign)[':campaign_id']['bulk_create_keyword']['$post']
      >,
    ) {
      return parseResponse(
        client.ad_campaign[':campaign_id'].bulk_create_keyword.$post(args, options),
      )
    },
  })
}

export function usePostAdCampaignCampaignIdBulkCreateKeyword<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.ad_campaign)[':campaign_id']['bulk_create_keyword']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.ad_campaign)[':campaign_id']['bulk_create_keyword']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAdCampaignCampaignIdBulkCreateKeywordMutationOptions<
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

export function getPostAdCampaignCampaignIdBulkDeleteAdsByInventoryReferenceMutationKey() {
  return [
    'ad_campaign',
    '/ad_campaign/:campaign_id/bulk_delete_ads_by_inventory_reference',
    'POST',
  ] as const
}

export function getPostAdCampaignCampaignIdBulkDeleteAdsByInventoryReferenceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.ad_campaign)[':campaign_id']['bulk_delete_ads_by_inventory_reference']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAdCampaignCampaignIdBulkDeleteAdsByInventoryReferenceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ad_campaign)[':campaign_id']['bulk_delete_ads_by_inventory_reference']['$post']
      >,
    ) {
      return parseResponse(
        client.ad_campaign[':campaign_id'].bulk_delete_ads_by_inventory_reference.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostAdCampaignCampaignIdBulkDeleteAdsByInventoryReference<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client.ad_campaign)[':campaign_id']['bulk_delete_ads_by_inventory_reference']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostAdCampaignCampaignIdBulkDeleteAdsByInventoryReferenceMutationOptions<
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

export function getPostAdCampaignCampaignIdBulkDeleteAdsByListingIdMutationKey() {
  return ['ad_campaign', '/ad_campaign/:campaign_id/bulk_delete_ads_by_listing_id', 'POST'] as const
}

export function getPostAdCampaignCampaignIdBulkDeleteAdsByListingIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.ad_campaign)[':campaign_id']['bulk_delete_ads_by_listing_id']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAdCampaignCampaignIdBulkDeleteAdsByListingIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ad_campaign)[':campaign_id']['bulk_delete_ads_by_listing_id']['$post']
      >,
    ) {
      return parseResponse(
        client.ad_campaign[':campaign_id'].bulk_delete_ads_by_listing_id.$post(args, options),
      )
    },
  })
}

export function usePostAdCampaignCampaignIdBulkDeleteAdsByListingId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client.ad_campaign)[':campaign_id']['bulk_delete_ads_by_listing_id']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAdCampaignCampaignIdBulkDeleteAdsByListingIdMutationOptions<
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

export function getPostAdCampaignCampaignIdBulkUpdateAdsBidByInventoryReferenceMutationKey() {
  return [
    'ad_campaign',
    '/ad_campaign/:campaign_id/bulk_update_ads_bid_by_inventory_reference',
    'POST',
  ] as const
}

export function getPostAdCampaignCampaignIdBulkUpdateAdsBidByInventoryReferenceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.ad_campaign)[':campaign_id']['bulk_update_ads_bid_by_inventory_reference']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAdCampaignCampaignIdBulkUpdateAdsBidByInventoryReferenceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ad_campaign)[':campaign_id']['bulk_update_ads_bid_by_inventory_reference']['$post']
      >,
    ) {
      return parseResponse(
        client.ad_campaign[':campaign_id'].bulk_update_ads_bid_by_inventory_reference.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostAdCampaignCampaignIdBulkUpdateAdsBidByInventoryReference<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client.ad_campaign)[':campaign_id']['bulk_update_ads_bid_by_inventory_reference']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostAdCampaignCampaignIdBulkUpdateAdsBidByInventoryReferenceMutationOptions<
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

export function getPostAdCampaignCampaignIdBulkUpdateAdsBidByListingIdMutationKey() {
  return [
    'ad_campaign',
    '/ad_campaign/:campaign_id/bulk_update_ads_bid_by_listing_id',
    'POST',
  ] as const
}

export function getPostAdCampaignCampaignIdBulkUpdateAdsBidByListingIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.ad_campaign)[':campaign_id']['bulk_update_ads_bid_by_listing_id']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAdCampaignCampaignIdBulkUpdateAdsBidByListingIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ad_campaign)[':campaign_id']['bulk_update_ads_bid_by_listing_id']['$post']
      >,
    ) {
      return parseResponse(
        client.ad_campaign[':campaign_id'].bulk_update_ads_bid_by_listing_id.$post(args, options),
      )
    },
  })
}

export function usePostAdCampaignCampaignIdBulkUpdateAdsBidByListingId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client.ad_campaign)[':campaign_id']['bulk_update_ads_bid_by_listing_id']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAdCampaignCampaignIdBulkUpdateAdsBidByListingIdMutationOptions<
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

export function getPostAdCampaignCampaignIdBulkUpdateAdsStatusMutationKey() {
  return ['ad_campaign', '/ad_campaign/:campaign_id/bulk_update_ads_status', 'POST'] as const
}

export function getPostAdCampaignCampaignIdBulkUpdateAdsStatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.ad_campaign)[':campaign_id']['bulk_update_ads_status']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAdCampaignCampaignIdBulkUpdateAdsStatusMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ad_campaign)[':campaign_id']['bulk_update_ads_status']['$post']
      >,
    ) {
      return parseResponse(
        client.ad_campaign[':campaign_id'].bulk_update_ads_status.$post(args, options),
      )
    },
  })
}

export function usePostAdCampaignCampaignIdBulkUpdateAdsStatus<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client.ad_campaign)[':campaign_id']['bulk_update_ads_status']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAdCampaignCampaignIdBulkUpdateAdsStatusMutationOptions<
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

export function getPostAdCampaignCampaignIdBulkUpdateAdsStatusByListingIdMutationKey() {
  return [
    'ad_campaign',
    '/ad_campaign/:campaign_id/bulk_update_ads_status_by_listing_id',
    'POST',
  ] as const
}

export function getPostAdCampaignCampaignIdBulkUpdateAdsStatusByListingIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.ad_campaign)[':campaign_id']['bulk_update_ads_status_by_listing_id']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAdCampaignCampaignIdBulkUpdateAdsStatusByListingIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ad_campaign)[':campaign_id']['bulk_update_ads_status_by_listing_id']['$post']
      >,
    ) {
      return parseResponse(
        client.ad_campaign[':campaign_id'].bulk_update_ads_status_by_listing_id.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostAdCampaignCampaignIdBulkUpdateAdsStatusByListingId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client.ad_campaign)[':campaign_id']['bulk_update_ads_status_by_listing_id']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAdCampaignCampaignIdBulkUpdateAdsStatusByListingIdMutationOptions<
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

export function getPostAdCampaignCampaignIdBulkUpdateKeywordMutationKey() {
  return ['ad_campaign', '/ad_campaign/:campaign_id/bulk_update_keyword', 'POST'] as const
}

export function getPostAdCampaignCampaignIdBulkUpdateKeywordMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.ad_campaign)[':campaign_id']['bulk_update_keyword']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdCampaignCampaignIdBulkUpdateKeywordMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ad_campaign)[':campaign_id']['bulk_update_keyword']['$post']
      >,
    ) {
      return parseResponse(
        client.ad_campaign[':campaign_id'].bulk_update_keyword.$post(args, options),
      )
    },
  })
}

export function usePostAdCampaignCampaignIdBulkUpdateKeyword<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.ad_campaign)[':campaign_id']['bulk_update_keyword']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.ad_campaign)[':campaign_id']['bulk_update_keyword']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAdCampaignCampaignIdBulkUpdateKeywordMutationOptions<
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

export function getPostAdCampaignCampaignIdCloneMutationKey() {
  return ['ad_campaign', '/ad_campaign/:campaign_id/clone', 'POST'] as const
}

export function getPostAdCampaignCampaignIdCloneMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ad_campaign)[':campaign_id']['clone']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.ad_campaign)[':campaign_id']['clone']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdCampaignCampaignIdCloneMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.ad_campaign)[':campaign_id']['clone']['$post']>,
    ) {
      return parseResponse(client.ad_campaign[':campaign_id'].clone.$post(args, options))
    },
  })
}

export function usePostAdCampaignCampaignIdClone<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.ad_campaign)[':campaign_id']['clone']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.ad_campaign)[':campaign_id']['clone']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAdCampaignCampaignIdCloneMutationOptions<TError, TOnMutateResult>(
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

export function getPostAdCampaignCampaignIdCreateAdsByInventoryReferenceMutationKey() {
  return [
    'ad_campaign',
    '/ad_campaign/:campaign_id/create_ads_by_inventory_reference',
    'POST',
  ] as const
}

export function getPostAdCampaignCampaignIdCreateAdsByInventoryReferenceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.ad_campaign)[':campaign_id']['create_ads_by_inventory_reference']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAdCampaignCampaignIdCreateAdsByInventoryReferenceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ad_campaign)[':campaign_id']['create_ads_by_inventory_reference']['$post']
      >,
    ) {
      return parseResponse(
        client.ad_campaign[':campaign_id'].create_ads_by_inventory_reference.$post(args, options),
      )
    },
  })
}

export function usePostAdCampaignCampaignIdCreateAdsByInventoryReference<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client.ad_campaign)[':campaign_id']['create_ads_by_inventory_reference']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAdCampaignCampaignIdCreateAdsByInventoryReferenceMutationOptions<
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

export function getPostAdCampaignCampaignIdDeleteAdsByInventoryReferenceMutationKey() {
  return [
    'ad_campaign',
    '/ad_campaign/:campaign_id/delete_ads_by_inventory_reference',
    'POST',
  ] as const
}

export function getPostAdCampaignCampaignIdDeleteAdsByInventoryReferenceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.ad_campaign)[':campaign_id']['delete_ads_by_inventory_reference']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAdCampaignCampaignIdDeleteAdsByInventoryReferenceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ad_campaign)[':campaign_id']['delete_ads_by_inventory_reference']['$post']
      >,
    ) {
      return parseResponse(
        client.ad_campaign[':campaign_id'].delete_ads_by_inventory_reference.$post(args, options),
      )
    },
  })
}

export function usePostAdCampaignCampaignIdDeleteAdsByInventoryReference<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client.ad_campaign)[':campaign_id']['delete_ads_by_inventory_reference']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAdCampaignCampaignIdDeleteAdsByInventoryReferenceMutationOptions<
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

export function getPostAdCampaignCampaignIdEndMutationKey() {
  return ['ad_campaign', '/ad_campaign/:campaign_id/end', 'POST'] as const
}

export function getPostAdCampaignCampaignIdEndMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ad_campaign)[':campaign_id']['end']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.ad_campaign)[':campaign_id']['end']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdCampaignCampaignIdEndMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.ad_campaign)[':campaign_id']['end']['$post']>,
    ) {
      return parseResponse(client.ad_campaign[':campaign_id'].end.$post(args, options))
    },
  })
}

export function usePostAdCampaignCampaignIdEnd<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ad_campaign)[':campaign_id']['end']['$post']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.ad_campaign)[':campaign_id']['end']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAdCampaignCampaignIdEndMutationOptions<TError, TOnMutateResult>(
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

export function getAdCampaignCampaignIdGetAdsByInventoryReferenceQueryKey(
  args: InferRequestType<
    (typeof client.ad_campaign)[':campaign_id']['get_ads_by_inventory_reference']['$get']
  >,
) {
  return ['ad_campaign', '/ad_campaign/:campaign_id/get_ads_by_inventory_reference', args] as const
}

export function getAdCampaignCampaignIdGetAdsByInventoryReferenceQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.ad_campaign)[':campaign_id']['get_ads_by_inventory_reference']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getAdCampaignCampaignIdGetAdsByInventoryReferenceQueryKey>
  >({
    queryKey: getAdCampaignCampaignIdGetAdsByInventoryReferenceQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ad_campaign[':campaign_id'].get_ads_by_inventory_reference.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAdCampaignCampaignIdGetAdsByInventoryReference<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.ad_campaign)[':campaign_id']['get_ads_by_inventory_reference']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getAdCampaignCampaignIdGetAdsByInventoryReferenceQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getAdCampaignCampaignIdGetAdsByInventoryReferenceQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAdCampaignCampaignIdGetAdsByInventoryReference<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.ad_campaign)[':campaign_id']['get_ads_by_inventory_reference']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getAdCampaignCampaignIdGetAdsByInventoryReferenceQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getAdCampaignCampaignIdGetAdsByInventoryReferenceQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getAdCampaignCampaignIdKeywordQueryKey(
  args: InferRequestType<(typeof client.ad_campaign)[':campaign_id']['keyword']['$get']>,
) {
  return ['ad_campaign', '/ad_campaign/:campaign_id/keyword', args] as const
}

export function getAdCampaignCampaignIdKeywordQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ad_campaign)[':campaign_id']['keyword']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ad_campaign)[':campaign_id']['keyword']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ad_campaign)[':campaign_id']['keyword']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdCampaignCampaignIdKeywordQueryKey>
  >({
    queryKey: getAdCampaignCampaignIdKeywordQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ad_campaign[':campaign_id'].keyword.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAdCampaignCampaignIdKeyword<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ad_campaign)[':campaign_id']['keyword']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ad_campaign)[':campaign_id']['keyword']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.ad_campaign)[':campaign_id']['keyword']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAdCampaignCampaignIdKeywordQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getAdCampaignCampaignIdKeywordQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAdCampaignCampaignIdKeyword<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ad_campaign)[':campaign_id']['keyword']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ad_campaign)[':campaign_id']['keyword']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.ad_campaign)[':campaign_id']['keyword']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAdCampaignCampaignIdKeywordQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getAdCampaignCampaignIdKeywordQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostAdCampaignCampaignIdKeywordMutationKey() {
  return ['ad_campaign', '/ad_campaign/:campaign_id/keyword', 'POST'] as const
}

export function getPostAdCampaignCampaignIdKeywordMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ad_campaign)[':campaign_id']['keyword']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.ad_campaign)[':campaign_id']['keyword']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdCampaignCampaignIdKeywordMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.ad_campaign)[':campaign_id']['keyword']['$post']>,
    ) {
      return parseResponse(client.ad_campaign[':campaign_id'].keyword.$post(args, options))
    },
  })
}

export function usePostAdCampaignCampaignIdKeyword<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.ad_campaign)[':campaign_id']['keyword']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.ad_campaign)[':campaign_id']['keyword']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAdCampaignCampaignIdKeywordMutationOptions<
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

export function getAdCampaignCampaignIdKeywordKeywordIdQueryKey(
  args: InferRequestType<
    (typeof client.ad_campaign)[':campaign_id']['keyword'][':keyword_id']['$get']
  >,
) {
  return ['ad_campaign', '/ad_campaign/:campaign_id/keyword/:keyword_id', args] as const
}

export function getAdCampaignCampaignIdKeywordKeywordIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.ad_campaign)[':campaign_id']['keyword'][':keyword_id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.ad_campaign)[':campaign_id']['keyword'][':keyword_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getAdCampaignCampaignIdKeywordKeywordIdQueryKey>
  >({
    queryKey: getAdCampaignCampaignIdKeywordKeywordIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ad_campaign[':campaign_id'].keyword[':keyword_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAdCampaignCampaignIdKeywordKeywordId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.ad_campaign)[':campaign_id']['keyword'][':keyword_id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.ad_campaign)[':campaign_id']['keyword'][':keyword_id']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getAdCampaignCampaignIdKeywordKeywordIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getAdCampaignCampaignIdKeywordKeywordIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAdCampaignCampaignIdKeywordKeywordId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.ad_campaign)[':campaign_id']['keyword'][':keyword_id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.ad_campaign)[':campaign_id']['keyword'][':keyword_id']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getAdCampaignCampaignIdKeywordKeywordIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getAdCampaignCampaignIdKeywordKeywordIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutAdCampaignCampaignIdKeywordKeywordIdMutationKey() {
  return ['ad_campaign', '/ad_campaign/:campaign_id/keyword/:keyword_id', 'PUT'] as const
}

export function getPutAdCampaignCampaignIdKeywordKeywordIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.ad_campaign)[':campaign_id']['keyword'][':keyword_id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutAdCampaignCampaignIdKeywordKeywordIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ad_campaign)[':campaign_id']['keyword'][':keyword_id']['$put']
      >,
    ) {
      return parseResponse(
        client.ad_campaign[':campaign_id'].keyword[':keyword_id'].$put(args, options),
      )
    },
  })
}

export function usePutAdCampaignCampaignIdKeywordKeywordId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client.ad_campaign)[':campaign_id']['keyword'][':keyword_id']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutAdCampaignCampaignIdKeywordKeywordIdMutationOptions<
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

export function getPostAdCampaignCampaignIdPauseMutationKey() {
  return ['ad_campaign', '/ad_campaign/:campaign_id/pause', 'POST'] as const
}

export function getPostAdCampaignCampaignIdPauseMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ad_campaign)[':campaign_id']['pause']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.ad_campaign)[':campaign_id']['pause']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdCampaignCampaignIdPauseMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.ad_campaign)[':campaign_id']['pause']['$post']>,
    ) {
      return parseResponse(client.ad_campaign[':campaign_id'].pause.$post(args, options))
    },
  })
}

export function usePostAdCampaignCampaignIdPause<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ad_campaign)[':campaign_id']['pause']['$post']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.ad_campaign)[':campaign_id']['pause']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAdCampaignCampaignIdPauseMutationOptions<TError, TOnMutateResult>(
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

export function getPostAdCampaignCampaignIdResumeMutationKey() {
  return ['ad_campaign', '/ad_campaign/:campaign_id/resume', 'POST'] as const
}

export function getPostAdCampaignCampaignIdResumeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ad_campaign)[':campaign_id']['resume']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.ad_campaign)[':campaign_id']['resume']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdCampaignCampaignIdResumeMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.ad_campaign)[':campaign_id']['resume']['$post']>,
    ) {
      return parseResponse(client.ad_campaign[':campaign_id'].resume.$post(args, options))
    },
  })
}

export function usePostAdCampaignCampaignIdResume<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ad_campaign)[':campaign_id']['resume']['$post']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.ad_campaign)[':campaign_id']['resume']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAdCampaignCampaignIdResumeMutationOptions<
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

export function getAdCampaignCampaignIdSuggestItemsQueryKey(
  args: InferRequestType<(typeof client.ad_campaign)[':campaign_id']['suggest_items']['$get']>,
) {
  return ['ad_campaign', '/ad_campaign/:campaign_id/suggest_items', args] as const
}

export function getAdCampaignCampaignIdSuggestItemsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ad_campaign)[':campaign_id']['suggest_items']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ad_campaign)[':campaign_id']['suggest_items']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ad_campaign)[':campaign_id']['suggest_items']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdCampaignCampaignIdSuggestItemsQueryKey>
  >({
    queryKey: getAdCampaignCampaignIdSuggestItemsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ad_campaign[':campaign_id'].suggest_items.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAdCampaignCampaignIdSuggestItems<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ad_campaign)[':campaign_id']['suggest_items']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ad_campaign)[':campaign_id']['suggest_items']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.ad_campaign)[':campaign_id']['suggest_items']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAdCampaignCampaignIdSuggestItemsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getAdCampaignCampaignIdSuggestItemsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAdCampaignCampaignIdSuggestItems<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ad_campaign)[':campaign_id']['suggest_items']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ad_campaign)[':campaign_id']['suggest_items']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.ad_campaign)[':campaign_id']['suggest_items']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAdCampaignCampaignIdSuggestItemsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getAdCampaignCampaignIdSuggestItemsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostAdCampaignCampaignIdUpdateAdRateStrategyMutationKey() {
  return ['ad_campaign', '/ad_campaign/:campaign_id/update_ad_rate_strategy', 'POST'] as const
}

export function getPostAdCampaignCampaignIdUpdateAdRateStrategyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.ad_campaign)[':campaign_id']['update_ad_rate_strategy']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAdCampaignCampaignIdUpdateAdRateStrategyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ad_campaign)[':campaign_id']['update_ad_rate_strategy']['$post']
      >,
    ) {
      return parseResponse(
        client.ad_campaign[':campaign_id'].update_ad_rate_strategy.$post(args, options),
      )
    },
  })
}

export function usePostAdCampaignCampaignIdUpdateAdRateStrategy<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client.ad_campaign)[':campaign_id']['update_ad_rate_strategy']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAdCampaignCampaignIdUpdateAdRateStrategyMutationOptions<
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

export function getPostAdCampaignCampaignIdUpdateCampaignBudgetMutationKey() {
  return ['ad_campaign', '/ad_campaign/:campaign_id/update_campaign_budget', 'POST'] as const
}

export function getPostAdCampaignCampaignIdUpdateCampaignBudgetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.ad_campaign)[':campaign_id']['update_campaign_budget']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAdCampaignCampaignIdUpdateCampaignBudgetMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ad_campaign)[':campaign_id']['update_campaign_budget']['$post']
      >,
    ) {
      return parseResponse(
        client.ad_campaign[':campaign_id'].update_campaign_budget.$post(args, options),
      )
    },
  })
}

export function usePostAdCampaignCampaignIdUpdateCampaignBudget<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client.ad_campaign)[':campaign_id']['update_campaign_budget']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAdCampaignCampaignIdUpdateCampaignBudgetMutationOptions<
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

export function getPostAdCampaignCampaignIdUpdateCampaignIdentificationMutationKey() {
  return [
    'ad_campaign',
    '/ad_campaign/:campaign_id/update_campaign_identification',
    'POST',
  ] as const
}

export function getPostAdCampaignCampaignIdUpdateCampaignIdentificationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.ad_campaign)[':campaign_id']['update_campaign_identification']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAdCampaignCampaignIdUpdateCampaignIdentificationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ad_campaign)[':campaign_id']['update_campaign_identification']['$post']
      >,
    ) {
      return parseResponse(
        client.ad_campaign[':campaign_id'].update_campaign_identification.$post(args, options),
      )
    },
  })
}

export function usePostAdCampaignCampaignIdUpdateCampaignIdentification<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client.ad_campaign)[':campaign_id']['update_campaign_identification']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAdCampaignCampaignIdUpdateCampaignIdentificationMutationOptions<
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

export function getAdReportReportIdQueryKey(
  args: InferRequestType<(typeof client.ad_report)[':report_id']['$get']>,
) {
  return ['ad_report', '/ad_report/:report_id', args] as const
}

export function getAdReportReportIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.ad_report)[':report_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ad_report)[':report_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.ad_report)[':report_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdReportReportIdQueryKey>
  >({
    queryKey: getAdReportReportIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ad_report[':report_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAdReportReportId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.ad_report)[':report_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ad_report)[':report_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.ad_report)[':report_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAdReportReportIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAdReportReportIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAdReportReportId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.ad_report)[':report_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ad_report)[':report_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.ad_report)[':report_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAdReportReportIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAdReportReportIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getAdReportMetadataQueryKey() {
  return ['ad_report_metadata', '/ad_report_metadata'] as const
}

export function getAdReportMetadataQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ad_report_metadata.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ad_report_metadata.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAdReportMetadataQueryKey>
  >({
    queryKey: getAdReportMetadataQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.ad_report_metadata.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAdReportMetadata<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ad_report_metadata.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.ad_report_metadata.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAdReportMetadataQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAdReportMetadataQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAdReportMetadata<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ad_report_metadata.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.ad_report_metadata.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAdReportMetadataQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAdReportMetadataQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getAdReportMetadataReportTypeQueryKey(
  args: InferRequestType<(typeof client.ad_report_metadata)[':report_type']['$get']>,
) {
  return ['ad_report_metadata', '/ad_report_metadata/:report_type', args] as const
}

export function getAdReportMetadataReportTypeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ad_report_metadata)[':report_type']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ad_report_metadata)[':report_type']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ad_report_metadata)[':report_type']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdReportMetadataReportTypeQueryKey>
  >({
    queryKey: getAdReportMetadataReportTypeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ad_report_metadata[':report_type'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAdReportMetadataReportType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ad_report_metadata)[':report_type']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ad_report_metadata)[':report_type']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.ad_report_metadata)[':report_type']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAdReportMetadataReportTypeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getAdReportMetadataReportTypeQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAdReportMetadataReportType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ad_report_metadata)[':report_type']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ad_report_metadata)[':report_type']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.ad_report_metadata)[':report_type']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAdReportMetadataReportTypeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getAdReportMetadataReportTypeQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getAdReportTaskQueryKey(args: InferRequestType<typeof client.ad_report_task.$get>) {
  return ['ad_report_task', '/ad_report_task', args] as const
}

export function getAdReportTaskQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ad_report_task.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.ad_report_task.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ad_report_task.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAdReportTaskQueryKey>
  >({
    queryKey: getAdReportTaskQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ad_report_task.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useAdReportTask<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ad_report_task.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.ad_report_task.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ad_report_task.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getAdReportTaskQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAdReportTaskQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAdReportTask<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ad_report_task.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.ad_report_task.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ad_report_task.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getAdReportTaskQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAdReportTaskQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostAdReportTaskMutationKey() {
  return ['ad_report_task', '/ad_report_task', 'POST'] as const
}

export function getPostAdReportTaskMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ad_report_task.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.ad_report_task.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAdReportTaskMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.ad_report_task.$post>) {
      return parseResponse(client.ad_report_task.$post(args, options))
    },
  })
}

export function usePostAdReportTask<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ad_report_task.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.ad_report_task.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAdReportTaskMutationOptions<TError, TOnMutateResult>(
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

export function getAdReportTaskReportTaskIdQueryKey(
  args: InferRequestType<(typeof client.ad_report_task)[':report_task_id']['$get']>,
) {
  return ['ad_report_task', '/ad_report_task/:report_task_id', args] as const
}

export function getAdReportTaskReportTaskIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ad_report_task)[':report_task_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ad_report_task)[':report_task_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ad_report_task)[':report_task_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdReportTaskReportTaskIdQueryKey>
  >({
    queryKey: getAdReportTaskReportTaskIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ad_report_task[':report_task_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAdReportTaskReportTaskId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ad_report_task)[':report_task_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ad_report_task)[':report_task_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.ad_report_task)[':report_task_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAdReportTaskReportTaskIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getAdReportTaskReportTaskIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAdReportTaskReportTaskId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ad_report_task)[':report_task_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ad_report_task)[':report_task_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.ad_report_task)[':report_task_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAdReportTaskReportTaskIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getAdReportTaskReportTaskIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteAdReportTaskReportTaskIdMutationKey() {
  return ['ad_report_task', '/ad_report_task/:report_task_id', 'DELETE'] as const
}

export function getDeleteAdReportTaskReportTaskIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.ad_report_task)[':report_task_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.ad_report_task)[':report_task_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAdReportTaskReportTaskIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.ad_report_task)[':report_task_id']['$delete']>,
    ) {
      return parseResponse(client.ad_report_task[':report_task_id'].$delete(args, options))
    },
  })
}

export function useDeleteAdReportTaskReportTaskId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ad_report_task)[':report_task_id']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.ad_report_task)[':report_task_id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteAdReportTaskReportTaskIdMutationOptions<
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

export function getPostBulkCreateNegativeKeywordMutationKey() {
  return ['bulk_create_negative_keyword', '/bulk_create_negative_keyword', 'POST'] as const
}

export function getPostBulkCreateNegativeKeywordMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.bulk_create_negative_keyword.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.bulk_create_negative_keyword.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostBulkCreateNegativeKeywordMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.bulk_create_negative_keyword.$post>) {
      return parseResponse(client.bulk_create_negative_keyword.$post(args, options))
    },
  })
}

export function usePostBulkCreateNegativeKeyword<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.bulk_create_negative_keyword.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.bulk_create_negative_keyword.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostBulkCreateNegativeKeywordMutationOptions<TError, TOnMutateResult>(
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

export function getPostBulkUpdateNegativeKeywordMutationKey() {
  return ['bulk_update_negative_keyword', '/bulk_update_negative_keyword', 'POST'] as const
}

export function getPostBulkUpdateNegativeKeywordMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.bulk_update_negative_keyword.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.bulk_update_negative_keyword.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostBulkUpdateNegativeKeywordMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.bulk_update_negative_keyword.$post>) {
      return parseResponse(client.bulk_update_negative_keyword.$post(args, options))
    },
  })
}

export function usePostBulkUpdateNegativeKeyword<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.bulk_update_negative_keyword.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.bulk_update_negative_keyword.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostBulkUpdateNegativeKeywordMutationOptions<TError, TOnMutateResult>(
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

export function getPostItemPriceMarkdownMutationKey() {
  return ['item_price_markdown', '/item_price_markdown', 'POST'] as const
}

export function getPostItemPriceMarkdownMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.item_price_markdown.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.item_price_markdown.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostItemPriceMarkdownMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.item_price_markdown.$post>) {
      return parseResponse(client.item_price_markdown.$post(args, options))
    },
  })
}

export function usePostItemPriceMarkdown<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.item_price_markdown.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.item_price_markdown.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostItemPriceMarkdownMutationOptions<TError, TOnMutateResult>(
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

export function getItemPriceMarkdownPromotionIdQueryKey(
  args: InferRequestType<(typeof client.item_price_markdown)[':promotion_id']['$get']>,
) {
  return ['item_price_markdown', '/item_price_markdown/:promotion_id', args] as const
}

export function getItemPriceMarkdownPromotionIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.item_price_markdown)[':promotion_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.item_price_markdown)[':promotion_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.item_price_markdown)[':promotion_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getItemPriceMarkdownPromotionIdQueryKey>
  >({
    queryKey: getItemPriceMarkdownPromotionIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.item_price_markdown[':promotion_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useItemPriceMarkdownPromotionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.item_price_markdown)[':promotion_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.item_price_markdown)[':promotion_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.item_price_markdown)[':promotion_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getItemPriceMarkdownPromotionIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getItemPriceMarkdownPromotionIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseItemPriceMarkdownPromotionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.item_price_markdown)[':promotion_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.item_price_markdown)[':promotion_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.item_price_markdown)[':promotion_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getItemPriceMarkdownPromotionIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getItemPriceMarkdownPromotionIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutItemPriceMarkdownPromotionIdMutationKey() {
  return ['item_price_markdown', '/item_price_markdown/:promotion_id', 'PUT'] as const
}

export function getPutItemPriceMarkdownPromotionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.item_price_markdown)[':promotion_id']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.item_price_markdown)[':promotion_id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutItemPriceMarkdownPromotionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.item_price_markdown)[':promotion_id']['$put']>,
    ) {
      return parseResponse(client.item_price_markdown[':promotion_id'].$put(args, options))
    },
  })
}

export function usePutItemPriceMarkdownPromotionId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.item_price_markdown)[':promotion_id']['$put']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.item_price_markdown)[':promotion_id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutItemPriceMarkdownPromotionIdMutationOptions<
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

export function getDeleteItemPriceMarkdownPromotionIdMutationKey() {
  return ['item_price_markdown', '/item_price_markdown/:promotion_id', 'DELETE'] as const
}

export function getDeleteItemPriceMarkdownPromotionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.item_price_markdown)[':promotion_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.item_price_markdown)[':promotion_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteItemPriceMarkdownPromotionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.item_price_markdown)[':promotion_id']['$delete']>,
    ) {
      return parseResponse(client.item_price_markdown[':promotion_id'].$delete(args, options))
    },
  })
}

export function useDeleteItemPriceMarkdownPromotionId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.item_price_markdown)[':promotion_id']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.item_price_markdown)[':promotion_id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteItemPriceMarkdownPromotionIdMutationOptions<
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

export function getPostItemPromotionMutationKey() {
  return ['item_promotion', '/item_promotion', 'POST'] as const
}

export function getPostItemPromotionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.item_promotion.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.item_promotion.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostItemPromotionMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.item_promotion.$post>) {
      return parseResponse(client.item_promotion.$post(args, options))
    },
  })
}

export function usePostItemPromotion<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.item_promotion.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.item_promotion.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostItemPromotionMutationOptions<TError, TOnMutateResult>(
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

export function getItemPromotionPromotionIdQueryKey(
  args: InferRequestType<(typeof client.item_promotion)[':promotion_id']['$get']>,
) {
  return ['item_promotion', '/item_promotion/:promotion_id', args] as const
}

export function getItemPromotionPromotionIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.item_promotion)[':promotion_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.item_promotion)[':promotion_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.item_promotion)[':promotion_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getItemPromotionPromotionIdQueryKey>
  >({
    queryKey: getItemPromotionPromotionIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.item_promotion[':promotion_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useItemPromotionPromotionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.item_promotion)[':promotion_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.item_promotion)[':promotion_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.item_promotion)[':promotion_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getItemPromotionPromotionIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getItemPromotionPromotionIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseItemPromotionPromotionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.item_promotion)[':promotion_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.item_promotion)[':promotion_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.item_promotion)[':promotion_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getItemPromotionPromotionIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getItemPromotionPromotionIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutItemPromotionPromotionIdMutationKey() {
  return ['item_promotion', '/item_promotion/:promotion_id', 'PUT'] as const
}

export function getPutItemPromotionPromotionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.item_promotion)[':promotion_id']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.item_promotion)[':promotion_id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutItemPromotionPromotionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.item_promotion)[':promotion_id']['$put']>,
    ) {
      return parseResponse(client.item_promotion[':promotion_id'].$put(args, options))
    },
  })
}

export function usePutItemPromotionPromotionId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.item_promotion)[':promotion_id']['$put']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.item_promotion)[':promotion_id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutItemPromotionPromotionIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteItemPromotionPromotionIdMutationKey() {
  return ['item_promotion', '/item_promotion/:promotion_id', 'DELETE'] as const
}

export function getDeleteItemPromotionPromotionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.item_promotion)[':promotion_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.item_promotion)[':promotion_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteItemPromotionPromotionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.item_promotion)[':promotion_id']['$delete']>,
    ) {
      return parseResponse(client.item_promotion[':promotion_id'].$delete(args, options))
    },
  })
}

export function useDeleteItemPromotionPromotionId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.item_promotion)[':promotion_id']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.item_promotion)[':promotion_id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteItemPromotionPromotionIdMutationOptions<
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

export function getNegativeKeywordQueryKey(
  args: InferRequestType<typeof client.negative_keyword.$get>,
) {
  return ['negative_keyword', '/negative_keyword', args] as const
}

export function getNegativeKeywordQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.negative_keyword.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.negative_keyword.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.negative_keyword.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getNegativeKeywordQueryKey>
  >({
    queryKey: getNegativeKeywordQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.negative_keyword.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useNegativeKeyword<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.negative_keyword.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.negative_keyword.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.negative_keyword.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getNegativeKeywordQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getNegativeKeywordQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseNegativeKeyword<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.negative_keyword.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.negative_keyword.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.negative_keyword.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getNegativeKeywordQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getNegativeKeywordQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostNegativeKeywordMutationKey() {
  return ['negative_keyword', '/negative_keyword', 'POST'] as const
}

export function getPostNegativeKeywordMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.negative_keyword.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.negative_keyword.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostNegativeKeywordMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.negative_keyword.$post>) {
      return parseResponse(client.negative_keyword.$post(args, options))
    },
  })
}

export function usePostNegativeKeyword<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.negative_keyword.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.negative_keyword.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostNegativeKeywordMutationOptions<TError, TOnMutateResult>(
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

export function getNegativeKeywordNegativeKeywordIdQueryKey(
  args: InferRequestType<(typeof client.negative_keyword)[':negative_keyword_id']['$get']>,
) {
  return ['negative_keyword', '/negative_keyword/:negative_keyword_id', args] as const
}

export function getNegativeKeywordNegativeKeywordIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.negative_keyword)[':negative_keyword_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.negative_keyword)[':negative_keyword_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.negative_keyword)[':negative_keyword_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNegativeKeywordNegativeKeywordIdQueryKey>
  >({
    queryKey: getNegativeKeywordNegativeKeywordIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.negative_keyword[':negative_keyword_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useNegativeKeywordNegativeKeywordId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.negative_keyword)[':negative_keyword_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.negative_keyword)[':negative_keyword_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.negative_keyword)[':negative_keyword_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNegativeKeywordNegativeKeywordIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getNegativeKeywordNegativeKeywordIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseNegativeKeywordNegativeKeywordId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.negative_keyword)[':negative_keyword_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.negative_keyword)[':negative_keyword_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.negative_keyword)[':negative_keyword_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNegativeKeywordNegativeKeywordIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getNegativeKeywordNegativeKeywordIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutNegativeKeywordNegativeKeywordIdMutationKey() {
  return ['negative_keyword', '/negative_keyword/:negative_keyword_id', 'PUT'] as const
}

export function getPutNegativeKeywordNegativeKeywordIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.negative_keyword)[':negative_keyword_id']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.negative_keyword)[':negative_keyword_id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutNegativeKeywordNegativeKeywordIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.negative_keyword)[':negative_keyword_id']['$put']>,
    ) {
      return parseResponse(client.negative_keyword[':negative_keyword_id'].$put(args, options))
    },
  })
}

export function usePutNegativeKeywordNegativeKeywordId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.negative_keyword)[':negative_keyword_id']['$put']>
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.negative_keyword)[':negative_keyword_id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutNegativeKeywordNegativeKeywordIdMutationOptions<
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

export function getPromotionQueryKey(args: InferRequestType<typeof client.promotion.$get>) {
  return ['promotion', '/promotion', args] as const
}

export function getPromotionQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.promotion.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.promotion.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.promotion.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getPromotionQueryKey>
  >({
    queryKey: getPromotionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.promotion.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function usePromotion<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.promotion.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.promotion.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.promotion.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getPromotionQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getPromotionQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspensePromotion<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.promotion.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.promotion.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.promotion.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getPromotionQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getPromotionQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPromotionPromotionIdGetListingSetQueryKey(
  args: InferRequestType<(typeof client.promotion)[':promotion_id']['get_listing_set']['$get']>,
) {
  return ['promotion', '/promotion/:promotion_id/get_listing_set', args] as const
}

export function getPromotionPromotionIdGetListingSetQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.promotion)[':promotion_id']['get_listing_set']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.promotion)[':promotion_id']['get_listing_set']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.promotion)[':promotion_id']['get_listing_set']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPromotionPromotionIdGetListingSetQueryKey>
  >({
    queryKey: getPromotionPromotionIdGetListingSetQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.promotion[':promotion_id'].get_listing_set.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function usePromotionPromotionIdGetListingSet<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.promotion)[':promotion_id']['get_listing_set']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.promotion)[':promotion_id']['get_listing_set']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.promotion)[':promotion_id']['get_listing_set']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPromotionPromotionIdGetListingSetQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getPromotionPromotionIdGetListingSetQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspensePromotionPromotionIdGetListingSet<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.promotion)[':promotion_id']['get_listing_set']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.promotion)[':promotion_id']['get_listing_set']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.promotion)[':promotion_id']['get_listing_set']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPromotionPromotionIdGetListingSetQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getPromotionPromotionIdGetListingSetQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostPromotionPromotionIdPauseMutationKey() {
  return ['promotion', '/promotion/:promotion_id/pause', 'POST'] as const
}

export function getPostPromotionPromotionIdPauseMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.promotion)[':promotion_id']['pause']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.promotion)[':promotion_id']['pause']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostPromotionPromotionIdPauseMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.promotion)[':promotion_id']['pause']['$post']>,
    ) {
      return parseResponse(client.promotion[':promotion_id'].pause.$post(args, options))
    },
  })
}

export function usePostPromotionPromotionIdPause<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.promotion)[':promotion_id']['pause']['$post']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.promotion)[':promotion_id']['pause']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostPromotionPromotionIdPauseMutationOptions<TError, TOnMutateResult>(
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

export function getPostPromotionPromotionIdResumeMutationKey() {
  return ['promotion', '/promotion/:promotion_id/resume', 'POST'] as const
}

export function getPostPromotionPromotionIdResumeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.promotion)[':promotion_id']['resume']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.promotion)[':promotion_id']['resume']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostPromotionPromotionIdResumeMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.promotion)[':promotion_id']['resume']['$post']>,
    ) {
      return parseResponse(client.promotion[':promotion_id'].resume.$post(args, options))
    },
  })
}

export function usePostPromotionPromotionIdResume<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.promotion)[':promotion_id']['resume']['$post']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.promotion)[':promotion_id']['resume']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostPromotionPromotionIdResumeMutationOptions<
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

export function getPromotionReportQueryKey(
  args: InferRequestType<typeof client.promotion_report.$get>,
) {
  return ['promotion_report', '/promotion_report', args] as const
}

export function getPromotionReportQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.promotion_report.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.promotion_report.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.promotion_report.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getPromotionReportQueryKey>
  >({
    queryKey: getPromotionReportQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.promotion_report.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function usePromotionReport<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.promotion_report.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.promotion_report.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.promotion_report.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getPromotionReportQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getPromotionReportQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspensePromotionReport<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.promotion_report.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.promotion_report.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.promotion_report.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getPromotionReportQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getPromotionReportQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPromotionSummaryReportQueryKey(
  args: InferRequestType<typeof client.promotion_summary_report.$get>,
) {
  return ['promotion_summary_report', '/promotion_summary_report', args] as const
}

export function getPromotionSummaryReportQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.promotion_summary_report.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.promotion_summary_report.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.promotion_summary_report.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPromotionSummaryReportQueryKey>
  >({
    queryKey: getPromotionSummaryReportQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.promotion_summary_report.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function usePromotionSummaryReport<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.promotion_summary_report.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.promotion_summary_report.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.promotion_summary_report.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPromotionSummaryReportQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getPromotionSummaryReportQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspensePromotionSummaryReport<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.promotion_summary_report.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.promotion_summary_report.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.promotion_summary_report.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPromotionSummaryReportQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getPromotionSummaryReportQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}
