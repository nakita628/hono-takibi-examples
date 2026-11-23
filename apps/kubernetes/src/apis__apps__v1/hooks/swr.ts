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

export function getGetApisAppsV1IndexKey() {
  return ['apis', '/apis/apps/v1/'] as const
}

export function useGetApisAppsV1Index<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.apis.apps.v1.index.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApisAppsV1IndexKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.apis.apps.v1.index.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.apis.apps.v1.index.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisAppsV1Index<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.apis.apps.v1.index.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApisAppsV1IndexKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.apis.apps.v1.index.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.apis.apps.v1.index.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApisAppsV1ControllerrevisionsKey(
  args: InferRequestType<typeof client.apis.apps.v1.controllerrevisions.$get>,
) {
  return ['apis', '/apis/apps/v1/controllerrevisions', args] as const
}

export function useGetApisAppsV1Controllerrevisions<TError = unknown>(
  args: InferRequestType<typeof client.apis.apps.v1.controllerrevisions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.apis.apps.v1.controllerrevisions.$get>>
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
        ? getGetApisAppsV1ControllerrevisionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.apis.apps.v1.controllerrevisions.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.apis.apps.v1.controllerrevisions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisAppsV1Controllerrevisions<TError = unknown>(
  args: InferRequestType<typeof client.apis.apps.v1.controllerrevisions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.apis.apps.v1.controllerrevisions.$get>>
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
        ? getGetApisAppsV1ControllerrevisionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.apis.apps.v1.controllerrevisions.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.apis.apps.v1.controllerrevisions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApisAppsV1DaemonsetsKey(
  args: InferRequestType<typeof client.apis.apps.v1.daemonsets.$get>,
) {
  return ['apis', '/apis/apps/v1/daemonsets', args] as const
}

export function useGetApisAppsV1Daemonsets<TError = unknown>(
  args: InferRequestType<typeof client.apis.apps.v1.daemonsets.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.apis.apps.v1.daemonsets.$get>>>
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
        ? getGetApisAppsV1DaemonsetsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.apis.apps.v1.daemonsets.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.apis.apps.v1.daemonsets.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisAppsV1Daemonsets<TError = unknown>(
  args: InferRequestType<typeof client.apis.apps.v1.daemonsets.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.apis.apps.v1.daemonsets.$get>>>
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
        ? getGetApisAppsV1DaemonsetsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.apis.apps.v1.daemonsets.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.apis.apps.v1.daemonsets.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApisAppsV1DeploymentsKey(
  args: InferRequestType<typeof client.apis.apps.v1.deployments.$get>,
) {
  return ['apis', '/apis/apps/v1/deployments', args] as const
}

export function useGetApisAppsV1Deployments<TError = unknown>(
  args: InferRequestType<typeof client.apis.apps.v1.deployments.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.apis.apps.v1.deployments.$get>>>
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
        ? getGetApisAppsV1DeploymentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.apis.apps.v1.deployments.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.apis.apps.v1.deployments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisAppsV1Deployments<TError = unknown>(
  args: InferRequestType<typeof client.apis.apps.v1.deployments.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.apis.apps.v1.deployments.$get>>>
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
        ? getGetApisAppsV1DeploymentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.apis.apps.v1.deployments.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.apis.apps.v1.deployments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApisAppsV1NamespacesNamespaceControllerrevisionsKey(
  args: InferRequestType<
    (typeof client.apis.apps.v1.namespaces)[':namespace']['controllerrevisions']['$get']
  >,
) {
  return ['apis', '/apis/apps/v1/namespaces/:namespace/controllerrevisions', args] as const
}

export function useGetApisAppsV1NamespacesNamespaceControllerrevisions<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis.apps.v1.namespaces)[':namespace']['controllerrevisions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis.apps.v1.namespaces)[':namespace']['controllerrevisions']['$get']
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
        ? getGetApisAppsV1NamespacesNamespaceControllerrevisionsKey(args)
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
                (typeof client.apis.apps.v1.namespaces)[':namespace']['controllerrevisions']['$get']
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
          client.apis.apps.v1.namespaces[':namespace'].controllerrevisions.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisAppsV1NamespacesNamespaceControllerrevisions<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis.apps.v1.namespaces)[':namespace']['controllerrevisions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis.apps.v1.namespaces)[':namespace']['controllerrevisions']['$get']
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
        ? getGetApisAppsV1NamespacesNamespaceControllerrevisionsKey(args)
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
                (typeof client.apis.apps.v1.namespaces)[':namespace']['controllerrevisions']['$get']
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
          client.apis.apps.v1.namespaces[':namespace'].controllerrevisions.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApisAppsV1NamespacesNamespaceControllerrevisionsKey() {
  return ['apis', '/apis/apps/v1/namespaces/:namespace/controllerrevisions', 'POST'] as const
}

export function usePostApisAppsV1NamespacesNamespaceControllerrevisions<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis.apps.v1.namespaces)[':namespace']['controllerrevisions']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.apis.apps.v1.namespaces)[':namespace']['controllerrevisions']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApisAppsV1NamespacesNamespaceControllerrevisionsKey()
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
            (typeof client.apis.apps.v1.namespaces)[':namespace']['controllerrevisions']['$post']
          >
        },
      ) =>
        parseResponse(
          client.apis.apps.v1.namespaces[':namespace'].controllerrevisions.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApisAppsV1NamespacesNamespaceControllerrevisionsKey() {
  return ['apis', '/apis/apps/v1/namespaces/:namespace/controllerrevisions', 'DELETE'] as const
}

export function useDeleteApisAppsV1NamespacesNamespaceControllerrevisions<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis.apps.v1.namespaces)[':namespace']['controllerrevisions']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.apis.apps.v1.namespaces)[':namespace']['controllerrevisions']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApisAppsV1NamespacesNamespaceControllerrevisionsKey()
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
            (typeof client.apis.apps.v1.namespaces)[':namespace']['controllerrevisions']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.apis.apps.v1.namespaces[':namespace'].controllerrevisions.$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApisAppsV1NamespacesNamespaceControllerrevisionsNameKey(
  args: InferRequestType<
    (typeof client.apis.apps.v1.namespaces)[':namespace']['controllerrevisions'][':name']['$get']
  >,
) {
  return ['apis', '/apis/apps/v1/namespaces/:namespace/controllerrevisions/:name', args] as const
}

export function useGetApisAppsV1NamespacesNamespaceControllerrevisionsName<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis.apps.v1.namespaces)[':namespace']['controllerrevisions'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis.apps.v1.namespaces)[':namespace']['controllerrevisions'][':name']['$get']
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
        ? getGetApisAppsV1NamespacesNamespaceControllerrevisionsNameKey(args)
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
                (typeof client.apis.apps.v1.namespaces)[':namespace']['controllerrevisions'][':name']['$get']
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
          client.apis.apps.v1.namespaces[':namespace'].controllerrevisions[':name'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisAppsV1NamespacesNamespaceControllerrevisionsName<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.apis.apps.v1.namespaces)[':namespace']['controllerrevisions'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis.apps.v1.namespaces)[':namespace']['controllerrevisions'][':name']['$get']
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
        ? getGetApisAppsV1NamespacesNamespaceControllerrevisionsNameKey(args)
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
                (typeof client.apis.apps.v1.namespaces)[':namespace']['controllerrevisions'][':name']['$get']
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
          client.apis.apps.v1.namespaces[':namespace'].controllerrevisions[':name'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutApisAppsV1NamespacesNamespaceControllerrevisionsNameKey() {
  return ['apis', '/apis/apps/v1/namespaces/:namespace/controllerrevisions/:name', 'PUT'] as const
}

export function usePutApisAppsV1NamespacesNamespaceControllerrevisionsName<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis.apps.v1.namespaces)[':namespace']['controllerrevisions'][':name']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.apis.apps.v1.namespaces)[':namespace']['controllerrevisions'][':name']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApisAppsV1NamespacesNamespaceControllerrevisionsNameKey()
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
            (typeof client.apis.apps.v1.namespaces)[':namespace']['controllerrevisions'][':name']['$put']
          >
        },
      ) =>
        parseResponse(
          client.apis.apps.v1.namespaces[':namespace'].controllerrevisions[':name'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApisAppsV1NamespacesNamespaceControllerrevisionsNameKey() {
  return [
    'apis',
    '/apis/apps/v1/namespaces/:namespace/controllerrevisions/:name',
    'DELETE',
  ] as const
}

export function useDeleteApisAppsV1NamespacesNamespaceControllerrevisionsName<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis.apps.v1.namespaces)[':namespace']['controllerrevisions'][':name']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.apis.apps.v1.namespaces)[':namespace']['controllerrevisions'][':name']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApisAppsV1NamespacesNamespaceControllerrevisionsNameKey()
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
            (typeof client.apis.apps.v1.namespaces)[':namespace']['controllerrevisions'][':name']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.apis.apps.v1.namespaces[':namespace'].controllerrevisions[':name'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchApisAppsV1NamespacesNamespaceControllerrevisionsNameKey() {
  return ['apis', '/apis/apps/v1/namespaces/:namespace/controllerrevisions/:name', 'PATCH'] as const
}

export function usePatchApisAppsV1NamespacesNamespaceControllerrevisionsName<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis.apps.v1.namespaces)[':namespace']['controllerrevisions'][':name']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.apis.apps.v1.namespaces)[':namespace']['controllerrevisions'][':name']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApisAppsV1NamespacesNamespaceControllerrevisionsNameKey()
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
            (typeof client.apis.apps.v1.namespaces)[':namespace']['controllerrevisions'][':name']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.apis.apps.v1.namespaces[':namespace'].controllerrevisions[':name'].$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApisAppsV1NamespacesNamespaceDaemonsetsKey(
  args: InferRequestType<
    (typeof client.apis.apps.v1.namespaces)[':namespace']['daemonsets']['$get']
  >,
) {
  return ['apis', '/apis/apps/v1/namespaces/:namespace/daemonsets', args] as const
}

