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

export function getGetApisEventsK8sIoV1IndexKey() {
  return ['apis', '/apis/events.k8s.io/v1/'] as const
}

export function useGetApisEventsK8sIoV1Index<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apis)['events.k8s.io']['v1']['index']['$get']>>
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
        ? getGetApisEventsK8sIoV1IndexKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apis)['events.k8s.io']['v1']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.apis['events.k8s.io'].v1.index.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisEventsK8sIoV1Index<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.apis)['events.k8s.io']['v1']['index']['$get']>>
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
        ? getGetApisEventsK8sIoV1IndexKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apis)['events.k8s.io']['v1']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.apis['events.k8s.io'].v1.index.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApisEventsK8sIoV1EventsKey(
  args: InferRequestType<(typeof client.apis)['events.k8s.io']['v1']['events']['$get']>,
) {
  return ['apis', '/apis/events.k8s.io/v1/events', args] as const
}

export function useGetApisEventsK8sIoV1Events<TError = unknown>(
  args: InferRequestType<(typeof client.apis)['events.k8s.io']['v1']['events']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apis)['events.k8s.io']['v1']['events']['$get']>>
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
        ? getGetApisEventsK8sIoV1EventsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apis)['events.k8s.io']['v1']['events']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.apis['events.k8s.io'].v1.events.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisEventsK8sIoV1Events<TError = unknown>(
  args: InferRequestType<(typeof client.apis)['events.k8s.io']['v1']['events']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apis)['events.k8s.io']['v1']['events']['$get']>>
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
        ? getGetApisEventsK8sIoV1EventsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.apis)['events.k8s.io']['v1']['events']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.apis['events.k8s.io'].v1.events.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApisEventsK8sIoV1NamespacesNamespaceEventsKey(
  args: InferRequestType<
    (typeof client.apis)['events.k8s.io']['v1']['namespaces'][':namespace']['events']['$get']
  >,
) {
  return ['apis', '/apis/events.k8s.io/v1/namespaces/:namespace/events', args] as const
}

export function useGetApisEventsK8sIoV1NamespacesNamespaceEvents<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis)['events.k8s.io']['v1']['namespaces'][':namespace']['events']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)['events.k8s.io']['v1']['namespaces'][':namespace']['events']['$get']
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
        ? getGetApisEventsK8sIoV1NamespacesNamespaceEventsKey(args)
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
                (typeof client.apis)['events.k8s.io']['v1']['namespaces'][':namespace']['events']['$get']
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
          client.apis['events.k8s.io'].v1.namespaces[':namespace'].events.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisEventsK8sIoV1NamespacesNamespaceEvents<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis)['events.k8s.io']['v1']['namespaces'][':namespace']['events']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)['events.k8s.io']['v1']['namespaces'][':namespace']['events']['$get']
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
        ? getGetApisEventsK8sIoV1NamespacesNamespaceEventsKey(args)
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
                (typeof client.apis)['events.k8s.io']['v1']['namespaces'][':namespace']['events']['$get']
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
          client.apis['events.k8s.io'].v1.namespaces[':namespace'].events.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApisEventsK8sIoV1NamespacesNamespaceEventsKey() {
  return ['apis', '/apis/events.k8s.io/v1/namespaces/:namespace/events', 'POST'] as const
}

export function usePostApisEventsK8sIoV1NamespacesNamespaceEvents<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['events.k8s.io']['v1']['namespaces'][':namespace']['events']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.apis)['events.k8s.io']['v1']['namespaces'][':namespace']['events']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApisEventsK8sIoV1NamespacesNamespaceEventsKey()
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
            (typeof client.apis)['events.k8s.io']['v1']['namespaces'][':namespace']['events']['$post']
          >
        },
      ) =>
        parseResponse(
          client.apis['events.k8s.io'].v1.namespaces[':namespace'].events.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApisEventsK8sIoV1NamespacesNamespaceEventsKey() {
  return ['apis', '/apis/events.k8s.io/v1/namespaces/:namespace/events', 'DELETE'] as const
}

export function useDeleteApisEventsK8sIoV1NamespacesNamespaceEvents<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['events.k8s.io']['v1']['namespaces'][':namespace']['events']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.apis)['events.k8s.io']['v1']['namespaces'][':namespace']['events']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApisEventsK8sIoV1NamespacesNamespaceEventsKey()
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
            (typeof client.apis)['events.k8s.io']['v1']['namespaces'][':namespace']['events']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.apis['events.k8s.io'].v1.namespaces[':namespace'].events.$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApisEventsK8sIoV1NamespacesNamespaceEventsNameKey(
  args: InferRequestType<
    (typeof client.apis)['events.k8s.io']['v1']['namespaces'][':namespace']['events'][':name']['$get']
  >,
) {
  return ['apis', '/apis/events.k8s.io/v1/namespaces/:namespace/events/:name', args] as const
}

