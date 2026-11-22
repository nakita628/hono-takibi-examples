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

export function getTagsKey() {
  return ['tags'] as const
}

export function getV1Key() {
  return ['v1'] as const
}

export function getPostV1BridgesBridgeArnOutputsMutationKey() {
  return ['v1', '/v1/bridges/:bridgeArn/outputs', 'POST'] as const
}

export function getPostV1BridgesBridgeArnOutputsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.bridges)[':bridgeArn']['outputs']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.bridges)[':bridgeArn']['outputs']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1BridgesBridgeArnOutputsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.bridges)[':bridgeArn']['outputs']['$post']>,
    ) {
      return parseResponse(client.v1.bridges[':bridgeArn'].outputs.$post(args, options))
    },
  })
}

export function usePostV1BridgesBridgeArnOutputs<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.bridges)[':bridgeArn']['outputs']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.bridges)[':bridgeArn']['outputs']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1BridgesBridgeArnOutputsMutationOptions<TError, TOnMutateResult>(
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

export function getPostV1BridgesBridgeArnSourcesMutationKey() {
  return ['v1', '/v1/bridges/:bridgeArn/sources', 'POST'] as const
}

export function getPostV1BridgesBridgeArnSourcesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.bridges)[':bridgeArn']['sources']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.bridges)[':bridgeArn']['sources']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1BridgesBridgeArnSourcesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.bridges)[':bridgeArn']['sources']['$post']>,
    ) {
      return parseResponse(client.v1.bridges[':bridgeArn'].sources.$post(args, options))
    },
  })
}

export function usePostV1BridgesBridgeArnSources<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.bridges)[':bridgeArn']['sources']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.bridges)[':bridgeArn']['sources']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1BridgesBridgeArnSourcesMutationOptions<TError, TOnMutateResult>(
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

export function getPostV1FlowsFlowArnMediaStreamsMutationKey() {
  return ['v1', '/v1/flows/:flowArn/mediaStreams', 'POST'] as const
}

export function getPostV1FlowsFlowArnMediaStreamsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.flows)[':flowArn']['mediaStreams']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.flows)[':flowArn']['mediaStreams']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1FlowsFlowArnMediaStreamsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.flows)[':flowArn']['mediaStreams']['$post']>,
    ) {
      return parseResponse(client.v1.flows[':flowArn'].mediaStreams.$post(args, options))
    },
  })
}

export function usePostV1FlowsFlowArnMediaStreams<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.flows)[':flowArn']['mediaStreams']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.flows)[':flowArn']['mediaStreams']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1FlowsFlowArnMediaStreamsMutationOptions<
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

export function getPostV1FlowsFlowArnOutputsMutationKey() {
  return ['v1', '/v1/flows/:flowArn/outputs', 'POST'] as const
}

export function getPostV1FlowsFlowArnOutputsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.flows)[':flowArn']['outputs']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.flows)[':flowArn']['outputs']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1FlowsFlowArnOutputsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.flows)[':flowArn']['outputs']['$post']>,
    ) {
      return parseResponse(client.v1.flows[':flowArn'].outputs.$post(args, options))
    },
  })
}

export function usePostV1FlowsFlowArnOutputs<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.flows)[':flowArn']['outputs']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.flows)[':flowArn']['outputs']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1FlowsFlowArnOutputsMutationOptions<TError, TOnMutateResult>(
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

export function getPostV1FlowsFlowArnSourceMutationKey() {
  return ['v1', '/v1/flows/:flowArn/source', 'POST'] as const
}

export function getPostV1FlowsFlowArnSourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.flows)[':flowArn']['source']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.flows)[':flowArn']['source']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1FlowsFlowArnSourceMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.flows)[':flowArn']['source']['$post']>,
    ) {
      return parseResponse(client.v1.flows[':flowArn'].source.$post(args, options))
    },
  })
}

export function usePostV1FlowsFlowArnSource<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.flows)[':flowArn']['source']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.flows)[':flowArn']['source']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1FlowsFlowArnSourceMutationOptions<TError, TOnMutateResult>(
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

export function getPostV1FlowsFlowArnVpcInterfacesMutationKey() {
  return ['v1', '/v1/flows/:flowArn/vpcInterfaces', 'POST'] as const
}

export function getPostV1FlowsFlowArnVpcInterfacesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.flows)[':flowArn']['vpcInterfaces']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.flows)[':flowArn']['vpcInterfaces']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1FlowsFlowArnVpcInterfacesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.flows)[':flowArn']['vpcInterfaces']['$post']>,
    ) {
      return parseResponse(client.v1.flows[':flowArn'].vpcInterfaces.$post(args, options))
    },
  })
}

export function usePostV1FlowsFlowArnVpcInterfaces<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.flows)[':flowArn']['vpcInterfaces']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.flows)[':flowArn']['vpcInterfaces']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1FlowsFlowArnVpcInterfacesMutationOptions<
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

export function getV1BridgesQueryKey(args: InferRequestType<typeof client.v1.bridges.$get>) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/bridges', keyArgs] as const
}

