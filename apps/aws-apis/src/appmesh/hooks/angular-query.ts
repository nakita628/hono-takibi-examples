import {
  injectQuery,
  injectMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/angular-query-experimental'
import type {
  CreateQueryOptions,
  CreateMutationOptions,
  DefaultError,
  InjectQueryOptions,
  InjectInfiniteQueryOptions,
  InjectMutationOptions,
} from '@tanstack/angular-query-experimental'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getV20190125Key() {
  return ['v20190125'] as const
}

export function getV20190125MeshesMeshNameVirtualGatewayVirtualGatewayNameGatewayRoutesQueryKey(
  args: InferRequestType<
    (typeof client.v20190125.meshes)[':meshName']['virtualGateway'][':virtualGatewayName']['gatewayRoutes']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'v20190125',
    '/v20190125/meshes/:meshName/virtualGateway/:virtualGatewayName/gatewayRoutes',
    keyArgs,
  ] as const
}

export function getV20190125MeshesMeshNameVirtualGatewayVirtualGatewayNameGatewayRoutesQueryOptions<
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
  args: InferRequestType<
    (typeof client.v20190125.meshes)[':meshName']['virtualGateway'][':virtualGatewayName']['gatewayRoutes']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV20190125MeshesMeshNameVirtualGatewayVirtualGatewayNameGatewayRoutesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v20190125.meshes[':meshName'].virtualGateway[
          ':virtualGatewayName'
        ].gatewayRoutes.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV20190125MeshesMeshNameVirtualGatewayVirtualGatewayNameGatewayRoutes<
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
  args: () => InferRequestType<
    (typeof client.v20190125.meshes)[':meshName']['virtualGateway'][':virtualGatewayName']['gatewayRoutes']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV20190125MeshesMeshNameVirtualGatewayVirtualGatewayNameGatewayRoutesQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPutV20190125MeshesMeshNameVirtualGatewayVirtualGatewayNameGatewayRoutes<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutV20190125MeshesMeshNameVirtualGatewayVirtualGatewayNameGatewayRoutesMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getV20190125MeshesQueryKey(
  args: InferRequestType<typeof client.v20190125.meshes.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v20190125', '/v20190125/meshes', keyArgs] as const
}

export function getV20190125MeshesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v20190125.meshes.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v20190125.meshes.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v20190125.meshes.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV20190125MeshesQueryKey>
  >({
    queryKey: getV20190125MeshesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v20190125.meshes.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV20190125Meshes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v20190125.meshes.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v20190125.meshes.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v20190125.meshes.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV20190125MeshesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV20190125MeshesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPutV20190125Meshes<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v20190125.meshes.$put>>>>
        >,
        TError,
        InferRequestType<typeof client.v20190125.meshes.$put>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV20190125MeshesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getV20190125MeshesMeshNameVirtualRouterVirtualRouterNameRoutesQueryKey(
  args: InferRequestType<
    (typeof client.v20190125.meshes)[':meshName']['virtualRouter'][':virtualRouterName']['routes']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'v20190125',
    '/v20190125/meshes/:meshName/virtualRouter/:virtualRouterName/routes',
    keyArgs,
  ] as const
}

export function getV20190125MeshesMeshNameVirtualRouterVirtualRouterNameRoutesQueryOptions<
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
  args: InferRequestType<
    (typeof client.v20190125.meshes)[':meshName']['virtualRouter'][':virtualRouterName']['routes']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV20190125MeshesMeshNameVirtualRouterVirtualRouterNameRoutesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v20190125.meshes[':meshName'].virtualRouter[':virtualRouterName'].routes.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV20190125MeshesMeshNameVirtualRouterVirtualRouterNameRoutes<
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
  args: () => InferRequestType<
    (typeof client.v20190125.meshes)[':meshName']['virtualRouter'][':virtualRouterName']['routes']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV20190125MeshesMeshNameVirtualRouterVirtualRouterNameRoutesQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
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

export function injectPutV20190125MeshesMeshNameVirtualRouterVirtualRouterNameRoutes<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutV20190125MeshesMeshNameVirtualRouterVirtualRouterNameRoutesMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getV20190125MeshesMeshNameVirtualGatewaysQueryKey(
  args: InferRequestType<(typeof client.v20190125.meshes)[':meshName']['virtualGateways']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v20190125', '/v20190125/meshes/:meshName/virtualGateways', keyArgs] as const
}

export function getV20190125MeshesMeshNameVirtualGatewaysQueryOptions<
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
  args: InferRequestType<(typeof client.v20190125.meshes)[':meshName']['virtualGateways']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV20190125MeshesMeshNameVirtualGatewaysQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v20190125.meshes[':meshName'].virtualGateways.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV20190125MeshesMeshNameVirtualGateways<
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
  args: () => InferRequestType<
    (typeof client.v20190125.meshes)[':meshName']['virtualGateways']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV20190125MeshesMeshNameVirtualGatewaysQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
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

export function injectPutV20190125MeshesMeshNameVirtualGateways<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV20190125MeshesMeshNameVirtualGatewaysMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getV20190125MeshesMeshNameVirtualNodesQueryKey(
  args: InferRequestType<(typeof client.v20190125.meshes)[':meshName']['virtualNodes']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v20190125', '/v20190125/meshes/:meshName/virtualNodes', keyArgs] as const
}

export function getV20190125MeshesMeshNameVirtualNodesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v20190125.meshes)[':meshName']['virtualNodes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v20190125.meshes)[':meshName']['virtualNodes']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV20190125MeshesMeshNameVirtualNodesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v20190125.meshes[':meshName'].virtualNodes.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV20190125MeshesMeshNameVirtualNodes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v20190125.meshes)[':meshName']['virtualNodes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v20190125.meshes)[':meshName']['virtualNodes']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getV20190125MeshesMeshNameVirtualNodesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV20190125MeshesMeshNameVirtualNodesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPutV20190125MeshesMeshNameVirtualNodes<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV20190125MeshesMeshNameVirtualNodesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getV20190125MeshesMeshNameVirtualRoutersQueryKey(
  args: InferRequestType<(typeof client.v20190125.meshes)[':meshName']['virtualRouters']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v20190125', '/v20190125/meshes/:meshName/virtualRouters', keyArgs] as const
}

