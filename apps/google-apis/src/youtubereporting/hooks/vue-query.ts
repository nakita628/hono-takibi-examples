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

export function getV1Key() {
  return ['v1'] as const
}

export function getV1JobsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.jobs.$get>>,
) {
  return ['v1', '/v1/jobs', toValue(args)] as const
}

export function getV1JobsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.jobs.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1JobsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.jobs.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV1Jobs<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.jobs.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.jobs.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.jobs.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.jobs.$get>>>>
          >,
          ReturnType<typeof getV1JobsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.jobs.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1JobsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1JobsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.jobs.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1JobsMutationKey() {
  return ['v1', '/v1/jobs', 'POST'] as const
}

export function getPostV1JobsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.jobs.$post>>>>>,
    TError,
    InferRequestType<typeof client.v1.jobs.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1JobsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.jobs.$post>) {
      return parseResponse(client.v1.jobs.$post(args, options))
    },
  })
}

export function usePostV1Jobs<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.jobs.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.v1.jobs.$post>,
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
  const mutationDefaults = getPostV1JobsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV1JobsJobIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.jobs)[':jobId']['$get']>>,
) {
  return ['v1', '/v1/jobs/:jobId', toValue(args)] as const
}

export function getV1JobsJobIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.jobs)[':jobId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1JobsJobIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.jobs[':jobId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1JobsJobId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1.jobs)[':jobId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.jobs)[':jobId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1.jobs)[':jobId']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1.jobs)[':jobId']['$get']>>>
            >
          >,
          ReturnType<typeof getV1JobsJobIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.jobs)[':jobId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1JobsJobIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1JobsJobIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.jobs[':jobId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteV1JobsJobIdMutationKey() {
  return ['v1', '/v1/jobs/:jobId', 'DELETE'] as const
}

export function getDeleteV1JobsJobIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.jobs)[':jobId']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.jobs)[':jobId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1JobsJobIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.jobs)[':jobId']['$delete']>) {
      return parseResponse(client.v1.jobs[':jobId'].$delete(args, options))
    },
  })
}

export function useDeleteV1JobsJobId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.jobs)[':jobId']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.jobs)[':jobId']['$delete']>,
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
  const mutationDefaults = getDeleteV1JobsJobIdMutationOptions<TError, TOnMutateResult>(
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

export function getV1JobsJobIdReportsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.jobs)[':jobId']['reports']['$get']>>,
) {
  return ['v1', '/v1/jobs/:jobId/reports', toValue(args)] as const
}

export function getV1JobsJobIdReportsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.jobs)[':jobId']['reports']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1JobsJobIdReportsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.jobs[':jobId'].reports.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1JobsJobIdReports<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.jobs)[':jobId']['reports']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.jobs)[':jobId']['reports']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.jobs)[':jobId']['reports']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.jobs)[':jobId']['reports']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1JobsJobIdReportsQueryKey>
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
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.jobs)[':jobId']['reports']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1JobsJobIdReportsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1JobsJobIdReportsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.jobs[':jobId'].reports.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1JobsJobIdReportsReportIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.jobs)[':jobId']['reports'][':reportId']['$get']>
  >,
) {
  return ['v1', '/v1/jobs/:jobId/reports/:reportId', toValue(args)] as const
}

export function getV1JobsJobIdReportsReportIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.jobs)[':jobId']['reports'][':reportId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1JobsJobIdReportsReportIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.jobs[':jobId'].reports[':reportId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1JobsJobIdReportsReportId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.jobs)[':jobId']['reports'][':reportId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.jobs)[':jobId']['reports'][':reportId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.jobs)[':jobId']['reports'][':reportId']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.jobs)[':jobId']['reports'][':reportId']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1JobsJobIdReportsReportIdQueryKey>
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
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.jobs)[':jobId']['reports'][':reportId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1JobsJobIdReportsReportIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1JobsJobIdReportsReportIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.jobs[':jobId'].reports[':reportId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1MediaResourceNameQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.media)[':resourceName']['$get']>>,
) {
  return ['v1', '/v1/media/:resourceName', toValue(args)] as const
}

export function getV1MediaResourceNameQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.media)[':resourceName']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1MediaResourceNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.media[':resourceName'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1MediaResourceName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.media)[':resourceName']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.media)[':resourceName']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.media)[':resourceName']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.media)[':resourceName']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1MediaResourceNameQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.media)[':resourceName']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1MediaResourceNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1MediaResourceNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.media[':resourceName'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1ReportTypesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.reportTypes.$get>>,
) {
  return ['v1', '/v1/reportTypes', toValue(args)] as const
}

export function getV1ReportTypesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.reportTypes.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ReportTypesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.reportTypes.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ReportTypes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.reportTypes.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.reportTypes.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.reportTypes.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.reportTypes.$get>>>>
          >,
          ReturnType<typeof getV1ReportTypesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.reportTypes.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1ReportTypesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ReportTypesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.reportTypes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