export function getV1BridgesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.bridges.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.bridges.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.bridges.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1BridgesQueryKey>
  >({
    queryKey: getV1BridgesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.bridges.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV1Bridges<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.bridges.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.bridges.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.bridges.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1BridgesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1BridgesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1Bridges<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.bridges.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.bridges.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.bridges.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1BridgesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1BridgesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostV1BridgesMutationKey() {
  return ['v1', '/v1/bridges', 'POST'] as const
}

export function getPostV1BridgesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.bridges.$post>>>>>,
    TError,
    InferRequestType<typeof client.v1.bridges.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1BridgesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.bridges.$post>) {
      return parseResponse(client.v1.bridges.$post(args, options))
    },
  })
}

export function usePostV1Bridges<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.bridges.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v1.bridges.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1BridgesMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV1FlowsQueryKey(args: InferRequestType<typeof client.v1.flows.$get>) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/flows', keyArgs] as const
}

export function getV1FlowsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.flows.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.flows.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.flows.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1FlowsQueryKey>
  >({
    queryKey: getV1FlowsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.flows.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV1Flows<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.flows.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.flows.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.flows.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getV1FlowsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1FlowsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1Flows<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.flows.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.flows.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.flows.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getV1FlowsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1FlowsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostV1FlowsMutationKey() {
  return ['v1', '/v1/flows', 'POST'] as const
}

export function getPostV1FlowsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.flows.$post>>>>>,
    TError,
    InferRequestType<typeof client.v1.flows.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1FlowsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.flows.$post>) {
      return parseResponse(client.v1.flows.$post(args, options))
    },
  })
}

export function usePostV1Flows<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.flows.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v1.flows.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1FlowsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV1GatewaysQueryKey(args: InferRequestType<typeof client.v1.gateways.$get>) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/gateways', keyArgs] as const
}

export function getV1GatewaysQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.gateways.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.gateways.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.gateways.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1GatewaysQueryKey>
  >({
    queryKey: getV1GatewaysQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.gateways.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV1Gateways<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.gateways.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.gateways.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.gateways.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1GatewaysQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1GatewaysQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1Gateways<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.gateways.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.gateways.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.gateways.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1GatewaysQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1GatewaysQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostV1GatewaysMutationKey() {
  return ['v1', '/v1/gateways', 'POST'] as const
}

export function getPostV1GatewaysMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.gateways.$post>>>>>,
    TError,
    InferRequestType<typeof client.v1.gateways.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1GatewaysMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.gateways.$post>) {
      return parseResponse(client.v1.gateways.$post(args, options))
    },
  })
}

export function usePostV1Gateways<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.gateways.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v1.gateways.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1GatewaysMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV1BridgesBridgeArnQueryKey(
  args: InferRequestType<(typeof client.v1.bridges)[':bridgeArn']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/bridges/:bridgeArn', keyArgs] as const
}

export function getV1BridgesBridgeArnQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.bridges)[':bridgeArn']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.bridges)[':bridgeArn']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.bridges)[':bridgeArn']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1BridgesBridgeArnQueryKey>
  >({
    queryKey: getV1BridgesBridgeArnQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.bridges[':bridgeArn'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1BridgesBridgeArn<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.bridges)[':bridgeArn']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.bridges)[':bridgeArn']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.bridges)[':bridgeArn']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1BridgesBridgeArnQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1BridgesBridgeArnQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1BridgesBridgeArn<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.bridges)[':bridgeArn']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.bridges)[':bridgeArn']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.bridges)[':bridgeArn']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1BridgesBridgeArnQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1BridgesBridgeArnQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutV1BridgesBridgeArnMutationKey() {
  return ['v1', '/v1/bridges/:bridgeArn', 'PUT'] as const
}

export function getPutV1BridgesBridgeArnMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.bridges)[':bridgeArn']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.bridges)[':bridgeArn']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1BridgesBridgeArnMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.bridges)[':bridgeArn']['$put']>) {
      return parseResponse(client.v1.bridges[':bridgeArn'].$put(args, options))
    },
  })
}

export function usePutV1BridgesBridgeArn<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.bridges)[':bridgeArn']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.bridges)[':bridgeArn']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV1BridgesBridgeArnMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteV1BridgesBridgeArnMutationKey() {
  return ['v1', '/v1/bridges/:bridgeArn', 'DELETE'] as const
}

export function getDeleteV1BridgesBridgeArnMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.bridges)[':bridgeArn']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.bridges)[':bridgeArn']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1BridgesBridgeArnMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.bridges)[':bridgeArn']['$delete']>) {
      return parseResponse(client.v1.bridges[':bridgeArn'].$delete(args, options))
    },
  })
}

