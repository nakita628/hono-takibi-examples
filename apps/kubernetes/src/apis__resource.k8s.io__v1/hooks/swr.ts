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

export function getGetApisResourceK8sIoV1IndexKey() {
  return ['apis', '/apis/resource.k8s.io/v1/'] as const
}

export function useGetApisResourceK8sIoV1Index<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apis)['resource.k8s.io']['v1']['index']['$get']>>
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
        ? getGetApisResourceK8sIoV1IndexKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apis)['resource.k8s.io']['v1']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.apis['resource.k8s.io'].v1.index.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisResourceK8sIoV1Index<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apis)['resource.k8s.io']['v1']['index']['$get']>>
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
        ? getGetApisResourceK8sIoV1IndexKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apis)['resource.k8s.io']['v1']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.apis['resource.k8s.io'].v1.index.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApisResourceK8sIoV1DeviceclassesKey(
  args: InferRequestType<(typeof client.apis)['resource.k8s.io']['v1']['deviceclasses']['$get']>,
) {
  return ['apis', '/apis/resource.k8s.io/v1/deviceclasses', args] as const
}

export function useGetApisResourceK8sIoV1Deviceclasses<TError = unknown>(
  args: InferRequestType<(typeof client.apis)['resource.k8s.io']['v1']['deviceclasses']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.apis)['resource.k8s.io']['v1']['deviceclasses']['$get']>
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
        ? getGetApisResourceK8sIoV1DeviceclassesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.apis)['resource.k8s.io']['v1']['deviceclasses']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.apis['resource.k8s.io'].v1.deviceclasses.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisResourceK8sIoV1Deviceclasses<TError = unknown>(
  args: InferRequestType<(typeof client.apis)['resource.k8s.io']['v1']['deviceclasses']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.apis)['resource.k8s.io']['v1']['deviceclasses']['$get']>
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
        ? getGetApisResourceK8sIoV1DeviceclassesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.apis)['resource.k8s.io']['v1']['deviceclasses']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.apis['resource.k8s.io'].v1.deviceclasses.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApisResourceK8sIoV1DeviceclassesKey() {
  return ['apis', '/apis/resource.k8s.io/v1/deviceclasses', 'POST'] as const
}

export function usePostApisResourceK8sIoV1Deviceclasses<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.apis)['resource.k8s.io']['v1']['deviceclasses']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.apis)['resource.k8s.io']['v1']['deviceclasses']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApisResourceK8sIoV1DeviceclassesKey()
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
            (typeof client.apis)['resource.k8s.io']['v1']['deviceclasses']['$post']
          >
        },
      ) => parseResponse(client.apis['resource.k8s.io'].v1.deviceclasses.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApisResourceK8sIoV1DeviceclassesKey() {
  return ['apis', '/apis/resource.k8s.io/v1/deviceclasses', 'DELETE'] as const
}

export function useDeleteApisResourceK8sIoV1Deviceclasses<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.apis)['resource.k8s.io']['v1']['deviceclasses']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.apis)['resource.k8s.io']['v1']['deviceclasses']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApisResourceK8sIoV1DeviceclassesKey()
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
            (typeof client.apis)['resource.k8s.io']['v1']['deviceclasses']['$delete']
          >
        },
      ) =>
        parseResponse(client.apis['resource.k8s.io'].v1.deviceclasses.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApisResourceK8sIoV1DeviceclassesNameKey(
  args: InferRequestType<
    (typeof client.apis)['resource.k8s.io']['v1']['deviceclasses'][':name']['$get']
  >,
) {
  return ['apis', '/apis/resource.k8s.io/v1/deviceclasses/:name', args] as const
}

export function useGetApisResourceK8sIoV1DeviceclassesName<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis)['resource.k8s.io']['v1']['deviceclasses'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)['resource.k8s.io']['v1']['deviceclasses'][':name']['$get']
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
        ? getGetApisResourceK8sIoV1DeviceclassesNameKey(args)
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
                (typeof client.apis)['resource.k8s.io']['v1']['deviceclasses'][':name']['$get']
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
          client.apis['resource.k8s.io'].v1.deviceclasses[':name'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisResourceK8sIoV1DeviceclassesName<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis)['resource.k8s.io']['v1']['deviceclasses'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)['resource.k8s.io']['v1']['deviceclasses'][':name']['$get']
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
        ? getGetApisResourceK8sIoV1DeviceclassesNameKey(args)
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
                (typeof client.apis)['resource.k8s.io']['v1']['deviceclasses'][':name']['$get']
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
          client.apis['resource.k8s.io'].v1.deviceclasses[':name'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutApisResourceK8sIoV1DeviceclassesNameKey() {
  return ['apis', '/apis/resource.k8s.io/v1/deviceclasses/:name', 'PUT'] as const
}

export function usePutApisResourceK8sIoV1DeviceclassesName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['resource.k8s.io']['v1']['deviceclasses'][':name']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.apis)['resource.k8s.io']['v1']['deviceclasses'][':name']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApisResourceK8sIoV1DeviceclassesNameKey()
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
            (typeof client.apis)['resource.k8s.io']['v1']['deviceclasses'][':name']['$put']
          >
        },
      ) =>
        parseResponse(
          client.apis['resource.k8s.io'].v1.deviceclasses[':name'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApisResourceK8sIoV1DeviceclassesNameKey() {
  return ['apis', '/apis/resource.k8s.io/v1/deviceclasses/:name', 'DELETE'] as const
}

export function useDeleteApisResourceK8sIoV1DeviceclassesName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['resource.k8s.io']['v1']['deviceclasses'][':name']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.apis)['resource.k8s.io']['v1']['deviceclasses'][':name']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApisResourceK8sIoV1DeviceclassesNameKey()
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
            (typeof client.apis)['resource.k8s.io']['v1']['deviceclasses'][':name']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.apis['resource.k8s.io'].v1.deviceclasses[':name'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchApisResourceK8sIoV1DeviceclassesNameKey() {
  return ['apis', '/apis/resource.k8s.io/v1/deviceclasses/:name', 'PATCH'] as const
}

export function usePatchApisResourceK8sIoV1DeviceclassesName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['resource.k8s.io']['v1']['deviceclasses'][':name']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.apis)['resource.k8s.io']['v1']['deviceclasses'][':name']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApisResourceK8sIoV1DeviceclassesNameKey()
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
            (typeof client.apis)['resource.k8s.io']['v1']['deviceclasses'][':name']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.apis['resource.k8s.io'].v1.deviceclasses[':name'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApisResourceK8sIoV1DevicetaintrulesKey(
  args: InferRequestType<(typeof client.apis)['resource.k8s.io']['v1']['devicetaintrules']['$get']>,
) {
  return ['apis', '/apis/resource.k8s.io/v1/devicetaintrules', args] as const
}

export function useGetApisResourceK8sIoV1Devicetaintrules<TError = unknown>(
  args: InferRequestType<(typeof client.apis)['resource.k8s.io']['v1']['devicetaintrules']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.apis)['resource.k8s.io']['v1']['devicetaintrules']['$get']>
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
        ? getGetApisResourceK8sIoV1DevicetaintrulesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.apis)['resource.k8s.io']['v1']['devicetaintrules']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.apis['resource.k8s.io'].v1.devicetaintrules.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisResourceK8sIoV1Devicetaintrules<TError = unknown>(
  args: InferRequestType<(typeof client.apis)['resource.k8s.io']['v1']['devicetaintrules']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.apis)['resource.k8s.io']['v1']['devicetaintrules']['$get']>
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
        ? getGetApisResourceK8sIoV1DevicetaintrulesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.apis)['resource.k8s.io']['v1']['devicetaintrules']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.apis['resource.k8s.io'].v1.devicetaintrules.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApisResourceK8sIoV1DevicetaintrulesKey() {
  return ['apis', '/apis/resource.k8s.io/v1/devicetaintrules', 'POST'] as const
}