export function useGetApisAppsV1NamespacesNamespaceDaemonsets<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis.apps.v1.namespaces)[':namespace']['daemonsets']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis.apps.v1.namespaces)[':namespace']['daemonsets']['$get']
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
        ? getGetApisAppsV1NamespacesNamespaceDaemonsetsKey(args)
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
                (typeof client.apis.apps.v1.namespaces)[':namespace']['daemonsets']['$get']
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
          client.apis.apps.v1.namespaces[':namespace'].daemonsets.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisAppsV1NamespacesNamespaceDaemonsets<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis.apps.v1.namespaces)[':namespace']['daemonsets']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis.apps.v1.namespaces)[':namespace']['daemonsets']['$get']
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
        ? getGetApisAppsV1NamespacesNamespaceDaemonsetsKey(args)
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
                (typeof client.apis.apps.v1.namespaces)[':namespace']['daemonsets']['$get']
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
          client.apis.apps.v1.namespaces[':namespace'].daemonsets.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApisAppsV1NamespacesNamespaceDaemonsetsKey() {
  return ['apis', '/apis/apps/v1/namespaces/:namespace/daemonsets', 'POST'] as const
}

export function usePostApisAppsV1NamespacesNamespaceDaemonsets<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.apis.apps.v1.namespaces)[':namespace']['daemonsets']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.apis.apps.v1.namespaces)[':namespace']['daemonsets']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApisAppsV1NamespacesNamespaceDaemonsetsKey()
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
            (typeof client.apis.apps.v1.namespaces)[':namespace']['daemonsets']['$post']
          >
        },
      ) =>
        parseResponse(
          client.apis.apps.v1.namespaces[':namespace'].daemonsets.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApisAppsV1NamespacesNamespaceDaemonsetsKey() {
  return ['apis', '/apis/apps/v1/namespaces/:namespace/daemonsets', 'DELETE'] as const
}

export function useDeleteApisAppsV1NamespacesNamespaceDaemonsets<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis.apps.v1.namespaces)[':namespace']['daemonsets']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.apis.apps.v1.namespaces)[':namespace']['daemonsets']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApisAppsV1NamespacesNamespaceDaemonsetsKey()
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
            (typeof client.apis.apps.v1.namespaces)[':namespace']['daemonsets']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.apis.apps.v1.namespaces[':namespace'].daemonsets.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApisAppsV1NamespacesNamespaceDaemonsetsNameKey(
  args: InferRequestType<
    (typeof client.apis.apps.v1.namespaces)[':namespace']['daemonsets'][':name']['$get']
  >,
) {
  return ['apis', '/apis/apps/v1/namespaces/:namespace/daemonsets/:name', args] as const
}

export function useGetApisAppsV1NamespacesNamespaceDaemonsetsName<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis.apps.v1.namespaces)[':namespace']['daemonsets'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis.apps.v1.namespaces)[':namespace']['daemonsets'][':name']['$get']
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
        ? getGetApisAppsV1NamespacesNamespaceDaemonsetsNameKey(args)
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
                (typeof client.apis.apps.v1.namespaces)[':namespace']['daemonsets'][':name']['$get']
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
          client.apis.apps.v1.namespaces[':namespace'].daemonsets[':name'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisAppsV1NamespacesNamespaceDaemonsetsName<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis.apps.v1.namespaces)[':namespace']['daemonsets'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis.apps.v1.namespaces)[':namespace']['daemonsets'][':name']['$get']
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
        ? getGetApisAppsV1NamespacesNamespaceDaemonsetsNameKey(args)
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
                (typeof client.apis.apps.v1.namespaces)[':namespace']['daemonsets'][':name']['$get']
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
          client.apis.apps.v1.namespaces[':namespace'].daemonsets[':name'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutApisAppsV1NamespacesNamespaceDaemonsetsNameKey() {
  return ['apis', '/apis/apps/v1/namespaces/:namespace/daemonsets/:name', 'PUT'] as const
}

export function usePutApisAppsV1NamespacesNamespaceDaemonsetsName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis.apps.v1.namespaces)[':namespace']['daemonsets'][':name']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.apis.apps.v1.namespaces)[':namespace']['daemonsets'][':name']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApisAppsV1NamespacesNamespaceDaemonsetsNameKey()
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
            (typeof client.apis.apps.v1.namespaces)[':namespace']['daemonsets'][':name']['$put']
          >
        },
      ) =>
        parseResponse(
          client.apis.apps.v1.namespaces[':namespace'].daemonsets[':name'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApisAppsV1NamespacesNamespaceDaemonsetsNameKey() {
  return ['apis', '/apis/apps/v1/namespaces/:namespace/daemonsets/:name', 'DELETE'] as const
}

export function useDeleteApisAppsV1NamespacesNamespaceDaemonsetsName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis.apps.v1.namespaces)[':namespace']['daemonsets'][':name']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.apis.apps.v1.namespaces)[':namespace']['daemonsets'][':name']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApisAppsV1NamespacesNamespaceDaemonsetsNameKey()
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
            (typeof client.apis.apps.v1.namespaces)[':namespace']['daemonsets'][':name']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.apis.apps.v1.namespaces[':namespace'].daemonsets[':name'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchApisAppsV1NamespacesNamespaceDaemonsetsNameKey() {
  return ['apis', '/apis/apps/v1/namespaces/:namespace/daemonsets/:name', 'PATCH'] as const
}

export function usePatchApisAppsV1NamespacesNamespaceDaemonsetsName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis.apps.v1.namespaces)[':namespace']['daemonsets'][':name']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.apis.apps.v1.namespaces)[':namespace']['daemonsets'][':name']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApisAppsV1NamespacesNamespaceDaemonsetsNameKey()
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
            (typeof client.apis.apps.v1.namespaces)[':namespace']['daemonsets'][':name']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.apis.apps.v1.namespaces[':namespace'].daemonsets[':name'].$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApisAppsV1NamespacesNamespaceDaemonsetsNameStatusKey(
  args: InferRequestType<
    (typeof client.apis.apps.v1.namespaces)[':namespace']['daemonsets'][':name']['status']['$get']
  >,
) {
  return ['apis', '/apis/apps/v1/namespaces/:namespace/daemonsets/:name/status', args] as const
}

export function useGetApisAppsV1NamespacesNamespaceDaemonsetsNameStatus<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis.apps.v1.namespaces)[':namespace']['daemonsets'][':name']['status']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis.apps.v1.namespaces)[':namespace']['daemonsets'][':name']['status']['$get']
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
        ? getGetApisAppsV1NamespacesNamespaceDaemonsetsNameStatusKey(args)
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
                (typeof client.apis.apps.v1.namespaces)[':namespace']['daemonsets'][':name']['status']['$get']
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
          client.apis.apps.v1.namespaces[':namespace'].daemonsets[':name'].status.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisAppsV1NamespacesNamespaceDaemonsetsNameStatus<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis.apps.v1.namespaces)[':namespace']['daemonsets'][':name']['status']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis.apps.v1.namespaces)[':namespace']['daemonsets'][':name']['status']['$get']
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
        ? getGetApisAppsV1NamespacesNamespaceDaemonsetsNameStatusKey(args)
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
                (typeof client.apis.apps.v1.namespaces)[':namespace']['daemonsets'][':name']['status']['$get']
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
          client.apis.apps.v1.namespaces[':namespace'].daemonsets[':name'].status.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutApisAppsV1NamespacesNamespaceDaemonsetsNameStatusKey() {
  return ['apis', '/apis/apps/v1/namespaces/:namespace/daemonsets/:name/status', 'PUT'] as const
}

export function usePutApisAppsV1NamespacesNamespaceDaemonsetsNameStatus<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis.apps.v1.namespaces)[':namespace']['daemonsets'][':name']['status']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.apis.apps.v1.namespaces)[':namespace']['daemonsets'][':name']['status']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApisAppsV1NamespacesNamespaceDaemonsetsNameStatusKey()
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
            (typeof client.apis.apps.v1.namespaces)[':namespace']['daemonsets'][':name']['status']['$put']
          >
        },
      ) =>
        parseResponse(
          client.apis.apps.v1.namespaces[':namespace'].daemonsets[':name'].status.$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchApisAppsV1NamespacesNamespaceDaemonsetsNameStatusKey() {
  return ['apis', '/apis/apps/v1/namespaces/:namespace/daemonsets/:name/status', 'PATCH'] as const
}

export function usePatchApisAppsV1NamespacesNamespaceDaemonsetsNameStatus<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis.apps.v1.namespaces)[':namespace']['daemonsets'][':name']['status']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.apis.apps.v1.namespaces)[':namespace']['daemonsets'][':name']['status']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApisAppsV1NamespacesNamespaceDaemonsetsNameStatusKey()
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
            (typeof client.apis.apps.v1.namespaces)[':namespace']['daemonsets'][':name']['status']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.apis.apps.v1.namespaces[':namespace'].daemonsets[':name'].status.$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApisAppsV1NamespacesNamespaceDeploymentsKey(
  args: InferRequestType<
    (typeof client.apis.apps.v1.namespaces)[':namespace']['deployments']['$get']
  >,
) {
  return ['apis', '/apis/apps/v1/namespaces/:namespace/deployments', args] as const
}

