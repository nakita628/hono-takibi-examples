import {
  useQuery,
  useSuspenseQuery,
  useMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/preact-query'
import type {
  UseQueryOptions,
  UseSuspenseQueryOptions,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/preact-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getHumanLoopsKey() {
  return ['human-loops'] as const
}

export function getHumanLoopsFlowDefinitionArnKey() {
  return ['human-loops#FlowDefinitionArn'] as const
}

export function getHumanLoopsHumanLoopNameQueryKey(
  args: InferRequestType<(typeof client)['human-loops'][':HumanLoopName']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['human-loops', '/human-loops/:HumanLoopName', keyArgs] as const
}

export function getHumanLoopsHumanLoopNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['human-loops'][':HumanLoopName']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['human-loops'][':HumanLoopName']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['human-loops'][':HumanLoopName']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getHumanLoopsHumanLoopNameQueryKey>
  >({
    queryKey: getHumanLoopsHumanLoopNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['human-loops'][':HumanLoopName'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useHumanLoopsHumanLoopName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['human-loops'][':HumanLoopName']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['human-loops'][':HumanLoopName']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['human-loops'][':HumanLoopName']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getHumanLoopsHumanLoopNameQueryKey>
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
      ...getHumanLoopsHumanLoopNameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseHumanLoopsHumanLoopName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['human-loops'][':HumanLoopName']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['human-loops'][':HumanLoopName']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['human-loops'][':HumanLoopName']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getHumanLoopsHumanLoopNameQueryKey>
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
      ...getHumanLoopsHumanLoopNameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteHumanLoopsHumanLoopNameMutationKey() {
  return ['human-loops', '/human-loops/:HumanLoopName', 'DELETE'] as const
}

export function getDeleteHumanLoopsHumanLoopNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['human-loops'][':HumanLoopName']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['human-loops'][':HumanLoopName']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteHumanLoopsHumanLoopNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['human-loops'][':HumanLoopName']['$delete']>,
    ) {
      return parseResponse(client['human-loops'][':HumanLoopName'].$delete(args, options))
    },
  })
}

export function useDeleteHumanLoopsHumanLoopName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['human-loops'][':HumanLoopName']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['human-loops'][':HumanLoopName']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteHumanLoopsHumanLoopNameMutationOptions<TError, TOnMutateResult>(
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

export function getHumanLoopsFlowDefinitionArnQueryKey(
  args: InferRequestType<(typeof client)['human-loops#FlowDefinitionArn']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['human-loops#FlowDefinitionArn', '/human-loops#FlowDefinitionArn', keyArgs] as const
}

export function getHumanLoopsFlowDefinitionArnQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['human-loops#FlowDefinitionArn']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['human-loops#FlowDefinitionArn']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['human-loops#FlowDefinitionArn']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getHumanLoopsFlowDefinitionArnQueryKey>
  >({
    queryKey: getHumanLoopsFlowDefinitionArnQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['human-loops#FlowDefinitionArn'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useHumanLoopsFlowDefinitionArn<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['human-loops#FlowDefinitionArn']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['human-loops#FlowDefinitionArn']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['human-loops#FlowDefinitionArn']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getHumanLoopsFlowDefinitionArnQueryKey>
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
      ...getHumanLoopsFlowDefinitionArnQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseHumanLoopsFlowDefinitionArn<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['human-loops#FlowDefinitionArn']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['human-loops#FlowDefinitionArn']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['human-loops#FlowDefinitionArn']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getHumanLoopsFlowDefinitionArnQueryKey>
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
      ...getHumanLoopsFlowDefinitionArnQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostHumanLoopsMutationKey() {
  return ['human-loops', '/human-loops', 'POST'] as const
}

export function getPostHumanLoopsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['human-loops']['$post']>>>>
    >,
    TError,
    InferRequestType<(typeof client)['human-loops']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostHumanLoopsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['human-loops']['$post']>) {
      return parseResponse(client['human-loops'].$post(args, options))
    },
  })
}

export function usePostHumanLoops<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['human-loops']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)['human-loops']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostHumanLoopsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostHumanLoopsStopMutationKey() {
  return ['human-loops', '/human-loops/stop', 'POST'] as const
}

export function getPostHumanLoopsStopMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['human-loops']['stop']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['human-loops']['stop']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostHumanLoopsStopMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['human-loops']['stop']['$post']>) {
      return parseResponse(client['human-loops'].stop.$post(args, options))
    },
  })
}

export function usePostHumanLoopsStop<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['human-loops']['stop']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['human-loops']['stop']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostHumanLoopsStopMutationOptions<TError, TOnMutateResult>(
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
