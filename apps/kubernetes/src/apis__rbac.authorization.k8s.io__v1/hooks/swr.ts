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

export function getGetApisRbacAuthorizationK8sIoV1IndexKey() {
  return ['apis', '/apis/rbac.authorization.k8s.io/v1/'] as const
}

export function useGetApisRbacAuthorizationK8sIoV1Index<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.apis)['rbac.authorization.k8s.io']['v1']['index']['$get']>
          >
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
        ? getGetApisRbacAuthorizationK8sIoV1IndexKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.apis)['rbac.authorization.k8s.io']['v1']['index']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.apis['rbac.authorization.k8s.io'].v1.index.$get(undefined, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisRbacAuthorizationK8sIoV1Index<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.apis)['rbac.authorization.k8s.io']['v1']['index']['$get']>
          >
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
        ? getGetApisRbacAuthorizationK8sIoV1IndexKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.apis)['rbac.authorization.k8s.io']['v1']['index']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.apis['rbac.authorization.k8s.io'].v1.index.$get(undefined, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApisRbacAuthorizationK8sIoV1ClusterrolebindingsKey(
  args: InferRequestType<
    (typeof client.apis)['rbac.authorization.k8s.io']['v1']['clusterrolebindings']['$get']
  >,
) {
  return ['apis', '/apis/rbac.authorization.k8s.io/v1/clusterrolebindings', args] as const
}

export function useGetApisRbacAuthorizationK8sIoV1Clusterrolebindings<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis)['rbac.authorization.k8s.io']['v1']['clusterrolebindings']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)['rbac.authorization.k8s.io']['v1']['clusterrolebindings']['$get']
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
        ? getGetApisRbacAuthorizationK8sIoV1ClusterrolebindingsKey(args)
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
                (typeof client.apis)['rbac.authorization.k8s.io']['v1']['clusterrolebindings']['$get']
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
          client.apis['rbac.authorization.k8s.io'].v1.clusterrolebindings.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisRbacAuthorizationK8sIoV1Clusterrolebindings<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis)['rbac.authorization.k8s.io']['v1']['clusterrolebindings']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)['rbac.authorization.k8s.io']['v1']['clusterrolebindings']['$get']
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
        ? getGetApisRbacAuthorizationK8sIoV1ClusterrolebindingsKey(args)
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
                (typeof client.apis)['rbac.authorization.k8s.io']['v1']['clusterrolebindings']['$get']
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
          client.apis['rbac.authorization.k8s.io'].v1.clusterrolebindings.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApisRbacAuthorizationK8sIoV1ClusterrolebindingsKey() {
  return ['apis', '/apis/rbac.authorization.k8s.io/v1/clusterrolebindings', 'POST'] as const
}

export function usePostApisRbacAuthorizationK8sIoV1Clusterrolebindings<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['rbac.authorization.k8s.io']['v1']['clusterrolebindings']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.apis)['rbac.authorization.k8s.io']['v1']['clusterrolebindings']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApisRbacAuthorizationK8sIoV1ClusterrolebindingsKey()
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
            (typeof client.apis)['rbac.authorization.k8s.io']['v1']['clusterrolebindings']['$post']
          >
        },
      ) =>
        parseResponse(
          client.apis['rbac.authorization.k8s.io'].v1.clusterrolebindings.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApisRbacAuthorizationK8sIoV1ClusterrolebindingsKey() {
  return ['apis', '/apis/rbac.authorization.k8s.io/v1/clusterrolebindings', 'DELETE'] as const
}

export function useDeleteApisRbacAuthorizationK8sIoV1Clusterrolebindings<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['rbac.authorization.k8s.io']['v1']['clusterrolebindings']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.apis)['rbac.authorization.k8s.io']['v1']['clusterrolebindings']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApisRbacAuthorizationK8sIoV1ClusterrolebindingsKey()
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
            (typeof client.apis)['rbac.authorization.k8s.io']['v1']['clusterrolebindings']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.apis['rbac.authorization.k8s.io'].v1.clusterrolebindings.$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApisRbacAuthorizationK8sIoV1ClusterrolebindingsNameKey(
  args: InferRequestType<
    (typeof client.apis)['rbac.authorization.k8s.io']['v1']['clusterrolebindings'][':name']['$get']
  >,
) {
  return ['apis', '/apis/rbac.authorization.k8s.io/v1/clusterrolebindings/:name', args] as const
}