export function useDeleteV1BridgesBridgeArn<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.bridges)[':bridgeArn']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.bridges)[':bridgeArn']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV1BridgesBridgeArnMutationOptions<TError, TOnMutateResult>(
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

export function getV1FlowsFlowArnQueryKey(
  args: InferRequestType<(typeof client.v1.flows)[':flowArn']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/flows/:flowArn', keyArgs] as const
}

export function getV1FlowsFlowArnQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.flows)[':flowArn']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.flows)[':flowArn']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.flows)[':flowArn']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1FlowsFlowArnQueryKey>
  >({
    queryKey: getV1FlowsFlowArnQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.flows[':flowArn'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV1FlowsFlowArn<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.flows)[':flowArn']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.flows)[':flowArn']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1.flows)[':flowArn']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1FlowsFlowArnQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1FlowsFlowArnQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1FlowsFlowArn<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.flows)[':flowArn']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.flows)[':flowArn']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1.flows)[':flowArn']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1FlowsFlowArnQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1FlowsFlowArnQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutV1FlowsFlowArnMutationKey() {
  return ['v1', '/v1/flows/:flowArn', 'PUT'] as const
}

export function getPutV1FlowsFlowArnMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.flows)[':flowArn']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.flows)[':flowArn']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1FlowsFlowArnMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.flows)[':flowArn']['$put']>) {
      return parseResponse(client.v1.flows[':flowArn'].$put(args, options))
    },
  })
}

export function usePutV1FlowsFlowArn<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1.flows)[':flowArn']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.flows)[':flowArn']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV1FlowsFlowArnMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteV1FlowsFlowArnMutationKey() {
  return ['v1', '/v1/flows/:flowArn', 'DELETE'] as const
}

export function getDeleteV1FlowsFlowArnMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.flows)[':flowArn']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.flows)[':flowArn']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1FlowsFlowArnMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.flows)[':flowArn']['$delete']>) {
      return parseResponse(client.v1.flows[':flowArn'].$delete(args, options))
    },
  })
}

export function useDeleteV1FlowsFlowArn<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.flows)[':flowArn']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.flows)[':flowArn']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV1FlowsFlowArnMutationOptions<TError, TOnMutateResult>(
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

export function getV1GatewaysGatewayArnQueryKey(
  args: InferRequestType<(typeof client.v1.gateways)[':gatewayArn']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/gateways/:gatewayArn', keyArgs] as const
}

export function getV1GatewaysGatewayArnQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.gateways)[':gatewayArn']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.gateways)[':gatewayArn']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.gateways)[':gatewayArn']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1GatewaysGatewayArnQueryKey>
  >({
    queryKey: getV1GatewaysGatewayArnQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.gateways[':gatewayArn'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1GatewaysGatewayArn<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.gateways)[':gatewayArn']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.gateways)[':gatewayArn']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.gateways)[':gatewayArn']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1GatewaysGatewayArnQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1GatewaysGatewayArnQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1GatewaysGatewayArn<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.gateways)[':gatewayArn']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.gateways)[':gatewayArn']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.gateways)[':gatewayArn']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1GatewaysGatewayArnQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1GatewaysGatewayArnQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDeleteV1GatewaysGatewayArnMutationKey() {
  return ['v1', '/v1/gateways/:gatewayArn', 'DELETE'] as const
}

export function getDeleteV1GatewaysGatewayArnMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.gateways)[':gatewayArn']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.gateways)[':gatewayArn']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1GatewaysGatewayArnMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.gateways)[':gatewayArn']['$delete']>,
    ) {
      return parseResponse(client.v1.gateways[':gatewayArn'].$delete(args, options))
    },
  })
}

export function useDeleteV1GatewaysGatewayArn<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.gateways)[':gatewayArn']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.gateways)[':gatewayArn']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV1GatewaysGatewayArnMutationOptions<TError, TOnMutateResult>(
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

export function getV1GatewayInstancesGatewayInstanceArnQueryKey(
  args: InferRequestType<(typeof client.v1)['gateway-instances'][':gatewayInstanceArn']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/gateway-instances/:gatewayInstanceArn', keyArgs] as const
}

export function getV1GatewayInstancesGatewayInstanceArnQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)['gateway-instances'][':gatewayInstanceArn']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)['gateway-instances'][':gatewayInstanceArn']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1)['gateway-instances'][':gatewayInstanceArn']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1GatewayInstancesGatewayInstanceArnQueryKey>
  >({
    queryKey: getV1GatewayInstancesGatewayInstanceArnQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1['gateway-instances'][':gatewayInstanceArn'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1GatewayInstancesGatewayInstanceArn<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)['gateway-instances'][':gatewayInstanceArn']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)['gateway-instances'][':gatewayInstanceArn']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v1)['gateway-instances'][':gatewayInstanceArn']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1GatewayInstancesGatewayInstanceArnQueryKey>
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
      ...getV1GatewayInstancesGatewayInstanceArnQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1GatewayInstancesGatewayInstanceArn<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)['gateway-instances'][':gatewayInstanceArn']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)['gateway-instances'][':gatewayInstanceArn']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v1)['gateway-instances'][':gatewayInstanceArn']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1GatewayInstancesGatewayInstanceArnQueryKey>
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
      ...getV1GatewayInstancesGatewayInstanceArnQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutV1GatewayInstancesGatewayInstanceArnMutationKey() {
  return ['v1', '/v1/gateway-instances/:gatewayInstanceArn', 'PUT'] as const
}