export function usePostApisResourceK8sIoV1Devicetaintrules<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.apis)['resource.k8s.io']['v1']['devicetaintrules']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.apis)['resource.k8s.io']['v1']['devicetaintrules']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApisResourceK8sIoV1DevicetaintrulesKey()
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
            (typeof client.apis)['resource.k8s.io']['v1']['devicetaintrules']['$post']
          >
        },
      ) =>
        parseResponse(client.apis['resource.k8s.io'].v1.devicetaintrules.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApisResourceK8sIoV1DevicetaintrulesKey() {
  return ['apis', '/apis/resource.k8s.io/v1/devicetaintrules', 'DELETE'] as const
}

export function useDeleteApisResourceK8sIoV1Devicetaintrules<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.apis)['resource.k8s.io']['v1']['devicetaintrules']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.apis)['resource.k8s.io']['v1']['devicetaintrules']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApisResourceK8sIoV1DevicetaintrulesKey()
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
            (typeof client.apis)['resource.k8s.io']['v1']['devicetaintrules']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.apis['resource.k8s.io'].v1.devicetaintrules.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApisResourceK8sIoV1DevicetaintrulesNameKey(
  args: InferRequestType<
    (typeof client.apis)['resource.k8s.io']['v1']['devicetaintrules'][':name']['$get']
  >,
) {
  return ['apis', '/apis/resource.k8s.io/v1/devicetaintrules/:name', args] as const
}

export function useGetApisResourceK8sIoV1DevicetaintrulesName<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis)['resource.k8s.io']['v1']['devicetaintrules'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)['resource.k8s.io']['v1']['devicetaintrules'][':name']['$get']
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
        ? getGetApisResourceK8sIoV1DevicetaintrulesNameKey(args)
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
                (typeof client.apis)['resource.k8s.io']['v1']['devicetaintrules'][':name']['$get']
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
          client.apis['resource.k8s.io'].v1.devicetaintrules[':name'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisResourceK8sIoV1DevicetaintrulesName<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis)['resource.k8s.io']['v1']['devicetaintrules'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)['resource.k8s.io']['v1']['devicetaintrules'][':name']['$get']
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
        ? getGetApisResourceK8sIoV1DevicetaintrulesNameKey(args)
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
                (typeof client.apis)['resource.k8s.io']['v1']['devicetaintrules'][':name']['$get']
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
          client.apis['resource.k8s.io'].v1.devicetaintrules[':name'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutApisResourceK8sIoV1DevicetaintrulesNameKey() {
  return ['apis', '/apis/resource.k8s.io/v1/devicetaintrules/:name', 'PUT'] as const
}

export function usePutApisResourceK8sIoV1DevicetaintrulesName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['resource.k8s.io']['v1']['devicetaintrules'][':name']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.apis)['resource.k8s.io']['v1']['devicetaintrules'][':name']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApisResourceK8sIoV1DevicetaintrulesNameKey()
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
            (typeof client.apis)['resource.k8s.io']['v1']['devicetaintrules'][':name']['$put']
          >
        },
      ) =>
        parseResponse(
          client.apis['resource.k8s.io'].v1.devicetaintrules[':name'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApisResourceK8sIoV1DevicetaintrulesNameKey() {
  return ['apis', '/apis/resource.k8s.io/v1/devicetaintrules/:name', 'DELETE'] as const
}

export function useDeleteApisResourceK8sIoV1DevicetaintrulesName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['resource.k8s.io']['v1']['devicetaintrules'][':name']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.apis)['resource.k8s.io']['v1']['devicetaintrules'][':name']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApisResourceK8sIoV1DevicetaintrulesNameKey()
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
            (typeof client.apis)['resource.k8s.io']['v1']['devicetaintrules'][':name']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.apis['resource.k8s.io'].v1.devicetaintrules[':name'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchApisResourceK8sIoV1DevicetaintrulesNameKey() {
  return ['apis', '/apis/resource.k8s.io/v1/devicetaintrules/:name', 'PATCH'] as const
}

export function usePatchApisResourceK8sIoV1DevicetaintrulesName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['resource.k8s.io']['v1']['devicetaintrules'][':name']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.apis)['resource.k8s.io']['v1']['devicetaintrules'][':name']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApisResourceK8sIoV1DevicetaintrulesNameKey()
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
            (typeof client.apis)['resource.k8s.io']['v1']['devicetaintrules'][':name']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.apis['resource.k8s.io'].v1.devicetaintrules[':name'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApisResourceK8sIoV1DevicetaintrulesNameStatusKey(
  args: InferRequestType<
    (typeof client.apis)['resource.k8s.io']['v1']['devicetaintrules'][':name']['status']['$get']
  >,
) {
  return ['apis', '/apis/resource.k8s.io/v1/devicetaintrules/:name/status', args] as const
}

export function useGetApisResourceK8sIoV1DevicetaintrulesNameStatus<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis)['resource.k8s.io']['v1']['devicetaintrules'][':name']['status']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)['resource.k8s.io']['v1']['devicetaintrules'][':name']['status']['$get']
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
        ? getGetApisResourceK8sIoV1DevicetaintrulesNameStatusKey(args)
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
                (typeof client.apis)['resource.k8s.io']['v1']['devicetaintrules'][':name']['status']['$get']
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
          client.apis['resource.k8s.io'].v1.devicetaintrules[':name'].status.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisResourceK8sIoV1DevicetaintrulesNameStatus<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis)['resource.k8s.io']['v1']['devicetaintrules'][':name']['status']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)['resource.k8s.io']['v1']['devicetaintrules'][':name']['status']['$get']
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
        ? getGetApisResourceK8sIoV1DevicetaintrulesNameStatusKey(args)
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
                (typeof client.apis)['resource.k8s.io']['v1']['devicetaintrules'][':name']['status']['$get']
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
          client.apis['resource.k8s.io'].v1.devicetaintrules[':name'].status.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutApisResourceK8sIoV1DevicetaintrulesNameStatusKey() {
  return ['apis', '/apis/resource.k8s.io/v1/devicetaintrules/:name/status', 'PUT'] as const
}

export function usePutApisResourceK8sIoV1DevicetaintrulesNameStatus<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['resource.k8s.io']['v1']['devicetaintrules'][':name']['status']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.apis)['resource.k8s.io']['v1']['devicetaintrules'][':name']['status']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApisResourceK8sIoV1DevicetaintrulesNameStatusKey()
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
            (typeof client.apis)['resource.k8s.io']['v1']['devicetaintrules'][':name']['status']['$put']
          >
        },
      ) =>
        parseResponse(
          client.apis['resource.k8s.io'].v1.devicetaintrules[':name'].status.$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchApisResourceK8sIoV1DevicetaintrulesNameStatusKey() {
  return ['apis', '/apis/resource.k8s.io/v1/devicetaintrules/:name/status', 'PATCH'] as const
}

export function usePatchApisResourceK8sIoV1DevicetaintrulesNameStatus<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['resource.k8s.io']['v1']['devicetaintrules'][':name']['status']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.apis)['resource.k8s.io']['v1']['devicetaintrules'][':name']['status']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApisResourceK8sIoV1DevicetaintrulesNameStatusKey()
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
            (typeof client.apis)['resource.k8s.io']['v1']['devicetaintrules'][':name']['status']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.apis['resource.k8s.io'].v1.devicetaintrules[':name'].status.$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApisResourceK8sIoV1NamespacesNamespaceResourceclaimsKey(
  args: InferRequestType<
    (typeof client.apis)['resource.k8s.io']['v1']['namespaces'][':namespace']['resourceclaims']['$get']
  >,
) {
  return ['apis', '/apis/resource.k8s.io/v1/namespaces/:namespace/resourceclaims', args] as const
}