export function useGetApisAppsV1NamespacesNamespaceDeployments<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis.apps.v1.namespaces)[':namespace']['deployments']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis.apps.v1.namespaces)[':namespace']['deployments']['$get']
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
        ? getGetApisAppsV1NamespacesNamespaceDeploymentsKey(args)
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
                (typeof client.apis.apps.v1.namespaces)[':namespace']['deployments']['$get']
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
          client.apis.apps.v1.namespaces[':namespace'].deployments.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisAppsV1NamespacesNamespaceDeployments<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis.apps.v1.namespaces)[':namespace']['deployments']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis.apps.v1.namespaces)[':namespace']['deployments']['$get']
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
        ? getGetApisAppsV1NamespacesNamespaceDeploymentsKey(args)
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
                (typeof client.apis.apps.v1.namespaces)[':namespace']['deployments']['$get']
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
          client.apis.apps.v1.namespaces[':namespace'].deployments.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApisAppsV1NamespacesNamespaceDeploymentsKey() {
  return ['apis', '/apis/apps/v1/namespaces/:namespace/deployments', 'POST'] as const
}

export function usePostApisAppsV1NamespacesNamespaceDeployments<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis.apps.v1.namespaces)[':namespace']['deployments']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.apis.apps.v1.namespaces)[':namespace']['deployments']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApisAppsV1NamespacesNamespaceDeploymentsKey()
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
            (typeof client.apis.apps.v1.namespaces)[':namespace']['deployments']['$post']
          >
        },
      ) =>
        parseResponse(
          client.apis.apps.v1.namespaces[':namespace'].deployments.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApisAppsV1NamespacesNamespaceDeploymentsKey() {
  return ['apis', '/apis/apps/v1/namespaces/:namespace/deployments', 'DELETE'] as const
}

export function useDeleteApisAppsV1NamespacesNamespaceDeployments<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis.apps.v1.namespaces)[':namespace']['deployments']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.apis.apps.v1.namespaces)[':namespace']['deployments']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApisAppsV1NamespacesNamespaceDeploymentsKey()
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
            (typeof client.apis.apps.v1.namespaces)[':namespace']['deployments']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.apis.apps.v1.namespaces[':namespace'].deployments.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApisAppsV1NamespacesNamespaceDeploymentsNameKey(
  args: InferRequestType<
    (typeof client.apis.apps.v1.namespaces)[':namespace']['deployments'][':name']['$get']
  >,
) {
  return ['apis', '/apis/apps/v1/namespaces/:namespace/deployments/:name', args] as const
}

export function useGetApisAppsV1NamespacesNamespaceDeploymentsName<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis.apps.v1.namespaces)[':namespace']['deployments'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis.apps.v1.namespaces)[':namespace']['deployments'][':name']['$get']
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
        ? getGetApisAppsV1NamespacesNamespaceDeploymentsNameKey(args)
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
                (typeof client.apis.apps.v1.namespaces)[':namespace']['deployments'][':name']['$get']
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
          client.apis.apps.v1.namespaces[':namespace'].deployments[':name'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisAppsV1NamespacesNamespaceDeploymentsName<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis.apps.v1.namespaces)[':namespace']['deployments'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis.apps.v1.namespaces)[':namespace']['deployments'][':name']['$get']
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
        ? getGetApisAppsV1NamespacesNamespaceDeploymentsNameKey(args)
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
                (typeof client.apis.apps.v1.namespaces)[':namespace']['deployments'][':name']['$get']
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
          client.apis.apps.v1.namespaces[':namespace'].deployments[':name'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutApisAppsV1NamespacesNamespaceDeploymentsNameKey() {
  return ['apis', '/apis/apps/v1/namespaces/:namespace/deployments/:name', 'PUT'] as const
}

export function usePutApisAppsV1NamespacesNamespaceDeploymentsName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis.apps.v1.namespaces)[':namespace']['deployments'][':name']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.apis.apps.v1.namespaces)[':namespace']['deployments'][':name']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApisAppsV1NamespacesNamespaceDeploymentsNameKey()
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
            (typeof client.apis.apps.v1.namespaces)[':namespace']['deployments'][':name']['$put']
          >
        },
      ) =>
        parseResponse(
          client.apis.apps.v1.namespaces[':namespace'].deployments[':name'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApisAppsV1NamespacesNamespaceDeploymentsNameKey() {
  return ['apis', '/apis/apps/v1/namespaces/:namespace/deployments/:name', 'DELETE'] as const
}

export function useDeleteApisAppsV1NamespacesNamespaceDeploymentsName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis.apps.v1.namespaces)[':namespace']['deployments'][':name']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.apis.apps.v1.namespaces)[':namespace']['deployments'][':name']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApisAppsV1NamespacesNamespaceDeploymentsNameKey()
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
            (typeof client.apis.apps.v1.namespaces)[':namespace']['deployments'][':name']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.apis.apps.v1.namespaces[':namespace'].deployments[':name'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchApisAppsV1NamespacesNamespaceDeploymentsNameKey() {
  return ['apis', '/apis/apps/v1/namespaces/:namespace/deployments/:name', 'PATCH'] as const
}

export function usePatchApisAppsV1NamespacesNamespaceDeploymentsName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis.apps.v1.namespaces)[':namespace']['deployments'][':name']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.apis.apps.v1.namespaces)[':namespace']['deployments'][':name']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApisAppsV1NamespacesNamespaceDeploymentsNameKey()
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
            (typeof client.apis.apps.v1.namespaces)[':namespace']['deployments'][':name']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.apis.apps.v1.namespaces[':namespace'].deployments[':name'].$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApisAppsV1NamespacesNamespaceDeploymentsNameScaleKey(
  args: InferRequestType<
    (typeof client.apis.apps.v1.namespaces)[':namespace']['deployments'][':name']['scale']['$get']
  >,
) {
  return ['apis', '/apis/apps/v1/namespaces/:namespace/deployments/:name/scale', args] as const
}

export function useGetApisAppsV1NamespacesNamespaceDeploymentsNameScale<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis.apps.v1.namespaces)[':namespace']['deployments'][':name']['scale']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis.apps.v1.namespaces)[':namespace']['deployments'][':name']['scale']['$get']
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
        ? getGetApisAppsV1NamespacesNamespaceDeploymentsNameScaleKey(args)
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
                (typeof client.apis.apps.v1.namespaces)[':namespace']['deployments'][':name']['scale']['$get']
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
          client.apis.apps.v1.namespaces[':namespace'].deployments[':name'].scale.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisAppsV1NamespacesNamespaceDeploymentsNameScale<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis.apps.v1.namespaces)[':namespace']['deployments'][':name']['scale']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis.apps.v1.namespaces)[':namespace']['deployments'][':name']['scale']['$get']
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
        ? getGetApisAppsV1NamespacesNamespaceDeploymentsNameScaleKey(args)
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
                (typeof client.apis.apps.v1.namespaces)[':namespace']['deployments'][':name']['scale']['$get']
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
          client.apis.apps.v1.namespaces[':namespace'].deployments[':name'].scale.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutApisAppsV1NamespacesNamespaceDeploymentsNameScaleKey() {
  return ['apis', '/apis/apps/v1/namespaces/:namespace/deployments/:name/scale', 'PUT'] as const
}

export function usePutApisAppsV1NamespacesNamespaceDeploymentsNameScale<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis.apps.v1.namespaces)[':namespace']['deployments'][':name']['scale']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.apis.apps.v1.namespaces)[':namespace']['deployments'][':name']['scale']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApisAppsV1NamespacesNamespaceDeploymentsNameScaleKey()
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
            (typeof client.apis.apps.v1.namespaces)[':namespace']['deployments'][':name']['scale']['$put']
          >
        },
      ) =>
        parseResponse(
          client.apis.apps.v1.namespaces[':namespace'].deployments[':name'].scale.$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchApisAppsV1NamespacesNamespaceDeploymentsNameScaleKey() {
  return ['apis', '/apis/apps/v1/namespaces/:namespace/deployments/:name/scale', 'PATCH'] as const
}

export function usePatchApisAppsV1NamespacesNamespaceDeploymentsNameScale<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis.apps.v1.namespaces)[':namespace']['deployments'][':name']['scale']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.apis.apps.v1.namespaces)[':namespace']['deployments'][':name']['scale']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApisAppsV1NamespacesNamespaceDeploymentsNameScaleKey()
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
            (typeof client.apis.apps.v1.namespaces)[':namespace']['deployments'][':name']['scale']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.apis.apps.v1.namespaces[':namespace'].deployments[':name'].scale.$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApisAppsV1NamespacesNamespaceDeploymentsNameStatusKey(
  args: InferRequestType<
    (typeof client.apis.apps.v1.namespaces)[':namespace']['deployments'][':name']['status']['$get']
  >,
) {
  return ['apis', '/apis/apps/v1/namespaces/:namespace/deployments/:name/status', args] as const
}

