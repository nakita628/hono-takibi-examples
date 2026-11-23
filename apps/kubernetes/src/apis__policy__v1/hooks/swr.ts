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

export function getGetApisPolicyV1IndexKey() {
  return ['apis', '/apis/policy/v1/'] as const
}

export function useGetApisPolicyV1Index<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.apis.policy.v1.index.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApisPolicyV1IndexKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.apis.policy.v1.index.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.apis.policy.v1.index.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisPolicyV1Index<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.apis.policy.v1.index.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApisPolicyV1IndexKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.apis.policy.v1.index.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.apis.policy.v1.index.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApisPolicyV1NamespacesNamespacePoddisruptionbudgetsKey(
  args: InferRequestType<
    (typeof client.apis.policy.v1.namespaces)[':namespace']['poddisruptionbudgets']['$get']
  >,
) {
  return ['apis', '/apis/policy/v1/namespaces/:namespace/poddisruptionbudgets', args] as const
}

export function useGetApisPolicyV1NamespacesNamespacePoddisruptionbudgets<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis.policy.v1.namespaces)[':namespace']['poddisruptionbudgets']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis.policy.v1.namespaces)[':namespace']['poddisruptionbudgets']['$get']
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
        ? getGetApisPolicyV1NamespacesNamespacePoddisruptionbudgetsKey(args)
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
                (typeof client.apis.policy.v1.namespaces)[':namespace']['poddisruptionbudgets']['$get']
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
          client.apis.policy.v1.namespaces[':namespace'].poddisruptionbudgets.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisPolicyV1NamespacesNamespacePoddisruptionbudgets<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.apis.policy.v1.namespaces)[':namespace']['poddisruptionbudgets']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis.policy.v1.namespaces)[':namespace']['poddisruptionbudgets']['$get']
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
        ? getGetApisPolicyV1NamespacesNamespacePoddisruptionbudgetsKey(args)
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
                (typeof client.apis.policy.v1.namespaces)[':namespace']['poddisruptionbudgets']['$get']
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
          client.apis.policy.v1.namespaces[':namespace'].poddisruptionbudgets.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApisPolicyV1NamespacesNamespacePoddisruptionbudgetsKey() {
  return ['apis', '/apis/policy/v1/namespaces/:namespace/poddisruptionbudgets', 'POST'] as const
}

export function usePostApisPolicyV1NamespacesNamespacePoddisruptionbudgets<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis.policy.v1.namespaces)[':namespace']['poddisruptionbudgets']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.apis.policy.v1.namespaces)[':namespace']['poddisruptionbudgets']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApisPolicyV1NamespacesNamespacePoddisruptionbudgetsKey()
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
            (typeof client.apis.policy.v1.namespaces)[':namespace']['poddisruptionbudgets']['$post']
          >
        },
      ) =>
        parseResponse(
          client.apis.policy.v1.namespaces[':namespace'].poddisruptionbudgets.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApisPolicyV1NamespacesNamespacePoddisruptionbudgetsKey() {
  return ['apis', '/apis/policy/v1/namespaces/:namespace/poddisruptionbudgets', 'DELETE'] as const
}

export function useDeleteApisPolicyV1NamespacesNamespacePoddisruptionbudgets<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis.policy.v1.namespaces)[':namespace']['poddisruptionbudgets']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.apis.policy.v1.namespaces)[':namespace']['poddisruptionbudgets']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApisPolicyV1NamespacesNamespacePoddisruptionbudgetsKey()
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
            (typeof client.apis.policy.v1.namespaces)[':namespace']['poddisruptionbudgets']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.apis.policy.v1.namespaces[':namespace'].poddisruptionbudgets.$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApisPolicyV1NamespacesNamespacePoddisruptionbudgetsNameKey(
  args: InferRequestType<
    (typeof client.apis.policy.v1.namespaces)[':namespace']['poddisruptionbudgets'][':name']['$get']
  >,
) {
  return ['apis', '/apis/policy/v1/namespaces/:namespace/poddisruptionbudgets/:name', args] as const
}