export function useGetApisRbacAuthorizationK8sIoV1ClusterrolebindingsName<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis)['rbac.authorization.k8s.io']['v1']['clusterrolebindings'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)['rbac.authorization.k8s.io']['v1']['clusterrolebindings'][':name']['$get']
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
        ? getGetApisRbacAuthorizationK8sIoV1ClusterrolebindingsNameKey(args)
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
                (typeof client.apis)['rbac.authorization.k8s.io']['v1']['clusterrolebindings'][':name']['$get']
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
          client.apis['rbac.authorization.k8s.io'].v1.clusterrolebindings[':name'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisRbacAuthorizationK8sIoV1ClusterrolebindingsName<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.apis)['rbac.authorization.k8s.io']['v1']['clusterrolebindings'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)['rbac.authorization.k8s.io']['v1']['clusterrolebindings'][':name']['$get']
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
        ? getGetApisRbacAuthorizationK8sIoV1ClusterrolebindingsNameKey(args)
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
                (typeof client.apis)['rbac.authorization.k8s.io']['v1']['clusterrolebindings'][':name']['$get']
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
          client.apis['rbac.authorization.k8s.io'].v1.clusterrolebindings[':name'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutApisRbacAuthorizationK8sIoV1ClusterrolebindingsNameKey() {
  return ['apis', '/apis/rbac.authorization.k8s.io/v1/clusterrolebindings/:name', 'PUT'] as const
}

export function usePutApisRbacAuthorizationK8sIoV1ClusterrolebindingsName<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['rbac.authorization.k8s.io']['v1']['clusterrolebindings'][':name']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.apis)['rbac.authorization.k8s.io']['v1']['clusterrolebindings'][':name']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApisRbacAuthorizationK8sIoV1ClusterrolebindingsNameKey()
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
            (typeof client.apis)['rbac.authorization.k8s.io']['v1']['clusterrolebindings'][':name']['$put']
          >
        },
      ) =>
        parseResponse(
          client.apis['rbac.authorization.k8s.io'].v1.clusterrolebindings[':name'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApisRbacAuthorizationK8sIoV1ClusterrolebindingsNameKey() {
  return ['apis', '/apis/rbac.authorization.k8s.io/v1/clusterrolebindings/:name', 'DELETE'] as const
}

export function useDeleteApisRbacAuthorizationK8sIoV1ClusterrolebindingsName<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['rbac.authorization.k8s.io']['v1']['clusterrolebindings'][':name']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.apis)['rbac.authorization.k8s.io']['v1']['clusterrolebindings'][':name']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApisRbacAuthorizationK8sIoV1ClusterrolebindingsNameKey()
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
            (typeof client.apis)['rbac.authorization.k8s.io']['v1']['clusterrolebindings'][':name']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.apis['rbac.authorization.k8s.io'].v1.clusterrolebindings[':name'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchApisRbacAuthorizationK8sIoV1ClusterrolebindingsNameKey() {
  return ['apis', '/apis/rbac.authorization.k8s.io/v1/clusterrolebindings/:name', 'PATCH'] as const
}

export function usePatchApisRbacAuthorizationK8sIoV1ClusterrolebindingsName<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['rbac.authorization.k8s.io']['v1']['clusterrolebindings'][':name']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.apis)['rbac.authorization.k8s.io']['v1']['clusterrolebindings'][':name']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApisRbacAuthorizationK8sIoV1ClusterrolebindingsNameKey()
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
            (typeof client.apis)['rbac.authorization.k8s.io']['v1']['clusterrolebindings'][':name']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.apis['rbac.authorization.k8s.io'].v1.clusterrolebindings[':name'].$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApisRbacAuthorizationK8sIoV1ClusterrolesKey(
  args: InferRequestType<
    (typeof client.apis)['rbac.authorization.k8s.io']['v1']['clusterroles']['$get']
  >,
) {
  return ['apis', '/apis/rbac.authorization.k8s.io/v1/clusterroles', args] as const
}

export function useGetApisRbacAuthorizationK8sIoV1Clusterroles<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis)['rbac.authorization.k8s.io']['v1']['clusterroles']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)['rbac.authorization.k8s.io']['v1']['clusterroles']['$get']
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
        ? getGetApisRbacAuthorizationK8sIoV1ClusterrolesKey(args)
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
                (typeof client.apis)['rbac.authorization.k8s.io']['v1']['clusterroles']['$get']
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
          client.apis['rbac.authorization.k8s.io'].v1.clusterroles.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisRbacAuthorizationK8sIoV1Clusterroles<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis)['rbac.authorization.k8s.io']['v1']['clusterroles']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)['rbac.authorization.k8s.io']['v1']['clusterroles']['$get']
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
        ? getGetApisRbacAuthorizationK8sIoV1ClusterrolesKey(args)
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
                (typeof client.apis)['rbac.authorization.k8s.io']['v1']['clusterroles']['$get']
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
          client.apis['rbac.authorization.k8s.io'].v1.clusterroles.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApisRbacAuthorizationK8sIoV1ClusterrolesKey() {
  return ['apis', '/apis/rbac.authorization.k8s.io/v1/clusterroles', 'POST'] as const
}

export function usePostApisRbacAuthorizationK8sIoV1Clusterroles<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['rbac.authorization.k8s.io']['v1']['clusterroles']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.apis)['rbac.authorization.k8s.io']['v1']['clusterroles']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApisRbacAuthorizationK8sIoV1ClusterrolesKey()
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
            (typeof client.apis)['rbac.authorization.k8s.io']['v1']['clusterroles']['$post']
          >
        },
      ) =>
        parseResponse(
          client.apis['rbac.authorization.k8s.io'].v1.clusterroles.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApisRbacAuthorizationK8sIoV1ClusterrolesKey() {
  return ['apis', '/apis/rbac.authorization.k8s.io/v1/clusterroles', 'DELETE'] as const
}

export function useDeleteApisRbacAuthorizationK8sIoV1Clusterroles<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['rbac.authorization.k8s.io']['v1']['clusterroles']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.apis)['rbac.authorization.k8s.io']['v1']['clusterroles']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApisRbacAuthorizationK8sIoV1ClusterrolesKey()
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
            (typeof client.apis)['rbac.authorization.k8s.io']['v1']['clusterroles']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.apis['rbac.authorization.k8s.io'].v1.clusterroles.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApisRbacAuthorizationK8sIoV1ClusterrolesNameKey(
  args: InferRequestType<
    (typeof client.apis)['rbac.authorization.k8s.io']['v1']['clusterroles'][':name']['$get']
  >,
) {
  return ['apis', '/apis/rbac.authorization.k8s.io/v1/clusterroles/:name', args] as const
}

