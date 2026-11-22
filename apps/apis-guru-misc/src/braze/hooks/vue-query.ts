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
  args: MaybeRefOrGetter<InferRequestType<typeof client.campaigns.data_series.$get>>,
) {
  return ['campaigns', '/campaigns/data_series', toValue(args)] as const
}

export function getCampaignsDataSeriesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.campaigns.data_series.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCampaignsDataSeriesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.campaigns.data_series.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCampaignsDataSeries<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.campaigns.data_series.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.campaigns.data_series.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.campaigns.data_series.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.campaigns.data_series.$get>>>
            >
          >,
          ReturnType<typeof getCampaignsDataSeriesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.campaigns.data_series.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCampaignsDataSeriesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCampaignsDataSeriesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.campaigns.data_series.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCampaignsDetailsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.campaigns.details.$get>>,
) {
  return ['campaigns', '/campaigns/details', toValue(args)] as const
}

export function getCampaignsDetailsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.campaigns.details.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCampaignsDetailsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.campaigns.details.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCampaignsDetails<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.campaigns.details.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.campaigns.details.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.campaigns.details.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.campaigns.details.$get>>>
            >
          >,
          ReturnType<typeof getCampaignsDetailsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.campaigns.details.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getCampaignsDetailsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCampaignsDetailsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.campaigns.details.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCampaignsListQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.campaigns.list.$get>>,
) {
  return ['campaigns', '/campaigns/list', toValue(args)] as const
}

export function getCampaignsListQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.campaigns.list.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCampaignsListQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.campaigns.list.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCampaignsList<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.campaigns.list.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.campaigns.list.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.campaigns.list.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.campaigns.list.$get>>>>
          >,
          ReturnType<typeof getCampaignsListQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.campaigns.list.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getCampaignsListQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCampaignsListQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.campaigns.list.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCanvasDataSeriesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.canvas.data_series.$get>>,
) {
  return ['canvas', '/canvas/data_series', toValue(args)] as const
}

export function getCanvasDataSeriesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.canvas.data_series.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCanvasDataSeriesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.canvas.data_series.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCanvasDataSeries<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.canvas.data_series.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.canvas.data_series.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.canvas.data_series.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.canvas.data_series.$get>>>
            >
          >,
          ReturnType<typeof getCanvasDataSeriesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.canvas.data_series.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getCanvasDataSeriesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCanvasDataSeriesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.canvas.data_series.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCanvasDataSummaryQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.canvas.data_summary.$get>>,
) {
  return ['canvas', '/canvas/data_summary', toValue(args)] as const
}

export function getCanvasDataSummaryQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.canvas.data_summary.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCanvasDataSummaryQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.canvas.data_summary.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCanvasDataSummary<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.canvas.data_summary.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.canvas.data_summary.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.canvas.data_summary.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.canvas.data_summary.$get>>>
            >
          >,
          ReturnType<typeof getCanvasDataSummaryQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.canvas.data_summary.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getCanvasDataSummaryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCanvasDataSummaryQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.canvas.data_summary.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCanvasDetailsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.canvas.details.$get>>,
) {
  return ['canvas', '/canvas/details', toValue(args)] as const
}

export function getCanvasDetailsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.canvas.details.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCanvasDetailsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.canvas.details.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCanvasDetails<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.canvas.details.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.canvas.details.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.canvas.details.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.canvas.details.$get>>>>
          >,
          ReturnType<typeof getCanvasDetailsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.canvas.details.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getCanvasDetailsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCanvasDetailsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.canvas.details.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCanvasListQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.canvas.list.$get>>,
) {
  return ['canvas', '/canvas/list', toValue(args)] as const
}

export function getCanvasListQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.canvas.list.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCanvasListQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.canvas.list.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useCanvasList<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.canvas.list.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.canvas.list.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.canvas.list.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.canvas.list.$get>>>>
          >,
          ReturnType<typeof getCanvasListQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.canvas.list.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getCanvasListQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCanvasListQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.canvas.list.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.content_blocks.info.$get>>,
) {
  return ['content_blocks', '/content_blocks/info', toValue(args)] as const
}

