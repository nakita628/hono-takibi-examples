import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getV20190125Key() {
  return ['v20190125'] as const
}

export function getGetV20190125MeshesMeshNameVirtualGatewayVirtualGatewayNameGatewayRoutesKey(
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

export function useGetV20190125MeshesMeshNameVirtualGatewayVirtualGatewayNameGatewayRoutes<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v20190125.meshes)[':meshName']['virtualGateway'][':virtualGatewayName']['gatewayRoutes']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV20190125MeshesMeshNameVirtualGatewayVirtualGatewayNameGatewayRoutesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v20190125.meshes[':meshName'].virtualGateway[
            ':virtualGatewayName'
          ].gatewayRoutes.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV20190125MeshesMeshNameVirtualGatewayVirtualGatewayNameGatewayRoutes<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v20190125.meshes)[':meshName']['virtualGateway'][':virtualGatewayName']['gatewayRoutes']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV20190125MeshesMeshNameVirtualGatewayVirtualGatewayNameGatewayRoutesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v20190125.meshes[':meshName'].virtualGateway[
            ':virtualGatewayName'
          ].gatewayRoutes.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutV20190125MeshesMeshNameVirtualGatewayVirtualGatewayNameGatewayRoutesKey() {
  return [
    'v20190125',
    '/v20190125/meshes/:meshName/virtualGateway/:virtualGatewayName/gatewayRoutes',
    'PUT',
  ] as const
}

export function usePutV20190125MeshesMeshNameVirtualGatewayVirtualGatewayNameGatewayRoutes<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v20190125.meshes)[':meshName']['virtualGateway'][':virtualGatewayName']['gatewayRoutes']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPutV20190125MeshesMeshNameVirtualGatewayVirtualGatewayNameGatewayRoutesKey()
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
            (typeof client.v20190125.meshes)[':meshName']['virtualGateway'][':virtualGatewayName']['gatewayRoutes']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v20190125.meshes[':meshName'].virtualGateway[
            ':virtualGatewayName'
          ].gatewayRoutes.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV20190125MeshesKey(
  args: InferRequestType<typeof client.v20190125.meshes.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v20190125', '/v20190125/meshes', keyArgs] as const
}

export function useGetV20190125Meshes<TError = unknown>(
  args: InferRequestType<typeof client.v20190125.meshes.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v20190125.meshes.$get>>>>
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
        ? getGetV20190125MeshesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v20190125.meshes.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v20190125.meshes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV20190125Meshes<TError = unknown>(
  args: InferRequestType<typeof client.v20190125.meshes.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v20190125.meshes.$get>>>>
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
        ? getGetV20190125MeshesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v20190125.meshes.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v20190125.meshes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV20190125MeshesKey() {
  return ['v20190125', '/v20190125/meshes', 'PUT'] as const
}

export function usePutV20190125Meshes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v20190125.meshes.$put>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v20190125.meshes.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV20190125MeshesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v20190125.meshes.$put> }) =>
        parseResponse(client.v20190125.meshes.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV20190125MeshesMeshNameVirtualRouterVirtualRouterNameRoutesKey(
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

export function useGetV20190125MeshesMeshNameVirtualRouterVirtualRouterNameRoutes<TError = unknown>(
  args: InferRequestType<
    (typeof client.v20190125.meshes)[':meshName']['virtualRouter'][':virtualRouterName']['routes']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV20190125MeshesMeshNameVirtualRouterVirtualRouterNameRoutesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v20190125.meshes[':meshName'].virtualRouter[':virtualRouterName'].routes.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV20190125MeshesMeshNameVirtualRouterVirtualRouterNameRoutes<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v20190125.meshes)[':meshName']['virtualRouter'][':virtualRouterName']['routes']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV20190125MeshesMeshNameVirtualRouterVirtualRouterNameRoutesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v20190125.meshes[':meshName'].virtualRouter[':virtualRouterName'].routes.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutV20190125MeshesMeshNameVirtualRouterVirtualRouterNameRoutesKey() {
  return [
    'v20190125',
    '/v20190125/meshes/:meshName/virtualRouter/:virtualRouterName/routes',
    'PUT',
  ] as const
}

export function usePutV20190125MeshesMeshNameVirtualRouterVirtualRouterNameRoutes<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v20190125.meshes)[':meshName']['virtualRouter'][':virtualRouterName']['routes']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV20190125MeshesMeshNameVirtualRouterVirtualRouterNameRoutesKey()
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
            (typeof client.v20190125.meshes)[':meshName']['virtualRouter'][':virtualRouterName']['routes']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v20190125.meshes[':meshName'].virtualRouter[':virtualRouterName'].routes.$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV20190125MeshesMeshNameVirtualGatewaysKey(
  args: InferRequestType<(typeof client.v20190125.meshes)[':meshName']['virtualGateways']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v20190125', '/v20190125/meshes/:meshName/virtualGateways', keyArgs] as const
}

export function useGetV20190125MeshesMeshNameVirtualGateways<TError = unknown>(
  args: InferRequestType<(typeof client.v20190125.meshes)[':meshName']['virtualGateways']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v20190125.meshes)[':meshName']['virtualGateways']['$get']>
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
        ? getGetV20190125MeshesMeshNameVirtualGatewaysKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v20190125.meshes)[':meshName']['virtualGateways']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v20190125.meshes[':meshName'].virtualGateways.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV20190125MeshesMeshNameVirtualGateways<TError = unknown>(
  args: InferRequestType<(typeof client.v20190125.meshes)[':meshName']['virtualGateways']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v20190125.meshes)[':meshName']['virtualGateways']['$get']>
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
        ? getGetV20190125MeshesMeshNameVirtualGatewaysKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v20190125.meshes)[':meshName']['virtualGateways']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v20190125.meshes[':meshName'].virtualGateways.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutV20190125MeshesMeshNameVirtualGatewaysKey() {
  return ['v20190125', '/v20190125/meshes/:meshName/virtualGateways', 'PUT'] as const
}