export function useGetApisRbacAuthorizationK8sIoV1ClusterrolesName<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis)['rbac.authorization.k8s.io']['v1']['clusterroles'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)['rbac.authorization.k8s.io']['v1']['clusterroles'][':name']['$get']
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
        ? getGetApisRbacAuthorizationK8sIoV1ClusterrolesNameKey(args)
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
                (typeof client.apis)['rbac.authorization.k8s.io']['v1']['clusterroles'][':name']['$get']
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
          client.apis['rbac.authorization.k8s.io'].v1.clusterroles[':name'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisRbacAuthorizationK8sIoV1ClusterrolesName<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis)['rbac.authorization.k8s.io']['v1']['clusterroles'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)['rbac.authorization.k8s.io']['v1']['clusterroles'][':name']['$get']
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
        ? getGetApisRbacAuthorizationK8sIoV1ClusterrolesNameKey(args)
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
                (typeof client.apis)['rbac.authorization.k8s.io']['v1']['clusterroles'][':name']['$get']
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
          client.apis['rbac.authorization.k8s.io'].v1.clusterroles[':name'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutApisRbacAuthorizationK8sIoV1ClusterrolesNameKey() {
  return ['apis', '/apis/rbac.authorization.k8s.io/v1/clusterroles/:name', 'PUT'] as const
}

export function usePutApisRbacAuthorizationK8sIoV1ClusterrolesName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['rbac.authorization.k8s.io']['v1']['clusterroles'][':name']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.apis)['rbac.authorization.k8s.io']['v1']['clusterroles'][':name']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApisRbacAuthorizationK8sIoV1ClusterrolesNameKey()
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
            (typeof client.apis)['rbac.authorization.k8s.io']['v1']['clusterroles'][':name']['$put']
          >
        },
      ) =>
        parseResponse(
          client.apis['rbac.authorization.k8s.io'].v1.clusterroles[':name'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApisRbacAuthorizationK8sIoV1ClusterrolesNameKey() {
  return ['apis', '/apis/rbac.authorization.k8s.io/v1/clusterroles/:name', 'DELETE'] as const
}

export function useDeleteApisRbacAuthorizationK8sIoV1ClusterrolesName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['rbac.authorization.k8s.io']['v1']['clusterroles'][':name']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.apis)['rbac.authorization.k8s.io']['v1']['clusterroles'][':name']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApisRbacAuthorizationK8sIoV1ClusterrolesNameKey()
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
            (typeof client.apis)['rbac.authorization.k8s.io']['v1']['clusterroles'][':name']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.apis['rbac.authorization.k8s.io'].v1.clusterroles[':name'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchApisRbacAuthorizationK8sIoV1ClusterrolesNameKey() {
  return ['apis', '/apis/rbac.authorization.k8s.io/v1/clusterroles/:name', 'PATCH'] as const
}

export function usePatchApisRbacAuthorizationK8sIoV1ClusterrolesName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['rbac.authorization.k8s.io']['v1']['clusterroles'][':name']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.apis)['rbac.authorization.k8s.io']['v1']['clusterroles'][':name']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApisRbacAuthorizationK8sIoV1ClusterrolesNameKey()
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
            (typeof client.apis)['rbac.authorization.k8s.io']['v1']['clusterroles'][':name']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.apis['rbac.authorization.k8s.io'].v1.clusterroles[':name'].$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApisRbacAuthorizationK8sIoV1NamespacesNamespaceRolebindingsKey(
  args: InferRequestType<
    (typeof client.apis)['rbac.authorization.k8s.io']['v1']['namespaces'][':namespace']['rolebindings']['$get']
  >,
) {
  return [
    'apis',
    '/apis/rbac.authorization.k8s.io/v1/namespaces/:namespace/rolebindings',
    args,
  ] as const
}

export function useGetApisRbacAuthorizationK8sIoV1NamespacesNamespaceRolebindings<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis)['rbac.authorization.k8s.io']['v1']['namespaces'][':namespace']['rolebindings']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)['rbac.authorization.k8s.io']['v1']['namespaces'][':namespace']['rolebindings']['$get']
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
        ? getGetApisRbacAuthorizationK8sIoV1NamespacesNamespaceRolebindingsKey(args)
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
                (typeof client.apis)['rbac.authorization.k8s.io']['v1']['namespaces'][':namespace']['rolebindings']['$get']
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
          client.apis['rbac.authorization.k8s.io'].v1.namespaces[':namespace'].rolebindings.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisRbacAuthorizationK8sIoV1NamespacesNamespaceRolebindings<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.apis)['rbac.authorization.k8s.io']['v1']['namespaces'][':namespace']['rolebindings']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)['rbac.authorization.k8s.io']['v1']['namespaces'][':namespace']['rolebindings']['$get']
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
        ? getGetApisRbacAuthorizationK8sIoV1NamespacesNamespaceRolebindingsKey(args)
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
                (typeof client.apis)['rbac.authorization.k8s.io']['v1']['namespaces'][':namespace']['rolebindings']['$get']
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
          client.apis['rbac.authorization.k8s.io'].v1.namespaces[':namespace'].rolebindings.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApisRbacAuthorizationK8sIoV1NamespacesNamespaceRolebindingsKey() {
  return [
    'apis',
    '/apis/rbac.authorization.k8s.io/v1/namespaces/:namespace/rolebindings',
    'POST',
  ] as const
}

export function usePostApisRbacAuthorizationK8sIoV1NamespacesNamespaceRolebindings<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['rbac.authorization.k8s.io']['v1']['namespaces'][':namespace']['rolebindings']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.apis)['rbac.authorization.k8s.io']['v1']['namespaces'][':namespace']['rolebindings']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostApisRbacAuthorizationK8sIoV1NamespacesNamespaceRolebindingsKey()
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
            (typeof client.apis)['rbac.authorization.k8s.io']['v1']['namespaces'][':namespace']['rolebindings']['$post']
          >
        },
      ) =>
        parseResponse(
          client.apis['rbac.authorization.k8s.io'].v1.namespaces[':namespace'].rolebindings.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApisRbacAuthorizationK8sIoV1NamespacesNamespaceRolebindingsKey() {
  return [
    'apis',
    '/apis/rbac.authorization.k8s.io/v1/namespaces/:namespace/rolebindings',
    'DELETE',
  ] as const
}

export function useDeleteApisRbacAuthorizationK8sIoV1NamespacesNamespaceRolebindings<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['rbac.authorization.k8s.io']['v1']['namespaces'][':namespace']['rolebindings']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.apis)['rbac.authorization.k8s.io']['v1']['namespaces'][':namespace']['rolebindings']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteApisRbacAuthorizationK8sIoV1NamespacesNamespaceRolebindingsKey()
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
            (typeof client.apis)['rbac.authorization.k8s.io']['v1']['namespaces'][':namespace']['rolebindings']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.apis['rbac.authorization.k8s.io'].v1.namespaces[':namespace'].rolebindings.$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApisRbacAuthorizationK8sIoV1NamespacesNamespaceRolebindingsNameKey(
  args: InferRequestType<
    (typeof client.apis)['rbac.authorization.k8s.io']['v1']['namespaces'][':namespace']['rolebindings'][':name']['$get']
  >,
) {
  return [
    'apis',
    '/apis/rbac.authorization.k8s.io/v1/namespaces/:namespace/rolebindings/:name',
    args,
  ] as const
}