export function useGetApisPolicyV1NamespacesNamespacePoddisruptionbudgetsName<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis.policy.v1.namespaces)[':namespace']['poddisruptionbudgets'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis.policy.v1.namespaces)[':namespace']['poddisruptionbudgets'][':name']['$get']
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
        ? getGetApisPolicyV1NamespacesNamespacePoddisruptionbudgetsNameKey(args)
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
                (typeof client.apis.policy.v1.namespaces)[':namespace']['poddisruptionbudgets'][':name']['$get']
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
          client.apis.policy.v1.namespaces[':namespace'].poddisruptionbudgets[':name'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisPolicyV1NamespacesNamespacePoddisruptionbudgetsName<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.apis.policy.v1.namespaces)[':namespace']['poddisruptionbudgets'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis.policy.v1.namespaces)[':namespace']['poddisruptionbudgets'][':name']['$get']
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
        ? getGetApisPolicyV1NamespacesNamespacePoddisruptionbudgetsNameKey(args)
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
                (typeof client.apis.policy.v1.namespaces)[':namespace']['poddisruptionbudgets'][':name']['$get']
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
          client.apis.policy.v1.namespaces[':namespace'].poddisruptionbudgets[':name'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutApisPolicyV1NamespacesNamespacePoddisruptionbudgetsNameKey() {
  return [
    'apis',
    '/apis/policy/v1/namespaces/:namespace/poddisruptionbudgets/:name',
    'PUT',
  ] as const
}

export function usePutApisPolicyV1NamespacesNamespacePoddisruptionbudgetsName<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis.policy.v1.namespaces)[':namespace']['poddisruptionbudgets'][':name']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.apis.policy.v1.namespaces)[':namespace']['poddisruptionbudgets'][':name']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApisPolicyV1NamespacesNamespacePoddisruptionbudgetsNameKey()
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
            (typeof client.apis.policy.v1.namespaces)[':namespace']['poddisruptionbudgets'][':name']['$put']
          >
        },
      ) =>
        parseResponse(
          client.apis.policy.v1.namespaces[':namespace'].poddisruptionbudgets[':name'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApisPolicyV1NamespacesNamespacePoddisruptionbudgetsNameKey() {
  return [
    'apis',
    '/apis/policy/v1/namespaces/:namespace/poddisruptionbudgets/:name',
    'DELETE',
  ] as const
}

export function useDeleteApisPolicyV1NamespacesNamespacePoddisruptionbudgetsName<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis.policy.v1.namespaces)[':namespace']['poddisruptionbudgets'][':name']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.apis.policy.v1.namespaces)[':namespace']['poddisruptionbudgets'][':name']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApisPolicyV1NamespacesNamespacePoddisruptionbudgetsNameKey()
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
            (typeof client.apis.policy.v1.namespaces)[':namespace']['poddisruptionbudgets'][':name']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.apis.policy.v1.namespaces[':namespace'].poddisruptionbudgets[':name'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchApisPolicyV1NamespacesNamespacePoddisruptionbudgetsNameKey() {
  return [
    'apis',
    '/apis/policy/v1/namespaces/:namespace/poddisruptionbudgets/:name',
    'PATCH',
  ] as const
}

export function usePatchApisPolicyV1NamespacesNamespacePoddisruptionbudgetsName<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis.policy.v1.namespaces)[':namespace']['poddisruptionbudgets'][':name']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.apis.policy.v1.namespaces)[':namespace']['poddisruptionbudgets'][':name']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApisPolicyV1NamespacesNamespacePoddisruptionbudgetsNameKey()
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
            (typeof client.apis.policy.v1.namespaces)[':namespace']['poddisruptionbudgets'][':name']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.apis.policy.v1.namespaces[':namespace'].poddisruptionbudgets[':name'].$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApisPolicyV1NamespacesNamespacePoddisruptionbudgetsNameStatusKey(
  args: InferRequestType<
    (typeof client.apis.policy.v1.namespaces)[':namespace']['poddisruptionbudgets'][':name']['status']['$get']
  >,
) {
  return [
    'apis',
    '/apis/policy/v1/namespaces/:namespace/poddisruptionbudgets/:name/status',
    args,
  ] as const
}