export function getContentBlocksInfoQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.content_blocks.info.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getContentBlocksInfoQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.content_blocks.info.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useContentBlocksInfo<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.content_blocks.info.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.content_blocks.info.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.content_blocks.info.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.content_blocks.info.$get>>>
            >
          >,
          ReturnType<typeof getContentBlocksInfoQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.content_blocks.info.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getContentBlocksInfoQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getContentBlocksInfoQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.content_blocks.info.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getContentBlocksListQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.content_blocks.list.$get>>,
) {
  return ['content_blocks', '/content_blocks/list', toValue(args)] as const
}

export function getContentBlocksListQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.content_blocks.list.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getContentBlocksListQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.content_blocks.list.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useContentBlocksList<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.content_blocks.list.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.content_blocks.list.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.content_blocks.list.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.content_blocks.list.$get>>>
            >
          >,
          ReturnType<typeof getContentBlocksListQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.content_blocks.list.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getContentBlocksListQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getContentBlocksListQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.content_blocks.list.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEmailHardBouncesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.email.hard_bounces.$get>>,
) {
  return ['email', '/email/hard_bounces', toValue(args)] as const
}

export function getEmailHardBouncesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.email.hard_bounces.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEmailHardBouncesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.email.hard_bounces.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEmailHardBounces<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.email.hard_bounces.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.email.hard_bounces.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.email.hard_bounces.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.email.hard_bounces.$get>>>
            >
          >,
          ReturnType<typeof getEmailHardBouncesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.email.hard_bounces.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getEmailHardBouncesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEmailHardBouncesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.email.hard_bounces.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEmailUnsubscribesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.email.unsubscribes.$get>>,
) {
  return ['email', '/email/unsubscribes', toValue(args)] as const
}

export function getEmailUnsubscribesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.email.unsubscribes.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEmailUnsubscribesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.email.unsubscribes.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEmailUnsubscribes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.email.unsubscribes.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.email.unsubscribes.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.email.unsubscribes.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.email.unsubscribes.$get>>>
            >
          >,
          ReturnType<typeof getEmailUnsubscribesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.email.unsubscribes.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getEmailUnsubscribesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEmailUnsubscribesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.email.unsubscribes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEventsDataSeriesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.events.data_series.$get>>,
) {
  return ['events', '/events/data_series', toValue(args)] as const
}

export function getEventsDataSeriesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.events.data_series.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEventsDataSeriesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.events.data_series.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEventsDataSeries<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.data_series.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.events.data_series.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.events.data_series.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.events.data_series.$get>>>
            >
          >,
          ReturnType<typeof getEventsDataSeriesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.data_series.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getEventsDataSeriesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEventsDataSeriesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.events.data_series.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEventsListQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.events.list.$get>>,
) {
  return ['events', '/events/list', toValue(args)] as const
}

export function getEventsListQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.events.list.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEventsListQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.events.list.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useEventsList<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.list.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.events.list.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.list.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.list.$get>>>>
          >,
          ReturnType<typeof getEventsListQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.list.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getEventsListQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEventsListQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.events.list.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFeedDataSeriesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.feed.data_series.$get>>,
) {
  return ['feed', '/feed/data_series', toValue(args)] as const
}

export function getFeedDataSeriesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.feed.data_series.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFeedDataSeriesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.feed.data_series.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFeedDataSeries<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.feed.data_series.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.feed.data_series.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.feed.data_series.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.feed.data_series.$get>>>
            >
          >,
          ReturnType<typeof getFeedDataSeriesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.feed.data_series.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getFeedDataSeriesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFeedDataSeriesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.feed.data_series.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFeedDetailsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.feed.details.$get>>,
) {
  return ['feed', '/feed/details', toValue(args)] as const
}

export function getFeedDetailsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.feed.details.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFeedDetailsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.feed.details.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useFeedDetails<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.feed.details.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.feed.details.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.feed.details.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.feed.details.$get>>>>
          >,
          ReturnType<typeof getFeedDetailsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.feed.details.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getFeedDetailsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFeedDetailsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.feed.details.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFeedListQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.feed.list.$get>>,
) {
  return ['feed', '/feed/list', toValue(args)] as const
}

export function getFeedListQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.feed.list.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFeedListQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.feed.list.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useFeedList<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.feed.list.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.feed.list.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.feed.list.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.feed.list.$get>>>>
          >,
          ReturnType<typeof getFeedListQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.feed.list.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getFeedListQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFeedListQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.feed.list.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getKpiDauDataSeriesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.kpi.dau.data_series.$get>>,
) {
  return ['kpi', '/kpi/dau/data_series', toValue(args)] as const
}

