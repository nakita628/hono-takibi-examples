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

export function getV2Key() {
  return ['v2'] as const
}

export function getV3Key() {
  return ['v3'] as const
}

export function getV2ReportsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.reports.$get>>,
) {
  return ['v2', '/v2/reports', toValue(args)] as const
}

export function getV2ReportsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.reports.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2ReportsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.reports.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV2Reports<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.reports.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.reports.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.reports.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.reports.$get>>>>
          >,
          ReturnType<typeof getV2ReportsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.reports.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV2ReportsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2ReportsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.reports.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostV2Reports<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.reports.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.v2.reports.$post>,
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
  const mutationDefaults = getPostV2ReportsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV2ReportsRecordsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.reports.records.$get>>,
) {
  return ['v2', '/v2/reports/records', toValue(args)] as const
}

export function getV2ReportsRecordsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.reports.records.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2ReportsRecordsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.reports.records.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2ReportsRecords<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.reports.records.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.reports.records.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.reports.records.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.reports.records.$get>>>
            >
          >,
          ReturnType<typeof getV2ReportsRecordsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.reports.records.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV2ReportsRecordsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2ReportsRecordsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.reports.records.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2ReportsReportIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.reports)[':report_id']['$get']>>,
) {
  return ['v2', '/v2/reports/:report_id', toValue(args)] as const
}

export function getV2ReportsReportIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.reports)[':report_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2ReportsReportIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.reports[':report_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2ReportsReportId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.reports)[':report_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.reports)[':report_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.reports)[':report_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.reports)[':report_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2ReportsReportIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2.reports)[':report_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2ReportsReportIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2ReportsReportIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.reports[':report_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteV2ReportsReportId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV2ReportsReportIdMutationOptions<TError, TOnMutateResult>(
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

export function getV3MediaFileIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v3.media)[':file_id']['$get']>>,
) {
  return ['v3', '/v3/media/:file_id', toValue(args)] as const
}

export function getV3MediaFileIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v3.media)[':file_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV3MediaFileIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v3.media[':file_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV3MediaFileId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v3.media)[':file_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v3.media)[':file_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3.media)[':file_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3.media)[':file_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV3MediaFileIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v3.media)[':file_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3MediaFileIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV3MediaFileIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v3.media[':file_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