export function useGetApisResourceK8sIoV1NamespacesNamespaceResourceclaims<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis)['resource.k8s.io']['v1']['namespaces'][':namespace']['resourceclaims']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)['resource.k8s.io']['v1']['namespaces'][':namespace']['resourceclaims']['$get']
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
        ? getGetApisResourceK8sIoV1NamespacesNamespaceResourceclaimsKey(args)
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
                (typeof client.apis)['resource.k8s.io']['v1']['namespaces'][':namespace']['resourceclaims']['$get']
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
          client.apis['resource.k8s.io'].v1.namespaces[':namespace'].resourceclaims.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisResourceK8sIoV1NamespacesNamespaceResourceclaims<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.apis)['resource.k8s.io']['v1']['namespaces'][':namespace']['resourceclaims']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)['resource.k8s.io']['v1']['namespaces'][':namespace']['resourceclaims']['$get']
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
        ? getGetApisResourceK8sIoV1NamespacesNamespaceResourceclaimsKey(args)
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
                (typeof client.apis)['resource.k8s.io']['v1']['namespaces'][':namespace']['resourceclaims']['$get']
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
          client.apis['resource.k8s.io'].v1.namespaces[':namespace'].resourceclaims.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApisResourceK8sIoV1NamespacesNamespaceResourceclaimsKey() {
  return ['apis', '/apis/resource.k8s.io/v1/namespaces/:namespace/resourceclaims', 'POST'] as const
}

export function usePostApisResourceK8sIoV1NamespacesNamespaceResourceclaims<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['resource.k8s.io']['v1']['namespaces'][':namespace']['resourceclaims']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.apis)['resource.k8s.io']['v1']['namespaces'][':namespace']['resourceclaims']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApisResourceK8sIoV1NamespacesNamespaceResourceclaimsKey()
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
            (typeof client.apis)['resource.k8s.io']['v1']['namespaces'][':namespace']['resourceclaims']['$post']
          >
        },
      ) =>
        parseResponse(
          client.apis['resource.k8s.io'].v1.namespaces[':namespace'].resourceclaims.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApisResourceK8sIoV1NamespacesNamespaceResourceclaimsKey() {
  return [
    'apis',
    '/apis/resource.k8s.io/v1/namespaces/:namespace/resourceclaims',
    'DELETE',
  ] as const
}

export function useDeleteApisResourceK8sIoV1NamespacesNamespaceResourceclaims<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['resource.k8s.io']['v1']['namespaces'][':namespace']['resourceclaims']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.apis)['resource.k8s.io']['v1']['namespaces'][':namespace']['resourceclaims']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApisResourceK8sIoV1NamespacesNamespaceResourceclaimsKey()
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
            (typeof client.apis)['resource.k8s.io']['v1']['namespaces'][':namespace']['resourceclaims']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.apis['resource.k8s.io'].v1.namespaces[':namespace'].resourceclaims.$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApisResourceK8sIoV1NamespacesNamespaceResourceclaimsNameKey(
  args: InferRequestType<
    (typeof client.apis)['resource.k8s.io']['v1']['namespaces'][':namespace']['resourceclaims'][':name']['$get']
  >,
) {
  return [
    'apis',
    '/apis/resource.k8s.io/v1/namespaces/:namespace/resourceclaims/:name',
    args,
  ] as const
}

export function useGetApisResourceK8sIoV1NamespacesNamespaceResourceclaimsName<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis)['resource.k8s.io']['v1']['namespaces'][':namespace']['resourceclaims'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)['resource.k8s.io']['v1']['namespaces'][':namespace']['resourceclaims'][':name']['$get']
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
        ? getGetApisResourceK8sIoV1NamespacesNamespaceResourceclaimsNameKey(args)
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
                (typeof client.apis)['resource.k8s.io']['v1']['namespaces'][':namespace']['resourceclaims'][':name']['$get']
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
          client.apis['resource.k8s.io'].v1.namespaces[':namespace'].resourceclaims[':name'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisResourceK8sIoV1NamespacesNamespaceResourceclaimsName<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.apis)['resource.k8s.io']['v1']['namespaces'][':namespace']['resourceclaims'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)['resource.k8s.io']['v1']['namespaces'][':namespace']['resourceclaims'][':name']['$get']
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
        ? getGetApisResourceK8sIoV1NamespacesNamespaceResourceclaimsNameKey(args)
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
                (typeof client.apis)['resource.k8s.io']['v1']['namespaces'][':namespace']['resourceclaims'][':name']['$get']
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
          client.apis['resource.k8s.io'].v1.namespaces[':namespace'].resourceclaims[':name'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutApisResourceK8sIoV1NamespacesNamespaceResourceclaimsNameKey() {
  return [
    'apis',
    '/apis/resource.k8s.io/v1/namespaces/:namespace/resourceclaims/:name',
    'PUT',
  ] as const
}

export function usePutApisResourceK8sIoV1NamespacesNamespaceResourceclaimsName<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['resource.k8s.io']['v1']['namespaces'][':namespace']['resourceclaims'][':name']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.apis)['resource.k8s.io']['v1']['namespaces'][':namespace']['resourceclaims'][':name']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApisResourceK8sIoV1NamespacesNamespaceResourceclaimsNameKey()
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
            (typeof client.apis)['resource.k8s.io']['v1']['namespaces'][':namespace']['resourceclaims'][':name']['$put']
          >
        },
      ) =>
        parseResponse(
          client.apis['resource.k8s.io'].v1.namespaces[':namespace'].resourceclaims[':name'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApisResourceK8sIoV1NamespacesNamespaceResourceclaimsNameKey() {
  return [
    'apis',
    '/apis/resource.k8s.io/v1/namespaces/:namespace/resourceclaims/:name',
    'DELETE',
  ] as const
}

export function useDeleteApisResourceK8sIoV1NamespacesNamespaceResourceclaimsName<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['resource.k8s.io']['v1']['namespaces'][':namespace']['resourceclaims'][':name']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.apis)['resource.k8s.io']['v1']['namespaces'][':namespace']['resourceclaims'][':name']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApisResourceK8sIoV1NamespacesNamespaceResourceclaimsNameKey()
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
            (typeof client.apis)['resource.k8s.io']['v1']['namespaces'][':namespace']['resourceclaims'][':name']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.apis['resource.k8s.io'].v1.namespaces[':namespace'].resourceclaims[
            ':name'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchApisResourceK8sIoV1NamespacesNamespaceResourceclaimsNameKey() {
  return [
    'apis',
    '/apis/resource.k8s.io/v1/namespaces/:namespace/resourceclaims/:name',
    'PATCH',
  ] as const
}

export function usePatchApisResourceK8sIoV1NamespacesNamespaceResourceclaimsName<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['resource.k8s.io']['v1']['namespaces'][':namespace']['resourceclaims'][':name']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.apis)['resource.k8s.io']['v1']['namespaces'][':namespace']['resourceclaims'][':name']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApisResourceK8sIoV1NamespacesNamespaceResourceclaimsNameKey()
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
            (typeof client.apis)['resource.k8s.io']['v1']['namespaces'][':namespace']['resourceclaims'][':name']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.apis['resource.k8s.io'].v1.namespaces[':namespace'].resourceclaims[':name'].$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApisResourceK8sIoV1NamespacesNamespaceResourceclaimsNameStatusKey(
  args: InferRequestType<
    (typeof client.apis)['resource.k8s.io']['v1']['namespaces'][':namespace']['resourceclaims'][':name']['status']['$get']
  >,
) {
  return [
    'apis',
    '/apis/resource.k8s.io/v1/namespaces/:namespace/resourceclaims/:name/status',
    args,
  ] as const
}

export function useGetApisResourceK8sIoV1NamespacesNamespaceResourceclaimsNameStatus<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.apis)['resource.k8s.io']['v1']['namespaces'][':namespace']['resourceclaims'][':name']['status']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)['resource.k8s.io']['v1']['namespaces'][':namespace']['resourceclaims'][':name']['status']['$get']
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
        ? getGetApisResourceK8sIoV1NamespacesNamespaceResourceclaimsNameStatusKey(args)
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
                (typeof client.apis)['resource.k8s.io']['v1']['namespaces'][':namespace']['resourceclaims'][':name']['status']['$get']
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
          client.apis['resource.k8s.io'].v1.namespaces[':namespace'].resourceclaims[
            ':name'
          ].status.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisResourceK8sIoV1NamespacesNamespaceResourceclaimsNameStatus<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.apis)['resource.k8s.io']['v1']['namespaces'][':namespace']['resourceclaims'][':name']['status']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)['resource.k8s.io']['v1']['namespaces'][':namespace']['resourceclaims'][':name']['status']['$get']
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
        ? getGetApisResourceK8sIoV1NamespacesNamespaceResourceclaimsNameStatusKey(args)
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
                (typeof client.apis)['resource.k8s.io']['v1']['namespaces'][':namespace']['resourceclaims'][':name']['status']['$get']
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
          client.apis['resource.k8s.io'].v1.namespaces[':namespace'].resourceclaims[
            ':name'
          ].status.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutApisResourceK8sIoV1NamespacesNamespaceResourceclaimsNameStatusKey() {
  return [
    'apis',
    '/apis/resource.k8s.io/v1/namespaces/:namespace/resourceclaims/:name/status',
    'PUT',
  ] as const
}