export function getPutV1GatewayInstancesGatewayInstanceArnMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.v1)['gateway-instances'][':gatewayInstanceArn']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1GatewayInstancesGatewayInstanceArnMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1)['gateway-instances'][':gatewayInstanceArn']['$put']
      >,
    ) {
      return parseResponse(
        client.v1['gateway-instances'][':gatewayInstanceArn'].$put(args, options),
      )
    },
  })
}

export function usePutV1GatewayInstancesGatewayInstanceArn<
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
                ReturnType<(typeof client.v1)['gateway-instances'][':gatewayInstanceArn']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1)['gateway-instances'][':gatewayInstanceArn']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV1GatewayInstancesGatewayInstanceArnMutationOptions<
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

export function getDeleteV1GatewayInstancesGatewayInstanceArnMutationKey() {
  return ['v1', '/v1/gateway-instances/:gatewayInstanceArn', 'DELETE'] as const
}

export function getDeleteV1GatewayInstancesGatewayInstanceArnMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.v1)['gateway-instances'][':gatewayInstanceArn']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1GatewayInstancesGatewayInstanceArnMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1)['gateway-instances'][':gatewayInstanceArn']['$delete']
      >,
    ) {
      return parseResponse(
        client.v1['gateway-instances'][':gatewayInstanceArn'].$delete(args, options),
      )
    },
  })
}

export function useDeleteV1GatewayInstancesGatewayInstanceArn<
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
                  (typeof client.v1)['gateway-instances'][':gatewayInstanceArn']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1)['gateway-instances'][':gatewayInstanceArn']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV1GatewayInstancesGatewayInstanceArnMutationOptions<
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

export function getV1OfferingsOfferingArnQueryKey(
  args: InferRequestType<(typeof client.v1.offerings)[':offeringArn']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/offerings/:offeringArn', keyArgs] as const
}

export function getV1OfferingsOfferingArnQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.offerings)[':offeringArn']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.offerings)[':offeringArn']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.offerings)[':offeringArn']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1OfferingsOfferingArnQueryKey>
  >({
    queryKey: getV1OfferingsOfferingArnQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.offerings[':offeringArn'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1OfferingsOfferingArn<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.offerings)[':offeringArn']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.offerings)[':offeringArn']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.offerings)[':offeringArn']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1OfferingsOfferingArnQueryKey>
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
      ...getV1OfferingsOfferingArnQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1OfferingsOfferingArn<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.offerings)[':offeringArn']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.offerings)[':offeringArn']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.offerings)[':offeringArn']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1OfferingsOfferingArnQueryKey>
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
      ...getV1OfferingsOfferingArnQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostV1OfferingsOfferingArnMutationKey() {
  return ['v1', '/v1/offerings/:offeringArn', 'POST'] as const
}

export function getPostV1OfferingsOfferingArnMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.offerings)[':offeringArn']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.offerings)[':offeringArn']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1OfferingsOfferingArnMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.offerings)[':offeringArn']['$post']>,
    ) {
      return parseResponse(client.v1.offerings[':offeringArn'].$post(args, options))
    },
  })
}

export function usePostV1OfferingsOfferingArn<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.offerings)[':offeringArn']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.offerings)[':offeringArn']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1OfferingsOfferingArnMutationOptions<TError, TOnMutateResult>(
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

export function getV1ReservationsReservationArnQueryKey(
  args: InferRequestType<(typeof client.v1.reservations)[':reservationArn']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/reservations/:reservationArn', keyArgs] as const
}

export function getV1ReservationsReservationArnQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.reservations)[':reservationArn']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.reservations)[':reservationArn']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.reservations)[':reservationArn']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ReservationsReservationArnQueryKey>
  >({
    queryKey: getV1ReservationsReservationArnQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.reservations[':reservationArn'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1ReservationsReservationArn<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.reservations)[':reservationArn']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.reservations)[':reservationArn']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.reservations)[':reservationArn']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ReservationsReservationArnQueryKey>
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
      ...getV1ReservationsReservationArnQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1ReservationsReservationArn<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.reservations)[':reservationArn']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.reservations)[':reservationArn']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.reservations)[':reservationArn']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ReservationsReservationArnQueryKey>
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
      ...getV1ReservationsReservationArnQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostV1FlowsFlowArnEntitlementsMutationKey() {
  return ['v1', '/v1/flows/:flowArn/entitlements', 'POST'] as const
}

export function getPostV1FlowsFlowArnEntitlementsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.flows)[':flowArn']['entitlements']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.flows)[':flowArn']['entitlements']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1FlowsFlowArnEntitlementsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.flows)[':flowArn']['entitlements']['$post']>,
    ) {
      return parseResponse(client.v1.flows[':flowArn'].entitlements.$post(args, options))
    },
  })
}