export function useGetApisAppsV1NamespacesNamespaceDeploymentsNameStatus<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis.apps.v1.namespaces)[':namespace']['deployments'][':name']['status']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis.apps.v1.namespaces)[':namespace']['deployments'][':name']['status']['$get']
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
        ? getGetApisAppsV1NamespacesNamespaceDeploymentsNameStatusKey(args)
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
                (typeof client.apis.apps.v1.namespaces)[':namespace']['deployments'][':name']['status']['$get']
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
          client.apis.apps.v1.namespaces[':namespace'].deployments[':name'].status.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisAppsV1NamespacesNamespaceDeploymentsNameStatus<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis.apps.v1.namespaces)[':namespace']['deployments'][':name']['status']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis.apps.v1.namespaces)[':namespace']['deployments'][':name']['status']['$get']
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
        ? getGetApisAppsV1NamespacesNamespaceDeploymentsNameStatusKey(args)
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
                (typeof client.apis.apps.v1.namespaces)[':namespace']['deployments'][':name']['status']['$get']
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
          client.apis.apps.v1.namespaces[':namespace'].deployments[':name'].status.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutApisAppsV1NamespacesNamespaceDeploymentsNameStatusKey() {
  return ['apis', '/apis/apps/v1/namespaces/:namespace/deployments/:name/status', 'PUT'] as const
}

export function usePutApisAppsV1NamespacesNamespaceDeploymentsNameStatus<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis.apps.v1.namespaces)[':namespace']['deployments'][':name']['status']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.apis.apps.v1.namespaces)[':namespace']['deployments'][':name']['status']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApisAppsV1NamespacesNamespaceDeploymentsNameStatusKey()
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
            (typeof client.apis.apps.v1.namespaces)[':namespace']['deployments'][':name']['status']['$put']
          >
        },
      ) =>
        parseResponse(
          client.apis.apps.v1.namespaces[':namespace'].deployments[':name'].status.$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchApisAppsV1NamespacesNamespaceDeploymentsNameStatusKey() {
  return ['apis', '/apis/apps/v1/namespaces/:namespace/deployments/:name/status', 'PATCH'] as const
}

export function usePatchApisAppsV1NamespacesNamespaceDeploymentsNameStatus<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis.apps.v1.namespaces)[':namespace']['deployments'][':name']['status']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.apis.apps.v1.namespaces)[':namespace']['deployments'][':name']['status']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApisAppsV1NamespacesNamespaceDeploymentsNameStatusKey()
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
            (typeof client.apis.apps.v1.namespaces)[':namespace']['deployments'][':name']['status']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.apis.apps.v1.namespaces[':namespace'].deployments[':name'].status.$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApisAppsV1NamespacesNamespaceReplicasetsKey(
  args: InferRequestType<
    (typeof client.apis.apps.v1.namespaces)[':namespace']['replicasets']['$get']
  >,
) {
  return ['apis', '/apis/apps/v1/namespaces/:namespace/replicasets', args] as const
}

export function useGetApisAppsV1NamespacesNamespaceReplicasets<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis.apps.v1.namespaces)[':namespace']['replicasets']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis.apps.v1.namespaces)[':namespace']['replicasets']['$get']
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
        ? getGetApisAppsV1NamespacesNamespaceReplicasetsKey(args)
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
                (typeof client.apis.apps.v1.namespaces)[':namespace']['replicasets']['$get']
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
          client.apis.apps.v1.namespaces[':namespace'].replicasets.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisAppsV1NamespacesNamespaceReplicasets<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis.apps.v1.namespaces)[':namespace']['replicasets']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis.apps.v1.namespaces)[':namespace']['replicasets']['$get']
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
        ? getGetApisAppsV1NamespacesNamespaceReplicasetsKey(args)
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
                (typeof client.apis.apps.v1.namespaces)[':namespace']['replicasets']['$get']
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
          client.apis.apps.v1.namespaces[':namespace'].replicasets.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApisAppsV1NamespacesNamespaceReplicasetsKey() {
  return ['apis', '/apis/apps/v1/namespaces/:namespace/replicasets', 'POST'] as const
}

export function usePostApisAppsV1NamespacesNamespaceReplicasets<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis.apps.v1.namespaces)[':namespace']['replicasets']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.apis.apps.v1.namespaces)[':namespace']['replicasets']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApisAppsV1NamespacesNamespaceReplicasetsKey()
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
            (typeof client.apis.apps.v1.namespaces)[':namespace']['replicasets']['$post']
          >
        },
      ) =>
        parseResponse(
          client.apis.apps.v1.namespaces[':namespace'].replicasets.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApisAppsV1NamespacesNamespaceReplicasetsKey() {
  return ['apis', '/apis/apps/v1/namespaces/:namespace/replicasets', 'DELETE'] as const
}

export function useDeleteApisAppsV1NamespacesNamespaceReplicasets<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis.apps.v1.namespaces)[':namespace']['replicasets']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.apis.apps.v1.namespaces)[':namespace']['replicasets']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApisAppsV1NamespacesNamespaceReplicasetsKey()
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
            (typeof client.apis.apps.v1.namespaces)[':namespace']['replicasets']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.apis.apps.v1.namespaces[':namespace'].replicasets.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApisAppsV1NamespacesNamespaceReplicasetsNameKey(
  args: InferRequestType<
    (typeof client.apis.apps.v1.namespaces)[':namespace']['replicasets'][':name']['$get']
  >,
) {
  return ['apis', '/apis/apps/v1/namespaces/:namespace/replicasets/:name', args] as const
}

export function useGetApisAppsV1NamespacesNamespaceReplicasetsName<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis.apps.v1.namespaces)[':namespace']['replicasets'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis.apps.v1.namespaces)[':namespace']['replicasets'][':name']['$get']
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
        ? getGetApisAppsV1NamespacesNamespaceReplicasetsNameKey(args)
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
                (typeof client.apis.apps.v1.namespaces)[':namespace']['replicasets'][':name']['$get']
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
          client.apis.apps.v1.namespaces[':namespace'].replicasets[':name'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisAppsV1NamespacesNamespaceReplicasetsName<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis.apps.v1.namespaces)[':namespace']['replicasets'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis.apps.v1.namespaces)[':namespace']['replicasets'][':name']['$get']
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
        ? getGetApisAppsV1NamespacesNamespaceReplicasetsNameKey(args)
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
                (typeof client.apis.apps.v1.namespaces)[':namespace']['replicasets'][':name']['$get']
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
          client.apis.apps.v1.namespaces[':namespace'].replicasets[':name'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutApisAppsV1NamespacesNamespaceReplicasetsNameKey() {
  return ['apis', '/apis/apps/v1/namespaces/:namespace/replicasets/:name', 'PUT'] as const
}

export function usePutApisAppsV1NamespacesNamespaceReplicasetsName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis.apps.v1.namespaces)[':namespace']['replicasets'][':name']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.apis.apps.v1.namespaces)[':namespace']['replicasets'][':name']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApisAppsV1NamespacesNamespaceReplicasetsNameKey()
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
            (typeof client.apis.apps.v1.namespaces)[':namespace']['replicasets'][':name']['$put']
          >
        },
      ) =>
        parseResponse(
          client.apis.apps.v1.namespaces[':namespace'].replicasets[':name'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApisAppsV1NamespacesNamespaceReplicasetsNameKey() {
  return ['apis', '/apis/apps/v1/namespaces/:namespace/replicasets/:name', 'DELETE'] as const
}

export function useDeleteApisAppsV1NamespacesNamespaceReplicasetsName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis.apps.v1.namespaces)[':namespace']['replicasets'][':name']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.apis.apps.v1.namespaces)[':namespace']['replicasets'][':name']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApisAppsV1NamespacesNamespaceReplicasetsNameKey()
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
            (typeof client.apis.apps.v1.namespaces)[':namespace']['replicasets'][':name']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.apis.apps.v1.namespaces[':namespace'].replicasets[':name'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchApisAppsV1NamespacesNamespaceReplicasetsNameKey() {
  return ['apis', '/apis/apps/v1/namespaces/:namespace/replicasets/:name', 'PATCH'] as const
}

export function usePatchApisAppsV1NamespacesNamespaceReplicasetsName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis.apps.v1.namespaces)[':namespace']['replicasets'][':name']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.apis.apps.v1.namespaces)[':namespace']['replicasets'][':name']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApisAppsV1NamespacesNamespaceReplicasetsNameKey()
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
            (typeof client.apis.apps.v1.namespaces)[':namespace']['replicasets'][':name']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.apis.apps.v1.namespaces[':namespace'].replicasets[':name'].$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApisAppsV1NamespacesNamespaceReplicasetsNameScaleKey(
  args: InferRequestType<
    (typeof client.apis.apps.v1.namespaces)[':namespace']['replicasets'][':name']['scale']['$get']
  >,
) {
  return ['apis', '/apis/apps/v1/namespaces/:namespace/replicasets/:name/scale', args] as const
}

export function useGetApisAppsV1NamespacesNamespaceReplicasetsNameScale<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis.apps.v1.namespaces)[':namespace']['replicasets'][':name']['scale']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis.apps.v1.namespaces)[':namespace']['replicasets'][':name']['scale']['$get']
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
        ? getGetApisAppsV1NamespacesNamespaceReplicasetsNameScaleKey(args)
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
                (typeof client.apis.apps.v1.namespaces)[':namespace']['replicasets'][':name']['scale']['$get']
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
          client.apis.apps.v1.namespaces[':namespace'].replicasets[':name'].scale.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisAppsV1NamespacesNamespaceReplicasetsNameScale<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis.apps.v1.namespaces)[':namespace']['replicasets'][':name']['scale']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis.apps.v1.namespaces)[':namespace']['replicasets'][':name']['scale']['$get']
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
        ? getGetApisAppsV1NamespacesNamespaceReplicasetsNameScaleKey(args)
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
                (typeof client.apis.apps.v1.namespaces)[':namespace']['replicasets'][':name']['scale']['$get']
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
          client.apis.apps.v1.namespaces[':namespace'].replicasets[':name'].scale.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutApisAppsV1NamespacesNamespaceReplicasetsNameScaleKey() {
  return ['apis', '/apis/apps/v1/namespaces/:namespace/replicasets/:name/scale', 'PUT'] as const
}

