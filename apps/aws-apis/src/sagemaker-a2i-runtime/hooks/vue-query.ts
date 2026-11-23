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

export function getHumanLoopsKey() {
  return ['human-loops'] as const
}

export function getHumanLoopsFlowDefinitionArnKey() {
  return ['human-loops#FlowDefinitionArn'] as const
}

export function getHumanLoopsHumanLoopNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['human-loops'][':HumanLoopName']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['human-loops', '/human-loops/:HumanLoopName', keyArgs] as const
}

export function getHumanLoopsHumanLoopNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['human-loops'][':HumanLoopName']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getHumanLoopsHumanLoopNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['human-loops'][':HumanLoopName'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['human-loops'][':HumanLoopName']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['human-loops'][':HumanLoopName']['$get']>>
              >
            >
          >,
          ReturnType<typeof getHumanLoopsHumanLoopNameQueryKey>
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
          Awaited<ReturnType<(typeof client)['human-loops'][':HumanLoopName']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getHumanLoopsHumanLoopNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getHumanLoopsHumanLoopNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['human-loops'][':HumanLoopName'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['human-loops#FlowDefinitionArn']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['human-loops#FlowDefinitionArn', '/human-loops#FlowDefinitionArn', keyArgs] as const
}

export function getHumanLoopsFlowDefinitionArnQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['human-loops#FlowDefinitionArn']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getHumanLoopsFlowDefinitionArnQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['human-loops#FlowDefinitionArn'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['human-loops#FlowDefinitionArn']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['human-loops#FlowDefinitionArn']['$get']>>
              >
            >
          >,
          ReturnType<typeof getHumanLoopsFlowDefinitionArnQueryKey>
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
          Awaited<ReturnType<(typeof client)['human-loops#FlowDefinitionArn']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getHumanLoopsFlowDefinitionArnQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getHumanLoopsFlowDefinitionArnQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['human-loops#FlowDefinitionArn'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
