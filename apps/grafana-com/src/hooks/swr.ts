import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getInstancesKey() {
  return ['instances'] as const
}

export function getOrgStackRegionsKey() {
  return ['org-stack-regions'] as const
}

export function getOrgsKey() {
  return ['orgs'] as const
}

export function getPluginsKey() {
  return ['plugins'] as const
}

export function getPluginsMarketplaceKey() {
  return ['plugins-marketplace'] as const
}

export function getStackRegionsKey() {
  return ['stack-regions'] as const
}

export function getV1Key() {
  return ['v1'] as const
}

export function getGetInstancesKey(args: InferRequestType<typeof client.instances.$get>) {
  return ['instances', '/instances', args] as const
}

export function useGetInstances<TError = unknown>(
  args: InferRequestType<typeof client.instances.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.instances.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetInstancesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.instances.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.instances.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetInstances<TError = unknown>(
  args: InferRequestType<typeof client.instances.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.instances.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetInstancesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.instances.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.instances.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostInstancesKey() {
  return ['instances', '/instances', 'POST'] as const
}

export function usePostInstances<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.instances.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.instances.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostInstancesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.instances.$post> }) =>
        parseResponse(client.instances.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetInstancesInstanceIdKey(
  args: InferRequestType<(typeof client.instances)[':instanceId']['$get']>,
) {
  return ['instances', '/instances/:instanceId', args] as const
}

export function useGetInstancesInstanceId<TError = unknown>(
  args: InferRequestType<(typeof client.instances)[':instanceId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.instances)[':instanceId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetInstancesInstanceIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.instances)[':instanceId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.instances[':instanceId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetInstancesInstanceId<TError = unknown>(
  args: InferRequestType<(typeof client.instances)[':instanceId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.instances)[':instanceId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetInstancesInstanceIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.instances)[':instanceId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.instances[':instanceId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostInstancesInstanceIdKey() {
  return ['instances', '/instances/:instanceId', 'POST'] as const
}

export function usePostInstancesInstanceId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.instances)[':instanceId']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.instances)[':instanceId']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostInstancesInstanceIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.instances)[':instanceId']['$post']> },
      ) => parseResponse(client.instances[':instanceId'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteInstancesInstanceIdKey() {
  return ['instances', '/instances/:instanceId', 'DELETE'] as const
}

export function useDeleteInstancesInstanceId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.instances)[':instanceId']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.instances)[':instanceId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteInstancesInstanceIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.instances)[':instanceId']['$delete']> },
      ) => parseResponse(client.instances[':instanceId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostInstancesInstanceIdApiServiceaccountsKey() {
  return ['instances', '/instances/:instanceId/api/serviceaccounts', 'POST'] as const
}

export function usePostInstancesInstanceIdApiServiceaccounts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.instances)[':instanceId']['api']['serviceaccounts']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.instances)[':instanceId']['api']['serviceaccounts']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostInstancesInstanceIdApiServiceaccountsKey()
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
            (typeof client.instances)[':instanceId']['api']['serviceaccounts']['$post']
          >
        },
      ) =>
        parseResponse(
          client.instances[':instanceId'].api.serviceaccounts.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetInstancesInstanceIdApiServiceaccountsSearchKey(
  args: InferRequestType<
    (typeof client.instances)[':instanceId']['api']['serviceaccounts']['search']['$get']
  >,
) {
  return ['instances', '/instances/:instanceId/api/serviceaccounts/search', args] as const
}

export function useGetInstancesInstanceIdApiServiceaccountsSearch<TError = unknown>(
  args: InferRequestType<
    (typeof client.instances)[':instanceId']['api']['serviceaccounts']['search']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.instances)[':instanceId']['api']['serviceaccounts']['search']['$get']
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
        ? getGetInstancesInstanceIdApiServiceaccountsSearchKey(args)
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
                (typeof client.instances)[':instanceId']['api']['serviceaccounts']['search']['$get']
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
          client.instances[':instanceId'].api.serviceaccounts.search.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetInstancesInstanceIdApiServiceaccountsSearch<TError = unknown>(
  args: InferRequestType<
    (typeof client.instances)[':instanceId']['api']['serviceaccounts']['search']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.instances)[':instanceId']['api']['serviceaccounts']['search']['$get']
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
        ? getGetInstancesInstanceIdApiServiceaccountsSearchKey(args)
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
                (typeof client.instances)[':instanceId']['api']['serviceaccounts']['search']['$get']
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
          client.instances[':instanceId'].api.serviceaccounts.search.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetInstancesInstanceIdApiServiceaccountsServiceAccountIdKey(
  args: InferRequestType<
    (typeof client.instances)[':instanceId']['api']['serviceaccounts'][':serviceAccountId']['$get']
  >,
) {
  return [
    'instances',
    '/instances/:instanceId/api/serviceaccounts/:serviceAccountId',
    args,
  ] as const
}

export function useGetInstancesInstanceIdApiServiceaccountsServiceAccountId<TError = unknown>(
  args: InferRequestType<
    (typeof client.instances)[':instanceId']['api']['serviceaccounts'][':serviceAccountId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.instances)[':instanceId']['api']['serviceaccounts'][':serviceAccountId']['$get']
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
        ? getGetInstancesInstanceIdApiServiceaccountsServiceAccountIdKey(args)
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
                (typeof client.instances)[':instanceId']['api']['serviceaccounts'][':serviceAccountId']['$get']
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
          client.instances[':instanceId'].api.serviceaccounts[':serviceAccountId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetInstancesInstanceIdApiServiceaccountsServiceAccountId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.instances)[':instanceId']['api']['serviceaccounts'][':serviceAccountId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.instances)[':instanceId']['api']['serviceaccounts'][':serviceAccountId']['$get']
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
        ? getGetInstancesInstanceIdApiServiceaccountsServiceAccountIdKey(args)
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
                (typeof client.instances)[':instanceId']['api']['serviceaccounts'][':serviceAccountId']['$get']
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
          client.instances[':instanceId'].api.serviceaccounts[':serviceAccountId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteInstancesInstanceIdApiServiceaccountsServiceAccountIdKey() {
  return [
    'instances',
    '/instances/:instanceId/api/serviceaccounts/:serviceAccountId',
    'DELETE',
  ] as const
}

export function useDeleteInstancesInstanceIdApiServiceaccountsServiceAccountId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.instances)[':instanceId']['api']['serviceaccounts'][':serviceAccountId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.instances)[':instanceId']['api']['serviceaccounts'][':serviceAccountId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteInstancesInstanceIdApiServiceaccountsServiceAccountIdKey()
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
            (typeof client.instances)[':instanceId']['api']['serviceaccounts'][':serviceAccountId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.instances[':instanceId'].api.serviceaccounts[':serviceAccountId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetInstancesInstanceIdApiServiceaccountsServiceAccountIdTokensKey(
  args: InferRequestType<
    (typeof client.instances)[':instanceId']['api']['serviceaccounts'][':serviceAccountId']['tokens']['$get']
  >,
) {
  return [
    'instances',
    '/instances/:instanceId/api/serviceaccounts/:serviceAccountId/tokens',
    args,
  ] as const
}

export function useGetInstancesInstanceIdApiServiceaccountsServiceAccountIdTokens<TError = unknown>(
  args: InferRequestType<
    (typeof client.instances)[':instanceId']['api']['serviceaccounts'][':serviceAccountId']['tokens']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.instances)[':instanceId']['api']['serviceaccounts'][':serviceAccountId']['tokens']['$get']
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
        ? getGetInstancesInstanceIdApiServiceaccountsServiceAccountIdTokensKey(args)
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
                (typeof client.instances)[':instanceId']['api']['serviceaccounts'][':serviceAccountId']['tokens']['$get']
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
          client.instances[':instanceId'].api.serviceaccounts[':serviceAccountId'].tokens.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetInstancesInstanceIdApiServiceaccountsServiceAccountIdTokens<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.instances)[':instanceId']['api']['serviceaccounts'][':serviceAccountId']['tokens']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.instances)[':instanceId']['api']['serviceaccounts'][':serviceAccountId']['tokens']['$get']
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
        ? getGetInstancesInstanceIdApiServiceaccountsServiceAccountIdTokensKey(args)
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
                (typeof client.instances)[':instanceId']['api']['serviceaccounts'][':serviceAccountId']['tokens']['$get']
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
          client.instances[':instanceId'].api.serviceaccounts[':serviceAccountId'].tokens.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostInstancesInstanceIdApiServiceaccountsServiceAccountIdTokensKey() {
  return [
    'instances',
    '/instances/:instanceId/api/serviceaccounts/:serviceAccountId/tokens',
    'POST',
  ] as const
}

export function usePostInstancesInstanceIdApiServiceaccountsServiceAccountIdTokens<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.instances)[':instanceId']['api']['serviceaccounts'][':serviceAccountId']['tokens']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.instances)[':instanceId']['api']['serviceaccounts'][':serviceAccountId']['tokens']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostInstancesInstanceIdApiServiceaccountsServiceAccountIdTokensKey()
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
            (typeof client.instances)[':instanceId']['api']['serviceaccounts'][':serviceAccountId']['tokens']['$post']
          >
        },
      ) =>
        parseResponse(
          client.instances[':instanceId'].api.serviceaccounts[':serviceAccountId'].tokens.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteInstancesInstanceIdApiServiceaccountsServiceAccountIdTokensTokenIdKey() {
  return [
    'instances',
    '/instances/:instanceId/api/serviceaccounts/:serviceAccountId/tokens/:tokenId',
    'DELETE',
  ] as const
}

export function useDeleteInstancesInstanceIdApiServiceaccountsServiceAccountIdTokensTokenId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.instances)[':instanceId']['api']['serviceaccounts'][':serviceAccountId']['tokens'][':tokenId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.instances)[':instanceId']['api']['serviceaccounts'][':serviceAccountId']['tokens'][':tokenId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteInstancesInstanceIdApiServiceaccountsServiceAccountIdTokensTokenIdKey()
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
            (typeof client.instances)[':instanceId']['api']['serviceaccounts'][':serviceAccountId']['tokens'][':tokenId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.instances[':instanceId'].api.serviceaccounts[':serviceAccountId'].tokens[
            ':tokenId'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetInstancesInstanceIdPluginsKey(
  args: InferRequestType<(typeof client.instances)[':instanceId']['plugins']['$get']>,
) {
  return ['instances', '/instances/:instanceId/plugins', args] as const
}

export function useGetInstancesInstanceIdPlugins<TError = unknown>(
  args: InferRequestType<(typeof client.instances)[':instanceId']['plugins']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.instances)[':instanceId']['plugins']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetInstancesInstanceIdPluginsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.instances)[':instanceId']['plugins']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.instances[':instanceId'].plugins.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetInstancesInstanceIdPlugins<TError = unknown>(
  args: InferRequestType<(typeof client.instances)[':instanceId']['plugins']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.instances)[':instanceId']['plugins']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetInstancesInstanceIdPluginsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.instances)[':instanceId']['plugins']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.instances[':instanceId'].plugins.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostInstancesInstanceIdPluginsKey() {
  return ['instances', '/instances/:instanceId/plugins', 'POST'] as const
}