export function usePutV20190125MeshesMeshNameVirtualGateways<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.v20190125.meshes)[':meshName']['virtualGateways']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV20190125MeshesMeshNameVirtualGatewaysKey()
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
            (typeof client.v20190125.meshes)[':meshName']['virtualGateways']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v20190125.meshes[':meshName'].virtualGateways.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV20190125MeshesMeshNameVirtualNodesKey(
  args: InferRequestType<(typeof client.v20190125.meshes)[':meshName']['virtualNodes']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v20190125', '/v20190125/meshes/:meshName/virtualNodes', keyArgs] as const
}

export function useGetV20190125MeshesMeshNameVirtualNodes<TError = unknown>(
  args: InferRequestType<(typeof client.v20190125.meshes)[':meshName']['virtualNodes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v20190125.meshes)[':meshName']['virtualNodes']['$get']>
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
        ? getGetV20190125MeshesMeshNameVirtualNodesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v20190125.meshes)[':meshName']['virtualNodes']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v20190125.meshes[':meshName'].virtualNodes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV20190125MeshesMeshNameVirtualNodes<TError = unknown>(
  args: InferRequestType<(typeof client.v20190125.meshes)[':meshName']['virtualNodes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v20190125.meshes)[':meshName']['virtualNodes']['$get']>
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
        ? getGetV20190125MeshesMeshNameVirtualNodesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v20190125.meshes)[':meshName']['virtualNodes']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v20190125.meshes[':meshName'].virtualNodes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV20190125MeshesMeshNameVirtualNodesKey() {
  return ['v20190125', '/v20190125/meshes/:meshName/virtualNodes', 'PUT'] as const
}

export function usePutV20190125MeshesMeshNameVirtualNodes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v20190125.meshes)[':meshName']['virtualNodes']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v20190125.meshes)[':meshName']['virtualNodes']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV20190125MeshesMeshNameVirtualNodesKey()
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
            (typeof client.v20190125.meshes)[':meshName']['virtualNodes']['$put']
          >
        },
      ) =>
        parseResponse(client.v20190125.meshes[':meshName'].virtualNodes.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV20190125MeshesMeshNameVirtualRoutersKey(
  args: InferRequestType<(typeof client.v20190125.meshes)[':meshName']['virtualRouters']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v20190125', '/v20190125/meshes/:meshName/virtualRouters', keyArgs] as const
}

export function useGetV20190125MeshesMeshNameVirtualRouters<TError = unknown>(
  args: InferRequestType<(typeof client.v20190125.meshes)[':meshName']['virtualRouters']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v20190125.meshes)[':meshName']['virtualRouters']['$get']>
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
        ? getGetV20190125MeshesMeshNameVirtualRoutersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v20190125.meshes)[':meshName']['virtualRouters']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v20190125.meshes[':meshName'].virtualRouters.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV20190125MeshesMeshNameVirtualRouters<TError = unknown>(
  args: InferRequestType<(typeof client.v20190125.meshes)[':meshName']['virtualRouters']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v20190125.meshes)[':meshName']['virtualRouters']['$get']>
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
        ? getGetV20190125MeshesMeshNameVirtualRoutersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v20190125.meshes)[':meshName']['virtualRouters']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v20190125.meshes[':meshName'].virtualRouters.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutV20190125MeshesMeshNameVirtualRoutersKey() {
  return ['v20190125', '/v20190125/meshes/:meshName/virtualRouters', 'PUT'] as const
}