export function usePostV1FlowsFlowArnEntitlements<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.flows)[':flowArn']['entitlements']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.flows)[':flowArn']['entitlements']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1FlowsFlowArnEntitlementsMutationOptions<
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

export function getV1EntitlementsQueryKey(
  args: InferRequestType<typeof client.v1.entitlements.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/entitlements', keyArgs] as const
}

export function getV1EntitlementsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.entitlements.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.entitlements.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.entitlements.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1EntitlementsQueryKey>
  >({
    queryKey: getV1EntitlementsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.entitlements.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV1Entitlements<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.entitlements.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.entitlements.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.entitlements.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1EntitlementsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1EntitlementsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1Entitlements<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.entitlements.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.entitlements.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.entitlements.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1EntitlementsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1EntitlementsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getV1GatewayInstancesQueryKey(
  args: InferRequestType<(typeof client.v1)['gateway-instances']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/gateway-instances', keyArgs] as const
}

export function getV1GatewayInstancesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['gateway-instances']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)['gateway-instances']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['gateway-instances']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1GatewayInstancesQueryKey>
  >({
    queryKey: getV1GatewayInstancesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1['gateway-instances'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1GatewayInstances<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['gateway-instances']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)['gateway-instances']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)['gateway-instances']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1GatewayInstancesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1GatewayInstancesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1GatewayInstances<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['gateway-instances']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)['gateway-instances']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)['gateway-instances']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1GatewayInstancesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1GatewayInstancesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getV1OfferingsQueryKey(args: InferRequestType<typeof client.v1.offerings.$get>) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/offerings', keyArgs] as const
}

export function getV1OfferingsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.offerings.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.offerings.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.offerings.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1OfferingsQueryKey>
  >({
    queryKey: getV1OfferingsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.offerings.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV1Offerings<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.offerings.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.offerings.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.offerings.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1OfferingsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1OfferingsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1Offerings<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.offerings.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.offerings.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.offerings.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1OfferingsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1OfferingsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getV1ReservationsQueryKey(
  args: InferRequestType<typeof client.v1.reservations.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/reservations', keyArgs] as const
}

export function getV1ReservationsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.reservations.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.reservations.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.reservations.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1ReservationsQueryKey>
  >({
    queryKey: getV1ReservationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.reservations.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV1Reservations<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.reservations.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.reservations.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.reservations.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1ReservationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1ReservationsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1Reservations<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.reservations.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.reservations.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.reservations.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1ReservationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1ReservationsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getTagsResourceArnQueryKey(
  args: InferRequestType<(typeof client.tags)[':resourceArn']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['tags', '/tags/:resourceArn', keyArgs] as const
}

export function getTagsResourceArnQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tags)[':resourceArn']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTagsResourceArnQueryKey>
  >({
    queryKey: getTagsResourceArnQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.tags[':resourceArn'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useTagsResourceArn<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tags)[':resourceArn']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTagsResourceArnQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getTagsResourceArnQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseTagsResourceArn<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tags)[':resourceArn']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTagsResourceArnQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getTagsResourceArnQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostTagsResourceArnMutationKey() {
  return ['tags', '/tags/:resourceArn', 'POST'] as const
}

export function getPostTagsResourceArnMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$post']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.tags)[':resourceArn']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTagsResourceArnMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.tags)[':resourceArn']['$post']>) {
      return parseResponse(client.tags[':resourceArn'].$post(args, options))
    },
  })
}

export function usePostTagsResourceArn<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$post']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.tags)[':resourceArn']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTagsResourceArnMutationOptions<TError, TOnMutateResult>(
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

export function getPutV1BridgesBridgeArnOutputsOutputNameMutationKey() {
  return ['v1', '/v1/bridges/:bridgeArn/outputs/:outputName', 'PUT'] as const
}

export function getPutV1BridgesBridgeArnOutputsOutputNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.v1.bridges)[':bridgeArn']['outputs'][':outputName']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1BridgesBridgeArnOutputsOutputNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.bridges)[':bridgeArn']['outputs'][':outputName']['$put']
      >,
    ) {
      return parseResponse(
        client.v1.bridges[':bridgeArn'].outputs[':outputName'].$put(args, options),
      )
    },
  })
}

export function usePutV1BridgesBridgeArnOutputsOutputName<
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
                  (typeof client.v1.bridges)[':bridgeArn']['outputs'][':outputName']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1.bridges)[':bridgeArn']['outputs'][':outputName']['$put']
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
  const mutationDefaults = getPutV1BridgesBridgeArnOutputsOutputNameMutationOptions<
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

export function getDeleteV1BridgesBridgeArnOutputsOutputNameMutationKey() {
  return ['v1', '/v1/bridges/:bridgeArn/outputs/:outputName', 'DELETE'] as const
}