export function usePostInstancesInstanceIdPlugins<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.instances)[':instanceId']['plugins']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.instances)[':instanceId']['plugins']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostInstancesInstanceIdPluginsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.instances)[':instanceId']['plugins']['$post']> },
      ) => parseResponse(client.instances[':instanceId'].plugins.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetInstancesInstanceIdPluginsPluginSlugOrIdKey(
  args: InferRequestType<
    (typeof client.instances)[':instanceId']['plugins'][':pluginSlugOrId']['$get']
  >,
) {
  return ['instances', '/instances/:instanceId/plugins/:pluginSlugOrId', args] as const
}

export function useGetInstancesInstanceIdPluginsPluginSlugOrId<TError = unknown>(
  args: InferRequestType<
    (typeof client.instances)[':instanceId']['plugins'][':pluginSlugOrId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.instances)[':instanceId']['plugins'][':pluginSlugOrId']['$get']
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
        ? getGetInstancesInstanceIdPluginsPluginSlugOrIdKey(args)
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
                (typeof client.instances)[':instanceId']['plugins'][':pluginSlugOrId']['$get']
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
          client.instances[':instanceId'].plugins[':pluginSlugOrId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetInstancesInstanceIdPluginsPluginSlugOrId<TError = unknown>(
  args: InferRequestType<
    (typeof client.instances)[':instanceId']['plugins'][':pluginSlugOrId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.instances)[':instanceId']['plugins'][':pluginSlugOrId']['$get']
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
        ? getGetInstancesInstanceIdPluginsPluginSlugOrIdKey(args)
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
                (typeof client.instances)[':instanceId']['plugins'][':pluginSlugOrId']['$get']
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
          client.instances[':instanceId'].plugins[':pluginSlugOrId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostInstancesInstanceIdPluginsPluginSlugOrIdKey() {
  return ['instances', '/instances/:instanceId/plugins/:pluginSlugOrId', 'POST'] as const
}

export function usePostInstancesInstanceIdPluginsPluginSlugOrId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.instances)[':instanceId']['plugins'][':pluginSlugOrId']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.instances)[':instanceId']['plugins'][':pluginSlugOrId']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostInstancesInstanceIdPluginsPluginSlugOrIdKey()
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
            (typeof client.instances)[':instanceId']['plugins'][':pluginSlugOrId']['$post']
          >
        },
      ) =>
        parseResponse(
          client.instances[':instanceId'].plugins[':pluginSlugOrId'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteInstancesInstanceIdPluginsPluginSlugOrIdKey() {
  return ['instances', '/instances/:instanceId/plugins/:pluginSlugOrId', 'DELETE'] as const
}

export function useDeleteInstancesInstanceIdPluginsPluginSlugOrId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.instances)[':instanceId']['plugins'][':pluginSlugOrId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.instances)[':instanceId']['plugins'][':pluginSlugOrId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteInstancesInstanceIdPluginsPluginSlugOrIdKey()
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
            (typeof client.instances)[':instanceId']['plugins'][':pluginSlugOrId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.instances[':instanceId'].plugins[':pluginSlugOrId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetInstancesInstanceIdReadinessKey(
  args: InferRequestType<(typeof client.instances)[':instanceId']['readiness']['$get']>,
) {
  return ['instances', '/instances/:instanceId/readiness', args] as const
}

export function useGetInstancesInstanceIdReadiness<TError = unknown>(
  args: InferRequestType<(typeof client.instances)[':instanceId']['readiness']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.instances)[':instanceId']['readiness']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetInstancesInstanceIdReadinessKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.instances)[':instanceId']['readiness']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.instances[':instanceId'].readiness.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetInstancesInstanceIdReadiness<TError = unknown>(
  args: InferRequestType<(typeof client.instances)[':instanceId']['readiness']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.instances)[':instanceId']['readiness']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetInstancesInstanceIdReadinessKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.instances)[':instanceId']['readiness']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.instances[':instanceId'].readiness.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetOrgStackRegionsKey(
  args: InferRequestType<(typeof client)['org-stack-regions']['$get']>,
) {
  return ['org-stack-regions', '/org-stack-regions', args] as const
}

export function useGetOrgStackRegions<TError = unknown>(
  args: InferRequestType<(typeof client)['org-stack-regions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['org-stack-regions']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOrgStackRegionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['org-stack-regions']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['org-stack-regions'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrgStackRegions<TError = unknown>(
  args: InferRequestType<(typeof client)['org-stack-regions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['org-stack-regions']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOrgStackRegionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['org-stack-regions']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['org-stack-regions'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetOrgsOrgSlugOrIdBilledUsageKey(
  args: InferRequestType<(typeof client.orgs)[':orgSlugOrId']['billed-usage']['$get']>,
) {
  return ['orgs', '/orgs/:orgSlugOrId/billed-usage', args] as const
}

export function useGetOrgsOrgSlugOrIdBilledUsage<TError = unknown>(
  args: InferRequestType<(typeof client.orgs)[':orgSlugOrId']['billed-usage']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.orgs)[':orgSlugOrId']['billed-usage']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOrgsOrgSlugOrIdBilledUsageKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.orgs)[':orgSlugOrId']['billed-usage']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.orgs[':orgSlugOrId']['billed-usage'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrgsOrgSlugOrIdBilledUsage<TError = unknown>(
  args: InferRequestType<(typeof client.orgs)[':orgSlugOrId']['billed-usage']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.orgs)[':orgSlugOrId']['billed-usage']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOrgsOrgSlugOrIdBilledUsageKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.orgs)[':orgSlugOrId']['billed-usage']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.orgs[':orgSlugOrId']['billed-usage'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetOrgsOrgSlugOrIdBilledUsageHistoryKey(
  args: InferRequestType<(typeof client.orgs)[':orgSlugOrId']['billed-usage-history']['$get']>,
) {
  return ['orgs', '/orgs/:orgSlugOrId/billed-usage-history', args] as const
}

export function useGetOrgsOrgSlugOrIdBilledUsageHistory<TError = unknown>(
  args: InferRequestType<(typeof client.orgs)[':orgSlugOrId']['billed-usage-history']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.orgs)[':orgSlugOrId']['billed-usage-history']['$get']>
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
        ? getGetOrgsOrgSlugOrIdBilledUsageHistoryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.orgs)[':orgSlugOrId']['billed-usage-history']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.orgs[':orgSlugOrId']['billed-usage-history'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrgsOrgSlugOrIdBilledUsageHistory<TError = unknown>(
  args: InferRequestType<(typeof client.orgs)[':orgSlugOrId']['billed-usage-history']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.orgs)[':orgSlugOrId']['billed-usage-history']['$get']>
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
        ? getGetOrgsOrgSlugOrIdBilledUsageHistoryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.orgs)[':orgSlugOrId']['billed-usage-history']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.orgs[':orgSlugOrId']['billed-usage-history'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetOrgsOrgSlugInstancesKey(
  args: InferRequestType<(typeof client.orgs)[':orgSlug']['instances']['$get']>,
) {
  return ['orgs', '/orgs/:orgSlug/instances', args] as const
}

export function useGetOrgsOrgSlugInstances<TError = unknown>(
  args: InferRequestType<(typeof client.orgs)[':orgSlug']['instances']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.orgs)[':orgSlug']['instances']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOrgsOrgSlugInstancesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.orgs)[':orgSlug']['instances']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.orgs[':orgSlug'].instances.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrgsOrgSlugInstances<TError = unknown>(
  args: InferRequestType<(typeof client.orgs)[':orgSlug']['instances']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.orgs)[':orgSlug']['instances']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOrgsOrgSlugInstancesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.orgs)[':orgSlug']['instances']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.orgs[':orgSlug'].instances.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetOrgsSlugOrIdKey(
  args: InferRequestType<(typeof client.orgs)[':slugOrId']['$get']>,
) {
  return ['orgs', '/orgs/:slugOrId', args] as const
}

export function useGetOrgsSlugOrId<TError = unknown>(
  args: InferRequestType<(typeof client.orgs)[':slugOrId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.orgs)[':slugOrId']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetOrgsSlugOrIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.orgs)[':slugOrId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.orgs[':slugOrId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrgsSlugOrId<TError = unknown>(
  args: InferRequestType<(typeof client.orgs)[':slugOrId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.orgs)[':slugOrId']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetOrgsSlugOrIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.orgs)[':slugOrId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.orgs[':slugOrId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetOrgsSlugOrIdCheckVisibilityKey(
  args: InferRequestType<(typeof client.orgs)[':slugOrId']['check-visibility']['$get']>,
) {
  return ['orgs', '/orgs/:slugOrId/check-visibility', args] as const
}

export function useGetOrgsSlugOrIdCheckVisibility<TError = unknown>(
  args: InferRequestType<(typeof client.orgs)[':slugOrId']['check-visibility']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.orgs)[':slugOrId']['check-visibility']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOrgsSlugOrIdCheckVisibilityKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.orgs)[':slugOrId']['check-visibility']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.orgs[':slugOrId']['check-visibility'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrgsSlugOrIdCheckVisibility<TError = unknown>(
  args: InferRequestType<(typeof client.orgs)[':slugOrId']['check-visibility']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.orgs)[':slugOrId']['check-visibility']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOrgsSlugOrIdCheckVisibilityKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.orgs)[':slugOrId']['check-visibility']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.orgs[':slugOrId']['check-visibility'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetOrgsSlugOrIdMembersKey(
  args: InferRequestType<(typeof client.orgs)[':slugOrId']['members']['$get']>,
) {
  return ['orgs', '/orgs/:slugOrId/members', args] as const
}

export function useGetOrgsSlugOrIdMembers<TError = unknown>(
  args: InferRequestType<(typeof client.orgs)[':slugOrId']['members']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.orgs)[':slugOrId']['members']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOrgsSlugOrIdMembersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.orgs)[':slugOrId']['members']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.orgs[':slugOrId'].members.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrgsSlugOrIdMembers<TError = unknown>(
  args: InferRequestType<(typeof client.orgs)[':slugOrId']['members']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.orgs)[':slugOrId']['members']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOrgsSlugOrIdMembersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.orgs)[':slugOrId']['members']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.orgs[':slugOrId'].members.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostOrgsSlugOrIdMembersKey() {
  return ['orgs', '/orgs/:slugOrId/members', 'POST'] as const
}

export function usePostOrgsSlugOrIdMembers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.orgs)[':slugOrId']['members']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.orgs)[':slugOrId']['members']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOrgsSlugOrIdMembersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.orgs)[':slugOrId']['members']['$post']> },
      ) => parseResponse(client.orgs[':slugOrId'].members.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetOrgsSlugOrIdMembersUsernameOrIdKey(
  args: InferRequestType<(typeof client.orgs)[':slugOrId']['members'][':usernameOrId']['$get']>,
) {
  return ['orgs', '/orgs/:slugOrId/members/:usernameOrId', args] as const
}

export function useGetOrgsSlugOrIdMembersUsernameOrId<TError = unknown>(
  args: InferRequestType<(typeof client.orgs)[':slugOrId']['members'][':usernameOrId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.orgs)[':slugOrId']['members'][':usernameOrId']['$get']>
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
        ? getGetOrgsSlugOrIdMembersUsernameOrIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.orgs)[':slugOrId']['members'][':usernameOrId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.orgs[':slugOrId'].members[':usernameOrId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrgsSlugOrIdMembersUsernameOrId<TError = unknown>(
  args: InferRequestType<(typeof client.orgs)[':slugOrId']['members'][':usernameOrId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.orgs)[':slugOrId']['members'][':usernameOrId']['$get']>
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
        ? getGetOrgsSlugOrIdMembersUsernameOrIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.orgs)[':slugOrId']['members'][':usernameOrId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.orgs[':slugOrId'].members[':usernameOrId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostOrgsSlugOrIdMembersUsernameOrIdKey() {
  return ['orgs', '/orgs/:slugOrId/members/:usernameOrId', 'POST'] as const
}

export function usePostOrgsSlugOrIdMembersUsernameOrId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.orgs)[':slugOrId']['members'][':usernameOrId']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.orgs)[':slugOrId']['members'][':usernameOrId']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOrgsSlugOrIdMembersUsernameOrIdKey()
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
            (typeof client.orgs)[':slugOrId']['members'][':usernameOrId']['$post']
          >
        },
      ) =>
        parseResponse(client.orgs[':slugOrId'].members[':usernameOrId'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteOrgsSlugOrIdMembersUsernameOrIdKey() {
  return ['orgs', '/orgs/:slugOrId/members/:usernameOrId', 'DELETE'] as const
}

export function useDeleteOrgsSlugOrIdMembersUsernameOrId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.orgs)[':slugOrId']['members'][':usernameOrId']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.orgs)[':slugOrId']['members'][':usernameOrId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteOrgsSlugOrIdMembersUsernameOrIdKey()
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
            (typeof client.orgs)[':slugOrId']['members'][':usernameOrId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.orgs[':slugOrId'].members[':usernameOrId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetOrgsSlugOrIdSettingsKey(
  args: InferRequestType<(typeof client.orgs)[':slugOrId']['settings']['$get']>,
) {
  return ['orgs', '/orgs/:slugOrId/settings', args] as const
}

export function useGetOrgsSlugOrIdSettings<TError = unknown>(
  args: InferRequestType<(typeof client.orgs)[':slugOrId']['settings']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.orgs)[':slugOrId']['settings']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOrgsSlugOrIdSettingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.orgs)[':slugOrId']['settings']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.orgs[':slugOrId'].settings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrgsSlugOrIdSettings<TError = unknown>(
  args: InferRequestType<(typeof client.orgs)[':slugOrId']['settings']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.orgs)[':slugOrId']['settings']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOrgsSlugOrIdSettingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.orgs)[':slugOrId']['settings']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.orgs[':slugOrId'].settings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostOrgsSlugOrIdSettingsKey() {
  return ['orgs', '/orgs/:slugOrId/settings', 'POST'] as const
}

export function usePostOrgsSlugOrIdSettings<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.orgs)[':slugOrId']['settings']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.orgs)[':slugOrId']['settings']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOrgsSlugOrIdSettingsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.orgs)[':slugOrId']['settings']['$post']> },
      ) => parseResponse(client.orgs[':slugOrId'].settings.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostPluginsMarketplaceLicensesRenewKey() {
  return ['plugins-marketplace', '/plugins-marketplace/licenses/renew', 'POST'] as const
}

export function usePostPluginsMarketplaceLicensesRenew<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['plugins-marketplace']['licenses']['renew']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['plugins-marketplace']['licenses']['renew']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPluginsMarketplaceLicensesRenewKey()
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
            (typeof client)['plugins-marketplace']['licenses']['renew']['$post']
          >
        },
      ) => parseResponse(client['plugins-marketplace'].licenses.renew.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPluginsSlugKey(
  args: InferRequestType<(typeof client.plugins)[':slug']['$get']>,
) {
  return ['plugins', '/plugins/:slug', args] as const
}

export function useGetPluginsSlug<TError = unknown>(
  args: InferRequestType<(typeof client.plugins)[':slug']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.plugins)[':slug']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPluginsSlugKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.plugins)[':slug']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.plugins[':slug'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPluginsSlug<TError = unknown>(
  args: InferRequestType<(typeof client.plugins)[':slug']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.plugins)[':slug']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPluginsSlugKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.plugins)[':slug']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.plugins[':slug'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetStackRegionsKey(
  args: InferRequestType<(typeof client)['stack-regions']['$get']>,
) {
  return ['stack-regions', '/stack-regions', args] as const
}

export function useGetStackRegions<TError = unknown>(
  args: InferRequestType<(typeof client)['stack-regions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['stack-regions']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetStackRegionsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['stack-regions']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['stack-regions'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStackRegions<TError = unknown>(
  args: InferRequestType<(typeof client)['stack-regions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['stack-regions']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetStackRegionsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['stack-regions']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['stack-regions'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetStackRegionsClosestKey(
  args: InferRequestType<(typeof client)['stack-regions']['closest']['$get']>,
) {
  return ['stack-regions', '/stack-regions/closest', args] as const
}

export function useGetStackRegionsClosest<TError = unknown>(
  args: InferRequestType<(typeof client)['stack-regions']['closest']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['stack-regions']['closest']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetStackRegionsClosestKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['stack-regions']['closest']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['stack-regions'].closest.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStackRegionsClosest<TError = unknown>(
  args: InferRequestType<(typeof client)['stack-regions']['closest']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['stack-regions']['closest']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetStackRegionsClosestKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['stack-regions']['closest']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['stack-regions'].closest.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1AccesspoliciesKey(
  args: InferRequestType<typeof client.v1.accesspolicies.$get>,
) {
  return ['v1', '/v1/accesspolicies', args] as const
}

export function useGetV1Accesspolicies<TError = unknown>(
  args: InferRequestType<typeof client.v1.accesspolicies.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.accesspolicies.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1AccesspoliciesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.accesspolicies.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.accesspolicies.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1Accesspolicies<TError = unknown>(
  args: InferRequestType<typeof client.v1.accesspolicies.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.accesspolicies.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1AccesspoliciesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.accesspolicies.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.accesspolicies.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1AccesspoliciesKey() {
  return ['v1', '/v1/accesspolicies', 'POST'] as const
}

export function usePostV1Accesspolicies<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.accesspolicies.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.accesspolicies.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1AccesspoliciesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.accesspolicies.$post> }) =>
        parseResponse(client.v1.accesspolicies.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1AccesspoliciesConfigKey(
  args: InferRequestType<typeof client.v1.accesspolicies.config.$get>,
) {
  return ['v1', '/v1/accesspolicies/config', args] as const
}

export function useGetV1AccesspoliciesConfig<TError = unknown>(
  args: InferRequestType<typeof client.v1.accesspolicies.config.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.accesspolicies.config.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1AccesspoliciesConfigKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.accesspolicies.config.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.accesspolicies.config.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AccesspoliciesConfig<TError = unknown>(
  args: InferRequestType<typeof client.v1.accesspolicies.config.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.accesspolicies.config.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1AccesspoliciesConfigKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.accesspolicies.config.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.accesspolicies.config.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1AccesspoliciesIdKey(
  args: InferRequestType<(typeof client.v1.accesspolicies)[':id']['$get']>,
) {
  return ['v1', '/v1/accesspolicies/:id', args] as const
}

export function useGetV1AccesspoliciesId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.accesspolicies)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.accesspolicies)[':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1AccesspoliciesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.accesspolicies)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.accesspolicies[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AccesspoliciesId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.accesspolicies)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.accesspolicies)[':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1AccesspoliciesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.accesspolicies)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.accesspolicies[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1AccesspoliciesIdKey() {
  return ['v1', '/v1/accesspolicies/:id', 'POST'] as const
}

export function usePostV1AccesspoliciesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.accesspolicies)[':id']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.accesspolicies)[':id']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1AccesspoliciesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.accesspolicies)[':id']['$post']> },
      ) => parseResponse(client.v1.accesspolicies[':id'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1AccesspoliciesIdKey() {
  return ['v1', '/v1/accesspolicies/:id', 'DELETE'] as const
}

export function useDeleteV1AccesspoliciesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.accesspolicies)[':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.accesspolicies)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1AccesspoliciesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.accesspolicies)[':id']['$delete']> },
      ) => parseResponse(client.v1.accesspolicies[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1TokensKey(args: InferRequestType<typeof client.v1.tokens.$get>) {
  return ['v1', '/v1/tokens', args] as const
}

export function useGetV1Tokens<TError = unknown>(
  args: InferRequestType<typeof client.v1.tokens.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.tokens.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1TokensKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.tokens.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.tokens.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1Tokens<TError = unknown>(
  args: InferRequestType<typeof client.v1.tokens.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.tokens.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1TokensKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.tokens.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.tokens.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1TokensKey() {
  return ['v1', '/v1/tokens', 'POST'] as const
}

export function usePostV1Tokens<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.tokens.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.v1.tokens.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1TokensKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.tokens.$post> }) =>
        parseResponse(client.v1.tokens.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1TokensIdKey(
  args: InferRequestType<(typeof client.v1.tokens)[':id']['$get']>,
) {
  return ['v1', '/v1/tokens/:id', args] as const
}

export function useGetV1TokensId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.tokens)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.tokens)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1TokensIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.tokens)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.tokens[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1TokensId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.tokens)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.tokens)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1TokensIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.tokens)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.tokens[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1TokensIdKey() {
  return ['v1', '/v1/tokens/:id', 'POST'] as const
}

export function usePostV1TokensId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.tokens)[':id']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.tokens)[':id']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1TokensIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.tokens)[':id']['$post']> },
      ) => parseResponse(client.v1.tokens[':id'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1TokensIdKey() {
  return ['v1', '/v1/tokens/:id', 'DELETE'] as const
}

export function useDeleteV1TokensId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.tokens)[':id']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.tokens)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1TokensIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.tokens)[':id']['$delete']> },
      ) => parseResponse(client.v1.tokens[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetInstancesInstanceIdConnectionsKey(
  args: InferRequestType<(typeof client.instances)[':instanceId']['connections']['$get']>,
) {
  return ['instances', '/instances/:instanceId/connections', args] as const
}

export function useGetInstancesInstanceIdConnections<TError = unknown>(
  args: InferRequestType<(typeof client.instances)[':instanceId']['connections']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.instances)[':instanceId']['connections']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetInstancesInstanceIdConnectionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.instances)[':instanceId']['connections']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.instances[':instanceId'].connections.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetInstancesInstanceIdConnections<TError = unknown>(
  args: InferRequestType<(typeof client.instances)[':instanceId']['connections']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.instances)[':instanceId']['connections']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetInstancesInstanceIdConnectionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.instances)[':instanceId']['connections']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.instances[':instanceId'].connections.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1StacksKey(args: InferRequestType<typeof client.v1.stacks.$get>) {
  return ['v1', '/v1/stacks', args] as const
}

