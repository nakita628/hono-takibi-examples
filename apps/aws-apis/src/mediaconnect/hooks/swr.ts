import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getTagsKey() {
  return ['tags'] as const
}

export function getV1Key() {
  return ['v1'] as const
}

export function getPostV1BridgesBridgeArnOutputsKey() {
  return ['v1', '/v1/bridges/:bridgeArn/outputs', 'POST'] as const
}

export function usePostV1BridgesBridgeArnOutputs<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.bridges)[':bridgeArn']['outputs']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.bridges)[':bridgeArn']['outputs']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1BridgesBridgeArnOutputsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.bridges)[':bridgeArn']['outputs']['$post']> },
      ) => parseResponse(client.v1.bridges[':bridgeArn'].outputs.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1BridgesBridgeArnSourcesKey() {
  return ['v1', '/v1/bridges/:bridgeArn/sources', 'POST'] as const
}

export function usePostV1BridgesBridgeArnSources<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.bridges)[':bridgeArn']['sources']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.bridges)[':bridgeArn']['sources']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1BridgesBridgeArnSourcesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.bridges)[':bridgeArn']['sources']['$post']> },
      ) => parseResponse(client.v1.bridges[':bridgeArn'].sources.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1FlowsFlowArnMediaStreamsKey() {
  return ['v1', '/v1/flows/:flowArn/mediaStreams', 'POST'] as const
}

export function usePostV1FlowsFlowArnMediaStreams<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.flows)[':flowArn']['mediaStreams']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.flows)[':flowArn']['mediaStreams']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1FlowsFlowArnMediaStreamsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.flows)[':flowArn']['mediaStreams']['$post']> },
      ) => parseResponse(client.v1.flows[':flowArn'].mediaStreams.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1FlowsFlowArnOutputsKey() {
  return ['v1', '/v1/flows/:flowArn/outputs', 'POST'] as const
}

export function usePostV1FlowsFlowArnOutputs<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.flows)[':flowArn']['outputs']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.flows)[':flowArn']['outputs']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1FlowsFlowArnOutputsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.flows)[':flowArn']['outputs']['$post']> },
      ) => parseResponse(client.v1.flows[':flowArn'].outputs.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1FlowsFlowArnSourceKey() {
  return ['v1', '/v1/flows/:flowArn/source', 'POST'] as const
}

export function usePostV1FlowsFlowArnSource<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.flows)[':flowArn']['source']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.flows)[':flowArn']['source']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1FlowsFlowArnSourceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.flows)[':flowArn']['source']['$post']> },
      ) => parseResponse(client.v1.flows[':flowArn'].source.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1FlowsFlowArnVpcInterfacesKey() {
  return ['v1', '/v1/flows/:flowArn/vpcInterfaces', 'POST'] as const
}

export function usePostV1FlowsFlowArnVpcInterfaces<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.flows)[':flowArn']['vpcInterfaces']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.flows)[':flowArn']['vpcInterfaces']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1FlowsFlowArnVpcInterfacesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.flows)[':flowArn']['vpcInterfaces']['$post']>
        },
      ) => parseResponse(client.v1.flows[':flowArn'].vpcInterfaces.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1BridgesKey(args: InferRequestType<typeof client.v1.bridges.$get>) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/bridges', keyArgs] as const
}

export function useGetV1Bridges<TError = unknown>(
  args: InferRequestType<typeof client.v1.bridges.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.bridges.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1BridgesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.bridges.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.bridges.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1Bridges<TError = unknown>(
  args: InferRequestType<typeof client.v1.bridges.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.bridges.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1BridgesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.bridges.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.bridges.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1BridgesKey() {
  return ['v1', '/v1/bridges', 'POST'] as const
}

export function usePostV1Bridges<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.bridges.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.v1.bridges.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1BridgesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.bridges.$post> }) =>
        parseResponse(client.v1.bridges.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1FlowsKey(args: InferRequestType<typeof client.v1.flows.$get>) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/flows', keyArgs] as const
}

export function useGetV1Flows<TError = unknown>(
  args: InferRequestType<typeof client.v1.flows.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.flows.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1FlowsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.flows.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.v1.flows.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetV1Flows<TError = unknown>(
  args: InferRequestType<typeof client.v1.flows.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.flows.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1FlowsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.flows.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.v1.flows.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostV1FlowsKey() {
  return ['v1', '/v1/flows', 'POST'] as const
}

export function usePostV1Flows<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.flows.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.v1.flows.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1FlowsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.flows.$post> }) =>
        parseResponse(client.v1.flows.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1GatewaysKey(args: InferRequestType<typeof client.v1.gateways.$get>) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/gateways', keyArgs] as const
}