export function useGetApisRbacAuthorizationK8sIoV1NamespacesNamespaceRolebindingsName<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.apis)['rbac.authorization.k8s.io']['v1']['namespaces'][':namespace']['rolebindings'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)['rbac.authorization.k8s.io']['v1']['namespaces'][':namespace']['rolebindings'][':name']['$get']
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
        ? getGetApisRbacAuthorizationK8sIoV1NamespacesNamespaceRolebindingsNameKey(args)
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
                (typeof client.apis)['rbac.authorization.k8s.io']['v1']['namespaces'][':namespace']['rolebindings'][':name']['$get']
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
          client.apis['rbac.authorization.k8s.io'].v1.namespaces[':namespace'].rolebindings[
            ':name'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisRbacAuthorizationK8sIoV1NamespacesNamespaceRolebindingsName<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.apis)['rbac.authorization.k8s.io']['v1']['namespaces'][':namespace']['rolebindings'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)['rbac.authorization.k8s.io']['v1']['namespaces'][':namespace']['rolebindings'][':name']['$get']
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
        ? getGetApisRbacAuthorizationK8sIoV1NamespacesNamespaceRolebindingsNameKey(args)
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
                (typeof client.apis)['rbac.authorization.k8s.io']['v1']['namespaces'][':namespace']['rolebindings'][':name']['$get']
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
          client.apis['rbac.authorization.k8s.io'].v1.namespaces[':namespace'].rolebindings[
            ':name'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutApisRbacAuthorizationK8sIoV1NamespacesNamespaceRolebindingsNameKey() {
  return [
    'apis',
    '/apis/rbac.authorization.k8s.io/v1/namespaces/:namespace/rolebindings/:name',
    'PUT',
  ] as const
}

export function usePutApisRbacAuthorizationK8sIoV1NamespacesNamespaceRolebindingsName<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['rbac.authorization.k8s.io']['v1']['namespaces'][':namespace']['rolebindings'][':name']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.apis)['rbac.authorization.k8s.io']['v1']['namespaces'][':namespace']['rolebindings'][':name']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPutApisRbacAuthorizationK8sIoV1NamespacesNamespaceRolebindingsNameKey()
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
            (typeof client.apis)['rbac.authorization.k8s.io']['v1']['namespaces'][':namespace']['rolebindings'][':name']['$put']
          >
        },
      ) =>
        parseResponse(
          client.apis['rbac.authorization.k8s.io'].v1.namespaces[':namespace'].rolebindings[
            ':name'
          ].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApisRbacAuthorizationK8sIoV1NamespacesNamespaceRolebindingsNameKey() {
  return [
    'apis',
    '/apis/rbac.authorization.k8s.io/v1/namespaces/:namespace/rolebindings/:name',
    'DELETE',
  ] as const
}

export function useDeleteApisRbacAuthorizationK8sIoV1NamespacesNamespaceRolebindingsName<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['rbac.authorization.k8s.io']['v1']['namespaces'][':namespace']['rolebindings'][':name']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.apis)['rbac.authorization.k8s.io']['v1']['namespaces'][':namespace']['rolebindings'][':name']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteApisRbacAuthorizationK8sIoV1NamespacesNamespaceRolebindingsNameKey()
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
            (typeof client.apis)['rbac.authorization.k8s.io']['v1']['namespaces'][':namespace']['rolebindings'][':name']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.apis['rbac.authorization.k8s.io'].v1.namespaces[':namespace'].rolebindings[
            ':name'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchApisRbacAuthorizationK8sIoV1NamespacesNamespaceRolebindingsNameKey() {
  return [
    'apis',
    '/apis/rbac.authorization.k8s.io/v1/namespaces/:namespace/rolebindings/:name',
    'PATCH',
  ] as const
}

export function usePatchApisRbacAuthorizationK8sIoV1NamespacesNamespaceRolebindingsName<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['rbac.authorization.k8s.io']['v1']['namespaces'][':namespace']['rolebindings'][':name']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.apis)['rbac.authorization.k8s.io']['v1']['namespaces'][':namespace']['rolebindings'][':name']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPatchApisRbacAuthorizationK8sIoV1NamespacesNamespaceRolebindingsNameKey()
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
            (typeof client.apis)['rbac.authorization.k8s.io']['v1']['namespaces'][':namespace']['rolebindings'][':name']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.apis['rbac.authorization.k8s.io'].v1.namespaces[':namespace'].rolebindings[
            ':name'
          ].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApisRbacAuthorizationK8sIoV1NamespacesNamespaceRolesKey(
  args: InferRequestType<
    (typeof client.apis)['rbac.authorization.k8s.io']['v1']['namespaces'][':namespace']['roles']['$get']
  >,
) {
  return ['apis', '/apis/rbac.authorization.k8s.io/v1/namespaces/:namespace/roles', args] as const
}

export function useGetApisRbacAuthorizationK8sIoV1NamespacesNamespaceRoles<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis)['rbac.authorization.k8s.io']['v1']['namespaces'][':namespace']['roles']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)['rbac.authorization.k8s.io']['v1']['namespaces'][':namespace']['roles']['$get']
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
        ? getGetApisRbacAuthorizationK8sIoV1NamespacesNamespaceRolesKey(args)
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
                (typeof client.apis)['rbac.authorization.k8s.io']['v1']['namespaces'][':namespace']['roles']['$get']
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
          client.apis['rbac.authorization.k8s.io'].v1.namespaces[':namespace'].roles.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisRbacAuthorizationK8sIoV1NamespacesNamespaceRoles<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.apis)['rbac.authorization.k8s.io']['v1']['namespaces'][':namespace']['roles']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)['rbac.authorization.k8s.io']['v1']['namespaces'][':namespace']['roles']['$get']
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
        ? getGetApisRbacAuthorizationK8sIoV1NamespacesNamespaceRolesKey(args)
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
                (typeof client.apis)['rbac.authorization.k8s.io']['v1']['namespaces'][':namespace']['roles']['$get']
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
          client.apis['rbac.authorization.k8s.io'].v1.namespaces[':namespace'].roles.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApisRbacAuthorizationK8sIoV1NamespacesNamespaceRolesKey() {
  return ['apis', '/apis/rbac.authorization.k8s.io/v1/namespaces/:namespace/roles', 'POST'] as const
}

