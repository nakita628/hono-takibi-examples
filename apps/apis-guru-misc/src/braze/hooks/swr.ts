import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
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

export function getGetCampaignsDataSeriesKey(
  args: InferRequestType<typeof client.campaigns.data_series.$get>,
) {
  return ['campaigns', '/campaigns/data_series', args] as const
}

export function useGetCampaignsDataSeries<TError = unknown>(
  args: InferRequestType<typeof client.campaigns.data_series.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.campaigns.data_series.$get>>>
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
        ? getGetCampaignsDataSeriesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.campaigns.data_series.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.campaigns.data_series.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCampaignsDataSeries<TError = unknown>(
  args: InferRequestType<typeof client.campaigns.data_series.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.campaigns.data_series.$get>>>
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
        ? getGetCampaignsDataSeriesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.campaigns.data_series.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.campaigns.data_series.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCampaignsDetailsKey(
  args: InferRequestType<typeof client.campaigns.details.$get>,
) {
  return ['campaigns', '/campaigns/details', args] as const
}

export function useGetCampaignsDetails<TError = unknown>(
  args: InferRequestType<typeof client.campaigns.details.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.campaigns.details.$get>>>>
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
        ? getGetCampaignsDetailsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.campaigns.details.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.campaigns.details.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCampaignsDetails<TError = unknown>(
  args: InferRequestType<typeof client.campaigns.details.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.campaigns.details.$get>>>>
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
        ? getGetCampaignsDetailsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.campaigns.details.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.campaigns.details.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCampaignsListKey(args: InferRequestType<typeof client.campaigns.list.$get>) {
  return ['campaigns', '/campaigns/list', args] as const
}

export function useGetCampaignsList<TError = unknown>(
  args: InferRequestType<typeof client.campaigns.list.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.campaigns.list.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCampaignsListKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.campaigns.list.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.campaigns.list.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCampaignsList<TError = unknown>(
  args: InferRequestType<typeof client.campaigns.list.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.campaigns.list.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCampaignsListKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.campaigns.list.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.campaigns.list.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCanvasDataSeriesKey(
  args: InferRequestType<typeof client.canvas.data_series.$get>,
) {
  return ['canvas', '/canvas/data_series', args] as const
}

export function useGetCanvasDataSeries<TError = unknown>(
  args: InferRequestType<typeof client.canvas.data_series.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.canvas.data_series.$get>>>>
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
        ? getGetCanvasDataSeriesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.canvas.data_series.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.canvas.data_series.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCanvasDataSeries<TError = unknown>(
  args: InferRequestType<typeof client.canvas.data_series.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.canvas.data_series.$get>>>>
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
        ? getGetCanvasDataSeriesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.canvas.data_series.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.canvas.data_series.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCanvasDataSummaryKey(
  args: InferRequestType<typeof client.canvas.data_summary.$get>,
) {
  return ['canvas', '/canvas/data_summary', args] as const
}

export function useGetCanvasDataSummary<TError = unknown>(
  args: InferRequestType<typeof client.canvas.data_summary.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.canvas.data_summary.$get>>>
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
        ? getGetCanvasDataSummaryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.canvas.data_summary.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.canvas.data_summary.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCanvasDataSummary<TError = unknown>(
  args: InferRequestType<typeof client.canvas.data_summary.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.canvas.data_summary.$get>>>
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
        ? getGetCanvasDataSummaryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.canvas.data_summary.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.canvas.data_summary.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCanvasDetailsKey(args: InferRequestType<typeof client.canvas.details.$get>) {
  return ['canvas', '/canvas/details', args] as const
}

export function useGetCanvasDetails<TError = unknown>(
  args: InferRequestType<typeof client.canvas.details.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.canvas.details.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCanvasDetailsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.canvas.details.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.canvas.details.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCanvasDetails<TError = unknown>(
  args: InferRequestType<typeof client.canvas.details.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.canvas.details.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCanvasDetailsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.canvas.details.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.canvas.details.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCanvasListKey(args: InferRequestType<typeof client.canvas.list.$get>) {
  return ['canvas', '/canvas/list', args] as const
}

export function useGetCanvasList<TError = unknown>(
  args: InferRequestType<typeof client.canvas.list.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.canvas.list.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCanvasListKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.canvas.list.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.canvas.list.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCanvasList<TError = unknown>(
  args: InferRequestType<typeof client.canvas.list.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.canvas.list.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCanvasListKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.canvas.list.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.canvas.list.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostCanvasTriggerScheduleCreateKey() {
  return ['canvas', '/canvas/trigger/schedule/create', 'POST'] as const
}

export function usePostCanvasTriggerScheduleCreate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.canvas.trigger.schedule.create.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.canvas.trigger.schedule.create.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCanvasTriggerScheduleCreateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.canvas.trigger.schedule.create.$post> },
      ) => parseResponse(client.canvas.trigger.schedule.create.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetContentBlocksInfoKey(
  args: InferRequestType<typeof client.content_blocks.info.$get>,
) {
  return ['content_blocks', '/content_blocks/info', args] as const
}

export function useGetContentBlocksInfo<TError = unknown>(
  args: InferRequestType<typeof client.content_blocks.info.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.content_blocks.info.$get>>>
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
        ? getGetContentBlocksInfoKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.content_blocks.info.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.content_blocks.info.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetContentBlocksInfo<TError = unknown>(
  args: InferRequestType<typeof client.content_blocks.info.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.content_blocks.info.$get>>>
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
        ? getGetContentBlocksInfoKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.content_blocks.info.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.content_blocks.info.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetContentBlocksListKey(
  args: InferRequestType<typeof client.content_blocks.list.$get>,
) {
  return ['content_blocks', '/content_blocks/list', args] as const
}

export function useGetContentBlocksList<TError = unknown>(
  args: InferRequestType<typeof client.content_blocks.list.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.content_blocks.list.$get>>>
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
        ? getGetContentBlocksListKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.content_blocks.list.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.content_blocks.list.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetContentBlocksList<TError = unknown>(
  args: InferRequestType<typeof client.content_blocks.list.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.content_blocks.list.$get>>>
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
        ? getGetContentBlocksListKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.content_blocks.list.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.content_blocks.list.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEmailHardBouncesKey(
  args: InferRequestType<typeof client.email.hard_bounces.$get>,
) {
  return ['email', '/email/hard_bounces', args] as const
}

export function useGetEmailHardBounces<TError = unknown>(
  args: InferRequestType<typeof client.email.hard_bounces.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.email.hard_bounces.$get>>>>
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
        ? getGetEmailHardBouncesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.email.hard_bounces.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.email.hard_bounces.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEmailHardBounces<TError = unknown>(
  args: InferRequestType<typeof client.email.hard_bounces.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.email.hard_bounces.$get>>>>
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
        ? getGetEmailHardBouncesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.email.hard_bounces.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.email.hard_bounces.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEmailUnsubscribesKey(
  args: InferRequestType<typeof client.email.unsubscribes.$get>,
) {
  return ['email', '/email/unsubscribes', args] as const
}

export function useGetEmailUnsubscribes<TError = unknown>(
  args: InferRequestType<typeof client.email.unsubscribes.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.email.unsubscribes.$get>>>>
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
        ? getGetEmailUnsubscribesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.email.unsubscribes.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.email.unsubscribes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEmailUnsubscribes<TError = unknown>(
  args: InferRequestType<typeof client.email.unsubscribes.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.email.unsubscribes.$get>>>>
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
        ? getGetEmailUnsubscribesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.email.unsubscribes.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.email.unsubscribes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEventsDataSeriesKey(
  args: InferRequestType<typeof client.events.data_series.$get>,
) {
  return ['events', '/events/data_series', args] as const
}

export function useGetEventsDataSeries<TError = unknown>(
  args: InferRequestType<typeof client.events.data_series.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.data_series.$get>>>>
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
        ? getGetEventsDataSeriesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.data_series.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.events.data_series.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEventsDataSeries<TError = unknown>(
  args: InferRequestType<typeof client.events.data_series.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.data_series.$get>>>>
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
        ? getGetEventsDataSeriesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.data_series.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.events.data_series.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEventsListKey(args: InferRequestType<typeof client.events.list.$get>) {
  return ['events', '/events/list', args] as const
}

export function useGetEventsList<TError = unknown>(
  args: InferRequestType<typeof client.events.list.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.list.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetEventsListKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.list.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.events.list.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEventsList<TError = unknown>(
  args: InferRequestType<typeof client.events.list.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.list.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetEventsListKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.list.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.events.list.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetFeedDataSeriesKey(
  args: InferRequestType<typeof client.feed.data_series.$get>,
) {
  return ['feed', '/feed/data_series', args] as const
}

export function useGetFeedDataSeries<TError = unknown>(
  args: InferRequestType<typeof client.feed.data_series.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.feed.data_series.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetFeedDataSeriesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.feed.data_series.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.feed.data_series.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFeedDataSeries<TError = unknown>(
  args: InferRequestType<typeof client.feed.data_series.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.feed.data_series.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetFeedDataSeriesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.feed.data_series.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.feed.data_series.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetFeedDetailsKey(args: InferRequestType<typeof client.feed.details.$get>) {
  return ['feed', '/feed/details', args] as const
}

export function useGetFeedDetails<TError = unknown>(
  args: InferRequestType<typeof client.feed.details.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.feed.details.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetFeedDetailsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.feed.details.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.feed.details.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFeedDetails<TError = unknown>(
  args: InferRequestType<typeof client.feed.details.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.feed.details.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetFeedDetailsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.feed.details.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.feed.details.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetFeedListKey(args: InferRequestType<typeof client.feed.list.$get>) {
  return ['feed', '/feed/list', args] as const
}

export function useGetFeedList<TError = unknown>(
  args: InferRequestType<typeof client.feed.list.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.feed.list.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetFeedListKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.feed.list.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.feed.list.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFeedList<TError = unknown>(
  args: InferRequestType<typeof client.feed.list.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.feed.list.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetFeedListKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.feed.list.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.feed.list.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetKpiDauDataSeriesKey(
  args: InferRequestType<typeof client.kpi.dau.data_series.$get>,
) {
  return ['kpi', '/kpi/dau/data_series', args] as const
}

export function useGetKpiDauDataSeries<TError = unknown>(
  args: InferRequestType<typeof client.kpi.dau.data_series.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.kpi.dau.data_series.$get>>>
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
        ? getGetKpiDauDataSeriesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.kpi.dau.data_series.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.kpi.dau.data_series.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetKpiDauDataSeries<TError = unknown>(
  args: InferRequestType<typeof client.kpi.dau.data_series.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.kpi.dau.data_series.$get>>>
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
        ? getGetKpiDauDataSeriesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.kpi.dau.data_series.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.kpi.dau.data_series.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetKpiMauDataSeriesKey(
  args: InferRequestType<typeof client.kpi.mau.data_series.$get>,
) {
  return ['kpi', '/kpi/mau/data_series', args] as const
}

export function useGetKpiMauDataSeries<TError = unknown>(
  args: InferRequestType<typeof client.kpi.mau.data_series.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.kpi.mau.data_series.$get>>>
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
        ? getGetKpiMauDataSeriesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.kpi.mau.data_series.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.kpi.mau.data_series.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetKpiMauDataSeries<TError = unknown>(
  args: InferRequestType<typeof client.kpi.mau.data_series.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.kpi.mau.data_series.$get>>>
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
        ? getGetKpiMauDataSeriesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.kpi.mau.data_series.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.kpi.mau.data_series.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetKpiNewUsersDataSeriesKey(
  args: InferRequestType<typeof client.kpi.new_users.data_series.$get>,
) {
  return ['kpi', '/kpi/new_users/data_series', args] as const
}

export function useGetKpiNewUsersDataSeries<TError = unknown>(
  args: InferRequestType<typeof client.kpi.new_users.data_series.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.kpi.new_users.data_series.$get>>>
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
        ? getGetKpiNewUsersDataSeriesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.kpi.new_users.data_series.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.kpi.new_users.data_series.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetKpiNewUsersDataSeries<TError = unknown>(
  args: InferRequestType<typeof client.kpi.new_users.data_series.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.kpi.new_users.data_series.$get>>>
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
        ? getGetKpiNewUsersDataSeriesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.kpi.new_users.data_series.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.kpi.new_users.data_series.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetKpiUninstallsDataSeriesKey(
  args: InferRequestType<typeof client.kpi.uninstalls.data_series.$get>,
) {
  return ['kpi', '/kpi/uninstalls/data_series', args] as const
}

export function useGetKpiUninstallsDataSeries<TError = unknown>(
  args: InferRequestType<typeof client.kpi.uninstalls.data_series.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.kpi.uninstalls.data_series.$get>>>
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
        ? getGetKpiUninstallsDataSeriesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.kpi.uninstalls.data_series.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.kpi.uninstalls.data_series.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetKpiUninstallsDataSeries<TError = unknown>(
  args: InferRequestType<typeof client.kpi.uninstalls.data_series.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.kpi.uninstalls.data_series.$get>>>
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
        ? getGetKpiUninstallsDataSeriesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.kpi.uninstalls.data_series.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.kpi.uninstalls.data_series.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMessagesScheduledBroadcastsKey(
  args: InferRequestType<typeof client.messages.scheduled_broadcasts.$get>,
) {
  return ['messages', '/messages/scheduled_broadcasts', args] as const
}

export function useGetMessagesScheduledBroadcasts<TError = unknown>(
  args: InferRequestType<typeof client.messages.scheduled_broadcasts.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.messages.scheduled_broadcasts.$get>>
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
        ? getGetMessagesScheduledBroadcastsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.messages.scheduled_broadcasts.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.messages.scheduled_broadcasts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMessagesScheduledBroadcasts<TError = unknown>(
  args: InferRequestType<typeof client.messages.scheduled_broadcasts.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.messages.scheduled_broadcasts.$get>>
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
        ? getGetMessagesScheduledBroadcastsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.messages.scheduled_broadcasts.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.messages.scheduled_broadcasts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSegmentsDataSeriesKey(
  args: InferRequestType<typeof client.segments.data_series.$get>,
) {
  return ['segments', '/segments/data_series', args] as const
}

export function useGetSegmentsDataSeries<TError = unknown>(
  args: InferRequestType<typeof client.segments.data_series.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.segments.data_series.$get>>>
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
        ? getGetSegmentsDataSeriesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.segments.data_series.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.segments.data_series.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSegmentsDataSeries<TError = unknown>(
  args: InferRequestType<typeof client.segments.data_series.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.segments.data_series.$get>>>
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
        ? getGetSegmentsDataSeriesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.segments.data_series.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.segments.data_series.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSegmentsDetailsKey(
  args: InferRequestType<typeof client.segments.details.$get>,
) {
  return ['segments', '/segments/details', args] as const
}

export function useGetSegmentsDetails<TError = unknown>(
  args: InferRequestType<typeof client.segments.details.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.segments.details.$get>>>>
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
        ? getGetSegmentsDetailsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.segments.details.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.segments.details.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSegmentsDetails<TError = unknown>(
  args: InferRequestType<typeof client.segments.details.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.segments.details.$get>>>>
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
        ? getGetSegmentsDetailsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.segments.details.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.segments.details.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSegmentsListKey(args: InferRequestType<typeof client.segments.list.$get>) {
  return ['segments', '/segments/list', args] as const
}

export function useGetSegmentsList<TError = unknown>(
  args: InferRequestType<typeof client.segments.list.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.segments.list.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSegmentsListKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.segments.list.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.segments.list.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSegmentsList<TError = unknown>(
  args: InferRequestType<typeof client.segments.list.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.segments.list.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSegmentsListKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.segments.list.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.segments.list.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSendsDataSeriesKey(
  args: InferRequestType<typeof client.sends.data_series.$get>,
) {
  return ['sends', '/sends/data_series', args] as const
}

export function useGetSendsDataSeries<TError = unknown>(
  args: InferRequestType<typeof client.sends.data_series.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sends.data_series.$get>>>>
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
        ? getGetSendsDataSeriesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sends.data_series.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sends.data_series.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSendsDataSeries<TError = unknown>(
  args: InferRequestType<typeof client.sends.data_series.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sends.data_series.$get>>>>
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
        ? getGetSendsDataSeriesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sends.data_series.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sends.data_series.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSessionsDataSeriesKey(
  args: InferRequestType<typeof client.sessions.data_series.$get>,
) {
  return ['sessions', '/sessions/data_series', args] as const
}

export function useGetSessionsDataSeries<TError = unknown>(
  args: InferRequestType<typeof client.sessions.data_series.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sessions.data_series.$get>>>
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
        ? getGetSessionsDataSeriesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sessions.data_series.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sessions.data_series.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSessionsDataSeries<TError = unknown>(
  args: InferRequestType<typeof client.sessions.data_series.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sessions.data_series.$get>>>
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
        ? getGetSessionsDataSeriesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sessions.data_series.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sessions.data_series.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSubscriptionStatusGetKey(
  args: InferRequestType<typeof client.subscription.status.get.$get>,
) {
  return ['subscription', '/subscription/status/get', args] as const
}

export function useGetSubscriptionStatusGet<TError = unknown>(
  args: InferRequestType<typeof client.subscription.status.get.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.subscription.status.get.$get>>>
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
        ? getGetSubscriptionStatusGetKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.subscription.status.get.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.subscription.status.get.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSubscriptionStatusGet<TError = unknown>(
  args: InferRequestType<typeof client.subscription.status.get.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.subscription.status.get.$get>>>
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
        ? getGetSubscriptionStatusGetKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.subscription.status.get.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.subscription.status.get.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSubscriptionUserStatusKey(
  args: InferRequestType<typeof client.subscription.user.status.$get>,
) {
  return ['subscription', '/subscription/user/status', args] as const
}

export function useGetSubscriptionUserStatus<TError = unknown>(
  args: InferRequestType<typeof client.subscription.user.status.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.subscription.user.status.$get>>>
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
        ? getGetSubscriptionUserStatusKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.subscription.user.status.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.subscription.user.status.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSubscriptionUserStatus<TError = unknown>(
  args: InferRequestType<typeof client.subscription.user.status.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.subscription.user.status.$get>>>
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
        ? getGetSubscriptionUserStatusKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.subscription.user.status.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.subscription.user.status.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTemplatesEmailInfoKey(
  args: InferRequestType<typeof client.templates.email.info.$get>,
) {
  return ['templates', '/templates/email/info', args] as const
}

export function useGetTemplatesEmailInfo<TError = unknown>(
  args: InferRequestType<typeof client.templates.email.info.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.templates.email.info.$get>>>
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
        ? getGetTemplatesEmailInfoKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.templates.email.info.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.templates.email.info.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTemplatesEmailInfo<TError = unknown>(
  args: InferRequestType<typeof client.templates.email.info.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.templates.email.info.$get>>>
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
        ? getGetTemplatesEmailInfoKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.templates.email.info.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.templates.email.info.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTemplatesEmailListKey(
  args: InferRequestType<typeof client.templates.email.list.$get>,
) {
  return ['templates', '/templates/email/list', args] as const
}

export function useGetTemplatesEmailList<TError = unknown>(
  args: InferRequestType<typeof client.templates.email.list.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.templates.email.list.$get>>>
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
        ? getGetTemplatesEmailListKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.templates.email.list.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.templates.email.list.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTemplatesEmailList<TError = unknown>(
  args: InferRequestType<typeof client.templates.email.list.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.templates.email.list.$get>>>
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
        ? getGetTemplatesEmailListKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.templates.email.list.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.templates.email.list.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}