export function useGetApisEventsK8sIoV1NamespacesNamespaceEventsName<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis)['events.k8s.io']['v1']['namespaces'][':namespace']['events'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)['events.k8s.io']['v1']['namespaces'][':namespace']['events'][':name']['$get']
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
        ? getGetApisEventsK8sIoV1NamespacesNamespaceEventsNameKey(args)
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
                (typeof client.apis)['events.k8s.io']['v1']['namespaces'][':namespace']['events'][':name']['$get']
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
          client.apis['events.k8s.io'].v1.namespaces[':namespace'].events[':name'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisEventsK8sIoV1NamespacesNamespaceEventsName<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis)['events.k8s.io']['v1']['namespaces'][':namespace']['events'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)['events.k8s.io']['v1']['namespaces'][':namespace']['events'][':name']['$get']
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
        ? getGetApisEventsK8sIoV1NamespacesNamespaceEventsNameKey(args)
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
                (typeof client.apis)['events.k8s.io']['v1']['namespaces'][':namespace']['events'][':name']['$get']
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
          client.apis['events.k8s.io'].v1.namespaces[':namespace'].events[':name'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutApisEventsK8sIoV1NamespacesNamespaceEventsNameKey() {
  return ['apis', '/apis/events.k8s.io/v1/namespaces/:namespace/events/:name', 'PUT'] as const
}

export function usePutApisEventsK8sIoV1NamespacesNamespaceEventsName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['events.k8s.io']['v1']['namespaces'][':namespace']['events'][':name']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.apis)['events.k8s.io']['v1']['namespaces'][':namespace']['events'][':name']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApisEventsK8sIoV1NamespacesNamespaceEventsNameKey()
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
            (typeof client.apis)['events.k8s.io']['v1']['namespaces'][':namespace']['events'][':name']['$put']
          >
        },
      ) =>
        parseResponse(
          client.apis['events.k8s.io'].v1.namespaces[':namespace'].events[':name'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApisEventsK8sIoV1NamespacesNamespaceEventsNameKey() {
  return ['apis', '/apis/events.k8s.io/v1/namespaces/:namespace/events/:name', 'DELETE'] as const
}

export function useDeleteApisEventsK8sIoV1NamespacesNamespaceEventsName<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['events.k8s.io']['v1']['namespaces'][':namespace']['events'][':name']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.apis)['events.k8s.io']['v1']['namespaces'][':namespace']['events'][':name']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApisEventsK8sIoV1NamespacesNamespaceEventsNameKey()
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
            (typeof client.apis)['events.k8s.io']['v1']['namespaces'][':namespace']['events'][':name']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.apis['events.k8s.io'].v1.namespaces[':namespace'].events[':name'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchApisEventsK8sIoV1NamespacesNamespaceEventsNameKey() {
  return ['apis', '/apis/events.k8s.io/v1/namespaces/:namespace/events/:name', 'PATCH'] as const
}

export function usePatchApisEventsK8sIoV1NamespacesNamespaceEventsName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['events.k8s.io']['v1']['namespaces'][':namespace']['events'][':name']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.apis)['events.k8s.io']['v1']['namespaces'][':namespace']['events'][':name']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApisEventsK8sIoV1NamespacesNamespaceEventsNameKey()
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
            (typeof client.apis)['events.k8s.io']['v1']['namespaces'][':namespace']['events'][':name']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.apis['events.k8s.io'].v1.namespaces[':namespace'].events[':name'].$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApisEventsK8sIoV1WatchEventsKey(
  args: InferRequestType<(typeof client.apis)['events.k8s.io']['v1']['watch']['events']['$get']>,
) {
  return ['apis', '/apis/events.k8s.io/v1/watch/events', args] as const
}

export function useGetApisEventsK8sIoV1WatchEvents<TError = unknown>(
  args: InferRequestType<(typeof client.apis)['events.k8s.io']['v1']['watch']['events']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.apis)['events.k8s.io']['v1']['watch']['events']['$get']>
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
        ? getGetApisEventsK8sIoV1WatchEventsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.apis)['events.k8s.io']['v1']['watch']['events']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.apis['events.k8s.io'].v1.watch.events.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisEventsK8sIoV1WatchEvents<TError = unknown>(
  args: InferRequestType<(typeof client.apis)['events.k8s.io']['v1']['watch']['events']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.apis)['events.k8s.io']['v1']['watch']['events']['$get']>
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
        ? getGetApisEventsK8sIoV1WatchEventsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.apis)['events.k8s.io']['v1']['watch']['events']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.apis['events.k8s.io'].v1.watch.events.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApisEventsK8sIoV1WatchNamespacesNamespaceEventsKey(
  args: InferRequestType<
    (typeof client.apis)['events.k8s.io']['v1']['watch']['namespaces'][':namespace']['events']['$get']
  >,
) {
  return ['apis', '/apis/events.k8s.io/v1/watch/namespaces/:namespace/events', args] as const
}

