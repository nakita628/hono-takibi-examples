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

export function getV20190125Key() {
  return ['v20190125'] as const
}

export function getV20190125MeshesMeshNameVirtualGatewayVirtualGatewayNameGatewayRoutesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v20190125.meshes)[':meshName']['virtualGateway'][':virtualGatewayName']['gatewayRoutes']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'v20190125',
    '/v20190125/meshes/:meshName/virtualGateway/:virtualGatewayName/gatewayRoutes',
    keyArgs,
  ] as const
}

export function getV20190125MeshesMeshNameVirtualGatewayVirtualGatewayNameGatewayRoutesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v20190125.meshes)[':meshName']['virtualGateway'][':virtualGatewayName']['gatewayRoutes']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getV20190125MeshesMeshNameVirtualGatewayVirtualGatewayNameGatewayRoutesQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v20190125.meshes[':meshName'].virtualGateway[
          ':virtualGatewayName'
        ].gatewayRoutes.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV20190125MeshesMeshNameVirtualGatewayVirtualGatewayNameGatewayRoutes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v20190125.meshes)[':meshName']['virtualGateway'][':virtualGatewayName']['gatewayRoutes']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v20190125.meshes)[':meshName']['virtualGateway'][':virtualGatewayName']['gatewayRoutes']['$get']
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
                    (typeof client.v20190125.meshes)[':meshName']['virtualGateway'][':virtualGatewayName']['gatewayRoutes']['$get']
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
                    (typeof client.v20190125.meshes)[':meshName']['virtualGateway'][':virtualGatewayName']['gatewayRoutes']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getV20190125MeshesMeshNameVirtualGatewayVirtualGatewayNameGatewayRoutesQueryKey
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
              (typeof client.v20190125.meshes)[':meshName']['virtualGateway'][':virtualGatewayName']['gatewayRoutes']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getV20190125MeshesMeshNameVirtualGatewayVirtualGatewayNameGatewayRoutesQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV20190125MeshesMeshNameVirtualGatewayVirtualGatewayNameGatewayRoutesQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v20190125.meshes[':meshName'].virtualGateway[
            ':virtualGatewayName'
          ].gatewayRoutes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutV20190125MeshesMeshNameVirtualGatewayVirtualGatewayNameGatewayRoutesMutationKey() {
  return [
    'v20190125',
    '/v20190125/meshes/:meshName/virtualGateway/:virtualGatewayName/gatewayRoutes',
    'PUT',
  ] as const
}

export function getPutV20190125MeshesMeshNameVirtualGatewayVirtualGatewayNameGatewayRoutesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v20190125.meshes)[':meshName']['virtualGateway'][':virtualGatewayName']['gatewayRoutes']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v20190125.meshes)[':meshName']['virtualGateway'][':virtualGatewayName']['gatewayRoutes']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPutV20190125MeshesMeshNameVirtualGatewayVirtualGatewayNameGatewayRoutesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v20190125.meshes)[':meshName']['virtualGateway'][':virtualGatewayName']['gatewayRoutes']['$put']
      >,
    ) {
      return parseResponse(
        client.v20190125.meshes[':meshName'].virtualGateway[
          ':virtualGatewayName'
        ].gatewayRoutes.$put(args, options),
      )
    },
  })
}

export function usePutV20190125MeshesMeshNameVirtualGatewayVirtualGatewayNameGatewayRoutes<
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
                    (typeof client.v20190125.meshes)[':meshName']['virtualGateway'][':virtualGatewayName']['gatewayRoutes']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v20190125.meshes)[':meshName']['virtualGateway'][':virtualGatewayName']['gatewayRoutes']['$put']
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
    getPutV20190125MeshesMeshNameVirtualGatewayVirtualGatewayNameGatewayRoutesMutationOptions<
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

export function getV20190125MeshesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v20190125.meshes.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v20190125', '/v20190125/meshes', keyArgs] as const
}

export function getV20190125MeshesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v20190125.meshes.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV20190125MeshesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v20190125.meshes.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV20190125Meshes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v20190125.meshes.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v20190125.meshes.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v20190125.meshes.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v20190125.meshes.$get>>>
            >
          >,
          ReturnType<typeof getV20190125MeshesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v20190125.meshes.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV20190125MeshesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV20190125MeshesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v20190125.meshes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutV20190125MeshesMutationKey() {
  return ['v20190125', '/v20190125/meshes', 'PUT'] as const
}

export function getPutV20190125MeshesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v20190125.meshes.$put>>>>
    >,
    TError,
    InferRequestType<typeof client.v20190125.meshes.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutV20190125MeshesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v20190125.meshes.$put>) {
      return parseResponse(client.v20190125.meshes.$put(args, options))
    },
  })
}

export function usePutV20190125Meshes<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v20190125.meshes.$put>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v20190125.meshes.$put>,
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
  const mutationDefaults = getPutV20190125MeshesMutationOptions<TError, TOnMutateResult>(
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

export function getV20190125MeshesMeshNameVirtualRouterVirtualRouterNameRoutesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v20190125.meshes)[':meshName']['virtualRouter'][':virtualRouterName']['routes']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'v20190125',
    '/v20190125/meshes/:meshName/virtualRouter/:virtualRouterName/routes',
    keyArgs,
  ] as const
}

