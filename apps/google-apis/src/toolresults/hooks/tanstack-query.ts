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

export function getToolresultsKey() {
  return ['toolresults'] as const
}

export function getToolresultsV1beta3ProjectsProjectIdHistoriesQueryKey(
  args: InferRequestType<
    (typeof client.toolresults.v1beta3.projects)[':projectId']['histories']['$get']
  >,
) {
  return ['toolresults', '/toolresults/v1beta3/projects/:projectId/histories', args] as const
}

export function getToolresultsV1beta3ProjectsProjectIdHistoriesQueryOptions<
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
  args: InferRequestType<
    (typeof client.toolresults.v1beta3.projects)[':projectId']['histories']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getToolresultsV1beta3ProjectsProjectIdHistoriesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.toolresults.v1beta3.projects[':projectId'].histories.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.toolresults.v1beta3.projects)[':projectId']['histories']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getToolresultsV1beta3ProjectsProjectIdHistoriesQueryKey>
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
      ...getToolresultsV1beta3ProjectsProjectIdHistoriesQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseToolresultsV1beta3ProjectsProjectIdHistories<
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
  args: InferRequestType<
    (typeof client.toolresults.v1beta3.projects)[':projectId']['histories']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getToolresultsV1beta3ProjectsProjectIdHistoriesQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
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
  args: InferRequestType<
    (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['$get']
  >,
) {
  return [
    'toolresults',
    '/toolresults/v1beta3/projects/:projectId/histories/:historyId',
    args,
  ] as const
}