export function getKpiDauDataSeriesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.kpi.dau.data_series.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getKpiDauDataSeriesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.kpi.dau.data_series.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useKpiDauDataSeries<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.kpi.dau.data_series.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.kpi.dau.data_series.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.kpi.dau.data_series.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.kpi.dau.data_series.$get>>>
            >
          >,
          ReturnType<typeof getKpiDauDataSeriesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.kpi.dau.data_series.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getKpiDauDataSeriesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getKpiDauDataSeriesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.kpi.dau.data_series.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getKpiMauDataSeriesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.kpi.mau.data_series.$get>>,
) {
  return ['kpi', '/kpi/mau/data_series', toValue(args)] as const
}

export function getKpiMauDataSeriesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.kpi.mau.data_series.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getKpiMauDataSeriesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.kpi.mau.data_series.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useKpiMauDataSeries<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.kpi.mau.data_series.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.kpi.mau.data_series.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.kpi.mau.data_series.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.kpi.mau.data_series.$get>>>
            >
          >,
          ReturnType<typeof getKpiMauDataSeriesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.kpi.mau.data_series.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getKpiMauDataSeriesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getKpiMauDataSeriesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.kpi.mau.data_series.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getKpiNewUsersDataSeriesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.kpi.new_users.data_series.$get>>,
) {
  return ['kpi', '/kpi/new_users/data_series', toValue(args)] as const
}

export function getKpiNewUsersDataSeriesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.kpi.new_users.data_series.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getKpiNewUsersDataSeriesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.kpi.new_users.data_series.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useKpiNewUsersDataSeries<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.kpi.new_users.data_series.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.kpi.new_users.data_series.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.kpi.new_users.data_series.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.kpi.new_users.data_series.$get>>
              >
            >
          >,
          ReturnType<typeof getKpiNewUsersDataSeriesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.kpi.new_users.data_series.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getKpiNewUsersDataSeriesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getKpiNewUsersDataSeriesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.kpi.new_users.data_series.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getKpiUninstallsDataSeriesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.kpi.uninstalls.data_series.$get>>,
) {
  return ['kpi', '/kpi/uninstalls/data_series', toValue(args)] as const
}

export function getKpiUninstallsDataSeriesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.kpi.uninstalls.data_series.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getKpiUninstallsDataSeriesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.kpi.uninstalls.data_series.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useKpiUninstallsDataSeries<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.kpi.uninstalls.data_series.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.kpi.uninstalls.data_series.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.kpi.uninstalls.data_series.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.kpi.uninstalls.data_series.$get>>
              >
            >
          >,
          ReturnType<typeof getKpiUninstallsDataSeriesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.kpi.uninstalls.data_series.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getKpiUninstallsDataSeriesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getKpiUninstallsDataSeriesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.kpi.uninstalls.data_series.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMessagesScheduledBroadcastsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.messages.scheduled_broadcasts.$get>>,
) {
  return ['messages', '/messages/scheduled_broadcasts', toValue(args)] as const
}

export function getMessagesScheduledBroadcastsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.messages.scheduled_broadcasts.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMessagesScheduledBroadcastsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.messages.scheduled_broadcasts.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMessagesScheduledBroadcasts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.messages.scheduled_broadcasts.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.messages.scheduled_broadcasts.$get>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.messages.scheduled_broadcasts.$get>>
              >
            >
          >,
          ReturnType<typeof getMessagesScheduledBroadcastsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.messages.scheduled_broadcasts.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMessagesScheduledBroadcastsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMessagesScheduledBroadcastsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.messages.scheduled_broadcasts.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSegmentsDataSeriesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.segments.data_series.$get>>,
) {
  return ['segments', '/segments/data_series', toValue(args)] as const
}

export function getSegmentsDataSeriesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.segments.data_series.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSegmentsDataSeriesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.segments.data_series.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSegmentsDataSeries<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.segments.data_series.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.segments.data_series.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.segments.data_series.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.segments.data_series.$get>>>
            >
          >,
          ReturnType<typeof getSegmentsDataSeriesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.segments.data_series.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSegmentsDataSeriesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSegmentsDataSeriesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.segments.data_series.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSegmentsDetailsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.segments.details.$get>>,
) {
  return ['segments', '/segments/details', toValue(args)] as const
}