export function usePostApisRbacAuthorizationK8sIoV1NamespacesNamespaceRoles<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['rbac.authorization.k8s.io']['v1']['namespaces'][':namespace']['roles']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.apis)['rbac.authorization.k8s.io']['v1']['namespaces'][':namespace']['roles']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApisRbacAuthorizationK8sIoV1NamespacesNamespaceRolesKey()
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
            (typeof client.apis)['rbac.authorization.k8s.io']['v1']['namespaces'][':namespace']['roles']['$post']
          >
        },
      ) =>
        parseResponse(
          client.apis['rbac.authorization.k8s.io'].v1.namespaces[':namespace'].roles.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApisRbacAuthorizationK8sIoV1NamespacesNamespaceRolesKey() {
  return [
    'apis',
    '/apis/rbac.authorization.k8s.io/v1/namespaces/:namespace/roles',
    'DELETE',
  ] as const
}

export function useDeleteApisRbacAuthorizationK8sIoV1NamespacesNamespaceRoles<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['rbac.authorization.k8s.io']['v1']['namespaces'][':namespace']['roles']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.apis)['rbac.authorization.k8s.io']['v1']['namespaces'][':namespace']['roles']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApisRbacAuthorizationK8sIoV1NamespacesNamespaceRolesKey()
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
            (typeof client.apis)['rbac.authorization.k8s.io']['v1']['namespaces'][':namespace']['roles']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.apis['rbac.authorization.k8s.io'].v1.namespaces[':namespace'].roles.$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApisRbacAuthorizationK8sIoV1NamespacesNamespaceRolesNameKey(
  args: InferRequestType<
    (typeof client.apis)['rbac.authorization.k8s.io']['v1']['namespaces'][':namespace']['roles'][':name']['$get']
  >,
) {
  return [
    'apis',
    '/apis/rbac.authorization.k8s.io/v1/namespaces/:namespace/roles/:name',
    args,
  ] as const
}

export function useGetApisRbacAuthorizationK8sIoV1NamespacesNamespaceRolesName<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis)['rbac.authorization.k8s.io']['v1']['namespaces'][':namespace']['roles'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)['rbac.authorization.k8s.io']['v1']['namespaces'][':namespace']['roles'][':name']['$get']
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
        ? getGetApisRbacAuthorizationK8sIoV1NamespacesNamespaceRolesNameKey(args)
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
                (typeof client.apis)['rbac.authorization.k8s.io']['v1']['namespaces'][':namespace']['roles'][':name']['$get']
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
          client.apis['rbac.authorization.k8s.io'].v1.namespaces[':namespace'].roles[':name'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisRbacAuthorizationK8sIoV1NamespacesNamespaceRolesName<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.apis)['rbac.authorization.k8s.io']['v1']['namespaces'][':namespace']['roles'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)['rbac.authorization.k8s.io']['v1']['namespaces'][':namespace']['roles'][':name']['$get']
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
        ? getGetApisRbacAuthorizationK8sIoV1NamespacesNamespaceRolesNameKey(args)
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
                (typeof client.apis)['rbac.authorization.k8s.io']['v1']['namespaces'][':namespace']['roles'][':name']['$get']
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
          client.apis['rbac.authorization.k8s.io'].v1.namespaces[':namespace'].roles[':name'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutApisRbacAuthorizationK8sIoV1NamespacesNamespaceRolesNameKey() {
  return [
    'apis',
    '/apis/rbac.authorization.k8s.io/v1/namespaces/:namespace/roles/:name',
    'PUT',
  ] as const
}

export function usePutApisRbacAuthorizationK8sIoV1NamespacesNamespaceRolesName<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['rbac.authorization.k8s.io']['v1']['namespaces'][':namespace']['roles'][':name']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.apis)['rbac.authorization.k8s.io']['v1']['namespaces'][':namespace']['roles'][':name']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApisRbacAuthorizationK8sIoV1NamespacesNamespaceRolesNameKey()
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
            (typeof client.apis)['rbac.authorization.k8s.io']['v1']['namespaces'][':namespace']['roles'][':name']['$put']
          >
        },
      ) =>
        parseResponse(
          client.apis['rbac.authorization.k8s.io'].v1.namespaces[':namespace'].roles[':name'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApisRbacAuthorizationK8sIoV1NamespacesNamespaceRolesNameKey() {
  return [
    'apis',
    '/apis/rbac.authorization.k8s.io/v1/namespaces/:namespace/roles/:name',
    'DELETE',
  ] as const
}

export function useDeleteApisRbacAuthorizationK8sIoV1NamespacesNamespaceRolesName<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['rbac.authorization.k8s.io']['v1']['namespaces'][':namespace']['roles'][':name']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.apis)['rbac.authorization.k8s.io']['v1']['namespaces'][':namespace']['roles'][':name']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApisRbacAuthorizationK8sIoV1NamespacesNamespaceRolesNameKey()
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
            (typeof client.apis)['rbac.authorization.k8s.io']['v1']['namespaces'][':namespace']['roles'][':name']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.apis['rbac.authorization.k8s.io'].v1.namespaces[':namespace'].roles[
            ':name'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchApisRbacAuthorizationK8sIoV1NamespacesNamespaceRolesNameKey() {
  return [
    'apis',
    '/apis/rbac.authorization.k8s.io/v1/namespaces/:namespace/roles/:name',
    'PATCH',
  ] as const
}

export function usePatchApisRbacAuthorizationK8sIoV1NamespacesNamespaceRolesName<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis)['rbac.authorization.k8s.io']['v1']['namespaces'][':namespace']['roles'][':name']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.apis)['rbac.authorization.k8s.io']['v1']['namespaces'][':namespace']['roles'][':name']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApisRbacAuthorizationK8sIoV1NamespacesNamespaceRolesNameKey()
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
            (typeof client.apis)['rbac.authorization.k8s.io']['v1']['namespaces'][':namespace']['roles'][':name']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.apis['rbac.authorization.k8s.io'].v1.namespaces[':namespace'].roles[
            ':name'
          ].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApisRbacAuthorizationK8sIoV1RolebindingsKey(
  args: InferRequestType<
    (typeof client.apis)['rbac.authorization.k8s.io']['v1']['rolebindings']['$get']
  >,
) {
  return ['apis', '/apis/rbac.authorization.k8s.io/v1/rolebindings', args] as const
}

