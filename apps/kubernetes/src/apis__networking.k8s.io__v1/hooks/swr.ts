import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getApisKey() {
  return ['apis'] as const
}

export function getGetApisNetworkingK8sIoV1IndexKey() {
  return ['apis', '/apis/networking.k8s.io/v1/'] as const
}

export function useGetApisNetworkingK8sIoV1Index<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apis)['networking.k8s.io']['v1']['index']['$get']>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApisNetworkingK8sIoV1IndexKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apis)['networking.k8s.io']['v1']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.apis['networking.k8s.io'].v1.index.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisNetworkingK8sIoV1Index<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apis)['networking.k8s.io']['v1']['index']['$get']>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApisNetworkingK8sIoV1IndexKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apis)['networking.k8s.io']['v1']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.apis['networking.k8s.io'].v1.index.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApisNetworkingK8sIoV1IngressclassesKey(
  args: InferRequestType<(typeof client.apis)['networking.k8s.io']['v1']['ingressclasses']['$get']>,
) {
  return ['apis', '/apis/networking.k8s.io/v1/ingressclasses', args] as const
}

export function useGetApisNetworkingK8sIoV1Ingressclasses<TError = unknown>(
  args: InferRequestType<(typeof client.apis)['networking.k8s.io']['v1']['ingressclasses']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.apis)['networking.k8s.io']['v1']['ingressclasses']['$get']>
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
        ? getGetApisNetworkingK8sIoV1IngressclassesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.apis)['networking.k8s.io']['v1']['ingressclasses']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.apis['networking.k8s.io'].v1.ingressclasses.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisNetworkingK8sIoV1Ingressclasses<TError = unknown>(
  args: InferRequestType<(typeof client.apis)['networking.k8s.io']['v1']['ingressclasses']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.apis)['networking.k8s.io']['v1']['ingressclasses']['$get']>
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
        ? getGetApisNetworkingK8sIoV1IngressclassesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.apis)['networking.k8s.io']['v1']['ingressclasses']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.apis['networking.k8s.io'].v1.ingressclasses.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApisNetworkingK8sIoV1IngressclassesKey() {
  return ['apis', '/apis/networking.k8s.io/v1/ingressclasses', 'POST'] as const
}

export function usePostApisNetworkingK8sIoV1Ingressclasses<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.apis)['networking.k8s.io']['v1']['ingressclasses']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.apis)['networking.k8s.io']['v1']['ingressclasses']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApisNetworkingK8sIoV1IngressclassesKey()
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
            (typeof client.apis)['networking.k8s.io']['v1']['ingressclasses']['$post']
          >
        },
      ) =>
        parseResponse(client.apis['networking.k8s.io'].v1.ingressclasses.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApisNetworkingK8sIoV1IngressclassesKey() {
  return ['apis', '/apis/networking.k8s.io/v1/ingressclasses', 'DELETE'] as const
}

export function useDeleteApisNetworkingK8sIoV1Ingressclasses<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.apis)['networking.k8s.io']['v1']['ingressclasses']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.apis)['networking.k8s.io']['v1']['ingressclasses']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApisNetworkingK8sIoV1IngressclassesKey()
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
            (typeof client.apis)['networking.k8s.io']['v1']['ingressclasses']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.apis['networking.k8s.io'].v1.ingressclasses.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApisNetworkingK8sIoV1IngressclassesNameKey(
  args: InferRequestType<
    (typeof client.apis)['networking.k8s.io']['v1']['ingressclasses'][':name']['$get']
  >,
) {
  return ['apis', '/apis/networking.k8s.io/v1/ingressclasses/:name', args] as const
}

export function useGetApisNetworkingK8sIoV1IngressclassesName<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis)['networking.k8s.io']['v1']['ingressclasses'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)['networking.k8s.io']['v1']['ingressclasses'][':name']['$get']
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
        ? getGetApisNetworkingK8sIoV1IngressclassesNameKey(args)
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
                (typeof client.apis)['networking.k8s.io']['v1']['ingressclasses'][':name']['$get']
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
          client.apis['networking.k8s.io'].v1.ingressclasses[':name'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisNetworkingK8sIoV1IngressclassesName<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis)['networking.k8s.io']['v1']['ingressclasses'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)['networking.k8s.io']['v1']['ingressclasses'][':name']['$get']
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
        ? getGetApisNetworkingK8sIoV1IngressclassesNameKey(args)
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
                (typeof client.apis)['networking.k8s.io']['v1']['ingressclasses'][':name']['$get']
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
          client.apis['networking.k8s.io'].v1.ingressclasses[':name'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutApisNetworkingK8sIoV1IngressclassesNameKey() {
  return ['apis', '/apis/networking.k8s.io/v1/ingressclasses/:name', 'PUT'] as const
}

export function usePutApisNetworkingK8sIoV1IngressclassesName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['networking.k8s.io']['v1']['ingressclasses'][':name']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.apis)['networking.k8s.io']['v1']['ingressclasses'][':name']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApisNetworkingK8sIoV1IngressclassesNameKey()
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
            (typeof client.apis)['networking.k8s.io']['v1']['ingressclasses'][':name']['$put']
          >
        },
      ) =>
        parseResponse(
          client.apis['networking.k8s.io'].v1.ingressclasses[':name'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApisNetworkingK8sIoV1IngressclassesNameKey() {
  return ['apis', '/apis/networking.k8s.io/v1/ingressclasses/:name', 'DELETE'] as const
}

export function useDeleteApisNetworkingK8sIoV1IngressclassesName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['networking.k8s.io']['v1']['ingressclasses'][':name']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.apis)['networking.k8s.io']['v1']['ingressclasses'][':name']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApisNetworkingK8sIoV1IngressclassesNameKey()
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
            (typeof client.apis)['networking.k8s.io']['v1']['ingressclasses'][':name']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.apis['networking.k8s.io'].v1.ingressclasses[':name'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchApisNetworkingK8sIoV1IngressclassesNameKey() {
  return ['apis', '/apis/networking.k8s.io/v1/ingressclasses/:name', 'PATCH'] as const
}

export function usePatchApisNetworkingK8sIoV1IngressclassesName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['networking.k8s.io']['v1']['ingressclasses'][':name']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.apis)['networking.k8s.io']['v1']['ingressclasses'][':name']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApisNetworkingK8sIoV1IngressclassesNameKey()
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
            (typeof client.apis)['networking.k8s.io']['v1']['ingressclasses'][':name']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.apis['networking.k8s.io'].v1.ingressclasses[':name'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApisNetworkingK8sIoV1IngressesKey(
  args: InferRequestType<(typeof client.apis)['networking.k8s.io']['v1']['ingresses']['$get']>,
) {
  return ['apis', '/apis/networking.k8s.io/v1/ingresses', args] as const
}

export function useGetApisNetworkingK8sIoV1Ingresses<TError = unknown>(
  args: InferRequestType<(typeof client.apis)['networking.k8s.io']['v1']['ingresses']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.apis)['networking.k8s.io']['v1']['ingresses']['$get']>
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
        ? getGetApisNetworkingK8sIoV1IngressesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.apis)['networking.k8s.io']['v1']['ingresses']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.apis['networking.k8s.io'].v1.ingresses.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisNetworkingK8sIoV1Ingresses<TError = unknown>(
  args: InferRequestType<(typeof client.apis)['networking.k8s.io']['v1']['ingresses']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.apis)['networking.k8s.io']['v1']['ingresses']['$get']>
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
        ? getGetApisNetworkingK8sIoV1IngressesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.apis)['networking.k8s.io']['v1']['ingresses']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.apis['networking.k8s.io'].v1.ingresses.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApisNetworkingK8sIoV1IpaddressesKey(
  args: InferRequestType<(typeof client.apis)['networking.k8s.io']['v1']['ipaddresses']['$get']>,
) {
  return ['apis', '/apis/networking.k8s.io/v1/ipaddresses', args] as const
}