export function getV20190125MeshesMeshNameVirtualRouterVirtualRouterNameRoutesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v20190125.meshes)[':meshName']['virtualRouter'][':virtualRouterName']['routes']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getV20190125MeshesMeshNameVirtualRouterVirtualRouterNameRoutesQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v20190125.meshes[':meshName'].virtualRouter[':virtualRouterName'].routes.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useV20190125MeshesMeshNameVirtualRouterVirtualRouterNameRoutes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v20190125.meshes)[':meshName']['virtualRouter'][':virtualRouterName']['routes']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v20190125.meshes)[':meshName']['virtualRouter'][':virtualRouterName']['routes']['$get']
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
                    (typeof client.v20190125.meshes)[':meshName']['virtualRouter'][':virtualRouterName']['routes']['$get']
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
                    (typeof client.v20190125.meshes)[':meshName']['virtualRouter'][':virtualRouterName']['routes']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV20190125MeshesMeshNameVirtualRouterVirtualRouterNameRoutesQueryKey>
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
              (typeof client.v20190125.meshes)[':meshName']['virtualRouter'][':virtualRouterName']['routes']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV20190125MeshesMeshNameVirtualRouterVirtualRouterNameRoutesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV20190125MeshesMeshNameVirtualRouterVirtualRouterNameRoutesQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v20190125.meshes[':meshName'].virtualRouter[':virtualRouterName'].routes.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPutV20190125MeshesMeshNameVirtualRouterVirtualRouterNameRoutesMutationKey() {
  return [
    'v20190125',
    '/v20190125/meshes/:meshName/virtualRouter/:virtualRouterName/routes',
    'PUT',
  ] as const
}

export function getPutV20190125MeshesMeshNameVirtualRouterVirtualRouterNameRoutesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v20190125.meshes)[':meshName']['virtualRouter'][':virtualRouterName']['routes']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v20190125.meshes)[':meshName']['virtualRouter'][':virtualRouterName']['routes']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutV20190125MeshesMeshNameVirtualRouterVirtualRouterNameRoutesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v20190125.meshes)[':meshName']['virtualRouter'][':virtualRouterName']['routes']['$put']
      >,
    ) {
      return parseResponse(
        client.v20190125.meshes[':meshName'].virtualRouter[':virtualRouterName'].routes.$put(
          args,
          options,
        ),
      )
    },
  })
}

export function usePutV20190125MeshesMeshNameVirtualRouterVirtualRouterNameRoutes<
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
                    (typeof client.v20190125.meshes)[':meshName']['virtualRouter'][':virtualRouterName']['routes']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v20190125.meshes)[':meshName']['virtualRouter'][':virtualRouterName']['routes']['$put']
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
    getPutV20190125MeshesMeshNameVirtualRouterVirtualRouterNameRoutesMutationOptions<
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

export function getV20190125MeshesMeshNameVirtualGatewaysQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v20190125.meshes)[':meshName']['virtualGateways']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v20190125', '/v20190125/meshes/:meshName/virtualGateways', keyArgs] as const
}

export function getV20190125MeshesMeshNameVirtualGatewaysQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v20190125.meshes)[':meshName']['virtualGateways']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV20190125MeshesMeshNameVirtualGatewaysQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v20190125.meshes[':meshName'].virtualGateways.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV20190125MeshesMeshNameVirtualGateways<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v20190125.meshes)[':meshName']['virtualGateways']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v20190125.meshes)[':meshName']['virtualGateways']['$get']>
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
                    (typeof client.v20190125.meshes)[':meshName']['virtualGateways']['$get']
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
                    (typeof client.v20190125.meshes)[':meshName']['virtualGateways']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV20190125MeshesMeshNameVirtualGatewaysQueryKey>
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
            ReturnType<(typeof client.v20190125.meshes)[':meshName']['virtualGateways']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV20190125MeshesMeshNameVirtualGatewaysQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV20190125MeshesMeshNameVirtualGatewaysQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v20190125.meshes[':meshName'].virtualGateways.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutV20190125MeshesMeshNameVirtualGatewaysMutationKey() {
  return ['v20190125', '/v20190125/meshes/:meshName/virtualGateways', 'PUT'] as const
}

export function getPutV20190125MeshesMeshNameVirtualGatewaysMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v20190125.meshes)[':meshName']['virtualGateways']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v20190125.meshes)[':meshName']['virtualGateways']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV20190125MeshesMeshNameVirtualGatewaysMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v20190125.meshes)[':meshName']['virtualGateways']['$put']
      >,
    ) {
      return parseResponse(client.v20190125.meshes[':meshName'].virtualGateways.$put(args, options))
    },
  })
}

export function usePutV20190125MeshesMeshNameVirtualGateways<
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
                    (typeof client.v20190125.meshes)[':meshName']['virtualGateways']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v20190125.meshes)[':meshName']['virtualGateways']['$put']
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
  const mutationDefaults = getPutV20190125MeshesMeshNameVirtualGatewaysMutationOptions<
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

export function getV20190125MeshesMeshNameVirtualNodesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v20190125.meshes)[':meshName']['virtualNodes']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v20190125', '/v20190125/meshes/:meshName/virtualNodes', keyArgs] as const
}

export function getV20190125MeshesMeshNameVirtualNodesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v20190125.meshes)[':meshName']['virtualNodes']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV20190125MeshesMeshNameVirtualNodesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v20190125.meshes[':meshName'].virtualNodes.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV20190125MeshesMeshNameVirtualNodes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v20190125.meshes)[':meshName']['virtualNodes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v20190125.meshes)[':meshName']['virtualNodes']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v20190125.meshes)[':meshName']['virtualNodes']['$get']>
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
                  ReturnType<(typeof client.v20190125.meshes)[':meshName']['virtualNodes']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV20190125MeshesMeshNameVirtualNodesQueryKey>
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
          Awaited<ReturnType<(typeof client.v20190125.meshes)[':meshName']['virtualNodes']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV20190125MeshesMeshNameVirtualNodesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV20190125MeshesMeshNameVirtualNodesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v20190125.meshes[':meshName'].virtualNodes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutV20190125MeshesMeshNameVirtualNodesMutationKey() {
  return ['v20190125', '/v20190125/meshes/:meshName/virtualNodes', 'PUT'] as const
}

export function getPutV20190125MeshesMeshNameVirtualNodesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v20190125.meshes)[':meshName']['virtualNodes']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v20190125.meshes)[':meshName']['virtualNodes']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV20190125MeshesMeshNameVirtualNodesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v20190125.meshes)[':meshName']['virtualNodes']['$put']>,
    ) {
      return parseResponse(client.v20190125.meshes[':meshName'].virtualNodes.$put(args, options))
    },
  })
}