export function getDeleteV1BridgesBridgeArnOutputsOutputNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.v1.bridges)[':bridgeArn']['outputs'][':outputName']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1BridgesBridgeArnOutputsOutputNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.bridges)[':bridgeArn']['outputs'][':outputName']['$delete']
      >,
    ) {
      return parseResponse(
        client.v1.bridges[':bridgeArn'].outputs[':outputName'].$delete(args, options),
      )
    },
  })
}

export function useDeleteV1BridgesBridgeArnOutputsOutputName<
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
                  (typeof client.v1.bridges)[':bridgeArn']['outputs'][':outputName']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1.bridges)[':bridgeArn']['outputs'][':outputName']['$delete']
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
  const mutationDefaults = getDeleteV1BridgesBridgeArnOutputsOutputNameMutationOptions<
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

export function getPutV1BridgesBridgeArnSourcesSourceNameMutationKey() {
  return ['v1', '/v1/bridges/:bridgeArn/sources/:sourceName', 'PUT'] as const
}

export function getPutV1BridgesBridgeArnSourcesSourceNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.v1.bridges)[':bridgeArn']['sources'][':sourceName']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1BridgesBridgeArnSourcesSourceNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.bridges)[':bridgeArn']['sources'][':sourceName']['$put']
      >,
    ) {
      return parseResponse(
        client.v1.bridges[':bridgeArn'].sources[':sourceName'].$put(args, options),
      )
    },
  })
}

export function usePutV1BridgesBridgeArnSourcesSourceName<
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
                  (typeof client.v1.bridges)[':bridgeArn']['sources'][':sourceName']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1.bridges)[':bridgeArn']['sources'][':sourceName']['$put']
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
  const mutationDefaults = getPutV1BridgesBridgeArnSourcesSourceNameMutationOptions<
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

export function getDeleteV1BridgesBridgeArnSourcesSourceNameMutationKey() {
  return ['v1', '/v1/bridges/:bridgeArn/sources/:sourceName', 'DELETE'] as const
}

export function getDeleteV1BridgesBridgeArnSourcesSourceNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.v1.bridges)[':bridgeArn']['sources'][':sourceName']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1BridgesBridgeArnSourcesSourceNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.bridges)[':bridgeArn']['sources'][':sourceName']['$delete']
      >,
    ) {
      return parseResponse(
        client.v1.bridges[':bridgeArn'].sources[':sourceName'].$delete(args, options),
      )
    },
  })
}

export function useDeleteV1BridgesBridgeArnSourcesSourceName<
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
                  (typeof client.v1.bridges)[':bridgeArn']['sources'][':sourceName']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1.bridges)[':bridgeArn']['sources'][':sourceName']['$delete']
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
  const mutationDefaults = getDeleteV1BridgesBridgeArnSourcesSourceNameMutationOptions<
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

export function getPutV1FlowsFlowArnMediaStreamsMediaStreamNameMutationKey() {
  return ['v1', '/v1/flows/:flowArn/mediaStreams/:mediaStreamName', 'PUT'] as const
}

export function getPutV1FlowsFlowArnMediaStreamsMediaStreamNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.v1.flows)[':flowArn']['mediaStreams'][':mediaStreamName']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutV1FlowsFlowArnMediaStreamsMediaStreamNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.flows)[':flowArn']['mediaStreams'][':mediaStreamName']['$put']
      >,
    ) {
      return parseResponse(
        client.v1.flows[':flowArn'].mediaStreams[':mediaStreamName'].$put(args, options),
      )
    },
  })
}

export function usePutV1FlowsFlowArnMediaStreamsMediaStreamName<
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
                  (typeof client.v1.flows)[':flowArn']['mediaStreams'][':mediaStreamName']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1.flows)[':flowArn']['mediaStreams'][':mediaStreamName']['$put']
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
  const mutationDefaults = getPutV1FlowsFlowArnMediaStreamsMediaStreamNameMutationOptions<
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

export function getDeleteV1FlowsFlowArnMediaStreamsMediaStreamNameMutationKey() {
  return ['v1', '/v1/flows/:flowArn/mediaStreams/:mediaStreamName', 'DELETE'] as const
}

export function getDeleteV1FlowsFlowArnMediaStreamsMediaStreamNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.v1.flows)[':flowArn']['mediaStreams'][':mediaStreamName']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1FlowsFlowArnMediaStreamsMediaStreamNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.flows)[':flowArn']['mediaStreams'][':mediaStreamName']['$delete']
      >,
    ) {
      return parseResponse(
        client.v1.flows[':flowArn'].mediaStreams[':mediaStreamName'].$delete(args, options),
      )
    },
  })
}

export function useDeleteV1FlowsFlowArnMediaStreamsMediaStreamName<
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
                  (typeof client.v1.flows)[':flowArn']['mediaStreams'][':mediaStreamName']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1.flows)[':flowArn']['mediaStreams'][':mediaStreamName']['$delete']
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
  const mutationDefaults = getDeleteV1FlowsFlowArnMediaStreamsMediaStreamNameMutationOptions<
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