export function useGetApisNetworkingK8sIoV1Ipaddresses<TError = unknown>(
  args: InferRequestType<(typeof client.apis)['networking.k8s.io']['v1']['ipaddresses']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.apis)['networking.k8s.io']['v1']['ipaddresses']['$get']>
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
        ? getGetApisNetworkingK8sIoV1IpaddressesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.apis)['networking.k8s.io']['v1']['ipaddresses']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.apis['networking.k8s.io'].v1.ipaddresses.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisNetworkingK8sIoV1Ipaddresses<TError = unknown>(
  args: InferRequestType<(typeof client.apis)['networking.k8s.io']['v1']['ipaddresses']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.apis)['networking.k8s.io']['v1']['ipaddresses']['$get']>
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
        ? getGetApisNetworkingK8sIoV1IpaddressesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.apis)['networking.k8s.io']['v1']['ipaddresses']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.apis['networking.k8s.io'].v1.ipaddresses.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApisNetworkingK8sIoV1IpaddressesKey() {
  return ['apis', '/apis/networking.k8s.io/v1/ipaddresses', 'POST'] as const
}

export function usePostApisNetworkingK8sIoV1Ipaddresses<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.apis)['networking.k8s.io']['v1']['ipaddresses']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.apis)['networking.k8s.io']['v1']['ipaddresses']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApisNetworkingK8sIoV1IpaddressesKey()
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
            (typeof client.apis)['networking.k8s.io']['v1']['ipaddresses']['$post']
          >
        },
      ) => parseResponse(client.apis['networking.k8s.io'].v1.ipaddresses.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApisNetworkingK8sIoV1IpaddressesKey() {
  return ['apis', '/apis/networking.k8s.io/v1/ipaddresses', 'DELETE'] as const
}

export function useDeleteApisNetworkingK8sIoV1Ipaddresses<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.apis)['networking.k8s.io']['v1']['ipaddresses']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.apis)['networking.k8s.io']['v1']['ipaddresses']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApisNetworkingK8sIoV1IpaddressesKey()
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
            (typeof client.apis)['networking.k8s.io']['v1']['ipaddresses']['$delete']
          >
        },
      ) =>
        parseResponse(client.apis['networking.k8s.io'].v1.ipaddresses.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApisNetworkingK8sIoV1IpaddressesNameKey(
  args: InferRequestType<
    (typeof client.apis)['networking.k8s.io']['v1']['ipaddresses'][':name']['$get']
  >,
) {
  return ['apis', '/apis/networking.k8s.io/v1/ipaddresses/:name', args] as const
}

export function useGetApisNetworkingK8sIoV1IpaddressesName<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis)['networking.k8s.io']['v1']['ipaddresses'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)['networking.k8s.io']['v1']['ipaddresses'][':name']['$get']
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
        ? getGetApisNetworkingK8sIoV1IpaddressesNameKey(args)
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
                (typeof client.apis)['networking.k8s.io']['v1']['ipaddresses'][':name']['$get']
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
          client.apis['networking.k8s.io'].v1.ipaddresses[':name'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisNetworkingK8sIoV1IpaddressesName<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis)['networking.k8s.io']['v1']['ipaddresses'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)['networking.k8s.io']['v1']['ipaddresses'][':name']['$get']
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
        ? getGetApisNetworkingK8sIoV1IpaddressesNameKey(args)
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
                (typeof client.apis)['networking.k8s.io']['v1']['ipaddresses'][':name']['$get']
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
          client.apis['networking.k8s.io'].v1.ipaddresses[':name'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutApisNetworkingK8sIoV1IpaddressesNameKey() {
  return ['apis', '/apis/networking.k8s.io/v1/ipaddresses/:name', 'PUT'] as const
}

export function usePutApisNetworkingK8sIoV1IpaddressesName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['networking.k8s.io']['v1']['ipaddresses'][':name']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.apis)['networking.k8s.io']['v1']['ipaddresses'][':name']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApisNetworkingK8sIoV1IpaddressesNameKey()
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
            (typeof client.apis)['networking.k8s.io']['v1']['ipaddresses'][':name']['$put']
          >
        },
      ) =>
        parseResponse(
          client.apis['networking.k8s.io'].v1.ipaddresses[':name'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApisNetworkingK8sIoV1IpaddressesNameKey() {
  return ['apis', '/apis/networking.k8s.io/v1/ipaddresses/:name', 'DELETE'] as const
}

export function useDeleteApisNetworkingK8sIoV1IpaddressesName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['networking.k8s.io']['v1']['ipaddresses'][':name']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.apis)['networking.k8s.io']['v1']['ipaddresses'][':name']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApisNetworkingK8sIoV1IpaddressesNameKey()
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
            (typeof client.apis)['networking.k8s.io']['v1']['ipaddresses'][':name']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.apis['networking.k8s.io'].v1.ipaddresses[':name'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchApisNetworkingK8sIoV1IpaddressesNameKey() {
  return ['apis', '/apis/networking.k8s.io/v1/ipaddresses/:name', 'PATCH'] as const
}

export function usePatchApisNetworkingK8sIoV1IpaddressesName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['networking.k8s.io']['v1']['ipaddresses'][':name']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.apis)['networking.k8s.io']['v1']['ipaddresses'][':name']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApisNetworkingK8sIoV1IpaddressesNameKey()
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
            (typeof client.apis)['networking.k8s.io']['v1']['ipaddresses'][':name']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.apis['networking.k8s.io'].v1.ipaddresses[':name'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApisNetworkingK8sIoV1NamespacesNamespaceIngressesKey(
  args: InferRequestType<
    (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['ingresses']['$get']
  >,
) {
  return ['apis', '/apis/networking.k8s.io/v1/namespaces/:namespace/ingresses', args] as const
}

export function useGetApisNetworkingK8sIoV1NamespacesNamespaceIngresses<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['ingresses']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['ingresses']['$get']
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
        ? getGetApisNetworkingK8sIoV1NamespacesNamespaceIngressesKey(args)
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
                (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['ingresses']['$get']
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
          client.apis['networking.k8s.io'].v1.namespaces[':namespace'].ingresses.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisNetworkingK8sIoV1NamespacesNamespaceIngresses<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['ingresses']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['ingresses']['$get']
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
        ? getGetApisNetworkingK8sIoV1NamespacesNamespaceIngressesKey(args)
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
                (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['ingresses']['$get']
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
          client.apis['networking.k8s.io'].v1.namespaces[':namespace'].ingresses.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApisNetworkingK8sIoV1NamespacesNamespaceIngressesKey() {
  return ['apis', '/apis/networking.k8s.io/v1/namespaces/:namespace/ingresses', 'POST'] as const
}

export function usePostApisNetworkingK8sIoV1NamespacesNamespaceIngresses<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['ingresses']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['ingresses']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApisNetworkingK8sIoV1NamespacesNamespaceIngressesKey()
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
            (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['ingresses']['$post']
          >
        },
      ) =>
        parseResponse(
          client.apis['networking.k8s.io'].v1.namespaces[':namespace'].ingresses.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApisNetworkingK8sIoV1NamespacesNamespaceIngressesKey() {
  return ['apis', '/apis/networking.k8s.io/v1/namespaces/:namespace/ingresses', 'DELETE'] as const
}

export function useDeleteApisNetworkingK8sIoV1NamespacesNamespaceIngresses<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['ingresses']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['ingresses']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApisNetworkingK8sIoV1NamespacesNamespaceIngressesKey()
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
            (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['ingresses']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.apis['networking.k8s.io'].v1.namespaces[':namespace'].ingresses.$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApisNetworkingK8sIoV1NamespacesNamespaceIngressesNameKey(
  args: InferRequestType<
    (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['ingresses'][':name']['$get']
  >,
) {
  return ['apis', '/apis/networking.k8s.io/v1/namespaces/:namespace/ingresses/:name', args] as const
}

export function useGetApisNetworkingK8sIoV1NamespacesNamespaceIngressesName<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['ingresses'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['ingresses'][':name']['$get']
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
        ? getGetApisNetworkingK8sIoV1NamespacesNamespaceIngressesNameKey(args)
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
                (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['ingresses'][':name']['$get']
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
          client.apis['networking.k8s.io'].v1.namespaces[':namespace'].ingresses[':name'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisNetworkingK8sIoV1NamespacesNamespaceIngressesName<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['ingresses'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['ingresses'][':name']['$get']
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
        ? getGetApisNetworkingK8sIoV1NamespacesNamespaceIngressesNameKey(args)
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
                (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['ingresses'][':name']['$get']
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
          client.apis['networking.k8s.io'].v1.namespaces[':namespace'].ingresses[':name'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutApisNetworkingK8sIoV1NamespacesNamespaceIngressesNameKey() {
  return [
    'apis',
    '/apis/networking.k8s.io/v1/namespaces/:namespace/ingresses/:name',
    'PUT',
  ] as const
}

export function usePutApisNetworkingK8sIoV1NamespacesNamespaceIngressesName<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['ingresses'][':name']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['ingresses'][':name']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApisNetworkingK8sIoV1NamespacesNamespaceIngressesNameKey()
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
            (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['ingresses'][':name']['$put']
          >
        },
      ) =>
        parseResponse(
          client.apis['networking.k8s.io'].v1.namespaces[':namespace'].ingresses[':name'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApisNetworkingK8sIoV1NamespacesNamespaceIngressesNameKey() {
  return [
    'apis',
    '/apis/networking.k8s.io/v1/namespaces/:namespace/ingresses/:name',
    'DELETE',
  ] as const
}

export function useDeleteApisNetworkingK8sIoV1NamespacesNamespaceIngressesName<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['ingresses'][':name']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['ingresses'][':name']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApisNetworkingK8sIoV1NamespacesNamespaceIngressesNameKey()
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
            (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['ingresses'][':name']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.apis['networking.k8s.io'].v1.namespaces[':namespace'].ingresses[':name'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchApisNetworkingK8sIoV1NamespacesNamespaceIngressesNameKey() {
  return [
    'apis',
    '/apis/networking.k8s.io/v1/namespaces/:namespace/ingresses/:name',
    'PATCH',
  ] as const
}

export function usePatchApisNetworkingK8sIoV1NamespacesNamespaceIngressesName<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['ingresses'][':name']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['ingresses'][':name']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApisNetworkingK8sIoV1NamespacesNamespaceIngressesNameKey()
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
            (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['ingresses'][':name']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.apis['networking.k8s.io'].v1.namespaces[':namespace'].ingresses[':name'].$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApisNetworkingK8sIoV1NamespacesNamespaceIngressesNameStatusKey(
  args: InferRequestType<
    (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['ingresses'][':name']['status']['$get']
  >,
) {
  return [
    'apis',
    '/apis/networking.k8s.io/v1/namespaces/:namespace/ingresses/:name/status',
    args,
  ] as const
}

export function useGetApisNetworkingK8sIoV1NamespacesNamespaceIngressesNameStatus<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['ingresses'][':name']['status']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['ingresses'][':name']['status']['$get']
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
        ? getGetApisNetworkingK8sIoV1NamespacesNamespaceIngressesNameStatusKey(args)
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
                (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['ingresses'][':name']['status']['$get']
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
          client.apis['networking.k8s.io'].v1.namespaces[':namespace'].ingresses[
            ':name'
          ].status.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisNetworkingK8sIoV1NamespacesNamespaceIngressesNameStatus<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['ingresses'][':name']['status']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['ingresses'][':name']['status']['$get']
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
        ? getGetApisNetworkingK8sIoV1NamespacesNamespaceIngressesNameStatusKey(args)
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
                (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['ingresses'][':name']['status']['$get']
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
          client.apis['networking.k8s.io'].v1.namespaces[':namespace'].ingresses[
            ':name'
          ].status.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutApisNetworkingK8sIoV1NamespacesNamespaceIngressesNameStatusKey() {
  return [
    'apis',
    '/apis/networking.k8s.io/v1/namespaces/:namespace/ingresses/:name/status',
    'PUT',
  ] as const
}

export function usePutApisNetworkingK8sIoV1NamespacesNamespaceIngressesNameStatus<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['ingresses'][':name']['status']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['ingresses'][':name']['status']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApisNetworkingK8sIoV1NamespacesNamespaceIngressesNameStatusKey()
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
            (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['ingresses'][':name']['status']['$put']
          >
        },
      ) =>
        parseResponse(
          client.apis['networking.k8s.io'].v1.namespaces[':namespace'].ingresses[
            ':name'
          ].status.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchApisNetworkingK8sIoV1NamespacesNamespaceIngressesNameStatusKey() {
  return [
    'apis',
    '/apis/networking.k8s.io/v1/namespaces/:namespace/ingresses/:name/status',
    'PATCH',
  ] as const
}

export function usePatchApisNetworkingK8sIoV1NamespacesNamespaceIngressesNameStatus<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['ingresses'][':name']['status']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['ingresses'][':name']['status']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPatchApisNetworkingK8sIoV1NamespacesNamespaceIngressesNameStatusKey()
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
            (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['ingresses'][':name']['status']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.apis['networking.k8s.io'].v1.namespaces[':namespace'].ingresses[
            ':name'
          ].status.$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApisNetworkingK8sIoV1NamespacesNamespaceNetworkpoliciesKey(
  args: InferRequestType<
    (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['networkpolicies']['$get']
  >,
) {
  return ['apis', '/apis/networking.k8s.io/v1/namespaces/:namespace/networkpolicies', args] as const
}

export function useGetApisNetworkingK8sIoV1NamespacesNamespaceNetworkpolicies<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['networkpolicies']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['networkpolicies']['$get']
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
        ? getGetApisNetworkingK8sIoV1NamespacesNamespaceNetworkpoliciesKey(args)
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
                (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['networkpolicies']['$get']
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
          client.apis['networking.k8s.io'].v1.namespaces[':namespace'].networkpolicies.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisNetworkingK8sIoV1NamespacesNamespaceNetworkpolicies<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['networkpolicies']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['networkpolicies']['$get']
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
        ? getGetApisNetworkingK8sIoV1NamespacesNamespaceNetworkpoliciesKey(args)
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
                (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['networkpolicies']['$get']
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
          client.apis['networking.k8s.io'].v1.namespaces[':namespace'].networkpolicies.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApisNetworkingK8sIoV1NamespacesNamespaceNetworkpoliciesKey() {
  return [
    'apis',
    '/apis/networking.k8s.io/v1/namespaces/:namespace/networkpolicies',
    'POST',
  ] as const
}

export function usePostApisNetworkingK8sIoV1NamespacesNamespaceNetworkpolicies<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['networkpolicies']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['networkpolicies']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApisNetworkingK8sIoV1NamespacesNamespaceNetworkpoliciesKey()
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
            (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['networkpolicies']['$post']
          >
        },
      ) =>
        parseResponse(
          client.apis['networking.k8s.io'].v1.namespaces[':namespace'].networkpolicies.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApisNetworkingK8sIoV1NamespacesNamespaceNetworkpoliciesKey() {
  return [
    'apis',
    '/apis/networking.k8s.io/v1/namespaces/:namespace/networkpolicies',
    'DELETE',
  ] as const
}

export function useDeleteApisNetworkingK8sIoV1NamespacesNamespaceNetworkpolicies<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['networkpolicies']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['networkpolicies']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApisNetworkingK8sIoV1NamespacesNamespaceNetworkpoliciesKey()
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
            (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['networkpolicies']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.apis['networking.k8s.io'].v1.namespaces[':namespace'].networkpolicies.$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApisNetworkingK8sIoV1NamespacesNamespaceNetworkpoliciesNameKey(
  args: InferRequestType<
    (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['networkpolicies'][':name']['$get']
  >,
) {
  return [
    'apis',
    '/apis/networking.k8s.io/v1/namespaces/:namespace/networkpolicies/:name',
    args,
  ] as const
}

export function useGetApisNetworkingK8sIoV1NamespacesNamespaceNetworkpoliciesName<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['networkpolicies'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['networkpolicies'][':name']['$get']
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
        ? getGetApisNetworkingK8sIoV1NamespacesNamespaceNetworkpoliciesNameKey(args)
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
                (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['networkpolicies'][':name']['$get']
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
          client.apis['networking.k8s.io'].v1.namespaces[':namespace'].networkpolicies[
            ':name'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisNetworkingK8sIoV1NamespacesNamespaceNetworkpoliciesName<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['networkpolicies'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['networkpolicies'][':name']['$get']
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
        ? getGetApisNetworkingK8sIoV1NamespacesNamespaceNetworkpoliciesNameKey(args)
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
                (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['networkpolicies'][':name']['$get']
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
          client.apis['networking.k8s.io'].v1.namespaces[':namespace'].networkpolicies[
            ':name'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutApisNetworkingK8sIoV1NamespacesNamespaceNetworkpoliciesNameKey() {
  return [
    'apis',
    '/apis/networking.k8s.io/v1/namespaces/:namespace/networkpolicies/:name',
    'PUT',
  ] as const
}

export function usePutApisNetworkingK8sIoV1NamespacesNamespaceNetworkpoliciesName<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['networkpolicies'][':name']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['networkpolicies'][':name']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApisNetworkingK8sIoV1NamespacesNamespaceNetworkpoliciesNameKey()
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
            (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['networkpolicies'][':name']['$put']
          >
        },
      ) =>
        parseResponse(
          client.apis['networking.k8s.io'].v1.namespaces[':namespace'].networkpolicies[
            ':name'
          ].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApisNetworkingK8sIoV1NamespacesNamespaceNetworkpoliciesNameKey() {
  return [
    'apis',
    '/apis/networking.k8s.io/v1/namespaces/:namespace/networkpolicies/:name',
    'DELETE',
  ] as const
}

export function useDeleteApisNetworkingK8sIoV1NamespacesNamespaceNetworkpoliciesName<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['networkpolicies'][':name']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['networkpolicies'][':name']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteApisNetworkingK8sIoV1NamespacesNamespaceNetworkpoliciesNameKey()
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
            (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['networkpolicies'][':name']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.apis['networking.k8s.io'].v1.namespaces[':namespace'].networkpolicies[
            ':name'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchApisNetworkingK8sIoV1NamespacesNamespaceNetworkpoliciesNameKey() {
  return [
    'apis',
    '/apis/networking.k8s.io/v1/namespaces/:namespace/networkpolicies/:name',
    'PATCH',
  ] as const
}

export function usePatchApisNetworkingK8sIoV1NamespacesNamespaceNetworkpoliciesName<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['networkpolicies'][':name']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['networkpolicies'][':name']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPatchApisNetworkingK8sIoV1NamespacesNamespaceNetworkpoliciesNameKey()
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
            (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['networkpolicies'][':name']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.apis['networking.k8s.io'].v1.namespaces[':namespace'].networkpolicies[
            ':name'
          ].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApisNetworkingK8sIoV1NetworkpoliciesKey(
  args: InferRequestType<
    (typeof client.apis)['networking.k8s.io']['v1']['networkpolicies']['$get']
  >,
) {
  return ['apis', '/apis/networking.k8s.io/v1/networkpolicies', args] as const
}

export function useGetApisNetworkingK8sIoV1Networkpolicies<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis)['networking.k8s.io']['v1']['networkpolicies']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.apis)['networking.k8s.io']['v1']['networkpolicies']['$get']>
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
        ? getGetApisNetworkingK8sIoV1NetworkpoliciesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.apis)['networking.k8s.io']['v1']['networkpolicies']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.apis['networking.k8s.io'].v1.networkpolicies.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisNetworkingK8sIoV1Networkpolicies<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis)['networking.k8s.io']['v1']['networkpolicies']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.apis)['networking.k8s.io']['v1']['networkpolicies']['$get']>
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
        ? getGetApisNetworkingK8sIoV1NetworkpoliciesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.apis)['networking.k8s.io']['v1']['networkpolicies']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.apis['networking.k8s.io'].v1.networkpolicies.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApisNetworkingK8sIoV1ServicecidrsKey(
  args: InferRequestType<(typeof client.apis)['networking.k8s.io']['v1']['servicecidrs']['$get']>,
) {
  return ['apis', '/apis/networking.k8s.io/v1/servicecidrs', args] as const
}

export function useGetApisNetworkingK8sIoV1Servicecidrs<TError = unknown>(
  args: InferRequestType<(typeof client.apis)['networking.k8s.io']['v1']['servicecidrs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.apis)['networking.k8s.io']['v1']['servicecidrs']['$get']>
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
        ? getGetApisNetworkingK8sIoV1ServicecidrsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.apis)['networking.k8s.io']['v1']['servicecidrs']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.apis['networking.k8s.io'].v1.servicecidrs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisNetworkingK8sIoV1Servicecidrs<TError = unknown>(
  args: InferRequestType<(typeof client.apis)['networking.k8s.io']['v1']['servicecidrs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.apis)['networking.k8s.io']['v1']['servicecidrs']['$get']>
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
        ? getGetApisNetworkingK8sIoV1ServicecidrsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.apis)['networking.k8s.io']['v1']['servicecidrs']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.apis['networking.k8s.io'].v1.servicecidrs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApisNetworkingK8sIoV1ServicecidrsKey() {
  return ['apis', '/apis/networking.k8s.io/v1/servicecidrs', 'POST'] as const
}

export function usePostApisNetworkingK8sIoV1Servicecidrs<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.apis)['networking.k8s.io']['v1']['servicecidrs']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.apis)['networking.k8s.io']['v1']['servicecidrs']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApisNetworkingK8sIoV1ServicecidrsKey()
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
            (typeof client.apis)['networking.k8s.io']['v1']['servicecidrs']['$post']
          >
        },
      ) =>
        parseResponse(client.apis['networking.k8s.io'].v1.servicecidrs.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApisNetworkingK8sIoV1ServicecidrsKey() {
  return ['apis', '/apis/networking.k8s.io/v1/servicecidrs', 'DELETE'] as const
}

export function useDeleteApisNetworkingK8sIoV1Servicecidrs<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.apis)['networking.k8s.io']['v1']['servicecidrs']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.apis)['networking.k8s.io']['v1']['servicecidrs']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApisNetworkingK8sIoV1ServicecidrsKey()
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
            (typeof client.apis)['networking.k8s.io']['v1']['servicecidrs']['$delete']
          >
        },
      ) =>
        parseResponse(client.apis['networking.k8s.io'].v1.servicecidrs.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApisNetworkingK8sIoV1ServicecidrsNameKey(
  args: InferRequestType<
    (typeof client.apis)['networking.k8s.io']['v1']['servicecidrs'][':name']['$get']
  >,
) {
  return ['apis', '/apis/networking.k8s.io/v1/servicecidrs/:name', args] as const
}

export function useGetApisNetworkingK8sIoV1ServicecidrsName<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis)['networking.k8s.io']['v1']['servicecidrs'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)['networking.k8s.io']['v1']['servicecidrs'][':name']['$get']
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
        ? getGetApisNetworkingK8sIoV1ServicecidrsNameKey(args)
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
                (typeof client.apis)['networking.k8s.io']['v1']['servicecidrs'][':name']['$get']
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
          client.apis['networking.k8s.io'].v1.servicecidrs[':name'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisNetworkingK8sIoV1ServicecidrsName<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis)['networking.k8s.io']['v1']['servicecidrs'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)['networking.k8s.io']['v1']['servicecidrs'][':name']['$get']
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
        ? getGetApisNetworkingK8sIoV1ServicecidrsNameKey(args)
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
                (typeof client.apis)['networking.k8s.io']['v1']['servicecidrs'][':name']['$get']
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
          client.apis['networking.k8s.io'].v1.servicecidrs[':name'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutApisNetworkingK8sIoV1ServicecidrsNameKey() {
  return ['apis', '/apis/networking.k8s.io/v1/servicecidrs/:name', 'PUT'] as const
}

export function usePutApisNetworkingK8sIoV1ServicecidrsName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['networking.k8s.io']['v1']['servicecidrs'][':name']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.apis)['networking.k8s.io']['v1']['servicecidrs'][':name']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApisNetworkingK8sIoV1ServicecidrsNameKey()
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
            (typeof client.apis)['networking.k8s.io']['v1']['servicecidrs'][':name']['$put']
          >
        },
      ) =>
        parseResponse(
          client.apis['networking.k8s.io'].v1.servicecidrs[':name'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApisNetworkingK8sIoV1ServicecidrsNameKey() {
  return ['apis', '/apis/networking.k8s.io/v1/servicecidrs/:name', 'DELETE'] as const
}

export function useDeleteApisNetworkingK8sIoV1ServicecidrsName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['networking.k8s.io']['v1']['servicecidrs'][':name']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.apis)['networking.k8s.io']['v1']['servicecidrs'][':name']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApisNetworkingK8sIoV1ServicecidrsNameKey()
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
            (typeof client.apis)['networking.k8s.io']['v1']['servicecidrs'][':name']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.apis['networking.k8s.io'].v1.servicecidrs[':name'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchApisNetworkingK8sIoV1ServicecidrsNameKey() {
  return ['apis', '/apis/networking.k8s.io/v1/servicecidrs/:name', 'PATCH'] as const
}

export function usePatchApisNetworkingK8sIoV1ServicecidrsName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['networking.k8s.io']['v1']['servicecidrs'][':name']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.apis)['networking.k8s.io']['v1']['servicecidrs'][':name']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApisNetworkingK8sIoV1ServicecidrsNameKey()
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
            (typeof client.apis)['networking.k8s.io']['v1']['servicecidrs'][':name']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.apis['networking.k8s.io'].v1.servicecidrs[':name'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApisNetworkingK8sIoV1ServicecidrsNameStatusKey(
  args: InferRequestType<
    (typeof client.apis)['networking.k8s.io']['v1']['servicecidrs'][':name']['status']['$get']
  >,
) {
  return ['apis', '/apis/networking.k8s.io/v1/servicecidrs/:name/status', args] as const
}

export function useGetApisNetworkingK8sIoV1ServicecidrsNameStatus<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis)['networking.k8s.io']['v1']['servicecidrs'][':name']['status']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)['networking.k8s.io']['v1']['servicecidrs'][':name']['status']['$get']
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
        ? getGetApisNetworkingK8sIoV1ServicecidrsNameStatusKey(args)
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
                (typeof client.apis)['networking.k8s.io']['v1']['servicecidrs'][':name']['status']['$get']
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
          client.apis['networking.k8s.io'].v1.servicecidrs[':name'].status.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisNetworkingK8sIoV1ServicecidrsNameStatus<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis)['networking.k8s.io']['v1']['servicecidrs'][':name']['status']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)['networking.k8s.io']['v1']['servicecidrs'][':name']['status']['$get']
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
        ? getGetApisNetworkingK8sIoV1ServicecidrsNameStatusKey(args)
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
                (typeof client.apis)['networking.k8s.io']['v1']['servicecidrs'][':name']['status']['$get']
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
          client.apis['networking.k8s.io'].v1.servicecidrs[':name'].status.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutApisNetworkingK8sIoV1ServicecidrsNameStatusKey() {
  return ['apis', '/apis/networking.k8s.io/v1/servicecidrs/:name/status', 'PUT'] as const
}

export function usePutApisNetworkingK8sIoV1ServicecidrsNameStatus<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['networking.k8s.io']['v1']['servicecidrs'][':name']['status']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.apis)['networking.k8s.io']['v1']['servicecidrs'][':name']['status']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApisNetworkingK8sIoV1ServicecidrsNameStatusKey()
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
            (typeof client.apis)['networking.k8s.io']['v1']['servicecidrs'][':name']['status']['$put']
          >
        },
      ) =>
        parseResponse(
          client.apis['networking.k8s.io'].v1.servicecidrs[':name'].status.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchApisNetworkingK8sIoV1ServicecidrsNameStatusKey() {
  return ['apis', '/apis/networking.k8s.io/v1/servicecidrs/:name/status', 'PATCH'] as const
}

export function usePatchApisNetworkingK8sIoV1ServicecidrsNameStatus<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['networking.k8s.io']['v1']['servicecidrs'][':name']['status']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.apis)['networking.k8s.io']['v1']['servicecidrs'][':name']['status']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApisNetworkingK8sIoV1ServicecidrsNameStatusKey()
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
            (typeof client.apis)['networking.k8s.io']['v1']['servicecidrs'][':name']['status']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.apis['networking.k8s.io'].v1.servicecidrs[':name'].status.$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApisNetworkingK8sIoV1WatchIngressclassesKey(
  args: InferRequestType<
    (typeof client.apis)['networking.k8s.io']['v1']['watch']['ingressclasses']['$get']
  >,
) {
  return ['apis', '/apis/networking.k8s.io/v1/watch/ingressclasses', args] as const
}

export function useGetApisNetworkingK8sIoV1WatchIngressclasses<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis)['networking.k8s.io']['v1']['watch']['ingressclasses']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)['networking.k8s.io']['v1']['watch']['ingressclasses']['$get']
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
        ? getGetApisNetworkingK8sIoV1WatchIngressclassesKey(args)
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
                (typeof client.apis)['networking.k8s.io']['v1']['watch']['ingressclasses']['$get']
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
          client.apis['networking.k8s.io'].v1.watch.ingressclasses.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisNetworkingK8sIoV1WatchIngressclasses<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis)['networking.k8s.io']['v1']['watch']['ingressclasses']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)['networking.k8s.io']['v1']['watch']['ingressclasses']['$get']
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
        ? getGetApisNetworkingK8sIoV1WatchIngressclassesKey(args)
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
                (typeof client.apis)['networking.k8s.io']['v1']['watch']['ingressclasses']['$get']
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
          client.apis['networking.k8s.io'].v1.watch.ingressclasses.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApisNetworkingK8sIoV1WatchIngressclassesNameKey(
  args: InferRequestType<
    (typeof client.apis)['networking.k8s.io']['v1']['watch']['ingressclasses'][':name']['$get']
  >,
) {
  return ['apis', '/apis/networking.k8s.io/v1/watch/ingressclasses/:name', args] as const
}

export function useGetApisNetworkingK8sIoV1WatchIngressclassesName<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis)['networking.k8s.io']['v1']['watch']['ingressclasses'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)['networking.k8s.io']['v1']['watch']['ingressclasses'][':name']['$get']
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
        ? getGetApisNetworkingK8sIoV1WatchIngressclassesNameKey(args)
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
                (typeof client.apis)['networking.k8s.io']['v1']['watch']['ingressclasses'][':name']['$get']
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
          client.apis['networking.k8s.io'].v1.watch.ingressclasses[':name'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisNetworkingK8sIoV1WatchIngressclassesName<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis)['networking.k8s.io']['v1']['watch']['ingressclasses'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)['networking.k8s.io']['v1']['watch']['ingressclasses'][':name']['$get']
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
        ? getGetApisNetworkingK8sIoV1WatchIngressclassesNameKey(args)
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
                (typeof client.apis)['networking.k8s.io']['v1']['watch']['ingressclasses'][':name']['$get']
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
          client.apis['networking.k8s.io'].v1.watch.ingressclasses[':name'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApisNetworkingK8sIoV1WatchIngressesKey(
  args: InferRequestType<
    (typeof client.apis)['networking.k8s.io']['v1']['watch']['ingresses']['$get']
  >,
) {
  return ['apis', '/apis/networking.k8s.io/v1/watch/ingresses', args] as const
}

export function useGetApisNetworkingK8sIoV1WatchIngresses<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis)['networking.k8s.io']['v1']['watch']['ingresses']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)['networking.k8s.io']['v1']['watch']['ingresses']['$get']
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
        ? getGetApisNetworkingK8sIoV1WatchIngressesKey(args)
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
                (typeof client.apis)['networking.k8s.io']['v1']['watch']['ingresses']['$get']
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
          client.apis['networking.k8s.io'].v1.watch.ingresses.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisNetworkingK8sIoV1WatchIngresses<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis)['networking.k8s.io']['v1']['watch']['ingresses']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)['networking.k8s.io']['v1']['watch']['ingresses']['$get']
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
        ? getGetApisNetworkingK8sIoV1WatchIngressesKey(args)
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
                (typeof client.apis)['networking.k8s.io']['v1']['watch']['ingresses']['$get']
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
          client.apis['networking.k8s.io'].v1.watch.ingresses.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApisNetworkingK8sIoV1WatchIpaddressesKey(
  args: InferRequestType<
    (typeof client.apis)['networking.k8s.io']['v1']['watch']['ipaddresses']['$get']
  >,
) {
  return ['apis', '/apis/networking.k8s.io/v1/watch/ipaddresses', args] as const
}

export function useGetApisNetworkingK8sIoV1WatchIpaddresses<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis)['networking.k8s.io']['v1']['watch']['ipaddresses']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)['networking.k8s.io']['v1']['watch']['ipaddresses']['$get']
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
        ? getGetApisNetworkingK8sIoV1WatchIpaddressesKey(args)
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
                (typeof client.apis)['networking.k8s.io']['v1']['watch']['ipaddresses']['$get']
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
          client.apis['networking.k8s.io'].v1.watch.ipaddresses.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisNetworkingK8sIoV1WatchIpaddresses<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis)['networking.k8s.io']['v1']['watch']['ipaddresses']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)['networking.k8s.io']['v1']['watch']['ipaddresses']['$get']
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
        ? getGetApisNetworkingK8sIoV1WatchIpaddressesKey(args)
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
                (typeof client.apis)['networking.k8s.io']['v1']['watch']['ipaddresses']['$get']
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
          client.apis['networking.k8s.io'].v1.watch.ipaddresses.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApisNetworkingK8sIoV1WatchIpaddressesNameKey(
  args: InferRequestType<
    (typeof client.apis)['networking.k8s.io']['v1']['watch']['ipaddresses'][':name']['$get']
  >,
) {
  return ['apis', '/apis/networking.k8s.io/v1/watch/ipaddresses/:name', args] as const
}

export function useGetApisNetworkingK8sIoV1WatchIpaddressesName<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis)['networking.k8s.io']['v1']['watch']['ipaddresses'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)['networking.k8s.io']['v1']['watch']['ipaddresses'][':name']['$get']
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
        ? getGetApisNetworkingK8sIoV1WatchIpaddressesNameKey(args)
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
                (typeof client.apis)['networking.k8s.io']['v1']['watch']['ipaddresses'][':name']['$get']
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
          client.apis['networking.k8s.io'].v1.watch.ipaddresses[':name'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisNetworkingK8sIoV1WatchIpaddressesName<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis)['networking.k8s.io']['v1']['watch']['ipaddresses'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)['networking.k8s.io']['v1']['watch']['ipaddresses'][':name']['$get']
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
        ? getGetApisNetworkingK8sIoV1WatchIpaddressesNameKey(args)
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
                (typeof client.apis)['networking.k8s.io']['v1']['watch']['ipaddresses'][':name']['$get']
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
          client.apis['networking.k8s.io'].v1.watch.ipaddresses[':name'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApisNetworkingK8sIoV1WatchNamespacesNamespaceIngressesKey(
  args: InferRequestType<
    (typeof client.apis)['networking.k8s.io']['v1']['watch']['namespaces'][':namespace']['ingresses']['$get']
  >,
) {
  return ['apis', '/apis/networking.k8s.io/v1/watch/namespaces/:namespace/ingresses', args] as const
}

export function useGetApisNetworkingK8sIoV1WatchNamespacesNamespaceIngresses<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis)['networking.k8s.io']['v1']['watch']['namespaces'][':namespace']['ingresses']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)['networking.k8s.io']['v1']['watch']['namespaces'][':namespace']['ingresses']['$get']
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
        ? getGetApisNetworkingK8sIoV1WatchNamespacesNamespaceIngressesKey(args)
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
                (typeof client.apis)['networking.k8s.io']['v1']['watch']['namespaces'][':namespace']['ingresses']['$get']
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
          client.apis['networking.k8s.io'].v1.watch.namespaces[':namespace'].ingresses.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisNetworkingK8sIoV1WatchNamespacesNamespaceIngresses<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.apis)['networking.k8s.io']['v1']['watch']['namespaces'][':namespace']['ingresses']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)['networking.k8s.io']['v1']['watch']['namespaces'][':namespace']['ingresses']['$get']
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
        ? getGetApisNetworkingK8sIoV1WatchNamespacesNamespaceIngressesKey(args)
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
                (typeof client.apis)['networking.k8s.io']['v1']['watch']['namespaces'][':namespace']['ingresses']['$get']
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
          client.apis['networking.k8s.io'].v1.watch.namespaces[':namespace'].ingresses.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApisNetworkingK8sIoV1WatchNamespacesNamespaceIngressesNameKey(
  args: InferRequestType<
    (typeof client.apis)['networking.k8s.io']['v1']['watch']['namespaces'][':namespace']['ingresses'][':name']['$get']
  >,
) {
  return [
    'apis',
    '/apis/networking.k8s.io/v1/watch/namespaces/:namespace/ingresses/:name',
    args,
  ] as const
}

export function useGetApisNetworkingK8sIoV1WatchNamespacesNamespaceIngressesName<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis)['networking.k8s.io']['v1']['watch']['namespaces'][':namespace']['ingresses'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)['networking.k8s.io']['v1']['watch']['namespaces'][':namespace']['ingresses'][':name']['$get']
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
        ? getGetApisNetworkingK8sIoV1WatchNamespacesNamespaceIngressesNameKey(args)
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
                (typeof client.apis)['networking.k8s.io']['v1']['watch']['namespaces'][':namespace']['ingresses'][':name']['$get']
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
          client.apis['networking.k8s.io'].v1.watch.namespaces[':namespace'].ingresses[
            ':name'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisNetworkingK8sIoV1WatchNamespacesNamespaceIngressesName<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.apis)['networking.k8s.io']['v1']['watch']['namespaces'][':namespace']['ingresses'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)['networking.k8s.io']['v1']['watch']['namespaces'][':namespace']['ingresses'][':name']['$get']
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
        ? getGetApisNetworkingK8sIoV1WatchNamespacesNamespaceIngressesNameKey(args)
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
                (typeof client.apis)['networking.k8s.io']['v1']['watch']['namespaces'][':namespace']['ingresses'][':name']['$get']
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
          client.apis['networking.k8s.io'].v1.watch.namespaces[':namespace'].ingresses[
            ':name'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApisNetworkingK8sIoV1WatchNamespacesNamespaceNetworkpoliciesKey(
  args: InferRequestType<
    (typeof client.apis)['networking.k8s.io']['v1']['watch']['namespaces'][':namespace']['networkpolicies']['$get']
  >,
) {
  return [
    'apis',
    '/apis/networking.k8s.io/v1/watch/namespaces/:namespace/networkpolicies',
    args,
  ] as const
}

export function useGetApisNetworkingK8sIoV1WatchNamespacesNamespaceNetworkpolicies<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.apis)['networking.k8s.io']['v1']['watch']['namespaces'][':namespace']['networkpolicies']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)['networking.k8s.io']['v1']['watch']['namespaces'][':namespace']['networkpolicies']['$get']
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
        ? getGetApisNetworkingK8sIoV1WatchNamespacesNamespaceNetworkpoliciesKey(args)
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
                (typeof client.apis)['networking.k8s.io']['v1']['watch']['namespaces'][':namespace']['networkpolicies']['$get']
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
          client.apis['networking.k8s.io'].v1.watch.namespaces[':namespace'].networkpolicies.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisNetworkingK8sIoV1WatchNamespacesNamespaceNetworkpolicies<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.apis)['networking.k8s.io']['v1']['watch']['namespaces'][':namespace']['networkpolicies']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)['networking.k8s.io']['v1']['watch']['namespaces'][':namespace']['networkpolicies']['$get']
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
        ? getGetApisNetworkingK8sIoV1WatchNamespacesNamespaceNetworkpoliciesKey(args)
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
                (typeof client.apis)['networking.k8s.io']['v1']['watch']['namespaces'][':namespace']['networkpolicies']['$get']
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
          client.apis['networking.k8s.io'].v1.watch.namespaces[':namespace'].networkpolicies.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApisNetworkingK8sIoV1WatchNamespacesNamespaceNetworkpoliciesNameKey(
  args: InferRequestType<
    (typeof client.apis)['networking.k8s.io']['v1']['watch']['namespaces'][':namespace']['networkpolicies'][':name']['$get']
  >,
) {
  return [
    'apis',
    '/apis/networking.k8s.io/v1/watch/namespaces/:namespace/networkpolicies/:name',
    args,
  ] as const
}