export function getV20190125MeshesMeshNameVirtualRoutersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v20190125.meshes)[':meshName']['virtualRouters']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v20190125.meshes)[':meshName']['virtualRouters']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV20190125MeshesMeshNameVirtualRoutersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v20190125.meshes[':meshName'].virtualRouters.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV20190125MeshesMeshNameVirtualRouters<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v20190125.meshes)[':meshName']['virtualRouters']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v20190125.meshes)[':meshName']['virtualRouters']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV20190125MeshesMeshNameVirtualRoutersQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPutV20190125MeshesMeshNameVirtualRouters<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV20190125MeshesMeshNameVirtualRoutersMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getV20190125MeshesMeshNameVirtualServicesQueryKey(
  args: InferRequestType<(typeof client.v20190125.meshes)[':meshName']['virtualServices']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v20190125', '/v20190125/meshes/:meshName/virtualServices', keyArgs] as const
}

export function getV20190125MeshesMeshNameVirtualServicesQueryOptions<
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
  args: InferRequestType<(typeof client.v20190125.meshes)[':meshName']['virtualServices']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV20190125MeshesMeshNameVirtualServicesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v20190125.meshes[':meshName'].virtualServices.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV20190125MeshesMeshNameVirtualServices<
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
  args: () => InferRequestType<
    (typeof client.v20190125.meshes)[':meshName']['virtualServices']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV20190125MeshesMeshNameVirtualServicesQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
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

export function injectPutV20190125MeshesMeshNameVirtualServices<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV20190125MeshesMeshNameVirtualServicesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getV20190125MeshesMeshNameVirtualGatewayVirtualGatewayNameGatewayRoutesGatewayRouteNameQueryKey(
  args: InferRequestType<
    (typeof client.v20190125.meshes)[':meshName']['virtualGateway'][':virtualGatewayName']['gatewayRoutes'][':gatewayRouteName']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'v20190125',
    '/v20190125/meshes/:meshName/virtualGateway/:virtualGatewayName/gatewayRoutes/:gatewayRouteName',
    keyArgs,
  ] as const
}