export function usePutV20190125MeshesMeshNameVirtualNodes<
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
                  ReturnType<(typeof client.v20190125.meshes)[':meshName']['virtualNodes']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v20190125.meshes)[':meshName']['virtualNodes']['$put']>,
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
  const mutationDefaults = getPutV20190125MeshesMeshNameVirtualNodesMutationOptions<
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

export function getV20190125MeshesMeshNameVirtualRoutersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v20190125.meshes)[':meshName']['virtualRouters']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v20190125', '/v20190125/meshes/:meshName/virtualRouters', keyArgs] as const
}

export function getV20190125MeshesMeshNameVirtualRoutersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v20190125.meshes)[':meshName']['virtualRouters']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV20190125MeshesMeshNameVirtualRoutersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v20190125.meshes[':meshName'].virtualRouters.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV20190125MeshesMeshNameVirtualRouters<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v20190125.meshes)[':meshName']['virtualRouters']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v20190125.meshes)[':meshName']['virtualRouters']['$get']>
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
                    (typeof client.v20190125.meshes)[':meshName']['virtualRouters']['$get']
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
                    (typeof client.v20190125.meshes)[':meshName']['virtualRouters']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV20190125MeshesMeshNameVirtualRoutersQueryKey>
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
            ReturnType<(typeof client.v20190125.meshes)[':meshName']['virtualRouters']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV20190125MeshesMeshNameVirtualRoutersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV20190125MeshesMeshNameVirtualRoutersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v20190125.meshes[':meshName'].virtualRouters.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutV20190125MeshesMeshNameVirtualRoutersMutationKey() {
  return ['v20190125', '/v20190125/meshes/:meshName/virtualRouters', 'PUT'] as const
}

export function getPutV20190125MeshesMeshNameVirtualRoutersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v20190125.meshes)[':meshName']['virtualRouters']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v20190125.meshes)[':meshName']['virtualRouters']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV20190125MeshesMeshNameVirtualRoutersMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v20190125.meshes)[':meshName']['virtualRouters']['$put']
      >,
    ) {
      return parseResponse(client.v20190125.meshes[':meshName'].virtualRouters.$put(args, options))
    },
  })
}

export function usePutV20190125MeshesMeshNameVirtualRouters<
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
                    (typeof client.v20190125.meshes)[':meshName']['virtualRouters']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v20190125.meshes)[':meshName']['virtualRouters']['$put']>,
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
  const mutationDefaults = getPutV20190125MeshesMeshNameVirtualRoutersMutationOptions<
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

export function getV20190125MeshesMeshNameVirtualServicesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v20190125.meshes)[':meshName']['virtualServices']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v20190125', '/v20190125/meshes/:meshName/virtualServices', keyArgs] as const
}

export function getV20190125MeshesMeshNameVirtualServicesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v20190125.meshes)[':meshName']['virtualServices']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV20190125MeshesMeshNameVirtualServicesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v20190125.meshes[':meshName'].virtualServices.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV20190125MeshesMeshNameVirtualServices<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v20190125.meshes)[':meshName']['virtualServices']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v20190125.meshes)[':meshName']['virtualServices']['$get']>
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
                    (typeof client.v20190125.meshes)[':meshName']['virtualServices']['$get']
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
                    (typeof client.v20190125.meshes)[':meshName']['virtualServices']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV20190125MeshesMeshNameVirtualServicesQueryKey>
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
            ReturnType<(typeof client.v20190125.meshes)[':meshName']['virtualServices']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV20190125MeshesMeshNameVirtualServicesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV20190125MeshesMeshNameVirtualServicesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v20190125.meshes[':meshName'].virtualServices.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutV20190125MeshesMeshNameVirtualServicesMutationKey() {
  return ['v20190125', '/v20190125/meshes/:meshName/virtualServices', 'PUT'] as const
}

export function getPutV20190125MeshesMeshNameVirtualServicesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v20190125.meshes)[':meshName']['virtualServices']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v20190125.meshes)[':meshName']['virtualServices']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV20190125MeshesMeshNameVirtualServicesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v20190125.meshes)[':meshName']['virtualServices']['$put']
      >,
    ) {
      return parseResponse(client.v20190125.meshes[':meshName'].virtualServices.$put(args, options))
    },
  })
}

export function usePutV20190125MeshesMeshNameVirtualServices<
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
                    (typeof client.v20190125.meshes)[':meshName']['virtualServices']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v20190125.meshes)[':meshName']['virtualServices']['$put']
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
  const mutationDefaults = getPutV20190125MeshesMeshNameVirtualServicesMutationOptions<
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

export function getV20190125MeshesMeshNameVirtualGatewayVirtualGatewayNameGatewayRoutesGatewayRouteNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v20190125.meshes)[':meshName']['virtualGateway'][':virtualGatewayName']['gatewayRoutes'][':gatewayRouteName']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'v20190125',
    '/v20190125/meshes/:meshName/virtualGateway/:virtualGatewayName/gatewayRoutes/:gatewayRouteName',
    keyArgs,
  ] as const
}

