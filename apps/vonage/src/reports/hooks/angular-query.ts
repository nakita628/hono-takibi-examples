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

export function getV2Key() {
  return ['v2'] as const
}

export function getV3Key() {
  return ['v3'] as const
}

export function getV2ReportsQueryKey(args: InferRequestType<typeof client.v2.reports.$get>) {
  return ['v2', '/v2/reports', args] as const
}

export function getV2ReportsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.reports.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v2.reports.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.reports.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV2ReportsQueryKey>
  >({
    queryKey: getV2ReportsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.reports.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV2Reports<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.reports.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v2.reports.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.reports.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV2ReportsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV2ReportsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostV2ReportsMutationKey() {
  return ['v2', '/v2/reports', 'POST'] as const
}

export function getPostV2ReportsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.reports.$post>>>>>,
    TError,
    InferRequestType<typeof client.v2.reports.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2ReportsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.reports.$post>) {
      return parseResponse(client.v2.reports.$post(args, options))
    },
  })
}

export function injectPostV2Reports<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.reports.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v2.reports.$post>,
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
    const mutationDefaults = getPostV2ReportsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getV2ReportsRecordsQueryKey(
  args: InferRequestType<typeof client.v2.reports.records.$get>,
) {
  return ['v2', '/v2/reports/records', args] as const
}

export function getV2ReportsRecordsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.reports.records.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v2.reports.records.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.reports.records.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV2ReportsRecordsQueryKey>
  >({
    queryKey: getV2ReportsRecordsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.reports.records.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV2ReportsRecords<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.reports.records.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v2.reports.records.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v2.reports.records.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2ReportsRecordsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV2ReportsRecordsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getV2ReportsReportIdQueryKey(
  args: InferRequestType<(typeof client.v2.reports)[':report_id']['$get']>,
) {
  return ['v2', '/v2/reports/:report_id', args] as const
}

export function getV2ReportsReportIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.reports)[':report_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.reports)[':report_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2.reports)[':report_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2ReportsReportIdQueryKey>
  >({
    queryKey: getV2ReportsReportIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.reports[':report_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2ReportsReportId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.reports)[':report_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2.reports)[':report_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.reports)[':report_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2ReportsReportIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV2ReportsReportIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getDeleteV2ReportsReportIdMutationKey() {
  return ['v2', '/v2/reports/:report_id', 'DELETE'] as const
}

export function getDeleteV2ReportsReportIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.reports)[':report_id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.reports)[':report_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2ReportsReportIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v2.reports)[':report_id']['$delete']>) {
      return parseResponse(client.v2.reports[':report_id'].$delete(args, options))
    },
  })
}

export function injectDeleteV2ReportsReportId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.reports)[':report_id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.reports)[':report_id']['$delete']>,
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
    const mutationDefaults = getDeleteV2ReportsReportIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getV3MediaFileIdQueryKey(
  args: InferRequestType<(typeof client.v3.media)[':file_id']['$get']>,
) {
  return ['v3', '/v3/media/:file_id', args] as const
}

export function getV3MediaFileIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v3.media)[':file_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v3.media)[':file_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v3.media)[':file_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3MediaFileIdQueryKey>
  >({
    queryKey: getV3MediaFileIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v3.media[':file_id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV3MediaFileId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v3.media)[':file_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v3.media)[':file_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v3.media)[':file_id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV3MediaFileIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV3MediaFileIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}