export function usePutApisAppsV1NamespacesNamespaceReplicasetsNameScale<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis.apps.v1.namespaces)[':namespace']['replicasets'][':name']['scale']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.apis.apps.v1.namespaces)[':namespace']['replicasets'][':name']['scale']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApisAppsV1NamespacesNamespaceReplicasetsNameScaleKey()
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
            (typeof client.apis.apps.v1.namespaces)[':namespace']['replicasets'][':name']['scale']['$put']
          >
        },
      ) =>
        parseResponse(
          client.apis.apps.v1.namespaces[':namespace'].replicasets[':name'].scale.$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchApisAppsV1NamespacesNamespaceReplicasetsNameScaleKey() {
  return ['apis', '/apis/apps/v1/namespaces/:namespace/replicasets/:name/scale', 'PATCH'] as const
}

export function usePatchApisAppsV1NamespacesNamespaceReplicasetsNameScale<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis.apps.v1.namespaces)[':namespace']['replicasets'][':name']['scale']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.apis.apps.v1.namespaces)[':namespace']['replicasets'][':name']['scale']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApisAppsV1NamespacesNamespaceReplicasetsNameScaleKey()
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
            (typeof client.apis.apps.v1.namespaces)[':namespace']['replicasets'][':name']['scale']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.apis.apps.v1.namespaces[':namespace'].replicasets[':name'].scale.$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApisAppsV1NamespacesNamespaceReplicasetsNameStatusKey(
  args: InferRequestType<
    (typeof client.apis.apps.v1.namespaces)[':namespace']['replicasets'][':name']['status']['$get']
  >,
) {
  return ['apis', '/apis/apps/v1/namespaces/:namespace/replicasets/:name/status', args] as const
}

export function useGetApisAppsV1NamespacesNamespaceReplicasetsNameStatus<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis.apps.v1.namespaces)[':namespace']['replicasets'][':name']['status']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis.apps.v1.namespaces)[':namespace']['replicasets'][':name']['status']['$get']
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
        ? getGetApisAppsV1NamespacesNamespaceReplicasetsNameStatusKey(args)
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
                (typeof client.apis.apps.v1.namespaces)[':namespace']['replicasets'][':name']['status']['$get']
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
          client.apis.apps.v1.namespaces[':namespace'].replicasets[':name'].status.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisAppsV1NamespacesNamespaceReplicasetsNameStatus<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis.apps.v1.namespaces)[':namespace']['replicasets'][':name']['status']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis.apps.v1.namespaces)[':namespace']['replicasets'][':name']['status']['$get']
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
        ? getGetApisAppsV1NamespacesNamespaceReplicasetsNameStatusKey(args)
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
                (typeof client.apis.apps.v1.namespaces)[':namespace']['replicasets'][':name']['status']['$get']
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
          client.apis.apps.v1.namespaces[':namespace'].replicasets[':name'].status.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutApisAppsV1NamespacesNamespaceReplicasetsNameStatusKey() {
  return ['apis', '/apis/apps/v1/namespaces/:namespace/replicasets/:name/status', 'PUT'] as const
}

export function usePutApisAppsV1NamespacesNamespaceReplicasetsNameStatus<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis.apps.v1.namespaces)[':namespace']['replicasets'][':name']['status']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.apis.apps.v1.namespaces)[':namespace']['replicasets'][':name']['status']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApisAppsV1NamespacesNamespaceReplicasetsNameStatusKey()
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
            (typeof client.apis.apps.v1.namespaces)[':namespace']['replicasets'][':name']['status']['$put']
          >
        },
      ) =>
        parseResponse(
          client.apis.apps.v1.namespaces[':namespace'].replicasets[':name'].status.$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchApisAppsV1NamespacesNamespaceReplicasetsNameStatusKey() {
  return ['apis', '/apis/apps/v1/namespaces/:namespace/replicasets/:name/status', 'PATCH'] as const
}

export function usePatchApisAppsV1NamespacesNamespaceReplicasetsNameStatus<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis.apps.v1.namespaces)[':namespace']['replicasets'][':name']['status']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.apis.apps.v1.namespaces)[':namespace']['replicasets'][':name']['status']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApisAppsV1NamespacesNamespaceReplicasetsNameStatusKey()
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
            (typeof client.apis.apps.v1.namespaces)[':namespace']['replicasets'][':name']['status']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.apis.apps.v1.namespaces[':namespace'].replicasets[':name'].status.$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApisAppsV1NamespacesNamespaceStatefulsetsKey(
  args: InferRequestType<
    (typeof client.apis.apps.v1.namespaces)[':namespace']['statefulsets']['$get']
  >,
) {
  return ['apis', '/apis/apps/v1/namespaces/:namespace/statefulsets', args] as const
}

export function useGetApisAppsV1NamespacesNamespaceStatefulsets<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis.apps.v1.namespaces)[':namespace']['statefulsets']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis.apps.v1.namespaces)[':namespace']['statefulsets']['$get']
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
        ? getGetApisAppsV1NamespacesNamespaceStatefulsetsKey(args)
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
                (typeof client.apis.apps.v1.namespaces)[':namespace']['statefulsets']['$get']
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
          client.apis.apps.v1.namespaces[':namespace'].statefulsets.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisAppsV1NamespacesNamespaceStatefulsets<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis.apps.v1.namespaces)[':namespace']['statefulsets']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis.apps.v1.namespaces)[':namespace']['statefulsets']['$get']
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
        ? getGetApisAppsV1NamespacesNamespaceStatefulsetsKey(args)
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
                (typeof client.apis.apps.v1.namespaces)[':namespace']['statefulsets']['$get']
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
          client.apis.apps.v1.namespaces[':namespace'].statefulsets.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApisAppsV1NamespacesNamespaceStatefulsetsKey() {
  return ['apis', '/apis/apps/v1/namespaces/:namespace/statefulsets', 'POST'] as const
}

export function usePostApisAppsV1NamespacesNamespaceStatefulsets<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis.apps.v1.namespaces)[':namespace']['statefulsets']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.apis.apps.v1.namespaces)[':namespace']['statefulsets']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApisAppsV1NamespacesNamespaceStatefulsetsKey()
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
            (typeof client.apis.apps.v1.namespaces)[':namespace']['statefulsets']['$post']
          >
        },
      ) =>
        parseResponse(
          client.apis.apps.v1.namespaces[':namespace'].statefulsets.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApisAppsV1NamespacesNamespaceStatefulsetsKey() {
  return ['apis', '/apis/apps/v1/namespaces/:namespace/statefulsets', 'DELETE'] as const
}

export function useDeleteApisAppsV1NamespacesNamespaceStatefulsets<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis.apps.v1.namespaces)[':namespace']['statefulsets']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.apis.apps.v1.namespaces)[':namespace']['statefulsets']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApisAppsV1NamespacesNamespaceStatefulsetsKey()
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
            (typeof client.apis.apps.v1.namespaces)[':namespace']['statefulsets']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.apis.apps.v1.namespaces[':namespace'].statefulsets.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApisAppsV1NamespacesNamespaceStatefulsetsNameKey(
  args: InferRequestType<
    (typeof client.apis.apps.v1.namespaces)[':namespace']['statefulsets'][':name']['$get']
  >,
) {
  return ['apis', '/apis/apps/v1/namespaces/:namespace/statefulsets/:name', args] as const
}

export function useGetApisAppsV1NamespacesNamespaceStatefulsetsName<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis.apps.v1.namespaces)[':namespace']['statefulsets'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis.apps.v1.namespaces)[':namespace']['statefulsets'][':name']['$get']
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
        ? getGetApisAppsV1NamespacesNamespaceStatefulsetsNameKey(args)
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
                (typeof client.apis.apps.v1.namespaces)[':namespace']['statefulsets'][':name']['$get']
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
          client.apis.apps.v1.namespaces[':namespace'].statefulsets[':name'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisAppsV1NamespacesNamespaceStatefulsetsName<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis.apps.v1.namespaces)[':namespace']['statefulsets'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis.apps.v1.namespaces)[':namespace']['statefulsets'][':name']['$get']
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
        ? getGetApisAppsV1NamespacesNamespaceStatefulsetsNameKey(args)
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
                (typeof client.apis.apps.v1.namespaces)[':namespace']['statefulsets'][':name']['$get']
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
          client.apis.apps.v1.namespaces[':namespace'].statefulsets[':name'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutApisAppsV1NamespacesNamespaceStatefulsetsNameKey() {
  return ['apis', '/apis/apps/v1/namespaces/:namespace/statefulsets/:name', 'PUT'] as const
}

export function usePutApisAppsV1NamespacesNamespaceStatefulsetsName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis.apps.v1.namespaces)[':namespace']['statefulsets'][':name']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.apis.apps.v1.namespaces)[':namespace']['statefulsets'][':name']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApisAppsV1NamespacesNamespaceStatefulsetsNameKey()
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
            (typeof client.apis.apps.v1.namespaces)[':namespace']['statefulsets'][':name']['$put']
          >
        },
      ) =>
        parseResponse(
          client.apis.apps.v1.namespaces[':namespace'].statefulsets[':name'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApisAppsV1NamespacesNamespaceStatefulsetsNameKey() {
  return ['apis', '/apis/apps/v1/namespaces/:namespace/statefulsets/:name', 'DELETE'] as const
}

export function useDeleteApisAppsV1NamespacesNamespaceStatefulsetsName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis.apps.v1.namespaces)[':namespace']['statefulsets'][':name']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.apis.apps.v1.namespaces)[':namespace']['statefulsets'][':name']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApisAppsV1NamespacesNamespaceStatefulsetsNameKey()
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
            (typeof client.apis.apps.v1.namespaces)[':namespace']['statefulsets'][':name']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.apis.apps.v1.namespaces[':namespace'].statefulsets[':name'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchApisAppsV1NamespacesNamespaceStatefulsetsNameKey() {
  return ['apis', '/apis/apps/v1/namespaces/:namespace/statefulsets/:name', 'PATCH'] as const
}

export function usePatchApisAppsV1NamespacesNamespaceStatefulsetsName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis.apps.v1.namespaces)[':namespace']['statefulsets'][':name']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.apis.apps.v1.namespaces)[':namespace']['statefulsets'][':name']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApisAppsV1NamespacesNamespaceStatefulsetsNameKey()
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
            (typeof client.apis.apps.v1.namespaces)[':namespace']['statefulsets'][':name']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.apis.apps.v1.namespaces[':namespace'].statefulsets[':name'].$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApisAppsV1NamespacesNamespaceStatefulsetsNameScaleKey(
  args: InferRequestType<
    (typeof client.apis.apps.v1.namespaces)[':namespace']['statefulsets'][':name']['scale']['$get']
  >,
) {
  return ['apis', '/apis/apps/v1/namespaces/:namespace/statefulsets/:name/scale', args] as const
}