export function useGetApisRbacAuthorizationK8sIoV1Rolebindings<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis)['rbac.authorization.k8s.io']['v1']['rolebindings']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)['rbac.authorization.k8s.io']['v1']['rolebindings']['$get']
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
        ? getGetApisRbacAuthorizationK8sIoV1RolebindingsKey(args)
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
                (typeof client.apis)['rbac.authorization.k8s.io']['v1']['rolebindings']['$get']
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
          client.apis['rbac.authorization.k8s.io'].v1.rolebindings.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisRbacAuthorizationK8sIoV1Rolebindings<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis)['rbac.authorization.k8s.io']['v1']['rolebindings']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)['rbac.authorization.k8s.io']['v1']['rolebindings']['$get']
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
        ? getGetApisRbacAuthorizationK8sIoV1RolebindingsKey(args)
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
                (typeof client.apis)['rbac.authorization.k8s.io']['v1']['rolebindings']['$get']
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
          client.apis['rbac.authorization.k8s.io'].v1.rolebindings.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApisRbacAuthorizationK8sIoV1RolesKey(
  args: InferRequestType<(typeof client.apis)['rbac.authorization.k8s.io']['v1']['roles']['$get']>,
) {
  return ['apis', '/apis/rbac.authorization.k8s.io/v1/roles', args] as const
}

export function useGetApisRbacAuthorizationK8sIoV1Roles<TError = unknown>(
  args: InferRequestType<(typeof client.apis)['rbac.authorization.k8s.io']['v1']['roles']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.apis)['rbac.authorization.k8s.io']['v1']['roles']['$get']>
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
        ? getGetApisRbacAuthorizationK8sIoV1RolesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.apis)['rbac.authorization.k8s.io']['v1']['roles']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.apis['rbac.authorization.k8s.io'].v1.roles.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisRbacAuthorizationK8sIoV1Roles<TError = unknown>(
  args: InferRequestType<(typeof client.apis)['rbac.authorization.k8s.io']['v1']['roles']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.apis)['rbac.authorization.k8s.io']['v1']['roles']['$get']>
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
        ? getGetApisRbacAuthorizationK8sIoV1RolesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.apis)['rbac.authorization.k8s.io']['v1']['roles']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.apis['rbac.authorization.k8s.io'].v1.roles.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApisRbacAuthorizationK8sIoV1WatchClusterrolebindingsKey(
  args: InferRequestType<
    (typeof client.apis)['rbac.authorization.k8s.io']['v1']['watch']['clusterrolebindings']['$get']
  >,
) {
  return ['apis', '/apis/rbac.authorization.k8s.io/v1/watch/clusterrolebindings', args] as const
}

export function useGetApisRbacAuthorizationK8sIoV1WatchClusterrolebindings<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis)['rbac.authorization.k8s.io']['v1']['watch']['clusterrolebindings']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)['rbac.authorization.k8s.io']['v1']['watch']['clusterrolebindings']['$get']
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
        ? getGetApisRbacAuthorizationK8sIoV1WatchClusterrolebindingsKey(args)
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
                (typeof client.apis)['rbac.authorization.k8s.io']['v1']['watch']['clusterrolebindings']['$get']
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
          client.apis['rbac.authorization.k8s.io'].v1.watch.clusterrolebindings.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisRbacAuthorizationK8sIoV1WatchClusterrolebindings<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.apis)['rbac.authorization.k8s.io']['v1']['watch']['clusterrolebindings']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)['rbac.authorization.k8s.io']['v1']['watch']['clusterrolebindings']['$get']
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
        ? getGetApisRbacAuthorizationK8sIoV1WatchClusterrolebindingsKey(args)
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
                (typeof client.apis)['rbac.authorization.k8s.io']['v1']['watch']['clusterrolebindings']['$get']
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
          client.apis['rbac.authorization.k8s.io'].v1.watch.clusterrolebindings.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApisRbacAuthorizationK8sIoV1WatchClusterrolebindingsNameKey(
  args: InferRequestType<
    (typeof client.apis)['rbac.authorization.k8s.io']['v1']['watch']['clusterrolebindings'][':name']['$get']
  >,
) {
  return [
    'apis',
    '/apis/rbac.authorization.k8s.io/v1/watch/clusterrolebindings/:name',
    args,
  ] as const
}

export function useGetApisRbacAuthorizationK8sIoV1WatchClusterrolebindingsName<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis)['rbac.authorization.k8s.io']['v1']['watch']['clusterrolebindings'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)['rbac.authorization.k8s.io']['v1']['watch']['clusterrolebindings'][':name']['$get']
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
        ? getGetApisRbacAuthorizationK8sIoV1WatchClusterrolebindingsNameKey(args)
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
                (typeof client.apis)['rbac.authorization.k8s.io']['v1']['watch']['clusterrolebindings'][':name']['$get']
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
          client.apis['rbac.authorization.k8s.io'].v1.watch.clusterrolebindings[':name'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisRbacAuthorizationK8sIoV1WatchClusterrolebindingsName<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.apis)['rbac.authorization.k8s.io']['v1']['watch']['clusterrolebindings'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)['rbac.authorization.k8s.io']['v1']['watch']['clusterrolebindings'][':name']['$get']
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
        ? getGetApisRbacAuthorizationK8sIoV1WatchClusterrolebindingsNameKey(args)
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
                (typeof client.apis)['rbac.authorization.k8s.io']['v1']['watch']['clusterrolebindings'][':name']['$get']
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
          client.apis['rbac.authorization.k8s.io'].v1.watch.clusterrolebindings[':name'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApisRbacAuthorizationK8sIoV1WatchClusterrolesKey(
  args: InferRequestType<
    (typeof client.apis)['rbac.authorization.k8s.io']['v1']['watch']['clusterroles']['$get']
  >,
) {
  return ['apis', '/apis/rbac.authorization.k8s.io/v1/watch/clusterroles', args] as const
}

export function useGetApisRbacAuthorizationK8sIoV1WatchClusterroles<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis)['rbac.authorization.k8s.io']['v1']['watch']['clusterroles']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)['rbac.authorization.k8s.io']['v1']['watch']['clusterroles']['$get']
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
        ? getGetApisRbacAuthorizationK8sIoV1WatchClusterrolesKey(args)
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
                (typeof client.apis)['rbac.authorization.k8s.io']['v1']['watch']['clusterroles']['$get']
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
          client.apis['rbac.authorization.k8s.io'].v1.watch.clusterroles.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisRbacAuthorizationK8sIoV1WatchClusterroles<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis)['rbac.authorization.k8s.io']['v1']['watch']['clusterroles']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)['rbac.authorization.k8s.io']['v1']['watch']['clusterroles']['$get']
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
        ? getGetApisRbacAuthorizationK8sIoV1WatchClusterrolesKey(args)
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
                (typeof client.apis)['rbac.authorization.k8s.io']['v1']['watch']['clusterroles']['$get']
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
          client.apis['rbac.authorization.k8s.io'].v1.watch.clusterroles.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApisRbacAuthorizationK8sIoV1WatchClusterrolesNameKey(
  args: InferRequestType<
    (typeof client.apis)['rbac.authorization.k8s.io']['v1']['watch']['clusterroles'][':name']['$get']
  >,
) {
  return ['apis', '/apis/rbac.authorization.k8s.io/v1/watch/clusterroles/:name', args] as const
}