export function getV20190125MeshesMeshNameVirtualGatewayVirtualGatewayNameGatewayRoutesGatewayRouteNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v20190125.meshes)[':meshName']['virtualGateway'][':virtualGatewayName']['gatewayRoutes'][':gatewayRouteName']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getV20190125MeshesMeshNameVirtualGatewayVirtualGatewayNameGatewayRoutesGatewayRouteNameQueryKey(
        args,
      ),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v20190125.meshes[':meshName'].virtualGateway[':virtualGatewayName'].gatewayRoutes[
          ':gatewayRouteName'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV20190125MeshesMeshNameVirtualGatewayVirtualGatewayNameGatewayRoutesGatewayRouteName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v20190125.meshes)[':meshName']['virtualGateway'][':virtualGatewayName']['gatewayRoutes'][':gatewayRouteName']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v20190125.meshes)[':meshName']['virtualGateway'][':virtualGatewayName']['gatewayRoutes'][':gatewayRouteName']['$get']
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
                    (typeof client.v20190125.meshes)[':meshName']['virtualGateway'][':virtualGatewayName']['gatewayRoutes'][':gatewayRouteName']['$get']
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
                    (typeof client.v20190125.meshes)[':meshName']['virtualGateway'][':virtualGatewayName']['gatewayRoutes'][':gatewayRouteName']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getV20190125MeshesMeshNameVirtualGatewayVirtualGatewayNameGatewayRoutesGatewayRouteNameQueryKey
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
              (typeof client.v20190125.meshes)[':meshName']['virtualGateway'][':virtualGatewayName']['gatewayRoutes'][':gatewayRouteName']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getV20190125MeshesMeshNameVirtualGatewayVirtualGatewayNameGatewayRoutesGatewayRouteNameQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV20190125MeshesMeshNameVirtualGatewayVirtualGatewayNameGatewayRoutesGatewayRouteNameQueryKey(
          args,
        ),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v20190125.meshes[':meshName'].virtualGateway[':virtualGatewayName'].gatewayRoutes[
            ':gatewayRouteName'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function getPutV20190125MeshesMeshNameVirtualGatewayVirtualGatewayNameGatewayRoutesGatewayRouteNameMutationKey() {
  return [
    'v20190125',
    '/v20190125/meshes/:meshName/virtualGateway/:virtualGatewayName/gatewayRoutes/:gatewayRouteName',
    'PUT',
  ] as const
}

export function getPutV20190125MeshesMeshNameVirtualGatewayVirtualGatewayNameGatewayRoutesGatewayRouteNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v20190125.meshes)[':meshName']['virtualGateway'][':virtualGatewayName']['gatewayRoutes'][':gatewayRouteName']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v20190125.meshes)[':meshName']['virtualGateway'][':virtualGatewayName']['gatewayRoutes'][':gatewayRouteName']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPutV20190125MeshesMeshNameVirtualGatewayVirtualGatewayNameGatewayRoutesGatewayRouteNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v20190125.meshes)[':meshName']['virtualGateway'][':virtualGatewayName']['gatewayRoutes'][':gatewayRouteName']['$put']
      >,
    ) {
      return parseResponse(
        client.v20190125.meshes[':meshName'].virtualGateway[':virtualGatewayName'].gatewayRoutes[
          ':gatewayRouteName'
        ].$put(args, options),
      )
    },
  })
}

export function usePutV20190125MeshesMeshNameVirtualGatewayVirtualGatewayNameGatewayRoutesGatewayRouteName<
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
                    (typeof client.v20190125.meshes)[':meshName']['virtualGateway'][':virtualGatewayName']['gatewayRoutes'][':gatewayRouteName']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v20190125.meshes)[':meshName']['virtualGateway'][':virtualGatewayName']['gatewayRoutes'][':gatewayRouteName']['$put']
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
    getPutV20190125MeshesMeshNameVirtualGatewayVirtualGatewayNameGatewayRoutesGatewayRouteNameMutationOptions<
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

export function getDeleteV20190125MeshesMeshNameVirtualGatewayVirtualGatewayNameGatewayRoutesGatewayRouteNameMutationKey() {
  return [
    'v20190125',
    '/v20190125/meshes/:meshName/virtualGateway/:virtualGatewayName/gatewayRoutes/:gatewayRouteName',
    'DELETE',
  ] as const
}

export function getDeleteV20190125MeshesMeshNameVirtualGatewayVirtualGatewayNameGatewayRoutesGatewayRouteNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v20190125.meshes)[':meshName']['virtualGateway'][':virtualGatewayName']['gatewayRoutes'][':gatewayRouteName']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v20190125.meshes)[':meshName']['virtualGateway'][':virtualGatewayName']['gatewayRoutes'][':gatewayRouteName']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteV20190125MeshesMeshNameVirtualGatewayVirtualGatewayNameGatewayRoutesGatewayRouteNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v20190125.meshes)[':meshName']['virtualGateway'][':virtualGatewayName']['gatewayRoutes'][':gatewayRouteName']['$delete']
      >,
    ) {
      return parseResponse(
        client.v20190125.meshes[':meshName'].virtualGateway[':virtualGatewayName'].gatewayRoutes[
          ':gatewayRouteName'
        ].$delete(args, options),
      )
    },
  })
}

export function useDeleteV20190125MeshesMeshNameVirtualGatewayVirtualGatewayNameGatewayRoutesGatewayRouteName<
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
                    (typeof client.v20190125.meshes)[':meshName']['virtualGateway'][':virtualGatewayName']['gatewayRoutes'][':gatewayRouteName']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v20190125.meshes)[':meshName']['virtualGateway'][':virtualGatewayName']['gatewayRoutes'][':gatewayRouteName']['$delete']
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
    getDeleteV20190125MeshesMeshNameVirtualGatewayVirtualGatewayNameGatewayRoutesGatewayRouteNameMutationOptions<
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

export function getV20190125MeshesMeshNameQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v20190125.meshes)[':meshName']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v20190125', '/v20190125/meshes/:meshName', keyArgs] as const
}

export function getV20190125MeshesMeshNameQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v20190125.meshes)[':meshName']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV20190125MeshesMeshNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v20190125.meshes[':meshName'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV20190125MeshesMeshName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v20190125.meshes)[':meshName']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v20190125.meshes)[':meshName']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v20190125.meshes)[':meshName']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v20190125.meshes)[':meshName']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV20190125MeshesMeshNameQueryKey>
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
          Awaited<ReturnType<(typeof client.v20190125.meshes)[':meshName']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV20190125MeshesMeshNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV20190125MeshesMeshNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v20190125.meshes[':meshName'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutV20190125MeshesMeshNameMutationKey() {
  return ['v20190125', '/v20190125/meshes/:meshName', 'PUT'] as const
}

export function getPutV20190125MeshesMeshNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v20190125.meshes)[':meshName']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v20190125.meshes)[':meshName']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV20190125MeshesMeshNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v20190125.meshes)[':meshName']['$put']>,
    ) {
      return parseResponse(client.v20190125.meshes[':meshName'].$put(args, options))
    },
  })
}

export function usePutV20190125MeshesMeshName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v20190125.meshes)[':meshName']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v20190125.meshes)[':meshName']['$put']>,
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
  const mutationDefaults = getPutV20190125MeshesMeshNameMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteV20190125MeshesMeshNameMutationKey() {
  return ['v20190125', '/v20190125/meshes/:meshName', 'DELETE'] as const
}