export function getPutV1FlowsFlowArnOutputsOutputArnMutationKey() {
  return ['v1', '/v1/flows/:flowArn/outputs/:outputArn', 'PUT'] as const
}

export function getPutV1FlowsFlowArnOutputsOutputArnMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.flows)[':flowArn']['outputs'][':outputArn']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.flows)[':flowArn']['outputs'][':outputArn']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1FlowsFlowArnOutputsOutputArnMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.flows)[':flowArn']['outputs'][':outputArn']['$put']>,
    ) {
      return parseResponse(client.v1.flows[':flowArn'].outputs[':outputArn'].$put(args, options))
    },
  })
}

export function usePutV1FlowsFlowArnOutputsOutputArn<
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
                ReturnType<(typeof client.v1.flows)[':flowArn']['outputs'][':outputArn']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.flows)[':flowArn']['outputs'][':outputArn']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV1FlowsFlowArnOutputsOutputArnMutationOptions<
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

export function getDeleteV1FlowsFlowArnOutputsOutputArnMutationKey() {
  return ['v1', '/v1/flows/:flowArn/outputs/:outputArn', 'DELETE'] as const
}

export function getDeleteV1FlowsFlowArnOutputsOutputArnMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.v1.flows)[':flowArn']['outputs'][':outputArn']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1FlowsFlowArnOutputsOutputArnMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.flows)[':flowArn']['outputs'][':outputArn']['$delete']
      >,
    ) {
      return parseResponse(client.v1.flows[':flowArn'].outputs[':outputArn'].$delete(args, options))
    },
  })
}

export function useDeleteV1FlowsFlowArnOutputsOutputArn<
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
                ReturnType<(typeof client.v1.flows)[':flowArn']['outputs'][':outputArn']['$delete']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.flows)[':flowArn']['outputs'][':outputArn']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV1FlowsFlowArnOutputsOutputArnMutationOptions<
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

export function getPutV1FlowsFlowArnSourceSourceArnMutationKey() {
  return ['v1', '/v1/flows/:flowArn/source/:sourceArn', 'PUT'] as const
}

export function getPutV1FlowsFlowArnSourceSourceArnMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.flows)[':flowArn']['source'][':sourceArn']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.flows)[':flowArn']['source'][':sourceArn']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1FlowsFlowArnSourceSourceArnMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.flows)[':flowArn']['source'][':sourceArn']['$put']>,
    ) {
      return parseResponse(client.v1.flows[':flowArn'].source[':sourceArn'].$put(args, options))
    },
  })
}

export function usePutV1FlowsFlowArnSourceSourceArn<
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
                ReturnType<(typeof client.v1.flows)[':flowArn']['source'][':sourceArn']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.flows)[':flowArn']['source'][':sourceArn']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV1FlowsFlowArnSourceSourceArnMutationOptions<
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

export function getDeleteV1FlowsFlowArnSourceSourceArnMutationKey() {
  return ['v1', '/v1/flows/:flowArn/source/:sourceArn', 'DELETE'] as const
}

export function getDeleteV1FlowsFlowArnSourceSourceArnMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.v1.flows)[':flowArn']['source'][':sourceArn']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1FlowsFlowArnSourceSourceArnMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.flows)[':flowArn']['source'][':sourceArn']['$delete']
      >,
    ) {
      return parseResponse(client.v1.flows[':flowArn'].source[':sourceArn'].$delete(args, options))
    },
  })
}

export function useDeleteV1FlowsFlowArnSourceSourceArn<
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
                ReturnType<(typeof client.v1.flows)[':flowArn']['source'][':sourceArn']['$delete']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.flows)[':flowArn']['source'][':sourceArn']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV1FlowsFlowArnSourceSourceArnMutationOptions<
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

export function getDeleteV1FlowsFlowArnVpcInterfacesVpcInterfaceNameMutationKey() {
  return ['v1', '/v1/flows/:flowArn/vpcInterfaces/:vpcInterfaceName', 'DELETE'] as const
}

export function getDeleteV1FlowsFlowArnVpcInterfacesVpcInterfaceNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.v1.flows)[':flowArn']['vpcInterfaces'][':vpcInterfaceName']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1FlowsFlowArnVpcInterfacesVpcInterfaceNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.flows)[':flowArn']['vpcInterfaces'][':vpcInterfaceName']['$delete']
      >,
    ) {
      return parseResponse(
        client.v1.flows[':flowArn'].vpcInterfaces[':vpcInterfaceName'].$delete(args, options),
      )
    },
  })
}

export function useDeleteV1FlowsFlowArnVpcInterfacesVpcInterfaceName<
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
                  (typeof client.v1.flows)[':flowArn']['vpcInterfaces'][':vpcInterfaceName']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1.flows)[':flowArn']['vpcInterfaces'][':vpcInterfaceName']['$delete']
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
  const mutationDefaults = getDeleteV1FlowsFlowArnVpcInterfacesVpcInterfaceNameMutationOptions<
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