export function getV20190125MeshesMeshNameVirtualGatewayVirtualGatewayNameGatewayRoutesGatewayRouteNameQueryOptions<
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
  args: InferRequestType<
    (typeof client.v20190125.meshes)[':meshName']['virtualGateway'][':virtualGatewayName']['gatewayRoutes'][':gatewayRouteName']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey:
      getV20190125MeshesMeshNameVirtualGatewayVirtualGatewayNameGatewayRoutesGatewayRouteNameQueryKey(
        args,
      ),
    queryFn({ signal }) {
      return parseResponse(
        client.v20190125.meshes[':meshName'].virtualGateway[':virtualGatewayName'].gatewayRoutes[
          ':gatewayRouteName'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV20190125MeshesMeshNameVirtualGatewayVirtualGatewayNameGatewayRoutesGatewayRouteName<
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
  args: () => InferRequestType<
    (typeof client.v20190125.meshes)[':meshName']['virtualGateway'][':virtualGatewayName']['gatewayRoutes'][':gatewayRouteName']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV20190125MeshesMeshNameVirtualGatewayVirtualGatewayNameGatewayRoutesGatewayRouteNameQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPutV20190125MeshesMeshNameVirtualGatewayVirtualGatewayNameGatewayRoutesGatewayRouteName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutV20190125MeshesMeshNameVirtualGatewayVirtualGatewayNameGatewayRoutesGatewayRouteNameMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteV20190125MeshesMeshNameVirtualGatewayVirtualGatewayNameGatewayRoutesGatewayRouteName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteV20190125MeshesMeshNameVirtualGatewayVirtualGatewayNameGatewayRoutesGatewayRouteNameMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getV20190125MeshesMeshNameQueryKey(
  args: InferRequestType<(typeof client.v20190125.meshes)[':meshName']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v20190125', '/v20190125/meshes/:meshName', keyArgs] as const
}

export function getV20190125MeshesMeshNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v20190125.meshes)[':meshName']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v20190125.meshes)[':meshName']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV20190125MeshesMeshNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v20190125.meshes[':meshName'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV20190125MeshesMeshName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v20190125.meshes)[':meshName']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v20190125.meshes)[':meshName']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV20190125MeshesMeshNameQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPutV20190125MeshesMeshName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV20190125MeshesMeshNameMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteV20190125MeshesMeshName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV20190125MeshesMeshNameMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getV20190125MeshesMeshNameVirtualRouterVirtualRouterNameRoutesRouteNameQueryKey(
  args: InferRequestType<
    (typeof client.v20190125.meshes)[':meshName']['virtualRouter'][':virtualRouterName']['routes'][':routeName']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'v20190125',
    '/v20190125/meshes/:meshName/virtualRouter/:virtualRouterName/routes/:routeName',
    keyArgs,
  ] as const
}

export function getV20190125MeshesMeshNameVirtualRouterVirtualRouterNameRoutesRouteNameQueryOptions<
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
  args: InferRequestType<
    (typeof client.v20190125.meshes)[':meshName']['virtualRouter'][':virtualRouterName']['routes'][':routeName']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV20190125MeshesMeshNameVirtualRouterVirtualRouterNameRoutesRouteNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v20190125.meshes[':meshName'].virtualRouter[':virtualRouterName'].routes[
          ':routeName'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV20190125MeshesMeshNameVirtualRouterVirtualRouterNameRoutesRouteName<
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
  args: () => InferRequestType<
    (typeof client.v20190125.meshes)[':meshName']['virtualRouter'][':virtualRouterName']['routes'][':routeName']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV20190125MeshesMeshNameVirtualRouterVirtualRouterNameRoutesRouteNameQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPutV20190125MeshesMeshNameVirtualRouterVirtualRouterNameRoutesRouteName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutV20190125MeshesMeshNameVirtualRouterVirtualRouterNameRoutesRouteNameMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteV20190125MeshesMeshNameVirtualRouterVirtualRouterNameRoutesRouteName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteV20190125MeshesMeshNameVirtualRouterVirtualRouterNameRoutesRouteNameMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getV20190125MeshesMeshNameVirtualGatewaysVirtualGatewayNameQueryKey(
  args: InferRequestType<
    (typeof client.v20190125.meshes)[':meshName']['virtualGateways'][':virtualGatewayName']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'v20190125',
    '/v20190125/meshes/:meshName/virtualGateways/:virtualGatewayName',
    keyArgs,
  ] as const
}

export function getV20190125MeshesMeshNameVirtualGatewaysVirtualGatewayNameQueryOptions<
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
  args: InferRequestType<
    (typeof client.v20190125.meshes)[':meshName']['virtualGateways'][':virtualGatewayName']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV20190125MeshesMeshNameVirtualGatewaysVirtualGatewayNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v20190125.meshes[':meshName'].virtualGateways[':virtualGatewayName'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV20190125MeshesMeshNameVirtualGatewaysVirtualGatewayName<
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
  args: () => InferRequestType<
    (typeof client.v20190125.meshes)[':meshName']['virtualGateways'][':virtualGatewayName']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV20190125MeshesMeshNameVirtualGatewaysVirtualGatewayNameQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
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

export function injectPutV20190125MeshesMeshNameVirtualGatewaysVirtualGatewayName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutV20190125MeshesMeshNameVirtualGatewaysVirtualGatewayNameMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteV20190125MeshesMeshNameVirtualGatewaysVirtualGatewayName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteV20190125MeshesMeshNameVirtualGatewaysVirtualGatewayNameMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getV20190125MeshesMeshNameVirtualNodesVirtualNodeNameQueryKey(
  args: InferRequestType<
    (typeof client.v20190125.meshes)[':meshName']['virtualNodes'][':virtualNodeName']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'v20190125',
    '/v20190125/meshes/:meshName/virtualNodes/:virtualNodeName',
    keyArgs,
  ] as const
}

