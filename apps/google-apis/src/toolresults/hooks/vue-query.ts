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

export function getToolresultsKey() {
  return ['toolresults'] as const
}

export function getToolresultsV1beta3ProjectsProjectIdHistoriesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.toolresults.v1beta3.projects)[':projectId']['histories']['$get']
    >
  >,
) {
  return [
    'toolresults',
    '/toolresults/v1beta3/projects/:projectId/histories',
    toValue(args),
  ] as const
}

export function getToolresultsV1beta3ProjectsProjectIdHistoriesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.toolresults.v1beta3.projects)[':projectId']['histories']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getToolresultsV1beta3ProjectsProjectIdHistoriesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.toolresults.v1beta3.projects[':projectId'].histories.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useToolresultsV1beta3ProjectsProjectIdHistories<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.toolresults.v1beta3.projects)[':projectId']['histories']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.toolresults.v1beta3.projects)[':projectId']['histories']['$get']
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
                    (typeof client.toolresults.v1beta3.projects)[':projectId']['histories']['$get']
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
                    (typeof client.toolresults.v1beta3.projects)[':projectId']['histories']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getToolresultsV1beta3ProjectsProjectIdHistoriesQueryKey>
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
              (typeof client.toolresults.v1beta3.projects)[':projectId']['histories']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getToolresultsV1beta3ProjectsProjectIdHistoriesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getToolresultsV1beta3ProjectsProjectIdHistoriesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.toolresults.v1beta3.projects[':projectId'].histories.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostToolresultsV1beta3ProjectsProjectIdHistoriesMutationKey() {
  return ['toolresults', '/toolresults/v1beta3/projects/:projectId/histories', 'POST'] as const
}

export function getPostToolresultsV1beta3ProjectsProjectIdHistoriesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.toolresults.v1beta3.projects)[':projectId']['histories']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.toolresults.v1beta3.projects)[':projectId']['histories']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostToolresultsV1beta3ProjectsProjectIdHistoriesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.toolresults.v1beta3.projects)[':projectId']['histories']['$post']
      >,
    ) {
      return parseResponse(
        client.toolresults.v1beta3.projects[':projectId'].histories.$post(args, options),
      )
    },
  })
}

export function usePostToolresultsV1beta3ProjectsProjectIdHistories<
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
                  ReturnType<
                    (typeof client.toolresults.v1beta3.projects)[':projectId']['histories']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.toolresults.v1beta3.projects)[':projectId']['histories']['$post']
          >,
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
  const mutationDefaults = getPostToolresultsV1beta3ProjectsProjectIdHistoriesMutationOptions<
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

export function getToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['$get']
    >
  >,
) {
  return [
    'toolresults',
    '/toolresults/v1beta3/projects/:projectId/histories/:historyId',
    toValue(args),
  ] as const
}