export function usePutApisResourceK8sIoV1NamespacesNamespaceResourceclaimsNameStatus<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['resource.k8s.io']['v1']['namespaces'][':namespace']['resourceclaims'][':name']['status']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.apis)['resource.k8s.io']['v1']['namespaces'][':namespace']['resourceclaims'][':name']['status']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPutApisResourceK8sIoV1NamespacesNamespaceResourceclaimsNameStatusKey()
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
            (typeof client.apis)['resource.k8s.io']['v1']['namespaces'][':namespace']['resourceclaims'][':name']['status']['$put']
          >
        },
      ) =>
        parseResponse(
          client.apis['resource.k8s.io'].v1.namespaces[':namespace'].resourceclaims[
            ':name'
          ].status.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchApisResourceK8sIoV1NamespacesNamespaceResourceclaimsNameStatusKey() {
  return [
    'apis',
    '/apis/resource.k8s.io/v1/namespaces/:namespace/resourceclaims/:name/status',
    'PATCH',
  ] as const
}

export function usePatchApisResourceK8sIoV1NamespacesNamespaceResourceclaimsNameStatus<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['resource.k8s.io']['v1']['namespaces'][':namespace']['resourceclaims'][':name']['status']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.apis)['resource.k8s.io']['v1']['namespaces'][':namespace']['resourceclaims'][':name']['status']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPatchApisResourceK8sIoV1NamespacesNamespaceResourceclaimsNameStatusKey()
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
            (typeof client.apis)['resource.k8s.io']['v1']['namespaces'][':namespace']['resourceclaims'][':name']['status']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.apis['resource.k8s.io'].v1.namespaces[':namespace'].resourceclaims[
            ':name'
          ].status.$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApisResourceK8sIoV1NamespacesNamespaceResourceclaimtemplatesKey(
  args: InferRequestType<
    (typeof client.apis)['resource.k8s.io']['v1']['namespaces'][':namespace']['resourceclaimtemplates']['$get']
  >,
) {
  return [
    'apis',
    '/apis/resource.k8s.io/v1/namespaces/:namespace/resourceclaimtemplates',
    args,
  ] as const
}

export function useGetApisResourceK8sIoV1NamespacesNamespaceResourceclaimtemplates<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.apis)['resource.k8s.io']['v1']['namespaces'][':namespace']['resourceclaimtemplates']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)['resource.k8s.io']['v1']['namespaces'][':namespace']['resourceclaimtemplates']['$get']
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
        ? getGetApisResourceK8sIoV1NamespacesNamespaceResourceclaimtemplatesKey(args)
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
                (typeof client.apis)['resource.k8s.io']['v1']['namespaces'][':namespace']['resourceclaimtemplates']['$get']
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
          client.apis['resource.k8s.io'].v1.namespaces[':namespace'].resourceclaimtemplates.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisResourceK8sIoV1NamespacesNamespaceResourceclaimtemplates<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.apis)['resource.k8s.io']['v1']['namespaces'][':namespace']['resourceclaimtemplates']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)['resource.k8s.io']['v1']['namespaces'][':namespace']['resourceclaimtemplates']['$get']
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
        ? getGetApisResourceK8sIoV1NamespacesNamespaceResourceclaimtemplatesKey(args)
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
                (typeof client.apis)['resource.k8s.io']['v1']['namespaces'][':namespace']['resourceclaimtemplates']['$get']
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
          client.apis['resource.k8s.io'].v1.namespaces[':namespace'].resourceclaimtemplates.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApisResourceK8sIoV1NamespacesNamespaceResourceclaimtemplatesKey() {
  return [
    'apis',
    '/apis/resource.k8s.io/v1/namespaces/:namespace/resourceclaimtemplates',
    'POST',
  ] as const
}

export function usePostApisResourceK8sIoV1NamespacesNamespaceResourceclaimtemplates<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['resource.k8s.io']['v1']['namespaces'][':namespace']['resourceclaimtemplates']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.apis)['resource.k8s.io']['v1']['namespaces'][':namespace']['resourceclaimtemplates']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostApisResourceK8sIoV1NamespacesNamespaceResourceclaimtemplatesKey()
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
            (typeof client.apis)['resource.k8s.io']['v1']['namespaces'][':namespace']['resourceclaimtemplates']['$post']
          >
        },
      ) =>
        parseResponse(
          client.apis['resource.k8s.io'].v1.namespaces[':namespace'].resourceclaimtemplates.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApisResourceK8sIoV1NamespacesNamespaceResourceclaimtemplatesKey() {
  return [
    'apis',
    '/apis/resource.k8s.io/v1/namespaces/:namespace/resourceclaimtemplates',
    'DELETE',
  ] as const
}

export function useDeleteApisResourceK8sIoV1NamespacesNamespaceResourceclaimtemplates<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['resource.k8s.io']['v1']['namespaces'][':namespace']['resourceclaimtemplates']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.apis)['resource.k8s.io']['v1']['namespaces'][':namespace']['resourceclaimtemplates']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteApisResourceK8sIoV1NamespacesNamespaceResourceclaimtemplatesKey()
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
            (typeof client.apis)['resource.k8s.io']['v1']['namespaces'][':namespace']['resourceclaimtemplates']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.apis['resource.k8s.io'].v1.namespaces[':namespace'].resourceclaimtemplates.$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApisResourceK8sIoV1NamespacesNamespaceResourceclaimtemplatesNameKey(
  args: InferRequestType<
    (typeof client.apis)['resource.k8s.io']['v1']['namespaces'][':namespace']['resourceclaimtemplates'][':name']['$get']
  >,
) {
  return [
    'apis',
    '/apis/resource.k8s.io/v1/namespaces/:namespace/resourceclaimtemplates/:name',
    args,
  ] as const
}

