import {
  useQuery,
  useSuspenseQuery,
  useMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/react-query'
import type {
  UseQueryOptions,
  UseSuspenseQueryOptions,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/react-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getCampaignsKey() {
  return ['campaigns'] as const
}

export function getCanvasKey() {
  return ['canvas'] as const
}

export function getContentBlocksKey() {
  return ['content_blocks'] as const
}

export function getEmailKey() {
  return ['email'] as const
}

export function getEventsKey() {
  return ['events'] as const
}

export function getFeedKey() {
  return ['feed'] as const
}

export function getKpiKey() {
  return ['kpi'] as const
}

export function getMessagesKey() {
  return ['messages'] as const
}

export function getSegmentsKey() {
  return ['segments'] as const
}

export function getSendsKey() {
  return ['sends'] as const
}

export function getSessionsKey() {
  return ['sessions'] as const
}

export function getSubscriptionKey() {
  return ['subscription'] as const
}

export function getTemplatesKey() {
  return ['templates'] as const
}

export function getCampaignsDataSeriesQueryKey(
  args: InferRequestType<typeof client.campaigns.data_series.$get>,
) {
  return ['campaigns', '/campaigns/data_series', args] as const
}

export function getCampaignsDataSeriesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.campaigns.data_series.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.campaigns.data_series.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.campaigns.data_series.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCampaignsDataSeriesQueryKey>
  >({
    queryKey: getCampaignsDataSeriesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.campaigns.data_series.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useCampaignsDataSeries<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.campaigns.data_series.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.campaigns.data_series.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.campaigns.data_series.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCampaignsDataSeriesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getCampaignsDataSeriesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseCampaignsDataSeries<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.campaigns.data_series.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.campaigns.data_series.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.campaigns.data_series.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCampaignsDataSeriesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getCampaignsDataSeriesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getCampaignsDetailsQueryKey(
  args: InferRequestType<typeof client.campaigns.details.$get>,
) {
  return ['campaigns', '/campaigns/details', args] as const
}

export function getCampaignsDetailsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.campaigns.details.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.campaigns.details.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.campaigns.details.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getCampaignsDetailsQueryKey>
  >({
    queryKey: getCampaignsDetailsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.campaigns.details.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useCampaignsDetails<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.campaigns.details.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.campaigns.details.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.campaigns.details.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCampaignsDetailsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getCampaignsDetailsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseCampaignsDetails<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.campaigns.details.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.campaigns.details.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.campaigns.details.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCampaignsDetailsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getCampaignsDetailsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getCampaignsListQueryKey(
  args: InferRequestType<typeof client.campaigns.list.$get>,
) {
  return ['campaigns', '/campaigns/list', args] as const
}

export function getCampaignsListQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.campaigns.list.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.campaigns.list.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.campaigns.list.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getCampaignsListQueryKey>
  >({
    queryKey: getCampaignsListQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.campaigns.list.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useCampaignsList<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.campaigns.list.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.campaigns.list.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.campaigns.list.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getCampaignsListQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getCampaignsListQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseCampaignsList<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.campaigns.list.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.campaigns.list.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.campaigns.list.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getCampaignsListQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getCampaignsListQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getCanvasDataSeriesQueryKey(
  args: InferRequestType<typeof client.canvas.data_series.$get>,
) {
  return ['canvas', '/canvas/data_series', args] as const
}

export function getCanvasDataSeriesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.canvas.data_series.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.canvas.data_series.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.canvas.data_series.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getCanvasDataSeriesQueryKey>
  >({
    queryKey: getCanvasDataSeriesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.canvas.data_series.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useCanvasDataSeries<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.canvas.data_series.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.canvas.data_series.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.canvas.data_series.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCanvasDataSeriesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getCanvasDataSeriesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseCanvasDataSeries<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.canvas.data_series.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.canvas.data_series.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.canvas.data_series.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCanvasDataSeriesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getCanvasDataSeriesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getCanvasDataSummaryQueryKey(
  args: InferRequestType<typeof client.canvas.data_summary.$get>,
) {
  return ['canvas', '/canvas/data_summary', args] as const
}

export function getCanvasDataSummaryQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.canvas.data_summary.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.canvas.data_summary.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.canvas.data_summary.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getCanvasDataSummaryQueryKey>
  >({
    queryKey: getCanvasDataSummaryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.canvas.data_summary.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useCanvasDataSummary<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.canvas.data_summary.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.canvas.data_summary.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.canvas.data_summary.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCanvasDataSummaryQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getCanvasDataSummaryQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseCanvasDataSummary<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.canvas.data_summary.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.canvas.data_summary.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.canvas.data_summary.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCanvasDataSummaryQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getCanvasDataSummaryQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getCanvasDetailsQueryKey(
  args: InferRequestType<typeof client.canvas.details.$get>,
) {
  return ['canvas', '/canvas/details', args] as const
}

export function getCanvasDetailsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.canvas.details.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.canvas.details.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.canvas.details.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getCanvasDetailsQueryKey>
  >({
    queryKey: getCanvasDetailsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.canvas.details.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useCanvasDetails<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.canvas.details.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.canvas.details.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.canvas.details.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getCanvasDetailsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getCanvasDetailsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseCanvasDetails<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.canvas.details.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.canvas.details.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.canvas.details.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getCanvasDetailsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getCanvasDetailsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getCanvasListQueryKey(args: InferRequestType<typeof client.canvas.list.$get>) {
  return ['canvas', '/canvas/list', args] as const
}

export function getCanvasListQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.canvas.list.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.canvas.list.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.canvas.list.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getCanvasListQueryKey>
  >({
    queryKey: getCanvasListQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.canvas.list.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useCanvasList<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.canvas.list.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.canvas.list.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.canvas.list.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getCanvasListQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getCanvasListQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseCanvasList<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.canvas.list.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.canvas.list.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.canvas.list.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getCanvasListQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getCanvasListQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostCanvasTriggerScheduleCreateMutationKey() {
  return ['canvas', '/canvas/trigger/schedule/create', 'POST'] as const
}

export function getPostCanvasTriggerScheduleCreateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.canvas.trigger.schedule.create.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.canvas.trigger.schedule.create.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCanvasTriggerScheduleCreateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.canvas.trigger.schedule.create.$post>) {
      return parseResponse(client.canvas.trigger.schedule.create.$post(args, options))
    },
  })
}

export function usePostCanvasTriggerScheduleCreate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.canvas.trigger.schedule.create.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.canvas.trigger.schedule.create.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCanvasTriggerScheduleCreateMutationOptions<
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

export function getContentBlocksInfoQueryKey(
  args: InferRequestType<typeof client.content_blocks.info.$get>,
) {
  return ['content_blocks', '/content_blocks/info', args] as const
}

export function getContentBlocksInfoQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.content_blocks.info.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.content_blocks.info.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.content_blocks.info.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getContentBlocksInfoQueryKey>
  >({
    queryKey: getContentBlocksInfoQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.content_blocks.info.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useContentBlocksInfo<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.content_blocks.info.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.content_blocks.info.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.content_blocks.info.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getContentBlocksInfoQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getContentBlocksInfoQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseContentBlocksInfo<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.content_blocks.info.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.content_blocks.info.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.content_blocks.info.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getContentBlocksInfoQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getContentBlocksInfoQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getContentBlocksListQueryKey(
  args: InferRequestType<typeof client.content_blocks.list.$get>,
) {
  return ['content_blocks', '/content_blocks/list', args] as const
}

export function getContentBlocksListQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.content_blocks.list.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.content_blocks.list.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.content_blocks.list.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getContentBlocksListQueryKey>
  >({
    queryKey: getContentBlocksListQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.content_blocks.list.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useContentBlocksList<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.content_blocks.list.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.content_blocks.list.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.content_blocks.list.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getContentBlocksListQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getContentBlocksListQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseContentBlocksList<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.content_blocks.list.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.content_blocks.list.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.content_blocks.list.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getContentBlocksListQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getContentBlocksListQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getEmailHardBouncesQueryKey(
  args: InferRequestType<typeof client.email.hard_bounces.$get>,
) {
  return ['email', '/email/hard_bounces', args] as const
}

export function getEmailHardBouncesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.email.hard_bounces.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.email.hard_bounces.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.email.hard_bounces.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getEmailHardBouncesQueryKey>
  >({
    queryKey: getEmailHardBouncesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.email.hard_bounces.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useEmailHardBounces<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.email.hard_bounces.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.email.hard_bounces.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.email.hard_bounces.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEmailHardBouncesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getEmailHardBouncesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseEmailHardBounces<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.email.hard_bounces.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.email.hard_bounces.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.email.hard_bounces.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEmailHardBouncesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getEmailHardBouncesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getEmailUnsubscribesQueryKey(
  args: InferRequestType<typeof client.email.unsubscribes.$get>,
) {
  return ['email', '/email/unsubscribes', args] as const
}

export function getEmailUnsubscribesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.email.unsubscribes.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.email.unsubscribes.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.email.unsubscribes.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getEmailUnsubscribesQueryKey>
  >({
    queryKey: getEmailUnsubscribesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.email.unsubscribes.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useEmailUnsubscribes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.email.unsubscribes.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.email.unsubscribes.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.email.unsubscribes.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEmailUnsubscribesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getEmailUnsubscribesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseEmailUnsubscribes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.email.unsubscribes.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.email.unsubscribes.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.email.unsubscribes.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEmailUnsubscribesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getEmailUnsubscribesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getEventsDataSeriesQueryKey(
  args: InferRequestType<typeof client.events.data_series.$get>,
) {
  return ['events', '/events/data_series', args] as const
}

export function getEventsDataSeriesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.data_series.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.events.data_series.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.data_series.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getEventsDataSeriesQueryKey>
  >({
    queryKey: getEventsDataSeriesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.events.data_series.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useEventsDataSeries<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.data_series.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.events.data_series.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.events.data_series.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEventsDataSeriesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getEventsDataSeriesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseEventsDataSeries<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.data_series.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.events.data_series.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.events.data_series.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEventsDataSeriesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getEventsDataSeriesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getEventsListQueryKey(args: InferRequestType<typeof client.events.list.$get>) {
  return ['events', '/events/list', args] as const
}

export function getEventsListQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.list.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.events.list.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.list.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getEventsListQueryKey>
  >({
    queryKey: getEventsListQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.events.list.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useEventsList<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.list.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.events.list.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.list.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getEventsListQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getEventsListQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseEventsList<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.list.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.events.list.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.list.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getEventsListQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getEventsListQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getFeedDataSeriesQueryKey(
  args: InferRequestType<typeof client.feed.data_series.$get>,
) {
  return ['feed', '/feed/data_series', args] as const
}

export function getFeedDataSeriesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.feed.data_series.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.feed.data_series.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.feed.data_series.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getFeedDataSeriesQueryKey>
  >({
    queryKey: getFeedDataSeriesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.feed.data_series.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useFeedDataSeries<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.feed.data_series.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.feed.data_series.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.feed.data_series.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getFeedDataSeriesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getFeedDataSeriesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseFeedDataSeries<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.feed.data_series.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.feed.data_series.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.feed.data_series.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getFeedDataSeriesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getFeedDataSeriesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getFeedDetailsQueryKey(args: InferRequestType<typeof client.feed.details.$get>) {
  return ['feed', '/feed/details', args] as const
}

export function getFeedDetailsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.feed.details.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.feed.details.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.feed.details.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getFeedDetailsQueryKey>
  >({
    queryKey: getFeedDetailsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.feed.details.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useFeedDetails<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.feed.details.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.feed.details.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.feed.details.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getFeedDetailsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getFeedDetailsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseFeedDetails<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.feed.details.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.feed.details.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.feed.details.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getFeedDetailsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getFeedDetailsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getFeedListQueryKey(args: InferRequestType<typeof client.feed.list.$get>) {
  return ['feed', '/feed/list', args] as const
}

export function getFeedListQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.feed.list.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.feed.list.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.feed.list.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getFeedListQueryKey>
  >({
    queryKey: getFeedListQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.feed.list.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useFeedList<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.feed.list.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.feed.list.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.feed.list.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getFeedListQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getFeedListQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseFeedList<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.feed.list.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.feed.list.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.feed.list.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getFeedListQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getFeedListQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getKpiDauDataSeriesQueryKey(
  args: InferRequestType<typeof client.kpi.dau.data_series.$get>,
) {
  return ['kpi', '/kpi/dau/data_series', args] as const
}

export function getKpiDauDataSeriesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.kpi.dau.data_series.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.kpi.dau.data_series.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.kpi.dau.data_series.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getKpiDauDataSeriesQueryKey>
  >({
    queryKey: getKpiDauDataSeriesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.kpi.dau.data_series.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useKpiDauDataSeries<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.kpi.dau.data_series.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.kpi.dau.data_series.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.kpi.dau.data_series.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getKpiDauDataSeriesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getKpiDauDataSeriesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseKpiDauDataSeries<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.kpi.dau.data_series.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.kpi.dau.data_series.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.kpi.dau.data_series.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getKpiDauDataSeriesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getKpiDauDataSeriesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getKpiMauDataSeriesQueryKey(
  args: InferRequestType<typeof client.kpi.mau.data_series.$get>,
) {
  return ['kpi', '/kpi/mau/data_series', args] as const
}

export function getKpiMauDataSeriesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.kpi.mau.data_series.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.kpi.mau.data_series.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.kpi.mau.data_series.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getKpiMauDataSeriesQueryKey>
  >({
    queryKey: getKpiMauDataSeriesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.kpi.mau.data_series.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useKpiMauDataSeries<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.kpi.mau.data_series.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.kpi.mau.data_series.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.kpi.mau.data_series.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getKpiMauDataSeriesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getKpiMauDataSeriesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseKpiMauDataSeries<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.kpi.mau.data_series.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.kpi.mau.data_series.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.kpi.mau.data_series.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getKpiMauDataSeriesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getKpiMauDataSeriesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getKpiNewUsersDataSeriesQueryKey(
  args: InferRequestType<typeof client.kpi.new_users.data_series.$get>,
) {
  return ['kpi', '/kpi/new_users/data_series', args] as const
}

export function getKpiNewUsersDataSeriesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.kpi.new_users.data_series.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.kpi.new_users.data_series.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.kpi.new_users.data_series.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getKpiNewUsersDataSeriesQueryKey>
  >({
    queryKey: getKpiNewUsersDataSeriesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.kpi.new_users.data_series.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useKpiNewUsersDataSeries<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.kpi.new_users.data_series.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.kpi.new_users.data_series.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.kpi.new_users.data_series.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getKpiNewUsersDataSeriesQueryKey>
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
      ...getKpiNewUsersDataSeriesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseKpiNewUsersDataSeries<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.kpi.new_users.data_series.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.kpi.new_users.data_series.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.kpi.new_users.data_series.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getKpiNewUsersDataSeriesQueryKey>
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
      ...getKpiNewUsersDataSeriesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getKpiUninstallsDataSeriesQueryKey(
  args: InferRequestType<typeof client.kpi.uninstalls.data_series.$get>,
) {
  return ['kpi', '/kpi/uninstalls/data_series', args] as const
}

export function getKpiUninstallsDataSeriesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.kpi.uninstalls.data_series.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.kpi.uninstalls.data_series.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.kpi.uninstalls.data_series.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getKpiUninstallsDataSeriesQueryKey>
  >({
    queryKey: getKpiUninstallsDataSeriesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.kpi.uninstalls.data_series.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useKpiUninstallsDataSeries<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.kpi.uninstalls.data_series.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.kpi.uninstalls.data_series.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.kpi.uninstalls.data_series.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getKpiUninstallsDataSeriesQueryKey>
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
      ...getKpiUninstallsDataSeriesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseKpiUninstallsDataSeries<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.kpi.uninstalls.data_series.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.kpi.uninstalls.data_series.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.kpi.uninstalls.data_series.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getKpiUninstallsDataSeriesQueryKey>
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
      ...getKpiUninstallsDataSeriesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getMessagesScheduledBroadcastsQueryKey(
  args: InferRequestType<typeof client.messages.scheduled_broadcasts.$get>,
) {
  return ['messages', '/messages/scheduled_broadcasts', args] as const
}

export function getMessagesScheduledBroadcastsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.messages.scheduled_broadcasts.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.messages.scheduled_broadcasts.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.messages.scheduled_broadcasts.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMessagesScheduledBroadcastsQueryKey>
  >({
    queryKey: getMessagesScheduledBroadcastsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.messages.scheduled_broadcasts.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useMessagesScheduledBroadcasts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.messages.scheduled_broadcasts.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.messages.scheduled_broadcasts.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.messages.scheduled_broadcasts.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMessagesScheduledBroadcastsQueryKey>
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
      ...getMessagesScheduledBroadcastsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMessagesScheduledBroadcasts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.messages.scheduled_broadcasts.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.messages.scheduled_broadcasts.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.messages.scheduled_broadcasts.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMessagesScheduledBroadcastsQueryKey>
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
      ...getMessagesScheduledBroadcastsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSegmentsDataSeriesQueryKey(
  args: InferRequestType<typeof client.segments.data_series.$get>,
) {
  return ['segments', '/segments/data_series', args] as const
}

export function getSegmentsDataSeriesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.segments.data_series.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.segments.data_series.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.segments.data_series.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSegmentsDataSeriesQueryKey>
  >({
    queryKey: getSegmentsDataSeriesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.segments.data_series.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useSegmentsDataSeries<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.segments.data_series.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.segments.data_series.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.segments.data_series.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSegmentsDataSeriesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSegmentsDataSeriesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSegmentsDataSeries<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.segments.data_series.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.segments.data_series.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.segments.data_series.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSegmentsDataSeriesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSegmentsDataSeriesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getSegmentsDetailsQueryKey(
  args: InferRequestType<typeof client.segments.details.$get>,
) {
  return ['segments', '/segments/details', args] as const
}

export function getSegmentsDetailsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.segments.details.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.segments.details.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.segments.details.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSegmentsDetailsQueryKey>
  >({
    queryKey: getSegmentsDetailsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.segments.details.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useSegmentsDetails<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.segments.details.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.segments.details.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.segments.details.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSegmentsDetailsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSegmentsDetailsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSegmentsDetails<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.segments.details.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.segments.details.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.segments.details.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSegmentsDetailsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSegmentsDetailsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getSegmentsListQueryKey(args: InferRequestType<typeof client.segments.list.$get>) {
  return ['segments', '/segments/list', args] as const
}

export function getSegmentsListQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.segments.list.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.segments.list.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.segments.list.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSegmentsListQueryKey>
  >({
    queryKey: getSegmentsListQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.segments.list.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useSegmentsList<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.segments.list.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.segments.list.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.segments.list.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSegmentsListQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSegmentsListQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSegmentsList<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.segments.list.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.segments.list.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.segments.list.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSegmentsListQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSegmentsListQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getSendsDataSeriesQueryKey(
  args: InferRequestType<typeof client.sends.data_series.$get>,
) {
  return ['sends', '/sends/data_series', args] as const
}

export function getSendsDataSeriesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sends.data_series.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.sends.data_series.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sends.data_series.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSendsDataSeriesQueryKey>
  >({
    queryKey: getSendsDataSeriesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sends.data_series.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useSendsDataSeries<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sends.data_series.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sends.data_series.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.sends.data_series.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSendsDataSeriesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSendsDataSeriesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSendsDataSeries<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sends.data_series.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sends.data_series.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.sends.data_series.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSendsDataSeriesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSendsDataSeriesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getSessionsDataSeriesQueryKey(
  args: InferRequestType<typeof client.sessions.data_series.$get>,
) {
  return ['sessions', '/sessions/data_series', args] as const
}

export function getSessionsDataSeriesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sessions.data_series.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.sessions.data_series.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sessions.data_series.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSessionsDataSeriesQueryKey>
  >({
    queryKey: getSessionsDataSeriesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sessions.data_series.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useSessionsDataSeries<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sessions.data_series.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sessions.data_series.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.sessions.data_series.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSessionsDataSeriesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSessionsDataSeriesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSessionsDataSeries<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sessions.data_series.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sessions.data_series.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.sessions.data_series.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSessionsDataSeriesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSessionsDataSeriesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getSubscriptionStatusGetQueryKey(
  args: InferRequestType<typeof client.subscription.status.get.$get>,
) {
  return ['subscription', '/subscription/status/get', args] as const
}

export function getSubscriptionStatusGetQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.subscription.status.get.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.subscription.status.get.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.subscription.status.get.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSubscriptionStatusGetQueryKey>
  >({
    queryKey: getSubscriptionStatusGetQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.subscription.status.get.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSubscriptionStatusGet<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.subscription.status.get.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.subscription.status.get.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.subscription.status.get.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSubscriptionStatusGetQueryKey>
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
      ...getSubscriptionStatusGetQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSubscriptionStatusGet<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.subscription.status.get.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.subscription.status.get.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.subscription.status.get.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSubscriptionStatusGetQueryKey>
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
      ...getSubscriptionStatusGetQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSubscriptionUserStatusQueryKey(
  args: InferRequestType<typeof client.subscription.user.status.$get>,
) {
  return ['subscription', '/subscription/user/status', args] as const
}

export function getSubscriptionUserStatusQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.subscription.user.status.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.subscription.user.status.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.subscription.user.status.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSubscriptionUserStatusQueryKey>
  >({
    queryKey: getSubscriptionUserStatusQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.subscription.user.status.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSubscriptionUserStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.subscription.user.status.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.subscription.user.status.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.subscription.user.status.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSubscriptionUserStatusQueryKey>
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
      ...getSubscriptionUserStatusQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSubscriptionUserStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.subscription.user.status.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.subscription.user.status.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.subscription.user.status.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSubscriptionUserStatusQueryKey>
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
      ...getSubscriptionUserStatusQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getTemplatesEmailInfoQueryKey(
  args: InferRequestType<typeof client.templates.email.info.$get>,
) {
  return ['templates', '/templates/email/info', args] as const
}

export function getTemplatesEmailInfoQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.templates.email.info.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.templates.email.info.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.templates.email.info.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getTemplatesEmailInfoQueryKey>
  >({
    queryKey: getTemplatesEmailInfoQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.templates.email.info.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useTemplatesEmailInfo<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.templates.email.info.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.templates.email.info.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.templates.email.info.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTemplatesEmailInfoQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getTemplatesEmailInfoQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseTemplatesEmailInfo<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.templates.email.info.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.templates.email.info.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.templates.email.info.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTemplatesEmailInfoQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getTemplatesEmailInfoQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getTemplatesEmailListQueryKey(
  args: InferRequestType<typeof client.templates.email.list.$get>,
) {
  return ['templates', '/templates/email/list', args] as const
}

export function getTemplatesEmailListQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.templates.email.list.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.templates.email.list.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.templates.email.list.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getTemplatesEmailListQueryKey>
  >({
    queryKey: getTemplatesEmailListQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.templates.email.list.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useTemplatesEmailList<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.templates.email.list.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.templates.email.list.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.templates.email.list.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTemplatesEmailListQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getTemplatesEmailListQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseTemplatesEmailList<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.templates.email.list.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.templates.email.list.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.templates.email.list.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTemplatesEmailListQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getTemplatesEmailListQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}