export function useGetApisRbacAuthorizationK8sIoV1WatchClusterrolesName<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis)['rbac.authorization.k8s.io']['v1']['watch']['clusterroles'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)['rbac.authorization.k8s.io']['v1']['watch']['clusterroles'][':name']['$get']
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
        ? getGetApisRbacAuthorizationK8sIoV1WatchClusterrolesNameKey(args)
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
                (typeof client.apis)['rbac.authorization.k8s.io']['v1']['watch']['clusterroles'][':name']['$get']
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
          client.apis['rbac.authorization.k8s.io'].v1.watch.clusterroles[':name'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisRbacAuthorizationK8sIoV1WatchClusterrolesName<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis)['rbac.authorization.k8s.io']['v1']['watch']['clusterroles'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)['rbac.authorization.k8s.io']['v1']['watch']['clusterroles'][':name']['$get']
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
        ? getGetApisRbacAuthorizationK8sIoV1WatchClusterrolesNameKey(args)
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
                (typeof client.apis)['rbac.authorization.k8s.io']['v1']['watch']['clusterroles'][':name']['$get']
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
          client.apis['rbac.authorization.k8s.io'].v1.watch.clusterroles[':name'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApisRbacAuthorizationK8sIoV1WatchNamespacesNamespaceRolebindingsKey(
  args: InferRequestType<
    (typeof client.apis)['rbac.authorization.k8s.io']['v1']['watch']['namespaces'][':namespace']['rolebindings']['$get']
  >,
) {
  return [
    'apis',
    '/apis/rbac.authorization.k8s.io/v1/watch/namespaces/:namespace/rolebindings',
    args,
  ] as const
}

export function useGetApisRbacAuthorizationK8sIoV1WatchNamespacesNamespaceRolebindings<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.apis)['rbac.authorization.k8s.io']['v1']['watch']['namespaces'][':namespace']['rolebindings']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)['rbac.authorization.k8s.io']['v1']['watch']['namespaces'][':namespace']['rolebindings']['$get']
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
        ? getGetApisRbacAuthorizationK8sIoV1WatchNamespacesNamespaceRolebindingsKey(args)
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
                (typeof client.apis)['rbac.authorization.k8s.io']['v1']['watch']['namespaces'][':namespace']['rolebindings']['$get']
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
          client.apis['rbac.authorization.k8s.io'].v1.watch.namespaces[
            ':namespace'
          ].rolebindings.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisRbacAuthorizationK8sIoV1WatchNamespacesNamespaceRolebindings<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.apis)['rbac.authorization.k8s.io']['v1']['watch']['namespaces'][':namespace']['rolebindings']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)['rbac.authorization.k8s.io']['v1']['watch']['namespaces'][':namespace']['rolebindings']['$get']
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
        ? getGetApisRbacAuthorizationK8sIoV1WatchNamespacesNamespaceRolebindingsKey(args)
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
                (typeof client.apis)['rbac.authorization.k8s.io']['v1']['watch']['namespaces'][':namespace']['rolebindings']['$get']
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
          client.apis['rbac.authorization.k8s.io'].v1.watch.namespaces[
            ':namespace'
          ].rolebindings.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApisRbacAuthorizationK8sIoV1WatchNamespacesNamespaceRolebindingsNameKey(
  args: InferRequestType<
    (typeof client.apis)['rbac.authorization.k8s.io']['v1']['watch']['namespaces'][':namespace']['rolebindings'][':name']['$get']
  >,
) {
  return [
    'apis',
    '/apis/rbac.authorization.k8s.io/v1/watch/namespaces/:namespace/rolebindings/:name',
    args,
  ] as const
}

