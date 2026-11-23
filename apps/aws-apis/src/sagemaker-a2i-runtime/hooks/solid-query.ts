import { createQuery, createMutation, queryOptions, mutationOptions } from '@tanstack/solid-query'
import type {
  UndefinedInitialDataOptions,
  CreateMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/solid-query'
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

export function createHumanLoopsHumanLoopName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['human-loops'][':HumanLoopName']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['human-loops'][':HumanLoopName']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getHumanLoopsHumanLoopNameQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createDeleteHumanLoopsHumanLoopName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteHumanLoopsHumanLoopNameMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createHumanLoopsFlowDefinitionArn<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['human-loops#FlowDefinitionArn']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['human-loops#FlowDefinitionArn']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getHumanLoopsFlowDefinitionArnQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostHumanLoops<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['human-loops']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client)['human-loops']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostHumanLoopsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostHumanLoopsStop<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostHumanLoopsStopMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}