export function useGetApisResourceK8sIoV1NamespacesNamespaceResourceclaimtemplatesName<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.apis)['resource.k8s.io']['v1']['namespaces'][':namespace']['resourceclaimtemplates'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)['resource.k8s.io']['v1']['namespaces'][':namespace']['resourceclaimtemplates'][':name']['$get']
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
        ? getGetApisResourceK8sIoV1NamespacesNamespaceResourceclaimtemplatesNameKey(args)
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
                (typeof client.apis)['resource.k8s.io']['v1']['namespaces'][':namespace']['resourceclaimtemplates'][':name']['$get']
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
          client.apis['resource.k8s.io'].v1.namespaces[':namespace'].resourceclaimtemplates[
            ':name'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisResourceK8sIoV1NamespacesNamespaceResourceclaimtemplatesName<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.apis)['resource.k8s.io']['v1']['namespaces'][':namespace']['resourceclaimtemplates'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)['resource.k8s.io']['v1']['namespaces'][':namespace']['resourceclaimtemplates'][':name']['$get']
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
        ? getGetApisResourceK8sIoV1NamespacesNamespaceResourceclaimtemplatesNameKey(args)
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
                (typeof client.apis)['resource.k8s.io']['v1']['namespaces'][':namespace']['resourceclaimtemplates'][':name']['$get']
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
          client.apis['resource.k8s.io'].v1.namespaces[':namespace'].resourceclaimtemplates[
            ':name'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutApisResourceK8sIoV1NamespacesNamespaceResourceclaimtemplatesNameKey() {
  return [
    'apis',
    '/apis/resource.k8s.io/v1/namespaces/:namespace/resourceclaimtemplates/:name',
    'PUT',
  ] as const
}

export function usePutApisResourceK8sIoV1NamespacesNamespaceResourceclaimtemplatesName<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['resource.k8s.io']['v1']['namespaces'][':namespace']['resourceclaimtemplates'][':name']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.apis)['resource.k8s.io']['v1']['namespaces'][':namespace']['resourceclaimtemplates'][':name']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPutApisResourceK8sIoV1NamespacesNamespaceResourceclaimtemplatesNameKey()
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
            (typeof client.apis)['resource.k8s.io']['v1']['namespaces'][':namespace']['resourceclaimtemplates'][':name']['$put']
          >
        },
      ) =>
        parseResponse(
          client.apis['resource.k8s.io'].v1.namespaces[':namespace'].resourceclaimtemplates[
            ':name'
          ].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApisResourceK8sIoV1NamespacesNamespaceResourceclaimtemplatesNameKey() {
  return [
    'apis',
    '/apis/resource.k8s.io/v1/namespaces/:namespace/resourceclaimtemplates/:name',
    'DELETE',
  ] as const
}

export function useDeleteApisResourceK8sIoV1NamespacesNamespaceResourceclaimtemplatesName<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['resource.k8s.io']['v1']['namespaces'][':namespace']['resourceclaimtemplates'][':name']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.apis)['resource.k8s.io']['v1']['namespaces'][':namespace']['resourceclaimtemplates'][':name']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteApisResourceK8sIoV1NamespacesNamespaceResourceclaimtemplatesNameKey()
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
            (typeof client.apis)['resource.k8s.io']['v1']['namespaces'][':namespace']['resourceclaimtemplates'][':name']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.apis['resource.k8s.io'].v1.namespaces[':namespace'].resourceclaimtemplates[
            ':name'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchApisResourceK8sIoV1NamespacesNamespaceResourceclaimtemplatesNameKey() {
  return [
    'apis',
    '/apis/resource.k8s.io/v1/namespaces/:namespace/resourceclaimtemplates/:name',
    'PATCH',
  ] as const
}

export function usePatchApisResourceK8sIoV1NamespacesNamespaceResourceclaimtemplatesName<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['resource.k8s.io']['v1']['namespaces'][':namespace']['resourceclaimtemplates'][':name']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.apis)['resource.k8s.io']['v1']['namespaces'][':namespace']['resourceclaimtemplates'][':name']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPatchApisResourceK8sIoV1NamespacesNamespaceResourceclaimtemplatesNameKey()
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
            (typeof client.apis)['resource.k8s.io']['v1']['namespaces'][':namespace']['resourceclaimtemplates'][':name']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.apis['resource.k8s.io'].v1.namespaces[':namespace'].resourceclaimtemplates[
            ':name'
          ].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApisResourceK8sIoV1ResourceclaimsKey(
  args: InferRequestType<(typeof client.apis)['resource.k8s.io']['v1']['resourceclaims']['$get']>,
) {
  return ['apis', '/apis/resource.k8s.io/v1/resourceclaims', args] as const
}

export function useGetApisResourceK8sIoV1Resourceclaims<TError = unknown>(
  args: InferRequestType<(typeof client.apis)['resource.k8s.io']['v1']['resourceclaims']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.apis)['resource.k8s.io']['v1']['resourceclaims']['$get']>
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
        ? getGetApisResourceK8sIoV1ResourceclaimsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.apis)['resource.k8s.io']['v1']['resourceclaims']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.apis['resource.k8s.io'].v1.resourceclaims.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisResourceK8sIoV1Resourceclaims<TError = unknown>(
  args: InferRequestType<(typeof client.apis)['resource.k8s.io']['v1']['resourceclaims']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.apis)['resource.k8s.io']['v1']['resourceclaims']['$get']>
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
        ? getGetApisResourceK8sIoV1ResourceclaimsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.apis)['resource.k8s.io']['v1']['resourceclaims']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.apis['resource.k8s.io'].v1.resourceclaims.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApisResourceK8sIoV1ResourceclaimtemplatesKey(
  args: InferRequestType<
    (typeof client.apis)['resource.k8s.io']['v1']['resourceclaimtemplates']['$get']
  >,
) {
  return ['apis', '/apis/resource.k8s.io/v1/resourceclaimtemplates', args] as const
}

export function useGetApisResourceK8sIoV1Resourceclaimtemplates<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis)['resource.k8s.io']['v1']['resourceclaimtemplates']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)['resource.k8s.io']['v1']['resourceclaimtemplates']['$get']
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
        ? getGetApisResourceK8sIoV1ResourceclaimtemplatesKey(args)
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
                (typeof client.apis)['resource.k8s.io']['v1']['resourceclaimtemplates']['$get']
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
          client.apis['resource.k8s.io'].v1.resourceclaimtemplates.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisResourceK8sIoV1Resourceclaimtemplates<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis)['resource.k8s.io']['v1']['resourceclaimtemplates']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)['resource.k8s.io']['v1']['resourceclaimtemplates']['$get']
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
        ? getGetApisResourceK8sIoV1ResourceclaimtemplatesKey(args)
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
                (typeof client.apis)['resource.k8s.io']['v1']['resourceclaimtemplates']['$get']
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
          client.apis['resource.k8s.io'].v1.resourceclaimtemplates.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApisResourceK8sIoV1ResourceslicesKey(
  args: InferRequestType<(typeof client.apis)['resource.k8s.io']['v1']['resourceslices']['$get']>,
) {
  return ['apis', '/apis/resource.k8s.io/v1/resourceslices', args] as const
}

export function useGetApisResourceK8sIoV1Resourceslices<TError = unknown>(
  args: InferRequestType<(typeof client.apis)['resource.k8s.io']['v1']['resourceslices']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.apis)['resource.k8s.io']['v1']['resourceslices']['$get']>
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
        ? getGetApisResourceK8sIoV1ResourceslicesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.apis)['resource.k8s.io']['v1']['resourceslices']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.apis['resource.k8s.io'].v1.resourceslices.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisResourceK8sIoV1Resourceslices<TError = unknown>(
  args: InferRequestType<(typeof client.apis)['resource.k8s.io']['v1']['resourceslices']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.apis)['resource.k8s.io']['v1']['resourceslices']['$get']>
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
        ? getGetApisResourceK8sIoV1ResourceslicesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.apis)['resource.k8s.io']['v1']['resourceslices']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.apis['resource.k8s.io'].v1.resourceslices.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApisResourceK8sIoV1ResourceslicesKey() {
  return ['apis', '/apis/resource.k8s.io/v1/resourceslices', 'POST'] as const
}