export function useGetApisAppsV1NamespacesNamespaceStatefulsetsNameScale<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis.apps.v1.namespaces)[':namespace']['statefulsets'][':name']['scale']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis.apps.v1.namespaces)[':namespace']['statefulsets'][':name']['scale']['$get']
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
        ? getGetApisAppsV1NamespacesNamespaceStatefulsetsNameScaleKey(args)
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
                (typeof client.apis.apps.v1.namespaces)[':namespace']['statefulsets'][':name']['scale']['$get']
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
          client.apis.apps.v1.namespaces[':namespace'].statefulsets[':name'].scale.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisAppsV1NamespacesNamespaceStatefulsetsNameScale<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis.apps.v1.namespaces)[':namespace']['statefulsets'][':name']['scale']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis.apps.v1.namespaces)[':namespace']['statefulsets'][':name']['scale']['$get']
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
        ? getGetApisAppsV1NamespacesNamespaceStatefulsetsNameScaleKey(args)
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
                (typeof client.apis.apps.v1.namespaces)[':namespace']['statefulsets'][':name']['scale']['$get']
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
          client.apis.apps.v1.namespaces[':namespace'].statefulsets[':name'].scale.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutApisAppsV1NamespacesNamespaceStatefulsetsNameScaleKey() {
  return ['apis', '/apis/apps/v1/namespaces/:namespace/statefulsets/:name/scale', 'PUT'] as const
}

export function usePutApisAppsV1NamespacesNamespaceStatefulsetsNameScale<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis.apps.v1.namespaces)[':namespace']['statefulsets'][':name']['scale']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.apis.apps.v1.namespaces)[':namespace']['statefulsets'][':name']['scale']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApisAppsV1NamespacesNamespaceStatefulsetsNameScaleKey()
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
            (typeof client.apis.apps.v1.namespaces)[':namespace']['statefulsets'][':name']['scale']['$put']
          >
        },
      ) =>
        parseResponse(
          client.apis.apps.v1.namespaces[':namespace'].statefulsets[':name'].scale.$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchApisAppsV1NamespacesNamespaceStatefulsetsNameScaleKey() {
  return ['apis', '/apis/apps/v1/namespaces/:namespace/statefulsets/:name/scale', 'PATCH'] as const
}

export function usePatchApisAppsV1NamespacesNamespaceStatefulsetsNameScale<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis.apps.v1.namespaces)[':namespace']['statefulsets'][':name']['scale']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.apis.apps.v1.namespaces)[':namespace']['statefulsets'][':name']['scale']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApisAppsV1NamespacesNamespaceStatefulsetsNameScaleKey()
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
            (typeof client.apis.apps.v1.namespaces)[':namespace']['statefulsets'][':name']['scale']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.apis.apps.v1.namespaces[':namespace'].statefulsets[':name'].scale.$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApisAppsV1NamespacesNamespaceStatefulsetsNameStatusKey(
  args: InferRequestType<
    (typeof client.apis.apps.v1.namespaces)[':namespace']['statefulsets'][':name']['status']['$get']
  >,
) {
  return ['apis', '/apis/apps/v1/namespaces/:namespace/statefulsets/:name/status', args] as const
}

export function useGetApisAppsV1NamespacesNamespaceStatefulsetsNameStatus<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis.apps.v1.namespaces)[':namespace']['statefulsets'][':name']['status']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis.apps.v1.namespaces)[':namespace']['statefulsets'][':name']['status']['$get']
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
        ? getGetApisAppsV1NamespacesNamespaceStatefulsetsNameStatusKey(args)
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
                (typeof client.apis.apps.v1.namespaces)[':namespace']['statefulsets'][':name']['status']['$get']
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
          client.apis.apps.v1.namespaces[':namespace'].statefulsets[':name'].status.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisAppsV1NamespacesNamespaceStatefulsetsNameStatus<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.apis.apps.v1.namespaces)[':namespace']['statefulsets'][':name']['status']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis.apps.v1.namespaces)[':namespace']['statefulsets'][':name']['status']['$get']
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
        ? getGetApisAppsV1NamespacesNamespaceStatefulsetsNameStatusKey(args)
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
                (typeof client.apis.apps.v1.namespaces)[':namespace']['statefulsets'][':name']['status']['$get']
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
          client.apis.apps.v1.namespaces[':namespace'].statefulsets[':name'].status.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutApisAppsV1NamespacesNamespaceStatefulsetsNameStatusKey() {
  return ['apis', '/apis/apps/v1/namespaces/:namespace/statefulsets/:name/status', 'PUT'] as const
}

export function usePutApisAppsV1NamespacesNamespaceStatefulsetsNameStatus<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis.apps.v1.namespaces)[':namespace']['statefulsets'][':name']['status']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.apis.apps.v1.namespaces)[':namespace']['statefulsets'][':name']['status']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApisAppsV1NamespacesNamespaceStatefulsetsNameStatusKey()
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
            (typeof client.apis.apps.v1.namespaces)[':namespace']['statefulsets'][':name']['status']['$put']
          >
        },
      ) =>
        parseResponse(
          client.apis.apps.v1.namespaces[':namespace'].statefulsets[':name'].status.$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchApisAppsV1NamespacesNamespaceStatefulsetsNameStatusKey() {
  return ['apis', '/apis/apps/v1/namespaces/:namespace/statefulsets/:name/status', 'PATCH'] as const
}

export function usePatchApisAppsV1NamespacesNamespaceStatefulsetsNameStatus<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis.apps.v1.namespaces)[':namespace']['statefulsets'][':name']['status']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.apis.apps.v1.namespaces)[':namespace']['statefulsets'][':name']['status']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApisAppsV1NamespacesNamespaceStatefulsetsNameStatusKey()
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
            (typeof client.apis.apps.v1.namespaces)[':namespace']['statefulsets'][':name']['status']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.apis.apps.v1.namespaces[':namespace'].statefulsets[':name'].status.$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApisAppsV1ReplicasetsKey(
  args: InferRequestType<typeof client.apis.apps.v1.replicasets.$get>,
) {
  return ['apis', '/apis/apps/v1/replicasets', args] as const
}