export function useGetApisNetworkingK8sIoV1WatchNamespacesNamespaceNetworkpoliciesName<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.apis)['networking.k8s.io']['v1']['watch']['namespaces'][':namespace']['networkpolicies'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)['networking.k8s.io']['v1']['watch']['namespaces'][':namespace']['networkpolicies'][':name']['$get']
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
        ? getGetApisNetworkingK8sIoV1WatchNamespacesNamespaceNetworkpoliciesNameKey(args)
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
                (typeof client.apis)['networking.k8s.io']['v1']['watch']['namespaces'][':namespace']['networkpolicies'][':name']['$get']
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
          client.apis['networking.k8s.io'].v1.watch.namespaces[':namespace'].networkpolicies[
            ':name'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisNetworkingK8sIoV1WatchNamespacesNamespaceNetworkpoliciesName<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.apis)['networking.k8s.io']['v1']['watch']['namespaces'][':namespace']['networkpolicies'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)['networking.k8s.io']['v1']['watch']['namespaces'][':namespace']['networkpolicies'][':name']['$get']
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
        ? getGetApisNetworkingK8sIoV1WatchNamespacesNamespaceNetworkpoliciesNameKey(args)
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
                (typeof client.apis)['networking.k8s.io']['v1']['watch']['namespaces'][':namespace']['networkpolicies'][':name']['$get']
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
          client.apis['networking.k8s.io'].v1.watch.namespaces[':namespace'].networkpolicies[
            ':name'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApisNetworkingK8sIoV1WatchNetworkpoliciesKey(
  args: InferRequestType<
    (typeof client.apis)['networking.k8s.io']['v1']['watch']['networkpolicies']['$get']
  >,
) {
  return ['apis', '/apis/networking.k8s.io/v1/watch/networkpolicies', args] as const
}

export function useGetApisNetworkingK8sIoV1WatchNetworkpolicies<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis)['networking.k8s.io']['v1']['watch']['networkpolicies']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)['networking.k8s.io']['v1']['watch']['networkpolicies']['$get']
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
        ? getGetApisNetworkingK8sIoV1WatchNetworkpoliciesKey(args)
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
                (typeof client.apis)['networking.k8s.io']['v1']['watch']['networkpolicies']['$get']
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
          client.apis['networking.k8s.io'].v1.watch.networkpolicies.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisNetworkingK8sIoV1WatchNetworkpolicies<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis)['networking.k8s.io']['v1']['watch']['networkpolicies']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)['networking.k8s.io']['v1']['watch']['networkpolicies']['$get']
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
        ? getGetApisNetworkingK8sIoV1WatchNetworkpoliciesKey(args)
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
                (typeof client.apis)['networking.k8s.io']['v1']['watch']['networkpolicies']['$get']
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
          client.apis['networking.k8s.io'].v1.watch.networkpolicies.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApisNetworkingK8sIoV1WatchServicecidrsKey(
  args: InferRequestType<
    (typeof client.apis)['networking.k8s.io']['v1']['watch']['servicecidrs']['$get']
  >,
) {
  return ['apis', '/apis/networking.k8s.io/v1/watch/servicecidrs', args] as const
}