export function usePostApisResourceK8sIoV1Resourceslices<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.apis)['resource.k8s.io']['v1']['resourceslices']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.apis)['resource.k8s.io']['v1']['resourceslices']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApisResourceK8sIoV1ResourceslicesKey()
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
            (typeof client.apis)['resource.k8s.io']['v1']['resourceslices']['$post']
          >
        },
      ) =>
        parseResponse(client.apis['resource.k8s.io'].v1.resourceslices.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApisResourceK8sIoV1ResourceslicesKey() {
  return ['apis', '/apis/resource.k8s.io/v1/resourceslices', 'DELETE'] as const
}

export function useDeleteApisResourceK8sIoV1Resourceslices<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.apis)['resource.k8s.io']['v1']['resourceslices']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.apis)['resource.k8s.io']['v1']['resourceslices']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApisResourceK8sIoV1ResourceslicesKey()
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
            (typeof client.apis)['resource.k8s.io']['v1']['resourceslices']['$delete']
          >
        },
      ) =>
        parseResponse(client.apis['resource.k8s.io'].v1.resourceslices.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApisResourceK8sIoV1ResourceslicesNameKey(
  args: InferRequestType<
    (typeof client.apis)['resource.k8s.io']['v1']['resourceslices'][':name']['$get']
  >,
) {
  return ['apis', '/apis/resource.k8s.io/v1/resourceslices/:name', args] as const
}

export function useGetApisResourceK8sIoV1ResourceslicesName<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis)['resource.k8s.io']['v1']['resourceslices'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)['resource.k8s.io']['v1']['resourceslices'][':name']['$get']
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
        ? getGetApisResourceK8sIoV1ResourceslicesNameKey(args)
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
                (typeof client.apis)['resource.k8s.io']['v1']['resourceslices'][':name']['$get']
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
          client.apis['resource.k8s.io'].v1.resourceslices[':name'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisResourceK8sIoV1ResourceslicesName<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis)['resource.k8s.io']['v1']['resourceslices'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)['resource.k8s.io']['v1']['resourceslices'][':name']['$get']
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
        ? getGetApisResourceK8sIoV1ResourceslicesNameKey(args)
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
                (typeof client.apis)['resource.k8s.io']['v1']['resourceslices'][':name']['$get']
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
          client.apis['resource.k8s.io'].v1.resourceslices[':name'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutApisResourceK8sIoV1ResourceslicesNameKey() {
  return ['apis', '/apis/resource.k8s.io/v1/resourceslices/:name', 'PUT'] as const
}

export function usePutApisResourceK8sIoV1ResourceslicesName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['resource.k8s.io']['v1']['resourceslices'][':name']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.apis)['resource.k8s.io']['v1']['resourceslices'][':name']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApisResourceK8sIoV1ResourceslicesNameKey()
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
            (typeof client.apis)['resource.k8s.io']['v1']['resourceslices'][':name']['$put']
          >
        },
      ) =>
        parseResponse(
          client.apis['resource.k8s.io'].v1.resourceslices[':name'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApisResourceK8sIoV1ResourceslicesNameKey() {
  return ['apis', '/apis/resource.k8s.io/v1/resourceslices/:name', 'DELETE'] as const
}

export function useDeleteApisResourceK8sIoV1ResourceslicesName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['resource.k8s.io']['v1']['resourceslices'][':name']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.apis)['resource.k8s.io']['v1']['resourceslices'][':name']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApisResourceK8sIoV1ResourceslicesNameKey()
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
            (typeof client.apis)['resource.k8s.io']['v1']['resourceslices'][':name']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.apis['resource.k8s.io'].v1.resourceslices[':name'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchApisResourceK8sIoV1ResourceslicesNameKey() {
  return ['apis', '/apis/resource.k8s.io/v1/resourceslices/:name', 'PATCH'] as const
}

export function usePatchApisResourceK8sIoV1ResourceslicesName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['resource.k8s.io']['v1']['resourceslices'][':name']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.apis)['resource.k8s.io']['v1']['resourceslices'][':name']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApisResourceK8sIoV1ResourceslicesNameKey()
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
            (typeof client.apis)['resource.k8s.io']['v1']['resourceslices'][':name']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.apis['resource.k8s.io'].v1.resourceslices[':name'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApisResourceK8sIoV1WatchDeviceclassesKey(
  args: InferRequestType<
    (typeof client.apis)['resource.k8s.io']['v1']['watch']['deviceclasses']['$get']
  >,
) {
  return ['apis', '/apis/resource.k8s.io/v1/watch/deviceclasses', args] as const
}

export function useGetApisResourceK8sIoV1WatchDeviceclasses<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis)['resource.k8s.io']['v1']['watch']['deviceclasses']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)['resource.k8s.io']['v1']['watch']['deviceclasses']['$get']
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
        ? getGetApisResourceK8sIoV1WatchDeviceclassesKey(args)
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
                (typeof client.apis)['resource.k8s.io']['v1']['watch']['deviceclasses']['$get']
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
          client.apis['resource.k8s.io'].v1.watch.deviceclasses.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisResourceK8sIoV1WatchDeviceclasses<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis)['resource.k8s.io']['v1']['watch']['deviceclasses']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)['resource.k8s.io']['v1']['watch']['deviceclasses']['$get']
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
        ? getGetApisResourceK8sIoV1WatchDeviceclassesKey(args)
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
                (typeof client.apis)['resource.k8s.io']['v1']['watch']['deviceclasses']['$get']
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
          client.apis['resource.k8s.io'].v1.watch.deviceclasses.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApisResourceK8sIoV1WatchDeviceclassesNameKey(
  args: InferRequestType<
    (typeof client.apis)['resource.k8s.io']['v1']['watch']['deviceclasses'][':name']['$get']
  >,
) {
  return ['apis', '/apis/resource.k8s.io/v1/watch/deviceclasses/:name', args] as const
}

