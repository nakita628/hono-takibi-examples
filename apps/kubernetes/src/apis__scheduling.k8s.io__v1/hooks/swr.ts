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

export function getGetApisSchedulingK8sIoV1IndexKey() {
  return ['apis', '/apis/scheduling.k8s.io/v1/'] as const
}

export function useGetApisSchedulingK8sIoV1Index<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apis)['scheduling.k8s.io']['v1']['index']['$get']>>
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
        ? getGetApisSchedulingK8sIoV1IndexKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apis)['scheduling.k8s.io']['v1']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.apis['scheduling.k8s.io'].v1.index.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisSchedulingK8sIoV1Index<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apis)['scheduling.k8s.io']['v1']['index']['$get']>>
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
        ? getGetApisSchedulingK8sIoV1IndexKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apis)['scheduling.k8s.io']['v1']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.apis['scheduling.k8s.io'].v1.index.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApisSchedulingK8sIoV1PriorityclassesKey(
  args: InferRequestType<
    (typeof client.apis)['scheduling.k8s.io']['v1']['priorityclasses']['$get']
  >,
) {
  return ['apis', '/apis/scheduling.k8s.io/v1/priorityclasses', args] as const
}

export function useGetApisSchedulingK8sIoV1Priorityclasses<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis)['scheduling.k8s.io']['v1']['priorityclasses']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.apis)['scheduling.k8s.io']['v1']['priorityclasses']['$get']>
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
        ? getGetApisSchedulingK8sIoV1PriorityclassesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.apis)['scheduling.k8s.io']['v1']['priorityclasses']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.apis['scheduling.k8s.io'].v1.priorityclasses.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisSchedulingK8sIoV1Priorityclasses<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis)['scheduling.k8s.io']['v1']['priorityclasses']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.apis)['scheduling.k8s.io']['v1']['priorityclasses']['$get']>
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
        ? getGetApisSchedulingK8sIoV1PriorityclassesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.apis)['scheduling.k8s.io']['v1']['priorityclasses']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.apis['scheduling.k8s.io'].v1.priorityclasses.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApisSchedulingK8sIoV1PriorityclassesKey() {
  return ['apis', '/apis/scheduling.k8s.io/v1/priorityclasses', 'POST'] as const
}

export function usePostApisSchedulingK8sIoV1Priorityclasses<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.apis)['scheduling.k8s.io']['v1']['priorityclasses']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.apis)['scheduling.k8s.io']['v1']['priorityclasses']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApisSchedulingK8sIoV1PriorityclassesKey()
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
            (typeof client.apis)['scheduling.k8s.io']['v1']['priorityclasses']['$post']
          >
        },
      ) =>
        parseResponse(
          client.apis['scheduling.k8s.io'].v1.priorityclasses.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApisSchedulingK8sIoV1PriorityclassesKey() {
  return ['apis', '/apis/scheduling.k8s.io/v1/priorityclasses', 'DELETE'] as const
}

export function useDeleteApisSchedulingK8sIoV1Priorityclasses<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['scheduling.k8s.io']['v1']['priorityclasses']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.apis)['scheduling.k8s.io']['v1']['priorityclasses']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApisSchedulingK8sIoV1PriorityclassesKey()
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
            (typeof client.apis)['scheduling.k8s.io']['v1']['priorityclasses']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.apis['scheduling.k8s.io'].v1.priorityclasses.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApisSchedulingK8sIoV1PriorityclassesNameKey(
  args: InferRequestType<
    (typeof client.apis)['scheduling.k8s.io']['v1']['priorityclasses'][':name']['$get']
  >,
) {
  return ['apis', '/apis/scheduling.k8s.io/v1/priorityclasses/:name', args] as const
}