export function useGetApisPolicyV1NamespacesNamespacePoddisruptionbudgetsNameStatus<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.apis.policy.v1.namespaces)[':namespace']['poddisruptionbudgets'][':name']['status']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis.policy.v1.namespaces)[':namespace']['poddisruptionbudgets'][':name']['status']['$get']
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
        ? getGetApisPolicyV1NamespacesNamespacePoddisruptionbudgetsNameStatusKey(args)
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
                (typeof client.apis.policy.v1.namespaces)[':namespace']['poddisruptionbudgets'][':name']['status']['$get']
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
          client.apis.policy.v1.namespaces[':namespace'].poddisruptionbudgets[':name'].status.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisPolicyV1NamespacesNamespacePoddisruptionbudgetsNameStatus<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.apis.policy.v1.namespaces)[':namespace']['poddisruptionbudgets'][':name']['status']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis.policy.v1.namespaces)[':namespace']['poddisruptionbudgets'][':name']['status']['$get']
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
        ? getGetApisPolicyV1NamespacesNamespacePoddisruptionbudgetsNameStatusKey(args)
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
                (typeof client.apis.policy.v1.namespaces)[':namespace']['poddisruptionbudgets'][':name']['status']['$get']
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
          client.apis.policy.v1.namespaces[':namespace'].poddisruptionbudgets[':name'].status.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutApisPolicyV1NamespacesNamespacePoddisruptionbudgetsNameStatusKey() {
  return [
    'apis',
    '/apis/policy/v1/namespaces/:namespace/poddisruptionbudgets/:name/status',
    'PUT',
  ] as const
}

export function usePutApisPolicyV1NamespacesNamespacePoddisruptionbudgetsNameStatus<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis.policy.v1.namespaces)[':namespace']['poddisruptionbudgets'][':name']['status']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.apis.policy.v1.namespaces)[':namespace']['poddisruptionbudgets'][':name']['status']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPutApisPolicyV1NamespacesNamespacePoddisruptionbudgetsNameStatusKey()
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
            (typeof client.apis.policy.v1.namespaces)[':namespace']['poddisruptionbudgets'][':name']['status']['$put']
          >
        },
      ) =>
        parseResponse(
          client.apis.policy.v1.namespaces[':namespace'].poddisruptionbudgets[':name'].status.$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchApisPolicyV1NamespacesNamespacePoddisruptionbudgetsNameStatusKey() {
  return [
    'apis',
    '/apis/policy/v1/namespaces/:namespace/poddisruptionbudgets/:name/status',
    'PATCH',
  ] as const
}

export function usePatchApisPolicyV1NamespacesNamespacePoddisruptionbudgetsNameStatus<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.apis.policy.v1.namespaces)[':namespace']['poddisruptionbudgets'][':name']['status']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.apis.policy.v1.namespaces)[':namespace']['poddisruptionbudgets'][':name']['status']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPatchApisPolicyV1NamespacesNamespacePoddisruptionbudgetsNameStatusKey()
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
            (typeof client.apis.policy.v1.namespaces)[':namespace']['poddisruptionbudgets'][':name']['status']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.apis.policy.v1.namespaces[':namespace'].poddisruptionbudgets[
            ':name'
          ].status.$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApisPolicyV1PoddisruptionbudgetsKey(
  args: InferRequestType<typeof client.apis.policy.v1.poddisruptionbudgets.$get>,
) {
  return ['apis', '/apis/policy/v1/poddisruptionbudgets', args] as const
}