export function getV20190125MeshesMeshNameVirtualNodesVirtualNodeNameQueryOptions<
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
  args: InferRequestType<
    (typeof client.v20190125.meshes)[':meshName']['virtualNodes'][':virtualNodeName']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV20190125MeshesMeshNameVirtualNodesVirtualNodeNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v20190125.meshes[':meshName'].virtualNodes[':virtualNodeName'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV20190125MeshesMeshNameVirtualNodesVirtualNodeName<
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
  args: () => InferRequestType<
    (typeof client.v20190125.meshes)[':meshName']['virtualNodes'][':virtualNodeName']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV20190125MeshesMeshNameVirtualNodesVirtualNodeNameQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
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

export function injectPutV20190125MeshesMeshNameVirtualNodesVirtualNodeName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutV20190125MeshesMeshNameVirtualNodesVirtualNodeNameMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteV20190125MeshesMeshNameVirtualNodesVirtualNodeName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteV20190125MeshesMeshNameVirtualNodesVirtualNodeNameMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getV20190125MeshesMeshNameVirtualRoutersVirtualRouterNameQueryKey(
  args: InferRequestType<
    (typeof client.v20190125.meshes)[':meshName']['virtualRouters'][':virtualRouterName']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'v20190125',
    '/v20190125/meshes/:meshName/virtualRouters/:virtualRouterName',
    keyArgs,
  ] as const
}

export function getV20190125MeshesMeshNameVirtualRoutersVirtualRouterNameQueryOptions<
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
  args: InferRequestType<
    (typeof client.v20190125.meshes)[':meshName']['virtualRouters'][':virtualRouterName']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV20190125MeshesMeshNameVirtualRoutersVirtualRouterNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v20190125.meshes[':meshName'].virtualRouters[':virtualRouterName'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV20190125MeshesMeshNameVirtualRoutersVirtualRouterName<
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
  args: () => InferRequestType<
    (typeof client.v20190125.meshes)[':meshName']['virtualRouters'][':virtualRouterName']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV20190125MeshesMeshNameVirtualRoutersVirtualRouterNameQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
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

export function injectPutV20190125MeshesMeshNameVirtualRoutersVirtualRouterName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutV20190125MeshesMeshNameVirtualRoutersVirtualRouterNameMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteV20190125MeshesMeshNameVirtualRoutersVirtualRouterName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteV20190125MeshesMeshNameVirtualRoutersVirtualRouterNameMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getV20190125MeshesMeshNameVirtualServicesVirtualServiceNameQueryKey(
  args: InferRequestType<
    (typeof client.v20190125.meshes)[':meshName']['virtualServices'][':virtualServiceName']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'v20190125',
    '/v20190125/meshes/:meshName/virtualServices/:virtualServiceName',
    keyArgs,
  ] as const
}

export function getV20190125MeshesMeshNameVirtualServicesVirtualServiceNameQueryOptions<
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
  args: InferRequestType<
    (typeof client.v20190125.meshes)[':meshName']['virtualServices'][':virtualServiceName']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV20190125MeshesMeshNameVirtualServicesVirtualServiceNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v20190125.meshes[':meshName'].virtualServices[':virtualServiceName'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV20190125MeshesMeshNameVirtualServicesVirtualServiceName<
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
  args: () => InferRequestType<
    (typeof client.v20190125.meshes)[':meshName']['virtualServices'][':virtualServiceName']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV20190125MeshesMeshNameVirtualServicesVirtualServiceNameQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
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

export function injectPutV20190125MeshesMeshNameVirtualServicesVirtualServiceName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutV20190125MeshesMeshNameVirtualServicesVirtualServiceNameMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteV20190125MeshesMeshNameVirtualServicesVirtualServiceName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteV20190125MeshesMeshNameVirtualServicesVirtualServiceNameMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getV20190125TagsResourceArnQueryKey(
  args: InferRequestType<(typeof client.v20190125)['tags#resourceArn']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v20190125', '/v20190125/tags#resourceArn', keyArgs] as const
}

export function getV20190125TagsResourceArnQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v20190125)['tags#resourceArn']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v20190125)['tags#resourceArn']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV20190125TagsResourceArnQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v20190125['tags#resourceArn'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV20190125TagsResourceArn<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v20190125)['tags#resourceArn']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v20190125)['tags#resourceArn']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV20190125TagsResourceArnQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPutV20190125TagResourceArn<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV20190125TagResourceArnMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPutV20190125UntagResourceArn<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV20190125UntagResourceArnMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}