export function useGetApisEventsK8sIoV1WatchNamespacesNamespaceEvents<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis)['events.k8s.io']['v1']['watch']['namespaces'][':namespace']['events']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)['events.k8s.io']['v1']['watch']['namespaces'][':namespace']['events']['$get']
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
        ? getGetApisEventsK8sIoV1WatchNamespacesNamespaceEventsKey(args)
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
                (typeof client.apis)['events.k8s.io']['v1']['watch']['namespaces'][':namespace']['events']['$get']
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
          client.apis['events.k8s.io'].v1.watch.namespaces[':namespace'].events.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisEventsK8sIoV1WatchNamespacesNamespaceEvents<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis)['events.k8s.io']['v1']['watch']['namespaces'][':namespace']['events']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)['events.k8s.io']['v1']['watch']['namespaces'][':namespace']['events']['$get']
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
        ? getGetApisEventsK8sIoV1WatchNamespacesNamespaceEventsKey(args)
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
                (typeof client.apis)['events.k8s.io']['v1']['watch']['namespaces'][':namespace']['events']['$get']
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
          client.apis['events.k8s.io'].v1.watch.namespaces[':namespace'].events.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApisEventsK8sIoV1WatchNamespacesNamespaceEventsNameKey(
  args: InferRequestType<
    (typeof client.apis)['events.k8s.io']['v1']['watch']['namespaces'][':namespace']['events'][':name']['$get']
  >,
) {
  return ['apis', '/apis/events.k8s.io/v1/watch/namespaces/:namespace/events/:name', args] as const
}

export function useGetApisEventsK8sIoV1WatchNamespacesNamespaceEventsName<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis)['events.k8s.io']['v1']['watch']['namespaces'][':namespace']['events'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)['events.k8s.io']['v1']['watch']['namespaces'][':namespace']['events'][':name']['$get']
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
        ? getGetApisEventsK8sIoV1WatchNamespacesNamespaceEventsNameKey(args)
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
                (typeof client.apis)['events.k8s.io']['v1']['watch']['namespaces'][':namespace']['events'][':name']['$get']
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
          client.apis['events.k8s.io'].v1.watch.namespaces[':namespace'].events[':name'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisEventsK8sIoV1WatchNamespacesNamespaceEventsName<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.apis)['events.k8s.io']['v1']['watch']['namespaces'][':namespace']['events'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)['events.k8s.io']['v1']['watch']['namespaces'][':namespace']['events'][':name']['$get']
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
        ? getGetApisEventsK8sIoV1WatchNamespacesNamespaceEventsNameKey(args)
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
                (typeof client.apis)['events.k8s.io']['v1']['watch']['namespaces'][':namespace']['events'][':name']['$get']
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
          client.apis['events.k8s.io'].v1.watch.namespaces[':namespace'].events[':name'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}