export function useGetApisAppsV1Replicasets<TError = unknown>(
  args: InferRequestType<typeof client.apis.apps.v1.replicasets.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.apis.apps.v1.replicasets.$get>>>
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
        ? getGetApisAppsV1ReplicasetsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.apis.apps.v1.replicasets.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.apis.apps.v1.replicasets.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisAppsV1Replicasets<TError = unknown>(
  args: InferRequestType<typeof client.apis.apps.v1.replicasets.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.apis.apps.v1.replicasets.$get>>>
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
        ? getGetApisAppsV1ReplicasetsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.apis.apps.v1.replicasets.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.apis.apps.v1.replicasets.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApisAppsV1StatefulsetsKey(
  args: InferRequestType<typeof client.apis.apps.v1.statefulsets.$get>,
) {
  return ['apis', '/apis/apps/v1/statefulsets', args] as const
}

export function useGetApisAppsV1Statefulsets<TError = unknown>(
  args: InferRequestType<typeof client.apis.apps.v1.statefulsets.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.apis.apps.v1.statefulsets.$get>>>
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
        ? getGetApisAppsV1StatefulsetsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.apis.apps.v1.statefulsets.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.apis.apps.v1.statefulsets.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisAppsV1Statefulsets<TError = unknown>(
  args: InferRequestType<typeof client.apis.apps.v1.statefulsets.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.apis.apps.v1.statefulsets.$get>>>
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
        ? getGetApisAppsV1StatefulsetsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.apis.apps.v1.statefulsets.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.apis.apps.v1.statefulsets.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApisAppsV1WatchControllerrevisionsKey(
  args: InferRequestType<typeof client.apis.apps.v1.watch.controllerrevisions.$get>,
) {
  return ['apis', '/apis/apps/v1/watch/controllerrevisions', args] as const
}

export function useGetApisAppsV1WatchControllerrevisions<TError = unknown>(
  args: InferRequestType<typeof client.apis.apps.v1.watch.controllerrevisions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.apis.apps.v1.watch.controllerrevisions.$get>>
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
        ? getGetApisAppsV1WatchControllerrevisionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.apis.apps.v1.watch.controllerrevisions.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.apis.apps.v1.watch.controllerrevisions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisAppsV1WatchControllerrevisions<TError = unknown>(
  args: InferRequestType<typeof client.apis.apps.v1.watch.controllerrevisions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.apis.apps.v1.watch.controllerrevisions.$get>>
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
        ? getGetApisAppsV1WatchControllerrevisionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.apis.apps.v1.watch.controllerrevisions.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.apis.apps.v1.watch.controllerrevisions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApisAppsV1WatchDaemonsetsKey(
  args: InferRequestType<typeof client.apis.apps.v1.watch.daemonsets.$get>,
) {
  return ['apis', '/apis/apps/v1/watch/daemonsets', args] as const
}

export function useGetApisAppsV1WatchDaemonsets<TError = unknown>(
  args: InferRequestType<typeof client.apis.apps.v1.watch.daemonsets.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.apis.apps.v1.watch.daemonsets.$get>>
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
        ? getGetApisAppsV1WatchDaemonsetsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.apis.apps.v1.watch.daemonsets.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.apis.apps.v1.watch.daemonsets.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisAppsV1WatchDaemonsets<TError = unknown>(
  args: InferRequestType<typeof client.apis.apps.v1.watch.daemonsets.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.apis.apps.v1.watch.daemonsets.$get>>
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
        ? getGetApisAppsV1WatchDaemonsetsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.apis.apps.v1.watch.daemonsets.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.apis.apps.v1.watch.daemonsets.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApisAppsV1WatchDeploymentsKey(
  args: InferRequestType<typeof client.apis.apps.v1.watch.deployments.$get>,
) {
  return ['apis', '/apis/apps/v1/watch/deployments', args] as const
}

export function useGetApisAppsV1WatchDeployments<TError = unknown>(
  args: InferRequestType<typeof client.apis.apps.v1.watch.deployments.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.apis.apps.v1.watch.deployments.$get>>
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
        ? getGetApisAppsV1WatchDeploymentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.apis.apps.v1.watch.deployments.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.apis.apps.v1.watch.deployments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisAppsV1WatchDeployments<TError = unknown>(
  args: InferRequestType<typeof client.apis.apps.v1.watch.deployments.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.apis.apps.v1.watch.deployments.$get>>
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
        ? getGetApisAppsV1WatchDeploymentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.apis.apps.v1.watch.deployments.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.apis.apps.v1.watch.deployments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApisAppsV1WatchNamespacesNamespaceControllerrevisionsKey(
  args: InferRequestType<
    (typeof client.apis.apps.v1.watch.namespaces)[':namespace']['controllerrevisions']['$get']
  >,
) {
  return ['apis', '/apis/apps/v1/watch/namespaces/:namespace/controllerrevisions', args] as const
}

export function useGetApisAppsV1WatchNamespacesNamespaceControllerrevisions<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis.apps.v1.watch.namespaces)[':namespace']['controllerrevisions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis.apps.v1.watch.namespaces)[':namespace']['controllerrevisions']['$get']
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
        ? getGetApisAppsV1WatchNamespacesNamespaceControllerrevisionsKey(args)
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
                (typeof client.apis.apps.v1.watch.namespaces)[':namespace']['controllerrevisions']['$get']
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
          client.apis.apps.v1.watch.namespaces[':namespace'].controllerrevisions.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisAppsV1WatchNamespacesNamespaceControllerrevisions<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.apis.apps.v1.watch.namespaces)[':namespace']['controllerrevisions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis.apps.v1.watch.namespaces)[':namespace']['controllerrevisions']['$get']
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
        ? getGetApisAppsV1WatchNamespacesNamespaceControllerrevisionsKey(args)
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
                (typeof client.apis.apps.v1.watch.namespaces)[':namespace']['controllerrevisions']['$get']
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
          client.apis.apps.v1.watch.namespaces[':namespace'].controllerrevisions.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApisAppsV1WatchNamespacesNamespaceControllerrevisionsNameKey(
  args: InferRequestType<
    (typeof client.apis.apps.v1.watch.namespaces)[':namespace']['controllerrevisions'][':name']['$get']
  >,
) {
  return [
    'apis',
    '/apis/apps/v1/watch/namespaces/:namespace/controllerrevisions/:name',
    args,
  ] as const
}

export function useGetApisAppsV1WatchNamespacesNamespaceControllerrevisionsName<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis.apps.v1.watch.namespaces)[':namespace']['controllerrevisions'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis.apps.v1.watch.namespaces)[':namespace']['controllerrevisions'][':name']['$get']
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
        ? getGetApisAppsV1WatchNamespacesNamespaceControllerrevisionsNameKey(args)
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
                (typeof client.apis.apps.v1.watch.namespaces)[':namespace']['controllerrevisions'][':name']['$get']
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
          client.apis.apps.v1.watch.namespaces[':namespace'].controllerrevisions[':name'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisAppsV1WatchNamespacesNamespaceControllerrevisionsName<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.apis.apps.v1.watch.namespaces)[':namespace']['controllerrevisions'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis.apps.v1.watch.namespaces)[':namespace']['controllerrevisions'][':name']['$get']
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
        ? getGetApisAppsV1WatchNamespacesNamespaceControllerrevisionsNameKey(args)
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
                (typeof client.apis.apps.v1.watch.namespaces)[':namespace']['controllerrevisions'][':name']['$get']
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
          client.apis.apps.v1.watch.namespaces[':namespace'].controllerrevisions[':name'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApisAppsV1WatchNamespacesNamespaceDaemonsetsKey(
  args: InferRequestType<
    (typeof client.apis.apps.v1.watch.namespaces)[':namespace']['daemonsets']['$get']
  >,
) {
  return ['apis', '/apis/apps/v1/watch/namespaces/:namespace/daemonsets', args] as const
}

export function useGetApisAppsV1WatchNamespacesNamespaceDaemonsets<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis.apps.v1.watch.namespaces)[':namespace']['daemonsets']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis.apps.v1.watch.namespaces)[':namespace']['daemonsets']['$get']
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
        ? getGetApisAppsV1WatchNamespacesNamespaceDaemonsetsKey(args)
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
                (typeof client.apis.apps.v1.watch.namespaces)[':namespace']['daemonsets']['$get']
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
          client.apis.apps.v1.watch.namespaces[':namespace'].daemonsets.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisAppsV1WatchNamespacesNamespaceDaemonsets<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis.apps.v1.watch.namespaces)[':namespace']['daemonsets']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis.apps.v1.watch.namespaces)[':namespace']['daemonsets']['$get']
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
        ? getGetApisAppsV1WatchNamespacesNamespaceDaemonsetsKey(args)
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
                (typeof client.apis.apps.v1.watch.namespaces)[':namespace']['daemonsets']['$get']
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
          client.apis.apps.v1.watch.namespaces[':namespace'].daemonsets.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApisAppsV1WatchNamespacesNamespaceDaemonsetsNameKey(
  args: InferRequestType<
    (typeof client.apis.apps.v1.watch.namespaces)[':namespace']['daemonsets'][':name']['$get']
  >,
) {
  return ['apis', '/apis/apps/v1/watch/namespaces/:namespace/daemonsets/:name', args] as const
}

export function useGetApisAppsV1WatchNamespacesNamespaceDaemonsetsName<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis.apps.v1.watch.namespaces)[':namespace']['daemonsets'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis.apps.v1.watch.namespaces)[':namespace']['daemonsets'][':name']['$get']
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
        ? getGetApisAppsV1WatchNamespacesNamespaceDaemonsetsNameKey(args)
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
                (typeof client.apis.apps.v1.watch.namespaces)[':namespace']['daemonsets'][':name']['$get']
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
          client.apis.apps.v1.watch.namespaces[':namespace'].daemonsets[':name'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisAppsV1WatchNamespacesNamespaceDaemonsetsName<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis.apps.v1.watch.namespaces)[':namespace']['daemonsets'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis.apps.v1.watch.namespaces)[':namespace']['daemonsets'][':name']['$get']
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
        ? getGetApisAppsV1WatchNamespacesNamespaceDaemonsetsNameKey(args)
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
                (typeof client.apis.apps.v1.watch.namespaces)[':namespace']['daemonsets'][':name']['$get']
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
          client.apis.apps.v1.watch.namespaces[':namespace'].daemonsets[':name'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApisAppsV1WatchNamespacesNamespaceDeploymentsKey(
  args: InferRequestType<
    (typeof client.apis.apps.v1.watch.namespaces)[':namespace']['deployments']['$get']
  >,
) {
  return ['apis', '/apis/apps/v1/watch/namespaces/:namespace/deployments', args] as const
}

export function useGetApisAppsV1WatchNamespacesNamespaceDeployments<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis.apps.v1.watch.namespaces)[':namespace']['deployments']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis.apps.v1.watch.namespaces)[':namespace']['deployments']['$get']
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
        ? getGetApisAppsV1WatchNamespacesNamespaceDeploymentsKey(args)
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
                (typeof client.apis.apps.v1.watch.namespaces)[':namespace']['deployments']['$get']
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
          client.apis.apps.v1.watch.namespaces[':namespace'].deployments.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisAppsV1WatchNamespacesNamespaceDeployments<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis.apps.v1.watch.namespaces)[':namespace']['deployments']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis.apps.v1.watch.namespaces)[':namespace']['deployments']['$get']
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
        ? getGetApisAppsV1WatchNamespacesNamespaceDeploymentsKey(args)
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
                (typeof client.apis.apps.v1.watch.namespaces)[':namespace']['deployments']['$get']
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
          client.apis.apps.v1.watch.namespaces[':namespace'].deployments.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApisAppsV1WatchNamespacesNamespaceDeploymentsNameKey(
  args: InferRequestType<
    (typeof client.apis.apps.v1.watch.namespaces)[':namespace']['deployments'][':name']['$get']
  >,
) {
  return ['apis', '/apis/apps/v1/watch/namespaces/:namespace/deployments/:name', args] as const
}

export function useGetApisAppsV1WatchNamespacesNamespaceDeploymentsName<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis.apps.v1.watch.namespaces)[':namespace']['deployments'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis.apps.v1.watch.namespaces)[':namespace']['deployments'][':name']['$get']
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
        ? getGetApisAppsV1WatchNamespacesNamespaceDeploymentsNameKey(args)
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
                (typeof client.apis.apps.v1.watch.namespaces)[':namespace']['deployments'][':name']['$get']
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
          client.apis.apps.v1.watch.namespaces[':namespace'].deployments[':name'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisAppsV1WatchNamespacesNamespaceDeploymentsName<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis.apps.v1.watch.namespaces)[':namespace']['deployments'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis.apps.v1.watch.namespaces)[':namespace']['deployments'][':name']['$get']
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
        ? getGetApisAppsV1WatchNamespacesNamespaceDeploymentsNameKey(args)
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
                (typeof client.apis.apps.v1.watch.namespaces)[':namespace']['deployments'][':name']['$get']
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
          client.apis.apps.v1.watch.namespaces[':namespace'].deployments[':name'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApisAppsV1WatchNamespacesNamespaceReplicasetsKey(
  args: InferRequestType<
    (typeof client.apis.apps.v1.watch.namespaces)[':namespace']['replicasets']['$get']
  >,
) {
  return ['apis', '/apis/apps/v1/watch/namespaces/:namespace/replicasets', args] as const
}

export function useGetApisAppsV1WatchNamespacesNamespaceReplicasets<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis.apps.v1.watch.namespaces)[':namespace']['replicasets']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis.apps.v1.watch.namespaces)[':namespace']['replicasets']['$get']
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
        ? getGetApisAppsV1WatchNamespacesNamespaceReplicasetsKey(args)
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
                (typeof client.apis.apps.v1.watch.namespaces)[':namespace']['replicasets']['$get']
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
          client.apis.apps.v1.watch.namespaces[':namespace'].replicasets.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisAppsV1WatchNamespacesNamespaceReplicasets<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis.apps.v1.watch.namespaces)[':namespace']['replicasets']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis.apps.v1.watch.namespaces)[':namespace']['replicasets']['$get']
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
        ? getGetApisAppsV1WatchNamespacesNamespaceReplicasetsKey(args)
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
                (typeof client.apis.apps.v1.watch.namespaces)[':namespace']['replicasets']['$get']
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
          client.apis.apps.v1.watch.namespaces[':namespace'].replicasets.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApisAppsV1WatchNamespacesNamespaceReplicasetsNameKey(
  args: InferRequestType<
    (typeof client.apis.apps.v1.watch.namespaces)[':namespace']['replicasets'][':name']['$get']
  >,
) {
  return ['apis', '/apis/apps/v1/watch/namespaces/:namespace/replicasets/:name', args] as const
}