export function useGetV1Stacks<TError = unknown>(
  args: InferRequestType<typeof client.v1.stacks.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.stacks.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1StacksKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.stacks.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.stacks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1Stacks<TError = unknown>(
  args: InferRequestType<typeof client.v1.stacks.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.stacks.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1StacksKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.stacks.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.stacks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1StacksKey() {
  return ['v1', '/v1/stacks', 'POST'] as const
}

export function usePostV1Stacks<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.stacks.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.v1.stacks.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1StacksKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.stacks.$post> }) =>
        parseResponse(client.v1.stacks.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1StacksCheckUrlKey() {
  return ['v1', '/v1/stacks/checkUrl', 'POST'] as const
}

export function usePostV1StacksCheckUrl<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.stacks.checkUrl.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.stacks.checkUrl.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1StacksCheckUrlKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.stacks.checkUrl.$post> }) =>
        parseResponse(client.v1.stacks.checkUrl.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1StacksIdOrSlugKey(
  args: InferRequestType<(typeof client.v1.stacks)[':idOrSlug']['$get']>,
) {
  return ['v1', '/v1/stacks/:idOrSlug', args] as const
}

export function useGetV1StacksIdOrSlug<TError = unknown>(
  args: InferRequestType<(typeof client.v1.stacks)[':idOrSlug']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.stacks)[':idOrSlug']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1StacksIdOrSlugKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.stacks)[':idOrSlug']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.stacks[':idOrSlug'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1StacksIdOrSlug<TError = unknown>(
  args: InferRequestType<(typeof client.v1.stacks)[':idOrSlug']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.stacks)[':idOrSlug']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1StacksIdOrSlugKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.stacks)[':idOrSlug']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.stacks[':idOrSlug'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1StacksIdOrSlugKey() {
  return ['v1', '/v1/stacks/:idOrSlug', 'POST'] as const
}

export function usePostV1StacksIdOrSlug<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.stacks)[':idOrSlug']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.stacks)[':idOrSlug']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1StacksIdOrSlugKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.stacks)[':idOrSlug']['$post']> },
      ) => parseResponse(client.v1.stacks[':idOrSlug'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1StacksIdOrSlugKey() {
  return ['v1', '/v1/stacks/:idOrSlug', 'DELETE'] as const
}

export function useDeleteV1StacksIdOrSlug<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.stacks)[':idOrSlug']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.stacks)[':idOrSlug']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1StacksIdOrSlugKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.stacks)[':idOrSlug']['$delete']> },
      ) => parseResponse(client.v1.stacks[':idOrSlug'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1StacksIdOrSlugConnectionsKey(
  args: InferRequestType<(typeof client.v1.stacks)[':idOrSlug']['connections']['$get']>,
) {
  return ['v1', '/v1/stacks/:idOrSlug/connections', args] as const
}

export function useGetV1StacksIdOrSlugConnections<TError = unknown>(
  args: InferRequestType<(typeof client.v1.stacks)[':idOrSlug']['connections']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.stacks)[':idOrSlug']['connections']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1StacksIdOrSlugConnectionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.stacks)[':idOrSlug']['connections']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.stacks[':idOrSlug'].connections.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1StacksIdOrSlugConnections<TError = unknown>(
  args: InferRequestType<(typeof client.v1.stacks)[':idOrSlug']['connections']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.stacks)[':idOrSlug']['connections']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1StacksIdOrSlugConnectionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.stacks)[':idOrSlug']['connections']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.stacks[':idOrSlug'].connections.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1StacksIdOrSlugReadinessKey(
  args: InferRequestType<(typeof client.v1.stacks)[':idOrSlug']['readiness']['$get']>,
) {
  return ['v1', '/v1/stacks/:idOrSlug/readiness', args] as const
}

