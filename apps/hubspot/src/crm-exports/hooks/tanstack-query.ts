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

export function getCrmKey() {
  return ['crm'] as const
}

export function getPostCrmExports202609ExportAsyncMutationKey() {
  return ['crm', '/crm/exports/2026-09/export/async', 'POST'] as const
}

export function getPostCrmExports202609ExportAsyncMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.crm.exports)['2026-09']['export']['async']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.crm.exports)['2026-09']['export']['async']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCrmExports202609ExportAsyncMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.crm.exports)['2026-09']['export']['async']['$post']>,
    ) {
      return parseResponse(client.crm.exports['2026-09'].export.async.$post(args, options))
    },
  })
}

export function usePostCrmExports202609ExportAsync<
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
                ReturnType<(typeof client.crm.exports)['2026-09']['export']['async']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.crm.exports)['2026-09']['export']['async']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCrmExports202609ExportAsyncMutationOptions<
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

export function getCrmExports202609ExportAsyncTasksTaskIdStatusQueryKey(
  args: InferRequestType<
    (typeof client.crm.exports)['2026-09']['export']['async']['tasks'][':taskId']['status']['$get']
  >,
) {
  return ['crm', '/crm/exports/2026-09/export/async/tasks/:taskId/status', args] as const
}

export function getCrmExports202609ExportAsyncTasksTaskIdStatusQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.crm.exports)['2026-09']['export']['async']['tasks'][':taskId']['status']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.crm.exports)['2026-09']['export']['async']['tasks'][':taskId']['status']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.crm.exports)['2026-09']['export']['async']['tasks'][':taskId']['status']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCrmExports202609ExportAsyncTasksTaskIdStatusQueryKey>
  >({
    queryKey: getCrmExports202609ExportAsyncTasksTaskIdStatusQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.crm.exports['2026-09'].export.async.tasks[':taskId'].status.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useCrmExports202609ExportAsyncTasksTaskIdStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.crm.exports)['2026-09']['export']['async']['tasks'][':taskId']['status']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.crm.exports)['2026-09']['export']['async']['tasks'][':taskId']['status']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.crm.exports)['2026-09']['export']['async']['tasks'][':taskId']['status']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCrmExports202609ExportAsyncTasksTaskIdStatusQueryKey>
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
      ...getCrmExports202609ExportAsyncTasksTaskIdStatusQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCrmExports202609ExportAsyncTasksTaskIdStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.crm.exports)['2026-09']['export']['async']['tasks'][':taskId']['status']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.crm.exports)['2026-09']['export']['async']['tasks'][':taskId']['status']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.crm.exports)['2026-09']['export']['async']['tasks'][':taskId']['status']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCrmExports202609ExportAsyncTasksTaskIdStatusQueryKey>
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
      ...getCrmExports202609ExportAsyncTasksTaskIdStatusQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getCrmExports202609ExportExportIdQueryKey(
  args: InferRequestType<(typeof client.crm.exports)['2026-09']['export'][':exportId']['$get']>,
) {
  return ['crm', '/crm/exports/2026-09/export/:exportId', args] as const
}

export function getCrmExports202609ExportExportIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.crm.exports)['2026-09']['export'][':exportId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.crm.exports)['2026-09']['export'][':exportId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.crm.exports)['2026-09']['export'][':exportId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCrmExports202609ExportExportIdQueryKey>
  >({
    queryKey: getCrmExports202609ExportExportIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.crm.exports['2026-09'].export[':exportId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useCrmExports202609ExportExportId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.crm.exports)['2026-09']['export'][':exportId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.crm.exports)['2026-09']['export'][':exportId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.crm.exports)['2026-09']['export'][':exportId']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCrmExports202609ExportExportIdQueryKey>
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
      ...getCrmExports202609ExportExportIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCrmExports202609ExportExportId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.crm.exports)['2026-09']['export'][':exportId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.crm.exports)['2026-09']['export'][':exportId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.crm.exports)['2026-09']['export'][':exportId']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCrmExports202609ExportExportIdQueryKey>
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
      ...getCrmExports202609ExportExportIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}