export function useGetApisRbacAuthorizationK8sIoV1WatchNamespacesNamespaceRolebindingsName<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.apis)['rbac.authorization.k8s.io']['v1']['watch']['namespaces'][':namespace']['rolebindings'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)['rbac.authorization.k8s.io']['v1']['watch']['namespaces'][':namespace']['rolebindings'][':name']['$get']
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
        ? getGetApisRbacAuthorizationK8sIoV1WatchNamespacesNamespaceRolebindingsNameKey(args)
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
                (typeof client.apis)['rbac.authorization.k8s.io']['v1']['watch']['namespaces'][':namespace']['rolebindings'][':name']['$get']
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
          client.apis['rbac.authorization.k8s.io'].v1.watch.namespaces[':namespace'].rolebindings[
            ':name'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisRbacAuthorizationK8sIoV1WatchNamespacesNamespaceRolebindingsName<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.apis)['rbac.authorization.k8s.io']['v1']['watch']['namespaces'][':namespace']['rolebindings'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)['rbac.authorization.k8s.io']['v1']['watch']['namespaces'][':namespace']['rolebindings'][':name']['$get']
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
        ? getGetApisRbacAuthorizationK8sIoV1WatchNamespacesNamespaceRolebindingsNameKey(args)
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
                (typeof client.apis)['rbac.authorization.k8s.io']['v1']['watch']['namespaces'][':namespace']['rolebindings'][':name']['$get']
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
          client.apis['rbac.authorization.k8s.io'].v1.watch.namespaces[':namespace'].rolebindings[
            ':name'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApisRbacAuthorizationK8sIoV1WatchNamespacesNamespaceRolesKey(
  args: InferRequestType<
    (typeof client.apis)['rbac.authorization.k8s.io']['v1']['watch']['namespaces'][':namespace']['roles']['$get']
  >,
) {
  return [
    'apis',
    '/apis/rbac.authorization.k8s.io/v1/watch/namespaces/:namespace/roles',
    args,
  ] as const
}

export function useGetApisRbacAuthorizationK8sIoV1WatchNamespacesNamespaceRoles<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis)['rbac.authorization.k8s.io']['v1']['watch']['namespaces'][':namespace']['roles']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)['rbac.authorization.k8s.io']['v1']['watch']['namespaces'][':namespace']['roles']['$get']
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
        ? getGetApisRbacAuthorizationK8sIoV1WatchNamespacesNamespaceRolesKey(args)
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
                (typeof client.apis)['rbac.authorization.k8s.io']['v1']['watch']['namespaces'][':namespace']['roles']['$get']
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
          client.apis['rbac.authorization.k8s.io'].v1.watch.namespaces[':namespace'].roles.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisRbacAuthorizationK8sIoV1WatchNamespacesNamespaceRoles<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.apis)['rbac.authorization.k8s.io']['v1']['watch']['namespaces'][':namespace']['roles']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)['rbac.authorization.k8s.io']['v1']['watch']['namespaces'][':namespace']['roles']['$get']
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
        ? getGetApisRbacAuthorizationK8sIoV1WatchNamespacesNamespaceRolesKey(args)
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
                (typeof client.apis)['rbac.authorization.k8s.io']['v1']['watch']['namespaces'][':namespace']['roles']['$get']
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
          client.apis['rbac.authorization.k8s.io'].v1.watch.namespaces[':namespace'].roles.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApisRbacAuthorizationK8sIoV1WatchNamespacesNamespaceRolesNameKey(
  args: InferRequestType<
    (typeof client.apis)['rbac.authorization.k8s.io']['v1']['watch']['namespaces'][':namespace']['roles'][':name']['$get']
  >,
) {
  return [
    'apis',
    '/apis/rbac.authorization.k8s.io/v1/watch/namespaces/:namespace/roles/:name',
    args,
  ] as const
}

export function useGetApisRbacAuthorizationK8sIoV1WatchNamespacesNamespaceRolesName<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.apis)['rbac.authorization.k8s.io']['v1']['watch']['namespaces'][':namespace']['roles'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)['rbac.authorization.k8s.io']['v1']['watch']['namespaces'][':namespace']['roles'][':name']['$get']
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
        ? getGetApisRbacAuthorizationK8sIoV1WatchNamespacesNamespaceRolesNameKey(args)
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
                (typeof client.apis)['rbac.authorization.k8s.io']['v1']['watch']['namespaces'][':namespace']['roles'][':name']['$get']
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
          client.apis['rbac.authorization.k8s.io'].v1.watch.namespaces[':namespace'].roles[
            ':name'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisRbacAuthorizationK8sIoV1WatchNamespacesNamespaceRolesName<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.apis)['rbac.authorization.k8s.io']['v1']['watch']['namespaces'][':namespace']['roles'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)['rbac.authorization.k8s.io']['v1']['watch']['namespaces'][':namespace']['roles'][':name']['$get']
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
        ? getGetApisRbacAuthorizationK8sIoV1WatchNamespacesNamespaceRolesNameKey(args)
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
                (typeof client.apis)['rbac.authorization.k8s.io']['v1']['watch']['namespaces'][':namespace']['roles'][':name']['$get']
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
          client.apis['rbac.authorization.k8s.io'].v1.watch.namespaces[':namespace'].roles[
            ':name'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApisRbacAuthorizationK8sIoV1WatchRolebindingsKey(
  args: InferRequestType<
    (typeof client.apis)['rbac.authorization.k8s.io']['v1']['watch']['rolebindings']['$get']
  >,
) {
  return ['apis', '/apis/rbac.authorization.k8s.io/v1/watch/rolebindings', args] as const
}

export function useGetApisRbacAuthorizationK8sIoV1WatchRolebindings<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis)['rbac.authorization.k8s.io']['v1']['watch']['rolebindings']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)['rbac.authorization.k8s.io']['v1']['watch']['rolebindings']['$get']
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
        ? getGetApisRbacAuthorizationK8sIoV1WatchRolebindingsKey(args)
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
                (typeof client.apis)['rbac.authorization.k8s.io']['v1']['watch']['rolebindings']['$get']
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
          client.apis['rbac.authorization.k8s.io'].v1.watch.rolebindings.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisRbacAuthorizationK8sIoV1WatchRolebindings<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis)['rbac.authorization.k8s.io']['v1']['watch']['rolebindings']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)['rbac.authorization.k8s.io']['v1']['watch']['rolebindings']['$get']
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
        ? getGetApisRbacAuthorizationK8sIoV1WatchRolebindingsKey(args)
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
                (typeof client.apis)['rbac.authorization.k8s.io']['v1']['watch']['rolebindings']['$get']
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
          client.apis['rbac.authorization.k8s.io'].v1.watch.rolebindings.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApisRbacAuthorizationK8sIoV1WatchRolesKey(
  args: InferRequestType<
    (typeof client.apis)['rbac.authorization.k8s.io']['v1']['watch']['roles']['$get']
  >,
) {
  return ['apis', '/apis/rbac.authorization.k8s.io/v1/watch/roles', args] as const
}

export function useGetApisRbacAuthorizationK8sIoV1WatchRoles<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis)['rbac.authorization.k8s.io']['v1']['watch']['roles']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)['rbac.authorization.k8s.io']['v1']['watch']['roles']['$get']
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
        ? getGetApisRbacAuthorizationK8sIoV1WatchRolesKey(args)
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
                (typeof client.apis)['rbac.authorization.k8s.io']['v1']['watch']['roles']['$get']
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
          client.apis['rbac.authorization.k8s.io'].v1.watch.roles.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisRbacAuthorizationK8sIoV1WatchRoles<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis)['rbac.authorization.k8s.io']['v1']['watch']['roles']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis)['rbac.authorization.k8s.io']['v1']['watch']['roles']['$get']
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
        ? getGetApisRbacAuthorizationK8sIoV1WatchRolesKey(args)
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
                (typeof client.apis)['rbac.authorization.k8s.io']['v1']['watch']['roles']['$get']
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
          client.apis['rbac.authorization.k8s.io'].v1.watch.roles.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}