export function getDeleteV20190125MeshesMeshNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v20190125.meshes)[':meshName']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v20190125.meshes)[':meshName']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV20190125MeshesMeshNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v20190125.meshes)[':meshName']['$delete']>,
    ) {
      return parseResponse(client.v20190125.meshes[':meshName'].$delete(args, options))
    },
  })
}

export function useDeleteV20190125MeshesMeshName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v20190125.meshes)[':meshName']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v20190125.meshes)[':meshName']['$delete']>,
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
  const mutationDefaults = getDeleteV20190125MeshesMeshNameMutationOptions<TError, TOnMutateResult>(
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

export function getV20190125MeshesMeshNameVirtualRouterVirtualRouterNameRoutesRouteNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v20190125.meshes)[':meshName']['virtualRouter'][':virtualRouterName']['routes'][':routeName']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'v20190125',
    '/v20190125/meshes/:meshName/virtualRouter/:virtualRouterName/routes/:routeName',
    keyArgs,
  ] as const
}

export function getV20190125MeshesMeshNameVirtualRouterVirtualRouterNameRoutesRouteNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v20190125.meshes)[':meshName']['virtualRouter'][':virtualRouterName']['routes'][':routeName']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getV20190125MeshesMeshNameVirtualRouterVirtualRouterNameRoutesRouteNameQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v20190125.meshes[':meshName'].virtualRouter[':virtualRouterName'].routes[
          ':routeName'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV20190125MeshesMeshNameVirtualRouterVirtualRouterNameRoutesRouteName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v20190125.meshes)[':meshName']['virtualRouter'][':virtualRouterName']['routes'][':routeName']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v20190125.meshes)[':meshName']['virtualRouter'][':virtualRouterName']['routes'][':routeName']['$get']
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
                    (typeof client.v20190125.meshes)[':meshName']['virtualRouter'][':virtualRouterName']['routes'][':routeName']['$get']
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
                    (typeof client.v20190125.meshes)[':meshName']['virtualRouter'][':virtualRouterName']['routes'][':routeName']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getV20190125MeshesMeshNameVirtualRouterVirtualRouterNameRoutesRouteNameQueryKey
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
              (typeof client.v20190125.meshes)[':meshName']['virtualRouter'][':virtualRouterName']['routes'][':routeName']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getV20190125MeshesMeshNameVirtualRouterVirtualRouterNameRoutesRouteNameQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV20190125MeshesMeshNameVirtualRouterVirtualRouterNameRoutesRouteNameQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v20190125.meshes[':meshName'].virtualRouter[':virtualRouterName'].routes[
            ':routeName'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function getPutV20190125MeshesMeshNameVirtualRouterVirtualRouterNameRoutesRouteNameMutationKey() {
  return [
    'v20190125',
    '/v20190125/meshes/:meshName/virtualRouter/:virtualRouterName/routes/:routeName',
    'PUT',
  ] as const
}

export function getPutV20190125MeshesMeshNameVirtualRouterVirtualRouterNameRoutesRouteNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v20190125.meshes)[':meshName']['virtualRouter'][':virtualRouterName']['routes'][':routeName']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v20190125.meshes)[':meshName']['virtualRouter'][':virtualRouterName']['routes'][':routeName']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPutV20190125MeshesMeshNameVirtualRouterVirtualRouterNameRoutesRouteNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v20190125.meshes)[':meshName']['virtualRouter'][':virtualRouterName']['routes'][':routeName']['$put']
      >,
    ) {
      return parseResponse(
        client.v20190125.meshes[':meshName'].virtualRouter[':virtualRouterName'].routes[
          ':routeName'
        ].$put(args, options),
      )
    },
  })
}

export function usePutV20190125MeshesMeshNameVirtualRouterVirtualRouterNameRoutesRouteName<
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
                    (typeof client.v20190125.meshes)[':meshName']['virtualRouter'][':virtualRouterName']['routes'][':routeName']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v20190125.meshes)[':meshName']['virtualRouter'][':virtualRouterName']['routes'][':routeName']['$put']
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
    getPutV20190125MeshesMeshNameVirtualRouterVirtualRouterNameRoutesRouteNameMutationOptions<
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

export function getDeleteV20190125MeshesMeshNameVirtualRouterVirtualRouterNameRoutesRouteNameMutationKey() {
  return [
    'v20190125',
    '/v20190125/meshes/:meshName/virtualRouter/:virtualRouterName/routes/:routeName',
    'DELETE',
  ] as const
}

export function getDeleteV20190125MeshesMeshNameVirtualRouterVirtualRouterNameRoutesRouteNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v20190125.meshes)[':meshName']['virtualRouter'][':virtualRouterName']['routes'][':routeName']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v20190125.meshes)[':meshName']['virtualRouter'][':virtualRouterName']['routes'][':routeName']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteV20190125MeshesMeshNameVirtualRouterVirtualRouterNameRoutesRouteNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v20190125.meshes)[':meshName']['virtualRouter'][':virtualRouterName']['routes'][':routeName']['$delete']
      >,
    ) {
      return parseResponse(
        client.v20190125.meshes[':meshName'].virtualRouter[':virtualRouterName'].routes[
          ':routeName'
        ].$delete(args, options),
      )
    },
  })
}

export function useDeleteV20190125MeshesMeshNameVirtualRouterVirtualRouterNameRoutesRouteName<
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
                    (typeof client.v20190125.meshes)[':meshName']['virtualRouter'][':virtualRouterName']['routes'][':routeName']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v20190125.meshes)[':meshName']['virtualRouter'][':virtualRouterName']['routes'][':routeName']['$delete']
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
    getDeleteV20190125MeshesMeshNameVirtualRouterVirtualRouterNameRoutesRouteNameMutationOptions<
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

export function getV20190125MeshesMeshNameVirtualGatewaysVirtualGatewayNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v20190125.meshes)[':meshName']['virtualGateways'][':virtualGatewayName']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'v20190125',
    '/v20190125/meshes/:meshName/virtualGateways/:virtualGatewayName',
    keyArgs,
  ] as const
}