export function getSegmentsDetailsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.segments.details.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSegmentsDetailsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.segments.details.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSegmentsDetails<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.segments.details.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.segments.details.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.segments.details.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.segments.details.$get>>>
            >
          >,
          ReturnType<typeof getSegmentsDetailsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.segments.details.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSegmentsDetailsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSegmentsDetailsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.segments.details.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSegmentsListQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.segments.list.$get>>,
) {
  return ['segments', '/segments/list', toValue(args)] as const
}

export function getSegmentsListQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.segments.list.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSegmentsListQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.segments.list.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSegmentsList<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.segments.list.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.segments.list.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.segments.list.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.segments.list.$get>>>>
          >,
          ReturnType<typeof getSegmentsListQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.segments.list.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSegmentsListQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSegmentsListQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.segments.list.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSendsDataSeriesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sends.data_series.$get>>,
) {
  return ['sends', '/sends/data_series', toValue(args)] as const
}

export function getSendsDataSeriesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sends.data_series.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSendsDataSeriesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sends.data_series.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSendsDataSeries<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sends.data_series.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sends.data_series.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.sends.data_series.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.sends.data_series.$get>>>
            >
          >,
          ReturnType<typeof getSendsDataSeriesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sends.data_series.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSendsDataSeriesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSendsDataSeriesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sends.data_series.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSessionsDataSeriesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sessions.data_series.$get>>,
) {
  return ['sessions', '/sessions/data_series', toValue(args)] as const
}

export function getSessionsDataSeriesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sessions.data_series.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSessionsDataSeriesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sessions.data_series.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSessionsDataSeries<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sessions.data_series.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.sessions.data_series.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.sessions.data_series.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.sessions.data_series.$get>>>
            >
          >,
          ReturnType<typeof getSessionsDataSeriesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sessions.data_series.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSessionsDataSeriesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSessionsDataSeriesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.sessions.data_series.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSubscriptionStatusGetQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.subscription.status.get.$get>>,
) {
  return ['subscription', '/subscription/status/get', toValue(args)] as const
}

export function getSubscriptionStatusGetQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.subscription.status.get.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSubscriptionStatusGetQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.subscription.status.get.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSubscriptionStatusGet<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.subscription.status.get.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.subscription.status.get.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.subscription.status.get.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.subscription.status.get.$get>>>
            >
          >,
          ReturnType<typeof getSubscriptionStatusGetQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.subscription.status.get.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSubscriptionStatusGetQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSubscriptionStatusGetQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.subscription.status.get.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSubscriptionUserStatusQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.subscription.user.status.$get>>,
) {
  return ['subscription', '/subscription/user/status', toValue(args)] as const
}

export function getSubscriptionUserStatusQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.subscription.user.status.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSubscriptionUserStatusQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.subscription.user.status.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSubscriptionUserStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.subscription.user.status.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.subscription.user.status.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.subscription.user.status.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.subscription.user.status.$get>>>
            >
          >,
          ReturnType<typeof getSubscriptionUserStatusQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.subscription.user.status.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSubscriptionUserStatusQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSubscriptionUserStatusQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.subscription.user.status.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTemplatesEmailInfoQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.templates.email.info.$get>>,
) {
  return ['templates', '/templates/email/info', toValue(args)] as const
}

export function getTemplatesEmailInfoQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.templates.email.info.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTemplatesEmailInfoQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.templates.email.info.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTemplatesEmailInfo<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.templates.email.info.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.templates.email.info.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.templates.email.info.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.templates.email.info.$get>>>
            >
          >,
          ReturnType<typeof getTemplatesEmailInfoQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.templates.email.info.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getTemplatesEmailInfoQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTemplatesEmailInfoQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.templates.email.info.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTemplatesEmailListQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.templates.email.list.$get>>,
) {
  return ['templates', '/templates/email/list', toValue(args)] as const
}

export function getTemplatesEmailListQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.templates.email.list.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTemplatesEmailListQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.templates.email.list.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTemplatesEmailList<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.templates.email.list.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.templates.email.list.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.templates.email.list.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.templates.email.list.$get>>>
            >
          >,
          ReturnType<typeof getTemplatesEmailListQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.templates.email.list.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getTemplatesEmailListQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTemplatesEmailListQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.templates.email.list.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