export function useGetApisPolicyV1Poddisruptionbudgets<TError = unknown>(
  args: InferRequestType<typeof client.apis.policy.v1.poddisruptionbudgets.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.apis.policy.v1.poddisruptionbudgets.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApisPolicyV1PoddisruptionbudgetsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.apis.policy.v1.poddisruptionbudgets.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.apis.policy.v1.poddisruptionbudgets.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisPolicyV1Poddisruptionbudgets<TError = unknown>(
  args: InferRequestType<typeof client.apis.policy.v1.poddisruptionbudgets.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.apis.policy.v1.poddisruptionbudgets.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApisPolicyV1PoddisruptionbudgetsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.apis.policy.v1.poddisruptionbudgets.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.apis.policy.v1.poddisruptionbudgets.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApisPolicyV1WatchNamespacesNamespacePoddisruptionbudgetsKey(
  args: InferRequestType<
    (typeof client.apis.policy.v1.watch.namespaces)[':namespace']['poddisruptionbudgets']['$get']
  >,
) {
  return ['apis', '/apis/policy/v1/watch/namespaces/:namespace/poddisruptionbudgets', args] as const
}

export function useGetApisPolicyV1WatchNamespacesNamespacePoddisruptionbudgets<TError = unknown>(
  args: InferRequestType<
    (typeof client.apis.policy.v1.watch.namespaces)[':namespace']['poddisruptionbudgets']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis.policy.v1.watch.namespaces)[':namespace']['poddisruptionbudgets']['$get']
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
        ? getGetApisPolicyV1WatchNamespacesNamespacePoddisruptionbudgetsKey(args)
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
                (typeof client.apis.policy.v1.watch.namespaces)[':namespace']['poddisruptionbudgets']['$get']
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
          client.apis.policy.v1.watch.namespaces[':namespace'].poddisruptionbudgets.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisPolicyV1WatchNamespacesNamespacePoddisruptionbudgets<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.apis.policy.v1.watch.namespaces)[':namespace']['poddisruptionbudgets']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis.policy.v1.watch.namespaces)[':namespace']['poddisruptionbudgets']['$get']
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
        ? getGetApisPolicyV1WatchNamespacesNamespacePoddisruptionbudgetsKey(args)
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
                (typeof client.apis.policy.v1.watch.namespaces)[':namespace']['poddisruptionbudgets']['$get']
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
          client.apis.policy.v1.watch.namespaces[':namespace'].poddisruptionbudgets.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApisPolicyV1WatchNamespacesNamespacePoddisruptionbudgetsNameKey(
  args: InferRequestType<
    (typeof client.apis.policy.v1.watch.namespaces)[':namespace']['poddisruptionbudgets'][':name']['$get']
  >,
) {
  return [
    'apis',
    '/apis/policy/v1/watch/namespaces/:namespace/poddisruptionbudgets/:name',
    args,
  ] as const
}

export function useGetApisPolicyV1WatchNamespacesNamespacePoddisruptionbudgetsName<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.apis.policy.v1.watch.namespaces)[':namespace']['poddisruptionbudgets'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis.policy.v1.watch.namespaces)[':namespace']['poddisruptionbudgets'][':name']['$get']
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
        ? getGetApisPolicyV1WatchNamespacesNamespacePoddisruptionbudgetsNameKey(args)
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
                (typeof client.apis.policy.v1.watch.namespaces)[':namespace']['poddisruptionbudgets'][':name']['$get']
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
          client.apis.policy.v1.watch.namespaces[':namespace'].poddisruptionbudgets[':name'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisPolicyV1WatchNamespacesNamespacePoddisruptionbudgetsName<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.apis.policy.v1.watch.namespaces)[':namespace']['poddisruptionbudgets'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.apis.policy.v1.watch.namespaces)[':namespace']['poddisruptionbudgets'][':name']['$get']
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
        ? getGetApisPolicyV1WatchNamespacesNamespacePoddisruptionbudgetsNameKey(args)
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
                (typeof client.apis.policy.v1.watch.namespaces)[':namespace']['poddisruptionbudgets'][':name']['$get']
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
          client.apis.policy.v1.watch.namespaces[':namespace'].poddisruptionbudgets[':name'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApisPolicyV1WatchPoddisruptionbudgetsKey(
  args: InferRequestType<typeof client.apis.policy.v1.watch.poddisruptionbudgets.$get>,
) {
  return ['apis', '/apis/policy/v1/watch/poddisruptionbudgets', args] as const
}

export function useGetApisPolicyV1WatchPoddisruptionbudgets<TError = unknown>(
  args: InferRequestType<typeof client.apis.policy.v1.watch.poddisruptionbudgets.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.apis.policy.v1.watch.poddisruptionbudgets.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApisPolicyV1WatchPoddisruptionbudgetsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.apis.policy.v1.watch.poddisruptionbudgets.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.apis.policy.v1.watch.poddisruptionbudgets.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApisPolicyV1WatchPoddisruptionbudgets<TError = unknown>(
  args: InferRequestType<typeof client.apis.policy.v1.watch.poddisruptionbudgets.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.apis.policy.v1.watch.poddisruptionbudgets.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApisPolicyV1WatchPoddisruptionbudgetsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.apis.policy.v1.watch.poddisruptionbudgets.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.apis.policy.v1.watch.poddisruptionbudgets.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}