export function useGetApisNetworkingK8sIoV1WatchServicecidrs<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis)['networking.k8s.io']['v1']['watch']['servicecidrs']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)['networking.k8s.io']['v1']['watch']['servicecidrs']['$get']
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
        ? getGetApisNetworkingK8sIoV1WatchServicecidrsKey(args)
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
                (typeof client.apis)['networking.k8s.io']['v1']['watch']['servicecidrs']['$get']
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
          client.apis['networking.k8s.io'].v1.watch.servicecidrs.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisNetworkingK8sIoV1WatchServicecidrs<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis)['networking.k8s.io']['v1']['watch']['servicecidrs']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)['networking.k8s.io']['v1']['watch']['servicecidrs']['$get']
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
        ? getGetApisNetworkingK8sIoV1WatchServicecidrsKey(args)
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
                (typeof client.apis)['networking.k8s.io']['v1']['watch']['servicecidrs']['$get']
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
          client.apis['networking.k8s.io'].v1.watch.servicecidrs.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApisNetworkingK8sIoV1WatchServicecidrsNameKey(
  args: InferRequestType<
    (typeof client.apis)['networking.k8s.io']['v1']['watch']['servicecidrs'][':name']['$get']
  >,
) {
  return ['apis', '/apis/networking.k8s.io/v1/watch/servicecidrs/:name', args] as const
}

export function useGetApisNetworkingK8sIoV1WatchServicecidrsName<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis)['networking.k8s.io']['v1']['watch']['servicecidrs'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)['networking.k8s.io']['v1']['watch']['servicecidrs'][':name']['$get']
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
        ? getGetApisNetworkingK8sIoV1WatchServicecidrsNameKey(args)
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
                (typeof client.apis)['networking.k8s.io']['v1']['watch']['servicecidrs'][':name']['$get']
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
          client.apis['networking.k8s.io'].v1.watch.servicecidrs[':name'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisNetworkingK8sIoV1WatchServicecidrsName<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis)['networking.k8s.io']['v1']['watch']['servicecidrs'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)['networking.k8s.io']['v1']['watch']['servicecidrs'][':name']['$get']
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
        ? getGetApisNetworkingK8sIoV1WatchServicecidrsNameKey(args)
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
                (typeof client.apis)['networking.k8s.io']['v1']['watch']['servicecidrs'][':name']['$get']
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
          client.apis['networking.k8s.io'].v1.watch.servicecidrs[':name'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}