export function getPutV1FlowsFlowArnEntitlementsEntitlementArnMutationKey() {
  return ['v1', '/v1/flows/:flowArn/entitlements/:entitlementArn', 'PUT'] as const
}

export function getPutV1FlowsFlowArnEntitlementsEntitlementArnMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.v1.flows)[':flowArn']['entitlements'][':entitlementArn']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutV1FlowsFlowArnEntitlementsEntitlementArnMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.flows)[':flowArn']['entitlements'][':entitlementArn']['$put']
      >,
    ) {
      return parseResponse(
        client.v1.flows[':flowArn'].entitlements[':entitlementArn'].$put(args, options),
      )
    },
  })
}

export function usePutV1FlowsFlowArnEntitlementsEntitlementArn<
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
                  (typeof client.v1.flows)[':flowArn']['entitlements'][':entitlementArn']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1.flows)[':flowArn']['entitlements'][':entitlementArn']['$put']
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
  const mutationDefaults = getPutV1FlowsFlowArnEntitlementsEntitlementArnMutationOptions<
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

export function getDeleteV1FlowsFlowArnEntitlementsEntitlementArnMutationKey() {
  return ['v1', '/v1/flows/:flowArn/entitlements/:entitlementArn', 'DELETE'] as const
}

export function getDeleteV1FlowsFlowArnEntitlementsEntitlementArnMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.v1.flows)[':flowArn']['entitlements'][':entitlementArn']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1FlowsFlowArnEntitlementsEntitlementArnMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.flows)[':flowArn']['entitlements'][':entitlementArn']['$delete']
      >,
    ) {
      return parseResponse(
        client.v1.flows[':flowArn'].entitlements[':entitlementArn'].$delete(args, options),
      )
    },
  })
}

export function useDeleteV1FlowsFlowArnEntitlementsEntitlementArn<
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
                  (typeof client.v1.flows)[':flowArn']['entitlements'][':entitlementArn']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1.flows)[':flowArn']['entitlements'][':entitlementArn']['$delete']
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
  const mutationDefaults = getDeleteV1FlowsFlowArnEntitlementsEntitlementArnMutationOptions<
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

export function getPostV1FlowsStartFlowArnMutationKey() {
  return ['v1', '/v1/flows/start/:flowArn', 'POST'] as const
}

export function getPostV1FlowsStartFlowArnMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.flows.start)[':flowArn']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.flows.start)[':flowArn']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1FlowsStartFlowArnMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.flows.start)[':flowArn']['$post']>) {
      return parseResponse(client.v1.flows.start[':flowArn'].$post(args, options))
    },
  })
}

export function usePostV1FlowsStartFlowArn<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.flows.start)[':flowArn']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.flows.start)[':flowArn']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1FlowsStartFlowArnMutationOptions<TError, TOnMutateResult>(
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

export function getPostV1FlowsStopFlowArnMutationKey() {
  return ['v1', '/v1/flows/stop/:flowArn', 'POST'] as const
}

export function getPostV1FlowsStopFlowArnMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.flows.stop)[':flowArn']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.flows.stop)[':flowArn']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1FlowsStopFlowArnMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.flows.stop)[':flowArn']['$post']>) {
      return parseResponse(client.v1.flows.stop[':flowArn'].$post(args, options))
    },
  })
}

export function usePostV1FlowsStopFlowArn<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.flows.stop)[':flowArn']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.flows.stop)[':flowArn']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1FlowsStopFlowArnMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteTagsResourceArnTagKeysMutationKey() {
  return ['tags', '/tags/:resourceArn#tagKeys', 'DELETE'] as const
}

export function getDeleteTagsResourceArnTagKeysMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tags)[':resourceArn#tagKeys']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.tags)[':resourceArn#tagKeys']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteTagsResourceArnTagKeysMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.tags)[':resourceArn#tagKeys']['$delete']>,
    ) {
      return parseResponse(client.tags[':resourceArn#tagKeys'].$delete(args, options))
    },
  })
}

export function useDeleteTagsResourceArnTagKeys<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tags)[':resourceArn#tagKeys']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.tags)[':resourceArn#tagKeys']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteTagsResourceArnTagKeysMutationOptions<TError, TOnMutateResult>(
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

export function getPutV1BridgesBridgeArnStateMutationKey() {
  return ['v1', '/v1/bridges/:bridgeArn/state', 'PUT'] as const
}

export function getPutV1BridgesBridgeArnStateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.bridges)[':bridgeArn']['state']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.bridges)[':bridgeArn']['state']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1BridgesBridgeArnStateMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.bridges)[':bridgeArn']['state']['$put']>,
    ) {
      return parseResponse(client.v1.bridges[':bridgeArn'].state.$put(args, options))
    },
  })
}

export function usePutV1BridgesBridgeArnState<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.bridges)[':bridgeArn']['state']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.bridges)[':bridgeArn']['state']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV1BridgesBridgeArnStateMutationOptions<TError, TOnMutateResult>(
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