export function useGetV1Gateways<TError = unknown>(
  args: InferRequestType<typeof client.v1.gateways.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.gateways.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1GatewaysKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.gateways.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.gateways.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1Gateways<TError = unknown>(
  args: InferRequestType<typeof client.v1.gateways.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.gateways.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1GatewaysKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.gateways.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.gateways.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1GatewaysKey() {
  return ['v1', '/v1/gateways', 'POST'] as const
}

export function usePostV1Gateways<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.gateways.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.v1.gateways.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1GatewaysKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.gateways.$post> }) =>
        parseResponse(client.v1.gateways.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1BridgesBridgeArnKey(
  args: InferRequestType<(typeof client.v1.bridges)[':bridgeArn']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/bridges/:bridgeArn', keyArgs] as const
}

export function useGetV1BridgesBridgeArn<TError = unknown>(
  args: InferRequestType<(typeof client.v1.bridges)[':bridgeArn']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.bridges)[':bridgeArn']['$get']>>
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
        ? getGetV1BridgesBridgeArnKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.bridges)[':bridgeArn']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.bridges[':bridgeArn'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1BridgesBridgeArn<TError = unknown>(
  args: InferRequestType<(typeof client.v1.bridges)[':bridgeArn']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.bridges)[':bridgeArn']['$get']>>
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
        ? getGetV1BridgesBridgeArnKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.bridges)[':bridgeArn']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.bridges[':bridgeArn'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV1BridgesBridgeArnKey() {
  return ['v1', '/v1/bridges/:bridgeArn', 'PUT'] as const
}

export function usePutV1BridgesBridgeArn<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.bridges)[':bridgeArn']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.bridges)[':bridgeArn']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1BridgesBridgeArnKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.bridges)[':bridgeArn']['$put']> },
      ) => parseResponse(client.v1.bridges[':bridgeArn'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1BridgesBridgeArnKey() {
  return ['v1', '/v1/bridges/:bridgeArn', 'DELETE'] as const
}

export function useDeleteV1BridgesBridgeArn<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.bridges)[':bridgeArn']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.bridges)[':bridgeArn']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1BridgesBridgeArnKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.bridges)[':bridgeArn']['$delete']> },
      ) => parseResponse(client.v1.bridges[':bridgeArn'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1FlowsFlowArnKey(
  args: InferRequestType<(typeof client.v1.flows)[':flowArn']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/flows/:flowArn', keyArgs] as const
}

export function useGetV1FlowsFlowArn<TError = unknown>(
  args: InferRequestType<(typeof client.v1.flows)[':flowArn']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.flows)[':flowArn']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetV1FlowsFlowArnKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.flows)[':flowArn']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.flows[':flowArn'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1FlowsFlowArn<TError = unknown>(
  args: InferRequestType<(typeof client.v1.flows)[':flowArn']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.flows)[':flowArn']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetV1FlowsFlowArnKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.flows)[':flowArn']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.flows[':flowArn'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV1FlowsFlowArnKey() {
  return ['v1', '/v1/flows/:flowArn', 'PUT'] as const
}

export function usePutV1FlowsFlowArn<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.flows)[':flowArn']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.flows)[':flowArn']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1FlowsFlowArnKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.flows)[':flowArn']['$put']> },
      ) => parseResponse(client.v1.flows[':flowArn'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1FlowsFlowArnKey() {
  return ['v1', '/v1/flows/:flowArn', 'DELETE'] as const
}

export function useDeleteV1FlowsFlowArn<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.flows)[':flowArn']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.flows)[':flowArn']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1FlowsFlowArnKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.flows)[':flowArn']['$delete']> },
      ) => parseResponse(client.v1.flows[':flowArn'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1GatewaysGatewayArnKey(
  args: InferRequestType<(typeof client.v1.gateways)[':gatewayArn']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/gateways/:gatewayArn', keyArgs] as const
}

export function useGetV1GatewaysGatewayArn<TError = unknown>(
  args: InferRequestType<(typeof client.v1.gateways)[':gatewayArn']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.gateways)[':gatewayArn']['$get']>>
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
        ? getGetV1GatewaysGatewayArnKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.gateways)[':gatewayArn']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.gateways[':gatewayArn'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1GatewaysGatewayArn<TError = unknown>(
  args: InferRequestType<(typeof client.v1.gateways)[':gatewayArn']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.gateways)[':gatewayArn']['$get']>>
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
        ? getGetV1GatewaysGatewayArnKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.gateways)[':gatewayArn']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.gateways[':gatewayArn'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV1GatewaysGatewayArnKey() {
  return ['v1', '/v1/gateways/:gatewayArn', 'DELETE'] as const
}

export function useDeleteV1GatewaysGatewayArn<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.gateways)[':gatewayArn']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.gateways)[':gatewayArn']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1GatewaysGatewayArnKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.gateways)[':gatewayArn']['$delete']> },
      ) => parseResponse(client.v1.gateways[':gatewayArn'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1GatewayInstancesGatewayInstanceArnKey(
  args: InferRequestType<(typeof client.v1)['gateway-instances'][':gatewayInstanceArn']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/gateway-instances/:gatewayInstanceArn', keyArgs] as const
}

export function useGetV1GatewayInstancesGatewayInstanceArn<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['gateway-instances'][':gatewayInstanceArn']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1)['gateway-instances'][':gatewayInstanceArn']['$get']>
            >
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
        ? getGetV1GatewayInstancesGatewayInstanceArnKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1)['gateway-instances'][':gatewayInstanceArn']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1['gateway-instances'][':gatewayInstanceArn'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1GatewayInstancesGatewayInstanceArn<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['gateway-instances'][':gatewayInstanceArn']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1)['gateway-instances'][':gatewayInstanceArn']['$get']>
            >
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
        ? getGetV1GatewayInstancesGatewayInstanceArnKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1)['gateway-instances'][':gatewayInstanceArn']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1['gateway-instances'][':gatewayInstanceArn'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutV1GatewayInstancesGatewayInstanceArnKey() {
  return ['v1', '/v1/gateway-instances/:gatewayInstanceArn', 'PUT'] as const
}

export function usePutV1GatewayInstancesGatewayInstanceArn<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1)['gateway-instances'][':gatewayInstanceArn']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['gateway-instances'][':gatewayInstanceArn']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1GatewayInstancesGatewayInstanceArnKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.v1)['gateway-instances'][':gatewayInstanceArn']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v1['gateway-instances'][':gatewayInstanceArn'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1GatewayInstancesGatewayInstanceArnKey() {
  return ['v1', '/v1/gateway-instances/:gatewayInstanceArn', 'DELETE'] as const
}

export function useDeleteV1GatewayInstancesGatewayInstanceArn<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1)['gateway-instances'][':gatewayInstanceArn']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['gateway-instances'][':gatewayInstanceArn']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1GatewayInstancesGatewayInstanceArnKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.v1)['gateway-instances'][':gatewayInstanceArn']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v1['gateway-instances'][':gatewayInstanceArn'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1OfferingsOfferingArnKey(
  args: InferRequestType<(typeof client.v1.offerings)[':offeringArn']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/offerings/:offeringArn', keyArgs] as const
}

export function useGetV1OfferingsOfferingArn<TError = unknown>(
  args: InferRequestType<(typeof client.v1.offerings)[':offeringArn']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.offerings)[':offeringArn']['$get']>>
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
        ? getGetV1OfferingsOfferingArnKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.offerings)[':offeringArn']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.offerings[':offeringArn'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1OfferingsOfferingArn<TError = unknown>(
  args: InferRequestType<(typeof client.v1.offerings)[':offeringArn']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.offerings)[':offeringArn']['$get']>>
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
        ? getGetV1OfferingsOfferingArnKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.offerings)[':offeringArn']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.offerings[':offeringArn'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1OfferingsOfferingArnKey() {
  return ['v1', '/v1/offerings/:offeringArn', 'POST'] as const
}

export function usePostV1OfferingsOfferingArn<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.offerings)[':offeringArn']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.offerings)[':offeringArn']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1OfferingsOfferingArnKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.offerings)[':offeringArn']['$post']> },
      ) => parseResponse(client.v1.offerings[':offeringArn'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1ReservationsReservationArnKey(
  args: InferRequestType<(typeof client.v1.reservations)[':reservationArn']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/reservations/:reservationArn', keyArgs] as const
}

export function useGetV1ReservationsReservationArn<TError = unknown>(
  args: InferRequestType<(typeof client.v1.reservations)[':reservationArn']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.reservations)[':reservationArn']['$get']>>
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
        ? getGetV1ReservationsReservationArnKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.reservations)[':reservationArn']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.reservations[':reservationArn'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ReservationsReservationArn<TError = unknown>(
  args: InferRequestType<(typeof client.v1.reservations)[':reservationArn']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.reservations)[':reservationArn']['$get']>>
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
        ? getGetV1ReservationsReservationArnKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.reservations)[':reservationArn']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.reservations[':reservationArn'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1FlowsFlowArnEntitlementsKey() {
  return ['v1', '/v1/flows/:flowArn/entitlements', 'POST'] as const
}

export function usePostV1FlowsFlowArnEntitlements<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.flows)[':flowArn']['entitlements']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.flows)[':flowArn']['entitlements']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1FlowsFlowArnEntitlementsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.flows)[':flowArn']['entitlements']['$post']> },
      ) => parseResponse(client.v1.flows[':flowArn'].entitlements.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1EntitlementsKey(
  args: InferRequestType<typeof client.v1.entitlements.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/entitlements', keyArgs] as const
}

export function useGetV1Entitlements<TError = unknown>(
  args: InferRequestType<typeof client.v1.entitlements.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.entitlements.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1EntitlementsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.entitlements.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.entitlements.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1Entitlements<TError = unknown>(
  args: InferRequestType<typeof client.v1.entitlements.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.entitlements.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1EntitlementsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.entitlements.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.entitlements.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1GatewayInstancesKey(
  args: InferRequestType<(typeof client.v1)['gateway-instances']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/gateway-instances', keyArgs] as const
}

export function useGetV1GatewayInstances<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['gateway-instances']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['gateway-instances']['$get']>>>
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
        ? getGetV1GatewayInstancesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['gateway-instances']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1['gateway-instances'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1GatewayInstances<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['gateway-instances']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['gateway-instances']['$get']>>>
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
        ? getGetV1GatewayInstancesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['gateway-instances']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1['gateway-instances'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1OfferingsKey(args: InferRequestType<typeof client.v1.offerings.$get>) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/offerings', keyArgs] as const
}

export function useGetV1Offerings<TError = unknown>(
  args: InferRequestType<typeof client.v1.offerings.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.offerings.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1OfferingsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.offerings.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.offerings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1Offerings<TError = unknown>(
  args: InferRequestType<typeof client.v1.offerings.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.offerings.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1OfferingsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.offerings.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.offerings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1ReservationsKey(
  args: InferRequestType<typeof client.v1.reservations.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/reservations', keyArgs] as const
}

export function useGetV1Reservations<TError = unknown>(
  args: InferRequestType<typeof client.v1.reservations.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.reservations.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1ReservationsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.reservations.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.reservations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1Reservations<TError = unknown>(
  args: InferRequestType<typeof client.v1.reservations.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.reservations.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1ReservationsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.reservations.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.reservations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTagsResourceArnKey(
  args: InferRequestType<(typeof client.tags)[':resourceArn']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['tags', '/tags/:resourceArn', keyArgs] as const
}

export function useGetTagsResourceArn<TError = unknown>(
  args: InferRequestType<(typeof client.tags)[':resourceArn']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>>
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
        ? getGetTagsResourceArnKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tags[':resourceArn'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTagsResourceArn<TError = unknown>(
  args: InferRequestType<(typeof client.tags)[':resourceArn']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>>
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
        ? getGetTagsResourceArnKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tags[':resourceArn'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostTagsResourceArnKey() {
  return ['tags', '/tags/:resourceArn', 'POST'] as const
}

export function usePostTagsResourceArn<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$post']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.tags)[':resourceArn']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTagsResourceArnKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.tags)[':resourceArn']['$post']> },
      ) => parseResponse(client.tags[':resourceArn'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutV1BridgesBridgeArnOutputsOutputNameKey() {
  return ['v1', '/v1/bridges/:bridgeArn/outputs/:outputName', 'PUT'] as const
}

export function usePutV1BridgesBridgeArnOutputsOutputName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.bridges)[':bridgeArn']['outputs'][':outputName']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.bridges)[':bridgeArn']['outputs'][':outputName']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1BridgesBridgeArnOutputsOutputNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.v1.bridges)[':bridgeArn']['outputs'][':outputName']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v1.bridges[':bridgeArn'].outputs[':outputName'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1BridgesBridgeArnOutputsOutputNameKey() {
  return ['v1', '/v1/bridges/:bridgeArn/outputs/:outputName', 'DELETE'] as const
}

export function useDeleteV1BridgesBridgeArnOutputsOutputName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.bridges)[':bridgeArn']['outputs'][':outputName']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.bridges)[':bridgeArn']['outputs'][':outputName']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1BridgesBridgeArnOutputsOutputNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.v1.bridges)[':bridgeArn']['outputs'][':outputName']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v1.bridges[':bridgeArn'].outputs[':outputName'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutV1BridgesBridgeArnSourcesSourceNameKey() {
  return ['v1', '/v1/bridges/:bridgeArn/sources/:sourceName', 'PUT'] as const
}

export function usePutV1BridgesBridgeArnSourcesSourceName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.bridges)[':bridgeArn']['sources'][':sourceName']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.bridges)[':bridgeArn']['sources'][':sourceName']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1BridgesBridgeArnSourcesSourceNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.v1.bridges)[':bridgeArn']['sources'][':sourceName']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v1.bridges[':bridgeArn'].sources[':sourceName'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1BridgesBridgeArnSourcesSourceNameKey() {
  return ['v1', '/v1/bridges/:bridgeArn/sources/:sourceName', 'DELETE'] as const
}

export function useDeleteV1BridgesBridgeArnSourcesSourceName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.bridges)[':bridgeArn']['sources'][':sourceName']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.bridges)[':bridgeArn']['sources'][':sourceName']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1BridgesBridgeArnSourcesSourceNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.v1.bridges)[':bridgeArn']['sources'][':sourceName']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v1.bridges[':bridgeArn'].sources[':sourceName'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutV1FlowsFlowArnMediaStreamsMediaStreamNameKey() {
  return ['v1', '/v1/flows/:flowArn/mediaStreams/:mediaStreamName', 'PUT'] as const
}

export function usePutV1FlowsFlowArnMediaStreamsMediaStreamName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.flows)[':flowArn']['mediaStreams'][':mediaStreamName']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.flows)[':flowArn']['mediaStreams'][':mediaStreamName']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1FlowsFlowArnMediaStreamsMediaStreamNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.v1.flows)[':flowArn']['mediaStreams'][':mediaStreamName']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v1.flows[':flowArn'].mediaStreams[':mediaStreamName'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1FlowsFlowArnMediaStreamsMediaStreamNameKey() {
  return ['v1', '/v1/flows/:flowArn/mediaStreams/:mediaStreamName', 'DELETE'] as const
}

export function useDeleteV1FlowsFlowArnMediaStreamsMediaStreamName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.flows)[':flowArn']['mediaStreams'][':mediaStreamName']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.flows)[':flowArn']['mediaStreams'][':mediaStreamName']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1FlowsFlowArnMediaStreamsMediaStreamNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.v1.flows)[':flowArn']['mediaStreams'][':mediaStreamName']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v1.flows[':flowArn'].mediaStreams[':mediaStreamName'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutV1FlowsFlowArnOutputsOutputArnKey() {
  return ['v1', '/v1/flows/:flowArn/outputs/:outputArn', 'PUT'] as const
}

export function usePutV1FlowsFlowArnOutputsOutputArn<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.flows)[':flowArn']['outputs'][':outputArn']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.flows)[':flowArn']['outputs'][':outputArn']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1FlowsFlowArnOutputsOutputArnKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.v1.flows)[':flowArn']['outputs'][':outputArn']['$put']
          >
        },
      ) =>
        parseResponse(client.v1.flows[':flowArn'].outputs[':outputArn'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1FlowsFlowArnOutputsOutputArnKey() {
  return ['v1', '/v1/flows/:flowArn/outputs/:outputArn', 'DELETE'] as const
}

export function useDeleteV1FlowsFlowArnOutputsOutputArn<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.flows)[':flowArn']['outputs'][':outputArn']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.flows)[':flowArn']['outputs'][':outputArn']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1FlowsFlowArnOutputsOutputArnKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.v1.flows)[':flowArn']['outputs'][':outputArn']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v1.flows[':flowArn'].outputs[':outputArn'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutV1FlowsFlowArnSourceSourceArnKey() {
  return ['v1', '/v1/flows/:flowArn/source/:sourceArn', 'PUT'] as const
}

export function usePutV1FlowsFlowArnSourceSourceArn<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.flows)[':flowArn']['source'][':sourceArn']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.flows)[':flowArn']['source'][':sourceArn']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1FlowsFlowArnSourceSourceArnKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.v1.flows)[':flowArn']['source'][':sourceArn']['$put']
          >
        },
      ) => parseResponse(client.v1.flows[':flowArn'].source[':sourceArn'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1FlowsFlowArnSourceSourceArnKey() {
  return ['v1', '/v1/flows/:flowArn/source/:sourceArn', 'DELETE'] as const
}

export function useDeleteV1FlowsFlowArnSourceSourceArn<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.flows)[':flowArn']['source'][':sourceArn']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.flows)[':flowArn']['source'][':sourceArn']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1FlowsFlowArnSourceSourceArnKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.v1.flows)[':flowArn']['source'][':sourceArn']['$delete']
          >
        },
      ) =>
        parseResponse(client.v1.flows[':flowArn'].source[':sourceArn'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1FlowsFlowArnVpcInterfacesVpcInterfaceNameKey() {
  return ['v1', '/v1/flows/:flowArn/vpcInterfaces/:vpcInterfaceName', 'DELETE'] as const
}

export function useDeleteV1FlowsFlowArnVpcInterfacesVpcInterfaceName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.flows)[':flowArn']['vpcInterfaces'][':vpcInterfaceName']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.flows)[':flowArn']['vpcInterfaces'][':vpcInterfaceName']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1FlowsFlowArnVpcInterfacesVpcInterfaceNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.v1.flows)[':flowArn']['vpcInterfaces'][':vpcInterfaceName']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v1.flows[':flowArn'].vpcInterfaces[':vpcInterfaceName'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutV1FlowsFlowArnEntitlementsEntitlementArnKey() {
  return ['v1', '/v1/flows/:flowArn/entitlements/:entitlementArn', 'PUT'] as const
}

export function usePutV1FlowsFlowArnEntitlementsEntitlementArn<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.flows)[':flowArn']['entitlements'][':entitlementArn']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.flows)[':flowArn']['entitlements'][':entitlementArn']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1FlowsFlowArnEntitlementsEntitlementArnKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.v1.flows)[':flowArn']['entitlements'][':entitlementArn']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v1.flows[':flowArn'].entitlements[':entitlementArn'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1FlowsFlowArnEntitlementsEntitlementArnKey() {
  return ['v1', '/v1/flows/:flowArn/entitlements/:entitlementArn', 'DELETE'] as const
}

export function useDeleteV1FlowsFlowArnEntitlementsEntitlementArn<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.flows)[':flowArn']['entitlements'][':entitlementArn']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.flows)[':flowArn']['entitlements'][':entitlementArn']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1FlowsFlowArnEntitlementsEntitlementArnKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.v1.flows)[':flowArn']['entitlements'][':entitlementArn']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v1.flows[':flowArn'].entitlements[':entitlementArn'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1FlowsStartFlowArnKey() {
  return ['v1', '/v1/flows/start/:flowArn', 'POST'] as const
}

export function usePostV1FlowsStartFlowArn<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.flows.start)[':flowArn']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.flows.start)[':flowArn']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1FlowsStartFlowArnKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.flows.start)[':flowArn']['$post']> },
      ) => parseResponse(client.v1.flows.start[':flowArn'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1FlowsStopFlowArnKey() {
  return ['v1', '/v1/flows/stop/:flowArn', 'POST'] as const
}

export function usePostV1FlowsStopFlowArn<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.flows.stop)[':flowArn']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.flows.stop)[':flowArn']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1FlowsStopFlowArnKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.flows.stop)[':flowArn']['$post']> },
      ) => parseResponse(client.v1.flows.stop[':flowArn'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteTagsResourceArnTagKeysKey() {
  return ['tags', '/tags/:resourceArn#tagKeys', 'DELETE'] as const
}

export function useDeleteTagsResourceArnTagKeys<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tags)[':resourceArn#tagKeys']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.tags)[':resourceArn#tagKeys']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteTagsResourceArnTagKeysKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.tags)[':resourceArn#tagKeys']['$delete']> },
      ) => parseResponse(client.tags[':resourceArn#tagKeys'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutV1BridgesBridgeArnStateKey() {
  return ['v1', '/v1/bridges/:bridgeArn/state', 'PUT'] as const
}

export function usePutV1BridgesBridgeArnState<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.bridges)[':bridgeArn']['state']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.bridges)[':bridgeArn']['state']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1BridgesBridgeArnStateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.bridges)[':bridgeArn']['state']['$put']> },
      ) => parseResponse(client.v1.bridges[':bridgeArn'].state.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