export function getV20190125MeshesMeshNameVirtualGatewaysVirtualGatewayNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v20190125.meshes)[':meshName']['virtualGateways'][':virtualGatewayName']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getV20190125MeshesMeshNameVirtualGatewaysVirtualGatewayNameQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v20190125.meshes[':meshName'].virtualGateways[':virtualGatewayName'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useV20190125MeshesMeshNameVirtualGatewaysVirtualGatewayName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v20190125.meshes)[':meshName']['virtualGateways'][':virtualGatewayName']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v20190125.meshes)[':meshName']['virtualGateways'][':virtualGatewayName']['$get']
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
                    (typeof client.v20190125.meshes)[':meshName']['virtualGateways'][':virtualGatewayName']['$get']
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
                    (typeof client.v20190125.meshes)[':meshName']['virtualGateways'][':virtualGatewayName']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV20190125MeshesMeshNameVirtualGatewaysVirtualGatewayNameQueryKey>
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
              (typeof client.v20190125.meshes)[':meshName']['virtualGateways'][':virtualGatewayName']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV20190125MeshesMeshNameVirtualGatewaysVirtualGatewayNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV20190125MeshesMeshNameVirtualGatewaysVirtualGatewayNameQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v20190125.meshes[':meshName'].virtualGateways[':virtualGatewayName'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPutV20190125MeshesMeshNameVirtualGatewaysVirtualGatewayNameMutationKey() {
  return [
    'v20190125',
    '/v20190125/meshes/:meshName/virtualGateways/:virtualGatewayName',
    'PUT',
  ] as const
}

export function getPutV20190125MeshesMeshNameVirtualGatewaysVirtualGatewayNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v20190125.meshes)[':meshName']['virtualGateways'][':virtualGatewayName']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v20190125.meshes)[':meshName']['virtualGateways'][':virtualGatewayName']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutV20190125MeshesMeshNameVirtualGatewaysVirtualGatewayNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v20190125.meshes)[':meshName']['virtualGateways'][':virtualGatewayName']['$put']
      >,
    ) {
      return parseResponse(
        client.v20190125.meshes[':meshName'].virtualGateways[':virtualGatewayName'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function usePutV20190125MeshesMeshNameVirtualGatewaysVirtualGatewayName<
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
                    (typeof client.v20190125.meshes)[':meshName']['virtualGateways'][':virtualGatewayName']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v20190125.meshes)[':meshName']['virtualGateways'][':virtualGatewayName']['$put']
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
    getPutV20190125MeshesMeshNameVirtualGatewaysVirtualGatewayNameMutationOptions<
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

export function getDeleteV20190125MeshesMeshNameVirtualGatewaysVirtualGatewayNameMutationKey() {
  return [
    'v20190125',
    '/v20190125/meshes/:meshName/virtualGateways/:virtualGatewayName',
    'DELETE',
  ] as const
}

export function getDeleteV20190125MeshesMeshNameVirtualGatewaysVirtualGatewayNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v20190125.meshes)[':meshName']['virtualGateways'][':virtualGatewayName']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v20190125.meshes)[':meshName']['virtualGateways'][':virtualGatewayName']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteV20190125MeshesMeshNameVirtualGatewaysVirtualGatewayNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v20190125.meshes)[':meshName']['virtualGateways'][':virtualGatewayName']['$delete']
      >,
    ) {
      return parseResponse(
        client.v20190125.meshes[':meshName'].virtualGateways[':virtualGatewayName'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteV20190125MeshesMeshNameVirtualGatewaysVirtualGatewayName<
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
                    (typeof client.v20190125.meshes)[':meshName']['virtualGateways'][':virtualGatewayName']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v20190125.meshes)[':meshName']['virtualGateways'][':virtualGatewayName']['$delete']
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
    getDeleteV20190125MeshesMeshNameVirtualGatewaysVirtualGatewayNameMutationOptions<
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

export function getV20190125MeshesMeshNameVirtualNodesVirtualNodeNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v20190125.meshes)[':meshName']['virtualNodes'][':virtualNodeName']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'v20190125',
    '/v20190125/meshes/:meshName/virtualNodes/:virtualNodeName',
    keyArgs,
  ] as const
}

export function getV20190125MeshesMeshNameVirtualNodesVirtualNodeNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v20190125.meshes)[':meshName']['virtualNodes'][':virtualNodeName']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV20190125MeshesMeshNameVirtualNodesVirtualNodeNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v20190125.meshes[':meshName'].virtualNodes[':virtualNodeName'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV20190125MeshesMeshNameVirtualNodesVirtualNodeName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v20190125.meshes)[':meshName']['virtualNodes'][':virtualNodeName']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v20190125.meshes)[':meshName']['virtualNodes'][':virtualNodeName']['$get']
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
                    (typeof client.v20190125.meshes)[':meshName']['virtualNodes'][':virtualNodeName']['$get']
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
                    (typeof client.v20190125.meshes)[':meshName']['virtualNodes'][':virtualNodeName']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV20190125MeshesMeshNameVirtualNodesVirtualNodeNameQueryKey>
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
              (typeof client.v20190125.meshes)[':meshName']['virtualNodes'][':virtualNodeName']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV20190125MeshesMeshNameVirtualNodesVirtualNodeNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV20190125MeshesMeshNameVirtualNodesVirtualNodeNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v20190125.meshes[':meshName'].virtualNodes[':virtualNodeName'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPutV20190125MeshesMeshNameVirtualNodesVirtualNodeNameMutationKey() {
  return ['v20190125', '/v20190125/meshes/:meshName/virtualNodes/:virtualNodeName', 'PUT'] as const
}

export function getPutV20190125MeshesMeshNameVirtualNodesVirtualNodeNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v20190125.meshes)[':meshName']['virtualNodes'][':virtualNodeName']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v20190125.meshes)[':meshName']['virtualNodes'][':virtualNodeName']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutV20190125MeshesMeshNameVirtualNodesVirtualNodeNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v20190125.meshes)[':meshName']['virtualNodes'][':virtualNodeName']['$put']
      >,
    ) {
      return parseResponse(
        client.v20190125.meshes[':meshName'].virtualNodes[':virtualNodeName'].$put(args, options),
      )
    },
  })
}

