import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getHumanLoopsKey() {
  return ['human-loops'] as const
}

export function getHumanLoopsFlowDefinitionArnKey() {
  return ['human-loops#FlowDefinitionArn'] as const
}

export function getGetHumanLoopsHumanLoopNameKey(
  args: InferRequestType<(typeof client)['human-loops'][':HumanLoopName']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['human-loops', '/human-loops/:HumanLoopName', keyArgs] as const
}

export function useGetHumanLoopsHumanLoopName<TError = unknown>(
  args: InferRequestType<(typeof client)['human-loops'][':HumanLoopName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['human-loops'][':HumanLoopName']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetHumanLoopsHumanLoopNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['human-loops'][':HumanLoopName']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['human-loops'][':HumanLoopName'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetHumanLoopsHumanLoopName<TError = unknown>(
  args: InferRequestType<(typeof client)['human-loops'][':HumanLoopName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['human-loops'][':HumanLoopName']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetHumanLoopsHumanLoopNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['human-loops'][':HumanLoopName']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['human-loops'][':HumanLoopName'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteHumanLoopsHumanLoopNameKey() {
  return ['human-loops', '/human-loops/:HumanLoopName', 'DELETE'] as const
}

export function useDeleteHumanLoopsHumanLoopName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['human-loops'][':HumanLoopName']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['human-loops'][':HumanLoopName']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteHumanLoopsHumanLoopNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['human-loops'][':HumanLoopName']['$delete']> },
      ) => parseResponse(client['human-loops'][':HumanLoopName'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetHumanLoopsFlowDefinitionArnKey(
  args: InferRequestType<(typeof client)['human-loops#FlowDefinitionArn']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['human-loops#FlowDefinitionArn', '/human-loops#FlowDefinitionArn', keyArgs] as const
}

export function useGetHumanLoopsFlowDefinitionArn<TError = unknown>(
  args: InferRequestType<(typeof client)['human-loops#FlowDefinitionArn']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['human-loops#FlowDefinitionArn']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetHumanLoopsFlowDefinitionArnKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['human-loops#FlowDefinitionArn']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['human-loops#FlowDefinitionArn'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetHumanLoopsFlowDefinitionArn<TError = unknown>(
  args: InferRequestType<(typeof client)['human-loops#FlowDefinitionArn']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['human-loops#FlowDefinitionArn']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetHumanLoopsFlowDefinitionArnKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['human-loops#FlowDefinitionArn']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['human-loops#FlowDefinitionArn'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostHumanLoopsKey() {
  return ['human-loops', '/human-loops', 'POST'] as const
}

export function usePostHumanLoops<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['human-loops']['$post']>>>>
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['human-loops']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostHumanLoopsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client)['human-loops']['$post']> }) =>
        parseResponse(client['human-loops'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostHumanLoopsStopKey() {
  return ['human-loops', '/human-loops/stop', 'POST'] as const
}

export function usePostHumanLoopsStop<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['human-loops']['stop']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['human-loops']['stop']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostHumanLoopsStopKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['human-loops']['stop']['$post']> },
      ) => parseResponse(client['human-loops'].stop.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