export function useGetV1StacksIdOrSlugReadiness<TError = unknown>(
  args: InferRequestType<(typeof client.v1.stacks)[':idOrSlug']['readiness']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.stacks)[':idOrSlug']['readiness']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1StacksIdOrSlugReadinessKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.stacks)[':idOrSlug']['readiness']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.stacks[':idOrSlug'].readiness.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1StacksIdOrSlugReadiness<TError = unknown>(
  args: InferRequestType<(typeof client.v1.stacks)[':idOrSlug']['readiness']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.stacks)[':idOrSlug']['readiness']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1StacksIdOrSlugReadinessKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.stacks)[':idOrSlug']['readiness']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.stacks[':idOrSlug'].readiness.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetInstancesInstanceIdUsersKey(
  args: InferRequestType<(typeof client.instances)[':instanceId']['users']['$get']>,
) {
  return ['instances', '/instances/:instanceId/users', args] as const
}

export function useGetInstancesInstanceIdUsers<TError = unknown>(
  args: InferRequestType<(typeof client.instances)[':instanceId']['users']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.instances)[':instanceId']['users']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetInstancesInstanceIdUsersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.instances)[':instanceId']['users']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.instances[':instanceId'].users.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetInstancesInstanceIdUsers<TError = unknown>(
  args: InferRequestType<(typeof client.instances)[':instanceId']['users']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.instances)[':instanceId']['users']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetInstancesInstanceIdUsersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.instances)[':instanceId']['users']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.instances[':instanceId'].users.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}