export function usePutV20190125MeshesMeshNameVirtualNodesVirtualNodeName<
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
                    (typeof client.v20190125.meshes)[':meshName']['virtualNodes'][':virtualNodeName']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v20190125.meshes)[':meshName']['virtualNodes'][':virtualNodeName']['$put']
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
  const mutationDefaults = getPutV20190125MeshesMeshNameVirtualNodesVirtualNodeNameMutationOptions<
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

export function getDeleteV20190125MeshesMeshNameVirtualNodesVirtualNodeNameMutationKey() {
  return [
    'v20190125',
    '/v20190125/meshes/:meshName/virtualNodes/:virtualNodeName',
    'DELETE',
  ] as const
}

export function getDeleteV20190125MeshesMeshNameVirtualNodesVirtualNodeNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v20190125.meshes)[':meshName']['virtualNodes'][':virtualNodeName']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v20190125.meshes)[':meshName']['virtualNodes'][':virtualNodeName']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteV20190125MeshesMeshNameVirtualNodesVirtualNodeNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v20190125.meshes)[':meshName']['virtualNodes'][':virtualNodeName']['$delete']
      >,
    ) {
      return parseResponse(
        client.v20190125.meshes[':meshName'].virtualNodes[':virtualNodeName'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteV20190125MeshesMeshNameVirtualNodesVirtualNodeName<
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
                    (typeof client.v20190125.meshes)[':meshName']['virtualNodes'][':virtualNodeName']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v20190125.meshes)[':meshName']['virtualNodes'][':virtualNodeName']['$delete']
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
    getDeleteV20190125MeshesMeshNameVirtualNodesVirtualNodeNameMutationOptions<
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

export function getV20190125MeshesMeshNameVirtualRoutersVirtualRouterNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v20190125.meshes)[':meshName']['virtualRouters'][':virtualRouterName']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'v20190125',
    '/v20190125/meshes/:meshName/virtualRouters/:virtualRouterName',
    keyArgs,
  ] as const
}

export function getV20190125MeshesMeshNameVirtualRoutersVirtualRouterNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v20190125.meshes)[':meshName']['virtualRouters'][':virtualRouterName']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getV20190125MeshesMeshNameVirtualRoutersVirtualRouterNameQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v20190125.meshes[':meshName'].virtualRouters[':virtualRouterName'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useV20190125MeshesMeshNameVirtualRoutersVirtualRouterName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v20190125.meshes)[':meshName']['virtualRouters'][':virtualRouterName']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v20190125.meshes)[':meshName']['virtualRouters'][':virtualRouterName']['$get']
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
                    (typeof client.v20190125.meshes)[':meshName']['virtualRouters'][':virtualRouterName']['$get']
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
                    (typeof client.v20190125.meshes)[':meshName']['virtualRouters'][':virtualRouterName']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV20190125MeshesMeshNameVirtualRoutersVirtualRouterNameQueryKey>
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
              (typeof client.v20190125.meshes)[':meshName']['virtualRouters'][':virtualRouterName']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV20190125MeshesMeshNameVirtualRoutersVirtualRouterNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV20190125MeshesMeshNameVirtualRoutersVirtualRouterNameQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v20190125.meshes[':meshName'].virtualRouters[':virtualRouterName'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPutV20190125MeshesMeshNameVirtualRoutersVirtualRouterNameMutationKey() {
  return [
    'v20190125',
    '/v20190125/meshes/:meshName/virtualRouters/:virtualRouterName',
    'PUT',
  ] as const
}

export function getPutV20190125MeshesMeshNameVirtualRoutersVirtualRouterNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v20190125.meshes)[':meshName']['virtualRouters'][':virtualRouterName']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v20190125.meshes)[':meshName']['virtualRouters'][':virtualRouterName']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutV20190125MeshesMeshNameVirtualRoutersVirtualRouterNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v20190125.meshes)[':meshName']['virtualRouters'][':virtualRouterName']['$put']
      >,
    ) {
      return parseResponse(
        client.v20190125.meshes[':meshName'].virtualRouters[':virtualRouterName'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function usePutV20190125MeshesMeshNameVirtualRoutersVirtualRouterName<
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
                    (typeof client.v20190125.meshes)[':meshName']['virtualRouters'][':virtualRouterName']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v20190125.meshes)[':meshName']['virtualRouters'][':virtualRouterName']['$put']
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
    getPutV20190125MeshesMeshNameVirtualRoutersVirtualRouterNameMutationOptions<
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

export function getDeleteV20190125MeshesMeshNameVirtualRoutersVirtualRouterNameMutationKey() {
  return [
    'v20190125',
    '/v20190125/meshes/:meshName/virtualRouters/:virtualRouterName',
    'DELETE',
  ] as const
}

export function getDeleteV20190125MeshesMeshNameVirtualRoutersVirtualRouterNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v20190125.meshes)[':meshName']['virtualRouters'][':virtualRouterName']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v20190125.meshes)[':meshName']['virtualRouters'][':virtualRouterName']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteV20190125MeshesMeshNameVirtualRoutersVirtualRouterNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v20190125.meshes)[':meshName']['virtualRouters'][':virtualRouterName']['$delete']
      >,
    ) {
      return parseResponse(
        client.v20190125.meshes[':meshName'].virtualRouters[':virtualRouterName'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteV20190125MeshesMeshNameVirtualRoutersVirtualRouterName<
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
                    (typeof client.v20190125.meshes)[':meshName']['virtualRouters'][':virtualRouterName']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v20190125.meshes)[':meshName']['virtualRouters'][':virtualRouterName']['$delete']
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
    getDeleteV20190125MeshesMeshNameVirtualRoutersVirtualRouterNameMutationOptions<
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

export function getV20190125MeshesMeshNameVirtualServicesVirtualServiceNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v20190125.meshes)[':meshName']['virtualServices'][':virtualServiceName']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'v20190125',
    '/v20190125/meshes/:meshName/virtualServices/:virtualServiceName',
    keyArgs,
  ] as const
}