export function usePutV20190125MeshesMeshNameVirtualRouters<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.v20190125.meshes)[':meshName']['virtualRouters']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV20190125MeshesMeshNameVirtualRoutersKey()
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
            (typeof client.v20190125.meshes)[':meshName']['virtualRouters']['$put']
          >
        },
      ) =>
        parseResponse(client.v20190125.meshes[':meshName'].virtualRouters.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV20190125MeshesMeshNameVirtualServicesKey(
  args: InferRequestType<(typeof client.v20190125.meshes)[':meshName']['virtualServices']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v20190125', '/v20190125/meshes/:meshName/virtualServices', keyArgs] as const
}

export function useGetV20190125MeshesMeshNameVirtualServices<TError = unknown>(
  args: InferRequestType<(typeof client.v20190125.meshes)[':meshName']['virtualServices']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v20190125.meshes)[':meshName']['virtualServices']['$get']>
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
        ? getGetV20190125MeshesMeshNameVirtualServicesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v20190125.meshes)[':meshName']['virtualServices']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v20190125.meshes[':meshName'].virtualServices.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV20190125MeshesMeshNameVirtualServices<TError = unknown>(
  args: InferRequestType<(typeof client.v20190125.meshes)[':meshName']['virtualServices']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v20190125.meshes)[':meshName']['virtualServices']['$get']>
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
        ? getGetV20190125MeshesMeshNameVirtualServicesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v20190125.meshes)[':meshName']['virtualServices']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v20190125.meshes[':meshName'].virtualServices.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutV20190125MeshesMeshNameVirtualServicesKey() {
  return ['v20190125', '/v20190125/meshes/:meshName/virtualServices', 'PUT'] as const
}

export function usePutV20190125MeshesMeshNameVirtualServices<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.v20190125.meshes)[':meshName']['virtualServices']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV20190125MeshesMeshNameVirtualServicesKey()
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
            (typeof client.v20190125.meshes)[':meshName']['virtualServices']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v20190125.meshes[':meshName'].virtualServices.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV20190125MeshesMeshNameVirtualGatewayVirtualGatewayNameGatewayRoutesGatewayRouteNameKey(
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

export function useGetV20190125MeshesMeshNameVirtualGatewayVirtualGatewayNameGatewayRoutesGatewayRouteName<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v20190125.meshes)[':meshName']['virtualGateway'][':virtualGatewayName']['gatewayRoutes'][':gatewayRouteName']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV20190125MeshesMeshNameVirtualGatewayVirtualGatewayNameGatewayRoutesGatewayRouteNameKey(
            args,
          )
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v20190125.meshes[':meshName'].virtualGateway[':virtualGatewayName'].gatewayRoutes[
            ':gatewayRouteName'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV20190125MeshesMeshNameVirtualGatewayVirtualGatewayNameGatewayRoutesGatewayRouteName<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v20190125.meshes)[':meshName']['virtualGateway'][':virtualGatewayName']['gatewayRoutes'][':gatewayRouteName']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV20190125MeshesMeshNameVirtualGatewayVirtualGatewayNameGatewayRoutesGatewayRouteNameKey(
            args,
          )
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v20190125.meshes[':meshName'].virtualGateway[':virtualGatewayName'].gatewayRoutes[
            ':gatewayRouteName'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutV20190125MeshesMeshNameVirtualGatewayVirtualGatewayNameGatewayRoutesGatewayRouteNameKey() {
  return [
    'v20190125',
    '/v20190125/meshes/:meshName/virtualGateway/:virtualGatewayName/gatewayRoutes/:gatewayRouteName',
    'PUT',
  ] as const
}

export function usePutV20190125MeshesMeshNameVirtualGatewayVirtualGatewayNameGatewayRoutesGatewayRouteName<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v20190125.meshes)[':meshName']['virtualGateway'][':virtualGatewayName']['gatewayRoutes'][':gatewayRouteName']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPutV20190125MeshesMeshNameVirtualGatewayVirtualGatewayNameGatewayRoutesGatewayRouteNameKey()
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
            (typeof client.v20190125.meshes)[':meshName']['virtualGateway'][':virtualGatewayName']['gatewayRoutes'][':gatewayRouteName']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v20190125.meshes[':meshName'].virtualGateway[':virtualGatewayName'].gatewayRoutes[
            ':gatewayRouteName'
          ].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV20190125MeshesMeshNameVirtualGatewayVirtualGatewayNameGatewayRoutesGatewayRouteNameKey() {
  return [
    'v20190125',
    '/v20190125/meshes/:meshName/virtualGateway/:virtualGatewayName/gatewayRoutes/:gatewayRouteName',
    'DELETE',
  ] as const
}