export function getToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.toolresults.v1beta3.projects[':projectId'].histories[':historyId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdQueryKey>
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
      ...getToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseToolresultsV1beta3ProjectsProjectIdHistoriesHistoryId<
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
  args: InferRequestType<
    (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsQueryKey(
  args: InferRequestType<
    (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions']['$get']
  >,
) {
  return [
    'toolresults',
    '/toolresults/v1beta3/projects/:projectId/histories/:historyId/executions',
    args,
  ] as const
}

export function getToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsQueryOptions<
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
  args: InferRequestType<
    (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.toolresults.v1beta3.projects[':projectId'].histories[':historyId'].executions.$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<
          typeof getToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsQueryKey
        >
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
      ...getToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutions<
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
  args: InferRequestType<
    (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        ReturnType<
          typeof getToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsQueryKey
        >
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
      ...getToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
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
  args: InferRequestType<
    (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['$get']
  >,
) {
  return [
    'toolresults',
    '/toolresults/v1beta3/projects/:projectId/histories/:historyId/executions/:executionId',
    args,
  ] as const
}

export function getToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey:
      getToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.toolresults.v1beta3.projects[':projectId'].histories[':historyId'].executions[
          ':executionId'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<
          typeof getToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdQueryKey
        >
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
      ...getToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionId<
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
  args: InferRequestType<
    (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
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
  args: InferRequestType<
    (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['clusters']['$get']
  >,
) {
  return [
    'toolresults',
    '/toolresults/v1beta3/projects/:projectId/histories/:historyId/executions/:executionId/clusters',
    args,
  ] as const
}

export function getToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdClustersQueryOptions<
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
  args: InferRequestType<
    (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['clusters']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey:
      getToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdClustersQueryKey(
        args,
      ),
    queryFn({ signal }) {
      return parseResponse(
        client.toolresults.v1beta3.projects[':projectId'].histories[':historyId'].executions[
          ':executionId'
        ].clusters.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['clusters']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<
          typeof getToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdClustersQueryKey
        >
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
      ...getToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdClustersQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdClusters<
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
  args: InferRequestType<
    (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['clusters']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdClustersQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdClustersClusterIdQueryKey(
  args: InferRequestType<
    (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['clusters'][':clusterId']['$get']
  >,
) {
  return [
    'toolresults',
    '/toolresults/v1beta3/projects/:projectId/histories/:historyId/executions/:executionId/clusters/:clusterId',
    args,
  ] as const
}

export function getToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdClustersClusterIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['clusters'][':clusterId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey:
      getToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdClustersClusterIdQueryKey(
        args,
      ),
    queryFn({ signal }) {
      return parseResponse(
        client.toolresults.v1beta3.projects[':projectId'].histories[':historyId'].executions[
          ':executionId'
        ].clusters[':clusterId'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['clusters'][':clusterId']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<
          typeof getToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdClustersClusterIdQueryKey
        >
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
      ...getToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdClustersClusterIdQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdClustersClusterId<
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
  args: InferRequestType<
    (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['clusters'][':clusterId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdClustersClusterIdQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdEnvironmentsQueryKey(
  args: InferRequestType<
    (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['environments']['$get']
  >,
) {
  return [
    'toolresults',
    '/toolresults/v1beta3/projects/:projectId/histories/:historyId/executions/:executionId/environments',
    args,
  ] as const
}

export function getToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdEnvironmentsQueryOptions<
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
  args: InferRequestType<
    (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['environments']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey:
      getToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdEnvironmentsQueryKey(
        args,
      ),
    queryFn({ signal }) {
      return parseResponse(
        client.toolresults.v1beta3.projects[':projectId'].histories[':historyId'].executions[
          ':executionId'
        ].environments.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['environments']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<
          typeof getToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdEnvironmentsQueryKey
        >
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
      ...getToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdEnvironmentsQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdEnvironments<
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
  args: InferRequestType<
    (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['environments']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdEnvironmentsQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdEnvironmentsEnvironmentIdQueryKey(
  args: InferRequestType<
    (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['environments'][':environmentId']['$get']
  >,
) {
  return [
    'toolresults',
    '/toolresults/v1beta3/projects/:projectId/histories/:historyId/executions/:executionId/environments/:environmentId',
    args,
  ] as const
}

export function getToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdEnvironmentsEnvironmentIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['environments'][':environmentId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey:
      getToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdEnvironmentsEnvironmentIdQueryKey(
        args,
      ),
    queryFn({ signal }) {
      return parseResponse(
        client.toolresults.v1beta3.projects[':projectId'].histories[':historyId'].executions[
          ':executionId'
        ].environments[':environmentId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['environments'][':environmentId']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<
          typeof getToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdEnvironmentsEnvironmentIdQueryKey
        >
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
      ...getToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdEnvironmentsEnvironmentIdQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdEnvironmentsEnvironmentId<
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
  args: InferRequestType<
    (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['environments'][':environmentId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdEnvironmentsEnvironmentIdQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsQueryKey(
  args: InferRequestType<
    (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['steps']['$get']
  >,
) {
  return [
    'toolresults',
    '/toolresults/v1beta3/projects/:projectId/histories/:historyId/executions/:executionId/steps',
    args,
  ] as const
}

export function getToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsQueryOptions<
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
  args: InferRequestType<
    (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['steps']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey:
      getToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsQueryKey(
        args,
      ),
    queryFn({ signal }) {
      return parseResponse(
        client.toolresults.v1beta3.projects[':projectId'].histories[':historyId'].executions[
          ':executionId'
        ].steps.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['steps']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<
          typeof getToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsQueryKey
        >
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
      ...getToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdSteps<
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
  args: InferRequestType<
    (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['steps']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
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
  args: InferRequestType<
    (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['steps'][':stepId']['$get']
  >,
) {
  return [
    'toolresults',
    '/toolresults/v1beta3/projects/:projectId/histories/:historyId/executions/:executionId/steps/:stepId',
    args,
  ] as const
}

export function getToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsStepIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['steps'][':stepId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey:
      getToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsStepIdQueryKey(
        args,
      ),
    queryFn({ signal }) {
      return parseResponse(
        client.toolresults.v1beta3.projects[':projectId'].histories[':historyId'].executions[
          ':executionId'
        ].steps[':stepId'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['steps'][':stepId']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<
          typeof getToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsStepIdQueryKey
        >
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
      ...getToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsStepIdQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsStepId<
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
  args: InferRequestType<
    (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['steps'][':stepId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsStepIdQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
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
  args: InferRequestType<
    (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['steps'][':stepId']['perfMetricsSummary']['$get']
  >,
) {
  return [
    'toolresults',
    '/toolresults/v1beta3/projects/:projectId/histories/:historyId/executions/:executionId/steps/:stepId/perfMetricsSummary',
    args,
  ] as const
}

export function getToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsStepIdPerfMetricsSummaryQueryOptions<
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
  args: InferRequestType<
    (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['steps'][':stepId']['perfMetricsSummary']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey:
      getToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsStepIdPerfMetricsSummaryQueryKey(
        args,
      ),
    queryFn({ signal }) {
      return parseResponse(
        client.toolresults.v1beta3.projects[':projectId'].histories[':historyId'].executions[
          ':executionId'
        ].steps[':stepId'].perfMetricsSummary.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['steps'][':stepId']['perfMetricsSummary']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<
          typeof getToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsStepIdPerfMetricsSummaryQueryKey
        >
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
      ...getToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsStepIdPerfMetricsSummaryQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsStepIdPerfMetricsSummary<
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
  args: InferRequestType<
    (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['steps'][':stepId']['perfMetricsSummary']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsStepIdPerfMetricsSummaryQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
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
  args: InferRequestType<
    (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['steps'][':stepId']['perfSampleSeries']['$get']
  >,
) {
  return [
    'toolresults',
    '/toolresults/v1beta3/projects/:projectId/histories/:historyId/executions/:executionId/steps/:stepId/perfSampleSeries',
    args,
  ] as const
}

export function getToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsStepIdPerfSampleSeriesQueryOptions<
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
  args: InferRequestType<
    (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['steps'][':stepId']['perfSampleSeries']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey:
      getToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsStepIdPerfSampleSeriesQueryKey(
        args,
      ),
    queryFn({ signal }) {
      return parseResponse(
        client.toolresults.v1beta3.projects[':projectId'].histories[':historyId'].executions[
          ':executionId'
        ].steps[':stepId'].perfSampleSeries.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['steps'][':stepId']['perfSampleSeries']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<
          typeof getToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsStepIdPerfSampleSeriesQueryKey
        >
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
      ...getToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsStepIdPerfSampleSeriesQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsStepIdPerfSampleSeries<
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
  args: InferRequestType<
    (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['steps'][':stepId']['perfSampleSeries']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsStepIdPerfSampleSeriesQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
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
  args: InferRequestType<
    (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['steps'][':stepId']['perfSampleSeries'][':sampleSeriesId']['$get']
  >,
) {
  return [
    'toolresults',
    '/toolresults/v1beta3/projects/:projectId/histories/:historyId/executions/:executionId/steps/:stepId/perfSampleSeries/:sampleSeriesId',
    args,
  ] as const
}

export function getToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsStepIdPerfSampleSeriesSampleSeriesIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['steps'][':stepId']['perfSampleSeries'][':sampleSeriesId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey:
      getToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsStepIdPerfSampleSeriesSampleSeriesIdQueryKey(
        args,
      ),
    queryFn({ signal }) {
      return parseResponse(
        client.toolresults.v1beta3.projects[':projectId'].histories[':historyId'].executions[
          ':executionId'
        ].steps[':stepId'].perfSampleSeries[':sampleSeriesId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['steps'][':stepId']['perfSampleSeries'][':sampleSeriesId']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<
          typeof getToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsStepIdPerfSampleSeriesSampleSeriesIdQueryKey
        >
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
      ...getToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsStepIdPerfSampleSeriesSampleSeriesIdQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsStepIdPerfSampleSeriesSampleSeriesId<
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
  args: InferRequestType<
    (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['steps'][':stepId']['perfSampleSeries'][':sampleSeriesId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsStepIdPerfSampleSeriesSampleSeriesIdQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsStepIdPerfSampleSeriesSampleSeriesIdSamplesQueryKey(
  args: InferRequestType<
    (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['steps'][':stepId']['perfSampleSeries'][':sampleSeriesId']['samples']['$get']
  >,
) {
  return [
    'toolresults',
    '/toolresults/v1beta3/projects/:projectId/histories/:historyId/executions/:executionId/steps/:stepId/perfSampleSeries/:sampleSeriesId/samples',
    args,
  ] as const
}

export function getToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsStepIdPerfSampleSeriesSampleSeriesIdSamplesQueryOptions<
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
  args: InferRequestType<
    (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['steps'][':stepId']['perfSampleSeries'][':sampleSeriesId']['samples']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey:
      getToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsStepIdPerfSampleSeriesSampleSeriesIdSamplesQueryKey(
        args,
      ),
    queryFn({ signal }) {
      return parseResponse(
        client.toolresults.v1beta3.projects[':projectId'].histories[':historyId'].executions[
          ':executionId'
        ].steps[':stepId'].perfSampleSeries[':sampleSeriesId'].samples.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['steps'][':stepId']['perfSampleSeries'][':sampleSeriesId']['samples']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<
          typeof getToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsStepIdPerfSampleSeriesSampleSeriesIdSamplesQueryKey
        >
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
      ...getToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsStepIdPerfSampleSeriesSampleSeriesIdSamplesQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsStepIdPerfSampleSeriesSampleSeriesIdSamples<
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
  args: InferRequestType<
    (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['steps'][':stepId']['perfSampleSeries'][':sampleSeriesId']['samples']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsStepIdPerfSampleSeriesSampleSeriesIdSamplesQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
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
  args: InferRequestType<
    (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['steps'][':stepId']['testCases']['$get']
  >,
) {
  return [
    'toolresults',
    '/toolresults/v1beta3/projects/:projectId/histories/:historyId/executions/:executionId/steps/:stepId/testCases',
    args,
  ] as const
}

export function getToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsStepIdTestCasesQueryOptions<
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
  args: InferRequestType<
    (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['steps'][':stepId']['testCases']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey:
      getToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsStepIdTestCasesQueryKey(
        args,
      ),
    queryFn({ signal }) {
      return parseResponse(
        client.toolresults.v1beta3.projects[':projectId'].histories[':historyId'].executions[
          ':executionId'
        ].steps[':stepId'].testCases.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['steps'][':stepId']['testCases']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<
          typeof getToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsStepIdTestCasesQueryKey
        >
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
      ...getToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsStepIdTestCasesQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsStepIdTestCases<
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
  args: InferRequestType<
    (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['steps'][':stepId']['testCases']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsStepIdTestCasesQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsStepIdTestCasesTestCaseIdQueryKey(
  args: InferRequestType<
    (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['steps'][':stepId']['testCases'][':testCaseId']['$get']
  >,
) {
  return [
    'toolresults',
    '/toolresults/v1beta3/projects/:projectId/histories/:historyId/executions/:executionId/steps/:stepId/testCases/:testCaseId',
    args,
  ] as const
}

export function getToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsStepIdTestCasesTestCaseIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['steps'][':stepId']['testCases'][':testCaseId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey:
      getToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsStepIdTestCasesTestCaseIdQueryKey(
        args,
      ),
    queryFn({ signal }) {
      return parseResponse(
        client.toolresults.v1beta3.projects[':projectId'].histories[':historyId'].executions[
          ':executionId'
        ].steps[':stepId'].testCases[':testCaseId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['steps'][':stepId']['testCases'][':testCaseId']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<
          typeof getToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsStepIdTestCasesTestCaseIdQueryKey
        >
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
      ...getToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsStepIdTestCasesTestCaseIdQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsStepIdTestCasesTestCaseId<
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
  args: InferRequestType<
    (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['steps'][':stepId']['testCases'][':testCaseId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsStepIdTestCasesTestCaseIdQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsStepIdThumbnailsQueryKey(
  args: InferRequestType<
    (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['steps'][':stepId']['thumbnails']['$get']
  >,
) {
  return [
    'toolresults',
    '/toolresults/v1beta3/projects/:projectId/histories/:historyId/executions/:executionId/steps/:stepId/thumbnails',
    args,
  ] as const
}

export function getToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsStepIdThumbnailsQueryOptions<
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
  args: InferRequestType<
    (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['steps'][':stepId']['thumbnails']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey:
      getToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsStepIdThumbnailsQueryKey(
        args,
      ),
    queryFn({ signal }) {
      return parseResponse(
        client.toolresults.v1beta3.projects[':projectId'].histories[':historyId'].executions[
          ':executionId'
        ].steps[':stepId'].thumbnails.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['steps'][':stepId']['thumbnails']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<
          typeof getToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsStepIdThumbnailsQueryKey
        >
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
      ...getToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsStepIdThumbnailsQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsStepIdThumbnails<
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
  args: InferRequestType<
    (typeof client.toolresults.v1beta3.projects)[':projectId']['histories'][':historyId']['executions'][':executionId']['steps'][':stepId']['thumbnails']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsStepIdThumbnailsQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
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
  args: InferRequestType<
    (typeof client.toolresults.v1beta3.projects)[':projectId']['settings']['$get']
  >,
) {
  return ['toolresults', '/toolresults/v1beta3/projects/:projectId/settings', args] as const
}

export function getToolresultsV1beta3ProjectsProjectIdSettingsQueryOptions<
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
  args: InferRequestType<
    (typeof client.toolresults.v1beta3.projects)[':projectId']['settings']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getToolresultsV1beta3ProjectsProjectIdSettingsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.toolresults.v1beta3.projects[':projectId'].settings.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.toolresults.v1beta3.projects)[':projectId']['settings']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getToolresultsV1beta3ProjectsProjectIdSettingsQueryKey>
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
      ...getToolresultsV1beta3ProjectsProjectIdSettingsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseToolresultsV1beta3ProjectsProjectIdSettings<
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
  args: InferRequestType<
    (typeof client.toolresults.v1beta3.projects)[':projectId']['settings']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getToolresultsV1beta3ProjectsProjectIdSettingsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
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
  args: InferRequestType<
    (typeof client.toolresults.v1beta3)[':name:accessibilityClusters']['$get']
  >,
) {
  return ['toolresults', '/toolresults/v1beta3/:name:accessibilityClusters', args] as const
}

export function getToolresultsV1beta3NameAccessibilityClustersQueryOptions<
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
  args: InferRequestType<
    (typeof client.toolresults.v1beta3)[':name:accessibilityClusters']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getToolresultsV1beta3NameAccessibilityClustersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.toolresults.v1beta3[':name:accessibilityClusters'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.toolresults.v1beta3)[':name:accessibilityClusters']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getToolresultsV1beta3NameAccessibilityClustersQueryKey>
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
      ...getToolresultsV1beta3NameAccessibilityClustersQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseToolresultsV1beta3NameAccessibilityClusters<
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
  args: InferRequestType<
    (typeof client.toolresults.v1beta3)[':name:accessibilityClusters']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        ReturnType<typeof getToolresultsV1beta3NameAccessibilityClustersQueryKey>
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
      ...getToolresultsV1beta3NameAccessibilityClustersQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}