export function getV20190125MeshesMeshNameVirtualServicesVirtualServiceNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v20190125.meshes)[':meshName']['virtualServices'][':virtualServiceName']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getV20190125MeshesMeshNameVirtualServicesVirtualServiceNameQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v20190125.meshes[':meshName'].virtualServices[':virtualServiceName'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useV20190125MeshesMeshNameVirtualServicesVirtualServiceName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v20190125.meshes)[':meshName']['virtualServices'][':virtualServiceName']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v20190125.meshes)[':meshName']['virtualServices'][':virtualServiceName']['$get']
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
                    (typeof client.v20190125.meshes)[':meshName']['virtualServices'][':virtualServiceName']['$get']
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
                    (typeof client.v20190125.meshes)[':meshName']['virtualServices'][':virtualServiceName']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV20190125MeshesMeshNameVirtualServicesVirtualServiceNameQueryKey>
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
              (typeof client.v20190125.meshes)[':meshName']['virtualServices'][':virtualServiceName']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV20190125MeshesMeshNameVirtualServicesVirtualServiceNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV20190125MeshesMeshNameVirtualServicesVirtualServiceNameQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v20190125.meshes[':meshName'].virtualServices[':virtualServiceName'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPutV20190125MeshesMeshNameVirtualServicesVirtualServiceNameMutationKey() {
  return [
    'v20190125',
    '/v20190125/meshes/:meshName/virtualServices/:virtualServiceName',
    'PUT',
  ] as const
}

export function getPutV20190125MeshesMeshNameVirtualServicesVirtualServiceNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v20190125.meshes)[':meshName']['virtualServices'][':virtualServiceName']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v20190125.meshes)[':meshName']['virtualServices'][':virtualServiceName']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutV20190125MeshesMeshNameVirtualServicesVirtualServiceNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v20190125.meshes)[':meshName']['virtualServices'][':virtualServiceName']['$put']
      >,
    ) {
      return parseResponse(
        client.v20190125.meshes[':meshName'].virtualServices[':virtualServiceName'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function usePutV20190125MeshesMeshNameVirtualServicesVirtualServiceName<
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
                    (typeof client.v20190125.meshes)[':meshName']['virtualServices'][':virtualServiceName']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v20190125.meshes)[':meshName']['virtualServices'][':virtualServiceName']['$put']
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
    getPutV20190125MeshesMeshNameVirtualServicesVirtualServiceNameMutationOptions<
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

export function getDeleteV20190125MeshesMeshNameVirtualServicesVirtualServiceNameMutationKey() {
  return [
    'v20190125',
    '/v20190125/meshes/:meshName/virtualServices/:virtualServiceName',
    'DELETE',
  ] as const
}

export function getDeleteV20190125MeshesMeshNameVirtualServicesVirtualServiceNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v20190125.meshes)[':meshName']['virtualServices'][':virtualServiceName']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v20190125.meshes)[':meshName']['virtualServices'][':virtualServiceName']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteV20190125MeshesMeshNameVirtualServicesVirtualServiceNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v20190125.meshes)[':meshName']['virtualServices'][':virtualServiceName']['$delete']
      >,
    ) {
      return parseResponse(
        client.v20190125.meshes[':meshName'].virtualServices[':virtualServiceName'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteV20190125MeshesMeshNameVirtualServicesVirtualServiceName<
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
                    (typeof client.v20190125.meshes)[':meshName']['virtualServices'][':virtualServiceName']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v20190125.meshes)[':meshName']['virtualServices'][':virtualServiceName']['$delete']
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
    getDeleteV20190125MeshesMeshNameVirtualServicesVirtualServiceNameMutationOptions<
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

export function getV20190125TagsResourceArnQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v20190125)['tags#resourceArn']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v20190125', '/v20190125/tags#resourceArn', keyArgs] as const
}

export function getV20190125TagsResourceArnQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v20190125)['tags#resourceArn']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV20190125TagsResourceArnQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v20190125['tags#resourceArn'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV20190125TagsResourceArn<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v20190125)['tags#resourceArn']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v20190125)['tags#resourceArn']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v20190125)['tags#resourceArn']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v20190125)['tags#resourceArn']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV20190125TagsResourceArnQueryKey>
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
          Awaited<ReturnType<(typeof client.v20190125)['tags#resourceArn']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV20190125TagsResourceArnQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV20190125TagsResourceArnQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v20190125['tags#resourceArn'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutV20190125TagResourceArnMutationKey() {
  return ['v20190125', '/v20190125/tag#resourceArn', 'PUT'] as const
}

export function getPutV20190125TagResourceArnMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v20190125)['tag#resourceArn']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v20190125)['tag#resourceArn']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV20190125TagResourceArnMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v20190125)['tag#resourceArn']['$put']>) {
      return parseResponse(client.v20190125['tag#resourceArn'].$put(args, options))
    },
  })
}

export function usePutV20190125TagResourceArn<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v20190125)['tag#resourceArn']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v20190125)['tag#resourceArn']['$put']>,
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
  const mutationDefaults = getPutV20190125TagResourceArnMutationOptions<TError, TOnMutateResult>(
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

export function getPutV20190125UntagResourceArnMutationKey() {
  return ['v20190125', '/v20190125/untag#resourceArn', 'PUT'] as const
}

export function getPutV20190125UntagResourceArnMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v20190125)['untag#resourceArn']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v20190125)['untag#resourceArn']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV20190125UntagResourceArnMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v20190125)['untag#resourceArn']['$put']>,
    ) {
      return parseResponse(client.v20190125['untag#resourceArn'].$put(args, options))
    },
  })
}

export function usePutV20190125UntagResourceArn<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v20190125)['untag#resourceArn']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v20190125)['untag#resourceArn']['$put']>,
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
  const mutationDefaults = getPutV20190125UntagResourceArnMutationOptions<TError, TOnMutateResult>(
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