export function getToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.toolresults.v1beta3.projects[':projectId'].histories[':historyId'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useToolresultsV1beta3ProjectsProjectIdHistoriesHistoryId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['$get']
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
                    (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['$get']
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
                    (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdQueryKey>
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
              (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.toolresults.v1beta3.projects[':projectId'].histories[':historyId'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions']['$get']
    >
  >,
) {
  return [
    'toolresults',
    '/toolresults/v1beta3/projects/:projectId/histories/:historyId/executions',
    toValue(args),
  ] as const
}

export function getToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.toolresults.v1beta3.projects[':projectId'].histories[':historyId'].executions.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions']['$get']
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
                    (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions']['$get']
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
                    (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsQueryKey
          >
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
              (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.toolresults.v1beta3.projects[':projectId'].histories[':historyId'].executions.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPostToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsMutationKey() {
  return [
    'toolresults',
    '/toolresults/v1beta3/projects/:projectId/histories/:historyId/executions',
    'POST',
  ] as const
}

export function getPostToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions']['$post']
      >,
    ) {
      return parseResponse(
        client.toolresults.v1beta3.projects[':projectId'].histories[':historyId'].executions.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutions<
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
                  ReturnType<
                    (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions']['$post']
          >,
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
  const mutationDefaults =
    getPostToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsMutationOptions<
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

export function getToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['$get']
    >
  >,
) {
  return [
    'toolresults',
    '/toolresults/v1beta3/projects/:projectId/histories/:historyId/executions/:executionId',
    toValue(args),
  ] as const
}

export function getToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.toolresults.v1beta3.projects[':projectId'].histories[':historyId'].executions[
          ':executionId'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['$get']
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
                    (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['$get']
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
                    (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdQueryKey
          >
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
              (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.toolresults.v1beta3.projects[':projectId'].histories[':historyId'].executions[
            ':executionId'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function getPatchToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdMutationKey() {
  return [
    'toolresults',
    '/toolresults/v1beta3/projects/:projectId/histories/:historyId/executions/:executionId',
    'PATCH',
  ] as const
}

export function getPatchToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPatchToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['$patch']
      >,
    ) {
      return parseResponse(
        client.toolresults.v1beta3.projects[':projectId'].histories[':historyId'].executions[
          ':executionId'
        ].$patch(args, options),
      )
    },
  })
}

export function usePatchToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionId<
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
                  ReturnType<
                    (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['$patch']
          >,
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
  const mutationDefaults =
    getPatchToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdMutationOptions<
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

export function getToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdClustersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['clusters']['$get']
    >
  >,
) {
  return [
    'toolresults',
    '/toolresults/v1beta3/projects/:projectId/histories/:historyId/executions/:executionId/clusters',
    toValue(args),
  ] as const
}

export function getToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdClustersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['clusters']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdClustersQueryKey(
        args,
      ),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.toolresults.v1beta3.projects[':projectId'].histories[':historyId'].executions[
          ':executionId'
        ].clusters.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdClusters<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['clusters']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['clusters']['$get']
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
                    (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['clusters']['$get']
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
                    (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['clusters']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdClustersQueryKey
          >
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
              (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['clusters']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdClustersQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdClustersQueryKey(
          args,
        ),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.toolresults.v1beta3.projects[':projectId'].histories[':historyId'].executions[
            ':executionId'
          ].clusters.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdClustersClusterIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['clusters'][':clusterId']['$get']
    >
  >,
) {
  return [
    'toolresults',
    '/toolresults/v1beta3/projects/:projectId/histories/:historyId/executions/:executionId/clusters/:clusterId',
    toValue(args),
  ] as const
}

export function getToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdClustersClusterIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['clusters'][':clusterId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdClustersClusterIdQueryKey(
        args,
      ),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.toolresults.v1beta3.projects[':projectId'].histories[':historyId'].executions[
          ':executionId'
        ].clusters[':clusterId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdClustersClusterId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['clusters'][':clusterId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['clusters'][':clusterId']['$get']
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
                    (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['clusters'][':clusterId']['$get']
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
                    (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['clusters'][':clusterId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdClustersClusterIdQueryKey
          >
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
              (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['clusters'][':clusterId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdClustersClusterIdQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdClustersClusterIdQueryKey(
          args,
        ),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.toolresults.v1beta3.projects[':projectId'].histories[':historyId'].executions[
            ':executionId'
          ].clusters[':clusterId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdEnvironmentsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['environments']['$get']
    >
  >,
) {
  return [
    'toolresults',
    '/toolresults/v1beta3/projects/:projectId/histories/:historyId/executions/:executionId/environments',
    toValue(args),
  ] as const
}

export function getToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdEnvironmentsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['environments']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdEnvironmentsQueryKey(
        args,
      ),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.toolresults.v1beta3.projects[':projectId'].histories[':historyId'].executions[
          ':executionId'
        ].environments.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdEnvironments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['environments']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['environments']['$get']
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
                    (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['environments']['$get']
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
                    (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['environments']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdEnvironmentsQueryKey
          >
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
              (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['environments']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdEnvironmentsQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdEnvironmentsQueryKey(
          args,
        ),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.toolresults.v1beta3.projects[':projectId'].histories[':historyId'].executions[
            ':executionId'
          ].environments.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdEnvironmentsEnvironmentIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['environments'][':environmentId']['$get']
    >
  >,
) {
  return [
    'toolresults',
    '/toolresults/v1beta3/projects/:projectId/histories/:historyId/executions/:executionId/environments/:environmentId',
    toValue(args),
  ] as const
}

export function getToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdEnvironmentsEnvironmentIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['environments'][':environmentId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdEnvironmentsEnvironmentIdQueryKey(
        args,
      ),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.toolresults.v1beta3.projects[':projectId'].histories[':historyId'].executions[
          ':executionId'
        ].environments[':environmentId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdEnvironmentsEnvironmentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['environments'][':environmentId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['environments'][':environmentId']['$get']
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
                    (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['environments'][':environmentId']['$get']
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
                    (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['environments'][':environmentId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdEnvironmentsEnvironmentIdQueryKey
          >
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
              (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['environments'][':environmentId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdEnvironmentsEnvironmentIdQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdEnvironmentsEnvironmentIdQueryKey(
          args,
        ),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.toolresults.v1beta3.projects[':projectId'].histories[':historyId'].executions[
            ':executionId'
          ].environments[':environmentId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['steps']['$get']
    >
  >,
) {
  return [
    'toolresults',
    '/toolresults/v1beta3/projects/:projectId/histories/:historyId/executions/:executionId/steps',
    toValue(args),
  ] as const
}

export function getToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['steps']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsQueryKey(
        args,
      ),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.toolresults.v1beta3.projects[':projectId'].histories[':historyId'].executions[
          ':executionId'
        ].steps.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdSteps<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['steps']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['steps']['$get']
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
                    (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['steps']['$get']
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
                    (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['steps']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsQueryKey
          >
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
              (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['steps']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsQueryKey(
          args,
        ),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.toolresults.v1beta3.projects[':projectId'].histories[':historyId'].executions[
            ':executionId'
          ].steps.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsMutationKey() {
  return [
    'toolresults',
    '/toolresults/v1beta3/projects/:projectId/histories/:historyId/executions/:executionId/steps',
    'POST',
  ] as const
}

export function getPostToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['steps']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['steps']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['steps']['$post']
      >,
    ) {
      return parseResponse(
        client.toolresults.v1beta3.projects[':projectId'].histories[':historyId'].executions[
          ':executionId'
        ].steps.$post(args, options),
      )
    },
  })
}

export function usePostToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdSteps<
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
                  ReturnType<
                    (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['steps']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['steps']['$post']
          >,
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
  const mutationDefaults =
    getPostToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsMutationOptions<
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

export function getToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsStepIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['steps'][':stepId']['$get']
    >
  >,
) {
  return [
    'toolresults',
    '/toolresults/v1beta3/projects/:projectId/histories/:historyId/executions/:executionId/steps/:stepId',
    toValue(args),
  ] as const
}

export function getToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsStepIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['steps'][':stepId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsStepIdQueryKey(
        args,
      ),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.toolresults.v1beta3.projects[':projectId'].histories[':historyId'].executions[
          ':executionId'
        ].steps[':stepId'].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsStepId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['steps'][':stepId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['steps'][':stepId']['$get']
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
                    (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['steps'][':stepId']['$get']
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
                    (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['steps'][':stepId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsStepIdQueryKey
          >
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
              (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['steps'][':stepId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsStepIdQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsStepIdQueryKey(
          args,
        ),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.toolresults.v1beta3.projects[':projectId'].histories[':historyId'].executions[
            ':executionId'
          ].steps[':stepId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPatchToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsStepIdMutationKey() {
  return [
    'toolresults',
    '/toolresults/v1beta3/projects/:projectId/histories/:historyId/executions/:executionId/steps/:stepId',
    'PATCH',
  ] as const
}

export function getPatchToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsStepIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['steps'][':stepId']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['steps'][':stepId']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPatchToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsStepIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['steps'][':stepId']['$patch']
      >,
    ) {
      return parseResponse(
        client.toolresults.v1beta3.projects[':projectId'].histories[':historyId'].executions[
          ':executionId'
        ].steps[':stepId'].$patch(args, options),
      )
    },
  })
}

export function usePatchToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsStepId<
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
                  ReturnType<
                    (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['steps'][':stepId']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['steps'][':stepId']['$patch']
          >,
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
  const mutationDefaults =
    getPatchToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsStepIdMutationOptions<
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

export function getToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsStepIdPerfMetricsSummaryQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['steps'][':stepId']['perfMetricsSummary']['$get']
    >
  >,
) {
  return [
    'toolresults',
    '/toolresults/v1beta3/projects/:projectId/histories/:historyId/executions/:executionId/steps/:stepId/perfMetricsSummary',
    toValue(args),
  ] as const
}

export function getToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsStepIdPerfMetricsSummaryQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['steps'][':stepId']['perfMetricsSummary']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsStepIdPerfMetricsSummaryQueryKey(
        args,
      ),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.toolresults.v1beta3.projects[':projectId'].histories[':historyId'].executions[
          ':executionId'
        ].steps[':stepId'].perfMetricsSummary.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsStepIdPerfMetricsSummary<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['steps'][':stepId']['perfMetricsSummary']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['steps'][':stepId']['perfMetricsSummary']['$get']
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
                    (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['steps'][':stepId']['perfMetricsSummary']['$get']
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
                    (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['steps'][':stepId']['perfMetricsSummary']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsStepIdPerfMetricsSummaryQueryKey
          >
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
              (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['steps'][':stepId']['perfMetricsSummary']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsStepIdPerfMetricsSummaryQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsStepIdPerfMetricsSummaryQueryKey(
          args,
        ),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.toolresults.v1beta3.projects[':projectId'].histories[':historyId'].executions[
            ':executionId'
          ].steps[':stepId'].perfMetricsSummary.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsStepIdPerfMetricsSummaryMutationKey() {
  return [
    'toolresults',
    '/toolresults/v1beta3/projects/:projectId/histories/:historyId/executions/:executionId/steps/:stepId/perfMetricsSummary',
    'POST',
  ] as const
}

export function getPostToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsStepIdPerfMetricsSummaryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['steps'][':stepId']['perfMetricsSummary']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['steps'][':stepId']['perfMetricsSummary']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsStepIdPerfMetricsSummaryMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['steps'][':stepId']['perfMetricsSummary']['$post']
      >,
    ) {
      return parseResponse(
        client.toolresults.v1beta3.projects[':projectId'].histories[':historyId'].executions[
          ':executionId'
        ].steps[':stepId'].perfMetricsSummary.$post(args, options),
      )
    },
  })
}

export function usePostToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsStepIdPerfMetricsSummary<
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
                  ReturnType<
                    (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['steps'][':stepId']['perfMetricsSummary']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['steps'][':stepId']['perfMetricsSummary']['$post']
          >,
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
  const mutationDefaults =
    getPostToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsStepIdPerfMetricsSummaryMutationOptions<
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

export function getToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsStepIdPerfSampleSeriesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['steps'][':stepId']['perfSampleSeries']['$get']
    >
  >,
) {
  return [
    'toolresults',
    '/toolresults/v1beta3/projects/:projectId/histories/:historyId/executions/:executionId/steps/:stepId/perfSampleSeries',
    toValue(args),
  ] as const
}

export function getToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsStepIdPerfSampleSeriesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['steps'][':stepId']['perfSampleSeries']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsStepIdPerfSampleSeriesQueryKey(
        args,
      ),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.toolresults.v1beta3.projects[':projectId'].histories[':historyId'].executions[
          ':executionId'
        ].steps[':stepId'].perfSampleSeries.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsStepIdPerfSampleSeries<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['steps'][':stepId']['perfSampleSeries']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['steps'][':stepId']['perfSampleSeries']['$get']
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
                    (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['steps'][':stepId']['perfSampleSeries']['$get']
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
                    (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['steps'][':stepId']['perfSampleSeries']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsStepIdPerfSampleSeriesQueryKey
          >
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
              (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['steps'][':stepId']['perfSampleSeries']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsStepIdPerfSampleSeriesQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsStepIdPerfSampleSeriesQueryKey(
          args,
        ),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.toolresults.v1beta3.projects[':projectId'].histories[':historyId'].executions[
            ':executionId'
          ].steps[':stepId'].perfSampleSeries.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsStepIdPerfSampleSeriesMutationKey() {
  return [
    'toolresults',
    '/toolresults/v1beta3/projects/:projectId/histories/:historyId/executions/:executionId/steps/:stepId/perfSampleSeries',
    'POST',
  ] as const
}

export function getPostToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsStepIdPerfSampleSeriesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['steps'][':stepId']['perfSampleSeries']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['steps'][':stepId']['perfSampleSeries']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsStepIdPerfSampleSeriesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['steps'][':stepId']['perfSampleSeries']['$post']
      >,
    ) {
      return parseResponse(
        client.toolresults.v1beta3.projects[':projectId'].histories[':historyId'].executions[
          ':executionId'
        ].steps[':stepId'].perfSampleSeries.$post(args, options),
      )
    },
  })
}

export function usePostToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsStepIdPerfSampleSeries<
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
                  ReturnType<
                    (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['steps'][':stepId']['perfSampleSeries']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['steps'][':stepId']['perfSampleSeries']['$post']
          >,
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
  const mutationDefaults =
    getPostToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsStepIdPerfSampleSeriesMutationOptions<
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

export function getToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsStepIdPerfSampleSeriesSampleSeriesIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['steps'][':stepId']['perfSampleSeries'][':sampleSeriesId']['$get']
    >
  >,
) {
  return [
    'toolresults',
    '/toolresults/v1beta3/projects/:projectId/histories/:historyId/executions/:executionId/steps/:stepId/perfSampleSeries/:sampleSeriesId',
    toValue(args),
  ] as const
}

export function getToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsStepIdPerfSampleSeriesSampleSeriesIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['steps'][':stepId']['perfSampleSeries'][':sampleSeriesId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsStepIdPerfSampleSeriesSampleSeriesIdQueryKey(
        args,
      ),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.toolresults.v1beta3.projects[':projectId'].histories[':historyId'].executions[
          ':executionId'
        ].steps[':stepId'].perfSampleSeries[':sampleSeriesId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsStepIdPerfSampleSeriesSampleSeriesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['steps'][':stepId']['perfSampleSeries'][':sampleSeriesId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['steps'][':stepId']['perfSampleSeries'][':sampleSeriesId']['$get']
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
                    (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['steps'][':stepId']['perfSampleSeries'][':sampleSeriesId']['$get']
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
                    (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['steps'][':stepId']['perfSampleSeries'][':sampleSeriesId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsStepIdPerfSampleSeriesSampleSeriesIdQueryKey
          >
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
              (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['steps'][':stepId']['perfSampleSeries'][':sampleSeriesId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsStepIdPerfSampleSeriesSampleSeriesIdQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsStepIdPerfSampleSeriesSampleSeriesIdQueryKey(
          args,
        ),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.toolresults.v1beta3.projects[':projectId'].histories[':historyId'].executions[
            ':executionId'
          ].steps[':stepId'].perfSampleSeries[':sampleSeriesId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsStepIdPerfSampleSeriesSampleSeriesIdSamplesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['steps'][':stepId']['perfSampleSeries'][':sampleSeriesId']['samples']['$get']
    >
  >,
) {
  return [
    'toolresults',
    '/toolresults/v1beta3/projects/:projectId/histories/:historyId/executions/:executionId/steps/:stepId/perfSampleSeries/:sampleSeriesId/samples',
    toValue(args),
  ] as const
}

export function getToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsStepIdPerfSampleSeriesSampleSeriesIdSamplesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['steps'][':stepId']['perfSampleSeries'][':sampleSeriesId']['samples']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsStepIdPerfSampleSeriesSampleSeriesIdSamplesQueryKey(
        args,
      ),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.toolresults.v1beta3.projects[':projectId'].histories[':historyId'].executions[
          ':executionId'
        ].steps[':stepId'].perfSampleSeries[':sampleSeriesId'].samples.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsStepIdPerfSampleSeriesSampleSeriesIdSamples<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['steps'][':stepId']['perfSampleSeries'][':sampleSeriesId']['samples']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['steps'][':stepId']['perfSampleSeries'][':sampleSeriesId']['samples']['$get']
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
                    (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['steps'][':stepId']['perfSampleSeries'][':sampleSeriesId']['samples']['$get']
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
                    (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['steps'][':stepId']['perfSampleSeries'][':sampleSeriesId']['samples']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsStepIdPerfSampleSeriesSampleSeriesIdSamplesQueryKey
          >
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
              (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['steps'][':stepId']['perfSampleSeries'][':sampleSeriesId']['samples']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsStepIdPerfSampleSeriesSampleSeriesIdSamplesQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsStepIdPerfSampleSeriesSampleSeriesIdSamplesQueryKey(
          args,
        ),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.toolresults.v1beta3.projects[':projectId'].histories[':historyId'].executions[
            ':executionId'
          ].steps[':stepId'].perfSampleSeries[':sampleSeriesId'].samples.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsStepIdPerfSampleSeriesSampleSeriesIdSamplesBatchCreateMutationKey() {
  return [
    'toolresults',
    '/toolresults/v1beta3/projects/:projectId/histories/:historyId/executions/:executionId/steps/:stepId/perfSampleSeries/:sampleSeriesId/samples:batchCreate',
    'POST',
  ] as const
}

export function getPostToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsStepIdPerfSampleSeriesSampleSeriesIdSamplesBatchCreateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['steps'][':stepId']['perfSampleSeries'][':sampleSeriesId']['samples:batchCreate']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['steps'][':stepId']['perfSampleSeries'][':sampleSeriesId']['samples:batchCreate']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsStepIdPerfSampleSeriesSampleSeriesIdSamplesBatchCreateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['steps'][':stepId']['perfSampleSeries'][':sampleSeriesId']['samples:batchCreate']['$post']
      >,
    ) {
      return parseResponse(
        client.toolresults.v1beta3.projects[':projectId'].histories[':historyId'].executions[
          ':executionId'
        ].steps[':stepId'].perfSampleSeries[':sampleSeriesId']['samples:batchCreate'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsStepIdPerfSampleSeriesSampleSeriesIdSamplesBatchCreate<
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
                  ReturnType<
                    (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['steps'][':stepId']['perfSampleSeries'][':sampleSeriesId']['samples:batchCreate']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['steps'][':stepId']['perfSampleSeries'][':sampleSeriesId']['samples:batchCreate']['$post']
          >,
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
  const mutationDefaults =
    getPostToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsStepIdPerfSampleSeriesSampleSeriesIdSamplesBatchCreateMutationOptions<
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

export function getToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsStepIdTestCasesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['steps'][':stepId']['testCases']['$get']
    >
  >,
) {
  return [
    'toolresults',
    '/toolresults/v1beta3/projects/:projectId/histories/:historyId/executions/:executionId/steps/:stepId/testCases',
    toValue(args),
  ] as const
}

export function getToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsStepIdTestCasesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['steps'][':stepId']['testCases']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsStepIdTestCasesQueryKey(
        args,
      ),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.toolresults.v1beta3.projects[':projectId'].histories[':historyId'].executions[
          ':executionId'
        ].steps[':stepId'].testCases.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsStepIdTestCases<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['steps'][':stepId']['testCases']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['steps'][':stepId']['testCases']['$get']
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
                    (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['steps'][':stepId']['testCases']['$get']
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
                    (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['steps'][':stepId']['testCases']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsStepIdTestCasesQueryKey
          >
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
              (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['steps'][':stepId']['testCases']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsStepIdTestCasesQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsStepIdTestCasesQueryKey(
          args,
        ),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.toolresults.v1beta3.projects[':projectId'].histories[':historyId'].executions[
            ':executionId'
          ].steps[':stepId'].testCases.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsStepIdTestCasesTestCaseIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['steps'][':stepId']['testCases'][':testCaseId']['$get']
    >
  >,
) {
  return [
    'toolresults',
    '/toolresults/v1beta3/projects/:projectId/histories/:historyId/executions/:executionId/steps/:stepId/testCases/:testCaseId',
    toValue(args),
  ] as const
}

export function getToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsStepIdTestCasesTestCaseIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['steps'][':stepId']['testCases'][':testCaseId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsStepIdTestCasesTestCaseIdQueryKey(
        args,
      ),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.toolresults.v1beta3.projects[':projectId'].histories[':historyId'].executions[
          ':executionId'
        ].steps[':stepId'].testCases[':testCaseId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsStepIdTestCasesTestCaseId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['steps'][':stepId']['testCases'][':testCaseId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['steps'][':stepId']['testCases'][':testCaseId']['$get']
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
                    (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['steps'][':stepId']['testCases'][':testCaseId']['$get']
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
                    (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['steps'][':stepId']['testCases'][':testCaseId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsStepIdTestCasesTestCaseIdQueryKey
          >
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
              (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['steps'][':stepId']['testCases'][':testCaseId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsStepIdTestCasesTestCaseIdQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsStepIdTestCasesTestCaseIdQueryKey(
          args,
        ),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.toolresults.v1beta3.projects[':projectId'].histories[':historyId'].executions[
            ':executionId'
          ].steps[':stepId'].testCases[':testCaseId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsStepIdThumbnailsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['steps'][':stepId']['thumbnails']['$get']
    >
  >,
) {
  return [
    'toolresults',
    '/toolresults/v1beta3/projects/:projectId/histories/:historyId/executions/:executionId/steps/:stepId/thumbnails',
    toValue(args),
  ] as const
}

export function getToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsStepIdThumbnailsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['steps'][':stepId']['thumbnails']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsStepIdThumbnailsQueryKey(
        args,
      ),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.toolresults.v1beta3.projects[':projectId'].histories[':historyId'].executions[
          ':executionId'
        ].steps[':stepId'].thumbnails.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsStepIdThumbnails<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['steps'][':stepId']['thumbnails']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['steps'][':stepId']['thumbnails']['$get']
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
                    (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['steps'][':stepId']['thumbnails']['$get']
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
                    (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['steps'][':stepId']['thumbnails']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsStepIdThumbnailsQueryKey
          >
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
              (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['steps'][':stepId']['thumbnails']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsStepIdThumbnailsQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsStepIdThumbnailsQueryKey(
          args,
        ),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.toolresults.v1beta3.projects[':projectId'].histories[':historyId'].executions[
            ':executionId'
          ].steps[':stepId'].thumbnails.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsStepIdPublishXunitXmlFilesMutationKey() {
  return [
    'toolresults',
    '/toolresults/v1beta3/projects/:projectId/histories/:historyId/executions/:executionId/steps/:stepId:publishXunitXmlFiles',
    'POST',
  ] as const
}

export function getPostToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsStepIdPublishXunitXmlFilesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['steps'][':stepId:publishXunitXmlFiles']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['steps'][':stepId:publishXunitXmlFiles']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsStepIdPublishXunitXmlFilesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['steps'][':stepId:publishXunitXmlFiles']['$post']
      >,
    ) {
      return parseResponse(
        client.toolresults.v1beta3.projects[':projectId'].histories[':historyId'].executions[
          ':executionId'
        ].steps[':stepId:publishXunitXmlFiles'].$post(args, options),
      )
    },
  })
}

export function usePostToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsStepIdPublishXunitXmlFiles<
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
                  ReturnType<
                    (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['steps'][':stepId:publishXunitXmlFiles']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['steps'][':stepId:publishXunitXmlFiles']['$post']
          >,
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
  const mutationDefaults =
    getPostToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsStepIdPublishXunitXmlFilesMutationOptions<
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

export function getToolresultsV1beta3ProjectsProjectIdSettingsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.toolresults.v1beta3.projects)[':projectId']['settings']['$get']>
  >,
) {
  return [
    'toolresults',
    '/toolresults/v1beta3/projects/:projectId/settings',
    toValue(args),
  ] as const
}

export function getToolresultsV1beta3ProjectsProjectIdSettingsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.toolresults.v1beta3.projects)[':projectId']['settings']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getToolresultsV1beta3ProjectsProjectIdSettingsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.toolresults.v1beta3.projects[':projectId'].settings.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useToolresultsV1beta3ProjectsProjectIdSettings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.toolresults.v1beta3.projects)[':projectId']['settings']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.toolresults.v1beta3.projects)[':projectId']['settings']['$get']>
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
                    (typeof client.toolresults.v1beta3.projects)[':projectId']['settings']['$get']
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
                    (typeof client.toolresults.v1beta3.projects)[':projectId']['settings']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getToolresultsV1beta3ProjectsProjectIdSettingsQueryKey>
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
              (typeof client.toolresults.v1beta3.projects)[':projectId']['settings']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getToolresultsV1beta3ProjectsProjectIdSettingsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getToolresultsV1beta3ProjectsProjectIdSettingsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.toolresults.v1beta3.projects[':projectId'].settings.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostToolresultsV1beta3ProjectsProjectIdInitializeSettingsMutationKey() {
  return [
    'toolresults',
    '/toolresults/v1beta3/projects/:projectId:initializeSettings',
    'POST',
  ] as const
}

export function getPostToolresultsV1beta3ProjectsProjectIdInitializeSettingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.toolresults.v1beta3.projects)[':projectId:initializeSettings']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.toolresults.v1beta3.projects)[':projectId:initializeSettings']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostToolresultsV1beta3ProjectsProjectIdInitializeSettingsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.toolresults.v1beta3.projects)[':projectId:initializeSettings']['$post']
      >,
    ) {
      return parseResponse(
        client.toolresults.v1beta3.projects[':projectId:initializeSettings'].$post(args, options),
      )
    },
  })
}

export function usePostToolresultsV1beta3ProjectsProjectIdInitializeSettings<
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
                  ReturnType<
                    (typeof client.toolresults.v1beta3.projects)[':projectId:initializeSettings']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.toolresults.v1beta3.projects)[':projectId:initializeSettings']['$post']
          >,
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
  const mutationDefaults =
    getPostToolresultsV1beta3ProjectsProjectIdInitializeSettingsMutationOptions<
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

export function getToolresultsV1beta3NameAccessibilityClustersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.toolresults.v1beta3)[':name:accessibilityClusters']['$get']>
  >,
) {
  return ['toolresults', '/toolresults/v1beta3/:name:accessibilityClusters', toValue(args)] as const
}

export function getToolresultsV1beta3NameAccessibilityClustersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.toolresults.v1beta3)[':name:accessibilityClusters']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getToolresultsV1beta3NameAccessibilityClustersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.toolresults.v1beta3[':name:accessibilityClusters'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useToolresultsV1beta3NameAccessibilityClusters<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.toolresults.v1beta3)[':name:accessibilityClusters']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.toolresults.v1beta3)[':name:accessibilityClusters']['$get']>
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
                    (typeof client.toolresults.v1beta3)[':name:accessibilityClusters']['$get']
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
                    (typeof client.toolresults.v1beta3)[':name:accessibilityClusters']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getToolresultsV1beta3NameAccessibilityClustersQueryKey>
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
            ReturnType<(typeof client.toolresults.v1beta3)[':name:accessibilityClusters']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getToolresultsV1beta3NameAccessibilityClustersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getToolresultsV1beta3NameAccessibilityClustersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.toolresults.v1beta3[':name:accessibilityClusters'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