export function useGetApisResourceK8sIoV1WatchDeviceclassesName<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis)['resource.k8s.io']['v1']['watch']['deviceclasses'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)['resource.k8s.io']['v1']['watch']['deviceclasses'][':name']['$get']
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
        ? getGetApisResourceK8sIoV1WatchDeviceclassesNameKey(args)
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
                (typeof client.apis)['resource.k8s.io']['v1']['watch']['deviceclasses'][':name']['$get']
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
          client.apis['resource.k8s.io'].v1.watch.deviceclasses[':name'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisResourceK8sIoV1WatchDeviceclassesName<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis)['resource.k8s.io']['v1']['watch']['deviceclasses'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)['resource.k8s.io']['v1']['watch']['deviceclasses'][':name']['$get']
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
        ? getGetApisResourceK8sIoV1WatchDeviceclassesNameKey(args)
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
                (typeof client.apis)['resource.k8s.io']['v1']['watch']['deviceclasses'][':name']['$get']
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
          client.apis['resource.k8s.io'].v1.watch.deviceclasses[':name'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApisResourceK8sIoV1WatchDevicetaintrulesKey(
  args: InferRequestType<
    (typeof client.apis)['resource.k8s.io']['v1']['watch']['devicetaintrules']['$get']
  >,
) {
  return ['apis', '/apis/resource.k8s.io/v1/watch/devicetaintrules', args] as const
}

export function useGetApisResourceK8sIoV1WatchDevicetaintrules<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis)['resource.k8s.io']['v1']['watch']['devicetaintrules']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)['resource.k8s.io']['v1']['watch']['devicetaintrules']['$get']
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
        ? getGetApisResourceK8sIoV1WatchDevicetaintrulesKey(args)
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
                (typeof client.apis)['resource.k8s.io']['v1']['watch']['devicetaintrules']['$get']
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
          client.apis['resource.k8s.io'].v1.watch.devicetaintrules.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisResourceK8sIoV1WatchDevicetaintrules<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis)['resource.k8s.io']['v1']['watch']['devicetaintrules']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)['resource.k8s.io']['v1']['watch']['devicetaintrules']['$get']
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
        ? getGetApisResourceK8sIoV1WatchDevicetaintrulesKey(args)
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
                (typeof client.apis)['resource.k8s.io']['v1']['watch']['devicetaintrules']['$get']
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
          client.apis['resource.k8s.io'].v1.watch.devicetaintrules.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApisResourceK8sIoV1WatchDevicetaintrulesNameKey(
  args: InferRequestType<
    (typeof client.apis)['resource.k8s.io']['v1']['watch']['devicetaintrules'][':name']['$get']
  >,
) {
  return ['apis', '/apis/resource.k8s.io/v1/watch/devicetaintrules/:name', args] as const
}

export function useGetApisResourceK8sIoV1WatchDevicetaintrulesName<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis)['resource.k8s.io']['v1']['watch']['devicetaintrules'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)['resource.k8s.io']['v1']['watch']['devicetaintrules'][':name']['$get']
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
        ? getGetApisResourceK8sIoV1WatchDevicetaintrulesNameKey(args)
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
                (typeof client.apis)['resource.k8s.io']['v1']['watch']['devicetaintrules'][':name']['$get']
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
          client.apis['resource.k8s.io'].v1.watch.devicetaintrules[':name'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisResourceK8sIoV1WatchDevicetaintrulesName<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis)['resource.k8s.io']['v1']['watch']['devicetaintrules'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)['resource.k8s.io']['v1']['watch']['devicetaintrules'][':name']['$get']
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
        ? getGetApisResourceK8sIoV1WatchDevicetaintrulesNameKey(args)
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
                (typeof client.apis)['resource.k8s.io']['v1']['watch']['devicetaintrules'][':name']['$get']
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
          client.apis['resource.k8s.io'].v1.watch.devicetaintrules[':name'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApisResourceK8sIoV1WatchNamespacesNamespaceResourceclaimsKey(
  args: InferRequestType<
    (typeof client.apis)['resource.k8s.io']['v1']['watch']['namespaces'][':namespace']['resourceclaims']['$get']
  >,
) {
  return [
    'apis',
    '/apis/resource.k8s.io/v1/watch/namespaces/:namespace/resourceclaims',
    args,
  ] as const
}

export function useGetApisResourceK8sIoV1WatchNamespacesNamespaceResourceclaims<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis)['resource.k8s.io']['v1']['watch']['namespaces'][':namespace']['resourceclaims']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)['resource.k8s.io']['v1']['watch']['namespaces'][':namespace']['resourceclaims']['$get']
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
        ? getGetApisResourceK8sIoV1WatchNamespacesNamespaceResourceclaimsKey(args)
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
                (typeof client.apis)['resource.k8s.io']['v1']['watch']['namespaces'][':namespace']['resourceclaims']['$get']
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
          client.apis['resource.k8s.io'].v1.watch.namespaces[':namespace'].resourceclaims.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisResourceK8sIoV1WatchNamespacesNamespaceResourceclaims<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.apis)['resource.k8s.io']['v1']['watch']['namespaces'][':namespace']['resourceclaims']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)['resource.k8s.io']['v1']['watch']['namespaces'][':namespace']['resourceclaims']['$get']
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
        ? getGetApisResourceK8sIoV1WatchNamespacesNamespaceResourceclaimsKey(args)
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
                (typeof client.apis)['resource.k8s.io']['v1']['watch']['namespaces'][':namespace']['resourceclaims']['$get']
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
          client.apis['resource.k8s.io'].v1.watch.namespaces[':namespace'].resourceclaims.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApisResourceK8sIoV1WatchNamespacesNamespaceResourceclaimsNameKey(
  args: InferRequestType<
    (typeof client.apis)['resource.k8s.io']['v1']['watch']['namespaces'][':namespace']['resourceclaims'][':name']['$get']
  >,
) {
  return [
    'apis',
    '/apis/resource.k8s.io/v1/watch/namespaces/:namespace/resourceclaims/:name',
    args,
  ] as const
}

export function useGetApisResourceK8sIoV1WatchNamespacesNamespaceResourceclaimsName<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.apis)['resource.k8s.io']['v1']['watch']['namespaces'][':namespace']['resourceclaims'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)['resource.k8s.io']['v1']['watch']['namespaces'][':namespace']['resourceclaims'][':name']['$get']
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
        ? getGetApisResourceK8sIoV1WatchNamespacesNamespaceResourceclaimsNameKey(args)
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
                (typeof client.apis)['resource.k8s.io']['v1']['watch']['namespaces'][':namespace']['resourceclaims'][':name']['$get']
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
          client.apis['resource.k8s.io'].v1.watch.namespaces[':namespace'].resourceclaims[
            ':name'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisResourceK8sIoV1WatchNamespacesNamespaceResourceclaimsName<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.apis)['resource.k8s.io']['v1']['watch']['namespaces'][':namespace']['resourceclaims'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)['resource.k8s.io']['v1']['watch']['namespaces'][':namespace']['resourceclaims'][':name']['$get']
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
        ? getGetApisResourceK8sIoV1WatchNamespacesNamespaceResourceclaimsNameKey(args)
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
                (typeof client.apis)['resource.k8s.io']['v1']['watch']['namespaces'][':namespace']['resourceclaims'][':name']['$get']
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
          client.apis['resource.k8s.io'].v1.watch.namespaces[':namespace'].resourceclaims[
            ':name'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApisResourceK8sIoV1WatchNamespacesNamespaceResourceclaimtemplatesKey(
  args: InferRequestType<
    (typeof client.apis)['resource.k8s.io']['v1']['watch']['namespaces'][':namespace']['resourceclaimtemplates']['$get']
  >,
) {
  return [
    'apis',
    '/apis/resource.k8s.io/v1/watch/namespaces/:namespace/resourceclaimtemplates',
    args,
  ] as const
}

export function useGetApisResourceK8sIoV1WatchNamespacesNamespaceResourceclaimtemplates<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.apis)['resource.k8s.io']['v1']['watch']['namespaces'][':namespace']['resourceclaimtemplates']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)['resource.k8s.io']['v1']['watch']['namespaces'][':namespace']['resourceclaimtemplates']['$get']
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
        ? getGetApisResourceK8sIoV1WatchNamespacesNamespaceResourceclaimtemplatesKey(args)
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
                (typeof client.apis)['resource.k8s.io']['v1']['watch']['namespaces'][':namespace']['resourceclaimtemplates']['$get']
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
          client.apis['resource.k8s.io'].v1.watch.namespaces[
            ':namespace'
          ].resourceclaimtemplates.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisResourceK8sIoV1WatchNamespacesNamespaceResourceclaimtemplates<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.apis)['resource.k8s.io']['v1']['watch']['namespaces'][':namespace']['resourceclaimtemplates']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)['resource.k8s.io']['v1']['watch']['namespaces'][':namespace']['resourceclaimtemplates']['$get']
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
        ? getGetApisResourceK8sIoV1WatchNamespacesNamespaceResourceclaimtemplatesKey(args)
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
                (typeof client.apis)['resource.k8s.io']['v1']['watch']['namespaces'][':namespace']['resourceclaimtemplates']['$get']
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
          client.apis['resource.k8s.io'].v1.watch.namespaces[
            ':namespace'
          ].resourceclaimtemplates.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApisResourceK8sIoV1WatchNamespacesNamespaceResourceclaimtemplatesNameKey(
  args: InferRequestType<
    (typeof client.apis)['resource.k8s.io']['v1']['watch']['namespaces'][':namespace']['resourceclaimtemplates'][':name']['$get']
  >,
) {
  return [
    'apis',
    '/apis/resource.k8s.io/v1/watch/namespaces/:namespace/resourceclaimtemplates/:name',
    args,
  ] as const
}