export function useGetApisSchedulingK8sIoV1PriorityclassesName<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis)['scheduling.k8s.io']['v1']['priorityclasses'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)['scheduling.k8s.io']['v1']['priorityclasses'][':name']['$get']
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
        ? getGetApisSchedulingK8sIoV1PriorityclassesNameKey(args)
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
                (typeof client.apis)['scheduling.k8s.io']['v1']['priorityclasses'][':name']['$get']
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
          client.apis['scheduling.k8s.io'].v1.priorityclasses[':name'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisSchedulingK8sIoV1PriorityclassesName<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis)['scheduling.k8s.io']['v1']['priorityclasses'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)['scheduling.k8s.io']['v1']['priorityclasses'][':name']['$get']
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
        ? getGetApisSchedulingK8sIoV1PriorityclassesNameKey(args)
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
                (typeof client.apis)['scheduling.k8s.io']['v1']['priorityclasses'][':name']['$get']
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
          client.apis['scheduling.k8s.io'].v1.priorityclasses[':name'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutApisSchedulingK8sIoV1PriorityclassesNameKey() {
  return ['apis', '/apis/scheduling.k8s.io/v1/priorityclasses/:name', 'PUT'] as const
}

export function usePutApisSchedulingK8sIoV1PriorityclassesName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['scheduling.k8s.io']['v1']['priorityclasses'][':name']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.apis)['scheduling.k8s.io']['v1']['priorityclasses'][':name']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApisSchedulingK8sIoV1PriorityclassesNameKey()
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
            (typeof client.apis)['scheduling.k8s.io']['v1']['priorityclasses'][':name']['$put']
          >
        },
      ) =>
        parseResponse(
          client.apis['scheduling.k8s.io'].v1.priorityclasses[':name'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApisSchedulingK8sIoV1PriorityclassesNameKey() {
  return ['apis', '/apis/scheduling.k8s.io/v1/priorityclasses/:name', 'DELETE'] as const
}

export function useDeleteApisSchedulingK8sIoV1PriorityclassesName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['scheduling.k8s.io']['v1']['priorityclasses'][':name']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.apis)['scheduling.k8s.io']['v1']['priorityclasses'][':name']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApisSchedulingK8sIoV1PriorityclassesNameKey()
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
            (typeof client.apis)['scheduling.k8s.io']['v1']['priorityclasses'][':name']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.apis['scheduling.k8s.io'].v1.priorityclasses[':name'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchApisSchedulingK8sIoV1PriorityclassesNameKey() {
  return ['apis', '/apis/scheduling.k8s.io/v1/priorityclasses/:name', 'PATCH'] as const
}

export function usePatchApisSchedulingK8sIoV1PriorityclassesName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['scheduling.k8s.io']['v1']['priorityclasses'][':name']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.apis)['scheduling.k8s.io']['v1']['priorityclasses'][':name']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApisSchedulingK8sIoV1PriorityclassesNameKey()
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
            (typeof client.apis)['scheduling.k8s.io']['v1']['priorityclasses'][':name']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.apis['scheduling.k8s.io'].v1.priorityclasses[':name'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApisSchedulingK8sIoV1WatchPriorityclassesKey(
  args: InferRequestType<
    (typeof client.apis)['scheduling.k8s.io']['v1']['watch']['priorityclasses']['$get']
  >,
) {
  return ['apis', '/apis/scheduling.k8s.io/v1/watch/priorityclasses', args] as const
}

export function useGetApisSchedulingK8sIoV1WatchPriorityclasses<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis)['scheduling.k8s.io']['v1']['watch']['priorityclasses']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)['scheduling.k8s.io']['v1']['watch']['priorityclasses']['$get']
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
        ? getGetApisSchedulingK8sIoV1WatchPriorityclassesKey(args)
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
                (typeof client.apis)['scheduling.k8s.io']['v1']['watch']['priorityclasses']['$get']
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
          client.apis['scheduling.k8s.io'].v1.watch.priorityclasses.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisSchedulingK8sIoV1WatchPriorityclasses<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis)['scheduling.k8s.io']['v1']['watch']['priorityclasses']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)['scheduling.k8s.io']['v1']['watch']['priorityclasses']['$get']
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
        ? getGetApisSchedulingK8sIoV1WatchPriorityclassesKey(args)
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
                (typeof client.apis)['scheduling.k8s.io']['v1']['watch']['priorityclasses']['$get']
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
          client.apis['scheduling.k8s.io'].v1.watch.priorityclasses.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApisSchedulingK8sIoV1WatchPriorityclassesNameKey(
  args: InferRequestType<
    (typeof client.apis)['scheduling.k8s.io']['v1']['watch']['priorityclasses'][':name']['$get']
  >,
) {
  return ['apis', '/apis/scheduling.k8s.io/v1/watch/priorityclasses/:name', args] as const
}

export function useGetApisSchedulingK8sIoV1WatchPriorityclassesName<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis)['scheduling.k8s.io']['v1']['watch']['priorityclasses'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)['scheduling.k8s.io']['v1']['watch']['priorityclasses'][':name']['$get']
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
        ? getGetApisSchedulingK8sIoV1WatchPriorityclassesNameKey(args)
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
                (typeof client.apis)['scheduling.k8s.io']['v1']['watch']['priorityclasses'][':name']['$get']
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
          client.apis['scheduling.k8s.io'].v1.watch.priorityclasses[':name'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisSchedulingK8sIoV1WatchPriorityclassesName<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis)['scheduling.k8s.io']['v1']['watch']['priorityclasses'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)['scheduling.k8s.io']['v1']['watch']['priorityclasses'][':name']['$get']
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
        ? getGetApisSchedulingK8sIoV1WatchPriorityclassesNameKey(args)
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
                (typeof client.apis)['scheduling.k8s.io']['v1']['watch']['priorityclasses'][':name']['$get']
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
          client.apis['scheduling.k8s.io'].v1.watch.priorityclasses[':name'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}