export function useDeleteV20190125MeshesMeshNameVirtualGatewayVirtualGatewayNameGatewayRoutesGatewayRouteName<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v20190125.meshes)[':meshName']['virtualGateway'][':virtualGatewayName']['gatewayRoutes'][':gatewayRouteName']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getDeleteV20190125MeshesMeshNameVirtualGatewayVirtualGatewayNameGatewayRoutesGatewayRouteNameKey()
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
            (typeof client.v20190125.meshes)[':meshName']['virtualGateway'][':virtualGatewayName']['gatewayRoutes'][':gatewayRouteName']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v20190125.meshes[':meshName'].virtualGateway[':virtualGatewayName'].gatewayRoutes[
            ':gatewayRouteName'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV20190125MeshesMeshNameKey(
  args: InferRequestType<(typeof client.v20190125.meshes)[':meshName']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v20190125', '/v20190125/meshes/:meshName', keyArgs] as const
}

export function useGetV20190125MeshesMeshName<TError = unknown>(
  args: InferRequestType<(typeof client.v20190125.meshes)[':meshName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v20190125.meshes)[':meshName']['$get']>>
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
        ? getGetV20190125MeshesMeshNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v20190125.meshes)[':meshName']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v20190125.meshes[':meshName'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV20190125MeshesMeshName<TError = unknown>(
  args: InferRequestType<(typeof client.v20190125.meshes)[':meshName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v20190125.meshes)[':meshName']['$get']>>
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
        ? getGetV20190125MeshesMeshNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v20190125.meshes)[':meshName']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v20190125.meshes[':meshName'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV20190125MeshesMeshNameKey() {
  return ['v20190125', '/v20190125/meshes/:meshName', 'PUT'] as const
}

export function usePutV20190125MeshesMeshName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v20190125.meshes)[':meshName']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v20190125.meshes)[':meshName']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV20190125MeshesMeshNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v20190125.meshes)[':meshName']['$put']> },
      ) => parseResponse(client.v20190125.meshes[':meshName'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV20190125MeshesMeshNameKey() {
  return ['v20190125', '/v20190125/meshes/:meshName', 'DELETE'] as const
}

export function useDeleteV20190125MeshesMeshName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v20190125.meshes)[':meshName']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v20190125.meshes)[':meshName']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV20190125MeshesMeshNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v20190125.meshes)[':meshName']['$delete']> },
      ) => parseResponse(client.v20190125.meshes[':meshName'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV20190125MeshesMeshNameVirtualRouterVirtualRouterNameRoutesRouteNameKey(
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

export function useGetV20190125MeshesMeshNameVirtualRouterVirtualRouterNameRoutesRouteName<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v20190125.meshes)[':meshName']['virtualRouter'][':virtualRouterName']['routes'][':routeName']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV20190125MeshesMeshNameVirtualRouterVirtualRouterNameRoutesRouteNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v20190125.meshes[':meshName'].virtualRouter[':virtualRouterName'].routes[
            ':routeName'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV20190125MeshesMeshNameVirtualRouterVirtualRouterNameRoutesRouteName<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v20190125.meshes)[':meshName']['virtualRouter'][':virtualRouterName']['routes'][':routeName']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV20190125MeshesMeshNameVirtualRouterVirtualRouterNameRoutesRouteNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v20190125.meshes[':meshName'].virtualRouter[':virtualRouterName'].routes[
            ':routeName'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutV20190125MeshesMeshNameVirtualRouterVirtualRouterNameRoutesRouteNameKey() {
  return [
    'v20190125',
    '/v20190125/meshes/:meshName/virtualRouter/:virtualRouterName/routes/:routeName',
    'PUT',
  ] as const
}

export function usePutV20190125MeshesMeshNameVirtualRouterVirtualRouterNameRoutesRouteName<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v20190125.meshes)[':meshName']['virtualRouter'][':virtualRouterName']['routes'][':routeName']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPutV20190125MeshesMeshNameVirtualRouterVirtualRouterNameRoutesRouteNameKey()
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
            (typeof client.v20190125.meshes)[':meshName']['virtualRouter'][':virtualRouterName']['routes'][':routeName']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v20190125.meshes[':meshName'].virtualRouter[':virtualRouterName'].routes[
            ':routeName'
          ].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV20190125MeshesMeshNameVirtualRouterVirtualRouterNameRoutesRouteNameKey() {
  return [
    'v20190125',
    '/v20190125/meshes/:meshName/virtualRouter/:virtualRouterName/routes/:routeName',
    'DELETE',
  ] as const
}

export function useDeleteV20190125MeshesMeshNameVirtualRouterVirtualRouterNameRoutesRouteName<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v20190125.meshes)[':meshName']['virtualRouter'][':virtualRouterName']['routes'][':routeName']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteV20190125MeshesMeshNameVirtualRouterVirtualRouterNameRoutesRouteNameKey()
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
            (typeof client.v20190125.meshes)[':meshName']['virtualRouter'][':virtualRouterName']['routes'][':routeName']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v20190125.meshes[':meshName'].virtualRouter[':virtualRouterName'].routes[
            ':routeName'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV20190125MeshesMeshNameVirtualGatewaysVirtualGatewayNameKey(
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

export function useGetV20190125MeshesMeshNameVirtualGatewaysVirtualGatewayName<TError = unknown>(
  args: InferRequestType<
    (typeof client.v20190125.meshes)[':meshName']['virtualGateways'][':virtualGatewayName']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV20190125MeshesMeshNameVirtualGatewaysVirtualGatewayNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v20190125.meshes[':meshName'].virtualGateways[':virtualGatewayName'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV20190125MeshesMeshNameVirtualGatewaysVirtualGatewayName<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v20190125.meshes)[':meshName']['virtualGateways'][':virtualGatewayName']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV20190125MeshesMeshNameVirtualGatewaysVirtualGatewayNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v20190125.meshes[':meshName'].virtualGateways[':virtualGatewayName'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutV20190125MeshesMeshNameVirtualGatewaysVirtualGatewayNameKey() {
  return [
    'v20190125',
    '/v20190125/meshes/:meshName/virtualGateways/:virtualGatewayName',
    'PUT',
  ] as const
}

export function usePutV20190125MeshesMeshNameVirtualGatewaysVirtualGatewayName<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v20190125.meshes)[':meshName']['virtualGateways'][':virtualGatewayName']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV20190125MeshesMeshNameVirtualGatewaysVirtualGatewayNameKey()
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
            (typeof client.v20190125.meshes)[':meshName']['virtualGateways'][':virtualGatewayName']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v20190125.meshes[':meshName'].virtualGateways[':virtualGatewayName'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV20190125MeshesMeshNameVirtualGatewaysVirtualGatewayNameKey() {
  return [
    'v20190125',
    '/v20190125/meshes/:meshName/virtualGateways/:virtualGatewayName',
    'DELETE',
  ] as const
}

export function useDeleteV20190125MeshesMeshNameVirtualGatewaysVirtualGatewayName<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v20190125.meshes)[':meshName']['virtualGateways'][':virtualGatewayName']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV20190125MeshesMeshNameVirtualGatewaysVirtualGatewayNameKey()
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
            (typeof client.v20190125.meshes)[':meshName']['virtualGateways'][':virtualGatewayName']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v20190125.meshes[':meshName'].virtualGateways[':virtualGatewayName'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV20190125MeshesMeshNameVirtualNodesVirtualNodeNameKey(
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

export function useGetV20190125MeshesMeshNameVirtualNodesVirtualNodeName<TError = unknown>(
  args: InferRequestType<
    (typeof client.v20190125.meshes)[':meshName']['virtualNodes'][':virtualNodeName']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV20190125MeshesMeshNameVirtualNodesVirtualNodeNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v20190125.meshes[':meshName'].virtualNodes[':virtualNodeName'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV20190125MeshesMeshNameVirtualNodesVirtualNodeName<TError = unknown>(
  args: InferRequestType<
    (typeof client.v20190125.meshes)[':meshName']['virtualNodes'][':virtualNodeName']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV20190125MeshesMeshNameVirtualNodesVirtualNodeNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v20190125.meshes[':meshName'].virtualNodes[':virtualNodeName'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutV20190125MeshesMeshNameVirtualNodesVirtualNodeNameKey() {
  return ['v20190125', '/v20190125/meshes/:meshName/virtualNodes/:virtualNodeName', 'PUT'] as const
}

export function usePutV20190125MeshesMeshNameVirtualNodesVirtualNodeName<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v20190125.meshes)[':meshName']['virtualNodes'][':virtualNodeName']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV20190125MeshesMeshNameVirtualNodesVirtualNodeNameKey()
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
            (typeof client.v20190125.meshes)[':meshName']['virtualNodes'][':virtualNodeName']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v20190125.meshes[':meshName'].virtualNodes[':virtualNodeName'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV20190125MeshesMeshNameVirtualNodesVirtualNodeNameKey() {
  return [
    'v20190125',
    '/v20190125/meshes/:meshName/virtualNodes/:virtualNodeName',
    'DELETE',
  ] as const
}

export function useDeleteV20190125MeshesMeshNameVirtualNodesVirtualNodeName<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v20190125.meshes)[':meshName']['virtualNodes'][':virtualNodeName']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV20190125MeshesMeshNameVirtualNodesVirtualNodeNameKey()
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
            (typeof client.v20190125.meshes)[':meshName']['virtualNodes'][':virtualNodeName']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v20190125.meshes[':meshName'].virtualNodes[':virtualNodeName'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV20190125MeshesMeshNameVirtualRoutersVirtualRouterNameKey(
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

export function useGetV20190125MeshesMeshNameVirtualRoutersVirtualRouterName<TError = unknown>(
  args: InferRequestType<
    (typeof client.v20190125.meshes)[':meshName']['virtualRouters'][':virtualRouterName']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV20190125MeshesMeshNameVirtualRoutersVirtualRouterNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v20190125.meshes[':meshName'].virtualRouters[':virtualRouterName'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV20190125MeshesMeshNameVirtualRoutersVirtualRouterName<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v20190125.meshes)[':meshName']['virtualRouters'][':virtualRouterName']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV20190125MeshesMeshNameVirtualRoutersVirtualRouterNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v20190125.meshes[':meshName'].virtualRouters[':virtualRouterName'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutV20190125MeshesMeshNameVirtualRoutersVirtualRouterNameKey() {
  return [
    'v20190125',
    '/v20190125/meshes/:meshName/virtualRouters/:virtualRouterName',
    'PUT',
  ] as const
}

export function usePutV20190125MeshesMeshNameVirtualRoutersVirtualRouterName<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v20190125.meshes)[':meshName']['virtualRouters'][':virtualRouterName']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV20190125MeshesMeshNameVirtualRoutersVirtualRouterNameKey()
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
            (typeof client.v20190125.meshes)[':meshName']['virtualRouters'][':virtualRouterName']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v20190125.meshes[':meshName'].virtualRouters[':virtualRouterName'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV20190125MeshesMeshNameVirtualRoutersVirtualRouterNameKey() {
  return [
    'v20190125',
    '/v20190125/meshes/:meshName/virtualRouters/:virtualRouterName',
    'DELETE',
  ] as const
}

export function useDeleteV20190125MeshesMeshNameVirtualRoutersVirtualRouterName<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v20190125.meshes)[':meshName']['virtualRouters'][':virtualRouterName']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV20190125MeshesMeshNameVirtualRoutersVirtualRouterNameKey()
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
            (typeof client.v20190125.meshes)[':meshName']['virtualRouters'][':virtualRouterName']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v20190125.meshes[':meshName'].virtualRouters[':virtualRouterName'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV20190125MeshesMeshNameVirtualServicesVirtualServiceNameKey(
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

export function useGetV20190125MeshesMeshNameVirtualServicesVirtualServiceName<TError = unknown>(
  args: InferRequestType<
    (typeof client.v20190125.meshes)[':meshName']['virtualServices'][':virtualServiceName']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV20190125MeshesMeshNameVirtualServicesVirtualServiceNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v20190125.meshes[':meshName'].virtualServices[':virtualServiceName'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV20190125MeshesMeshNameVirtualServicesVirtualServiceName<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v20190125.meshes)[':meshName']['virtualServices'][':virtualServiceName']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetV20190125MeshesMeshNameVirtualServicesVirtualServiceNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v20190125.meshes[':meshName'].virtualServices[':virtualServiceName'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutV20190125MeshesMeshNameVirtualServicesVirtualServiceNameKey() {
  return [
    'v20190125',
    '/v20190125/meshes/:meshName/virtualServices/:virtualServiceName',
    'PUT',
  ] as const
}

export function usePutV20190125MeshesMeshNameVirtualServicesVirtualServiceName<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v20190125.meshes)[':meshName']['virtualServices'][':virtualServiceName']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV20190125MeshesMeshNameVirtualServicesVirtualServiceNameKey()
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
            (typeof client.v20190125.meshes)[':meshName']['virtualServices'][':virtualServiceName']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v20190125.meshes[':meshName'].virtualServices[':virtualServiceName'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV20190125MeshesMeshNameVirtualServicesVirtualServiceNameKey() {
  return [
    'v20190125',
    '/v20190125/meshes/:meshName/virtualServices/:virtualServiceName',
    'DELETE',
  ] as const
}

export function useDeleteV20190125MeshesMeshNameVirtualServicesVirtualServiceName<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v20190125.meshes)[':meshName']['virtualServices'][':virtualServiceName']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV20190125MeshesMeshNameVirtualServicesVirtualServiceNameKey()
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
            (typeof client.v20190125.meshes)[':meshName']['virtualServices'][':virtualServiceName']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v20190125.meshes[':meshName'].virtualServices[':virtualServiceName'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV20190125TagsResourceArnKey(
  args: InferRequestType<(typeof client.v20190125)['tags#resourceArn']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v20190125', '/v20190125/tags#resourceArn', keyArgs] as const
}

export function useGetV20190125TagsResourceArn<TError = unknown>(
  args: InferRequestType<(typeof client.v20190125)['tags#resourceArn']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v20190125)['tags#resourceArn']['$get']>>
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
        ? getGetV20190125TagsResourceArnKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v20190125)['tags#resourceArn']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v20190125['tags#resourceArn'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV20190125TagsResourceArn<TError = unknown>(
  args: InferRequestType<(typeof client.v20190125)['tags#resourceArn']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v20190125)['tags#resourceArn']['$get']>>
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
        ? getGetV20190125TagsResourceArnKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v20190125)['tags#resourceArn']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v20190125['tags#resourceArn'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV20190125TagResourceArnKey() {
  return ['v20190125', '/v20190125/tag#resourceArn', 'PUT'] as const
}

export function usePutV20190125TagResourceArn<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v20190125)['tag#resourceArn']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v20190125)['tag#resourceArn']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV20190125TagResourceArnKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v20190125)['tag#resourceArn']['$put']> },
      ) => parseResponse(client.v20190125['tag#resourceArn'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutV20190125UntagResourceArnKey() {
  return ['v20190125', '/v20190125/untag#resourceArn', 'PUT'] as const
}

export function usePutV20190125UntagResourceArn<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v20190125)['untag#resourceArn']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v20190125)['untag#resourceArn']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV20190125UntagResourceArnKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v20190125)['untag#resourceArn']['$put']> },
      ) => parseResponse(client.v20190125['untag#resourceArn'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
