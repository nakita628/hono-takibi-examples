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

export function getImportApplicationUsageKey() {
  return ['importApplicationUsage'] as const
}

export function getReportDefinitionKey() {
  return ['reportDefinition'] as const
}

export function getReportDefinitionReportIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.reportDefinition)[':reportId']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['reportDefinition', '/reportDefinition/:reportId', keyArgs] as const
}

export function getReportDefinitionReportIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.reportDefinition)[':reportId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getReportDefinitionReportIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.reportDefinition[':reportId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useReportDefinitionReportId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.reportDefinition)[':reportId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.reportDefinition)[':reportId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.reportDefinition)[':reportId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.reportDefinition)[':reportId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getReportDefinitionReportIdQueryKey>
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
          Awaited<ReturnType<(typeof client.reportDefinition)[':reportId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getReportDefinitionReportIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getReportDefinitionReportIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.reportDefinition[':reportId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutReportDefinitionReportIdMutationKey() {
  return ['reportDefinition', '/reportDefinition/:reportId', 'PUT'] as const
}

export function getPutReportDefinitionReportIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.reportDefinition)[':reportId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.reportDefinition)[':reportId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutReportDefinitionReportIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.reportDefinition)[':reportId']['$put']>,
    ) {
      return parseResponse(client.reportDefinition[':reportId'].$put(args, options))
    },
  })
}

export function usePutReportDefinitionReportId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.reportDefinition)[':reportId']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.reportDefinition)[':reportId']['$put']>,
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
  const mutationDefaults = getPutReportDefinitionReportIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteReportDefinitionReportIdMutationKey() {
  return ['reportDefinition', '/reportDefinition/:reportId', 'DELETE'] as const
}

export function getDeleteReportDefinitionReportIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.reportDefinition)[':reportId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.reportDefinition)[':reportId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteReportDefinitionReportIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.reportDefinition)[':reportId']['$delete']>,
    ) {
      return parseResponse(client.reportDefinition[':reportId'].$delete(args, options))
    },
  })
}

export function useDeleteReportDefinitionReportId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.reportDefinition)[':reportId']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.reportDefinition)[':reportId']['$delete']>,
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
  const mutationDefaults = getDeleteReportDefinitionReportIdMutationOptions<
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

export function getPostImportApplicationUsageMutationKey() {
  return ['importApplicationUsage', '/importApplicationUsage', 'POST'] as const
}

export function getPostImportApplicationUsageMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.importApplicationUsage.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.importApplicationUsage.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostImportApplicationUsageMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.importApplicationUsage.$post>) {
      return parseResponse(client.importApplicationUsage.$post(args, options))
    },
  })
}

export function usePostImportApplicationUsage<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.importApplicationUsage.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.importApplicationUsage.$post>,
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
  const mutationDefaults = getPostImportApplicationUsageMutationOptions<TError, TOnMutateResult>(
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

export function getReportDefinitionQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.reportDefinition.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['reportDefinition', '/reportDefinition', keyArgs] as const
}

export function getReportDefinitionQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.reportDefinition.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getReportDefinitionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.reportDefinition.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useReportDefinition<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reportDefinition.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.reportDefinition.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.reportDefinition.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.reportDefinition.$get>>>
            >
          >,
          ReturnType<typeof getReportDefinitionQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reportDefinition.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getReportDefinitionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getReportDefinitionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.reportDefinition.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostReportDefinitionMutationKey() {
  return ['reportDefinition', '/reportDefinition', 'POST'] as const
}

export function getPostReportDefinitionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reportDefinition.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.reportDefinition.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostReportDefinitionMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.reportDefinition.$post>) {
      return parseResponse(client.reportDefinition.$post(args, options))
    },
  })
}

export function usePostReportDefinition<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.reportDefinition.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.reportDefinition.$post>,
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
  const mutationDefaults = getPostReportDefinitionMutationOptions<TError, TOnMutateResult>(
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