export function useGetApisResourceK8sIoV1WatchNamespacesNamespaceResourceclaimtemplatesName<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.apis)['resource.k8s.io']['v1']['watch']['namespaces'][':namespace']['resourceclaimtemplates'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)['resource.k8s.io']['v1']['watch']['namespaces'][':namespace']['resourceclaimtemplates'][':name']['$get']
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
        ? getGetApisResourceK8sIoV1WatchNamespacesNamespaceResourceclaimtemplatesNameKey(args)
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
                (typeof client.apis)['resource.k8s.io']['v1']['watch']['namespaces'][':namespace']['resourceclaimtemplates'][':name']['$get']
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
          client.apis['resource.k8s.io'].v1.watch.namespaces[':namespace'].resourceclaimtemplates[
            ':name'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisResourceK8sIoV1WatchNamespacesNamespaceResourceclaimtemplatesName<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.apis)['resource.k8s.io']['v1']['watch']['namespaces'][':namespace']['resourceclaimtemplates'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)['resource.k8s.io']['v1']['watch']['namespaces'][':namespace']['resourceclaimtemplates'][':name']['$get']
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
        ? getGetApisResourceK8sIoV1WatchNamespacesNamespaceResourceclaimtemplatesNameKey(args)
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
                (typeof client.apis)['resource.k8s.io']['v1']['watch']['namespaces'][':namespace']['resourceclaimtemplates'][':name']['$get']
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
          client.apis['resource.k8s.io'].v1.watch.namespaces[':namespace'].resourceclaimtemplates[
            ':name'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApisResourceK8sIoV1WatchResourceclaimsKey(
  args: InferRequestType<
    (typeof client.apis)['resource.k8s.io']['v1']['watch']['resourceclaims']['$get']
  >,
) {
  return ['apis', '/apis/resource.k8s.io/v1/watch/resourceclaims', args] as const
}

export function useGetApisResourceK8sIoV1WatchResourceclaims<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis)['resource.k8s.io']['v1']['watch']['resourceclaims']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)['resource.k8s.io']['v1']['watch']['resourceclaims']['$get']
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
        ? getGetApisResourceK8sIoV1WatchResourceclaimsKey(args)
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
                (typeof client.apis)['resource.k8s.io']['v1']['watch']['resourceclaims']['$get']
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
          client.apis['resource.k8s.io'].v1.watch.resourceclaims.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisResourceK8sIoV1WatchResourceclaims<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis)['resource.k8s.io']['v1']['watch']['resourceclaims']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)['resource.k8s.io']['v1']['watch']['resourceclaims']['$get']
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
        ? getGetApisResourceK8sIoV1WatchResourceclaimsKey(args)
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
                (typeof client.apis)['resource.k8s.io']['v1']['watch']['resourceclaims']['$get']
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
          client.apis['resource.k8s.io'].v1.watch.resourceclaims.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApisResourceK8sIoV1WatchResourceclaimtemplatesKey(
  args: InferRequestType<
    (typeof client.apis)['resource.k8s.io']['v1']['watch']['resourceclaimtemplates']['$get']
  >,
) {
  return ['apis', '/apis/resource.k8s.io/v1/watch/resourceclaimtemplates', args] as const
}

export function useGetApisResourceK8sIoV1WatchResourceclaimtemplates<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis)['resource.k8s.io']['v1']['watch']['resourceclaimtemplates']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)['resource.k8s.io']['v1']['watch']['resourceclaimtemplates']['$get']
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
        ? getGetApisResourceK8sIoV1WatchResourceclaimtemplatesKey(args)
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
                (typeof client.apis)['resource.k8s.io']['v1']['watch']['resourceclaimtemplates']['$get']
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
          client.apis['resource.k8s.io'].v1.watch.resourceclaimtemplates.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisResourceK8sIoV1WatchResourceclaimtemplates<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis)['resource.k8s.io']['v1']['watch']['resourceclaimtemplates']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)['resource.k8s.io']['v1']['watch']['resourceclaimtemplates']['$get']
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
        ? getGetApisResourceK8sIoV1WatchResourceclaimtemplatesKey(args)
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
                (typeof client.apis)['resource.k8s.io']['v1']['watch']['resourceclaimtemplates']['$get']
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
          client.apis['resource.k8s.io'].v1.watch.resourceclaimtemplates.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApisResourceK8sIoV1WatchResourceslicesKey(
  args: InferRequestType<
    (typeof client.apis)['resource.k8s.io']['v1']['watch']['resourceslices']['$get']
  >,
) {
  return ['apis', '/apis/resource.k8s.io/v1/watch/resourceslices', args] as const
}

export function useGetApisResourceK8sIoV1WatchResourceslices<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis)['resource.k8s.io']['v1']['watch']['resourceslices']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)['resource.k8s.io']['v1']['watch']['resourceslices']['$get']
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
        ? getGetApisResourceK8sIoV1WatchResourceslicesKey(args)
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
                (typeof client.apis)['resource.k8s.io']['v1']['watch']['resourceslices']['$get']
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
          client.apis['resource.k8s.io'].v1.watch.resourceslices.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisResourceK8sIoV1WatchResourceslices<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis)['resource.k8s.io']['v1']['watch']['resourceslices']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)['resource.k8s.io']['v1']['watch']['resourceslices']['$get']
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
        ? getGetApisResourceK8sIoV1WatchResourceslicesKey(args)
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
                (typeof client.apis)['resource.k8s.io']['v1']['watch']['resourceslices']['$get']
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
          client.apis['resource.k8s.io'].v1.watch.resourceslices.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApisResourceK8sIoV1WatchResourceslicesNameKey(
  args: InferRequestType<
    (typeof client.apis)['resource.k8s.io']['v1']['watch']['resourceslices'][':name']['$get']
  >,
) {
  return ['apis', '/apis/resource.k8s.io/v1/watch/resourceslices/:name', args] as const
}

export function useGetApisResourceK8sIoV1WatchResourceslicesName<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis)['resource.k8s.io']['v1']['watch']['resourceslices'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)['resource.k8s.io']['v1']['watch']['resourceslices'][':name']['$get']
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
        ? getGetApisResourceK8sIoV1WatchResourceslicesNameKey(args)
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
                (typeof client.apis)['resource.k8s.io']['v1']['watch']['resourceslices'][':name']['$get']
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
          client.apis['resource.k8s.io'].v1.watch.resourceslices[':name'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisResourceK8sIoV1WatchResourceslicesName<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis)['resource.k8s.io']['v1']['watch']['resourceslices'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)['resource.k8s.io']['v1']['watch']['resourceslices'][':name']['$get']
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
        ? getGetApisResourceK8sIoV1WatchResourceslicesNameKey(args)
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
                (typeof client.apis)['resource.k8s.io']['v1']['watch']['resourceslices'][':name']['$get']
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
          client.apis['resource.k8s.io'].v1.watch.resourceslices[':name'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}