export function useGetApisAppsV1WatchNamespacesNamespaceReplicasetsName<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis.apps.v1.watch.namespaces)[':namespace']['replicasets'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis.apps.v1.watch.namespaces)[':namespace']['replicasets'][':name']['$get']
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
        ? getGetApisAppsV1WatchNamespacesNamespaceReplicasetsNameKey(args)
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
                (typeof client.apis.apps.v1.watch.namespaces)[':namespace']['replicasets'][':name']['$get']
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
          client.apis.apps.v1.watch.namespaces[':namespace'].replicasets[':name'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisAppsV1WatchNamespacesNamespaceReplicasetsName<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis.apps.v1.watch.namespaces)[':namespace']['replicasets'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis.apps.v1.watch.namespaces)[':namespace']['replicasets'][':name']['$get']
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
        ? getGetApisAppsV1WatchNamespacesNamespaceReplicasetsNameKey(args)
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
                (typeof client.apis.apps.v1.watch.namespaces)[':namespace']['replicasets'][':name']['$get']
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
          client.apis.apps.v1.watch.namespaces[':namespace'].replicasets[':name'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApisAppsV1WatchNamespacesNamespaceStatefulsetsKey(
  args: InferRequestType<
    (typeof client.apis.apps.v1.watch.namespaces)[':namespace']['statefulsets']['$get']
  >,
) {
  return ['apis', '/apis/apps/v1/watch/namespaces/:namespace/statefulsets', args] as const
}

export function useGetApisAppsV1WatchNamespacesNamespaceStatefulsets<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis.apps.v1.watch.namespaces)[':namespace']['statefulsets']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis.apps.v1.watch.namespaces)[':namespace']['statefulsets']['$get']
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
        ? getGetApisAppsV1WatchNamespacesNamespaceStatefulsetsKey(args)
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
                (typeof client.apis.apps.v1.watch.namespaces)[':namespace']['statefulsets']['$get']
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
          client.apis.apps.v1.watch.namespaces[':namespace'].statefulsets.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisAppsV1WatchNamespacesNamespaceStatefulsets<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis.apps.v1.watch.namespaces)[':namespace']['statefulsets']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis.apps.v1.watch.namespaces)[':namespace']['statefulsets']['$get']
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
        ? getGetApisAppsV1WatchNamespacesNamespaceStatefulsetsKey(args)
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
                (typeof client.apis.apps.v1.watch.namespaces)[':namespace']['statefulsets']['$get']
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
          client.apis.apps.v1.watch.namespaces[':namespace'].statefulsets.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApisAppsV1WatchNamespacesNamespaceStatefulsetsNameKey(
  args: InferRequestType<
    (typeof client.apis.apps.v1.watch.namespaces)[':namespace']['statefulsets'][':name']['$get']
  >,
) {
  return ['apis', '/apis/apps/v1/watch/namespaces/:namespace/statefulsets/:name', args] as const
}

export function useGetApisAppsV1WatchNamespacesNamespaceStatefulsetsName<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis.apps.v1.watch.namespaces)[':namespace']['statefulsets'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis.apps.v1.watch.namespaces)[':namespace']['statefulsets'][':name']['$get']
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
        ? getGetApisAppsV1WatchNamespacesNamespaceStatefulsetsNameKey(args)
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
                (typeof client.apis.apps.v1.watch.namespaces)[':namespace']['statefulsets'][':name']['$get']
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
          client.apis.apps.v1.watch.namespaces[':namespace'].statefulsets[':name'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisAppsV1WatchNamespacesNamespaceStatefulsetsName<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis.apps.v1.watch.namespaces)[':namespace']['statefulsets'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis.apps.v1.watch.namespaces)[':namespace']['statefulsets'][':name']['$get']
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
        ? getGetApisAppsV1WatchNamespacesNamespaceStatefulsetsNameKey(args)
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
                (typeof client.apis.apps.v1.watch.namespaces)[':namespace']['statefulsets'][':name']['$get']
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
          client.apis.apps.v1.watch.namespaces[':namespace'].statefulsets[':name'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApisAppsV1WatchReplicasetsKey(
  args: InferRequestType<typeof client.apis.apps.v1.watch.replicasets.$get>,
) {
  return ['apis', '/apis/apps/v1/watch/replicasets', args] as const
}

export function useGetApisAppsV1WatchReplicasets<TError = unknown>(
  args: InferRequestType<typeof client.apis.apps.v1.watch.replicasets.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.apis.apps.v1.watch.replicasets.$get>>
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
        ? getGetApisAppsV1WatchReplicasetsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.apis.apps.v1.watch.replicasets.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.apis.apps.v1.watch.replicasets.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisAppsV1WatchReplicasets<TError = unknown>(
  args: InferRequestType<typeof client.apis.apps.v1.watch.replicasets.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.apis.apps.v1.watch.replicasets.$get>>
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
        ? getGetApisAppsV1WatchReplicasetsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.apis.apps.v1.watch.replicasets.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.apis.apps.v1.watch.replicasets.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApisAppsV1WatchStatefulsetsKey(
  args: InferRequestType<typeof client.apis.apps.v1.watch.statefulsets.$get>,
) {
  return ['apis', '/apis/apps/v1/watch/statefulsets', args] as const
}

export function useGetApisAppsV1WatchStatefulsets<TError = unknown>(
  args: InferRequestType<typeof client.apis.apps.v1.watch.statefulsets.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.apis.apps.v1.watch.statefulsets.$get>>
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
        ? getGetApisAppsV1WatchStatefulsetsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.apis.apps.v1.watch.statefulsets.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.apis.apps.v1.watch.statefulsets.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisAppsV1WatchStatefulsets<TError = unknown>(
  args: InferRequestType<typeof client.apis.apps.v1.watch.statefulsets.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.apis.apps.v1.watch.statefulsets.$get>>
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
        ? getGetApisAppsV1WatchStatefulsetsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.apis.apps.v1.watch.statefulsets.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.apis.apps.v1.watch.statefulsets.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}
