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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.crm.exports)['2026-09']['export']['async']['tasks'][':taskId']['status']['$get']
    >
  >,
) {
  return ['crm', '/crm/exports/2026-09/export/async/tasks/:taskId/status', toValue(args)] as const
}

export function getCrmExports202609ExportAsyncTasksTaskIdStatusQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.crm.exports)['2026-09']['export']['async']['tasks'][':taskId']['status']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCrmExports202609ExportAsyncTasksTaskIdStatusQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.crm.exports['2026-09'].export.async.tasks[':taskId'].status.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.crm.exports)['2026-09']['export']['async']['tasks'][':taskId']['status']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getCrmExports202609ExportAsyncTasksTaskIdStatusQueryKey>
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCrmExports202609ExportAsyncTasksTaskIdStatusQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.crm.exports['2026-09'].export.async.tasks[':taskId'].status.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCrmExports202609ExportExportIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.crm.exports)['2026-09']['export'][':exportId']['$get']>
  >,
) {
  return ['crm', '/crm/exports/2026-09/export/:exportId', toValue(args)] as const
}

export function getCrmExports202609ExportExportIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.crm.exports)['2026-09']['export'][':exportId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCrmExports202609ExportExportIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.crm.exports['2026-09'].export[':exportId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.crm.exports)['2026-09']['export'][':exportId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.crm.exports)['2026-09']['export'][':exportId']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getCrmExports202609ExportExportIdQueryKey>
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
          Awaited<ReturnType<(typeof client.crm.exports)['2026-09']['export'][':exportId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCrmExports202609ExportExportIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCrmExports202609ExportExportIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.crm.exports['2026-09'].export[':exportId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
